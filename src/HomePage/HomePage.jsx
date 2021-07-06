import React, { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './HomePage.css'
import Header from './Header'
import User from './User'
import DataUsers from '../Data/DataUsers'

const HomePage = props => {

    const [usersList, setUsersList] = useState([])

    useEffect(() => {
        const loadUsers = async () => {
            let list = await DataUsers.getUsers(0);
            setUsersList(list)
        }
        loadUsers();
    }, [])

    const updateList = useCallback(async (lastId) => {
        let list = await DataUsers.getUsers(lastId)
        setUsersList(list)
    }, [])

    return (
        <div className="HomePage">
            <Header></Header>
            <div className="UsersList">
                {usersList.map((item, key) => (
                    <Link key={key} to={`/user/${item.login}`}>
                        <User id={item.id} avatar={item.avatar_url}>
                            {item.login}
                        </User>
                    </Link>
                ))}
            </div>
            <div className="NavButtons">
                <button onClick={() => {
                    updateList(0)
                }}>First Page</button>
                <button onClick={() => {
                    updateList(usersList[usersList.length - 1].id)
                }}>Next Page</button>
            </div>
        </div>
    )
}

export default HomePage