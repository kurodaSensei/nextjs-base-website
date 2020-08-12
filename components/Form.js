export default function Form() {
  return (
    <form>
      <div className="row my-2">
        <div className="col-md-6 col-12">
          <input
            type="text"
            className="form-control"
            placeholder="First name"
          />
        </div>
        <div className="col-md-6 col-12">
          <input type="text" className="form-control" placeholder="Last name" />
        </div>
      </div>
      <div className="row my-2">
        <div className="col-md-6 col-12">
          <input type="text" className="form-control" placeholder="Email" />
        </div>
        <div className="col-md-6 col-12">
          <input type="text" className="form-control" placeholder="Phone" />
        </div>
      </div>
      <div className="row my-2">
        <div className="col-12">
          <div className="form-group">
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Message"
            ></textarea>
          </div>
        </div>
      </div>
      <div className="row my-2">
        <div className="col-12">
          <button type="submit" className="btn btn-block btn-primary">
            Send
          </button>
        </div>
      </div>
    </form>
  );
}
