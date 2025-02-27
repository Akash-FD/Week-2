
// --------------Shallow copy-------------------

// when we copy the reference of an object to a new variable.

// Shallow copy: means that only the first level of the object is copied. Deeper levels are referenced.

 const obj1 = {username:"ak",city:{ahemedabad:{west:"maninagar", east:"gota"}}}

 const shallow1 = {...obj1} 
 const shallow2 = Object.assign({}, obj1)

 shallow1.username = "biku"
 shallow1.city.ahemedabad.east = "nikol"

 shallow2.username = "biku"
 shallow2.city.ahemedabad.west = "sindhu bhavan"

 console.log(obj1);
 console.log(shallow1);
 console.log(shallow2);
  
 
// -------------Deep copy ---------------------

// 

const obj2 = {username:"ak",city:{ahemedabad:"thaltej"}}

 const deep1 = JSON.parse(JSON.stringify(obj2))


 deep1.username = "biku"
 deep1.city.ahemedabad = "sindhu bhavan"

 console.log(obj2);
 console.log(deep1);
 
 






  