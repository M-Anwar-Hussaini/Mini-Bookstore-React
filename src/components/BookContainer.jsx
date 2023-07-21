import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBooks } from "../redux/apiFunctions";
import BookTable from "./BookTable";

export default function BookConainer() {
  const { books, len, isLoading, hasError } = useSelector(
    (store) => store.books
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBooks());
  }, [len]);

  if (isLoading) {
    return <div className="alert alert-warning">Please wait...</div>;
  }

  if (hasError) {
    return <div className="alert alert-danger">Something went wrong...</div>;
  }

  return (
    <div className="books d-flex flex-column gap-1 py-2">
      <h2 className="mt-2 h3">List of Books</h2>
      <BookTable books={books} />
    </div>
  );
}
