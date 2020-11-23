console.log("js linked correctly");

startedplaying = false;
var startsound = true;
var master;
var audio;
var synth;
var now;
var currentsoundcode;
var hz262ReactionTimes = new Array();
var hz1047ReactionTimes = new Array();
var hz4186ReactionTimes = new Array();
var arrayofsounds = new Array();
var currentsoundcode;
var clickedTime;
var createdTime;
var reactionTime;
var clickedearly;
var highscore = null;
var SoundCodes = "C4-C6-C8-C4-C6-C8-C4-C6-C8-C4-C6-C8-C4-C6-C8";
arrayofsounds = SoundCodes.split("-");
arrayofsounds = shuffle(arrayofsounds);

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

const myUrl = new URL(window.location.href);
var name = myUrl.searchParams.get("name");
var age = myUrl.searchParams.get("age");
var gender = myUrl.searchParams.get("gender");
if (
  name === null ||
  age === null ||
  gender === null ||
  name === "" ||
  age === "" ||
  gender === ""
) {
  window.alert("Please go through the main url");
  window.location.href = "index.html";
}

document.getElementById("waitingforsound").style.display = "none";
// NOT NEEDED JUST HERE FOR LESS CONFUSION CUM CUM CUM document.getElementById("waitingfortap").style.display = "none";
document.getElementById("toofast").style.display = "none";
document.getElementById("result").style.display = "none";
document.getElementById("startbutton").style.display = "none";
document.getElementById("sliderdiv").style.display = "none";

//Instruction removal

//Volume bar stuff
var initialsetupfortonetest = true;
function initializedassets() {
  console.log("initialized setup23412");
  synth = new Tone.Synth().toDestination();
  now = Tone.now();
  initialsetupfortonetest = false;
  document.getElementById("initializebutton").style.display = "none";
  document.getElementById("startbutton").style.display = "block";
  document.getElementById("sliderdiv").style.display = "block";
  adjustvolume();
}
// Starts the tone.js stuff (since it requires a user to press a button)
function InitializeStuff(callback) {
  document.getElementById("initializebutton").innerHTML =
    '<i class="fa fa-circle-o-notch fa-spin"></i>Intializing!';
  var script = document.createElement("script");
  script.type = "text/javascript";

  if (script.readyState) {
    //IE
    script.onreadystatechange = function () {
      if (script.readyState == "loaded" || script.readyState == "complete") {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {
    //Others
    script.onload = function () {
      callback();
    };
  }

  script.src = "https://tonejs.github.io/build/Tone.js";
  document.getElementsByTagName("head")[0].appendChild(script);
}
function adjustvolume() {
  console.log("playing sound");
  master = document.getElementById("master");
  document.getElementById("volumevalueoutput").innerHTML =
    "<b>Volume is at:</b> " + master.value + "DB";

  master.oninput = function (event) {
    synth.volume.value = master.value;
    console.log(master.value);
    document.getElementById("volumevalueoutput").innerHTML =
      "<b>Volume is at:</b> " + master.value + "DB";
  };
  master.onmousedown = function () {
    synth.triggerAttack("C4", now);
  };
  master.onmouseup = function () {
    synth.triggerRelease(now);
    console.log("stopped");
  };
}

//actual test
document.getElementById("pressedtooearly").onclick = function () {
  playsound();
};
function playsound() {
  document.getElementById("reactionlearn").style.display = "none";
  synth.volume.value = master.value;
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
  document.removeEventListener("mousedown", playsound);

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
  if (arrayofsounds.length < 1) {
    console.log("cumcumcum");
    document.removeEventListener("mousedown", toofast);
    document.removeEventListener("mousedown", playsound);
    document.removeEventListener("mousedown", whenclick);
    document.getElementById("resulttxt").innerHTML =
      "It took you " +
      reactionTime +
      "ms to tap! press anywhere to continue to the next test!";
    btn = document.createElement("BUTTON");
    btn.innerHTML = "Continue";
    btn.onclick = function () {
      sendtosheets();
    };
    btn.className = "btn btn-primary";
    document.getElementById("result").appendChild(btn);
    //document.getElementById("result")[0].appendChild(btn);
  } else {
    document.getElementById("resulttxt").innerHTML =
      "It took you " + reactionTime + "ms to tap! press anywhere to continue";
  }
  if (reactionTime < highscore) {
    document.getElementById("highscore").innerHTML =
      "You set a new highscore! Previous was " + highscore;
    highscore = reactionTime;
  }
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
      Volume: master.value,
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
    "https://sheet.best/api/sheets/d25b95dd-ce88-4b06-bbea-8111d3b7b347/tabs/SoundTest",
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
      window.alert("Test complete, thank you!");
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
