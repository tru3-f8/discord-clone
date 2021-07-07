import React, { useEffect, useState } from 'react';
import './Chat.css';
import ChatHeader from './ChatHeader';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import GiftIcon from '@material-ui/icons/Gif';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import Message from './Message';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import { selectChannelId, selectChannelName, selectNewMessageId } from './features/appSlice';
import db from './firebase';
import firebase from 'firebase';

const Chat = () => {
  const user = useSelector(selectUser);
  const channelId = useSelector(selectChannelId);
  const channelName = useSelector(selectChannelName);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

 
console.log(messages)

  useEffect(() => {
    if (channelId) {
      db.collection('channels')
        .doc(channelId)
        .collection('messages')
        .orderBy('timestamp', 'asc')
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs?.map((doc) => ({ data: doc.data(), id: doc.id })))
        );
    }
  }, [channelId]);



  const sendMessage = (e) => {
    e.preventDefault();

    db.collection('channels').doc(channelId).collection('messages')?.add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      message: input,
      user: user.display,
    });

    setInput('');

  };

  return (
    <div className='chat'>
      <ChatHeader channelName={channelName} />

      <div className='chat_messages'>
        {messages.map(({ data, id }) => (
          <Message
            timestamp={data.timestamp}
            message={data.message}
            user={data.user}
            id={id}
          />
        ))}
      </div>

      <div className='chat_input'>
        <AddCircleIcon fontSize='large' />
        <form>
          <input
            value={input}
            disabled={!channelId}
            onChange={(e) => setInput(e.target.value)}
            placeholder={`Message #${channelName}`}
          />
          <button
            className='chat_inputButton'
            type='submit'
            disabled={!channelId}
            onClick={sendMessage}
          >
            Send Message
          </button>
        </form>

        <div className='chat_inputIcons'>
          <CardGiftcardIcon fontSize='large' />
          <GiftIcon fontSize='large' />
          <EmojiEmotionsIcon fontSize='large' />
        </div>
      </div>
    </div>
  );
};

export default Chat;
