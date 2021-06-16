//+ - features

//alert("h");
var splus = document.getElementById("splus");
var sminus = document.getElementById("sminus");
var bplus = document.getElementById("bplus");
var bminus = document.getElementById("bminus");

var sessionTime = 0, breakTime = 0;
//event listeners on + -
splus.addEventListener('click', ()=>{
  sessionTime++;
  //increase session time
  document.getElementById('stime').innerHTML = sessionTime;
});

bplus.addEventListener('click', ()=>{
  breakTime++;
  //increase break time
  document.getElementById('btime').innerHTML = breakTime;
});

sminus.addEventListener('click', ()=>{
  //decrease session time
  if(sessionTime > 0 ) sessionTime--;
  else sessionTime = 0;
  document.getElementById('stime').innerHTML = sessionTime;
});

bminus.addEventListener('click', ()=>{
  //decrease break time
  if(breakTime > 0) breakTime--;
  else breakTime = 0;
  document.getElementById('btime').innerHTML = breakTime;
});




//start session on clicking Start
var startBtn = document.getElementById("start");
startBtn.addEventListener('click', startSession);

var totalSessionTime = 0;
var totalBreakTime = 0;
var sessionInterval, breakInterval;
function startSession(){
  //disabled the buttons during the session.
  splus.disabled = true;
  bplus.disabled = true;
  sminus.disabled = true;
  bminus.disabled = true;
  startBtn.disabled = true;
  document.getElementById("bminus").classList.add("disable");
  document.getElementById("sminus").classList.add("disable");
  document.getElementById("bplus").classList.add("disable");
  document.getElementById("splus").classList.add("disable");
document.getElementById("start").classList.add("disable");



  //calculate total session time

  //if it is an actual start and not resume.else it will be carried with that time only.
  if(totalSessionTime == 0 && totalBreakTime == 0)
  {
    totalSessionTime = sessionTime*60;
  }

  //now i want the timer to run till it hits 0 and then we will start break timer.
  sessionInterval = setInterval(function(){
    if(totalSessionTime > 0){
      var min = parseInt(totalSessionTime/60);
      if(min < 10) min = "0" + min;

      var sec = parseInt(totalSessionTime%60);
      if(sec<10) sec = "0"+sec;

      document.getElementById("timer").innerHTML = min + ":" + sec;

      totalSessionTime--;
    }
    else{
      clearInterval(sessionInterval);
     alert("Congrats!! Session completed. Enjoy Break..");
     //enable the buttons back
     splus.disabled = false;
     bplus.disabled = false;
     sminus.disabled = false;
     bminus.disabled = false;
     startBtn.disabled = false;
     document.getElementById("bminus").classList.remove("disable");
     document.getElementById("sminus").classList.remove("disable");
     document.getElementById("bplus").classList.remove("disable");
     document.getElementById("splus").classList.remove("disable");
     document.getElementById("start").classList.remove("disable");

      breakSession();
    }
  }, 1000)


}

//function to start break timer : it starts when current session ends

function breakSession(){
  if( totalBreakTime == 0)
  {
    totalBreakTime = breakTime*60;
  }


   breakInterval = setInterval(function(){
    if(totalBreakTime > 0){
      var min = parseInt(totalBreakTime/60);
      if(min < 10) min = "0" + min;

      var sec = parseInt(totalBreakTime%60);
      if(sec<10) sec = "0"+sec;

      document.getElementById("timer").innerHTML = min + ":" + sec;

      totalBreakTime--;
    }
    else{
      clearInterval(breakInterval);
      resetSession();
    }
  }, 1000)

}

var resetBtn = document.getElementById("reset");
resetBtn.addEventListener('click', resetSession);


function resetSession(){
  //all the default values.
  splus.disabled = false;
  bplus.disabled = false;
  sminus.disabled = false;
  bminus.disabled = false;
  startBtn.disabled = false;
  document.getElementById("bminus").classList.remove("disable");
  document.getElementById("sminus").classList.remove("disable");
  document.getElementById("bplus").classList.remove("disable");
  document.getElementById("splus").classList.remove("disable");
  document.getElementById("start").classList.remove("disable");
  sessionTime = 0;
  breakTime = 0;
  totalSessionTime = 0;
  totalBreakTime = 0;
  document.getElementById('stime').innerHTML = '0';
  document.getElementById('btime').innerHTML = '0';
  document.getElementById('timer').innerHTML = '00:00';
}

var pauseBtn = document.getElementById("pause");
pauseBtn.addEventListener('click', pauseSession);

function pauseSession(){
  startBtn.disabled = false;
  document.getElementById("start").classList.remove("disable");
  clearInterval(sessionInterval);
  clearInterval(breakInterval);
}
