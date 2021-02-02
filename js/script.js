$(document).ready(function () {
    $('.team_slider').owlCarousel({
        items: 1,
        nav: false,
        dots: true,
        margin: 30,
        loop: true,
        autoHeight: true,
        // autoplay: true,
        // autoplayTimeout: 1500,
        // autoplayHoverPause: true,
        stageClass: [
            'slider__stage'
        ]
    });
    $('.testimonial_slider').owlCarousel({
        items: 1,
        nav: false,
        dots: true,
        margin: 30,
        loop: true,
        autoHeight: true,
        // autoplay: true,
        // autoplayTimeout: 1500,
        // autoplayHoverPause: true,
        stageClass: [
            'slider__stage'
        ]
    });
    $('.news_slider').owlCarousel({
        items: 1,
        nav: false,
        dots: true,
        loop: true,
        margin: 30,
        autoHeight: true,
        // autoplay: true,
        // autoplayTimeout: 1500,
        // autoplayHoverPause: true,
        stageClass: [
            'slider__stage'
        ]
    });
});

//  //*********/.SLIDER*********//

$('#progressBrandJS_1').LineProgressbar({
    percentage: 65,
    duration: 1000,
    fillBackgroundColor: '#19bd9a',
    backgroundColor: '#e1e4e5',
    radius: '0px',
    height: '.45em',
    width: '100%'
});

$('#progressBrandJS_2').LineProgressbar({
    percentage: 35,
    duration: 1000,
    fillBackgroundColor: '#19bd9a',
    backgroundColor: '#e1e4e5',
    radius: '0px',
    height: '.45em',
    width: '100%'
});

$('#progressBrandJS_3').LineProgressbar({
    percentage: 85,
    duration: 1000,
    fillBackgroundColor: '#19bd9a',
    backgroundColor: '#e1e4e5',
    radius: '0px',
    height: '.45em',
    width: '100%'
});

$('#progressWebJS_1').LineProgressbar({
    percentage: 70,
    duration: 1000,
    fillBackgroundColor: '#19bd9a',
    backgroundColor: '#e1e4e7',
    radius: '0px',
    height: '.45em',
    width: '100%'
});

$('#progressWebJS_2').LineProgressbar({
    percentage: 85,
    duration: 1000,
    fillBackgroundColor: '#19bd9a',
    backgroundColor: '#e1e4e7',
    radius: '0px',
    height: '.45em',
    width: '100%'
});

$('#progressWebJS_3').LineProgressbar({
    percentage: 65,
    duration: 1000,
    fillBackgroundColor: '#19bd9a',
    backgroundColor: '#e1e4e7',
    radius: '0px',
    height: '.45em',
    width: '100%'
});

$('#progressIntfcJS_1').LineProgressbar({
    percentage: 85,
    duration: 1000,
    fillBackgroundColor: '#19bd9a',
    backgroundColor: '#e1e4e9',
    radius: '0px',
    height: '.45em',
    width: '100%'
});

$('#progressIntfcJS_2').LineProgressbar({
    percentage: 25,
    duration: 1000,
    fillBackgroundColor: '#19bd9a',
    backgroundColor: '#e1e4e9',
    radius: '0px',
    height: '.45em',
    width: '100%'
});

$('#progressIntfcJS_3').LineProgressbar({
    percentage: 100,
    duration: 1000,
    fillBackgroundColor: '#19bd9a',
    backgroundColor: '#e1e4e9',
    radius: '0px',
    height: '.45em',
    width: '100%'
});

//  //*********/.TEAM PROGRESSBAR*********//

const tabsLink = document.querySelectorAll(".p-nav_link"),
    tabsItems = document.querySelectorAll(".portfolio_item");

tabsLink.forEach(onTabClick);

function onTabClick(item) {
    item.addEventListener("click", function () {
        let currentLink = item,
            linkID = currentLink.getAttribute("data-tab"),
            currentTab = document.querySelector(linkID);

        if (!currentLink.classList.contains("active")) {
            tabsLink.forEach(function (item) {
                item.classList.remove("active");
            });

            tabsItems.forEach(function (item) {
                item.classList.remove("active");
            });

            currentLink.classList.add("active");
            currentTab.classList.add("active");
        }
    });
    document.querySelector(".p-nav_link").click();
}

jQuery('a').on('click', function (linkOnClick) {
    linkOnClick.preventDefault();
});

//  //*********/.PORTFOLIO TABS*********//

$(document).ready(function () {

    let headerBar = $("#headerBarJS"),
        mainHeader = $("#mainHeaderJS"),
        mainHeaderH = mainHeader.innerHeight(),
        scrollPos = $(window).scrollTop();

    $(window).on("scroll load resize", function () {
        scrollPos = $(this).scrollTop();

        if (scrollPos > mainHeaderH) {
            headerBar.addClass("fixed");
        } else {
            headerBar.removeClass("fixed");
        }
    });

    //  //*********/.HEADER FIXED*********//

    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        let blockID = $(this).data("scroll");
        blockPosTop = $(blockID).offset().top;

        $("html, body").animate({
            scrollTop: blockPosTop + 1
        });

    });
});

//  //*********/.SMOOTH SCROLL*********//

const brandingItem = document.querySelector(".percent--branding"),
    webItem = document.querySelector(".percent--web"),
    uiItem = document.querySelector(".percent--ui");

let progressFunc = (item, percent) => {

    let counter = 0; /*counter of start*/
    setInterval(() => {
        if (counter == percent) { /*counter of end*/
            clearInterval();
        } else {
            counter += 1; /*step*/
            item.textContent = counter + "%";
        }
    }, 50); /*speed*/
};

progressFunc(brandingItem, 100);
progressFunc(webItem, 70);
progressFunc(uiItem, 50);

$(document).ready(function () {
    $('.circle--branding').easyPieChart({
        barColor: "#19bd9a",
        trackColor: "#ededed",
        lineCap: "circle",
        size: 115,
        lineWidth: 5,
        animate: 4000,
    });
    $('.circle--web').easyPieChart({
        barColor: "#19bd9a",
        trackColor: "#ededed",
        lineCap: "circle",
        size: 115,
        lineWidth: 5,
        animate: 4000,
    });
    $('.circle--ui').easyPieChart({
        barColor: "#19bd9a",
        trackColor: "#ededed",
        lineCap: "circle",
        size: 115,
        lineWidth: 5,
        animate: 4000,
    });
});

//  //************/.GRAPHISC_CARD************//

lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true
});

//  //*********/.LIGHTBOX*********//

const burgerClose = $(".menu_close");
const burgerIcon = $(".menu-icon");
const burgerLinks = $(".burger_links");
const burgerBox = $(".menu_container");

$(document).ready(function () {
    burgerIcon.click(function () {
        burgerLinks.hide();
        $(this).toggleClass("active");
        if ($(this).hasClass("active")) {
            burgerBox.css("height", "100%");
            burgerLinks.show();
            burgerClose.addClass("active");
            $(".logo_text").css("color", "#19bd9a");
        } else {
            burgerBox.css("height", "0%");
            burgerLinks.removeClass("active");
            burgerClose.removeClass("active");
            $(".logo_text").css("color", "#fff");
        }
    });
    burgerClose.click(function () {
        $(this).toggleClass("actve");
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            burgerBox.css("height", "0%");
            burgerLinks.hide();
            $(".logo_text").css("color", "#fff");
        }
    });
    burgerLinks.click(function () {
        $(this).addClass("active");
        if ($(this).hasClass("active")) {
            burgerLinks.removeClass("active");
            burgerClose.removeClass("active");
            burgerBox.css("height", "0%");
            $(".logo_text").css("color", "#fff");
        }
    });
});


//  //*********/.BURGER*********//