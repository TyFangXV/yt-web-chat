
import React from 'react'
import { useRecoilValue } from 'recoil';
import styles from '../../styles/components/Signin.module.css'
import { userState } from '../state/auth';
import supabase from '../supabase/initalization';
import { User } from '../types/auth';


async function SignInWithDiscord() {
    //const [userStateValue, setUserStateValue] = useRecoilValue(userState);

    const { user, session, error } = await supabase.auth.signIn({
      provider: 'discord',
    })

    if(error) {
        console.log(error.message)
    }else{
        console.log(user)
    }
  }

function SignIn() {
    return (
        <div className={styles.container}>
            <h1>Sign In</h1>
            <button onClick={SignInWithDiscord}>SignIn with discord</button> 
        </div>
    )
}

export default SignIn
