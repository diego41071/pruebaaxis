import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux'
import { showUsers } from '../actions'
import { Table } from 'react-bootstrap'

function App() {

    return (
        <div>
            <h2>Users List</h2>
            <Table responsive>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {this.renderUsersList()} */}
                </tbody>
            </Table>
        </div>
    );

}
// export default connect(mapStateToProps, { showUsers })(App)
export default App;