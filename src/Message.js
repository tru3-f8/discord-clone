import React from 'react'
import { Avatar } from '@material-ui/core'
import './Message.css'

const Message = ({ message, timestamp, user }) => {
    
    
    return (
        <div className='message'>
            <Avatar />
            <div className="message_info">
                <h4>
                 {user}
                 <span className='message_timestamp'>{new Date(timestamp?.toDate()).toUTCString()}</span>
                </h4>

                <p>{message}</p>
            </div>
        </div>
    )
}

export default Message
