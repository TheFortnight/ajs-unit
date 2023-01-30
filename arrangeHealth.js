export default function arrangeHealth(arr){

    arr.sort(function (a, b) {
        if (a.health > b.health) return -1;
        if (a.health < b.health) return 1;
        
      });

    
    console.log(arr);
    return arr;
}