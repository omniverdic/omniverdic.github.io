/* NOTE: the attribute "dn" is used to hide an element (see CSS style declaration)
That means following: 
example.setAttribute("dn","") hides, 
example.removeAttribute("dn") shows
an element */

var timer; //Variabeln för hur lång tid innan färgskärm visas
var reaction; //Variablen för hur snabbt du lyckades reagera på färgen
var sectioncounter = 0; //Variabel för att se vilken del av sektion du är den s
var partcounter = 0;


//Användarinformation (namn, ålder och biologiskt kön)
var name;
var age;
var biologicalsex;


//Nersparning av reaktionstider på röd (#ee4117)
var redreaction1 = 0;
var redreaction2 = 0;
var redreaction3 = 0;
var redreaction4 = 0;
var redreaction5 = 0;

//Nersparning av reaktionstider på gul (#fcf60a)
var yellowreaction1 = 0;
var yellowreaction2 = 0;
var yellowreaction3 = 0;
var yellowreaction4 = 0;
var yellowreaction5 = 0;

//Nersparning av reaktionstider på blå (#0267ad)
var bluereaction1 = 0;
var bluereaction2 = 0;
var bluereaction3 = 0;
var bluereaction4 = 0;
var bluereaction5 = 0;

//Nersparning av reaktionstider på orange (#e17000)
var orangereaction1 = 0;
var orangereaction2 = 0;
var orangereaction3 = 0;
var orangereaction4 = 0;
var orangereaction5 = 0;

//Nersparning av reaktionstider på rosa (#ff69b4)
var pinkreaction1 = 0;
var pinkreaction2 = 0;
var pinkreaction3 = 0;
var pinkreaction4 = 0;
var pinkreaction5 = 0;

//Nersparning av reaktionstider på 262Hz (Middle C, C4)
var hz262reaction1 = 0;
var hz262reaction2 = 0;
var hz262reaction3 = 0;
var hz262reaction4 = 0;
var hz262reaction5 = 0;

//Nersparning av reaktionstider på 1047Hz (C6)
var hz1047reaction1 = 0;
var hz1047reaction2 = 0;
var hz1047reaction3 = 0;
var hz1047reaction4 = 0;
var hz1047reaction5 = 0;

//Nersparning av reaktionstider på 4186Hz (Highest C, C8)
var hz4186reaction1 = 0;
var hz4186reaction2 = 0;
var hz4186reaction3 = 0;
var hz4186reaction4 = 0;
var hz4186reaction5 = 0;


//Variabler till nödvändiga element
var firstpage = document.getElementsByClassName("firstpage")[0];
var toinfocollection = firstpage.getElementsByTagName("button")[0];

var infocollection = document.getElementsByClassName("infocollection")[0];
var infosubmit = infocollection.getElementsByTagName("button")[0];

var entire = document.getElementsByClassName("entire")[0];
var entirebtn = entire.getElementsByTagName("button")[0];

var wait = document.getElementsByClassName("wait")[0];

var tap = document.getElementsByClassName("tap")[0];

var toofast = document.getElementsByClassName("toofast")[0];
var toofastbtn = toofast.getElementsByTagName("button")[0]; 

var result = document.getElementsByClassName("result")[0];
var resultbtn = result.getElementsByTagName("button")[0];
var resultf = result.getElementsByTagName("res")[0];

//onclick handler functions
function firstPageToInfo() {
    firstpage.setAttribute("dn","");
    infocollection.removeAttribute("dn");
}

function infoToFirstPage() {
    infocollection.setAttribute("dn", "");
    firstpage.removeAttribute("dn");
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