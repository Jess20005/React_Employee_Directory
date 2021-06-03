import React from "react";
import "./style.css";

function SiteHeader() {
  return (
    <div className="wrapper">
      <h1>Employee Directory</h1>
      <p>Search below by name</p>
      <p>
        Click on <b>Name</b> header to sort or use the search box to narrow your
        results.
      </p>
    </div>
  );
}

export default SiteHeader;
