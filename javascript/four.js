//what is truthy and falsy values in javascript
//we total 5 falsy values in javascript
//0,"",undefined,null,NaN,false** is false anyway
// if (score = 10){
//     console.log("omg, we loss the game");
// }else{
// console.log("yay, we won the game");
// }
 

//2.conditional (ternary) operator
//the conditional(ternary) operator is the only javascript operator
//that takes three operands

var age = 17;
if (age >= 18){ 
    console.log("you are eligible to vote");
}else{
    console.log("you are not eligible to vote"); 
}

var age = 17;

console.log((age >= 18)? "you can vote" : "you can't vote")