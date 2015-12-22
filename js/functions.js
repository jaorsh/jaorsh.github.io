/* Copyright Josh Hare Pantone Javascript Functions Sheet 2015 */

function sload(url) {
  var s = document.createElement('script');
  s.type = 'text/javascript';
  s.async = true;
  s.src = url;
  var x = document.getElementsByTagName('head')[0];
  x.appendChild(s);
}
if (!window.console) console = {
  log: function() {}
};

Modernizr.load([{
  load: '//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js',
  complete: function() {
    if (!window.jQuery) {
      Modernizr.load('/js/jquery-1.11.1.min.js');
      Modernizr.load('/js/History.js');
      Modernizr.load('/js/jquery.nstSlider.min.js');
      Modernizr.load('/js/ytLoad/ytLoad.jquery.js');
      Modernizr.load('/js/jquery.slicknav.min.js');
      Modernizr.load('/popup/jquery.magnific-popup.min.js');
      Modernizr.load('/js/html2canvas.min.js');
      Modernizr.load('/js/filesaver.js');
      Modernizr.load('/js/js.js');
    } else {
      sload('/js/History.js');
      sload('/js/jquery.nstSlider.min.js');
      sload('/js/ytLoad/ytLoad.jquery.js');
      sload('/js/imgload.js');
      sload('/js/jquery.slicknav.min.js');
      sload('/popup/jquery.magnific-popup.min.js');
      sload('/js/html2canvas.min.js');
      sload('/js/filesaver.js');
      sload('/js/js.js');
    }
  }
}]);

var colourSets = {};
var pantone = []

colourSets.pantone = pantone;

var name = "Pantones of The Year";
var value = ["#98B4D4", "#C3447A", "#BC243C", "#7FCDCD", "#E15D44", "#55B4B0",
  "#DFCFBE", "#9B2335", "#5B5EA6", "#EFC050", "#45B8AC", "#D65076", "#DD4124",
  "#009B77", "#B565A7", "#955251"
];
var pair = {
  "name": name,
  "value": value
}

colourSets.pantone.push(pair);


name = "Pantones of Fall 2015";
value = ["#A3AC99", "#847F5D", "#58646D", "#007784", "#CF86A3", "#9164AB",
  "#D09D5D", "#F5926C", "#955251", "#32334A"
];
pair = {
  "name": name,
  "value": value
}

colourSets.pantone.push(pair);

var currentSet = pair;

name = "Pantones of Spring 2016";
value = ["#F7CAC9", "#F7786B", "#DD4132", "#FAE03C", "#B18F6A", "#9896A4",
  "#79C753", "#98DDDE", "#034F84", "#91A8D0"
];
pair = {
  "name": name,
  "value": value
}

colourSets.pantone.push(pair);

name = "Women of Spring 2015";
value = ["#9DC6D8", "#00B2CA", "#1D4E89", "#7DCFB6", "#D2B29A", "#C6CBCC",
  "#E3868F", "#F79256", "#EAD98B", "#955251"
];
pair = {
  "name": name,
  "value": value
}

colourSets.pantone.push(pair);

name = "Men of Spring 2015";
value = ["#7DA1BF", "#1D4E89", "#4E6E38", "#7F8040", "#C6CBCC", "#8a8587",
  "#D2B29A", "#C78D6B", "#955251", "#B38FB1"
];
pair = {
  "name": name,
  "value": value
}

colourSets.pantone.push(pair);

var columns = 5;

var depth = currentSet.value.length / columns;
var bg, badge, header, colours, palettesContainer, currentDom, primaryColour,
  secondaryColour;

function spitcolour(colours) {
  var newColour = colours[Math.floor(Math.random() * colours.length)];
  if (luminosity(newColour) > 80) {
    return newColour;
  }
  return spitcolour(colours);
}


var ogColours = [];
var ngColours = [];
var pantoneBackground = function loop(depth, columns, colours) {
  ogColours = [];
  var size = window.innerWidth / columns;
  badge.style.width = size + 'px';
  badge.style.height = size + 'px';
  var offset = 100 / columns / 2;
  if (size <= 250) {
    badge.style.marginLeft = '-125px';
  } else if (offset >= 25) {
    badge.style.marginLeft = '-360px';
  } else if (offset > 6.25 && offset < 50) {
    badge.style.marginLeft = '-' + offset + '%';
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
        colour = spitcolour(colours);
      } while (colour === behind)
    }
    if (i + 1 > columns) {
      if (colour === ogColours[i - columns]) {
        do {
          colour = spitcolour(colours);
        } while (colour === ogColours[i - columns] || colour === behind)
      }
    }
    ogColours[i] = colour;
    var div = document.createElement('div');
    div.className = 'square';
    div.style.backgroundColor = colour;
    behind = colour;
    div.style.width = size + 'px';
    div.style.height = size + 'px';
    bg.appendChild(div);
  }
  if (fillspace > colours.length) {
    pantoneFill(size, fillspace + 20, i, behind);
  };
  primaryColour = spitcolour(colours);
  secondaryColour = spitcolour(colours);
  header.style.backgroundColor = primaryColour;
  var primary = document.getElementsByClassName('primary');
  for (i = 0; i < primary.length; i++) {
    primary[i].style.color = primaryColour;
    primary[i].style.borderColor = primaryColour;
  }
  var secondary = document.getElementsByClassName('secondary');
  for (i = 0; i < secondary.length; i++) {
    secondary[i].style.backgroundColor = primaryColour;
  }
};

var pantoneFill = function(size, fillspace, counter, behind) {
  var behind = behind;
  for (i = 1; i < fillspace; i++) {
    var colour = colours[Math.floor(Math.random() * colours.length)];
    do {
      colour = spitcolour(colours);
    } while (colour === ogColours[i + counter - columns] || colour === behind);
    ogColours[i + counter] = colour;
    behind = colour;
    var div = document.createElement('div');
    div.className = 'square';
    div.style.backgroundColor = colour;
    div.style.width = size + 'px';
    div.style.height = size + 'px';
    bg.appendChild(div);
  }
};

var getSet = function(set) {
  for (var i = 0, num = colourSets.pantone.length; i < num; i++) {
    if (colourSets.pantone[i].name == set) {
      currentSet = colourSets.pantone[i];
      return colourSets.pantone[i].value;
    }
  }

};
var go = function() {
  for (var i = 0, num = colourSets.pantone.length; i < num; i++) {
    var link = document.createElement('span');
    var name = colourSets.pantone[i].name;
    link.dataset.value = name;
    link.textContent = name;
    link.onclick = (function(i) {
      return function() {
        changePalette(colourSets.pantone[i].name);
      };
    })(i);
    palettesContainer.appendChild(link);
  }
};

var luminosity = function(c) {
  var c = c.substring(1); // strip #
  var rgb = parseInt(c, 16); // convert rrggbb to decimal
  var r = (rgb >> 16) & 0xff; // extract red
  var g = (rgb >> 8) & 0xff; // extract green
  var b = (rgb >> 0) & 0xff; // extract blue
  var luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709
  return luma;
}

function initBackground() {
  bg = document.getElementById('background');
  badge = document.getElementById('badge');
  palettesContainer = document.getElementById('palettesContainer');
  currentDom = document.getElementById('currentPalette');
  header = document.getElementById('header');
  colours = getSet(currentSet.name);
  go();
  pantoneBackground(colours.length / columns, columns, colours);
}

function refreshBackground() {
  var square = document.querySelectorAll('.square');
  //jQuery to prevent my memory leaks removing with ParentNode.. FIX ME
  $('.square').remove();
  pantoneBackground(currentSet.value.length / columns, columns,
    currentSet.value);
}

function changePalette(set) {
  console.log(set);
  colours = getSet(set);
  refreshBackground();
  if ($(".palettes").hasClass("show")) {
    $(".palettes").removeClass("show").addClass("hide");
  }
  currentDom.textContent = set;
}


window.addEventListener('resize', function(event) {
  refreshBackground();
});


function colourWheel(elem) {
  var primaryColour = spitcolour(colours);

  if (primaryColour === rgbToHex(elem.style.backgroundColor)) {
    colourWheel(elem);
  } else {
    elem.style.backgroundColor = primaryColour;
  }
}

function rgbToHex(color) {
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
}

function screenshot() {
  html2canvas(bg, {
    onrendered: function(canvas) {
      // canvas is the final rendered <canvas> element
      canvas.toBlob(function(blob) {
        saveAs(blob, "pantones.png");
      });
    }
  });
}
