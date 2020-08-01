import React from "react";
import "../bootstrap-darkly.css"

export const Header = (props) => {
    return (
        <div class="jumbotron">
            <h1 class="display-3">{props.children}</h1>
        </div>
    );
};
