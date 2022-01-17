import '../src/styles/globals.css'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import 'react-toastify/dist/ReactToastify.css';
function MyApp({ Component, pageProps }: AppProps) {
  return <RecoilRoot><Component {...pageProps} /></RecoilRoot> 
}

export default MyApp
