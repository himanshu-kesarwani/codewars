const cubeChecker = (volume, side) =>

    ((side * side * side) !== volume || side <= 0) ? false : true;