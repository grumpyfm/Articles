import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getArticleById } from '../../services';

const ArticleScreen = (props) => {
  let location = useLocation();
  const [article, setArticle] = useState({});

  useEffect(() => {
    let currentId = location.pathname.split(':')[1];
    const fetchData = async () => {
      const result = await getArticleById(currentId);
      setArticle(result);
    };
    fetchData();
  }, [location]);

  return (
    <div>
      <h2 className="header">{article?.title}</h2>
      <p>{article?.text}</p>
    </div>
  );
};

export default ArticleScreen;
