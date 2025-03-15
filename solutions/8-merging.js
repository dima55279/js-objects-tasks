import _ from 'lodash';

// BEGIN
const fill = (firstObject, keys, secondObject) => {
    if (keys.length === 0) {
        for (const props in secondObject) {
            keys.push(props);
        }
    }
    const pick = _.pick(secondObject, keys);
    return Object.assign(firstObject, pick);
}
export default fill;
// END