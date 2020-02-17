import React from "react";

const Jumbotron = () => {
return (
    <div
    style={{
        textAlign: "center",
        backgroundColor: "black",
        color: "white",
        fontWeight: "bold"
    }}
    className="jumbotron"
    >
    <h1 className="display-4">
        Employee Directory
        <p className="lead" style={{marginTop: "5px"}}>
        Click on a column heading and it allows you to sort in ascending or descending orders.
        <br />
        You can also search by first or last name if you choose.
        </p>
    </h1>
    </div>
);
};

export default Jumbotron;