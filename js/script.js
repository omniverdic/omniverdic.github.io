/* NOTE: the attribute "dn" is used to hide an element (see CSS style declaration)
That means following: 
example.setAttribute("dn","") hides, 
example.removeAttribute("dn") shows
an element */

var timer, //Variabeln för hur lång tid innan färgskärm visas
 reactiontime, //Variablen för hur snabbt du lyckades reagera på färgen
 sectioncounter, //Variabel för att se vilken del av sektion du är den s
 partcounter,


//Användarinformation (namn, ålder och biologiskt kön)
 reactant,  //ändrade namnvariabel till reactant istöllet för name då name tydligen är ett reserverat ord i js.
 age,
 biologicalSex,


//Nersparning av reaktionstider på röd (#ee4117)
 redReaction1,
 redReaction2,
 redReaction3,
 redReaction4,
 redReaction5,

//Nersparning av reaktionstider på gul (#fcf60a)
 yellowReaction1,
 yellowReaction2,
 yellowReaction3,
 yellowReaction4,
 yellowReaction5,

//Nersparning av reaktionstider på blå (#0267ad)
 blueReaction1,
 blueReaction2,
 blueReaction3,
 blueReaction4,
 blueReaction5,

//Nersparning av reaktionstider på orange (#e17000)
 orangeReaction1,
 orangeReaction2,
 orangeReaction3,
 orangeReaction4,
 orangeReaction5,

//Nersparning av reaktionstider på rosa (#ff69b4)
 pinkReaction1,
 pinkReaction2,
 pinkReaction3,
 pinkReaction4,
 pinkReaction5,

//Nersparning av reaktionstider på 262Hz (Middle C, C4)
 hz262Reaction1,
 hz262Reaction2,
 hz262Reaction3,
 hz262Reaction4,
 hz262Reaction5,

//Nersparning av reaktionstider på 1047Hz (C6)
 hz1047Reaction1,
 hz1047Reaction2,
 hz1047Reaction3,
 hz1047Reaction4,
 hz1047Reaction5,

//Nersparning av reaktionstider på 4186Hz (Highest C, C8)
 hz4186Reaction1,
 hz4186Reaction2,
 hz4186Reaction3,
 hz4186Reaction4,
 hz4186Reaction5;


//Variabler till nödvändiga element
var firstPage = document.getElementsByClassName("firstpage")[0];
var nameInput = document.getElementById("nameinput");
var ageInput = document.getElementById("agecollection")
var genderInput = document.getElementById("gendercollection")

var infoCollection = document.getElementsByClassName("infocollection")[0];
var infoSubmit = infoCollection.getElementsByTagName("button")[0];

var reaction = document.getElementsByClassName("reaction")[0];
var reactionStart = reaction.getElementsByTagName("button")[0];

var wait = document.getElementsByClassName("wait")[0];

var tap = document.getElementsByClassName("tap")[0];

var tooFast = document.getElementsByClassName("toofast")[0];
var tooFastBtn = tooFast.getElementsByTagName("button")[0]; 

var result = document.getElementsByClassName("result")[0];
var resultBtn = result.getElementsByTagName("button")[0];
var resultF = result.getElementsByTagName("res")[0];

//onclick handler functions
function firstPageToInfo() {
  window.location.href = "/info.html";
}

function infoToFirstPage() {
  window.location.href  = "/index.html";
}

function submitInfo() {
  if(document.forms[0].nameinput.value === ""){
    alert("Please fill out the information requested.");
    console.log("error: 1");

  } 
  else if(document.forms[1].ageinput.value === "Default") {
    alert("Please fill out the information requested2");
    console.log("error: 2");
  }
  else if(document.forms[2].genderinput.value === "Default") {
    alert("Please fill out the information requested3");
    console.log("error: 3");
  }

  else {
    reactant = nameinput;
    age = ageInput;
    biologicalSex = genderInput;
    console.log("submit sucess");
    window.location.href = "/reactionlearn.html";
  }
}

//mobile detection
if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    // true for mobile device
    device = "mobil";
  } else {
    // false for not mobile device
    device = "inte_mobil";
  }

//grafer

TESTER = document.getElementById('tester');

Plotly.plot( TESTER, [{
    x: [1, 2, 3, 4, 5],
    y: [1, 2, 4, 8, 16] }], { 
    margin: { t: 0 } }, {showSendToCloud:true} );

/* Current Plotly.js version */
console.log( Plotly.BUILD );

//spara data
function savetosheet(){
  const data = [
    {
      Enhet: device,
      Namn: reactant,
      Age: age,
      Gender: biologicalSex,

      redReaction1: redReaction1,
      redReaction2: redReaction2,
      redReaction3: redReaction3,
      redReaction4: redReaction4,
      redReaction5: redReaction5,

      yellowReaction1: yellowReaction1,
      yellowReaction2: yellowReaction2,
      yellowReaction3: yellowReaction3,
      yellowReaction4: yellowReaction4,
      yellowReaction5: yellowReaction5,

      blueReaction1: blueReaction1,
      blueReaction2: blueReaction2,
      blueReaction3: blueReaction3,
      blueReaction4: blueReaction4,
      blueReaction5: blueReaction5,

      orangeReaction1: orangeReaction1,
      orangeReaction2: orangeReaction2,
      orangeReaction3: orangeReaction3,
      orangeReaction4: orangeReaction4,
      orangeReaction5: orangeReaction5,

      pinkReaction1: pinkReaction1,
      pinkReaction2: pinkReaction2,
      pinkReaction3: pinkReaction3,
      pinkReaction4: pinkReaction4,
      pinkReaction5: pinkReaction5,

      hz262Reaction1: hz262Reaction1,
      hz262Reaction2: hz262Reaction2,
      hz262Reaction3: hz262Reaction3,
      hz262Reaction4: hz262Reaction4,
      hz262Reaction5: hz262Reaction5,

      hz1047Reaction1: hz1047Reaction1,
      hz1047Reaction2: hz1047Reaction2,
      hz1047Reaction3: hz1047Reaction3,
      hz1047Reaction4: hz1047Reaction4,
      hz1047Reaction5: hz1047Reaction5,

      hz4186Reaction1: hz4186Reaction1,
      hz4186Reaction2: hz4186Reaction2,
      hz4186Reaction3: hz4186Reaction3,
      hz4186Reaction4: hz4186Reaction4,
      hz4186Reaction5: hz4186Reaction5,
    },
  ];
  fetch(
    "https://sheet.best/api/sheets/4c7bc0a8-4d1b-4158-a846-ca29ccb092bf/tabs/Main" +
      page +
      "",
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
      showelement("endtryagaingroup");
      showelement("instructions");
      hideelement("Lives");
      document.getElementById("instructions").innerHTML =
        "Du fick <b>" + score + "</b> poäng";
    })
    .catch((error) => {
      // Errors are reported there
      console.log(error);
    });
}
