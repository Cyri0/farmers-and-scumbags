import { queryOptions } from "@tanstack/react-query";
import type { TileType } from "../types/Map";
import axios from "axios";

const generateMap = async (): Promise<TileType[][]> => {
    const response = await axios.post("https://2tcjmzzm-8000.euw.devtunnels.ms/map/generate/", {
        size: 100,
        seed: 42068,
        seedCount: 15,
        iterations: 10
    });
    return response.data.map;
}

export function mapQueryOptions(){
    return queryOptions({
        queryKey: ["map"],
        queryFn: generateMap,
    })
}