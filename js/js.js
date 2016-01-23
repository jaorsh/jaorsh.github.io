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
