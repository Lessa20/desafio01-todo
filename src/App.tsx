import Header from './components/Header'
import Home from './components/Home'

import styles from './App.module.css'

import './global.css'

function App() {

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <main>
          <Home />
        </main>
      </div>

    </>
  )
}

export default App
