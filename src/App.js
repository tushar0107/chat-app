import { BrowserRouter, Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import {useContext} from 'react';
import { ListPage } from './pages/ListPage';
import Header from './components/Header';

const wsContext = createContext();

function App() {
  var ws;

  if(ws){
    ws.onerror = ws.onopen = ws.onclose = null;
    ws.close();
  }
  ws = new WebSocket('http://127.0.0.1:8626/7304431820');

  const loadMsgs = async()=>{}

  const addMsgs = (msg)=>{}


  if(ws.readyState===WebSocket.OPEN){
    console.log('Online');
  }else if(ws.readyState===WebSocket.CLOSED){
    console.log('Offline');
  }

  ws.onmessage = (data)=>{
    console.log(JSON.parse(data));
  }

  ws.onclose = function(){
    ws = null;
  }


  return (
    <>
      <wsContext.Provider>
        <BrowserRouter>
          <div id="main-container">
            <Header/>
            <Routes>
              <Route exact path="/" element={<ListPage />}/>
            </Routes>
          </div>
        </BrowserRouter>
      </wsContext.Provider>
    </>
  );
}

export default App;
