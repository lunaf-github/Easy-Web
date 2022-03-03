
import React from 'react';
import ReactImg from './img/react.png';
import NodeImg from './img/node.png';

// function importAll(r) {
//  let images = {};
//  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
//  return images;
// }

// const images = importAll(require.context('./img', false, /\.(png|jpe?g|svg)$/));

const DisplayTechLogos = (props) =>{
 const tech = ['reactImg','nodeImg'];
 
 const logos = [];

// console.log(images)



 // for(let i = 0; i < tech.length; i++){

 //   logos.push(<img src={`&{tech[i]}} alt="didn't work" />);
 // };

 return (
  <div>
    {/* {logos} */}
    <img src="https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png" />
    {/* <ReactImg /> */}
  </div>
 );

};

export default DisplayTechLogos;