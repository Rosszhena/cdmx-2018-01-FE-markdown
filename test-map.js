const map = (arr, newArray, callback) => {

    // para nuestro test arr = [1,2,3] => [2,3] => [3] => [];
    if( arr == undefined || newArray == undefined || callback == undefined) {
        return  'Error, debe proporcionar todos los parametros';
    }
    // Esto se usa para pasar los test de toEqual de forma antigua 
    //for (let i = 0; i < arr.length; i++) {
    //newArray.push(callback(arr[i]));
    //}
if (arr.length === 0) {
    return newArray
}
// Se le agrega lo que llame de la callback en posición 0 y luego lo elimino y luego vuelve a llamar a la función map
// puedo utilizar shift para eliminar o splice
//newArray.push(callback(arr[0]));
//arr = arr.splice(1);
//console.log(arr);
//return map(arr.splice(1), newArray, callback);

// Refactorización del código anterior
newArray.push(callback(arr[0]));
return map(arr.splice(1), newArray, callback);
};

const myCallback = (item) => {
    return item * 2;
};

module.exports = {
    map,
    myCallback
}