import operate from '../logic/operate';

describe('Test calculate operations', () => {
  test('2 + 7 should be equal 9', () => {
    // Arrange
    const firstNum = 2;
    const secondNum = 7;
    const op = '+';
    // Act
    const result = operate(firstNum, secondNum, op);
    // Assert
    expect(result).toBe('9');
  });
  test('3 - 1 should be equal 2', () => {
    // Arrange
    const firstNum = 3;
    const secondNum = 1;
    const op = '-';
    // Act
    const result = operate(firstNum, secondNum, op);
    // Assert
    expect(result).toBe('2');
  });
  test('2 x 5 should equal 10', () => {
    // Arrange
    const firstNum = 2;
    const secondNum = 5;
    const op = 'x';
    // Act
    const result = operate(firstNum, secondNum, op);
    // Assert
    expect(result).toBe('10');
  });
  test('20 ÷ 5 should equal 4', () => {
    // Arrange
    const firstNum = 20;
    const secondNum = 5;
    const op = '÷';
    // Act
    const result = operate(firstNum, secondNum, op);
    // Assert
    expect(result).toBe('4');
  });
  test('13 % 2 should equal 1', () => {
    // Arrange
    const firstNum = 13;
    const secondNum = 2;
    const op = '%';
    // Act
    const result = operate(firstNum, secondNum, op);
    // Assert
    expect(result).toBe('1');
  });
});
