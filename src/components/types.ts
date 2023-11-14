export type TaskProps = {
  id: string
  description: string
  done: boolean
  onDeleteTask: (taskId: string) => void
  onCheckTask: (taskId: string) => void
}
