import React from 'react';
import { ReactContext } from '../ReactContext';
import './TodoSearch.css'


function TodoSearch(){
    const {
        searchValue,
        setSearchValue,
    } = React.useContext(ReactContext);
    return(
       <input 
            className='TodoSearch' 
            placeholder="Buscar QueHaceres"
            value={searchValue}
            onChange={(event)=>{
                setSearchValue(event.target.value);
            }}
       >
       </input>
    );
}

export { TodoSearch };