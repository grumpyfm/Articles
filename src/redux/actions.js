export const SAVE_ARTICLES = 'SAVE_ARTICLES';

/**
 * Save list of articles.
 */
export const saveArticles = (articles) => {
  return { type: SAVE_ARTICLES, articles };
};
