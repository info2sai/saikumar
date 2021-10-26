// write a javascript program to remove duplicate names

var array=['a','b','saikumar','c','a','c','d','saikumar','sai'];
for(var i=0;i<=array.length-1;i++){
    for(var j=0; j<=array.length-1;j++){
        if(i!==j){
            if(array[i]===array[j]){
                array.splice(j,1);
            }
        }
    }
}
console.log(array);