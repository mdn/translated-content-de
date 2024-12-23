---
title: Grundlegendes zur Beschneidung
slug: Web/API/WebGL_API/By_example/Basic_scissoring
l10n:
  sourceCommit: 1eae3d383ad47b5e21bf25764d1d35487ea52bb8
---

{{DefaultAPISidebar("WebGL")}}{{PreviousNext("Web/API/WebGL_API/By_example/Color_masking","Web/API/WebGL_API/By_example/Canvas_size_and_WebGL")}}

In diesem Beispiel sehen wir, wie man mit WebGL-Beschneidungsoperationen Rechtecke und Quadrate zeichnet. Beschneidung legt eine Zuschnittsregion fest, außerhalb derer keine Zeichnung stattfindet.

## Löschen des Zeichenpuffers bei aktiver Beschneidung

{{EmbedLiveSample("Clearing_the_drawing_buffer_when_scissoring_applies",660,425)}}

Dies ist eine Demonstration einer Darstellung mit [`scissor()`](/de/docs/Web/API/WebGLRenderingContext/scissor).

Obwohl der Zeichnungsbefehl [`clear()`](/de/docs/Web/API/WebGLRenderingContext/clear) die Löschfarbe (festgelegt durch [`clearColor()`](/de/docs/Web/API/WebGLRenderingContext/clearColor)) auf alle Pixel im Zeichenpuffer schreibt, definiert [`scissor()`](/de/docs/Web/API/WebGLRenderingContext/scissor) eine Maske, die nur das Aktualisieren von Pixeln im angegebenen rechteckigen Bereich erlaubt.

Dies ist eine gute Gelegenheit, über den Unterschied zwischen Pixeln und _Fragmenten_ zu sprechen. Ein Pixel ist ein Bildelement (in der Praxis ein Punkt) auf dem Bildschirm oder ein einzelnes Element des Zeichenpuffers, dem Bereich im Speicher, der Ihre Pixeldaten (wie {{Glossary("RGB", "RGB")}}-Farbkomponenten) enthält. Ein _Fragment_ bezieht sich auf das Pixel, während es von der {{Glossary("WebGL", "WebGL")}}-Pipeline verarbeitet wird.

Der Grund für diese Unterscheidung ist, dass die Fragmentfarbe (und andere Fragmentwerte wie die Tiefe) während der Grafikoperationen mehrmals manipuliert und verändert werden können, bevor sie schließlich auf dem Bildschirm ausgegeben wird. Wir haben bereits gesehen, wie sich die Fragmentfarbe während der Grafikoperationen ändert, indem wir [Farbmaskierung](/de/docs/Web/API/WebGLRenderingContext/colorMask) anwenden. In anderen Fällen können die Fragmente vollständig verworfen werden (so dass der Pixelwert nicht aktualisiert wird), oder sie können mit dem bereits existierenden Pixelwert interagieren (wie bei der Farbvermischung bei nicht-opaken Elementen in der Szene).

Hier sehen wir ein weiteres Beispiel für die Unterscheidung zwischen Fragmenten und Pixeln. Beschneidung ist ein eigenständiger Schritt in der {{Glossary("WebGL", "WebGL")}}/{{Glossary("OpenGL", "OpenGL")}}-Grafikpipeline (sie erfolgt nach dem Löschen der Farben, aber vor der Farbmaskierung). Bevor die tatsächlichen Pixel aktualisiert werden, müssen Fragmente den Scherstest durchlaufen. Wenn die Fragmente den Scherstest bestehen, durchlaufen sie die Grafikpipeline weiter und die entsprechenden Pixel werden auf dem Bildschirm aktualisiert. Wenn sie den Test nicht bestehen, werden sie sofort verworfen, keine weitere Verarbeitung erfolgt und die Pixel werden nicht aktualisiert. Da nur Fragmente innerhalb des angegebenen rechteckigen Bereichs den Scherstest erfolgreich bestehen, werden nur Pixel innerhalb dieses Bereichs aktualisiert und wir erhalten ein Rechteck auf dem Bildschirm.

Die Beschneidungsstufe der Pipeline ist standardmäßig deaktiviert. Wir aktivieren sie hier mithilfe der [`enable()`](/de/docs/Web/API/WebGLRenderingContext/enable)-Methode (Sie werden `enable()` auch verwenden, um viele andere Funktionen von WebGL zu aktivieren; daher die Verwendung der Konstante `SCISSOR_TEST` als Argument in diesem Fall). Dies demonstriert erneut die typische Reihenfolge der Befehle in {{Glossary("WebGL", "WebGL")}}. Zuerst passen wir den WebGL-Zustand an. In diesem Fall wird der Scherstest aktiviert und eine rechteckige Maske festgelegt. Erst wenn der WebGL-Zustand zufriedenstellend angepasst wurde, führen wir den Zeichenbefehl aus (in diesem Fall `clear()`), der die Verarbeitung der Fragmente durch die Grafikpipeline startet.

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

{{PreviousNext("Web/API/WebGL_API/By_example/Color_masking","Web/API/WebGL_API/By_example/Canvas_size_and_WebGL")}}
