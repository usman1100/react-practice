import React from "react";

export const ListContainer = (props) => {
    return (
        <div className="container">
            <div className="row">{props.children}</div>
        </div>
    );
};
