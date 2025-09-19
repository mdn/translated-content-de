---
title: Clearing with colors
slug: Web/API/WebGL_API/By_example/Clearing_with_colors
l10n:
  sourceCommit: f71683f74da0078d9371c4d0c1ff9d3898fc7b59
---

{{DefaultAPISidebar("WebGL")}}{{PreviousNext("Web/API/WebGL_API/By_example/Detect_WebGL","Web/API/WebGL_API/By_example/Clearing_by_clicking")}}

Ein Beispiel, das zeigt, wie ein WebGL-Rendering-Kontext auf eine einheitliche Farbe gelöscht wird.

## Löschen des WebGL-Kontextes mit einer einheitlichen Farbe

{{EmbedLiveSample("Clearing_the_WebGL_context_with_a_solid_color",660,425)}}

Das einfachste grafische {{Glossary("WebGL", "WebGL")}}-Programm. Richten Sie den [Rendering-Kontext](/de/docs/Web/API/WebGLRenderingContext) ein und löschen Sie ihn dann einfach auf ein einheitliches Grün. Beachten Sie, dass {{Glossary("CSS", "CSS")}} die Hintergrundfarbe des Canvas auf Schwarz setzt, sodass wir wissen, dass die Magie von {{Glossary("WebGL", "WebGL")}} funktioniert hat, wenn das Canvas grün wird.

Zusätzlich werden Sie feststellen, dass das Löschen des Zeichenpuffers mit einer einheitlichen Farbe ein zweistufiger Prozess ist. Zuerst setzen wir die Löschfarbe auf grün durch die Methode [`clearColor()`](/de/docs/Web/API/WebGLRenderingContext/clearColor). Dies ändert nur den internen Zustand von {{Glossary("WebGL", "WebGL")}}, zeichnet jedoch noch nichts. Danach führen wir die Zeichnung tatsächlich durch, indem wir die Methode [`clear()`](/de/docs/Web/API/WebGLRenderingContext/clear) aufrufen. Dies ist typisch dafür, wie man mit WebGL zeichnet. Es gibt nur eine Handvoll Methoden für das eigentliche Zeichnen (`clear()` ist eine davon). Alle anderen Methoden dienen zum Setzen und Abfragen von WebGL-Zustandsvariablen (wie z.B. der Löschfarbe).

Es gibt viele "Regler" und "Schalter", die das Zeichnen mit {{Glossary("WebGL", "WebGL")}} beeinflussen. Die Löschfarbe ist nur der erste von vielen, die Sie kennenlernen werden. Aus diesem Grund wird {{Glossary("WebGL", "WebGL")}}/{{Glossary("OpenGL", "OpenGL")}} oft als _Zustandsmaschine_ bezeichnet. Indem Sie diese "Regler" und "Schalter" anpassen, können Sie den internen Zustand der WebGL-Maschine modifizieren, was wiederum beeinflusst, wie Eingaben (in diesem Fall ein Löschbefehl) in Ausgaben übersetzt werden (in diesem Fall werden alle Pixel auf grün gesetzt).

Abschließend sei angemerkt, dass Farben in WebGL üblicherweise im {{Glossary("RGB", "RGBA")}}-Format vorliegen, das heißt vier numerische Komponenten für Rot, Grün, Blau und Alpha (Opazität). Daher nimmt `clearColor()` vier Argumente entgegen.

```html
<p>A very simple WebGL program that shows some color.</p>
<!-- Text within a canvas element is displayed
    only if canvas is not supported. -->
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
// Run everything inside window load event handler, to make sure
// DOM is fully loaded and styled before trying to manipulate it,
// and to not mess up the global scope. We are giving the event
// handler a name (setupWebGL) so that we can refer to the
// function object within the function itself.
window.addEventListener("load", function setupWebGL(evt) {
  "use strict";

  // Cleaning after ourselves. The event handler removes
  // itself, because it only needs to run once.
  window.removeEventListener(evt.type, setupWebGL);

  // References to the document elements.
  const paragraph = document.querySelector("p"),
    canvas = document.querySelector("canvas");

  // Getting the WebGL rendering context.
  const gl =
    canvas.getContext("webgl") || canvas.getContext("experimental-webgl");

  // If failed, inform user of failure. Otherwise, initialize
  // the drawing buffer (the viewport) and clear the context
  // with a solid color.
  if (!gl) {
    paragraph.textContent =
      "Failed to get WebGL context. Your browser or device may not support WebGL.";
    return;
  }
  paragraph.textContent = "Congratulations! Your browser supports WebGL.";
  gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
  // Set the clear color to darkish green.
  gl.clearColor(0.0, 0.5, 0.0, 1.0);
  // Clear the context with the newly set color. This is
  // the function call that actually does the drawing.
  gl.clear(gl.COLOR_BUFFER_BIT);
});
```

Der Quellcode dieses Beispiels ist auch auf [GitHub](https://github.com/idofilin/webgl-by-example/tree/master/clearing-with-colors) verfügbar.

{{PreviousNext("Web/API/WebGL_API/By_example/Detect_WebGL","Web/API/WebGL_API/By_example/Clearing_by_clicking")}}
