const pair = require('../logic/pairTheShocks');




test('[main functionality] --> should return 3', () => {
    let HowManyData = 6;
    let Data = "12 12 12 12 13 13";
    expect(pair.pairMyShock(HowManyData,Data)).toBe(3);
});


test('should return an array of data', () => {
    let Data = "1 2 3 12 13 14 15";
    expect(Array.isArray(pair.splitData(Data))).toBeTruthy();
    expect(pair.splitData(Data).length).toBe(7);
});


test('should return Distinct value', () => {
    let Data = [1,1,1,2,2,2,3,3,3,];
    expect(pair.DistinctValue(Data)).toStrictEqual([1,2,3]);
});