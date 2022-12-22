import Home from "./pages/Home";
import {Routes,Route} from 'react-router-dom';
import Navbar from "./components/Navbar.jsx";
import Form from "./pages/Form.js";
import './sass/index.scss';
import Detail from "./pages/Detail.js";
import Footer from "./components/Footer.jsx";

function App() {
  return (
  <>
  <Navbar/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/form' element={<Form/>}/>
    <Route path='/detail/:codigo' element={<Detail/>}/>
  </Routes>
  <Footer/>
  </>
  );
}

export default App;
