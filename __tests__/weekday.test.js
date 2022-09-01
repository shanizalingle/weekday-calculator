import { calculateDay } from '../src/js/weekday.js';

describe ('calculateDay', () => {
  test("determine which day of the week the inputted day is", () => {
    const date = "08/31/2022";
    expect(calculateDay(date)).toEqual(4);
  });
});

