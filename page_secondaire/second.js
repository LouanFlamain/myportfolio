var $navbarBasicExemple = document.querySelector("#navbarBasicExample");
var $navbarCruse = document.querySelector("#navbar-cruse");
var $btnMoins = document.querySelector("#btn_moins");
var $btnPlus = document.querySelector("#btn_plus");
var $btnSync = document.querySelector("#btn_sync");
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
  console.log($hour, $minute, $secondes);
  //$mainHorloge.textContent = $hour + " : " + $minute + " : " + $secondes;
};
let $number = 1;
do {
  $test;
} while ($number != 1);
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
