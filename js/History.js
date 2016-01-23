(function(e, t) {
  "use strict";
  var n = e.History = e.History || {},
    r = e.jQuery;
  if (typeof n.Adapter !== "undefined") {
    throw new Error("History.js Adapter has already been loaded...")
  }
  n.Adapter = {
    bind: function(e, t, n) {
      r(e).bind(t, n)
    },
    trigger: function(e, t, n) {
      r(e).trigger(t, n)
    },
    extractEventData: function(e, n, r) {
      var i = n && n.originalEvent && n.originalEvent[e] || r && r[e] ||
        t;
      return i
    },
    onDomLoad: function(e) {
      r(e)
    }
  };
  if (typeof n.init !== "undefined") {
    n.init()
  }
})(window);
(function(e, t) {
  "use strict";
  var n = e.console || t,
    r = e.document,
    i = e.navigator,
    s = false,
    o = e.setTimeout,
    u = e.clearTimeout,
    a = e.setInterval,
    f = e.clearInterval,
    l = e.JSON,
    c = e.alert,
    h = e.History = e.History || {},
    p = e.history;
  try {
    s = e.sessionStorage;
    s.setItem("TEST", "1");
    s.removeItem("TEST")
  } catch (d) {
    s = false
  }
  l.stringify = l.stringify || l.encode;
  l.parse = l.parse || l.decode;
  if (typeof h.init !== "undefined") {
    throw new Error("History.js Core has already been loaded...")
  }
  h.init = function(e) {
    if (typeof h.Adapter === "undefined") {
      return false
    }
    if (typeof h.initCore !== "undefined") {
      h.initCore()
    }
    if (typeof h.initHtml4 !== "undefined") {
      h.initHtml4()
    }
    return true
  };
  h.initCore = function(d) {
    if (typeof h.initCore.initialized !== "undefined") {
      return false
    } else {
      h.initCore.initialized = true
    }
    h.options = h.options || {};
    h.options.hashChangeInterval = h.options.hashChangeInterval || 100;
    h.options.safariPollInterval = h.options.safariPollInterval || 500;
    h.options.doubleCheckInterval = h.options.doubleCheckInterval || 500;
    h.options.disableSuid = h.options.disableSuid || false;
    h.options.storeInterval = h.options.storeInterval || 1e3;
    h.options.busyDelay = h.options.busyDelay || 250;
    h.options.debug = h.options.debug || false;
    h.options.initialTitle = h.options.initialTitle || r.title;
    h.options.html4Mode = h.options.html4Mode || false;
    h.options.delayInit = h.options.delayInit || false;
    h.intervalList = [];
    h.clearAllIntervals = function() {
      var e, t = h.intervalList;
      if (typeof t !== "undefined" && t !== null) {
        for (e = 0; e < t.length; e++) {
          f(t[e])
        }
        h.intervalList = null
      }
    };
    h.debug = function() {
      if (h.options.debug || false) {
        h.log.apply(h, arguments)
      }
    };
    h.log = function() {
      var e = !(typeof n === "undefined" || typeof n.log === "undefined" ||
          typeof n.log.apply === "undefined"),
        t = r.getElementById("log"),
        i, s, o, u, a;
      if (e) {
        u = Array.prototype.slice.call(arguments);
        i = u.shift();
        if (typeof n.debug !== "undefined") {
          n.debug.apply(n, [i, u])
        } else {
          n.log.apply(n, [i, u])
        }
      } else {
        i = "\n" + arguments[0] + "\n"
      }
      for (s = 1, o = arguments.length; s < o; ++s) {
        a = arguments[s];
        if (typeof a === "object" && typeof l !== "undefined") {
          try {
            a = l.stringify(a)
          } catch (f) {}
        }
        i += "\n" + a + "\n"
      }
      if (t) {
        t.value += i + "\n-----\n";
        t.scrollTop = t.scrollHeight - t.clientHeight
      } else if (!e) {
        c(i)
      }
      return true
    };
    h.getInternetExplorerMajorVersion = function() {
      var e = h.getInternetExplorerMajorVersion.cached = typeof h.getInternetExplorerMajorVersion
        .cached !== "undefined" ? h.getInternetExplorerMajorVersion.cached :
        function() {
          var e = 3,
            t = r.createElement("div"),
            n = t.getElementsByTagName("i");
          while ((t.innerHTML = "<!--[if gt IE " + ++e +
              "]><i></i><![endif]-->") && n[0]) {}
          return e > 4 ? e : false
        }();
      return e
    };
    h.isInternetExplorer = function() {
      var e = h.isInternetExplorer.cached = typeof h.isInternetExplorer.cached !==
        "undefined" ? h.isInternetExplorer.cached : Boolean(h.getInternetExplorerMajorVersion());
      return e
    };
    if (h.options.html4Mode) {
      h.emulated = {
        pushState: true,
        hashChange: true
      }
    } else {
      h.emulated = {
        pushState: !Boolean(e.history && e.history.pushState && e.history
          .replaceState && !(
            / Mobile\/([1-7][a-z]|(8([abcde]|f(1[0-8]))))/i.test(i.userAgent) ||
            /AppleWebKit\/5([0-2]|3[0-2])/i.test(i.userAgent))),
        hashChange: Boolean(!("onhashchange" in e || "onhashchange" in r) ||
          h.isInternetExplorer() && h.getInternetExplorerMajorVersion() <
          8)
      }
    }
    h.enabled = !h.emulated.pushState;
    h.bugs = {
      setHash: Boolean(!h.emulated.pushState && i.vendor ===
        "Apple Computer, Inc." && /AppleWebKit\/5([0-2]|3[0-3])/.test(i
          .userAgent)),
      safariPoll: Boolean(!h.emulated.pushState && i.vendor ===
        "Apple Computer, Inc." && /AppleWebKit\/5([0-2]|3[0-3])/.test(i
          .userAgent)),
      ieDoubleCheck: Boolean(h.isInternetExplorer() && h.getInternetExplorerMajorVersion() <
        8),
      hashEscape: Boolean(h.isInternetExplorer() && h.getInternetExplorerMajorVersion() <
        7)
    };
    h.isEmptyObject = function(e) {
      for (var t in e) {
        if (e.hasOwnProperty(t)) {
          return false
        }
      }
      return true
    };
    h.cloneObject = function(e) {
      var t, n;
      if (e) {
        t = l.stringify(e);
        n = l.parse(t)
      } else {
        n = {}
      }
      return n
    };
    h.getRootUrl = function() {
      var e = r.location.protocol + "//" + (r.location.hostname || r.location
        .host);
      if (r.location.port || false) {
        e += ":" + r.location.port
      }
      e += "/";
      return e
    };
    h.getBaseHref = function() {
      var e = r.getElementsByTagName("base"),
        t = null,
        n = "";
      if (e.length === 1) {
        t = e[0];
        n = t.href.replace(/[^\/]+$/, "")
      }
      n = n.replace(/\/+$/, "");
      if (n) n += "/";
      return n
    };
    h.getBaseUrl = function() {
      var e = h.getBaseHref() || h.getBasePageUrl() || h.getRootUrl();
      return e
    };
    h.getPageUrl = function() {
      var e = h.getState(false, false),
        t = (e || {}).url || h.getLocationHref(),
        n;
      n = t.replace(/\/+$/, "").replace(/[^\/]+$/, function(e, t, n) {
        return /\./.test(e) ? e : e + "/"
      });
      return n
    };
    h.getBasePageUrl = function() {
      var e = h.getLocationHref().replace(/[#\?].*/, "").replace(
        /[^\/]+$/,
        function(e, t, n) {
          return /[^\/]$/.test(e) ? "" : e
        }).replace(/\/+$/, "") + "/";
      return e
    };
    h.getFullUrl = function(e, t) {
      var n = e,
        r = e.substring(0, 1);
      t = typeof t === "undefined" ? true : t;
      if (/[a-z]+\:\/\//.test(e)) {} else if (r === "/") {
        n = h.getRootUrl() + e.replace(/^\/+/, "")
      } else if (r === "#") {
        n = h.getPageUrl().replace(/#.*/, "") + e
      } else if (r === "?") {
        n = h.getPageUrl().replace(/[\?#].*/, "") + e
      } else {
        if (t) {
          n = h.getBaseUrl() + e.replace(/^(\.\/)+/, "")
        } else {
          n = h.getBasePageUrl() + e.replace(/^(\.\/)+/, "")
        }
      }
      return n.replace(/\#$/, "")
    };
    h.getShortUrl = function(e) {
      var t = e,
        n = h.getBaseUrl(),
        r = h.getRootUrl();
      if (h.emulated.pushState) {
        t = t.replace(n, "")
      }
      t = t.replace(r, "/");
      if (h.isTraditionalAnchor(t)) {
        t = "./" + t
      }
      t = t.replace(/^(\.\/)+/g, "./").replace(/\#$/, "");
      return t
    };
    h.getLocationHref = function(e) {
      e = e || r;
      if (e.URL === e.location.href) return e.location.href;
      if (e.location.href === decodeURIComponent(e.URL)) return e.URL;
      if (e.location.hash && decodeURIComponent(e.location.href.replace(
          /^[^#]+/, "")) === e.location.hash) return e.location.href;
      if (e.URL.indexOf("#") == -1 && e.location.href.indexOf("#") != -1)
        return e.location.href;
      return e.URL || e.location.href
    };
    h.store = {};
    h.idToState = h.idToState || {};
    h.stateToId = h.stateToId || {};
    h.urlToId = h.urlToId || {};
    h.storedStates = h.storedStates || [];
    h.savedStates = h.savedStates || [];
    h.normalizeStore = function() {
      h.store.idToState = h.store.idToState || {};
      h.store.urlToId = h.store.urlToId || {};
      h.store.stateToId = h.store.stateToId || {}
    };
    h.getState = function(e, t) {
      if (typeof e === "undefined") {
        e = true
      }
      if (typeof t === "undefined") {
        t = true
      }
      var n = h.getLastSavedState();
      if (!n && t) {
        n = h.createStateObject()
      }
      if (e) {
        n = h.cloneObject(n);
        n.url = n.cleanUrl || n.url
      }
      return n
    };
    h.getIdByState = function(e) {
      var t = h.extractId(e.url),
        n;
      if (!t) {
        n = h.getStateString(e);
        if (typeof h.stateToId[n] !== "undefined") {
          t = h.stateToId[n]
        } else if (typeof h.store.stateToId[n] !== "undefined") {
          t = h.store.stateToId[n]
        } else {
          while (true) {
            t = (new Date).getTime() + String(Math.random()).replace(
              /\D/g, "");
            if (typeof h.idToState[t] === "undefined" && typeof h.store.idToState[
                t] === "undefined") {
              break
            }
          }
          h.stateToId[n] = t;
          h.idToState[t] = e
        }
      }
      return t
    };
    h.normalizeState = function(e) {
      var t, n;
      if (!e || typeof e !== "object") {
        e = {}
      }
      if (typeof e.normalized !== "undefined") {
        return e
      }
      if (!e.data || typeof e.data !== "object") {
        e.data = {}
      }
      t = {};
      t.normalized = true;
      t.title = e.title || "";
      t.url = h.getFullUrl(e.url ? e.url : h.getLocationHref());
      t.hash = h.getShortUrl(t.url);
      t.data = h.cloneObject(e.data);
      t.id = h.getIdByState(t);
      t.cleanUrl = t.url.replace(/\??\&_suid.*/, "");
      t.url = t.cleanUrl;
      n = !h.isEmptyObject(t.data);
      if ((t.title || n) && h.options.disableSuid !== true) {
        t.hash = h.getShortUrl(t.url).replace(/\??\&_suid.*/, "");
        if (!/\?/.test(t.hash)) {
          t.hash += "?"
        }
        t.hash += "&_suid=" + t.id
      }
      t.hashedUrl = h.getFullUrl(t.hash);
      if ((h.emulated.pushState || h.bugs.safariPoll) && h.hasUrlDuplicate(
          t)) {
        t.url = t.hashedUrl
      }
      return t
    };
    h.createStateObject = function(e, t, n) {
      var r = {
        data: e,
        title: t,
        url: n
      };
      r = h.normalizeState(r);
      return r
    };
    h.getStateById = function(e) {
      e = String(e);
      var n = h.idToState[e] || h.store.idToState[e] || t;
      return n
    };
    h.getStateString = function(e) {
      var t, n, r;
      t = h.normalizeState(e);
      n = {
        data: t.data,
        title: e.title,
        url: e.url
      };
      r = l.stringify(n);
      return r
    };
    h.getStateId = function(e) {
      var t, n;
      t = h.normalizeState(e);
      n = t.id;
      return n
    };
    h.getHashByState = function(e) {
      var t, n;
      t = h.normalizeState(e);
      n = t.hash;
      return n
    };
    h.extractId = function(e) {
      var t, n, r, i;
      if (e.indexOf("#") != -1) {
        i = e.split("#")[0]
      } else {
        i = e
      }
      n = /(.*)\&_suid=([0-9]+)$/.exec(i);
      r = n ? n[1] || e : e;
      t = n ? String(n[2] || "") : "";
      return t || false
    };
    h.isTraditionalAnchor = function(e) {
      var t = !/[\/\?\.]/.test(e);
      return t
    };
    h.extractState = function(e, t) {
      var n = null,
        r, i;
      t = t || false;
      r = h.extractId(e);
      if (r) {
        n = h.getStateById(r)
      }
      if (!n) {
        i = h.getFullUrl(e);
        r = h.getIdByUrl(i) || false;
        if (r) {
          n = h.getStateById(r)
        }
        if (!n && t && !h.isTraditionalAnchor(e)) {
          n = h.createStateObject(null, null, i)
        }
      }
      return n
    };
    h.getIdByUrl = function(e) {
      var n = h.urlToId[e] || h.store.urlToId[e] || t;
      return n
    };
    h.getLastSavedState = function() {
      return h.savedStates[h.savedStates.length - 1] || t
    };
    h.getLastStoredState = function() {
      return h.storedStates[h.storedStates.length - 1] || t
    };
    h.hasUrlDuplicate = function(e) {
      var t = false,
        n;
      n = h.extractState(e.url);
      t = n && n.id !== e.id;
      return t
    };
    h.storeState = function(e) {
      h.urlToId[e.url] = e.id;
      h.storedStates.push(h.cloneObject(e));
      return e
    };
    h.isLastSavedState = function(e) {
      var t = false,
        n, r, i;
      if (h.savedStates.length) {
        n = e.id;
        r = h.getLastSavedState();
        i = r.id;
        t = n === i
      }
      return t
    };
    h.saveState = function(e) {
      if (h.isLastSavedState(e)) {
        return false
      }
      h.savedStates.push(h.cloneObject(e));
      return true
    };
    h.getStateByIndex = function(e) {
      var t = null;
      if (typeof e === "undefined") {
        t = h.savedStates[h.savedStates.length - 1]
      } else if (e < 0) {
        t = h.savedStates[h.savedStates.length + e]
      } else {
        t = h.savedStates[e]
      }
      return t
    };
    h.getCurrentIndex = function() {
      var e = null;
      if (h.savedStates.length < 1) {
        e = 0
      } else {
        e = h.savedStates.length - 1
      }
      return e
    };
    h.getHash = function(e) {
      var t = h.getLocationHref(e),
        n;
      n = h.getHashByUrl(t);
      return n
    };
    h.unescapeHash = function(e) {
      var t = h.normalizeHash(e);
      t = decodeURIComponent(t);
      return t
    };
    h.normalizeHash = function(e) {
      var t = e.replace(/[^#]*#/, "").replace(/#.*/, "");
      return t
    };
    h.setHash = function(e, t) {
      var n, i;
      if (t !== false && h.busy()) {
        h.pushQueue({
          scope: h,
          callback: h.setHash,
          args: arguments,
          queue: t
        });
        return false
      }
      h.busy(true);
      n = h.extractState(e, true);
      if (n && !h.emulated.pushState) {
        h.pushState(n.data, n.title, n.url, false)
      } else if (h.getHash() !== e) {
        if (h.bugs.setHash) {
          i = h.getPageUrl();
          h.pushState(null, null, i + "#" + e, false)
        } else {
          r.location.hash = e
        }
      }
      return h
    };
    h.escapeHash = function(t) {
      var n = h.normalizeHash(t);
      n = e.encodeURIComponent(n);
      if (!h.bugs.hashEscape) {
        n = n.replace(/\%21/g, "!").replace(/\%26/g, "&").replace(/\%3D/g,
          "=").replace(/\%3F/g, "?")
      }
      return n
    };
    h.getHashByUrl = function(e) {
      var t = String(e).replace(/([^#]*)#?([^#]*)#?(.*)/, "$2");
      t = h.unescapeHash(t);
      return t
    };
    h.setTitle = function(e) {
      var t = e.title,
        n;
      if (!t) {
        n = h.getStateByIndex(0);
        if (n && n.url === e.url) {
          t = n.title || h.options.initialTitle
        }
      }
      try {
        r.getElementsByTagName("title")[0].innerHTML = t.replace("<",
          "&lt;").replace(">", "&gt;").replace(" & ", " & ")
      } catch (i) {}
      r.title = t;
      return h
    };
    h.queues = [];
    h.busy = function(e) {
      if (typeof e !== "undefined") {
        h.busy.flag = e
      } else if (typeof h.busy.flag === "undefined") {
        h.busy.flag = false
      }
      if (!h.busy.flag) {
        u(h.busy.timeout);
        var t = function() {
          var e, n, r;
          if (h.busy.flag) return;
          for (e = h.queues.length - 1; e >= 0; --e) {
            n = h.queues[e];
            if (n.length === 0) continue;
            r = n.shift();
            h.fireQueueItem(r);
            h.busy.timeout = o(t, h.options.busyDelay)
          }
        };
        h.busy.timeout = o(t, h.options.busyDelay)
      }
      return h.busy.flag
    };
    h.busy.flag = false;
    h.fireQueueItem = function(e) {
      return e.callback.apply(e.scope || h, e.args || [])
    };
    h.pushQueue = function(e) {
      h.queues[e.queue || 0] = h.queues[e.queue || 0] || [];
      h.queues[e.queue || 0].push(e);
      return h
    };
    h.queue = function(e, t) {
      if (typeof e === "function") {
        e = {
          callback: e
        }
      }
      if (typeof t !== "undefined") {
        e.queue = t
      }
      if (h.busy()) {
        h.pushQueue(e)
      } else {
        h.fireQueueItem(e)
      }
      return h
    };
    h.clearQueue = function() {
      h.busy.flag = false;
      h.queues = [];
      return h
    };
    h.stateChanged = false;
    h.doubleChecker = false;
    h.doubleCheckComplete = function() {
      h.stateChanged = true;
      h.doubleCheckClear();
      return h
    };
    h.doubleCheckClear = function() {
      if (h.doubleChecker) {
        u(h.doubleChecker);
        h.doubleChecker = false
      }
      return h
    };
    h.doubleCheck = function(e) {
      h.stateChanged = false;
      h.doubleCheckClear();
      if (h.bugs.ieDoubleCheck) {
        h.doubleChecker = o(function() {
          h.doubleCheckClear();
          if (!h.stateChanged) {
            e()
          }
          return true
        }, h.options.doubleCheckInterval)
      }
      return h
    };
    h.safariStatePoll = function() {
      var t = h.extractState(h.getLocationHref()),
        n;
      if (!h.isLastSavedState(t)) {
        n = t
      } else {
        return
      }
      if (!n) {
        n = h.createStateObject()
      }
      h.Adapter.trigger(e, "popstate");
      return h
    };
    h.back = function(e) {
      if (e !== false && h.busy()) {
        h.pushQueue({
          scope: h,
          callback: h.back,
          args: arguments,
          queue: e
        });
        return false
      }
      h.busy(true);
      h.doubleCheck(function() {
        h.back(false)
      });
      p.go(-1);
      return true
    };
    h.forward = function(e) {
      if (e !== false && h.busy()) {
        h.pushQueue({
          scope: h,
          callback: h.forward,
          args: arguments,
          queue: e
        });
        return false
      }
      h.busy(true);
      h.doubleCheck(function() {
        h.forward(false)
      });
      p.go(1);
      return true
    };
    h.go = function(e, t) {
      var n;
      if (e > 0) {
        for (n = 1; n <= e; ++n) {
          h.forward(t)
        }
      } else if (e < 0) {
        for (n = -1; n >= e; --n) {
          h.back(t)
        }
      } else {
        throw new Error(
          "History.go: History.go requires a positive or negative integer passed."
        )
      }
      return h
    };
    if (h.emulated.pushState) {
      var v = function() {};
      h.pushState = h.pushState || v;
      h.replaceState = h.replaceState || v
    } else {
      h.onPopState = function(t, n) {
        var r = false,
          i = false,
          s, o, u = false;
        h.doubleCheckComplete();
        s = h.getHash();
        if (s) {
          o = h.extractState(s || h.getLocationHref(), true);
          if (o) {
            h.replaceState(o.data, o.title, o.url, false)
          } else {
            h.Adapter.trigger(e, "anchorchange");
            h.busy(false)
          }
          h.expectedStateId = false;
          return false
        }
        r = h.Adapter.extractEventData("state", t, n) || false;
        if (r) {
          i = h.getStateById(r);
          u = true
        } else if (h.expectedStateId) {
          i = h.getStateById(h.expectedStateId)
        } else {
          i = h.extractState(h.getLocationHref())
        }
        if (!i) {
          i = h.createStateObject(null, null, h.getLocationHref())
        }
        h.expectedStateId = false;
        if (h.isLastSavedState(i)) {
          h.busy(false);
          return false
        }
        i.internal = u;
        h.storeState(i);
        h.saveState(i);
        h.setTitle(i);
        h.Adapter.trigger(e, "statechange");
        h.busy(false);
        return true
      };
      h.Adapter.bind(e, "popstate", h.onPopState);
      h.pushState = function(t, n, r, i) {
        if (h.getHashByUrl(r) && h.emulated.pushState) {
          throw new Error(
            "History.js does not support states with fragement-identifiers (hashes/anchors)."
          )
        }
        if (i !== false && h.busy()) {
          h.pushQueue({
            scope: h,
            callback: h.pushState,
            args: arguments,
            queue: i
          });
          return false
        }
        h.busy(true);
        var s = h.createStateObject(t, n, r);
        if (h.isLastSavedState(s)) {
          h.busy(false)
        } else {
          h.storeState(s);
          h.expectedStateId = s.id;
          p.pushState(s.id, s.title, s.url);
          h.Adapter.trigger(e, "popstate")
        }
        return true
      };
      h.replaceState = function(t, n, r, i) {
        if (h.getHashByUrl(r) && h.emulated.pushState) {
          throw new Error(
            "History.js does not support states with fragement-identifiers (hashes/anchors)."
          )
        }
        if (i !== false && h.busy()) {
          h.pushQueue({
            scope: h,
            callback: h.replaceState,
            args: arguments,
            queue: i
          });
          return false
        }
        h.busy(true);
        var s = h.createStateObject(t, n, r);
        if (h.isLastSavedState(s)) {
          h.busy(false)
        } else {
          h.storeState(s);
          h.expectedStateId = s.id;
          p.replaceState(s.id, s.title, s.url);
          h.Adapter.trigger(e, "popstate")
        }
        return true
      }
    }
    if (s) {
      try {
        h.store = l.parse(s.getItem("History.store")) || {}
      } catch (m) {
        h.store = {}
      }
      h.normalizeStore()
    } else {
      h.store = {};
      h.normalizeStore()
    }
    h.Adapter.bind(e, "unload", h.clearAllIntervals);
    h.saveState(h.storeState(h.extractState(h.getLocationHref(), true)));
    if (s) {
      h.onUnload = function() {
        var e, t, n;
        try {
          e = l.parse(s.getItem("History.store")) || {}
        } catch (r) {
          e = {}
        }
        e.idToState = e.idToState || {};
        e.urlToId = e.urlToId || {};
        e.stateToId = e.stateToId || {};
        for (t in h.idToState) {
          if (!h.idToState.hasOwnProperty(t)) {
            continue
          }
          e.idToState[t] = h.idToState[t]
        }
        for (t in h.urlToId) {
          if (!h.urlToId.hasOwnProperty(t)) {
            continue
          }
          e.urlToId[t] = h.urlToId[t]
        }
        for (t in h.stateToId) {
          if (!h.stateToId.hasOwnProperty(t)) {
            continue
          }
          e.stateToId[t] = h.stateToId[t]
        }
        h.store = e;
        h.normalizeStore();
        n = l.stringify(e);
        try {
          s.setItem("History.store", n)
        } catch (i) {
          if (i.code === DOMException.QUOTA_EXCEEDED_ERR) {
            if (s.length) {
              s.removeItem("History.store");
              s.setItem("History.store", n)
            } else {}
          } else {
            throw i
          }
        }
      };
      if (h.isInternetExplorer()) {
        h.intervalList.push(a(h.onUnload, h.options.storeInterval))
      }
      h.Adapter.bind(e, "beforeunload", h.onUnload);
      h.Adapter.bind(e, "unload", h.onUnload)
    }
    if (!h.emulated.pushState) {
      if (h.bugs.safariPoll) {
        h.intervalList.push(a(h.safariStatePoll, h.options.safariPollInterval))
      }
      if (i.vendor === "Apple Computer, Inc." || (i.appCodeName || "") ===
        "Mozilla") {
        h.Adapter.bind(e, "hashchange", function() {
          h.Adapter.trigger(e, "popstate")
        });
        if (h.getHash()) {
          h.Adapter.onDomLoad(function() {
            h.Adapter.trigger(e, "hashchange")
          })
        }
      }
    }
  };
  if (!h.options || !h.options.delayInit) {
    h.init()
  }
})(window)
