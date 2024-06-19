import React from 'react'
import { useDispatch } from 'react-redux'
import { userAdded } from '../users/usersSlice'

export const AddUserButton = () => {
    const dispatch = useDispatch()

    const handleAddUser = () => {
        dispatch(userAdded({ id: 3, name: 'New User' }))
    }

    return (
        <button onClick={handleAddUser}>Add User</button>
    )
}

