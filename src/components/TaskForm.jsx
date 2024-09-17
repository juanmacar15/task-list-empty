import './TaskForm.css'
import { useState } from 'react';
import { FiPlus } from 'react-icons/fi';
function TaskForm({addTask}) {
  const [newTask, setNewTask]= useState('')
  const [category, setCategory]= useState('')
  const [date, setDate]= useState('')

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(e)

    addTask({
      create: new Date().toISOString, 
      name: newTask,  
      limitDate: date, 
      category: category,
      complete:'No',},

    )
  }

  return (
    <form className='task-form' onSubmit={(e) => handleSubmit(e)}>
    <input 
    type="text"
    placeholder='Agregar tarea'
    value={newTask}
    onChange={(e)=>setNewTask(e.target.value)}
     />
     <select value={category} onChange={(e)=>setCategory(e.target.value)}>
      <option value="">Categoría</option>
      <option value="Trabajo">Trabajo</option>
      <option value="Personal">Personal</option>
      <option value="Hogar">Hogar</option>
      <option value="Deporte">Deporte</option>
     </select>
     <input 
     type="date"
     value={date}
     onChange={(e)=>setDate(e.target.value)}
      />
     <button type='submit'>
      <FiPlus size={20}/>
     </button>
    </form>
  );
}

export default TaskForm;
