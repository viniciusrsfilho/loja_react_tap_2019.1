export default class Toolkit {
    static splitArray(array, chunkSize) {
        let newArray = [];

        for (let i = 0; i < array.length; i += chunkSize) {
          newArray.push(array.slice(i, i + chunkSize));
        }

        return newArray;
    }
}