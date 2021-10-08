import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navigation.module.css'


const Navigation = () => {
    
    const brandStyle = {
        color: '#fff',
        textDecoration: 'none',
        fontWeight: 'bold',
        fontSize: '22px',
        display: 'flex',
        alignItems: 'center'
    };
    
    const logo = {
        marginRight: '16px'
    }
    

    return (
        <div>
            <nav className={`${styles.navbar} container`}>
                <Link to="/" style={brandStyle}>
                    <span>✌️  Helium</span>
                </Link>
            </nav>
        </div>
    )
}

export default Navigation
