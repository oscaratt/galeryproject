import React from 'react'
import {Link} from 'react-router-dom'
import Img_1 from './Img_1'
import Img_2 from './Img_2'
import Img_3 from './Img_3'
import Img_4 from './Img_4'
import Img_5 from './Img_5'
import Img_6 from './Img_6'
import img_7 from './Img_7'
import Img_8 from './Img_8'
import Img_9 from './Img_9'

const Navegation = () => {
  return (
    <div>
         <Link to= "/Img_1"> 
             <figure>
                     <Img_1 />
                     <figcaption>Bogotá</figcaption>
             </figure>
         </Link>
         <Link to= "/Img_2"> 
             <figure>
                     <Img_2/>
                     <figcaption>Bogota</figcaption>
             </figure>
         </Link>  
         <Link to= "/Img_3"> 
             <figure>
                     <img src={Img_3} alt=''/>
                     <figcaption>Bogota</figcaption>
             </figure>
         </Link> 
         <Link to= "/Img_4"> 
             <figure>
                     <Img_4/>
                     <figcaption>Bogota</figcaption>
             </figure>
         </Link> 
         <Link to= "/Img_5"> 
             <figure>
                     <Img_5/>
                     <figcaption>Bogota</figcaption>
             </figure>
         </Link> 
         <Link to= "/Img_6"> 
             <figure>
                     <Img_6/>
                     <figcaption>Bogota</figcaption>
             </figure>
         </Link> 
         <Link to= "/Img_7"> 
             <figure>
                     <img_7/>
                     <figcaption>Bogota</figcaption>
             </figure>
         </Link> 
         <Link to= "/Img_8"> 
             <figure>
                     <Img_8/>
                     <figcaption>Bogota</figcaption>
             </figure>
         </Link> 
         <Link to= "/Img_9">  
             <figure>
                     <Img_9/>
                     <figcaption>Bogota</figcaption>
             </figure>
         </Link> 
    </div>
  )
}

export default Navegation
