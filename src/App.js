import styles from '../src/styles/styles.css'
import Footer from './components/Footer';
import SearchBox from './components/SearchBox';
import normalize from './styles/normalize.css'


function App() {
  return (
  
  <div className='wrapper'>
    <div className='title'>
      <img src="https://img.icons8.com/plasticine/100/000000/rick-sanchez.png" className='rick'/>
      <h1>Rick and Morty WIKI</h1>
      <img src="https://img.icons8.com/plasticine/100/000000/morty-smith.png" className='morty'/>
      < SearchBox />
    </div>
    {/* <Footer /> */}
  </div>
  
  );
}

export default App;
