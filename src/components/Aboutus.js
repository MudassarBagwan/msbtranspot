import React from 'react'
import Title from './Title'
import aboutimg from '../images/Hero.jpg'


const Aboutus = () => {
  return (
    <>
            <section class="section" id="about">
      
      <Title title='about'  subTitle='us'/>
        <div class="section-center about-center">
          <div class="about-img">
            <img
              src={aboutimg}
              class="about-photo"
              alt="awesome beach"
            />
          </div>
          <article class="about-info">
            <h3>Contact US</h3>
            <p>
              We offer Best deal on complete Home shifts and Diffrents kinds of delivers.
            </p>
            <p>
                You can call us  on This Mobile No  <span> +91 7276803113</span>
            </p>
            <p>
            You can Chat us with with whatsapp on Number   <a 
                        href="http://wa.me/917276803113"
                        target="_blank"
                        rel='noreferrer'
                        className='nav-link'
                      ><i class='fab fa-whatsapp'> +91 7276803113 </i>
                </a>  
            </p>

           
          </article>
        </div>
      </section>
    </>
  )
}

export default Aboutus
