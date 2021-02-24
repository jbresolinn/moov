import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox() {
  const { activeChallenge, resetChallenge } = useContext(ChallengesContext)

  return (
    <div className={styles.container}>
      { activeChallenge ? (
        <div className={styles.active}>
          <header>Ganhe {activeChallenge.amount}xp </header>
          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt="" />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>
          <footer>
            <button type="button" className={styles.failedButton} onClick={resetChallenge}>Falhei</button>
            <button type="button" className={styles.sucessButton}>Completei</button>
          </footer>
        </div>
      ) : (
          <div className={styles.notActive}>
            <strong>End a cycle to receive challenges to be completed</strong>
            <p>
              <img src="icons/level-up.svg" alt="" />
          Complete them and win experience and level up.
        </p>
          </div>
        )}
    </div>
  )
}