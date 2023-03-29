import calculate from '../Logic/calculate.js';

describe('test calculate function', () => {
  test('it should return sum output', () => {
    const obj = { total: '1', next: '2', operation: '+' };
    const buttonName = '=';
    const output = calculate(obj, buttonName);
    expect(output.total).toBe('3');
  });

  test('it should return sum output', () => {
    const obj = { total: '6', next: '2', operation: '+' };
    const buttonName = '=';
    const output = calculate(obj, buttonName);
    expect(output.total).toBe('8');
  });

  test('it should return substract output', () => {
    const obj = { total: '8', next: '2', operation: '-' };
    const buttonName = '=';
    const output = calculate(obj, buttonName);
    expect(output.total).toBe('6');
  });
});
