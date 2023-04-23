
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Signup from './components/Signup';
import Signin from './components/Signin';
import Home from './components/Home';
import Addbook from './components/Addbook';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signin/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/addbooks' element={<Addbook/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
