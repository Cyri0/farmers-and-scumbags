import { create } from "zustand"
import type { TileType } from "../types/Map"

type MapStoreType = {
    map: TileType[][]
}

export const useMapStore = create<MapStoreType>((set)=>({
    map: generateMap(50,50)
}))


function addGrass(map: TileType[][]): void {
    const height = map.length;
    const width = map[0].length;
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            if (Math.random() < 0.1) {
                map[i][j].ground = "grass";
            }
        }
    }

    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            if (map[i][j].ground === "grass") {
                if (Math.random() < 0.6 && i > 0 && i < height - 1 && j > 0 && j < width - 1) {
                    map[i-1][j].ground = "grass";
                    map[i+1][j].ground = "grass";
                    map[i][j-1].ground = "grass";
                    map[i][j+1].ground = "grass";
                }
            }
        }
    }
}

function addSand(map: TileType[][]): void {
    const height = map.length;
    const width = map[0].length;
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            if(map[i][j].ground === "water" && i < height - 1 && j < width - 1) {
                if ((i > 0 && map[i-1][j].ground === "grass") || 
                    (i < height - 1 && map[i+1][j].ground === "grass") || 
                    (j > 0 && map[i][j-1].ground === "grass") || 
                    (j < width - 1 && map[i][j+1].ground === "grass")) {
                    map[i][j].ground = "sand";
                }
            }
        }
    }

    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            if (map[i][j].ground === "sand" && i < height - 1 && j < width - 1) {
                if ((i > 0 && map[i-1][j].ground !== "water") && 
                    (i < height - 1 && map[i+1][j].ground !== "water") && 
                    (j > 0 && map[i][j-1].ground !== "water") && 
                    (j < width - 1 && map[i][j+1].ground !== "water")) {
                    map[i][j].ground = "grass";
                }
            }
        }
    }

}

function addStone(map: TileType[][]): void {
    const height = map.length;
    const width = map[0].length;
    
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            if (Math.random() < 0.01 && map[i][j].ground === "grass") {
                map[i][j].ground = "stone";
            }
        }
    }

    for(let iteration = 0; iteration < 3; iteration++){
        for (let i = 0; i < height; i++) {
            for (let j = 0; j < width; j++) {
                if(Math.random() < 0.5){
                    if(map[i][j].ground === "stone" && i > 1 && map[i-1][j].ground == "grass"){ map[i-1][j].ground = "stone" }
                }
                if(Math.random() < 0.5){
                    if(map[i][j].ground === "stone" && i > 1 && j > 1 && map[i-1][j-1].ground == "grass"){ map[i-1][j-1].ground = "stone" }
                }
                if(Math.random() < 0.5){
                    if(map[i][j].ground === "stone" && i > 1 && j > 1 && map[i][j-1].ground == "grass"){ map[i][j-1].ground = "stone" }
                }

                if(Math.random() < 0.5){
                    if(map[i][j].ground === "stone" && i > 1 && j > 1 && map[i-1][j-1].ground == "grass"){ map[i-1][j-1].ground = "stone" }
                }


            }
        }
    }
}

export function generateMap(width: number, height: number): TileType[][] {
    const map: TileType[][] = [];
    for (let i = 0; i < height; i++) {
        const row: TileType[] = [];
        for (let j = 0; j < width; j++) {
            row.push({
                ground: "water",
                resource: null,
                building: null
            });
        }
        map.push(row);
    }

    addGrass(map);
    addSand(map);
    addStone(map);
    return map;
}