import _ from 'lodash';

// BEGIN
const normalize = (obj) => {
    obj.name = _.capitalize(obj.name);
    obj.description = obj.description.toLowerCase();
    return obj;
}
export default normalize;
// END