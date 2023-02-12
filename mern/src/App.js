import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css';
import Home from './screens/Home';
import Login from './screens/Login';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-blackbox.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <Router>
   <Routes>
    <Route exact path='/' element={<Home/>}/>
    <Route exact path='/login' element={<Login/>}/>
   </Routes>
    </Router>
  );
}

export default App;
