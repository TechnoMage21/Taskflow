import React from "react";

export default function TodoCard({ finaltodo, handleDelete, handleEdit, date }) {
  // Check if the finaltodo list is empty
  if (finaltodo.length === 0) {
    return (
      <div className="no-todos-message">
        <h5>No Task Listed</h5>
      </div>
    );
  }

  return (
    <div className="main-card">
      {finaltodo.map((item, index) => (
        <div className="style-card" key={index}>
          <h6>{item.todotext}</h6>
          {/* If date is part of the todo item, use it instead of passing `date` as a prop */}
          <h6>{item.tododate || date}</h6> 
          <p className="">{item.tododate ? item.tododate : date}</p>
          
          <div className="button">
            <button
              className="action-button"
              onClick={(e) => handleDelete(e, index)}
              aria-label={`Delete todo "${item.todotext}"`}
            >
              <img
                className="button-image"
                src={`${process.env.PUBLIC_URL}/image/delete.png`}
                alt="Delete"
              />
            </button>

            <button
              className="action-button"
              onClick={(e) => handleEdit(e, index)}
              aria-label={`Edit todo "${item.todotext}"`}
            >
              <img
                className="button-image"
                src={`${process.env.PUBLIC_URL}/image/edit.png`}
                alt="Edit"
              />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
