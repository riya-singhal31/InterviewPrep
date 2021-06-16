var HardQuesList = [{
  ques:"Q. level order traversal",
  link:"https://practice.geeksforgeeks.org/problems/level-order-traversal/1"
}, {
  ques:"Q. Coin ChangeProblem",
  link:"https://practice.geeksforgeeks.org/problems/coin-change2448/1"

}, {
  ques:"Q. Knapsack Problem",
  link:"https://practice.geeksforgeeks.org/problems/0-1-knapsack-problem/0"
}, {
  ques:"Q. Subset Sum Problem",
  link:"https://practice.geeksforgeeks.org/problems/subset-sum-problem2014/1"
}, {
  ques:"Q. Maximize The Cut Segments",
  link:"https://practice.geeksforgeeks.org/problems/cutted-segments/0"
}, {
  ques:"Q. Longest Common Subsequence",
  link:"https://practice.geeksforgeeks.org/problems/longest-common-subsequence/0"
}, {
  ques:"Q.Longest Repeated Subsequence",
  link:"https://practice.geeksforgeeks.org/problems/longest-repeating-subsequence/0"
}, {
  ques:"Q. Longest Increasing Subsequence ",
  link:"https://practice.geeksforgeeks.org/problems/longest-increasing-subsequence/0"
}, {
  ques:"Q.LCS (Longest Common Subsequence) of three strings",
  link:"https://practice.geeksforgeeks.org/problems/lcs-of-three-strings/0"

}, {
  ques:"Q. Partition problem",
  link:"https://practice.geeksforgeeks.org/problems/subset-sum-problem2014/1"
}, {

  ques:"Q. Longest Palindromic Subsequence",
  link:"https://www.geeksforgeeks.org/longest-palindromic-subsequence-dp-12/"
}, {
  ques:"Q.Merge Overlapping Intervals",
  link:"https://practice.geeksforgeeks.org/problems/overlapping-intervals/0"
}];

var x = document.getElementById("quesHard");
var index = Math.floor(Math.random()*11) + 1;
x.innerHTML = HardQuesList[index].ques;
var path = document.createElement("a");
path.setAttribute("href", HardQuesList[index].link);
path.innerHTML = "Solve";
document.getElementById("quesLink").appendChild(path);


var btn = document.getElementById("button");
btn.addEventListener('click', ()=>{
  location.reload()
});
