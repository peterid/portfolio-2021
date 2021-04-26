import React from 'react'
import Link from 'next/link'
function PortfolioItem (props){

    return(
        <div className="portfolio-item">
            <h2>{props.name}</h2>
            <h3>{props.description}</h3>
        </div>
    )
}

export default PortfolioItem