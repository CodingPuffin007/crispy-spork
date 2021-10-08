import React from 'react'
import styles from './Home.module.css'
import { Link } from 'react-router-dom'
import Card from '../../Components/shared/card/Card'

const Home = () => {
    return (
      <div className={styles.cardWrapper}>

        <Card title="✌️ Welcome to Helium!">
        <p className={styles.text}>
          Welcome to Helium
          We’re working hard to get Helium ready for everyone! While we wrap up the finishing youches, we’re adding people gradually to make sure nothing breaks
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
        </Card>
        </div>
    )
}

export default Home
