document.addEventListener("DOMContentLoaded", () => {
    $('.team__slider').owlCarousel({
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
    $('.testimonial__slider').owlCarousel({
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
    $('.news__slider').owlCarousel({
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

    let project = document.querySelector(".projects");

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

    //  //************/.GRAPHISC_CARD************//


    let progressBrand = document.querySelector(".text_progress--branding");
    let progressDesign = document.querySelector(".text_progress--design");
    let progressIntfce = document.querySelector(".text_progress--intfce");



    let teamProgress = (item, percent) => {
        let progressLine = document.querySelector(".current_progress");
        let width = 0;
        setInterval(() => {
            if (width == percent) {
                clearInterval();
            } else {
                width++;
                progressLine.style.width = width;
                item.textContent = width + "%";
            }
        }, 50); /*speed*/
    };

    teamProgress(progressBrand, 90);
    // teamProgress(progressDesign, 50);
    // teamProgress(progressIntfce, 20);

    //  //************/.TEAM PROGRESSBAR************//

    let tabsLink = document.querySelectorAll(".nav__menu-link");
    let tabsItems = document.querySelectorAll(".portfolio__gallery_item");

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
        document.querySelector(".portfolio__nav-link").click();
    })

    //  //*********/.PORTFOLIO TABS*********//

    let headerBar = document.querySelector("#headerBar");
    let mainHeader = document.querySelector("#header");
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

    let burgerClose = document.querySelector(".menu__close");
    let burgerIcon = document.querySelector(".menu__icon");
    let burgerLinks = document.querySelectorAll(".menu__link");
    let burgerBox = document.querySelector(".menu__container");
    let logoText = document.querySelectorAll(".header__logo");

    burgerIcon.addEventListener("click", () => {
        burgerIcon.classList.toggle("active");
        if (burgerIcon.classList.contains("active")) {
            burgerBox.style.height = "100%";
            burgerLinks.hidden = false;
            burgerClose.classList.add("active");
            logoText.forEach(item => {
                item.style.color = "#19bd9a";
            })
        } else {
            burgerBox.style.height = "0";
            burgerLinks.forEach(item => {
                item.classList.remove("active");
            })
            burgerClose.classList.remove("active");
        }
    })

    burgerClose.addEventListener("click", () => {
        if (burgerClose.classList.contains("active")) {
            burgerClose.classList.remove("active");
            burgerBox.style.height = "0";
            burgerLinks.hidden = true;
        }
    });

    burgerLinks.forEach(item => {
        item.addEventListener("click", () => {
            burgerLinks.forEach(item => {
                item.classList.remove("active")
            })
            item.classList.add("active");
            if (item.classList.contains("active")) {
                burgerClose.classList.remove("active");
                burgerBox.style.height = "0";
            }
        })
    })

    //  //*********/.BURGER*********//

    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true
    });

    //  //*********/.LIGHTBOX*********//

    function validateForms(selector) {  // selector - строка, класс родителя
        new window.JustValidate(selector, {
            rules: {
                name: {
                    required: true,
                },
                email: {
                    required: true,
                    email: true
                },
                subject: {
                    required: false
                },
                message: {
                    required: false
                }
            },
            submitHandler: function (form) {
                console.log(form);
                let formData = new FormData(form); // помещаем все данные form
                fetch("mail.php", {
                    method: "POST",
                    body: formData
                })
                    .then(function (data) {
                        console.log(data);
                        console.log("Форма отправлена!");
                        document.querySelector(".btn--form").classList.add("submited");
                    });
            }
        });
    }

    validateForms(".form__group");
    validateForms(".subscribe__form")
    //  //*********/.INPUT VALIDATION*********//


});
