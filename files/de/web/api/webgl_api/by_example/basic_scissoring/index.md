---
title: Grundlegende Scherung
slug: Web/API/WebGL_API/By_example/Basic_scissoring
l10n:
  sourceCommit: 8799df4d0dbc74bdcf0de1e7a24563a46dcb2478
---

{{DefaultAPISidebar("WebGL")}}{{PreviousNext("Learn/WebGL/By_example/Color_masking","Learn/WebGL/By_example/Canvas_size_and_WebGL")}}

In diesem Beispiel sehen wir, wie man einfache Rechtecke und Quadrate mit WebGL-Scheroperationen zeichnet. Scherung etabliert eine Clipping-Region, außerhalb derer das Zeichnen nicht erfolgt.

## Löschen des Zeichenpuffers bei angewandter Scherung

{{EmbedLiveSample("Clearing_the_drawing_buffer_when_scissoring_applies",660,425)}}

Dies ist eine einfache Demonstration eines Renderings mit [`scissor()`](/de/docs/Web/API/WebGLRenderingContext/scissor).

Obwohl der [`clear()`](/de/docs/Web/API/WebGLRenderingContext/clear)-Zeichenbefehl die Löschfarbe (eingestellt durch [`clearColor()`](/de/docs/Web/API/WebGLRenderingContext/clearColor)) an alle Pixel im Zeichenpuffer schreibt, definiert [`scissor()`](/de/docs/Web/API/WebGLRenderingContext/scissor) eine Maske, die nur erlaubt, dass Pixel innerhalb des angegebenen rechteckigen Bereichs aktualisiert werden.

Dies ist eine gute Gelegenheit, über den Unterschied zwischen Pixeln und _Fragmenten_ zu sprechen. Ein Pixel ist ein Bildelement (in der Praxis, ein Punkt) auf dem Bildschirm oder ein einzelnes Element des Zeichenpuffers, jenem Bereich im Speicher, der Ihre Pixeldaten (wie {{Glossary("RGB", "RGB")}}-Farbkomponenten) enthält. Ein _Fragment_ bezieht sich auf das Pixel, während es von der {{Glossary("WebGL", "WebGL")}}-Pipeline bearbeitet wird.

Der Grund für diese Unterscheidung liegt darin, dass die Farbe eines Fragments (und andere Fragmentwerte, wie z.B. die Tiefe) während der Grafikoperationen mehrfach verändert werden kann, bevor sie schließlich auf den Bildschirm geschrieben wird. Wir haben bereits gesehen, wie sich die Fragmentfarbe während Grafikoperationen ändert, indem {{domxref("WebGLRenderingContext.colorMask()","Farbmaskierung", "", 1)}} angewendet wird. In anderen Fällen können die Fragmente vollständig verworfen werden (sodass der Pixelwert nicht aktualisiert wird), oder sie können mit dem bereits vorhandenen Pixelwert interagieren (wie beim Farbblending für nicht-opake Elemente in der Szene).

Hier sehen wir ein weiteres Beispiel für die Unterscheidung zwischen Fragmenten und Pixeln. Scherung ist eine eigene Stufe in der {{Glossary("WebGL", "WebGL")}}/{{Glossary("OpenGL", "OpenGL")}}-Grafikpipeline (sie erfolgt nach der Farbklärung, aber vor der Farbmaskierung). Bevor die tatsächlichen Pixel aktualisiert werden, müssen Fragmente den Scherentest durchlaufen. Bestehen die Fragmente den Scherentest, gehen sie in der Grafikpipeline weiter und die entsprechenden Pixel werden auf dem Bildschirm aktualisiert. Wenn sie den Test nicht bestehen, werden sie sofort verworfen, es erfolgt keine weitere Verarbeitung und die Pixel werden nicht aktualisiert. Da nur Fragmente innerhalb des angegebenen rechteckigen Bereichs den Scherentest erfolgreich bestehen, werden nur Pixel innerhalb dieses Bereichs aktualisiert und wir erhalten ein Rechteck auf dem Bildschirm.

Die Scherungsstufe der Pipeline ist standardmäßig deaktiviert. Wir aktivieren sie hier mit der [`enable()`](/de/docs/Web/API/WebGLRenderingContext/enable)-Methode (Sie werden `enable()` auch verwenden, um viele andere Funktionen von WebGL zu aktivieren; deshalb wird in diesem Fall die Konstante `SCISSOR_TEST` als Argument verwendet). Dies zeigt erneut die typische Reihenfolge von Befehlen in {{Glossary("WebGL", "WebGL")}}. Wir ändern zuerst den WebGL-Zustand. In diesem Fall den Scherentest zu aktivieren und eine rechteckige Maske zu etablieren. Nur wenn der WebGL-Zustand zufriedenstellend angepasst wurde, führen wir den Zeichenbefehl (in diesem Fall `clear()`) aus, der die Verarbeitung der Fragmente in der Grafikpipeline startet.

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
