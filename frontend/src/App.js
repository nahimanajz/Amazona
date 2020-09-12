import React from 'react';
import './App.css';
import data from './data';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductsScreen';
import CartScreen  from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import RegisterScreen from './screens/RegisterScreen';
import { useSelector } from 'react-redux';


const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
}
const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
}

function App() {
    const userSignin = useSelector(state=> state.userSignin);
    const { userInfo } =userSignin;

  return (
    <BrowserRouter>
    <div className="grid-container">
        
        <header className="header">
            <div className="brand">
                <button onClick={openMenu}> &#9776; </button>
                <Link to="/">Amazona </Link>
            </div>
            <div className="header-links">
                <a href="cart.html">Cart</a>
                {
                    userInfo ?<Link to="/profile">{userInfo.name}</Link>:
                    <Link to="/signin"> Sign in </Link>  

                }
            </div>            
        </header>
        <aside className="sidebar">
            <h3>Shopping Categories</h3>
            <button onClick={closeMenu} className="sidebar-close-button">X</button>
            <ul>
                <li>
                    
                    <a href="index.html">Pants</a>
                </li>
                <li>
                    <a href="index.html"> Shirts</a>
                </li>
            </ul>
            
        </aside>
        <main className="main">  
            <div className="content"> 
                <Route path="/products" component={ProductScreen} />
                <Route path="/product/:id" component={ProductScreen} />
                <Route path="/cart/:id?" component={CartScreen} /> 
                <Route path="/" exact={true} component={HomeScreen} />    
                <Route path="/signin" component={SigninScreen} />   
                <Route path="/register" component={RegisterScreen} />    
                
            </div>            
        </main>
        <footer className="footer">
            &copy Janvier
        </footer>
    </div>
    </BrowserRouter>
  );
}
export default App;

