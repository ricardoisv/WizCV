import Head from 'next/head';
import Image from 'next/image';
import LinkedIn from '../assets/LinkedIn.png';
//import { signIn,useSession,signOut,getSession } from "next-auth/react"

const Devs = () => {
//  const {data:session,status} =useSession();
  
 
 // if(status==='authenticated')
 // {
    return(
        <div>
            {/* <p>Welcome {session.user.name}</p> */}
        {/* <div>
            <button onClick={() => signOut()}>Sign out</button>
        </div> */}
    <div className="root">
      <Head>
        <title>WizCV</title>
      </Head>
      <div className="container">
        <div className="header">
          <div className="header-title">
            <h1>Send your LinkedIn profile and get matching job offers on your email</h1>
            <h2>Send your profile and GitHub to profiles@wizcv.xyz</h2>
          </div>
        </div>
        <div className="header-subtitle">
          <h2>Go to your LinkedIn profile, click &ldquo;More&ldquo; then click on &ldquo;Save to PDF&ldquo; and bring your profile to WizCV</h2>
          <h2>BETA version, swiping coming soon!</h2>
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
  // else
  // {      return(
  //     <div className="root">
  //         <p className="header"> You are not signed in yet!</p>
  //         <button onClick={() => signIn()}>Sign in</button>
  //     </div>)
  // }


//}
;

export default Devs;