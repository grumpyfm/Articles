import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ListComponent from '../ListComponent/ListComponent';
import FormComponent from '../FormComponent/FormComponent';

const listLength = 3;

const CompositionScreen = (props) => {
  let listItems = props.articles?.slice(0, listLength);
  return (
    <>
      <Row className="header">
        <Col lg={4} md={12} className="titleWrapper">
          <h2 className="title">New Article</h2>
        </Col>
      </Row>
      <FormComponent
        putArticleMiddelware={props.actions.putArticleMiddelware}
      />
      <ListComponent listItems={listItems} />
    </>
  );
};

export default CompositionScreen;
