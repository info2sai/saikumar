// write a javascript program to capitalize your first letter

function capital_letter(str)
{
    str= str.split(" ");

    for(let i=0,x=str.length;i<x;i++){
        str[i]=str[i][0].toUpperCase() + str[i].substr(1);

    }
    return str.join(" ")
    
 }
 console.log(capital_letter("let's learn Full stack python course together!!"));