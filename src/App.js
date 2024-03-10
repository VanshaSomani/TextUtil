import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import { TextForm } from './components/TextForm';
import { About } from './components/About';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
      <Navbar title="TextUtil"/>
      {/* <div className='container'>
        <TextForm title="Enter Text Here"/>
        <About/>
      </div> */}
      <Routes>
        <Route path='/textform' element={<TextForm/>}></Route>
        <Route path='/aboutus' element={<About/>}></Route>
      </Routes>
    </>
  );
}

export default App;
