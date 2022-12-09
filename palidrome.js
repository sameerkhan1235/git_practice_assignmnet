let string="naman"

function reverse(strin){
    let bag="";
    for(let i=string.length-1; i>=0; i--){
        bag+=string[i];
    }
return bag;
}
let reversed=reverse(string);
if(string==reversed){
    console.log("palidrome");
    
}else{
    console.log("NA");
}