import React from 'react';
import './App.css';
import { Provider } from 'react-redux';

import CompositionScreen from './components/CompositionScreen/CompositionScreenContainer';
import ArticlesList from './components/ArticlesList/ArticlesListContainer';
import ArticleScreen from './components/ArticleScreen/ArticleScreen';
import 'bootstrap/dist/css/bootstrap.css';

import { Grid, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Store from './redux/store';

const App = () => {
  return (
    <Provider store={Store}>
      <Router>
        <Grid>
          <Row>
            <Col id="appGrid" md={8} sm={12}>
              <Switch>
                <Route exact path="/">
                  <ArticlesList />
                </Route>
                <Route path="/compositionScreen">
                  <CompositionScreen />
                </Route>
                <Route path="/article/:id">
                  <ArticleScreen />
                </Route>
              </Switch>
            </Col>
          </Row>
        </Grid>
      </Router>
    </Provider>
  );
};

export default App;
