---
title: Scheren-Animation
slug: Web/API/WebGL_API/By_example/Scissor_animation
l10n:
  sourceCommit: 8d5440dbd259fd6eea32b4f4a200f25257d1bf41
---

{{DefaultAPISidebar("WebGL")}}{{PreviousNext("Learn/WebGL/By_example/Boilerplate_1","Learn/WebGL/By_example/Raining_rectangles")}}

Ein einfaches WebGL-Beispiel, in dem wir mit Scherung und Löschoperationen etwas Animation machen.

## Animation mit Scherung

{{EmbedLiveSample("Animation_with_scissoring",660,425)}}

In diesem Beispiel animieren wir Quadrate mit {{domxref("WebGLRenderingContext.scissor()","scissor()")}} und {{domxref("WebGLRenderingContext.clear()","clear()")}}. Wir etablieren wieder eine Animationsschleife mit Timern. Beachten Sie, dass dieses Mal die Position des Quadrats (der Scherungsbereich) ist, die bei jedem Frame aktualisiert wird (wir setzen die Bildrate auf etwa alle 17ms oder ungefähr 60fps – Bilder pro Sekunde).

Im Gegensatz dazu wird die Farbe des Quadrats (gesetzt mit {{domxref("WebGLRenderingContext.clearColor()","clearColor")}}) nur dann aktualisiert, wenn ein neues Quadrat erstellt wird. Dies ist eine schöne Demonstration von {{Glossary("WebGL")}} als Zustandsmaschine. Für jedes Quadrat setzen wir einmal seine Farbe und aktualisieren dann nur seine Position bei jedem Frame. Der Löschfarbzustand von WebGL bleibt beim gesetzten Wert, bis wir ihn erneut ändern, wenn ein neues Quadrat erstellt wird.

```html hidden
<p>
  WebGL-Animation durch Löschen des Zeichenpuffers mit Volltonfarbe und Anwenden
  eines Scherentests.
</p>
<button id="animation-onoff">
  Drücken Sie hier, um die Animation zu <strong>[verb goes here]</strong>.
</button>
```

```html hidden
<canvas>Ihr Browser scheint keine Canvas zu unterstützen.</canvas>
```

```css hidden
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
  display: block;
  font-size: inherit;
  margin: auto;
  padding: 0.6em;
}
```

```js hidden
;(() => {
  "use strict";
```

```js
window.addEventListener("load", setupAnimation, false);
// Variablen, um den WebGL-Kontext sowie die Farbe und
// Position der animierten Quadrate zu halten.
let gl;
let color = getRandomColor();
let position;

function setupAnimation(evt) {
  window.removeEventListener(evt.type, setupAnimation, false);
  if (!(gl = getRenderingContext())) return;

  gl.enable(gl.SCISSOR_TEST);
  gl.clearColor(color[0], color[1], color[2], 1.0);
  // Anders als bei einem Browserfenster wird die vertikale Position in WebGL
  // von unten nach oben gemessen. Hier setzen wir die Anfangsposition
  // des Quadrats auf die linke obere Ecke des Zeichenpuffers.
  position = [0, gl.drawingBufferHeight];

  const button = document.querySelector("button");
  let timer;

  function startAnimation(evt) {
    button.removeEventListener(evt.type, startAnimation, false);
    button.addEventListener("click", stopAnimation, false);
    document.querySelector("strong").textContent = "stop";
    timer = setInterval(drawAnimation, 17);
    drawAnimation();
  }

  function stopAnimation(evt) {
    button.removeEventListener(evt.type, stopAnimation, false);
    button.addEventListener("click", startAnimation, false);
    document.querySelector("strong").textContent = "start";
    clearInterval(timer);
  }

  stopAnimation({ type: "click" });
}

// Variablen, um die Größe und Geschwindigkeit des Quadrats zu halten.
const size = [60, 60];
let velocity = 3.0;
function drawAnimation() {
  gl.scissor(position[0], position[1], size[0], size[1]);
  gl.clear(gl.COLOR_BUFFER_BIT);
  // Bei jedem Frame wird die vertikale Position des Quadrats
  // verringert, um die Illusion von Bewegung zu erzeugen.
  position[1] -= velocity;
  // Wenn das Quadrat den unteren Rand des Zeichenpuffers erreicht,
  // überschreiben wir es mit einem neuen Quadrat in einer anderen Farbe und
  // Geschwindigkeit.
  if (position[1] < 0) {
    // Horizontale Position wird zufällig gewählt, und vertikale
    // Position oben am Zeichenpuffer.
    position = [
      Math.random() * (gl.drawingBufferWidth - size[0]),
      gl.drawingBufferHeight,
    ];
    // Zufällige Geschwindigkeit zwischen 1.0 und 7.0
    velocity = 1.0 + 6.0 * Math.random();
    color = getRandomColor();
    gl.clearColor(color[0], color[1], color[2], 1.0);
  }
}

function getRandomColor() {
  return [Math.random(), Math.random(), Math.random()];
}
```

```js hidden
function getRenderingContext() {
  const canvas = document.querySelector("canvas");
  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;
  const gl =
    canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
  if (!gl) {
    const paragraph = document.querySelector("p");
    paragraph.textContent =
      "Fehlgeschlagen. Ihr Browser oder Gerät unterstützt möglicherweise kein WebGL.";
    return null;
  }
  gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT);
  return gl;
}
```

```js hidden
})();
```

Der Quellcode dieses Beispiels ist auch auf [GitHub](https://github.com/idofilin/webgl-by-example/tree/master/scissor-animation) verfügbar.

{{PreviousNext("Learn/WebGL/By_example/Boilerplate_1","Learn/WebGL/By_example/Raining_rectangles")}}
