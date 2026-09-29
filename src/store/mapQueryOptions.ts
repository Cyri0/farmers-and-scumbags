import { queryOptions } from "@tanstack/react-query";
import type { TileType } from "../types/Map";
import axios from "axios";

const generateMap = async (): Promise<TileType[][]> => {
    // const response = await axios.post("https://2tcjmzzm-8000.euw.devtunnels.ms/map/generate/", {
    //     size: 30,
    //     seed: 42069,
    //     seedCount: 5,
    //     iterations: 10
    // });

    const response = await axios.get("map.json")
    return response.data.map;
}

export function mapQueryOptions(){
    return queryOptions({
        queryKey: ["map"],
        queryFn: generateMap,
        staleTime: Infinity
    })
}