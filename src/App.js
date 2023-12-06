
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Chat from './Components/Chat';

function App() {
  return (
      <Router>
          <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="/signup" element={<Signup />} />
            <Route path="/chat" element={<Chat />} />
          </Routes>
      </Router>
      
  
  );
}

export default App;
