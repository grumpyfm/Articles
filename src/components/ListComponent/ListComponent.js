import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';

const ListComponent = (props) => {
  return (
    <ListGroup variant="flush">
      {props.listItems?.map((item) => (
        <ListGroup.Item key={item.id}>{item.title}</ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default ListComponent;
