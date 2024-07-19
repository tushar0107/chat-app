import { useState } from 'react';


export const ChatPage = ()=>{

	const [text,setText] = useState('');

	// const loadMsgs = async()=>{}

	// const addMsgs = (msg)=>{}
  
	const sendMsg = (msg)=>{
		console.log('sent', msg);
		if(ws.readyState===WebSocket.OPEN){
		  ws.send(JSON.stringify(msg));
		}
	}
	return (
    <>
      <div id="chat-container">
		<div id="chat-area">
      	  <div className="chat-msg received message">
      	    <span className="msg-text">hello</span> <br />
      	    <span className="msg-time">07:00</span>
      	  </div>
      	  <div className="chat-msg received message">
      	    <span className="msg-text">msg 2</span> <br />
      	    <span className="msg-time">07:00</span>
      	  </div>
      	  <div className="chat-msg sent message">
      	    <span className="msg-text">msg 3</span> <br />
      	    <span className="msg-time">07:00</span>
      	  </div>
		</div>
      	<div id="actions">
      	  <input type="text" className='msg-input' value={text} onChange={(e) => {setText(e.target.value);}}></input>
      	  <button onClick={()=>sendMsg({ msg: text })} className='send-btn'>Send</button>
      	</div>
      </div>
    </>
  );
}