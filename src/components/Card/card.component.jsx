import React from "react"
import "../../bootstrap.css"
import "./card.styles.css"


export const Card = (props) => {
    return(
        <div className="col-sm-6 col-md-4 col-lg-2 border" >
            <img src={`https://robohash.org/${props.person.id}?set=set2&size=150x150`}  alt=""/>
            <p className="lead">{props.person.name}</p>
      </div>
    )
}