import { fabric } from "fabric";
import React, { useCallback, useEffect } from "react";
import './index.scss';
export default function DragImage1() {
  const init = useCallback(
    () => {
      // create a wrapper around native canvas element (with id="canvas")
      var canvas = new fabric.Canvas("canvas", {
        height: 600,
        width: 900,
      });
      //背景图片
      canvas.setBackgroundImage(
        '/images/bishun1/font_bg.png',
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

      fabric.Image.fromURL('/images/bishun1/11.png', function (img) {
        img.set({
          left: fabric.util.getRandomInt(600, 637),
          top: fabric.util.getRandomInt(225, 280),
          angle: 0
        });
        img.perPixelTargetFind = true;
        img.hasControls = img.hasBorders = false;

        // img.scale(fabric.util.getRandomInt(50, 100) / 100);

        canvas.add(img);
      });
      fabric.Image.fromURL('/images/bishun1/22.png', function (img) {
        img.set({
          left: fabric.util.getRandomInt(487, 600),
          top: fabric.util.getRandomInt(435, 525),
          angle: 0
        });
        img.perPixelTargetFind = true;
        img.hasControls = img.hasBorders = false;

        // img.scale(fabric.util.getRandomInt(50, 100) / 100);

        canvas.add(img);
      });
      fabric.Image.fromURL('/images/bishun1/33.png', function (img) {
        img.set({
          left: fabric.util.getRandomInt(825, 862),
          top: fabric.util.getRandomInt(10, 135),
          angle: 0
        });
        img.perPixelTargetFind = true;
        img.hasControls = img.hasBorders = false;

        // img.scale(fabric.util.getRandomInt(50, 100) / 100);

        canvas.add(img);
      });

      fabric.Image.fromURL('/images/bishun1/44.png', function (img) {
        img.set({
          left: fabric.util.getRandomInt(480, 560),
          top: fabric.util.getRandomInt(0, 180),
          angle: 0
        });
        img.perPixelTargetFind = true;
        img.hasControls = img.hasBorders = false;

        // img.scale(fabric.util.getRandomInt(50, 100) / 100);

        canvas.add(img);
      });

      fabric.Image.fromURL('/images/bishun1/55.png', function (img) {
        img.set({
          left: fabric.util.getRandomInt(700, 750),
          top: fabric.util.getRandomInt(300, 350),
          angle: 0
        });
        img.perPixelTargetFind = true;
        img.hasControls = img.hasBorders = false;

        // img.scale(fabric.util.getRandomInt(50, 100) / 100);

        canvas.add(img);
      });

    },
    [],
  )

  useEffect(() => {
    init();
  }, []);

  return (
    <div className="light-bg1">
      <canvas id="canvas" width="300" height="300"></canvas>
    </div>
  );
}