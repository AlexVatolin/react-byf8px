import React from 'react';

function Comp(props) {
  return (
    <>
      <h1>{props.myText}</h1>
      <h2>{props.nextText}</h2>
    </>
  );
}

export default Comp;
