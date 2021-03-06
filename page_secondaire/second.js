var $navbarBasicExemple = document.querySelector("#navbarBasicExample");
var $navbarCruse = document.querySelector("#navbar-cruse");
var $btnMoins = document.querySelector("#btn_moins");
var $btnPlus = document.querySelector("#btn_plus");
var $background = document.querySelector(".background");

var $backgroundTab = [
  "../img/The-Beach-1-dragged.webp",
  "../img/The-Beach-5-dragged.webp",
  "../img/The-Beach-6-dragged.webp",
  "../img/The-Beach-4-dragged.webp",
  "../img/The-Beach-8-dragged.webp",
  "../img/The-Beach-2-dragged.webp",
  "../img/The-Beach-3-dragged.webp",
];
var $mainHorloge = document.querySelector("#main-horloge");
var now = new Date();
var $hourSync = now.getHours();
var $hour = now.getHours();
var $minute = now.getMinutes();
var $secondes = now.getSeconds();
var $test = function () {
  if ($secondes != 59) {
    $secondes++;
  } else {
    $secondes = 0;
    if ($minute != 59) {
      $minute++;
    } else {
      $minute = 0;
      if ($hour != 24) {
        $hour++;
      } else {
        $hour = 0;
        $minute = 0;
        $secondes = 0;
      }
      if ($hourSync != 24) {
        $hourSync++;
      } else {
        $hourSync = 0;
      }
    }
  }

  $backgroundTime();
  //console.log($hour, $minute, $secondes);
  //$mainHorloge.textContent = $hour + " : " + $minute + " : " + $secondes;
};
let $number = 1;
setTimeout($test);
setInterval($test, 1000);
$backgroundTime = function () {
  if ($hour === 7 || $hour === 8) {
    $background.style.backgroundImage = "url(" + $backgroundTab[0] + ")";
  }
  if (
    $hour === 9 ||
    $hour === 10 ||
    $hour === 11 ||
    $hour === 12 ||
    $hour === 13 ||
    $hour === 14 ||
    $hour === 15 ||
    $hour === 16
  ) {
    $background.style.backgroundImage = "url(" + $backgroundTab[1] + ")";
  }
  if ($hour === 17 || $hour === 18 || $hour === 19) {
    $background.style.backgroundImage = "url(" + $backgroundTab[2] + ")";
  }
  if ($hour === 20) {
    $background.style.backgroundImage = "url(" + $backgroundTab[3] + ")";
  }
  if ($hour === 21) {
    $background.style.backgroundImage = "url(" + $backgroundTab[4] + ")";
  }
  if (
    $hour === 22 ||
    $hour === 23 ||
    $hour === 0 ||
    $hour === 1 ||
    $hour === 2 ||
    $hour === 3 ||
    $hour === 4
  ) {
    $background.style.backgroundImage = "url(" + $backgroundTab[5] + ")";
  }
  if ($hour === 5 || $hour === 6) {
    $background.style.backgroundImage = "url(" + $backgroundTab[6] + ")";
  }
};

let $navbarReset = function () {
  $navbarCruse.classList.toggle("is-active");
  $navbarBasicExemple.classList.toggle("is-active");
};
$navbarCruse.addEventListener("click", function () {
  $navbarReset();
});

//
let $paint = document.querySelector("#btn_paint");
let $cinewave = document.querySelector("#btn_cinewave");
let $react = document.querySelector("#btn_react");
let $cardContainer = document.querySelector(".card-project");
let $backgroundEffect = document.querySelector("#background-effect");

let $cardImg = document.querySelector("#card-img");
let $cardTitle = document.querySelector("#card-title");
let $cardDesc = document.querySelector("#card-desc");
let $cardLink = document.querySelector(".lien_projet");

let $timeMeter = document.querySelector("#time_meter");

let $aboutMeContainer = document.querySelector(".about-me-container");

$paint.addEventListener("click", function () {
  console.log("test paint");
  $backgroundEffect.classList.add("blur");
  $cardTitle.textContent = "Projet Paint";
  $cardDesc.textContent =
    "Le projet paint est un projet qui a ??t?? r??alis?? apr??s 1 mois et demi apr??s le d??but des cours, il consistait ?? recr??er un site dans lequel nous pouvons g??n??rer : des carr??s, des ronds, des triangles et du texte.";
  $cardContainer.classList.remove("is-hidden");
  $aboutMeContainer.classList.add("is-hidden");
  $navbarReset();
  $cardLink.setAttribute("href", "../projet_paint/index.html");
});
$cinewave.addEventListener("click", function () {
  console.log("test cine");
  $backgroundEffect.classList.add("blur");
  $cardTitle.textContent = "Projet Cin??-Wave";
  $cardDesc.textContent =
    "Le projet Netflix consistait ?? recr??er un faux site de streaming (sans player) et avec un concept original. Le site fonctionne ?? l'aide d'une API et poss??de un syst??me de recherche de films, un syst??me de recherche par courant cin??matographique, ainsi qu'un bouton permettant de chosir un film al??atoire par cat??gorie.";
  $cardContainer.classList.remove("is-hidden");
  $aboutMeContainer.classList.add("is-hidden");
  $cardLink.setAttribute("href", "https://cine-wave.netlify.app/");
  $navbarReset();
});
$react.addEventListener("click", function () {
  $cardContainer.classList.remove("is-hidden");
  $backgroundEffect.classList.add("blur");
  $cardTitle.textContent = "Projet React";
  $cardDesc.textContent =
    "Projet en finalisation de conception // Site e-commerce fait en React";
  $aboutMeContainer.classList.add("is-hidden");
  $cardLink.setAttribute("href", "#");
  $navbarReset();
});

let $btnAboutPage = document.querySelector("#about-page");

$btnAboutPage.addEventListener("click", function () {
  $backgroundEffect.classList.remove("blur");
  $cardContainer.classList.add("is-hidden");
  $aboutMeContainer.classList.remove("is-hidden");
  $navbarReset();
});
