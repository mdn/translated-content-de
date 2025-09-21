---
title: Canvas-Größe und WebGL
slug: Web/API/WebGL_API/By_example/Canvas_size_and_WebGL
l10n:
  sourceCommit: 0ea88f719ad95045993f8a54d5bbaee857617380
---

{{DefaultAPISidebar("WebGL")}}{{PreviousNext("Web/API/WebGL_API/By_example/Basic_scissoring","Web/API/WebGL_API/By_example/Boilerplate_1")}}

Dieses WebGL-Beispiel untersucht die Auswirkungen der Einstellung (oder Nicht-Einstellung) der Leinwandgröße auf ihre Elementgröße in {{Glossary("CSS", "CSS")}}-Pixeln, wie sie im Browserfenster erscheint.

## Auswirkungen der Leinwandgröße auf das Rendering mit WebGL

{{EmbedLiveSample("Effect_of_canvas_size_on_rendering_with_WebGL",660,180)}}

Mit [`scissor()`](/de/docs/Web/API/WebGLRenderingContext/scissor) und [`clear()`](/de/docs/Web/API/WebGLRenderingContext/clear) können wir demonstrieren, wie der WebGL-Zeichnungspuffer durch die Größe der Leinwand beeinflusst wird.

Die Größe der ersten Leinwand wird auf die gestaltete [`Element`](/de/docs/Web/API/Element)-Größe, bestimmt durch {{Glossary("CSS", "CSS")}}, gesetzt. Dies geschieht, indem die [`width`](/de/docs/Web/API/HTMLCanvasElement/width)- und [`height`](/de/docs/Web/API/HTMLCanvasElement/height)-Eigenschaften der Leinwand auf die Werte der [`clientWidth`](/de/docs/Web/API/Element/clientWidth)- und [`clientHeight`](/de/docs/Web/API/Element/clientHeight)-Eigenschaften gesetzt werden.

Im Gegensatz dazu erfolgt für die zweite Leinwand keine solche Zuweisung. Die internen [`width`](/de/docs/Web/API/HTMLCanvasElement/width)- und [`height`](/de/docs/Web/API/HTMLCanvasElement/height)-Eigenschaften der Leinwand bleiben auf Standardwerten, die sich von der tatsächlichen Größe des Leinwand-[`Element`](/de/docs/Web/API/Element) im Browserfenster unterscheiden.

Der Effekt ist deutlich sichtbar, wenn man [`scissor()`](/de/docs/Web/API/WebGLRenderingContext/scissor) und [`clear()`](/de/docs/Web/API/WebGLRenderingContext/clear) verwendet, um ein Quadrat in der Mitte der Leinwand zu zeichnen, indem man seine Position und Größe in Pixeln angibt. Bei der ersten Leinwand erhalten wir das gewünschte Ergebnis. Bei der zweiten hat das Quadrat die falsche Form, Größe und Position.

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
const [firstCanvas, secondCanvas] = document.getElementsByTagName("canvas");
firstCanvas.width = firstCanvas.clientWidth;
firstCanvas.height = firstCanvas.clientHeight;
[firstCanvas, secondCanvas].forEach((canvas) => {
  const gl = canvas.getContext("webgl");
  gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
  gl.enable(gl.SCISSOR_TEST);
  gl.scissor(30, 10, 60, 60);
  gl.clearColor(1.0, 1.0, 0.0, 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT);
});
```

Der Quellcode dieses Beispiels ist auch auf [GitHub](https://github.com/idofilin/webgl-by-example/tree/master/canvas-size-and-webgl) verfügbar.

{{PreviousNext("Web/API/WebGL_API/By_example/Basic_scissoring","Web/API/WebGL_API/By_example/Boilerplate_1")}}
