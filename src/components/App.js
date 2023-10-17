import React, {useEffect, useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
 
  const [listings, setListings] = useState([])
  const [search, setSearch] = useState("") 

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(res=> res.json())
    .then(listings => setListings(listings))
  }, [])

  function filterOnChange(e) {
    setSearch(e.target.value)
  }
 
  function deleteListing(deletedListing) {
   const filteredListings = listings.filter((listing) => listing.id !== deletedListing.id)
    setListings(filteredListings)
 
  }


  return (
    <div className="app">
      <Header listings={listings} onChangeFilter={filterOnChange} search={search}/>
      <ListingsContainer listings={listings} onDeletedListing={deleteListing} search={search}/>
    </div>
  );
}

export default App;
