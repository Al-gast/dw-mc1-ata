import './App.css';

// dependencies
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/home';
import Detail from './pages/detail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
