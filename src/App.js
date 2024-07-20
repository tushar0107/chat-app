import { BrowserRouter, Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import { ListPage } from './pages/ListPage';
import Header from './components/Header';
import wsContext from './Context';

function App() {
  var socket;

  if(socket){
    socket.onerror = socket.onopen = socket.onclose = null;
    socket.close();
  }

  socket = new WebSocket('http://127.0.0.1:8626/7304431820');



  if(socket.readyState===WebSocket.OPEN){
    console.log('Online');
  }else if(socket.readyState===WebSocket.CLOSED){
    console.log('Offline');
  }

  socket.onmessage = (data)=>{
    console.log(JSON.parse(data));
  }

  socket.onclose = function(){
    socket = null;
  }


  return (
    <>
      <wsContext.Provider value={socket}>
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
