import React, { useEffect } from 'react';
import './ArticlesList.css';
import { Button, Row, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import ListComponent from '../ListComponent/ListComponent';

const ArticlesList = (props) => {
  useEffect(() => {
    props.actions.getArticlesMiddelware();
  }, [props.actions]);
  let history = useHistory();

  return (
    <>
      <Row className="header">
        <Col lg={3} md={12} className="titleWrapper">
          <h2 className="title">Articles</h2>
        </Col>
        <Col lg={3} md={12}>
          <Button
            id="add-cust-Btn"
            onClick={() => history.push('/compositionScreen')}
          >
            Add New
          </Button>
        </Col>
      </Row>
      <ListComponent listItems={props.articles} />
    </>
  );
};

export default ArticlesList;
