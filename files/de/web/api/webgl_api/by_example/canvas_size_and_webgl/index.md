---
title: Canvas-Größe und WebGL
slug: Web/API/WebGL_API/By_example/Canvas_size_and_WebGL
l10n:
  sourceCommit: 8d5440dbd259fd6eea32b4f4a200f25257d1bf41
---

{{DefaultAPISidebar("WebGL")}}{{PreviousNext("Learn/WebGL/By_example/Basic_scissoring","Learn/WebGL/By_example/Boilerplate_1")}}

Dieses WebGL-Beispiel untersucht die Auswirkungen der Anpassung (oder Nichtanpassung) der Canvas-Größe an die Elementgröße in {{Glossary("CSS")}}-Pixeln, wie sie im Browserfenster erscheint.

## Auswirkung der Canvas-Größe auf das Rendern mit WebGL

{{EmbedLiveSample("Effect_of_canvas_size_on_rendering_with_WebGL",660,180)}}

Mit {{domxref("WebGLRenderingContext.scissor()","scissor()")}} und {{domxref("WebGLRenderingContext.clear()","clear()")}} können wir demonstrieren, wie der WebGL-Zeichenpuffer von der Größe der Canvas beeinflusst wird.

Die Größe der ersten Canvas wird auf die gestylte {{domxref("Element")}}-Größe festgelegt, die durch {{Glossary("CSS")}} bestimmt wird. Dies erfolgt, indem die Eigenschaften {{domxref("HTMLCanvasElement.width","width")}} und {{domxref("HTMLCanvasElement.height","height")}} der Canvas auf die Werte der Eigenschaften {{domxref("Element.clientWidth","clientWidth")}} und {{domxref("Element.clientHeight","clientHeight")}} gesetzt werden.

Im Gegensatz dazu erfolgt keine solche Zuordnung für die zweite Canvas. Die internen Eigenschaften {{domxref("HTMLCanvasElement.width","width")}} und {{domxref("HTMLCanvasElement.height","height")}} der Canvas bleiben auf den Standardwerten, die unterschiedlich zur tatsächlichen Größe des {{domxref("Element")}} der Canvas im Browserfenster sind.

Der Effekt ist deutlich sichtbar, wenn {{domxref("WebGLRenderingContext.scissor()","scissor()")}} und {{domxref("WebGLRenderingContext.clear()","clear()")}} verwendet werden, um ein Quadrat in der Mitte der Canvas zu zeichnen, indem seine Position und Größe in Pixeln angegeben wird. In der ersten Canvas erhalten wir das gewünschte Resultat. In der zweiten hat das Quadrat die falsche Form, Größe und Position.

```html
<p>Vergleichen Sie die beiden Canvas-Elemente.</p>
<canvas>Ihr Browser scheint HTML-Canvas nicht zu unterstützen.</canvas>
<canvas>Ihr Browser scheint HTML-Canvas nicht zu unterstützen.</canvas>
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
