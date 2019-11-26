// import React from 'react';

// export const StudentData = (props) => {
//     const clickHandler = (id) => {
//         console.log('id is', id);
//     }
//     return (
//         <tr onClick={() => clickHandler(this.props.data.id)}>
//             <td >{this.props.data.id}</td>
//             <td >{this.props.data.name}</td>
//             <td >{this.props.data.rollNum}</td>
//             <td >{this.props.data.age}</td>
//         </tr>
//     )
// }

import React, { Component } from 'react';
import { connect } from "react-redux";
import { selectStudent } from '../action';


class StudentData extends Component {
    constructor(props) {
        super(props);
    }
    clickHandler = (id) => {
        this.props.selectStudent(id);
        this.props.history.push(`/student/${id}`)
    }
    render() {
        console.log('id is', this.props.history);
        return (
            <tr onClick={() => this.clickHandler(this.props.data.id)}>
                <td >{this.props.data.id}</td>
                <td >{this.props.data.name}</td>
                <td >{this.props.data.rollNum}</td>
                <td >{this.props.data.age}</td>
            </tr>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    selectStudent: (data) => dispatch(selectStudent(data)),
});

export default connect(null, mapDispatchToProps)(StudentData);