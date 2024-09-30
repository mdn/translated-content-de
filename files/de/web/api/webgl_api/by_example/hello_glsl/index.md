---
title: Hallo GLSL
slug: Web/API/WebGL_API/By_example/Hello_GLSL
l10n:
  sourceCommit: 8d5440dbd259fd6eea32b4f4a200f25257d1bf41
---

{{DefaultAPISidebar("WebGL")}}{{PreviousNext("Learn/WebGL/By_example/Raining_rectangles","Learn/WebGL/By_example/Hello_vertex_attributes")}}

Dieses WebGL-Beispiel zeigt ein sehr grundlegendes GLSL-Shader-Programm, das ein Quadrat mit einer einheitlichen Farbe zeichnet.

> [!NOTE]
> Dieses Beispiel wird höchstwahrscheinlich in allen modernen Desktop-Browsern funktionieren. Es kann jedoch sein, dass es in einigen mobilen oder älteren Browsern nicht funktioniert. Wenn die Leinwand leer bleibt, können Sie die Ausgabe des nächsten Beispiels prüfen, das genau dasselbe zeichnet. Denken Sie jedoch daran, die Erklärungen und den Code auf dieser Seite zu lesen, bevor Sie zum nächsten Beispiel übergehen.

## Hallo-Welt-Programm in GLSL

{{EmbedLiveSample("Hello_World_program_in_GLSL",660,425)}}

Ein sehr einfaches erstes Shader-Programm.

```html hidden
<p>Hello World! Hello GLSL!</p>
```

```html hidden
<canvas>Your browser does not seem to support HTML canvas.</canvas>
```

```css hidden
body {
  text-align: center;
}
canvas {
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

```html
<script type="x-shader/x-vertex" id="vertex-shader">
  #version 100
  void main() {
    gl_Position = vec4(0.0, 0.0, 0.0, 1.0);
    gl_PointSize = 64.0;
  }
</script>
```

```html
<script type="x-shader/x-fragment" id="fragment-shader">
  #version 100
  void main() {
    gl_FragColor = vec4(0.18, 0.54, 0.34, 1.0);
  }
</script>
```

```js hidden
;(() => {
  "use strict";
```

```js
window.addEventListener("load", setupWebGL, false);
let gl;
let program;

function setupWebGL(evt) {
  window.removeEventListener(evt.type, setupWebGL, false);
  if (!(gl = getRenderingContext())) return;

  let source = document.querySelector("#vertex-shader").innerHTML;
  const vertexShader = gl.createShader(gl.VERTEX_SHADER);
  gl.shaderSource(vertexShader, source);
  gl.compileShader(vertexShader);

  source = document.querySelector("#fragment-shader").innerHTML;
  const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
  gl.shaderSource(fragmentShader, source);
  gl.compileShader(fragmentShader);
  program = gl.createProgram();
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  gl.detachShader(program, vertexShader);
  gl.detachShader(program, fragmentShader);
  gl.deleteShader(vertexShader);
  gl.deleteShader(fragmentShader);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    const linkErrLog = gl.getProgramInfoLog(program);
    cleanup();
    document.querySelector("p").textContent =
      `Shader program did not link successfully. Error log: ${linkErrLog}`;
    return;
  }

  initializeAttributes();

  gl.useProgram(program);
  gl.drawArrays(gl.POINTS, 0, 1);

  cleanup();
}

let buffer;
function initializeAttributes() {
  gl.enableVertexAttribArray(0);
  buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.vertexAttribPointer(0, 1, gl.FLOAT, false, 0, 0);
}

function cleanup() {
  gl.useProgram(null);
  if (buffer) {
    gl.deleteBuffer(buffer);
  }
  if (program) {
    gl.deleteProgram(program);
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

```js hidden
})();
```

Der Quellcode dieses Beispiels ist auch auf [GitHub](https://github.com/idofilin/webgl-by-example/tree/master/hello-glsl) verfügbar.

{{PreviousNext("Learn/WebGL/By_example/Raining_rectangles","Learn/WebGL/By_example/Hello_vertex_attributes")}}
