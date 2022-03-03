import React from "react";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import BulletPointContainer from "./BulletPointContainer";

const ItemContainer = (props) => {
 
 return(
  <div className="category">
   <HeaderComponent title={props.title} dates={props.dates} />
   <BulletPointContainer bulletPoints ={props.bulletPoints} />
   <FooterComponent previewBtn={props.previewBtn} moreinfoBtn={props.moreinfoBtn}/>
  </div>
 )
}

export default ItemContainer;