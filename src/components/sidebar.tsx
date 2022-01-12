import React from 'react'
import { useRecoilValue } from 'recoil';
import { userState } from '../state/auth';
import styles from '../styles/components/sidebar.module.css'
import Sidebar_header from './sidebar_header'
function Sidebar() {
    const user = useRecoilValue(userState);
    return (
        <div className={styles.container}>
            <span className={styles.headerContainer}>
                <Sidebar_header/>                
            </span>
            <span className={styles.userDetailPopUp}>
                <p>{user.name}</p>
                
            </span>                
        </div>
    )
}

export default Sidebar
