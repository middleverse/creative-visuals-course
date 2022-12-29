const canvasSketch = require("canvas-sketch");

const settings = {
  dimensions: [2048, 2048],
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);

    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        let w = width * 0.1;
        let h = height * 0.1;
        let gap = width * 0.03;
        let x = width * 0.17 + i * (w + gap);
        let y = height * 0.17 + j * (h + gap);

        context.lineWidth = 5;
        context.beginPath();
        context.rect(x, y, w, h);
        context.stroke();

        if (Math.random() > 0.5) {
          context.lineWidth = 2;
          context.beginPath();
          context.rect(x + 10, y + 10, w - 20, h - 20);
          context.stroke();
        }
      }
    }
  };
};

canvasSketch(sketch, settings);
