import { React, useState, useEffect } from "react";
import TodoCard from "./TodoCard";

export default function Todos() {
  const [todos, setTodos] = useState({
    todotext: "",
    tododate: "",
  });
  const [finaltodo, setFinal] = useState([]);
  const [editIndex, setEdit] = useState(null);
  const [timeStamp, setTime] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTodos({ ...todos, [name]: value });
  };

  // Load saved todos from localStorage
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) {
      setFinal(storedTodos);
    }
  }, []); 

  // Save todos to localStorage whenever finaltodo changes
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(finaltodo));
  }, [finaltodo]);

  // Set values for editing a todo
  useEffect(() => {
    if (editIndex !== null) {
      setTodos(finaltodo[editIndex]);
    }
  }, [editIndex, finaltodo]);

  // Add or edit a todo
  const addTodo = (e) => {
    e.preventDefault();
    if (todos.todotext.trim() && todos.tododate.trim()) {
      const time = new Date().toLocaleTimeString();
      setTime(time);
      
      if (editIndex === null) {
        setFinal([...finaltodo, { ...todos, createdAt: time }]);
      } else {
        const updatedValue = finaltodo.map((item, index) =>
          index === editIndex ? { ...todos, createdAt: time } : item
        );
        setFinal(updatedValue);
        setEdit(null);
      }

      // Clear input fields after adding/editing
      setTodos({ todotext: "", tododate: "" });
    }
  };

  // Handle deletion of a todo
  const handleDelete = (e, index) => {
    e.preventDefault();
    const newTodo = finaltodo.filter((_, idx) => idx !== index);
    setFinal(newTodo);
  };

  // Handle editing of a todo
  const handleEdit = (e, index) => {
    e.preventDefault();
    setEdit(index);
  };

  return (
    <div className="main-container">
      <div className="todobox">
        <div className="todo-input">
          <input
            type="text"
            name="todotext"
            value={todos.todotext}
            onChange={handleChange}
            placeholder="Enter Your Task"
          />
          <input
            type="date"
            name="tododate"
            value={todos.tododate}
            onChange={handleChange}
            placeholder="Enter Your Date"
          />
          <button className="add-button" onClick={addTodo}>
            {editIndex === null ? "Submit" : "Save Changes"}
          </button>
        </div>
        <TodoCard
          finaltodo={finaltodo}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          timeStamp={timeStamp}
        />
      </div>
    </div>
  );
}
