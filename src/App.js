import "./styles.css";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from "react";
export default function App() {
  const [tasks, setTasks] = useState([]);
  //function to remove item from list
  function removeItem(name) {
    const filteredArray = tasks.filter((item) => {
      return name !== item;
    });
    console.log("fArray is: " + filteredArray);
    setTasks(filteredArray);
  }
  // function to add new item
  function addItem(name) {
    if (name.trim() === "") {
      alert("please enter a valid task name");
      return;
    }
    const newArray = [...tasks, name];
    setTasks(newArray);
  }
  return (
    <div className="App">
      <AddTask addItem={addItem} />
      <Tasks tasks={tasks} removeHandler={removeItem} />
    </div>
  );
}
