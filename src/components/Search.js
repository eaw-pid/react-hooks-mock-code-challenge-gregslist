import React, {useState} from "react";

function Search({ onChangeFilter, search}) {

 

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
  }

   
  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        name="search"
        placeholder="search free stuff"
        value={search}
        onChange={onChangeFilter}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
