---
title: Canvas-Größe und WebGL
slug: Web/API/WebGL_API/By_example/Canvas_size_and_WebGL
l10n:
  sourceCommit: f71683f74da0078d9371c4d0c1ff9d3898fc7b59
---

{{DefaultAPISidebar("WebGL")}}{{PreviousNext("Web/API/WebGL_API/By_example/Basic_scissoring","Web/API/WebGL_API/By_example/Boilerplate_1")}}

Dieses WebGL-Beispiel untersucht die Auswirkungen, wenn die Canvas-Größe auf die Elementgröße in {{Glossary("CSS", "CSS")}}-Pixeln gesetzt wird bzw. nicht, so wie sie im Browser-Fenster erscheint.

## Wirkung der Canvas-Größe auf das Rendern mit WebGL

{{EmbedLiveSample("Effect_of_canvas_size_on_rendering_with_WebGL",660,180)}}

Mit [`scissor()`](/de/docs/Web/API/WebGLRenderingContext/scissor) und [`clear()`](/de/docs/Web/API/WebGLRenderingContext/clear) können wir demonstrieren, wie der WebGL-Zeichenpuffer von der Größe der Canvas beeinflusst wird.

Die Größe der ersten Canvas wird auf die gestylte [`Element`](/de/docs/Web/API/Element)-Größe gesetzt, die durch {{Glossary("CSS", "CSS")}} bestimmt wird. Dies wird erreicht, indem die Eigenschaften [`width`](/de/docs/Web/API/HTMLCanvasElement/width) und [`height`](/de/docs/Web/API/HTMLCanvasElement/height) der Canvas auf die Werte der Eigenschaften [`clientWidth`](/de/docs/Web/API/Element/clientWidth) und [`clientHeight`](/de/docs/Web/API/Element/clientHeight) gesetzt werden.

Im Gegensatz dazu wird für die zweite Canvas keine solche Zuweisung vorgenommen. Die internen Eigenschaften [`width`](/de/docs/Web/API/HTMLCanvasElement/width) und [`height`](/de/docs/Web/API/HTMLCanvasElement/height) der Canvas bleiben auf den Standardwerten, die von der tatsächlichen Größe des Canvas-`Element`](/de/docs/Web/API/Element) im Browserfenster abweichen.

Der Effekt ist deutlich sichtbar, wenn durch die Verwendung von [`scissor()`](/de/docs/Web/API/WebGLRenderingContext/scissor) und [`clear()`](/de/docs/Web/API/WebGLRenderingContext/clear) ein Quadrat in der Mitte der Canvas gezeichnet wird, indem seine Position und Größe in Pixeln angegeben wird. In der ersten Canvas erhalten wir das gewünschte Ergebnis. In der zweiten hat das Quadrat die falsche Form, Größe und Position.

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
window.addEventListener("load", () => {
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
});
```

Der Quellcode dieses Beispiels ist auch auf [GitHub](https://github.com/idofilin/webgl-by-example/tree/master/canvas-size-and-webgl) verfügbar.

{{PreviousNext("Web/API/WebGL_API/By_example/Basic_scissoring","Web/API/WebGL_API/By_example/Boilerplate_1")}}
