import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import { TextForm } from './components/TextForm';
import { About } from './components/About';

function App() {
  return (
    <>
      <Navbar title="TextUtil"/>
      <div className='container'>
        {/* <TextForm title="Enter Text Here"/> */}
        <About/>
      </div>
    </>
  );
}

export default App;
