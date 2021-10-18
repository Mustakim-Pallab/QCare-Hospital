import logo from './logo.svg';
import './App.css';
import Topbar from './Components/Homepage/Topbar/Topbar';
import Navigation from './Components/Shared/Navbar/Navigation';

function App() {
  return (
    <div className="App">
      <Topbar></Topbar>
      <Navigation></Navigation>
    </div>
  );
}

export default App;
