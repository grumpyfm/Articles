import React, { Component } from 'react';
import ListComponent from '../ListComponent/ListComponent';
import FormComponent from '../FormComponent/FormComponent';

class CompositionScreen extends Component {
  render = () => {
    let listItems = this.props.articles
      ?.slice(Math.max(this.props.articles.length - 3, 0))
      .reverse();
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
