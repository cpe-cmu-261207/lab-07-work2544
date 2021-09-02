import './App.css';
import Canvas from './components/Canvas';
import ColorPicker from './components/ColorPicker';
import Header from './components/Header';
import Utility from './components/Utility';

function App() {

  return (
    <div>
      <div className="mx-auto space-y-3">
        <Header/>
        <ColorPicker/>
        <Canvas />
        <Utility/>
      </div>
    </div >
  );
}

export default App;
