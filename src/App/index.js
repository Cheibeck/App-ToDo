
import { useLocalStorage } from './useLocalStorage';
import { AppUI } from './AppUI';
import React from 'react';

// const parsedTodos = [
//   { text: 'cortar cebolla', completed: true },
//   { text: 'Completar curso de react.js', completed: false },
//   { text: 'llorar con la llorona', completed: false },
//   { text: 'sacar basura', completed: false },
// ];
// localStorage.setItem('TODOS_V1', JSON.stringify(parsedTodos));


// funcion ppal APP
function App() {
  
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
  
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
  
  return (
    <AppUI
    completeTodo={completeTodo}
    deleteTodo={deleteTodo}
    totalTodos={totalTodos}
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    searchedTodos={searchedTodos}
    completedTodos={completedTodos}
    />
  )
}

export default App;
