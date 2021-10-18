import logo from './logo.svg';
import './App.css';
import Topbar from './Components/Homepage/Topbar/Topbar';
import Navigation from './Components/Shared/Navbar/Navigation';
import Banner from './Components/Homepage/Banner/Banner';

function App() {
  return (
    <div className="App">
      <Topbar></Topbar>
      <Navigation></Navigation>
      <Banner> </Banner>
    </div>
  );
}

export default App;
