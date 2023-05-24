import './TodoItem.css';

function TodoItem(props) {
  return (
    <li className="todo-item">
      <button
        onClick={props.onComplete}
        className={`check ${props.completed && "check--active"}`}>
        </button>
      <p>{props.text}</p>
      <button onClick={props.onDelete} className="close-item"></button>
    </li>
  );
}
export { TodoItem }