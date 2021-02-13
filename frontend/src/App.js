import React from 'react';
import './App.css';
import data from './data';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductsScreen from './screens/ProductsScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen  from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import RegisterScreen from './screens/RegisterScreen';
import { useDispatch, useSelector } from 'react-redux';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import { signout } from './actions/UserActions';
import { user } from './config/userInfo';
import OrderScreen from './screens/OrderScreen';
import OrderHistory from './screens/OrderHistory';
import ProfileSCreen from './screens/ProfileScreen';
import PrivateRoute from './components/PrivateRoute';
 
const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
}
const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
}

function App() {
    const cartInfo = useSelector(state=>state.cart);
    const { cartItems } = cartInfo;
    const signIn = useSelector(state=>state.userSignin)
    const { userInfo } = signIn;
    const dispatch = useDispatch();
    const signoutHandler = () => {
        dispatch(signout());
        
      };
      
  return (
    <BrowserRouter>
    <div className="grid-container">
        
        <header className="header">
            <div className="brand">
                <button onClick={openMenu}> &#9776; </button>
                <Link to="/">Amazona </Link>
            </div>
            <div className="header-links">
                <Link to="/cart"> Cart { cartItems && cartItems.length > 0 &&  <span className="badge">{cartItems.length}</span>}</Link>  
                {  user ?(
                    <div className="dropdown">
                        <Link to="/">
                            {user} <i className="fa fa-caret-down"></i>
                        </Link>
                        <ul className="dropdown-content">
                            <li>
                            <Link to="/profile">User Profile</Link>
                            </li>
                            <li>
                                 <Link to="/orderhistory">Order History</Link>
                            </li>
                            <li>
                            <Link onClick={signoutHandler}>
                                Sign Out
                            </Link>
                            </li>
                        </ul>
                    </div>
                    
                   ):(
                    <Link to="/signin"> Sign in </Link>  

                    )}
                    {userInfo && userInfo.isAdmin &&(
                        <div className="dropdown">
                            <Link to="/#admin"> Admin <i classname="fa fa-caret"></i>
                            </Link>
                         <ul className="dropdown-content">
                             <li><Link to="/dashboard"> Dashboard </Link></li>
                             <li><Link to="/productlist"> Products </Link></li>
                             <li><Link to="/orderlist"> Orders </Link></li>
                             <li><Link to="/userlist"> Users </Link></li>
                         </ul>   
                        </div>

                    )}
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
                <Route path="/products" component={ProductsScreen} />
                <Route path="/product/:id" component={ProductScreen} />
                
                <Route path="/shipping" component={ShippingScreen} />
                <Route path="/cart/:id?" component={CartScreen} /> 
                <Route path="/" exact={true} component={HomeScreen} />    
                <Route path="/signin" component={SigninScreen} />   
                <Route path="/register" component={RegisterScreen} />
                <Route path="/payment" component={PaymentScreen} /> 
                <Route path="/placeorder" component={PlaceOrderScreen} />   
                <Route path="/order/:id" component={OrderScreen} />   
                <Route path="/orderHistory" component={OrderHistory} />   
                <PrivateRoute path="/profile" component={ProfileSCreen} />   
               
                
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

