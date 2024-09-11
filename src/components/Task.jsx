import { useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import "./tasks.css";
const Task = ({ desc, removeItem }) => {
  const [checked, setCheck] = useState(false);
  function checkboxHandler() {
    setCheck(!checked);
  }
  // when clicking on the elete icon
  function onRemove() {
    removeItem(desc);
  }
  return (
    <div className={`task-container ${checked ? "checked" : ""}`}>
      <FaRegTrashCan
        style={{ fontSize: "1.1rem", cursor: "pointer" }}
        onClick={onRemove}
      />{" "}
      <h4>{desc}</h4>
      <input type="checkbox" onChange={checkboxHandler} />
    </div>
  );
};

export default Task;
