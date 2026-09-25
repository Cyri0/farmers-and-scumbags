import { create } from "zustand"
import type { TileType } from "../types/Map"

type MapStoreType = {
    map: TileType[][]
}

export const useMapStore = create<MapStoreType>((set)=>({
    map: generateMap(10)
}))

function generateMap(size: number):TileType[][]{
    let tempMap:TileType[][] = []

    for(let r = 0; r < size; r++){
        let line:TileType[] = []
        for(let c = 0; c < size; c++){
            line.push({building: null, ground: "water", resource: null})
        }
        tempMap.push(line)
    }
    return tempMap
}