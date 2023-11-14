import { Trash } from 'phosphor-react'
import styles from './Task.module.css'
import { TaskProps } from './types'

export default function Task({
  id,
  description,
  done,
  onDeleteTask,
  onCheckTask,
}: TaskProps) {
  function handleDeleteTask() {
    onDeleteTask(id)
  }

  function handleSetDoneTask() {
    onCheckTask(id)
  }

  return (
    <label className={styles.task}>
      <input
        type="checkbox"
        name="done"
        checked={done}
        onChange={handleSetDoneTask}
      />
      <strong className={done ? styles.textTaskDone : styles.textTaskToDo}>
        {description}
      </strong>
      <button onClick={handleDeleteTask}>
        <Trash />
      </button>
    </label>
  )
}
