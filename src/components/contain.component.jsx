import React from "react";
import "../bootstrap-darkly.css";

export const ListContainer = (props) => {
    return (
        <div className="container">
            <div className="row">{props.children}</div>
        </div>
    );
};
