import React from 'react'
import PageLinks from './PageLinks'
import SocialLinks from './SocialLinks'
import { socialLinks} from './data'


const Footer = () => {
  return (
    <>
 <footer className="section footer">
        
        <PageLinks parentClass='footer-links' itemClass='footer-link'/>


      <ul class="footer-icons">
      {socialLinks.map((link)=>{
                return (
                  <SocialLinks key={link.id} {...link}  itemClass='footer-icon'/>
                )
            
            })}
      </ul>
      <p class="copyright">
        copyright &copy; Bagwan's transport company
        <span id='date'>{new Date().getFullYear()}</span>. all rights reserved
      </p>
    </footer>

      
    </>
  )
}

export default Footer
