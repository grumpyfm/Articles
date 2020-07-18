import React, { useState } from 'react';
import './FormComponent.css';
import { useHistory } from 'react-router-dom';
import { generateId } from '../../services';
import {
  FormGroup,
  Button,
  FormControl,
  HelpBlock,
  Row,
  Col,
} from 'react-bootstrap';

const handleSubmit = async (title, text, func, history) => {
  let trimTitle = title.trim();
  let article = { id: generateId(), trimTitle, text, date: new Date() };
  if (trimTitle && text.trim()) {
    await func(article);
    history.goBack();
  }
};

const FormComponent = (props) => {
  let history = useHistory();
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const { putArticleMiddelware } = props;

  return (
    <form>
      <FormGroup bsClass="formGroup">
        <FormControl
          id="formTitle"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Article Title"
        />
        <HelpBlock bsClass="helperBlocks">Give it a short name</HelpBlock>
      </FormGroup>
      <FormGroup bsClass="formGroup">
        <FormControl
          id="formText"
          value={text}
          onChange={(e) => setText(e.target.value)}
          componentClass="textarea"
          placeholder="Article Text"
          rows="6"
        />
        <HelpBlock bsClass="helperBlocks">
          Type the best article you can write
        </HelpBlock>
      </FormGroup>
      <Row>
        <Col lg={3} md={12}>
          <FormGroup bsClass="formGroup">
            <Button
              id="submit-cust-Btn"
              onClick={(e) => {
                e.preventDefault();
                handleSubmit(title, text, putArticleMiddelware, history);
              }}
              variant="primary"
              type="submit"
            >
              Submit
            </Button>
          </FormGroup>
        </Col>
      </Row>
    </form>
  );
};

export default FormComponent;
