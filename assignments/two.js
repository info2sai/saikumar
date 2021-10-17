// const str ='the quick brown fox jumped over the lazy dog';

// const longestWord = (str) => {
//     const strArray = str.split('');
//     const sortedStrArray = strArray.sort((strA , strB)=>{
//         return strB.length - strA.length;
//     }
//     );
//     return sortedStrArray[0];
// }

// console.log(longestword(str));

function findLongestWordLength(str) {
    let words = str.split(' ');
    let maxLength = 0;
  
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > maxLength) {
        maxLength = words[i].length;
      }
    }
    return maxLength;
  }
  
  
findLongestWordLength("The quick brown fox jumped over the lazy dog");

// 6