import Task from "./Task";
const Tasks = ({ tasks, removeHandler }) => {
  const content = tasks.map((task, i) => (
    <Task removeItem={removeHandler} desc={task} key={i} />
  ));
  return <main>{content}</main>;
};

export default Tasks;
