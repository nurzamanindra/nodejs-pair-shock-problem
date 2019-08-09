const pair = require('../pairTheShocks');




test('should return 3', () => {
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

describe('test from describe', ()=>{
    console.log('describe this first');

    expect(true).toBeTruthy();
});


describe('test from describe2s', ()=>{
    console.log('describe this second');

    test('should return an array of data from describe2', () => {
        let Data = "1 2 3 12 13 14 15";
        expect(Array.isArray(pair.splitData(Data))).toBeTruthy();
        expect(pair.splitData(Data).length).toBe(7);
    });

});