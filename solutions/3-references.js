// BEGIN
const is = (firstObject, secondObject) => {
    if (firstObject.name === secondObject.name
        && firstObject.state === secondObject.state
        && firstObject.website === secondObject.website) {
        return true;
    }
    return false;
}
export default is;
// END