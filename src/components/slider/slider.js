import React,{useState,useEffect} from 'react'
import"./slider.css";
import  ArrowForwardIosIcon  from '@material-ui/icons/ArrowForwardIos';
import  ArrowBackIosIcon  from '@material-ui/icons/ArrowBackIos';


const Slider=({images})=> {
    const[index,setindex]=useState(0);

    useEffect(()=>{
        const lastIndex=images.length-1;
        if(index<0){
            setindex(lastIndex)
        }
        if(index>lastIndex){
            setindex(0)
        }
    },[index,images]
    )
   useEffect(()=>{
    let slider=setInterval(()=>{
        setindex(index+1);
    },5000);
    return()=>{
        clearInterval(slider)
    }
   },[index])
  return (
    <div className='section'>
        <div className="section-center">
            {images.map((image,indexImage)=>{
                let position="nextSlide";
                if(indexImage===index){
                    position="activeSlide"
                }
                if(indexImage===index-1 || (index ===0 && indexImage===images.length-1)){
                    position="lastSlide"
                }

                return(
                    <article className={position} key={indexImage}>
                        <img src={image} alt="banner jpng" className='banner-img'/>
                    </article>
                )
            })}
            <p className='prev' onClick={()=>setindex(index-1)}>
            <ArrowBackIosIcon></ArrowBackIosIcon>
            </p>

            <p className="next" onClick={()=>setindex(index+1)}>
            <ArrowForwardIosIcon></ArrowForwardIosIcon>
            </p>
        </div>
    </div>
  )
}
export default Slider