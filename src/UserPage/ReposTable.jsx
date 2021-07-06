import React from 'react'
import './ReposTable.css'

const ReposTable = props => {
    return (
        <div className="ReposTable">
            <table>
                <thead>
                    <tr><th>ID</th>
                        <th>NAME</th>
                        <th>URL</th>
                    </tr>
                </thead>
                <tbody>
                    {props.repos.map((item, key) => (
                        <tr key={key}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td><a href={item.html_url} target="_blank" rel="noopener noreferrer">{item.html_url}</a></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>)
}

export default ReposTable