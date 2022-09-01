import { calculateDay, dateString } from '../src/js/weekday.js';

describe ('calculateDay', () => {

  test("determine which day of the week the inputted day is", () => {
    const date = "08/31/2022";
    expect(calculateDay(date)).toEqual(3);
  });
});

describe ('dateString', () => {

  test("return a string based on the day of the week", () => {
    const date = "08/31/2022";
    expect(calculateDay(date)).toEqual("This date lands on a Wednesday");
  });
})