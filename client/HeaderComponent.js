import React from 'react'
import DisplayText from './DisplayText'

const HeaderComponent = props => {
 return(
  <div>
    <DisplayText label= {props.title} />
    {/* <DisplayTechLogos /> */}
     <DisplayText label={props.dates}/>
  </div>
 );
}

export default HeaderComponent;