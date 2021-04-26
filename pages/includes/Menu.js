import React from 'react'
import styles from '../../styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'
function Menu(){

    return(
    <nav className={styles.navigation}>
      <Link href="../">
        <a className={styles.pete}> 

      <Image
          src="/images/favicon.png"
          alt="Picture of the author"
          width={50}
          height={50}
          className="logo"
        />
        <span className="name">Pete Ridley</span> 
        
        </a>

      </Link>

      <Link href="/about">
        <a className="name"> About</a>
      </Link>


    </nav>
    )
 
}

export default Menu