import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import img1 from '../images/hero.jpg'
import img2 from '../images/john-doe.png'
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const Testimonial = () => {
  return (
    <div id='testi'>
      <Carousel infiniteLoop autoPlay
      showArrows={false} showStatus={false} interval={1000}
      showThumbs={false} showIndicators={false}>
      <div>
      <img src={img1} alt='' className='object-contain h-20 w-20'/>
        <p className='legend'>Hero img</p>
      </div>
      <div>
      <img src={img2} alt='' className='object-contain h-20 w-20' />
        <p className='legend'>normal img</p>
      </div>
        
      </Carousel>
    </div>
      
  )
}

export default Testimonial