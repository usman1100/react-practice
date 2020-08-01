import React from "react";
import "../bootstrap-darkly.css"

export const SearchBox = ({ func }) => {
    return (
        <div className="container">
            <input
                type="search"
                className="form-control my-3 px-5"
                placeholder={"Search name"}
                onChange={func}
            ></input>
        </div>
    );
};
