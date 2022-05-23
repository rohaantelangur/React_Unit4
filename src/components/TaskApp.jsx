import React from "react";
import TaskHeader from "./TaskHeader/TaskHeader"
import AddTask from "./AddTask/AddTask"
import styles from "./taskApp.module.css";
import Tasks from "./Tasks/Tasks";


const TaskApp = () => {
  const [todo, settodo]= React.useState([])

  const addtasks = (comp,count,title) => {
    settodo([...todo, { id:Date.now(), title:title, iscomp:comp, iscount:count}])
  }

  const update = (id,count,comp) =>{
    todo.map((ele)=>{
      if(ele.id===id){
        ele.iscomp=comp
        ele.iscount=count
      }
    })
    settodo(todo)

  }

  const del = (index) =>{
    todo.splice(index)
    settodo(todo)
  }
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div data-cy="task-app" className={styles.taskApp}>
      {/* Header */}
      {/* Add Task */}
      {/* Tasks */}
      <TaskHeader todo={todo} />
      <AddTask addtasks={addtasks}/>
      <Tasks addtasks={addtasks} data={todo} update={update} del={del}/>
    </div>
  );
};

export default TaskApp;
