/* let fibo=[0,1];
for(let i=2; i<=6; i++){
    fibo[i]=fibo[i-1]+fibo[i-2];
} 
console.log(fibo); */

// finding specific element by recursive

/* function fibonacci(num){
    if(num==0){
        return 0;
    }
    if(num==1){
        return 1;
    }
    return fibonacci(num-1)+fibonacci(num-2);
}
console.log(fibonacci(4)); */

let fibo=[0,1]
function fibonacci(num){
    if(num==0){
        return [0];
    }
    if(num==1){
        return[0,1];
    }
    let=fibonacci(num-1);
    fibo[num]=fibo[num-1]+fibo[num-2];
    return fibo;
}
console.log(fibonacci(4));