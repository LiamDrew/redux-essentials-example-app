// import { createSlice } from '@reduxjs/toolkit'

// const initialState = [
//     { id: 0, name: 'Billy Bob' },
//     { id: '1', name: 'Joey Joe' },
//     { id: '2', name: 'Ricky Rick' }
// ]

// const usersSlice = createSlice({
//     name: 'users',
//     initialState,
//     reducers: {}
// })

// export default usersSlice.reducer

// import { createSlice } from '@reduxjs/toolkit'

// const initialState = [
//     { id: 0, name: 'Billy Bob' },
//     { id: 1, name: 'Joey Joe' },
//     { id: 2, name: 'Ricky Rick' }
// ]

// const usersSlice = createSlice({
//     name: 'users',
//     initialState,
//     reducers: {
//         userAdded(state, action) {
//             state.push(action.payload)
//         }
//     }
// })

// export const { userAdded } = usersSlice.actions
// export default usersSlice.reducer

import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    { id: 0, name: 'Billy Bob' },
    { id: 1, name: 'Joey Joe' },
    { id: 2, name: 'Ricky Rick' }
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        userAdded(state, action) {
            state.push(action.payload)
        },
        userRemoved(state, action) {
            const index = state.findIndex(user => user.id === action.payload)
            if (index !== -1) {
                state.splice(index, 1)
            }
        }
    }
})

export const { userAdded, userRemoved } = usersSlice.actions
export default usersSlice.reducer