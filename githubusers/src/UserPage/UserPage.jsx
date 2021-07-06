import React, { useState, useEffect } from 'react'
import './UserPage.css'
import { useParams } from 'react-router'
import DataUsers from '../Data/DataUsers'
import ReposTable from './ReposTable'
import HomeIcon from '../assets/home.png'

const UserPage = props => {
    const { username } = useParams()
    const [userData, setUserData] = useState([])
    const [userRepos, setUserRepos] = useState([])

    useEffect(() => {
        const loadUserData = async () => {
            let data = await DataUsers.getUserInfo(username)
            let repos = await DataUsers.getPublicRepos(username)
            setUserData(data)
            setUserRepos(repos)
        }
        loadUserData();
    }, [])

    return (
        <div className="UserPage">
            <div className="UserInfo">
                <img src={userData.avatar_url} alt={userData.login} />
                <h2>{userData.id}</h2>
                <h1>{userData.login}</h1>
                <h2>{userData.name}</h2>
                <a target="_blank" href={userData.html_url}>Profile URL</a>
                <p>GitHub user since {userData.created_at}</p>
                <ReposTable repos={userRepos}></ReposTable>
            </div>
            <div className="ReturnHome">
                <a href="/">
                    <img src={HomeIcon} alt="Home Icon" />
                    <p>Return to Home</p>
                    </a>
            </div>
        </div>
    )
}

export default UserPage