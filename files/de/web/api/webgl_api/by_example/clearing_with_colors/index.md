---
title: Mit Farben löschen
slug: Web/API/WebGL_API/By_example/Clearing_with_colors
l10n:
  sourceCommit: 8799df4d0dbc74bdcf0de1e7a24563a46dcb2478
---

{{DefaultAPISidebar("WebGL")}}{{PreviousNext("Learn/WebGL/By_example/Detect_WebGL","Learn/WebGL/By_example/Clearing_by_clicking")}}

Ein Beispiel, das zeigt, wie ein WebGL-Rendering-Kontext auf eine einfarbige Fläche gelöscht wird.

## Den WebGL-Kontext mit einer einfarbigen Fläche löschen

{{EmbedLiveSample("Clearing_the_WebGL_context_with_a_solid_color",660,425)}}

Das einfachste grafische {{Glossary("WebGL", "WebGL")}}-Programm. Richten Sie den {{domxref("WebGLRenderingContext","Rendering-Kontext", "", 1)}} ein und löschen Sie ihn dann einfach komplett grün. Beachten Sie, dass {{Glossary("CSS", "CSS")}} die Hintergrundfarbe des Canvas auf Schwarz setzt. Wenn das Canvas grün wird, wissen wir, dass die Magie von {{Glossary("WebGL", "WebGL")}} funktioniert hat.

Darüber hinaus werden Sie feststellen, dass die Löschung des Zeichenpuffers mit einer einfarbigen Fläche ein zweistufiger Prozess ist. Zuerst setzen wir die Löschfarbe auf Grün, indem wir die Methode [`clearColor()`](/de/docs/Web/API/WebGLRenderingContext/clearColor) verwenden. Dadurch wird nur ein interner Zustand von {{Glossary("WebGL", "WebGL")}} geändert, aber es wird noch nichts gezeichnet. Anschließend führen wir die eigentliche Zeichnung durch, indem wir die Methode [`clear()`](/de/docs/Web/API/WebGLRenderingContext/clear) aufrufen. Dies ist typisch für das Zeichnen mit WebGL. Es gibt nur eine Handvoll Methoden für das eigentliche Zeichnen (`clear()` ist eine davon). Alle anderen Methoden dienen zum Setzen und Abfragen von WebGL-Zustandsvariablen (wie der Löschfarbe).

Es gibt viele "Drehknöpfe" und "Schalter", die das Zeichnen mit {{Glossary("WebGL", "WebGL")}} beeinflussen. Die Löschfarbe ist nur der erste von vielen, die Sie kennenlernen werden. Aus diesem Grund wird {{Glossary("WebGL", "WebGL")}}/{{Glossary("OpenGL", "OpenGL")}} oft als _Zustandsmaschine_ bezeichnet. Durch das Anpassen dieser "Drehknöpfe" und "Schalter" können Sie den internen Zustand der WebGL-Maschine ändern, was wiederum beeinflusst, wie Eingaben (in diesem Fall ein Löschbefehl) in Ausgaben umgesetzt werden (in diesem Fall werden alle Pixel auf Grün gesetzt).

Abschließend stellen wir fest, dass Farbe in WebGL normalerweise im {{Glossary("RGB", "RGBA")}}-Format vorliegt, also vier numerische Komponenten für Rot, Grün, Blau und Alpha (Transparenz). Daher nimmt `clearColor()` vier Argumente an.

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
