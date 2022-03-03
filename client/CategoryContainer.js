import React from 'react';
import ItemContainer from './ItemContainer';

 const CategoryContainer = (props) =>{


   const items = [];

   if(props.info){
    for(let i=0; i<props.info.length; i++){
      const {title, tech, bulletPoints, dates, previewBtn, moreinfoBtn } = props.info[i];
      items.push(<ItemContainer title={title} dates={dates} bulletPoints={bulletPoints} tech={tech} previewBtn={previewBtn} moreinfoBtn={moreinfoBtn} />)
    }
   }
   return (
     <div className='projects'>
       <h1>{props.label}</h1>
       {items}
     </div>
   );
 }
 

 export default CategoryContainer;