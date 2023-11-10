import { Trash, PlusCircle } from 'phosphor-react'
import clipboard from '../assets/Clipboard.png'
import styles from './Home.module.css'

interface Task {
    id: number
    description: string
    done: boolean
}

const tasks: Task[] = [
    {
        id: 1,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem cum at quas quasi accusamus quidem, ipsam aspernatur esse voluptate assumenda delectus numquam sed saepe nihil cumque, inventore ducimus neque pariatur!",
        done: false,
    },
    {
        id: 2,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, eligendi doloremque pariatur similique amet ad! Ut, vero quisquam. Tempore corrupti omnis perspiciatis aliquam amet ipsa recusandae ea rem, officia id?",
        done: false,
    },
    {
        id: 3,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos temporibus nesciunt molestiae doloribus qui hic velit reprehenderit neque? Voluptate aliquid voluptatibus blanditiis laboriosam! Nostrum pariatur, iure unde minima alias a?",
        done: true,
    },

]

export default function Task() {
    

    return (
        <div>
            <form className={styles.newTask}>
                <input placeholder='Adicione uma nova tarefa' />
                <button><span>Criar</span><PlusCircle weight='bold' /></button>
            </form>

            <div className={styles.tasks}>
                <div className={styles.info}>
                    <div className={styles.counterCreated}>Tarefas Criadas <span>0</span></div>
                    <div className={styles.counterDone}>Concluídas <span>2 de 5</span></div>
                </div>
                <div className={styles.taskList}>
                    {
                        tasks.length === 0 ? (
                            <div className={styles.empty}>
                                <img src={clipboard} />
                                <strong>Você ainda não tem tarefas cadastradas</strong>
                                Crie tarefas e organize seus itens a fazer
                            </div>

                        ) : (
                            tasks.map(task => {
                                return (
                                    <label key={task.id} className={styles.task}>
                                        <input type="checkbox" name="done" checked={task.done} />
                                        <strong className={task.done ? styles.textTaskDone : styles.textTaskToDo}>{task.description}</strong>
                                        <button><Trash /></button>
                                    </label>

                                )
                            })
                        )
                    }
                </div>


            </div>

        </div >
    )
}