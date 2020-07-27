import React from "react"
import "./contain.styles.css"


export const ListContainer = (props) => {
    return(
        <div className="container">
            {props.children}
        </div>
    )
}
