import { Routes, Route } from 'react-router-dom';
import Hello_World from './Routes/Hello_World';
import Hello_World2 from './Routes/Hello_World2';
import Hello_World3 from './Routes/Hello_World3';


function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <a href="/">Hello World</a>
        </li>
        <li>
          <a href="/2">Hello World2</a>
        </li>
        <li>
          <a href="/3">Hello World3</a>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Hello_World />} />
        <Route path="/0" element={<Hello_World2 />} />
        <Route path="/1" element={<Hello_World3 />} />
        
      </Routes>
    </div>
  );
}

export default App;