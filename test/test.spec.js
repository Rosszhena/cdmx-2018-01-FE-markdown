const {validateLink } = require('../index.js');

describe('validateLink', () => {
    test('Debería validateLink ser una función', () => {
        expect(typeof validateLink).toEqual('function');
    });
    
    test('Debería validateLink ser una función', () => {
      expect(typeof validateLink).toEqual('function');
  });
  });
    /*
    test('Debería retornar [] si se le pasa un array []', () => {
        expect(map([], [], myCallback) instanceof Array).toBe(true);
        expect(map([], [], myCallback)).toEqual([]);
        // se le tiene que poner el 2 en lo que espera para que pase el test
        expect(map([], [2], myCallback)).toEqual([2]);
    });
    test('Debería retornar un "Error", si no se pasan parametros', () => {
        expect(map()).toBe('Error, debe proporcionar todos los parametros');
    });
    test('Debería retornar una [2,4,6], si se pasa un aray [1,2,3]', () => {
        expect(map([1,2,3], [], myCallback)).toEqual([2,4,6]);
    });
    test('Debería retornar una [8,10,12], si se pasa un aray [4,5,6]', () => {
        expect(map([4,5,6], [], myCallback)).toEqual([8,10,12]);
    });
 

});

describe('Callback', () => {
    test('Debería ser una función', () => {
      
        expect(typeof myCallback).toBe('function');
    });

    test('Debería retornar 2 cuando se le pase 1', () => {
        expect(myCallback(1)).toBe(2);
    });
    test('Debería retornar 4 cuando se le pase 1', () => {
        expect(myCallback(2)).toBe(4);
    });
    test('Debería retornar 6 cuando se le pase 1', () => {
        expect(myCallback(3)).toBe(6);
    });
    test('Debería retornar 8 cuando se le pase 1', () => {
        expect(myCallback(4)).toBe(8);
    });
});

*/

