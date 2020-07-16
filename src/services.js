const generateId = () => {
  return `f${(~~(Math.random() * 1e8)).toString(16)}`;
};

const getAllArticles = async () => {
  let values = [];
  let keys = Object.keys(localStorage);
  keys.forEach((key) => {
    values.push(JSON.parse(localStorage.getItem(key)));
  });
  return values;
};

const postArticle = async (article) => {
  await localStorage.setItem(article.id, JSON.stringify(article));
  return true;
};

const getArticleById = () => {};

export { getAllArticles, postArticle, getArticleById, generateId };
