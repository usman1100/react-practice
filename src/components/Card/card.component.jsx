import React from "react"
import "./card.styles.css"


export const Card = (props) => {
    return(
        <div className="card">
            <a href="/">
            <img src={`https://robohash.org/${props.person.id}?set=set2&size=150x150`} 
            alt="robot-pic"/>
            </a>
            <p>{props.person.name}</p>
        </div>
    )
}
