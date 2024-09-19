import TaskItem from './TaskItem';
import './TaskList.css'

function TaskList({tasks, index, toggleTaskComplete}) {
  return (
    <ul className='task-list'>
      {tasks.map((task,index)=>(
        <TaskItem
        key={index}
        task={task}
        index={index}
        toggleTaskComplete={toggleTaskComplete}
        />
      ))
      }
    </ul>
  );
}

export default TaskList;
