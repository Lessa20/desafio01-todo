import styles from './Header.module.css'
import toDoLogo from '../assets/rocket.svg'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={toDoLogo} alt="logo todo" />
        <span className={styles.to}>to</span>
        <span className={styles.do}>do</span>
      </div>
    </header>
  )
}
