 const letters=["a","b","c","d"];

// Con funciones por expresión
 const f=function(){
  console.log("Un Elemento.");
 }
 letters.forEach(f);

// Con funciones anónimas
letters.forEach(function() {
   console.log("Un Elemento");
 });

// Con funciones flecha
letters.forEach(()=>console.log("Un Elemento"));
