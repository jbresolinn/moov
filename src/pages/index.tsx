import Head from 'next/head';
import axios from 'axios'
import { FormEvent, useContext, useEffect, useState } from 'react';

import styles from '../styles/pages/Home.module.css'
import { UserContext, UserProvider } from '../contexts/UserContext';
import Router from 'next/router'
import { SnackBar } from '../components/SnackBar';

interface UserProps {
  id: string;
  name: string;
  avatar: string;
  username: string;
}


export default function Home() {
  const route = Router;

  const [username, setUsername] = useState('');
  const [error, setError] = useState(null);
  const [user, setUser] = useState({} as UserProps);
  const [loading, setLoading] = useState(false);

  async function handleSignIn(event: FormEvent) {
    event.preventDefault();
    setLoading(true);

    try {
      const { data } = await axios.post('/api/login', { username });

      console.log(data);

      if (data) {
        setUser(data);

        setLoading(false);
        route.push('/dashboard');
      }
    } catch (err) {
      setError(err);
      setUsername('');
      setLoading(false);
    }
  }

  useEffect

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
          <form onSubmit={handleSignIn}>
            <input type="text" placeholder="Enter your username" onChange={(event) => setUsername(event.target.value)} value={username} />
            <button type="submit" disabled={loading}>
              {loading ? (
                <div className={styles.spinner}>
                  <div className={styles.bounce1}></div>
                  <div className={styles.bounce2}></div>
                </div>
              ) : (
                  <img src="/icons/arrow-right.svg" alt="white arrow" />
                )}
            </button>
          </form>
          <SnackBar type="error" error={error} message="User not found! Try again."></SnackBar>
          <small>Don't you have a Github account? <strong><a href="https://github.com/join" target="_blank" >Create account.</a></strong></small>
        </div>
      </div >
    </UserProvider>
  )
} 