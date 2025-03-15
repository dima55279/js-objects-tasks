// BEGIN
const make = (companyName, obj = {}) => {
    const companyObject = {name: companyName, ...obj};
    if (Object.hasOwn(obj, 'state') === false) {
        companyObject.state = "moderating";
    }
    if (Object.hasOwn(obj, 'createdAt') === false) {
        companyObject.createdAt = Date.now();
    }
    return companyObject;
}
const company = make('Yandex');
console.log(company);
export default make;
// END