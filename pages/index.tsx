import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import Input from '../src/components/input'
import { userState } from '../src/state/auth'
import supabase from '../src/supabase/initalization'
import { User } from '../src/types/auth'
import styles from '../styles/Home.module.css'

const Home = () => {
  const [_userStateValue, setUserStateValue] = useRecoilState<User>(userState);
  const [session, setSession] = useState<any>();

  useEffect(() => {
    setSession(supabase.auth.session())

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    //if a user session is found, set the user state
    if(session){
      const user = supabase.auth.user();
      const userData:User = {
        id : `${user?.id}`,
        name : user?.user_metadata.full_name,
        email :`${user?.email}`,
        image : `${user?.user_metadata.avatar_url}`,
      }
      setUserStateValue(userData)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  if(!session){
    return (
      <div className={styles.container}>
        <div className={styles.center}>
          <h1>
            Welcome to Next.js with Supabase
          </h1>
          <p>
            This is the home page.
          </p>
          <p>
            <Link href="/auth">Auth</Link>
          </p>
        </div>
      </div>
    )
  }else{
    return (
      <div className={styles.container}>
       <Input/>
      </div>
    )    
  }


}

export default Home
