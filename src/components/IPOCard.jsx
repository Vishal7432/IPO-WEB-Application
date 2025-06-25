import React from "react";
import "./IPOCard.css"; // optional: for card styling

function IPOCard({ ipo }) {
  return (
    <div className="card p-3 shadow-sm borer round m-2">
      <h5 className="company-name text-primary">{ipo.company}</h5>
      <p>
        <strong>Price Band:</strong> {ipo.priceBand}
      </p>
      <p>
        <strong>Open:</strong> {ipo.openDate}
      </p>
      <p>
        <strong>Close:</strong> {ipo.closeDate}
      </p>
      <p>
        <strong>Issue Size:</strong> {ipo.issueSize}
      </p>
      <p>
        <strong>Issue Type:</strong> {ipo.issueType}
      </p>
      <p>
        <strong>Listing Date:</strong> {ipo.listingDate}
      </p>
    </div>
  );
}

export default IPOCard;
