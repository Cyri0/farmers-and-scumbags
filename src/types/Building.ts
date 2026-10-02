import type { BuildingType } from "./Map"

export interface BuildingData {
    type: BuildingType,
    cost: {
        gold?:number,
        wood?:number,
        stone?:number,
        food?:number,
        people?:number
    }
}