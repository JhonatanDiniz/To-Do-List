import styles from './App.module.css'
import { Header } from "./Header"

import { PlusCircle } from '@phosphor-icons/react'
import { TaskList } from './TaskList'
import { ChangeEvent, FormEvent, useState } from 'react'


function App() {

  const [tasks, setTasks] = useState([
    {
        id: 1,
        description: 'Estudar React',
        completed: false
    },
    {
        id: 2,
        description: 'Estudar Java',
        completed: true
    },
    {
        id: 3,
        description: 'Estudar Typescript',
        completed: false
    }
])

  const [newTask, setNewTask] = useState('')

  function handleSubmit(event: FormEvent){
    event?.preventDefault()
    setTasks([...tasks,  {id: tasks.length + 1, description: newTask, completed: false}])
    setNewTask('')
  }

  function handleOnChange(event: ChangeEvent<HTMLInputElement>){
    if(event && event.target){
      setNewTask(event.target.value)
    }    
  }  

  return (
    <div>
      <Header/>
      <form onSubmit={handleSubmit} className={styles.createTask}>
        <input required onChange={handleOnChange} type="text" placeholder="Adicione uma nova tarefa" name='task' value={newTask} />
        <button type='submit'>Criar <PlusCircle size={20} /></button>
      </form>

      <TaskList
        tasks={tasks}
        setTasks={setTasks}
      />

    </div>
  )
}

export default App
