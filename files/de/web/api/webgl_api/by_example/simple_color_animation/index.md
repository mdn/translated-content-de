---
title: Einfache Farbanimation
slug: Web/API/WebGL_API/By_example/Simple_color_animation
l10n:
  sourceCommit: 1eae3d383ad47b5e21bf25764d1d35487ea52bb8
---

{{DefaultAPISidebar("WebGL")}}{{PreviousNext("Web/API/WebGL_API/By_example/Clearing_by_clicking","Web/API/WebGL_API/By_example/Color_masking")}}

Eine sehr grundlegende Farbanimation, erstellt mit {{Glossary("WebGL", "WebGL")}}, indem der Zeichenpuffer jede Sekunde mit einer anderen zufälligen Farbe gelöscht wird.

## Farbanimation mit Clear

{{EmbedLiveSample("Color_animation_with_clear",660,425)}}

Dieses Beispiel zeigt eine Farbanimation mit {{Glossary("WebGL", "WebGL")}} sowie die Benutzerinteraktion. Der Benutzer kann die Animation durch Klicken auf den Knopf starten, stoppen und neu starten.

Dieses Mal haben wir die Funktionsaufrufe von {{Glossary("WebGL", "WebGL")}} innerhalb eines Timer-Event-Handlers platziert. Ein Klick-Event-Handler ermöglicht zusätzlich die grundlegende Benutzerinteraktion zum Starten und Stoppen der Animation. Der Timer und die Timer-Handler-Funktion etablieren die Animationsschleife, eine Reihe von Zeichenbefehlen, die in regelmäßigen Abständen ausgeführt werden (typischerweise bei jedem Frame; in diesem Fall einmal pro Sekunde).

```html
<p>A simple WebGL program that shows color animation.</p>
<p>You can click the button below to toggle the color animation on or off.</p>
<canvas id="canvas-view">
  Your browser does not seem to support HTML canvas.
</canvas>
<button id="animation-onoff">
  Press here to
  <strong>[verb goes here]</strong>
  the animation
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

    // A variable to hold a timer that drives the animation.
    let timer;

    // Click event handlers.
    const button = document.querySelector("#animation-onoff");
    const verb = document.querySelector("strong");
    function startAnimation(evt) {
      button.removeEventListener(evt.type, startAnimation, false);
      button.addEventListener("click", stopAnimation, false);
      verb.textContent = "stop";
      // Setup animation loop by redrawing every second.
      timer = setInterval(drawAnimation, 1000);
      // Give immediate feedback to user after clicking, by
      // drawing one animation frame.
      drawAnimation();
    }
    function stopAnimation(evt) {
      button.removeEventListener(evt.type, stopAnimation, false);
      button.addEventListener("click", startAnimation, false);
      verb.textContent = "start";
      // Stop animation by clearing the timer.
      clearInterval(timer);
    }
    // Call stopAnimation() once to set up the initial event
    // handlers for canvas and button.
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
            "Failed to get WebGL context.\n" +
              "Your browser or device may not support WebGL.",
          );
          return;
        }
        gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
      }

      // Get a random color value using a helper function.
      const color = getRandomColor();
      // Set the WebGLRenderingContext clear color to the
      // random color.
      gl.clearColor(color[0], color[1], color[2], 1.0);
      // Clear the context with the newly set color.
      gl.clear(gl.COLOR_BUFFER_BIT);
    }

    // Random color helper function.
    function getRandomColor() {
      return [Math.random(), Math.random(), Math.random()];
    }
  },
  false,
);
```

Der Quellcode dieses Beispiels ist auch auf [GitHub](https://github.com/idofilin/webgl-by-example/tree/master/simple-color-animation) verfügbar.

{{PreviousNext("Web/API/WebGL_API/By_example/Clearing_by_clicking","Web/API/WebGL_API/By_example/Color_masking")}}
