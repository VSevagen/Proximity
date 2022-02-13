import React from 'react';

const LangSetting = (props) => {

    return(
        <span 
            onClick={props.handleClick} 
            style={{margin: "0px 4px 0px 4px", 
                    fontWeight: props.weight, 
                    cursor: "pointer", 
                    zIndex: "255", 
                    position: "relative"
                }}>
            {props.type}
        </span>
    )
}

export default LangSetting;