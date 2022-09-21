import React,{useState,useEffect} from 'react'
import '../BackToTop/BackToTop.css'
const BackToTop=()=> {
  const [isvisible,setIsVisible]=useState(false);

  const toggleVisibility=()=>{
    if(window.pageYOffset>500) {
        setIsVisible(true)
    }else {
        setIsVisible(false)
    }
}
   const scrollToTop=()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
   }


   useEffect(()=>{
    window.addEventListener("scroll",toggleVisibility);
     return ()=>{
        window.removeEventListener("scroll",toggleVisibility)
     }
   },[])
  return (
    <div className="scroll-to-top">
        {
            isvisible &&(
                <div onClick={scrollToTop} className="back-top-container">
                     Back To Top
                </div>
            )
        }
    </div>
  )
}
export default BackToTop