const {validateRoute, readFile, convertMd} = require('../index.js');

describe('validateRoute', () => {
  test('Debería validateRoute ser una función', () => {
    expect(typeof validateRoute).toEqual('function');
  });
    
  test('Debería readFile ser una función', () => {
    expect(typeof readFile).toEqual('function');
  });
  test('Debería convertMd ser una función', () => {
    expect(typeof convertMd).toEqual('function');
  });
  test('Debería validateUrl ser una función', () => {
    expect(typeof validateUrl).toEqual('function');
  });
});


