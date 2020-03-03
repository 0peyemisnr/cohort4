import fahrenheit from './daily.js'
test ('fahrenheit conversion', () => {
    expect(fahrenheit.convertFahrenheit(0)).toBe(32);
    expect(fahrenheit.convertFahrenheit(20)).toBe(68);
});

