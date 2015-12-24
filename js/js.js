var isloading, toLoad, page, pages, wfInstance;

function raiseContent() {
  $('.content').fadeIn('slow');
}

function updateSrc() {
  pages = window.location.pathname.split('/');
  page = window.location.pathname.split('/').pop();
  if (page !== '') {
    $(".content").removeClass("hide");
    $('.badge').fadeOut('slow');
    $("#header").fadeIn();
    raiseContent();
    initform();
  } else {
    if ($('html').hasClass('lt-ie10') === false) {
      $(".content").addClass("hide");
      $("#header").fadeOut('slow');
      $('.badge').fadeIn('slow');
    }
  }

  var primary = document.getElementsByClassName('primary');
  for (i = 0; i < primary.length; i++) {
    primary[i].style.color = primaryColour;
    primary[i].style.borderColor = primaryColour;
  }
  var secondary = document.getElementsByClassName('secondary');
  for (i = 0; i < secondary.length; i++) {
    secondary[i].style.backgroundColor = primaryColour;
  }

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
      callmeal();
    }

  });
}

function hello() {
  "use strict";
  updateSrc();

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

  $('a[href*=#]:not([href=#]):not([target=_blank])').on("click", function(evt) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//,
        '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      console.log("target: " + target);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +
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
    if ($(".palettes").hasClass("hide")) {
      $(".palettes").removeClass("hide").addClass("show");
    } else {
      $(".palettes").removeClass("show").addClass("hide");
    };
  });

  $('.nstSlider').nstSlider({
    "left_grip_selector": ".leftGrip",
    "value_bar_selector": ".bar",
    "value_changed_callback": function(cause, leftValue) {
      var $container = $(this).parent(),
        b = 110 - 65 + leftValue,
        g = 145 - b,
        r = 250;
      $(this).find('.bar').css('background', 'rgb(' + [r, g, b].join(',') +
        ')');
      columns = leftValue;
      depth = currentSet.value.length / leftValue;
      refreshBackground();
    }
  });

  $('#minimise').on("click", function(evt) {
    evt.preventDefault();
    if ($("#container").hasClass('rotateScale')) {
      $("#container").attr('class', 'rotateInScale');
    } else {
      $("#container").attr('class', 'rotateScale');
    }
  });

  $('#change, .change').on("click", function(evt) {
    evt.preventDefault();
    if ($(".palettes").hasClass("hide")) {
      $(".palettes").removeClass("hide").addClass("show");
    } else {
      $(".palettes").removeClass("show").addClass("hide");
    }
  });

  $('#palette').on("click", function(evt) {
    evt.preventDefault();
    refreshBackground();
  });

  $('.close').on("click", function(evt) {
    evt.preventDefault();
    refreshBackground();
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

function callmeal() {
  $(window).scrollTop(0);
  updateSrc();

  isloading = 0;
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
        $(this).attr("placeholder", "Please enter your " + $(this).attr(
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
      $.post('//formspree.io/josh@inspyre.nz', post_data, function(response) {
        if (response.type == 'error') { //load json data from server and output message
          output = '<div class="error">' + response.text + '</div>';
          $('#contact-form [name="' + response.field + '"]').css(
            'border-bottom', '1px solid red'); //change border color to red
          $('.content .contactform .send').css('background-color',
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
    $(this).css('border-bottom', '1px solid ' + primaryColour);
    $('.content .contactform .send').css('background-color', primaryColour);
  });
}


function detectie() {

  if ($('html').hasClass('lt-ie10')) {
    /*
           $(window).scroll(function() {
               if ($(window).scrollTop() > 180) {
                   $("#ielogo").css("display", "none");
                   $("#header").css("height", "40px");
               } else {
                   $("#ielogo").css("display", "block");
                   $("#header").css("height", "274px");
              }
           });
    */
    $(function() {
      $("#change, #palette, #minimise, .opacityleftGrip, .playerq").css(
        "display", "none");
    });
  } else {

    $('#status, #msg').fadeOut(350, function() {
      this.remove()
    }); // will first fade out the loading animation
    $('#preloader').delay(350).fadeOut('slow', function() {
      //  this.remove()
    }); // will fade out the div that covers the website.

    $('body').delay(350).css({
      'overflow': 'visible'
    });

    var mywindow = $(window);
    var mypos = mywindow.scrollTop();
    var up = false;
    var newscroll;
    mywindow.scroll(function() {
      newscroll = mywindow.scrollTop();
      if (newscroll > mypos && !up) {
        $('#submenu').fadeOut();
        up = !up;

      } else if (newscroll < mypos && up) {

        $('#submenu').fadeIn().css("display", "");;
        up = !up;
      }
      mypos = newscroll;
    });
  }
  return false;
}
$(function() {
  try {
    hello()
  } catch (e) {
    console.log(e)
  }
});
$(function() {
  try {
    detectie()
  } catch (e) {
    console.log(e)
  }
});
