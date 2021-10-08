import React from 'react'
import styles from './Button.module.css'


const Button = ({ text, onClick }) => {
    return (
        <button className={styles.button} onClick={onClick}>
            <span>
                {text}
            </span>
            <img src="/Images/Vector.png" className={styles.arrow}  alt="arrow" />
        </button>
    )
}

export default Button
