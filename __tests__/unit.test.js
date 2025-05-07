// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
//isPhoneNumber tests
test('checks if "123-456-7890" is a phone number', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});
test('checks if "(123)456-7890" is a phone number', () => {
  expect(isPhoneNumber('(123)456-7890')).toBe(true);
});
test('checks if 123-456-7890 is a phone number', () => {
  expect(isPhoneNumber(123-456-7890)).toBe(false);
});
test('checks if 1234567890 is a phone number', () => {
  expect(isPhoneNumber(1234567890)).toBe(false);
});

//isEmail tests
test('checks if "user@gmail.com" is an email', () => {
  expect(isEmail('user@gmail.com')).toBe(true);
});
test('checks if "user@gmail.co" is an email', () => {
  expect(isEmail('user@gmail.co')).toBe(true);
});
test('checks if "gmail.com" is an email', () => {
  expect(isEmail('gmail.com')).toBe(false);
});
test('checks if "user@com" is an email', () => {
  expect(isEmail('user@com')).toBe(false);
});

//isStrongPassword tests
test('checks if "Password_123" is a strong password', () => {
  expect(isStrongPassword('Password_123')).toBe(true);
});
test('checks if "password" is a strong password', () => {
  expect(isStrongPassword('password')).toBe(true);
});
test('checks if "Pas" is a strong password', () => {
  expect(isStrongPassword('Pas')).toBe(false);
});
test('checks if "123pass" is a strong password', () => {
  expect(isStrongPassword('123pass')).toBe(false);
});

//isDate tests
test('checks if "1/1/1111" is a date', () => {
  expect(isDate('1/1/1111')).toBe(true);
});
test('checks if "20/01/1111" is a date', () => {
  expect(isDate('20/01/1111')).toBe(true);
});
test('checks if "00/01/11" is a date', () => {
  expect(isDate('00/01/11')).toBe(false);
});
test('checks if "01/1111" is a date', () => {
  expect(isDate('01/1111')).toBe(false);
});

//isHexColor tests
test('checks if "abc123" is a hex color', () => {
  expect(isHexColor('abc123')).toBe(true);
});
test('checks if "#ABC123" is a hex color', () => {
  expect(isHexColor('#ABC123')).toBe(true);
});
test('checks if "1234" is a hex color', () => {
  expect(isHexColor('1234')).toBe(false);
});
test('checks if "zzzzzz" is a hex color', () => {
  expect(isHexColor('zzzzzz')).toBe(false);
});
