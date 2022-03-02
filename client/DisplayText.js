import React from 'react';

const DisplayText = (props) =>{

 const display = [];

 if(props.label) display.push(<h1>{props.label}</h1>);
 if(props.text) display.push(<h2>{props.text}</h2>)
 
  return (
   <div>
    {display}
   </div>
  );
 
};
export default DisplayText;
