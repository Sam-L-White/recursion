function sumToLoop(n){
    let sum = 0
    for(n; n > 0; n--){
        sum += n
    }
    return sum 
}

function sumToRecursion(n){
    if(n==0){
        return n
    } else {
        return n + sumToRecursion(n-1)
    }
}

function arithProgress(n){
    return ((n * (n + 1)) / 2)

}

let x = sumToLoop(10)
let y = sumToRecursion(10)
let z = arithProgress(10)
console.log(x)
console.log(y)
console.log(z)