import { inject, observer } from 'mobx-react';

@inject('store')
@observer
class Search extends React.Component {
  render() {
    const inputChanges = (e) => {
      this.props.store.searchVal = e.target.value;
    };

    const resetInput = () => {
      this.props.store.searchVal = '';
    };

    const callSearchFunc = (e) => {
      e.preventDefault();
      this.props.search(this.props.store.searchVal);
      resetInput();
    };

    return (
      <form className="Search">
        <input
          className="Search-input"
          onChange={inputChanges}
          value={this.props.store.searchVal}
          type="text"
        />
        <input
          className="Search-button"
          onClick={callSearchFunc}
          type="submit"
        />
      </form>
    );
  }
}

export default Search;
