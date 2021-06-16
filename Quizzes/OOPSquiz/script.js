//array of questions and answers
var quesArray = [{
  ques:"Q1. Who developed object-oriented programming?",
  a:"Adele Goldberg",
  b:"Dennis Ritchie",
  c:"Alan Kay",
  d:"Andrea Ferro",
  ans:"ans3"
}, {
  ques:"Q2. Which of the following is not an OOPS concept?",
  a:"Encapsulation",
  b:"Polymorphism",
  c:"Exception",
  d:"Abstraction",
  ans:"ans3"
}, {
  ques:"Q3. Which feature of OOPS described the reusability of code?",
  a:"Abstraction",
  b:"Encapsulation",
  c:"Inheritance",
  d:"Polymorphism",
  ans:"ans3"
}, {
  ques:"Q4. A single program of OOPS contains _______ classes?",
  a:"Only 1",
  b:"Only 999",
  c:"Only 2",
  d:"Any number of classes",
  ans:"ans4"
}, {
  ques:"Q5. Which function best describe the concept of polymorphism in programming languages?",
a:"Class member function",
b:"Virtual function",
c:"Inline function",
d:"Undefined function",
ans:"ans2"
}, {
  ques:"Q6. What is the extra feature in classes which was not in the structures?",
  a:"Member functions",
  b:"Data members",
  c:"Public access specifiers",
  d:"Static data allowed",
  ans:"ans1"
}, {ques:"Q7. How many types of polymorphism in the C++ programming language?",
a:"0",
b:"1",
c:"2",
d:"4",
ans:"ans3"
}, {ques:"Q8. Which of the following feature is also known as run-time binding or late binding?",
a:"Dynamic typing",
b:"Dynamic loading",
c:"Dynamic binding",
d:"Data hiding",
ans:"ans3"
}, {ques:"Q9. Which member of the superclass is never accessible to the subclass?",
a:"Public",
b:"Private",
c:"Protected",
d:"All of the mentioned",
ans:"ans2"
}, {ques:"Q10. What is the size of a class?",
a:"Sum of the size of all inherited variables along with the variables of the same class",
b:"The size of the class is the largest size of the variable of the same class",
c:"Classes in the programming languages do not have any size",
d:"Sum of the size of all the variables within a class.",
ans:"ans3"
}];


var ques = document.getElementById("ques");
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3");
var opt4 = document.getElementById("opt4");
var submit = document.getElementById("submit");
var index = 0; //to refer ques numbers.

//display ques-options
loadQuestions();
function loadQuestions(){
  document.getElementById("final").classList.add("hide");
  ques.innerHTML = quesArray[index].ques;
  opt1.innerHTML = quesArray[index].a;
  opt2.innerHTML = quesArray[index].b;
  opt3.innerHTML = quesArray[index].c;
  opt4.innerHTML = quesArray[index].d;

}

//get access to all the options
var ans = document.querySelectorAll(".ans");
var final = document.querySelectorAll("#final");
//event listener for submit
submit.addEventListener("click", ()=>{
  //get the id of the option selected
  var selected = getSelectedOption();
  console.log(selected);

  //check correct or wrong
  if(selected == quesArray[index].ans) //correct answer
  correctAns();
  else{
  wrongAns();
}

  index++; //next ques
  deSelectALL();

  if(index < quesArray.length)
   loadQuestions();
  else
  {

    finalPage();
  }

});

function deSelectALL(){
  ans.forEach((currOpt) =>{
  currOpt.checked = false;}
)
};




//fun to get the id of the selected option
function getSelectedOption(){
  var option = 0;
  ans.forEach((currOpt) => {
    if(currOpt.checked){
      option = currOpt.id;
    }
  })
  if(option == 0) alert("Please select an option"); //so that it doesn't go ahead without submitting
  else return option;
}


var score =  0; //initial score
//function for correct ans

function correctAns(){
  score++;
  console.log(score);
//submit.innerHTML = "Next";
}


//function for wrong ans
function wrongAns(){
console.log(score);
//submit.innerHTML = "Next";
}

var menu = document.getElementById("scoreMenu");


function finalPage(){
  menu.innerHTML = "Score: "+score+"/"+quesArray.length;
  document.getElementById("container").classList.add("hide");
  document.getElementById("final").classList.remove("hide");
  document.getElementById("final").classList.add("showScore");

  for(var i=0;i<quesArray.length;i++){
  var p = document.createElement("p");
  p.innerHTML = quesArray[i].ques;
  p.style.color = "#000000";
  document.getElementById("final").appendChild(p);

  var li = document.createElement("li");
  var opt = quesArray[i].ans;
   if(opt == 'ans1')
   li.innerHTML = quesArray[i].a;
   else if(opt == 'ans2')
   li.innerHTML = quesArray[i].b;
   else if(opt == 'ans3')
   li.innerHTML = quesArray[i].c;
   else
   li.innerHTML = quesArray[i].d;
   li.style.listStyle = "none";
li.style.color = "#022e57";
  document.getElementById("final").appendChild(li);
  }

  var br = document.createElement("br");
  document.getElementById("final").appendChild(br);
  var btn = document.createElement("button");
  btn.innerHTML = "Restart";
  btn.addEventListener("click", ()=>{
    location.reload();
  })
  btn.classList.add("btn");
  document.getElementById("final").appendChild(btn);
};
