import React, { useEffect, useState } from 'react';
import './Sidebar.css';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import SidebarChannel from './SidebarChannel';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import CallIcon from '@material-ui/icons/Call';
import { Avatar } from '@material-ui/core';
import MicIcon from '@material-ui/icons/Mic';
import HeadsetIcon from '@material-ui/icons/Headset';
import SettingIcon from '@material-ui/icons/Settings';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import db, { auth } from './firebase';

const Sidebar = () => {
  const user = useSelector(selectUser);
  const [channels, setChannels] = useState();

  useEffect(() => {
    db.collection('channels').onSnapshot((snapshot) =>
      setChannels(
        snapshot.docs.map((doc) => ({ 
          id: doc.id,
          channel: doc.data(),
        }))
      )
    );
  }, []);


  const handleAddChannel = () => {
    const channelName = prompt('Enter a new channel name');

    if (channelName) {
      db.collection('channels').add({
        channelName: channelName,
      });
    }
  };

  console.log(user);
  return (
    <div className='sidebar'>
      <div className='sidebar_top'>
        <h3>Discord</h3>
        <ExpandMoreIcon />
      </div>

      <div className='sidebar_channels'>
        <div className='sidebar_channelsHeader'>
          <div className='sidebar_header'>
            <ExpandMoreIcon />
            <h4>Text Channels</h4>
          </div>

          <AddIcon className='sidebar_addChannel' onClick={handleAddChannel} />
        </div>

        <div className='sidebar_channelsList'>
          {channels?.map(({ id, channel }) => ( 
            <SidebarChannel
              key={id}
              id={id}
              channelName={channel.channelName}
            />
          ))}
        </div>
      </div>

      <div className='sidebar_voice'>
        <SignalCellularAltIcon className='sidebar_voiceIcon' fontSize='large' />
        <div className='sidebar_voiceInfo'>
          <h3>Voice Connected</h3>
          <p>Stream</p>
        </div>
        <div className='sidebar_voiceIcons'>
          <InfoOutlinedIcon />
          <CallIcon />
        </div>
      </div>

      <div className='sidebar_profile'>
        <Avatar classnName='sidebar_avatar' onClick={() => auth.signOut()} />
        <div className='sidebar_profileInfo'>
          <h3>{user.display}</h3>
          <p>{user.uid.substring(0, 5)}</p>
        </div>

        <div className='sidebar_profileIcons'>
          <MicIcon />
          <HeadsetIcon />
          <SettingIcon />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
