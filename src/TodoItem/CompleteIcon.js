import React from "react";
import { FaCheckCircle } from "react-icons/fa";

function CompleteIcon(props){
    const {className, onClick} = props
    return (
        <FaCheckCircle
            className={className}
            onClick={onClick}
        />
  )
}

export { CompleteIcon };