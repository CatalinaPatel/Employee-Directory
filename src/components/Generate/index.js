import React from "react";
import "./style.css";

function Generate(props) {
    return (
        <button type="button" className="btn btn-secondary" {...props}>All Employees</button>
    );
}

export default Generate;