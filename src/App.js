import Navbar from './navbar/main';
import './App.css';
import Intro from './intro/main';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar/>
        <Intro/>
      </header>
    </div>
  );
}

export default App;
