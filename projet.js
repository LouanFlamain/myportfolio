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

$paint.addEventListener("click", function () {
  console.log("test paint");
  $backgroundEffect.classList.add("blur");
  $cardTitle.textContent = "Projet Paint";
  $cardDesc.textContent =
    "Le projet paint est un projet qui a été réalisé après 1 mois et demi après le début des cours, il consistait à recréer un site dans lequel nous pouvons générer : des carrés, des ronds, des triangles et du texte.";
  $cardContainer.classList.remove("is-hidden");
  $timeMeter.classList.add("is-hidden");
  $cardLink.setAttribute("href", "./projet_paint/index.html");
  $navbarReset();
});
$cinewave.addEventListener("click", function () {
  console.log("test cine");
  $backgroundEffect.classList.add("blur");
  $cardTitle.textContent = "Projet Ciné-Wave";
  $cardDesc.textContent =
    "Le projet Netflix consistait à recréer un faux site de streaming (sans player) et avec un concept original. Le site fonctionne à l'aide d'une API et possède un système de recherche de films, un système de recherche par courant cinématographique, ainsi qu'un bouton permettant de chosir un film aléatoire par catégorie.";
  $cardContainer.classList.remove("is-hidden");
  $cardLink.setAttribute("href", "https://cine-wave.netlify.app/");
  $navbarReset();
  $timeMeter.classList.add("is-hidden");
});
$react.addEventListener("click", function () {
  $cardContainer.classList.remove("is-hidden");
  $backgroundEffect.classList.add("blur");
  $cardTitle.textContent = "Projet React";
  $cardDesc.textContent =
    "Projet en finalisation de conception // Site e-commerce fait en React";
  $cardLink.setAttribute("href", "#");
  $timeMeter.classList.add("is-hidden");
  $navbarReset();
});
let $btnDuHome = document.querySelector(".btn_home");

$btnDuHome.addEventListener("click", function () {
  $backgroundEffect.classList.remove("blur");
  $cardContainer.classList.add("is-hidden");
  $timeMeter.classList.remove("is-hidden");
  $navbarReset();
});
