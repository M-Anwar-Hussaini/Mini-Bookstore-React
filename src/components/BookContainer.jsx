import Book from './Book';
const books = [
  {
    author: 'Author 1',
    title: 'Book 1',
  },
  {
    author: 'Autor 2',
    title: 'Book 2',
  },
];
export default function BookConainer() {
  return (
    <div className="books d-flex flex-column gap-1 py-2">
      <h2 className="mt-2 h3">List of Books</h2>
      {books.map((book, index) => (
        <Book {...book} key={index} />
      ))}
    </div>
  );
}
