import React, { Component } from "react";
import API from "../utils/API";
import Table from "./table";
import Pagination from "./pagination";
import SearchBox from "./searchBox";
import _ from "lodash";
import { paginate } from "../utils/paginate";


class Users extends Component {
state = {
    users: [{}],
    filteredUsers: [{}],
    pageSize: 25,
    currentPage: 1,
    sortColumn: { path: "name.first", order: "asc" }
};

componentDidMount() {
    API.getUsers()
    .then(res =>
        this.setState({
        users: res.data.results,
        filteredUsers: res.data.results
        })
    )
    .catch(err => console.log(err));
}

handleSort = sortColumn => {
    this.setState({ sortColumn });
};

handlePageChange = page => {
    this.setState({ currentPage: page });
};

handleSearch = event => {
    const value = event.target.value;
    const filteredList = this.state.users.filter(user => {
    let newValue = Object.values(user)
    .join("")
    .toLowerCase()
    return newValue.indexOf(value.toLowerCase()) !== -1;
    })

    this.setState({filteredUsers: filteredList, currentPage: 1})
}

render() {
    const { length: count } = this.state.users;
    const { filteredUsers, sortColumn, currentPage, pageSize, searchQuery } = this.state;
    const sorted = _.orderBy(filteredUsers, [sortColumn.path], [sortColumn.order]);
    const users = paginate(sorted, currentPage, pageSize);

    
    return (
    <>
        <SearchBox value={searchQuery} handleSearch={this.handleSearch}/>
        <Table users={users} onSort={this.handleSort} sortColumn={sortColumn} />
        <Pagination
        itemsCount={count}
        currentPage={currentPage}
        pageSize={pageSize}
        onPageChange={this.handlePageChange}
        />
    </>
    );
}
}

export default Users;