---
title: Grundlegendes Ausschneiden
slug: Web/API/WebGL_API/By_example/Basic_scissoring
l10n:
  sourceCommit: 93b34fcdb9cf91ff44f5dfe7f4dcd13e961962da
---

{{DefaultAPISidebar("WebGL")}}{{PreviousNext("Learn/WebGL/By_example/Color_masking","Learn/WebGL/By_example/Canvas_size_and_WebGL")}}

In diesem Beispiel sehen wir, wie Rechtecke und Quadrate mit WebGL-Ausschneideoperationen gezeichnet werden. Das Ausschneiden legt eine Clipregion fest, außerhalb der nicht gezeichnet wird.

## Das Zeichenpuffer reinigen, wenn Ausschneiden angewendet wird

{{EmbedLiveSample("Clearing_the_drawing_buffer_when_scissoring_applies",660,425)}}

Dies ist eine Demonstration eines Renderings mit [`scissor()`](/de/docs/Web/API/WebGLRenderingContext/scissor).

Obwohl der Zeichenbefehl [`clear()`](/de/docs/Web/API/WebGLRenderingContext/clear) die Lösungsfarbe (festgelegt durch [`clearColor()`](/de/docs/Web/API/WebGLRenderingContext/clearColor)) auf alle Pixel im Zeichenpuffer schreibt, definiert [`scissor()`](/de/docs/Web/API/WebGLRenderingContext/scissor) eine Maske, die nur ermöglicht, dass Pixel innerhalb des angegebenen rechteckigen Bereichs aktualisiert werden.

Dies ist eine gute Gelegenheit, über den Unterschied zwischen Pixels und _Fragmenten_ zu sprechen. Ein Pixel ist ein Bildelement (in der Praxis ein Punkt) auf dem Bildschirm oder ein einzelnes Element des Zeichenpuffers, der Speicherbereich, der Ihre Pixeldaten (wie {{Glossary("RGB", "RGB")}}-Farbkomponenten) enthält. Ein _Fragment_ bezieht sich auf das Pixel, während es von der {{Glossary("WebGL", "WebGL")}}-Pipeline bearbeitet wird.

Der Grund für diese Unterscheidung ist, dass die Fragmentfarbe (und andere Fragmentwerte, wie die Tiefe) während Grafikoperationen mehrmals manipuliert und geändert werden können, bevor sie schließlich auf dem Bildschirm geschrieben werden. Wir haben bereits gesehen, wie sich die Fragmentfarbe während Grafikoperationen ändert, indem {{domxref("WebGLRenderingContext.colorMask()","Farbmaskierung", "", 1)}} angewendet wird. In anderen Fällen können die Fragmente vollständig verworfen werden (sodass der Pixelwert nicht aktualisiert wird) oder sie können mit dem bereits vorhandenen Pixelwert interagieren (wie bei der Farbmischung für nicht-opake Elemente in der Szene).

Hier sehen wir ein weiteres Beispiel für die Unterscheidung zwischen Fragmenten und Pixeln. Das Ausschneiden ist eine eigenständige Phase in der {{Glossary("WebGL", "WebGL")}}/{{Glossary("OpenGL", "OpenGL")}}-Grafikpipeline (es erfolgt nach dem Farblöschen, aber vor der Farbmaskierung). Bevor die tatsächlichen Pixel aktualisiert werden, müssen Fragmente den Scherentest durchlaufen. Wenn die Fragmente den Scherentest bestehen, durchlaufen sie weiterhin die Grafikpipeline und die entsprechenden Pixel werden auf dem Bildschirm aktualisiert. Wenn sie den Test nicht bestehen, werden sie sofort verworfen, es findet keine weitere Verarbeitung statt, und die Pixel werden nicht aktualisiert. Da nur Fragmente innerhalb des angegebenen rechteckigen Bereichs den Scherentest erfolgreich bestehen, werden nur Pixel innerhalb dieses Bereichs aktualisiert, und wir erhalten ein Rechteck auf dem Bildschirm.

Die Ausschneidephase der Pipeline ist standardmäßig deaktiviert. Wir aktivieren sie hier mit der Methode [`enable()`](/de/docs/Web/API/WebGLRenderingContext/enable) (Sie werden `enable()` auch verwenden, um viele andere Funktionen von WebGL zu aktivieren; daher die Verwendung der `SCISSOR_TEST`-Konstanten als Argument in diesem Fall). Dies zeigt erneut die typische Reihenfolge von Befehlen in {{Glossary("WebGL", "WebGL")}}. Wir passen zuerst den WebGL-Zustand an. In diesem Fall aktivieren wir den Scherentest und stellen eine rechteckige Maske ein. Erst wenn der WebGL-Zustand zufriedenstellend angepasst ist, führen wir den Zeichenbefehl aus (in diesem Fall `clear()`), der die Verarbeitung von Fragmenten in der Grafikpipeline startet.

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
window.addEventListener(
  "load",
  function setupWebGL(evt) {
    "use strict";
    window.removeEventListener(evt.type, setupWebGL, false);
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
  },
  false,
);
```

Der Quellcode dieses Beispiels ist auch auf [GitHub](https://github.com/idofilin/webgl-by-example/tree/master/basic-scissoring) verfügbar.

{{PreviousNext("Learn/WebGL/By_example/Color_masking","Learn/WebGL/By_example/Canvas_size_and_WebGL")}}
