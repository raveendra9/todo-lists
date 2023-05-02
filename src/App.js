import React, {useState} from 'react';
import TodoList from './components/TodoList';


const App = () => {
  const[task,setTask] = useState("");
  const[todos,setTodos] = useState([]);

  const changeHandler = e => {
      setTask(e.target.value)
  }

  const submitHandler = e => {
      e.preventDefault();
      const newTodos = [...todos,task];
      setTodos(newTodos);
      setTask("");
  }

  const deleteHandler = (indexValue) => {
    const newTodos = todos.filter((todo,index) => index !== indexValue);
    setTodos(newTodos);
  }

  return (
  <div className="box">
    <center>
      <div classname="text-end">
      <h1>Todo-List</h1>
    </div>
    <div>
      <form onSubmit = {submitHandler}>
      <input type="text" name="task"  value={task} onChange={changeHandler}/> &nbsp;&nbsp;
      <button classname= "btn-addTodo" type="submit" name="addTodo">Add Button</button> 
      </form>
      <TodoList todolist={todos} deleteHandler = {deleteHandler}/>
    </div>
    </center>
  </div>
);
}

export default App;