import React from 'react';

const Contacts = (props) => {
  return(
   <div>
    <h2>{props.phoneNumber}</h2>
    <h2>{props.email}</h2>
    <a>{props.githubHandle}</a>
   </div>
  );
}

export default Contacts;