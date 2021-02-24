import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox() {
  const hasActiveChallenge = true;

  return (
    <div className={styles.container}>
      { hasActiveChallenge ? (
        <div className={styles.active}>
          <header>Ganhe 400xp</header>
          <main>
            <img src="icons/body.svg" alt="" />
            <strong>Novo desafio</strong>
            <p>Descrição do desafio</p>
          </main>
          <footer>
            <button type="button" className={styles.failedButton}>Falhei</button>
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