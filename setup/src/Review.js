import React, { useState } from 'react';
import  reviews from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index,setIndex]= useState (0);
  //console.log(people);
  const {name,job,image,text}= reviews [index]

  const checkNumber=(number)=>{
if(number > reviews.length -1)
{
  
  return 0;
}
if(number < 0 )
{
  return <h4>No Data</h4>;
}
return number;
  }
  const nextPerson=()=>{
    setIndex((index)=>{
      let newIndex=index +1;
      return checkNumber(newIndex);
    });
  }
  const prevPerson=()=>{
    setIndex((index)=>{
let newIndex=index-1;
return checkNumber(newIndex);
    });
  }
  return (
    <article>
<div className='img-container'>
  <img src={image} alt={name} className='person-img'></img>
  <span className='quote-icon' >
  <FaQuoteRight/>
  </span>
</div>
<h4 className='author'>{name}</h4>
<p className='job'>{job}</p>
<p className='info'>{text}</p>
<div className='button-container'>
  <button className='prev-btn' onClick={prevPerson}><FaChevronLeft /></button>
  <button className='next-btn' onClick={nextPerson}><FaChevronRight/></button>
  </div>
  <button className='random-btn' > Surprise me</button>
  
    </article>
    

  );
};

export default Review;
