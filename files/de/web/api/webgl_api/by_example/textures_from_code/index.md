---
title: Texturen aus Code
slug: Web/API/WebGL_API/By_example/Textures_from_code
l10n:
  sourceCommit: 116577234db1d6275c74a8bb879fce54d944f4ed
---

{{DefaultAPISidebar("WebGL")}}{{PreviousNext("Web/API/WebGL_API/By_example/Hello_vertex_attributes","Web/API/WebGL_API/By_example/Video_textures")}}

Dieses WebGL-Beispiel bietet eine einfache Demonstration von prozeduralem Texturieren mit Fragment-Shadern. Das heißt, es wird Code verwendet, um Texturen zu generieren, die beim Shading von WebGL-Objekten verwendet werden.

## Zeichnen von Texturen mit Code

{{EmbedLiveSample("Drawing_textures_with_code", 660, 425)}}

Texturierung eines Punkt-Sprites mit Berechnungen, die pro Pixel im Fragment-Shader durchgeführt werden.

```html hidden
<p>Texture from code. Simple demonstration of procedural texturing</p>
```

```html hidden
<canvas>Your browser does not seem to support canvases.</canvas>
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
    float distanceSq = distance * distance;
    gl_FragColor = vec4(
      0.2/distanceSq,
      0.1/distanceSq,
      0.0, 1.0 );
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
cleanup();

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

Der Quellcode dieses Beispiels ist auch auf [GitHub](https://github.com/idofilin/webgl-by-example/tree/master/textures-from-code) verfügbar.

{{PreviousNext("Web/API/WebGL_API/By_example/Hello_vertex_attributes","Web/API/WebGL_API/By_example/Video_textures")}}
