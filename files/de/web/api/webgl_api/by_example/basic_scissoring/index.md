---
title: Grundlegendes Ausschneiden
slug: Web/API/WebGL_API/By_example/Basic_scissoring
l10n:
  sourceCommit: 8799df4d0dbc74bdcf0de1e7a24563a46dcb2478
---

{{DefaultAPISidebar("WebGL")}}{{PreviousNext("Learn/WebGL/By_example/Color_masking","Learn/WebGL/By_example/Canvas_size_and_WebGL")}}

In diesem Beispiel sehen wir, wie einfache Rechtecke und Quadrate mit WebGL-Ausschneideoperationen gezeichnet werden. Ausschneiden legt einen Bereich fest, außerhalb dessen keine Zeichnungen erfolgen.

## Löschen des Zeichenpuffers bei aktiviertem Ausschneiden

{{EmbedLiveSample("Clearing_the_drawing_buffer_when_scissoring_applies",660,425)}}

Dies ist eine einfache Demonstration einer Darstellung mit [`scissor()`](/de/docs/Web/API/WebGLRenderingContext/scissor).

Obwohl der Zeichenbefehl [`clear()`](/de/docs/Web/API/WebGLRenderingContext/clear) die Löschfarbe (festgelegt durch [`clearColor()`](/de/docs/Web/API/WebGLRenderingContext/clearColor)) auf alle Pixel im Zeichenpuffer schreibt, definiert [`scissor()`](/de/docs/Web/API/WebGLRenderingContext/scissor) eine Maske, die nur Pixel innerhalb des angegebenen rechteckigen Bereichs erlaubt, aktualisiert zu werden.

Dies ist eine gute Gelegenheit, um über den Unterschied zwischen Pixeln und _Fragmenten_ zu sprechen. Ein Pixel ist ein Bildelement (in der Praxis ein Punkt) auf dem Bildschirm oder ein einzelnes Element des Zeichenpuffers, jenes Bereichs im Speicher, der Ihre Pixeldaten (wie [RGB](/de/docs/Glossary/RGB)-Farbkomponenten) enthält. Ein _Fragment_ bezieht sich auf das Pixel, während es von der [WebGL](/de/docs/Glossary/WebGL)-Pipeline verarbeitet wird.

Der Grund für diese Unterscheidung ist, dass die Fragmentfarbe (und andere Fragmentwerte, wie Tiefe) während der Grafikoperationen mehrfach manipuliert und geändert werden kann, bevor sie schließlich auf dem Bildschirm geschrieben wird. Wir haben bereits gesehen, wie sich die Fragmentfarbe während Grafikoperationen ändert, indem wir {{domxref("WebGLRenderingContext.colorMask()","Farbmaskierung", "", 1)}} anwenden. In anderen Fällen können die Fragmente vollständig verworfen werden (sodass der Pixelwert nicht aktualisiert wird), oder es kann mit dem bereits existierenden Pixelwert interagieren (wie beim Farbüberblenden für nicht-opaake Elemente in der Szene).

Hier sehen wir ein weiteres Beispiel für die Unterscheidung zwischen Fragmenten und Pixeln. Ausschneiden ist eine getrennte Phase in der [WebGL](/de/docs/Glossary/WebGL)/[OpenGL](/de/docs/Glossary/OpenGL)-Grafikpipeline (es erfolgt nach dem Löschen der Farben, aber vor der Farbmaskierung). Bevor die eigentlichen Pixel aktualisiert werden, müssen die Fragmente den Ausschneidetest bestehen. Wenn die Fragmente den Ausschneidetest bestehen, werden sie in der Grafikpipeline weiterverarbeitet und die entsprechenden Pixel auf dem Bildschirm aktualisiert. Wenn sie den Test nicht bestehen, werden sie sofort verworfen, es erfolgt keine weitere Verarbeitung und die Pixel werden nicht aktualisiert. Da nur Fragmente innerhalb des festgelegten rechteckigen Bereichs den Ausschneidetest erfolgreich bestehen, werden nur Pixel innerhalb dieses Bereichs aktualisiert, und wir erhalten ein Rechteck auf dem Bildschirm.

Die Ausschneidephase der Pipeline ist standardmäßig deaktiviert. Wir aktivieren sie hier mit der Methode [`enable()`](/de/docs/Web/API/WebGLRenderingContext/enable) (Sie werden `enable()` auch verwenden, um viele andere Funktionen von WebGL zu aktivieren; daher die Nutzung der Konstante `SCISSOR_TEST` als Argument in diesem Fall). Dies zeigt erneut die typische Reihenfolge von Befehlen in [WebGL](/de/docs/Glossary/WebGL). Zuerst passen wir den WebGL-Status an. In diesem Fall wird der Ausschneidetest aktiviert und eine rechteckige Maske festgelegt. Erst wenn der WebGL-Status zufriedenstellend angepasst wurde, führen wir den Zeichenbefehl aus (in diesem Fall `clear()`), der die Verarbeitung der Fragmente durch die Grafikpipeline startet.

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
