import Validator from '../Validator';

test.each(['1John', '-John', '_John'])(
  'should return an error for entering numbers, underscores, and dashes at the beginning of the string',
  (userName) => {
    const validator = new Validator(userName);

    const textErr = 'Имя не должно начинаться цифрами, символами подчёркивания или тире.';
    expect(() => validator.validateUsername()).toThrowError(new Error(textErr));
  },
);

test.each(['John1', 'John-', 'John_'])(
  'should return an error when entering numbers, underscores and dashes at the end of a line',
  (userName) => {
    const validator = new Validator(userName);

    const textErr = 'Имя не должно заканчиваться цифрами, символами подчёркивания или тире.';
    expect(() => validator.validateUsername()).toThrowError(new Error(textErr));
  },
);

test('should return an error for entering more than 3 digits in a row', () => {
  const validator = new Validator('Jo1234hn');

  const textErr = 'Имя не должно содержать подряд более трёх цифр.';
  expect(() => validator.validateUsername()).toThrowError(new Error(textErr));
});

test('should return the user name', () => {
  const validator = new Validator('John');

  expect(validator.validateUsername()).toBe('John');
});
