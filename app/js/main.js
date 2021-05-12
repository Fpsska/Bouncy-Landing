document.addEventListener("DOMContentLoaded", () => {
    $('.team_slider').owlCarousel({
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
    //  //*********/.SLIDER*********//

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

    let brandingItem = document.querySelector(".percent--branding");
    let webItem = document.querySelector(".percent--web");
    let uiItem = document.querySelector(".percent--ui");

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
    //  //************/.GRAPHISC_CARD************//

    let tabsLink = document.querySelectorAll(".p-nav_link");
    let tabsItems = document.querySelectorAll(".portfolio_block");

    tabsLink.forEach(item => {
        item.addEventListener("click", (event) => {
            event.preventDefault();

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
    })

    //  //*********/.PORTFOLIO TABS*********//

    let headerBar = document.querySelector("#headerBarJS");
    let mainHeader = document.querySelector("#mainHeaderJS");
    let mainHeaderH = mainHeader.clientHeight;

    window.addEventListener('scroll', () => {
        let scrollPos = window.pageYOffset;

        if (scrollPos > mainHeaderH) {
            headerBar.classList.add("fixed");
        } else {
            headerBar.classList.remove("fixed");
        }
    });

    //  //*********/.HEADER FIXED*********//

    const dataScrollElement = document.querySelectorAll("[data-scroll]").forEach(item => {
        item.addEventListener("click", (event) => {
            event.preventDefault();

            const elementID = event.currentTarget.getAttribute("data-scroll").substr(1);

            document.getElementById(elementID).scrollIntoView({
                behavior: "smooth"
            })
        })
    })
    //  //*********/.SMOOTH SCROLL*********//

    let burgerClose = document.querySelector(".menu_close");
    let burgerIcon = document.querySelector(".menu-icon");
    let burgerLinks = document.querySelectorAll(".burger_links");
    let burgerBox = document.querySelector(".menu_container");
    let logoText = document.querySelector(".logo_text");

    burgerIcon.addEventListener("click", () => {
        burgerIcon.classList.toggle("active");
        if (burgerIcon.classList.contains("active")) {
            burgerBox.style.height = "100%";
            burgerLinks.hidden = false;
            burgerClose.classList.add("active");
            logoText.style.color = "#19bd9a";
        } else {
            burgerBox.style.height = "0";
            burgerLinks.forEach(item => {
                item.classList.remove("active");
            })
            burgerClose.classList.remove("active");
            logoText.style.color = "#fff";
        }
    })

    burgerClose.addEventListener("click", () => {
        if (burgerClose.classList.contains("active")) {
            burgerClose.classList.remove("active");
            burgerBox.style.height = "0";
            burgerLinks.hidden = true;
            logoText.style.color = "#fff";
        }
    });

    burgerLinks.forEach(item => {
        item.addEventListener("click", () => {
            item.classList.add("active");
            if (item.classList.contains("active")) {
                item.classList.remove("active");
                burgerClose.classList.remove("active");
                burgerBox.style.height = "0";
                logoText.style.color = "#fff";
            }
        })
    })

    //  //*********/.BURGER*********//

    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true
    });

    //  //*********/.LIGHTBOX*********//





    //  //*********/.TEAM PROGRESSBAR*********//
});
