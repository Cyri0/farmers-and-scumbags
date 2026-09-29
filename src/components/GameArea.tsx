import { useQuery } from "@tanstack/react-query"
import { mapQueryOptions } from "../store/mapQueryOptions"

const GameArea = () => {

  const {data, isPending} = useQuery(mapQueryOptions())

  if(isPending) return <h1>Loading...</h1>

  return (
    <div className="gameArea" style={{
      gridTemplateColumns: `repeat(${data?.length}, 1fr)`
    }}>
      {data?.map(row => 
        row.map(tile => <div className={tile.ground}></div>))
      }
    </div>
  )
}

export default GameArea