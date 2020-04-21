import React from 'react'
import RoomFilter from './RoomFilter'
import RoomList from './RoomList'

export default function RoomContainer() {
    return (
        <div>
            <h1> hello from rooms container</h1>
            <RoomFilter/>
            <RoomList/>
        </div>
    )
}
