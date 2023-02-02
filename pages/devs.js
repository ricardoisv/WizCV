import Head from 'next/head';
import Image from 'next/image';
import LinkedIn from '../assets/LinkedIn.png';
import { signIn,useSession,signOut,getSession } from "next-auth/react"

const Devs = () => {
  const {data:session,status} =useSession();
  
 
  if(status==='authenticated')
  {
    return(
        <div>
            {/* <p>Welcome {session.user.name}</p> */}
        <div>
            <button onClick={() => signOut()}>Sign out</button>
        </div>
    <div className="root">
      <Head>
        <title>WizCV</title>
      </Head>
      <div className="container">
        <div className="header">
          <div className="header-title">
            <h1>Upload your LinkedIn profile and get remote job offers</h1>
          </div>
        </div>
        <div className="header-subtitle">
          <h2>To do that, go to your LinkedIn profile, click "More" then click on "Save to PDF" and bring your profile to WizCV</h2>
          <h2>Currently, PDF upload is under construction, send your PDF profile and GitHub URL to profiles@wizcv.xyz to start getting job offers in your mail, right away</h2>
      </div>
    </div>
      
    <div className="badge-container grow">
        <a href="https://www.linkedin.com/company/wizcv/" target="_blank" rel="noreferrer"/>
        <div className="badge">
            <Image src={LinkedIn} alt="LinkedIn logo" />
            <p>Find WizCV on LinkedIn</p>
          </div>
        </div>
      </div>
    </div>
    )
  }
  else
  {      return(
      <div className="root">
          <p className="header"> You are not signed in yet!</p>
          <button onClick={() => signIn()}>Sign in</button>
      </div>)
  }


};

export default Devs;