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
        stageClass: [
            'slider__stage'
        ]
    });
});

//  //*********/.SLIDER*********//

const tabsLink = document.querySelectorAll(".p-nav_link"),
    tabsItems = document.querySelectorAll(".portfolio_block");

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
            scrollTop: blockPosTop
        }, 1500);

    });
});

//  //*********/.SMOOTH SCROLL*********//

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

//slide 1
const firstSlide_bar1 = {
    text: document.querySelector('.first_text--slide1'),
    cp: document.querySelector('.first_pr--slide1'),
    bg: document.querySelector('.first_bg--slide1')
};

const firstSlide_bar2 = {
    text: document.querySelector('.second_text--slide1'),
    cp: document.querySelector('.second_pr--slide1'),
    bg: document.querySelector('.second_bg--slide1')
};

const firstSlide_bar3 = {
    text: document.querySelector('.third_text--slide1'),
    cp: document.querySelector('.third_pr--slide1'),
    bg: document.querySelector('.third_bg--slide1')
};

//slide 2
const secondSlide_bar1 = {
    text: document.querySelector('.first_text--slide2'),
    cp: document.querySelector('.first_pr--slide2'),
    bg: document.querySelector('.first_bg--slide2')
};

const secondSlide_bar2 = {
    text: document.querySelector('.second_text--slide2'),
    cp: document.querySelector('.second_pr--slide2'),
    bg: document.querySelector('.second_bg--slide2')
};

const secondSlide_bar3 = {
    text: document.querySelector('.third_text--slide2'),
    cp: document.querySelector('.third_pr--slide2'),
    bg: document.querySelector('.third_bg--slide2')
};

//slide 3
const thirdSlide_bar1 = {
    text: document.querySelector('.first_text--slide3'),
    cp: document.querySelector('.first_pr--slide3'),
    bg: document.querySelector('.first_bg--slide3')
};

const thirdSlide_bar2 = {
    text: document.querySelector('.second_text--slide3'),
    cp: document.querySelector('.second_pr--slide3'),
    bg: document.querySelector('.second_bg--slide3')
};

const thirdSlide_bar3 = {
    text: document.querySelector('.third_text--slide3'),
    cp: document.querySelector('.third_pr--slide3'),
    bg: document.querySelector('.third_bg--slide3')
};

function startProgress(item, valueForDone) {
    valueForDone = valueForDone < 100 ? valueForDone : 100;
    item.cp.classList.add('progress-anim');
    // item.cp.style.animation = 'progress ' + getRandom(1, 3) + 's cubic-bezier(' + getRandom(0, 0.9) + ', ' + getRandom(0, 0.9) + ', ' + getRandom(0, 0.9) + ', ' + getRandom(0, 0.9) + ')'
    item.cp.style.width = valueForDone + '%';
}

function resize(item) {
    item.text.innerHTML = Math.round(item.cp.getBoundingClientRect().width / item.bg.getBoundingClientRect().width * 100);
}

const resizer = new ResizeObserver((entries) => {
    for (let entry of entries) {
        //slide 1
        if (entry.target.classList.contains('first_pr--slide1')) {
            resize(firstSlide_bar1);
        } else if (entry.target.classList.contains('second_pr--slide1')) {
            resize(firstSlide_bar2);
        } else if (entry.target.classList.contains('third_pr--slide1')) {
            resize(firstSlide_bar3);
        }
        //slide 2
        else if (entry.target.classList.contains('first_pr--slide2')) {
            resize(secondSlide_bar1);
        } else if (entry.target.classList.contains('second_pr--slide2')) {
            resize(secondSlide_bar2);
        } else if (entry.target.classList.contains('third_pr--slide2')) {
            resize(secondSlide_bar3);
        }
        //slide 3
        else if (entry.target.classList.contains('first_pr--slide3')) {
            resize(thirdSlide_bar1);
        } else if (entry.target.classList.contains('second_pr--slide3')) {
            resize(thirdSlide_bar2);
        } else if (entry.target.classList.contains('third_pr--slide3')) {
            resize(thirdSlide_bar3);
        }
    }
});

//slide 1
resizer.observe(firstSlide_bar1.cp);
resizer.observe(firstSlide_bar2.cp);
resizer.observe(firstSlide_bar3.cp);
//slide 2
resizer.observe(secondSlide_bar1.cp);
resizer.observe(secondSlide_bar2.cp);
resizer.observe(secondSlide_bar3.cp);
//slide 3
resizer.observe(thirdSlide_bar1.cp);
resizer.observe(thirdSlide_bar2.cp);
resizer.observe(thirdSlide_bar3.cp);

//slide 1
startProgress(firstSlide_bar1, 40);
startProgress(firstSlide_bar2, 90); // valueForDone
startProgress(firstSlide_bar3, 60);
//slide 2
startProgress(secondSlide_bar1, 90);
startProgress(secondSlide_bar2, 20); // valueForDone
startProgress(secondSlide_bar3, 70);
//slide 3
startProgress(thirdSlide_bar1, 70);
startProgress(thirdSlide_bar2, 95); // valueForDone
startProgress(thirdSlide_bar3, 35);

// function getRandom(min, max) {
//     return Math.random() * (max - min) + min;
// }


//  //*********/.TEAM PROGRESSBAR*********//
