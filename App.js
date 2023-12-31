import './App.css';
import Create from './components/create';
import Read from './components/read';
import Update from './components/update';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  return (
    
    
      
    <div className="App">
      
      
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<Create/>} />
      <Route path="/read" element={<Read/>} />
      <Route path="/update" element={<Update/>} />
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
