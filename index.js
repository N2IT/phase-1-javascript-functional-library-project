//myEach function
function myEach(collection, callback) {
    for (let key in collection) {
        callback(collection[key])
    }
    return collection
}

//myMap function
function myMap(collection, callback) {
    let newArray = Object.values(collection).map((e) => callback(e))
    return newArray
}

//myReduce function
function myReduce(collection, callback, initialValue) {
    if (initialValue !== undefined) {
        return Object.values(collection).reduce(callback, initialValue);
    } else {
        return Object.values(collection).reduce(callback);
    }
}

//myFind function
function myFind(collection, predicate) {
    // console.log(collection)
    const value = collection.find((e) => predicate(e))
    return value
}

//myFilter
function myFilter(collection, predicate) {
    // console.log(collection)
    let output = Object.values(collection).filter((f) => predicate(f))
    return output
}

//mySize
function mySize(collection) {
    let values = Object.values(collection)
    return values.length
    // console.log(values.length)
}

//function myFirst
function myFirst(anArray, n) {
    if (!Array.isArray(anArray)) {
        return undefined; // If anArray is not an array, return undefined
    }
    if (n === undefined) {
        // If n is not specified, return the first element
        return anArray[0]
    } else if (n >= 0) {
        // If n is a non-negative number, return the first n elements
        return anArray.slice(0, n);
    } else {
        return []; // If n is negative, return an empty array
    }
}

//function myLast
function myLast(anArray, n) {
    let all = anArray.length - 1
    if (!Array.isArray(anArray)) {
        return undefined
    }
    if (n === undefined) {
        return anArray[all]
    } else if (n < 0) {
        return anArray.slice(n)
    } else if (n >= 0) {
        let newN = n * -1
        return anArray.slice(newN)
    } else {
        return []
    }
}


//Bonus//
//function mySortBy
function mySortBy(anArray, callback) {
    let newArray = [...anArray]

    return newArray.sort((a, b) => {
        debugger
        if (callback(a) > callback(b)) {
            return 1
        } else if (callback(b) > callback(a)) {
            return -1
        } else {
            return 0
        }
    })
}

//OBJECT FUNCTIONS
function myKeys(object){
    let output = []
    for(let key in object){
       output.push(key)
    }
    return output
}

//myValues function
function myValues(anObject){
    let output = []
    for(let key in anObject){
        output.push(anObject[key])
    }
    return output
}  
