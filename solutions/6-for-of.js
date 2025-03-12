// BEGIN
const pick = (obj, properties) => {
    const newObject = {};
    for (const property of properties) {
        if (obj[property] !== undefined) {
            newObject[property] = obj[property];
        }
    }
    return newObject;
}
export default pick;
// END