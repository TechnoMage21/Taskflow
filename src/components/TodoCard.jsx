import React from "react";

export default function TodoCard({ finaltodo ,handleDelete ,handleEdit ,date}) {
  return (
    <>
      <div className="main-card">
        {finaltodo.map((item, index) => (
          <div className="style-card" key={index} value={item}>
            <h6>{item.todotext}</h6>
            <h6>{item.tododate}</h6>
            <p className="">{date}</p>
            <div className="button">
              <button className="action-button" onClick={(e)=>handleDelete(e,index)}>
                <img
                  className="button-image"
                  src={`${process.env.PUBLIC_URL}/image/delete.png`}
                  alt=""
                />
              </button>
              <button className="action-button" onClick={(e)=>handleEdit(e,index)}>
                <img
                  className="button-image"
                  src={`${process.env.PUBLIC_URL}/image/edit.png`}
                  alt=""
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
