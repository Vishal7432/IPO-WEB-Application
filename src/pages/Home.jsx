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
    <div className=" container mt-5">
      <h2 className="text-center mb-4">IPO Calendar</h2>
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
