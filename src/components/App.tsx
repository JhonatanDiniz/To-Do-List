import styles from './App.module.css'
import { Header } from "./Header"

import { PlusCircle } from '@phosphor-icons/react'

function App() {
  return (
    <div>
      <Header/>
      <form className={styles.createTask}>
        <input type="text" placeholder="Adicione uma nova tarefa" />
        <button>Criar <PlusCircle size={16} /></button>
      </form>

    </div>
  )
}

export default App
