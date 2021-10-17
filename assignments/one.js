// String.charAt(index);
// const str = 'flexiple';
// const str2 =str.charAt(0);
// console.log(str2);

//String.toUpperCase()
// const str = 'flexiple';
// const str2 = str.toUpperCase();
// console.log(str2)


//slice 
// const str = 'flexiple';
// const str2 = str.slice(1);
// console.log(str2);

// const str = 'flexiple';
// const str2 = str.charAt(0).toUpperCase() + str.slice(1);
// console.log(str2);

//Output: Flexiple

// const str = 'abc efg';
// const str2 = str.charAt(0).toUpperCase() + str.slice(1);
// console.log(str2);

//Output: Abc efg


// const str = 'i have learned something new today';

//split the above string into an array of strings 
//whenever a blank space is encountered


//capitalize the first letter of each word in a string

// const arr = str.split(" ");

//loop through each element of the array and capitalize the first letter.


// for (var i = 0; i < arr.length; i++) {
//     arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

// }

//Join all the elements of the array back into a string 
//using a blankspace as a separator 
// const str2 = arr.join(" ");
// console.log(str2);

//Outptut: I Have Learned Something New Today


function findLongestWord(str) {
    var strSplit = str.split(' ');
    var longestWord = 0;
    for(var i = 0; i < strSplit.length; i++){
      if(strSplit[i].length > longestWord){
      longestWord = strSplit[i].length;
       }
    }
    return longestWord;
  }
  findLongestWord("The quick brown fox jumped over the lazy dog");