export default function StaticHero() {
  return (
    <div className="static-hero">
      <div className="container h-100">
        <div className="row h-100 align-items-center">
          <div className="col-xl-10 col-lg-10 col-md-12 col-12 mx-xl-auto mx-lg-auto static-hero__title">
            <h1>The new concept art</h1>
          </div>
        </div>
      </div>
      <style jsx>{`
        .static-hero {
          background: url("/hero.jpg"), rgba(255, 255, 255, 0.1);
          background-size: cover;
          width: 100%;
          height: calc(100vh - 50px);
        }
        .static-hero__title h1 {
          font-size: 80px;
          font-weight: 700;
          text-shadow: 0px 1px 5px rgba(0, 0, 0, 1);
          color: #ffffff;
        }
      `}</style>
    </div>
  );
}
