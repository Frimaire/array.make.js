/*
 * This is a non-standard JavaScript extension.
 *
 * Array.make(callback:function, length:uint, thisArg:Object = undefined):Array
 * calls the callback(index:uint) with the parameter index from 0 to length,
 * putting the return values of the callback in an Array
 * and return the array.
 * 
 * This is free and unencumbered software released into the public domain.
 * 
 */

if(!Array.make) {
  Array.make = function(callback, length/*, thisArg*/) {
    var T, A, k = 0;
    
    //If callback is not a function, throw a TypeError exception.
    if(typeof callback !== "function") {
      throw new TypeError(callback + " is not a function");
    }
    
    //Let length be Uint32.
    length >>>= 0;
    
    //If thisArg was supplied, let T be thisArg, otherwise, let T be undefined.
    if(arguments.length > 2) {
      T = arguments[2];
    }
    
    //Let A be a new array.
    A = new Array(length);
    
    //Repeat, while k < length
    while(k < length) {
      //fill the array A with the return value of callback.
      A[k] = callback.call(T, k);
      
      k++;
    }

    return A;
  };
}