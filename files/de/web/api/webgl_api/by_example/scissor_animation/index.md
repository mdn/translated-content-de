---
title: Scherenschnitt-Animation
slug: Web/API/WebGL_API/By_example/Scissor_animation
l10n:
  sourceCommit: 8d5440dbd259fd6eea32b4f4a200f25257d1bf41
---

{{DefaultAPISidebar("WebGL")}}{{PreviousNext("Learn/WebGL/By_example/Boilerplate_1","Learn/WebGL/By_example/Raining_rectangles")}}

Ein einfaches WebGL-Beispiel, bei dem wir mit Scherenschnitt- und Löschoperationen etwas Animationsspaß haben.

## Animation mit Scherenschnitt

{{EmbedLiveSample("Animation_with_scissoring",660,425)}}

In diesem Beispiel animieren wir Quadrate mithilfe von [`scissor()`](/de/docs/Web/API/WebGLRenderingContext/scissor) und [`clear()`](/de/docs/Web/API/WebGLRenderingContext/clear). Wir richten erneut eine Animationsschleife mit Timern ein. Beachten Sie, dass diesmal die Position des Quadrats (der Scherenbereich) ist, die in jedem Frame aktualisiert wird (wir setzen die Bildrate auf ungefähr eine alle 17 ms, oder etwa 60 fps – Bilder pro Sekunde).

Im Gegensatz dazu wird die Farbe des Quadrats (festgelegt mit [`clearColor`](/de/docs/Web/API/WebGLRenderingContext/clearColor)) nur aktualisiert, wenn ein neues Quadrat erstellt wird. Dies ist eine schöne Demonstration von [WebGL](/de/docs/Glossary/WebGL) als Zustandsmaschine. Für jedes Quadrat setzen wir einmal seine Farbe und aktualisieren dann in jedem Frame nur seine Position. Der Löschfarbenzustand von WebGL bleibt beim eingestellten Wert, bis wir ihn erneut ändern, wenn ein neues Quadrat erstellt wird.

```html hidden
<p>
  WebGL animation by clearing the drawing buffer with solid color and applying
  scissor test.
</p>
<button id="animation-onoff">
  Press here to <strong>[verb goes here]</strong> the animation.
</button>
```

```html hidden
<canvas>Your browser does not seem to support canvases.</canvas>
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
// Variables to hold the WebGL context, and the color and
// position of animated squares.
let gl;
let color = getRandomColor();
let position;

function setupAnimation(evt) {
  window.removeEventListener(evt.type, setupAnimation, false);
  if (!(gl = getRenderingContext())) return;

  gl.enable(gl.SCISSOR_TEST);
  gl.clearColor(color[0], color[1], color[2], 1.0);
  // Unlike the browser window, vertical position in WebGL is
  // measured from bottom to top. In here we set the initial
  // position of the square to be at the top left corner of the
  // drawing buffer.
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

// Variables to hold the size and velocity of the square.
const size = [60, 60];
let velocity = 3.0;
function drawAnimation() {
  gl.scissor(position[0], position[1], size[0], size[1]);
  gl.clear(gl.COLOR_BUFFER_BIT);
  // Every frame the vertical position of the square is
  // decreased, to create the illusion of movement.
  position[1] -= velocity;
  // When the square hits the bottom of the drawing buffer,
  // we override it with new square of different color and
  // velocity.
  if (position[1] < 0) {
    // Horizontal position chosen randomly, and vertical
    // position at the top of the drawing buffer.
    position = [
      Math.random() * (gl.drawingBufferWidth - size[0]),
      gl.drawingBufferHeight,
    ];
    // Random velocity between 1.0 and 7.0
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
      "Failed. Your browser or device may not support WebGL.";
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

Der Quellcode dieses Beispiels ist ebenfalls auf [GitHub](https://github.com/idofilin/webgl-by-example/tree/master/scissor-animation) verfügbar.

{{PreviousNext("Learn/WebGL/By_example/Boilerplate_1","Learn/WebGL/By_example/Raining_rectangles")}}
