import React from 'react';

function Child({ message, count , setCount}) {

    return (
    <div>
      <h2>Child Component</h2>
      <p>{message}</p>
      <p>{count} {setCount(21000)}</p>
    </div>
  );
}

export default Child;
