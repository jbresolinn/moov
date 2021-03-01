import Head from 'next/head';
import axios from 'axios'
import { FormEvent, useContext, useState } from 'react';

import styles from '../styles/pages/Home.module.css'
import { UserContext, UserProvider } from '../contexts/UserContext';

export default function Home() {
  const [username, setUsername] = useState(null);
  const [error, setError] = useState({ show: false, message: null });
  const [user, setUser] = useState();
  const { signIn } = useContext(UserContext)

  async function handleSignIn(event: FormEvent) {
    event.preventDefault();

    const { data } = await axios.post('/api/login', { username });

    if (!data) {
      setError({ show: true, message: 'User not found! ' });
    }

    setUser(data);
  }

  return (
    <UserProvider user={user}>
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
          {error && <p>{error.message} </p>}
          <small>Don't you have a Github account? <strong><a href="https://github.com/join">Create account.</a></strong></small>
        </div>
      </div >
    </UserProvider>
  )
} 