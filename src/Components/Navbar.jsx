import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>Jack Chat</span>
      <div className='user'>
        <img src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>
        <span>Abella Danger</span>
        <button>Login Out</button>
      </div>
      
    </div>
  )
}

export default Navbar
