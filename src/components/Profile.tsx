import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/Profile.module.css'

export function Profile() {
  const { level } = useContext(ChallengesContext)
  return (
    <div className={styles.container}>
      <img src="https://github.com/jbresolinn.png" alt="" />
      <div>
        <strong>Julia Bresolin</strong>
        <p>
          <img src="icons/level.svg" alt="Arrow pointing up filled in green." />
          Level {level}
        </p>
      </div>
    </div>
  )
}