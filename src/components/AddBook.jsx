export default function AddBook() {
  return (
    <form className="bg-success-subtle mb-2 p-2 rounded">
      <h3>Add new book</h3>
      <div className="row gy-2 row-cols-1 row-cols-sm-2">
        <div className="col">
          <input
            type="text"
            className="form-control form-control-sm"
            required
            placeholder="Book name"
          />
        </div>
        <div className="col">
          <input
            type="text"
            className="form-control form-control-sm"
            required
            placeholder="Book author"
          />
        </div>
        <div className="col col-sm-12">
          <button className="btn btn-success w-100 btn-sm">Add</button>
        </div>
      </div>
    </form>
  );
}
