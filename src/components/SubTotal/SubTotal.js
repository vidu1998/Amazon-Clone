import React from 'react'
import './SubTotal.css'
import { useSelector } from 'react-redux'
import CurrencyFormat from 'react-currency-format'
import {useHistory} from 'react-router-dom'
import{getBasketTotal } from "../../utils/BasketTool"
const SubTotal=()=> {
    const {basket,user}=useSelector(state=>state.data)
let history=useHistory()

    const handleCheckout=()=>{
      if(user){
        history.push("/payment")
      }else{
        history.push("/login")
      }
    }
  return (
    <div className="subtotal">
     <CurrencyFormat
     renderText={(value)=>(
      <>
        <p>
          subTotal({basket.length} items) :<strong>
            {value}
          </strong>
          <small className='subtotal-gift'>
            <input type="checkbox" />
            This order contain a gift
          </small>
        </p>
      </>
     )}
     decimalScale={2}
     value={getBasketTotal(basket)}
     displayType={"text"}
     thousandSeparator={true}
     prefix={"$"}
     >

     
     </CurrencyFormat>
     <button onClick={handleCheckout}>Proceed to CHeckout</button>
    </div>
  )
}

export default SubTotal