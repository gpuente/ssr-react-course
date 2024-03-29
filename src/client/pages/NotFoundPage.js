import React from 'react';

const NotFoundPage = (props) => {
  const { staticContext = {} } = props;

  staticContext.notFound = true;

  return (
    <h1>
      Oooops, route not found.
    </h1>
  );
}

export default {
  component: NotFoundPage,
};
