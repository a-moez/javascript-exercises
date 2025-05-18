const values = require('./joinStrings')

describe('step 2', () => {
  test('firstName is ahmed', () => {
    expect(values.firstName).toEqual('ahmed');
  });
  test('lastName is moez', () => {
    expect(values.lastName).toEqual('moez');
  });
  test('thisYear is 2025', () => {
    expect(values.thisYear).toEqual(2025);
  });
  test('birthYear is 1993', () => {
    expect(values.birthYear).toEqual(1993);
  });
  test('greeting is properly output', () => {
    expect(values.greeting).toEqual("Hello there, my name is ahmed moez and i'm 32 years old.");
  });
});

describe('step 3', () => {
  test('fullName is ahmed moez', () => {
    expect(values.fullName).toEqual('ahmed moez');
  });
  test('age is 18', () => {
    expect(values.age).toEqual(32);
  });
});
