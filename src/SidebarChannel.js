import React from 'react';
import { useDispatch } from 'react-redux';
import { setChannelInfo } from './features/appSlice';
import RemoveIcon from '@material-ui/icons/Remove';
import './SidebarChannel.css';
import db from './firebase';

const SidebarChannel = ({ id, channelName }) => {
  const dispatch = useDispatch();

  const removeChannel = () => {
    if (channelName) {
      db.collection('channels')
        .delete({
          channelName: channelName,
        })
    }
  };

  return (
    <div
      className='sidebarChannel'
      onClick={() =>
        dispatch(
          setChannelInfo({
            channelId: id,
            channelName: channelName,
          })
        )
      }
    >
      <span className='sidebarChannel_hash'>{channelName}</span>
      <RemoveIcon className='sidebar_removeIcon' onClick={removeChannel} />
    </div>
  );
};

export default SidebarChannel;
