import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import ShoppingCartOutliedIcon from '@material-ui/icons/ShoppingCartOutlined';
import {Link} from 'react-router-dom'
import {useSelector,useDispatch } from 'react-redux'
import {logoutInitiate} from '../../redux/actions'
  const Header=()=> {

  const {user,basket}=useSelector((state)=>state.data);
 let dispatch=useDispatch();
  const handleAuth=()=>{
    if(user){
      dispatch(logoutInitiate())
    }
     
  }
  return (
      <nav className="header">
        <Link to="/">
          <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"  className="header-logo" alt="amazon-logo"/>
        </Link>
        <div className="header-option" style={{marginRight:"-10px"}}>
          <LocationOnOutlinedIcon></LocationOnOutlinedIcon>
        </div>

        <div className="header-option">
          <span className="header-option1">Hello</span>
          <span className="header-option2">Select Your Address</span>

        </div>
        <div className="search">
          <select>
            <option >All</option>
          </select>
          <input type="text" className='searchInput'/>
          <SearchIcon className="searchIcon"></SearchIcon>
        </div>
        <div className="header-nav" >
          <Link to={`${user ?"/":"/login"}`} className="header-link">
            <div onClick={handleAuth}className="header-option">
            <span className="header-option1">Hello {user ? user.email:"Guest"}</span>
          <span className="header-option2">
          {user ? "Sign Out":"Sign In"}
          </span>
            </div>
          </Link>
          <Link to="/orders" className='header-link'>
            <div className="header-option">
            <span className="header-option1">Returns</span>
          <span className="header-option2">&orders</span>
            </div>
          </Link>
          <Link to="/login" className='header-link'>
            <div className="header-option">
            <span className="header-option1">Your</span>
          <span className="header-option2">Prime</span>
            </div>
          </Link>
          <Link to="/checkout" className='header-link'>

    <div className="header-basket">
      <ShoppingCartOutliedIcon></ShoppingCartOutliedIcon>

      <span className="header-option2 basket-count">{basket && basket.length}</span>
    </div>
          </Link>
        </div>
      </nav>
  )
}
export default Header