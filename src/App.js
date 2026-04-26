import Header from './Components/Header/Header';
import Layout from './Components/Layout/Layout';
import Favorites from './Components/Favorites/Favorites';
import About from './Components/About/About';
import './index.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Layout />
      <Favorites />
      <div className="container">
        <About />
      </div>
    </div>
  );
}

export default App;
