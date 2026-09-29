import { useQuery } from "@tanstack/react-query"
import { mapQueryOptions } from "../store/mapQueryOptions"
import Tile from "./Tile"

const GameArea = () => {

  const {data, isPending} = useQuery(mapQueryOptions())

  if(isPending) return <h1>Loading...</h1>

  return (
    <div className="gameArea" style={{
      gridTemplateColumns: `repeat(${data?.length}, 1fr)`
    }}>
      {data?.map((row, rowIdx) => 
        row.map((tile, colIdx) => <Tile tile={tile} rowIdx={rowIdx} colIdx={colIdx} />))
      }
    </div>
  )
}

export default GameArea