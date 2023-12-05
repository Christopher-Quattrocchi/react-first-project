import React from "react";


// function Header() {
//   return (
//     <React.Fragment>
//       <h1>Help Queue</h1>
//       <img src={ticketsImage} alt="An image of tickets" />
//     </React.Fragment>
//   );
// }

function Header() {
  return (
    <React.Fragment>
      <header className="header">
        <nav className="navigation">
          <ul className="nav-links">
            <li><a href="/home" className="nav-link active">Home</a></li>
            <li><a href="/notifications" className="nav-link">Notifications</a></li>
            <li><a href="/messages" className="nav-link">Messages</a></li>
          </ul>
        </nav>
        <div className="search-container">
          <input type="text" className="search-bar" placeholder="Search" />
        </div>
        <button className="tweet-button">Tweet</button>
      </header>
    </React.Fragment>
  )
}

export default Header;