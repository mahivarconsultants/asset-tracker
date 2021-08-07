import React from "react";
/**
 * Renders single asset item of asset list page
 */
export default function assetSummaryView({ data }) {
  const { name, distance, address, lastSignalDateTime } = data;
  console.log(data);
  return (
    <>
    <div className="container pb-3" key={data.deviceId}>  
    <span className="row p-2">   
      <h3 className="col-2">{name}</h3>
      <h3 className="col-2">{distance} Km</h3>
    </span> 
      <h5 className="pb-2">{address}</h5>
      <h5 className="pb-1">Last Signal: {lastSignalDateTime}</h5>     
    </div>
    <hr />
    </>
  );
}
