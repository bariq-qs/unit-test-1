const fishBash = require('../src/1')

test('fishBash should print correct output for numbers divisible by 3, 5, and 15', () => {
    console.log = jest.fn();
    fishBash(15);

    expect(console.log).toHaveBeenCalledTimes(15);
    expect(console.log).toHaveBeenNthCalledWith(3, 3, 'fish');
    expect(console.log).toHaveBeenNthCalledWith(5, 5, 'bash');
    expect(console.log).toHaveBeenNthCalledWith(15, 15, 'fish bash');
});