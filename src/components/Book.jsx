export default function Book({ author, title }) {
  return (
    <div
      id="book"
      className="d-flex align-content-center p-2 mb-2 bg-body-secondary rounded"
    >
      <h4 className="m-0 fw-medium h5">
        {title} by {author}
      </h4>
      <button className="btn btn-danger ms-auto btn-sm">Remove</button>
    </div>
  );
}
