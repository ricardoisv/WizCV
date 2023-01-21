import { useSession, signIn, signOut } from "next-auth/react"


const login =()=>{
  const { data: session } = useSession()
  console.log(session)
  if (session) {
    return (
      <>
        <p>Signed in as {session.user.email}</p> <br />
        <button onClick={() => signOut({callbackUrl: 'https://wizcv.xyz'})}>Sign out</button>
      </>
    )
  }
  return (
    <>
      <p>Not signed in</p> <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}
export default login