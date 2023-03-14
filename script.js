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

function factorial(n){
    if(n==1){
        return n
    } else {
        return n * factorial(n-1)
    }
}

function fibonacci(n){
    if(n<=1){
        return n
    } else {
        return fibonacci(n-1) + fibonacci(n-2)
    }
}

let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
};

function printList(list){
    console.log(list.value)
    if(list.next){
        printList(list.next)
    }
}

function reverseList(list){
    if(list.next){
        reverseList(list.next);
    }
      alert(list.value);
}

printList(list)
reverseList(list)

let x = sumToLoop(10)
let y = sumToRecursion(10)
let z = arithProgress(10)
console.log(x)
console.log(y)
console.log(z)
console.log(factorial(20))
console.log(fibonacci(3))