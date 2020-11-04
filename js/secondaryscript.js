/* NOTE: the attribute "dn" is used to hide an element (see CSS style declaration)
That means following: 
    example.setAttribute("dn","") hides, 
    example.removeAttribute("dn") shows
an element */

var timer; // stores timeout of waiting time
var reaction; // stores time it took you to react on green color
var highscore = 0; // stores your personal highscore
var init = true; // controls if codes executes first time


window.onload=()=>{ // fires when all elements have been initialized


    // Get required elements 

    var reactionLearn = document.getElementsByClassName("reactionlearn")[0];
    var reactionLearnBtn = reactionLearn.getElementsByTagName("button")[0];
    
    var wait = document.getElementsByClassName("wait")[0];
    
    var tap = document.getElementsByClassName("tap")[0];
    
    var toofast = document.getElementsByClassName("toofast")[0];
    var toofastbtn = toofast.getElementsByTagName("button")[0];
    
    var result = document.getElementsByClassName("result")[0];
    var resultbtn = result.getElementsByTagName("button")[0];
    var resultf = result.getElementsByTagName("res")[0];
    
    // set onclick handlers 
    reactionLearnBtn.onclick=()=>{
      reactionLearn.setAttribute("dn","");
      wait.removeAttribute("dn");
      timer = setTimeout(()=>{
         wait.setAttribute("dn","");
         tap.removeAttribute("dn");
         reaction = new Date(); // start time
      },Math.floor(Math.random() * (8000 - 2000)) + 2000); //random time between 8000 and 2000 ms, 8000ms = max & 2000ms = min
      //Math.floor((Math.random() * 8) + 4)*Math.floor((Math.random() * 999) + 501)); - gammal kod
    } // setTimeout to show green screen with random waiting time
        
    wait.onclick=()=>{ // if red screen is clicked, show "too fast" screen
      clearTimeout(timer); // cancel green screen showing timeout
      wait.setAttribute("dn","");
      toofast.removeAttribute("dn");
    }
    
    tap.onclick=()=>{
      var now = new Date(); // end time
      reaction = now.getTime() - reaction.getTime(); // calculate difference of timestamps (in ms)
      tap.setAttribute("dn","");
      result.removeAttribute("dn");
      resultf.innerHTML = reaction; // write current reaction time to screen
      if(highscore>reaction||init){ // fires if current result is better (or the code executes the first time)
        highscore = reaction;
        highscoref.innerHTML = highscore; 
        result.getElementsByTagName("hs")[0].removeAttribute("dn");
      }
      init = false; // now first execution has been completed and init is false
    }

    
    function mouseDown() {
      var now = new Date(); // end time
      reaction = now.getTime() - reaction.getTime(); // calculate difference of timestamps (in ms)
      tap.setAttribute("dn","");
      result.removeAttribute("dn");
      resultf.innerHTML = reaction; // write current reaction time to screen
      if(highscore>reaction||init){ // fires if current result is better (or the code executes the first time)
        highscore = reaction;
        highscoref.innerHTML = highscore; 
        result.getElementsByTagName("hs")[0].removeAttribute("dn");
      }
      init = false;
    }

    resultbtn.onclick=()=>{
      result.setAttribute("dn","");
      if(reactionLearn.hasAttribute("dn")){
        reactionLearn.removeAttribute("dn");
      }
      result.getElementsByTagName("hs")[0].setAttribute("dn","");
    }

    toofastbtn.onclick=()=>{
      toofast.setAttribute("dn","");
      if(reactionLearn.hasAttribute("dn")){
        reactionLearn.removeAttribute("dn");
      }
    }
}