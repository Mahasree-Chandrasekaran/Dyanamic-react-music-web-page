import React from 'react';

const Home = () => {
  return (
    <div>
      <div
        style={{
          maxWidth: '800px',
          padding: '20px',
          borderRadius: '8px',
        }}
      >
        <h1 className='sm:text-4xl text-2xl font-bold my-6'>
          Welcome to Lyrics Haven!
        </h1> <br></br>
        <p className='mx-auto leading-relaxed text-base mb-4 text-white'>
          <marquee style={{ color: 'white', fontWeight: 'bold' ,fontSize: '24px'}}>
            Step into Lyrics Haven, your lyrical playground where every song tells a story!
          </marquee>
        </p>
      </div>
    </div>
  );
}

export default Home;
