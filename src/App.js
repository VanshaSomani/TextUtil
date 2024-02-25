import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import { TextForm } from './components/TextForm';

function App() {
  return (
    <>
      <Navbar title="TextUtil"/>
      <div className='container'>
        <TextForm title="Enter Text Here"/>
      </div>
    </>
  );
}

export default App;
