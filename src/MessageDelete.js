import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import { useSelector } from 'react-redux';
import { selectChannelId } from './features/appSlice';
import db from './firebase';

const MessageDelete = ({ id }) => {
  const channelId = useSelector(selectChannelId);

  const deleteMessage = () => {
    db.collection('channels')
      .doc(channelId)
      .collection('messages')
      .doc(id)
      .delete();
  };

  return (
    <div>
      <CloseIcon onClick={deleteMessage} />
    </div>
  );
};

export default MessageDelete;
