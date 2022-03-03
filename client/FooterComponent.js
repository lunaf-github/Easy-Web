import React from 'react';





const FooterComponent = (props) =>{

 const buttons = [];
 if(props.moreinfoBtn) buttons.push(<button type="button" onClick = {console.log('hello')} >Additional Info</button>)
 if(props.previewBtn) buttons.push(<button type="button" onClick = {console.log('yo')}> Preview</button>)

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

