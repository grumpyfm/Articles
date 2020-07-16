import React from 'react';
import { Button } from 'react-bootstrap';
import ListComponent from '../ListComponent/ListComponent';
import { Link } from 'react-router-dom';

const ArticlesList = (props) => {
  return (
    <>
      <div>
        <h2>Articles</h2>
        <Link to="/compositionScreen">Add New</Link>
      </div>
      <ListComponent listItems={props.articles} />
    </>
  );
};

export default ArticlesList;
