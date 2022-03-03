import React from 'react'
import DisplayText from './DisplayText'
import DisplayTechLogos from './DisplayTechLogos';

const HeaderComponent = props => {
 return(
  <div className='itemHeader'>
    <DisplayText label= {props.title}/>
    {/* <DisplayTechLogos /> */}
     <DisplayText label={props.dates}/>
  </div>
 );
}

export default HeaderComponent;