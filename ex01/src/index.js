function main (numOne, numTwo){
    var quotient;
    if (numTwo==0){
        quotient= "Devide by 0! cannot divide by zero!";
    } else{
        //Only change code below this line
var quotient=numOne/numTwo;
        //Only change code above this line 
    }
    return quotient;
}
console.log(main(15, 3));
console.log(main(25, 5));
console.log(main(420, 10));
console.log(main(50, 0));
module.exports=main;

