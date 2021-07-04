import React, { useEffect, useRef, useState } from 'react';
import { Avatar } from '@material-ui/core';
import './Message.css';
import db from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { selectChannelId, selectNewMessageId, setChannelInfo } from './features/appSlice';
import MessageDelete from './MessageDelete';


const Message = ({ message, timestamp, user, id }) => {
  const dispatch = useDispatch;
  const channelId = useSelector(selectChannelId);
  const [messageId, setMessageId] = useState();
  const newMessageId = useSelector(selectNewMessageId);

console.log(newMessageId)

  const messagesEndRef = useRef(null);

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


  const individualMessageId = () => {
    db.collection('channels')
      .doc(channelId)
      .collection('messages')
      .onSnapshot((snapshot) =>
        setMessageId(snapshot.docs?.map((doc) => ({ id: doc.id })))
      );
  }

  const dispatchTest = () => {
    dispatch(
      setChannelInfo({
        newMessageId: 'test',
      })
    )
  }

  dispatchTest()


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
      {/* {messageId?.map(({ id }) => (
          <MessageDelete
            id={id}
          />
        ))} */}
    </div>
  );
};

export default Message;