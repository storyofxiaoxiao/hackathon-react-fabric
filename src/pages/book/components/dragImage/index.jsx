import { fabric } from "fabric";
import React, { useCallback, useEffect } from "react";
import './index.scss';
export default function DragImage() {
  const init = useCallback(
    () => {
      // create a wrapper around native canvas element (with id="canvas")
      var canvas = new fabric.Canvas("canvas", {
        height: 900,
        width: 1300,
      });
      //背景图片
      canvas.setBackgroundImage(
        '/images/bishun/bg.png',
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

      fabric.Image.fromURL('/images/bishun/1.png', function (img) {
        img.set({
          left: fabric.util.getRandomInt(800, 850),
          top: fabric.util.getRandomInt(300, 400),
          angle: 0
        });
        img.perPixelTargetFind = true;
        img.hasControls = img.hasBorders = false;

        // img.scale(fabric.util.getRandomInt(50, 100) / 100);

        canvas.add(img);
      });
      fabric.Image.fromURL('/images/bishun/2.png', function (img) {
        img.set({
          left: fabric.util.getRandomInt(650, 800),
          top: fabric.util.getRandomInt(580, 700),
          angle: 0
        });
        img.perPixelTargetFind = true;
        img.hasControls = img.hasBorders = false;

        // img.scale(fabric.util.getRandomInt(50, 100) / 100);

        canvas.add(img);
      });
      fabric.Image.fromURL('/images/bishun/3.png', function (img) {
        img.set({
          left: fabric.util.getRandomInt(1100, 1150),
          top: fabric.util.getRandomInt(80, 180),
          angle: 0
        });
        img.perPixelTargetFind = true;
        img.hasControls = img.hasBorders = false;

        // img.scale(fabric.util.getRandomInt(50, 100) / 100);

        canvas.add(img);
      });

      fabric.Image.fromURL('/images/bishun/4.png', function (img) {
        img.set({
          left: fabric.util.getRandomInt(650, 750),
          top: fabric.util.getRandomInt(0, 250),
          angle: 0
        });
        img.perPixelTargetFind = true;
        img.hasControls = img.hasBorders = false;

        // img.scale(fabric.util.getRandomInt(50, 100) / 100);

        canvas.add(img);
      });

      fabric.Image.fromURL('/images/bishun/5.png', function (img) {
        img.set({
          left: fabric.util.getRandomInt(1000, 1050),
          top: fabric.util.getRandomInt(500, 650),
          angle: 0
        });
        img.perPixelTargetFind = true;
        img.hasControls = img.hasBorders = false;

        // img.scale(fabric.util.getRandomInt(50, 100) / 100);

        canvas.add(img);
      });


      // canvas.setBackgroundImage('/images/cut1.jpg', canvas.renderAll.bind(canvas));
      // canvas.on('object:moving', (options) => {
      //   console.log(options.e.clientX, options.e.clientY);
      //   if (options.e.clientX >= 380 && options.e.clientX <= 450 && options.e.clientY >= 150 && options.e.clientY <= 250) {
      //     // var successDia = document.getElementsByClassName('successDialog');
      //     // console.log('successDia: ', successDia);
      //     // successDia.style.display = "block";

      //     fabric.Image.fromURL('/images/success.jpg', function (img) {
      //       // img.set({
      //       //   left: fabric.util.getRandomInt(0, 600),
      //       //   top: fabric.util.getRandomInt(0, 500),
      //       //   angle: fabric.util.getRandomInt(0, 90)
      //       // });
      //       img.set({
      //         left: 300,
      //         top: 300,
      //         angle: 0
      //       });
      //       img.perPixelTargetFind = true;
      //       img.hasControls = img.hasBorders = false;

      //       // img.scale(fabric.util.getRandomInt(50, 100) / 100);

      //       canvas.add(img);
      //     });
      //     options.e.preventDefault();
      //   }
      // });
    },
    [],
  )

  useEffect(() => {
    init();
  }, []);

  return (
    <div className="light-bg">
      <canvas id="canvas" width="300" height="300"></canvas>
    </div>
  );
}