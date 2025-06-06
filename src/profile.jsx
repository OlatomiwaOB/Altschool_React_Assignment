import React from "react";
import Avatar from "./assets/images/Avatar.png"; 
function UserProfile() {
  return (
<div>
      <section>
    <div className="profile">
          <img  className="avatar"   src={Avatar} alt="profile-image" />
        
        <div className="name">
            
          <p>
            Aliaune Damala Bouga Time Bongo Puru Nacka Lu Lu Lu Badara Akon...
          </p>
          <p className="bio">
            Known mononymously as Akon (/ˈeɪkɒn/), is a Senegalese-American
            singer, record producer, and entrepreneur. An influential figure in
            modern world...
          </p>
        
          <button className="edit">
            <i class="fa-solid fa-pencil"></i> Edit Profile
          </button>
        </div>
    </div>   
    <button className="post">
       <span><i class="fa-solid fa-plus"></i> </span>New Post
        </button> 
      </section>
      
      <hr class="horizontal-line"/>
</div>
  );
}
export default UserProfile;