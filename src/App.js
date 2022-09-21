import "./App.css";
import React, { useEffect } from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Checkout from './pages/Checkout/Checkout'
import Header from "./components/header/Header";
import Login from "./pages/login/Login.js";
import Register from "./pages/register/Register";
import { useDispatch } from "react-redux";
import { auth } from "./utils/firebase";
import { setuser } from "./redux/actions";
import SingleProduct from "./pages/SIngleProduct/SingleProduct";
import Payment from "./pages/Payment/Payment";
import {loadStripe} from '@stripe/stripe-js';
import{Elements} from '@stripe/react-stripe-js';
import Orders from "./pages/Orders/Orders";

const promiss=loadStripe(
  "pk_test_51Ld6bMEx8Qozsy7SkDqG1PPEcuHt3pEQ2XBCTqbRe3s7WojUJaFieAKCL1gZI83qUaUgtbsYO94nl0WW204inl9H00vDWlM1zY")
function App() {
  let dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(setuser(authUser));
      } else {
        dispatch(setuser(null));
      }
    });
  }, [dispatch]);
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
        <Route exact path="/orders">
            <Header></Header>
            <Orders></Orders>
          </Route>
        <Route exact path="/payment">
            <Header></Header>
            <Elements stripe={promiss}>
            <Payment></Payment>
            </Elements>
           
          </Route>
        <Route exact path="/checkout">
            <Header></Header>
            <Checkout></Checkout>
          </Route>
          <Route exact path="/product/:id">
            <Header></Header>
            <SingleProduct></SingleProduct>
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>

          <Route exact path="/register">
            <Register></Register>
          </Route>
          <Route exact path="/">
            <Header></Header>
            <Home></Home>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
