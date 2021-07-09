import React, { useEffect, useRef, useState } from 'react';
import { Avatar } from '@material-ui/core';
import './Message.css';
import db from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { selectChannelId, selectNewMessageId, setChannelInfo } from './features/appSlice';
import CloseIcon from '@material-ui/icons/Close';
import { selectDeleteMessageOption } from './features/deleteMessageSlice';




const Message = ({ message, timestamp, user, id }) => {
  const dispatch = useDispatch();
  const channelId = useSelector(selectChannelId);
  const [messageId, setMessageId] = useState();
  // const [newMessageId, setNewMessageId] = useState();
  const messagesEndRef = useRef(null);
  const deleteMessageOption = useSelector(selectDeleteMessageOption);


  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ block: "end" });

  };


  useEffect(() => {
    scrollToBottom()

  }, [message])

  // useEffect(() => {
  //   db.collection('channels')
  //     .doc(channelId)
  //     .collection('messages')
  //     .onSnapshot((snapshot) =>
  //       setMessageId(snapshot.docs?.map((doc) => ({ id: doc.id })))
  //     );
  // }, [channelId]);


  // const individualMessageId = () => {
  //   db.collection('channels')
  //     .doc(channelId)
  //     .collection('messages')
  //     .orderBy('timestamp', 'asc')
  //     .onSnapshot((snapshot) =>
  //       setMessageId(snapshot.docs?.map((doc) => ({ id: doc.id })))
  //     )
  //   messageId?.map(({ id }) => setNewMessageId(id))
  // }


  const individualMessageId = () => {
    db.collection('channels')
      .doc(channelId)
      .collection('messages')
      .orderBy('timestamp', 'asc')
      .onSnapshot((snapshot) =>
        setMessageId(snapshot.docs?.map((doc) => ({ id: doc.id })))
      )
    // messageId?.map(({ id }) => setNewMessageId(id))
  }
  

  const deleteMessage = () => {
      db.collection('channels')
        .doc(channelId)
        .collection('messages')
        .doc(id)
        .delete();
  };

  const dMessage = deleteMessageOption ? 1 : 0;


  return (
    <div className='message' onClick={individualMessageId}>
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
      <CloseIcon className='message_deleteMessage' style={{ opacity: `${dMessage}` }} onClick={deleteMessage} />
    </div>
  );
};

export default Message;