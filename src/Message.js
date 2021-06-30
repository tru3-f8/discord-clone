import React, { useEffect, useRef } from 'react';
import { Avatar } from '@material-ui/core';
import './Message.css';

const Message = ({ message, timestamp, user }) => {
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({ block: "end" });
       
      };


    useEffect(() => {
        scrollToBottom()

    },[message])

  return (
    <div className='message'>
      <Avatar />
      <div className='message_info'>
        <h4>
          {user}
          <span className='message_timestamp'>
            {new Date(timestamp?.toDate()).toUTCString()}
          </span>
        </h4>
        <p ref={messagesEndRef}>{message}</p>
      </div>
    </div>
  );
};

export default Message;
