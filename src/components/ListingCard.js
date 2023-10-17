import React, { useState } from "react";

function ListingCard({listing, onDeletedListing}) {

    const {id, description, image, location} = listing
    const [isClicked, setIsClicked] = useState(false)


    function handleClick() {
      setIsClicked(!isClicked)
    }

    function handleDelete() {
      fetch(`http://localhost:6001/listings/${listing.id}`, {
        method: "DELETE",
      
    })
    .then(res=>res.json())
    .then(() =>  onDeletedListing(listing) )
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details" onClick={handleClick}>
        {isClicked ? (
          <button className="emoji-button favorite active">★</button>
        ) : (
          <button className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleDelete}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
