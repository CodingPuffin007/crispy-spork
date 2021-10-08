import React from 'react'
import styles from './Home.module.css'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
      <div className={styles.cardWrapper}>
        <div className={styles.card}>
          <div className={styles.headingWrapper}>
            <h1 className={styles.heading}>✌️  Welcome to Helium!</h1>
          </div>
          <p className={styles.text}>
          Welcome to Helium
          We’re working hard to get Helium ready for everyone! While we wrap up the finishing youches, we’re adding people gradually to make sure nothing breaks :)
          </p>
          <div>
            <button>
              <span>Get your username</span>
              <img src="/Images/Vector.png" alt="arrow" />
            </button>
          </div>
          <div>
            <span>Have and invite text?</span>
            <Link to="/login">Sign in</Link>
          </div>
        </div>
        </div>
    )
}

export default Home
