import React from 'react'
import './ChatHeader.css'
import NotificationsIcon from '@material-ui/icons/Notifications';
import EditLocationRoundedIcon from '@material-ui/icons/EditLocationRounded';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import HelpRoundedIcon from '@material-ui/icons/HelpRounded';
import CloseIcon from '@material-ui/icons/Close';
import { useDispatch } from 'react-redux';
import { setDeleteMessageOption } from './features/deleteMessageSlice';

const ChatHeader = ({ channelName }) => {
    const dispatch = useDispatch();

    const deleteMessageOption = () => {
        dispatch(
            setDeleteMessageOption({
                deleteMessageOption: true,  
            })
        )
    }


    return (
        <div className='chatHeader'>
            <div className="chatHeader_left">
                <h3>
                    <span className='chatHeader_hash'></span>
                    {channelName}
                </h3>
            </div>

            <div className="chatHeader_right">
                <NotificationsIcon />
                <EditLocationRoundedIcon />
                <PeopleAltRoundedIcon />

                <div className="chatHeader_search">
                    <input placeholder='Search' />
                    <SearchRoundedIcon />
                </div>

                <SendRoundedIcon />
                <HelpRoundedIcon />
                <CloseIcon onClick={deleteMessageOption} />
            </div>
        </div>
    )
}

export default ChatHeader
