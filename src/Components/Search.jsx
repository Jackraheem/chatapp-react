import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className='searchForm'>
        <input type='search' placeholder='find a user'/>
      </div>
      <div className='userChat'>
        <img src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=600" alt="jjj" style={{width:"50px",height:"50px", borderRadius:"50%",objectFit:"cover"}}/>
        <div className='userChatInfo'>
          <span>jane</span>
          
        </div>
      </div>
      
    </div>
  )
}

export default Search
