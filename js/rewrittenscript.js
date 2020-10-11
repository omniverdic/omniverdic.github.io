/* NOTE: the attribute "dn" is used to hide an element (see CSS style declaration)
That means following: 
example.setAttribute("dn","") hides, 
example.removeAttribute("dn") shows
an element */

var timer; //Variabeln för hur lång tid innan färgskärm visas
var reaction; //Variablen för hur snabbt du lyckades reagera på färgen

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

//Nersparning av reaktionstider på 300Hz
var hz300reaction1 = 0;
var hz300reaction2 = 0;
var hz300reaction3 = 0;
var hz300reaction4 = 0;
var hz300reaction5 = 0;

//Nersparning av reaktionstider på 700Hz
var hz700reaction1 = 0;
var hz700reaction2 = 0;
var hz700reaction3 = 0;
var hz700reaction4 = 0;
var hz700reaction5 = 0;

//Nersparning av reaktionstider på 2000Hz
var hz2000reaction1 = 0;
var hz2000reaction2 = 0;
var hz2000reaction3 = 0;
var hz2000reaction4 = 0;
var hz2000reaction5 = 0;


//Variabler till nödvändiga element
