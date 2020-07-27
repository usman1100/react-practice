import React from "react"
import "./custom.styles.css"


export const CustomMessage = (props) => {
    return(
        <h2 className="custom">
            {props.msg}
        </h2>
    )
}
