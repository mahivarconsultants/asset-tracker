import React from "react";
/**
 * Renders single asset item of asset list page
 */
export default function assetSummaryView({ data }) {
  const { name, distance, address, lastSignalDateTime } = data;
  console.log(data);
  return (
    <>
    <div className="assetSummaryView" key={data.deviceId}>     
      <h2>{name}</h2>
      <h2>{distance} Km</h2>
      <h3>{address}</h3>
      <h3>Last Signal: {lastSignalDateTime}</h3>      
    </div>
    <hr />
    </>
  );
}
