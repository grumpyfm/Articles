import React from 'react';
import './ListComponent.css';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const ListComponent = (props) => {
  let history = useHistory();
  return (
    <ListGroup>
      {props.listItems?.map((item) => (
        <ListGroupItem
          id="customListStyle"
          key={item.id}
          onClick={() => history.push(`/article/:${item.id}`)}
        >
          {item.title}
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default ListComponent;
