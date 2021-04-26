import React from 'react'
import Menu from './components/Menu'
import styles from '../styles/Home.module.css'
import Head from 'next/Head'
import 'bulma/css/bulma.min.css'

function About(){

    return(
        <div>
              <Head>
                <title>About - Pete Ridley - Portfolio 2021</title>
            </Head>
            <Menu/>
            <main className={styles.main}>
            <div className={styles.aboutheader}>
                    <div className={styles.colleft}>
                        <p>I have spent most of my life curious and excited about emerging technologies and fascinated by digital experiences that inspire and bring delight to people. </p>
                        <p>During my time studying Digital Media Design in 2017 where I specialised in Interaction Design, I was always drawn to the mechanics behind a thought provoking and delightful digital product. Rather than focusing on a single experience or output, I explored ways in which experiences could shift and evolve as technology does, but still continue to be enjoyable to use.</p>
                        <p>Since graduating, I have worked with large sector clients in the automotive and sports industry sitting between UX design and Front-end Web Development. On the side, I have pursued my own projects exploring technology catered towards human wellbeing and mental health.</p>
                    </div>
                    <div className={styles.colright}>
                    <img
                        src="/images/pete.png" alt="Pete Ridley" className = "pete"
                        />
                    </div>


                </div>
            </main>
        </div>
    )
}

export default About