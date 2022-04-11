import React, {useState, useEffect} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {

  const [sushis,setSushi]=useState([])
  const [start,setStart]=useState(0)
  const [money,setMoney]=useState(100)

  const displaySushi=sushis.slice(start,start+4)

  function handleMoreSushi(){
    setStart((start+4)%sushis.length)
  }

  function handleEatSushi(piece){

    const remainingMoney=money-piece.price

    if(remainingMoney>=0){

    setMoney(remainingMoney)

    setSushi(sushis.map(sushi=>
      sushi.id=== piece.id ? {...sushi, eaten:true} : sushi
      )
    )
    }
  }
  useEffect(() => {
    fetch(API)
    .then(resp => resp.json())
    .then(data => setSushi(data))
  }, [])
 

  return (
    <div className="app">
      <SushiContainer 
      handleMoreSushi={handleMoreSushi} 
      sushis={displaySushi}
      handleEatSushi={handleEatSushi} />
      <Table money={money} plates={sushis.filter(sushi=>sushi.eaten)} />
    </div>
  );
}

export default App;
