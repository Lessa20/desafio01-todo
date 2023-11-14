import { PlusCircle } from 'phosphor-react'
import clipboard from '../assets/Clipboard.png'
import styles from './Home.module.css'
import { ChangeEvent, useState, FormEvent, InvalidEvent } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Task from './Task'
import { TaskProps } from './types'

export default function Home() {
  const [tasks, setTasks] = useState<TaskProps[]>([])
  const [newTask, setNewTask] = useState('')

  const [countCreatedTasks, setCountCreatedTasks] = useState(0)
  const [countDoneTasks, setCountDoneTasks] = useState(0)

  const isNewTaskEmpty = newTask.length === 0

  function handleNewtaskOnChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('')
    setNewTask(event.target.value)
  }

  function handleAddNewTask(event: FormEvent) {
    event.preventDefault()

    setTasks([
      ...tasks,
      {
        id: uuidv4(),
        description: newTask,
        done: false,
        onDeleteTask: deleteTask,
        onCheckTask: setDoneTask,
      },
    ])
    setNewTask('')
    setCountCreatedTasks(tasks.length + 1)
  }

  function deleteTask(taskId: string) {
    const taskToDelete = tasks.find((task) => task.id === taskId)

    if (taskToDelete && taskToDelete.done) {
      setCountDoneTasks(countDoneTasks - 1)
    }

    const taskDeleteWithoutDeletedOne = tasks.filter((task) => {
      return task.id !== taskId
    })

    setTasks(taskDeleteWithoutDeletedOne)
    setCountCreatedTasks(tasks.length - 1)
  }

  function setDoneTask(taskId: string) {
    let tasksDone = tasks.filter((task) => task.done === true).length

    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          tasksDone = task.done === true ? tasksDone - 1 : tasksDone + 1
          return { ...task, done: !task.done }
        }
        return task
      }),
    )

    setCountDoneTasks(tasksDone)
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Uai?! Cadê a tarefa???')
  }

  return (
    <>
      <form className={styles.newTask} onSubmit={handleAddNewTask}>
        <input
          placeholder="Adicione uma nova tarefa"
          value={newTask}
          onChange={handleNewtaskOnChange}
          onInvalid={handleNewTaskInvalid}
          required
        />
        <button type="submit" disabled={isNewTaskEmpty}>
          <span>Criar</span>
          <PlusCircle weight="bold" />
        </button>
      </form>

      <div className={styles.tasks}>
        <div className={styles.info}>
          <div className={styles.counterCreated}>
            Tarefas Criadas<span>{countCreatedTasks}</span>
          </div>
          <div className={styles.counterDone}>
            Concluídas
            <span>
              {countCreatedTasks > 0
                ? `${countDoneTasks} de ${countCreatedTasks}`
                : 0}
            </span>
          </div>
        </div>
        <div className={styles.taskList}>
          {tasks.length === 0 ? (
            <div className={styles.empty}>
              <img src={clipboard} alt="" />
              <strong>Você ainda não tem tarefas cadastradas</strong>
              Crie tarefas e organize seus itens a fazer
            </div>
          ) : (
            tasks.map((task) => {
              return (
                <Task
                  key={task.id}
                  id={task.id}
                  description={task.description}
                  done={task.done}
                  onDeleteTask={deleteTask}
                  onCheckTask={setDoneTask}
                />
              )
            })
          )}
        </div>
      </div>
    </>
  )
}
