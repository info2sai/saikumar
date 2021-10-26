let num1=1, num2=270, num3=15
if (num1>num2&&num1>num3) {
 if (num2>num3) {
    console.log("descending numbers are "+num1,num2,num3); 
}
else{
    console.log("descending numbers are "+num1,num3,num2)
}
}
if (num2>num3&&num2>num1) {
    if (num1>num3) {
        console.log("descending numbers are "+num2,num1,num3);
    }
    else{
        console.log("descending numbers are "+num2,num3,num1);
    }
}
if (num3>num1&&num3>num2) {
    if (num2>num1) {
         console.log("descending numbers are "+num3,num2,num1);
     }
     else{
         console.log("descending numbers are "+num3,num1,num2);
     }
 }