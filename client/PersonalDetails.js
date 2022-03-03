import React from 'react';
import DisplayText from './DisplayText';
import Contacts from './Contacts';

const PersonalDetails = (props) =>{
  return(
    <div>
      <DisplayText label={props.name} />
      <div className='answer'>
      <h1>Bio/About:  </h1>
      <h3>{props.bio_about}</h3>
      </div>

      {/* <DisplayText label="Bio/About" text={props.bio_about} /> */}
      <Contacts phoneNumber={props.phoneNumber} email={props.email} githubHandle={props.githubHandle} />  
    </div>
  );
}
export default PersonalDetails;