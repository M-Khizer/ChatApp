import React, { useState,useEffect } from 'react'
import { doc,deleteDoc,getDocs} from "firebase/firestore";

import { Icon } from 'react-icons-kit'
import {trashO} from 'react-icons-kit/fa/trashO'

export default function ChatMessage(props) {
  const {text,uid,photoURL,displayName}=props.msg;
  const db=props.db;  
  const auth=props.auth
  const messageClass= uid === auth.currentUser.uid ? 'sent' : 'recieved'

  // const handleDelete= async (id)=>{
  //   const deleteData=doc(db,'messages',id)
  //   await deleteDoc(deleteData)
  //   console.log('delete')
  // }
  return (
    <div className={`message ${messageClass}`}>
        <img src= {photoURL} />

        <div className='message-data'>
          <p className='messageText'><p className='name'>{displayName}</p> 
          
          {text}            
          </p>
        </div>
       
        {/* <div><Icon icon={trashO} size={24} 
          className='deleteBtn'></Icon></div>
           */}
    </div>
  )
}
