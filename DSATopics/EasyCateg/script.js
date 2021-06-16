var EasyQuesList = [{
  ques:"Q. Reverse the array",
  link:"https://www.geeksforgeeks.org/write-a-program-to-reverse-an-array-or-string/"
}, {
  ques:"Q. Find the maximum and minimum element in an array",
  link:"https://www.geeksforgeeks.org/maximum-and-minimum-in-an-array/"

}, {
  ques:"Q. Find the Kth max and min element of an array",
  link:"https://practice.geeksforgeeks.org/problems/kth-smallest-element/0"
}, {
  ques:"Q.Given an array which consists of only 0, 1 and 2. Sort the array without using any sorting algo",
  link:"https://practice.geeksforgeeks.org/problems/sort-an-array-of-0s-1s-and-2s/0"
}, {
  ques:"Q. Move all the negative elements to one side of the array",
  link:"https://www.geeksforgeeks.org/move-negative-numbers-beginning-positive-end-constant-extra-space/"
}, {
  ques:"Q. Find the Union of the two sorted arrays.",
  link:"https://practice.geeksforgeeks.org/problems/union-of-two-arrays/0"
}, {
  ques:"Q. Write a program to cyclically rotate an array by one.",
  link:"https://practice.geeksforgeeks.org/problems/cyclically-rotate-an-array-by-one/0"
}, {
  ques:"Q. find Largest sum contiguous Subarray ",
  link:"https://practice.geeksforgeeks.org/problems/kadanes-algorithm/0"
}, {
  ques:"Q. Reverse a String",
  link:"https://leetcode.com/problems/reverse-string/"

}, {
  ques:"Q. Check whether a String is Palindrome or not",
  link:"https://practice.geeksforgeeks.org/problems/palindrome-string0817/1"
}, {
  ques:"Q. Find Duplicate characters in a string",
  link:"https://www.geeksforgeeks.org/print-all-the-duplicates-in-the-input-string/"
}, {
  ques:"Q.Write a Code to check whether one string is a rotation of another",
  link:"https://www.geeksforgeeks.org/a-program-to-check-if-strings-are-rotations-of-each-other/"
}, {
  ques:"Q. Write a Program to check whether a string is a valid shuffle of two strings or not",
  link:"https://www.programiz.com/java-programming/examples/check-valid-shuffle-of-strings"
}, {
  ques:"Q. Reverse a Linked List in group of Given Size ",
  link:"https://practice.geeksforgeeks.org/problems/reverse-a-linked-list-in-groups-of-given-size/1"
}, {
  ques:"Q. Write a Program to reverse the Linked List.",
  link:"https://www.geeksforgeeks.org/reverse-a-linked-list/"
}, {
  ques:"Q. Write a program to Detect loop in a linked list.",
  link:"https://practice.geeksforgeeks.org/problems/detect-loop-in-linked-list/1"
},{
  ques:"Q. Write a program to Delete loop in a linked list.",
  link:"https://practice.geeksforgeeks.org/problems/remove-loop-in-linked-list/1"
},{
  ques:"Q. Find the starting point of the loop.",
  link:"https://www.geeksforgeeks.org/find-first-node-of-loop-in-a-linked-list/"
},{
  ques:"Q. Remove Duplicates in a sorted Linked List.",
  link:"https://practice.geeksforgeeks.org/problems/remove-duplicate-element-from-sorted-linked-list/1"
},{
  ques:"Q. Remove Duplicates in a Un-sorted Linked List.",
  link:"https://practice.geeksforgeeks.org/problems/remove-duplicates-from-an-unsorted-linked-list/1"
},{
  ques:"Q. Write a Program to Move the last element to Front in a Linked List.",
  link:"https://www.geeksforgeeks.org/move-last-element-to-front-of-a-given-linked-list/"
},{
  ques:"Q. Mirror of a tree",
  link:"https://www.geeksforgeeks.org/create-a-mirror-tree-from-the-given-binary-tree/"

},{ques:"Q. Height of a tree",
link:"https://practice.geeksforgeeks.org/problems/height-of-binary-tree/1"
}];

var x = document.getElementById("quesEasy");
var index = Math.floor(Math.random()*22) + 1;
x.innerHTML = EasyQuesList[index].ques;
var path = document.createElement("a");
path.setAttribute("href", EasyQuesList[index].link);
path.innerHTML = "Solve";
document.getElementById("quesLink").appendChild(path);

var btn = document.getElementById("button");
btn.addEventListener('click', ()=>{
  location.reload()
});
