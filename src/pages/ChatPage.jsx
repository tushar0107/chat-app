import { useContext, useState } from 'react';
import wsContext from '../Context';

export const ChatPage = ()=>{

	const socket = useContext(wsContext);

	const [text,setText] = useState('');

	const [chats,setChats] = useState([]);

	// const loadMsgs = async()=>{}

	// const addMsgs = (msg)=>{}
  
	const sendMsg = (msg)=>{
		console.log('sent', msg);
		if(socket.readyState===WebSocket.OPEN){
		  socket.send(JSON.stringify(msg));
		}
	}
	return (
    <>
      <div id="chat-container">
		<div id="chat-area">
			{
				chats.map((chat,index)=>{
					return (
            			<div className="chat-msg received message">
            			  <span className="msg-text">chat.msg</span> <br />
            			  <span className="msg-time">chat.time</span>
            			</div>
          			);
				})
			}
      	  
		</div>
      	<div id="actions">
      	  <input type="text" className='msg-input' value={text} onChange={(e) => {setText(e.target.value);}} placeholder='Enter Message...'></input>
      	  <button onClick={()=>sendMsg({ msg: text })} className='send-btn'>Send</button>
      	</div>
      </div>
    </>
  );
}