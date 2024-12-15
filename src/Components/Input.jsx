import React from 'react';
import { IoMdAttach } from "react-icons/io";
import { RiImageAddLine } from "react-icons/ri";
import { IoSend } from "react-icons/io5";

const Input = () => {
  return (
    <div className='input'>
      <input type="text" placeholder="Type Something...."/>
      <div className="send">
        <img src="" alt=""/>
        <input type="file" style={{display:"none"}} id="file"/>
        <label htmlFor="file">
       <p className='ic'> <IoMdAttach /></p>
        </label>
        <input type="file" style={{display:"none"}} id="file"/>
        <label htmlFor="file">
       <p className='ic'> <RiImageAddLine /></p>
        </label>
        <button><IoSend /></button>

      </div>
    </div>
  )
}

export default Input
