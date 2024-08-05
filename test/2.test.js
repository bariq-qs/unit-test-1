const sort = require("../src/2");

const numbersTest = [12, 5, 4, 9, 8, 10, 18, 2, 1]

test('sort-ascending should sort array in ascending order', () => {
    console.log = jest.fn();
    const sortedNumbers = sort(numbersTest, 'asc');
    expect(sortedNumbers).toEqual([1, 2, 4, 5, 8, 9, 10, 12, 18]);
});

test('sort-descending should sort array in descending order', () => {
    console.log = jest.fn();
    const sortedNumbers = sort(numbersTest, 'desc');
    expect(sortedNumbers).toEqual([18, 12, 10, 9, 8, 5, 4, 2, 1]);
});