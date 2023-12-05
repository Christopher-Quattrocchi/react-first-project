import React from "react";

export default function Column3item(props) {
  return(
    <React.Fragment> 
      <div className="lorem-item">
      {/* <span className="icon">&#128279;</span>  */}
      <img src={props.image} alt="profile" />
      <div className="text-content">
        <h4>{props.name}</h4>
      </div>
      <button className="action-button">Button</button>
    </div>
      </React.Fragment>
  )
}