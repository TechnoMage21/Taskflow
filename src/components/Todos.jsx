import { React, useState, useEffect } from "react";
import TodoCard from "./TodoCard";

export default function Todos() {
  const [todos, setTodos] = useState({
    todotext: "",
    tododate: "",
  });
  
  const [finaltodo, setFinal] = useState([]);
  const [editIndex, setEdit] = useState(null);
  const [TimeStamp,setTime] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name + value);
    setTodos({ ...todos, [name]: value });
  };

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) {
      setFinal(storedTodos);
    }
  }, []); 

  //it will run first time rendering

  // Save todos to localStorage whenever finaltodo changes

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(finaltodo));
  }, [finaltodo]);

  useEffect(() => {
    if (editIndex !== null) {
      setTodos(finaltodo[editIndex]);
    }
  }, [editIndex,finaltodo]);

  const addTodo = (e) => {
    e.preventDefault();
    if (todos.todotext.trim() && todos.tododate.trim()) {
      if (editIndex === null) {
        setFinal([...finaltodo, todos]);
        setTodos({ todotext: "", tododate: "" });
      } else {
        const updatedValue = finaltodo.map((item, index) =>
          index === editIndex ? todos : item
        );
        setFinal(updatedValue);
        setEdit(null);
      }
      setTodos({ todotext: "", tododate: "" });
      const time = new Date().toLocaleTimeString();
      setTime(time);
    }
  };

  const handleDelete = (e, inx) => {
    e.preventDefault();
    const newTodo = finaltodo.filter((_, index) => index !== inx);
    setFinal(newTodo);
  };

  const handleEdit = (e, inx) => {
    e.preventDefault();
    setEdit(inx);
  };

  return (
    <>
      <div className="main-container">
        <div className="todobox">
          <div className="todo-input">
            <input
              type="text"
              name="todotext"
              id=""
              value={todos.todotext}
              onChange={handleChange}
              placeholder="Enter Your Task"
            />
            <input
              type="date"
              name="tododate"
              id=""
              value={todos.tododate}
              onChange={handleChange}
              placeholder="Enter Your Date"
            />
            <button className="add-button" onClick={addTodo}>
              {!editIndex ? "+" : "Edit"} 
            </button>
          </div>
          <TodoCard
            finaltodo={finaltodo}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            date={TimeStamp}
          />
        </div>
      </div>
    </>
  );
}
