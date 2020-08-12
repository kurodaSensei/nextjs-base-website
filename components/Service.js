export default function Service({ service }) {
  return (
    <div className="col-xl-4 col-lg-4 col-md-6 col-12 py-2">
      <div className="service">
        <div className="d-flex align-items-center">
          <img src={service.icon} alt="Service Icon"></img>
          <h2 className="ml-2">{service.title}</h2>
        </div>
        <p className="text-justify">{service.content}</p>
      </div>
    </div>
  );
}
