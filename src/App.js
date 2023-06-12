import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoItem } from './TodoItem';
import React from 'react';

const defaultTodos = [
  { text: 'cortar cebolla', completed: false },
  { text: 'completar curso de reac.js', completed: false },
  { text: 'llorar con la llorona', completed: false },
  { text: 'sacar basura', completed: false },
];

function App() {
  return (
    <React.Fragment>
      
      <TodoCounter completed={16} total={26}/>
      <TodoSearch />

      <TodoList>
        {defaultTodos.map(todo => (
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
