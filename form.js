var $navbarBasicExemple = document.querySelector("#navbarBasicExample");
var $navbarCruse = document.querySelector("#navbar-cruse");
var $btnMoins = document.querySelector("#btn_moins");
var $btnPlus = document.querySelector("#btn_plus");
var $btnSync = document.querySelector("#btn_sync");
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
  if ($secondes < 10 && $minute < 10 && $hour < 10) {
    $mainHorloge.textContent =
      "0" + $hour + " : " + "0" + $minute + " : " + "0" + $secondes;
  }
  if ($secondes > 10 && $minute < 10 && $hour < 10) {
    $mainHorloge.textContent =
      "0" + $hour + " : " + "0" + $minute + " : " + $secondes;
  }
  if ($secondes < 10 && $minute > 10 && $hour < 10) {
    $mainHorloge.textContent =
      "0" + $hour + " : " + $minute + " : " + "0" + $secondes;
  }
  if ($secondes > 10 && $minute > 10 && $hour < 10) {
    $mainHorloge.textContent =
      "0" + $hour + " : " + $minute + " : " + $secondes;
  }
  if ($secondes < 10 && $minute < 10 && $hour > 10) {
    $mainHorloge.textContent =
      $hour + " : " + "0" + $minute + " : " + "0" + $secondes;
  }
  if ($secondes > 10 && $minute < 10 && $hour > 10) {
    $mainHorloge.textContent =
      $hour + " : " + "0" + $minute + " : " + $secondes;
  }
  if ($secondes < 10 && $minute > 10 && $hour > 10) {
    $mainHorloge.textContent =
      $hour + " : " + $minute + " : " + "0" + $secondes;
  }
  if ($secondes > 10 && $minute > 10 && $hour > 10) {
    $mainHorloge.textContent = $hour + " : " + $minute + " : " + $secondes;
  }
};
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
$btnMoins.addEventListener("click", function () {
  if ($hour == 0) {
    $hour = 23;
  } else {
    $hour = $hour - 1;
  }
  $mainHorloge.textContent = $hour + " : " + $minute + " : " + $secondes;
});
$btnPlus.addEventListener("click", function () {
  if ($hour == 23) {
    $hour = 0;
  } else {
    $hour++;
  }
  $mainHorloge.textContent = $hour + " : " + $minute + " : " + $secondes;
});
$btnSync.addEventListener("click", function () {
  $hour = $hourSync;
});
var init = 0;

var $count = 0;
var $datetext = "";

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

let $navbarReset = function () {
  $navbarCruse.classList.toggle("is-active");
  $navbarBasicExemple.classList.toggle("is-active");
};
$navbarCruse.addEventListener("click", function () {
  $navbarReset();
});

let $mycall = function () {
  if ($count == $backgroundTab.length - 1) {
    $count = 0;
  } else {
    $count++;
  }
  console.log($count);
  $background.style.backgroundImage = "url(" + $backgroundTab[$count] + ")";
};
//setInterval($mycall, 5000);

//https://iphoneaddict.fr/post/news-305783-macos-11-0-1-inclut-nouveaux-fonds-decran-voici

//presentation du fonctionnement :

let $tstHide = document.querySelector(".tst_btn");
let $tstProperties = document.querySelector(".tst_properties");
let isDisplay = true;

$tstHide.addEventListener("click", function () {
  console.log("ca marche");
  if (isDisplay == true) {
    isDisplay = false;
    $tstProperties.style.transform = "translate(-50%, -52px)";
    $tstHide.textContent = "Afficher";
  } else {
    isDisplay = true;
    $tstProperties.style.transform = "translate(-50%, 68px)";
    $tstHide.textContent = "Masquer";
  }
});
let $tstHideTime = function () {
  if (isDisplay == true) {
    isDisplay = false;
    $tstProperties.style.transform = "translate(-50%, -52px)";
    $tstHide.textContent = "Afficher";
  }
};
setTimeout($tstHideTime, 7000);
