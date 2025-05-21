---
title: Regnende Rechtecke
slug: Web/API/WebGL_API/By_example/Raining_rectangles
l10n:
  sourceCommit: 611edf6335e4a833a6f394d0d98b117e7b0a36bf
---

{{DefaultAPISidebar("WebGL")}}{{PreviousNext("Web/API/WebGL_API/By_example/Scissor_animation","Web/API/WebGL_API/By_example/Hello_GLSL")}}

Ein einfaches WebGL-Spiel, das das Löschen mit Volltonfarben, Scherenschnitt, Animation und Benutzerinteraktion demonstriert.

## Animation und Benutzerinteraktion mit Scherenschnitt

{{EmbedLiveSample("Animation_and_user_interaction_with_scissoring",660,425)}}

Dies ist ein einfaches Spiel. Das Ziel: Versuchen Sie, so viele der fallenden Rechtecke wie möglich zu fangen, indem Sie auf sie klicken. In diesem Beispiel verwenden wir einen objektorientierten Ansatz für die angezeigten Rechtecke, der hilft, den Zustand des Rechtecks (seine Position, Farbe usw.) an einem Ort zu organisieren und den gesamten Code kompakter und wiederverwendbarer zu machen.

Dieses Beispiel kombiniert das Löschen des Zeichnungsbuffers mit Volltonfarben und Scherenschnitt-Operationen. Es ist eine Vorschau einer vollständigen grafischen Anwendung, die verschiedene Phasen der {{Glossary("WebGL", "WebGL")}}-Grafik-Pipeline und Zustandsmaschine manipuliert.

Darüber hinaus demonstriert das Beispiel, wie die WebGL-Funktionsaufrufe innerhalb einer Spielschleife integriert werden. Die Spielschleife ist verantwortlich für das Zeichnen der Animationsbilderrahmen und dafür, die Animation reaktionsfähig auf Benutzereingaben zu halten. Hier wird die Spielschleife mit Hilfe von Zeitüberschreitungen implementiert.

```html hidden
<p>You caught <strong>0</strong>. You missed <strong>0</strong>.</p>
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

```js
window.addEventListener("load", setupAnimation, false);
let gl;
let timer;
let rainingRect;
let scoreDisplay;
let missesDisplay;
function setupAnimation(evt) {
  window.removeEventListener(evt.type, setupAnimation, false);
  if (!(gl = getRenderingContext())) return;
  gl.enable(gl.SCISSOR_TEST);

  rainingRect = new Rectangle();
  timer = setTimeout(drawAnimation, 17);
  document
    .querySelector("canvas")
    .addEventListener("click", playerClick, false);
  [scoreDisplay, missesDisplay] = document.querySelectorAll("strong");
}

let score = 0;
let misses = 0;
function drawAnimation() {
  gl.scissor(
    rainingRect.position[0],
    rainingRect.position[1],
    rainingRect.size[0],
    rainingRect.size[1],
  );
  gl.clear(gl.COLOR_BUFFER_BIT);
  rainingRect.position[1] -= rainingRect.velocity;
  if (rainingRect.position[1] < 0) {
    misses += 1;
    missesDisplay.textContent = misses;
    rainingRect = new Rectangle();
  }
  // We are using setTimeout for animation. So we reschedule
  // the timeout to call drawAnimation again in 17ms.
  // Otherwise we won't get any animation.
  timer = setTimeout(drawAnimation, 17);
}

function playerClick(evt) {
  // We need to transform the position of the click event from
  // window coordinates to relative position inside the canvas.
  // In addition we need to remember that vertical position in
  // WebGL increases from bottom to top, unlike in the browser
  // window.
  const position = [
    evt.pageX - evt.target.offsetLeft,
    gl.drawingBufferHeight - (evt.pageY - evt.target.offsetTop),
  ];
  // If the click falls inside the rectangle, we caught it.

  // Increment score and create a new rectangle.
  const diffPos = [
    position[0] - rainingRect.position[0],
    position[1] - rainingRect.position[1],
  ];
  if (
    diffPos[0] >= 0 &&
    diffPos[0] < rainingRect.size[0] &&
    diffPos[1] >= 0 &&
    diffPos[1] < rainingRect.size[1]
  ) {
    score += 1;
    scoreDisplay.textContent = score;
    rainingRect = new Rectangle();
  }
}

function Rectangle() {
  // Keeping a reference to the new Rectangle object, rather
  // than using the confusing this keyword.
  const rect = this;
  // We get three random numbers and use them for new rectangle
  // size and position. For each we use a different number,
  // because we want horizontal size, vertical size and
  // position to be determined independently.
  const randVec = getRandomVector();
  rect.size = [5 + 120 * randVec[0], 5 + 120 * randVec[1]];
  rect.position = [
    randVec[2] * (gl.drawingBufferWidth - rect.size[0]),
    gl.drawingBufferHeight,
  ];
  rect.velocity = 1.0 + 6.0 * Math.random();
  rect.color = getRandomVector();
  gl.clearColor(rect.color[0], rect.color[1], rect.color[2], 1.0);
  function getRandomVector() {
    return [Math.random(), Math.random(), Math.random()];
  }
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

Der Quellcode dieses Beispiels ist auch auf [GitHub](https://github.com/idofilin/webgl-by-example/tree/master/raining-rectangles) verfügbar.

{{PreviousNext("Web/API/WebGL_API/By_example/Scissor_animation","Web/API/WebGL_API/By_example/Hello_GLSL")}}
