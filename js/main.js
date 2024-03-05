"use strict";

import {
    isWebp,
    burgerBtnMenu,
    simpleMenu,
    Gallery,
    multiplePopup,
} from "./modules/allModule.min.js";

document.addEventListener(
    "DOMContentLoaded",
    function () {
        // Поддержка web расширения
        isWebp();
        // Кнопка бургер меню
        burgerBtnMenu(".menu", ".menu__icon");
        // Простое меню
        simpleMenu(".menu__link", ".menu__list", "section", false);
        // Первый экземпляр слайдера

        const optionsMain = {
            class: {
                galleryClassName: "main-gallery", // Класс на обёртке галереи
                galleryLineClassName: "gallery-line", // Класс на обёртке слайдов
                gallerySlideClassName: "gallery-unit", // Класс обёртка на слайде
            },
            widthWindowsSlider: 1, // Колличество слайдов в окне
            indent: {
                // Отступ между слайдами в медиазапросах в px
                1400: 1,
                960: 1,
                780: 1,
                560: 1,
            },
            secondDelay: "0.4s", // Плавность сдвига
            percentShift: 10, // Минимальный сдвиг по экрану px
            infiniteSlide: true, // Бесконечный слайдер
            autoscrolling: {
                // left: true,
                // right: true,
                delay: "2", // Задержка при автолистании в секундах
            },
            controls: {
                prevId: "main-btnPrev",
                nextId: "main-btnNext",
            },
            bullets: {
                bulletsId: "main-bullets",
                // namberBullet: true,
            },
            numberSlide: {
                numberSlideShow: false, // Скрыть нумерацию слайдов
                // numberSlideShow: true, // Показать нумерацию слайдов
                numberSlideClass: "numberSlide",
                numberSlideCuurent: "currentSlide",
            },
            progressBar: {
                progressBarShow: false, // Скрыть прогрес Бар
                // progressBarShow: true, // Показать прогрес Бар
                progressBarClass: "progressBar",
                progressBarChildClass: "progressBarChild",
                progressColor: "#0857ea", // options.progressBar.progressColor
                trackColor: "#fff", // options.progressBar.trackColor
            },
        };
        new Gallery(document.getElementById("main-gallery"), optionsMain);
        // Если нужна левая кнопка при старте
        document.getElementById("main-btnPrev").removeAttribute("hidden");

        // Второй экземпляр слайдера
        function widthWinWorkes() {
            if (window.screen.width < 835) {
                return 2.7;
            } else if (window.screen.width < 560) {
                return 1.1;
            }
        }
        const optionsWorkers = {
            class: {
                galleryClassName: "workers-gallery", // Класс на обёртке галереи
                galleryLineClassName: "gallery-line", // Класс на обёртке слайдов
                gallerySlideClassName: "gallery-unit", // Класс обёртка на слайде
            },
            widthWindowsSlider: widthWinWorkes(), // Колличество слайдов в окне
            indent: {
                // Отступ между слайдами в медиазапросах в px
                1400: 24,
                960: 24,
                780: 24,
                560: 24,
            },
            secondDelay: "0.4s", // Плавность сдвига
            percentShift: 10, // Минимальный сдвиг по экрану px
            infiniteSlide: true, // Бесконечный слайдер
            autoscrolling: {
                // left: true,
                // right: true,
                delay: "2", // Задержка при автолистании в секундах
            },
            // controls: {
            //     prevId: "main-btnPrev",
            //     nextId: "main-btnNext",
            // },
            // bullets: {
            //     bulletsId: "main-bullets",
            //     // namberBullet: true,
            // },
            numberSlide: {
                numberSlideShow: false, // Скрыть нумерацию слайдов
                // numberSlideShow: true, // Показать нумерацию слайдов
                numberSlideClass: "numberSlide",
                numberSlideCuurent: "currentSlide",
            },
            progressBar: {
                progressBarShow: false, // Скрыть прогрес Бар
                // progressBarShow: true, // Показать прогрес Бар
                progressBarClass: "progressBar",
                progressBarChildClass: "progressBarChild",
                progressColor: "#0857ea", // options.progressBar.progressColor
                trackColor: "#fff", // options.progressBar.trackColor
            },
        };
        if (window.screen.width < 835) {
            new Gallery(
                document.getElementById("workers-gallery"),
                optionsWorkers
            );
        }
        // Третий экземпляр класса
        function widthWin() {
            if (window.screen.width > 834) {
                return 2.07;
            } else if (window.screen.width <= 834) {
                return 1.4;
            } else if (window.screen.width <= 560) {
                return 1;
            }
        }
        const optionsReviews = {
            class: {
                galleryClassName: "reviews-gallery", // Класс на обёртке галереи
                galleryLineClassName: "gallery-line", // Класс на обёртке слайдов
                gallerySlideClassName: "gallery-unit", // Класс обёртка на слайде
            },
            widthWindowsSlider: widthWin(), // Колличество слайдов в окне
            indent: {
                // Отступ между слайдами в медиазапросах в px
                1400: 27,
                960: 27,
                780: 27,
                560: 27,
            },
            secondDelay: "0.4s", // Плавность сдвига
            percentShift: 10, // Минимальный сдвиг по экрану px
            infiniteSlide: true, // Бесконечный слайдер
            autoscrolling: {
                // left: true,
                // right: true,
                delay: "2", // Задержка при автолистании в секундах
            },
            controls: {
                prevId: "reviews-btnPrev",
                nextId: "reviews-btnNext",
            },

            numberSlide: {
                numberSlideShow: false, // Скрыть нумерацию слайдов
                // numberSlideShow: true, // Показать нумерацию слайдов
                numberSlideClass: "numberSlide",
                numberSlideCuurent: "currentSlide",
            },
            progressBar: {
                progressBarShow: false, // Скрыть прогрес Бар
                // progressBarShow: true, // Показать прогрес Бар
                progressBarClass: "progressBar",
                progressBarChildClass: "progressBarChild",
                progressColor: "#0857ea",
                trackColor: "#fff",
            },
        };
        new Gallery(document.getElementById("reviews-gallery"), optionsReviews);
        document.getElementById("reviews-btnPrev").removeAttribute("hidden");

        // Четвёртый экземпляр класса
        function widthWinNews() {
            if (window.screen.width > 834) {
                return 2.1;
            } else if (window.screen.width <= 834 && window.screen.width > 560) {
                return 2.3;
            } else if (window.screen.width <= 560) {
                return 1.5;
            }
        }
        const optionsNews = {
            class: {
                galleryClassName: "news-gallery", // Класс на обёртке галереи
                galleryLineClassName: "gallery-line", // Класс на обёртке слайдов
                gallerySlideClassName: "gallery-unit", // Класс обёртка на слайде
            },
            widthWindowsSlider: widthWinNews(), // Колличество слайдов в окне
            indent: {
                // Отступ между слайдами в медиазапросах в px
                1400: 0,
                960: 24,
                780: 24,
                560: 24,
            },
            secondDelay: "0.4s", // Плавность сдвига
            percentShift: 10, // Минимальный сдвиг по экрану px
            infiniteSlide: true, // Бесконечный слайдер
            autoscrolling: {
                // left: true,
                // right: true,
                delay: "2", // Задержка при автолистании в секундах
            },
            controls: {
                prevId: "news-btnPrev",
                nextId: "news-btnNext",
            },

            numberSlide: {
                numberSlideShow: false, // Скрыть нумерацию слайдов
                // numberSlideShow: true, // Показать нумерацию слайдов
                numberSlideClass: "numberSlide",
                numberSlideCuurent: "currentSlide",
            },
            progressBar: {
                progressBarShow: false, // Скрыть прогрес Бар
                // progressBarShow: true, // Показать прогрес Бар
                progressBarClass: "progressBar",
                progressBarChildClass: "progressBarChild",
                progressColor: "#0857ea",
                trackColor: "#fff",
            },
        };
        if (window.screen.width < 835) {
            new Gallery(document.getElementById("news-gallery"), optionsNews);
        }
        // Пятый экземпляр
        const optionsServices = {
            class: {
                galleryClassName: "service-gallery", // Класс на обёртке галереи
                galleryLineClassName: "gallery-line", // Класс на обёртке слайдов
                gallerySlideClassName: "gallery-unit", // Класс обёртка на слайде
            },
            widthWindowsSlider: 1.42, // Колличество слайдов в окне
            indent: {
                // Отступ между слайдами в медиазапросах в px
                1400: 21,
                960: 21,
                780: 21,
                560: 21,
            },
            secondDelay: "0.4s", // Плавность сдвига
            percentShift: 10, // Минимальный сдвиг по экрану px
            infiniteSlide: true, // Бесконечный слайдер
            autoscrolling: {
                // left: true,
                // right: true,
                delay: "2", // Задержка при автолистании в секундах
            },
            // controls: {
            //     prevId: "news-btnPrev",
            //     nextId: "news-btnNext",
            // },

            numberSlide: {
                numberSlideShow: false, // Скрыть нумерацию слайдов
                // numberSlideShow: true, // Показать нумерацию слайдов
                numberSlideClass: "numberSlide",
                numberSlideCuurent: "currentSlide",
            },
            progressBar: {
                progressBarShow: false, // Скрыть прогрес Бар
                // progressBarShow: true, // Показать прогрес Бар
                progressBarClass: "progressBar",
                progressBarChildClass: "progressBarChild",
                progressColor: "#0857ea",
                trackColor: "#fff",
            },
        };
        if (window.screen.width <= 560) {
            new Gallery(
                document.getElementById("service-gallery"),
                optionsServices
            );
        }

        // Вызов поппап с параметрами
        const popupNew = {
            popupPhoneClassName: ".news-popup",
            popupWindowClassName: ".news-popup__photo-block",
            popupBtnClose: ".btnCloseNews",
        };
        if (window.screen.width > 834) {
            multiplePopup(".show", popupNew);
        }
    },
    false
);
