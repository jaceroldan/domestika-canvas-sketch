const canvasSketch = require('canvas-sketch');

const settings = {
    dimensions: 'a4',
    pixelsPerInch: 300,
    units: 'in'
};

const sketch = () => {
    return (settings) => {
        context = settings.context;
        context.fillStyle = 'black';
        context.fillRect(0, 0, 5, 5);
    }
};

canvasSketch(sketch, settings);
