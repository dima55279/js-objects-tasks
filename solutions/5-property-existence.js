import _ from 'lodash';

// BEGIN
const countWords = (sentence) => {
    const words = _.words(sentence.toLowerCase());
    const countObject = {};
    for (const word of words) {
        if (countObject[word] === undefined) {
            countObject[word] = 1;
        }
        else countObject[word] += 1;
    }
    return countObject;
}
export default countWords;
// END