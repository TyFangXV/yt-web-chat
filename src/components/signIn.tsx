import React from 'react'
import styles from '../styles/components/Signin.module.css'
import supabase from '../supabase/initalization';


async function SignInWithDiscord() {
    //const [userStateValue, setUserStateValue] = useRecoilValue(userState);

    const { user, session, error } = await supabase.auth.signIn({
      provider: 'discord',
    })

    if(error) {
        console.log(error.message)
    }else{
        localStorage.setItem('userData', JSON.stringify(user))
    }
  }


  async function SignUpWithDiscord() {

    const { user, session, error } = await supabase.auth.signUp({
      provider: 'discord',
    })

    if(error) {
        console.log(error.message)
    }

  } 

function SignIn() {
    return (
        <div className={styles.container}>
            <h1>Sign In</h1>
            <button onClick={SignInWithDiscord}>SignIn with discord</button> 
            <button onClick={SignUpWithDiscord}>SignUp with discord</button> 
        </div>
    )
}

export default SignIn
