import React, { Component } from 'react';
import ListComponent from '../ListComponent/ListComponent';
import FormComponent from '../FormComponent/FormComponent';
const listLength = 3;

class CompositionScreen extends Component {
  render = () => {
    let listItems = this.props.articles?.slice(0, listLength);
    return (
      <>
        <h2>New Article</h2>
        <FormComponent
          putArticleMiddelware={this.props.actions.putArticleMiddelware}
        />
        <ListComponent listItems={listItems} />
      </>
    );
  };
}
export default CompositionScreen;
