/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {global.jQuery = $ = __webpack_require__(1);

	// pick what tests you need
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"browsernizr/test/css/rgba\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"browsernizr/test/history\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"browsernizr/test/webgl\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"browsernizr/test/touchevents\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"browsernizr/test/canvas\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"browsernizr/test/geolocation\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"browsernizr\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	global.magnificPopup = __webpack_require__(3);

	global.pan = __webpack_require__(6);

	__webpack_require__(7);
	__webpack_require__(8);
	__webpack_require__(9);
	__webpack_require__(10);
	__webpack_require__(11);

	window.html2canvas = __webpack_require__(12);
	window.saveAs = __webpack_require__(13);


	var init = function() {
	  pan.dom.colourSets.pantone = pan.dom.pantone;

	  var name =
	    "Pantones of The Year 2000 - 2015";
	  var link = "http://www.pantone.com/color-of-the-year-2015";
	  var value = ["#98B4D4", "#C3447A", "#BC243C", "#7FCDCD", "#E15D44",
	    "#55B4B0",
	    "#DFCFBE", "#9B2335", "#5B5EA6", "#EFC050", "#45B8AC", "#D65076",
	    "#DD4124",
	    "#009B77", "#B565A7", "#955251"
	  ];
	  var pair = {
	    "name": name,
	    "value": value,
	    "link": link
	  }

	  pan.dom.colourSets.pantone.push(pair);


	  name = "Pantones of Fall 2015";
	  link = "http://www.pantone.com/pages/fcr/?season=fall&year=2015";
	  value = ["#A3AC99", "#847F5D", "#58646D", "#007784", "#CF86A3",
	    "#9164AB",
	    "#D09D5D", "#F5926C", "#955251", "#32334A"
	  ];
	  pair = {
	    "name": name,
	    "value": value,
	    "link": link
	  }
	  pan.dom.colourSets.pantone.push(pair);

	  pan.dom.currentSet = pair;

	  name = "Pantones of Spring 2016";
	  link =
	    "http://www.pantone.com/pages/fcr/?season=spring&year=2016&pid=11";

	  value = ["#F7CAC9", "#F7786B", "#DD4132", "#FAE03C", "#B18F6A",
	    "#9896A4",
	    "#79C753", "#98DDDE", "#034F84", "#91A8D0"
	  ];
	  pair = {
	    "name": name,
	    "value": value,
	    "link": link
	  }

	  pan.dom.colourSets.pantone.push(pair);

	  name = "Women of Spring 2015";
	  link = "http://www.pantone.com/pages/fcr/?season=spring&year=2015";
	  value = ["#9DC6D8", "#00B2CA", "#1D4E89", "#7DCFB6", "#D2B29A",
	    "#C6CBCC",
	    "#E3868F", "#F79256", "#EAD98B", "#955251"
	  ];
	  pair = {
	    "name": name,
	    "value": value,
	    "link": link
	  }
	  pan.dom.colourSets.pantone.push(pair);

	  name = "Men of Spring 2015";
	  link =
	    "http://www.pantone.com/pages/fcr/?season=spring&year=2015&pid=4";
	  value = ["#7DA1BF", "#1D4E89", "#4E6E38", "#7F8040", "#C6CBCC",
	    "#8a8587",
	    "#D2B29A", "#C78D6B", "#955251", "#B38FB1"
	  ];
	  pair = {
	    "name": name,
	    "value": value,
	    "link": link
	  }
	  pan.dom.colourSets.pantone.push(pair);

	  name = "Rose Quartz and Serenity (POTY2016)";
	  link = "http://www.pantone.com/color-of-the-year-2016";
	  value = ["#F7CAC9", "#92A8D1", "#F2DDDE", "#89ABE3"];
	  pair = {
	    "name": name,
	    "value": value,
	    "link": link
	  }
	  pan.dom.colourSets.pantone.push(pair);

	  name = "Yeezy Season 2";
	  link = "http://yeezy.supply/";
	  value = ["#533F2E", "#63301A", "#473828", "#524838", "#5B5340", "#84502E",
	    "#CA9E7A", "#785832", "#E2C09D", "#D1AA89"
	  ];
	  pair = {
	    "name": name,
	    "value": value,
	    "link": link
	  }
	  pan.dom.colourSets.pantone.push(pair);


	  pan.dom.depth = pan.dom.currentSet.value.length / pan.dom.columns;

	}();


	pan.initBackground = function() {
	  pan.dom.bg = document.getElementById('background');
	  pan.dom.badge = document.getElementById('badge');
	  pan.dom.palettesContainer = document.getElementById('palettesContainer');
	  pan.dom.currentDom = document.getElementById('currentPalette');
	  pan.dom.header = document.getElementById('header');
	  pan.dom.colours = pan.dom.getSet(pan.dom.currentSet.name);
	  pan.dom.go();
	  pan.dom.pantoneBackground(pan.dom.colours.length / pan.dom.columns, pan.dom
	    .columns,
	    pan.dom.colours);
	}


	var js = __webpack_require__(15);



	window.addEventListener('resize', function(event) {
	  pan.dom.refreshBackground();
	});

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! jQuery v1.11.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
	!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l="1.11.1",m=function(a,b){return new m.fn.init(a,b)},n=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,o=/^-ms-/,p=/-([\da-z])/gi,q=function(a,b){return b.toUpperCase()};m.fn=m.prototype={jquery:l,constructor:m,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=m.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return m.each(this,a,b)},map:function(a){return this.pushStack(m.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},m.extend=m.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||m.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(m.isPlainObject(c)||(b=m.isArray(c)))?(b?(b=!1,f=a&&m.isArray(a)?a:[]):f=a&&m.isPlainObject(a)?a:{},g[d]=m.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},m.extend({expando:"jQuery"+(l+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===m.type(a)},isArray:Array.isArray||function(a){return"array"===m.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!m.isArray(a)&&a-parseFloat(a)>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==m.type(a)||a.nodeType||m.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(k.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&m.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(o,"ms-").replace(p,q)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=r(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(n,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(r(Object(a))?m.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=r(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),m.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||m.guid++,e):void 0},now:function(){return+new Date},support:k}),m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function r(a){var b=a.length,c=m.type(a);return"function"===c||m.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var s=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+-new Date,v=a.document,w=0,x=0,y=gb(),z=gb(),A=gb(),B=function(a,b){return a===b&&(l=!0),0},C="undefined",D=1<<31,E={}.hasOwnProperty,F=[],G=F.pop,H=F.push,I=F.push,J=F.slice,K=F.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},L="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",N="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=N.replace("w","w#"),P="\\["+M+"*("+N+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+O+"))|)"+M+"*\\]",Q=":("+N+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+P+")*)|.*)\\)|)",R=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),S=new RegExp("^"+M+"*,"+M+"*"),T=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),V=new RegExp(Q),W=new RegExp("^"+O+"$"),X={ID:new RegExp("^#("+N+")"),CLASS:new RegExp("^\\.("+N+")"),TAG:new RegExp("^("+N.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+Q),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+L+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{I.apply(F=J.call(v.childNodes),v.childNodes),F[v.childNodes.length].nodeType}catch(eb){I={apply:F.length?function(a,b){H.apply(a,J.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],!a||"string"!=typeof a)return d;if(1!==(k=b.nodeType)&&9!==k)return[];if(p&&!e){if(f=_.exec(a))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return I.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return I.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=9===k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+qb(o[l]);w=ab.test(a)&&ob(b.parentNode)||b,x=o.join(",")}if(x)try{return I.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function gb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function hb(a){return a[u]=!0,a}function ib(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function jb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function kb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||D)-(~a.sourceIndex||D);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function lb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function nb(a){return hb(function(b){return b=+b,hb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function ob(a){return a&&typeof a.getElementsByTagName!==C&&a}c=fb.support={},f=fb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fb.setDocument=function(a){var b,e=a?a.ownerDocument||a:v,g=e.defaultView;return e!==n&&9===e.nodeType&&e.documentElement?(n=e,o=e.documentElement,p=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){m()},!1):g.attachEvent&&g.attachEvent("onunload",function(){m()})),c.attributes=ib(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ib(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(e.getElementsByClassName)&&ib(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=ib(function(a){return o.appendChild(a).id=u,!e.getElementsByName||!e.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==C&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c=typeof a.getAttributeNode!==C&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==C?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==C&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(e.querySelectorAll))&&(ib(function(a){a.innerHTML="<select msallowclip=''><option selected=''></option></select>",a.querySelectorAll("[msallowclip^='']").length&&q.push("[*^$]="+M+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+M+"*(?:value|"+L+")"),a.querySelectorAll(":checked").length||q.push(":checked")}),ib(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+M+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ib(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",Q)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===v&&t(v,a)?-1:b===e||b.ownerDocument===v&&t(v,b)?1:k?K.call(k,a)-K.call(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],i=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:k?K.call(k,a)-K.call(k,b):0;if(f===g)return kb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?kb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},e):n},fb.matches=function(a,b){return fb(a,null,null,b)},fb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fb(b,n,null,[a]).length>0},fb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&E.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fb.selectors={cacheLength:50,createPseudo:hb,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+M+")"+a+"("+M+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==C&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?hb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=K.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:hb(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?hb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:hb(function(a){return function(b){return fb(a,b).length>0}}),contains:hb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:hb(function(a){return W.test(a||"")||fb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:nb(function(){return[0]}),last:nb(function(a,b){return[b-1]}),eq:nb(function(a,b,c){return[0>c?c+b:c]}),even:nb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:nb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:nb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:nb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=lb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=mb(b);function pb(){}pb.prototype=d.filters=d.pseudos,d.setFilters=new pb,g=fb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fb.error(a):z(a,i).slice(0)};function qb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function rb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function sb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function tb(a,b,c){for(var d=0,e=b.length;e>d;d++)fb(a,b[d],c);return c}function ub(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function vb(a,b,c,d,e,f){return d&&!d[u]&&(d=vb(d)),e&&!e[u]&&(e=vb(e,f)),hb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||tb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ub(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ub(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?K.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ub(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):I.apply(g,r)})}function wb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=rb(function(a){return a===b},h,!0),l=rb(function(a){return K.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>i;i++)if(c=d.relative[a[i].type])m=[rb(sb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return vb(i>1&&sb(m),i>1&&qb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&wb(a.slice(i,e)),f>e&&wb(a=a.slice(e)),f>e&&qb(a))}m.push(c)}return sb(m)}function xb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=G.call(i));s=ub(s)}I.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&fb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?hb(f):f}return h=fb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xb(e,d)),f.selector=a}return f},i=fb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&ob(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qb(j),!a)return I.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&ob(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ib(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ib(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||jb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ib(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||jb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ib(function(a){return null==a.getAttribute("disabled")})||jb(L,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fb}(a);m.find=s,m.expr=s.selectors,m.expr[":"]=m.expr.pseudos,m.unique=s.uniqueSort,m.text=s.getText,m.isXMLDoc=s.isXML,m.contains=s.contains;var t=m.expr.match.needsContext,u=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,v=/^.[^:#\[\.,]*$/;function w(a,b,c){if(m.isFunction(b))return m.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return m.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(v.test(b))return m.filter(b,a,c);b=m.filter(b,a)}return m.grep(a,function(a){return m.inArray(a,b)>=0!==c})}m.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?m.find.matchesSelector(d,a)?[d]:[]:m.find.matches(a,m.grep(b,function(a){return 1===a.nodeType}))},m.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(m(a).filter(function(){for(b=0;e>b;b++)if(m.contains(d[b],this))return!0}));for(b=0;e>b;b++)m.find(a,d[b],c);return c=this.pushStack(e>1?m.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(w(this,a||[],!1))},not:function(a){return this.pushStack(w(this,a||[],!0))},is:function(a){return!!w(this,"string"==typeof a&&t.test(a)?m(a):a||[],!1).length}});var x,y=a.document,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=m.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||x).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof m?b[0]:b,m.merge(this,m.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:y,!0)),u.test(c[1])&&m.isPlainObject(b))for(c in b)m.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=y.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return x.find(a);this.length=1,this[0]=d}return this.context=y,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):m.isFunction(a)?"undefined"!=typeof x.ready?x.ready(a):a(m):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),m.makeArray(a,this))};A.prototype=m.fn,x=m(y);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};m.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!m(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),m.fn.extend({has:function(a){var b,c=m(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(m.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=t.test(a)||"string"!=typeof a?m(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&m.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?m.unique(f):f)},index:function(a){return a?"string"==typeof a?m.inArray(this[0],m(a)):m.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(m.unique(m.merge(this.get(),m(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}m.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return m.dir(a,"parentNode")},parentsUntil:function(a,b,c){return m.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return m.dir(a,"nextSibling")},prevAll:function(a){return m.dir(a,"previousSibling")},nextUntil:function(a,b,c){return m.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return m.dir(a,"previousSibling",c)},siblings:function(a){return m.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return m.sibling(a.firstChild)},contents:function(a){return m.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:m.merge([],a.childNodes)}},function(a,b){m.fn[a]=function(c,d){var e=m.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=m.filter(d,e)),this.length>1&&(C[a]||(e=m.unique(e)),B.test(a)&&(e=e.reverse())),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return m.each(a.match(E)||[],function(a,c){b[c]=!0}),b}m.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):m.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){m.each(b,function(b,c){var d=m.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&m.each(arguments,function(a,c){var d;while((d=m.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?m.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},m.extend({Deferred:function(a){var b=[["resolve","done",m.Callbacks("once memory"),"resolved"],["reject","fail",m.Callbacks("once memory"),"rejected"],["notify","progress",m.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return m.Deferred(function(c){m.each(b,function(b,f){var g=m.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&m.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?m.extend(a,d):d}},e={};return d.pipe=d.then,m.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&m.isFunction(a.promise)?e:0,g=1===f?a:m.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&m.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;m.fn.ready=function(a){return m.ready.promise().done(a),this},m.extend({isReady:!1,readyWait:1,holdReady:function(a){a?m.readyWait++:m.ready(!0)},ready:function(a){if(a===!0?!--m.readyWait:!m.isReady){if(!y.body)return setTimeout(m.ready);m.isReady=!0,a!==!0&&--m.readyWait>0||(H.resolveWith(y,[m]),m.fn.triggerHandler&&(m(y).triggerHandler("ready"),m(y).off("ready")))}}});function I(){y.addEventListener?(y.removeEventListener("DOMContentLoaded",J,!1),a.removeEventListener("load",J,!1)):(y.detachEvent("onreadystatechange",J),a.detachEvent("onload",J))}function J(){(y.addEventListener||"load"===event.type||"complete"===y.readyState)&&(I(),m.ready())}m.ready.promise=function(b){if(!H)if(H=m.Deferred(),"complete"===y.readyState)setTimeout(m.ready);else if(y.addEventListener)y.addEventListener("DOMContentLoaded",J,!1),a.addEventListener("load",J,!1);else{y.attachEvent("onreadystatechange",J),a.attachEvent("onload",J);var c=!1;try{c=null==a.frameElement&&y.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!m.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}I(),m.ready()}}()}return H.promise(b)};var K="undefined",L;for(L in m(k))break;k.ownLast="0"!==L,k.inlineBlockNeedsLayout=!1,m(function(){var a,b,c,d;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",k.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(d))}),function(){var a=y.createElement("div");if(null==k.deleteExpando){k.deleteExpando=!0;try{delete a.test}catch(b){k.deleteExpando=!1}}a=null}(),m.acceptData=function(a){var b=m.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var M=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,N=/([A-Z])/g;function O(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(N,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:M.test(c)?m.parseJSON(c):c}catch(e){}m.data(a,b,c)}else c=void 0}return c}function P(a){var b;for(b in a)if(("data"!==b||!m.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function Q(a,b,d,e){if(m.acceptData(a)){var f,g,h=m.expando,i=a.nodeType,j=i?m.cache:a,k=i?a[h]:a[h]&&h;
	if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||m.guid++:h),j[k]||(j[k]=i?{}:{toJSON:m.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=m.extend(j[k],b):j[k].data=m.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[m.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[m.camelCase(b)])):f=g,f}}function R(a,b,c){if(m.acceptData(a)){var d,e,f=a.nodeType,g=f?m.cache:a,h=f?a[m.expando]:m.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){m.isArray(b)?b=b.concat(m.map(b,m.camelCase)):b in d?b=[b]:(b=m.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!P(d):!m.isEmptyObject(d))return}(c||(delete g[h].data,P(g[h])))&&(f?m.cleanData([a],!0):k.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}m.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?m.cache[a[m.expando]]:a[m.expando],!!a&&!P(a)},data:function(a,b,c){return Q(a,b,c)},removeData:function(a,b){return R(a,b)},_data:function(a,b,c){return Q(a,b,c,!0)},_removeData:function(a,b){return R(a,b,!0)}}),m.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=m.data(f),1===f.nodeType&&!m._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=m.camelCase(d.slice(5)),O(f,d,e[d])));m._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){m.data(this,a)}):arguments.length>1?this.each(function(){m.data(this,a,b)}):f?O(f,a,m.data(f,a)):void 0},removeData:function(a){return this.each(function(){m.removeData(this,a)})}}),m.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=m._data(a,b),c&&(!d||m.isArray(c)?d=m._data(a,b,m.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=m.queue(a,b),d=c.length,e=c.shift(),f=m._queueHooks(a,b),g=function(){m.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return m._data(a,c)||m._data(a,c,{empty:m.Callbacks("once memory").add(function(){m._removeData(a,b+"queue"),m._removeData(a,c)})})}}),m.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?m.queue(this[0],a):void 0===b?this:this.each(function(){var c=m.queue(this,a,b);m._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&m.dequeue(this,a)})},dequeue:function(a){return this.each(function(){m.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=m.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=m._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=["Top","Right","Bottom","Left"],U=function(a,b){return a=b||a,"none"===m.css(a,"display")||!m.contains(a.ownerDocument,a)},V=m.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===m.type(c)){e=!0;for(h in c)m.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,m.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(m(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},W=/^(?:checkbox|radio)$/i;!function(){var a=y.createElement("input"),b=y.createElement("div"),c=y.createDocumentFragment();if(b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",k.leadingWhitespace=3===b.firstChild.nodeType,k.tbody=!b.getElementsByTagName("tbody").length,k.htmlSerialize=!!b.getElementsByTagName("link").length,k.html5Clone="<:nav></:nav>"!==y.createElement("nav").cloneNode(!0).outerHTML,a.type="checkbox",a.checked=!0,c.appendChild(a),k.appendChecked=a.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,c.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,k.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){k.noCloneEvent=!1}),b.cloneNode(!0).click()),null==k.deleteExpando){k.deleteExpando=!0;try{delete b.test}catch(d){k.deleteExpando=!1}}}(),function(){var b,c,d=y.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(k[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),k[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var X=/^(?:input|select|textarea)$/i,Y=/^key/,Z=/^(?:mouse|pointer|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=/^([^.]*)(?:\.(.+)|)$/;function ab(){return!0}function bb(){return!1}function cb(){try{return y.activeElement}catch(a){}}m.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=m.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof m===K||a&&m.event.triggered===a.type?void 0:m.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(E)||[""],h=b.length;while(h--)f=_.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=m.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=m.event.special[o]||{},l=m.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&m.expr.match.needsContext.test(e),namespace:p.join(".")},i),(n=g[o])||(n=g[o]=[],n.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?n.splice(n.delegateCount++,0,l):n.push(l),m.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m.hasData(a)&&m._data(a);if(r&&(k=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=_.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=m.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,n=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=n.length;while(f--)g=n[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(n.splice(f,1),g.selector&&n.delegateCount--,l.remove&&l.remove.call(a,g));i&&!n.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||m.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)m.event.remove(a,o+b[j],c,d,!0);m.isEmptyObject(k)&&(delete r.handle,m._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,o=[d||y],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||y,3!==d.nodeType&&8!==d.nodeType&&!$.test(p+m.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[m.expando]?b:new m.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:m.makeArray(c,[b]),k=m.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!m.isWindow(d)){for(i=k.delegateType||p,$.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||y)&&o.push(l.defaultView||l.parentWindow||a)}n=0;while((h=o[n++])&&!b.isPropagationStopped())b.type=n>1?i:k.bindType||p,f=(m._data(h,"events")||{})[b.type]&&m._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&m.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&m.acceptData(d)&&g&&d[p]&&!m.isWindow(d)){l=d[g],l&&(d[g]=null),m.event.triggered=p;try{d[p]()}catch(r){}m.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=m.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(m._data(this,"events")||{})[a.type]||[],k=m.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=m.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((m.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?m(c,this).index(i)>=0:m.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[m.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=Z.test(e)?this.mouseHooks:Y.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new m.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||y),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||y,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==cb()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===cb()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return m.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return m.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=m.extend(new m.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?m.event.trigger(e,null,b):m.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},m.removeEvent=y.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===K&&(a[d]=null),a.detachEvent(d,c))},m.Event=function(a,b){return this instanceof m.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ab:bb):this.type=a,b&&m.extend(this,b),this.timeStamp=a&&a.timeStamp||m.now(),void(this[m.expando]=!0)):new m.Event(a,b)},m.Event.prototype={isDefaultPrevented:bb,isPropagationStopped:bb,isImmediatePropagationStopped:bb,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ab,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ab,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ab,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){m.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!m.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.submitBubbles||(m.event.special.submit={setup:function(){return m.nodeName(this,"form")?!1:void m.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=m.nodeName(b,"input")||m.nodeName(b,"button")?b.form:void 0;c&&!m._data(c,"submitBubbles")&&(m.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),m._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&m.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return m.nodeName(this,"form")?!1:void m.event.remove(this,"._submit")}}),k.changeBubbles||(m.event.special.change={setup:function(){return X.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(m.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),m.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),m.event.simulate("change",this,a,!0)})),!1):void m.event.add(this,"beforeactivate._change",function(a){var b=a.target;X.test(b.nodeName)&&!m._data(b,"changeBubbles")&&(m.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||m.event.simulate("change",this.parentNode,a,!0)}),m._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return m.event.remove(this,"._change"),!X.test(this.nodeName)}}),k.focusinBubbles||m.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){m.event.simulate(b,a.target,m.event.fix(a),!0)};m.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=m._data(d,b);e||d.addEventListener(a,c,!0),m._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=m._data(d,b)-1;e?m._data(d,b,e):(d.removeEventListener(a,c,!0),m._removeData(d,b))}}}),m.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=bb;else if(!d)return this;return 1===e&&(g=d,d=function(a){return m().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=m.guid++)),this.each(function(){m.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,m(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=bb),this.each(function(){m.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){m.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?m.event.trigger(a,b,c,!0):void 0}});function db(a){var b=eb.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var eb="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",fb=/ jQuery\d+="(?:null|\d+)"/g,gb=new RegExp("<(?:"+eb+")[\\s/>]","i"),hb=/^\s+/,ib=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,jb=/<([\w:]+)/,kb=/<tbody/i,lb=/<|&#?\w+;/,mb=/<(?:script|style|link)/i,nb=/checked\s*(?:[^=]|=\s*.checked.)/i,ob=/^$|\/(?:java|ecma)script/i,pb=/^true\/(.*)/,qb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,rb={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:k.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},sb=db(y),tb=sb.appendChild(y.createElement("div"));rb.optgroup=rb.option,rb.tbody=rb.tfoot=rb.colgroup=rb.caption=rb.thead,rb.th=rb.td;function ub(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==K?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==K?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||m.nodeName(d,b)?f.push(d):m.merge(f,ub(d,b));return void 0===b||b&&m.nodeName(a,b)?m.merge([a],f):f}function vb(a){W.test(a.type)&&(a.defaultChecked=a.checked)}function wb(a,b){return m.nodeName(a,"table")&&m.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function xb(a){return a.type=(null!==m.find.attr(a,"type"))+"/"+a.type,a}function yb(a){var b=pb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function zb(a,b){for(var c,d=0;null!=(c=a[d]);d++)m._data(c,"globalEval",!b||m._data(b[d],"globalEval"))}function Ab(a,b){if(1===b.nodeType&&m.hasData(a)){var c,d,e,f=m._data(a),g=m._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)m.event.add(b,c,h[c][d])}g.data&&(g.data=m.extend({},g.data))}}function Bb(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!k.noCloneEvent&&b[m.expando]){e=m._data(b);for(d in e.events)m.removeEvent(b,d,e.handle);b.removeAttribute(m.expando)}"script"===c&&b.text!==a.text?(xb(b).text=a.text,yb(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),k.html5Clone&&a.innerHTML&&!m.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&W.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}m.extend({clone:function(a,b,c){var d,e,f,g,h,i=m.contains(a.ownerDocument,a);if(k.html5Clone||m.isXMLDoc(a)||!gb.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(tb.innerHTML=a.outerHTML,tb.removeChild(f=tb.firstChild)),!(k.noCloneEvent&&k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||m.isXMLDoc(a)))for(d=ub(f),h=ub(a),g=0;null!=(e=h[g]);++g)d[g]&&Bb(e,d[g]);if(b)if(c)for(h=h||ub(a),d=d||ub(f),g=0;null!=(e=h[g]);g++)Ab(e,d[g]);else Ab(a,f);return d=ub(f,"script"),d.length>0&&zb(d,!i&&ub(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,l,n=a.length,o=db(b),p=[],q=0;n>q;q++)if(f=a[q],f||0===f)if("object"===m.type(f))m.merge(p,f.nodeType?[f]:f);else if(lb.test(f)){h=h||o.appendChild(b.createElement("div")),i=(jb.exec(f)||["",""])[1].toLowerCase(),l=rb[i]||rb._default,h.innerHTML=l[1]+f.replace(ib,"<$1></$2>")+l[2],e=l[0];while(e--)h=h.lastChild;if(!k.leadingWhitespace&&hb.test(f)&&p.push(b.createTextNode(hb.exec(f)[0])),!k.tbody){f="table"!==i||kb.test(f)?"<table>"!==l[1]||kb.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)m.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}m.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),k.appendChecked||m.grep(ub(p,"input"),vb),q=0;while(f=p[q++])if((!d||-1===m.inArray(f,d))&&(g=m.contains(f.ownerDocument,f),h=ub(o.appendChild(f),"script"),g&&zb(h),c)){e=0;while(f=h[e++])ob.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=m.expando,j=m.cache,l=k.deleteExpando,n=m.event.special;null!=(d=a[h]);h++)if((b||m.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)n[e]?m.event.remove(d,e):m.removeEvent(d,e,g.handle);j[f]&&(delete j[f],l?delete d[i]:typeof d.removeAttribute!==K?d.removeAttribute(i):d[i]=null,c.push(f))}}}),m.fn.extend({text:function(a){return V(this,function(a){return void 0===a?m.text(this):this.empty().append((this[0]&&this[0].ownerDocument||y).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?m.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||m.cleanData(ub(c)),c.parentNode&&(b&&m.contains(c.ownerDocument,c)&&zb(ub(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&m.cleanData(ub(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&m.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return m.clone(this,a,b)})},html:function(a){return V(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(fb,""):void 0;if(!("string"!=typeof a||mb.test(a)||!k.htmlSerialize&&gb.test(a)||!k.leadingWhitespace&&hb.test(a)||rb[(jb.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(ib,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(m.cleanData(ub(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,m.cleanData(ub(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,n=this,o=l-1,p=a[0],q=m.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&nb.test(p))return this.each(function(c){var d=n.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(i=m.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=m.map(ub(i,"script"),xb),f=g.length;l>j;j++)d=i,j!==o&&(d=m.clone(d,!0,!0),f&&m.merge(g,ub(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,m.map(g,yb),j=0;f>j;j++)d=g[j],ob.test(d.type||"")&&!m._data(d,"globalEval")&&m.contains(h,d)&&(d.src?m._evalUrl&&m._evalUrl(d.src):m.globalEval((d.text||d.textContent||d.innerHTML||"").replace(qb,"")));i=c=null}return this}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){m.fn[a]=function(a){for(var c,d=0,e=[],g=m(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),m(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Cb,Db={};function Eb(b,c){var d,e=m(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:m.css(e[0],"display");return e.detach(),f}function Fb(a){var b=y,c=Db[a];return c||(c=Eb(a,b),"none"!==c&&c||(Cb=(Cb||m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Cb[0].contentWindow||Cb[0].contentDocument).document,b.write(),b.close(),c=Eb(a,b),Cb.detach()),Db[a]=c),c}!function(){var a;k.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,d;return c=y.getElementsByTagName("body")[0],c&&c.style?(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(y.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(d),a):void 0}}();var Gb=/^margin/,Hb=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ib,Jb,Kb=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ib=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||m.contains(a.ownerDocument,a)||(g=m.style(a,b)),Hb.test(g)&&Gb.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):y.documentElement.currentStyle&&(Ib=function(a){return a.currentStyle},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Hb.test(g)&&!Kb.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Lb(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h;if(b=y.createElement("div"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=d&&d.style){c.cssText="float:left;opacity:.5",k.opacity="0.5"===c.opacity,k.cssFloat=!!c.cssFloat,b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===b.style.backgroundClip,k.boxSizing=""===c.boxSizing||""===c.MozBoxSizing||""===c.WebkitBoxSizing,m.extend(k,{reliableHiddenOffsets:function(){return null==g&&i(),g},boxSizingReliable:function(){return null==f&&i(),f},pixelPosition:function(){return null==e&&i(),e},reliableMarginRight:function(){return null==h&&i(),h}});function i(){var b,c,d,i;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),b.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",e=f=!1,h=!0,a.getComputedStyle&&(e="1%"!==(a.getComputedStyle(b,null)||{}).top,f="4px"===(a.getComputedStyle(b,null)||{width:"4px"}).width,i=b.appendChild(y.createElement("div")),i.style.cssText=b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",b.style.width="1px",h=!parseFloat((a.getComputedStyle(i,null)||{}).marginRight)),b.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=b.getElementsByTagName("td"),i[0].style.cssText="margin:0;border:0;padding:0;display:none",g=0===i[0].offsetHeight,g&&(i[0].style.display="",i[1].style.display="none",g=0===i[0].offsetHeight),c.removeChild(d))}}}(),m.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Mb=/alpha\([^)]*\)/i,Nb=/opacity\s*=\s*([^)]*)/,Ob=/^(none|table(?!-c[ea]).+)/,Pb=new RegExp("^("+S+")(.*)$","i"),Qb=new RegExp("^([+-])=("+S+")","i"),Rb={position:"absolute",visibility:"hidden",display:"block"},Sb={letterSpacing:"0",fontWeight:"400"},Tb=["Webkit","O","Moz","ms"];function Ub(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Tb.length;while(e--)if(b=Tb[e]+c,b in a)return b;return d}function Vb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=m._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&U(d)&&(f[g]=m._data(d,"olddisplay",Fb(d.nodeName)))):(e=U(d),(c&&"none"!==c||!e)&&m._data(d,"olddisplay",e?c:m.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Wb(a,b,c){var d=Pb.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Xb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=m.css(a,c+T[f],!0,e)),d?("content"===c&&(g-=m.css(a,"padding"+T[f],!0,e)),"margin"!==c&&(g-=m.css(a,"border"+T[f]+"Width",!0,e))):(g+=m.css(a,"padding"+T[f],!0,e),"padding"!==c&&(g+=m.css(a,"border"+T[f]+"Width",!0,e)));return g}function Yb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ib(a),g=k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Jb(a,b,f),(0>e||null==e)&&(e=a.style[b]),Hb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Xb(a,b,c||(g?"border":"content"),d,f)+"px"}m.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Jb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":k.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=m.camelCase(b),i=a.style;if(b=m.cssProps[h]||(m.cssProps[h]=Ub(i,h)),g=m.cssHooks[b]||m.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Qb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(m.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||m.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=m.camelCase(b);return b=m.cssProps[h]||(m.cssProps[h]=Ub(a.style,h)),g=m.cssHooks[b]||m.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Jb(a,b,d)),"normal"===f&&b in Sb&&(f=Sb[b]),""===c||c?(e=parseFloat(f),c===!0||m.isNumeric(e)?e||0:f):f}}),m.each(["height","width"],function(a,b){m.cssHooks[b]={get:function(a,c,d){return c?Ob.test(m.css(a,"display"))&&0===a.offsetWidth?m.swap(a,Rb,function(){return Yb(a,b,d)}):Yb(a,b,d):void 0},set:function(a,c,d){var e=d&&Ib(a);return Wb(a,c,d?Xb(a,b,d,k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,e),e):0)}}}),k.opacity||(m.cssHooks.opacity={get:function(a,b){return Nb.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=m.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===m.trim(f.replace(Mb,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Mb.test(f)?f.replace(Mb,e):f+" "+e)}}),m.cssHooks.marginRight=Lb(k.reliableMarginRight,function(a,b){return b?m.swap(a,{display:"inline-block"},Jb,[a,"marginRight"]):void 0}),m.each({margin:"",padding:"",border:"Width"},function(a,b){m.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+T[d]+b]=f[d]||f[d-2]||f[0];return e}},Gb.test(a)||(m.cssHooks[a+b].set=Wb)}),m.fn.extend({css:function(a,b){return V(this,function(a,b,c){var d,e,f={},g=0;if(m.isArray(b)){for(d=Ib(a),e=b.length;e>g;g++)f[b[g]]=m.css(a,b[g],!1,d);return f}return void 0!==c?m.style(a,b,c):m.css(a,b)},a,b,arguments.length>1)},show:function(){return Vb(this,!0)},hide:function(){return Vb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){U(this)?m(this).show():m(this).hide()})}});function Zb(a,b,c,d,e){return new Zb.prototype.init(a,b,c,d,e)}m.Tween=Zb,Zb.prototype={constructor:Zb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(m.cssNumber[c]?"":"px")
	},cur:function(){var a=Zb.propHooks[this.prop];return a&&a.get?a.get(this):Zb.propHooks._default.get(this)},run:function(a){var b,c=Zb.propHooks[this.prop];return this.pos=b=this.options.duration?m.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Zb.propHooks._default.set(this),this}},Zb.prototype.init.prototype=Zb.prototype,Zb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=m.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){m.fx.step[a.prop]?m.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[m.cssProps[a.prop]]||m.cssHooks[a.prop])?m.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Zb.propHooks.scrollTop=Zb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},m.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},m.fx=Zb.prototype.init,m.fx.step={};var $b,_b,ac=/^(?:toggle|show|hide)$/,bc=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),cc=/queueHooks$/,dc=[ic],ec={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=bc.exec(b),f=e&&e[3]||(m.cssNumber[a]?"":"px"),g=(m.cssNumber[a]||"px"!==f&&+d)&&bc.exec(m.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,m.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function fc(){return setTimeout(function(){$b=void 0}),$b=m.now()}function gc(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=T[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function hc(a,b,c){for(var d,e=(ec[b]||[]).concat(ec["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ic(a,b,c){var d,e,f,g,h,i,j,l,n=this,o={},p=a.style,q=a.nodeType&&U(a),r=m._data(a,"fxshow");c.queue||(h=m._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,n.always(function(){n.always(function(){h.unqueued--,m.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=m.css(a,"display"),l="none"===j?m._data(a,"olddisplay")||Fb(a.nodeName):j,"inline"===l&&"none"===m.css(a,"float")&&(k.inlineBlockNeedsLayout&&"inline"!==Fb(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",k.shrinkWrapBlocks()||n.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],ac.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||m.style(a,d)}else j=void 0;if(m.isEmptyObject(o))"inline"===("none"===j?Fb(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=m._data(a,"fxshow",{}),f&&(r.hidden=!q),q?m(a).show():n.done(function(){m(a).hide()}),n.done(function(){var b;m._removeData(a,"fxshow");for(b in o)m.style(a,b,o[b])});for(d in o)g=hc(q?r[d]:0,d,n),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function jc(a,b){var c,d,e,f,g;for(c in a)if(d=m.camelCase(c),e=b[d],f=a[c],m.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=m.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kc(a,b,c){var d,e,f=0,g=dc.length,h=m.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=$b||fc(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:m.extend({},b),opts:m.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:$b||fc(),duration:c.duration,tweens:[],createTween:function(b,c){var d=m.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jc(k,j.opts.specialEasing);g>f;f++)if(d=dc[f].call(j,a,k,j.opts))return d;return m.map(k,hc,j),m.isFunction(j.opts.start)&&j.opts.start.call(a,j),m.fx.timer(m.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}m.Animation=m.extend(kc,{tweener:function(a,b){m.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],ec[c]=ec[c]||[],ec[c].unshift(b)},prefilter:function(a,b){b?dc.unshift(a):dc.push(a)}}),m.speed=function(a,b,c){var d=a&&"object"==typeof a?m.extend({},a):{complete:c||!c&&b||m.isFunction(a)&&a,duration:a,easing:c&&b||b&&!m.isFunction(b)&&b};return d.duration=m.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in m.fx.speeds?m.fx.speeds[d.duration]:m.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){m.isFunction(d.old)&&d.old.call(this),d.queue&&m.dequeue(this,d.queue)},d},m.fn.extend({fadeTo:function(a,b,c,d){return this.filter(U).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=m.isEmptyObject(a),f=m.speed(b,c,d),g=function(){var b=kc(this,m.extend({},a),f);(e||m._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=m.timers,g=m._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&cc.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&m.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=m._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=m.timers,g=d?d.length:0;for(c.finish=!0,m.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),m.each(["toggle","show","hide"],function(a,b){var c=m.fn[b];m.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gc(b,!0),a,d,e)}}),m.each({slideDown:gc("show"),slideUp:gc("hide"),slideToggle:gc("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){m.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),m.timers=[],m.fx.tick=function(){var a,b=m.timers,c=0;for($b=m.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||m.fx.stop(),$b=void 0},m.fx.timer=function(a){m.timers.push(a),a()?m.fx.start():m.timers.pop()},m.fx.interval=13,m.fx.start=function(){_b||(_b=setInterval(m.fx.tick,m.fx.interval))},m.fx.stop=function(){clearInterval(_b),_b=null},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(a,b){return a=m.fx?m.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e;b=y.createElement("div"),b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=y.createElement("select"),e=c.appendChild(y.createElement("option")),a=b.getElementsByTagName("input")[0],d.style.cssText="top:1px",k.getSetAttribute="t"!==b.className,k.style=/top/.test(d.getAttribute("style")),k.hrefNormalized="/a"===d.getAttribute("href"),k.checkOn=!!a.value,k.optSelected=e.selected,k.enctype=!!y.createElement("form").enctype,c.disabled=!0,k.optDisabled=!e.disabled,a=y.createElement("input"),a.setAttribute("value",""),k.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),k.radioValue="t"===a.value}();var lc=/\r/g;m.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=m.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,m(this).val()):a,null==e?e="":"number"==typeof e?e+="":m.isArray(e)&&(e=m.map(e,function(a){return null==a?"":a+""})),b=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=m.valHooks[e.type]||m.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(lc,""):null==c?"":c)}}}),m.extend({valHooks:{option:{get:function(a){var b=m.find.attr(a,"value");return null!=b?b:m.trim(m.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&m.nodeName(c.parentNode,"optgroup"))){if(b=m(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=m.makeArray(b),g=e.length;while(g--)if(d=e[g],m.inArray(m.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(a,b){return m.isArray(b)?a.checked=m.inArray(m(a).val(),b)>=0:void 0}},k.checkOn||(m.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var mc,nc,oc=m.expr.attrHandle,pc=/^(?:checked|selected)$/i,qc=k.getSetAttribute,rc=k.input;m.fn.extend({attr:function(a,b){return V(this,m.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){m.removeAttr(this,a)})}}),m.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===K?m.prop(a,b,c):(1===f&&m.isXMLDoc(a)||(b=b.toLowerCase(),d=m.attrHooks[b]||(m.expr.match.bool.test(b)?nc:mc)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=m.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void m.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=m.propFix[c]||c,m.expr.match.bool.test(c)?rc&&qc||!pc.test(c)?a[d]=!1:a[m.camelCase("default-"+c)]=a[d]=!1:m.attr(a,c,""),a.removeAttribute(qc?c:d)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&m.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),nc={set:function(a,b,c){return b===!1?m.removeAttr(a,c):rc&&qc||!pc.test(c)?a.setAttribute(!qc&&m.propFix[c]||c,c):a[m.camelCase("default-"+c)]=a[c]=!0,c}},m.each(m.expr.match.bool.source.match(/\w+/g),function(a,b){var c=oc[b]||m.find.attr;oc[b]=rc&&qc||!pc.test(b)?function(a,b,d){var e,f;return d||(f=oc[b],oc[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,oc[b]=f),e}:function(a,b,c){return c?void 0:a[m.camelCase("default-"+b)]?b.toLowerCase():null}}),rc&&qc||(m.attrHooks.value={set:function(a,b,c){return m.nodeName(a,"input")?void(a.defaultValue=b):mc&&mc.set(a,b,c)}}),qc||(mc={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},oc.id=oc.name=oc.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},m.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:mc.set},m.attrHooks.contenteditable={set:function(a,b,c){mc.set(a,""===b?!1:b,c)}},m.each(["width","height"],function(a,b){m.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),k.style||(m.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var sc=/^(?:input|select|textarea|button|object)$/i,tc=/^(?:a|area)$/i;m.fn.extend({prop:function(a,b){return V(this,m.prop,a,b,arguments.length>1)},removeProp:function(a){return a=m.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),m.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!m.isXMLDoc(a),f&&(b=m.propFix[b]||b,e=m.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=m.find.attr(a,"tabindex");return b?parseInt(b,10):sc.test(a.nodeName)||tc.test(a.nodeName)&&a.href?0:-1}}}}),k.hrefNormalized||m.each(["href","src"],function(a,b){m.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),k.optSelected||(m.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this}),k.enctype||(m.propFix.enctype="encoding");var uc=/[\t\r\n\f]/g;m.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=m.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?m.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(m.isFunction(a)?function(c){m(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=m(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===K||"boolean"===c)&&(this.className&&m._data(this,"__className__",this.className),this.className=this.className||a===!1?"":m._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(uc," ").indexOf(b)>=0)return!0;return!1}}),m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){m.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),m.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var vc=m.now(),wc=/\?/,xc=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;m.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=m.trim(b+"");return e&&!m.trim(e.replace(xc,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():m.error("Invalid JSON: "+b)},m.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||m.error("Invalid XML: "+b),c};var yc,zc,Ac=/#.*$/,Bc=/([?&])_=[^&]*/,Cc=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Dc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Ec=/^(?:GET|HEAD)$/,Fc=/^\/\//,Gc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Hc={},Ic={},Jc="*/".concat("*");try{zc=location.href}catch(Kc){zc=y.createElement("a"),zc.href="",zc=zc.href}yc=Gc.exec(zc.toLowerCase())||[];function Lc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(m.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Mc(a,b,c,d){var e={},f=a===Ic;function g(h){var i;return e[h]=!0,m.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Nc(a,b){var c,d,e=m.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&m.extend(!0,a,c),a}function Oc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Pc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:zc,type:"GET",isLocal:Dc.test(yc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Jc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":m.parseJSON,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Nc(Nc(a,m.ajaxSettings),b):Nc(m.ajaxSettings,a)},ajaxPrefilter:Lc(Hc),ajaxTransport:Lc(Ic),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=m.ajaxSetup({},b),l=k.context||k,n=k.context&&(l.nodeType||l.jquery)?m(l):m.event,o=m.Deferred(),p=m.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Cc.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||zc)+"").replace(Ac,"").replace(Fc,yc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=m.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(c=Gc.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===yc[1]&&c[2]===yc[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(yc[3]||("http:"===yc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=m.param(k.data,k.traditional)),Mc(Hc,k,b,v),2===t)return v;h=k.global,h&&0===m.active++&&m.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Ec.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(wc.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Bc.test(e)?e.replace(Bc,"$1_="+vc++):e+(wc.test(e)?"&":"?")+"_="+vc++)),k.ifModified&&(m.lastModified[e]&&v.setRequestHeader("If-Modified-Since",m.lastModified[e]),m.etag[e]&&v.setRequestHeader("If-None-Match",m.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Jc+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Mc(Ic,k,b,v)){v.readyState=1,h&&n.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Oc(k,v,c)),u=Pc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(m.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(m.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&n.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(n.trigger("ajaxComplete",[v,k]),--m.active||m.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return m.get(a,b,c,"json")},getScript:function(a,b){return m.get(a,void 0,b,"script")}}),m.each(["get","post"],function(a,b){m[b]=function(a,c,d,e){return m.isFunction(c)&&(e=e||d,d=c,c=void 0),m.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){m.fn[b]=function(a){return this.on(b,a)}}),m._evalUrl=function(a){return m.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},m.fn.extend({wrapAll:function(a){if(m.isFunction(a))return this.each(function(b){m(this).wrapAll(a.call(this,b))});if(this[0]){var b=m(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(m.isFunction(a)?function(b){m(this).wrapInner(a.call(this,b))}:function(){var b=m(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=m.isFunction(a);return this.each(function(c){m(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){m.nodeName(this,"body")||m(this).replaceWith(this.childNodes)}).end()}}),m.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!k.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||m.css(a,"display"))},m.expr.filters.visible=function(a){return!m.expr.filters.hidden(a)};var Qc=/%20/g,Rc=/\[\]$/,Sc=/\r?\n/g,Tc=/^(?:submit|button|image|reset|file)$/i,Uc=/^(?:input|select|textarea|keygen)/i;function Vc(a,b,c,d){var e;if(m.isArray(b))m.each(b,function(b,e){c||Rc.test(a)?d(a,e):Vc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==m.type(b))d(a,b);else for(e in b)Vc(a+"["+e+"]",b[e],c,d)}m.param=function(a,b){var c,d=[],e=function(a,b){b=m.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=m.ajaxSettings&&m.ajaxSettings.traditional),m.isArray(a)||a.jquery&&!m.isPlainObject(a))m.each(a,function(){e(this.name,this.value)});else for(c in a)Vc(c,a[c],b,e);return d.join("&").replace(Qc,"+")},m.fn.extend({serialize:function(){return m.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=m.prop(this,"elements");return a?m.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!m(this).is(":disabled")&&Uc.test(this.nodeName)&&!Tc.test(a)&&(this.checked||!W.test(a))}).map(function(a,b){var c=m(this).val();return null==c?null:m.isArray(c)?m.map(c,function(a){return{name:b.name,value:a.replace(Sc,"\r\n")}}):{name:b.name,value:c.replace(Sc,"\r\n")}}).get()}}),m.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&Zc()||$c()}:Zc;var Wc=0,Xc={},Yc=m.ajaxSettings.xhr();a.ActiveXObject&&m(a).on("unload",function(){for(var a in Xc)Xc[a](void 0,!0)}),k.cors=!!Yc&&"withCredentials"in Yc,Yc=k.ajax=!!Yc,Yc&&m.ajaxTransport(function(a){if(!a.crossDomain||k.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Wc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Xc[g],b=void 0,f.onreadystatechange=m.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Xc[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function Zc(){try{return new a.XMLHttpRequest}catch(b){}}function $c(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return m.globalEval(a),a}}}),m.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),m.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=y.head||m("head")[0]||y.documentElement;return{send:function(d,e){b=y.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var _c=[],ad=/(=)\?(?=&|$)|\?\?/;m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=_c.pop()||m.expando+"_"+vc++;return this[a]=!0,a}}),m.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(ad.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&ad.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=m.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(ad,"$1"+e):b.jsonp!==!1&&(b.url+=(wc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||m.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,_c.push(e)),g&&m.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),m.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||y;var d=u.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=m.buildFragment([a],b,e),e&&e.length&&m(e).remove(),m.merge([],d.childNodes))};var bd=m.fn.load;m.fn.load=function(a,b,c){if("string"!=typeof a&&bd)return bd.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=m.trim(a.slice(h,a.length)),a=a.slice(0,h)),m.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&m.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?m("<div>").append(m.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},m.expr.filters.animated=function(a){return m.grep(m.timers,function(b){return a===b.elem}).length};var cd=a.document.documentElement;function dd(a){return m.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}m.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=m.css(a,"position"),l=m(a),n={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=m.css(a,"top"),i=m.css(a,"left"),j=("absolute"===k||"fixed"===k)&&m.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),m.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(n.top=b.top-h.top+g),null!=b.left&&(n.left=b.left-h.left+e),"using"in b?b.using.call(a,n):l.css(n)}},m.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){m.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,m.contains(b,e)?(typeof e.getBoundingClientRect!==K&&(d=e.getBoundingClientRect()),c=dd(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===m.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),m.nodeName(a[0],"html")||(c=a.offset()),c.top+=m.css(a[0],"borderTopWidth",!0),c.left+=m.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-m.css(d,"marginTop",!0),left:b.left-c.left-m.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||cd;while(a&&!m.nodeName(a,"html")&&"static"===m.css(a,"position"))a=a.offsetParent;return a||cd})}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);m.fn[a]=function(d){return V(this,function(a,d,e){var f=dd(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?m(f).scrollLeft():e,c?e:m(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),m.each(["top","left"],function(a,b){m.cssHooks[b]=Lb(k.pixelPosition,function(a,c){return c?(c=Jb(a,b),Hb.test(c)?m(a).position()[b]+"px":c):void 0})}),m.each({Height:"height",Width:"width"},function(a,b){m.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){m.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return V(this,function(b,c,d){var e;return m.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?m.css(b,c,g):m.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),m.fn.size=function(){return this.length},m.fn.andSelf=m.fn.addBack,"function"=="function"&&__webpack_require__(2)&&!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function(){return m}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));var ed=a.jQuery,fd=a.$;return m.noConflict=function(b){return a.$===m&&(a.$=fd),b&&a.jQuery===m&&(a.jQuery=ed),m},typeof b===K&&(a.jQuery=a.$=m),m});


/***/ },
/* 2 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;

	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(4)(__webpack_require__(5))

/***/ },
/* 4 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	module.exports = function(src) {
		if (typeof execScript === "function")
			execScript(src);
		else
			eval.call(null, src);
	}

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = "/*! Magnific Popup - v1.0.1 - 2016-01-16\n* http://dimsemenov.com/plugins/magnific-popup/\n* Copyright (c) 2016 Dmitry Semenov; */\n;(function (factory) { \nif (typeof define === 'function' && define.amd) { \n // AMD. Register as an anonymous module. \n define(['jquery'], factory); \n } else if (typeof exports === 'object') { \n // Node/CommonJS \n factory(require('jquery')); \n } else { \n // Browser globals \n factory(window.jQuery || window.Zepto); \n } \n }(function($) { \n\n/*>>core*/\n/**\n * \n * Magnific Popup Core JS file\n * \n */\n\n\n/**\n * Private static constants\n */\nvar CLOSE_EVENT = 'Close',\n\tBEFORE_CLOSE_EVENT = 'BeforeClose',\n\tAFTER_CLOSE_EVENT = 'AfterClose',\n\tBEFORE_APPEND_EVENT = 'BeforeAppend',\n\tMARKUP_PARSE_EVENT = 'MarkupParse',\n\tOPEN_EVENT = 'Open',\n\tCHANGE_EVENT = 'Change',\n\tNS = 'mfp',\n\tEVENT_NS = '.' + NS,\n\tREADY_CLASS = 'mfp-ready',\n\tREMOVING_CLASS = 'mfp-removing',\n\tPREVENT_CLOSE_CLASS = 'mfp-prevent-close';\n\n\n/**\n * Private vars \n */\n/*jshint -W079 */\nvar mfp, // As we have only one instance of MagnificPopup object, we define it locally to not to use 'this'\n\tMagnificPopup = function(){},\n\t_isJQ = !!(window.jQuery),\n\t_prevStatus,\n\t_window = $(window),\n\t_document,\n\t_prevContentType,\n\t_wrapClasses,\n\t_currPopupType;\n\n\n/**\n * Private functions\n */\nvar _mfpOn = function(name, f) {\n\t\tmfp.ev.on(NS + name + EVENT_NS, f);\n\t},\n\t_getEl = function(className, appendTo, html, raw) {\n\t\tvar el = document.createElement('div');\n\t\tel.className = 'mfp-'+className;\n\t\tif(html) {\n\t\t\tel.innerHTML = html;\n\t\t}\n\t\tif(!raw) {\n\t\t\tel = $(el);\n\t\t\tif(appendTo) {\n\t\t\t\tel.appendTo(appendTo);\n\t\t\t}\n\t\t} else if(appendTo) {\n\t\t\tappendTo.appendChild(el);\n\t\t}\n\t\treturn el;\n\t},\n\t_mfpTrigger = function(e, data) {\n\t\tmfp.ev.triggerHandler(NS + e, data);\n\n\t\tif(mfp.st.callbacks) {\n\t\t\t// converts \"mfpEventName\" to \"eventName\" callback and triggers it if it's present\n\t\t\te = e.charAt(0).toLowerCase() + e.slice(1);\n\t\t\tif(mfp.st.callbacks[e]) {\n\t\t\t\tmfp.st.callbacks[e].apply(mfp, $.isArray(data) ? data : [data]);\n\t\t\t}\n\t\t}\n\t},\n\t_getCloseBtn = function(type) {\n\t\tif(type !== _currPopupType || !mfp.currTemplate.closeBtn) {\n\t\t\tmfp.currTemplate.closeBtn = $( mfp.st.closeMarkup.replace('%title%', mfp.st.tClose ) );\n\t\t\t_currPopupType = type;\n\t\t}\n\t\treturn mfp.currTemplate.closeBtn;\n\t},\n\t// Initialize Magnific Popup only when called at least once\n\t_checkInstance = function() {\n\t\tif(!$.magnificPopup.instance) {\n\t\t\t/*jshint -W020 */\n\t\t\tmfp = new MagnificPopup();\n\t\t\tmfp.init();\n\t\t\t$.magnificPopup.instance = mfp;\n\t\t}\n\t},\n\t// CSS transition detection, http://stackoverflow.com/questions/7264899/detect-css-transitions-using-javascript-and-without-modernizr\n\tsupportsTransitions = function() {\n\t\tvar s = document.createElement('p').style, // 's' for style. better to create an element if body yet to exist\n\t\t\tv = ['ms','O','Moz','Webkit']; // 'v' for vendor\n\n\t\tif( s['transition'] !== undefined ) {\n\t\t\treturn true; \n\t\t}\n\t\t\t\n\t\twhile( v.length ) {\n\t\t\tif( v.pop() + 'Transition' in s ) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t}\n\t\t\t\t\n\t\treturn false;\n\t};\n\n\n\n/**\n * Public functions\n */\nMagnificPopup.prototype = {\n\n\tconstructor: MagnificPopup,\n\n\t/**\n\t * Initializes Magnific Popup plugin. \n\t * This function is triggered only once when $.fn.magnificPopup or $.magnificPopup is executed\n\t */\n\tinit: function() {\n\t\tvar appVersion = navigator.appVersion;\n\t\tmfp.isIE7 = appVersion.indexOf(\"MSIE 7.\") !== -1; \n\t\tmfp.isIE8 = appVersion.indexOf(\"MSIE 8.\") !== -1;\n\t\tmfp.isLowIE = mfp.isIE7 || mfp.isIE8;\n\t\tmfp.isAndroid = (/android/gi).test(appVersion);\n\t\tmfp.isIOS = (/iphone|ipad|ipod/gi).test(appVersion);\n\t\tmfp.supportsTransition = supportsTransitions();\n\n\t\t// We disable fixed positioned lightbox on devices that don't handle it nicely.\n\t\t// If you know a better way of detecting this - let me know.\n\t\tmfp.probablyMobile = (mfp.isAndroid || mfp.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent) );\n\t\t_document = $(document);\n\n\t\tmfp.popupsCache = {};\n\t},\n\n\t/**\n\t * Opens popup\n\t * @param  data [description]\n\t */\n\topen: function(data) {\n\n\t\tvar i;\n\n\t\tif(data.isObj === false) { \n\t\t\t// convert jQuery collection to array to avoid conflicts later\n\t\t\tmfp.items = data.items.toArray();\n\n\t\t\tmfp.index = 0;\n\t\t\tvar items = data.items,\n\t\t\t\titem;\n\t\t\tfor(i = 0; i < items.length; i++) {\n\t\t\t\titem = items[i];\n\t\t\t\tif(item.parsed) {\n\t\t\t\t\titem = item.el[0];\n\t\t\t\t}\n\t\t\t\tif(item === data.el[0]) {\n\t\t\t\t\tmfp.index = i;\n\t\t\t\t\tbreak;\n\t\t\t\t}\n\t\t\t}\n\t\t} else {\n\t\t\tmfp.items = $.isArray(data.items) ? data.items : [data.items];\n\t\t\tmfp.index = data.index || 0;\n\t\t}\n\n\t\t// if popup is already opened - we just update the content\n\t\tif(mfp.isOpen) {\n\t\t\tmfp.updateItemHTML();\n\t\t\treturn;\n\t\t}\n\t\t\n\t\tmfp.types = []; \n\t\t_wrapClasses = '';\n\t\tif(data.mainEl && data.mainEl.length) {\n\t\t\tmfp.ev = data.mainEl.eq(0);\n\t\t} else {\n\t\t\tmfp.ev = _document;\n\t\t}\n\n\t\tif(data.key) {\n\t\t\tif(!mfp.popupsCache[data.key]) {\n\t\t\t\tmfp.popupsCache[data.key] = {};\n\t\t\t}\n\t\t\tmfp.currTemplate = mfp.popupsCache[data.key];\n\t\t} else {\n\t\t\tmfp.currTemplate = {};\n\t\t}\n\n\n\n\t\tmfp.st = $.extend(true, {}, $.magnificPopup.defaults, data ); \n\t\tmfp.fixedContentPos = mfp.st.fixedContentPos === 'auto' ? !mfp.probablyMobile : mfp.st.fixedContentPos;\n\n\t\tif(mfp.st.modal) {\n\t\t\tmfp.st.closeOnContentClick = false;\n\t\t\tmfp.st.closeOnBgClick = false;\n\t\t\tmfp.st.showCloseBtn = false;\n\t\t\tmfp.st.enableEscapeKey = false;\n\t\t}\n\t\t\n\n\t\t// Building markup\n\t\t// main containers are created only once\n\t\tif(!mfp.bgOverlay) {\n\n\t\t\t// Dark overlay\n\t\t\tmfp.bgOverlay = _getEl('bg').on('click'+EVENT_NS, function() {\n\t\t\t\tmfp.close();\n\t\t\t});\n\n\t\t\tmfp.wrap = _getEl('wrap').attr('tabindex', -1).on('click'+EVENT_NS, function(e) {\n\t\t\t\tif(mfp._checkIfClose(e.target)) {\n\t\t\t\t\tmfp.close();\n\t\t\t\t}\n\t\t\t});\n\n\t\t\tmfp.container = _getEl('container', mfp.wrap);\n\t\t}\n\n\t\tmfp.contentContainer = _getEl('content');\n\t\tif(mfp.st.preloader) {\n\t\t\tmfp.preloader = _getEl('preloader', mfp.container, mfp.st.tLoading);\n\t\t}\n\n\n\t\t// Initializing modules\n\t\tvar modules = $.magnificPopup.modules;\n\t\tfor(i = 0; i < modules.length; i++) {\n\t\t\tvar n = modules[i];\n\t\t\tn = n.charAt(0).toUpperCase() + n.slice(1);\n\t\t\tmfp['init'+n].call(mfp);\n\t\t}\n\t\t_mfpTrigger('BeforeOpen');\n\n\n\t\tif(mfp.st.showCloseBtn) {\n\t\t\t// Close button\n\t\t\tif(!mfp.st.closeBtnInside) {\n\t\t\t\tmfp.wrap.append( _getCloseBtn() );\n\t\t\t} else {\n\t\t\t\t_mfpOn(MARKUP_PARSE_EVENT, function(e, template, values, item) {\n\t\t\t\t\tvalues.close_replaceWith = _getCloseBtn(item.type);\n\t\t\t\t});\n\t\t\t\t_wrapClasses += ' mfp-close-btn-in';\n\t\t\t}\n\t\t}\n\n\t\tif(mfp.st.alignTop) {\n\t\t\t_wrapClasses += ' mfp-align-top';\n\t\t}\n\n\t\n\n\t\tif(mfp.fixedContentPos) {\n\t\t\tmfp.wrap.css({\n\t\t\t\toverflow: mfp.st.overflowY,\n\t\t\t\toverflowX: 'hidden',\n\t\t\t\toverflowY: mfp.st.overflowY\n\t\t\t});\n\t\t} else {\n\t\t\tmfp.wrap.css({ \n\t\t\t\ttop: _window.scrollTop(),\n\t\t\t\tposition: 'absolute'\n\t\t\t});\n\t\t}\n\t\tif( mfp.st.fixedBgPos === false || (mfp.st.fixedBgPos === 'auto' && !mfp.fixedContentPos) ) {\n\t\t\tmfp.bgOverlay.css({\n\t\t\t\theight: _document.height(),\n\t\t\t\tposition: 'absolute'\n\t\t\t});\n\t\t}\n\n\t\t\n\n\t\tif(mfp.st.enableEscapeKey) {\n\t\t\t// Close on ESC key\n\t\t\t_document.on('keyup' + EVENT_NS, function(e) {\n\t\t\t\tif(e.keyCode === 27) {\n\t\t\t\t\tmfp.close();\n\t\t\t\t}\n\t\t\t});\n\t\t}\n\n\t\t_window.on('resize' + EVENT_NS, function() {\n\t\t\tmfp.updateSize();\n\t\t});\n\n\n\t\tif(!mfp.st.closeOnContentClick) {\n\t\t\t_wrapClasses += ' mfp-auto-cursor';\n\t\t}\n\t\t\n\t\tif(_wrapClasses)\n\t\t\tmfp.wrap.addClass(_wrapClasses);\n\n\n\t\t// this triggers recalculation of layout, so we get it once to not to trigger twice\n\t\tvar windowHeight = mfp.wH = _window.height();\n\n\t\t\n\t\tvar windowStyles = {};\n\n\t\tif( mfp.fixedContentPos ) {\n            if(mfp._hasScrollBar(windowHeight)){\n                var s = mfp._getScrollbarSize();\n                if(s) {\n                    windowStyles.marginRight = s;\n                }\n            }\n        }\n\n\t\tif(mfp.fixedContentPos) {\n\t\t\tif(!mfp.isIE7) {\n\t\t\t\twindowStyles.overflow = 'hidden';\n\t\t\t} else {\n\t\t\t\t// ie7 double-scroll bug\n\t\t\t\t$('body, html').css('overflow', 'hidden');\n\t\t\t}\n\t\t}\n\n\t\t\n\t\t\n\t\tvar classesToadd = mfp.st.mainClass;\n\t\tif(mfp.isIE7) {\n\t\t\tclassesToadd += ' mfp-ie7';\n\t\t}\n\t\tif(classesToadd) {\n\t\t\tmfp._addClassToMFP( classesToadd );\n\t\t}\n\n\t\t// add content\n\t\tmfp.updateItemHTML();\n\n\t\t_mfpTrigger('BuildControls');\n\n\t\t// remove scrollbar, add margin e.t.c\n\t\t$('html').css(windowStyles);\n\t\t\n\t\t// add everything to DOM\n\t\tmfp.bgOverlay.add(mfp.wrap).prependTo( mfp.st.prependTo || $(document.body) );\n\n\t\t// Save last focused element\n\t\tmfp._lastFocusedEl = document.activeElement;\n\t\t\n\t\t// Wait for next cycle to allow CSS transition\n\t\tsetTimeout(function() {\n\t\t\t\n\t\t\tif(mfp.content) {\n\t\t\t\tmfp._addClassToMFP(READY_CLASS);\n\t\t\t\tmfp._setFocus();\n\t\t\t} else {\n\t\t\t\t// if content is not defined (not loaded e.t.c) we add class only for BG\n\t\t\t\tmfp.bgOverlay.addClass(READY_CLASS);\n\t\t\t}\n\t\t\t\n\t\t\t// Trap the focus in popup\n\t\t\t_document.on('focusin' + EVENT_NS, mfp._onFocusIn);\n\n\t\t}, 16);\n\n\t\tmfp.isOpen = true;\n\t\tmfp.updateSize(windowHeight);\n\t\t_mfpTrigger(OPEN_EVENT);\n\n\t\treturn data;\n\t},\n\n\t/**\n\t * Closes the popup\n\t */\n\tclose: function() {\n\t\tif(!mfp.isOpen) return;\n\t\t_mfpTrigger(BEFORE_CLOSE_EVENT);\n\n\t\tmfp.isOpen = false;\n\t\t// for CSS3 animation\n\t\tif(mfp.st.removalDelay && !mfp.isLowIE && mfp.supportsTransition )  {\n\t\t\tmfp._addClassToMFP(REMOVING_CLASS);\n\t\t\tsetTimeout(function() {\n\t\t\t\tmfp._close();\n\t\t\t}, mfp.st.removalDelay);\n\t\t} else {\n\t\t\tmfp._close();\n\t\t}\n\t},\n\n\t/**\n\t * Helper for close() function\n\t */\n\t_close: function() {\n\t\t_mfpTrigger(CLOSE_EVENT);\n\n\t\tvar classesToRemove = REMOVING_CLASS + ' ' + READY_CLASS + ' ';\n\n\t\tmfp.bgOverlay.detach();\n\t\tmfp.wrap.detach();\n\t\tmfp.container.empty();\n\n\t\tif(mfp.st.mainClass) {\n\t\t\tclassesToRemove += mfp.st.mainClass + ' ';\n\t\t}\n\n\t\tmfp._removeClassFromMFP(classesToRemove);\n\n\t\tif(mfp.fixedContentPos) {\n\t\t\tvar windowStyles = {marginRight: ''};\n\t\t\tif(mfp.isIE7) {\n\t\t\t\t$('body, html').css('overflow', '');\n\t\t\t} else {\n\t\t\t\twindowStyles.overflow = '';\n\t\t\t}\n\t\t\t$('html').css(windowStyles);\n\t\t}\n\t\t\n\t\t_document.off('keyup' + EVENT_NS + ' focusin' + EVENT_NS);\n\t\tmfp.ev.off(EVENT_NS);\n\n\t\t// clean up DOM elements that aren't removed\n\t\tmfp.wrap.attr('class', 'mfp-wrap').removeAttr('style');\n\t\tmfp.bgOverlay.attr('class', 'mfp-bg');\n\t\tmfp.container.attr('class', 'mfp-container');\n\n\t\t// remove close button from target element\n\t\tif(mfp.st.showCloseBtn &&\n\t\t(!mfp.st.closeBtnInside || mfp.currTemplate[mfp.currItem.type] === true)) {\n\t\t\tif(mfp.currTemplate.closeBtn)\n\t\t\t\tmfp.currTemplate.closeBtn.detach();\n\t\t}\n\n\n\t\tif(mfp.st.autoFocusLast && mfp._lastFocusedEl) {\n\t\t\t$(mfp._lastFocusedEl).focus(); // put tab focus back\n\t\t}\n\t\tmfp.currItem = null;\t\n\t\tmfp.content = null;\n\t\tmfp.currTemplate = null;\n\t\tmfp.prevHeight = 0;\n\n\t\t_mfpTrigger(AFTER_CLOSE_EVENT);\n\t},\n\t\n\tupdateSize: function(winHeight) {\n\n\t\tif(mfp.isIOS) {\n\t\t\t// fixes iOS nav bars https://github.com/dimsemenov/Magnific-Popup/issues/2\n\t\t\tvar zoomLevel = document.documentElement.clientWidth / window.innerWidth;\n\t\t\tvar height = window.innerHeight * zoomLevel;\n\t\t\tmfp.wrap.css('height', height);\n\t\t\tmfp.wH = height;\n\t\t} else {\n\t\t\tmfp.wH = winHeight || _window.height();\n\t\t}\n\t\t// Fixes #84: popup incorrectly positioned with position:relative on body\n\t\tif(!mfp.fixedContentPos) {\n\t\t\tmfp.wrap.css('height', mfp.wH);\n\t\t}\n\n\t\t_mfpTrigger('Resize');\n\n\t},\n\n\t/**\n\t * Set content of popup based on current index\n\t */\n\tupdateItemHTML: function() {\n\t\tvar item = mfp.items[mfp.index];\n\n\t\t// Detach and perform modifications\n\t\tmfp.contentContainer.detach();\n\n\t\tif(mfp.content)\n\t\t\tmfp.content.detach();\n\n\t\tif(!item.parsed) {\n\t\t\titem = mfp.parseEl( mfp.index );\n\t\t}\n\n\t\tvar type = item.type;\t\n\n\t\t_mfpTrigger('BeforeChange', [mfp.currItem ? mfp.currItem.type : '', type]);\n\t\t// BeforeChange event works like so:\n\t\t// _mfpOn('BeforeChange', function(e, prevType, newType) { });\n\t\t\n\t\tmfp.currItem = item;\n\n\t\t\n\n\t\t\n\n\t\tif(!mfp.currTemplate[type]) {\n\t\t\tvar markup = mfp.st[type] ? mfp.st[type].markup : false;\n\n\t\t\t// allows to modify markup\n\t\t\t_mfpTrigger('FirstMarkupParse', markup);\n\n\t\t\tif(markup) {\n\t\t\t\tmfp.currTemplate[type] = $(markup);\n\t\t\t} else {\n\t\t\t\t// if there is no markup found we just define that template is parsed\n\t\t\t\tmfp.currTemplate[type] = true;\n\t\t\t}\n\t\t}\n\n\t\tif(_prevContentType && _prevContentType !== item.type) {\n\t\t\tmfp.container.removeClass('mfp-'+_prevContentType+'-holder');\n\t\t}\n\t\t\n\t\tvar newContent = mfp['get' + type.charAt(0).toUpperCase() + type.slice(1)](item, mfp.currTemplate[type]);\n\t\tmfp.appendContent(newContent, type);\n\n\t\titem.preloaded = true;\n\n\t\t_mfpTrigger(CHANGE_EVENT, item);\n\t\t_prevContentType = item.type;\n\t\t\n\t\t// Append container back after its content changed\n\t\tmfp.container.prepend(mfp.contentContainer);\n\n\t\t_mfpTrigger('AfterChange');\n\t},\n\n\n\t/**\n\t * Set HTML content of popup\n\t */\n\tappendContent: function(newContent, type) {\n\t\tmfp.content = newContent;\n\t\t\n\t\tif(newContent) {\n\t\t\tif(mfp.st.showCloseBtn && mfp.st.closeBtnInside &&\n\t\t\t\tmfp.currTemplate[type] === true) {\n\t\t\t\t// if there is no markup, we just append close button element inside\n\t\t\t\tif(!mfp.content.find('.mfp-close').length) {\n\t\t\t\t\tmfp.content.append(_getCloseBtn());\n\t\t\t\t}\n\t\t\t} else {\n\t\t\t\tmfp.content = newContent;\n\t\t\t}\n\t\t} else {\n\t\t\tmfp.content = '';\n\t\t}\n\n\t\t_mfpTrigger(BEFORE_APPEND_EVENT);\n\t\tmfp.container.addClass('mfp-'+type+'-holder');\n\n\t\tmfp.contentContainer.append(mfp.content);\n\t},\n\n\n\n\t\n\t/**\n\t * Creates Magnific Popup data object based on given data\n\t * @param  {int} index Index of item to parse\n\t */\n\tparseEl: function(index) {\n\t\tvar item = mfp.items[index],\n\t\t\ttype;\n\n\t\tif(item.tagName) {\n\t\t\titem = { el: $(item) };\n\t\t} else {\n\t\t\ttype = item.type;\n\t\t\titem = { data: item, src: item.src };\n\t\t}\n\n\t\tif(item.el) {\n\t\t\tvar types = mfp.types;\n\n\t\t\t// check for 'mfp-TYPE' class\n\t\t\tfor(var i = 0; i < types.length; i++) {\n\t\t\t\tif( item.el.hasClass('mfp-'+types[i]) ) {\n\t\t\t\t\ttype = types[i];\n\t\t\t\t\tbreak;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\titem.src = item.el.attr('data-mfp-src');\n\t\t\tif(!item.src) {\n\t\t\t\titem.src = item.el.attr('href');\n\t\t\t}\n\t\t}\n\n\t\titem.type = type || mfp.st.type || 'inline';\n\t\titem.index = index;\n\t\titem.parsed = true;\n\t\tmfp.items[index] = item;\n\t\t_mfpTrigger('ElementParse', item);\n\n\t\treturn mfp.items[index];\n\t},\n\n\n\t/**\n\t * Initializes single popup or a group of popups\n\t */\n\taddGroup: function(el, options) {\n\t\tvar eHandler = function(e) {\n\t\t\te.mfpEl = this;\n\t\t\tmfp._openClick(e, el, options);\n\t\t};\n\n\t\tif(!options) {\n\t\t\toptions = {};\n\t\t} \n\n\t\tvar eName = 'click.magnificPopup';\n\t\toptions.mainEl = el;\n\t\t\n\t\tif(options.items) {\n\t\t\toptions.isObj = true;\n\t\t\tel.off(eName).on(eName, eHandler);\n\t\t} else {\n\t\t\toptions.isObj = false;\n\t\t\tif(options.delegate) {\n\t\t\t\tel.off(eName).on(eName, options.delegate , eHandler);\n\t\t\t} else {\n\t\t\t\toptions.items = el;\n\t\t\t\tel.off(eName).on(eName, eHandler);\n\t\t\t}\n\t\t}\n\t},\n\t_openClick: function(e, el, options) {\n\t\tvar midClick = options.midClick !== undefined ? options.midClick : $.magnificPopup.defaults.midClick;\n\n\n\t\tif(!midClick && ( e.which === 2 || e.ctrlKey || e.metaKey || e.altKey || e.shiftKey ) ) {\n\t\t\treturn;\n\t\t}\n\n\t\tvar disableOn = options.disableOn !== undefined ? options.disableOn : $.magnificPopup.defaults.disableOn;\n\n\t\tif(disableOn) {\n\t\t\tif($.isFunction(disableOn)) {\n\t\t\t\tif( !disableOn.call(mfp) ) {\n\t\t\t\t\treturn true;\n\t\t\t\t}\n\t\t\t} else { // else it's number\n\t\t\t\tif( _window.width() < disableOn ) {\n\t\t\t\t\treturn true;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\t\n\t\tif(e.type) {\n\t\t\te.preventDefault();\n\n\t\t\t// This will prevent popup from closing if element is inside and popup is already opened\n\t\t\tif(mfp.isOpen) {\n\t\t\t\te.stopPropagation();\n\t\t\t}\n\t\t}\n\t\t\t\n\n\t\toptions.el = $(e.mfpEl);\n\t\tif(options.delegate) {\n\t\t\toptions.items = el.find(options.delegate);\n\t\t}\n\t\tmfp.open(options);\n\t},\n\n\n\t/**\n\t * Updates text on preloader\n\t */\n\tupdateStatus: function(status, text) {\n\n\t\tif(mfp.preloader) {\n\t\t\tif(_prevStatus !== status) {\n\t\t\t\tmfp.container.removeClass('mfp-s-'+_prevStatus);\n\t\t\t}\n\n\t\t\tif(!text && status === 'loading') {\n\t\t\t\ttext = mfp.st.tLoading;\n\t\t\t}\n\n\t\t\tvar data = {\n\t\t\t\tstatus: status,\n\t\t\t\ttext: text\n\t\t\t};\n\t\t\t// allows to modify status\n\t\t\t_mfpTrigger('UpdateStatus', data);\n\n\t\t\tstatus = data.status;\n\t\t\ttext = data.text;\n\n\t\t\tmfp.preloader.html(text);\n\n\t\t\tmfp.preloader.find('a').on('click', function(e) {\n\t\t\t\te.stopImmediatePropagation();\n\t\t\t});\n\n\t\t\tmfp.container.addClass('mfp-s-'+status);\n\t\t\t_prevStatus = status;\n\t\t}\n\t},\n\n\n\t/*\n\t\t\"Private\" helpers that aren't private at all\n\t */\n\t// Check to close popup or not\n\t// \"target\" is an element that was clicked\n\t_checkIfClose: function(target) {\n\n\t\tif($(target).hasClass(PREVENT_CLOSE_CLASS)) {\n\t\t\treturn;\n\t\t}\n\n\t\tvar closeOnContent = mfp.st.closeOnContentClick;\n\t\tvar closeOnBg = mfp.st.closeOnBgClick;\n\n\t\tif(closeOnContent && closeOnBg) {\n\t\t\treturn true;\n\t\t} else {\n\n\t\t\t// We close the popup if click is on close button or on preloader. Or if there is no content.\n\t\t\tif(!mfp.content || $(target).hasClass('mfp-close') || (mfp.preloader && target === mfp.preloader[0]) ) {\n\t\t\t\treturn true;\n\t\t\t}\n\n\t\t\t// if click is outside the content\n\t\t\tif(  (target !== mfp.content[0] && !$.contains(mfp.content[0], target))  ) {\n\t\t\t\tif(closeOnBg) {\n\t\t\t\t\t// last check, if the clicked element is in DOM, (in case it's removed onclick)\n\t\t\t\t\tif( $.contains(document, target) ) {\n\t\t\t\t\t\treturn true;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t} else if(closeOnContent) {\n\t\t\t\treturn true;\n\t\t\t}\n\n\t\t}\n\t\treturn false;\n\t},\n\t_addClassToMFP: function(cName) {\n\t\tmfp.bgOverlay.addClass(cName);\n\t\tmfp.wrap.addClass(cName);\n\t},\n\t_removeClassFromMFP: function(cName) {\n\t\tthis.bgOverlay.removeClass(cName);\n\t\tmfp.wrap.removeClass(cName);\n\t},\n\t_hasScrollBar: function(winHeight) {\n\t\treturn (  (mfp.isIE7 ? _document.height() : document.body.scrollHeight) > (winHeight || _window.height()) );\n\t},\n\t_setFocus: function() {\n\t\t(mfp.st.focus ? mfp.content.find(mfp.st.focus).eq(0) : mfp.wrap).focus();\n\t},\n\t_onFocusIn: function(e) {\n\t\tif( e.target !== mfp.wrap[0] && !$.contains(mfp.wrap[0], e.target) ) {\n\t\t\tmfp._setFocus();\n\t\t\treturn false;\n\t\t}\n\t},\n\t_parseMarkup: function(template, values, item) {\n\t\tvar arr;\n\t\tif(item.data) {\n\t\t\tvalues = $.extend(item.data, values);\n\t\t}\n\t\t_mfpTrigger(MARKUP_PARSE_EVENT, [template, values, item] );\n\n\t\t$.each(values, function(key, value) {\n\t\t\tif(value === undefined || value === false) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t\tarr = key.split('_');\n\t\t\tif(arr.length > 1) {\n\t\t\t\tvar el = template.find(EVENT_NS + '-'+arr[0]);\n\n\t\t\t\tif(el.length > 0) {\n\t\t\t\t\tvar attr = arr[1];\n\t\t\t\t\tif(attr === 'replaceWith') {\n\t\t\t\t\t\tif(el[0] !== value[0]) {\n\t\t\t\t\t\t\tel.replaceWith(value);\n\t\t\t\t\t\t}\n\t\t\t\t\t} else if(attr === 'img') {\n\t\t\t\t\t\tif(el.is('img')) {\n\t\t\t\t\t\t\tel.attr('src', value);\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\tel.replaceWith( '<img src=\"'+value+'\" class=\"' + el.attr('class') + '\" />' );\n\t\t\t\t\t\t}\n\t\t\t\t\t} else {\n\t\t\t\t\t\tel.attr(arr[1], value);\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t} else {\n\t\t\t\ttemplate.find(EVENT_NS + '-'+key).html(value);\n\t\t\t}\n\t\t});\n\t},\n\n\t_getScrollbarSize: function() {\n\t\t// thx David\n\t\tif(mfp.scrollbarSize === undefined) {\n\t\t\tvar scrollDiv = document.createElement(\"div\");\n\t\t\tscrollDiv.style.cssText = 'width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;';\n\t\t\tdocument.body.appendChild(scrollDiv);\n\t\t\tmfp.scrollbarSize = scrollDiv.offsetWidth - scrollDiv.clientWidth;\n\t\t\tdocument.body.removeChild(scrollDiv);\n\t\t}\n\t\treturn mfp.scrollbarSize;\n\t}\n\n}; /* MagnificPopup core prototype end */\n\n\n\n\n/**\n * Public static functions\n */\n$.magnificPopup = {\n\tinstance: null,\n\tproto: MagnificPopup.prototype,\n\tmodules: [],\n\n\topen: function(options, index) {\n\t\t_checkInstance();\t\n\n\t\tif(!options) {\n\t\t\toptions = {};\n\t\t} else {\n\t\t\toptions = $.extend(true, {}, options);\n\t\t}\n\t\t\t\n\n\t\toptions.isObj = true;\n\t\toptions.index = index || 0;\n\t\treturn this.instance.open(options);\n\t},\n\n\tclose: function() {\n\t\treturn $.magnificPopup.instance && $.magnificPopup.instance.close();\n\t},\n\n\tregisterModule: function(name, module) {\n\t\tif(module.options) {\n\t\t\t$.magnificPopup.defaults[name] = module.options;\n\t\t}\n\t\t$.extend(this.proto, module.proto);\t\t\t\n\t\tthis.modules.push(name);\n\t},\n\n\tdefaults: {   \n\n\t\t// Info about options is in docs:\n\t\t// http://dimsemenov.com/plugins/magnific-popup/documentation.html#options\n\t\t\n\t\tdisableOn: 0,\t\n\n\t\tkey: null,\n\n\t\tmidClick: false,\n\n\t\tmainClass: '',\n\n\t\tpreloader: true,\n\n\t\tfocus: '', // CSS selector of input to focus after popup is opened\n\t\t\n\t\tcloseOnContentClick: false,\n\n\t\tcloseOnBgClick: true,\n\n\t\tcloseBtnInside: true, \n\n\t\tshowCloseBtn: true,\n\n\t\tenableEscapeKey: true,\n\n\t\tmodal: false,\n\n\t\talignTop: false,\n\t\n\t\tremovalDelay: 0,\n\n\t\tprependTo: null,\n\t\t\n\t\tfixedContentPos: 'auto', \n\t\n\t\tfixedBgPos: 'auto',\n\n\t\toverflowY: 'auto',\n\n\t\tcloseMarkup: '<button title=\"%title%\" type=\"button\" class=\"mfp-close\">&#215;</button>',\n\n\t\ttClose: 'Close (Esc)',\n\n\t\ttLoading: 'Loading...',\n\n\t\tautoFocusLast: true\n\n\t}\n};\n\n\n\n$.fn.magnificPopup = function(options) {\n\t_checkInstance();\n\n\tvar jqEl = $(this);\n\n\t// We call some API method of first param is a string\n\tif (typeof options === \"string\" ) {\n\n\t\tif(options === 'open') {\n\t\t\tvar items,\n\t\t\t\titemOpts = _isJQ ? jqEl.data('magnificPopup') : jqEl[0].magnificPopup,\n\t\t\t\tindex = parseInt(arguments[1], 10) || 0;\n\n\t\t\tif(itemOpts.items) {\n\t\t\t\titems = itemOpts.items[index];\n\t\t\t} else {\n\t\t\t\titems = jqEl;\n\t\t\t\tif(itemOpts.delegate) {\n\t\t\t\t\titems = items.find(itemOpts.delegate);\n\t\t\t\t}\n\t\t\t\titems = items.eq( index );\n\t\t\t}\n\t\t\tmfp._openClick({mfpEl:items}, jqEl, itemOpts);\n\t\t} else {\n\t\t\tif(mfp.isOpen)\n\t\t\t\tmfp[options].apply(mfp, Array.prototype.slice.call(arguments, 1));\n\t\t}\n\n\t} else {\n\t\t// clone options obj\n\t\toptions = $.extend(true, {}, options);\n\t\t\n\t\t/*\n\t\t * As Zepto doesn't support .data() method for objects \n\t\t * and it works only in normal browsers\n\t\t * we assign \"options\" object directly to the DOM element. FTW!\n\t\t */\n\t\tif(_isJQ) {\n\t\t\tjqEl.data('magnificPopup', options);\n\t\t} else {\n\t\t\tjqEl[0].magnificPopup = options;\n\t\t}\n\n\t\tmfp.addGroup(jqEl, options);\n\n\t}\n\treturn jqEl;\n};\n\n\n//Quick benchmark\n/*\nvar start = performance.now(),\n\ti,\n\trounds = 1000;\n\nfor(i = 0; i < rounds; i++) {\n\n}\nconsole.log('Test #1:', performance.now() - start);\n\nstart = performance.now();\nfor(i = 0; i < rounds; i++) {\n\n}\nconsole.log('Test #2:', performance.now() - start);\n*/\n\n\n/*>>core*/\n\n/*>>inline*/\n\nvar INLINE_NS = 'inline',\n\t_hiddenClass,\n\t_inlinePlaceholder, \n\t_lastInlineElement,\n\t_putInlineElementsBack = function() {\n\t\tif(_lastInlineElement) {\n\t\t\t_inlinePlaceholder.after( _lastInlineElement.addClass(_hiddenClass) ).detach();\n\t\t\t_lastInlineElement = null;\n\t\t}\n\t};\n\n$.magnificPopup.registerModule(INLINE_NS, {\n\toptions: {\n\t\thiddenClass: 'hide', // will be appended with `mfp-` prefix\n\t\tmarkup: '',\n\t\ttNotFound: 'Content not found'\n\t},\n\tproto: {\n\n\t\tinitInline: function() {\n\t\t\tmfp.types.push(INLINE_NS);\n\n\t\t\t_mfpOn(CLOSE_EVENT+'.'+INLINE_NS, function() {\n\t\t\t\t_putInlineElementsBack();\n\t\t\t});\n\t\t},\n\n\t\tgetInline: function(item, template) {\n\n\t\t\t_putInlineElementsBack();\n\n\t\t\tif(item.src) {\n\t\t\t\tvar inlineSt = mfp.st.inline,\n\t\t\t\t\tel = $(item.src);\n\n\t\t\t\tif(el.length) {\n\n\t\t\t\t\t// If target element has parent - we replace it with placeholder and put it back after popup is closed\n\t\t\t\t\tvar parent = el[0].parentNode;\n\t\t\t\t\tif(parent && parent.tagName) {\n\t\t\t\t\t\tif(!_inlinePlaceholder) {\n\t\t\t\t\t\t\t_hiddenClass = inlineSt.hiddenClass;\n\t\t\t\t\t\t\t_inlinePlaceholder = _getEl(_hiddenClass);\n\t\t\t\t\t\t\t_hiddenClass = 'mfp-'+_hiddenClass;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t// replace target inline element with placeholder\n\t\t\t\t\t\t_lastInlineElement = el.after(_inlinePlaceholder).detach().removeClass(_hiddenClass);\n\t\t\t\t\t}\n\n\t\t\t\t\tmfp.updateStatus('ready');\n\t\t\t\t} else {\n\t\t\t\t\tmfp.updateStatus('error', inlineSt.tNotFound);\n\t\t\t\t\tel = $('<div>');\n\t\t\t\t}\n\n\t\t\t\titem.inlineElement = el;\n\t\t\t\treturn el;\n\t\t\t}\n\n\t\t\tmfp.updateStatus('ready');\n\t\t\tmfp._parseMarkup(template, {}, item);\n\t\t\treturn template;\n\t\t}\n\t}\n});\n\n/*>>inline*/\n\n/*>>ajax*/\nvar AJAX_NS = 'ajax',\n\t_ajaxCur,\n\t_removeAjaxCursor = function() {\n\t\tif(_ajaxCur) {\n\t\t\t$(document.body).removeClass(_ajaxCur);\n\t\t}\n\t},\n\t_destroyAjaxRequest = function() {\n\t\t_removeAjaxCursor();\n\t\tif(mfp.req) {\n\t\t\tmfp.req.abort();\n\t\t}\n\t};\n\n$.magnificPopup.registerModule(AJAX_NS, {\n\n\toptions: {\n\t\tsettings: null,\n\t\tcursor: 'mfp-ajax-cur',\n\t\ttError: '<a href=\"%url%\">The content</a> could not be loaded.'\n\t},\n\n\tproto: {\n\t\tinitAjax: function() {\n\t\t\tmfp.types.push(AJAX_NS);\n\t\t\t_ajaxCur = mfp.st.ajax.cursor;\n\n\t\t\t_mfpOn(CLOSE_EVENT+'.'+AJAX_NS, _destroyAjaxRequest);\n\t\t\t_mfpOn('BeforeChange.' + AJAX_NS, _destroyAjaxRequest);\n\t\t},\n\t\tgetAjax: function(item) {\n\n\t\t\tif(_ajaxCur) {\n\t\t\t\t$(document.body).addClass(_ajaxCur);\n\t\t\t}\n\n\t\t\tmfp.updateStatus('loading');\n\n\t\t\tvar opts = $.extend({\n\t\t\t\turl: item.src,\n\t\t\t\tsuccess: function(data, textStatus, jqXHR) {\n\t\t\t\t\tvar temp = {\n\t\t\t\t\t\tdata:data,\n\t\t\t\t\t\txhr:jqXHR\n\t\t\t\t\t};\n\n\t\t\t\t\t_mfpTrigger('ParseAjax', temp);\n\n\t\t\t\t\tmfp.appendContent( $(temp.data), AJAX_NS );\n\n\t\t\t\t\titem.finished = true;\n\n\t\t\t\t\t_removeAjaxCursor();\n\n\t\t\t\t\tmfp._setFocus();\n\n\t\t\t\t\tsetTimeout(function() {\n\t\t\t\t\t\tmfp.wrap.addClass(READY_CLASS);\n\t\t\t\t\t}, 16);\n\n\t\t\t\t\tmfp.updateStatus('ready');\n\n\t\t\t\t\t_mfpTrigger('AjaxContentAdded');\n\t\t\t\t},\n\t\t\t\terror: function() {\n\t\t\t\t\t_removeAjaxCursor();\n\t\t\t\t\titem.finished = item.loadError = true;\n\t\t\t\t\tmfp.updateStatus('error', mfp.st.ajax.tError.replace('%url%', item.src));\n\t\t\t\t}\n\t\t\t}, mfp.st.ajax.settings);\n\n\t\t\tmfp.req = $.ajax(opts);\n\n\t\t\treturn '';\n\t\t}\n\t}\n});\n\n\n\n\n\n\t\n\n/*>>ajax*/\n\n/*>>image*/\nvar _imgInterval,\n\t_getTitle = function(item) {\n\t\tif(item.data && item.data.title !== undefined) \n\t\t\treturn item.data.title;\n\n\t\tvar src = mfp.st.image.titleSrc;\n\n\t\tif(src) {\n\t\t\tif($.isFunction(src)) {\n\t\t\t\treturn src.call(mfp, item);\n\t\t\t} else if(item.el) {\n\t\t\t\treturn item.el.attr(src) || '';\n\t\t\t}\n\t\t}\n\t\treturn '';\n\t};\n\n$.magnificPopup.registerModule('image', {\n\n\toptions: {\n\t\tmarkup: '<div class=\"mfp-figure\">'+\n\t\t\t\t\t'<div class=\"mfp-close\"></div>'+\n\t\t\t\t\t'<figure>'+\n\t\t\t\t\t\t'<div class=\"mfp-img\"></div>'+\n\t\t\t\t\t\t'<figcaption>'+\n\t\t\t\t\t\t\t'<div class=\"mfp-bottom-bar\">'+\n\t\t\t\t\t\t\t\t'<div class=\"mfp-title\"></div>'+\n\t\t\t\t\t\t\t\t'<div class=\"mfp-counter\"></div>'+\n\t\t\t\t\t\t\t'</div>'+\n\t\t\t\t\t\t'</figcaption>'+\n\t\t\t\t\t'</figure>'+\n\t\t\t\t'</div>',\n\t\tcursor: 'mfp-zoom-out-cur',\n\t\ttitleSrc: 'title', \n\t\tverticalFit: true,\n\t\ttError: '<a href=\"%url%\">The image</a> could not be loaded.'\n\t},\n\n\tproto: {\n\t\tinitImage: function() {\n\t\t\tvar imgSt = mfp.st.image,\n\t\t\t\tns = '.image';\n\n\t\t\tmfp.types.push('image');\n\n\t\t\t_mfpOn(OPEN_EVENT+ns, function() {\n\t\t\t\tif(mfp.currItem.type === 'image' && imgSt.cursor) {\n\t\t\t\t\t$(document.body).addClass(imgSt.cursor);\n\t\t\t\t}\n\t\t\t});\n\n\t\t\t_mfpOn(CLOSE_EVENT+ns, function() {\n\t\t\t\tif(imgSt.cursor) {\n\t\t\t\t\t$(document.body).removeClass(imgSt.cursor);\n\t\t\t\t}\n\t\t\t\t_window.off('resize' + EVENT_NS);\n\t\t\t});\n\n\t\t\t_mfpOn('Resize'+ns, mfp.resizeImage);\n\t\t\tif(mfp.isLowIE) {\n\t\t\t\t_mfpOn('AfterChange', mfp.resizeImage);\n\t\t\t}\n\t\t},\n\t\tresizeImage: function() {\n\t\t\tvar item = mfp.currItem;\n\t\t\tif(!item || !item.img) return;\n\n\t\t\tif(mfp.st.image.verticalFit) {\n\t\t\t\tvar decr = 0;\n\t\t\t\t// fix box-sizing in ie7/8\n\t\t\t\tif(mfp.isLowIE) {\n\t\t\t\t\tdecr = parseInt(item.img.css('padding-top'), 10) + parseInt(item.img.css('padding-bottom'),10);\n\t\t\t\t}\n\t\t\t\titem.img.css('max-height', mfp.wH-decr);\n\t\t\t}\n\t\t},\n\t\t_onImageHasSize: function(item) {\n\t\t\tif(item.img) {\n\t\t\t\t\n\t\t\t\titem.hasSize = true;\n\n\t\t\t\tif(_imgInterval) {\n\t\t\t\t\tclearInterval(_imgInterval);\n\t\t\t\t}\n\t\t\t\t\n\t\t\t\titem.isCheckingImgSize = false;\n\n\t\t\t\t_mfpTrigger('ImageHasSize', item);\n\n\t\t\t\tif(item.imgHidden) {\n\t\t\t\t\tif(mfp.content)\n\t\t\t\t\t\tmfp.content.removeClass('mfp-loading');\n\t\t\t\t\t\n\t\t\t\t\titem.imgHidden = false;\n\t\t\t\t}\n\n\t\t\t}\n\t\t},\n\n\t\t/**\n\t\t * Function that loops until the image has size to display elements that rely on it asap\n\t\t */\n\t\tfindImageSize: function(item) {\n\n\t\t\tvar counter = 0,\n\t\t\t\timg = item.img[0],\n\t\t\t\tmfpSetInterval = function(delay) {\n\n\t\t\t\t\tif(_imgInterval) {\n\t\t\t\t\t\tclearInterval(_imgInterval);\n\t\t\t\t\t}\n\t\t\t\t\t// decelerating interval that checks for size of an image\n\t\t\t\t\t_imgInterval = setInterval(function() {\n\t\t\t\t\t\tif(img.naturalWidth > 0) {\n\t\t\t\t\t\t\tmfp._onImageHasSize(item);\n\t\t\t\t\t\t\treturn;\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\tif(counter > 200) {\n\t\t\t\t\t\t\tclearInterval(_imgInterval);\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\tcounter++;\n\t\t\t\t\t\tif(counter === 3) {\n\t\t\t\t\t\t\tmfpSetInterval(10);\n\t\t\t\t\t\t} else if(counter === 40) {\n\t\t\t\t\t\t\tmfpSetInterval(50);\n\t\t\t\t\t\t} else if(counter === 100) {\n\t\t\t\t\t\t\tmfpSetInterval(500);\n\t\t\t\t\t\t}\n\t\t\t\t\t}, delay);\n\t\t\t\t};\n\n\t\t\tmfpSetInterval(1);\n\t\t},\n\n\t\tgetImage: function(item, template) {\n\n\t\t\tvar guard = 0,\n\n\t\t\t\t// image load complete handler\n\t\t\t\tonLoadComplete = function() {\n\t\t\t\t\tif(item) {\n\t\t\t\t\t\tif (item.img[0].complete) {\n\t\t\t\t\t\t\titem.img.off('.mfploader');\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\tif(item === mfp.currItem){\n\t\t\t\t\t\t\t\tmfp._onImageHasSize(item);\n\n\t\t\t\t\t\t\t\tmfp.updateStatus('ready');\n\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\titem.hasSize = true;\n\t\t\t\t\t\t\titem.loaded = true;\n\n\t\t\t\t\t\t\t_mfpTrigger('ImageLoadComplete');\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t}\n\t\t\t\t\t\telse {\n\t\t\t\t\t\t\t// if image complete check fails 200 times (20 sec), we assume that there was an error.\n\t\t\t\t\t\t\tguard++;\n\t\t\t\t\t\t\tif(guard < 200) {\n\t\t\t\t\t\t\t\tsetTimeout(onLoadComplete,100);\n\t\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t\tonLoadError();\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t},\n\n\t\t\t\t// image error handler\n\t\t\t\tonLoadError = function() {\n\t\t\t\t\tif(item) {\n\t\t\t\t\t\titem.img.off('.mfploader');\n\t\t\t\t\t\tif(item === mfp.currItem){\n\t\t\t\t\t\t\tmfp._onImageHasSize(item);\n\t\t\t\t\t\t\tmfp.updateStatus('error', imgSt.tError.replace('%url%', item.src) );\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\titem.hasSize = true;\n\t\t\t\t\t\titem.loaded = true;\n\t\t\t\t\t\titem.loadError = true;\n\t\t\t\t\t}\n\t\t\t\t},\n\t\t\t\timgSt = mfp.st.image;\n\n\n\t\t\tvar el = template.find('.mfp-img');\n\t\t\tif(el.length) {\n\t\t\t\tvar img = document.createElement('img');\n\t\t\t\timg.className = 'mfp-img';\n\t\t\t\tif(item.el && item.el.find('img').length) {\n\t\t\t\t\timg.alt = item.el.find('img').attr('alt');\n\t\t\t\t}\n\t\t\t\titem.img = $(img).on('load.mfploader', onLoadComplete).on('error.mfploader', onLoadError);\n\t\t\t\timg.src = item.src;\n\n\t\t\t\t// without clone() \"error\" event is not firing when IMG is replaced by new IMG\n\t\t\t\t// TODO: find a way to avoid such cloning\n\t\t\t\tif(el.is('img')) {\n\t\t\t\t\titem.img = item.img.clone();\n\t\t\t\t}\n\n\t\t\t\timg = item.img[0];\n\t\t\t\tif(img.naturalWidth > 0) {\n\t\t\t\t\titem.hasSize = true;\n\t\t\t\t} else if(!img.width) {\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\titem.hasSize = false;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\tmfp._parseMarkup(template, {\n\t\t\t\ttitle: _getTitle(item),\n\t\t\t\timg_replaceWith: item.img\n\t\t\t}, item);\n\n\t\t\tmfp.resizeImage();\n\n\t\t\tif(item.hasSize) {\n\t\t\t\tif(_imgInterval) clearInterval(_imgInterval);\n\n\t\t\t\tif(item.loadError) {\n\t\t\t\t\ttemplate.addClass('mfp-loading');\n\t\t\t\t\tmfp.updateStatus('error', imgSt.tError.replace('%url%', item.src) );\n\t\t\t\t} else {\n\t\t\t\t\ttemplate.removeClass('mfp-loading');\n\t\t\t\t\tmfp.updateStatus('ready');\n\t\t\t\t}\n\t\t\t\treturn template;\n\t\t\t}\n\n\t\t\tmfp.updateStatus('loading');\n\t\t\titem.loading = true;\n\n\t\t\tif(!item.hasSize) {\n\t\t\t\titem.imgHidden = true;\n\t\t\t\ttemplate.addClass('mfp-loading');\n\t\t\t\tmfp.findImageSize(item);\n\t\t\t} \n\n\t\t\treturn template;\n\t\t}\n\t}\n});\n\n\n\n/*>>image*/\n\n/*>>zoom*/\nvar hasMozTransform,\n\tgetHasMozTransform = function() {\n\t\tif(hasMozTransform === undefined) {\n\t\t\thasMozTransform = document.createElement('p').style.MozTransform !== undefined;\n\t\t}\n\t\treturn hasMozTransform;\t\t\n\t};\n\n$.magnificPopup.registerModule('zoom', {\n\n\toptions: {\n\t\tenabled: false,\n\t\teasing: 'ease-in-out',\n\t\tduration: 300,\n\t\topener: function(element) {\n\t\t\treturn element.is('img') ? element : element.find('img');\n\t\t}\n\t},\n\n\tproto: {\n\n\t\tinitZoom: function() {\n\t\t\tvar zoomSt = mfp.st.zoom,\n\t\t\t\tns = '.zoom',\n\t\t\t\timage;\n\t\t\t\t\n\t\t\tif(!zoomSt.enabled || !mfp.supportsTransition) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tvar duration = zoomSt.duration,\n\t\t\t\tgetElToAnimate = function(image) {\n\t\t\t\t\tvar newImg = image.clone().removeAttr('style').removeAttr('class').addClass('mfp-animated-image'),\n\t\t\t\t\t\ttransition = 'all '+(zoomSt.duration/1000)+'s ' + zoomSt.easing,\n\t\t\t\t\t\tcssObj = {\n\t\t\t\t\t\t\tposition: 'fixed',\n\t\t\t\t\t\t\tzIndex: 9999,\n\t\t\t\t\t\t\tleft: 0,\n\t\t\t\t\t\t\ttop: 0,\n\t\t\t\t\t\t\t'-webkit-backface-visibility': 'hidden'\n\t\t\t\t\t\t},\n\t\t\t\t\t\tt = 'transition';\n\n\t\t\t\t\tcssObj['-webkit-'+t] = cssObj['-moz-'+t] = cssObj['-o-'+t] = cssObj[t] = transition;\n\n\t\t\t\t\tnewImg.css(cssObj);\n\t\t\t\t\treturn newImg;\n\t\t\t\t},\n\t\t\t\tshowMainContent = function() {\n\t\t\t\t\tmfp.content.css('visibility', 'visible');\n\t\t\t\t},\n\t\t\t\topenTimeout,\n\t\t\t\tanimatedImg;\n\n\t\t\t_mfpOn('BuildControls'+ns, function() {\n\t\t\t\tif(mfp._allowZoom()) {\n\n\t\t\t\t\tclearTimeout(openTimeout);\n\t\t\t\t\tmfp.content.css('visibility', 'hidden');\n\n\t\t\t\t\t// Basically, all code below does is clones existing image, puts in on top of the current one and animated it\n\t\t\t\t\t\n\t\t\t\t\timage = mfp._getItemToZoom();\n\n\t\t\t\t\tif(!image) {\n\t\t\t\t\t\tshowMainContent();\n\t\t\t\t\t\treturn;\n\t\t\t\t\t}\n\n\t\t\t\t\tanimatedImg = getElToAnimate(image); \n\t\t\t\t\t\n\t\t\t\t\tanimatedImg.css( mfp._getOffset() );\n\n\t\t\t\t\tmfp.wrap.append(animatedImg);\n\n\t\t\t\t\topenTimeout = setTimeout(function() {\n\t\t\t\t\t\tanimatedImg.css( mfp._getOffset( true ) );\n\t\t\t\t\t\topenTimeout = setTimeout(function() {\n\n\t\t\t\t\t\t\tshowMainContent();\n\n\t\t\t\t\t\t\tsetTimeout(function() {\n\t\t\t\t\t\t\t\tanimatedImg.remove();\n\t\t\t\t\t\t\t\timage = animatedImg = null;\n\t\t\t\t\t\t\t\t_mfpTrigger('ZoomAnimationEnded');\n\t\t\t\t\t\t\t}, 16); // avoid blink when switching images \n\n\t\t\t\t\t\t}, duration); // this timeout equals animation duration\n\n\t\t\t\t\t}, 16); // by adding this timeout we avoid short glitch at the beginning of animation\n\n\n\t\t\t\t\t// Lots of timeouts...\n\t\t\t\t}\n\t\t\t});\n\t\t\t_mfpOn(BEFORE_CLOSE_EVENT+ns, function() {\n\t\t\t\tif(mfp._allowZoom()) {\n\n\t\t\t\t\tclearTimeout(openTimeout);\n\n\t\t\t\t\tmfp.st.removalDelay = duration;\n\n\t\t\t\t\tif(!image) {\n\t\t\t\t\t\timage = mfp._getItemToZoom();\n\t\t\t\t\t\tif(!image) {\n\t\t\t\t\t\t\treturn;\n\t\t\t\t\t\t}\n\t\t\t\t\t\tanimatedImg = getElToAnimate(image);\n\t\t\t\t\t}\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\tanimatedImg.css( mfp._getOffset(true) );\n\t\t\t\t\tmfp.wrap.append(animatedImg);\n\t\t\t\t\tmfp.content.css('visibility', 'hidden');\n\t\t\t\t\t\n\t\t\t\t\tsetTimeout(function() {\n\t\t\t\t\t\tanimatedImg.css( mfp._getOffset() );\n\t\t\t\t\t}, 16);\n\t\t\t\t}\n\n\t\t\t});\n\n\t\t\t_mfpOn(CLOSE_EVENT+ns, function() {\n\t\t\t\tif(mfp._allowZoom()) {\n\t\t\t\t\tshowMainContent();\n\t\t\t\t\tif(animatedImg) {\n\t\t\t\t\t\tanimatedImg.remove();\n\t\t\t\t\t}\n\t\t\t\t\timage = null;\n\t\t\t\t}\t\n\t\t\t});\n\t\t},\n\n\t\t_allowZoom: function() {\n\t\t\treturn mfp.currItem.type === 'image';\n\t\t},\n\n\t\t_getItemToZoom: function() {\n\t\t\tif(mfp.currItem.hasSize) {\n\t\t\t\treturn mfp.currItem.img;\n\t\t\t} else {\n\t\t\t\treturn false;\n\t\t\t}\n\t\t},\n\n\t\t// Get element postion relative to viewport\n\t\t_getOffset: function(isLarge) {\n\t\t\tvar el;\n\t\t\tif(isLarge) {\n\t\t\t\tel = mfp.currItem.img;\n\t\t\t} else {\n\t\t\t\tel = mfp.st.zoom.opener(mfp.currItem.el || mfp.currItem);\n\t\t\t}\n\n\t\t\tvar offset = el.offset();\n\t\t\tvar paddingTop = parseInt(el.css('padding-top'),10);\n\t\t\tvar paddingBottom = parseInt(el.css('padding-bottom'),10);\n\t\t\toffset.top -= ( $(window).scrollTop() - paddingTop );\n\n\n\t\t\t/*\n\t\t\t\n\t\t\tAnimating left + top + width/height looks glitchy in Firefox, but perfect in Chrome. And vice-versa.\n\n\t\t\t */\n\t\t\tvar obj = {\n\t\t\t\twidth: el.width(),\n\t\t\t\t// fix Zepto height+padding issue\n\t\t\t\theight: (_isJQ ? el.innerHeight() : el[0].offsetHeight) - paddingBottom - paddingTop\n\t\t\t};\n\n\t\t\t// I hate to do this, but there is no another option\n\t\t\tif( getHasMozTransform() ) {\n\t\t\t\tobj['-moz-transform'] = obj['transform'] = 'translate(' + offset.left + 'px,' + offset.top + 'px)';\n\t\t\t} else {\n\t\t\t\tobj.left = offset.left;\n\t\t\t\tobj.top = offset.top;\n\t\t\t}\n\t\t\treturn obj;\n\t\t}\n\n\t}\n});\n\n\n\n/*>>zoom*/\n\n/*>>iframe*/\n\nvar IFRAME_NS = 'iframe',\n\t_emptyPage = '//about:blank',\n\t\n\t_fixIframeBugs = function(isShowing) {\n\t\tif(mfp.currTemplate[IFRAME_NS]) {\n\t\t\tvar el = mfp.currTemplate[IFRAME_NS].find('iframe');\n\t\t\tif(el.length) { \n\t\t\t\t// reset src after the popup is closed to avoid \"video keeps playing after popup is closed\" bug\n\t\t\t\tif(!isShowing) {\n\t\t\t\t\tel[0].src = _emptyPage;\n\t\t\t\t}\n\n\t\t\t\t// IE8 black screen bug fix\n\t\t\t\tif(mfp.isIE8) {\n\t\t\t\t\tel.css('display', isShowing ? 'block' : 'none');\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t};\n\n$.magnificPopup.registerModule(IFRAME_NS, {\n\n\toptions: {\n\t\tmarkup: '<div class=\"mfp-iframe-scaler\">'+\n\t\t\t\t\t'<div class=\"mfp-close\"></div>'+\n\t\t\t\t\t'<iframe class=\"mfp-iframe\" src=\"//about:blank\" frameborder=\"0\" allowfullscreen></iframe>'+\n\t\t\t\t'</div>',\n\n\t\tsrcAction: 'iframe_src',\n\n\t\t// we don't care and support only one default type of URL by default\n\t\tpatterns: {\n\t\t\tyoutube: {\n\t\t\t\tindex: 'youtube.com', \n\t\t\t\tid: 'v=', \n\t\t\t\tsrc: '//www.youtube.com/embed/%id%?autoplay=1'\n\t\t\t},\n\t\t\tvimeo: {\n\t\t\t\tindex: 'vimeo.com/',\n\t\t\t\tid: '/',\n\t\t\t\tsrc: '//player.vimeo.com/video/%id%?autoplay=1'\n\t\t\t},\n\t\t\tgmaps: {\n\t\t\t\tindex: '//maps.google.',\n\t\t\t\tsrc: '%id%&output=embed'\n\t\t\t}\n\t\t}\n\t},\n\n\tproto: {\n\t\tinitIframe: function() {\n\t\t\tmfp.types.push(IFRAME_NS);\n\n\t\t\t_mfpOn('BeforeChange', function(e, prevType, newType) {\n\t\t\t\tif(prevType !== newType) {\n\t\t\t\t\tif(prevType === IFRAME_NS) {\n\t\t\t\t\t\t_fixIframeBugs(); // iframe if removed\n\t\t\t\t\t} else if(newType === IFRAME_NS) {\n\t\t\t\t\t\t_fixIframeBugs(true); // iframe is showing\n\t\t\t\t\t} \n\t\t\t\t}// else {\n\t\t\t\t\t// iframe source is switched, don't do anything\n\t\t\t\t//}\n\t\t\t});\n\n\t\t\t_mfpOn(CLOSE_EVENT + '.' + IFRAME_NS, function() {\n\t\t\t\t_fixIframeBugs();\n\t\t\t});\n\t\t},\n\n\t\tgetIframe: function(item, template) {\n\t\t\tvar embedSrc = item.src;\n\t\t\tvar iframeSt = mfp.st.iframe;\n\t\t\t\t\n\t\t\t$.each(iframeSt.patterns, function() {\n\t\t\t\tif(embedSrc.indexOf( this.index ) > -1) {\n\t\t\t\t\tif(this.id) {\n\t\t\t\t\t\tif(typeof this.id === 'string') {\n\t\t\t\t\t\t\tembedSrc = embedSrc.substr(embedSrc.lastIndexOf(this.id)+this.id.length, embedSrc.length);\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\tembedSrc = this.id.call( this, embedSrc );\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\tembedSrc = this.src.replace('%id%', embedSrc );\n\t\t\t\t\treturn false; // break;\n\t\t\t\t}\n\t\t\t});\n\t\t\t\n\t\t\tvar dataObj = {};\n\t\t\tif(iframeSt.srcAction) {\n\t\t\t\tdataObj[iframeSt.srcAction] = embedSrc;\n\t\t\t}\n\t\t\tmfp._parseMarkup(template, dataObj, item);\n\n\t\t\tmfp.updateStatus('ready');\n\n\t\t\treturn template;\n\t\t}\n\t}\n});\n\n\n\n/*>>iframe*/\n\n/*>>gallery*/\n/**\n * Get looped index depending on number of slides\n */\nvar _getLoopedId = function(index) {\n\t\tvar numSlides = mfp.items.length;\n\t\tif(index > numSlides - 1) {\n\t\t\treturn index - numSlides;\n\t\t} else  if(index < 0) {\n\t\t\treturn numSlides + index;\n\t\t}\n\t\treturn index;\n\t},\n\t_replaceCurrTotal = function(text, curr, total) {\n\t\treturn text.replace(/%curr%/gi, curr + 1).replace(/%total%/gi, total);\n\t};\n\n$.magnificPopup.registerModule('gallery', {\n\n\toptions: {\n\t\tenabled: false,\n\t\tarrowMarkup: '<button title=\"%title%\" type=\"button\" class=\"mfp-arrow mfp-arrow-%dir%\"></button>',\n\t\tpreload: [0,2],\n\t\tnavigateByImgClick: true,\n\t\tarrows: true,\n\n\t\ttPrev: 'Previous (Left arrow key)',\n\t\ttNext: 'Next (Right arrow key)',\n\t\ttCounter: '%curr% of %total%'\n\t},\n\n\tproto: {\n\t\tinitGallery: function() {\n\n\t\t\tvar gSt = mfp.st.gallery,\n\t\t\t\tns = '.mfp-gallery',\n\t\t\t\tsupportsFastClick = Boolean($.fn.mfpFastClick);\n\n\t\t\tmfp.direction = true; // true - next, false - prev\n\t\t\t\n\t\t\tif(!gSt || !gSt.enabled ) return false;\n\n\t\t\t_wrapClasses += ' mfp-gallery';\n\n\t\t\t_mfpOn(OPEN_EVENT+ns, function() {\n\n\t\t\t\tif(gSt.navigateByImgClick) {\n\t\t\t\t\tmfp.wrap.on('click'+ns, '.mfp-img', function() {\n\t\t\t\t\t\tif(mfp.items.length > 1) {\n\t\t\t\t\t\t\tmfp.next();\n\t\t\t\t\t\t\treturn false;\n\t\t\t\t\t\t}\n\t\t\t\t\t});\n\t\t\t\t}\n\n\t\t\t\t_document.on('keydown'+ns, function(e) {\n\t\t\t\t\tif (e.keyCode === 37) {\n\t\t\t\t\t\tmfp.prev();\n\t\t\t\t\t} else if (e.keyCode === 39) {\n\t\t\t\t\t\tmfp.next();\n\t\t\t\t\t}\n\t\t\t\t});\n\t\t\t});\n\n\t\t\t_mfpOn('UpdateStatus'+ns, function(e, data) {\n\t\t\t\tif(data.text) {\n\t\t\t\t\tdata.text = _replaceCurrTotal(data.text, mfp.currItem.index, mfp.items.length);\n\t\t\t\t}\n\t\t\t});\n\n\t\t\t_mfpOn(MARKUP_PARSE_EVENT+ns, function(e, element, values, item) {\n\t\t\t\tvar l = mfp.items.length;\n\t\t\t\tvalues.counter = l > 1 ? _replaceCurrTotal(gSt.tCounter, item.index, l) : '';\n\t\t\t});\n\n\t\t\t_mfpOn('BuildControls' + ns, function() {\n\t\t\t\tif(mfp.items.length > 1 && gSt.arrows && !mfp.arrowLeft) {\n\t\t\t\t\tvar markup = gSt.arrowMarkup,\n\t\t\t\t\t\tarrowLeft = mfp.arrowLeft = $( markup.replace(/%title%/gi, gSt.tPrev).replace(/%dir%/gi, 'left') ).addClass(PREVENT_CLOSE_CLASS),\t\t\t\n\t\t\t\t\t\tarrowRight = mfp.arrowRight = $( markup.replace(/%title%/gi, gSt.tNext).replace(/%dir%/gi, 'right') ).addClass(PREVENT_CLOSE_CLASS);\n\n\t\t\t\t\tvar eName = supportsFastClick ? 'mfpFastClick' : 'click';\n\t\t\t\t\tarrowLeft[eName](function() {\n\t\t\t\t\t\tmfp.prev();\n\t\t\t\t\t});\t\t\t\n\t\t\t\t\tarrowRight[eName](function() {\n\t\t\t\t\t\tmfp.next();\n\t\t\t\t\t});\t\n\n\t\t\t\t\t// Polyfill for :before and :after (adds elements with classes mfp-a and mfp-b)\n\t\t\t\t\tif(mfp.isIE7) {\n\t\t\t\t\t\t_getEl('b', arrowLeft[0], false, true);\n\t\t\t\t\t\t_getEl('a', arrowLeft[0], false, true);\n\t\t\t\t\t\t_getEl('b', arrowRight[0], false, true);\n\t\t\t\t\t\t_getEl('a', arrowRight[0], false, true);\n\t\t\t\t\t}\n\n\t\t\t\t\tmfp.container.append(arrowLeft.add(arrowRight));\n\t\t\t\t}\n\t\t\t});\n\n\t\t\t_mfpOn(CHANGE_EVENT+ns, function() {\n\t\t\t\tif(mfp._preloadTimeout) clearTimeout(mfp._preloadTimeout);\n\n\t\t\t\tmfp._preloadTimeout = setTimeout(function() {\n\t\t\t\t\tmfp.preloadNearbyImages();\n\t\t\t\t\tmfp._preloadTimeout = null;\n\t\t\t\t}, 16);\t\t\n\t\t\t});\n\n\n\t\t\t_mfpOn(CLOSE_EVENT+ns, function() {\n\t\t\t\t_document.off(ns);\n\t\t\t\tmfp.wrap.off('click'+ns);\n\t\t\t\n\t\t\t\tif(mfp.arrowLeft && supportsFastClick) {\n\t\t\t\t\tmfp.arrowLeft.add(mfp.arrowRight).destroyMfpFastClick();\n\t\t\t\t}\n\t\t\t\tmfp.arrowRight = mfp.arrowLeft = null;\n\t\t\t});\n\n\t\t}, \n\t\tnext: function() {\n\t\t\tmfp.direction = true;\n\t\t\tmfp.index = _getLoopedId(mfp.index + 1);\n\t\t\tmfp.updateItemHTML();\n\t\t},\n\t\tprev: function() {\n\t\t\tmfp.direction = false;\n\t\t\tmfp.index = _getLoopedId(mfp.index - 1);\n\t\t\tmfp.updateItemHTML();\n\t\t},\n\t\tgoTo: function(newIndex) {\n\t\t\tmfp.direction = (newIndex >= mfp.index);\n\t\t\tmfp.index = newIndex;\n\t\t\tmfp.updateItemHTML();\n\t\t},\n\t\tpreloadNearbyImages: function() {\n\t\t\tvar p = mfp.st.gallery.preload,\n\t\t\t\tpreloadBefore = Math.min(p[0], mfp.items.length),\n\t\t\t\tpreloadAfter = Math.min(p[1], mfp.items.length),\n\t\t\t\ti;\n\n\t\t\tfor(i = 1; i <= (mfp.direction ? preloadAfter : preloadBefore); i++) {\n\t\t\t\tmfp._preloadItem(mfp.index+i);\n\t\t\t}\n\t\t\tfor(i = 1; i <= (mfp.direction ? preloadBefore : preloadAfter); i++) {\n\t\t\t\tmfp._preloadItem(mfp.index-i);\n\t\t\t}\n\t\t},\n\t\t_preloadItem: function(index) {\n\t\t\tindex = _getLoopedId(index);\n\n\t\t\tif(mfp.items[index].preloaded) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tvar item = mfp.items[index];\n\t\t\tif(!item.parsed) {\n\t\t\t\titem = mfp.parseEl( index );\n\t\t\t}\n\n\t\t\t_mfpTrigger('LazyLoad', item);\n\n\t\t\tif(item.type === 'image') {\n\t\t\t\titem.img = $('<img class=\"mfp-img\" />').on('load.mfploader', function() {\n\t\t\t\t\titem.hasSize = true;\n\t\t\t\t}).on('error.mfploader', function() {\n\t\t\t\t\titem.hasSize = true;\n\t\t\t\t\titem.loadError = true;\n\t\t\t\t\t_mfpTrigger('LazyLoadError', item);\n\t\t\t\t}).attr('src', item.src);\n\t\t\t}\n\n\n\t\t\titem.preloaded = true;\n\t\t}\n\t}\n});\n\n/*\nTouch Support that might be implemented some day\n\naddSwipeGesture: function() {\n\tvar startX,\n\t\tmoved,\n\t\tmultipleTouches;\n\n\t\treturn;\n\n\tvar namespace = '.mfp',\n\t\taddEventNames = function(pref, down, move, up, cancel) {\n\t\t\tmfp._tStart = pref + down + namespace;\n\t\t\tmfp._tMove = pref + move + namespace;\n\t\t\tmfp._tEnd = pref + up + namespace;\n\t\t\tmfp._tCancel = pref + cancel + namespace;\n\t\t};\n\n\tif(window.navigator.msPointerEnabled) {\n\t\taddEventNames('MSPointer', 'Down', 'Move', 'Up', 'Cancel');\n\t} else if('ontouchstart' in window) {\n\t\taddEventNames('touch', 'start', 'move', 'end', 'cancel');\n\t} else {\n\t\treturn;\n\t}\n\t_window.on(mfp._tStart, function(e) {\n\t\tvar oE = e.originalEvent;\n\t\tmultipleTouches = moved = false;\n\t\tstartX = oE.pageX || oE.changedTouches[0].pageX;\n\t}).on(mfp._tMove, function(e) {\n\t\tif(e.originalEvent.touches.length > 1) {\n\t\t\tmultipleTouches = e.originalEvent.touches.length;\n\t\t} else {\n\t\t\t//e.preventDefault();\n\t\t\tmoved = true;\n\t\t}\n\t}).on(mfp._tEnd + ' ' + mfp._tCancel, function(e) {\n\t\tif(moved && !multipleTouches) {\n\t\t\tvar oE = e.originalEvent,\n\t\t\t\tdiff = startX - (oE.pageX || oE.changedTouches[0].pageX);\n\n\t\t\tif(diff > 20) {\n\t\t\t\tmfp.next();\n\t\t\t} else if(diff < -20) {\n\t\t\t\tmfp.prev();\n\t\t\t}\n\t\t}\n\t});\n},\n*/\n\n\n/*>>gallery*/\n\n/*>>retina*/\n\nvar RETINA_NS = 'retina';\n\n$.magnificPopup.registerModule(RETINA_NS, {\n\toptions: {\n\t\treplaceSrc: function(item) {\n\t\t\treturn item.src.replace(/\\.\\w+$/, function(m) { return '@2x' + m; });\n\t\t},\n\t\tratio: 1 // Function or number.  Set to 1 to disable.\n\t},\n\tproto: {\n\t\tinitRetina: function() {\n\t\t\tif(window.devicePixelRatio > 1) {\n\n\t\t\t\tvar st = mfp.st.retina,\n\t\t\t\t\tratio = st.ratio;\n\n\t\t\t\tratio = !isNaN(ratio) ? ratio : ratio();\n\n\t\t\t\tif(ratio > 1) {\n\t\t\t\t\t_mfpOn('ImageHasSize' + '.' + RETINA_NS, function(e, item) {\n\t\t\t\t\t\titem.img.css({\n\t\t\t\t\t\t\t'max-width': item.img[0].naturalWidth / ratio,\n\t\t\t\t\t\t\t'width': '100%'\n\t\t\t\t\t\t});\n\t\t\t\t\t});\n\t\t\t\t\t_mfpOn('ElementParse' + '.' + RETINA_NS, function(e, item) {\n\t\t\t\t\t\titem.src = st.replaceSrc(item, ratio);\n\t\t\t\t\t});\n\t\t\t\t}\n\t\t\t}\n\n\t\t}\n\t}\n});\n\n/*>>retina*/\n\n/*>>fastclick*/\n/**\n * FastClick event implementation. (removes 300ms delay on touch devices)\n * Based on https://developers.google.com/mobile/articles/fast_buttons\n *\n * You may use it outside the Magnific Popup by calling just:\n *\n * $('.your-el').mfpFastClick(function() {\n *     console.log('Clicked!');\n * });\n *\n * To unbind:\n * $('.your-el').destroyMfpFastClick();\n * \n * \n * Note that it's a very basic and simple implementation, it blocks ghost click on the same element where it was bound.\n * If you need something more advanced, use plugin by FT Labs https://github.com/ftlabs/fastclick\n * \n */\n\n(function() {\n\tvar ghostClickDelay = 1000,\n\t\tsupportsTouch = 'ontouchstart' in window,\n\t\tunbindTouchMove = function() {\n\t\t\t_window.off('touchmove'+ns+' touchend'+ns);\n\t\t},\n\t\teName = 'mfpFastClick',\n\t\tns = '.'+eName;\n\n\n\t// As Zepto.js doesn't have an easy way to add custom events (like jQuery), so we implement it in this way\n\t$.fn.mfpFastClick = function(callback) {\n\n\t\treturn $(this).each(function() {\n\n\t\t\tvar elem = $(this),\n\t\t\t\tlock;\n\n\t\t\tif( supportsTouch ) {\n\n\t\t\t\tvar timeout,\n\t\t\t\t\tstartX,\n\t\t\t\t\tstartY,\n\t\t\t\t\tpointerMoved,\n\t\t\t\t\tpoint,\n\t\t\t\t\tnumPointers;\n\n\t\t\t\telem.on('touchstart' + ns, function(e) {\n\t\t\t\t\tpointerMoved = false;\n\t\t\t\t\tnumPointers = 1;\n\n\t\t\t\t\tpoint = e.originalEvent ? e.originalEvent.touches[0] : e.touches[0];\n\t\t\t\t\tstartX = point.clientX;\n\t\t\t\t\tstartY = point.clientY;\n\n\t\t\t\t\t_window.on('touchmove'+ns, function(e) {\n\t\t\t\t\t\tpoint = e.originalEvent ? e.originalEvent.touches : e.touches;\n\t\t\t\t\t\tnumPointers = point.length;\n\t\t\t\t\t\tpoint = point[0];\n\t\t\t\t\t\tif (Math.abs(point.clientX - startX) > 10 ||\n\t\t\t\t\t\t\tMath.abs(point.clientY - startY) > 10) {\n\t\t\t\t\t\t\tpointerMoved = true;\n\t\t\t\t\t\t\tunbindTouchMove();\n\t\t\t\t\t\t}\n\t\t\t\t\t}).on('touchend'+ns, function(e) {\n\t\t\t\t\t\tunbindTouchMove();\n\t\t\t\t\t\tif(pointerMoved || numPointers > 1) {\n\t\t\t\t\t\t\treturn;\n\t\t\t\t\t\t}\n\t\t\t\t\t\tlock = true;\n\t\t\t\t\t\te.preventDefault();\n\t\t\t\t\t\tclearTimeout(timeout);\n\t\t\t\t\t\ttimeout = setTimeout(function() {\n\t\t\t\t\t\t\tlock = false;\n\t\t\t\t\t\t}, ghostClickDelay);\n\t\t\t\t\t\tcallback();\n\t\t\t\t\t});\n\t\t\t\t});\n\n\t\t\t}\n\n\t\t\telem.on('click' + ns, function() {\n\t\t\t\tif(!lock) {\n\t\t\t\t\tcallback();\n\t\t\t\t}\n\t\t\t});\n\t\t});\n\t};\n\n\t$.fn.destroyMfpFastClick = function() {\n\t\t$(this).off('touchstart' + ns + ' click' + ns);\n\t\tif(supportsTouch) _window.off('touchmove'+ns+' touchend'+ns);\n\t};\n})();\n\n/*>>fastclick*/\n _checkInstance(); }));"

/***/ },
/* 6 */
/***/ function(module, exports) {

	/* Copyright Josh Hare Pantone Javascript Functions Sheet 2015 */
	exports.dom = {
	  colourSets: {},
	  pantone: [],
	  columns: 5,
	  currentSet: undefined,
	  ogColours: [],
	  ngColours: [],
	  depth: '',
	  bg: {},
	  badge: {},
	  header: {},
	  colours: {},
	  currentDom: {},
	  primaryColour: '',
	  secondaryColour: '',

	  go: function() {
	    for (var i = 0, num = this.colourSets.pantone.length; i < num; i++) {
	      var link = document.createElement('span');
	      var name = this.colourSets.pantone[i].name;
	      link.dataset.value = name;
	      link.textContent = name;
	      link.onclick = (function(i) {
	        return function() {
	          pan.dom.changePalette(pan.dom.colourSets.pantone[i].name);
	        };
	      })(i);
	      var palettesContainer = document.getElementById('palettesContainer');
	      palettesContainer.appendChild(link);
	      var boxes = document.createElement('div');
	      for (e in this.colourSets.pantone[i].value) {
	        var div = document.createElement('div');
	        div.className = 'mini-square';
	        div.style.backgroundColor = this.colourSets.pantone[i].value[e];
	        boxes.appendChild(div);
	      }
	      if (typeof this.colourSets.pantone[i].link !== 'undefined') {
	        var createA = document.createElement('a');
	        var createAText = document.createTextNode('(link)');
	        createA.setAttribute('href', this.colourSets.pantone[i].link);
	        createA.setAttribute('target', "_blank");
	        createA.className = "pLink";
	        createA.appendChild(createAText);
	        link.appendChild(createA);
	      }
	      link.appendChild(boxes);
	      link.style.color = this.colourSets.pantone[i].value[this.colourSets.pantone[
	        i].value.length - 1]
	    }
	  },

	  spitcolour: function(colours) {
	    var newColour = colours[Math.floor(Math.random() * colours.length)];
	    if (this.luminosity(newColour) > 80) {
	      return newColour;
	    }
	    return this.spitcolour(colours);
	  },

	  pantoneBackground: function loop(depth, columns, colours) {
	    var that = this;
	    ogColours = [];
	    var size = window.innerWidth / columns;
	    badge.style.width = size + 'px';
	    badge.style.height = size + 'px';
	    var offset = 100 / columns / 2;
	    var offsetw = 100 * columns / 2 - 50;
	    var l = ((columns / 2) * size) - (size / 2);
	    $('.badge').removeClass('slide-out');
	    if (offsetw < 50) {

	      badge.style.transform = 'translateX(' + l + 'px)';
	      badge.style.webkitTransform = 'translateX(' + l + 'px)';
	    } else if (offsetw >= 150) {

	      var l = ((columns / 2) * size) - (144);
	      badge.style.transform = 'translateX(' + l + 'px)';
	      badge.style.webkitTransform = 'translateX(' + l + 'px)';
	    } else {

	      //var l = ((columns / 2) * size) - (144);
	      badge.style.transform = 'translateX(' + l + 'px)';
	      badge.style.webkitTransform = 'translateX(' + l + 'px)';
	    }

	    var fillspace = (columns) * Math.ceil((window.innerHeight / size));
	    //arbitrarily adding 10 to compensate for missing the last couple of squares on colour sets with 10 or less colours.. fix?
	    var behind, aboveColour, behindColour, i;
	    above = 0;
	    below = 0;
	    for (i in colours + 10) {
	      var colour = colours[Math.floor(Math.random() * colours.length)];
	      if (colour === behind) {
	        do {
	          colour = this.spitcolour(colours);
	        } while (colour === behind)
	      }
	      if (i + 1 > columns) {
	        if (colour === ogColours[i - columns]) {
	          do {
	            colour = this.spitcolour(colours);
	          } while (colour === ogColours[i - columns] || colour === behind)
	        }
	      }
	      ogColours[i] = colour;
	      var div = document.createElement('div');
	      div.className = 'square';
	      div.onclick = function() {
	        that.colourWheel(this);
	      };
	      div.style.backgroundColor = colour;
	      behind = colour;
	      div.style.width = size + 'px';
	      div.style.height = size + 'px';
	      this.bg.appendChild(div);
	    }
	    if (fillspace > colours.length) {
	      this.pantoneFill(size, fillspace + 20, i, behind);
	    };
	    this.primaryColour = this.spitcolour(colours);
	    this.secondaryColour = this.spitcolour(colours);
	    this.header.style.backgroundColor = this.primaryColour;
	    var primary = document.getElementsByClassName('primary');
	    for (i = 0; i < primary.length; i++) {
	      primary[i].style.color = this.primaryColour;
	      primary[i].style.borderColor = this.primaryColour;
	    }
	    var secondary = document.getElementsByClassName('secondary');
	    for (i = 0; i < secondary.length; i++) {
	      secondary[i].style.backgroundColor = this.primaryColour;
	    }
	  },

	  pantoneFill: function(size, fillspace, counter, behind) {
	    var that = this;
	    var behind = behind;
	    for (i = 1; i < fillspace; i++) {
	      var colour = this.colours[Math.floor(Math.random() * this.colours.length)];
	      do {
	        colour = this.spitcolour(this.colours);
	      } while (colour === this.ogColours[i + counter - this.columns] ||
	        colour ===
	        behind);
	      this.ogColours[i + counter] = colour;
	      behind = colour;
	      var div = document.createElement('div');
	      div.className = 'square';
	      div.onclick = function() {
	        that.colourWheel(this);
	      };
	      div.style.backgroundColor = colour;
	      div.style.width = size + 'px';
	      div.style.height = size + 'px';
	      this.bg.appendChild(div);
	    }
	  },
	  getSet: function(set) {
	    for (var i = 0, num = this.colourSets.pantone.length; i < num; i++) {
	      if (this.colourSets.pantone[i].name == set) {
	        this.currentSet = this.colourSets.pantone[i];
	        return this.colourSets.pantone[i].value;
	      }
	    }

	  },

	  luminosity: function(c) {
	    var c = c.substring(1); // strip #
	    var rgb = parseInt(c, 16); // convert rrggbb to decimal
	    var r = (rgb >> 16) & 0xff; // extract red
	    var g = (rgb >> 8) & 0xff; // extract green
	    var b = (rgb >> 0) & 0xff; // extract blue
	    var luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709
	    return luma;
	  },


	  refreshBackground: function() {
	    var square = document.querySelectorAll('.square');
	    //jQuery to prevent my memory leaks removing with ParentNode.. FIX ME
	    $('.square').remove();
	    this.pantoneBackground(this.currentSet.value.length / this.columns,
	      this.columns,
	      this.currentSet.value);
	  },

	  changePalette: function(set) {
	    console.log(set);
	    this.colours = this.getSet(set);
	    this.refreshBackground();
	    var elem = $(".palettes");

	    if (elem.hasClass('slide-in-half')) {
	      elem.removeClass('slide-in-half').addClass('slide-out-half');
	    } else {
	      elem.removeClass('slide-out-half').addClass('slide-in-half');
	    }
	    this.currentDom.textContent = set;
	  },

	  colourWheel: function(elem) {
	    var primaryColour = this.spitcolour(this.colours);

	    if (primaryColour === this.rgbToHex(elem.style.backgroundColor)) {
	      this.colourWheel(elem);
	    } else {
	      elem.style.backgroundColor = primaryColour;
	    }
	  },
	  rgbToHex: function(color) {
	    if (color.substr(0, 1) === "#") {
	      return color;
	    }
	    var nums = /(.*?)rgb\((\d+),\s*(\d+),\s*(\d+)\)/i.exec(color),
	      r = parseInt(nums[2], 10).toString(16),
	      g = parseInt(nums[3], 10).toString(16),
	      b = parseInt(nums[4], 10).toString(16);
	    return "#" + (
	      (r.length == 1 ? "0" + r : r) +
	      (g.length == 1 ? "0" + g : g) +
	      (b.length == 1 ? "0" + b : b)
	    ).toUpperCase();
	  },

	  screenshot: function() {
	    html2canvas(pan.dom.bg, {
	      onrendered: function(canvas) {
	        // canvas is the final rendered <canvas> element
	        canvas.toBlob(function(blob) {
	          saveAs.saveAs(blob, "pantones.png");
	        });
	      }
	    });
	  }
	}

	Node.prototype.removeClass = function(className) {
	  if (this.classList) {
	    this.classList.remove(className);
	  } else {
	    var classes = this.className.split(" ");
	    classes.splice(classes.indexOf(className), 1);
	    this.className = classes.join(" ");
	  }
	  return this;
	};


/***/ },
/* 7 */
/***/ function(module, exports) {

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


/***/ },
/* 8 */
/***/ function(module, exports) {

	!function(e){var t,n,r,i,s,o,u,a,f={getSliderValuesAtPositionPx:function(e,t){var n,r,i=this,s=i.data("pixel_to_value_mapping");if("undefined"!=typeof s)n=s(e),r=s(t);else{var o=f.getSliderWidthPx.call(i)-i.data("left_grip_width");n=f.inverse_rangemap_0_to_n.call(i,e,o),r=f.inverse_rangemap_0_to_n.call(i,t,o)}return[n,r]},validateAndMoveGripsToPx:function(e,t){var n=this,r=f.getSliderWidthPx.call(n)-n.data("left_grip_width");if(r>=t&&e>=0&&r>=e&&(!n.data("has_right_grip")||t>=e)){var i=n.data("cur_min"),s=n.data("cur_max");f.set_position_from_px.call(n,e,t),f.refresh_grips_style.call(n),f.notify_changed_implicit.call(n,"drag_move",i,s)}return n},updateAriaAttributes:function(){var e=this,t=e.data("settings"),n=e.find(t.left_grip_selector);if(e.data("has_right_grip")){var r=e.find(t.right_grip_selector);n.attr("aria-valuemin",e.data("range_min")).attr("aria-valuenow",l.get_current_min_value.call(e)).attr("aria-valuemax",l.get_current_max_value.call(e)),r.attr("aria-valuemin",l.get_current_min_value.call(e)).attr("aria-valuenow",l.get_current_max_value.call(e)).attr("aria-valuemax",e.data("range_max"))}else n.attr("aria-valuemin",e.data("range_min")).attr("aria-valuenow",l.get_current_min_value.call(e)).attr("aria-valuemax",e.data("range_max"));return e},getSliderWidthPx:function(){var e=this;return Math.round(e.width())},getGripPositionPx:function(e){return parseInt(e.css("left").replace("px",""),10)},getLeftGripPositionPx:function(){var e=this,t=e.data("settings"),n=e.find(t.left_grip_selector);return f.getGripPositionPx.call(e,n)},getRightGripPositionPx:function(){var e=this,t=e.data("settings");if(e.data("has_right_grip"))return f.getGripPositionPx.call(e,e.find(t.right_grip_selector));var n=f.getSliderWidthPx.call(e)-e.data("left_grip_width");return f.rangemap_0_to_n.call(e,e.data("cur_max"),n)},getLeftGripWidth:function(){var e=this,t=e.data("settings"),n=e.find(t.left_grip_selector);return Math.round(n.width())},getRightGripWidth:function(){var e=this,t=e.data("settings"),n=e.find(t.right_grip_selector);return Math.round(n.width())},binarySearch:function(e,t,n,r){for(var i,s,o=0,u=e.length-1;u>=o;){i=(o+u)/2|0,s=n(e,i);var a=r(t,e,i);if(a>0)o=i+1;else{if(!(0>a))return i;u=i-1}}return-1},haveLimits:function(){var e=this,t=e.data("lower-limit"),n=e.data("upper-limit"),r=!1;return"undefined"!=typeof t&&"undefined"!=typeof n&&(r=!0),r},refresh_grips_style:function(){var e=this,t=e.data("settings");if("undefined"!=typeof t.highlight){var n=e.data("highlightedRangeMin");if("undefined"!=typeof n){var r=e.find(t.left_grip_selector),i=e.find(t.right_grip_selector),s=e.data("highlightedRangeMax"),o=e.data("cur_min"),u=e.data("cur_max"),a=t.highlight.grip_class;n>o||o>s?r.removeClass(a):r.addClass(a),n>u||u>s?i.removeClass(a):i.addClass(a)}}},valueToPx:function(e){var t=this,n=t.data("value_to_pixel_mapping");if("undefined"!=typeof n)return n(e);var r=f.getSliderWidthPx.call(t)-t.data("left_grip_width");return f.rangemap_0_to_n.call(t,e,r)},set_position_from_val:function(e,t){var n=this,r=n.data("range_min"),i=n.data("range_max");r>e&&(e=r),e>i&&(e=i),n.data("has_right_grip")?(t>i&&(t=i),r>t&&(t=r)):t=n.data("cur_max");var s=f.valueToPx.call(n,e),o=f.valueToPx.call(n,t);return f.set_handles_at_px.call(n,s,o),n.data("cur_min",e),n.data("has_right_grip")&&n.data("cur_max",t),n},set_position_from_px:function(e,t){var n=this;f.set_handles_at_px.call(n,e,t);var r=f.getSliderValuesAtPositionPx.call(n,e,t),i=r[0],s=r[1];return n.data("cur_min",i),n.data("has_right_grip")&&n.data("cur_max",s),n},set_handles_at_px:function(e,t){var n=this,r=n.data("settings"),i=r.left_grip_selector,s=r.right_grip_selector,o=r.value_bar_selector,u=n.data("left_grip_width"),a=u/2;return n.data("has_right_grip")?(n.find(o).css("left",e+a+"px").css("width",t-e+a+"px"),n.find(i).css("left",e+"px")):(t>e?n.find(o).css("left",e+a+"px").css("width",t-e+a+"px"):n.find(o).css("left",t+a+"px").css("width",e-t+a+"px"),n.find(i).css("left",e+"px")),n.find(s).css("left",t+"px"),n},drag_start_func_touch:function(e,t,n,i,s){var o=this,u=e.originalEvent,a=u.touches[0],l=a.pageY,c=a.pageX,h=Math.abs(o.offset().top-l),p=o.offset().left,v=p-c,m=c-(p+o.width());h>t.touch_tolerance_value_bar_y||v>t.touch_tolerance_value_bar_x||m>t.touch_tolerance_value_bar_x||(u.preventDefault(),r=a.pageX,f.drag_start_func.call(o,a,t,n,i,s))},drag_start_func:function(r,s,o,u,a){var c=this;if(c.find(s.left_grip_selector+","+s.value_bar_selector+","+s.right_grip_selector).removeClass(s.animating_css_class),l.is_enabled.call(c)){var h=e(r.target),p=!1;if("object"==typeof s.highlight&&(p=h.is(s.highlight.panel_selector)),a!==!1||h.is(s.left_grip_selector)||h.is(s.right_grip_selector)||h.is(s.value_bar_selector)||p||h.is(c)){t=c;var d,v,m,g,y,w,E=f.getGripPositionPx.call(c,o),S=f.getSliderWidthPx.call(c)-c.data("left_grip_width"),x=o.offset().left,T=f.getRightGripPositionPx.call(c);v=r.pageX-c.data("left_grip_width")/2,m=Math.abs(x-v),y=v-x,c.data("has_right_grip")?(d=u.offset().left,g=Math.abs(d-v),w=v-d):(g=2*m,w=2*y),s.user_drag_start_callback.call(c,r),m===g?x>v?(E+=y,i=!0):(T+=w,i=!1):g>m?(E+=y,i=!0):(T+=w,i=!1),c.data("has_right_grip")?T>S&&(T=S):E>S&&(E=S),0>E&&(E=0),n=!0;var N=c.data("cur_min"),C=c.data("cur_max");f.set_position_from_px.call(c,E,T),f.refresh_grips_style.call(c),f.notify_changed_implicit.call(c,"drag_start",N,C),r.preventDefault()}}},drag_move_func_touch:function(e){if(n===!0){var t=e.originalEvent;t.preventDefault();var r=t.touches[0];f.drag_move_func(r)}},drag_move_func:function(e){if(n){var s=t,o=f.getSliderWidthPx.call(s)-s.data("left_grip_width"),u=f.getLeftGripPositionPx.call(s),a=f.getRightGripPositionPx.call(s),l=e.pageX,c=l-r,h=s.offset().left+s.data("left_grip_width"),p=h+o,v=0,m=0;h>l&&(v=1,m=0),l>p&&(m=1,v=0),s.data("has_right_grip")&&(i?o>=a&&u+c>a&&(i=!1,u=a):u>=0&&u>a+c&&(i=!0,a=u));var g=u,y=a;(c>0&&!v||0>c&&!m)&&(i?g+=c:y+=c),f.validateAndMoveGripsToPx.call(s,g,y),r=l,e.preventDefault()}},drag_end_func_touch:function(e){var t=e.originalEvent;t.preventDefault();var n=t.touches[0];f.drag_end_func(n)},drag_end_func:function(){var e=t;if("undefined"!=typeof e){n=!1,r=void 0,f.notify_mouse_up_implicit.call(e,i),t=void 0;var s=e.data("settings");e.find(s.left_grip_selector+","+s.value_bar_selector+","+s.right_grip_selector).addClass(s.animating_css_class)}},get_rounding_for_value:function(e){var t=this,n=t.data("rounding"),r=t.data("rounding_ranges");if("object"==typeof r){var i=f.binarySearch.call(t,r,e,function(e,t){return e[t].range},function(e,t,n){return e<t[n].range?n>0?e>=t[n-1].range?0:-1:0:1});if(n=1,i>-1)n=parseInt(r[i].value,10);else{var s=r.length-1;e>=r[s].range&&(n=r[s].value)}}return n},notify_mouse_up_implicit:function(e){var t=this,n=l.get_current_min_value.call(t),r=l.get_current_max_value.call(t),i=!1;(t.data("beforestart_min")!==n||t.data("beforestart_max")!==r)&&(i=!0,t.data("beforestart_min",n),t.data("beforestart_max",r));var s=t.data("settings");return s.user_mouseup_callback.call(t,l.get_current_min_value.call(t),l.get_current_max_value.call(t),e,i),t},notify_changed_implicit:function(e,t,n){var r=this,i=!1;("init"===e||"refresh"===e)&&(i=!0);var s=l.get_current_min_value.call(r),o=l.get_current_max_value.call(r);return i||(t=l.round_value_according_to_rounding.call(r,t),n=l.round_value_according_to_rounding.call(r,n)),(i||s!==t||o!==n)&&(f.notify_changed_explicit.call(r,e,t,n,s,o),i=1),i},notify_changed_explicit:function(e,t,n,r,i){var s=this,o=s.data("settings");return s.data("aria_enabled")&&f.updateAriaAttributes.call(s),o.value_changed_callback.call(s,e,r,i,t,n),s},validate_params:function(t){var n=this,r=n.data("range_min"),i=n.data("range_max"),s=n.data("cur_min"),o=n.data("lower-limit"),u=n.data("upper-limit"),a=f.haveLimits.call(n);"undefined"==typeof r&&e.error("the data-range_min attribute was not defined"),"undefined"==typeof i&&e.error("the data-range_max attribute was not defined"),"undefined"==typeof s&&e.error("the data-cur_min attribute must be defined"),r>i&&e.error("Invalid input parameter. must be min < max"),a&&o>u&&e.error("Invalid data-lower-limit or data-upper-limit"),0===n.find(t.left_grip_selector).length&&e.error("Cannot find element pointed by left_grip_selector: "+t.left_grip_selector),"undefined"!=typeof t.right_grip_selector&&0===n.find(t.right_grip_selector).length&&e.error("Cannot find element pointed by right_grip_selector: "+t.right_grip_selector),"undefined"!=typeof t.value_bar_selector&&0===n.find(t.value_bar_selector).length&&e.error("Cannot find element pointed by value_bar_selector"+t.value_bar_selector)},rangemap_0_to_n:function(e,t){var n=this,r=n.data("range_min"),i=n.data("range_max");return r>=e?0:e>=i?t:Math.floor((t*e-t*r)/(i-r))},inverse_rangemap_0_to_n:function(e,t){var n=this,r=n.data("range_min"),i=n.data("range_max");if(0>=e)return r;if(e>=t)return i;var s=(i-r)*e/t;return s+r}},l={teardown:function(){var t=this;return t.removeData(),e(document).unbind("mousemove.nstSlider").unbind("mouseup.nstSlider"),t.parent().unbind("mousedown.nstSlider").unbind("touchstart.nstSlider").unbind("touchmove.nstSlider").unbind("touchend.nstSlider"),t.unbind("keydown.nstSlider").unbind("keyup.nstSlider"),t},init:function(t){var n=e.extend({animating_css_class:"nst-animating",touch_tolerance_value_bar_y:30,touch_tolerance_value_bar_x:15,left_grip_selector:".nst-slider-grip-left",right_grip_selector:void 0,highlight:void 0,rounding:void 0,value_bar_selector:void 0,value_changed_callback:function(){},user_mouseup_callback:function(){},user_drag_start_callback:function(){}},t),r=e(document);return r.unbind("mouseup.nstSlider"),r.unbind("mousemove.nstSlider"),r.bind("mousemove.nstSlider",f.drag_move_func),r.bind("mouseup.nstSlider",f.drag_end_func),this.each(function(){var t=e(this),r=t.parent();t.data("enabled",!0);var c=t.data("range_min"),p=t.data("range_max"),d=t.data("cur_min"),v=t.data("cur_max");"undefined"==typeof v&&(v=d),""===c&&(c=0),""===p&&(p=0),""===d&&(d=0),""===v&&(v=0),t.data("range_min",c),t.data("range_max",p),t.data("cur_min",d),t.data("cur_max",v),f.validate_params.call(t,n),t.data("settings",n),"undefined"!=typeof n.rounding?l.set_rounding.call(t,n.rounding):"undefined"!=typeof t.data("rounding")?l.set_rounding.call(t,t.data("rounding")):l.set_rounding.call(t,1);var m=t.find(n.left_grip_selector)[0],y=e(m),b=e(t.find(n.right_grip_selector)[0]);"undefined"==typeof y.attr("tabindex")&&y.attr("tabindex",0);var w=!1;t.find(n.right_grip_selector).length>0&&(w=!0,"undefined"==typeof b.attr("tabindex")&&b.attr("tabindex",0)),t.data("has_right_grip",w),t.data("aria_enabled")===!0&&(y.attr("role","slider").attr("aria-disabled","false"),w&&b.attr("role","slider").attr("aria-disabled","false")),t.bind("keyup.nstSlider",function(e){if(t.data("enabled")){switch(e.which){case 37:case 38:case 39:case 40:if(s===u){var n,r,c,p=f.getSliderWidthPx.call(t);if(0>o-a){for(r=a;p>=r;r++)if(n=l.round_value_according_to_rounding.call(t,f.getSliderValuesAtPositionPx.call(t,r,r)[1]),n!==u){c=r;break}}else for(r=a;r>=0;r--)if(n=l.round_value_according_to_rounding.call(t,f.getSliderValuesAtPositionPx.call(t,r,r)[1]),n!==u){c=r;break}i?f.validateAndMoveGripsToPx.call(t,c,f.getRightGripPositionPx.call(t)):f.validateAndMoveGripsToPx.call(t,f.getLeftGripPositionPx.call(t),c),f.notify_mouse_up_implicit.call(t,i)}}s=void 0,o=void 0,u=void 0,a=void 0}}),t.bind("keydown.nstSlider",function(e){if(t.data("enabled")){var n=function(e,n){var r=f.getLeftGripPositionPx.call(t),c=f.getRightGripPositionPx.call(t);switch("undefined"==typeof s&&(o=i?r:c,s=i?l.get_current_min_value.call(t):l.get_current_max_value.call(t)),n.which){case 37:case 40:i?r--:c--,n.preventDefault();break;case 38:case 39:i?r++:c++,n.preventDefault()}a=i?r:c,f.validateAndMoveGripsToPx.call(t,r,c),u=i?l.get_current_min_value.call(t):l.get_current_max_value.call(t)};w&&t.find(":focus").is(b)?(i=!1,n.call(t,b,e)):(i=!0,n.call(t,y,e))}});var E=f.getLeftGripWidth.call(t),S=w?f.getRightGripWidth.call(t):E;t.data("left_grip_width",E),t.data("right_grip_width",S),t.data("value_bar_selector",n.value_bar_selector),c===p||d===v?l.set_range.call(t,c,p):f.set_position_from_val.call(t,t.data("cur_min"),t.data("cur_max")),f.notify_changed_implicit.call(t,"init"),t.data("beforestart_min",l.get_current_min_value.call(t)),t.data("beforestart_max",l.get_current_max_value.call(t)),t.bind("mousedown.nstSlider",function(e){f.drag_start_func.call(t,e,n,y,b,!1)}),r.bind("touchstart.nstSlider",function(e){f.drag_start_func_touch.call(t,e,n,y,b,!0)}),r.bind("touchend.nstSlider",function(e){f.drag_end_func_touch.call(t,e)}),r.bind("touchmove.nstSlider",function(e){f.drag_move_func_touch.call(t,e)});var x=t.data("histogram");"undefined"!=typeof x&&l.set_step_histogram.call(t,x)})},get_range_min:function(){var e=this;return e.data("range_min")},get_range_max:function(){var e=this;return e.data("range_max")},get_current_min_value:function(){var t,n=e(this),r=l.get_range_min.call(n),i=l.get_range_max.call(n),s=n.data("cur_min");if(t=r>=s?r:l.round_value_according_to_rounding.call(n,s),f.haveLimits.call(n)){if(r>=t)return n.data("lower-limit");if(t>=i)return n.data("upper-limit")}else{if(r>=t)return r;if(t>=i)return i}return t},get_current_max_value:function(){var t,n=e(this),r=l.get_range_min.call(n),i=l.get_range_max.call(n),s=n.data("cur_max");if(t=s>=i?i:l.round_value_according_to_rounding.call(n,s),f.haveLimits.call(n)){if(t>=i)return n.data("upper-limit");if(r>=t)return n.data("lower-limit")}else{if(t>=i)return i;if(r>=t)return r}return t},is_handle_to_left_extreme:function(){var e=this;return f.haveLimits.call(e)?e.data("lower-limit")===l.get_current_min_value.call(e):l.get_range_min.call(e)===l.get_current_min_value.call(e)},is_handle_to_right_extreme:function(){var e=this;return f.haveLimits.call(e)?e.data("upper-limit")===l.get_current_max_value.call(e):l.get_range_max.call(e)===l.get_current_max_value.call(e)},refresh:function(){var e=this,t=e.data("last_step_histogram");"undefined"!=typeof t&&l.set_step_histogram.call(e,t),f.set_position_from_val.call(e,l.get_current_min_value.call(e),l.get_current_max_value.call(e));var n=e.data("highlightedRangeMin");if("number"==typeof n){var r=e.data("highlightedRangeMax");l.highlight_range.call(e,n,r)}return f.notify_changed_implicit.call(e,"refresh"),e},disable:function(){var e=this,t=e.data("settings");return e.data("enabled",!1).find(t.left_grip_selector).attr("aria-disabled","true").end().find(t.right_grip_selector).attr("aria-disabled","true"),e},enable:function(){var e=this,t=e.data("settings");return e.data("enabled",!0).find(t.left_grip_selector).attr("aria-disabled","false").end().find(t.right_grip_selector).attr("aria-disabled","false"),e},is_enabled:function(){var e=this;return e.data("enabled")},set_position:function(e,t){var n=this,r=n.data("cur_min"),i=n.data("cur_max");e>t?f.set_position_from_val.call(n,t,e):f.set_position_from_val.call(n,e,t),f.refresh_grips_style.call(n),f.notify_changed_implicit.call(n,"set_position",r,i),n.data("beforestart_min",e),n.data("beforestart_max",t)},set_step_histogram:function(t){var n=this;n.data("last_step_histogram",t),"undefined"==typeof t&&(e.error("got an undefined histogram in set_step_histogram"),f.unset_step_histogram.call(n));var r=f.getSliderWidthPx.call(n)-n.data("left_grip_width"),i=t.length;if(!(0>=r)){var s,o=0;for(s=0;i>s;s++)o+=t[s];if(0===o)return l.unset_step_histogram.call(n),n;var u=parseFloat(o)/r;for(s=0;i>s;s++)t[s]=t[s]/u;var a=[t[0]];for(s=1;i>s;s++){var c=a[s-1]+t[s];a.push(c)}a.push(r);for(var h=[n.data("range_min")],p=0,d=h[0],v=0;r>=p;){var m=parseInt(a.shift(),10),g=f.inverse_rangemap_0_to_n.call(n,v+1,i+1);v++;var y=m-p,b=g-d;for(s=p;m>s;s++){var w=d+b*(s-p+1)/y;h.push(w),p++,d=w}if(p===r)break}h[h.length-1]=n.data("range_max");var E=function(e){return h[parseInt(e,10)]},S=function(t){var r=f.binarySearch.call(n,h,t,function(e,t){return e[t]},function(t,n,r){return t===n[r]?0:t<n[r]&&0===r?0:n[r-1]<=t&&t<n[r]?0:t>n[r]?1:t<=n[r-1]?-1:void e.error("cannot compare s: "+t+" with a["+r+"]. a is: "+n.join(","))});return r};return n.data("pixel_to_value_mapping",E),n.data("value_to_pixel_mapping",S),n}},unset_step_histogram:function(){var e=this;return e.removeData("pixel_to_value_mapping"),e.removeData("value_to_pixel_mapping"),e.removeData("last_step_histogram"),e},set_range:function(e,t){var n=this,r=l.get_current_min_value.call(n),i=l.get_current_max_value.call(n);return n.data("range_min",e),n.data("range_max",t),f.set_position_from_val.call(n,r,i),f.notify_changed_implicit.call(n,"set_range",r,i),n},highlight_range:function(t,n){var r=this,i=r.data("settings");"undefined"==typeof i.highlight&&e.error('you cannot call highlight_range if you haven\' specified the "highlight" parameter in construction!'),t||(t=0),n||(n=0);var s=f.valueToPx.call(r,t),o=f.valueToPx.call(r,n),u=o-s+r.data("left_grip_width"),a=r.find(i.highlight.panel_selector);return a.css("left",s+"px"),a.css("width",u+"px"),r.data("highlightedRangeMin",t),r.data("highlightedRangeMax",n),f.refresh_grips_style.call(r),r},set_rounding:function(t){var n=this;"string"==typeof t&&t.indexOf("{")>-1&&(t=e.parseJSON(t)),n.data("rounding",t);var r=[];if("object"==typeof t){var i;for(i in t)if(t.hasOwnProperty(i)){var s=t[i];r.push({range:s,value:i})}r.sort(function(e,t){return e.range-t.range}),n.data("rounding_ranges",r)}else n.removeData("rounding_ranges");return n},get_rounding:function(){var e=this;return e.data("rounding")},round_value_according_to_rounding:function(t){var n=this,r=f.get_rounding_for_value.call(n,t);if(r>0){var i=t/r,s=parseInt(i,10),o=i-s;o>.5&&s++;var u=s*r;return u}return e.error("rounding must be > 0, got "+r+" instead"),t}},c="nstSlider";e.fn[c]=function(t){if(l[t]){if(this.data("initialized")===!0)return l[t].apply(this,Array.prototype.slice.call(arguments,1));throw new Error("method "+t+" called on an uninitialized instance of "+c)}return"object"!=typeof t&&t?void e.error("Cannot call method "+t):(this.data("initialized",!0),l.init.apply(this,arguments))}}(jQuery)

/***/ },
/* 9 */
/***/ function(module, exports) {

	(function(e){function r(e){if(e in t.style)return e;var n=["Moz","Webkit","O","ms"];var r=e.charAt(0).toUpperCase()+e.substr(1);if(e in t.style){return e}for(var i=0;i<n.length;++i){var s=n[i]+r;if(s in t.style){return s}}}function i(){t.style[n.transform]="";t.style[n.transform]="rotateY(90deg)";return t.style[n.transform]!==""}function f(e){if(typeof e==="string"){this.parse(e)}return this}function l(e,t,n){if(t===true){e.queue(n)}else if(t){e.queue(t,n)}else{n()}}function c(t){var n=[];e.each(t,function(t){t=e.camelCase(t);t=e.transit.propertyMap[t]||e.cssProps[t]||t;t=d(t);if(e.inArray(t,n)===-1){n.push(t)}});return n}function h(t,n,r,i){var s=c(t);if(e.cssEase[r]){r=e.cssEase[r]}var o=""+m(n)+" "+r;if(parseInt(i,10)>0){o+=" "+m(i)}var u=[];e.each(s,function(e,t){u.push(t+" "+o)});return u.join(", ")}function p(t,r){if(!r){e.cssNumber[t]=true}e.transit.propertyMap[t]=n.transform;e.cssHooks[t]={get:function(n){var r=e(n).css("transit:transform");return r.get(t)},set:function(n,r){var i=e(n).css("transit:transform");i.setFromString(t,r);e(n).css({"transit:transform":i})}}}function d(e){return e.replace(/([A-Z])/g,function(e){return"-"+e.toLowerCase()})}function v(e,t){if(typeof e==="string"&&!e.match(/^[\-0-9\.]+$/)){return e}else{return""+e+t}}function m(t){var n=t;if(typeof n==="string"&&!n.match(/^[\-0-9\.]+/)){n=e.fx.speeds[n]||e.fx.speeds._default}return v(n,"ms")}e.transit={version:"0.9.9",propertyMap:{marginLeft:"margin",marginRight:"margin",marginBottom:"margin",marginTop:"margin",paddingLeft:"padding",paddingRight:"padding",paddingBottom:"padding",paddingTop:"padding"},enabled:true,useTransitionEnd:false};var t=document.createElement("div");var n={};var s=navigator.userAgent.toLowerCase().indexOf("chrome")>-1;n.transition=r("transition");n.transitionDelay=r("transitionDelay");n.transform=r("transform");n.transformOrigin=r("transformOrigin");n.transform3d=i();var o={transition:"transitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",WebkitTransition:"webkitTransitionEnd",msTransition:"MSTransitionEnd"};var u=n.transitionEnd=o[n.transition]||null;for(var a in n){if(n.hasOwnProperty(a)&&typeof e.support[a]==="undefined"){e.support[a]=n[a]}}t=null;e.cssEase={_default:"ease","in":"ease-in",out:"ease-out","in-out":"ease-in-out",snap:"cubic-bezier(0,1,.5,1)",easeOutCubic:"cubic-bezier(.215,.61,.355,1)",easeInOutCubic:"cubic-bezier(.645,.045,.355,1)",easeInCirc:"cubic-bezier(.6,.04,.98,.335)",easeOutCirc:"cubic-bezier(.075,.82,.165,1)",easeInOutCirc:"cubic-bezier(.785,.135,.15,.86)",easeInExpo:"cubic-bezier(.95,.05,.795,.035)",easeOutExpo:"cubic-bezier(.19,1,.22,1)",easeInOutExpo:"cubic-bezier(1,0,0,1)",easeInQuad:"cubic-bezier(.55,.085,.68,.53)",easeOutQuad:"cubic-bezier(.25,.46,.45,.94)",easeInOutQuad:"cubic-bezier(.455,.03,.515,.955)",easeInQuart:"cubic-bezier(.895,.03,.685,.22)",easeOutQuart:"cubic-bezier(.165,.84,.44,1)",easeInOutQuart:"cubic-bezier(.77,0,.175,1)",easeInQuint:"cubic-bezier(.755,.05,.855,.06)",easeOutQuint:"cubic-bezier(.23,1,.32,1)",easeInOutQuint:"cubic-bezier(.86,0,.07,1)",easeInSine:"cubic-bezier(.47,0,.745,.715)",easeOutSine:"cubic-bezier(.39,.575,.565,1)",easeInOutSine:"cubic-bezier(.445,.05,.55,.95)",easeInBack:"cubic-bezier(.6,-.28,.735,.045)",easeOutBack:"cubic-bezier(.175, .885,.32,1.275)",easeInOutBack:"cubic-bezier(.68,-.55,.265,1.55)"};e.cssHooks["transit:transform"]={get:function(t){return e(t).data("transform")||new f},set:function(t,r){var i=r;if(!(i instanceof f)){i=new f(i)}if(n.transform==="WebkitTransform"&&!s){t.style[n.transform]=i.toString(true)}else{t.style[n.transform]=i.toString()}e(t).data("transform",i)}};e.cssHooks.transform={set:e.cssHooks["transit:transform"].set};if(e.fn.jquery<"1.8"){e.cssHooks.transformOrigin={get:function(e){return e.style[n.transformOrigin]},set:function(e,t){e.style[n.transformOrigin]=t}};e.cssHooks.transition={get:function(e){return e.style[n.transition]},set:function(e,t){e.style[n.transition]=t}}}p("scale");p("translate");p("rotate");p("rotateX");p("rotateY");p("rotate3d");p("perspective");p("skewX");p("skewY");p("x",true);p("y",true);f.prototype={setFromString:function(e,t){var n=typeof t==="string"?t.split(","):t.constructor===Array?t:[t];n.unshift(e);f.prototype.set.apply(this,n)},set:function(e){var t=Array.prototype.slice.apply(arguments,[1]);if(this.setter[e]){this.setter[e].apply(this,t)}else{this[e]=t.join(",")}},get:function(e){if(this.getter[e]){return this.getter[e].apply(this)}else{return this[e]||0}},setter:{rotate:function(e){this.rotate=v(e,"deg")},rotateX:function(e){this.rotateX=v(e,"deg")},rotateY:function(e){this.rotateY=v(e,"deg")},scale:function(e,t){if(t===undefined){t=e}this.scale=e+","+t},skewX:function(e){this.skewX=v(e,"deg")},skewY:function(e){this.skewY=v(e,"deg")},perspective:function(e){this.perspective=v(e,"px")},x:function(e){this.set("translate",e,null)},y:function(e){this.set("translate",null,e)},translate:function(e,t){if(this._translateX===undefined){this._translateX=0}if(this._translateY===undefined){this._translateY=0}if(e!==null&&e!==undefined){this._translateX=v(e,"px")}if(t!==null&&t!==undefined){this._translateY=v(t,"px")}this.translate=this._translateX+","+this._translateY}},getter:{x:function(){return this._translateX||0},y:function(){return this._translateY||0},scale:function(){var e=(this.scale||"1,1").split(",");if(e[0]){e[0]=parseFloat(e[0])}if(e[1]){e[1]=parseFloat(e[1])}return e[0]===e[1]?e[0]:e},rotate3d:function(){var e=(this.rotate3d||"0,0,0,0deg").split(",");for(var t=0;t<=3;++t){if(e[t]){e[t]=parseFloat(e[t])}}if(e[3]){e[3]=v(e[3],"deg")}return e}},parse:function(e){var t=this;e.replace(/([a-zA-Z0-9]+)\((.*?)\)/g,function(e,n,r){t.setFromString(n,r)})},toString:function(e){var t=[];for(var r in this){if(this.hasOwnProperty(r)){if(!n.transform3d&&(r==="rotateX"||r==="rotateY"||r==="perspective"||r==="transformOrigin")){continue}if(r[0]!=="_"){if(e&&r==="scale"){t.push(r+"3d("+this[r]+",1)")}else if(e&&r==="translate"){t.push(r+"3d("+this[r]+",0)")}else{t.push(r+"("+this[r]+")")}}}}return t.join(" ")}};e.fn.transition=e.fn.transit=function(t,r,i,s){var o=this;var a=0;var f=true;var c=jQuery.extend(true,{},t);if(typeof r==="function"){s=r;r=undefined}if(typeof r==="object"){i=r.easing;a=r.delay||0;f=r.queue||true;s=r.complete;r=r.duration}if(typeof i==="function"){s=i;i=undefined}if(typeof c.easing!=="undefined"){i=c.easing;delete c.easing}if(typeof c.duration!=="undefined"){r=c.duration;delete c.duration}if(typeof c.complete!=="undefined"){s=c.complete;delete c.complete}if(typeof c.queue!=="undefined"){f=c.queue;delete c.queue}if(typeof c.delay!=="undefined"){a=c.delay;delete c.delay}if(typeof r==="undefined"){r=e.fx.speeds._default}if(typeof i==="undefined"){i=e.cssEase._default}r=m(r);var p=h(c,r,i,a);var d=e.transit.enabled&&n.transition;var v=d?parseInt(r,10)+parseInt(a,10):0;if(v===0){var g=function(e){o.css(c);if(s){s.apply(o)}if(e){e()}};l(o,f,g);return o}var y={};var b=function(r){var i=false;var a=function(){if(i){o.unbind(u,a)}if(v>0){o.each(function(){this.style[n.transition]=y[this]||null})}if(typeof s==="function"){s.apply(o)}if(typeof r==="function"){r()}};if(v>0&&u&&e.transit.useTransitionEnd){i=true;o.bind(u,a)}else{window.setTimeout(a,v)}o.each(function(){if(v>0){this.style[n.transition]=p}e(this).css(t)})};var w=function(e){this.offsetWidth;b(e)};l(o,f,w);return this};e.transit.getTransitionValue=h})(jQuery)

/***/ },
/* 10 */
/***/ function(module, exports) {

	(function(e){function s(){var t=e("#"+n.progressBarId);if(t.length==0){e("body").append('<div id="'+n.progressBarId+'" class="'+n.progressBarId+'"><dt></dt><dd></dd></div>');t=e("#"+n.progressBarId)}return t}function o(){return i}function u(e,t,r){var o=s();if(!t){t=(e-i)*n.durationSeed}i=e;var u=101/100*e;u=Math.round(u*100)/100;var a=false;o.transit({width:u+"%",duration:t,complete:function(){if(a){if(u>99){o.delay(n.fadeDelay);o.fadeOut({duration:n.fadeDuration,complete:function(){o.remove()}});n.onComplete()}if(r){r()}}else{a=true}}})}var t="ytLoad";var n;var r;var i;var a={init:function(i){r=false;progress=0;n=e.extend({registerAjaxHandlers:true,startPercentage:30,startDuration:200,completeDuration:50,fadeDelay:200,fadeDuration:200,progressBarId:t,durationSeed:8,onStart:function(){},onComplete:function(){},onError:function(){}},i);if(n.registerAjaxHandlers){e(document).on("ajaxStart."+t,function(){a.start()});e(document).on("ajaxComplete."+t,function(){if(e.active<2){a.complete()}});e(document).on("ajaxError."+t,function(){a.error()})}},progress:function(e,t,n){if(!e){return o()}else{u(e,t,n)}},start:function(){var e=s();r=false;a.progress(n.startPercentage,n.startDuration);n.onStart()},complete:function(){var e=s();a.progress(100,n.completeDuration)},error:function(){var t=e("#"+n.progressBarId);t.addClass("error");n.onError()},destroy:function(){if(n.registerAjaxHandlers){e(document).off("ajaxStart."+t);e(document).off("ajaxComplete."+t);e(document).off("ajaxError."+t)}var r=e("#"+n.progressBarId);if(r.length!=0){r.remove()}}};e.ytLoad=function(n){if(a[n]){return a[n].apply(this,Array.prototype.slice.call(arguments,1))}else if(typeof n==="object"||!n){return a.init.apply(this,arguments)}else{e.error("Method "+method+" does not exist on jQuery."+t)}}})(jQuery)

/***/ },
/* 11 */
/***/ function(module, exports) {

	/*!
	    SlickNav Responsive Mobile Menu v1.0.1
	    (c) 2014 Josh Cope
	    licensed under MIT
	*/
	;(function ($, document, window) {
	    var
	    // default settings object.
	        defaults = {
	            label: 'MENU',
	            duplicate: true,
	            duration: 200,
	            easingOpen: 'swing',
	            easingClose: 'swing',
	            closedSymbol: '&#9658;',
	            openedSymbol: '&#9660;',
	            prependTo: 'body',
	            parentTag: 'a',
	            closeOnClick: false,
	            allowParentLinks: false,
	            nestedParentLinks: true,
	            showChildren: false,
	            init: function () {},
	            open: function () {},
	            close: function () {}
	        },
	        mobileMenu = 'slicknav',
	        prefix = 'slicknav';

	    function Plugin(element, options) {
	        this.element = element;

	        // jQuery has an extend method which merges the contents of two or
	        // more objects, storing the result in the first object. The first object
	        // is generally empty as we don't want to alter the default options for
	        // future instances of the plugin
	        this.settings = $.extend({}, defaults, options);

	        this._defaults = defaults;
	        this._name = mobileMenu;

	        this.init();
	    }

	    Plugin.prototype.init = function () {
	        var $this = this,
	            menu = $(this.element),
	            settings = this.settings,
	            iconClass,
	            menuBar;

	        // clone menu if needed
	        if (settings.duplicate) {
	            $this.mobileNav = menu.clone();
	            //remove ids from clone to prevent css issues
	            $this.mobileNav.removeAttr('id');
	            $this.mobileNav.find('*').each(function (i, e) {
	                $(e).removeAttr('id');
	            });
	        } else {
	            $this.mobileNav = menu;
	        }

	        // styling class for the button
	        iconClass = prefix + '_icon';

	        if (settings.label === '') {
	            iconClass += ' ' + prefix + '_no-text';
	        }

	        if (settings.parentTag == 'a') {
	            settings.parentTag = 'a href="#"';
	        }

	        // create menu bar
	        $this.mobileNav.attr('class', prefix + '_nav');
	        menuBar = $('<div class="' + prefix + '_menu"></div>');
	        $this.btn = $(
	            ['<' + settings.parentTag + ' aria-haspopup="true" tabindex="0" class="' + prefix + '_btn ' + prefix + '_collapsed">',
	                '<span class="' + prefix + '_menutxt">' + settings.label + '</span>',
	                '<span class="' + iconClass + '">',
	                    '<span class="' + prefix + '_icon-bar"></span>',
	                    '<span class="' + prefix + '_icon-bar"></span>',
	                    '<span class="' + prefix + '_icon-bar"></span>',
	                '</span>',
	            '</' + settings.parentTag + '>'
	            ].join('')
	        );
	        $(menuBar).append($this.btn);
	        $(settings.prependTo).prepend(menuBar);
	        menuBar.append($this.mobileNav);

	        // iterate over structure adding additional structure
	        var items = $this.mobileNav.find('li');
	        $(items).each(function () {
	            var item = $(this),
	                data = {};
	            data.children = item.children('ul').attr('role', 'menu');
	            item.data('menu', data);

	            // if a list item has a nested menu
	            if (data.children.length > 0) {

	                // select all text before the child menu
	                // check for anchors

	                var a = item.contents(),
	                    containsAnchor = false;
	                    nodes = [];

	                $(a).each(function () {
	                    if (!$(this).is('ul')) {
	                        nodes.push(this);
	                    } else {
	                        return false;
	                    }

	                    if($(this).is("a")) {
	                        containsAnchor = true;
	                    }
	                });

	                var wrapElement = $(
	                    '<' + settings.parentTag + ' role="menuitem" aria-haspopup="true" tabindex="-1" class="' + prefix + '_item"/>'
	                );

	                // wrap item text with tag and add classes unless we are separating parent links
	                if ((!settings.allowParentLinks || settings.nestedParentLinks) || !containsAnchor) {
	                    var $wrap = $(nodes).wrapAll(wrapElement).parent();
	                    $wrap.addClass(prefix+'_row');
	                } else
	                    $(nodes).wrapAll('<span class="'+prefix+'_parent-link '+prefix+'_row"/>').parent();

	                item.addClass(prefix+'_collapsed');
	                item.addClass(prefix+'_parent');

	                // create parent arrow. wrap with link if parent links and separating
	                var arrowElement = $('<span class="'+prefix+'_arrow">'+settings.closedSymbol+'</span>');

	                if (settings.allowParentLinks && !settings.nestedParentLinks && containsAnchor)
	                    arrowElement = arrowElement.wrap(wrapElement).parent();

	                //append arrow
	                $(nodes).last().after(arrowElement);


	            } else if ( item.children().length === 0) {
	                 item.addClass(prefix+'_txtnode');
	            }

	            // accessibility for links
	            item.children('a').attr('role', 'menuitem').click(function(event){
	                event.preventDefault();
	        if (isloading != 1) {
	            var url = $(this).attr('href');
	             
	            loadpage(url);
	 $($this.btn).click();
	        }
	        return false;
	            });

	            //also close on click if parent links are set
	            if (settings.closeOnClick && settings.allowParentLinks) {
	                item.children('a').children('a').click(function (event) {
	                    //Emulate menu close
	                    $($this.btn).click();
	                });

	                item.find('.'+prefix+'_parent-link a:not(.'+prefix+'_item)').click(function(event){
	                    //Emulate menu close
	                        $($this.btn).click();
	                });
	            }
	        });

	        // structure is in place, now hide appropriate items
	        $(items).each(function () {
	            var data = $(this).data('menu');
	            if (!settings.showChildren){
	                $this._visibilityToggle(data.children, null, false, null, true);
	            }
	        });

	        // finally toggle entire menu
	        $this._visibilityToggle($this.mobileNav, null, false, 'init', true);

	        // accessibility for menu button
	        $this.mobileNav.attr('role','menu');

	        // outline prevention when using mouse
	        $(document).mousedown(function(){
	            $this._outlines(false);
	        });

	        $(document).keyup(function(){
	            $this._outlines(true);
	        });

	        // menu button click
	        $($this.btn).click(function (e) {
	            e.preventDefault();
	            $this._menuToggle();
	        });

	        // click on menu parent
	        $this.mobileNav.on('click', '.' + prefix + '_item', function (e) {
	            e.preventDefault();
	            $this._itemClick($(this));
	        });

	        // check for enter key on menu button and menu parents
	        $($this.btn).keydown(function (e) {
	            var ev = e || event;
	            if(ev.keyCode == 13) {
	                e.preventDefault();
	                $this._menuToggle();
	            }
	        });

	        $this.mobileNav.on('keydown', '.'+prefix+'_item', function(e) {
	            var ev = e || event;
	            if(ev.keyCode == 13) {
	                e.preventDefault();
	                $this._itemClick($(e.target));
	            }
	        });

	        // allow links clickable within parent tags if set
	        if (settings.allowParentLinks && settings.nestedParentLinks) {
	            $('.'+prefix+'_item a').click(function(e){
	                    e.stopImmediatePropagation();
	            });
	        }
	    };

	    //toggle menu
	    Plugin.prototype._menuToggle = function (el) {
	        var $this = this;
	        var btn = $this.btn;
	        var mobileNav = $this.mobileNav;

	        if (btn.hasClass(prefix+'_collapsed')) {
	            btn.removeClass(prefix+'_collapsed');
	            btn.addClass(prefix+'_open');
	        } else {
	            btn.removeClass(prefix+'_open');
	            btn.addClass(prefix+'_collapsed');
	        }
	        btn.addClass(prefix+'_animating');
	        $this._visibilityToggle(mobileNav, btn.parent(), true, btn);
	    };

	    // toggle clicked items
	    Plugin.prototype._itemClick = function (el) {
	        var $this = this;
	        var settings = $this.settings;
	        var data = el.data('menu');
	        if (!data) {
	            data = {};
	            data.arrow = el.children('.'+prefix+'_arrow');
	            data.ul = el.next('ul');
	            data.parent = el.parent();
	            //Separated parent link structure
	            if (data.parent.hasClass(prefix+'_parent-link')) {
	                data.parent = el.parent().parent();
	                data.ul = el.parent().next('ul');
	            }
	            el.data('menu', data);
	        }
	        if (data.parent.hasClass(prefix+'_collapsed')) {
	            data.arrow.html(settings.openedSymbol);
	            data.parent.removeClass(prefix+'_collapsed');
	            data.parent.addClass(prefix+'_open');
	            data.parent.addClass(prefix+'_animating');
	            $this._visibilityToggle(data.ul, data.parent, true, el);
	        } else {
	            data.arrow.html(settings.closedSymbol);
	            data.parent.addClass(prefix+'_collapsed');
	            data.parent.removeClass(prefix+'_open');
	            data.parent.addClass(prefix+'_animating');
	            $this._visibilityToggle(data.ul, data.parent, true, el);
	        }
	    };

	    // toggle actual visibility and accessibility tags
	    Plugin.prototype._visibilityToggle = function(el, parent, animate, trigger, init) {
	        var $this = this;
	        var settings = $this.settings;
	        var items = $this._getActionItems(el);
	        var duration = 0;
	        if (animate) {
	            duration = settings.duration;
	        }

	        if (el.hasClass(prefix+'_hidden')) {
	            el.removeClass(prefix+'_hidden');
	            el.slideDown(duration, settings.easingOpen, function(){

	                $(trigger).removeClass(prefix+'_animating');
	                $(parent).removeClass(prefix+'_animating');

	                //Fire open callback
	                if (!init) {
	                    settings.open(trigger);
	                }
	            });
	            el.attr('aria-hidden','false');
	            items.attr('tabindex', '0');
	            $this._setVisAttr(el, false);
	        } else {
	            el.addClass(prefix+'_hidden');
	            el.slideUp(duration, this.settings.easingClose, function() {
	                el.attr('aria-hidden','true');
	                items.attr('tabindex', '-1');
	                $this._setVisAttr(el, true);
	                el.hide(); //jQuery 1.7 bug fix

	                $(trigger).removeClass(prefix+'_animating');
	                $(parent).removeClass(prefix+'_animating');

	                //Fire init or close callback
	                if (!init){
	                    settings.close(trigger);
	                }
	                else if (trigger == 'init'){
	                    settings.init();
	                }
	            });
	        }
	    };

	    // set attributes of element and children based on visibility
	    Plugin.prototype._setVisAttr = function(el, hidden) {
	        var $this = this;

	        // select all parents that aren't hidden
	        var nonHidden = el.children('li').children('ul').not('.'+prefix+'_hidden');

	        // iterate over all items setting appropriate tags
	        if (!hidden) {
	            nonHidden.each(function(){
	                var ul = $(this);
	                ul.attr('aria-hidden','false');
	                var items = $this._getActionItems(ul);
	                items.attr('tabindex', '0');
	                $this._setVisAttr(ul, hidden);
	            });
	        } else {
	            nonHidden.each(function(){
	                var ul = $(this);
	                ul.attr('aria-hidden','true');
	                var items = $this._getActionItems(ul);
	                items.attr('tabindex', '-1');
	                $this._setVisAttr(ul, hidden);
	            });
	        }
	    };

	    // get all 1st level items that are clickable
	    Plugin.prototype._getActionItems = function(el) {
	        var data = el.data("menu");
	        if (!data) {
	            data = {};
	            var items = el.children('li');
	            var anchors = items.find('a');
	            data.links = anchors.add(items.find('.'+prefix+'_item'));
	            el.data('menu', data);
	        }
	        return data.links;
	    };

	    Plugin.prototype._outlines = function(state) {
	        if (!state) {
	            $('.'+prefix+'_item, .'+prefix+'_btn').css('outline','none');
	        } else {
	            $('.'+prefix+'_item, .'+prefix+'_btn').css('outline','');
	        }
	    };

	    Plugin.prototype.toggle = function(){
	        var $this = this;
	        $this._menuToggle();
	    };

	    Plugin.prototype.open = function(){
	        var $this = this;
	        if ($this.btn.hasClass(prefix+'_collapsed')) {
	            $this._menuToggle();
	        }
	    };

	    Plugin.prototype.close = function(){
	        var $this = this;
	        if ($this.btn.hasClass(prefix+'_open')) {
	            $this._menuToggle();
	        }
	    };

	    $.fn[mobileMenu] = function ( options ) {
	        var args = arguments;

	        // Is the first parameter an object (options), or was omitted, instantiate a new instance
	        if (options === undefined || typeof options === 'object') {
	            return this.each(function () {

	                // Only allow the plugin to be instantiated once due to methods
	                if (!$.data(this, 'plugin_' + mobileMenu)) {

	                    // if it has no instance, create a new one, pass options to our plugin constructor,
	                    // and store the plugin instance in the elements jQuery data object.
	                    $.data(this, 'plugin_' + mobileMenu, new Plugin( this, options ));
	                }
	            });

	        // If is a string and doesn't start with an underscore or 'init' function, treat this as a call to a public method.
	        } else if (typeof options === 'string' && options[0] !== '_' && options !== 'init') {

	            // Cache the method call to make it possible to return a value
	            var returns;

	            this.each(function () {
	                var instance = $.data(this, 'plugin_' + mobileMenu);

	                // Tests that there's already a plugin-instance and checks that the requested public method exists
	                if (instance instanceof Plugin && typeof instance[options] === 'function') {

	                    // Call the method of our plugin instance, and pass it the supplied arguments.
	                    returns = instance[options].apply( instance, Array.prototype.slice.call( args, 1 ) );
	                }
	            });

	            // If the earlier cached method gives a value back return the value, otherwise return this to preserve chainability.
	            return returns !== undefined ? returns : this;
	        }
	    };
	    
	        
	}(jQuery, document, window));

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var require;var require;/* WEBPACK VAR INJECTION */(function(global) {/*
	  html2canvas 0.5.0-beta2 <http://html2canvas.hertzen.com>
	  Copyright (c) 2015 Niklas von Hertzen

	  Released under  License
	*/

	(function(f){if(true){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.html2canvas = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return require(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
	(function (global){
	/*! https://mths.be/punycode v1.3.2 by @mathias */
	;(function(root) {

		/** Detect free variables */
		var freeExports = typeof exports == 'object' && exports &&
			!exports.nodeType && exports;
		var freeModule = typeof module == 'object' && module &&
			!module.nodeType && module;
		var freeGlobal = typeof global == 'object' && global;
		if (
			freeGlobal.global === freeGlobal ||
			freeGlobal.window === freeGlobal ||
			freeGlobal.self === freeGlobal
		) {
			root = freeGlobal;
		}

		/**
		 * The `punycode` object.
		 * @name punycode
		 * @type Object
		 */
		var punycode,

		/** Highest positive signed 32-bit float value */
		maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1

		/** Bootstring parameters */
		base = 36,
		tMin = 1,
		tMax = 26,
		skew = 38,
		damp = 700,
		initialBias = 72,
		initialN = 128, // 0x80
		delimiter = '-', // '\x2D'

		/** Regular expressions */
		regexPunycode = /^xn--/,
		regexNonASCII = /[^\x20-\x7E]/, // unprintable ASCII chars + non-ASCII chars
		regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, // RFC 3490 separators

		/** Error messages */
		errors = {
			'overflow': 'Overflow: input needs wider integers to process',
			'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
			'invalid-input': 'Invalid input'
		},

		/** Convenience shortcuts */
		baseMinusTMin = base - tMin,
		floor = Math.floor,
		stringFromCharCode = String.fromCharCode,

		/** Temporary variable */
		key;

		/*--------------------------------------------------------------------------*/

		/**
		 * A generic error utility function.
		 * @private
		 * @param {String} type The error type.
		 * @returns {Error} Throws a `RangeError` with the applicable error message.
		 */
		function error(type) {
			throw RangeError(errors[type]);
		}

		/**
		 * A generic `Array#map` utility function.
		 * @private
		 * @param {Array} array The array to iterate over.
		 * @param {Function} callback The function that gets called for every array
		 * item.
		 * @returns {Array} A new array of values returned by the callback function.
		 */
		function map(array, fn) {
			var length = array.length;
			var result = [];
			while (length--) {
				result[length] = fn(array[length]);
			}
			return result;
		}

		/**
		 * A simple `Array#map`-like wrapper to work with domain name strings or email
		 * addresses.
		 * @private
		 * @param {String} domain The domain name or email address.
		 * @param {Function} callback The function that gets called for every
		 * character.
		 * @returns {Array} A new string of characters returned by the callback
		 * function.
		 */
		function mapDomain(string, fn) {
			var parts = string.split('@');
			var result = '';
			if (parts.length > 1) {
				// In email addresses, only the domain name should be punycoded. Leave
				// the local part (i.e. everything up to `@`) intact.
				result = parts[0] + '@';
				string = parts[1];
			}
			// Avoid `split(regex)` for IE8 compatibility. See #17.
			string = string.replace(regexSeparators, '\x2E');
			var labels = string.split('.');
			var encoded = map(labels, fn).join('.');
			return result + encoded;
		}

		/**
		 * Creates an array containing the numeric code points of each Unicode
		 * character in the string. While JavaScript uses UCS-2 internally,
		 * this function will convert a pair of surrogate halves (each of which
		 * UCS-2 exposes as separate characters) into a single code point,
		 * matching UTF-16.
		 * @see `punycode.ucs2.encode`
		 * @see <https://mathiasbynens.be/notes/javascript-encoding>
		 * @memberOf punycode.ucs2
		 * @name decode
		 * @param {String} string The Unicode input string (UCS-2).
		 * @returns {Array} The new array of code points.
		 */
		function ucs2decode(string) {
			var output = [],
			    counter = 0,
			    length = string.length,
			    value,
			    extra;
			while (counter < length) {
				value = string.charCodeAt(counter++);
				if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
					// high surrogate, and there is a next character
					extra = string.charCodeAt(counter++);
					if ((extra & 0xFC00) == 0xDC00) { // low surrogate
						output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
					} else {
						// unmatched surrogate; only append this code unit, in case the next
						// code unit is the high surrogate of a surrogate pair
						output.push(value);
						counter--;
					}
				} else {
					output.push(value);
				}
			}
			return output;
		}

		/**
		 * Creates a string based on an array of numeric code points.
		 * @see `punycode.ucs2.decode`
		 * @memberOf punycode.ucs2
		 * @name encode
		 * @param {Array} codePoints The array of numeric code points.
		 * @returns {String} The new Unicode string (UCS-2).
		 */
		function ucs2encode(array) {
			return map(array, function(value) {
				var output = '';
				if (value > 0xFFFF) {
					value -= 0x10000;
					output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
					value = 0xDC00 | value & 0x3FF;
				}
				output += stringFromCharCode(value);
				return output;
			}).join('');
		}

		/**
		 * Converts a basic code point into a digit/integer.
		 * @see `digitToBasic()`
		 * @private
		 * @param {Number} codePoint The basic numeric code point value.
		 * @returns {Number} The numeric value of a basic code point (for use in
		 * representing integers) in the range `0` to `base - 1`, or `base` if
		 * the code point does not represent a value.
		 */
		function basicToDigit(codePoint) {
			if (codePoint - 48 < 10) {
				return codePoint - 22;
			}
			if (codePoint - 65 < 26) {
				return codePoint - 65;
			}
			if (codePoint - 97 < 26) {
				return codePoint - 97;
			}
			return base;
		}

		/**
		 * Converts a digit/integer into a basic code point.
		 * @see `basicToDigit()`
		 * @private
		 * @param {Number} digit The numeric value of a basic code point.
		 * @returns {Number} The basic code point whose value (when used for
		 * representing integers) is `digit`, which needs to be in the range
		 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
		 * used; else, the lowercase form is used. The behavior is undefined
		 * if `flag` is non-zero and `digit` has no uppercase form.
		 */
		function digitToBasic(digit, flag) {
			//  0..25 map to ASCII a..z or A..Z
			// 26..35 map to ASCII 0..9
			return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
		}

		/**
		 * Bias adaptation function as per section 3.4 of RFC 3492.
		 * http://tools.ietf.org/html/rfc3492#section-3.4
		 * @private
		 */
		function adapt(delta, numPoints, firstTime) {
			var k = 0;
			delta = firstTime ? floor(delta / damp) : delta >> 1;
			delta += floor(delta / numPoints);
			for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
				delta = floor(delta / baseMinusTMin);
			}
			return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
		}

		/**
		 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
		 * symbols.
		 * @memberOf punycode
		 * @param {String} input The Punycode string of ASCII-only symbols.
		 * @returns {String} The resulting string of Unicode symbols.
		 */
		function decode(input) {
			// Don't use UCS-2
			var output = [],
			    inputLength = input.length,
			    out,
			    i = 0,
			    n = initialN,
			    bias = initialBias,
			    basic,
			    j,
			    index,
			    oldi,
			    w,
			    k,
			    digit,
			    t,
			    /** Cached calculation results */
			    baseMinusT;

			// Handle the basic code points: let `basic` be the number of input code
			// points before the last delimiter, or `0` if there is none, then copy
			// the first basic code points to the output.

			basic = input.lastIndexOf(delimiter);
			if (basic < 0) {
				basic = 0;
			}

			for (j = 0; j < basic; ++j) {
				// if it's not a basic code point
				if (input.charCodeAt(j) >= 0x80) {
					error('not-basic');
				}
				output.push(input.charCodeAt(j));
			}

			// Main decoding loop: start just after the last delimiter if any basic code
			// points were copied; start at the beginning otherwise.

			for (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {

				// `index` is the index of the next character to be consumed.
				// Decode a generalized variable-length integer into `delta`,
				// which gets added to `i`. The overflow checking is easier
				// if we increase `i` as we go, then subtract off its starting
				// value at the end to obtain `delta`.
				for (oldi = i, w = 1, k = base; /* no condition */; k += base) {

					if (index >= inputLength) {
						error('invalid-input');
					}

					digit = basicToDigit(input.charCodeAt(index++));

					if (digit >= base || digit > floor((maxInt - i) / w)) {
						error('overflow');
					}

					i += digit * w;
					t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);

					if (digit < t) {
						break;
					}

					baseMinusT = base - t;
					if (w > floor(maxInt / baseMinusT)) {
						error('overflow');
					}

					w *= baseMinusT;

				}

				out = output.length + 1;
				bias = adapt(i - oldi, out, oldi == 0);

				// `i` was supposed to wrap around from `out` to `0`,
				// incrementing `n` each time, so we'll fix that now:
				if (floor(i / out) > maxInt - n) {
					error('overflow');
				}

				n += floor(i / out);
				i %= out;

				// Insert `n` at position `i` of the output
				output.splice(i++, 0, n);

			}

			return ucs2encode(output);
		}

		/**
		 * Converts a string of Unicode symbols (e.g. a domain name label) to a
		 * Punycode string of ASCII-only symbols.
		 * @memberOf punycode
		 * @param {String} input The string of Unicode symbols.
		 * @returns {String} The resulting Punycode string of ASCII-only symbols.
		 */
		function encode(input) {
			var n,
			    delta,
			    handledCPCount,
			    basicLength,
			    bias,
			    j,
			    m,
			    q,
			    k,
			    t,
			    currentValue,
			    output = [],
			    /** `inputLength` will hold the number of code points in `input`. */
			    inputLength,
			    /** Cached calculation results */
			    handledCPCountPlusOne,
			    baseMinusT,
			    qMinusT;

			// Convert the input in UCS-2 to Unicode
			input = ucs2decode(input);

			// Cache the length
			inputLength = input.length;

			// Initialize the state
			n = initialN;
			delta = 0;
			bias = initialBias;

			// Handle the basic code points
			for (j = 0; j < inputLength; ++j) {
				currentValue = input[j];
				if (currentValue < 0x80) {
					output.push(stringFromCharCode(currentValue));
				}
			}

			handledCPCount = basicLength = output.length;

			// `handledCPCount` is the number of code points that have been handled;
			// `basicLength` is the number of basic code points.

			// Finish the basic string - if it is not empty - with a delimiter
			if (basicLength) {
				output.push(delimiter);
			}

			// Main encoding loop:
			while (handledCPCount < inputLength) {

				// All non-basic code points < n have been handled already. Find the next
				// larger one:
				for (m = maxInt, j = 0; j < inputLength; ++j) {
					currentValue = input[j];
					if (currentValue >= n && currentValue < m) {
						m = currentValue;
					}
				}

				// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
				// but guard against overflow
				handledCPCountPlusOne = handledCPCount + 1;
				if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
					error('overflow');
				}

				delta += (m - n) * handledCPCountPlusOne;
				n = m;

				for (j = 0; j < inputLength; ++j) {
					currentValue = input[j];

					if (currentValue < n && ++delta > maxInt) {
						error('overflow');
					}

					if (currentValue == n) {
						// Represent delta as a generalized variable-length integer
						for (q = delta, k = base; /* no condition */; k += base) {
							t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
							if (q < t) {
								break;
							}
							qMinusT = q - t;
							baseMinusT = base - t;
							output.push(
								stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
							);
							q = floor(qMinusT / baseMinusT);
						}

						output.push(stringFromCharCode(digitToBasic(q, 0)));
						bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
						delta = 0;
						++handledCPCount;
					}
				}

				++delta;
				++n;

			}
			return output.join('');
		}

		/**
		 * Converts a Punycode string representing a domain name or an email address
		 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
		 * it doesn't matter if you call it on a string that has already been
		 * converted to Unicode.
		 * @memberOf punycode
		 * @param {String} input The Punycoded domain name or email address to
		 * convert to Unicode.
		 * @returns {String} The Unicode representation of the given Punycode
		 * string.
		 */
		function toUnicode(input) {
			return mapDomain(input, function(string) {
				return regexPunycode.test(string)
					? decode(string.slice(4).toLowerCase())
					: string;
			});
		}

		/**
		 * Converts a Unicode string representing a domain name or an email address to
		 * Punycode. Only the non-ASCII parts of the domain name will be converted,
		 * i.e. it doesn't matter if you call it with a domain that's already in
		 * ASCII.
		 * @memberOf punycode
		 * @param {String} input The domain name or email address to convert, as a
		 * Unicode string.
		 * @returns {String} The Punycode representation of the given domain name or
		 * email address.
		 */
		function toASCII(input) {
			return mapDomain(input, function(string) {
				return regexNonASCII.test(string)
					? 'xn--' + encode(string)
					: string;
			});
		}

		/*--------------------------------------------------------------------------*/

		/** Define the public API */
		punycode = {
			/**
			 * A string representing the current Punycode.js version number.
			 * @memberOf punycode
			 * @type String
			 */
			'version': '1.3.2',
			/**
			 * An object of methods to convert from JavaScript's internal character
			 * representation (UCS-2) to Unicode code points, and back.
			 * @see <https://mathiasbynens.be/notes/javascript-encoding>
			 * @memberOf punycode
			 * @type Object
			 */
			'ucs2': {
				'decode': ucs2decode,
				'encode': ucs2encode
			},
			'decode': decode,
			'encode': encode,
			'toASCII': toASCII,
			'toUnicode': toUnicode
		};

		/** Expose `punycode` */
		// Some AMD build optimizers, like r.js, check for specific condition patterns
		// like the following:
		if (
			typeof define == 'function' &&
			typeof define.amd == 'object' &&
			define.amd
		) {
			define('punycode', function() {
				return punycode;
			});
		} else if (freeExports && freeModule) {
			if (module.exports == freeExports) { // in Node.js or RingoJS v0.8.0+
				freeModule.exports = punycode;
			} else { // in Narwhal or RingoJS v0.7.0-
				for (key in punycode) {
					punycode.hasOwnProperty(key) && (freeExports[key] = punycode[key]);
				}
			}
		} else { // in Rhino or a web browser
			root.punycode = punycode;
		}

	}(this));

	}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
	},{}],2:[function(require,module,exports){
	var log = require('./log');

	function restoreOwnerScroll(ownerDocument, x, y) {
	    if (ownerDocument.defaultView && (x !== ownerDocument.defaultView.pageXOffset || y !== ownerDocument.defaultView.pageYOffset)) {
	        ownerDocument.defaultView.scrollTo(x, y);
	    }
	}

	function cloneCanvasContents(canvas, clonedCanvas) {
	    try {
	        if (clonedCanvas) {
	            clonedCanvas.width = canvas.width;
	            clonedCanvas.height = canvas.height;
	            clonedCanvas.getContext("2d").putImageData(canvas.getContext("2d").getImageData(0, 0, canvas.width, canvas.height), 0, 0);
	        }
	    } catch(e) {
	        log("Unable to copy canvas content from", canvas, e);
	    }
	}

	function cloneNode(node, javascriptEnabled) {
	    var clone = node.nodeType === 3 ? document.createTextNode(node.nodeValue) : node.cloneNode(false);

	    var child = node.firstChild;
	    while(child) {
	        if (javascriptEnabled === true || child.nodeType !== 1 || child.nodeName !== 'SCRIPT') {
	            clone.appendChild(cloneNode(child, javascriptEnabled));
	        }
	        child = child.nextSibling;
	    }

	    if (node.nodeType === 1) {
	        clone._scrollTop = node.scrollTop;
	        clone._scrollLeft = node.scrollLeft;
	        if (node.nodeName === "CANVAS") {
	            cloneCanvasContents(node, clone);
	        } else if (node.nodeName === "TEXTAREA" || node.nodeName === "SELECT") {
	            clone.value = node.value;
	        }
	    }

	    return clone;
	}

	function initNode(node) {
	    if (node.nodeType === 1) {
	        node.scrollTop = node._scrollTop;
	        node.scrollLeft = node._scrollLeft;

	        var child = node.firstChild;
	        while(child) {
	            initNode(child);
	            child = child.nextSibling;
	        }
	    }
	}

	module.exports = function(ownerDocument, containerDocument, width, height, options, x ,y) {
	    var documentElement = cloneNode(ownerDocument.documentElement, options.javascriptEnabled);
	    var container = containerDocument.createElement("iframe");

	    container.className = "html2canvas-container";
	    container.style.visibility = "hidden";
	    container.style.position = "fixed";
	    container.style.left = "-10000px";
	    container.style.top = "0px";
	    container.style.border = "0";
	    container.width = width;
	    container.height = height;
	    container.scrolling = "no"; // ios won't scroll without it
	    containerDocument.body.appendChild(container);

	    return new Promise(function(resolve) {
	        var documentClone = container.contentWindow.document;

	        /* Chrome doesn't detect relative background-images assigned in inline <style> sheets when fetched through getComputedStyle
	         if window url is about:blank, we can assign the url to current by writing onto the document
	         */
	        container.contentWindow.onload = container.onload = function() {
	            var interval = setInterval(function() {
	                if (documentClone.body.childNodes.length > 0) {
	                    initNode(documentClone.documentElement);
	                    clearInterval(interval);
	                    if (options.type === "view") {
	                        container.contentWindow.scrollTo(x, y);
	                        if ((/(iPad|iPhone|iPod)/g).test(navigator.userAgent) && (container.contentWindow.scrollY !== y || container.contentWindow.scrollX !== x)) {
	                            documentClone.documentElement.style.top = (-y) + "px";
	                            documentClone.documentElement.style.left = (-x) + "px";
	                            documentClone.documentElement.style.position = 'absolute';
	                        }
	                    }
	                    resolve(container);
	                }
	            }, 50);
	        };

	        documentClone.open();
	        documentClone.write("<!DOCTYPE html><html></html>");
	        // Chrome scrolls the parent document for some reason after the write to the cloned window???
	        restoreOwnerScroll(ownerDocument, x, y);
	        documentClone.replaceChild(documentClone.adoptNode(documentElement), documentClone.documentElement);
	        documentClone.close();
	    });
	};

	},{"./log":13}],3:[function(require,module,exports){
	// http://dev.w3.org/csswg/css-color/

	function Color(value) {
	    this.r = 0;
	    this.g = 0;
	    this.b = 0;
	    this.a = null;
	    var result = this.fromArray(value) ||
	        this.namedColor(value) ||
	        this.rgb(value) ||
	        this.rgba(value) ||
	        this.hex6(value) ||
	        this.hex3(value);
	}

	Color.prototype.darken = function(amount) {
	    var a = 1 - amount;
	    return  new Color([
	        Math.round(this.r * a),
	        Math.round(this.g * a),
	        Math.round(this.b * a),
	        this.a
	    ]);
	};

	Color.prototype.isTransparent = function() {
	    return this.a === 0;
	};

	Color.prototype.isBlack = function() {
	    return this.r === 0 && this.g === 0 && this.b === 0;
	};

	Color.prototype.fromArray = function(array) {
	    if (Array.isArray(array)) {
	        this.r = Math.min(array[0], 255);
	        this.g = Math.min(array[1], 255);
	        this.b = Math.min(array[2], 255);
	        if (array.length > 3) {
	            this.a = array[3];
	        }
	    }

	    return (Array.isArray(array));
	};

	var _hex3 = /^#([a-f0-9]{3})$/i;

	Color.prototype.hex3 = function(value) {
	    var match = null;
	    if ((match = value.match(_hex3)) !== null) {
	        this.r = parseInt(match[1][0] + match[1][0], 16);
	        this.g = parseInt(match[1][1] + match[1][1], 16);
	        this.b = parseInt(match[1][2] + match[1][2], 16);
	    }
	    return match !== null;
	};

	var _hex6 = /^#([a-f0-9]{6})$/i;

	Color.prototype.hex6 = function(value) {
	    var match = null;
	    if ((match = value.match(_hex6)) !== null) {
	        this.r = parseInt(match[1].substring(0, 2), 16);
	        this.g = parseInt(match[1].substring(2, 4), 16);
	        this.b = parseInt(match[1].substring(4, 6), 16);
	    }
	    return match !== null;
	};


	var _rgb = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/;

	Color.prototype.rgb = function(value) {
	    var match = null;
	    if ((match = value.match(_rgb)) !== null) {
	        this.r = Number(match[1]);
	        this.g = Number(match[2]);
	        this.b = Number(match[3]);
	    }
	    return match !== null;
	};

	var _rgba = /^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d?\.?\d+)\s*\)$/;

	Color.prototype.rgba = function(value) {
	    var match = null;
	    if ((match = value.match(_rgba)) !== null) {
	        this.r = Number(match[1]);
	        this.g = Number(match[2]);
	        this.b = Number(match[3]);
	        this.a = Number(match[4]);
	    }
	    return match !== null;
	};

	Color.prototype.toString = function() {
	    return this.a !== null && this.a !== 1 ?
	    "rgba(" + [this.r, this.g, this.b, this.a].join(",") + ")" :
	    "rgb(" + [this.r, this.g, this.b].join(",") + ")";
	};

	Color.prototype.namedColor = function(value) {
	    value = value.toLowerCase();
	    var color = colors[value];
	    if (color) {
	        this.r = color[0];
	        this.g = color[1];
	        this.b = color[2];
	    } else if (value === "transparent") {
	        this.r = this.g = this.b = this.a = 0;
	        return true;
	    }

	    return !!color;
	};

	Color.prototype.isColor = true;

	// JSON.stringify([].slice.call($$('.named-color-table tr'), 1).map(function(row) { return [row.childNodes[3].textContent, row.childNodes[5].textContent.trim().split(",").map(Number)] }).reduce(function(data, row) {data[row[0]] = row[1]; return data}, {}))
	var colors = {
	    "aliceblue": [240, 248, 255],
	    "antiquewhite": [250, 235, 215],
	    "aqua": [0, 255, 255],
	    "aquamarine": [127, 255, 212],
	    "azure": [240, 255, 255],
	    "beige": [245, 245, 220],
	    "bisque": [255, 228, 196],
	    "black": [0, 0, 0],
	    "blanchedalmond": [255, 235, 205],
	    "blue": [0, 0, 255],
	    "blueviolet": [138, 43, 226],
	    "brown": [165, 42, 42],
	    "burlywood": [222, 184, 135],
	    "cadetblue": [95, 158, 160],
	    "chartreuse": [127, 255, 0],
	    "chocolate": [210, 105, 30],
	    "coral": [255, 127, 80],
	    "cornflowerblue": [100, 149, 237],
	    "cornsilk": [255, 248, 220],
	    "crimson": [220, 20, 60],
	    "cyan": [0, 255, 255],
	    "darkblue": [0, 0, 139],
	    "darkcyan": [0, 139, 139],
	    "darkgoldenrod": [184, 134, 11],
	    "darkgray": [169, 169, 169],
	    "darkgreen": [0, 100, 0],
	    "darkgrey": [169, 169, 169],
	    "darkkhaki": [189, 183, 107],
	    "darkmagenta": [139, 0, 139],
	    "darkolivegreen": [85, 107, 47],
	    "darkorange": [255, 140, 0],
	    "darkorchid": [153, 50, 204],
	    "darkred": [139, 0, 0],
	    "darksalmon": [233, 150, 122],
	    "darkseagreen": [143, 188, 143],
	    "darkslateblue": [72, 61, 139],
	    "darkslategray": [47, 79, 79],
	    "darkslategrey": [47, 79, 79],
	    "darkturquoise": [0, 206, 209],
	    "darkviolet": [148, 0, 211],
	    "deeppink": [255, 20, 147],
	    "deepskyblue": [0, 191, 255],
	    "dimgray": [105, 105, 105],
	    "dimgrey": [105, 105, 105],
	    "dodgerblue": [30, 144, 255],
	    "firebrick": [178, 34, 34],
	    "floralwhite": [255, 250, 240],
	    "forestgreen": [34, 139, 34],
	    "fuchsia": [255, 0, 255],
	    "gainsboro": [220, 220, 220],
	    "ghostwhite": [248, 248, 255],
	    "gold": [255, 215, 0],
	    "goldenrod": [218, 165, 32],
	    "gray": [128, 128, 128],
	    "green": [0, 128, 0],
	    "greenyellow": [173, 255, 47],
	    "grey": [128, 128, 128],
	    "honeydew": [240, 255, 240],
	    "hotpink": [255, 105, 180],
	    "indianred": [205, 92, 92],
	    "indigo": [75, 0, 130],
	    "ivory": [255, 255, 240],
	    "khaki": [240, 230, 140],
	    "lavender": [230, 230, 250],
	    "lavenderblush": [255, 240, 245],
	    "lawngreen": [124, 252, 0],
	    "lemonchiffon": [255, 250, 205],
	    "lightblue": [173, 216, 230],
	    "lightcoral": [240, 128, 128],
	    "lightcyan": [224, 255, 255],
	    "lightgoldenrodyellow": [250, 250, 210],
	    "lightgray": [211, 211, 211],
	    "lightgreen": [144, 238, 144],
	    "lightgrey": [211, 211, 211],
	    "lightpink": [255, 182, 193],
	    "lightsalmon": [255, 160, 122],
	    "lightseagreen": [32, 178, 170],
	    "lightskyblue": [135, 206, 250],
	    "lightslategray": [119, 136, 153],
	    "lightslategrey": [119, 136, 153],
	    "lightsteelblue": [176, 196, 222],
	    "lightyellow": [255, 255, 224],
	    "lime": [0, 255, 0],
	    "limegreen": [50, 205, 50],
	    "linen": [250, 240, 230],
	    "magenta": [255, 0, 255],
	    "maroon": [128, 0, 0],
	    "mediumaquamarine": [102, 205, 170],
	    "mediumblue": [0, 0, 205],
	    "mediumorchid": [186, 85, 211],
	    "mediumpurple": [147, 112, 219],
	    "mediumseagreen": [60, 179, 113],
	    "mediumslateblue": [123, 104, 238],
	    "mediumspringgreen": [0, 250, 154],
	    "mediumturquoise": [72, 209, 204],
	    "mediumvioletred": [199, 21, 133],
	    "midnightblue": [25, 25, 112],
	    "mintcream": [245, 255, 250],
	    "mistyrose": [255, 228, 225],
	    "moccasin": [255, 228, 181],
	    "navajowhite": [255, 222, 173],
	    "navy": [0, 0, 128],
	    "oldlace": [253, 245, 230],
	    "olive": [128, 128, 0],
	    "olivedrab": [107, 142, 35],
	    "orange": [255, 165, 0],
	    "orangered": [255, 69, 0],
	    "orchid": [218, 112, 214],
	    "palegoldenrod": [238, 232, 170],
	    "palegreen": [152, 251, 152],
	    "paleturquoise": [175, 238, 238],
	    "palevioletred": [219, 112, 147],
	    "papayawhip": [255, 239, 213],
	    "peachpuff": [255, 218, 185],
	    "peru": [205, 133, 63],
	    "pink": [255, 192, 203],
	    "plum": [221, 160, 221],
	    "powderblue": [176, 224, 230],
	    "purple": [128, 0, 128],
	    "rebeccapurple": [102, 51, 153],
	    "red": [255, 0, 0],
	    "rosybrown": [188, 143, 143],
	    "royalblue": [65, 105, 225],
	    "saddlebrown": [139, 69, 19],
	    "salmon": [250, 128, 114],
	    "sandybrown": [244, 164, 96],
	    "seagreen": [46, 139, 87],
	    "seashell": [255, 245, 238],
	    "sienna": [160, 82, 45],
	    "silver": [192, 192, 192],
	    "skyblue": [135, 206, 235],
	    "slateblue": [106, 90, 205],
	    "slategray": [112, 128, 144],
	    "slategrey": [112, 128, 144],
	    "snow": [255, 250, 250],
	    "springgreen": [0, 255, 127],
	    "steelblue": [70, 130, 180],
	    "tan": [210, 180, 140],
	    "teal": [0, 128, 128],
	    "thistle": [216, 191, 216],
	    "tomato": [255, 99, 71],
	    "turquoise": [64, 224, 208],
	    "violet": [238, 130, 238],
	    "wheat": [245, 222, 179],
	    "white": [255, 255, 255],
	    "whitesmoke": [245, 245, 245],
	    "yellow": [255, 255, 0],
	    "yellowgreen": [154, 205, 50]
	};

	module.exports = Color;

	},{}],4:[function(require,module,exports){
	var Support = require('./support');
	var CanvasRenderer = require('./renderers/canvas');
	var ImageLoader = require('./imageloader');
	var NodeParser = require('./nodeparser');
	var NodeContainer = require('./nodecontainer');
	var log = require('./log');
	var utils = require('./utils');
	var createWindowClone = require('./clone');
	var loadUrlDocument = require('./proxy').loadUrlDocument;
	var getBounds = utils.getBounds;

	var html2canvasNodeAttribute = "data-html2canvas-node";
	var html2canvasCloneIndex = 0;

	function html2canvas(nodeList, options) {
	    var index = html2canvasCloneIndex++;
	    options = options || {};
	    if (options.logging) {
	        window.html2canvas.logging = true;
	        window.html2canvas.start = Date.now();
	    }

	    options.async = typeof(options.async) === "undefined" ? true : options.async;
	    options.allowTaint = typeof(options.allowTaint) === "undefined" ? false : options.allowTaint;
	    options.removeContainer = typeof(options.removeContainer) === "undefined" ? true : options.removeContainer;
	    options.javascriptEnabled = typeof(options.javascriptEnabled) === "undefined" ? false : options.javascriptEnabled;
	    options.imageTimeout = typeof(options.imageTimeout) === "undefined" ? 10000 : options.imageTimeout;
	    options.renderer = typeof(options.renderer) === "function" ? options.renderer : CanvasRenderer;
	    options.strict = !!options.strict;

	    if (typeof(nodeList) === "string") {
	        if (typeof(options.proxy) !== "string") {
	            return Promise.reject("Proxy must be used when rendering url");
	        }
	        var width = options.width != null ? options.width : window.innerWidth;
	        var height = options.height != null ? options.height : window.innerHeight;
	        return loadUrlDocument(absoluteUrl(nodeList), options.proxy, document, width, height, options).then(function(container) {
	            return renderWindow(container.contentWindow.document.documentElement, container, options, width, height);
	        });
	    }

	    var node = ((nodeList === undefined) ? [document.documentElement] : ((nodeList.length) ? nodeList : [nodeList]))[0];
	    node.setAttribute(html2canvasNodeAttribute + index, index);
	    return renderDocument(node.ownerDocument, options, node.ownerDocument.defaultView.innerWidth, node.ownerDocument.defaultView.innerHeight, index).then(function(canvas) {
	        if (typeof(options.onrendered) === "function") {
	            log("options.onrendered is deprecated, html2canvas returns a Promise containing the canvas");
	            options.onrendered(canvas);
	        }
	        return canvas;
	    });
	}

	html2canvas.CanvasRenderer = CanvasRenderer;
	html2canvas.NodeContainer = NodeContainer;
	html2canvas.log = log;
	html2canvas.utils = utils;

	var html2canvasExport = (typeof(document) === "undefined" || typeof(Object.create) !== "function" || typeof(document.createElement("canvas").getContext) !== "function") ? function() {
	    return Promise.reject("No canvas support");
	} : html2canvas;

	module.exports = html2canvasExport;

	if (typeof(define) === 'function' && define.amd) {
	    define('html2canvas', [], function() {
	        return html2canvasExport;
	    });
	}

	function renderDocument(document, options, windowWidth, windowHeight, html2canvasIndex) {
	    return createWindowClone(document, document, windowWidth, windowHeight, options, document.defaultView.pageXOffset, document.defaultView.pageYOffset).then(function(container) {
	        log("Document cloned");
	        var attributeName = html2canvasNodeAttribute + html2canvasIndex;
	        var selector = "[" + attributeName + "='" + html2canvasIndex + "']";
	        document.querySelector(selector).removeAttribute(attributeName);
	        var clonedWindow = container.contentWindow;
	        var node = clonedWindow.document.querySelector(selector);
	        var oncloneHandler = (typeof(options.onclone) === "function") ? Promise.resolve(options.onclone(clonedWindow.document)) : Promise.resolve(true);
	        return oncloneHandler.then(function() {
	            return renderWindow(node, container, options, windowWidth, windowHeight);
	        });
	    });
	}

	function renderWindow(node, container, options, windowWidth, windowHeight) {
	    var clonedWindow = container.contentWindow;
	    var support = new Support(clonedWindow.document);
	    var imageLoader = new ImageLoader(options, support);
	    var bounds = getBounds(node);
	    var width = options.type === "view" ? windowWidth : documentWidth(clonedWindow.document);
	    var height = options.type === "view" ? windowHeight : documentHeight(clonedWindow.document);
	    var renderer = new options.renderer(width, height, imageLoader, options, document);
	    var parser = new NodeParser(node, renderer, support, imageLoader, options);
	    return parser.ready.then(function() {
	        log("Finished rendering");
	        var canvas;

	        if (options.type === "view") {
	            canvas = crop(renderer.canvas, {width: renderer.canvas.width, height: renderer.canvas.height, top: 0, left: 0, x: 0, y: 0});
	        } else if (node === clonedWindow.document.body || node === clonedWindow.document.documentElement || options.canvas != null) {
	            canvas = renderer.canvas;
	        } else {
	            canvas = crop(renderer.canvas, {width:  options.width != null ? options.width : bounds.width, height: options.height != null ? options.height : bounds.height, top: bounds.top, left: bounds.left, x: clonedWindow.pageXOffset, y: clonedWindow.pageYOffset});
	        }

	        cleanupContainer(container, options);
	        return canvas;
	    });
	}

	function cleanupContainer(container, options) {
	    if (options.removeContainer) {
	        container.parentNode.removeChild(container);
	        log("Cleaned up container");
	    }
	}

	function crop(canvas, bounds) {
	    var croppedCanvas = document.createElement("canvas");
	    var x1 = Math.min(canvas.width - 1, Math.max(0, bounds.left));
	    var x2 = Math.min(canvas.width, Math.max(1, bounds.left + bounds.width));
	    var y1 = Math.min(canvas.height - 1, Math.max(0, bounds.top));
	    var y2 = Math.min(canvas.height, Math.max(1, bounds.top + bounds.height));
	    croppedCanvas.width = bounds.width;
	    croppedCanvas.height =  bounds.height;
	    log("Cropping canvas at:", "left:", bounds.left, "top:", bounds.top, "width:", (x2-x1), "height:", (y2-y1));
	    log("Resulting crop with width", bounds.width, "and height", bounds.height, " with x", x1, "and y", y1);
	    croppedCanvas.getContext("2d").drawImage(canvas, x1, y1, x2-x1, y2-y1, bounds.x, bounds.y, x2-x1, y2-y1);
	    return croppedCanvas;
	}

	function documentWidth (doc) {
	    return Math.max(
	        Math.max(doc.body.scrollWidth, doc.documentElement.scrollWidth),
	        Math.max(doc.body.offsetWidth, doc.documentElement.offsetWidth),
	        Math.max(doc.body.clientWidth, doc.documentElement.clientWidth)
	    );
	}

	function documentHeight (doc) {
	    return Math.max(
	        Math.max(doc.body.scrollHeight, doc.documentElement.scrollHeight),
	        Math.max(doc.body.offsetHeight, doc.documentElement.offsetHeight),
	        Math.max(doc.body.clientHeight, doc.documentElement.clientHeight)
	    );
	}

	function absoluteUrl(url) {
	    var link = document.createElement("a");
	    link.href = url;
	    link.href = link.href;
	    return link;
	}

	},{"./clone":2,"./imageloader":11,"./log":13,"./nodecontainer":14,"./nodeparser":15,"./proxy":16,"./renderers/canvas":20,"./support":22,"./utils":26}],5:[function(require,module,exports){
	var log = require('./log');
	var smallImage = require('./utils').smallImage;

	function DummyImageContainer(src) {
	    this.src = src;
	    log("DummyImageContainer for", src);
	    if (!this.promise || !this.image) {
	        log("Initiating DummyImageContainer");
	        DummyImageContainer.prototype.image = new Image();
	        var image = this.image;
	        DummyImageContainer.prototype.promise = new Promise(function(resolve, reject) {
	            image.onload = resolve;
	            image.onerror = reject;
	            image.src = smallImage();
	            if (image.complete === true) {
	                resolve(image);
	            }
	        });
	    }
	}

	module.exports = DummyImageContainer;

	},{"./log":13,"./utils":26}],6:[function(require,module,exports){
	var smallImage = require('./utils').smallImage;

	function Font(family, size) {
	    var container = document.createElement('div'),
	        img = document.createElement('img'),
	        span = document.createElement('span'),
	        sampleText = 'Hidden Text',
	        baseline,
	        middle;

	    container.style.visibility = "hidden";
	    container.style.fontFamily = family;
	    container.style.fontSize = size;
	    container.style.margin = 0;
	    container.style.padding = 0;

	    document.body.appendChild(container);

	    img.src = smallImage();
	    img.width = 1;
	    img.height = 1;

	    img.style.margin = 0;
	    img.style.padding = 0;
	    img.style.verticalAlign = "baseline";

	    span.style.fontFamily = family;
	    span.style.fontSize = size;
	    span.style.margin = 0;
	    span.style.padding = 0;

	    span.appendChild(document.createTextNode(sampleText));
	    container.appendChild(span);
	    container.appendChild(img);
	    baseline = (img.offsetTop - span.offsetTop) + 1;

	    container.removeChild(span);
	    container.appendChild(document.createTextNode(sampleText));

	    container.style.lineHeight = "normal";
	    img.style.verticalAlign = "super";

	    middle = (img.offsetTop-container.offsetTop) + 1;

	    document.body.removeChild(container);

	    this.baseline = baseline;
	    this.lineWidth = 1;
	    this.middle = middle;
	}

	module.exports = Font;

	},{"./utils":26}],7:[function(require,module,exports){
	var Font = require('./font');

	function FontMetrics() {
	    this.data = {};
	}

	FontMetrics.prototype.getMetrics = function(family, size) {
	    if (this.data[family + "-" + size] === undefined) {
	        this.data[family + "-" + size] = new Font(family, size);
	    }
	    return this.data[family + "-" + size];
	};

	module.exports = FontMetrics;

	},{"./font":6}],8:[function(require,module,exports){
	var utils = require('./utils');
	var getBounds = utils.getBounds;
	var loadUrlDocument = require('./proxy').loadUrlDocument;

	function FrameContainer(container, sameOrigin, options) {
	    this.image = null;
	    this.src = container;
	    var self = this;
	    var bounds = getBounds(container);
	    this.promise = (!sameOrigin ? this.proxyLoad(options.proxy, bounds, options) : new Promise(function(resolve) {
	        if (container.contentWindow.document.URL === "about:blank" || container.contentWindow.document.documentElement == null) {
	            container.contentWindow.onload = container.onload = function() {
	                resolve(container);
	            };
	        } else {
	            resolve(container);
	        }
	    })).then(function(container) {
	        var html2canvas = require('./core');
	        return html2canvas(container.contentWindow.document.documentElement, {type: 'view', width: container.width, height: container.height, proxy: options.proxy, javascriptEnabled: options.javascriptEnabled, removeContainer: options.removeContainer, allowTaint: options.allowTaint, imageTimeout: options.imageTimeout / 2});
	    }).then(function(canvas) {
	        return self.image = canvas;
	    });
	}

	FrameContainer.prototype.proxyLoad = function(proxy, bounds, options) {
	    var container = this.src;
	    return loadUrlDocument(container.src, proxy, container.ownerDocument, bounds.width, bounds.height, options);
	};

	module.exports = FrameContainer;

	},{"./core":4,"./proxy":16,"./utils":26}],9:[function(require,module,exports){
	function GradientContainer(imageData) {
	    this.src = imageData.value;
	    this.colorStops = [];
	    this.type = null;
	    this.x0 = 0.5;
	    this.y0 = 0.5;
	    this.x1 = 0.5;
	    this.y1 = 0.5;
	    this.promise = Promise.resolve(true);
	}

	GradientContainer.TYPES = {
	    LINEAR: 1,
	    RADIAL: 2
	};

	// TODO: support hsl[a], negative %/length values
	// TODO: support <angle> (e.g. -?\d{1,3}(?:\.\d+)deg, etc. : https://developer.mozilla.org/docs/Web/CSS/angle )
	GradientContainer.REGEXP_COLORSTOP = /^\s*(rgba?\(\s*\d{1,3},\s*\d{1,3},\s*\d{1,3}(?:,\s*[0-9\.]+)?\s*\)|[a-z]{3,20}|#[a-f0-9]{3,6})(?:\s+(\d{1,3}(?:\.\d+)?)(%|px)?)?(?:\s|$)/i;

	module.exports = GradientContainer;

	},{}],10:[function(require,module,exports){
	function ImageContainer(src, cors) {
	    this.src = src;
	    this.image = new Image();
	    var self = this;
	    this.tainted = null;
	    this.promise = new Promise(function(resolve, reject) {
	        self.image.onload = resolve;
	        self.image.onerror = reject;
	        if (cors) {
	            self.image.crossOrigin = "anonymous";
	        }
	        self.image.src = src;
	        if (self.image.complete === true) {
	            resolve(self.image);
	        }
	    });
	}

	module.exports = ImageContainer;

	},{}],11:[function(require,module,exports){
	var log = require('./log');
	var ImageContainer = require('./imagecontainer');
	var DummyImageContainer = require('./dummyimagecontainer');
	var ProxyImageContainer = require('./proxyimagecontainer');
	var FrameContainer = require('./framecontainer');
	var SVGContainer = require('./svgcontainer');
	var SVGNodeContainer = require('./svgnodecontainer');
	var LinearGradientContainer = require('./lineargradientcontainer');
	var WebkitGradientContainer = require('./webkitgradientcontainer');
	var bind = require('./utils').bind;

	function ImageLoader(options, support) {
	    this.link = null;
	    this.options = options;
	    this.support = support;
	    this.origin = this.getOrigin(window.location.href);
	}

	ImageLoader.prototype.findImages = function(nodes) {
	    var images = [];
	    nodes.reduce(function(imageNodes, container) {
	        switch(container.node.nodeName) {
	        case "IMG":
	            return imageNodes.concat([{
	                args: [container.node.src],
	                method: "url"
	            }]);
	        case "svg":
	        case "IFRAME":
	            return imageNodes.concat([{
	                args: [container.node],
	                method: container.node.nodeName
	            }]);
	        }
	        return imageNodes;
	    }, []).forEach(this.addImage(images, this.loadImage), this);
	    return images;
	};

	ImageLoader.prototype.findBackgroundImage = function(images, container) {
	    container.parseBackgroundImages().filter(this.hasImageBackground).forEach(this.addImage(images, this.loadImage), this);
	    return images;
	};

	ImageLoader.prototype.addImage = function(images, callback) {
	    return function(newImage) {
	        newImage.args.forEach(function(image) {
	            if (!this.imageExists(images, image)) {
	                images.splice(0, 0, callback.call(this, newImage));
	                log('Added image #' + (images.length), typeof(image) === "string" ? image.substring(0, 100) : image);
	            }
	        }, this);
	    };
	};

	ImageLoader.prototype.hasImageBackground = function(imageData) {
	    return imageData.method !== "none";
	};

	ImageLoader.prototype.loadImage = function(imageData) {
	    if (imageData.method === "url") {
	        var src = imageData.args[0];
	        if (this.isSVG(src) && !this.support.svg && !this.options.allowTaint) {
	            return new SVGContainer(src);
	        } else if (src.match(/data:image\/.*;base64,/i)) {
	            return new ImageContainer(src.replace(/url\(['"]{0,}|['"]{0,}\)$/ig, ''), false);
	        } else if (this.isSameOrigin(src) || this.options.allowTaint === true || this.isSVG(src)) {
	            return new ImageContainer(src, false);
	        } else if (this.support.cors && !this.options.allowTaint && this.options.useCORS) {
	            return new ImageContainer(src, true);
	        } else if (this.options.proxy) {
	            return new ProxyImageContainer(src, this.options.proxy);
	        } else {
	            return new DummyImageContainer(src);
	        }
	    } else if (imageData.method === "linear-gradient") {
	        return new LinearGradientContainer(imageData);
	    } else if (imageData.method === "gradient") {
	        return new WebkitGradientContainer(imageData);
	    } else if (imageData.method === "svg") {
	        return new SVGNodeContainer(imageData.args[0], this.support.svg);
	    } else if (imageData.method === "IFRAME") {
	        return new FrameContainer(imageData.args[0], this.isSameOrigin(imageData.args[0].src), this.options);
	    } else {
	        return new DummyImageContainer(imageData);
	    }
	};

	ImageLoader.prototype.isSVG = function(src) {
	    return src.substring(src.length - 3).toLowerCase() === "svg" || SVGContainer.prototype.isInline(src);
	};

	ImageLoader.prototype.imageExists = function(images, src) {
	    return images.some(function(image) {
	        return image.src === src;
	    });
	};

	ImageLoader.prototype.isSameOrigin = function(url) {
	    return (this.getOrigin(url) === this.origin);
	};

	ImageLoader.prototype.getOrigin = function(url) {
	    var link = this.link || (this.link = document.createElement("a"));
	    link.href = url;
	    link.href = link.href; // IE9, LOL! - http://jsfiddle.net/niklasvh/2e48b/
	    return link.protocol + link.hostname + link.port;
	};

	ImageLoader.prototype.getPromise = function(container) {
	    return this.timeout(container, this.options.imageTimeout)['catch'](function() {
	        var dummy = new DummyImageContainer(container.src);
	        return dummy.promise.then(function(image) {
	            container.image = image;
	        });
	    });
	};

	ImageLoader.prototype.get = function(src) {
	    var found = null;
	    return this.images.some(function(img) {
	        return (found = img).src === src;
	    }) ? found : null;
	};

	ImageLoader.prototype.fetch = function(nodes) {
	    this.images = nodes.reduce(bind(this.findBackgroundImage, this), this.findImages(nodes));
	    this.images.forEach(function(image, index) {
	        image.promise.then(function() {
	            log("Succesfully loaded image #"+ (index+1), image);
	        }, function(e) {
	            log("Failed loading image #"+ (index+1), image, e);
	        });
	    });
	    this.ready = Promise.all(this.images.map(this.getPromise, this));
	    log("Finished searching images");
	    return this;
	};

	ImageLoader.prototype.timeout = function(container, timeout) {
	    var timer;
	    var promise = Promise.race([container.promise, new Promise(function(res, reject) {
	        timer = setTimeout(function() {
	            log("Timed out loading image", container);
	            reject(container);
	        }, timeout);
	    })]).then(function(container) {
	        clearTimeout(timer);
	        return container;
	    });
	    promise['catch'](function() {
	        clearTimeout(timer);
	    });
	    return promise;
	};

	module.exports = ImageLoader;

	},{"./dummyimagecontainer":5,"./framecontainer":8,"./imagecontainer":10,"./lineargradientcontainer":12,"./log":13,"./proxyimagecontainer":17,"./svgcontainer":23,"./svgnodecontainer":24,"./utils":26,"./webkitgradientcontainer":27}],12:[function(require,module,exports){
	var GradientContainer = require('./gradientcontainer');
	var Color = require('./color');

	function LinearGradientContainer(imageData) {
	    GradientContainer.apply(this, arguments);
	    this.type = GradientContainer.TYPES.LINEAR;

	    var hasDirection = LinearGradientContainer.REGEXP_DIRECTION.test( imageData.args[0] ) ||
	        !GradientContainer.REGEXP_COLORSTOP.test( imageData.args[0] );

	    if (hasDirection) {
	        imageData.args[0].split(/\s+/).reverse().forEach(function(position, index) {
	            switch(position) {
	            case "left":
	                this.x0 = 0;
	                this.x1 = 1;
	                break;
	            case "top":
	                this.y0 = 0;
	                this.y1 = 1;
	                break;
	            case "right":
	                this.x0 = 1;
	                this.x1 = 0;
	                break;
	            case "bottom":
	                this.y0 = 1;
	                this.y1 = 0;
	                break;
	            case "to":
	                var y0 = this.y0;
	                var x0 = this.x0;
	                this.y0 = this.y1;
	                this.x0 = this.x1;
	                this.x1 = x0;
	                this.y1 = y0;
	                break;
	            case "center":
	                break; // centered by default
	            // Firefox internally converts position keywords to percentages:
	            // http://www.w3.org/TR/2010/WD-CSS2-20101207/colors.html#propdef-background-position
	            default: // percentage or absolute length
	                // TODO: support absolute start point positions (e.g., use bounds to convert px to a ratio)
	                var ratio = parseFloat(position, 10) * 1e-2;
	                if (isNaN(ratio)) { // invalid or unhandled value
	                    break;
	                }
	                if (index === 0) {
	                    this.y0 = ratio;
	                    this.y1 = 1 - this.y0;
	                } else {
	                    this.x0 = ratio;
	                    this.x1 = 1 - this.x0;
	                }
	                break;
	            }
	        }, this);
	    } else {
	        this.y0 = 0;
	        this.y1 = 1;
	    }

	    this.colorStops = imageData.args.slice(hasDirection ? 1 : 0).map(function(colorStop) {
	        var colorStopMatch = colorStop.match(GradientContainer.REGEXP_COLORSTOP);
	        var value = +colorStopMatch[2];
	        var unit = value === 0 ? "%" : colorStopMatch[3]; // treat "0" as "0%"
	        return {
	            color: new Color(colorStopMatch[1]),
	            // TODO: support absolute stop positions (e.g., compute gradient line length & convert px to ratio)
	            stop: unit === "%" ? value / 100 : null
	        };
	    });

	    if (this.colorStops[0].stop === null) {
	        this.colorStops[0].stop = 0;
	    }

	    if (this.colorStops[this.colorStops.length - 1].stop === null) {
	        this.colorStops[this.colorStops.length - 1].stop = 1;
	    }

	    // calculates and fills-in explicit stop positions when omitted from rule
	    this.colorStops.forEach(function(colorStop, index) {
	        if (colorStop.stop === null) {
	            this.colorStops.slice(index).some(function(find, count) {
	                if (find.stop !== null) {
	                    colorStop.stop = ((find.stop - this.colorStops[index - 1].stop) / (count + 1)) + this.colorStops[index - 1].stop;
	                    return true;
	                } else {
	                    return false;
	                }
	            }, this);
	        }
	    }, this);
	}

	LinearGradientContainer.prototype = Object.create(GradientContainer.prototype);

	// TODO: support <angle> (e.g. -?\d{1,3}(?:\.\d+)deg, etc. : https://developer.mozilla.org/docs/Web/CSS/angle )
	LinearGradientContainer.REGEXP_DIRECTION = /^\s*(?:to|left|right|top|bottom|center|\d{1,3}(?:\.\d+)?%?)(?:\s|$)/i;

	module.exports = LinearGradientContainer;

	},{"./color":3,"./gradientcontainer":9}],13:[function(require,module,exports){
	module.exports = function() {
	    if (window.html2canvas.logging && window.console && window.console.log) {
	        Function.prototype.bind.call(window.console.log, (window.console)).apply(window.console, [(Date.now() - window.html2canvas.start) + "ms", "html2canvas:"].concat([].slice.call(arguments, 0)));
	    }
	};

	},{}],14:[function(require,module,exports){
	var Color = require('./color');
	var utils = require('./utils');
	var getBounds = utils.getBounds;
	var parseBackgrounds = utils.parseBackgrounds;
	var offsetBounds = utils.offsetBounds;

	function NodeContainer(node, parent) {
	    this.node = node;
	    this.parent = parent;
	    this.stack = null;
	    this.bounds = null;
	    this.borders = null;
	    this.clip = [];
	    this.backgroundClip = [];
	    this.offsetBounds = null;
	    this.visible = null;
	    this.computedStyles = null;
	    this.colors = {};
	    this.styles = {};
	    this.backgroundImages = null;
	    this.transformData = null;
	    this.transformMatrix = null;
	    this.isPseudoElement = false;
	    this.opacity = null;
	}

	NodeContainer.prototype.cloneTo = function(stack) {
	    stack.visible = this.visible;
	    stack.borders = this.borders;
	    stack.bounds = this.bounds;
	    stack.clip = this.clip;
	    stack.backgroundClip = this.backgroundClip;
	    stack.computedStyles = this.computedStyles;
	    stack.styles = this.styles;
	    stack.backgroundImages = this.backgroundImages;
	    stack.opacity = this.opacity;
	};

	NodeContainer.prototype.getOpacity = function() {
	    return this.opacity === null ? (this.opacity = this.cssFloat('opacity')) : this.opacity;
	};

	NodeContainer.prototype.assignStack = function(stack) {
	    this.stack = stack;
	    stack.children.push(this);
	};

	NodeContainer.prototype.isElementVisible = function() {
	    return this.node.nodeType === Node.TEXT_NODE ? this.parent.visible : (
	        this.css('display') !== "none" &&
	        this.css('visibility') !== "hidden" &&
	        !this.node.hasAttribute("data-html2canvas-ignore") &&
	        (this.node.nodeName !== "INPUT" || this.node.getAttribute("type") !== "hidden")
	    );
	};

	NodeContainer.prototype.css = function(attribute) {
	    if (!this.computedStyles) {
	        this.computedStyles = this.isPseudoElement ? this.parent.computedStyle(this.before ? ":before" : ":after") : this.computedStyle(null);
	    }

	    return this.styles[attribute] || (this.styles[attribute] = this.computedStyles[attribute]);
	};

	NodeContainer.prototype.prefixedCss = function(attribute) {
	    var prefixes = ["webkit", "moz", "ms", "o"];
	    var value = this.css(attribute);
	    if (value === undefined) {
	        prefixes.some(function(prefix) {
	            value = this.css(prefix + attribute.substr(0, 1).toUpperCase() + attribute.substr(1));
	            return value !== undefined;
	        }, this);
	    }
	    return value === undefined ? null : value;
	};

	NodeContainer.prototype.computedStyle = function(type) {
	    return this.node.ownerDocument.defaultView.getComputedStyle(this.node, type);
	};

	NodeContainer.prototype.cssInt = function(attribute) {
	    var value = parseInt(this.css(attribute), 10);
	    return (isNaN(value)) ? 0 : value; // borders in old IE are throwing 'medium' for demo.html
	};

	NodeContainer.prototype.color = function(attribute) {
	    return this.colors[attribute] || (this.colors[attribute] = new Color(this.css(attribute)));
	};

	NodeContainer.prototype.cssFloat = function(attribute) {
	    var value = parseFloat(this.css(attribute));
	    return (isNaN(value)) ? 0 : value;
	};

	NodeContainer.prototype.fontWeight = function() {
	    var weight = this.css("fontWeight");
	    switch(parseInt(weight, 10)){
	    case 401:
	        weight = "bold";
	        break;
	    case 400:
	        weight = "normal";
	        break;
	    }
	    return weight;
	};

	NodeContainer.prototype.parseClip = function() {
	    var matches = this.css('clip').match(this.CLIP);
	    if (matches) {
	        return {
	            top: parseInt(matches[1], 10),
	            right: parseInt(matches[2], 10),
	            bottom: parseInt(matches[3], 10),
	            left: parseInt(matches[4], 10)
	        };
	    }
	    return null;
	};

	NodeContainer.prototype.parseBackgroundImages = function() {
	    return this.backgroundImages || (this.backgroundImages = parseBackgrounds(this.css("backgroundImage")));
	};

	NodeContainer.prototype.cssList = function(property, index) {
	    var value = (this.css(property) || '').split(',');
	    value = value[index || 0] || value[0] || 'auto';
	    value = value.trim().split(' ');
	    if (value.length === 1) {
	        value = [value[0], isPercentage(value[0]) ? 'auto' : value[0]];
	    }
	    return value;
	};

	NodeContainer.prototype.parseBackgroundSize = function(bounds, image, index) {
	    var size = this.cssList("backgroundSize", index);
	    var width, height;

	    if (isPercentage(size[0])) {
	        width = bounds.width * parseFloat(size[0]) / 100;
	    } else if (/contain|cover/.test(size[0])) {
	        var targetRatio = bounds.width / bounds.height, currentRatio = image.width / image.height;
	        return (targetRatio < currentRatio ^ size[0] === 'contain') ?  {width: bounds.height * currentRatio, height: bounds.height} : {width: bounds.width, height: bounds.width / currentRatio};
	    } else {
	        width = parseInt(size[0], 10);
	    }

	    if (size[0] === 'auto' && size[1] === 'auto') {
	        height = image.height;
	    } else if (size[1] === 'auto') {
	        height = width / image.width * image.height;
	    } else if (isPercentage(size[1])) {
	        height =  bounds.height * parseFloat(size[1]) / 100;
	    } else {
	        height = parseInt(size[1], 10);
	    }

	    if (size[0] === 'auto') {
	        width = height / image.height * image.width;
	    }

	    return {width: width, height: height};
	};

	NodeContainer.prototype.parseBackgroundPosition = function(bounds, image, index, backgroundSize) {
	    var position = this.cssList('backgroundPosition', index);
	    var left, top;

	    if (isPercentage(position[0])){
	        left = (bounds.width - (backgroundSize || image).width) * (parseFloat(position[0]) / 100);
	    } else {
	        left = parseInt(position[0], 10);
	    }

	    if (position[1] === 'auto') {
	        top = left / image.width * image.height;
	    } else if (isPercentage(position[1])){
	        top =  (bounds.height - (backgroundSize || image).height) * parseFloat(position[1]) / 100;
	    } else {
	        top = parseInt(position[1], 10);
	    }

	    if (position[0] === 'auto') {
	        left = top / image.height * image.width;
	    }

	    return {left: left, top: top};
	};

	NodeContainer.prototype.parseBackgroundRepeat = function(index) {
	    return this.cssList("backgroundRepeat", index)[0];
	};

	NodeContainer.prototype.parseTextShadows = function() {
	    var textShadow = this.css("textShadow");
	    var results = [];

	    if (textShadow && textShadow !== 'none') {
	        var shadows = textShadow.match(this.TEXT_SHADOW_PROPERTY);
	        for (var i = 0; shadows && (i < shadows.length); i++) {
	            var s = shadows[i].match(this.TEXT_SHADOW_VALUES);
	            results.push({
	                color: new Color(s[0]),
	                offsetX: s[1] ? parseFloat(s[1].replace('px', '')) : 0,
	                offsetY: s[2] ? parseFloat(s[2].replace('px', '')) : 0,
	                blur: s[3] ? s[3].replace('px', '') : 0
	            });
	        }
	    }
	    return results;
	};

	NodeContainer.prototype.parseTransform = function() {
	    if (!this.transformData) {
	        if (this.hasTransform()) {
	            var offset = this.parseBounds();
	            var origin = this.prefixedCss("transformOrigin").split(" ").map(removePx).map(asFloat);
	            origin[0] += offset.left;
	            origin[1] += offset.top;
	            this.transformData = {
	                origin: origin,
	                matrix: this.parseTransformMatrix()
	            };
	        } else {
	            this.transformData = {
	                origin: [0, 0],
	                matrix: [1, 0, 0, 1, 0, 0]
	            };
	        }
	    }
	    return this.transformData;
	};

	NodeContainer.prototype.parseTransformMatrix = function() {
	    if (!this.transformMatrix) {
	        var transform = this.prefixedCss("transform");
	        var matrix = transform ? parseMatrix(transform.match(this.MATRIX_PROPERTY)) : null;
	        this.transformMatrix = matrix ? matrix : [1, 0, 0, 1, 0, 0];
	    }
	    return this.transformMatrix;
	};

	NodeContainer.prototype.parseBounds = function() {
	    return this.bounds || (this.bounds = this.hasTransform() ? offsetBounds(this.node) : getBounds(this.node));
	};

	NodeContainer.prototype.hasTransform = function() {
	    return this.parseTransformMatrix().join(",") !== "1,0,0,1,0,0" || (this.parent && this.parent.hasTransform());
	};

	NodeContainer.prototype.getValue = function() {
	    var value = this.node.value || "";
	    if (this.node.tagName === "SELECT") {
	        value = selectionValue(this.node);
	    } else if (this.node.type === "password") {
	        value = Array(value.length + 1).join('\u2022'); // jshint ignore:line
	    }
	    return value.length === 0 ? (this.node.placeholder || "") : value;
	};

	NodeContainer.prototype.MATRIX_PROPERTY = /(matrix|matrix3d)\((.+)\)/;
	NodeContainer.prototype.TEXT_SHADOW_PROPERTY = /((rgba|rgb)\([^\)]+\)(\s-?\d+px){0,})/g;
	NodeContainer.prototype.TEXT_SHADOW_VALUES = /(-?\d+px)|(#.+)|(rgb\(.+\))|(rgba\(.+\))/g;
	NodeContainer.prototype.CLIP = /^rect\((\d+)px,? (\d+)px,? (\d+)px,? (\d+)px\)$/;

	function selectionValue(node) {
	    var option = node.options[node.selectedIndex || 0];
	    return option ? (option.text || "") : "";
	}

	function parseMatrix(match) {
	    if (match && match[1] === "matrix") {
	        return match[2].split(",").map(function(s) {
	            return parseFloat(s.trim());
	        });
	    } else if (match && match[1] === "matrix3d") {
	        var matrix3d = match[2].split(",").map(function(s) {
	          return parseFloat(s.trim());
	        });
	        return [matrix3d[0], matrix3d[1], matrix3d[4], matrix3d[5], matrix3d[12], matrix3d[13]];
	    }
	}

	function isPercentage(value) {
	    return value.toString().indexOf("%") !== -1;
	}

	function removePx(str) {
	    return str.replace("px", "");
	}

	function asFloat(str) {
	    return parseFloat(str);
	}

	module.exports = NodeContainer;

	},{"./color":3,"./utils":26}],15:[function(require,module,exports){
	var log = require('./log');
	var punycode = require('punycode');
	var NodeContainer = require('./nodecontainer');
	var TextContainer = require('./textcontainer');
	var PseudoElementContainer = require('./pseudoelementcontainer');
	var FontMetrics = require('./fontmetrics');
	var Color = require('./color');
	var StackingContext = require('./stackingcontext');
	var utils = require('./utils');
	var bind = utils.bind;
	var getBounds = utils.getBounds;
	var parseBackgrounds = utils.parseBackgrounds;
	var offsetBounds = utils.offsetBounds;

	function NodeParser(element, renderer, support, imageLoader, options) {
	    log("Starting NodeParser");
	    this.renderer = renderer;
	    this.options = options;
	    this.range = null;
	    this.support = support;
	    this.renderQueue = [];
	    this.stack = new StackingContext(true, 1, element.ownerDocument, null);
	    var parent = new NodeContainer(element, null);
	    if (options.background) {
	        renderer.rectangle(0, 0, renderer.width, renderer.height, new Color(options.background));
	    }
	    if (element === element.ownerDocument.documentElement) {
	        // http://www.w3.org/TR/css3-background/#special-backgrounds
	        var canvasBackground = new NodeContainer(parent.color('backgroundColor').isTransparent() ? element.ownerDocument.body : element.ownerDocument.documentElement, null);
	        renderer.rectangle(0, 0, renderer.width, renderer.height, canvasBackground.color('backgroundColor'));
	    }
	    parent.visibile = parent.isElementVisible();
	    this.createPseudoHideStyles(element.ownerDocument);
	    this.disableAnimations(element.ownerDocument);
	    this.nodes = flatten([parent].concat(this.getChildren(parent)).filter(function(container) {
	        return container.visible = container.isElementVisible();
	    }).map(this.getPseudoElements, this));
	    this.fontMetrics = new FontMetrics();
	    log("Fetched nodes, total:", this.nodes.length);
	    log("Calculate overflow clips");
	    this.calculateOverflowClips();
	    log("Start fetching images");
	    this.images = imageLoader.fetch(this.nodes.filter(isElement));
	    this.ready = this.images.ready.then(bind(function() {
	        log("Images loaded, starting parsing");
	        log("Creating stacking contexts");
	        this.createStackingContexts();
	        log("Sorting stacking contexts");
	        this.sortStackingContexts(this.stack);
	        this.parse(this.stack);
	        log("Render queue created with " + this.renderQueue.length + " items");
	        return new Promise(bind(function(resolve) {
	            if (!options.async) {
	                this.renderQueue.forEach(this.paint, this);
	                resolve();
	            } else if (typeof(options.async) === "function") {
	                options.async.call(this, this.renderQueue, resolve);
	            } else if (this.renderQueue.length > 0){
	                this.renderIndex = 0;
	                this.asyncRenderer(this.renderQueue, resolve);
	            } else {
	                resolve();
	            }
	        }, this));
	    }, this));
	}

	NodeParser.prototype.calculateOverflowClips = function() {
	    this.nodes.forEach(function(container) {
	        if (isElement(container)) {
	            if (isPseudoElement(container)) {
	                container.appendToDOM();
	            }
	            container.borders = this.parseBorders(container);
	            var clip = (container.css('overflow') === "hidden") ? [container.borders.clip] : [];
	            var cssClip = container.parseClip();
	            if (cssClip && ["absolute", "fixed"].indexOf(container.css('position')) !== -1) {
	                clip.push([["rect",
	                        container.bounds.left + cssClip.left,
	                        container.bounds.top + cssClip.top,
	                        cssClip.right - cssClip.left,
	                        cssClip.bottom - cssClip.top
	                ]]);
	            }
	            container.clip = hasParentClip(container) ? container.parent.clip.concat(clip) : clip;
	            container.backgroundClip = (container.css('overflow') !== "hidden") ? container.clip.concat([container.borders.clip]) : container.clip;
	            if (isPseudoElement(container)) {
	                container.cleanDOM();
	            }
	        } else if (isTextNode(container)) {
	            container.clip = hasParentClip(container) ? container.parent.clip : [];
	        }
	        if (!isPseudoElement(container)) {
	            container.bounds = null;
	        }
	    }, this);
	};

	function hasParentClip(container) {
	    return container.parent && container.parent.clip.length;
	}

	NodeParser.prototype.asyncRenderer = function(queue, resolve, asyncTimer) {
	    asyncTimer = asyncTimer || Date.now();
	    this.paint(queue[this.renderIndex++]);
	    if (queue.length === this.renderIndex) {
	        resolve();
	    } else if (asyncTimer + 20 > Date.now()) {
	        this.asyncRenderer(queue, resolve, asyncTimer);
	    } else {
	        setTimeout(bind(function() {
	            this.asyncRenderer(queue, resolve);
	        }, this), 0);
	    }
	};

	NodeParser.prototype.createPseudoHideStyles = function(document) {
	    this.createStyles(document, '.' + PseudoElementContainer.prototype.PSEUDO_HIDE_ELEMENT_CLASS_BEFORE + ':before { content: "" !important; display: none !important; }' +
	        '.' + PseudoElementContainer.prototype.PSEUDO_HIDE_ELEMENT_CLASS_AFTER + ':after { content: "" !important; display: none !important; }');
	};

	NodeParser.prototype.disableAnimations = function(document) {
	    this.createStyles(document, '* { -webkit-animation: none !important; -moz-animation: none !important; -o-animation: none !important; animation: none !important; ' +
	        '-webkit-transition: none !important; -moz-transition: none !important; -o-transition: none !important; transition: none !important;}');
	};

	NodeParser.prototype.createStyles = function(document, styles) {
	    var hidePseudoElements = document.createElement('style');
	    hidePseudoElements.innerHTML = styles;
	    document.body.appendChild(hidePseudoElements);
	};

	NodeParser.prototype.getPseudoElements = function(container) {
	    var nodes = [[container]];
	    if (container.node.nodeType === Node.ELEMENT_NODE) {
	        var before = this.getPseudoElement(container, ":before");
	        var after = this.getPseudoElement(container, ":after");

	        if (before) {
	            nodes.push(before);
	        }

	        if (after) {
	            nodes.push(after);
	        }
	    }
	    return flatten(nodes);
	};

	function toCamelCase(str) {
	    return str.replace(/(\-[a-z])/g, function(match){
	        return match.toUpperCase().replace('-','');
	    });
	}

	NodeParser.prototype.getPseudoElement = function(container, type) {
	    var style = container.computedStyle(type);
	    if(!style || !style.content || style.content === "none" || style.content === "-moz-alt-content" || style.display === "none") {
	        return null;
	    }

	    var content = stripQuotes(style.content);
	    var isImage = content.substr(0, 3) === 'url';
	    var pseudoNode = document.createElement(isImage ? 'img' : 'html2canvaspseudoelement');
	    var pseudoContainer = new PseudoElementContainer(pseudoNode, container, type);

	    for (var i = style.length-1; i >= 0; i--) {
	        var property = toCamelCase(style.item(i));
	        pseudoNode.style[property] = style[property];
	    }

	    pseudoNode.className = PseudoElementContainer.prototype.PSEUDO_HIDE_ELEMENT_CLASS_BEFORE + " " + PseudoElementContainer.prototype.PSEUDO_HIDE_ELEMENT_CLASS_AFTER;

	    if (isImage) {
	        pseudoNode.src = parseBackgrounds(content)[0].args[0];
	        return [pseudoContainer];
	    } else {
	        var text = document.createTextNode(content);
	        pseudoNode.appendChild(text);
	        return [pseudoContainer, new TextContainer(text, pseudoContainer)];
	    }
	};


	NodeParser.prototype.getChildren = function(parentContainer) {
	    return flatten([].filter.call(parentContainer.node.childNodes, renderableNode).map(function(node) {
	        var container = [node.nodeType === Node.TEXT_NODE ? new TextContainer(node, parentContainer) : new NodeContainer(node, parentContainer)].filter(nonIgnoredElement);
	        return node.nodeType === Node.ELEMENT_NODE && container.length && node.tagName !== "TEXTAREA" ? (container[0].isElementVisible() ? container.concat(this.getChildren(container[0])) : []) : container;
	    }, this));
	};

	NodeParser.prototype.newStackingContext = function(container, hasOwnStacking) {
	    var stack = new StackingContext(hasOwnStacking, container.getOpacity(), container.node, container.parent);
	    container.cloneTo(stack);
	    var parentStack = hasOwnStacking ? stack.getParentStack(this) : stack.parent.stack;
	    parentStack.contexts.push(stack);
	    container.stack = stack;
	};

	NodeParser.prototype.createStackingContexts = function() {
	    this.nodes.forEach(function(container) {
	        if (isElement(container) && (this.isRootElement(container) || hasOpacity(container) || isPositionedForStacking(container) || this.isBodyWithTransparentRoot(container) || container.hasTransform())) {
	            this.newStackingContext(container, true);
	        } else if (isElement(container) && ((isPositioned(container) && zIndex0(container)) || isInlineBlock(container) || isFloating(container))) {
	            this.newStackingContext(container, false);
	        } else {
	            container.assignStack(container.parent.stack);
	        }
	    }, this);
	};

	NodeParser.prototype.isBodyWithTransparentRoot = function(container) {
	    return container.node.nodeName === "BODY" && container.parent.color('backgroundColor').isTransparent();
	};

	NodeParser.prototype.isRootElement = function(container) {
	    return container.parent === null;
	};

	NodeParser.prototype.sortStackingContexts = function(stack) {
	    stack.contexts.sort(zIndexSort(stack.contexts.slice(0)));
	    stack.contexts.forEach(this.sortStackingContexts, this);
	};

	NodeParser.prototype.parseTextBounds = function(container) {
	    return function(text, index, textList) {
	        if (container.parent.css("textDecoration").substr(0, 4) !== "none" || text.trim().length !== 0) {
	            if (this.support.rangeBounds && !container.parent.hasTransform()) {
	                var offset = textList.slice(0, index).join("").length;
	                return this.getRangeBounds(container.node, offset, text.length);
	            } else if (container.node && typeof(container.node.data) === "string") {
	                var replacementNode = container.node.splitText(text.length);
	                var bounds = this.getWrapperBounds(container.node, container.parent.hasTransform());
	                container.node = replacementNode;
	                return bounds;
	            }
	        } else if(!this.support.rangeBounds || container.parent.hasTransform()){
	            container.node = container.node.splitText(text.length);
	        }
	        return {};
	    };
	};

	NodeParser.prototype.getWrapperBounds = function(node, transform) {
	    var wrapper = node.ownerDocument.createElement('html2canvaswrapper');
	    var parent = node.parentNode,
	        backupText = node.cloneNode(true);

	    wrapper.appendChild(node.cloneNode(true));
	    parent.replaceChild(wrapper, node);
	    var bounds = transform ? offsetBounds(wrapper) : getBounds(wrapper);
	    parent.replaceChild(backupText, wrapper);
	    return bounds;
	};

	NodeParser.prototype.getRangeBounds = function(node, offset, length) {
	    var range = this.range || (this.range = node.ownerDocument.createRange());
	    range.setStart(node, offset);
	    range.setEnd(node, offset + length);
	    return range.getBoundingClientRect();
	};

	function ClearTransform() {}

	NodeParser.prototype.parse = function(stack) {
	    // http://www.w3.org/TR/CSS21/visuren.html#z-index
	    var negativeZindex = stack.contexts.filter(negativeZIndex); // 2. the child stacking contexts with negative stack levels (most negative first).
	    var descendantElements = stack.children.filter(isElement);
	    var descendantNonFloats = descendantElements.filter(not(isFloating));
	    var nonInlineNonPositionedDescendants = descendantNonFloats.filter(not(isPositioned)).filter(not(inlineLevel)); // 3 the in-flow, non-inline-level, non-positioned descendants.
	    var nonPositionedFloats = descendantElements.filter(not(isPositioned)).filter(isFloating); // 4. the non-positioned floats.
	    var inFlow = descendantNonFloats.filter(not(isPositioned)).filter(inlineLevel); // 5. the in-flow, inline-level, non-positioned descendants, including inline tables and inline blocks.
	    var stackLevel0 = stack.contexts.concat(descendantNonFloats.filter(isPositioned)).filter(zIndex0); // 6. the child stacking contexts with stack level 0 and the positioned descendants with stack level 0.
	    var text = stack.children.filter(isTextNode).filter(hasText);
	    var positiveZindex = stack.contexts.filter(positiveZIndex); // 7. the child stacking contexts with positive stack levels (least positive first).
	    negativeZindex.concat(nonInlineNonPositionedDescendants).concat(nonPositionedFloats)
	        .concat(inFlow).concat(stackLevel0).concat(text).concat(positiveZindex).forEach(function(container) {
	            this.renderQueue.push(container);
	            if (isStackingContext(container)) {
	                this.parse(container);
	                this.renderQueue.push(new ClearTransform());
	            }
	        }, this);
	};

	NodeParser.prototype.paint = function(container) {
	    try {
	        if (container instanceof ClearTransform) {
	            this.renderer.ctx.restore();
	        } else if (isTextNode(container)) {
	            if (isPseudoElement(container.parent)) {
	                container.parent.appendToDOM();
	            }
	            this.paintText(container);
	            if (isPseudoElement(container.parent)) {
	                container.parent.cleanDOM();
	            }
	        } else {
	            this.paintNode(container);
	        }
	    } catch(e) {
	        log(e);
	        if (this.options.strict) {
	            throw e;
	        }
	    }
	};

	NodeParser.prototype.paintNode = function(container) {
	    if (isStackingContext(container)) {
	        this.renderer.setOpacity(container.opacity);
	        this.renderer.ctx.save();
	        if (container.hasTransform()) {
	            this.renderer.setTransform(container.parseTransform());
	        }
	    }

	    if (container.node.nodeName === "INPUT" && container.node.type === "checkbox") {
	        this.paintCheckbox(container);
	    } else if (container.node.nodeName === "INPUT" && container.node.type === "radio") {
	        this.paintRadio(container);
	    } else {
	        this.paintElement(container);
	    }
	};

	NodeParser.prototype.paintElement = function(container) {
	    var bounds = container.parseBounds();
	    this.renderer.clip(container.backgroundClip, function() {
	        this.renderer.renderBackground(container, bounds, container.borders.borders.map(getWidth));
	    }, this);

	    this.renderer.clip(container.clip, function() {
	        this.renderer.renderBorders(container.borders.borders);
	    }, this);

	    this.renderer.clip(container.backgroundClip, function() {
	        switch (container.node.nodeName) {
	        case "svg":
	        case "IFRAME":
	            var imgContainer = this.images.get(container.node);
	            if (imgContainer) {
	                this.renderer.renderImage(container, bounds, container.borders, imgContainer);
	            } else {
	                log("Error loading <" + container.node.nodeName + ">", container.node);
	            }
	            break;
	        case "IMG":
	            var imageContainer = this.images.get(container.node.src);
	            if (imageContainer) {
	                this.renderer.renderImage(container, bounds, container.borders, imageContainer);
	            } else {
	                log("Error loading <img>", container.node.src);
	            }
	            break;
	        case "CANVAS":
	            this.renderer.renderImage(container, bounds, container.borders, {image: container.node});
	            break;
	        case "SELECT":
	        case "INPUT":
	        case "TEXTAREA":
	            this.paintFormValue(container);
	            break;
	        }
	    }, this);
	};

	NodeParser.prototype.paintCheckbox = function(container) {
	    var b = container.parseBounds();

	    var size = Math.min(b.width, b.height);
	    var bounds = {width: size - 1, height: size - 1, top: b.top, left: b.left};
	    var r = [3, 3];
	    var radius = [r, r, r, r];
	    var borders = [1,1,1,1].map(function(w) {
	        return {color: new Color('#A5A5A5'), width: w};
	    });

	    var borderPoints = calculateCurvePoints(bounds, radius, borders);

	    this.renderer.clip(container.backgroundClip, function() {
	        this.renderer.rectangle(bounds.left + 1, bounds.top + 1, bounds.width - 2, bounds.height - 2, new Color("#DEDEDE"));
	        this.renderer.renderBorders(calculateBorders(borders, bounds, borderPoints, radius));
	        if (container.node.checked) {
	            this.renderer.font(new Color('#424242'), 'normal', 'normal', 'bold', (size - 3) + "px", 'arial');
	            this.renderer.text("\u2714", bounds.left + size / 6, bounds.top + size - 1);
	        }
	    }, this);
	};

	NodeParser.prototype.paintRadio = function(container) {
	    var bounds = container.parseBounds();

	    var size = Math.min(bounds.width, bounds.height) - 2;

	    this.renderer.clip(container.backgroundClip, function() {
	        this.renderer.circleStroke(bounds.left + 1, bounds.top + 1, size, new Color('#DEDEDE'), 1, new Color('#A5A5A5'));
	        if (container.node.checked) {
	            this.renderer.circle(Math.ceil(bounds.left + size / 4) + 1, Math.ceil(bounds.top + size / 4) + 1, Math.floor(size / 2), new Color('#424242'));
	        }
	    }, this);
	};

	NodeParser.prototype.paintFormValue = function(container) {
	    var value = container.getValue();
	    if (value.length > 0) {
	        var document = container.node.ownerDocument;
	        var wrapper = document.createElement('html2canvaswrapper');
	        var properties = ['lineHeight', 'textAlign', 'fontFamily', 'fontWeight', 'fontSize', 'color',
	            'paddingLeft', 'paddingTop', 'paddingRight', 'paddingBottom',
	            'width', 'height', 'borderLeftStyle', 'borderTopStyle', 'borderLeftWidth', 'borderTopWidth',
	            'boxSizing', 'whiteSpace', 'wordWrap'];

	        properties.forEach(function(property) {
	            try {
	                wrapper.style[property] = container.css(property);
	            } catch(e) {
	                // Older IE has issues with "border"
	                log("html2canvas: Parse: Exception caught in renderFormValue: " + e.message);
	            }
	        });
	        var bounds = container.parseBounds();
	        wrapper.style.position = "fixed";
	        wrapper.style.left = bounds.left + "px";
	        wrapper.style.top = bounds.top + "px";
	        wrapper.textContent = value;
	        document.body.appendChild(wrapper);
	        this.paintText(new TextContainer(wrapper.firstChild, container));
	        document.body.removeChild(wrapper);
	    }
	};

	NodeParser.prototype.paintText = function(container) {
	    container.applyTextTransform();
	    var characters = punycode.ucs2.decode(container.node.data);
	    var textList = (!this.options.letterRendering || noLetterSpacing(container)) && !hasUnicode(container.node.data) ? getWords(characters) : characters.map(function(character) {
	        return punycode.ucs2.encode([character]);
	    });

	    var weight = container.parent.fontWeight();
	    var size = container.parent.css('fontSize');
	    var family = container.parent.css('fontFamily');
	    var shadows = container.parent.parseTextShadows();

	    this.renderer.font(container.parent.color('color'), container.parent.css('fontStyle'), container.parent.css('fontVariant'), weight, size, family);
	    if (shadows.length) {
	        // TODO: support multiple text shadows
	        this.renderer.fontShadow(shadows[0].color, shadows[0].offsetX, shadows[0].offsetY, shadows[0].blur);
	    } else {
	        this.renderer.clearShadow();
	    }

	    this.renderer.clip(container.parent.clip, function() {
	        textList.map(this.parseTextBounds(container), this).forEach(function(bounds, index) {
	            if (bounds) {
	                this.renderer.text(textList[index], bounds.left, bounds.bottom);
	                this.renderTextDecoration(container.parent, bounds, this.fontMetrics.getMetrics(family, size));
	            }
	        }, this);
	    }, this);
	};

	NodeParser.prototype.renderTextDecoration = function(container, bounds, metrics) {
	    switch(container.css("textDecoration").split(" ")[0]) {
	    case "underline":
	        // Draws a line at the baseline of the font
	        // TODO As some browsers display the line as more than 1px if the font-size is big, need to take that into account both in position and size
	        this.renderer.rectangle(bounds.left, Math.round(bounds.top + metrics.baseline + metrics.lineWidth), bounds.width, 1, container.color("color"));
	        break;
	    case "overline":
	        this.renderer.rectangle(bounds.left, Math.round(bounds.top), bounds.width, 1, container.color("color"));
	        break;
	    case "line-through":
	        // TODO try and find exact position for line-through
	        this.renderer.rectangle(bounds.left, Math.ceil(bounds.top + metrics.middle + metrics.lineWidth), bounds.width, 1, container.color("color"));
	        break;
	    }
	};

	var borderColorTransforms = {
	    inset: [
	        ["darken", 0.60],
	        ["darken", 0.10],
	        ["darken", 0.10],
	        ["darken", 0.60]
	    ]
	};

	NodeParser.prototype.parseBorders = function(container) {
	    var nodeBounds = container.parseBounds();
	    var radius = getBorderRadiusData(container);
	    var borders = ["Top", "Right", "Bottom", "Left"].map(function(side, index) {
	        var style = container.css('border' + side + 'Style');
	        var color = container.color('border' + side + 'Color');
	        if (style === "inset" && color.isBlack()) {
	            color = new Color([255, 255, 255, color.a]); // this is wrong, but
	        }
	        var colorTransform = borderColorTransforms[style] ? borderColorTransforms[style][index] : null;
	        return {
	            width: container.cssInt('border' + side + 'Width'),
	            color: colorTransform ? color[colorTransform[0]](colorTransform[1]) : color,
	            args: null
	        };
	    });
	    var borderPoints = calculateCurvePoints(nodeBounds, radius, borders);

	    return {
	        clip: this.parseBackgroundClip(container, borderPoints, borders, radius, nodeBounds),
	        borders: calculateBorders(borders, nodeBounds, borderPoints, radius)
	    };
	};

	function calculateBorders(borders, nodeBounds, borderPoints, radius) {
	    return borders.map(function(border, borderSide) {
	        if (border.width > 0) {
	            var bx = nodeBounds.left;
	            var by = nodeBounds.top;
	            var bw = nodeBounds.width;
	            var bh = nodeBounds.height - (borders[2].width);

	            switch(borderSide) {
	            case 0:
	                // top border
	                bh = borders[0].width;
	                border.args = drawSide({
	                        c1: [bx, by],
	                        c2: [bx + bw, by],
	                        c3: [bx + bw - borders[1].width, by + bh],
	                        c4: [bx + borders[3].width, by + bh]
	                    }, radius[0], radius[1],
	                    borderPoints.topLeftOuter, borderPoints.topLeftInner, borderPoints.topRightOuter, borderPoints.topRightInner);
	                break;
	            case 1:
	                // right border
	                bx = nodeBounds.left + nodeBounds.width - (borders[1].width);
	                bw = borders[1].width;

	                border.args = drawSide({
	                        c1: [bx + bw, by],
	                        c2: [bx + bw, by + bh + borders[2].width],
	                        c3: [bx, by + bh],
	                        c4: [bx, by + borders[0].width]
	                    }, radius[1], radius[2],
	                    borderPoints.topRightOuter, borderPoints.topRightInner, borderPoints.bottomRightOuter, borderPoints.bottomRightInner);
	                break;
	            case 2:
	                // bottom border
	                by = (by + nodeBounds.height) - (borders[2].width);
	                bh = borders[2].width;
	                border.args = drawSide({
	                        c1: [bx + bw, by + bh],
	                        c2: [bx, by + bh],
	                        c3: [bx + borders[3].width, by],
	                        c4: [bx + bw - borders[3].width, by]
	                    }, radius[2], radius[3],
	                    borderPoints.bottomRightOuter, borderPoints.bottomRightInner, borderPoints.bottomLeftOuter, borderPoints.bottomLeftInner);
	                break;
	            case 3:
	                // left border
	                bw = borders[3].width;
	                border.args = drawSide({
	                        c1: [bx, by + bh + borders[2].width],
	                        c2: [bx, by],
	                        c3: [bx + bw, by + borders[0].width],
	                        c4: [bx + bw, by + bh]
	                    }, radius[3], radius[0],
	                    borderPoints.bottomLeftOuter, borderPoints.bottomLeftInner, borderPoints.topLeftOuter, borderPoints.topLeftInner);
	                break;
	            }
	        }
	        return border;
	    });
	}

	NodeParser.prototype.parseBackgroundClip = function(container, borderPoints, borders, radius, bounds) {
	    var backgroundClip = container.css('backgroundClip'),
	        borderArgs = [];

	    switch(backgroundClip) {
	    case "content-box":
	    case "padding-box":
	        parseCorner(borderArgs, radius[0], radius[1], borderPoints.topLeftInner, borderPoints.topRightInner, bounds.left + borders[3].width, bounds.top + borders[0].width);
	        parseCorner(borderArgs, radius[1], radius[2], borderPoints.topRightInner, borderPoints.bottomRightInner, bounds.left + bounds.width - borders[1].width, bounds.top + borders[0].width);
	        parseCorner(borderArgs, radius[2], radius[3], borderPoints.bottomRightInner, borderPoints.bottomLeftInner, bounds.left + bounds.width - borders[1].width, bounds.top + bounds.height - borders[2].width);
	        parseCorner(borderArgs, radius[3], radius[0], borderPoints.bottomLeftInner, borderPoints.topLeftInner, bounds.left + borders[3].width, bounds.top + bounds.height - borders[2].width);
	        break;

	    default:
	        parseCorner(borderArgs, radius[0], radius[1], borderPoints.topLeftOuter, borderPoints.topRightOuter, bounds.left, bounds.top);
	        parseCorner(borderArgs, radius[1], radius[2], borderPoints.topRightOuter, borderPoints.bottomRightOuter, bounds.left + bounds.width, bounds.top);
	        parseCorner(borderArgs, radius[2], radius[3], borderPoints.bottomRightOuter, borderPoints.bottomLeftOuter, bounds.left + bounds.width, bounds.top + bounds.height);
	        parseCorner(borderArgs, radius[3], radius[0], borderPoints.bottomLeftOuter, borderPoints.topLeftOuter, bounds.left, bounds.top + bounds.height);
	        break;
	    }

	    return borderArgs;
	};

	function getCurvePoints(x, y, r1, r2) {
	    var kappa = 4 * ((Math.sqrt(2) - 1) / 3);
	    var ox = (r1) * kappa, // control point offset horizontal
	        oy = (r2) * kappa, // control point offset vertical
	        xm = x + r1, // x-middle
	        ym = y + r2; // y-middle
	    return {
	        topLeft: bezierCurve({x: x, y: ym}, {x: x, y: ym - oy}, {x: xm - ox, y: y}, {x: xm, y: y}),
	        topRight: bezierCurve({x: x, y: y}, {x: x + ox,y: y}, {x: xm, y: ym - oy}, {x: xm, y: ym}),
	        bottomRight: bezierCurve({x: xm, y: y}, {x: xm, y: y + oy}, {x: x + ox, y: ym}, {x: x, y: ym}),
	        bottomLeft: bezierCurve({x: xm, y: ym}, {x: xm - ox, y: ym}, {x: x, y: y + oy}, {x: x, y:y})
	    };
	}

	function calculateCurvePoints(bounds, borderRadius, borders) {
	    var x = bounds.left,
	        y = bounds.top,
	        width = bounds.width,
	        height = bounds.height,

	        tlh = borderRadius[0][0] < width / 2 ? borderRadius[0][0] : width / 2,
	        tlv = borderRadius[0][1] < height / 2 ? borderRadius[0][1] : height / 2,
	        trh = borderRadius[1][0] < width / 2 ? borderRadius[1][0] : width / 2,
	        trv = borderRadius[1][1] < height / 2 ? borderRadius[1][1] : height / 2,
	        brh = borderRadius[2][0] < width / 2 ? borderRadius[2][0] : width / 2,
	        brv = borderRadius[2][1] < height / 2 ? borderRadius[2][1] : height / 2,
	        blh = borderRadius[3][0] < width / 2 ? borderRadius[3][0] : width / 2,
	        blv = borderRadius[3][1] < height / 2 ? borderRadius[3][1] : height / 2;

	    var topWidth = width - trh,
	        rightHeight = height - brv,
	        bottomWidth = width - brh,
	        leftHeight = height - blv;

	    return {
	        topLeftOuter: getCurvePoints(x, y, tlh, tlv).topLeft.subdivide(0.5),
	        topLeftInner: getCurvePoints(x + borders[3].width, y + borders[0].width, Math.max(0, tlh - borders[3].width), Math.max(0, tlv - borders[0].width)).topLeft.subdivide(0.5),
	        topRightOuter: getCurvePoints(x + topWidth, y, trh, trv).topRight.subdivide(0.5),
	        topRightInner: getCurvePoints(x + Math.min(topWidth, width + borders[3].width), y + borders[0].width, (topWidth > width + borders[3].width) ? 0 :trh - borders[3].width, trv - borders[0].width).topRight.subdivide(0.5),
	        bottomRightOuter: getCurvePoints(x + bottomWidth, y + rightHeight, brh, brv).bottomRight.subdivide(0.5),
	        bottomRightInner: getCurvePoints(x + Math.min(bottomWidth, width - borders[3].width), y + Math.min(rightHeight, height + borders[0].width), Math.max(0, brh - borders[1].width),  brv - borders[2].width).bottomRight.subdivide(0.5),
	        bottomLeftOuter: getCurvePoints(x, y + leftHeight, blh, blv).bottomLeft.subdivide(0.5),
	        bottomLeftInner: getCurvePoints(x + borders[3].width, y + leftHeight, Math.max(0, blh - borders[3].width), blv - borders[2].width).bottomLeft.subdivide(0.5)
	    };
	}

	function bezierCurve(start, startControl, endControl, end) {
	    var lerp = function (a, b, t) {
	        return {
	            x: a.x + (b.x - a.x) * t,
	            y: a.y + (b.y - a.y) * t
	        };
	    };

	    return {
	        start: start,
	        startControl: startControl,
	        endControl: endControl,
	        end: end,
	        subdivide: function(t) {
	            var ab = lerp(start, startControl, t),
	                bc = lerp(startControl, endControl, t),
	                cd = lerp(endControl, end, t),
	                abbc = lerp(ab, bc, t),
	                bccd = lerp(bc, cd, t),
	                dest = lerp(abbc, bccd, t);
	            return [bezierCurve(start, ab, abbc, dest), bezierCurve(dest, bccd, cd, end)];
	        },
	        curveTo: function(borderArgs) {
	            borderArgs.push(["bezierCurve", startControl.x, startControl.y, endControl.x, endControl.y, end.x, end.y]);
	        },
	        curveToReversed: function(borderArgs) {
	            borderArgs.push(["bezierCurve", endControl.x, endControl.y, startControl.x, startControl.y, start.x, start.y]);
	        }
	    };
	}

	function drawSide(borderData, radius1, radius2, outer1, inner1, outer2, inner2) {
	    var borderArgs = [];

	    if (radius1[0] > 0 || radius1[1] > 0) {
	        borderArgs.push(["line", outer1[1].start.x, outer1[1].start.y]);
	        outer1[1].curveTo(borderArgs);
	    } else {
	        borderArgs.push([ "line", borderData.c1[0], borderData.c1[1]]);
	    }

	    if (radius2[0] > 0 || radius2[1] > 0) {
	        borderArgs.push(["line", outer2[0].start.x, outer2[0].start.y]);
	        outer2[0].curveTo(borderArgs);
	        borderArgs.push(["line", inner2[0].end.x, inner2[0].end.y]);
	        inner2[0].curveToReversed(borderArgs);
	    } else {
	        borderArgs.push(["line", borderData.c2[0], borderData.c2[1]]);
	        borderArgs.push(["line", borderData.c3[0], borderData.c3[1]]);
	    }

	    if (radius1[0] > 0 || radius1[1] > 0) {
	        borderArgs.push(["line", inner1[1].end.x, inner1[1].end.y]);
	        inner1[1].curveToReversed(borderArgs);
	    } else {
	        borderArgs.push(["line", borderData.c4[0], borderData.c4[1]]);
	    }

	    return borderArgs;
	}

	function parseCorner(borderArgs, radius1, radius2, corner1, corner2, x, y) {
	    if (radius1[0] > 0 || radius1[1] > 0) {
	        borderArgs.push(["line", corner1[0].start.x, corner1[0].start.y]);
	        corner1[0].curveTo(borderArgs);
	        corner1[1].curveTo(borderArgs);
	    } else {
	        borderArgs.push(["line", x, y]);
	    }

	    if (radius2[0] > 0 || radius2[1] > 0) {
	        borderArgs.push(["line", corner2[0].start.x, corner2[0].start.y]);
	    }
	}

	function negativeZIndex(container) {
	    return container.cssInt("zIndex") < 0;
	}

	function positiveZIndex(container) {
	    return container.cssInt("zIndex") > 0;
	}

	function zIndex0(container) {
	    return container.cssInt("zIndex") === 0;
	}

	function inlineLevel(container) {
	    return ["inline", "inline-block", "inline-table"].indexOf(container.css("display")) !== -1;
	}

	function isStackingContext(container) {
	    return (container instanceof StackingContext);
	}

	function hasText(container) {
	    return container.node.data.trim().length > 0;
	}

	function noLetterSpacing(container) {
	    return (/^(normal|none|0px)$/.test(container.parent.css("letterSpacing")));
	}

	function getBorderRadiusData(container) {
	    return ["TopLeft", "TopRight", "BottomRight", "BottomLeft"].map(function(side) {
	        var value = container.css('border' + side + 'Radius');
	        var arr = value.split(" ");
	        if (arr.length <= 1) {
	            arr[1] = arr[0];
	        }
	        return arr.map(asInt);
	    });
	}

	function renderableNode(node) {
	    return (node.nodeType === Node.TEXT_NODE || node.nodeType === Node.ELEMENT_NODE);
	}

	function isPositionedForStacking(container) {
	    var position = container.css("position");
	    var zIndex = (["absolute", "relative", "fixed"].indexOf(position) !== -1) ? container.css("zIndex") : "auto";
	    return zIndex !== "auto";
	}

	function isPositioned(container) {
	    return container.css("position") !== "static";
	}

	function isFloating(container) {
	    return container.css("float") !== "none";
	}

	function isInlineBlock(container) {
	    return ["inline-block", "inline-table"].indexOf(container.css("display")) !== -1;
	}

	function not(callback) {
	    var context = this;
	    return function() {
	        return !callback.apply(context, arguments);
	    };
	}

	function isElement(container) {
	    return container.node.nodeType === Node.ELEMENT_NODE;
	}

	function isPseudoElement(container) {
	    return container.isPseudoElement === true;
	}

	function isTextNode(container) {
	    return container.node.nodeType === Node.TEXT_NODE;
	}

	function zIndexSort(contexts) {
	    return function(a, b) {
	        return (a.cssInt("zIndex") + (contexts.indexOf(a) / contexts.length)) - (b.cssInt("zIndex") + (contexts.indexOf(b) / contexts.length));
	    };
	}

	function hasOpacity(container) {
	    return container.getOpacity() < 1;
	}

	function asInt(value) {
	    return parseInt(value, 10);
	}

	function getWidth(border) {
	    return border.width;
	}

	function nonIgnoredElement(nodeContainer) {
	    return (nodeContainer.node.nodeType !== Node.ELEMENT_NODE || ["SCRIPT", "HEAD", "TITLE", "OBJECT", "BR", "OPTION"].indexOf(nodeContainer.node.nodeName) === -1);
	}

	function flatten(arrays) {
	    return [].concat.apply([], arrays);
	}

	function stripQuotes(content) {
	    var first = content.substr(0, 1);
	    return (first === content.substr(content.length - 1) && first.match(/'|"/)) ? content.substr(1, content.length - 2) : content;
	}

	function getWords(characters) {
	    var words = [], i = 0, onWordBoundary = false, word;
	    while(characters.length) {
	        if (isWordBoundary(characters[i]) === onWordBoundary) {
	            word = characters.splice(0, i);
	            if (word.length) {
	                words.push(punycode.ucs2.encode(word));
	            }
	            onWordBoundary =! onWordBoundary;
	            i = 0;
	        } else {
	            i++;
	        }

	        if (i >= characters.length) {
	            word = characters.splice(0, i);
	            if (word.length) {
	                words.push(punycode.ucs2.encode(word));
	            }
	        }
	    }
	    return words;
	}

	function isWordBoundary(characterCode) {
	    return [
	        32, // <space>
	        13, // \r
	        10, // \n
	        9, // \t
	        45 // -
	    ].indexOf(characterCode) !== -1;
	}

	function hasUnicode(string) {
	    return (/[^\u0000-\u00ff]/).test(string);
	}

	module.exports = NodeParser;

	},{"./color":3,"./fontmetrics":7,"./log":13,"./nodecontainer":14,"./pseudoelementcontainer":18,"./stackingcontext":21,"./textcontainer":25,"./utils":26,"punycode":1}],16:[function(require,module,exports){
	var XHR = require('./xhr');
	var utils = require('./utils');
	var log = require('./log');
	var createWindowClone = require('./clone');
	var decode64 = utils.decode64;

	function Proxy(src, proxyUrl, document) {
	    var supportsCORS = ('withCredentials' in new XMLHttpRequest());
	    if (!proxyUrl) {
	        return Promise.reject("No proxy configured");
	    }
	    var callback = createCallback(supportsCORS);
	    var url = createProxyUrl(proxyUrl, src, callback);

	    return supportsCORS ? XHR(url) : (jsonp(document, url, callback).then(function(response) {
	        return decode64(response.content);
	    }));
	}
	var proxyCount = 0;

	function ProxyURL(src, proxyUrl, document) {
	    var supportsCORSImage = ('crossOrigin' in new Image());
	    var callback = createCallback(supportsCORSImage);
	    var url = createProxyUrl(proxyUrl, src, callback);
	    return (supportsCORSImage ? Promise.resolve(url) : jsonp(document, url, callback).then(function(response) {
	        return "data:" + response.type + ";base64," + response.content;
	    }));
	}

	function jsonp(document, url, callback) {
	    return new Promise(function(resolve, reject) {
	        var s = document.createElement("script");
	        var cleanup = function() {
	            delete window.html2canvas.proxy[callback];
	            document.body.removeChild(s);
	        };
	        window.html2canvas.proxy[callback] = function(response) {
	            cleanup();
	            resolve(response);
	        };
	        s.src = url;
	        s.onerror = function(e) {
	            cleanup();
	            reject(e);
	        };
	        document.body.appendChild(s);
	    });
	}

	function createCallback(useCORS) {
	    return !useCORS ? "html2canvas_" + Date.now() + "_" + (++proxyCount) + "_" + Math.round(Math.random() * 100000) : "";
	}

	function createProxyUrl(proxyUrl, src, callback) {
	    return proxyUrl + "?url=" + encodeURIComponent(src) + (callback.length ? "&callback=html2canvas.proxy." + callback : "");
	}

	function documentFromHTML(src) {
	    return function(html) {
	        var parser = new DOMParser(), doc;
	        try {
	            doc = parser.parseFromString(html, "text/html");
	        } catch(e) {
	            log("DOMParser not supported, falling back to createHTMLDocument");
	            doc = document.implementation.createHTMLDocument("");
	            try {
	                doc.open();
	                doc.write(html);
	                doc.close();
	            } catch(ee) {
	                log("createHTMLDocument write not supported, falling back to document.body.innerHTML");
	                doc.body.innerHTML = html; // ie9 doesnt support writing to documentElement
	            }
	        }

	        var b = doc.querySelector("base");
	        if (!b || !b.href.host) {
	            var base = doc.createElement("base");
	            base.href = src;
	            doc.head.insertBefore(base, doc.head.firstChild);
	        }

	        return doc;
	    };
	}

	function loadUrlDocument(src, proxy, document, width, height, options) {
	    return new Proxy(src, proxy, window.document).then(documentFromHTML(src)).then(function(doc) {
	        return createWindowClone(doc, document, width, height, options, 0, 0);
	    });
	}

	exports.Proxy = Proxy;
	exports.ProxyURL = ProxyURL;
	exports.loadUrlDocument = loadUrlDocument;

	},{"./clone":2,"./log":13,"./utils":26,"./xhr":28}],17:[function(require,module,exports){
	var ProxyURL = require('./proxy').ProxyURL;

	function ProxyImageContainer(src, proxy) {
	    var link = document.createElement("a");
	    link.href = src;
	    src = link.href;
	    this.src = src;
	    this.image = new Image();
	    var self = this;
	    this.promise = new Promise(function(resolve, reject) {
	        self.image.crossOrigin = "Anonymous";
	        self.image.onload = resolve;
	        self.image.onerror = reject;

	        new ProxyURL(src, proxy, document).then(function(url) {
	            self.image.src = url;
	        })['catch'](reject);
	    });
	}

	module.exports = ProxyImageContainer;

	},{"./proxy":16}],18:[function(require,module,exports){
	var NodeContainer = require('./nodecontainer');

	function PseudoElementContainer(node, parent, type) {
	    NodeContainer.call(this, node, parent);
	    this.isPseudoElement = true;
	    this.before = type === ":before";
	}

	PseudoElementContainer.prototype.cloneTo = function(stack) {
	    PseudoElementContainer.prototype.cloneTo.call(this, stack);
	    stack.isPseudoElement = true;
	    stack.before = this.before;
	};

	PseudoElementContainer.prototype = Object.create(NodeContainer.prototype);

	PseudoElementContainer.prototype.appendToDOM = function() {
	    if (this.before) {
	        this.parent.node.insertBefore(this.node, this.parent.node.firstChild);
	    } else {
	        this.parent.node.appendChild(this.node);
	    }
	    this.parent.node.className += " " + this.getHideClass();
	};

	PseudoElementContainer.prototype.cleanDOM = function() {
	    this.node.parentNode.removeChild(this.node);
	    this.parent.node.className = this.parent.node.className.replace(this.getHideClass(), "");
	};

	PseudoElementContainer.prototype.getHideClass = function() {
	    return this["PSEUDO_HIDE_ELEMENT_CLASS_" + (this.before ? "BEFORE" : "AFTER")];
	};

	PseudoElementContainer.prototype.PSEUDO_HIDE_ELEMENT_CLASS_BEFORE = "___html2canvas___pseudoelement_before";
	PseudoElementContainer.prototype.PSEUDO_HIDE_ELEMENT_CLASS_AFTER = "___html2canvas___pseudoelement_after";

	module.exports = PseudoElementContainer;

	},{"./nodecontainer":14}],19:[function(require,module,exports){
	var log = require('./log');

	function Renderer(width, height, images, options, document) {
	    this.width = width;
	    this.height = height;
	    this.images = images;
	    this.options = options;
	    this.document = document;
	}

	Renderer.prototype.renderImage = function(container, bounds, borderData, imageContainer) {
	    var paddingLeft = container.cssInt('paddingLeft'),
	        paddingTop = container.cssInt('paddingTop'),
	        paddingRight = container.cssInt('paddingRight'),
	        paddingBottom = container.cssInt('paddingBottom'),
	        borders = borderData.borders;

	    var width = bounds.width - (borders[1].width + borders[3].width + paddingLeft + paddingRight);
	    var height = bounds.height - (borders[0].width + borders[2].width + paddingTop + paddingBottom);
	    this.drawImage(
	        imageContainer,
	        0,
	        0,
	        imageContainer.image.width || width,
	        imageContainer.image.height || height,
	        bounds.left + paddingLeft + borders[3].width,
	        bounds.top + paddingTop + borders[0].width,
	        width,
	        height
	    );
	};

	Renderer.prototype.renderBackground = function(container, bounds, borderData) {
	    if (bounds.height > 0 && bounds.width > 0) {
	        this.renderBackgroundColor(container, bounds);
	        this.renderBackgroundImage(container, bounds, borderData);
	    }
	};

	Renderer.prototype.renderBackgroundColor = function(container, bounds) {
	    var color = container.color("backgroundColor");
	    if (!color.isTransparent()) {
	        this.rectangle(bounds.left, bounds.top, bounds.width, bounds.height, color);
	    }
	};

	Renderer.prototype.renderBorders = function(borders) {
	    borders.forEach(this.renderBorder, this);
	};

	Renderer.prototype.renderBorder = function(data) {
	    if (!data.color.isTransparent() && data.args !== null) {
	        this.drawShape(data.args, data.color);
	    }
	};

	Renderer.prototype.renderBackgroundImage = function(container, bounds, borderData) {
	    var backgroundImages = container.parseBackgroundImages();
	    backgroundImages.reverse().forEach(function(backgroundImage, index, arr) {
	        switch(backgroundImage.method) {
	        case "url":
	            var image = this.images.get(backgroundImage.args[0]);
	            if (image) {
	                this.renderBackgroundRepeating(container, bounds, image, arr.length - (index+1), borderData);
	            } else {
	                log("Error loading background-image", backgroundImage.args[0]);
	            }
	            break;
	        case "linear-gradient":
	        case "gradient":
	            var gradientImage = this.images.get(backgroundImage.value);
	            if (gradientImage) {
	                this.renderBackgroundGradient(gradientImage, bounds, borderData);
	            } else {
	                log("Error loading background-image", backgroundImage.args[0]);
	            }
	            break;
	        case "none":
	            break;
	        default:
	            log("Unknown background-image type", backgroundImage.args[0]);
	        }
	    }, this);
	};

	Renderer.prototype.renderBackgroundRepeating = function(container, bounds, imageContainer, index, borderData) {
	    var size = container.parseBackgroundSize(bounds, imageContainer.image, index);
	    var position = container.parseBackgroundPosition(bounds, imageContainer.image, index, size);
	    var repeat = container.parseBackgroundRepeat(index);
	    switch (repeat) {
	    case "repeat-x":
	    case "repeat no-repeat":
	        this.backgroundRepeatShape(imageContainer, position, size, bounds, bounds.left + borderData[3], bounds.top + position.top + borderData[0], 99999, size.height, borderData);
	        break;
	    case "repeat-y":
	    case "no-repeat repeat":
	        this.backgroundRepeatShape(imageContainer, position, size, bounds, bounds.left + position.left + borderData[3], bounds.top + borderData[0], size.width, 99999, borderData);
	        break;
	    case "no-repeat":
	        this.backgroundRepeatShape(imageContainer, position, size, bounds, bounds.left + position.left + borderData[3], bounds.top + position.top + borderData[0], size.width, size.height, borderData);
	        break;
	    default:
	        this.renderBackgroundRepeat(imageContainer, position, size, {top: bounds.top, left: bounds.left}, borderData[3], borderData[0]);
	        break;
	    }
	};

	module.exports = Renderer;

	},{"./log":13}],20:[function(require,module,exports){
	var Renderer = require('../renderer');
	var LinearGradientContainer = require('../lineargradientcontainer');
	var log = require('../log');

	function CanvasRenderer(width, height) {
	    Renderer.apply(this, arguments);
	    this.canvas = this.options.canvas || this.document.createElement("canvas");
	    if (!this.options.canvas) {
	        this.canvas.width = width;
	        this.canvas.height = height;
	    }
	    this.ctx = this.canvas.getContext("2d");
	    this.taintCtx = this.document.createElement("canvas").getContext("2d");
	    this.ctx.textBaseline = "bottom";
	    this.variables = {};
	    log("Initialized CanvasRenderer with size", width, "x", height);
	}

	CanvasRenderer.prototype = Object.create(Renderer.prototype);

	CanvasRenderer.prototype.setFillStyle = function(fillStyle) {
	    this.ctx.fillStyle = typeof(fillStyle) === "object" && !!fillStyle.isColor ? fillStyle.toString() : fillStyle;
	    return this.ctx;
	};

	CanvasRenderer.prototype.rectangle = function(left, top, width, height, color) {
	    this.setFillStyle(color).fillRect(left, top, width, height);
	};

	CanvasRenderer.prototype.circle = function(left, top, size, color) {
	    this.setFillStyle(color);
	    this.ctx.beginPath();
	    this.ctx.arc(left + size / 2, top + size / 2, size / 2, 0, Math.PI*2, true);
	    this.ctx.closePath();
	    this.ctx.fill();
	};

	CanvasRenderer.prototype.circleStroke = function(left, top, size, color, stroke, strokeColor) {
	    this.circle(left, top, size, color);
	    this.ctx.strokeStyle = strokeColor.toString();
	    this.ctx.stroke();
	};

	CanvasRenderer.prototype.drawShape = function(shape, color) {
	    this.shape(shape);
	    this.setFillStyle(color).fill();
	};

	CanvasRenderer.prototype.taints = function(imageContainer) {
	    if (imageContainer.tainted === null) {
	        this.taintCtx.drawImage(imageContainer.image, 0, 0);
	        try {
	            this.taintCtx.getImageData(0, 0, 1, 1);
	            imageContainer.tainted = false;
	        } catch(e) {
	            this.taintCtx = document.createElement("canvas").getContext("2d");
	            imageContainer.tainted = true;
	        }
	    }

	    return imageContainer.tainted;
	};

	CanvasRenderer.prototype.drawImage = function(imageContainer, sx, sy, sw, sh, dx, dy, dw, dh) {
	    if (!this.taints(imageContainer) || this.options.allowTaint) {
	        this.ctx.drawImage(imageContainer.image, sx, sy, sw, sh, dx, dy, dw, dh);
	    }
	};

	CanvasRenderer.prototype.clip = function(shapes, callback, context) {
	    this.ctx.save();
	    shapes.filter(hasEntries).forEach(function(shape) {
	        this.shape(shape).clip();
	    }, this);
	    callback.call(context);
	    this.ctx.restore();
	};

	CanvasRenderer.prototype.shape = function(shape) {
	    this.ctx.beginPath();
	    shape.forEach(function(point, index) {
	        if (point[0] === "rect") {
	            this.ctx.rect.apply(this.ctx, point.slice(1));
	        } else {
	            this.ctx[(index === 0) ? "moveTo" : point[0] + "To" ].apply(this.ctx, point.slice(1));
	        }
	    }, this);
	    this.ctx.closePath();
	    return this.ctx;
	};

	CanvasRenderer.prototype.font = function(color, style, variant, weight, size, family) {
	    this.setFillStyle(color).font = [style, variant, weight, size, family].join(" ").split(",")[0];
	};

	CanvasRenderer.prototype.fontShadow = function(color, offsetX, offsetY, blur) {
	    this.setVariable("shadowColor", color.toString())
	        .setVariable("shadowOffsetY", offsetX)
	        .setVariable("shadowOffsetX", offsetY)
	        .setVariable("shadowBlur", blur);
	};

	CanvasRenderer.prototype.clearShadow = function() {
	    this.setVariable("shadowColor", "rgba(0,0,0,0)");
	};

	CanvasRenderer.prototype.setOpacity = function(opacity) {
	    this.ctx.globalAlpha = opacity;
	};

	CanvasRenderer.prototype.setTransform = function(transform) {
	    this.ctx.translate(transform.origin[0], transform.origin[1]);
	    this.ctx.transform.apply(this.ctx, transform.matrix);
	    this.ctx.translate(-transform.origin[0], -transform.origin[1]);
	};

	CanvasRenderer.prototype.setVariable = function(property, value) {
	    if (this.variables[property] !== value) {
	        this.variables[property] = this.ctx[property] = value;
	    }

	    return this;
	};

	CanvasRenderer.prototype.text = function(text, left, bottom) {
	    this.ctx.fillText(text, left, bottom);
	};

	CanvasRenderer.prototype.backgroundRepeatShape = function(imageContainer, backgroundPosition, size, bounds, left, top, width, height, borderData) {
	    var shape = [
	        ["line", Math.round(left), Math.round(top)],
	        ["line", Math.round(left + width), Math.round(top)],
	        ["line", Math.round(left + width), Math.round(height + top)],
	        ["line", Math.round(left), Math.round(height + top)]
	    ];
	    this.clip([shape], function() {
	        this.renderBackgroundRepeat(imageContainer, backgroundPosition, size, bounds, borderData[3], borderData[0]);
	    }, this);
	};

	CanvasRenderer.prototype.renderBackgroundRepeat = function(imageContainer, backgroundPosition, size, bounds, borderLeft, borderTop) {
	    var offsetX = Math.round(bounds.left + backgroundPosition.left + borderLeft), offsetY = Math.round(bounds.top + backgroundPosition.top + borderTop);
	    this.setFillStyle(this.ctx.createPattern(this.resizeImage(imageContainer, size), "repeat"));
	    this.ctx.translate(offsetX, offsetY);
	    this.ctx.fill();
	    this.ctx.translate(-offsetX, -offsetY);
	};

	CanvasRenderer.prototype.renderBackgroundGradient = function(gradientImage, bounds) {
	    if (gradientImage instanceof LinearGradientContainer) {
	        var gradient = this.ctx.createLinearGradient(
	            bounds.left + bounds.width * gradientImage.x0,
	            bounds.top + bounds.height * gradientImage.y0,
	            bounds.left +  bounds.width * gradientImage.x1,
	            bounds.top +  bounds.height * gradientImage.y1);
	        gradientImage.colorStops.forEach(function(colorStop) {
	            gradient.addColorStop(colorStop.stop, colorStop.color.toString());
	        });
	        this.rectangle(bounds.left, bounds.top, bounds.width, bounds.height, gradient);
	    }
	};

	CanvasRenderer.prototype.resizeImage = function(imageContainer, size) {
	    var image = imageContainer.image;
	    if(image.width === size.width && image.height === size.height) {
	        return image;
	    }

	    var ctx, canvas = document.createElement('canvas');
	    canvas.width = size.width;
	    canvas.height = size.height;
	    ctx = canvas.getContext("2d");
	    ctx.drawImage(image, 0, 0, image.width, image.height, 0, 0, size.width, size.height );
	    return canvas;
	};

	function hasEntries(array) {
	    return array.length > 0;
	}

	module.exports = CanvasRenderer;

	},{"../lineargradientcontainer":12,"../log":13,"../renderer":19}],21:[function(require,module,exports){
	var NodeContainer = require('./nodecontainer');

	function StackingContext(hasOwnStacking, opacity, element, parent) {
	    NodeContainer.call(this, element, parent);
	    this.ownStacking = hasOwnStacking;
	    this.contexts = [];
	    this.children = [];
	    this.opacity = (this.parent ? this.parent.stack.opacity : 1) * opacity;
	}

	StackingContext.prototype = Object.create(NodeContainer.prototype);

	StackingContext.prototype.getParentStack = function(context) {
	    var parentStack = (this.parent) ? this.parent.stack : null;
	    return parentStack ? (parentStack.ownStacking ? parentStack : parentStack.getParentStack(context)) : context.stack;
	};

	module.exports = StackingContext;

	},{"./nodecontainer":14}],22:[function(require,module,exports){
	function Support(document) {
	    this.rangeBounds = this.testRangeBounds(document);
	    this.cors = this.testCORS();
	    this.svg = this.testSVG();
	}

	Support.prototype.testRangeBounds = function(document) {
	    var range, testElement, rangeBounds, rangeHeight, support = false;

	    if (document.createRange) {
	        range = document.createRange();
	        if (range.getBoundingClientRect) {
	            testElement = document.createElement('boundtest');
	            testElement.style.height = "123px";
	            testElement.style.display = "block";
	            document.body.appendChild(testElement);

	            range.selectNode(testElement);
	            rangeBounds = range.getBoundingClientRect();
	            rangeHeight = rangeBounds.height;

	            if (rangeHeight === 123) {
	                support = true;
	            }
	            document.body.removeChild(testElement);
	        }
	    }

	    return support;
	};

	Support.prototype.testCORS = function() {
	    return typeof((new Image()).crossOrigin) !== "undefined";
	};

	Support.prototype.testSVG = function() {
	    var img = new Image();
	    var canvas = document.createElement("canvas");
	    var ctx =  canvas.getContext("2d");
	    img.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";

	    try {
	        ctx.drawImage(img, 0, 0);
	        canvas.toDataURL();
	    } catch(e) {
	        return false;
	    }
	    return true;
	};

	module.exports = Support;

	},{}],23:[function(require,module,exports){
	var XHR = require('./xhr');
	var decode64 = require('./utils').decode64;

	function SVGContainer(src) {
	    this.src = src;
	    this.image = null;
	    var self = this;

	    this.promise = this.hasFabric().then(function() {
	        return (self.isInline(src) ? Promise.resolve(self.inlineFormatting(src)) : XHR(src));
	    }).then(function(svg) {
	        return new Promise(function(resolve) {
	            window.html2canvas.svg.fabric.loadSVGFromString(svg, self.createCanvas.call(self, resolve));
	        });
	    });
	}

	SVGContainer.prototype.hasFabric = function() {
	    return !window.html2canvas.svg || !window.html2canvas.svg.fabric ? Promise.reject(new Error("html2canvas.svg.js is not loaded, cannot render svg")) : Promise.resolve();
	};

	SVGContainer.prototype.inlineFormatting = function(src) {
	    return (/^data:image\/svg\+xml;base64,/.test(src)) ? this.decode64(this.removeContentType(src)) : this.removeContentType(src);
	};

	SVGContainer.prototype.removeContentType = function(src) {
	    return src.replace(/^data:image\/svg\+xml(;base64)?,/,'');
	};

	SVGContainer.prototype.isInline = function(src) {
	    return (/^data:image\/svg\+xml/i.test(src));
	};

	SVGContainer.prototype.createCanvas = function(resolve) {
	    var self = this;
	    return function (objects, options) {
	        var canvas = new window.html2canvas.svg.fabric.StaticCanvas('c');
	        self.image = canvas.lowerCanvasEl;
	        canvas
	            .setWidth(options.width)
	            .setHeight(options.height)
	            .add(window.html2canvas.svg.fabric.util.groupSVGElements(objects, options))
	            .renderAll();
	        resolve(canvas.lowerCanvasEl);
	    };
	};

	SVGContainer.prototype.decode64 = function(str) {
	    return (typeof(window.atob) === "function") ? window.atob(str) : decode64(str);
	};

	module.exports = SVGContainer;

	},{"./utils":26,"./xhr":28}],24:[function(require,module,exports){
	var SVGContainer = require('./svgcontainer');

	function SVGNodeContainer(node, _native) {
	    this.src = node;
	    this.image = null;
	    var self = this;

	    this.promise = _native ? new Promise(function(resolve, reject) {
	        self.image = new Image();
	        self.image.onload = resolve;
	        self.image.onerror = reject;
	        self.image.src = "data:image/svg+xml," + (new XMLSerializer()).serializeToString(node);
	        if (self.image.complete === true) {
	            resolve(self.image);
	        }
	    }) : this.hasFabric().then(function() {
	        return new Promise(function(resolve) {
	            window.html2canvas.svg.fabric.parseSVGDocument(node, self.createCanvas.call(self, resolve));
	        });
	    });
	}

	SVGNodeContainer.prototype = Object.create(SVGContainer.prototype);

	module.exports = SVGNodeContainer;

	},{"./svgcontainer":23}],25:[function(require,module,exports){
	var NodeContainer = require('./nodecontainer');

	function TextContainer(node, parent) {
	    NodeContainer.call(this, node, parent);
	}

	TextContainer.prototype = Object.create(NodeContainer.prototype);

	TextContainer.prototype.applyTextTransform = function() {
	    this.node.data = this.transform(this.parent.css("textTransform"));
	};

	TextContainer.prototype.transform = function(transform) {
	    var text = this.node.data;
	    switch(transform){
	        case "lowercase":
	            return text.toLowerCase();
	        case "capitalize":
	            return text.replace(/(^|\s|:|-|\(|\))([a-z])/g, capitalize);
	        case "uppercase":
	            return text.toUpperCase();
	        default:
	            return text;
	    }
	};

	function capitalize(m, p1, p2) {
	    if (m.length > 0) {
	        return p1 + p2.toUpperCase();
	    }
	}

	module.exports = TextContainer;

	},{"./nodecontainer":14}],26:[function(require,module,exports){
	exports.smallImage = function smallImage() {
	    return "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
	};

	exports.bind = function(callback, context) {
	    return function() {
	        return callback.apply(context, arguments);
	    };
	};

	/*
	 * base64-arraybuffer
	 * https://github.com/niklasvh/base64-arraybuffer
	 *
	 * Copyright (c) 2012 Niklas von Hertzen
	 * Licensed under the MIT license.
	 */

	exports.decode64 = function(base64) {
	    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
	    var len = base64.length, i, encoded1, encoded2, encoded3, encoded4, byte1, byte2, byte3;

	    var output = "";

	    for (i = 0; i < len; i+=4) {
	        encoded1 = chars.indexOf(base64[i]);
	        encoded2 = chars.indexOf(base64[i+1]);
	        encoded3 = chars.indexOf(base64[i+2]);
	        encoded4 = chars.indexOf(base64[i+3]);

	        byte1 = (encoded1 << 2) | (encoded2 >> 4);
	        byte2 = ((encoded2 & 15) << 4) | (encoded3 >> 2);
	        byte3 = ((encoded3 & 3) << 6) | encoded4;
	        if (encoded3 === 64) {
	            output += String.fromCharCode(byte1);
	        } else if (encoded4 === 64 || encoded4 === -1) {
	            output += String.fromCharCode(byte1, byte2);
	        } else{
	            output += String.fromCharCode(byte1, byte2, byte3);
	        }
	    }

	    return output;
	};

	exports.getBounds = function(node) {
	    if (node.getBoundingClientRect) {
	        var clientRect = node.getBoundingClientRect();
	        var width = node.offsetWidth == null ? clientRect.width : node.offsetWidth;
	        return {
	            top: clientRect.top,
	            bottom: clientRect.bottom || (clientRect.top + clientRect.height),
	            right: clientRect.left + width,
	            left: clientRect.left,
	            width:  width,
	            height: node.offsetHeight == null ? clientRect.height : node.offsetHeight
	        };
	    }
	    return {};
	};

	exports.offsetBounds = function(node) {
	    var parent = node.offsetParent ? exports.offsetBounds(node.offsetParent) : {top: 0, left: 0};

	    return {
	        top: node.offsetTop + parent.top,
	        bottom: node.offsetTop + node.offsetHeight + parent.top,
	        right: node.offsetLeft + parent.left + node.offsetWidth,
	        left: node.offsetLeft + parent.left,
	        width: node.offsetWidth,
	        height: node.offsetHeight
	    };
	};

	exports.parseBackgrounds = function(backgroundImage) {
	    var whitespace = ' \r\n\t',
	        method, definition, prefix, prefix_i, block, results = [],
	        mode = 0, numParen = 0, quote, args;
	    var appendResult = function() {
	        if(method) {
	            if (definition.substr(0, 1) === '"') {
	                definition = definition.substr(1, definition.length - 2);
	            }
	            if (definition) {
	                args.push(definition);
	            }
	            if (method.substr(0, 1) === '-' && (prefix_i = method.indexOf('-', 1 ) + 1) > 0) {
	                prefix = method.substr(0, prefix_i);
	                method = method.substr(prefix_i);
	            }
	            results.push({
	                prefix: prefix,
	                method: method.toLowerCase(),
	                value: block,
	                args: args,
	                image: null
	            });
	        }
	        args = [];
	        method = prefix = definition = block = '';
	    };
	    args = [];
	    method = prefix = definition = block = '';
	    backgroundImage.split("").forEach(function(c) {
	        if (mode === 0 && whitespace.indexOf(c) > -1) {
	            return;
	        }
	        switch(c) {
	        case '"':
	            if(!quote) {
	                quote = c;
	            } else if(quote === c) {
	                quote = null;
	            }
	            break;
	        case '(':
	            if(quote) {
	                break;
	            } else if(mode === 0) {
	                mode = 1;
	                block += c;
	                return;
	            } else {
	                numParen++;
	            }
	            break;
	        case ')':
	            if (quote) {
	                break;
	            } else if(mode === 1) {
	                if(numParen === 0) {
	                    mode = 0;
	                    block += c;
	                    appendResult();
	                    return;
	                } else {
	                    numParen--;
	                }
	            }
	            break;

	        case ',':
	            if (quote) {
	                break;
	            } else if(mode === 0) {
	                appendResult();
	                return;
	            } else if (mode === 1) {
	                if (numParen === 0 && !method.match(/^url$/i)) {
	                    args.push(definition);
	                    definition = '';
	                    block += c;
	                    return;
	                }
	            }
	            break;
	        }

	        block += c;
	        if (mode === 0) {
	            method += c;
	        } else {
	            definition += c;
	        }
	    });

	    appendResult();
	    return results;
	};

	},{}],27:[function(require,module,exports){
	var GradientContainer = require('./gradientcontainer');

	function WebkitGradientContainer(imageData) {
	    GradientContainer.apply(this, arguments);
	    this.type = imageData.args[0] === "linear" ? GradientContainer.TYPES.LINEAR : GradientContainer.TYPES.RADIAL;
	}

	WebkitGradientContainer.prototype = Object.create(GradientContainer.prototype);

	module.exports = WebkitGradientContainer;

	},{"./gradientcontainer":9}],28:[function(require,module,exports){
	function XHR(url) {
	    return new Promise(function(resolve, reject) {
	        var xhr = new XMLHttpRequest();
	        xhr.open('GET', url);

	        xhr.onload = function() {
	            if (xhr.status === 200) {
	                resolve(xhr.responseText);
	            } else {
	                reject(new Error(xhr.statusText));
	            }
	        };

	        xhr.onerror = function() {
	            reject(new Error("Network Error"));
	        };

	        xhr.send();
	    });
	}

	module.exports = XHR;

	},{}]},{},[4])(4)
	});
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* FileSaver.js
	 * A saveAs() FileSaver implementation.
	 * 1.1.20151003
	 *
	 * By Eli Grey, http://eligrey.com
	 * License: MIT
	 *   See https://github.com/eligrey/FileSaver.js/blob/master/LICENSE.md
	 */

	/*global self */
	/*jslint bitwise: true, indent: 4, laxbreak: true, laxcomma: true, smarttabs: true, plusplus: true */

	/*! @source http://purl.eligrey.com/github/FileSaver.js/blob/master/FileSaver.js */

	var saveAs = saveAs || (function(view) {
	  "use strict";
	  // IE <10 is explicitly unsupported
	  if (typeof navigator !== "undefined" && /MSIE [1-9]\./.test(navigator.userAgent)) {
	    return;
	  }
	  var
	    doc = view.document
	    // only get URL when necessary in case Blob.js hasn't overridden it yet
	    ,
	    get_URL = function() {
	      return view.URL || view.webkitURL || view;
	    },
	    save_link = doc.createElementNS("http://www.w3.org/1999/xhtml", "a"),
	    can_use_save_link = "download" in save_link,
	    click = function(node) {
	      var event = new MouseEvent("click");
	      node.dispatchEvent(event);
	    },
	    is_safari = /Version\/[\d\.]+.*Safari/.test(navigator.userAgent),
	    webkit_req_fs = view.webkitRequestFileSystem,
	    req_fs = view.requestFileSystem || webkit_req_fs || view.mozRequestFileSystem,
	    throw_outside = function(ex) {
	      (view.setImmediate || view.setTimeout)(function() {
	        throw ex;
	      }, 0);
	    },
	    force_saveable_type = "application/octet-stream",
	    fs_min_size = 0
	    // See https://code.google.com/p/chromium/issues/detail?id=375297#c7 and
	    // https://github.com/eligrey/FileSaver.js/commit/485930a#commitcomment-8768047
	    // for the reasoning behind the timeout and revocation flow
	    ,
	    arbitrary_revoke_timeout = 500 // in ms
	    ,
	    revoke = function(file) {
	      var revoker = function() {
	        if (typeof file === "string") { // file is an object URL
	          get_URL().revokeObjectURL(file);
	        } else { // file is a File
	          file.remove();
	        }
	      };
	      if (view.chrome) {
	        revoker();
	      } else {
	        setTimeout(revoker, arbitrary_revoke_timeout);
	      }
	    },
	    dispatch = function(filesaver, event_types, event) {
	      event_types = [].concat(event_types);
	      var i = event_types.length;
	      while (i--) {
	        var listener = filesaver["on" + event_types[i]];
	        if (typeof listener === "function") {
	          try {
	            listener.call(filesaver, event || filesaver);
	          } catch (ex) {
	            throw_outside(ex);
	          }
	        }
	      }
	    },
	    auto_bom = function(blob) {
	      // prepend BOM for UTF-8 XML and text/* types (including HTML)
	      if (
	        /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i
	        .test(blob.type)) {
	        return new Blob(["\ufeff", blob], {
	          type: blob.type
	        });
	      }
	      return blob;
	    },
	    FileSaver = function(blob, name, no_auto_bom) {
	      if (!no_auto_bom) {
	        blob = auto_bom(blob);
	      }
	      // First try a.download, then web filesystem, then object URLs
	      var
	        filesaver = this,
	        type = blob.type,
	        blob_changed = false,
	        object_url, target_view, dispatch_all = function() {
	          dispatch(filesaver, "writestart progress write writeend".split(
	            " "));
	        }
	        // on any filesys errors revert to saving with object URLs
	        ,
	        fs_error = function() {
	          if (target_view && is_safari && typeof FileReader !== "undefined") {
	            // Safari doesn't allow downloading of blob urls
	            var reader = new FileReader();
	            reader.onloadend = function() {
	              var base64Data = reader.result;
	              target_view.location.href = "data:attachment/file" +
	                base64Data.slice(base64Data.search(/[,;]/));
	              filesaver.readyState = filesaver.DONE;
	              dispatch_all();
	            };
	            reader.readAsDataURL(blob);
	            filesaver.readyState = filesaver.INIT;
	            return;
	          }
	          // don't create more object URLs than needed
	          if (blob_changed || !object_url) {
	            object_url = get_URL().createObjectURL(blob);
	          }
	          if (target_view) {
	            target_view.location.href = object_url;
	          } else {
	            var new_tab = view.open(object_url, "_blank");
	            if (new_tab == undefined && is_safari) {
	              //Apple do not allow window.open, see http://bit.ly/1kZffRI
	              view.location.href = object_url
	            }
	          }
	          filesaver.readyState = filesaver.DONE;
	          dispatch_all();
	          revoke(object_url);
	        },
	        abortable = function(func) {
	          return function() {
	            if (filesaver.readyState !== filesaver.DONE) {
	              return func.apply(this, arguments);
	            }
	          };
	        },
	        create_if_not_found = {
	          create: true,
	          exclusive: false
	        },
	        slice;
	      filesaver.readyState = filesaver.INIT;
	      if (!name) {
	        name = "download";
	      }
	      if (can_use_save_link) {
	        object_url = get_URL().createObjectURL(blob);
	        setTimeout(function() {
	          save_link.href = object_url;
	          save_link.download = name;
	          click(save_link);
	          dispatch_all();
	          revoke(object_url);
	          filesaver.readyState = filesaver.DONE;
	        });
	        return;
	      }
	      // Object and web filesystem URLs have a problem saving in Google Chrome when
	      // viewed in a tab, so I force save with application/octet-stream
	      // http://code.google.com/p/chromium/issues/detail?id=91158
	      // Update: Google errantly closed 91158, I submitted it again:
	      // https://code.google.com/p/chromium/issues/detail?id=389642
	      if (view.chrome && type && type !== force_saveable_type) {
	        slice = blob.slice || blob.webkitSlice;
	        blob = slice.call(blob, 0, blob.size, force_saveable_type);
	        blob_changed = true;
	      }
	      // Since I can't be sure that the guessed media type will trigger a download
	      // in WebKit, I append .download to the filename.
	      // https://bugs.webkit.org/show_bug.cgi?id=65440
	      if (webkit_req_fs && name !== "download") {
	        name += ".download";
	      }
	      if (type === force_saveable_type || webkit_req_fs) {
	        target_view = view;
	      }
	      if (!req_fs) {
	        fs_error();
	        return;
	      }
	      fs_min_size += blob.size;
	      req_fs(view.TEMPORARY, fs_min_size, abortable(function(fs) {
	        fs.root.getDirectory("saved", create_if_not_found, abortable(
	          function(dir) {
	            var save = function() {
	              dir.getFile(name, create_if_not_found, abortable(
	                function(file) {
	                  file.createWriter(abortable(function(
	                    writer) {
	                    writer.onwriteend = function(
	                      event) {
	                      target_view.location.href =
	                        file.toURL();
	                      filesaver.readyState =
	                        filesaver.DONE;
	                      dispatch(filesaver,
	                        "writeend", event);
	                      revoke(file);
	                    };
	                    writer.onerror = function() {
	                      var error = writer.error;
	                      if (error.code !== error.ABORT_ERR) {
	                        fs_error();
	                      }
	                    };
	                    "writestart progress write abort"
	                    .split(" ").forEach(function(
	                      event) {
	                      writer["on" + event] =
	                        filesaver["on" + event];
	                    });
	                    writer.write(blob);
	                    filesaver.abort = function() {
	                      writer.abort();
	                      filesaver.readyState =
	                        filesaver.DONE;
	                    };
	                    filesaver.readyState = filesaver.WRITING;
	                  }), fs_error);
	                }), fs_error);
	            };
	            dir.getFile(name, {
	              create: false
	            }, abortable(function(file) {
	              // delete file if it already exists
	              file.remove();
	              save();
	            }), abortable(function(ex) {
	              if (ex.code === ex.NOT_FOUND_ERR) {
	                save();
	              } else {
	                fs_error();
	              }
	            }));
	          }), fs_error);
	      }), fs_error);
	    },
	    FS_proto = FileSaver.prototype,
	    saveAs = function(blob, name, no_auto_bom) {
	      return new FileSaver(blob, name, no_auto_bom);
	    };
	  // IE 10+ (native saveAs)
	  if (typeof navigator !== "undefined" && navigator.msSaveOrOpenBlob) {
	    return function(blob, name, no_auto_bom) {
	      if (!no_auto_bom) {
	        blob = auto_bom(blob);
	      }
	      return navigator.msSaveOrOpenBlob(blob, name || "download");
	    };
	  }

	  FS_proto.abort = function() {
	    var filesaver = this;
	    filesaver.readyState = filesaver.DONE;
	    dispatch(filesaver, "abort");
	  };
	  FS_proto.readyState = FS_proto.INIT = 0;
	  FS_proto.WRITING = 1;
	  FS_proto.DONE = 2;

	  FS_proto.error =
	    FS_proto.onwritestart =
	    FS_proto.onprogress =
	    FS_proto.onwrite =
	    FS_proto.onabort =
	    FS_proto.onerror =
	    FS_proto.onwriteend =
	    null;

	  return saveAs;
	}(
	  typeof self !== "undefined" && self || typeof window !== "undefined" &&
	  window || this.content
	));
	// `self` is undefined in Firefox for Android content script context
	// while `this` is nsIContentFrameMessageManager
	// with an attribute `content` that corresponds to the window

	if (typeof module !== "undefined" && module.exports) {
	  module.exports.saveAs = saveAs;
	} else if (("function" !== "undefined" && __webpack_require__(14) !== null) && (__webpack_require__(2) !=
	    null)) {
	  !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	    return saveAs;
	  }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}

	/* canvas-toBlob.js
	 * A canvas.toBlob() implementation.
	 * 2013-12-27
	 *
	 * By Eli Grey, http://eligrey.com and Devin Samarin, https://github.com/eboyjr
	 * License: MIT
	 *   See https://github.com/eligrey/canvas-toBlob.js/blob/master/LICENSE.md
	 */

	/*global self */
	/*jslint bitwise: true, regexp: true, confusion: true, es5: true, vars: true, white: true,
	  plusplus: true */

	/*! @source http://purl.eligrey.com/github/canvas-toBlob.js/blob/master/canvas-toBlob.js */

	(function(view) {
	  "use strict";
	  var
	    Uint8Array = view.Uint8Array,
	    HTMLCanvasElement = view.HTMLCanvasElement,
	    canvas_proto = HTMLCanvasElement && HTMLCanvasElement.prototype,
	    is_base64_regex = /\s*;\s*base64\s*(?:;|$)/i,
	    to_data_url = "toDataURL",
	    base64_ranks, decode_base64 = function(base64) {
	      var
	        len = base64.length,
	        buffer = new Uint8Array(len / 4 * 3 | 0),
	        i = 0,
	        outptr = 0,
	        last = [0, 0],
	        state = 0,
	        save = 0,
	        rank, code, undef;
	      while (len--) {
	        code = base64.charCodeAt(i++);
	        rank = base64_ranks[code - 43];
	        if (rank !== 255 && rank !== undef) {
	          last[1] = last[0];
	          last[0] = code;
	          save = (save << 6) | rank;
	          state++;
	          if (state === 4) {
	            buffer[outptr++] = save >>> 16;
	            if (last[1] !== 61 /* padding character */ ) {
	              buffer[outptr++] = save >>> 8;
	            }
	            if (last[0] !== 61 /* padding character */ ) {
	              buffer[outptr++] = save;
	            }
	            state = 0;
	          }
	        }
	      }
	      // 2/3 chance there's going to be some null bytes at the end, but that
	      // doesn't really matter with most image formats.
	      // If it somehow matters for you, truncate the buffer up outptr.
	      return buffer;
	    };
	  if (Uint8Array) {
	    base64_ranks = new Uint8Array([
	      62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -
	      1, 0, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
	      15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1,
	      26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42,
	      43, 44, 45, 46, 47, 48, 49, 50, 51
	    ]);
	  }
	  if (HTMLCanvasElement && !canvas_proto.toBlob) {
	    canvas_proto.toBlob = function(callback, type /*, ...args*/ ) {
	      if (!type) {
	        type = "image/png";
	      }
	      if (this.mozGetAsFile) {
	        callback(this.mozGetAsFile("canvas", type));
	        return;
	      }
	      if (this.msToBlob && /^\s*image\/png\s*(?:$|;)/i.test(type)) {
	        callback(this.msToBlob());
	        return;
	      }

	      var
	        args = Array.prototype.slice.call(arguments, 1),
	        dataURI = this[to_data_url].apply(this, args),
	        header_end = dataURI.indexOf(","),
	        data = dataURI.substring(header_end + 1),
	        is_base64 = is_base64_regex.test(dataURI.substring(0, header_end)),
	        blob;
	      if (Blob.fake) {
	        // no reason to decode a data: URI that's just going to become a data URI again
	        blob = new Blob
	        if (is_base64) {
	          blob.encoding = "base64";
	        } else {
	          blob.encoding = "URI";
	        }
	        blob.data = data;
	        blob.size = data.length;
	      } else if (Uint8Array) {
	        if (is_base64) {
	          blob = new Blob([decode_base64(data)], {
	            type: type
	          });
	        } else {
	          blob = new Blob([decodeURIComponent(data)], {
	            type: type
	          });
	        }
	      }
	      callback(blob);
	    };

	    if (canvas_proto.toDataURLHD) {
	      canvas_proto.toBlobHD = function() {
	        to_data_url = "toDataURLHD";
	        var blob = this.toBlob();
	        to_data_url = "toDataURL";
	        return blob;
	      }
	    } else {
	      canvas_proto.toBlobHD = canvas_proto.toBlob;
	    }
	  }
	}(typeof self !== "undefined" && self || typeof window !== "undefined" &&
	  window || this.content || this));


/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ },
/* 15 */
/***/ function(module, exports) {

	$(function() {

	  var isloading, toLoad, page, pages, wfInstance;

	  var content = document.getElementsByClassName('content')[0];
	  var badge = document.getElementById('badge');

	  function triggerContent(elem) {
	    if (elem.hasClass('slide-in-half')) {
	      elem.removeClass('slide-in-half').addClass('slide-out-half');
	    } else {
	      elem.removeClass('slide-out-half').addClass('slide-in-half');
	    }
	  }

	  function updateSrc() {
	    pages = window.location.pathname.split('/');
	    page = window.location.pathname.split('/').pop();

	    if (pages[1] !== "") {
	      $('#badge').removeClass('slide-out').addClass('slide-in');
	      $('.content').removeClass('slide-out-slow').addClass('slide-in-slow');

	      //$(".content").removeClass("hide");
	      //  $('.badge').fadeOut('slow');
	      //$("#header").fadeIn();
	      initform();

	    } else {
	      $('#badge').removeClass('slide-in').addClass('slide-out');
	      $('.content').removeClass('slide-in-slow').addClass('slide-out-slow');

	      if ($('html').hasClass('lt-ie10') === false) {
	        //  $(".content").addClass("hide");
	        //  $("#header").fadeOut('slow');
	        //  $('.badge').fadeIn('slow');
	      }
	    }

	    var primary = document.getElementsByClassName('primary');
	    for (i = 0; i < primary.length; i++) {
	      primary[i].style.color = pan.dom.primaryColour;
	      primary[i].style.borderColor = pan.dom.primaryColour;
	    }
	    var secondary = document.getElementsByClassName('secondary');
	    for (i = 0; i < secondary.length; i++) {
	      secondary[i].style.backgroundColor = pan.dom.primaryColour;
	    }

	    $(document).ready(function() {
	      $('.image-popup-no-margins').magnificPopup({
	        type: 'image',
	        closeOnContentClick: true,
	        closeBtnInside: false,
	        fixedContentPos: true,
	        mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
	        image: {
	          verticalFit: true
	        },
	        zoom: {
	          enabled: true,
	          duration: 300 // don't foget to change the duration also in CSS
	        }
	      });

	      $('.popup-youtube ').magnificPopup({
	        disableOn: 700,
	        type: 'iframe',
	        mainClass: 'mfp-no-margins mfp-with-zoom',
	        removalDelay: 160,
	        preloader: false,
	        fixedContentPos: false
	      });
	    });


	  }

	  function loadpage(url) {
	    isloading = 1;

	    toLoad = url + ' .content > *';
	    $('.content').innerHTML = "";
	    $('.content').load(toLoad, function(response, status, xhr) {
	      if (status == "error") {
	        var msg = "Sorry but there was an error: ";
	        $(".content").html(msg + xhr.status + " " + xhr.statusText);
	        History.pushState('/404', document.title +
	          " | Josh Hare", '/404');
	      } else {
	        var dataPage = $(response),
	          titlePage = dataPage.filter("title").text();
	        document.title = titlePage;
	        History.pushState(url, titlePage, url);
	        var isOpen = content.classList.contains('slide-in');
	        //$('.content').addClass('slide-out');

	        callmeal();
	      }

	    });
	  }

	  function callmeal() {
	    $(window).scrollTop(0);
	    updateSrc();

	    isloading = 0;
	    return false;
	  }

	  function hello() {
	    "use strict";
	    updateSrc();

	    $('#status, #msg').fadeOut(350, function() {
	      this.remove()
	    }); // will first fade out the loading animation
	    $('#preloader').delay(350).fadeOut('slow', function() {
	      //  this.remove()
	    }); // will fade out the div that covers the website.

	    $('body').delay(350).css({
	      'overflow': 'visible'
	    });

	    // Prepare
	    var History = window.History; // Note: We are using a capital H instead of a lower h
	    if (!History.enabled) {
	      // History.js is disabled for this browser.
	      // This is because we can optionally choose to support HTML4 browsers or not.
	      return false;
	    }

	    // Bind to StateChange Event
	    History.Adapter.bind(window, 'statechange', function() { // Note: We are using statechange instead of popstate
	      var State = History.getState();
	      if (State.internal) {
	        var url = State.url;
	        loadpage(url);
	      } else {}
	    });
	    var State = History.getState();
	    var url = State.url;
	    loadpage(url);

	    $('.aj').on("click", function(evt) {
	      evt.preventDefault();
	      if (isloading != 1) {
	        var url = $(this).attr('href');
	        loadpage(url);
	      }
	      return false;
	    });

	    $('.nav').on("click", function(evt) {
	      evt.preventDefault();
	      if (isloading != 1) {
	        var url = $(this).attr('href');
	        loadpage(url);
	      }
	      return false;
	    });

	    $('#menu li').on("click", function(evt) {
	      evt.preventDefault();
	      if (isloading != 1) {
	        $('.content').fadeOut(2);
	        $(".closeButton").removeClass("hide");
	        $("#menu li.active").removeClass('active');
	        $(this).parents('li').addClass('active');
	        $(this).attr('class', 'active');
	        var url = $("a", this).attr('href');
	        loadpage(url);
	      }
	      return false;
	    });

	    $('a[href*=#]:not([href=#]):not([target=_blank])').on("click",
	      function(
	        evt) {
	        if (location.pathname.replace(/^\//, '') == this.pathname.replace(
	            /^\//,
	            '') && location.hostname == this.hostname) {
	          var target = $(this.hash);
	          console.log("target: " + target);
	          target = target.length ? target : $('[name=' + this.hash.slice(
	              1) +
	            ']');
	          if (target.length) {
	            $('html,body').animate({
	              scrollTop: target.offset().top - 40
	            }, 1000);
	            return false;
	          }
	        }
	      });

	    $('.closeButton').on("click", function(evt) {
	      evt.preventDefault();
	      triggerContent($(this).parent());
	      /*
	      if ($(".palettes").hasClass("hide")) {
	        $(".palettes").removeClass("hide").addClass("show");
	      } else {
	        $(".palettes").removeClass("show").addClass("hide");
	      };*/
	    });

	    $('.nstSlider').nstSlider({
	      "left_grip_selector": ".leftGrip",
	      "value_bar_selector": ".bar",
	      "value_changed_callback": function(cause, leftValue) {
	        var $container = $(this).parent(),
	          b = 110 - 65 + leftValue,
	          g = 145 - b,
	          r = 250;
	        $(this).find('.bar').css('background', 'rgb(' + [r, g, b].join(
	            ',') +
	          ')');
	        pan.dom.columns = leftValue;
	        pan.dom.depth = pan.dom.currentSet.value.length / leftValue;
	        pan.dom.refreshBackground();
	      }
	    });

	    $('#minimise').on("click", function(evt) {
	      evt.preventDefault();
	      if ($("#container").hasClass('scale')) {
	        $("#container").attr('class', 'inScale');
	      } else {
	        $("#container").attr('class', 'scale');
	      }
	    });
	    $('#help').on("click", function(evt) {
	      evt.preventDefault();
	      if ($('.palettes').hasClass('slide-in-half')) {
	        $('.palettes').removeClass('slide-in-half').addClass(
	          'slide-out-half');
	      }
	      triggerContent($(".help"));
	    });
	    $('#change, .change').on("click", function(evt) {
	      evt.preventDefault();
	      if ($(".help").hasClass('slide-in-half')) {
	        $(".help").removeClass('slide-in-half').addClass(
	          'slide-out-half');
	      }
	      triggerContent($(".palettes"));
	    });

	    $('#palette, #badge').on("click", function(evt) {
	      evt.preventDefault();
	      pan.dom.refreshBackground();
	    });

	    $('.close').on("click", function(evt) {
	      evt.preventDefault();
	      pan.dom.refreshBackground();
	    });

	    try {
	      $.ytLoad()
	    } catch (e) {
	      console.log('error loading yt ' + e);
	      Modernizr.load([{
	        load: '/js/ytLoad/ytLoad.jquery.js',
	        complete: function() {
	          $.ytLoad()
	        }
	      }])
	    }

	    $('#menu').slicknav({
	      'init': function(trigger) {
	        $('.slicknav_nav').append(
	          '<ul class="loginmenu"><li></li></ul>'
	        );
	        var str =
	          '<div><a href="tel:0800-39-69-99" id="telly">Contact me on 0800 39 69 99</a></div>';
	        $('.slicknav_nav').append(str);
	      }
	    });
	    return false;
	  }


	  function initform() {

	    $("#sendform").click(function() {

	      var proceed = true;
	      //simple validation at clients end
	      //loop through each field and we simply change border color to red for invalid fields
	      $(
	        "#contact-form input[required=true], #contact-form textarea[required=true]"
	      ).each(function() {

	        $(this).css('border', '');
	        if (!$(this).val()) { //if this field is empty
	          $(this).attr("placeholder", "Please enter your " + $(
	              this)
	            .attr(
	              "name"));
	          $(this).css('border-bottom', '1px solid red'); //change border color to red
	          $('.content .contactform .send').css('background-color',
	            'rgb(202, 42, 42)'); //change background color to red
	          proceed = false; //set do not proceed flag
	        }
	      });

	      if (proceed) //everything looks good! proceed...
	      {
	        //get input field values data to be sent to server
	        post_data = {
	          'user_name': $('input[name=name]').val(),
	          'user_email': $('input[name=email]').val(),
	          'phone_number': $('input[name=phone]').val(),
	          'msg': $('textarea[name=message]').val()
	        };

	        //Ajax post data to server
	        $.post('//formspree.io/josh@inspyre.nz', post_data, function(
	          response) {
	          if (response.type == 'error') { //load json data from server and output message
	            output = '<div class="error">' + response.text +
	              '</div>';
	            $('#contact-form [name="' + response.field + '"]').css(
	              'border-bottom', '1px solid red'); //change border color to red
	            $('.content .contactform .send').css(
	              'background-color',
	              'rgb(202, 42, 42)'); //change background color to red

	          } else {
	            output =
	              '<div class="success"><h3>Thanks for your email, I\'ll be in touch shortly. In the meantime, take it easy <i class="fa fa-hand-peace-o"></i></h3></div>';
	            //reset values in all input fields
	            $(
	              "#contact-form  input[required=true], #contact-form textarea[required=true]"
	            ).val('');
	            $("#contact-form, .hello-head").slideUp(); //hide form after success

	          }
	          $("#contact_results").html(output);
	        }, 'json');
	      } else {
	        _gaq.push(['_trackEvent', 'Contact Form', 'Submission Failed',
	          'Field Empty'
	        ]);
	      }
	    });

	    //reset previously set border colors and hide all message on .keyup()
	    $(
	      "#contact-form  input[required=true], #contact-form textarea[required=true]"
	    ).keyup(function() {
	      $(this).css('border-bottom', '1px solid ' + pan.dom.primaryColour);
	      $('.content .contactform .send').css('background-color', pan.dom
	        .primaryColour);
	    });
	  }


	  try {
	    hello()
	  } catch (e) {
	    console.log(e)
	  }
	});


/***/ }
/******/ ]);