import React from 'react'
import { IoPersonAddOutline } from "react-icons/io5";
import { CiVideoOn } from "react-icons/ci";
import { IoIosMore } from "react-icons/io";
import Messages from './Messages';
import Input from './Input';

const Chat = () => {
  return (
    <div className='chat'>
      <div className='chatInfo'>
        <span>jane</span>
        <div className='chatIcons'>
          <span className='is'><CiVideoOn /></span>
          <span className='is'><IoPersonAddOutline /></span>
          <span className='is'><IoIosMore /></span>
          
        </div>
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}

export default Chat
