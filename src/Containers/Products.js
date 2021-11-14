import React, {useState} from 'react';
import section3 from '../images/section3-image.png';
import leftArrow from '../images/Icon feather-arrow-left-circle.png';
import rightArrow from '../images/Icon feather-arrow-right-circle.png';
import { dataProducts } from '../Components/dataProducts';



export default function Products(){

  const [currSlide, setCurrSlide] = useState(0);

  const handleNext = () => {
    if(currSlide !== dataProducts.length - 1){
      setCurrSlide(currSlide + 1)
    }
    else setCurrSlide(0)
  }

  const handlePrev = () => {
    if(currSlide !== 0){
      setCurrSlide(currSlide - 1)
    }
    else setCurrSlide(dataProducts.length - 1)
  }

    return (
      <section id="products">
      <div class="products__maindiv">
        <img
          class="products__img"
          src={section3}
          alt=""
        />
        <div class="products__imgdiv">
          <p class="products__textprimary">{dataProducts[currSlide].primary}</p>
          <h2 class="products__h2">{dataProducts[currSlide].h2}</h2>
          <p class="products__textsecondary">
            {dataProducts[currSlide].secondary}
          </p>
          <div class="products__arrowdiv">
            <img
              class="products__icon"
              src={leftArrow}
              alt="flecha izquierda"
              onClick={handlePrev}
            />
            <img
              class="products__icon"
              src={rightArrow}
              alt="flecha derecha"
              onClick={handleNext}
            />
          </div>
        </div>
      </div>
    </section>
    )
}