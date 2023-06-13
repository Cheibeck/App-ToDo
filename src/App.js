import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoItem } from './TodoItem';
import React from 'react';

const defaultTodos = [
  { text: 'cortar cebolla', completed: true },
  { text: 'Completar curso de react.js', completed: false },
  { text: 'llorar con la llorona', completed: false },
  { text: 'sacar basura', completed: false },
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  
  const totalTodos = todos.length;

  const [searchValue, setSearchValue] = React.useState('');

  const searchedTodos = todos.filter((todo) => {
    return todo.text.toLowerCase().includes(searchValue.toLowerCase());
  });
   
  return (
    <React.Fragment>
      
      <TodoCounter 
          completed={completedTodos} 
          total={totalTodos}
      />
      <TodoSearch 
          searchValue={searchValue}
          setSearchValue={setSearchValue}    
      />

      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem 
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />

    </React.Fragment>
  );
}

export default App;
