import React from "react";
import "./style.css";

function Generate(props) {
    return (
        <button type="button" className="btn btn-secondary" {...props}>Employee Directory</button>
    );
}

export default Generate;