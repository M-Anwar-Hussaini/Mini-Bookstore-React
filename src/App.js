import Container from './components/Container';
import Header from './components/Header';
import Main from './components/Main';
import AddBook from './components/AddBook';
import Footer from './components/Footer';
import BookConainer from './components/BookContainer';

function App() {
  return (
    <Container>
      <Header />
      <Main>
        <AddBook />
        <BookConainer />
      </Main>
      <Footer />
    </Container>
  );
}

export default App;
