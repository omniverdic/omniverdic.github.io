/* NOTE: the attribute "dn" is used to hide an element (see CSS style declaration)
That means following: 
example.setAttribute("dn","") hides, 
example.removeAttribute("dn") shows
an element */

var timer; //Variabeln för hur lång tid innan färgskärm visas
var reactiontime; //Variablen för hur snabbt du lyckades reagera på färgen
var sectioncounter = 0; //Variabel för att se vilken del av sektion du är den s
var partcounter = 0;


//Användarinformation (namn, ålder och biologiskt kön)
var reactant;  //ändrade namnvariabel till reactant istöllet för name då name tydligen är ett reserverat ord i js.
var age;
var biologicalSex;


//Nersparning av reaktionstider på röd (#ee4117)
var redReaction1 = 0;
var redReaction2 = 0;
var redReaction3 = 0;
var redReaction4 = 0;
var redReaction5 = 0;

//Nersparning av reaktionstider på gul (#fcf60a)
var yellowReaction1 = 0;
var yellowReaction2 = 0;
var yellowReaction3 = 0;
var yellowReaction4 = 0;
var yellowReaction5 = 0;

//Nersparning av reaktionstider på blå (#0267ad)
var blueReaction1 = 0;
var blueReaction2 = 0;
var blueReaction3 = 0;
var blueReaction4 = 0;
var blueReaction5 = 0;

//Nersparning av reaktionstider på orange (#e17000)
var orangeReaction1 = 0;
var orangeReaction2 = 0;
var orangeReaction3 = 0;
var orangeReaction4 = 0;
var orangeReaction5 = 0;

//Nersparning av reaktionstider på rosa (#ff69b4)
var pinkReaction1 = 0;
var pinkReaction2 = 0;
var pinkReaction3 = 0;
var pinkReaction4 = 0;
var pinkReaction5 = 0;

//Nersparning av reaktionstider på 262Hz (Middle C, C4)
var hz262Reaction1 = 0;
var hz262Reaction2 = 0;
var hz262Reaction3 = 0;
var hz262Reaction4 = 0;
var hz262Reaction5 = 0;

//Nersparning av reaktionstider på 1047Hz (C6)
var hz1047Reaction1 = 0;
var hz1047Reaction2 = 0;
var hz1047Reaction3 = 0;
var hz1047Reaction4 = 0;
var hz1047Reaction5 = 0;

//Nersparning av reaktionstider på 4186Hz (Highest C, C8)
var hz4186Reaction1 = 0;
var hz4186Reaction2 = 0;
var hz4186Reaction3 = 0;
var hz4186Reaction4 = 0;
var hz4186Reaction5 = 0;


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