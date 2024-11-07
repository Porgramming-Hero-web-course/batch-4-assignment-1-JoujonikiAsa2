type Circle = {
    shape: 'circle',
    radius: number
}

type Rectangle = {
    shape: 'rectangle',
    width: number
    height: number
}

const calculateShapeArea = (shape: Circle | Rectangle) => {
    if (shape.shape === "circle") {
        const area = Math.PI * shape.radius * shape.radius;
        return parseFloat(area.toFixed(2))
    }
    else if (shape.shape === "rectangle") {
        const area = shape.height * shape.width
        return area
    }
    return 0

}

console.log(calculateShapeArea({
    shape: "circle",
    radius: 5
}));
console.log(calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6
}))