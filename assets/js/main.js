//brands slider
// function brandSlider() {
//   $(".brand__slider").slick({
//     dots: false,
//     arrows: true,
//     infinite: false,
//     mobileFirst: true,
//     slidesToShow: 2,
//     slidesToScroll: 2,
//     responsive: [
//       {
//         breakpoint: 400,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//         },
//       },
//       {
//         breakpoint: 551,
//         settings: {
//           slidesToShow: 4,
//           slidesToScroll: 4,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 5,
//           slidesToScroll: 5,
//         },
//       },
//       {
//         breakpoint: 1025,
//         settings: {
//           slidesToShow: 6,
//           slidesToScroll: 6,
//         },
//       },
//     ],
//   });
// }
// brandSlider();

function mobileClick() {
  // click toggle

  $(document).on("click", ".mobile__menu--toggle", (e) => {
    e.preventDefault();
    const $target = $(e.target);
    $target.addClass("is-open");
    $("body").addClass("has-activeNavPages");
  });

  // Close toggle
  $(document).on("click", ".btn__close", (e) => {
    e.preventDefault();
    $(".mobile__menu--toggle").removeClass("is-open");
    $("body").removeClass("has-activeNavPages");
  });

  //body Close
  $(document).on("click", ".overlay", (e) => {
    e.preventDefault();
    $(".mobile__menu--toggle").removeClass("is-open");
    $("body").removeClass("has-activeNavPages");
  });
}
mobileClick();

//add menu mobile
function addMenuMobile() {
  const $menu = $("#menu");
  const $menuMobile = $("#menuMobile");
  const wWidth = window.innerWidth;

  if (wWidth >= 1024) {
    if ($menuMobile.children().length > 0) {
      $menuMobile.children().appendTo($menu);
    }
  } else {
    if ($menu.children().length > 0) {
      $menu.children().appendTo($menuMobile);
    }
  }
}
addMenuMobile();

//sticky header

function header_sticky() {
  var header_position, header_height;
  var header_wrap = $(".header .header__item--content");
  var header_main = $(".header");

  header_height = header_wrap.outerHeight();
  header_position = header_wrap.offset().top;
  if (header_wrap.length) {
    header_scroll(header_position, header_height, header_wrap, header_main);
  }
}

function header_scroll(header_position, header_height, header_wrap, header_main) {
  var didScroll;
  var lastScrollTop = 0;
  var delta = 5;

  $(window).on("scroll load", function () {
    var scroll = $(window).scrollTop();

    if (scroll > header_position) {
      if (!$(".header-height").length) {
        header_main.before('<div class="header-height" style="height: ' + header_height + 'px"></div>');
      }
      $("body").addClass("has-stickyHeader");
      header_main.css("animation-name", "fadeInDown");
    } else {
      $("body").removeClass("has-stickyHeader");
      $(".header-height").remove();
      header_main.css("animation-name", "");
    }

    lastScrollTop = scroll;
  });
}
header_sticky();

// Resize
$(window).on("resize", (e) => {
  addMenuMobile();
});

// Popup Open
function popupOpen() {
  document.getElementById("popup").style.display = "block";
  document.getElementById("overlay").style.display = "block";
}
// Popup Close
function popupClose() {
  document.getElementById("popup").style.display = "none";
  document.getElementById("overlay").style.display = "none";
}

//get html
/*
 *
 * Give an element a .make-snippet class and it's innerhtml
 * will be copied into a pre/code fragment that gets appended
 * adjacent to the element.
 *
 * If Prism.js is included, the snippets will be syntax higlighted.
 *
 * Note, this only autogenerates markup snippets.
 *
 */
// cũ
// (function () {
//   document.addEventListener("DOMContentLoaded", function (event) {
//     // document.getElementById("style_00").outerHTML;
//     // var list = $('#style_00').wrapAll('<div>').parent().html();
//     var list = document.querySelectorAll(".make-snippet");

//     [].forEach.call(list, function (el) {
//       console.log(el.innerHTML);
//       var snippet = el.innerHTML.replace(/</g, "&lt;");
//       // snippet = snippet.replace(/ /g,'');
//       // $('.language-markup123').append(snippet)
//       var code = '<pre class="language-markup"><textarea autocomplete="off" autocorrect="off" spellcheck="false" autocapitalize="off" name="htmlCodeView" placeholder="">' + snippet + "</textarea></pre>";
//       el.insertAdjacentHTML("afterend", code);
//     });

//     // if your page has prism.js you get syntax highlighting
//     //   if(window.Prism){
//     //     Prism.highlightAll(false);
//     //   }
//   });
// })();

//   document.getElementById("xxx").outerHTML
//   var x = $('#xxx').wrapAll('<div>').parent().html();

// coppy html

$(document).ready(function () {
  var test = $("#content-htmlelement").html($("#source-code").wrapAll("<div>").parent().html().escape());
//   var repl = $html("));
  // $( "#content-htmlelement").append($("#source-code").wrapAll('<div>').parent().html());
  //   console.log($("#source-code").wrapAll("<div>").parent().html());
});

String.prototype.escape = function () {
  var tagsToReplace = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
  };
  return this.replace(/[<>]/g, function (tag) {
    return tagsToReplace[tag] || tag;
  });
};



// coppy button
function copyFull() {
    //copys inner html of target div. 
  
    //event button
    var copyBtn = $('.pre-content');
    copyBtn.on('click', function(event) {
  
      var $this = $(this);
  
      //find the element that has the text you want.
      var content = $this.prev('.pre-content');
      //creates new range object and sets text as boundaries.
      var range = document.createRange();
      range.selectNode(content[0]);
      window.getSelection().addRange(range);
  
      try {
        // Now that we've selected the text, execute the copy command  
        var successful = document.execCommand('copy');
        /*var msg = successful ? 'successful' : 'unsuccessful';
        console.log('Copy email command was ' + msg);*/
  
        //handle success
        $(this).after('<span class="success"></span>');
        setTimeout(function() {
          $('.success').addClass('show');
          setTimeout(function() {
            $('.success').fadeOut(function() {
              $('.success').remove();
            });
          }, 1000);
        }, 0);
      } catch (err) {
        //console.log('Oops, unable to copy');
      }
      //clear out range for next event.
      window.getSelection().removeAllRanges();
  
    });
  }
  

  
  $(function() {
    copyFull();
  
  
  });