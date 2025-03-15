// BEGIN
const get = (obj, keys) => {
    const newObj = {};
    if (keys.length > 1) {
        for (let i = 0; i < keys.length - 1; i++) {
            if (Object.hasOwn(obj, keys[i])) {
                const temp = {...obj[keys[i]]};
                for (const props in temp) {
                    newObj[props] = temp[props];
                }
            }
            if (Object.hasOwn(newObj, keys[i])) {
                const temp = {...newObj[keys[i]]};
                for (const props in temp) {
                    newObj[props] = temp[props];
                }
            }
        }
    }
    else if (Object.hasOwn(obj, keys[0]))
        newObj[keys[0]] = obj[keys[0]];
    if (Object.hasOwn(newObj, keys[keys.length - 1])) return newObj[keys[keys.length - 1]];
    else return null;
}
export default get;
// END