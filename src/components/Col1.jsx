import React from "react";
function Column1() {
  return (
    <React.Fragment>
      <aside className="left-column">
        <div className="profile-section">
          <div className="profile-picture">
            <img src="src\img\blank-profile.png" alt="profile" className="user-pic" />
          </div>
          <div className="user-info">
            <h2>Kellie A Corrigan</h2>
            <ul className="user-stats">
              <li><a href="#">TWEETS</a></li>
              <li><a href="#">FOLLOWING</a></li>
              <li><a href="#">FOLLOWERS</a></li>
            </ul>
          </div>
        </div>

        <div className="profile-text">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti amet, numquam ipsum quasi reprehenderit eius modi quaerat vitae odio est neque magnam repellat quam blanditiis explicabo nisi distinctio assumenda incidunt.</p>
        </div>
      </aside>
    </React.Fragment>
  )
}

export default Column1
