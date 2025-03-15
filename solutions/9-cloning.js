// BEGIN
const cloneShallow = (obj) => {
    const cloneObject = {};
    for (const props in obj) {
        cloneObject[props] = obj[props];
    }
    return cloneObject;
}
export default cloneShallow;
// END
