import Head from 'next/head';

import styles from '../styles/pages/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <img src="/symbol-home.svg" alt="moov symbol"/>

      <div className={styles.content}>
      <header>
        <img src="/logo-full-white.svg" alt="moov logo"/>
        <p>A combination of the pomodoro technique with simple exercises that will improve your quality of life.</p>
      </header>

      <span>Login to continue</span>
      <button type="button" className={styles.githubLogin}>
        <img src="/icons/github.svg" alt="github icon"/>
        Login with Github
      </button>
      <button type="button" className={styles.googleLogin}>
        <img src="/icons/google.svg" alt="google icon"/>
        Login with Google
      </button>
      </div>
    </div>
  )
} 