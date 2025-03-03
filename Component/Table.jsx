import React from 'react'
import "./Table.css";

export const Table = ({rows , deleteRow , editRow}) => {
    return (
         
             <div className='table-wrapper'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>AssignTo</th>
                            <th>Status</th>
                            <th>DueDate</th>
                            <th>Priority</th>
                            <th>Comments</th>
                            <th>Result</th>
                            
                            </tr>
                    </thead>
                    <tbody>
                        {
                            rows.map((row, idx) =>{
                                
                                return (
                                <tr key={idx}>
                                <td>{row.AssignTo}</td>
                                <td>{row.Status}</td>
                                <td>{row.DueDate}</td>
                                <td>{row.Priority}</td>
                                <td>{row.Comments}</td>
                                <span className='edit-btn' onClick={() => editRow(idx)}>
                                Edit
                             </span >
                             <span className='delete-btn' onClick={() =>deleteRow(idx)}>
                                Delete
                            </span>
                                </tr>
                          );
                            })
                        }
                        
                    </tbody>
                </table>
             </div>
    );
};



export default Table