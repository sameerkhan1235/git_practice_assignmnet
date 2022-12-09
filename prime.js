function checkprime(num){
    for(let i=1; i<=num; i++){
        if(num%i){
            return true;
        }
    }
    return false;
}
checkprime(11);