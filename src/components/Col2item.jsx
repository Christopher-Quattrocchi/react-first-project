import React from "react";
import PropTypes from "prop-types";
import profileImage from "./../img/blank-profile.png";

function Column2item(props) {
  return (
    <React.Fragment>
      <div className="post">
        <div className="post-header">
          <div className="middle-pic">
            <img src={profileImage} alt="blank" />
          </div>
          <div className="user-details">
            <strong>{props.name}</strong>
          </div>
        </div>
        <div className="post-content">
          <p>{props.info}</p>
        </div>
      </div>
    </React.Fragment>
  );
}








Column2item.propTypes = {
  name: PropTypes.string,
  info: PropTypes.string
}

export default Column2item



// import React from "react";
// import PropTypes from "prop-types";

// function Ticket(props){
//   return (
//     <React.Fragment>
//       <h3>{props.location} - {props.names}</h3>
//       <p><em>{props.issue}</em></p>
//       <hr/>
//     </React.Fragment>
//   );
// }

// Ticket.propTypes = {
//   names: PropTypes.string.isRequired,
//   location: PropTypes.string.isRequired,
//   issue: PropTypes.string
// };

// export default Ticket;