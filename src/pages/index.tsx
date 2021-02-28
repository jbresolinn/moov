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
        </header>

        <h1>Welcome</h1>
        <p>
          <img src="/icons/github.svg" alt="github icon" />
          Login with your Github to continue.
        </p>
        <div>
          <input type="text" placeholder="Enter your username" />
          <button type="button">
            <img src="/icons/arrow-right.svg" alt="white arrow" />
          </button>
        </div>
        <small>Don't you have a Github account? <strong><a href="https://github.com/join">Create account.</a></strong></small>
      </div>
    </div>
  )
} 