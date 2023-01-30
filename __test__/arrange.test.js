import arrangeHealth from '../arrangeHealth';

let array = [{name: 'Маг3', health: 10},
{name: 'Маг1', health: 90}, {name: 'Маг4', health: 0}, 
{name: 'Маг2', health: 30}];

test('should arrange heroes by health level', function (){
    const result = arrangeHealth(array);
    expect(result[0].health).toBe(90);

})
    
    
    
    
    