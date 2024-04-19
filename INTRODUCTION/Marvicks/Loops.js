console.log("loops in javascript")
// different between let and const; 

// type of loops in javascript

// 1. while look;
// while (condition) {
    
// }

// 2. do while lookup;
// do {
    
// } while (condition);

// 3. forin loops=> can be use for both object and const;

// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }



// 4.forof loops=> can be use for object;
// for (const iterator of object) {
    
// }

// 5. forEach loop

// examples for in

// let user ={

//     firstname: "Dayo",
//     lastname: "miran",
//     age:      "100",
//     sex:      "female"

// }

// for (const key in user){
//     console.log(user[key])
// }


// for (const key of user){
//     console.log(key)
// }

// let array = [1,3,4,5,6]

// for (const index in array){
//     console.log(array[index])
// }

//  for (const value of array) {
//     console.log(value)
// }

// task1

var obj1 = {
    name: "nigeria",
    population: 200,
     temp:      37,
     currency:      "Naira",
};

var obj2 = {
    name: "Uk",
    population: 500,
     temp:      10,
     currency:      "pounds",
}

let obj3 = {
    name: "ghana",
    population: 110,
     temp:      20,
     currency:      "cedi",
}

let obj4 = {
    name: "USA",
    population: 1000,
     temp:     5,
     currency:      "dollar",
}

let obj5 = {
    name: "cuba",
    population: 50,
     temp:      40,
     currency:      "cuba dollar",
}

let obj6 = {
    name: "niger",
    population: 100,
     temp:      50,
     currency:      "niger dollar",
}


let obj7 = {
    name: "congo",
    population: 300,
     temp:      28,
     currency:      "congo pounds",
}

let obj8 = {
    name: "spain",
    population: 150,
     temp:      15,
     currency:      "pounds",
}


let obj9 = {
    name: "senegal",
    population: 100,
     temp:      25,
     currency:      "senegal dollar",
}

let country = [[null,obj1,obj2,obj3],[obj4,obj5,obj6,null],[obj7,null,obj8,obj9]]

let totalpopulation=0

for (const key of country) {
    for (const value in key){
        if((key[value]!= null)) {
        totalpopulation += key[value].population
        }
    }
}
console.log(totalpopulation)





