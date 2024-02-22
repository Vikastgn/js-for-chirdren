function areArraysSame (arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (let i=0; i < arr1.length; i++)  {
        for (let j=0; j < arr2.length; j++) {
            return (arr1[i] === arr2[j]);
        }
    }
    
}
console.log (areArraysSame([1, 2, 3], [1, 2, 3, 4]))