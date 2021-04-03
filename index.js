// Code your solution in this file!

const returnFirstTwoDrivers = function(arrPassing = []) {
    return arrPassing.slice(0,2);
}

const returnLastTwoDrivers = function(arrPassing = []) {
    return arrPassing.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(intMultiplier) {
    return function (intFare) {
        return intFare * intMultiplier;
    };
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(arrPassing = [], fnFirstOrLast) {
    return fnFirstOrLast(arrPassing);
}