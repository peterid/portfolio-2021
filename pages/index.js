import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Menu from './components/Menu'
import Main from './components/Main'
import 'bulma/css/bulma.min.css';
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pete Ridley - Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p> Hello World </p>
      {/* <Menu />
      <Main /> */}
    </div>
  )
}
