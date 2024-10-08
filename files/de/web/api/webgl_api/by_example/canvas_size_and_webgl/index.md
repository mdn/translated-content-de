---
title: Canvas-Größe und WebGL
slug: Web/API/WebGL_API/By_example/Canvas_size_and_WebGL
l10n:
  sourceCommit: 8d5440dbd259fd6eea32b4f4a200f25257d1bf41
---

{{DefaultAPISidebar("WebGL")}}{{PreviousNext("Learn/WebGL/By_example/Basic_scissoring","Learn/WebGL/By_example/Boilerplate_1")}}

Dieses WebGL-Beispiel untersucht die Auswirkungen der Einstellung (oder Nicht-Einstellung) der Canvas-Größe auf die Elementgröße in {{Glossary("CSS", "CSS")}}-Pixeln, wie sie im Browserfenster erscheint.

## Auswirkung der Canvas-Größe auf das Rendering mit WebGL

{{EmbedLiveSample("Effect_of_canvas_size_on_rendering_with_WebGL",660,180)}}

Mit [`scissor()`](/de/docs/Web/API/WebGLRenderingContext/scissor) und [`clear()`](/de/docs/Web/API/WebGLRenderingContext/clear) können wir demonstrieren, wie der WebGL-Zeichenpuffer durch die Größe des Canvas beeinflusst wird.

Die Größe des ersten Canvas wird auf die gestylte [`Element`](/de/docs/Web/API/Element)-Größe gesetzt, die durch {{Glossary("CSS", "CSS")}} bestimmt wird. Dies geschieht durch Zuweisung der [`width`](/de/docs/Web/API/HTMLCanvasElement/width) und [`height`](/de/docs/Web/API/HTMLCanvasElement/height) Eigenschaften des Canvas zu den Werten der [`clientWidth`](/de/docs/Web/API/Element/clientWidth) und [`clientHeight`](/de/docs/Web/API/Element/clientHeight) Eigenschaften, jeweils.

Im Gegensatz dazu erfolgt keine solche Zuweisung für das zweite Canvas. Die internen [`width`](/de/docs/Web/API/HTMLCanvasElement/width) und [`height`](/de/docs/Web/API/HTMLCanvasElement/height) Eigenschaften des Canvas bleiben bei den Standardwerten, die anders sind als die tatsächliche Größe des Canvas-[`Element`](/de/docs/Web/API/Element) im Browserfenster.

Der Effekt ist klar sichtbar, wenn [`scissor()`](/de/docs/Web/API/WebGLRenderingContext/scissor) und [`clear()`](/de/docs/Web/API/WebGLRenderingContext/clear) verwendet werden, um ein Quadrat in der Mitte des Canvas zu zeichnen, indem seine Position und Größe in Pixeln angegeben werden. In der ersten Canvas erhalten wir das gewünschte Ergebnis. In der zweiten hat das Quadrat die falsche Form, Größe und Position.

```html
<p>Compare the two canvases.</p>
<canvas>Your browser does not seem to support HTML canvas.</canvas>
<canvas>Your browser does not seem to support HTML canvas.</canvas>
```

```css
body {
  text-align: center;
}
canvas {
  display: inline-block;
  width: 120px;
  height: 80px;
  margin: auto;
  padding: 0;
  border: none;
  background-color: black;
}
```

```js
window.addEventListener(
  "load",
  () => {
    const [firstCanvas, secondCanvas] = document.getElementsByTagName("canvas");
    firstCanvas.width = firstCanvas.clientWidth;
    firstCanvas.height = firstCanvas.clientHeight;
    [firstCanvas, secondCanvas].forEach((canvas) => {
      const gl =
        canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (!gl) {
        document.querySelector("p").textContent =
          "Failed. Your browser or device may not support WebGL.";
        return;
      }
      gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
      gl.enable(gl.SCISSOR_TEST);
      gl.scissor(30, 10, 60, 60);
      gl.clearColor(1.0, 1.0, 0.0, 1.0);
      gl.clear(gl.COLOR_BUFFER_BIT);
    });
  },
  false,
);
```

Der Quellcode dieses Beispiels ist auch auf [GitHub](https://github.com/idofilin/webgl-by-example/tree/master/canvas-size-and-webgl) verfügbar.

{{PreviousNext("Learn/WebGL/By_example/Basic_scissoring","Learn/WebGL/By_example/Boilerplate_1")}}
