
import {collection,orderBy,query,limit } from "firebase/firestore";
import { useRef } from "react";
import {useCollectionData} from "react-firebase-hooks/firestore"
import ChatMessage from './ChatMessage';
import Form from "./form";
export default function ChatRoom({db,auth}) {

  const scroll=useRef()
  const messageRef=collection(db,'messages');
  const [messages]=useCollectionData(query(messageRef,orderBy('createdAt'))
        ,{idField:'id'});

        // const name=messages.map(msg=>{msg.displayName})
        console.log(messageRef.path)
  return (
    <div>
      {messages && messages.map(msg=> <ChatMessage key={msg.id} msg={msg} 
        auth={auth} db={db}  />)
        }
      
      <div ref={scroll}></div>
      <Form auth={auth} db={db} scroll={scroll} />
    </div>
  )  
}
