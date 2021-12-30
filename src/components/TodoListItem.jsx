import React from "react";

const TodoListItem = ({ todo, handleToggle, handleDelete }) => {
  return (
    <div>
      {todo?.map((ele) => {
        return (
          <div key={ele.id} style={{ margin: "15px" }}>
            <span>{ele.title}</span>
            <span style={{ margin: "15px" }}>{ele.status}</span>
            <button onClick={() => handleToggle(ele.id)}>Toggle</button>
            <button style={{ margin: "5px" }} onClick={() => handleDelete(ele.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default TodoListItem;
