
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Img_1 from './components/Img_1'
import Img_2 from './components/Img_2'
import Img_3 from './components/Img_3'
import Img_4 from './components/Img_4'
import Img_5 from './components/Img_5'
import Img_6 from './components/Img_6'
import Img_7 from './components/Img_7'
import Img_8 from './components/Img_8'
import Img_9 from './components/Img_9'
import Navegation from './components/Navegation';

function App() {
  return (
  <Router>
    <Routes>
      <Route path="/Img_1" Component={Img_1}  />
      <Route path="/Img_2" Component={Img_2}  />
      <Route path="/Img_3" Component={Img_3}  />
      <Route path="/Img_4" Component={Img_4}  />
      <Route path="/Img_5" Component={Img_5}  />
      <Route path="/Img_6" Component={Img_6}  />
      <Route path="/Img_7" Component={Img_7}  />
      <Route path="/Img_8" Component={Img_8}  />
      <Route path="/Img_9" Component={Img_9}  />
    </Routes>
    <Navegation />
  </Router>
  );
}

export default App;
