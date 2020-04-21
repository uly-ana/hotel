import React from 'react'
import RoomsFilter from './RoomsFilter'
import RooomsList from './RoomsList'

export default function RoomsContainer() {
    return (
        <div>
            <h1> hello from rooms container</h1>
            <RoomsFilter/>
            <RoomsList/>
        </div>
    )
}
