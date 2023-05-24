import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Pages/Client/Home';
import Add from './components/Pages/Admin';
import DetailBooks from './components/Pages/Detail';
import About from './components/Pages/Client/About';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/add' element={<Add/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/id/:id' element={<DetailBooks/>}></Route>
      </Routes>
    </div>
  );
}

export default App;