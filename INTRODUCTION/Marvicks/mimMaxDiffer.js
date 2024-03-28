const array = [2,4,5,7,8]

function differ(myarray){
    let largest = myarray[0];
    let lowest = myarray[0];

    for (let count = 0; count < myarray.length;count++){
        if (myarray[count] > largest){
            largest = myarray[count]
        }
        if (myarray[count] < lowest){
            lowest = myarray[count]
        }
    }
        return("The different is:" + [largest - lowest]);
       
    
    } console.log(differ(array))
   
    