---
title: Grundlegendes Ausschneiden
slug: Web/API/WebGL_API/By_example/Basic_scissoring
l10n:
  sourceCommit: 8799df4d0dbc74bdcf0de1e7a24563a46dcb2478
---

{{DefaultAPISidebar("WebGL")}}{{PreviousNext("Learn/WebGL/By_example/Color_masking","Learn/WebGL/By_example/Canvas_size_and_WebGL")}}

In diesem Beispiel sehen wir, wie man einfache Rechtecke und Quadrate mit WebGL-Ausschneideoperationen zeichnet. Ausschneiden definiert einen Bereich, außerhalb dessen nicht gezeichnet wird.

## Löschen des Zeichenpuffers, wenn Ausschneiden angewendet wird

{{EmbedLiveSample("Clearing_the_drawing_buffer_when_scissoring_applies",660,425)}}

Dies ist eine einfache Demonstration des Renderns mit {{domxref("WebGLRenderingContext.scissor","scissor()")}}.

Obwohl der {{domxref("WebGLRenderingContext.clear","clear()")}}-Zeichenbefehl die Löschfarbe (festgelegt durch {{domxref("WebGLRenderingContext.clearColor","clearColor()")}}) auf alle Pixel im Zeichenpuffer schreibt, definiert {{domxref("WebGLRenderingContext.scissor","scissor()")}} eine Maske, die nur erlaubt, dass Pixel innerhalb des angegebenen rechteckigen Bereichs aktualisiert werden.

Dies ist eine gute Gelegenheit, um über den Unterschied zwischen Pixeln und _Fragmenten_ zu sprechen. Ein Pixel ist ein Bildelement (in der Praxis ein Punkt) auf dem Bildschirm oder ein Einzelelement des Zeichenpuffers, jenes Bereichs im Speicher, der Ihre Pixeldaten (wie {{Glossary("RGB")}}-Farbkomponenten) enthält. Ein _Fragment_ bezieht sich auf das Pixel, während es von der {{Glossary("WebGL")}}-Pipeline verarbeitet wird.

Der Grund für diese Unterscheidung ist, dass die Fragmentfarbe (und andere Fragmentwerte, wie Tiefe) während Grafikoperationen mehrmals manipuliert und geändert werden kann, bevor sie schließlich auf den Bildschirm geschrieben wird. Wir haben bereits gesehen, wie sich die Fragmentfarbe während Grafikoperationen durch das Anwenden von {{domxref("WebGLRenderingContext.colorMask()","color masking", "", 1)}} ändert. In anderen Fällen können die Fragmente vollständig verworfen werden (sodass der Pixelwert nicht aktualisiert wird), oder sie können mit dem bereits vorhandenen Pixelwert interagieren (wie beim Farb-Mischen für nicht-opake Elemente in der Szene).

Hier sehen wir ein weiteres Beispiel für die Unterscheidung zwischen Fragmenten und Pixeln. Ausschneiden ist eine eigenständige Phase in der {{Glossary("WebGL")}}/{{Glossary("OpenGL")}}-Grafikpipeline (es tritt nach dem Farblöschen, aber vor dem Farbmaskieren auf). Bevor die tatsächlichen Pixel aktualisiert werden, müssen Fragmente den Ausschneidetest durchlaufen. Bestehen die Fragmente den Ausschneidetest, setzen sie den Weg durch die Grafikpipeline fort, und die entsprechenden Pixel werden auf dem Bildschirm aktualisiert. Scheitern sie am Test, werden sie sofort verworfen, es erfolgt keine weitere Verarbeitung, und Pixel werden nicht aktualisiert. Da nur Fragmente innerhalb des angegebenen rechteckigen Bereichs den Ausschneidetest erfolgreich bestehen, werden nur Pixel innerhalb dieses Bereichs aktualisiert, und wir erhalten ein Rechteck auf dem Bildschirm.

Die Ausschneidephase der Pipeline ist standardmäßig deaktiviert. Wir aktivieren sie hier mit der {{domxref("WebGLRenderingContext.enable","enable()")}}-Methode (Sie werden `enable()` auch verwenden, um viele andere Funktionen von WebGL zu aktivieren; daher die Verwendung der `SCISSOR_TEST`-Konstanten als Argument in diesem Fall). Dies demonstriert erneut die typische Reihenfolge von Befehlen in {{Glossary("WebGL")}}. Wir passen zunächst den WebGL-Status an. In diesem Fall durch das Aktivieren des Ausschneidetests und das Festlegen einer rechteckigen Maske. Erst wenn der WebGL-Status zufriedenstellend angepasst wurde, führen wir den Zeichenbefehl aus (in diesem Fall `clear()`), der die Verarbeitung der Fragmente in der Grafikpipeline startet.

```html
<p>Ergebnis des Ausschneidens.</p>
<canvas>Ihr Browser scheint HTML-Canvas nicht zu unterstützen.</canvas>
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
