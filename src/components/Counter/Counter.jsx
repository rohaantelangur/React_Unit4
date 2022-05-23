import React from "react";
import styles from "./counter.module.css";

const Counter = (props) => {
  // sample value to be replaced
  const[count,setcount]=React.useState(props.counter.iscount)
  // let count = 0;
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div className={styles.counter}>
      <button data-cy="task-counter-increment-button" onClick={()=>{setcount(count+1)
      props.update(props.counter.id,count,props.counter.iscomp)}}>+</button>
      <span data-cy="task-counter-value">{count}</span>
      <button data-cy="task-counter-decrement-button" onClick={()=>{if(count!==0) setcount(count-1)
      props.update(props.counter.id,count,props.counter.iscomp)}}>-</button>
    </div>
  );
};

export default Counter;
