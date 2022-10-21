import './App.css';

// dependencies
import { BrowserRouter, Route, Routes } from "react-router-dom";
import home from './pages/home';
import detail from './pages/detail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={home}/>
        <Route path='/detail/:id' element={detail}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
