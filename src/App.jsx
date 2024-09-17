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

  return (
    <div className='app-container'>
      <Header/>
      <TaskSearch />
      <TaskFilters/>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks}/>
      <TaskFilters/>
    </div>
  );
}

export default App;
