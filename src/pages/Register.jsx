import React, { useState } from "react";

import {createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth,storage,db } from "../firebase";

import {ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 


import aa from "../img/aa.jpg";

const Regiester = () => {
 
  const [err,setErr] = useState(false)
  const handleSubmit = async (e)=>{
    e.preventDefault();
   const displayName = e.target[0].value;
   const email = e.target[1].value;
   const password = e.target[2].value;
   const file =e.target[3].files[0]; 


   
try{
  const res= await createUserWithEmailAndPassword(auth, email, password);

  const storageRef = ref(storage, displayName);
  
  const uploadTask = uploadBytesResumable(storageRef, file);
  
 
  uploadTask.on(

    
    (error) => {
      setErr(true)
     
    }, 
    () => {
      
      getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
       await updateProfile(res.user,{
        displayName,
        photoURL:downloadURL
       });
       await setDoc(doc(db,"users",res.user.uid),{
        uid:res.user.uid,
        displayName,
        email,
        photoURL:downloadURL
      })
    
      });
    }
  );
 
 

}
catch(err){
  setErr(true);

}
  
  
   
  
   



}
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>Jack Chat</span>
            <span className='title'>Regiester</span>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Display name' />
                <input type='email' placeholder=' email' />
                <input type='password' placeholder='password'/>
                <input type='file' style={{display:"none"}} id='file'/>
                <label htmlFor='file'>
                <img src={aa} alt='jack' style={{height:"60px",width:"60px"}}/>
                  <span>Add your avator</span>
                </label>
                <button>Sign Up</button>
                {err && <span>something went wrong</span>}

            </form>
            <p>you do not have account? Login</p>

        </div>
      
    </div>
  )
}

export default Regiester;

