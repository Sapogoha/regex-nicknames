import Validator from '../app';

test.each([
  ['test'],
  ['test-test'],
  ['test3test'],
  ['test_test'],
  ['test23_test-test'],
])('testing validateUsername function - correct username', (username) => {
  expect(Validator.validateUsername(username)).toBeTruthy();
});

test.each([
  ['2test'],
  ['test123456test'],
  ['_test3test'],
  ['======'],
  ['test_test_'],
  ['-test23_test-test'],
  ['test23_test-test-'],
  ['t=est'],
])('testing validateUsername function - incorrect username', (username) => {
  expect(Validator.validateUsername(username)).toBeFalsy();
});
