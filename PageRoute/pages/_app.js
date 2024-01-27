import '../styles/globals.css'
import { AdtraceWrapper } from '../utils/adtrace'

export default function App({ Component, pageProps }) {
  return <AdtraceWrapper>
    <Component {...pageProps} />
  </AdtraceWrapper>
}
