---
title: Löschen mit Farben
slug: Web/API/WebGL_API/By_example/Clearing_with_colors
l10n:
  sourceCommit: 8799df4d0dbc74bdcf0de1e7a24563a46dcb2478
---

{{DefaultAPISidebar("WebGL")}}{{PreviousNext("Learn/WebGL/By_example/Detect_WebGL","Learn/WebGL/By_example/Clearing_by_clicking")}}

Ein Beispiel, das zeigt, wie man einen WebGL-Rendering-Kontext mit einer Vollfarbe löscht.

## Löschen des WebGL-Kontextes mit einer Vollfarbe

{{EmbedLiveSample("Clearing_the_WebGL_context_with_a_solid_color",660,425)}}

Das einfachste grafische {{Glossary("WebGL")}}-Programm. Richten Sie den {{domxref("WebGLRenderingContext","Rendering-Kontext", "", 1)}} ein und löschen Sie ihn dann vollständig in Grün. Beachten Sie, dass {{Glossary("CSS")}} die Hintergrundfarbe des Canvas auf Schwarz setzt, sodass wir, wenn das Canvas grün wird, wissen, dass die Magie von {{Glossary("WebGL")}} funktioniert hat.

Darüber hinaus können Sie feststellen, dass das Löschen des Zeichenpuffers mit einer Vollfarbe ein zweistufiger Prozess ist. Zuerst setzen wir die Clear-Farbe auf Grün, indem wir die Methode {{domxref("WebGLRenderingContext.clearColor()","clearColor()")}} verwenden. Dies ändert nur einige interne Zustände von {{Glossary("WebGL")}}, zeichnet jedoch noch nichts. Anschließend führen wir das eigentliche Zeichnen durch Aufruf der {{domxref("WebGLRenderingContext.clear()","clear()")}}-Methode durch. Dies ist typisch dafür, wie mit WebGL gezeichnet wird. Es gibt nur eine Handvoll Methoden zum tatsächlichen Zeichnen (`clear()` ist eine davon). Alle anderen Methoden dienen dem Setzen und Abfragen von WebGL-Zustandsvariablen (wie der Clear-Farbe).

Es gibt viele "Regler" und "Schalter", die das Zeichnen mit {{Glossary("WebGL")}} beeinflussen. Die Clear-Farbe ist nur der erste von vielen, die Sie kennenlernen werden. Deshalb wird {{Glossary("WebGL")}}/{{Glossary("OpenGL")}} oft eine _Zustandsmaschine_ genannt. Durch das Verstellen dieser "Regler" und "Schalter" können Sie den internen Zustand der WebGL-Maschine ändern, was wiederum beeinflusst, wie Eingaben (in diesem Fall ein Clear-Befehl) in Ausgaben (in diesem Fall werden alle Pixel auf Grün gesetzt) übersetzt werden.

Schließlich sei angemerkt, dass Farbe in WebGL normalerweise im {{Glossary("RGB", "RGBA")}}-Format vorliegt, das heißt vier numerische Komponenten für Rot, Grün, Blau und Alpha (Transparenz). Daher nimmt `clearColor()` vier Argumente entgegen.

```html
<p>Ein sehr einfaches WebGL-Programm, das etwas Farbe zeigt.</p>
<!-- Text innerhalb eines Canvas-Elements wird nur angezeigt,
    wenn das Canvas nicht unterstützt wird. -->
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
// Alles innerhalb des Ereignisbehandlers für das Laden des Fensters
// ausführen, um sicherzustellen, dass der DOM vollständig geladen
// und gestylt ist, bevor versucht wird, ihn zu manipulieren,
// und um den globalen Bereich nicht durcheinanderzubringen.
// Wir geben dem Ereignisbehandler einen Namen (setupWebGL),
// damit wir innerhalb der Funktion selbst auf das
// Funktionsobjekt verweisen können.
window.addEventListener(
  "load",
  function setupWebGL(evt) {
    "use strict";

    // Nach sich selbst aufräumen. Der Ereignisbehandler
    // entfernt sich selbst, da er nur einmal ausgeführt werden muss.
    window.removeEventListener(evt.type, setupWebGL, false);

    // Referenzen auf die Dokumentenelemente.
    const paragraph = document.querySelector("p"),
      canvas = document.querySelector("canvas");

    // Den WebGL-Rendering-Kontext erhalten.
    const gl =
      canvas.getContext("webgl") ||
      canvas.getContext("experimental-webgl");

    // Im Falle eines Fehlers den Benutzer informieren. Andernfalls den
    // Zeichenpuffer (das Viewport) initialisieren und den Kontext
    // mit einer Vollfarbe löschen.
    if (!gl) {
      paragraph.textContent =
        "WebGL-Kontext konnte nicht abgerufen werden. Ihr Browser oder Gerät unterstützt möglicherweise kein WebGL.";
      return;
    }
    paragraph.textContent = "Glückwunsch! Ihr Browser unterstützt WebGL.";
    gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
    // Die Clear-Farbe auf ein dunkleres Grün setzen.
    gl.clearColor(0.0, 0.5, 0.0, 1.0);
    // Den Kontext mit der neu gesetzten Farbe löschen. Dieser
    // Funktionsaufruf führt tatsächlich das Zeichnen aus.
    gl.clear(gl.COLOR_BUFFER_BIT);
  },
  false,
);
```

Der Quellcode dieses Beispiels ist auch auf [GitHub](https://github.com/idofilin/webgl-by-example/tree/master/clearing-with-colors) verfügbar.

{{PreviousNext("Learn/WebGL/By_example/Detect_WebGL","Learn/WebGL/By_example/Clearing_by_clicking")}}
