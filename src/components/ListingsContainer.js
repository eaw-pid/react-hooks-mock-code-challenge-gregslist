import React, {useState} from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, onDeletedListing, search}) {


const listingsToDisplay = listings.filter((listing) => {
  //console.log(listing)
  if (search === "") {
    return true
  } if (listing.description.toLowerCase().includes(search.toLowerCase()) || listing.location.toLowerCase().includes(search.toLowerCase()) ) {
    return true
  }
})

console.log(listingsToDisplay)

  return (
    <main>
      <ul className="cards">
        {listingsToDisplay.map((listing) => (
        <ListingCard key={listing.id} listing={listing} onDeletedListing={onDeletedListing}/>
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
