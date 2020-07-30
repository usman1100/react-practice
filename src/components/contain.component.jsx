import React from "react"
import "../bootstrap.css"

export const ListContainer = (props) => {
    return(
        <div className="container">
        <div className="row">
            {props.children}
        </div>
         </div>
    )
}
