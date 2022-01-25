import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

import styles from '../src/styles/Home.module.css';



import { userState } from '../src/state/auth';
import supabase from '../src/supabase/initalization';
import { User, FriendList } from '../src/types/auth';
import Sidebar from '../src/components/sidebar';
import { getUserFriendList, saveUser } from '../src/supabase/user';

const Home = async() => {
  const [_userStateValue, setUserStateValue] = useRecoilState<User>(userState);
  //const [FriendListStateData, SetFriendListData] = useRecoilState<FriendList[]>(FriendListState);
  const [session, setSession] = useState<any>();

  useEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    //if a user session is found, set the user state
    if (session) {
      const user = supabase.auth.user();
      const userData: User = {
        id: `${user?.id}`,
        name: user?.user_metadata.full_name,
        email: `${user?.email}`,
        image: `${user?.user_metadata.avatar_url}`,
        online : true
      };
      saveUser(userData);
      setUserStateValue(userData);

      //get the user friend list 

    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);

  //checks if the user is online
  useEffect(() => {
    window.addEventListener('online', () => {
      setUserStateValue({ ..._userStateValue, online: true });
    }
    );
    window.addEventListener('offline', () => {
      setUserStateValue({ ..._userStateValue, online: false });
    }
    );
  }, [_userStateValue, setUserStateValue]);

  if (!session) {
    return (
      <div className={styles.container}>
        <div className={styles.center}>
          <h1>Welcome to Next.js with Supabase</h1>
          <p>This is the home page.</p>
          <p>
            <Link href="/auth">Auth</Link>
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.container}>
        <Sidebar />
      </div>
    );
  }
};

export default Home;
