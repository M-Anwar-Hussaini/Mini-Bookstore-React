import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/apiFunctions";

export default function AddBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    const newBook = {
      title,
      author,
      item_id: new Date().getTime(),
      category: "none",
    };
    dispatch(addBook(newBook));
    setAuthor("");
    setTitle("");
  }

  return (
    <form
      className="bg-success-subtle mb-2 p-2 rounded"
      onSubmit={handleSubmit}
    >
      <h3>Add new book</h3>
      <div className="row gy-2 row-cols-1 row-cols-sm-2">
        <div className="col">
          <input
            type="text"
            className="form-control form-control-sm"
            required
            placeholder="Book title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="col">
          <input
            type="text"
            className="form-control form-control-sm"
            required
            placeholder="Book author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div className="col col-sm-12">
          <button type="submit" className="btn btn-success w-100 btn-sm">
            Add
          </button>
        </div>
      </div>
    </form>
  );
}
