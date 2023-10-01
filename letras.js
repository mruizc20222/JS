 const letters=['a','b','c','d','e'];

 const f=function(){
  console.log("un elemento.");
 }
 letters.forEach(f);



 letters.forEach(function() {
    console.log("un elemento");
 })

 letters.forEach(()=>console.log("un elemento"));
