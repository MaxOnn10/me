const darkButton = document.getElementById("dark");
const lightButton = document.getElementById("light");
// const uk_lang = document.getElementById("uk");
// const en_lang = document.getElementById("en");
const body = document.body;

const theme = localStorage.getItem("theme");
if (theme) {
    body.classList.add(theme);
}
if (theme == "dark") {
    darkButton.hidden = true;
}
darkButton.onclick = () => {
    lightButton.hidden = false;
    darkButton.hidden = true;
    body.classList.replace("light", "dark");
    localStorage.setItem("theme", "dark");
}

lightButton.onclick = () => {
    lightButton.hidden = true;
    darkButton.hidden = false;
    body.classList.replace("dark", "light");
    localStorage.setItem("theme", "light");
}

// const language = localStorage.getItem("language");
// if (language) {
//     body.classList.add(language);
// }
// en_lang.onclick = () => {
//     // body.classList.replace("uk", "en");
//     body.classList.remove("uk");
//     body.classList.add("en");
//     localStorage.setItem("language", "en");
// }

// uk_lang.onclick = () => {
//     // body.classList.replace("en", "uk");
//     body.classList.remove("en");
//     body.classList.add("uk");
//     localStorage.setItem("language", "uk");
// }


$(document).ready(function () {
    $(".burger").click(function (e) {
        $(".burger").toggleClass("burger--active"),
            $(".header__menu,.header__menu-list,.header__menu-item,.home__language").toggleClass("active"),
            $("body").toggleClass("disable-scroll")
    }),
        $(".header__menu-item").click(function (e) {
            $(".header__menu,.header__menu-list,.header__menu-item,.home__language").removeClass("active"),
                $(".burger--active").removeClass("burger--active"),
                $("body").removeClass("disable-scroll")
        })
});

//Animete.css - Wow.js
$(".home__title").addClass("animate__animated wow animate__fadeIn");
$(".home__title").attr({'data-wow-duration':"1.7s", 'data-wow-delay': "0.7s"});

$(".header__menu-item:eq(0)").addClass("animate__animated wow animate__fadeInDown");
$(".header__menu-item:eq(0)").attr({'data-wow-delay': "1s"});
$(".header__menu-item:eq(1)").addClass("animate__animated wow animate__fadeInDown");
$(".header__menu-item:eq(1)").attr({'data-wow-delay': "1.3s"});
$(".header__menu-item:eq(2)").addClass("animate__animated wow animate__fadeInDown");
$(".header__menu-item:eq(2)").attr({'data-wow-delay': "1.5s"});
$(".header__menu-item:eq(3)").addClass("animate__animated wow animate__fadeInDown");
$(".header__menu-item:eq(3)").attr({'data-wow-delay': "1.7s"});
$(".header__menu-item:eq(4)").addClass("animate__animated wow animate__fadeInDown");
$(".header__menu-item:eq(4)").attr({'data-wow-delay': "1.9s"});

$(".home__info").addClass("animate__animated wow animate__fadeIn");
$(".home__info").attr({'data-wow-duration':"2s", 'data-wow-delay': "1.5s"});

$(".home__theme").addClass("animate__animated wow animate__fadeIn");
$(".home__theme").attr({'data-wow-duration':"2s", 'data-wow-delay': "1.7s"});

$(".home__language").addClass("animate__animated wow animate__fadeIn");
$(".home__language").attr({'data-wow-duration':"2s", 'data-wow-delay': "1.7s"});


$(".home__img").addClass("animate__animated wow animate__fadeInUp");
$(".home__img").attr({'data-wow-duration':"1.7s"});

$(".about__title, .skills__title, .skills__subtitle, .portfolio__title, .contacts__title, .contacts__text").addClass("animate__animated wow animate__fadeIn");
$(".about__title").attr({'data-wow-duration':"2.0s", 'data-wow-offset':"50"});

$(".about__content").addClass("animate__animated wow animate__fadeInUp");
$(".about__content").attr({'data-wow-duration':"1.5s", 'data-wow-offset':"50"});

$(".skills__description, .skills__name").addClass("animate__animated wow animate__fadeInUp");
$(".skills__description, .skills__name").attr({'data-wow-delay': "0.5s"});

$(".skills__description, .skills__name").addClass("animate__animated wow animate__fadeInUp");
$(".skills__description, .skills__name").attr({'data-wow-delay': "0.5s"});


$(".icon-telegram").addClass("animate__animated wow animate__fadeInDown");
$(".icon-telegram").attr({'data-wow-delay': "0.2s"});
$(".icon-github").addClass("animate__animated wow animate__fadeInDown");
$(".icon-github").attr({'data-wow-delay': "0.4s"});
$(".icon-viber").addClass("animate__animated wow animate__fadeInDown");
$(".icon-viber").attr({'data-wow-delay': "0.6s"});
$(".icon-discord").addClass("animate__animated wow animate__fadeInDown");
$(".icon-discord").attr({'data-wow-delay': "0.8s"});

$(".portfolio__name-link").addClass("animate__animated wow animate__fadeIn");
$(".portfolio__name-link").attr({'data-wow-duration':"1s"});

new WOW().init();





