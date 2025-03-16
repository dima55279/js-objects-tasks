import crc32 from 'crc-32';

// BEGIN
export const make = () => {
    return [];
}
export const set = (map, key, value) => {
    const hash = crc32.str(key);
    const index = Math.abs(hash) % 1000;
    if (map[index] === undefined || map[index][0] === key) {
        map[index] = [key, value];
        return true;
    }
    return false;
}
export const get = (map, key, defaultValue = null) => {
    const hash = crc32.str(key);
    const index = Math.abs(hash) % 1000;
    if (map[index] !== undefined && map[index][0] === key) {
        return map[index][1];
    }
    return defaultValue;
}
// END