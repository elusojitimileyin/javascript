
function setProductOfMaximumNumber( array) {
    if (array.length < 2) return 0;
    let maxProduct = Number.MIN_SAFE_INTEGER;
    for (let count = 0; count < array.length-1; count++) {
        for (let index = count + 1; index < array.length; index++) {
            if (array[index] * array[count] > maxProduct)
                maxProduct = array[index] * array[count] ;
        }
    }
    return maxProduct;

}

module.exports = {setProductOfMaximumNumber};