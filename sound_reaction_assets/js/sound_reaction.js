console.log("js linked correctly");

startedplaying = false;
var startsound = true;
var master;
var audio;
window.addEventListener("load", function () {
  audio = document.createElement("AUDIO");
  audio.src = "sound_reaction_assets/mario.mp3";
  audio.loop = true;
});

window.addEventListener("load", playsong());

function playsong() {
  master = document.getElementById("master");

  master.oninput = function (event) {
    document.getElementById("output").innerHTML =
      "<b>Volume is at:</b> " + master.value + "%";
    var elements = document.querySelectorAll("audio, video");
    elements = document;

    if (startsound) {
      audio.play();
    }
    audio.volume = master.value / 100;
    startsound = false;
    console.log(master.value);
    document.addEventListener("mouseup", detectmouseup);
  };
}

function detectmouseup() {
  audio.pause();
  startsound = true;
  document.removeEventListener("mouseup", detectmouseup);
  console.log("stopped");
}

var currentsoundcode;

var hz262ReactionTimes = new Array();
var hz1047ReactionTimes = new Array();
var hz4186ReactionTimes = new Array();
var currentsoundcode;
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
} else {
  device = "computer";
}

var str = window.location.href;
name = str.substring(str.lastIndexOf("?name=") + 6, str.lastIndexOf("?age="));
age = str.substring(str.lastIndexOf("?age=") + 5, str.lastIndexOf("?gender="));
gender = str.substring(str.lastIndexOf("?gender=") + 8, str.lastIndexOf("?"));
str = "";

var SoundCodes = "C4-C6-C8-C4-C6-C8-C4-C6-C8-C4-C6-C8-C4-C6-C8";
var arrayofsounds = new Array();
arrayofsounds = SoundCodes.split("-");
arrayofsounds = shuffle(arrayofsounds);

document.getElementById("waitingforsound").style.display = "none";
// NOT NEEDED JUST HERE FOR LESS CONFUSION CUM CUM CUM document.getElementById("waitingfortap").style.display = "none";
document.getElementById("toofast").style.display = "none";
document.getElementById("result").style.display = "none";

//Instruction removal
document.getElementById("startbutton").onclick = function () {
  document.getElementById("reactionlearn").style.display = "none";
  document.getElementById("startbutton").disabled = "true";
  playsound();
};

var waitforsoundtoplay;
//Creation of synth instance
const synth = new Tone.Synth().toDestination();
const now = Tone.now();

function playsound() {
  synth.triggerRelease(now);
  clickedearly = false;
  document.getElementById("toofast").style.display = "none";
  document.getElementById("result").style.display = "none";
  document.body.style.background = "rgb(235,235,235)";

  document.removeEventListener("mousedown", playsound);

  var time = getRandomNumber(2000, 5000);
  //Uncomment for quick debugging
  //time = 10;

  document.getElementById("waitingforsound").style.display = "block";
  document.addEventListener("mousedown", toofast);
  waitforsoundtoplay = setTimeout(function () {
    playsoundelement();
  }, time);
}

// Actually plays the sound, seperate so its easy to cancel and troubleshoot
function playsoundelement() {
  document.removeEventListener("mousedown", toofast);
  currentsoundcode = arrayofsounds[0];
  arrayofsounds.shift();
  synth.triggerAttack(currentsoundcode, now);
  createdTime = Date.now();
  document.addEventListener("mousedown", whenclick);
}

function toofast() {
  document.getElementById("waitingforsound").style.display = "none";
  document.getElementById("toofast").style.display = "block";
  document.removeEventListener("mousedown", toofast);
  document.addEventListener("mousedown", playsound);
  //Cancels the timeout so it dont spam
  clearTimeout(waitforsoundtoplay);
}

function whenclick() {
  document.getElementById("waitingforsound").style.display = "none";
  synth.triggerRelease(now);
  document.removeEventListener("mousedown", whenclick);
  document.addEventListener("mousedown", playsound);
  document.body.style.background = "rgb(235,235,235)";
  clickedTime = Date.now();
  reactionTime = clickedTime - createdTime;
  console.log(currentsoundcode);
  log();
  document.getElementById("result").style.display = "block";
  document.getElementById("resulttxt").innerHTML =
    "It took you " + reactionTime + "ms to tap! press anywhere to continue";
}

//document.addEventListener("mousedown", mousePressed);
function mousePressed() {
  document.removeEventListener("mousedown", mousePressed);
  document.addEventListener("mousedown", stopsound);
  console.log("start");
}
function stopsound() {
  console.log("stop");
  document.addEventListener("mousedown", mousePressed);
  document.removeEventListener("mousedown", stopsound);
}

function log() {
  switch (currentsoundcode) {
    case "C4":
      hz262ReactionTimes.push(reactionTime);
      break;
    case "C6":
      hz1047ReactionTimes.push(reactionTime);
      break;
    case "C8":
      hz4186ReactionTimes.push(reactionTime);
      break;
    default:
      sendtosheets();
      break;
  }
}

function sendtosheets() {
  document.removeEventListener("mousedown", toofast);
  document.removeEventListener("mousedown", whenclick);
  const data = [
    {
      Enhet: device,
      Namn: name,
      Age: age,
      Gender: gender,

      hz262Reaction1: hz262ReactionTimes[0],
      hz262Reaction2: hz262ReactionTimes[1],
      hz262Reaction3: hz262ReactionTimes[2],
      hz262Reaction4: hz262ReactionTimes[3],
      hz262Reaction5: hz262ReactionTimes[4],

      hz1047Reaction1: hz1047ReactionTimes[0],
      hz1047Reaction2: hz1047ReactionTimes[1],
      hz1047Reaction3: hz1047ReactionTimes[2],
      hz1047Reaction4: hz1047ReactionTimes[3],
      hz1047Reaction5: hz1047ReactionTimes[4],

      hz4186Reaction1: hz4186ReactionTimes[0],
      hz4186Reaction2: hz4186ReactionTimes[1],
      hz4186Reaction3: hz4186ReactionTimes[2],
      hz4186Reaction4: hz4186ReactionTimes[3],
      hz4186Reaction5: hz4186ReactionTimes[4],
    },
  ];

  fetch(
    "https://sheet.best/api/sheets/4c7bc0a8-4d1b-4158-a846-ca29ccb092bf/tabs/SoundTest",
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
      window.alert("TEST COMPLETE BAI BAI");
      window.location.href = "https://www.youtube.com/watch?v=6r5eGfbbLgk";
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
