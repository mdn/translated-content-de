---
title: Einfache Farbanimation
slug: Web/API/WebGL_API/By_example/Simple_color_animation
l10n:
  sourceCommit: 8d5440dbd259fd6eea32b4f4a200f25257d1bf41
---

{{DefaultAPISidebar("WebGL")}}{{PreviousNext("Learn/WebGL/By_example/Clearing_by_clicking","Learn/WebGL/By_example/Color_masking")}}

Eine sehr grundlegende Farbanimation, erstellt mit {{Glossary("WebGL")}}, durchgeführt durch das Löschen des Zeichenpuffers mit einer anderen zufälligen Farbe jede Sekunde.

## Farbanimation mit Löschen

{{EmbedLiveSample("Color_animation_with_clear",660,425)}}

Dieses Beispiel bietet eine einfache Veranschaulichung der Farbanimation mit {{Glossary("WebGL")}} sowie der Benutzerinteraktion. Der Nutzer kann die Animation durch Klicken auf die Schaltfläche starten, stoppen und neu starten.

Diesmal platzieren wir die {{Glossary("WebGL")}} Funktionsaufrufe innerhalb eines Timer-Ereignishandlers. Ein Klick-Ereignishandler ermöglicht zusätzlich die grundlegende Benutzerinteraktion zum Starten und Stoppen der Animation. Der Timer und die Timer-Handler-Funktion etablieren die Animationsschleife, eine Reihe von Zeichenbefehlen, die in regelmäßigen Abständen ausgeführt werden (typischerweise jedes Frame; in diesem Fall einmal pro Sekunde).

```html
<p>Ein einfaches WebGL-Programm, das Farbanimation zeigt.</p>
<p>Sie können unten auf die Schaltfläche klicken, um die Farbanimation ein- oder auszuschalten.</p>
<canvas id="canvas-view">
  Ihr Browser scheint HTML-Canvas nicht zu unterstützen.
</canvas>
<button id="animation-onoff">
  Drücken Sie hier, um die Animation
  <strong>[Verb hier einfügen]</strong>
</button>
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
button {
  display: inline-block;
  font-size: inherit;
  margin: auto;
  padding: 0.6em;
}
```

```js
window.addEventListener(
  "load",
  function setupAnimation(evt) {
    "use strict";
    window.removeEventListener(evt.type, setupAnimation, false);

    // Eine Variable, um einen Timer zu halten, der die Animation antreibt.
    let timer;

    // Klick-Ereignishandler.
    const button = document.querySelector("#animation-onoff");
    const verb = document.querySelector("strong");
    function startAnimation(evt) {
      button.removeEventListener(evt.type, startAnimation, false);
      button.addEventListener("click", stopAnimation, false);
      verb.textContent = "stoppen";
      // Animationsschleife einrichten, indem jede Sekunde neu gezeichnet wird.
      timer = setInterval(drawAnimation, 1000);
      // Sofortiges Feedback an den Benutzer nach dem Klicken, durch
      // Zeichnen eines Animationsframes.
      drawAnimation();
    }
    function stopAnimation(evt) {
      button.removeEventListener(evt.type, stopAnimation, false);
      button.addEventListener("click", startAnimation, false);
      verb.textContent = "starten";
      // Animation stoppen, indem der Timer gelöscht wird.
      clearInterval(timer);
    }
    // Einmal stopAnimation() aufrufen, um die initialen Ereignishandler
    // für das Canvas und den Button einzurichten.
    stopAnimation({ type: "click" });

    let gl;
    function drawAnimation() {
      if (!gl) {
        const canvas = document.getElementById("canvas-view");
        gl =
          canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
        if (!gl) {
          clearInterval(timer);
          alert(
            "WebGL-Kontext konnte nicht abgerufen werden.\n" +
              "Ihr Browser oder Gerät unterstützt möglicherweise kein WebGL.",
          );
          return;
        }
        gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
      }

      // Einen zufälligen Farbwert mithilfe einer Hilfsfunktion erhalten.
      const color = getRandomColor();
      // Die clear-Farbe des WebGLRenderingContext auf die
      // zufällige Farbe setzen.
      gl.clearColor(color[0], color[1], color[2], 1.0);
      // Den Kontext mit der neu gesetzten Farbe löschen.
      gl.clear(gl.COLOR_BUFFER_BIT);
    }

    // Hilfsfunktion für zufällige Farben.
    function getRandomColor() {
      return [Math.random(), Math.random(), Math.random()];
    }
  },
  false,
);
```

Der Quellcode dieses Beispiels ist auch auf [GitHub](https://github.com/idofilin/webgl-by-example/tree/master/simple-color-animation) verfügbar.

{{PreviousNext("Learn/WebGL/By_example/Clearing_by_clicking","Learn/WebGL/By_example/Color_masking")}}
