import React from "react";
import "../bootstrap-darkly.css";

export const Card = (props) => {
    return (
        <div
            className="col-sm-6 col-md-4 col-lg-3 col-xl-3 my-2 py-2
                        border rounded custom-bg"
        >
            <img
                src={`https://robohash.org/${props.person.id}?set=set2&size=150x150`}
                alt=""
            />
            <hr />
            <p className="lead">{props.person.name}</p>
            <p>{props.person.email}</p>
            <a href={"mailto:" + props.person.email}>Send Mail</a>
        </div>
    );
};
