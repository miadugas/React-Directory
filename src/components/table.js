import React, { Component } from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

class Table extends Component {
columns = [
    { path: "picture.medium", label: "Image" },
    { path: "name.first", label: "Name" },
    { path: "location.state", label: "State" },
    { path: "email", label: "Email" },
    { path: "cell", label: "Cell Phone" }
];
render() {
    const { users, sortColumn, onSort } = this.props;
    return (
    <table className="table">
        <TableHeader
        columns={this.columns}
        sortColumn={sortColumn}
        onSort={onSort}
        />
        <TableBody users={users} />
    </table>
    );
}
}

export default Table;