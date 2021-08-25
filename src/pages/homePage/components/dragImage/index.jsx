import { fabric } from "fabric";
import React, { useCallback, useEffect } from "react";
import './index.scss';
export default function DragImage() {

  const init = useCallback(
    () => {
      // create a wrapper around native canvas element (with id="canvas")
      var canvas = new fabric.Canvas("canvas", {
        height: 800,
        width: 800,
      });
      //背景图片
      canvas.setBackgroundImage(
        '/images/album/cut1.jpg',
        canvas.renderAll.bind(canvas),
        {
          top: 0,
          left: 0,
          originX: 'left',
          originY: 'top',
        }
      )

      canvas.renderAll();
      fabric.Object.prototype.transparentCorners = false;

      // create a rectangle object
      // var rect = new fabric.Rect({
      //   left: 100,
      //   top: 100,
      //   fill: 'red',
      //   width: 20,
      //   height: 20
      // });

      // "add" rectangle onto canvas
      // canvas.add(rect);

      // rect.set({ left: 20, top: 50 });
      // canvas.renderAll();
      fabric.Image.fromURL('/images/ladybug.png', function (img) {
        img.set({
          left: fabric.util.getRandomInt(0, 600),
          top: fabric.util.getRandomInt(0, 500),
          angle: fabric.util.getRandomInt(0, 90)
        });

        img.perPixelTargetFind = true;
        img.hasControls = img.hasBorders = false;

        img.scale(fabric.util.getRandomInt(50, 100) / 100);

        canvas.add(img);
      });

      // canvas.setBackgroundImage('/images/cut1.jpg', canvas.renderAll.bind(canvas));
    },
    [],
  )

  useEffect(() => {
    // createCanvas();
    init();
  }, []);

  return (
    <div className="light-bg">
      <canvas id="canvas" width="300" height="300"></canvas>
    </div>
  );

}