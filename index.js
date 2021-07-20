// Code your solution in this file!

const hq = 42;
function distanceFromHqInBlocks(pickup){
    if (hq > pickup) {
        return(hq - pickup);
    } else {
        return (pickup - hq);
    }
}
distanceFromHqInBlocks(43);
distanceFromHqInBlocks(50);
distanceFromHqInBlocks(34);

function distanceFromHqInFeet(pickup){ 
    return distanceFromHqInBlocks(pickup) * 264;
}
distanceFromHqInFeet(43);
distanceFromHqInFeet(50);
distanceFromHqInFeet(34);



function distanceTravelledInFeet(start, end){
    if (end > start) {
        return (end - start)*264;
    } else {
        return (start - end)*264;
    }
}
distanceTravelledInFeet(43, 48);
distanceTravelledInFeet(50, 60);
distanceTravelledInFeet(34, 28);


function calculatesFarePrice(start, end){

    if (distanceTravelledInFeet(start, end) < 400) {
        return 0;
    } else if (distanceTravelledInFeet(start, end) > 400 && distanceTravelledInFeet(start, end) < 2000) {
        return (distanceTravelledInFeet(start, end) - 400)*.02; 
    } else if (distanceTravelledInFeet(start, end) > 2000 && distanceTravelledInFeet(start, end) < 2500) {
        return 25;
    } else if (distanceTravelledInFeet(start, end) > 2500) {
        return 'cannot travel that far';
    }

}

calculatesFarePrice(43, 44);
calculatesFarePrice(50, 58);
calculatesFarePrice(34, 24);







