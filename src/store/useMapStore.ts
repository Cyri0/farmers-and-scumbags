import { create } from "zustand"
import type { BuildingType } from "../types/Map"

type MapStoreType = {
    selectedBuilding: BuildingType | null,
    selectBuilding:(building: BuildingType)=>void
}

export const useMapStore = create<MapStoreType>((set)=>({
    selectedBuilding: null,
    selectBuilding: (building)=>{ set(()=>({selectedBuilding: building})) }
}))