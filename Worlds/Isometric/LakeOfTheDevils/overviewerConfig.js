var overviewerConfig = {
    "CONST": {
        "tileSize": 384,
        "image": {
            "defaultMarker": "signpost.png",
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png",
            "spawnMarker": "markers/marker_home.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker": "markers/marker_location.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "3": "compass_lower-left.png",
                "2": "compass_lower-right.png"
            }
        },
        "mapDivId": "mcmap",
        "UPPERLEFT": 0,
        "UPPERRIGHT": 1,
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2
    },
    "worlds": [
        "Lake Of The Devils - overworld"
    ],
    "map": {
        "debug": false,
        "cacheTag": "1657112002",
        "north_direction": "lower-left",
        "controls": {
            "pan": true,
            "zoom": true,
            "spawn": true,
            "compass": true,
            "mapType": true,
            "overlays": true,
            "coordsBox": true
        }
    },
    "tilesets": [
        {
            "name": "LOTD - day UR",
            "zoomLevels": 8,
            "defaultZoom": 1,
            "maxZoom": 8,
            "path": "Lake Of The Devils - day Upper-Right",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "Lake Of The Devils - overworld",
            "last_rendertime": 1657109656,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                -67,
                80,
                171
            ],
            "minZoom": 0,
            "spawn": [
                -67,
                80,
                171
            ],
            "north_direction": 1
        },
        {
            "name": "LOTD - day LL",
            "zoomLevels": 8,
            "defaultZoom": 1,
            "maxZoom": 8,
            "path": "Lake Of The Devils - day Lower-Left",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "Lake Of The Devils - overworld",
            "last_rendertime": 1657109656,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                -67,
                80,
                171
            ],
            "minZoom": 0,
            "spawn": [
                -67,
                80,
                171
            ],
            "north_direction": 3
        },
        {
            "name": "LOTD - cave",
            "zoomLevels": 9,
            "defaultZoom": 1,
            "maxZoom": 9,
            "path": "Lake Of The Devils - cave Lower-Right",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "Lake Of The Devils - overworld",
            "last_rendertime": 1657109656,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                -67,
                80,
                171
            ],
            "minZoom": 0,
            "spawn": [
                -67,
                80,
                171
            ],
            "north_direction": 2
        },
        {
            "name": "LOTD - night",
            "zoomLevels": 9,
            "defaultZoom": 1,
            "maxZoom": 9,
            "path": "Lake Of The Devils -Night",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "Lake Of The Devils - overworld",
            "last_rendertime": 1657109656,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                -67,
                80,
                171
            ],
            "minZoom": 0,
            "spawn": [
                -67,
                80,
                171
            ],
            "north_direction": 0
        }
    ]
};
