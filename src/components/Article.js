import React from 'react';

import './Article.css';
import ArticleVideo from './ArticleVideo';

const Article = () => (
  <div className="article-container">
    <p>
          Cras justo odio, dapibus ac facilisis in, egestas eget quam. Sed posuere consectetur est at lobortis. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec ullamcorper nulla non metus auctor fringilla.
    </p>
    <ArticleVideo />
  </div>
);

export default Article;
