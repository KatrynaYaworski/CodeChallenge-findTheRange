/*Given an array of numbers, write some code to loop through the array, and print out the smallest and largest numbers in the array.

For example, if given the array [1, 4, 11, 2, 37, -4], your code should print out -4, 37.
*/

// Starting array
let array1 = [1, 4, 11, 2, 37, -4]

function returnMaxAndMin(array) {
    let maxNum = -Infinity
    let smallestNum = Infinity
    for (let i = 0; i < array.length; i++) {
        if (maxNum < array[i]) {
            maxNum = array[i]
        } if (smallestNum > array[i]) {
            smallestNum = array[i]
        }
    }
    console.log(smallestNum, maxNum)
}
returnMaxAndMin(array1)


