import React from "react";

//uso de local storage
function useLocalStorage(itemName, initialValue){
    const [item, setItem] = React.useState(initialValue);  
    //estado de error y carga
    const [loading, setLoading] = React.useState(true);  
    const [error, setError] = React.useState(false);  
    
    //efecto de carga
    React.useEffect(()=>{
      setTimeout(()=>{
        try{
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;
          if(!localStorageItem){
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue;
          }else{
            parsedItem = JSON.parse(localStorageItem);
            setItem(parsedItem);
          }
          setLoading(false);
      }catch(error){
        setLoading(false);
        setError(true);
      }
      }, 4000);
    }, []);
         
    const saveItem = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem);
    }
    return {
      item, 
      saveItem, 
      loading, 
      error,
    };
  }

  export { useLocalStorage };


// const parsedTodos = [
//   { text: 'cortar cebolla', completed: true },
//   { text: 'Completar curso de react.js', completed: false },
//   { text: 'llorar con la llorona', completed: false },
//   { text: 'sacar basura', completed: false },
// ];
// localStorage.setItem('TODOS_V1', JSON.stringify(parsedTodos));
