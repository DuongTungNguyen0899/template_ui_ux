//brands slider
function brandSlider(){
    $('.brand__slider').slick({
        dots: false,
        arrows: true,
        infinite: false,
        mobileFirst: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 400,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 3
                }
            },
            {
                breakpoint: 551,
                settings: {
                slidesToShow: 4,
                slidesToScroll: 4
                }
            },
            {
                breakpoint: 768,
                settings: {
                slidesToShow: 5,
                slidesToScroll: 5
                }
            },
            {
                breakpoint: 1025,
                settings: {
                slidesToShow: 6,
                slidesToScroll: 6
                }
            }
        ]
    }); 
}
brandSlider();


function mobileClick(){
    // click toggle

    $(document).on('click','.mobile__menu--toggle', (e) => {
        e.preventDefault();
        const $target = $(e.target);
        $target.addClass('is-open');
        $('body').addClass('has-activeNavPages');
    });

    // Close toggle
    $(document).on('click','.btn__close', (e) => {
        e.preventDefault();
        $('.mobile__menu--toggle').removeClass('is-open');
        $('body').removeClass('has-activeNavPages');
    });

    //body Close
    $(document).on('click','.overlay',(e) => {
        e.preventDefault();
        $('.mobile__menu--toggle').removeClass('is-open');
        $('body').removeClass('has-activeNavPages');
    });

}
mobileClick();

//add menu mobile
function addMenuMobile() {
    const $menu = $('#menu');
    const $menuMobile = $('#menuMobile');
    const wWidth = window.innerWidth;

    if (wWidth >= 1024) {
        if ($menuMobile.children().length > 0) {
            $menuMobile.children().appendTo($menu);
        }
    }
    else {
        if ($menu.children().length > 0) {
            $menu.children().appendTo($menuMobile);
        }
    }
}
addMenuMobile();

//sticky header

function header_sticky() {
    var header_position, header_height;
    var header_wrap = $('.header .header__item--content');
    var header_main = $('.header');

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

    $(window).on('scroll load', function() {
        var scroll = $(window).scrollTop();

        if (scroll > header_position) {
            if (!$('.header-height').length) {
                header_main.before('<div class="header-height" style="height: '+header_height+'px"></div>');
            }
            $('body').addClass('has-stickyHeader');
            header_main.css('animation-name','fadeInDown');
        }
        else {
            $('body').removeClass('has-stickyHeader');
            $('.header-height').remove();
            header_main.css('animation-name','');
        }
        
        lastScrollTop = scroll;
    });
    
}
header_sticky();

// Resize
$(window).on('resize', (e) => {
    addMenuMobile();
});



// ui
// var tabLinks = document.querySelectorAll(".tablinks");
// var tabContent =document.querySelectorAll(".tabcontent");

// tabLinks.forEach(function(el) {
//    el.addEventListener("click", openTabs);
// });


// function openTabs(el) {
//    var btn = el.currentTarget; 
//    var electronic = btn.dataset.electronic; 
 
//    tabContent.forEach(function(el) {
//       el.classList.remove("active");
//    });

//    tabLinks.forEach(function(el) {
//       el.classList.remove("active");
//    });

//    document.querySelector("#" + electronic).classList.add("active");
   
//    btn.classList.add("active");
// }

const tabs = document.querySelectorAll('.tabs__btn');
const tabsContent = document.querySelectorAll('.tabs__body');

if (tabsContent.length > 0 || tabs.length > 0) {

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.remove('active');
        });

        tabs.forEach(item => {
            item.classList.remove('active');
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('active');
        tabs[i].classList.add('active');
    }

    hideTabContent();
    showTabContent();

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            hideTabContent();
            showTabContent(index);
        });
    });
}