/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styles from '../styles/components/sidebar.module.css';
import {IoIosPersonAdd, IoIosSettings} from 'react-icons/io';
import { useRecoilState, useRecoilValue } from 'recoil';
import { userState } from '../state/auth';
import { popupValue } from '../state/nav';

function Sidebar_header() {
    const user = useRecoilValue(userState);
    const [showPopUp, setShowPopUp] = useRecoilState<boolean>(popupValue);
    
  return (
    <div>
        <div className={styles.header}>
            <span className={styles.profile}>
                <img
                    onClick={() =>  setShowPopUp(!showPopUp)}
                    src={user.image}
                    alt="avatar"
                    className={styles.profile_pic}
                />   
                <div className={styles.status} style={{"backgroundColor" : user.online ? "green" : "#b8b8b8"}}></div>             
            </span>
        <span>
            <IoIosPersonAdd className={styles.icon} title='Add friends'/>  
            <IoIosSettings className={styles.icon} title='settings'/>
        </span>
 
        </div>        
    </div>

  );
}

export default Sidebar_header;
