import React from 'react'
import { Parallax } from 'react-scroll-parallax'
import Bmw from './assets/bmw.jpg'

import './about_image.css'

export default props => (
    <div className='about_img_cont'>
        <div className='about_img'>
        <Parallax
             className="custom-class"
             offsetYMax={130}
             offsetYMin={-220}
             slowerScrollRate
             tag="figure"
             
        >
            <img src={Bmw} className='car_img'></img>
        </Parallax>
        </div>
    </div>
)