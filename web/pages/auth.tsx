import React from 'react'
import SignIn from '../src/components/signIn'
import styles from '../styles/page/auth.module.css'
function auth() {
    return (
        <div className={styles.container}>
            <span className={styles.center}>
                <SignIn/>                
            </span>

        </div>
    )
}

export default auth
