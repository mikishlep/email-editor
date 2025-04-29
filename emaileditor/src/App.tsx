import { useState } from 'react'
import styles from './App.module.scss'
import { Details } from './Details'

export function App() {
  const [details, setDetails] = useState({
    title: 'null',
    description: 'Hello, World!',
    buttonText: 'Click'
  })

  return (
    <div className={styles.layout}>
      <img src='thumbnail.png' width={300} />

      <Details details={details} setDetails={setDetails} />
    </div>
  )
}