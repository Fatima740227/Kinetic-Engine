// Tile types - what kind of ground each number represents
export const T = {
    DEEP_SEA: 0, SEA: 1, SHALLOW: 2, BEACH: 3,
    GRASS: 4, TALL_GRASS: 5, FOREST: 6, DENSE_FOREST: 7,
    ROCK: 8, MOUNTAIN: 9, SNOW: 10,
    PATH: 11, VILLAGE: 12, SHRINE: 13,
    BAMBOO: 14, RUINS: 15, BRIDGE: 16,
}

export const TILE_S = 48    // each tile is 48 pixels wide
export const WORLD_W = 20   // world is 20 tiles wide
export const WORLD_H = 15   // world is 15 tiles tall

// isWalkable - true if the player can walk on this tile
export function isWalkable(t) {
    return t !== T.DEEP_SEA && t !== T.SEA && t !== T.ROCK && t !==
        T.MOUNTAIN
}

// speedMult - how fast the player moves on this tile type
// PATH - 1.18 (faster) FOREST - 0.72 (slower) SHALLOW - 0.5 (wading)
export function speedMult(t) { ... }
