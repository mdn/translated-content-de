---
title: Hallo Vertex-Attribute
slug: Web/API/WebGL_API/By_example/Hello_vertex_attributes
l10n:
  sourceCommit: 8d5440dbd259fd6eea32b4f4a200f25257d1bf41
---

{{DefaultAPISidebar("WebGL")}}{{PreviousNext("Learn/WebGL/By_example/Hello_GLSL","Learn/WebGL/By_example/Textures_from_code")}}

Dieses WebGL-Beispiel zeigt, wie Shader-Programmierung und Benutzerinteraktion kombiniert werden, indem Benutzereingaben über Vertex-Attribute an den Shader gesendet werden.

## Hallo Welt-Programm in GLSL

{{EmbedLiveSample("Hello_World_program_in_GLSL",660,425)}}

Wie man Eingaben an ein Shader-Programm sendet, indem man Daten im GPU-Speicher speichert.

```html hidden
<p>
  Erste Begegnung mit Attributen und Senden von Daten an die GPU. Klicken Sie auf die Leinwand, um die horizontale Position des Quadrats zu ändern.
</p>
```

```html hidden
<canvas>Ihr Browser scheint HTML-Canvas nicht zu unterstützen.</canvas>
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

  attribute float position;

  void main() {
    gl_Position = vec4(position, 0.0, 0.0, 1.0);
    gl_PointSize = 64.0;
  }
</script>
```

```html
<script type="x-shader/x-fragment" id="fragment-shader">
  #version 100
  precision mediump float;
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
      `Shader-Programm konnte nicht erfolgreich verbunden werden. Fehlerprotokoll: ${linkErrLog}`;
    return;
  }

  initializeAttributes();
  gl.useProgram(program);
  gl.drawArrays(gl.POINTS, 0, 1);

  document.querySelector("canvas").addEventListener(
    "click",
    (evt) => {
      const clickXRelativeToCanvas = evt.pageX - evt.target.offsetLeft;
      const clickXinWebGLCoords =
        (2.0 * (clickXRelativeToCanvas - gl.drawingBufferWidth / 2)) /
        gl.drawingBufferWidth;
      gl.bufferData(
        gl.ARRAY_BUFFER,
        new Float32Array([clickXinWebGLCoords]),
        gl.STATIC_DRAW,
      );
      gl.drawArrays(gl.POINTS, 0, 1);
    },
    false,
  );
}

let buffer;
function initializeAttributes() {
  gl.enableVertexAttribArray(0);
  buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([0.0]), gl.STATIC_DRAW);
  gl.vertexAttribPointer(0, 1, gl.FLOAT, false, 0, 0);
}

window.addEventListener("beforeunload", cleanup, true);
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
      "Fehlgeschlagen. Ihr Browser oder Gerät könnte WebGL nicht unterstützen.";
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

Der Quellcode dieses Beispiels ist auch auf [GitHub](https://github.com/idofilin/webgl-by-example/tree/master/hello-vertex-attributes) verfügbar.

{{PreviousNext("Learn/WebGL/By_example/Hello_GLSL","Learn/WebGL/By_example/Textures_from_code")}}