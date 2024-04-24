
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

function addOneToTheLastIndexOfAndArrayInput(array) {

    let newArray = [];
   
        for (let index = array.length - 1; index >= 0; index--) {
            newArray[index] = array[index] -1;
             if (array[index] != 9){
             array[index]++;
            break;

        }else{
                array[index] = 0
            }
            if (array[0] == 0 && array[1]) array.unshift(1);
            
        }
        return array;
    }
  

module.exports = {setProductOfMaximumNumber,addOneToTheLastIndexOfAndArrayInput};