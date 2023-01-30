export default function healthCalc(arg){
    if(arg.health > 50){
        return 'green'
    }
    if(arg.health > 15){
        return 'yellow'
    }
    if(arg.health > 0){
        return 'red'
    }
    return '0';
}