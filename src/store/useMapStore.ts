import { create } from "zustand"
import type { TileType } from "../types/Map"

type MapStoreType = {
    map: TileType[][] | undefined
}

export const useMapStore = create<MapStoreType>(()=>({
    map: []
}))