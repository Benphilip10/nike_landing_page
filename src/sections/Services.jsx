import { services } from "../constants";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  return (
    <section className="max-width justify-center flex flex-wrap gap-9 max-sm:flex-col">
      {services.map((service) =>(
        <ServiceCard
          key={service.label}
          {...service}
        />
      ))

      }
    </section>
  )
}

export default Services