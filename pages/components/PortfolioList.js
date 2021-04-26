import React from 'react'
import styles from '../../styles/Home.module.css'
import PortfolioItem from './PortfolioItem'
import Link from 'next/link'

function PortfolioList(){

    return(
        <div>
        <div className="concepts"><h2> Concepts</h2></div>

        <div className="columns is-gapless is-multiline">
            <div className="column">
            <Link href="/emos">
                 <a> <PortfolioItem name="emOS 1.0" description="emOS is a workplace operating system concept based on the idea of Affective Computing - a system that understands and reacts to human emotion."/> </a>
            </Link>

            </div>
            <div className="column">
                <PortfolioItem name="emOS 2.0" description="Description" />
            </div>
            
        </div>

        <div className="commercial"><h2> Commercial</h2></div>

        <div className="columns is-gapless is-multiline">
            <div className="column  is-4">
                <PortfolioItem name="Fantastec Swap" description="Description" />
            </div>
            <div className="column  is-4">
                <PortfolioItem name="NHS MCCAED" description="Description" />
            </div>
            <div className="column  is-4">
                <PortfolioItem name="Broadcast System" description="Description" />
            </div>

            <div className="column  is-4">
                <PortfolioItem name="Extreme E" description="Description" />
            </div>

            <div className="column  is-4">
                <PortfolioItem name="eSC" />
            </div>

            <div className="column is-4">
            <Link href="/emos">
                 <a> <PortfolioItem name="Interstate" description="Description"/> </a>
            </Link>

            </div>


        </div>






        </div>

    )
}

export default PortfolioList