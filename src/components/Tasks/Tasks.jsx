import React from "react";
import Task from "../Task/Task";
import styles from "./tasks.module.css";
import { v4 as uuidv4 } from "uuid";


const Tasks = (props) => {
  // NOTE: do not delete `data-cy` key value pair
  const [update, setupdate] = React.useState("");
  const rerender=(id)=>{
    setupdate(id)
  }
  return (
    <>
      <ul data-cy="tasks" className={styles.tasks}>
        {/* Task List */}
        {props.data.map((el,index)=>{
        return (
          <Task index={index} rerender={rerender} del={props.del} addtasks={props.addtasks} update={props.update} data={props.todo} el={el} key={el.id}/>
        )})}
      </ul>
      <div data-cy="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
        {/* <Task/> */}
      </div>
    </>
  );
};

export default Tasks;
