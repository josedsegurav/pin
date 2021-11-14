import React, {useState} from 'react';
import toplogo from '../images/top-logo.png';
import Button from '../Components/Button';
import { headerImgs } from './headerImgs';


export default function Navbar (){

  const [currImg, setCurrImg] = useState(0);

  const handleForward = () => {
    if(currImg !== headerImgs.length -1){
    setCurrImg(currImg + 1)
  }
  else setCurrImg(0)
  }

  return(
        <header>
      <section onClick={handleForward} id="header" style={{backgroundImage: `url(${headerImgs[currImg].img})`}} >
        <nav class="header__nav">
          <img
            src={toplogo}
            alt="25watts"
            class="header_nav__img"
          />  
          <ul class="header__ul">
            <li class="header_ul__elements"><a href="#header">Home</a></li>
            <li class="header_ul__elements"><a href="#about">About</a></li>
            <li class="header_ul__elements"><a href="#products">Products</a></li>
            <li class="header_ul__elements"><a href="#services">Services</a></li>
            <li class="header_ul__elements"><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <hr class="header__hr" />
        <p class="header__p">Sed ut perspiciatis unde omnis iste natus</p>
            <p class="header__p--small">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque.
            </p>
            <Button className="header__button" name="Read more"/>
            <div className="carousel_dots">
              {headerImgs.map((id, index) => (
                <div className={currImg === index ? "dot_active" : "dot"}></div>                
              ))}
            </div>
      </section>
    </header>
    )
}