import React from "react";
import Column1 from "./Col1";
import Column2 from "./Col2";
import Column3 from "./Col3";

function Body() {
  return (
    <React.Fragment>
      <div className="column-container">
        <Column1 />
        <section className="center-column">
          <div className="post-creation">
            <div className="post-input-container">
              <div className="input-holder">
                <div className="input-square"></div>
                <input type="text" placeholder="What's happening?" className="post-input" />
              </div>

              <div className="post-feed">
                <Column2 />
              </div>
            </div>
          </div>
        </section>
        <Column3 />
      </div>

    </React.Fragment>
  )
}

export default Body