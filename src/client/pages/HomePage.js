import React from 'react';

const Home = () => {
  return (
    <div className="center-align" style={{ marginTop: '200px' }} >
      <h3>Welcome</h3>
      <p>Check out this awesome features</p>
      <button className="btn" onClick={() => console.log('clicked')}>Click Me</button>
    </div>
  );
};

export default {
  component: Home,
};
