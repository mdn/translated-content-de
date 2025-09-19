---
title: Grundlegendes Beschneiden
slug: Web/API/WebGL_API/By_example/Basic_scissoring
l10n:
  sourceCommit: f71683f74da0078d9371c4d0c1ff9d3898fc7b59
---

{{DefaultAPISidebar("WebGL")}}{{PreviousNext("Web/API/WebGL_API/By_example/Color_masking","Web/API/WebGL_API/By_example/Canvas_size_and_WebGL")}}

In diesem Beispiel sehen wir, wie man Rechtecke und Quadrate mittels WebGL-Beschneidungsoperationen zeichnet. Das Beschneiden legt einen Clipping-Bereich fest, außerhalb dessen keine Zeichnung erfolgt.

## Löschen des Zeichenpuffers beim Anwenden des Beschneidens

{{EmbedLiveSample("Clearing_the_drawing_buffer_when_scissoring_applies",660,425)}}

Dies ist eine Demonstration einer Darstellung mit [`scissor()`](/de/docs/Web/API/WebGLRenderingContext/scissor).

Obwohl der Zeichenbefehl [`clear()`](/de/docs/Web/API/WebGLRenderingContext/clear) die Löschfarbe (festgelegt durch [`clearColor()`](/de/docs/Web/API/WebGLRenderingContext/clearColor)) auf alle Pixel im Zeichenpuffer schreibt, definiert [`scissor()`](/de/docs/Web/API/WebGLRenderingContext/scissor) eine Maske, die nur erlaubt, dass Pixel innerhalb des angegebenen rechteckigen Bereichs aktualisiert werden.

Dies ist eine gute Gelegenheit, um über den Unterschied zwischen Pixeln und _Fragmenten_ zu sprechen. Ein Pixel ist ein Bildpunkt (in der Praxis ein Punkt) auf dem Bildschirm oder ein einzelnes Element des Zeichenpuffers, dem Bereich im Speicher, der Ihre Pixeldaten hält (wie {{Glossary("RGB", "RGB")}}-Farbkomponenten). Ein _Fragment_ bezieht sich auf das Pixel, während es von der {{Glossary("WebGL", "WebGL")}}-Pipeline verarbeitet wird.

Der Grund für diese Unterscheidung ist, dass die Fragmentfarbe (und andere Fragmentwerte wie Tiefe) während Grafikoperationen mehrfach bearbeitet und geändert werden kann, bevor sie letztendlich auf dem Bildschirm geschrieben wird. Wir haben bereits gesehen, wie sich die Fragmentfarbe während Grafikoperationen ändert, indem [Farbmaskierung](/de/docs/Web/API/WebGLRenderingContext/colorMask) angewendet wurde. In anderen Fällen können die Fragmente komplett verworfen werden (sodass der Pixelwert nicht aktualisiert wird), oder sie können mit dem bereits bestehenden Pixelwert interagieren (zum Beispiel beim Farbblending für nicht-opaque Elemente in der Szene).

Hier sehen wir ein weiteres Beispiel für die Unterscheidung zwischen Fragmenten und Pixeln. Das Beschneiden ist eine eigenständige Phase in der {{Glossary("WebGL", "WebGL")}}/{{Glossary("OpenGL", "OpenGL")}}-Grafikpipeline (es erfolgt nach dem Farblöschen, aber vor der Farbmaskierung). Bevor die tatsächlichen Pixel aktualisiert werden, müssen Fragmente den Scherentest durchlaufen. Bestehen die Fragmente den Scherentest, durchlaufen sie weiterhin die Grafikpipeline, und die entsprechenden Pixel werden auf dem Bildschirm aktualisiert. Fallen sie durch den Test, werden sie sofort verworfen, es erfolgt keine weitere Verarbeitung, und die Pixel werden nicht aktualisiert. Da nur Fragmente innerhalb des angegebenen rechteckigen Bereichs erfolgreich den Scherentest bestehen, werden nur Pixel in diesem Bereich aktualisiert, und wir erhalten ein Rechteck auf dem Bildschirm.

Die Beschneiden-Phase der Pipeline ist standardmäßig deaktiviert. Wir aktivieren sie hier mit der Methode [`enable()`](/de/docs/Web/API/WebGLRenderingContext/enable) (Sie werden auch `enable()` verwenden, um viele andere Funktionen von WebGL zu aktivieren; daher die Verwendung der Konstante `SCISSOR_TEST` als Argument in diesem Fall). Dies demonstriert erneut die typische Reihenfolge von Befehlen in {{Glossary("WebGL", "WebGL")}}. Wir justieren zuerst den WebGL-Zustand. In diesem Fall aktivieren wir den Scherentest und legen eine rechteckige Maske fest. Erst wenn der WebGL-Zustand zufriedenstellend angepasst ist, führen wir den Zeichenbefehl (in diesem Fall `clear()`) aus, der die Verarbeitung der Fragmente in der Grafikpipeline startet.

```html
<p>Result of scissoring.</p>
<canvas>Your browser does not seem to support HTML canvas.</canvas>
```

```css
body {
  text-align: center;
}
canvas {
  display: block;
  width: 280px;
  height: 210px;
  margin: auto;
  padding: 0;
  border: none;
  background-color: black;
}
```

```js
window.addEventListener("load", function setupWebGL(evt) {
  "use strict";
  window.removeEventListener(evt.type, setupWebGL);
  const paragraph = document.querySelector("p");
  const canvas = document.querySelector("canvas");

  // The following two lines set the size (in CSS pixels) of
  // the drawing buffer to be identical to the size of the
  // canvas HTML element, as determined by CSS.
  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;

  const gl =
    canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
  if (!gl) {
    paragraph.textContent =
      "Failed to get WebGL context. Your browser or device may not support WebGL.";
    return;
  }
  gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);

  // Enable scissoring operation and define the position and
  // size of the scissoring area.
  gl.enable(gl.SCISSOR_TEST);
  gl.scissor(40, 20, 60, 130);

  // Clear the drawing buffer solid yellow.
  gl.clearColor(1.0, 1.0, 0.0, 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT);
});
```

Der Quellcode dieses Beispiels ist auch auf [GitHub](https://github.com/idofilin/webgl-by-example/tree/master/basic-scissoring) verfügbar.

{{PreviousNext("Web/API/WebGL_API/By_example/Color_masking","Web/API/WebGL_API/By_example/Canvas_size_and_WebGL")}}
