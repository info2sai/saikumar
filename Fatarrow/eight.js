//ES5
// function show(value){
//     return value/2;
// }
// console.log(show);

//ES6
// var show=value=>value/2;
// console.log(show(100));

//without return keyword
var show = value =>{
    value/2

}
console.log(show(50));
// o/p = undefined

//with return statement
var show = value =>{
    return value/2
}
console.log(show(50));