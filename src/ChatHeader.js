import React from 'react';
import './ChatHeader.css';
import NotificationsIcon from '@material-ui/icons/Notifications';
import EditLocationRoundedIcon from '@material-ui/icons/EditLocationRounded';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import HelpRoundedIcon from '@material-ui/icons/HelpRounded';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectDeleteMessageOption,
  setDeleteMessageOption,
} from './features/deleteMessageSlice';
import { Button, IconButton } from '@material-ui/core';
import { green, purple } from '@material-ui/core/colors';
import {
  createTheme,
  withStyles,
  makeStyles,
  ThemeProvider,
} from '@material-ui/core/styles';

const ChatHeader = ({ channelName }) => {
  const dispatch = useDispatch();
  const deleteMessageOptionState = useSelector(selectDeleteMessageOption);

  const deleteMessageOption = () => {
    if (deleteMessageOptionState == false) {
      dispatch(
        setDeleteMessageOption({
          deleteMessageOption: true,
        })
      );
    } else {
      dispatch(
        setDeleteMessageOption({
          deleteMessageOption: false,
        })
      );
    }
  };

  return (
    <div className='chatHeader'>
      <div className='chatHeader_left'>
        <h3>
          <span className='chatHeader_hash'></span>
          {channelName}
        </h3>
      </div>

      <div className='chatHeader_right'>
        <NotificationsIcon />
        <EditLocationRoundedIcon />
        <PeopleAltRoundedIcon />

        <div className='chatHeader_search'>
          <input placeholder='Search' />
          <SearchRoundedIcon />
        </div>

        <SendRoundedIcon />
        <HelpRoundedIcon />
        <div className='chatHeader_tooltip'>
          <DeleteIcon className='chatHeader_tooltipDeleteIcon' onClick={deleteMessageOption} />
          <span className='chatHeader_tooltiptext'>Delete Messages</span>
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
