import React from "react";

const SearchBox = ({ handleSearch }) => {
return (
    <input
    style={{
        width: "60%",
        borderStyle: "solid",
        borderRadius: "4px",
        borderColor: "black",
        display: "block",
        margin: "0 auto",
        height: "50px",
        marginBottom: "20px"
    }}
    type="text"
    name="query"
    placeholder="Search by first or last name..."
    onChange={e => handleSearch(e)}
    />
);
};

export default SearchBox;