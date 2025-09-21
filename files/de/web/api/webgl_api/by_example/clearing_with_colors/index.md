---
title: Löschen mit Farben
slug: Web/API/WebGL_API/By_example/Clearing_with_colors
l10n:
  sourceCommit: 0ea88f719ad95045993f8a54d5bbaee857617380
---

{{DefaultAPISidebar("WebGL")}}{{PreviousNext("Web/API/WebGL_API/By_example/Detect_WebGL","Web/API/WebGL_API/By_example/Clearing_by_clicking")}}

Ein Beispiel, das zeigt, wie man einen WebGL-Rendering-Kontext zu einer Volltonfarbe löscht.

## Löschen des WebGL-Kontextes mit einer Volltonfarbe

{{EmbedLiveSample("Clearing_the_WebGL_context_with_a_solid_color",660,425)}}

Das einfachste grafische {{Glossary("WebGL", "WebGL")}}-Programm. Richten Sie den [Rendering-Kontext](/de/docs/Web/API/WebGLRenderingContext) ein und löschen Sie ihn dann einfach in solidem Grün. Beachten Sie, dass {{Glossary("CSS", "CSS")}} die Hintergrundfarbe des Canvas auf Schwarz setzt. Wenn das Canvas grün wird, wissen wir, dass die Magie von {{Glossary("WebGL", "WebGL")}} gewirkt hat.

Darüber hinaus können Sie feststellen, dass das Löschen des Zeichenpuffers mit einer Volltonfarbe ein zweistufiger Prozess ist. Zuerst setzen wir die Löschfarbe auf Grün, indem wir die Methode [`clearColor()`](/de/docs/Web/API/WebGLRenderingContext/clearColor) verwenden. Dies ändert nur einige interne Zustände von {{Glossary("WebGL", "WebGL")}}, zeichnet aber noch nichts. Anschließend führen wir das eigentliche Zeichnen durch, indem wir die Methode [`clear()`](/de/docs/Web/API/WebGLRenderingContext/clear) aufrufen. Dies ist typisch dafür, wie das Zeichnen mit WebGL erfolgt. Es gibt nur eine Handvoll Methoden für das tatsächliche Zeichnen (`clear()` ist eine davon). Alle anderen Methoden dienen zum Setzen und Abfragen von WebGL-Zustandsvariablen (wie z. B. der Löschfarbe).

Es gibt viele "Regler" und "Schalter", die das Zeichnen mit {{Glossary("WebGL", "WebGL")}} beeinflussen. Die Löschfarbe ist nur die erste von vielen, die Sie kennenlernen werden. Aus diesem Grund wird {{Glossary("WebGL", "WebGL")}}/{{Glossary("OpenGL", "OpenGL")}} oft als _Zustandsmaschine_ bezeichnet. Durch das Justieren dieser "Regler" und "Schalter" können Sie den internen Zustand der WebGL-Maschine ändern, was wiederum ändert, wie Eingaben (in diesem Fall ein Löschbefehl) in Ausgaben (in diesem Fall werden alle Pixel auf Grün gesetzt) übersetzt wird.

Zum Schluss sei angemerkt, dass Farbe in WebGL normalerweise im {{Glossary("RGB", "RGBA")}}-Format vorliegt, also aus vier numerischen Komponenten für Rot, Grün, Blau und Alpha (Deckkraft) besteht. Daher nimmt `clearColor()` vier Argumente entgegen.

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
// References to the document elements.
const paragraph = document.querySelector("p");
const canvas = document.querySelector("canvas");

// Getting the WebGL rendering context.
const gl = canvas.getContext("webgl");

paragraph.textContent = "Congratulations! Your browser supports WebGL.";
gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
// Set the clear color to darkish green.
gl.clearColor(0.0, 0.5, 0.0, 1.0);
// Clear the context with the newly set color. This is
// the function call that actually does the drawing.
gl.clear(gl.COLOR_BUFFER_BIT);
```

Der Quellcode dieses Beispiels ist auch auf [GitHub](https://github.com/idofilin/webgl-by-example/tree/master/clearing-with-colors) verfügbar.

{{PreviousNext("Web/API/WebGL_API/By_example/Detect_WebGL","Web/API/WebGL_API/By_example/Clearing_by_clicking")}}
