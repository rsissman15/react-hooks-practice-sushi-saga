import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({sushis, handleMoreSushi,handleEatSushi}) {
  const renderSushi=sushis.map(sushi=>{
    return <Sushi key={sushi.id} sushi={sushi} handleEatSushi={handleEatSushi}/>
  })
  return (
    <div className="belt">
      {renderSushi}
      <MoreButton handleMoreSushi={handleMoreSushi}/>
    </div>
  );
}

export default SushiContainer;
