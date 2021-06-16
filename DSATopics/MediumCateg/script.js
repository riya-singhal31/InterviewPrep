var MediumQuesList = [{
  ques:"Q. Minimum no. of Jumps to reach end of an array",
  link:"https://practice.geeksforgeeks.org/problems/minimum-number-of-jumps/0"
}, {
  ques:"Q. find duplicate in an array of N+1 Integers",
  link:"https://leetcode.com/problems/find-the-duplicate-number/"

}, {
  ques:"Q. Merge 2 sorted arrays without using Extra space.",
  link:"https://practice.geeksforgeeks.org/problems/merge-two-sorted-arrays5135/1"
}, {
  ques:"Q. Merge Intervals",
  link:"https://leetcode.com/problems/merge-intervals/"
}, {
  ques:"Q. Next Permutation",
  link:"https://leetcode.com/problems/next-permutation/"
}, {
  ques:"Q. Count Inversion",
  link:"https://practice.geeksforgeeks.org/problems/inversion-of-array/0"
}, {
  ques:"Q. Best time to buy and Sell stock",
  link:"https://leetcode.com/problems/best-time-to-buy-and-sell-stock/"
}, {
  ques:"Q. find all pairs on integer array whose sum is equal to given number ",
  link:"https://practice.geeksforgeeks.org/problems/count-pairs-with-given-sum5022/1"
}, {
  ques:"Q. Trapping Rain water problem",
  link:"https://practice.geeksforgeeks.org/problems/trapping-rain-water/0"

}, {
  ques:"Q. Minimum swaps required bring elements less equal K together",
  link:"https://practice.geeksforgeeks.org/problems/minimum-swaps-required-to-bring-all-elements-less-than-or-equal-to-k-together/0"
}, {

  ques:"Q. Minimum no. of operations required to make an array palindrome",
  link:"https://practice.geeksforgeeks.org/problems/palindromic-array/0"
}, {
  ques:"Q.Spiral traversal on a Matrix",
  link:"https://practice.geeksforgeeks.org/problems/spirally-traversing-a-matrix/0"
}, {
  ques:"Q. Search an element in a matriix",
  link:"https://leetcode.com/problems/search-a-2d-matrix/"
}, {
  ques:"Q. Count and Say problem",
  link:"https://leetcode.com/problems/count-and-say/"
}, {
  ques:"Q. Write a program to find the longest Palindrome in a string.[ Longest palindromic Substring]",
  link:"https://practice.geeksforgeeks.org/problems/longest-palindrome-in-a-string/0"
}, {
  ques:"Q. Find Longest Recurring Subsequence in String",
  link:"https://practice.geeksforgeeks.org/problems/longest-repeating-subsequence/0"
},{
  ques:"Q. Print all Subsequences of a string.",
  link:"https://www.geeksforgeeks.org/print-subsequences-string/"
},{
  ques:"Q.Print all the permutations of the given string",
  link:"https://practice.geeksforgeeks.org/problems/permutations-of-a-given-string/0"
},{
  ques:"Q. EDIT Distance",
  link:"https://practice.geeksforgeeks.org/problems/edit-distance3702/1"
},{
  ques:"Q. Find next greater number with same set of digits.",
  link:"https://practice.geeksforgeeks.org/problems/next-permutation/0"
},{
  ques:"Q. Balanced Parenthesis problem.",
  link:"https://practice.geeksforgeeks.org/problems/parenthesis-checker/0"
},{
  ques:"Q. Convert a Sentence into its equivalent mobile numeric keypad sequence.",
  link:"https://www.geeksforgeeks.org/convert-sentence-equivalent-mobile-numeric-keypad-sequence/"

},{ques:"Q.Longest Common Prefix",
link:"https://leetcode.com/problems/longest-common-prefix/"
},{
  ques:"Q. Add two numbers represented by linked lists.",
  link:"https://practice.geeksforgeeks.org/problems/add-two-numbers-represented-by-linked-lists/1"
},{
  ques:"Q. Find the middle Element of a linked list.",
  link:"https://leetcode.com/problems/middle-of-the-linked-list/"
},{
  ques:"Q. Flatten a Linked List",
  link:"https://practice.geeksforgeeks.org/problems/flattening-a-linked-list/1"

},{ques:"Q.Segregate even and odd nodes in a Linked List",
link:"https://practice.geeksforgeeks.org/problems/segregate-even-and-odd-nodes-in-a-linked-list/0"
}];

var x = document.getElementById("quesMedium");
var index = Math.floor(Math.random()*26) + 1;
x.innerHTML = MediumQuesList[index].ques;
var path = document.createElement("a");
path.setAttribute("href", MediumQuesList[index].link);
path.innerHTML = "Solve";
document.getElementById("quesLink").appendChild(path);


var btn = document.getElementById("button");
btn.addEventListener('click', ()=>{
  location.reload()
});
