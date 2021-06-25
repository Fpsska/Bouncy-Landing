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

    let brandingCircle = document.querySelector('.circle--branding');
    let webCircle = document.querySelector('.circle--web');
    let uiCircle = document.querySelector('.circle--ui');


    let generalCircle = (item) => {
        new EasyPieChart(item, {
            barColor: "#19bd9a",
            trackColor: "#ededed",
            lineCap: "circle",
            size: 115,
            lineWidth: 5,
            animate: 4000,
        });
    }

    canvas = document.getElementsByTagName("canvas");
    canvas.width = canvas.width;

    
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

    let project = document.querySelector(".featured_project");

    let offset = (el) => {  // функция получения значения от верха страницы (кроссбраузерно)
        const rect = el.getBoundingClientRect();
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop }
    }

    let projectOffset = offset(project).top

    let advantages = document.querySelector(".advantages");

    let advantagesOffset = offset(advantages).top;

    let circleHandlerFinish = false;

    let circleHandler = () => {
        generalCircle(brandingCircle);
        generalCircle(webCircle);
        generalCircle(uiCircle);
        progressFunc(brandingItem, 100);
        progressFunc(webItem, 70);
        progressFunc(uiItem, 50);

        circleHandlerFinish = true;
    }

    window.addEventListener("scroll", () => {

        let scrollPos = window.pageYOffset; // кол-во прокрученных пикселей, ось Y

        if (scrollPos >= projectOffset) {
            if (scrollPos < advantagesOffset) {
                if (circleHandlerFinish === false) {
                    circleHandler();
                }
            }
        }
    })






    // let circleProgress = document.querySelectorAll(".circle_progress");
    // let firstCircle = document.querySelector(".circle_progress--branding");
    // let secondCircle = document.querySelector(".circle_progress--web");
    // let thirdCircle = document.querySelector(".circle_progress--ui");


    // let radiusArr = [];

    // circleProgress.forEach(item => {
    //     radiusArr.push(2 * Math.PI * item.r.baseVal.value)
    // })
    // console.log(radiusArr)


    // firstCircle.style.strokeDasharray = `${radiusArr[0]}`;

    // firstCircle.style.strokeDashoffset = radiusArr[0];

    // let setProgress = (item, percent) => {
    //     let counter = 0; /*counter of start*/
    //     setInterval(() => {
    //         if (counter == percent) { /*counter of end*/
    //             clearInterval();
    //         } else {
    //             counter += 1; /*step*/
    //             item.textContent = counter + "%";
    //         }
    //     }, 50); /*speed*/
    //     // let offSet = circumference - percent / 100 * circumference;
    //     // element.style.strokeDashoffset = offSet;
    // }

    // setProgress(firstCircle, 50);
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

    let name = document.querySelector(".input--name");
    let email = document.querySelectorAll(".input--email");
    let subject = document.querySelector(".input--subject");


    name.onkeydown = function () {
        const regex = /^([\w]{3,})+\s+([\w\s]{3,})+$/i;

        if (regex.test(name.value)) {
            name.style.color = 'green'
        } else {
            name.style.color = 'red'
        }
    }
    email.forEach(item => {
        item.onkeydown = function () {
            const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

            if (regex.test(item.value)) {
                item.style.color = 'green'
            } else {
                item.style.color = 'red'
            }
        }
    })
    subject.onkeydown = function () {
        const regex = /[a-zA-Z]+/;

        if (regex.test(subject.value)) {
            subject.style.color = 'green'
        } else {
            subject.style.color = 'red'
        }
    }


    //  //*********/.INPUT VALIDATION*********//


    //  //*********/.TEAM PROGRESSBAR*********//
});
