import React from "react";

const Square = ({ value, onClick}) => {
    
    const Style = value ?  `squares ${value}` : `squares`;

    return (
        <button className ={Style} onClick = {onClick}>
           {value}
        </button>
    );
    
};

export default Square;
