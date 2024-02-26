import React, { useState } from 'react';
import './TodoList.css';

const TodoList = () => {
  //store the list of tasks and the input value
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  //Event handler for input change
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  //form submission eventhandler
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };
  //event handler for delete
  const handleDelete = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };
  //get the components
  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Add a task"
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo,index)=>(
          <li key={index}>
            {todo}
            <button onClick={()=>handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;