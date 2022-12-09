function checkprime(num){
let count=0;
    for(let i=1; i<=num; i++){
        if(num%i==0){
           count++;
        }
    }
if(count==2){
return true;
}
    return false;
}

let result=checkprime(11);
if(result==true){
console.log("yes")
}else{
console.log("no")
}