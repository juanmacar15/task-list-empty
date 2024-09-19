import './index.css';
import Header from './components/Header'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList';
import TaskSearch from './components/TaskSearch';
import  TaskFilters  from './components/TaskFilters';
import { useState } from 'react';


function App() {
  const [tasks, setNewTask] = useState([])

  const addTask = (task) => {
    setNewTask([...tasks, task])
  }
  const toggleTaskComplete = (index) => {
    const newTask = tasks.map((task, ix) => {
      if(ix === index){
        return {...task, completed: !task.completed, completedAt: task.completed ? null : new Date()}
      }
      return task
    })

    setNewTask(newTask)
  }

  const removeTask = () => {
    
  }

  return (
    <div className='app-container'>
      <Header/>
      <TaskSearch />
      <TaskFilters/>
      <TaskForm addTask={addTask} />
      <TaskList 
        tasks={tasks}
        toggleTaskComplete={toggleTaskComplete}/>
      <TaskFilters/>
    </div>
  );
}

export default App;
