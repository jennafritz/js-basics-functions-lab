function distanceFromHqInBlocks(destination) {
    let distanceBlocks; 
    if (destination >= 42) {
        distanceBlocks = destination - 42;
    } else if (destination < 42) {
        distanceBlocks = 42 - destination;
    }
    return distanceBlocks;
}

function distanceFromHqInFeet(destination) {
    let distanceBlocks = distanceFromHqInBlocks(destination);
    let distanceFeet = distanceBlocks * 264;
    return distanceFeet;
}

function distanceTravelledInFeet(start, end) {
    let distanceTraveled;
    if (end >= start) {
        distanceTraveled = (end - start) * 264;
    } else if (start > end) {
        distanceTraveled = (start - end) * 264;
    }
    return distanceTraveled;
}

function calculatesFarePrice(start, end) {
    let totalDistance = distanceTravelledInFeet(start, end);
    let fare;
    if (totalDistance <= 400) {
        fare = 0;
    } else if (totalDistance > 400 && totalDistance <=2000) {
        fare = (totalDistance - 400) * 0.02;
    } else if (totalDistance > 2000 && totalDistance <= 2500) {
        fare = 25;
    } else if (totalDistance > 2500) {
        fare = "cannot travel that far";
    }
    return fare;
}