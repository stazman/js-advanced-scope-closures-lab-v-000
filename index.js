function produceDrivingRange(blockRange) { 
    return function(startPoint, endPoint) {
        let numberOfBlocks = endPoint.slice(0,2) - startPoint.slice(0,2)
        if (numberOfBlocks < blockRange) {
            return `within range by ${blockRange - numberOfBlocks}`
        }
        else if (numberOfBlocks > blockRange) {
            return `${numberOfBlocks - blockRange} blocks out of range`
        }
    }
};         

function produceTipCalculator(farePercentage) {
    return function(fare) {
        let totalCost = farePercentage * fare
        return totalCost
    }
}
   
function createDriver() {
    let DriverId = 0;
    return class {
      constructor(name) {
        this.name = name;
        this.id = ++DriverId;
      }
    };
}