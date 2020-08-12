import GoogleMapReact from "google-map-react";

export default function Map({ config }) {
  return (
    <div className="w-100 map__container">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyASRX6owTG4W9fYX4cVMYIFUP03NUU0lgA" }}
        defaultCenter={config.center}
        defaultZoom={config.zoom}
      ></GoogleMapReact>
      <style jsx>{`
        .map__container {
          height: 400px;
        }
      `}</style>
    </div>
  );
}
