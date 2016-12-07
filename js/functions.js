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
    } else if (offsetw > 150) {
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
