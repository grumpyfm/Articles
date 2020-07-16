import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const ListComponent = (props) => {
  let history = useHistory();

  return (
    <ListGroup variant="flush">
      {props.listItems?.map((item) => (
        <ListGroup.Item
          key={item.id}
          onClick={() => history.push(`/article/:${item.id}`)}
        >
          {item.title}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default ListComponent;
