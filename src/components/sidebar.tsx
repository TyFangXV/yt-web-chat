import React from 'react'
import { atom, useRecoilState, useRecoilValue } from 'recoil';
import { userState } from '../state/auth';
import { popupValue } from '../state/nav';
import styles from '../styles/components/sidebar.module.css'
import Sidebar_header from './sidebar_header'
function Sidebar() {


    const user = useRecoilValue(userState);
    const showPopUp = useRecoilValue<boolean>(popupValue);

    return (
        <div className={styles.container}>
            <span className={styles.headerContainer}>
                <Sidebar_header/>                
            </span>
            <span className={styles.userDetailPopUp} hidden={!showPopUp}>
                <span className={styles.center}>
                    <p>{user.name}</p>                    
                </span>

            </span>                
        </div>
    )
}

export default Sidebar
