import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const ReactContext = React.createContext();

function TodoProvider({ children }){
      const {
        item: todos, 
        saveItem: saveTodos,
        loading,
        error,
      } = useLocalStorage('TODOS_V1', []);
      const [openModal, setOpenModal] = React.useState(false);

      const completedTodos = todos.filter(todo => !!todo.completed).length;
      
      const totalTodos = todos.length;
    
      const [searchValue, setSearchValue] = React.useState('');
    
      const searchedTodos = todos.filter((todo) => {
        return todo.text.toLowerCase().includes(searchValue.toLowerCase());
      });
    //funcion completados
      const completeTodo = (text) => {
        const newItem = [...todos];
        const todoIndex = newItem.findIndex(
          (todo) => todo.text === text
        );
        newItem[todoIndex].completed = true;
        saveTodos(newItem);
      };
    //funcion borrar
      const deleteTodo = (text) => {
        const newItem = [...todos];
        const todoIndex = newItem.findIndex(
          (todo) => todo.text === text
        );
        newItem.splice(todoIndex, 1);
        saveTodos(newItem);
      }; 
    //crear Todo funcion
      const addTodo = (text) => {
        const newItem = [...todos];
        newItem.push({
          text,
          completed: false,
        });
        saveTodos(newItem);
      };
    return(
        <ReactContext.Provider value={{
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            loading,
            error,
            openModal,
            setOpenModal,
            addTodo,
        }}>
            {children}
        </ReactContext.Provider>
    );
}

export { ReactContext, TodoProvider };  