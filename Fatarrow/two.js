// Optional parantheses for the single parammeter

// var num = x =>{
//     console.log(x);
// }
// num(140);
// function display() {
//     console.log(this.name);
//   }
  
//   display();
  /*
  Object [global] {
    global: [Circular],
    clearInterval: [Function: clearInterval],
    clearTimeout: [Function: clearTimeout],  
    setInterval: [Function: setInterval],    
    setTimeout: [Function: setTimeout] {
      [Symbol(nodejs.util.promisify.custom)]: [Function]
    },
    queueMicrotask: [Function: queueMicrotask],
    clearImmediate: [Function: clearImmediate],
    setImmediate: [Function: setImmediate] {
      [Symbol(nodejs.util.promisify.custom)]: [Function]
    }
  }
  */

//   function add() {
//     console.log("Addition");
//   }
//   add();
  
//   function add() {
//     console.log("Sub");
//   }
//   add();


let display = () => {
    console.log(this);
  };
  display();