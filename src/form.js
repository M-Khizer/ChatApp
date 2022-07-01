import React, { useState } from 'react'
import { collection, addDoc,Timestamp } from "firebase/firestore"; 
import { Icon } from 'react-icons-kit'
import {send} from 'react-icons-kit/fa/send'

function Form({auth,db,scroll}) {
    const [formValue,setFormValue]=useState('');

    const sendMessage= async(e)=>{
        e.preventDefault();
        const {uid,photoURL,displayName} = auth.currentUser;
        await addDoc(collection(db,"messages"),{
            text:formValue,
            uid:uid,
            photoURL:photoURL,
            createdAt:Timestamp.now(),
            displayName:displayName
        })
        scroll.current.scrollIntoView({behavior:'smooth'})
        setFormValue('');
    }

    return (
    <form onSubmit={sendMessage}>
        <input value={formValue} onChange={e=>{setFormValue(e.target.value)}}/>
        <button><Icon icon={send} size={22} ></Icon></button>
    </form>
  )
}

export default Form