import React, { useState } from 'react';
import { generateId } from '../../services';
import { Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const handleSubmit = async (title, text, func, history) => {
  let article = { id: generateId(), title, text };
  await func(article);
  history.push('/');
};

const FormComponent = (props) => {
  let history = useHistory();
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const { putArticleMiddelware } = props;

  return (
    <Form>
      <Form.Control
        size="lg"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="Article Title"
      />
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Control
          value={text}
          onChange={(e) => setText(e.target.value)}
          as="textarea"
          placeholder="Article Text"
          rows="3"
        />
      </Form.Group>
      <Button
        onClick={(e) => {
          e.preventDefault();
          handleSubmit(title, text, putArticleMiddelware, history);
        }}
        variant="primary"
        type="submit"
      >
        Submit
      </Button>
    </Form>
  );
};

export default FormComponent;
