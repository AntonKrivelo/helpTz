import Header from './Components/Header/Header';
import Layout from './Components/Layout/Layout';
import Favorites from './Components/Favorites/Favorites';
import About from './Components/About/About';
import Helping from './Components/Helping/Helping';
import './index.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Layout />
      <Favorites />
      <About />
      <Helping />
      {/* <div className="container"></div> */}
    </div>
  );
}

export default App;
