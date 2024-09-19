import './TaskItem.css'
import { FiCheck, FiTrash2, FiEdit } from 'react-icons/fi';

function TaskItem({task, index, toggleTaskComplete}) {


  const handleEdit= ()=>{

  }
  const removeTask= ()=>{

  }
  
  return (
    <>
      <div className='task-item'>
        <span>{task.name}</span>
        <small>Creado:{task.create}</small>
        <small>Completado: {task.complete}</small>
        <small>Fecha Limite: {task.limitDate}</small>
        <small>Categoría: {task.category}</small>
      </div>
      <div className='icons'>
        <button className='check-btn' onClick={()=>toggleTaskComplete(index)}>
          <FiCheck size={18}/>
        </button>
        <button className='edit-btn' onClick={()=>handleEdit()}>
          <FiEdit size={18}/>
        </button>
        <button className='delete-btn' onClick={()=>removeTask()}>
          <FiTrash2 size={18}/>

        </button>
      </div>
    </>
  );
}

export default TaskItem;
