import React from 'react'
import { Link } from 'react-router-dom';
const Articles = ({articles}) => {
  return (
    <>
        {articles.map((article, index) => (
        <div key={index} className="p-4 md:w-1/2">
          <div
            className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.8)', // White background with 80% opacity
              borderRadius: '8px', // Rounded corners
            }}
          >
            <Link to={`/article/${article.name}`}>
              <img
                className="lg:h-48 md:h-36 w-full object-cover object-center"
                src={article.thumbnail}
                alt="blog"
              />
            </Link>
            <div className='p-6'>
              <Link to={`/article/${article.name}`}>
                <h3 className="text-lg font-medium text-gray-900 mb-3">
                  {article.title}
                </h3>
              </Link>
              <p className='leading-relaxed text-gray-900 mb-3 '>
                {article.content[0].substring(0,115)}
              </p>
              <div className='flex item-center flex-wrap'>
                <Link className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0" 
                to={`/article/${article.name}`}>View more</Link>
                   
                </div>
            </div>
          </div>
        </div>
      ))}</>
  )
}

export default Articles