import React from "react";
import styles from "./task.module.css";
import Counter from "../Counter/Counter";
import { v4 as uuidv4 } from "uuid";

const Task = (props) => {
  // NOTE: do not delete `data-cy` key value pair
  const [update, setupdate] = React.useState("");
  return (
    <li data-cy="task" className={styles.task}>
      <input
        type="checkbox"
        data-cy="task-checkbox"
        onClick={(e) =>{

          props.update(props.el.id, props.el.iscount, e.target.checed)
          setupdate(uuidv4())
        }
        }
      />
      <div data-cy="task-text"></div>
      {/* Counter here */}
      {props.el.title}
      <Counter counter={props.el} update={props.update} />
      <button
        data-cy="task-remove-button"
        onClick={() => {
          props.del(props.index);
          setupdate(uuidv4())
          props.rerender(uuidv4())
        }}
      >X</button>
    </li>
  );
};

export default Task;
