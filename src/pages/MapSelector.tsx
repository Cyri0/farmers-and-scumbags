import { useEffect, useState } from "react"
import { getMap, type MapAPIResponse } from "../services/map"
import PreviewTile from "../components/PreviewTile"

const MapSelector = () => {
  const [mapData, setMapData] = useState<MapAPIResponse>()
  const [seed, setSeed] = useState<number>()

  const newMap = () => {
    const rnd = Math.floor(Math.random() * 10000000)
    setSeed(rnd)
    getMap(20, rnd).then(data => setMapData(data))
  }
  
  useEffect(()=>{
    newMap()
  },[])
  
  return (
    <div>
        <h1>Válassz térképet!</h1>
        <h2>Seed: {seed}</h2>
        <div className="gameArea" style={{ gridTemplateColumns: `repeat(${mapData?.map.length}, 1fr)`}}>
            {mapData?.map.map((row, rowIdx) => 
                row.map((tile, colIdx) => <PreviewTile key={`${rowIdx}-${colIdx}`} tile={tile} />))
            }
        </div>

        <button onClick={newMap}>Next Map</button>
        <button>Start Game</button>
    </div>
  )
}

export default MapSelector