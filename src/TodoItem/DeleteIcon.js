import React from "react";
import { FaTimes } from "react-icons/fa";

function DeleteIcon(props){
    const {className, onClick} = props
    return(
        < FaTimes
            className={className}
            onClick={onClick}
        />
    );
}

export { DeleteIcon };