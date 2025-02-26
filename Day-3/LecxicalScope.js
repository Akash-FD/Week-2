// function outer(){
//     let a =10;
    
//     function inner(){
//         console.log(a);
        
//     }
    
//    return inner()
// }
// return outer()



// -----TDZ--------

// console.log(x)
// function z(){
//     console.log("helo");
    
// }
// z()
// let x = 10;

// ---------------------

const myArr = [1, 2, [3, [4,[1,2], 5, 6], 7], 8];

const newArr = myArr.flat(Infinity);
console.log(newArr);
