import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { useRouter } from 'next/router'

export default function Home() {

  const r = useRouter();
  return (
    <div className={styles.container}>
      <div id='start-button'>
        <button onClick={
          ()=>r.push("/meat")
        }>Start</button>
      </div>

    </div>
  )
}
