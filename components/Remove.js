import { inject, observer } from 'mobx-react';

@inject('store')
@observer
class Remove extends React.Component {
  render() {
    const remove = () => {
      if (typeof window !== 'undefined') {
        let movies = localStorage.getItem('favMovies');
        movies = movies ? JSON.parse(movies) : [];
        const index = movies.findIndex((e) => e.Title === this.props.Title);
        if (index > -1) {
          movies.splice(index, 1);
        }
        this.props.store.favCount = movies.length;
        localStorage.setItem('favMovies', JSON.stringify(movies));
      }
      let favMovies = this.props.store.favMovies[0];
      let index = favMovies.findIndex((e) => e.Title === this.props.Title);
      if (index > -1) {
        this.props.store.favMovies[0].splice(index, 1);
      }
    };
    return (
      <div
        className="Remove logo-big center"
        title="Remove from Favorites"
        onClick={remove}
      >
        <div className="Remove-img"></div>
      </div>
    );
  }
}

export default Remove;
