import { Trash, CheckCircle, Circle } from '@phosphor-icons/react'
import styles from './Task.module.css'

interface TaskProps{
    id?: number
    description: string,
    completed: boolean,
    handleCompletedTask: (id: number) => void
    handleDeletedTask: (id: number) => void
}

export function Task({id, description, completed, handleDeletedTask, handleCompletedTask}:TaskProps){

    function completedTask(){
        if(id !== undefined){
            handleCompletedTask(id)
        }
        
    }

    function deletedTask(){
        if(id !== undefined){
            handleDeletedTask(id)
        }
    }

    return(
        <div className={styles.content}>
            <div className={styles.task}>
                <div className={styles.taskDescriptions}>
                <button onClick={completedTask}>{completed ? <CheckCircle size={24} className={styles.checked}/> : <Circle size={24} className={styles.unchecked}/>}</button>                                   
                    <p className={completed ? styles.textDescriptionCompleted : ''}>{description}</p>
                </div>
                <Trash onClick={deletedTask} size={24} className={styles.trash}/>
            </div>
        </div>
    )
}