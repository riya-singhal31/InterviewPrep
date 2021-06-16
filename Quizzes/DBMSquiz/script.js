//array of questions and answers
var quesArray = [{
  ques:"Q1. Which of the following is generally used for performing tasks like creating the structure of the relations, deleting relation?",
  a:"DML(Data Manipulation Language)",
  b:"Query",
  c:"Relational Schema",
  d:"DDL(Data Definition Language)",
  ans:"ans4"
}, {
  ques:"Q2. Which of the following provides the ability to query information from the database and insert tuples into, delete tuples from, and modify tuples in the database?",
  a:"DML(Data Manipulation Language)",
  b:"Query",
  c:"Relational Schema",
  d:"DDL(Data Definition Language)",
  ans:"ans1"
}, {
  ques:"Q3. Which one of the following given statements possibly contains the error?",
  a:"select * from emp where empid = 10003;",
  b:"select empid from emp where empid = 10006;",
  c:"select empid from emp;",
  d:"select empid where empid = 1009 and Lastname = 'GELLER';",
  ans:"ans4"
}, {
  ques:"Q4.What do you mean by one to many relationships?",
  a:"One class may have many teachers",
  b:"One teacher can have many classes",
  c:"Many classes may have many teachers",
  d:"Many teachers may have many classes",
  ans:"ans2"
}, {
  ques:"Q5. A Database Management System is a type of _________software.",
a:"It is a type of system software",
b:"It is a kind of application software",
c:"It is a kind of general software",
d:"Both A and C",
ans:"ans1"
}, {
  ques:"Q6. Which of the following can be used to extract or filter the data & information from the data warehouse?",
  a:"Data redundancy",
  b:"Data recovery tool",
  c:"Data mining",
  d:"Both B and C",
  ans:"ans3"
}, {ques:"Q7. Which one of the following refers to the copies of the same data (or information) occupying the memory space at multiple places.",
a:"Data redundancy",
b:"Data Inconsistency",
c:"Data mining",
d:"Both B and C",
ans:"ans1"
}, {ques:"Q8. Which of the following refers to the level of data abstraction that describes exactly how the data actually stored?",
a:"Conceptual Level",
b:"Physical Level",
c:"File Level",
d:"Logical Level",
ans:"ans2"
}, {ques:"Q9. To which of the following the term DBA referred?",
a:"Data Bank Administrator",
b:"Database Administrator",
c:"Data Administrator",
d:"None of the mentioned",
ans:"ans2"
}, {ques:"Q10. Which one of the following is a type of Data Manipulation Command??",
a:"Create",
b:"Delete",
c:"Alter",
d:"All of the above.",
ans:"ans2"
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
