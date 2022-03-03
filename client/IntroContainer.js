import React from 'react';
import Contacts from './Contacts';
import PersonalDetails from './PersonalDetails';

const IntroContainer = props =>{
   const data = {
     name:'Fernando',
     bio_about: 'Hello im a software eng.',
     email: 'email@gmail.com',
     githubHandle: 'lunaf-github',
     phoneNumber:'123567'
   }

   return(
     <div className='projects intro'>
       <div className='profileFrame'>
         {/* <img className='profilePic' src="" alt="profile pic"/> */}
       </div>
       <PersonalDetails name={props.name} bio_about={props.bio_about} phoneNumber={props.phoneNumber} email={props.email} githubHandle={props.githubHandle} />
       <div>
         <button type='button' >Download Resume</button>
       </div>
     </div>
   );
}

export default IntroContainer;