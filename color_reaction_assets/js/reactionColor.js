console.log("js linked correctly");
//mobile detection


var redReactionTimes = new Array();
var yellowReactionTimes = new Array();
var blueReactionTimes = new Array();
var orangeReactionTimes = new Array();
var pinkReactionTimes = new Array();
var hz262ReactionTimes = new Array();
var hz1047ReactionTimes = new Array();
var hz4186ReactionTimes = new Array();
var currentcolorcode;
var clickedTime;
var createdTime;
var reactionTime;
var clickedearly;
var name;
var age;
var gender;
var device;
if (
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
) {
  /*/ true for mobile device
  window.alert("To participate in this study you will need to use a computer");
  window.location.href = "https://www.youtube.com/watch?v=6r5eGfbbLgk";/*/
  device = "phone";
}
else{
  device= "computer";
}

var str = window.location.href;
name = str.substring(str.lastIndexOf("?name=") + 6, str.lastIndexOf("?age="));
age = str.substring(str.lastIndexOf("?age=") + 5, str.lastIndexOf("?gender="));
gender = str.substring(str.lastIndexOf("?gender=") + 8, str.lastIndexOf("?"));
str = "";

/*/
ONLY FOR REFERENCE SLUTA SPHAGETTI KODA
var redReaction = "ee4117";
var yellowReaction = "fcf60a";
var blueReaction = "0267ad";
var orangeReaction = "e17000";
var pinkReaction = "ff69b4";

var hz262Reaction = "Middle C, C4";
var hz1047Reaction = "C6";
var hz4186Reaction = "Highest C, C8";
/*/

//Creates array of colors(lite sphagetti är ok ibland)
var ColorCodes =
  "#ee4117-#fcf60a-#0267ad-#e17000-#ff69b4-#ee4117-#fcf60a-#0267ad-#e17000-#ff69b4-#ee4117-#fcf60a-#0267ad-#e17000-#ff69b4-#ee4117-#fcf60a-#0267ad-#e17000-#ff69b4-#ee4117-#fcf60a-#0267ad-#e17000-#ff69b4";
var arrayofcolors = new Array();
arrayofcolors = ColorCodes.split("-");
arrayofcolors = shuffle(arrayofcolors);

document.getElementById("waitingforcolor").style.display = "none";
document.getElementById("waitingfortap").style.display = "none";
document.getElementById("toofast").style.display = "none";
document.getElementById("result").style.display = "none";

document.getElementById("startbutton").onclick = function () {
  document.getElementById("reactionlearn").style.display = "none";
  document.getElementById("startbutton").disabled = "true";
  showcolor();
};
var waitforcolortoshow;
function showcolor() {
  clickedearly = false;
  document.getElementById("toofast").style.display = "none";
  document.getElementById("result").style.display = "none";
  document.removeEventListener("mousedown", showcolor);

  var time = getRandomNumber(2000, 5000);
  //Uncomment/comment line under for quick debugging
  time = 10;
  document.body.style.background = "rgb(235,235,235)";
  document.getElementById("waitingforcolor").style.display = "block";
  document.addEventListener("mousedown", toofast);
  waitforcolortoshow = setTimeout(function () {
    if (!clickedearly) {
      changebackground();
    }
  }, time);
}
function changebackground() {
  document.removeEventListener("mousedown", toofast);
  document.getElementById("waitingforcolor").style.display = "none";
  currentcolorcode = arrayofcolors[0];
  document.body.style.background = currentcolorcode;

  createdTime = Date.now();
  document.getElementById("waitingfortap").style.display = "block";
  document.addEventListener("mousedown", whenclick);
}

function toofast() {
  document.getElementById("waitingforcolor").style.display = "none";
  document.getElementById("toofast").style.display = "block";
  clickedearly = true;
  document.removeEventListener("mousedown", toofast);
  document.addEventListener("mousedown", showcolor);
  clearTimeout(waitforcolortoshow);
}
var btn;
function whenclick() {
  document.removeEventListener("mousedown", whenclick);
  document.addEventListener("mousedown", showcolor);
  document.body.style.background = "rgb(235,235,235)";

  document.getElementById("waitingfortap").style.display = "none";
  clickedTime = Date.now();
  reactionTime = clickedTime - createdTime;
  console.log(currentcolorcode);
  log();
  document.getElementById("result").style.display = "block";
  arrayofcolors.shift();
  if (arrayofcolors.length < 1) {
    console.log("cumcumcum");
    document.removeEventListener("mousedown", toofast);
    document.removeEventListener("mousedown", showcolor);
    document.removeEventListener("mousedown", whenclick);
    document.getElementById("resulttxt").innerHTML =
      "It took you " +
      reactionTime +
      "ms to tap! press anywhere to continue to the next test!";
    btn = document.createElement("BUTTON");
    btn.innerHTML = "Continue to sound test!";
    btn.onclick = function () {
      saveToSheetsandGoToSound();
    };
    btn.className = "btn btn-primary";
    document.getElementById("result").appendChild(btn);
    //document.getElementById("result")[0].appendChild(btn);
  } else {
    document.getElementById("resulttxt").innerHTML =
      "It took you " + reactionTime + "ms to tap! press anywhere to continue";
  }
}

function log() {
  switch (currentcolorcode) {
    case "#ee4117":
      redReactionTimes.push(reactionTime);
      break;
    case "#fcf60a":
      yellowReactionTimes.push(reactionTime);
      break;
    case "#0267ad":
      blueReactionTimes.push(reactionTime);
      break;
    case "#e17000":
      orangeReactionTimes.push(reactionTime);
      break;
    case "#ff69b4":
      pinkReactionTimes.push(reactionTime);
      break;
    default:
      window.alert("nu är de massa sphagetti på gång");
      break;
  }
}
function saveToSheetsandGoToSound() {
  btn.innerHTML =
    '<i class="fa fa-circle-o-notch fa-spin"></i>Loading next test!';
  const data = [
    {
      Enhet: device,
      Namn: name,
      Age: age,
      Gender: gender,

      redReaction1: redReactionTimes[0],
      redReaction2: redReactionTimes[1],
      redReaction3: redReactionTimes[2],
      redReaction4: redReactionTimes[3],
      redReaction5: redReactionTimes[4],

      yellowReaction1: yellowReactionTimes[0],
      yellowReaction2: yellowReactionTimes[1],
      yellowReaction3: yellowReactionTimes[2],
      yellowReaction4: yellowReactionTimes[3],
      yellowReaction5: yellowReactionTimes[4],

      blueReaction1: blueReactionTimes[0],
      blueReaction2: blueReactionTimes[1],
      blueReaction3: blueReactionTimes[2],
      blueReaction4: blueReactionTimes[3],
      blueReaction5: blueReactionTimes[4],

      orangeReaction1: orangeReactionTimes[0],
      orangeReaction2: orangeReactionTimes[1],
      orangeReaction3: orangeReactionTimes[2],
      orangeReaction4: orangeReactionTimes[3],
      orangeReaction5: orangeReactionTimes[4],

      pinkReaction1: pinkReactionTimes[0],
      pinkReaction2: pinkReactionTimes[1],
      pinkReaction3: pinkReactionTimes[2],
      pinkReaction4: pinkReactionTimes[3],
      pinkReaction5: pinkReactionTimes[4],
    },
  ];

  fetch(
    "https://sheet.best/api/sheets/4c7bc0a8-4d1b-4158-a846-ca29ccb092bf/tabs/ColorTest",
    {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  )
    .then((r) => r.json())
    .then((data) => {
      //window.alert("data sent to google sheets, pls write some more code now");
      window.location.href =
        "reactionSound.html?name=" +
        name +
        "?age=" +
        age +
        "?gender=" +
        gender +
        "?";

      console.log(data);
    })
    .catch((error) => {
      // Errors are reported there
      console.log(error);
    });
}
function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}
//Shuffles the input array and returns the array shuffled
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
