// -----------Map--------------

// it holds the key and value pairs

const fruits = new Map([              // create with Map
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);

  fruits.set("graps",100)         // set value with set method
  console.log(fruits);

  console.log(fruits.get("apples"))           // get 
  
  console.log(typeof fruits)

  console.log(fruits instanceof Map);
  

  // --------Diffrencce between Map and object--------

  // Map
  // - Directly iterable
  // - Have a size property
  // - Keys can be any datatype
  // - Keys are ordered by insertion
  // - Do not have default keys

  // Object
  // - Not directly iterable
  // - Do not have a size property
  // - Keys must be Strings (or Symbols)
  // - Keys are not well ordered	
  // - Have default keys

  // -------- Size ------------

  console.log(fruits.size)

  // -------Delete ---------

  fruits.delete("oranges")
  console.log(fruits);

  // --------------------
  const fruits4 = new Map()
  fruits4.set("apple")
 console.log(fruits4);
 console.log(fruits4);

 const letter4 = new Set([["Apple", 500],["orange", 200]])
 letter4.add(5)
 console.log(letter4);
 
 
 


// ------- Set ----------

// const letters = new Set(["a","b","c"]);

// letters.add("d")
// console.log(letters);

// //
// const letters2 = new Set();
// const a = [1,2,3,4];
// const b = true;
// const c = "c";
// letters2.add(a);
// letters2.add(b);
// letters2.add(c);
// console.log(letters2);


// const letters3 = new Set([10,20,30]);

// console.log(typeof letters3);


// function func1(a, b, c) {
//     console.log(arguments);
//     // Expected output: 1
  
//     console.log(arguments[1]);
//     // Expected output: 2
  
//     console.log(arguments[2]);
//     // Expected output: 3
//   }
  
//   func1(1, 2, 3);



