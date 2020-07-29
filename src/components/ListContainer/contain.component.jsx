import React from "react"
import "../../bootstrap.css"

export const ListContainer = (props) => {
    return(
        <div className="container-fluid">
        <div className="row">
            {props.children}
        </div>
         </div>
    )
}
