import Head from 'next/head'
import { useAdtraceContext } from '../utils/adtrace'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const adtraceSdk = useAdtraceContext()
  return (
    <>
      <Head>
        <title>Adtrace Web SDK Demo</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <main className={styles.main}>
            <h3>Adtrace Web SDK Demo (Next.js)</h3>
            <button
                className={styles.button}
                onClick={() => adtraceSdk.trackEvent({
                    eventToken: 'qpw44u',
                    revenue: 10,
                    currency: 'IRR',
                    callbackParams: [
                        {key: 'key', value: 'value'},
                        {key: 'foo', value: 'bar'}
                    ]
                })}
            >
                Event tracking
            </button>
            <button
                className={styles.button}
                onClick={() => {
                    console.log(adtraceSdk?.getAttribution())
                }}
            >
                GetAttribution (console)
            </button>
            <button
                className={styles.button}
                onClick={() => {
                    console.log(adtraceSdk?.getWebUUID())
                }}
            >
                GetWebUUID (console)
            </button>
        </main>
    </>
  )
}
