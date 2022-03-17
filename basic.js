function arrayDiff(arr1, arr2) {
    let copy = arr1.slice()
    // let ans = []

    if (arr2.length <= 1) {
        return arr1.filter((child) => {
            return (child != arr2)
        })
    } else {
        for (let i = 0; i < copy.length; i++) {

            const filtered = copy.filter(a => a !== arr2[i])
            copy = filtered

        }

        return copy
    }
    return copy
}

console.log(arrayDiff([], [4, 5]));
console.log(arrayDiff([3, 4], [3]));
console.log(arrayDiff([1, 8, 2], []));
console.log(arrayDiff([1, 2, 3], [1, 2]))
// console.log("my answer", arrayDiff([1, 2, 3], [1, 3, 2]));
