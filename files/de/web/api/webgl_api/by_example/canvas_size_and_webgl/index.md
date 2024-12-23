---
title: Canvas-Größe und WebGL
slug: Web/API/WebGL_API/By_example/Canvas_size_and_WebGL
l10n:
  sourceCommit: 1eae3d383ad47b5e21bf25764d1d35487ea52bb8
---

{{DefaultAPISidebar("WebGL")}}{{PreviousNext("Web/API/WebGL_API/By_example/Basic_scissoring","Web/API/WebGL_API/By_example/Boilerplate_1")}}

Dieses WebGL-Beispiel untersucht die Auswirkungen darauf, ob die Canvas-Größe auf ihre Elementgröße in {{Glossary("CSS", "CSS")}}-Pixeln eingestellt ist oder nicht, so wie sie im Browserfenster erscheint.

## Auswirkung der Canvas-Größe auf das Rendering mit WebGL

{{EmbedLiveSample("Effect_of_canvas_size_on_rendering_with_WebGL",660,180)}}

Mit [`scissor()`](/de/docs/Web/API/WebGLRenderingContext/scissor) und [`clear()`](/de/docs/Web/API/WebGLRenderingContext/clear) können wir demonstrieren, wie der WebGL-Zeichnungsbuffer von der Größe der Canvas beeinflusst wird.

Die Größe der ersten Canvas wird auf die gestylte Größe des [`Element`](/de/docs/Web/API/Element)s festgelegt, die durch {{Glossary("CSS", "CSS")}} bestimmt wird. Dies erfolgt, indem die [`width`](/de/docs/Web/API/HTMLCanvasElement/width)- und [`height`](/de/docs/Web/API/HTMLCanvasElement/height)-Eigenschaften der Canvas auf die Werte der [`clientWidth`](/de/docs/Web/API/Element/clientWidth)- und [`clientHeight`](/de/docs/Web/API/Element/clientHeight)-Eigenschaften gesetzt werden.

Im Gegensatz dazu wird für die zweite Canvas keine solche Zuweisung vorgenommen. Die internen [`width`](/de/docs/Web/API/HTMLCanvasElement/width)- und [`height`](/de/docs/Web/API/HTMLCanvasElement/height)-Eigenschaften der Canvas bleiben auf den Standardwerten, die sich von der tatsächlichen Größe des Canvas-[`Element`](/de/docs/Web/API/Element)s im Browserfenster unterscheiden.

Der Effekt ist deutlich sichtbar, wenn man [`scissor()`](/de/docs/Web/API/WebGLRenderingContext/scissor) und [`clear()`](/de/docs/Web/API/WebGLRenderingContext/clear) verwendet, um ein Quadrat in der Mitte der Canvas zu zeichnen, indem man seine Position und Größe in Pixeln angibt. In der ersten Canvas erhalten wir das gewünschte Ergebnis. In der zweiten hat das Quadrat die falsche Form, Größe und Position.

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

{{PreviousNext("Web/API/WebGL_API/By_example/Basic_scissoring","Web/API/WebGL_API/By_example/Boilerplate_1")}}
