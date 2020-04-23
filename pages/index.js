import Header from '../components/Header';
import Movie from '../components/Movie';
import Link from 'next/link';
import { inject, observer } from 'mobx-react';
import Loading from '../components/Loading';
import Label from '../components/Label';

let lastSearch = '';

if (typeof window !== 'undefined') {
  lastSearch = localStorage.getItem('lastSearch');
}

const MOVIE_API_URL = lastSearch
  ? `https://www.omdbapi.com/?s=${lastSearch}&apikey=68fbdc23`
  : `https://www.omdbapi.com/?s=man&y=2020&apikey=68fbdc23`;

@inject('store')
@observer
class App extends React.Component {
  // componentDidMount() {
  //   fetch(MOVIE_API_URL)
  //     .then((response) => response.json())
  //     .then((jsonResponse) => {
  //       this.props.store.movies = jsonResponse.Search;
  //       this.props.store.loading = false;
  //     });
  // }

  render() {
    let movies2 = [];
    console.log(process.env.API_KEY);
    if (typeof window !== 'undefined') {
      movies2 = localStorage.getItem('favMovies');
      movies2 = movies2 ? JSON.parse(movies2) : [];
    }
    const movies = this.props.store.movies;
    const loading = this.props.store.loading;
    const errorMessage = this.props.store.errorMessage;

    return (
      <div className="container">
        <Header />
        {lastSearch ? (
          <Label text={`Your last search '${lastSearch}'.`} />
        ) : (
          <Label text="You will see your last search here." />
        )}

        <div className="movies">
          {loading && !errorMessage ? (
            <Loading />
          ) : errorMessage ? (
            <p className="errorMessage">{errorMessage}</p>
          ) : (
            movies.map((movie, index) => (
              <Movie key={`${index}-${movie.Title}`} movie={movie} />
            ))
          )}
        </div>
      </div>
    );
  }
}
export default App;
