// BEGIN
const getSortedNames = (arr) => {
    const namesArray = [];
    for (let i = 0; i < arr.length; i++) {
        const { name } = arr[i];
        namesArray.push(name);
    }
    return namesArray.sort();
}
export default getSortedNames;
// END