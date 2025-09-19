---
title: Hallo Vertex-Attribute
slug: Web/API/WebGL_API/By_example/Hello_vertex_attributes
l10n:
  sourceCommit: f71683f74da0078d9371c4d0c1ff9d3898fc7b59
---

{{DefaultAPISidebar("WebGL")}}{{PreviousNext("Web/API/WebGL_API/By_example/Hello_GLSL","Web/API/WebGL_API/By_example/Textures_from_code")}}

Dieses WebGL-Beispiel zeigt, wie Shader-Programmierung mit Benutzerinteraktion kombiniert wird, indem Benutzereingaben mithilfe von Vertex-Attributen an den Shader gesendet werden.

## Hallo-Welt-Programm in GLSL

{{EmbedLiveSample("Hello_World_program_in_GLSL",660,425)}}

Anleitung, um Eingaben an ein Shader-Programm zu senden, indem Daten im GPU-Speicher gespeichert werden.

```html hidden
<p>
  First encounter with attributes and sending data to GPU. Click on the canvas
  to change the horizontal position of the square.
</p>
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

```js
const canvas = document.querySelector("canvas");

const gl = getRenderingContext();
let source = document.querySelector("#vertex-shader").innerHTML;
const vertexShader = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(vertexShader, source);
gl.compileShader(vertexShader);

source = document.querySelector("#fragment-shader").innerHTML;
const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
gl.shaderSource(fragmentShader, source);
gl.compileShader(fragmentShader);
const program = gl.createProgram();
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
  throw new Error("Program failed to link");
}

let buffer;
initializeAttributes();
gl.useProgram(program);
gl.drawArrays(gl.POINTS, 0, 1);

canvas.addEventListener("click", (evt) => {
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
});

function getRenderingContext() {
  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;
  const gl = canvas.getContext("webgl");
  gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT);
  return gl;
}

function initializeAttributes() {
  gl.enableVertexAttribArray(0);
  buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([0.0]), gl.STATIC_DRAW);
  gl.vertexAttribPointer(0, 1, gl.FLOAT, false, 0, 0);
}

window.addEventListener("beforeunload", cleanup);
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

Der Quellcode dieses Beispiels ist auch auf [GitHub](https://github.com/idofilin/webgl-by-example/tree/master/hello-vertex-attributes) verfügbar.

{{PreviousNext("Web/API/WebGL_API/By_example/Hello_GLSL","Web/API/WebGL_API/By_example/Textures_from_code")}}
