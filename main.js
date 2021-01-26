//1
// let myBody = document.getElementsByTagName('body')[0];
let myBody = document.body;

//2
let firstElement = myBody.firstElementChild
console.log(firstElement);

//3 
let last = myBody.lastChild;

console.log(last);

// 4

let myDiv = document.getElementsByTagName("div")[0];
let exo4 = myDiv.children

// exo 5
let firstLi = document.getElementsByTagName('li')[0];
let suivant = firstLi.nextElementSibling
console.log(suivant);

// 6
let precedent = suivant.previousElementSibling
console.log(precedent);
