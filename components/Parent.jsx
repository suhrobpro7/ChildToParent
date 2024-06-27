import React, { useState } from 'react';
import Child from './Child';

function Parent() {
  const [message, setMessage] = useState('Parent state zero!');
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Parent Component MUNISA</h1>
      <Child message={message}  setCount={setCount} />
      <h1>Children count equal to: {count}</h1>
    </div>
  );
}

export default Parent;
