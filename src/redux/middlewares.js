import * as services from '../services';

export const putArticleMiddelware = (article) => {
  return (dispatch) => {
    services.postArticle(article).then(() => {
      services.getAllArticles().then((res) => {
        dispatch({ type: 'SAVE_ARTICLES', articles: res });
      });
    });
  };
};

export const getArticlesMiddelware = () => {
  return (dispatch) => {
    services.getAllArticles().then((res) => {
      dispatch({ type: 'SAVE_ARTICLES', articles: res });
    });
  };
};
