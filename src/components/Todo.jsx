import React from "react";
import { v4 as uuid } from "uuid";
import TodoListItem from "./TodoListItem.jsx";

function delay(){
	let i = 0;
	while(i<1000000000){
		i += 1
	}
	console.log("mausam")
}


const Todo = () => {
  const [state, setState] = React.useState("");

  const [todo, setTodo] = React.useState([]);

  function handleChange(e) {
    setState(e.target.value);
  }

  function handleAdd() {
    const payload = {
      title: state,
      id: uuid(),
      status: "false",
    };
    setTodo((prev) => [...prev, payload]);
  }


  function handletoggle(id) {
		setTodo([...todo.map((ele) => 
			ele.id===id?{...ele,status: ele.status==="false"?"true":"false"}:ele)])
	}
  function handleDelete(id) {
		setTodo([...todo.filter((ele) => 
			ele.id!==id)])
	}

	// const delayValue = delay()
	const delayedValue = React.useMemo(() => delay(), []);

  return (
    <div>
      <span>Enter Todo:</span>
      <input
        type="text"
        value={state}
        onChange={(e) => handleChange(e)}
        placeholder="Enter Todo"
      />
      <button onClick={handleAdd}>ADD</button>
      <TodoListItem
        handleToggle={handletoggle}
        handleDelete={handleDelete}
        todo={todo}
      />
    </div>
  );
};

export default Todo;
