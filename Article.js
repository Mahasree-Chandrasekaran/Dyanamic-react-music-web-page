import React from 'react';
import {useParams} from 'react-router-dom';
import articleContent from './article-content';
import Articles from '../components/Articles';

const Article = () => {
  const {name} = useParams();
  const article = articleContent.find((article) => article.name === name);
if(!article) return <h1 className='my-10 text-2xl font-bold text-red-700'>Article does not exist</h1>
const otherArticles=articleContent.filter(article => article.name!==name)
  return (
    <>
      <h1 className='sm:text-4xl text-3xl font-bold my-6 text-white-900'
       style={{ marginLeft: '200px' }}>
        {article.title}
      </h1>
      {article.content.map((paragraph, index) => (
        <p className='mx-auto leading-relaxed text-base mb-4 text-white' key={index}
        style={{ marginLeft: '300px' }} >
          {paragraph}
        </p>
      ))}
      <h1 className='sm:text-2xl text-xl font-bold my-4 text-white-900'>Other Articles</h1>
      <div className="flex flex-wrap -m-4">
        <Articles articles={otherArticles}/>
      </div>
    </>
  );
};

export default Article;
