import React from "react";
import Column2item from "./Col2item";

const profileList = [
  {
    name: 'Joe',
    info: 'I like chocolate.'
  },
  {
    name: 'Bob',
    info: "I dont like chocolate"
  }
];

function Column2() {
  return (
    < React.Fragment >
      {profileList.map((profile, index) => {
        return (
          <Column2item
            name={profile.name}
            info={profile.info}
            key={index}
          />
        );
      })}
    </React.Fragment>
  );
}

// import React from "react";
// import Ticket from "./Ticket";

// const mainTicketList = [
//   {
//     names: 'Thato and Haley',
//     location: '3A',
//     issue: 'Firebase won\'t save record. Halp.'
//   },
//   {
//     names: 'Sleater and Kinney',
//     location: '4B',
//     issue: 'Prop types are throwing an error.'
//   },
//   {
//     names: 'Imani & Jacob',
//     location: '9F',
//     issue: 'Child component isn\'t rendering.'
//   }
// ];

// function TicketList() {
//   return (
//     <React.Fragment>
//       <hr />
//       {mainTicketList.map((ticket, index) =>
//         <Ticket names={ticket.names}
//           location={ticket.location}
//           issue={ticket.issue}
//           key={index} />
//       )}
//     </React.Fragment>

//   );
// }

// export default TicketList;

export default Column2