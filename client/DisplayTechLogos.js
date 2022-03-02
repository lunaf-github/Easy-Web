
import React from 'react';
import imgage from './img/react.png';

const DisplayTechLogos = (props) =>{
 // const tech = ['react'];
 
 // const logos = [];

 // for(let i = 0; i < tech.length; i++){
 //   logos.push(<img src = './img/react.png' alt = {`${tech[i]} logo`}/>);
 // };
//{/* {logos} */}
 return (
  <div>
    <img src={imgage} alt="logo"/>
  </div>
 );

};

export default DisplayTechLogos;