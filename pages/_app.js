import './styles.css';
import '../styles/globals.css';
import { SessionProvider } from "next-auth/react"


function App({
      Component,
      pageProps,
      session
    }) {
      return (
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
      )
    }
export default App;
