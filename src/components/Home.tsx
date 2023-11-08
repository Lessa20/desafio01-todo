import { Trash, PlusCircle } from 'phosphor-react'
import clipboard from '../assets/Clipboard.png'

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
            <form>
                <input placeholder='Adicione uma nova tarefa' />
                <button>Criar <span><PlusCircle /> </span></button>
            </form>

            <div>
                <div>Tarefas Criadas <span>0</span></div>
                <div>Concluídas <span>0</span></div>
            </div>
            <div>
                {
                    tasks.length === 0 ? (
                        <div>
                            <img src={clipboard} />
                            <strong>Você ainda não tem tarefas cadastradas</strong>
                            <span>Crie tarefas e organize seus itens a fazer</span>
                        </div>
                    ) : (
                        tasks.map(task => {
                            return (
                                <div key={task.id}>
                                    <span><input type="checkbox" name="done" checked={task.done} /></span>
                                    {task.description}
                                    <span><Trash /></span>
                                </div>

                            )
                        })
                    )
                }
                
            </div>

        </div >
    )
}