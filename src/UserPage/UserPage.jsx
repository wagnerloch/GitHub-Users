import React, { useState, useEffect } from 'react'
import './UserPage.css'
import { useParams } from 'react-router'
import DataUsers from '../Data/DataUsers'
import HomeIcon from '../assets/home.png'
import UserInfos from './UserInfos'

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
    }, [username])

    return (
        <div className="UserPage">
            <UserInfos userData={userData} userRepos={userRepos}></UserInfos>            
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