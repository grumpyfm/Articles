import React from 'react';
import './App.css';
import { Provider } from 'react-redux';

import CompositionScreen from './components/CompositionScreen/CompositionScreenContainer';
import ArticlesList from './components/ArticlesList/ArticlesListContainer';
import ArticleScreen from './components/ArticleScreen/ArticleScreen';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { default as ReduxThunk } from 'redux-thunk';
import { appReducer } from './redux/reducer';

const App = () => {
  const Store = createStore(appReducer, applyMiddleware(ReduxThunk));

  return (
    <Provider store={Store}>
      <Router>
        <Container>
          <Switch>
            <Route exact path="/">
              <ArticlesList />
            </Route>
            <Route path="/compositionScreen">
              <CompositionScreen />
            </Route>
            <Route path="/articleScreen">
              <ArticleScreen />
            </Route>
          </Switch>
        </Container>
      </Router>
    </Provider>
  );
};

export default App;
