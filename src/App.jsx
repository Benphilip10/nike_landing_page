import { Hero, CustomerReviews, Products, Subscribe, Services, SpecialOffer, SuperQuality, Footer} from './sections';
import Nav from './components/Nav';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

const App = () => {

  useEffect(() => {
    AOS.init();
  }, [])
  
  return (

    <main className="relative">
      <Nav/>
      
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero/>
      </section>

      <section className="padding">
        <Products/>
      </section>

      <section className="padding">
        <SuperQuality/>
      </section> 

      <section className="padding-x py-10">
        <Services/>
      </section>

      <section className="padding">
        <SpecialOffer/>
      </section> 

      <section className="padding bg-pale-blue">
        <CustomerReviews/>
      </section> 

      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe/>
      </section> 

      <section className="padding-x padding-t bg-black pb-8">
        <Footer/>
      </section> 

 
    </main> 
    
  )
}

export default App
