import Head from 'next/head';
import { FormEvent, useState } from 'react';
import axios from 'axios'

import styles from '../styles/pages/Home.module.css'

export default function Home() {
  const [username, setUsername] = useState(null);

  function handleSignIn(event: FormEvent) {
    event.preventDefault();

    axios.post('/api/login', { username })
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
        <form>
          <input type="text" placeholder="Enter your username" onChange={(event) => setUsername(event.target.value)} />
          <button type="submit" onClick={handleSignIn}>
            <img src="/icons/arrow-right.svg" alt="white arrow" />
          </button>
        </form>
        <small>Don't you have a Github account? <strong><a href="https://github.com/join">Create account.</a></strong></small>
      </div>
    </div >
  )
} 