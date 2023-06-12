import './TodoItem.css'

function TodoItem(props) {
    return(
        <li>
            <span>v{ props.completed }</span>
            <p>{ props.text }</p>
            <span>x</span>
        </li>
    );
}

export { TodoItem };