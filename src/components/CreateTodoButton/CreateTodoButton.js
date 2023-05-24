import './CreateTodoButton.css';

function CreateTodoButton() {
  const createTodo = (e) => {
    console.log(e.target);
  };
  return (
    <button className="CreateTodoButton" onClick={(event) => createTodo(event)}>+</button>
  );
}

export { CreateTodoButton };