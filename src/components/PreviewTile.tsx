import type { BuildingType, ResourceType, TileType } from "../types/Map";

type PreviewTilePropsType = {
    tile: TileType
}

const PreviewTile = ({tile}:PreviewTilePropsType) => {

    const buildingIcon = (building: BuildingType) => {
        let icon = "";
        switch (building) {
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

    const resouceIcon = (resource: ResourceType) => {
        let icon = "";
        switch (resource) {
            case "wood":
                icon = "🌳"; break;
            case "stone":
                icon = "🪨"; break;
            case "food":
                icon = "🌽"; break;
            case "people":
                icon = "🫃"; break;
            default: break;
        }
        return icon;
    }

    return (
        <div className={"tile " + tile.ground}>
            <span className="tileBuilding">{tile.building && buildingIcon(tile.building)}</span>
            <span className="tileResource">{tile.resource && resouceIcon(tile.resource)}</span>
        </div>
    )
}

export default PreviewTile