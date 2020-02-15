import React from 'react'
import UseResource from './useResource';

const UserList = () =>{
    const users = UseResource('users')
    return(
        <ul>
            {
                users.map((user)=>(
                    <li key={user.id}>{user.name}</li>
                ))
            }
        </ul>
    )
}
export default UserList;