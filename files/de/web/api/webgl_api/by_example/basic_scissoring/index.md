---
title: Grundlegendes Scheren
slug: Web/API/WebGL_API/By_example/Basic_scissoring
l10n:
  sourceCommit: 0ea88f719ad95045993f8a54d5bbaee857617380
---

{{DefaultAPISidebar("WebGL")}}{{PreviousNext("Web/API/WebGL_API/By_example/Color_masking","Web/API/WebGL_API/By_example/Canvas_size_and_WebGL")}}

In diesem Beispiel sehen wir, wie man Rechtecke und Quadrate mit WebGL-Scherenoperationen zeichnet. Scheren erstellt einen Clipping-Bereich, außerhalb dessen keine Zeichnung erfolgt.

## Löschen des Zeichnungspuffers, wenn Scheren angewendet wird

{{EmbedLiveSample("Clearing_the_drawing_buffer_when_scissoring_applies",660,425)}}

Dies ist eine Demonstration des Renderings mit [`scissor()`](/de/docs/Web/API/WebGLRenderingContext/scissor).

Obwohl der Zeichnungsbefehl [`clear()`](/de/docs/Web/API/WebGLRenderingContext/clear) die Löschfarbe (gesetzt durch [`clearColor()`](/de/docs/Web/API/WebGLRenderingContext/clearColor)) in alle Pixel im Zeichnungspuffer schreibt, definiert [`scissor()`](/de/docs/Web/API/WebGLRenderingContext/scissor) eine Maske, die nur Pixel innerhalb des angegebenen rechteckigen Bereichs erlaubt, aktualisiert zu werden.

Dies ist eine gute Gelegenheit, über den Unterschied zwischen Pixeln und _Fragmenten_ zu sprechen. Ein Pixel ist ein Bildelement (in der Praxis ein Punkt) auf dem Bildschirm oder ein einzelnes Element des Zeichnungspuffers, jenem Bereich im Speicher, der Ihre Pixeldaten (wie {{Glossary("RGB", "RGB")}}-Farbkomponenten) hält. Ein _Fragment_ bezieht sich auf das Pixel, während es von der {{Glossary("WebGL", "WebGL")}}-Pipeline verarbeitet wird.

Der Grund für diese Unterscheidung ist, dass die Fragmentfarbe (und andere Fragmentwerte, wie die Tiefe) während der Grafikoperationen mehrfach manipuliert und verändert werden können, bevor sie schließlich auf den Bildschirm geschrieben werden. Wir haben bereits gesehen, wie sich die Fragmentfarbe während der Grafikoperationen durch die Anwendung von [Farbmaskierung](/de/docs/Web/API/WebGLRenderingContext/colorMask) ändert. In anderen Fällen können die Fragmente vollständig verworfen werden (sodass der Pixelwert nicht aktualisiert wird), oder sie können mit dem bereits vorhandenen Pixelwert interagieren (z. B. beim Farbblenden für nicht-opake Elemente in der Szene).

Hier sehen wir ein weiteres Beispiel für die Unterscheidung zwischen Fragmenten und Pixeln. Scheren ist eine eigenständige Phase in der {{Glossary("WebGL", "WebGL")}}/{{Glossary("OpenGL", "OpenGL")}}-Grafikpipeline (es erfolgt nach dem Löschen der Farbe, aber vor der Farbmaskierung). Bevor die eigentlichen Pixel aktualisiert werden, müssen die Fragmente den Scherentest durchlaufen. Wenn die Fragmente den Scherentest bestehen, werden sie weiter durch die Grafikpipeline geleitet, und die entsprechenden Pixel werden auf dem Bildschirm aktualisiert. Wenn sie den Test nicht bestehen, werden sie sofort verworfen, es findet keine weitere Verarbeitung statt, und Pixel werden nicht aktualisiert. Da nur Fragmente innerhalb des angegebenen rechteckigen Bereichs den Scherentest erfolgreich bestehen, werden nur Pixel innerhalb dieses Bereichs aktualisiert, und wir erhalten ein Rechteck auf dem Bildschirm.

Die Scherphase der Pipeline ist standardmäßig deaktiviert. Wir aktivieren sie hier mit der Methode [`enable()`](/de/docs/Web/API/WebGLRenderingContext/enable) (Sie werden `enable()` auch verwenden, um viele andere Funktionen von WebGL zu aktivieren; daher die Verwendung der Konstante `SCISSOR_TEST` als Argument in diesem Fall). Dies zeigt erneut die typische Reihenfolge von Befehlen in {{Glossary("WebGL", "WebGL")}}. Zuerst passen wir den WebGL-Zustand an. In diesem Fall wird der Scherentest aktiviert und eine rechteckige Maske festgelegt. Nur wenn der WebGL-Zustand zufriedenstellend angepasst wurde, führen wir den Zeichnungsbefehl (in diesem Fall `clear()`) aus, der die Verarbeitung der Fragmente in der Grafikpipeline startet.

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
const paragraph = document.querySelector("p");
const canvas = document.querySelector("canvas");

// The following two lines set the size (in CSS pixels) of
// the drawing buffer to be identical to the size of the
// canvas HTML element, as determined by CSS.
canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;

const gl = canvas.getContext("webgl");
gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);

// Enable scissoring operation and define the position and
// size of the scissoring area.
gl.enable(gl.SCISSOR_TEST);
gl.scissor(40, 20, 60, 130);

// Clear the drawing buffer solid yellow.
gl.clearColor(1.0, 1.0, 0.0, 1.0);
gl.clear(gl.COLOR_BUFFER_BIT);
```

Der Quellcode dieses Beispiels ist auch auf [GitHub](https://github.com/idofilin/webgl-by-example/tree/master/basic-scissoring) verfügbar.

{{PreviousNext("Web/API/WebGL_API/By_example/Color_masking","Web/API/WebGL_API/By_example/Canvas_size_and_WebGL")}}
