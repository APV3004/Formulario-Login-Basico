import logo from './logo.svg';
import  './App.css';
import './components/Login.jsx';
import Login from './components/Login.jsx';
import './components/Mensaje.jsx';
import Mensaje from './components/Mensaje.jsx';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Login />
      </header>
    </div>
  );
}

export default App;
