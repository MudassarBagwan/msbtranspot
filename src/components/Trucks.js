import Title from './Title'
import { trucks } from './data'
import React from 'react'
import Truck from './Truck'


const Trucks = () => {
  return (
    <>
<section className="section" id="trucks">
    <Title title='Our' subTitle='Trucks'/>

    <div className="section-center featured-center">

      {
        trucks.map((truck)=>{

          return (
            <>
            <Truck key={truck.id} {...truck}/>
            </>
          )
        })
      }
    </div>
  </section>
  </>

  )
}

export default Trucks
