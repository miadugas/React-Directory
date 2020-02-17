import React, { Component } from 'react';

class TableBody extends Component {
    render() { 
    const {users} = this.props;
        return ( 
            <tbody>
            {users[0] !== undefined && users[0].name !== undefined ? (
            users.map(({ login, picture, name, location, cell, email }) => {
                return (
                <tr key={login.uuid}>
                    <td>
                    <img src={picture.medium} alt={name.first} />
                    </td>
                    <td>
                    {name.first} {name.last}
                    </td>
                    <td>{location.state}</td>
                    <td>{email}</td>
                    <td>{cell}</td>
                </tr>
                );
            })
            ) : (
            <></>
            )}
        </tbody>
        )
    }
}

export default TableBody;