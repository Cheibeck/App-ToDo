import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoItem } from '../TodoItem';
import React from 'react';

function AppUI({
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
}) {
    return(
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
                    onComplete={() => completeTodo(todo.text)}
                    onDelete={() => deleteTodo(todo.text)}
                />
                ))}
            </TodoList>

            <CreateTodoButton />

            </React.Fragment>
    );
}

export { AppUI };