import Menu from './components/Menu.js'
import Botones from './components/Botones.js'
import Section from './components/Section.js'
import './App.css';
import Flotante01 from './components/Flotante01.js'
import Flotante02 from './components/Flotante02.js';
import Flotante03 from './components/Flotante03.js';


function App() {
  return (
    <div className="App">
      <Menu />
      <Botones />
      <Section />
      <Flotante01 />
      <Flotante02 />
      <Flotante03 />
    </div>
  );
}

export default App;
