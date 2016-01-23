global.jQuery = $ = require('./js/jquery-1.11.1.min.js');

// pick what tests you need
require('browsernizr/test/css/rgba');
require('browsernizr/test/history');
require('browsernizr/test/webgl');
require('browsernizr/test/touchevents');
require('browsernizr/test/canvas');
require('browsernizr/test/geolocation');
require('browsernizr');
global.magnificPopup = require('script!magnific-popup');

global.pan = require('./js/functions.js');

require('./js/History.js');
require('./js/jquery.nstSlider.min.js');
require('./js/ytLoad/jquery.transit.js');
require('./js/ytLoad/ytLoad.jquery.js');
require('./js/jquery.slicknav.min.js');

window.html2canvas = require('html2canvas');
window.saveAs = require('./js/filesaver.js');


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


var js = require('./js/js.js');



window.addEventListener('resize', function(event) {
  pan.dom.refreshBackground();
});
