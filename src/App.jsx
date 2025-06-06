import React from 'react';
import Logo from './assets/images/Logo.svg'; // adjust the path if needed
import UserProfile from './profile.jsx'
import Gallery  from './Gallery.jsx'

function App() {
  return (
    <div>
      <header>
        <img src={Logo} alt="InstaSpots Logo Text" />
      </header>
      <main>
       <UserProfile />
       <Gallery />
      </main>
    </div>
  )
}
export default App
