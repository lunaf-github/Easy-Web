import React from "react";

const BulletPointContainer = (props) => {
  const details = props.bulletPoints;
  const bullets = [];

  for(let i = 0; i < details.length; i++){
    bullets.push(<li>{details[i]}</li>)
  }
  return(
   <div>
     <ul>
     {bullets}
     </ul>
   </div>
  )
}

BulletPointContainer.defaultProps = {
  bulletPoints: ["Missing descriptions"]
}

export default BulletPointContainer; 