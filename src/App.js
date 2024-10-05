import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Body from './components/Body.jsx';
import Header from './components/Header.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Restaurant from './components/Restaurant.jsx';
import Cart from './components/Cart.jsx';
import {Provider} from "react-redux"
import store from './utils/appStore.js';
import appStore from './utils/appStore.js';
import Footer from './components/Footer.jsx';


function App() {
  return (
    
    <Provider store={appStore}>
    <Router>
      <Header/>
        <Routes>
          <Route path="/" element={<Body/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
          <Route path="/restaurant/:resId" element={<Restaurant/>}></Route>
      </Routes>
      <Footer/>
    </Router>
      
    
    </Provider>
  );
}

export default App;
