import Button from "../components/Button"

const Subscribe = () => {
  return (
    <section id="contact-us" className="flex gap-10 max-container max-lg:flex-col justify-between items-center" data-aos="fade-up" data-aos-duration="600">
    <h3 className="text-4xl font-bold font-palanquin leading-[68px] lg:max-w-lg max-lg:text-center"> Sign up for 
    <span className="text-coral-red"> Updates </span> & Newsletter
    </h3>
    
    <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">

      <input type="text" placeholder="Enter a valid email address"
        className="input"
      />
      <div className="flex max-sm:justify-end items-center max-sm:w-full">
        <Button
          label='Sign up'
          fullWidth />
      </div>

    </div>
    </section>
    
  )
}

export default Subscribe