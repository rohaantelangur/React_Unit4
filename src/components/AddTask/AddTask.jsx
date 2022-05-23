import React from "react";
import styles from "./addTask.module.css";

const AddTask = (props) => {
  // NOTE: do not delete `data-cy` key value pair
  const[value, setvalue]=React.useState("")
  // console.log(value);
  return (
    <div className={styles.todoForm}>
      <input data-cy="add-task-input" type="text" value={value} placeholder="Add task" onChange={(e)=>{setvalue(e.target.value)}}/>
      <button data-cy="add-task-button" onClick={()=>{props.addtasks(false,1,value)
      setvalue("")}}>+</button>
    </div>
  );
};

export default AddTask;
