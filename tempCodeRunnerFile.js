let fibo=[0,1];
function fibonacci(num){
    if(num=0){
        return 0;
    }
    if(num=1){
        return 1;
    }
    return fibo[num-1]+fibo[num-2];
}
console.log(fibonacci(4));