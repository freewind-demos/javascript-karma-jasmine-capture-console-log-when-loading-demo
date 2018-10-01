describe('hello', function () {
  it('should use jquery to get text of some html code', function () {
    console.log('--------- console.log inside test ---------------');
    expect(hello('<div>JQuery</div>')).toBe('JQuery')
  })
});
