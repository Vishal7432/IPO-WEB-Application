import React, { useEffect, useState } from "react";
import IPOCard from "../components/IPOCard";
import dummyData from "../data/ipoData.json";

export default function Home() {
  const [ipos, setIPOs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIPOs(dummyData);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) return <div>Loading IPOs...</div>;

  return (
    <div className=" container mt-3">
      <h2 className="text-left mb-2">UPCOMING IPO..</h2>
      <p className="">
        Companies that have filled for an IPO with SEBI. Few details might be
        disclosed by the companies later
      </p>
      <div className=" row">
        {ipos.map((ipo, index) => (
          <div className="col-sm-12 col-md-4" key={index}>
            <IPOCard ipo={ipo} />
          </div>
        ))}
      </div>
    </div>
  );
}
