import React from "react";
import "./style.css";


function Filter(props) {
    let foo = "";
    if (props.type === "Male") {
        foo = "btn btn-secondary";
    } else {
        foo = "btn btn-secondary";
    }

    return (
        <button type="button" className={foo} onClick={props.onClick}> Gender: {props.type}</button>
    );
}

export default Filter;