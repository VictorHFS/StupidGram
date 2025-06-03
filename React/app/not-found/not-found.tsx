import React from 'react';
import './not-found.css';
import { Link } from 'react-router';

function NotFound({message, detail, stack} : {message: string, detail: string, stack: string | undefined}) {
  return (
    <div className="not-found-container">
      <h1 className="not-found-heading">{message}</h1>
      <p className="not-found-message">
        {detail}
      </p>
      <Stack stack={stack}/>
      
      <Link to="/" className="not-found-link">
        Go to Home
      </Link>
    </div>
  );
}

function Stack({stack}: {stack: string | undefined})
{
    if (stack)
    {
        return (
            <p className="not-found-suggestion">
            {stack}
          </p>
        )
    }
}

export default NotFound;