import Main from "../layouts/Main";
import Header from "../includes/Header";
import StaticHero from "../components/StaticHero";
import Service from "../components/Service";
import Carousel from "../components/Carousel";
import Map from "../components/GoogleMaps";
import Form from "../components/Form";
import { getOptionsMenu, getServices, getTestimonials } from "./api";

export default function Home({ menuOptions, services, testimonials }) {
  const googleConfig = {
    center: {
      lat: 4.6120995,
      lng: -74.0936611,
    },
    zoom: 15,
  };
  return (
    <Main>
      <Header options={menuOptions}></Header>
      <StaticHero></StaticHero>
      <div className="py-5 section" id="about">
        <div className="row mx-2">
          <div className="col-xl-6 col-lg-6 col-md-6 col-12">
            <h1 className="section__title">About Us</h1>
            <p>
              Cupidatat exercitation reprehenderit commodo ad anim officia
              adipisicing. Ipsum pariatur adipisicing elit incididunt aute amet
              aute deserunt pariatur ullamco. Occaecat mollit in eiusmod
              voluptate in aliqua amet.
            </p>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-12">
            <img
              className="img-fluid"
              src="https://via.placeholder.com/600x400"
              alt="About"
              alt="Logo"
            ></img>
          </div>
        </div>
      </div>
      <div className="py-5 section" id="services">
        <div className="row mx-2">
          <div className="col-xl-6 col-lg-6 col-md-6 col-12 offset-xl-6 offset-lg-6 text-right">
            <h1 className="section__title">Our Services</h1>
          </div>
        </div>
        <div className="row mx-2 pt-2">
          {services.map((service, index) => {
            return <Service service={service} key={index}></Service>;
          })}
        </div>
      </div>
      <div className="py-5 section" id="testimonials">
        <div className="row mx-2 pt-2">
          <Carousel testimonials={testimonials}></Carousel>
        </div>
      </div>
      <div className="py-5 section" id="clients">
        <div className="row mx-2 pt-2">
          <div className="col-xl-6 col-lg-6 col-md-6 col-12">
            <h1 className="section__title">Our Clients</h1>
          </div>
        </div>
        <div className="row mx-2 pt-2 align-items-center justify-content-center">
          <div className="col-2 px-3">
            <img
              src="/logos/logotype/black/amara.png"
              className="img-fluid"
              alt="Logo"
            ></img>
          </div>
          <div className="col-2 px-3">
            <img
              src="/logos/logotype/black/asgardia.png"
              className="img-fluid"
              alt="Logo"
            ></img>
          </div>
          <div className="col-2 px-3">
            <img
              src="/logos/logotype/black/atica.png"
              className="img-fluid"
              alt="Logo"
            ></img>
          </div>
          <div className="col-2 px-3">
            <img
              src="/logos/logotype/black/aven.png"
              className="img-fluid"
              alt="Logo"
            ></img>
          </div>
          <div className="col-2 px-3">
            <img
              src="/logos/logotype/black/circle.png"
              className="img-fluid"
              alt="Logo"
            ></img>
          </div>
          <div className="col-2 px-3">
            <img
              src="/logos/logotype/black/code-lab.png"
              className="img-fluid"
              alt="Logo"
            ></img>
          </div>
          <div className="col-2 px-3">
            <img
              src="/logos/logotype/black/earth-2.png"
              className="img-fluid"
              alt="Logo"
            ></img>
          </div>
          <div className="col-2 px-3">
            <img
              src="/logos/logotype/black/fossa.png"
              className="img-fluid"
              alt="Logo"
            ></img>
          </div>
          <div className="col-2 px-3">
            <img
              src="/logos/logotype/black/fox-hub.png"
              className="img-fluid"
              alt="Logo"
            ></img>
          </div>
          <div className="col-2 px-3">
            <img
              src="/logos/logotype/black/hexa.png"
              className="img-fluid"
              alt="Logo"
            ></img>
          </div>
        </div>
      </div>
      <div className="py-5 section" id="contact">
        <div className="row mx-2">
          <div className="col-12 text-center">
            <h1 className="section__title">Contact</h1>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 col-12">
            <Map config={googleConfig}></Map>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 col-12">
            <Form></Form>
          </div>
        </div>
      </div>
    </Main>
  );
}

export const getServerSideProps = async () => {
  const menuOptions = await getOptionsMenu();
  const services = await getServices();
  const testimonials = await getTestimonials();
  return {
    props: { menuOptions, services, testimonials },
  };
};
