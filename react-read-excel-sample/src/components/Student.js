import React, { Component } from 'react';
import { connect } from "react-redux";
import { StudentBody } from './StudentBody';
import { StudentHeader } from "./StudentHeader";

class Student extends Component {
    render() {
        return (
            <div>
                <table className="table">
                    <StudentHeader headers={this.props.headers} />
                    <StudentBody records={this.props.data} {...this.props} />
                </table>
            </div>
        );
    }
}

const mapStateToProps = (store) => ({
    headers: store.hearders,
    data: store.data
});

export default connect(mapStateToProps, null)(Student);