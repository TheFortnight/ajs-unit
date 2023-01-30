import healthCalc from '../healthCalc';

test.each([
    [{name: 'Маг1', health: 90}, 'green'],
    [{name: 'Маг2', health: 30}, 'yellow'],
    [{name: 'Маг3', health: 10}, 'red'],
    [{name: 'Маг4', health: 0}, '0'],
    ])(
    ('should determine color for %s level'),
    (health, expected) => {
    const result = healthCalc(health);
    expect(result).toBe(expected);
    });