import React from 'react'
import ReposTable from './ReposTable'
import './UserInfos.css'

const UserInfos = props => {
    return (
        <div className="UserInfos">
            <img src={props.userData.avatar_url} alt={props.userData.login} />
            <h2>{props.userData.id}</h2>
            <h1>{props.userData.login}</h1>
            <h2>{props.userData.name}</h2>
            <a target="_blank" rel="noreferrer" href={props.userData.html_url}>Profile URL</a>
            <p>GitHub user since {props.userData.created_at}</p>
            <ReposTable repos={props.userRepos}></ReposTable>
        </div>
    )
}

export default UserInfos