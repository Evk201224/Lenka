
import Head from 'next/head';
import { useEffect, useState } from 'react';
import ResumeUploader from '../components/ResumeUploader';
import { auth, provider } from '../utils/firebase';
import { signInWithPopup } from 'firebase/auth';

export default function Home() {
  const [user, setUser] = useState(null);

  const signIn = async () => {
    const result = await signInWithPopup(auth, provider);
    setUser(result.user);
  };

  return (
    <div>
      <Head><title>LenkaMatch | Resume Matcher</title></Head>
      <main style={{ padding: '2rem', fontFamily: 'Arial' }}>
        <h1>Welcome to LenkaMatch</h1>
        {!user ? (
          <button onClick={signIn}>Sign in with Google</button>
        ) : (
          <>
            <p>Signed in as {user.displayName}</p>
            <ResumeUploader user={user} />
          </>
        )}
      </main>
    </div>
  );
}
