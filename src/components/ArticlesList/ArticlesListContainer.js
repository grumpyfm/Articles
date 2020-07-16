import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ArticlesList from './ArticlesList';

import { getArticlesMiddelware } from '../../redux/middlewares';

const mapStateToProps = (state) => {
  return {
    articles: state.articles,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(
      {
        getArticlesMiddelware,
      },
      dispatch
    ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesList);
