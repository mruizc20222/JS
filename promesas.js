//Palabras claves: Async, promises, await, fetch, api, endpoint,request
    // DEF
    async function obtenerProductos(){
      try{
        const response = await fetch('https://fakestoreapi.com/products');
        if(!response){ // si no hay respuesta
          console.log("error en el request o solicitud al api")
          throw new Error('Error al obtener productos')
        }
        const data = await response.json();
        console.log(data);
      }catch(error){ 
        console.log(error);
      }
    }
    // EXEC
    obtenerProductos()
