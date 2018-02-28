import React, { Component } from 'react';
import { Layout, ShowMovies } from '../../components';
import { getSearchedData, FetchMovies } from '../../utils/methods';
import { withRouter } from 'react-router';

class DashboardPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      movies: [],
      searchQuery: '',
      searchedMovies: []
    };
  }

  componentDidMount() {
    const { searchQuery } = this.state;
    console.log("FetchMovies", FetchMovies);
    if(searchQuery === '') {
      fetch(FetchMovies)
        .then(result => {
          return result.json();
        }).then(data => {
        this.setState({movies: data.results});
      });
    }
  }

  showSearchedResults(e) {
    this.setState({searchQuery: e.target.value});
    fetch(getSearchedData(e.target.value)).then(results => {
      return results.json();
    }).then(data => {
      this.setState({searchedMovies: data.results});
    });
  }

  render() {
    const { movies, searchedMovies, searchQuery } = this.state;
    const data = searchQuery ? searchedMovies : movies;
    const { history } = this.props;
    return(
      <Layout>
        <input className="input" type="text" value={this.state.data} onChange={(e) => this.showSearchedResults(e)} />
        <ShowMovies movies={data} history={history} />
      </Layout>
    )
  }
}

const Dashboard = withRouter(DashboardPage);

export { Dashboard }
