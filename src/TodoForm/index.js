import React from "react";
import './TodoForm.css';
import { ReactContext } from '../ReactContext';

function TodoForm(){
    const {
        setOpenModal,
        addTodo,
    } = React.useContext(ReactContext);
    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }
    const onCancel = (event) => {
        setOpenModal(false);
    }
    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }
    return(
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo QueHacer</label>
            <textarea placeholder="cortar cebolla"
                    value={newTodoValue}
                    onChange={onChange} />
            
            <div className="TodoForm-buttonContainer">
                <button 
                    type="button"
                    className="TodoForm-button TodoForm-button--cancel"
                    onClick={onCancel}
                    >cancelar
                </button>            
                <button 
                    type="submit"
                    className="TodoForm-button TodoForm-button--add"
                    >añadir
                </button>
            </div>            
        </form>
    );
}

export { TodoForm };