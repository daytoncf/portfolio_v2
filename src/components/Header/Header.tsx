import React, { useState } from 'react'
import './Header.css'
import me from './../../assets/me_zoomed.jpg' 
import me_bw from './../../assets/me_bw.jpeg'


const Header = () => {

  const [portrait, setPortrait] = useState(me_bw);

  return (
    <div className='Header__container'>
      <div className='Header__text-container'>
        <h1 className='Header__text-title'>
          hi, i'm <span className='text-title-color'>dayton forehand</span>
        </h1>
        <h2 className='Header__text-subtitle'>computer science student and software developer</h2>
        <p className='Header__text-desc' >passionate about learning. constantly tinkering.</p>
        <a className='Header__button' href='#Projects'>to projects!</a>
      </div>
      <div className='Header__image'>
        <img 
          onMouseOver={() => {setPortrait(me)}} 
          onMouseOut={() => {setPortrait(me_bw)}}
          className='Header__image-bw' src={portrait} 
          alt='picture of me!' 
        />
        <p>(hover over me)</p>
      </div>
    </div>   
  )
}

export default Header