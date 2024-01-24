import { copyrightSign } from "../assets/icons"
import { footerLogo } from "../assets/images"
import { footerLinks, socialMedia } from "../constants"

const Footer = () => {
  return (
    <footer>Footer
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
          
          <div className="flex flex-col items-start">
            <a href="/">
            <img src={footerLogo}
              width={150} height={46}/>
            </a>

            <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">Get shoes ready for for the new term at your nearest Nike Store</p>

            <div className="flex gap-5 items-center mt-8">
              {socialMedia.map((item, index) =>(
                <div key={index} className="flex justify-center items-center w-12 h-12 rounded-full bg-white hover:bg-coral-red transition-all duration-10">
                  <img src={item.src} alt={item.alt} width={24} height={24}/>
                </div>
              ))}
            </div>
          </div>


          <div className="flex-1 flex flex-wrap justify-between lg:gap-10 gap-20">
                  {footerLinks.map((section) =>(
                    <div key={section}>
                      <h4 className="text-white font-montserrat text-xl leading-normal font-medium mb-6">{section.title}</h4>
                      <ul>
                      {section.links.map((link) => (
                        <li key={link.name} className="mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-coral-red cursor-pointer transition-all duration-10">
                          <a>{link.name}</a>
                        </li>
                      ))}
                      </ul>
                    </div> 
                  ))}
          </div>
      </div>

        <div className="max-sm:flex-col flex justify-between mt-10 text-white-400 max-sm:items-center gap-2">
          <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
            <img src={copyrightSign}
              width={20} height={20} alt="copyright"
              className="rounded-full"
            />
            <p> Copyright 2023. All rights reserved</p>
          </div>
          <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
        </div>
    </footer>
  )
}

export default Footer