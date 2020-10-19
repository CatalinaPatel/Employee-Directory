import React from "react";
import "./style.css";

function Sort(props) {
    return (
        <button type="button" className="btn btn-secondary" {...props} >Sort By Age</button>
    );
}

export default Sort;