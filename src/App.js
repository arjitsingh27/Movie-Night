import './App.css';
import Header from './Header';
import Row from './Row';
import request from './request'
import Banner from './Banner'
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Row title="NETFLIX ORIGINALS" fetchURL={request.fetchNetflixOriginal} isLarge={true} />
      <Row title="Trending Movies" fetchURL={request.fetchTrending} />
      <Row title="Top Rated" fetchURL={request.fetchTopRated} />
      <Row title="Action Movies" fetchURL={request.fetchActionMovies} />
      <Row title="Horror Movies" fetchURL={request.fetchHorrorMovies} />
      <Row title="Comedy Movies" fetchURL={request.fetchComedyMovies} />
      <Row title="Romance Movies" fetchURL={request.fetchRomanceMovies} />
      <Row title="Documentaries" fetchURL={request.fetchDocumentaries} />


      <Footer />

    </div>
  );
}

export default App;
