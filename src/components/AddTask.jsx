import "./addTask.css";
import { useRef } from "react";
const AddTask = ({ addItem }) => {
  const taskRef = useRef(null);
  const addTaskHandler = (e) => {
    e.preventDefault();
    const addedValue = taskRef.current.value;
    addItem(addedValue);
    taskRef.current.value = "";
  };
  return (
    <div className="add-box">
      <input ref={taskRef} type="text" placeholder="enter new task" />
      <button type="button" onClick={addTaskHandler}>
        Add Task
      </button>
    </div>
  );
};

export default AddTask;
