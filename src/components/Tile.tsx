import { useState, type MouseEventHandler } from "react"
import type { TileType } from "../types/Map"

type TilePropsType = {
  tile: TileType,
  rowIdx: number,
  colIdx: number
}

const Tile = ({tile,colIdx,rowIdx}:TilePropsType) => {

  const buildingIcon = () => {
    let icon = "";
    switch (tile.building) {
      case "farm":
        icon = "🛖"; break;
      case "house":
        icon = "🏠"; break;
      case "lumber":
        icon = "🪓"; break;
      case "mine":
        icon = "⛏️"; break;
      default: break;
    }
    return icon;
  }

  const [building] = useState(buildingIcon())

  const build = () => {
    alert(`Építés a ${rowIdx}|${colIdx} helyre!`)
  }

  const hoverTile = (e: React.MouseEvent) => {
    const div = e.target as HTMLElement;
    const style = tile.ground == "grass" ? "1px solid lime" : "1px solid red"
    div.style.border = style;
  }

  const leaveTile = (e: React.MouseEvent) => {
    const div = e.target as HTMLElement;
    div.style.border = "none";
  }

  return (
    <div onMouseOver={(e)=>hoverTile(e)} onMouseLeave={(e)=>leaveTile(e)} onClick={build} className={tile.ground} title={`${rowIdx}|${colIdx}`}>
      {building}
    </div>
  )
}

export default Tile