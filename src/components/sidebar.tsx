import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { useClickAway } from 'react-use';
import { atom, useRecoilState, useRecoilValue } from 'recoil';
import { FaClipboardList } from 'react-icons/fa';

import { userState } from '../state/auth';
import { popupValue, addFriend } from '../state/nav';

import styles from '../styles/components/sidebar.module.css';
import { User } from '../types/auth';
import Popup from './popup';
import Sidebar_header from './sidebar_header';
import { IoIosPersonAdd } from 'react-icons/io';

const CopyId = (text: string): void => {
    navigator.clipboard.writeText(text);
    toast.success('text copied to clipboard');
};

function Sidebar() {
    const userDetailRef = React.createRef<HTMLDivElement>();
    const AddFirendRef = React.createRef<HTMLDivElement>();

    const user = useRecoilValue<User>(userState);
    const [showPopUp, setPopUp] = useRecoilState<boolean>(popupValue);
    const [showAddFirend, setAddFirend] = useRecoilState<boolean>(addFriend);

    useClickAway(userDetailRef, () => {setPopUp(false)});
    useClickAway(AddFirendRef, () => {setAddFirend(false)});

    return (
        <div className={styles.container}>
            <span className={styles.headerContainer}>
                <Sidebar_header />
            </span>
            <span
                className={styles.userDetailPopUp}
                hidden={!showPopUp}
                ref={userDetailRef}
            >
                <span
                    className={styles.center}
                    title="Copy ID"
                    onClick={() => CopyId(user.id)}
                >
                    <p>{user.name}</p>
                    <FaClipboardList />
                </span>
            </span>

            <span ref={AddFirendRef}>
            <Popup topValue="50%" leftValue="50%" hidden={!showAddFirend} >
                <span className={styles.center}>
                <input
                    type="text"
                    placeholder="Enter your friends id"
                    name="Friend"
                    id="friend"
                    className={styles.input}
                />
                <IoIosPersonAdd title='Add' className={styles.icon_btn}/>  
                </span>
            </Popup>
            </span> 
            <ToastContainer
                autoClose={1000}
                position="bottom-right"
                hideProgressBar={true}
                closeOnClick
            />
        </div>
    );
}

export default Sidebar;
