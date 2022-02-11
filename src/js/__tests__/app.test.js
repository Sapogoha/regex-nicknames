import Validator from '../app';

describe('This function should validate usernames', () => {
  test('correct username', () => {
    expect(Validator.validateUsername('test')).toBeTruthy();
    expect(Validator.validateUsername('test')).toBeTruthy();
    expect(Validator.validateUsername('test-test')).toBeTruthy();
    expect(Validator.validateUsername('test3test')).toBeTruthy();
    expect(Validator.validateUsername('test_test')).toBeTruthy();
    expect(Validator.validateUsername('test23_test-test')).toBeTruthy();
  });

  test('incorrect username', () => {
    expect(Validator.validateUsername('2test')).toBeFalsy();
    expect(Validator.validateUsername('test123456test')).toBeFalsy();
    expect(Validator.validateUsername('_test3test'));
    expect(Validator.validateUsername('======')).toBeFalsy();
    expect(Validator.validateUsername('test_test_')).toBeFalsy();
    expect(Validator.validateUsername('-test23_test-test')).toBeFalsy();
    expect(Validator.validateUsername('test23_test-test-')).toBeFalsy();
    expect(Validator.validateUsername('t=est')).toBeFalsy();
  });
});
