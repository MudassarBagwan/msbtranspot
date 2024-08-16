import React from 'react'



const Truck = ({image,title,info}) => {
  return (
    <>
    <article className="tour-card">
          <div className="tour-img-container">
            <img src={image} class="tour-img" alt={title} />
          </div>
          <div className="tour-info">
            <div className="tour-title">
              <h4>{title}</h4>
            </div>
            <p>
              {info}
            </p>
          </div>
        </article>
    </>
  )
}

export default Truck
