import React, { Component } from 'react';
import { connect } from "react-redux";

class StudentInfo extends Component {
    render() {
        console.log('props', this.props.selectedStd)
        return (
            <div>
                <p>student info {this.props.selectedStd.id}</p>
            </div>
        );
    }
}

const mapStateToProps = (store) => ({
    selectedStd: store.selectedStd
});

export default connect(mapStateToProps, null)(StudentInfo);