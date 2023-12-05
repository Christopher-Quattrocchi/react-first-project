import React from "react";
import Column3item from "./Col3item";
import profileImage from "./../img/blank-profile.png";
const profileNames = [
  { name: 'Billy', image: profileImage}, { name: 'Sarah', image: profileImage }, { name: 'Jake', image: profileImage }
]

function Column3() {
  return (
    <React.Fragment>
      <aside className="right-column">
        {/* <!-- Widget for "Lorem ipsum" section --> */}
        <div className="widget lorem-widget">
          <h3>Lorem ipsum</h3>
          {profileNames.map((profile, index) => {
            return (
              <Column3item
                name={profile.name}
                image={profile.image}
                key={index}
              />
            )
          })}
        </div>
      </aside>
    </React.Fragment>
  )
}

export default Column3