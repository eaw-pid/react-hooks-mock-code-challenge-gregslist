import React from "react";
import Search from "./Search";

function Header({listings, onChangeFilter, search}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search listings={listings} onChangeFilter={onChangeFilter} search={search}/>
    </header>
  );
}

export default Header;
