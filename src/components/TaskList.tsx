import { Task } from './Task'
import styles from './TaskList.module.css'

interface Task{
    id: number;
    description: string;
    completed: boolean;
}

interface TaskProps{
    tasks: Task[];
    setTasks: (tasks: Task[]) => void
}

export function TaskList({tasks, setTasks}: TaskProps){

    function handleCompletedTask(id: number){
        setTasks(tasks.map(task=>{
            if(task.id === id){
                return{
                    ...task, completed: !task.completed
                }
            }
            return task
        }))
    }
    
    function handleDeletedTask(id: number){
        const taskListCompleted = tasks.filter(task=>{
            return task.id !== id
        })
    
        setTasks(taskListCompleted)
    }

    const totalCompleted = tasks.reduce((sum, currentTask) => {
        if(currentTask.completed){
            return sum + 1
        }
        return sum
    }, 0)

    const totalTasks = tasks.length

    return(
        <div className={styles.container}>
            <header className={styles.header}>
                <p className={styles.created}>Tarefas Criadas <span>{totalTasks}</span></p>
                <p className={styles.finished}>Concluídas <span>{`${totalCompleted} de ${totalTasks}`}</span></p>
            </header>
            {tasks.map(task=>{
                return (
                    <Task
                        key={task.id}
                        id={task.id}
                        description={task.description}
                        completed={task.completed}
                        handleCompletedTask={handleCompletedTask}
                        handleDeletedTask={handleDeletedTask}
                    />
                )
            })}  
            
        </div>
    )
}