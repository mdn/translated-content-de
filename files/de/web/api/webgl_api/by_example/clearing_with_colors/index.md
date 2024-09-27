---
title: Mit Farben löschen
slug: Web/API/WebGL_API/By_example/Clearing_with_colors
l10n:
  sourceCommit: 8799df4d0dbc74bdcf0de1e7a24563a46dcb2478
---

{{DefaultAPISidebar("WebGL")}}{{PreviousNext("Learn/WebGL/By_example/Detect_WebGL","Learn/WebGL/By_example/Clearing_by_clicking")}}

Ein Beispiel, das zeigt, wie ein WebGL-Rendering-Kontext mit einer Volltonfarbe gelöscht wird.

## Löschen des WebGL-Kontexts mit einer Volltonfarbe

{{EmbedLiveSample("Clearing_the_WebGL_context_with_a_solid_color",660,425)}}

Das einfachste grafische [WebGL](/de/docs/Glossary/WebGL)-Programm. Richten Sie den {{domxref("WebGLRenderingContext","rendering context", "", 1)}} ein und löschen Sie ihn dann einfach vollständig in Grün. Beachten Sie, dass [CSS](/de/docs/Glossary/CSS) die Hintergrundfarbe des Canvas auf Schwarz setzt, sodass wir wissen, dass die Magie von [WebGL](/de/docs/Glossary/WebGL) funktioniert hat, wenn das Canvas grün wird.

Außerdem werden Sie feststellen, dass das Löschen des Zeichenpuffers mit einer Volltonfarbe ein zweistufiger Prozess ist. Zuerst setzen wir die Löschfarbe auf Grün, indem wir die Methode [`clearColor()`](/de/docs/Web/API/WebGLRenderingContext/clearColor) verwenden. Dies ändert nur einen internen Zustand von [WebGL](/de/docs/Glossary/WebGL), zeichnet aber noch nichts. Danach führen wir das Zeichnen tatsächlich aus, indem wir die Methode [`clear()`](/de/docs/Web/API/WebGLRenderingContext/clear) aufrufen. Dies ist typisch dafür, wie mit WebGL gezeichnet wird. Es gibt nur eine Handvoll Methoden für das eigentliche Zeichnen (`clear()` ist eine davon). Alle anderen Methoden dienen der Einstellung und Abfrage von WebGL-Zustandsvariablen (wie der Löschfarbe).

Es gibt viele „Regler“ und „Schalter“, die das Zeichnen mit [WebGL](/de/docs/Glossary/WebGL) beeinflussen. Die Löschfarbe ist nur der erste von vielen, die Sie kennenlernen werden. Deshalb wird [WebGL](/de/docs/Glossary/WebGL)/[OpenGL](/de/docs/Glossary/OpenGL) oft als _Zustandsmaschine_ bezeichnet. Indem man diese „Regler“ und „Schalter“ anpasst, kann man den internen Zustand der WebGL-Maschine ändern, was wiederum beeinflusst, wie Eingaben (in diesem Fall ein Löschbefehl) in Ausgaben (in diesem Fall werden alle Pixel auf Grün gesetzt) übersetzt werden.

Schließlich sei angemerkt, dass Farbe in WebGL normalerweise im [RGBA](/de/docs/Glossary/RGB)-Format vorliegt, das heißt vier numerische Komponenten für Rot, Grün, Blau und Alpha (Deckkraft). Daher nimmt `clearColor()` vier Argumente entgegen.

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
window.addEventListener(
  "load",
  function setupWebGL(evt) {
    "use strict";

    // Cleaning after ourselves. The event handler removes
    // itself, because it only needs to run once.
    window.removeEventListener(evt.type, setupWebGL, false);

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
  },
  false,
);
```

Der Quellcode dieses Beispiels ist auch auf [GitHub](https://github.com/idofilin/webgl-by-example/tree/master/clearing-with-colors) verfügbar.

{{PreviousNext("Learn/WebGL/By_example/Detect_WebGL","Learn/WebGL/By_example/Clearing_by_clicking")}}
