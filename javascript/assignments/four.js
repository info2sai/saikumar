// write a javascript program to find the longest word

function longest_word(str){
    var words= str.split(" ");
    var longest="";
    for(word of words){
        if(word.length >longest.length){
            longest=word;
        }

    }
    return longest
}
console.log(longest_word("write a javascript programe to find the longest word")); 