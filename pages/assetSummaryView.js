import React from "react";
/**
 * Renders single asset item of asset list page
 */
export default function assetSummaryView({ data }) {
  const { name, distance, address, lastSignalDateTime } = data;
  console.log(data);
  return (
    <div className="assetSummaryView" key={data.deviceId}>
      <span>
        <h3>{name}</h3>
        <h2>{distance} Km</h2>
      </span>
      <h4>{address}</h4>
      <h3>Last Signal: {lastSignalDateTime}</h3>
    </div>
  );
}
