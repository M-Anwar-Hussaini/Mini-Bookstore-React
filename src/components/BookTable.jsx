import { useDispatch } from "react-redux";
import { deleteBook } from "../redux/apiFunctions";

export default function BookTable({ books }) {
  return (
    <table className="table table-striped table-bordered table-hover table-color">
      <thead className="table-primary">
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Author</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, index) => (
          <Row book={book} index={index + 1} key={book.item_id} />
        ))}
      </tbody>
    </table>
  );
}

function Row({ book, index }) {
  const dispatch = useDispatch();
  return (
    <tr>
      <td>{index}</td>
      <td>{book.title}</td>
      <td>{book.author}</td>
      <td>
        <button
          className="btn btn-outline-danger btn-sm w-100"
          onClick={() => dispatch(deleteBook(book.item_id))}
        >
          Remove
        </button>
      </td>
    </tr>
  );
}
