import { ReactContext } from '../ReactContext';
import React from 'react';
import './TodoCounter.css'

function TodoCounter() {
    const {
        completedTodos,
        totalTodos,
    } = React.useContext(ReactContext);
    return(
        <h1 className='TodoCounter'>
            Has completado <span>{ completedTodos }</span> de <span>{ totalTodos }</span> QueHaceres
        </h1>
    );
}
    

export { TodoCounter };