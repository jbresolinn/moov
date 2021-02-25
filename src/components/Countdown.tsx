import { useContext } from 'react'
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Countdown.module.css'

export function Countdown() {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    startCountdown,
    resetCountdown } = useContext(CountdownContext)

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');


  return (
    <div>
      <div className={styles.container}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      { hasFinished ? (
        <button disabled className={styles.startCountdown}>
          Cycle closed
          <img src="icons/check_circle.svg" alt="Check symbol in green color" />
        </button>
      ) : (
          <>
            { isActive ? (
              <button type="button" className={`${styles.startCountdown} ${styles.startCountdownActive}`} onClick={resetCountdown}>
                Abandon cycle
              </button>
            ) : (
                <button type="button" className={styles.startCountdown} onClick={startCountdown}>
                  Start a cycle
                </button>
              )}
          </>
        )}
    </div>
  )
}