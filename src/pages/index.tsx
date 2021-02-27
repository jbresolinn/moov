import Head from 'next/head';
import Router from 'next/router'

import styles from '../styles/pages/Home.module.css'

export default function Home() {

  function goDashboard(event) {
    event.preventDefault();
    Router.push('/dashboard');
  }

  return (

    <div className={styles.container}>
      <Head>
        <title>home | moov</title>
      </Head>

      <img src="/symbol-home.svg" alt="moov symbol" />

      <div className={styles.content}>
        <header>
          <img src="/logo-full-white.svg" alt="moov logo" />
          <p>A combination of the pomodoro technique with simple exercises that will improve your quality of life.</p>
        </header>

        <span>Login to continue</span>
        <button type="button" className={styles.githubLogin} onClick={(event) => goDashboard(event)}>
          <img src="/icons/github.svg" alt="github icon" />
        Login with Github
      </button>
        <button type="button" className={styles.googleLogin}>
          <img src="/icons/google.svg" alt="google icon" />
        Login with Google
      </button>
      </div>
    </div>
  )
} 