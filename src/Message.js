import React, { useEffect, useRef, useState } from 'react';
import { Avatar } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import './Message.css';
import db from './firebase';
import { useSelector } from 'react-redux';
import { selectChannelId, selectChannelName } from './features/appSlice';

const Message = ({ message, timestamp, user }) => {
  const channelId = useSelector(selectChannelId);
  const channelName = useSelector(selectChannelName);
  const [test, setTest] = useState();

  console.log(test)


  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ block: "end" });

  };


  useEffect(() => {
    scrollToBottom()

  }, [message])

  // useEffect(() => {
  //     db.collection('channels')
  //       .doc(channelId)
  //       .collection('messages')
  //       .doc(post)
  //       .onSnapshot((snapshot) =>
  //        setTest(snapshot.docs?.map((doc) => doc.data()))
  //       );
  // }, []);


  const deleteMessage = () => {
 
      db.collection('channels').doc(channelId).collection('messages').doc()?.delete()
   
  }


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
        <p ref={messagesEndRef} className='message_messageComment'>{message}</p>
      </div>
      <CloseIcon onClick={deleteMessage} />
    </div>
  );
};

export default Message;
