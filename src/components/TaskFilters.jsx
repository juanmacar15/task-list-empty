import './TaskFilters.css'
const TaskFilters = () => {
  const handleOnChange = (value) => {
    console.log(value)
  }
  return (
    <>
      <div className='task-filters'>
        <select onChange={(e) => handleOnChange(e.target.value)}>
          <option value="">Todas las Categoria</option>
          <option value="Trabajo">Trabjao</option>
          <option value="Personal">Personal</option>
          <option value="Hogar">Hogar</option>
        </select>
        <select onChange={(e) => handleOnChange(e.target.value)}>
          <option value="">Todos los Estados</option>
          <option value="Completed">Completadas</option>
          <option value="Pending">Pendientes</option>
        </select>
      </div>
    </>
  );
}

export default TaskFilters;