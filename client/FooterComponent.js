import React from 'react';

const buttons = [];



const FooterComponent = (props) =>{
 if(props.moreinfoBtn) buttons.push(<button type="button" onclick = "" >Additional Info</button>)
 if(props.previewBtn) buttons.push(<button type="button" onclick = ""> Preview</button>)

 return(
  <div>
    {buttons}
  </div>
 );

}

FooterComponent.defaultProps = {
 moreinfoBtn: true,
 previewBtn: true,
}
export default FooterComponent;       

