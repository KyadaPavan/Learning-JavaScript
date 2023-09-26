
// map 

const a = [1,8,6,3,5,4,10];
let b = a.map((value)=>{
    return value + 1;
    
})

console.log(b);

// filter

let c = a.filter((func)=>{
    if(func%10 == 0 ){
        return func
    }
    
})
console.log(c);

// reduce

let d = a.reduce((mult1 , mult2)=>{
    return mult1 + mult2;
})
console.log(d);
