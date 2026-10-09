import { queryOptions } from "@tanstack/react-query";
import type { TileType } from "../types/Map";
import axios from "axios";

// Local gépeknek:
// http://192.168.13.20:8000/api/maps/

// Nem local gépeknek:
// https://zj9tm2bf-8000.euw.devtunnels.ms/api/maps/

const generateMap = async (): Promise<TileType[][]> => {
    const response = await axios.post("http://192.168.13.20:8000/api/maps/", {
        width: 20,
        height: 20,
        seed: 42069,
        seedCount: 5,
        iterations: 10
    });

    // const response = await axios.get("map.json")
    return response.data.map;
}

export function mapQueryOptions(){
    return queryOptions({
        queryKey: ["map"],
        queryFn: generateMap,
        staleTime: Infinity
    })
}