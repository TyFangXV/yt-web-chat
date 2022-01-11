import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import supabase from '../src/supabase/initalization'
import styles from '../styles/Home.module.css'

const Home = () => {
  let router = useRouter();
  const [session, setSession] = useState<any>();

  useEffect(() => {
    setSession(supabase.auth.session())
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
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
       <h1>hi</h1>
      </div>
    )    
  }


}

export default Home
