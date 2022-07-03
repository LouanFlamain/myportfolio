var $navbarBasicExemple = document.querySelector("#navbarBasicExample");
var $navbarCruse = document.querySelector("#navbar-cruse");

var $btnPlus = document.querySelector(".btn-plus");
var $btnMoins = document.querySelector(".btn-moins");
var $textChange = document.querySelector(".text-change");
var $background = document.querySelector(".background");

var $backgroundTab = [
  "./img/The-Cliffs-1-dragged.webp",
  "./img/The-Cliffs-5-dragged.webp",
  "./img/The-Cliffs-6-dragged.webp",
  "./img/The-Cliffs-4-dragged.webp",
  "./img/The-Cliffs-8-dragged.webp",
  "./img/The-Cliffs-2-dragged.webp",
  "./img/The-Cliffs-3-dragged.webp",
];
var init = 0;
//var $number = 0;

var $count = 0;
var $datetext = "";
do {
  var $number = Math.floor(Math.random() * $backgroundTab.length);
  $background.style.backgroundImage = "url(" + $backgroundTab[$number] + ")";
  $count = $number;
} while (init != 0);

var $date = function () {
  if (($count = 0)) {
    $datetext = "09h00";
  }
  if (($count = 1)) {
    $datetext = "12h00";
  }
  if (($count = 2)) {
    $datetext = "16h00";
  }
  if (($count = 3)) {
    $datetext = "19h00";
  }
  if (($count = 4)) {
    $datetext = "21h00";
  }
  if (($count = 5)) {
    $datetext = "00h00";
  }
  if (($count = 0)) {
    $datetext = "06h00";
  }
};

$navbarCruse.addEventListener("click", function () {
  $navbarCruse.classList.toggle("is-active");
  $navbarBasicExemple.classList.toggle("is-active");
});

$btnMoins.addEventListener("click", function () {
  if ($count == 0) {
    $count = $backgroundTab.length - 1;
  } else {
    $count = $count - 1;
  }
  console.log($count);
  $background.style.backgroundImage = "url(" + $backgroundTab[$count] + ")";
  //$date();
  //$textChange.textContent = $datetext;
});

$btnPlus.addEventListener("click", function () {
  if ($count == $backgroundTab.length - 1) {
    $count = 0;
  } else {
    $count++;
  }
  console.log($count);
  $background.style.backgroundImage = "url(" + $backgroundTab[$count] + ")";
  //$date();
  //$textChange.textContent = $datetext;
});
