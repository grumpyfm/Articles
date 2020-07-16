import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CompositionScreen from './CompositionScreen';

import { putArticleMiddelware } from '../../redux/middlewares';

const mapStateToProps = (state) => {
  return {
    articles: state.articles,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(
      {
        putArticleMiddelware,
      },
      dispatch
    ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CompositionScreen);
