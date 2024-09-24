---
title: Texturen aus Code
slug: Web/API/WebGL_API/By_example/Textures_from_code
l10n:
  sourceCommit: 8d5440dbd259fd6eea32b4f4a200f25257d1bf41
---

{{DefaultAPISidebar("WebGL")}}{{PreviousNext("Learn/WebGL/By_example/Hello_vertex_attributes","Learn/WebGL/By_example/Video_textures")}}

Dieses WebGL-Beispiel bietet eine einfache Demonstration der prozeduralen Texturierung mit Fragment-Shadern. Das heißt, es wird Code verwendet, um Texturen für die Schattierung von WebGL-Objekten zu erzeugen.

## Zeichnen von Texturen mit Code

{{EmbedLiveSample("Drawing_textures_with_code", 660, 425)}}

Texturierung eines Punkt-Sprites mit pro-Pixel-Berechnungen im Fragment-Shader.

```html hidden
<p>Textur aus Code. Einfache Demonstration der prozeduralen Texturierung</p>
```

```html hidden
<canvas>Ihr Browser scheint keine Canvas zu unterstützen.</canvas>
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
  precision highp float;

  attribute vec2 position;

  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
    gl_PointSize = 128.0;
  }
</script>
```

```html
<script type="x-shader/x-fragment" id="fragment-shader">
  #version 100
  precision mediump float;
  void main() {
    vec2 fragmentPosition = 2.0*gl_PointCoord - 1.0;
    float distance = length(fragmentPosition);
    float distanceSqrd = distance * distance;
    gl_FragColor = vec4(
      0.2/distanceSqrd,
      0.1/distanceSqrd,
      0.0, 1.0 );
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
      `Shader-Programm konnte nicht erfolgreich verknüpft werden. Fehlerprotokoll: ${linkErrLog}`;
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
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([0.0, 0.0]), gl.STATIC_DRAW);
  gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
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

Der Quellcode dieses Beispiels ist auch auf [GitHub](https://github.com/idofilin/webgl-by-example/tree/master/textures-from-code) verfügbar.

{{PreviousNext("Learn/WebGL/By_example/Hello_vertex_attributes","Learn/WebGL/By_example/Video_textures")}}
