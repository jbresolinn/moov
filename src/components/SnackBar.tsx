import { ReactNode, useEffect, useState } from 'react'
import styles from '../styles/components/Snackbar.module.css'

interface SnackbarProps {
  error: Error,
  message: string,
  type: 'error' | 'warning' | 'success'
}

export function SnackBar({ type, error, message }: SnackbarProps) {
  const [show, setShow] = useState(false);
  const [errorDescription, setErrorDescription] = useState('');

  useEffect(() => {
    if (error) {
      setShow(true);
      setErrorDescription(message);
      setTimeout(() => {
        setShow(false);
        setErrorDescription('')
      }, 2000)
    }


  }, [error])

  function getColor() {
    switch (type) {
      case 'error':
        return 'var(--red)'
      case 'warning':
        return 'var(--yellow)'
      case 'success':
        return 'var(--green)'
    }
  }
  return (
    <>
      {show && (
        <div className={styles.container} style={{ backgroundColor: `${getColor()}` }} id="snackContainer">
          <img src={`icons/${type}.svg`} alt="snackbar icon" />
          <span>{errorDescription}</span>
        </div>
      )}
    </>
  )
}