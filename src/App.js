import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { NotFound, Dashboard, MovieDetailPage } from './containers';

const App = () =>
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={ Dashboard }/>
        <Route path="/movie/:movieName" component={ MovieDetailPage }/>
        <Route component={ NotFound }/>
      </Switch>
    </Router>
  </Provider>;

export default App;