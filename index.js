// myEach
const myEach = function(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i]);
      }
    } else {
      for (let key in collection) {
        callback(collection[key]);
      }
    }
    return collection;
  };
  
  // myMap
  const myMap = function(collection, callback) {
    const result = [];
    myEach(collection, function(item) {
      result.push(callback(item));
    });
    return result;
  };
  
  // myReduce
  // myReduce
const myReduce = function(collection, callback, acc) {
    let index = 0;
    if (acc === undefined) {
      acc = Object.values(collection)[0];
      index = 1;
    }
  
    if (Array.isArray(collection)) {
      for (let i = index; i < collection.length; i++) {
        acc = callback(acc, collection[i], collection);
      }
    } else {
      const keys = Object.keys(collection);
      for (let i = index; i < keys.length; i++) {
        const key = keys[i];
        acc = callback(acc, collection[key], collection);
      }
    }
  
    return acc;
  };
  
  // myFind
  const myFind = function(collection, predicate) {
    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i])) {
        return collection[i];
      }
    }
    return undefined;
  };
  
  // myFilter
  const myFilter = function(collection, predicate) {
    const result = [];
    myEach(collection, function(item) {
      if (predicate(item)) {
        result.push(item);
      }
    });
    return result;
  };
  
  // mySize
  const mySize = function(collection) {
    if (Array.isArray(collection)) {
      return collection.length;
    } else {
      return Object.keys(collection).length;
    }
  };
  
  // myFirst
  const myFirst = function(array, n) {
    if (n === undefined) {
      return array[0];
    } else {
      return array.slice(0, n);
    }
  };
  
  // myLast
  const myLast = function(array, n) {
    if (n === undefined) {
      return array[array.length - 1];
    } else {
      return array.slice(-n);
    }
  };
  
  // myKeys
  const myKeys = function(object) {
    return Object.keys(object);
  };
  
  // myValues
  const myValues = function(object) {
    const result = [];
    myEach(object, function(value) {
      result.push(value);
    });
    return result;
  };
  module.exports = {
    myEach,
    myMap,
    myReduce,
    myFind,
    myFilter,
    mySize,
    myFirst,
    myLast,
    myKeys,
    myValues
  };
  