import React from 'react';
import StudentData from "./Studentdata";

export const StudentBody = (props) => {
    const rows = props.records.map((info, index) => {
        return (
            <StudentData {...props} data={info} key={index} />
        )
    })
    return (
        <tbody>
            {rows}
        </tbody>
    )
}