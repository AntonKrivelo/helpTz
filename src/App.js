import Header from './Components/Header/Header';
import Layout from './Components/Layout/Layout';
import Favorites from './Components/Favorites/Favorites';
import About from './Components/About/About';
import Helping from './Components/Helping/Helping';
import Questions from './Components/Questions/Questions';
import Footer from './Components/Footer/Footer';
import './index.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Layout />
      <Favorites />
      <About />
      <Helping />
      <Questions />
      <Footer />
      {/* <div className="container"></div> */}
    </div>
  );
}

export default App;
