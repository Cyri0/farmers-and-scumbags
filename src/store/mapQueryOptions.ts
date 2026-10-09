import { queryOptions } from "@tanstack/react-query";
import type { TileType } from "../types/Map";
import axios from "axios";
import { queryClient } from "../App";

// Local gépeknek:
// http://192.168.13.20:8000/api/maps/

// Nem local gépeknek:
// https://zj9tm2bf-8000.euw.devtunnels.ms/api/maps/

const generateMap = async (): Promise<TileType[][]> => {
    const mapId = localStorage.getItem("mapId")
    if(mapId){
        console.log("Régi map betöltése...");
        
        const response = await axios.get("http://192.168.13.20:8000/api/maps/" + mapId);
        return response.data.tiles
    }

    console.log("Új map kérése...");
    const response = await axios.post("http://192.168.13.20:8000/api/maps/", {
        width: 20,
        height: 20,
        seedCount: 1,
        iterations: 1
    });

    localStorage.setItem("mapId", response.data.id)
    return response.data.tiles;
}

export function mapQueryOptions(){
    return queryOptions({
        queryKey: ["map"],
        queryFn: generateMap,
        staleTime: Infinity
    })
}

export function removeCurrentMap(){
    localStorage.removeItem("mapId")
    queryClient.refetchQueries({
    queryKey: mapQueryOptions().queryKey,
    });
}