import Spline from '@splinetool/react-spline';

import './App.css';
// import firebase from 'firebase/app';
import {initializeApp} from "@firebase/app";
import { getFirestore} from "firebase/firestore";
import { getAuth} from "firebase/auth";
import {useAuthState} from "react-firebase-hooks/auth"
import SignIn from './SignIn';
import SignOut from './SignOut';
import ChatRoom from './ChatRoom';

const firebaseConfig = {
  apiKey: "AIzaSyB94e6YV7wegFpd-inZxI7PMMbqZt4VtQo",
  authDomain: "chatapp-497e5.firebaseapp.com",
  projectId: "chatapp-497e5",
  storageBucket: "chatapp-497e5.appspot.com",
  messagingSenderId: "238024861222",
  appId: "1:238024861222:web:1c4e3192cbd7b5d4a328e7",
  measurementId: "G-6TB1WV7Z0W"
};

initializeApp(firebaseConfig)
const db=getFirestore()
const auth=getAuth()


function App() {
  const [user] = useAuthState(auth);
  console.log(user)
  return (
    <div className="App">
      
      <header>
        {user && <div className='header-container'><h1 className='heading'>ChatRoom</h1> 
          <img src="chat.png" />
        </div>}
        { user && <SignOut auth={auth}/>}
        {!user && <h1 className='greetings'>Welcome to the ChatRoom </h1>}

      </header>

      <section>
        
        {user ? <ChatRoom db={db} auth={auth} /> : <SignIn auth={auth} /> }
      </section>
    </div>  
  );
}

export default App;
