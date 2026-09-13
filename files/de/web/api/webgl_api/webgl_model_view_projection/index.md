---
title: WebGL Modellansicht Projektion
slug: Web/API/WebGL_API/WebGL_model_view_projection
l10n:
  sourceCommit: 788ea14745b3c5c2f45098403073b381c1357f39
---

{{DefaultAPISidebar("WebGL")}}

Dieser Artikel untersucht, wie man Daten in einem [WebGL](/de/docs/Web/API/WebGL_API) Projekt in die richtigen Räume projiziert, um sie auf dem Bildschirm darzustellen. Er setzt Kenntnisse in grundlegender Matrizenmathematik mit Übersetzungs-, Skalierungs- und Rotationsmatrizen voraus. Es erklärt die drei Kernmatrizen, die typischerweise bei der Erstellung einer 3D-Szene verwendet werden: die Modell-, Ansichts- und Projektionsmatrizen.

## Die Modell-, Ansichts- und Projektionsmatrizen

Einzelne Transformationen von Punkten und Polygonen im Raum in WebGL werden durch grundlegende Transformationsmatrizen wie Übersetzung, Skalierung und Rotation behandelt. Diese Matrizen können zusammengesetzt und in spezieller Weise gruppiert werden, um sie für die Darstellung komplizierter 3D-Szenen nützlich zu machen. Diese zusammengesetzten Matrizen bewegen letztendlich die ursprünglichen Modelldaten in einen speziellen Koordinatenraum namens **Clipraum**. Dieser ist ein 2 Einheiten breiter Würfel, zentriert bei (0,0,0) und mit Ecken, die von (-1,-1,-1) bis (1,1,1) reichen. Dieser Clipraum wird auf einen 2D-Raum komprimiert und in ein Bild rasterisiert.

Die erste unten diskutierte Matrix ist die **Modellmatrix**, die definiert, wie Sie Ihre ursprünglichen Modelldaten nehmen und sie im 3D-Weltraum bewegen. Die **Projektionsmatrix** wird verwendet, um Weltkoordinaten in Clip-Raum-Koordinaten umzuwandeln. Eine oft verwendete Projektionsmatrix, die **Perspektivprojektionsmatrix**, wird verwendet, um die _Effekte_ einer typischen Kamera nachzuahmen, die als Ersatz für den Betrachter in der 3D-Virtualwelt dient. Die **Ansichtsmatrix** ist dafür verantwortlich, die Objekte in der Szene zu bewegen, um die Position der Kamera zu simulieren, die gerade geändert wurde und ändert, was der Betrachter derzeit sehen kann.

Die nachfolgenden Abschnitte bieten einen detaillierten Einblick in die Ideen hinter und die Umsetzung der Modell-, Ansichts- und Projektionsmatrizen. Diese Matrizen sind grundlegend, um Daten auf dem Bildschirm zu bewegen, und sind Konzepte, die über einzelne Frameworks und Engines hinausgehen.

## Clipraum

In einem WebGL-Programm werden Daten typischerweise mit ihrem eigenen Koordinatensystem zur GPU hochgeladen und dann transformiert der Vertex-Shader diese Punkte in ein spezielles Koordinatensystem, das als **Clipraum** bekannt ist. Alle Daten, die außerhalb des Clipraums liegen, werden abgeschnitten und nicht gerendert. Wenn jedoch ein Dreieck die Grenze dieses Raums übertritt, wird es in neue Dreiecke zerlegt, und nur die Teile der neuen Dreiecke, die sich im Clipraum befinden, werden beibehalten.

![Ein 3D-Diagramm, das den Clipraum in WebGL zeigt.](clip_space_graph.svg)

Die obige Grafik ist eine Visualisierung des Clipraums, in den alle Punkte passen müssen. Es handelt sich um einen Würfel mit einer Seitenlänge von zwei Einheiten, mit einer Ecke bei (-1,-1,-1) und der gegenüberliegenden Ecke bei (1,1,1). Das Zentrum des Würfels ist der Punkt (0,0,0). Dieses 8 Kubikmeter große Koordinatensystem, das vom Clipraum verwendet wird, wird als normalisierte Gerätekoordinaten (NDC) bezeichnet. Sie können diesen Begriff von Zeit zu Zeit begegnen, während Sie WebGL-Code recherchieren und damit arbeiten.

Für diesen Abschnitt werden wir unsere Daten direkt ins Clipraum-Koordinatensystem setzen. Normalerweise werden Modelldaten verwendet, die in einem beliebigen Koordinatensystem vorliegen und dann mithilfe einer Matrix transformiert werden, um die Modellkoordinaten in das Clipraum-Koordinatensystem zu konvertieren. Für dieses Beispiel ist es am einfachsten zu veranschaulichen, wie Clipraum funktioniert, indem wir Modellkoordinatenwerte von (-1,-1,-1) bis (1,1,1) verwenden. Der folgende Code erzeugt 2 Dreiecke, die ein Quadrat auf dem Bildschirm zeichnen. Die Z-Tiefe in den Quadraten bestimmt, was oben gezeichnet wird, wenn die Quadrate denselben Raum teilen. Die kleineren Z-Werte werden über den größeren Z-Werten gerendert.

<!-- Gemeinsamer Aufbau -->

```html hidden live-sample___clip_space_ex live-sample___homogenous_coordinates_ex live-sample___model_transform_ex live-sample___divide_by_w_ex live-sample___simple_projection_ex live-sample___projection_matrix_ex live-sample___view_matrix_ex
<canvas id="my-canvas" width="1000" height="1000"></canvas>
```

```css hidden live-sample___clip_space_ex live-sample___homogenous_coordinates_ex live-sample___model_transform_ex live-sample___divide_by_w_ex live-sample___simple_projection_ex live-sample___projection_matrix_ex live-sample___view_matrix_ex
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  overflow: hidden;
}
canvas {
  width: 100% !important;
  height: 100% !important;
}
svg {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
```

```js hidden live-sample___clip_space_ex live-sample___homogenous_coordinates_ex live-sample___model_transform_ex live-sample___divide_by_w_ex live-sample___simple_projection_ex live-sample___projection_matrix_ex live-sample___view_matrix_ex
function createShader(gl, source, type) {
  // Compiles either a shader of type gl.VERTEX_SHADER or gl.FRAGMENT_SHADER
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    const info = gl.getShaderInfoLog(shader);
    throw new Error(`Could not compile WebGL program.\n\n${info}`);
  }

  return shader;
}

function linkProgram(gl, vertexShader, fragmentShader) {
  const program = gl.createProgram();
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);

  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    const info = gl.getProgramInfoLog(program);
    throw new Error(`Could not compile WebGL program.\n\n${info}`);
  }

  return program;
}

function createWebGLProgram(gl, vertexSource, fragmentSource) {
  // Combines createShader() and linkProgram()
  const vertexShader = createShader(gl, vertexSource, gl.VERTEX_SHADER);
  const fragmentShader = createShader(gl, fragmentSource, gl.FRAGMENT_SHADER);
  return linkProgram(gl, vertexShader, fragmentShader);
}

function createWebGLProgramFromIds(gl, vertexSourceId, fragmentSourceId) {
  const vertexSourceEl = document.getElementById(vertexSourceId);
  const fragmentSourceEl = document.getElementById(fragmentSourceId);

  return createWebGLProgram(
    gl,
    vertexSourceEl.innerHTML,
    fragmentSourceEl.innerHTML,
  );
}
```

```js hidden live-sample___model_transform_ex live-sample___divide_by_w_ex live-sample___simple_projection_ex live-sample___projection_matrix_ex live-sample___view_matrix_ex
// Functions below are copied from Matrix_math_for_the_web
// point • matrix
function multiplyMatrixAndPoint(matrix, point) {
  // Give a simple variable name to each part of the matrix, a column and row number
  const c0r0 = matrix[0],
    c1r0 = matrix[1],
    c2r0 = matrix[2],
    c3r0 = matrix[3];
  const c0r1 = matrix[4],
    c1r1 = matrix[5],
    c2r1 = matrix[6],
    c3r1 = matrix[7];
  const c0r2 = matrix[8],
    c1r2 = matrix[9],
    c2r2 = matrix[10],
    c3r2 = matrix[11];
  const c0r3 = matrix[12],
    c1r3 = matrix[13],
    c2r3 = matrix[14],
    c3r3 = matrix[15];

  // Now set some simple names for the point
  const x = point[0];
  const y = point[1];
  const z = point[2];
  const w = point[3];

  // Multiply the point against each part of the 1st column, then add together
  const resultX = x * c0r0 + y * c0r1 + z * c0r2 + w * c0r3;

  // Multiply the point against each part of the 2nd column, then add together
  const resultY = x * c1r0 + y * c1r1 + z * c1r2 + w * c1r3;

  // Multiply the point against each part of the 3rd column, then add together
  const resultZ = x * c2r0 + y * c2r1 + z * c2r2 + w * c2r3;

  // Multiply the point against each part of the 4th column, then add together
  const resultW = x * c3r0 + y * c3r1 + z * c3r2 + w * c3r3;

  return [resultX, resultY, resultZ, resultW];
}

// matrixB • matrixA
function multiplyMatrices(matrixA, matrixB) {
  // Slice the second matrix up into rows
  const row0 = [matrixB[0], matrixB[1], matrixB[2], matrixB[3]];
  const row1 = [matrixB[4], matrixB[5], matrixB[6], matrixB[7]];
  const row2 = [matrixB[8], matrixB[9], matrixB[10], matrixB[11]];
  const row3 = [matrixB[12], matrixB[13], matrixB[14], matrixB[15]];

  // Multiply each row by matrixA
  const result0 = multiplyMatrixAndPoint(matrixA, row0);
  const result1 = multiplyMatrixAndPoint(matrixA, row1);
  const result2 = multiplyMatrixAndPoint(matrixA, row2);
  const result3 = multiplyMatrixAndPoint(matrixA, row3);

  // Turn the result rows back into a single matrix
  // prettier-ignore
  return [
    result0[0], result0[1], result0[2], result0[3],
    result1[0], result1[1], result1[2], result1[3],
    result2[0], result2[1], result2[2], result2[3],
    result3[0], result3[1], result3[2], result3[3],
  ];
}

function multiplyArrayOfMatrices(matrices) {
  if (matrices.length === 1) {
    return matrices[0];
  }
  return matrices.reduce((result, matrix) => multiplyMatrices(result, matrix));
}

function translate(x, y, z) {
  // prettier-ignore
  return [
    1, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 1, 0,
    x, y, z, 1,
  ];
}

function scale(x, y, z) {
  // prettier-ignore
  return [
    x, 0, 0, 0,
    0, y, 0, 0,
    0, 0, z, 0,
    0, 0, 0, 1,
  ];
}

const sin = Math.sin;
const cos = Math.cos;

function rotateX(a) {
  // prettier-ignore
  return [
    1, 0, 0, 0,
    0, cos(a), -sin(a), 0,
    0, sin(a), cos(a), 0,
    0, 0, 0, 1,
  ];
}

function rotateY(a) {
  // prettier-ignore
  return [
    cos(a), 0, sin(a), 0,
    0, 1, 0, 0,
    -sin(a), 0, cos(a), 0,
    0, 0, 0, 1,
  ];
}

function rotateZ(a) {
  // prettier-ignore
  return [
    cos(a), -sin(a), 0, 0,
    sin(a), cos(a), 0, 0,
    0, 0, 1, 0,
    0, 0, 0, 1,
  ];
}

// Define the data that is needed to make a 3d cube
function createCubeData() {
  // prettier-ignore
  const positions = [
    // Front face
    -1.0, -1.0, 1.0, 1.0, -1.0, 1.0, 1.0, 1.0, 1.0, -1.0, 1.0, 1.0,
    // Back face
    -1.0, -1.0, -1.0, -1.0, 1.0, -1.0, 1.0, 1.0, -1.0, 1.0, -1.0, -1.0,
    // Top face
    -1.0, 1.0, -1.0, -1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, -1.0,
    // Bottom face
    -1.0, -1.0, -1.0, 1.0, -1.0, -1.0, 1.0, -1.0, 1.0, -1.0, -1.0, 1.0,
    // Right face
    1.0, -1.0, -1.0, 1.0, 1.0, -1.0, 1.0, 1.0, 1.0, 1.0, -1.0, 1.0,
    // Left face
    -1.0, -1.0, -1.0, -1.0, -1.0, 1.0, -1.0, 1.0, 1.0, -1.0, 1.0, -1.0,
  ];

  // prettier-ignore
  const colorsOfFaces = [
    [0.3, 1.0, 1.0, 1.0],    // Front face: cyan
    [1.0, 0.3, 0.3, 1.0],    // Back face: red
    [0.3, 1.0, 0.3, 1.0],    // Top face: green
    [0.3, 0.3, 1.0, 1.0],    // Bottom face: blue
    [1.0, 1.0, 0.3, 1.0],    // Right face: yellow
    [1.0, 0.3, 1.0, 1.0]     // Left face: purple
  ];

  let colors = [];

  for (const polygonColor of colorsOfFaces) {
    for (let i = 0; i < 4; i++) {
      colors = colors.concat(polygonColor);
    }
  }

  // prettier-ignore
  const elements = [
    0,  1,  2,   0,  2,  3,    // front
    4,  5,  6,   4,  6,  7,    // back
    8,  9,  10,  8,  10, 11,   // top
    12, 13, 14,  12, 14, 15,   // bottom
    16, 17, 18,  16, 18, 19,   // right
    20, 21, 22,  20, 22, 23,   // left
  ];

  return { positions, elements, colors };
}

// Take the data for a cube and bind the buffers for it.
// Return an object collection of the buffers
function createBuffersForCube(gl, cube) {
  const positions = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, positions);
  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array(cube.positions),
    gl.STATIC_DRAW,
  );

  const colors = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, colors);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(cube.colors), gl.STATIC_DRAW);

  const elements = gl.createBuffer();
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, elements);
  gl.bufferData(
    gl.ELEMENT_ARRAY_BUFFER,
    new Uint16Array(cube.elements),
    gl.STATIC_DRAW,
  );

  return { positions, elements, colors };
}
```

### WebGLBox-Beispiel

Dieses Beispiel erstellt ein benutzerdefiniertes `WebGLBox` Objekt, das ein 2D-Feld auf dem Bildschirm zeichnen wird. Es ist als Klasse implementiert, die einen Konstruktor und eine `draw()`-Methode enthält, um ein Feld auf dem Bildschirm zu zeichnen:

```js live-sample___clip_space_ex
class WebGLBox {
  canvas = document.getElementById("my-canvas");
  gl = this.canvas.getContext("webgl");
  webglProgram = createWebGLProgramFromIds(
    this.gl,
    "vertex-shader",
    "fragment-shader",
  );
  positionLocation;
  colorLocation;
  constructor() {
    const gl = this.gl;

    // Setup a WebGL program
    gl.useProgram(this.webglProgram);

    // Save the attribute and uniform locations
    this.positionLocation = gl.getAttribLocation(this.webglProgram, "position");
    this.colorLocation = gl.getUniformLocation(this.webglProgram, "vColor");

    // Tell WebGL to test the depth when drawing, so if a square is behind
    // another square it won't be drawn
    gl.enable(gl.DEPTH_TEST);
  }
  draw(settings) {
    // Create some attribute data; these are the triangles that will end being
    // drawn to the screen. There are two that form a square.

    // prettier-ignore
    const data = new Float32Array([
      // Triangle 1
      settings.left, settings.bottom, settings.depth,
      settings.right, settings.bottom, settings.depth,
      settings.left, settings.top, settings.depth,

      // Triangle 2
      settings.left, settings.top, settings.depth,
      settings.right, settings.bottom, settings.depth,
      settings.right, settings.top, settings.depth,
    ]);

    // Use WebGL to draw this onto the screen.

    // Performance Note: Creating a new array buffer for every draw call is slow.
    // This function is for illustration purposes only.

    const gl = this.gl;

    // Create a buffer and bind the data
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);

    // Setup the pointer to our attribute data (the triangles)
    gl.enableVertexAttribArray(this.positionLocation);
    gl.vertexAttribPointer(this.positionLocation, 3, gl.FLOAT, false, 0, 0);

    // Setup the color uniform that will be shared across all triangles
    gl.uniform4fv(this.colorLocation, settings.color);

    // Draw the triangles to the screen
    gl.drawArrays(gl.TRIANGLES, 0, 6);
  }
}
```

Die Shader sind die Codefragmente, die in GLSL geschrieben sind und unsere Datenpunkte nehmen und sie schließlich auf dem Bildschirm rendern. Der Einfachheit halber werden diese Shader in einem {{htmlelement("script")}} Element gespeichert, das durch die benutzerdefinierte Funktion `createWebGLProgramFromIds()` in das Programm eingebracht wird. Diese Funktion übernimmt die Grundlagen des Umgangs mit GLSL-Quellcode und kompiliert ihn in ein WebGL-Programm. Sie nimmt drei Parameter — den Kontext, in dem das Programm gerendert werden soll, die ID des {{htmlelement("script")}} Elements, das den Vertex-Shader enthält, und die ID des {{htmlelement("script")}} Elements, das den Fragment-Shader enthält. Diese Funktion wird hier nicht ausführlich erklärt; wenn Sie ihre Implementierung sehen möchten, klicken Sie auf "Play" im Codeblock. Der Vertex-Shader positioniert die Vertizes, und der Fragment-Shader färbt jedes Pixel.

Sehen Sie sich zuerst den Vertex-Shader an, der die Vertizes auf dem Bildschirm bewegt:

```glsl
// The individual position vertex
attribute vec3 position;

void main() {
  // the gl_Position is the final position in clip space after the vertex shader modifies it
  gl_Position = vec4(position, 1.0);
}
```

```html hidden live-sample___clip_space_ex
<script id="vertex-shader" type="x-shader/x-vertex">
  // The individual position vertex
  attribute vec3 position;

  void main() {
    // the gl_Position is the final position in clip space after the vertex shader modifies it
    gl_Position = vec4(position, 1.0);
  }
</script>
```

Als Nächstes rasterisiert der Fragment-Shader die Daten tatsächlich in Pixel, bewertet alles auf Pixelbasis und stellt eine einzige Farbe ein. Die GPU ruft die Shader-Funktion für jedes Pixel auf, das sie rendern muss; die Aufgabe des Shaders besteht darin, die Farbe zurückzugeben, die für dieses Pixel verwendet werden soll.

```glsl
precision mediump float;
uniform vec4 vColor;

void main() {
  gl_FragColor = vColor;
}
```

```html hidden live-sample___clip_space_ex live-sample___homogenous_coordinates_ex
<script id="fragment-shader" type="x-shader/x-fragment">
  precision mediump float;
  uniform vec4 vColor;

  void main() {
    gl_FragColor = vColor;
  }
</script>
```

Mit diesen Einstellungen ist es an der Zeit, direkt auf den Bildschirm zu zeichnen, indem Clipraum-Koordinaten verwendet werden.

```js live-sample___clip_space_ex
const box = new WebGLBox();
```

Zuerst ein rotes Feld in der Mitte zeichnen.

```js live-sample___clip_space_ex
box.draw({
  top: 0.5, // x
  bottom: -0.5, // x
  left: -0.5, // y
  right: 0.5, // y

  depth: 0, // z
  color: [1, 0.4, 0.4, 1], // red
});
```

Als Nächstes ein grünes Feld oben und hinter dem roten Feld zeichnen.

```js live-sample___clip_space_ex
box.draw({
  top: 0.9, // x
  bottom: 0, // x
  left: -0.9, // y
  right: 0.9, // y

  depth: 0.5, // z
  color: [0.4, 1, 0.4, 1], // green
});
```

Schließlich, um zu demonstrieren, dass tatsächlich abgeschnitten wird, wird dieses Feld nicht gezeichnet, da es vollständig außerhalb des Clipraums liegt. Die Tiefe liegt außerhalb des Bereichs von -1,0 bis 1,0.

```js live-sample___clip_space_ex
box.draw({
  top: 1, // x
  bottom: -1, // x
  left: -1, // y
  right: 1, // y

  depth: -1.5, // z
  color: [0.4, 0.4, 1, 1], // blue
});
```

#### Die Ergebnisse

```html hidden live-sample___clip_space_ex live-sample___homogenous_coordinates_ex
<!-- The SVG overlay showing clip space -->
<svg
  id="clip-space-axis"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 500 500"
  preserveAspectRatio="none"></svg>

<!-- Use a separate SVG for text to avoid scaling -->
<svg id="clip-space-text" xmlns="http://www.w3.org/2000/svg"></svg>
```

```js hidden live-sample___clip_space_ex live-sample___homogenous_coordinates_ex
const axisOverlay = document.getElementById("clip-space-axis");
const xAxis = document.createElementNS("http://www.w3.org/2000/svg", "path");
const yAxis = document.createElementNS("http://www.w3.org/2000/svg", "path");
yAxis.setAttribute("fill", "none");
yAxis.setAttribute("stroke", "black");
xAxis.setAttribute("fill", "none");
xAxis.setAttribute("stroke", "black");
let yAxisPath = "M 249.5 0 L 249.5 500";
let xAxisPath = "M 0 250.5 L 500 250.5";
for (let i = -10; i <= 10; i++) {
  if (i === 0) continue;
  const length = i % 5 === 0 ? 24 : 12;
  const loc = 250 + i * 25 - 0.5;
  yAxisPath += ` M 249.5 ${loc} L ${249.5 + length} ${loc}`;
  xAxisPath += ` M ${loc} 250.5 L ${loc} ${250.5 - length}`;
}
xAxis.setAttribute("d", xAxisPath);
yAxis.setAttribute("d", yAxisPath);
axisOverlay.appendChild(xAxis);
axisOverlay.appendChild(yAxis);

const textOverlay = document.getElementById("clip-space-text");
for (const label of ["+X", "-X", "+Y", "-Y"]) {
  const textEl = document.createElementNS("http://www.w3.org/2000/svg", "text");
  let x, y;
  if (label === "+X") {
    [x, y] = ["97.5%", "53%"];
  } else if (label === "-X") {
    [x, y] = ["2.5%", "53%"];
  } else if (label === "+Y") {
    [x, y] = ["47%", "2.5%"];
  } else if (label === "-Y") {
    [x, y] = ["47%", "97.5%"];
  }
  textEl.setAttribute("x", x);
  textEl.setAttribute("y", y);
  textEl.setAttribute("text-anchor", "middle");
  textEl.setAttribute("font-family", "'Courier New'");
  textEl.setAttribute("font-size", "16");
  textEl.setAttribute("font-weight", "bold");
  textEl.textContent = label;
  textOverlay.appendChild(textEl);
}
for (let i = -1; i <= 1; i += 0.5) {
  if (i === 0) continue;
  const textEl = document.createElementNS("http://www.w3.org/2000/svg", "text");
  textEl.setAttribute("x", "58%");
  textEl.setAttribute("y", `${50 - i * 48}%`);
  textEl.setAttribute("text-anchor", "end");
  textEl.setAttribute("font-family", "'Courier New'");
  textEl.setAttribute("font-size", "11");
  textEl.textContent = i.toFixed(1);
  textOverlay.appendChild(textEl);
  const textEl2 = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "text",
  );
  textEl2.setAttribute("x", `${50 + i * 50}%`);
  textEl2.setAttribute("y", "45%");
  textEl2.setAttribute("text-anchor", i > 0 ? "end" : "start");
  textEl2.setAttribute("font-family", "'Courier New'");
  textEl2.setAttribute("font-size", "11");
  textEl2.textContent = i.toFixed(1);
  textOverlay.appendChild(textEl2);
}
```

{{EmbedLiveSample("clip_space_ex", "", 600)}}

#### Übung

Eine hilfreiche Übung an dieser Stelle ist es, die Felder im Clipraum zu verschieben, indem der Code variert wird, um ein Gefühl dafür zu bekommen, wie Punkte abgeschnitten und im Clipraum bewegt werden. Versuchen Sie, ein Bild wie ein kastenförmiges Smiley-Gesicht mit einem Hintergrund zu zeichnen.

## Homogene Koordinaten

Die Hauptzeile des vorherigen Clipraum-Vertex-Shaders enthielt diesen Code:

```glsl
gl_Position = vec4(position, 1.0);
```

Die `position`-Variable wurde in der `draw()`-Methode definiert und als Attribut an den Shader übergeben. Dies ist ein dreidimensionaler Punkt, aber die `gl_Position`-Variable, die über die Pipeline weitergegeben wird, ist tatsächlich vierdimensional — anstatt `(x, y, z)` ist es `(x, y, z, w)`. Es gibt keinen Buchstaben nach `z`, daher wird diese vierte Dimension konventionell mit `w` bezeichnet. Im obigen Beispiel wird die `w`-Koordinate auf 1,0 gesetzt.

Die offensichtliche Frage lautet: "Warum die zusätzliche Dimension?" Es stellt sich heraus, dass diese Ergänzung viele schöne Techniken zur Manipulation von 3D-Daten ermöglicht. Diese hinzugefügte Dimension führt die Vorstellung von Perspektive in das Koordinatensystem ein; damit können wir 3D-Koordinaten in den 2D-Raum abbilden—was es ermöglicht, dass zwei parallele Linien sich überschneiden, wenn sie in die Ferne gleiten. Der Wert von `w` wird als Divisor für die anderen Komponenten der Koordinate verwendet, sodass die echten Werte von `x`, `y`, und `z` als `x/w`, `y/w`, und `z/w` berechnet werden (und `w` wird dann auch `w/w`, was zu 1 wird).

Ein dreidimensionaler Punkt wird in einem typischen kartesischen Koordinatensystem definiert. Die hinzugefügte vierte Dimension ändert diesen Punkt in eine [homogene Koordinate](https://en.wikipedia.org/wiki/Homogeneous_coordinates). Sie repräsentiert immer noch einen Punkt im 3D-Raum und es kann leicht demonstriert werden, wie man dieser Art von Koordinate durch ein Paar einfacher Funktionen konstruiert.

```js
function cartesianToHomogeneous(point) {
  let x = point[0];
  let y = point[1];
  let z = point[2];

  return [x, y, z, 1];
}

function homogeneousToCartesian(point) {
  let x = point[0];
  let y = point[1];
  let z = point[2];
  let w = point[3];

  return [x / w, y / w, z / w];
}
```

Wie bereits erwähnt und in den obigen Funktionen gezeigt, teilt die w-Komponente die x-, y-, und z-Komponenten. Wenn die w-Komponente eine nicht-null reale Zahl ist, dann übersetzt sich die homogene Koordinate leicht in einen normalen Punkt im kartesischen Raum zurück. Was passiert nun, wenn die w-Komponente null ist? In JavaScript würde der zurückgegebene Wert wie folgt aussehen.

```js
homogeneousToCartesian([10, 4, 5, 0]);
```

Dies bewertet sich zu: `[Infinity, Infinity, Infinity]`.

Diese homogene Koordinate repräsentiert einen Punkt in der Unendlichkeit. Dies ist eine praktische Art, einen von dem Ursprung in eine spezifische Richtung wegschießenden Strahl darzustellen. Zusätzlich zu einem Strahl könnte sie auch als eine Darstellung eines Richtungsvektors angesehen werden. Wenn diese homogene Koordinate gegen eine Matrix mit einer Translationsmatrix multipliziert wird, wird die Translation effektiv entfernt.

Wenn Zahlen auf Computern extrem groß (oder extrem klein) sind, beginnen sie, weniger präzise zu werden, da es nur so viele Einsen und Nullen gibt, die sie darzustellen. Je mehr Operationen mit größeren Zahlen durchgeführt werden, desto mehr Fehler sammeln sich im Ergebnis an. Wenn durch w geteilt wird, kann dies die Präzision extrem großer Zahlen effektiv erhöhen, indem mit zwei potenziell kleineren, weniger fehleranfälligen Zahlen gearbeitet wird.

Der letzte Vorteil der Verwendung homogener Koordinaten besteht darin, dass sie sehr gut zu Multiplikationen mit 4x4 Matrizen passen. Ein Vertex muss mindestens eine der Dimensionen einer Matrix erfüllen, um gegen sie multipliziert zu werden. Die 4x4 Matrix kann verwendet werden, um eine Vielzahl nützlicher Transformationen zu kodieren. Tatsächlich verwendet die typischen Perspektivprojektionsmatrix die Division durch die w-Komponente, um ihre Transformation zu erreichen.

Das Abschneiden von Punkten und Polygonen aus dem Clipraum erfolgt, bevor die homogenen Koordinaten zurück in kartesische Koordinaten umgewandelt wurden (indem durch w geteilt wird). Dieser endgültige Raum ist als **normalisierte Gerätekoordinaten** oder NDC bekannt.

Um mit dieser Idee zu spielen, kann das vorherige Beispiel modifiziert werden, um die Verwendung der `w`-Komponente zu ermöglichen. Zusätzlich zur Modifizierung von `data` denken Sie auch daran, `vertexAttribPointer()` so zu ändern, dass 4 Komponenten (der zweite `size` Parameter) statt 3 verwendet werden.

```js
// Redefine the triangles to use the W component
// prettier-ignore
const data = new Float32Array([
  // Triangle 1
  settings.left, settings.bottom, settings.depth, settings.w,
  settings.right, settings.bottom, settings.depth, settings.w,
  settings.left, settings.top, settings.depth, settings.w,

  // Triangle 2
  settings.left, settings.top, settings.depth, settings.w,
  settings.right, settings.bottom, settings.depth, settings.w,
  settings.right, settings.top, settings.depth, settings.w,
]);
```

```js hidden live-sample___homogenous_coordinates_ex
class WebGLBox {
  canvas = document.getElementById("my-canvas");
  gl = this.canvas.getContext("webgl");
  webglProgram = createWebGLProgramFromIds(
    this.gl,
    "vertex-shader",
    "fragment-shader",
  );
  positionLocation;
  colorLocation;
  constructor() {
    const gl = this.gl;

    // Setup a WebGL program
    gl.useProgram(this.webglProgram);

    // Save the attribute and uniform locations
    this.positionLocation = gl.getAttribLocation(this.webglProgram, "position");
    this.colorLocation = gl.getUniformLocation(this.webglProgram, "vColor");

    // Tell WebGL to test the depth when drawing, so if a square is behind
    // another square it won't be drawn
    gl.enable(gl.DEPTH_TEST);
  }
  draw(settings) {
    // Create some attribute data; these are the triangles that will end being
    // drawn to the screen. There are two that form a square.

    // prettier-ignore
    const data = new Float32Array([
      // Triangle 1
      settings.left, settings.bottom, settings.depth, settings.w,
      settings.right, settings.bottom, settings.depth, settings.w,
      settings.left, settings.top, settings.depth, settings.w,

      // Triangle 2
      settings.left, settings.top, settings.depth, settings.w,
      settings.right, settings.bottom, settings.depth, settings.w,
      settings.right, settings.top, settings.depth, settings.w,
    ]);

    // Use WebGL to draw this onto the screen.

    // Performance Note: Creating a new array buffer for every draw call is slow.
    // This function is for illustration purposes only.

    const gl = this.gl;

    // Create a buffer and bind the data
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);

    // Setup the pointer to our attribute data (the triangles)
    gl.enableVertexAttribArray(this.positionLocation);
    gl.vertexAttribPointer(this.positionLocation, 4, gl.FLOAT, false, 0, 0);

    // Setup the color uniform that will be shared across all triangles
    gl.uniform4fv(this.colorLocation, settings.color);

    // Draw the triangles to the screen
    gl.drawArrays(gl.TRIANGLES, 0, 6);
  }
}

const box = new WebGLBox();
```

Dann nutzt der Vertex-Shader den übergebenen 4-dimensionalen Punkt.

```glsl
attribute vec4 position;

void main() {
  gl_Position = position;
}
```

```html hidden live-sample___homogenous_coordinates_ex
<script id="vertex-shader" type="x-shader/x-vertex">
  attribute vec4 position;

  void main() {
    gl_Position = position;
  }
</script>
```

Zuerst zeichnen wir ein rotes Feld in der Mitte, setzen aber W auf 0,7. Da die Koordinaten durch 0,7 geteilt werden, werden sie alle vergrößert.

```js live-sample___homogenous_coordinates_ex
box.draw({
  top: 0.5, // y
  bottom: -0.5, // y
  left: -0.5, // x
  right: 0.5, // x
  w: 0.7, // w - enlarge this box

  depth: 0, // z
  color: [1, 0.4, 0.4, 1], // red
});
```

Jetzt zeichnen wir ein grünes Feld oben, aber verkleinern es, indem wir die w-Komponente auf 1,1 setzen.

```js live-sample___homogenous_coordinates_ex
box.draw({
  top: 0.9, // y
  bottom: 0, // y
  left: -0.9, // x
  right: 0.9, // x
  w: 1.1, // w - shrink this box

  depth: 0.5, // z
  color: [0.4, 1, 0.4, 1], // green
});
```

Dieses letzte Feld wird nicht gezeichnet, da es außerhalb des Clipraums liegt. Die Tiefe liegt außerhalb des Bereichs von -1,0 bis 1,0.

```js live-sample___homogenous_coordinates_ex
box.draw({
  top: 1, // y
  bottom: -1, // y
  left: -1, // x
  right: 1, // x
  w: 1.5, // w - Bring this box into range

  depth: -1.5, // z
  color: [0.4, 0.4, 1, 1], // blue
});
```

### Die Ergebnisse

{{EmbedLiveSample("homogenous_coordinates_ex", "", 600)}}

### Übungen

- Spielen Sie mit diesen Werten herum, um zu sehen, wie sich dies auf das Rendern auf dem Bildschirm auswirkt. Beachten Sie, wie das zuvor abgeschnittene blaue Feld durch das Einstellen seiner w-Komponente wieder in den Bereich gebracht wird.
- Versuchen Sie, ein neues Feld zu erstellen, das sich außerhalb des Clipraums befindet, und bringen Sie es durch Division durch w wieder herein.

## Modelltransformation

Punkte direkt in den Clipraum zu setzen, ist von begrenztem Nutzen. In realen Anwendungen haben Sie nicht alle Ihre Quellkoordinaten bereits in Clipraumkoordinaten. Daher müssen Sie meistens die Modelldaten und andere Koordinaten in den Clipraum transformieren. Der bescheidene Würfel ist ein einfaches Beispiel dafür, wie man dies macht. Würfeldaten bestehen aus Eckpunktpositionen, den Farben der Flächen des Würfels und der Reihenfolge der Eckpunktpositionen, die die einzelnen Polygone bilden (in Gruppen von 3 Eckpunkten, um die Dreiecke zu konstruieren, die die Flächen des Würfels bilden). Die Positionen und Farben werden in GL-Puffern gespeichert, als Attribute an den Shader übergeben und dann einzeln verarbeitet.

Schließlich wird eine einzige Modellmatrix berechnet und festgelegt. Diese Matrix repräsentiert die Transformationen, die an jedem Punkt vorgenommen werden, der das Modell ausmacht, um es in den richtigen Raum zu bewegen und alle anderen notwendigen Transformationen an jedem Punkt im Modell durchzuführen. Dies gilt nicht nur für jeden Eckpunkt, sondern für jeden einzelnen Punkt auf jeder Oberfläche des Modells.

In diesem Fall bewegt eine Reihe von Skalierungs-, Rotations- und Übersetzungsmatrizen die Daten in jedem Frame der Animation an die gewünschte Position im Clipraum. Der Würfel hat die Größe des Clipraums (-1,-1,-1) bis (1,1,1), daher muss er verkleinert werden, um nicht den gesamten Clipraum auszufüllen. Diese Matrix wird direkt an den Shader gesendet, nachdem sie zuvor in JavaScript multipliziert wurde.

Der folgende Codeausschnitt definiert eine Methode für das `CubeDemo`-Objekt, die die Modellmatrix erstellt. Die neue Funktion sieht so aus (die Hilfsfunktionen werden im Kapitel [Matrix-Mathematik für das Web](/de/docs/Web/API/WebGL_API/Matrix_math_for_the_web) eingeführt):

```js
function computeModelMatrix(now) {
  // Scale down by 20%
  const scaleMatrix = scale(0.2, 0.2, 0.2);
  // Rotate a slight tilt
  const rotateXMatrix = rotateX(now * 0.0003);
  // Rotate according to time
  const rotateYMatrix = rotateY(now * 0.0005);
  // Move slightly down
  const translateMatrix = translate(0, -0.1, 0);
  // Multiply together, make sure and read them in opposite order
  this.transforms.model = multiplyArrayOfMatrices([
    translateMatrix, // step 4
    rotateYMatrix, // step 3
    rotateXMatrix, // step 2
    scaleMatrix, // step 1
  ]);
}
```

Um dies im Shader zu verwenden, muss es an einer einheitlichen Position festgelegt werden. Die Positionen für die Uniformen werden im `locations` Objekt unten gespeichert:

```js
this.locations.model = gl.getUniformLocation(webglProgram, "model");
```

Und schließlich wird die Uniform an dieser Position eingestellt. Dies gibt die Matrix an die GPU weiter.

```js
gl.uniformMatrix4fv(
  this.locations.model,
  false,
  new Float32Array(this.transforms.model),
);
```

```js hidden live-sample___model_transform_ex live-sample___divide_by_w_ex
class CubeDemo {
  canvas = document.getElementById("my-canvas");
  gl = this.canvas.getContext("webgl");
  webglProgram = createWebGLProgramFromIds(
    this.gl,
    "vertex-shader",
    "fragment-shader",
  );
  transforms = {}; // All of the matrix transforms
  locations = {}; // All of the shader locations
  buffers;

  constructor() {
    const gl = this.gl;
    gl.useProgram(this.webglProgram);
    this.buffers = createBuffersForCube(gl, createCubeData());

    // Save the attribute and uniform locations
    this.locations.model = gl.getUniformLocation(this.webglProgram, "model");
    this.locations.position = gl.getAttribLocation(
      this.webglProgram,
      "position",
    );
    this.locations.color = gl.getAttribLocation(this.webglProgram, "color");

    // Tell WebGL to test the depth when drawing
    gl.enable(gl.DEPTH_TEST);
  }

  computeModelMatrix(now) {
    // Scale down by 20%
    const scaleMatrix = scale(0.2, 0.2, 0.2);
    // Rotate a slight tilt
    const rotateXMatrix = rotateX(now * 0.0003);
    // Rotate according to time
    const rotateYMatrix = rotateY(now * 0.0005);
    // Move slightly down
    const translateMatrix = translate(0, -0.1, 0);
    // Multiply together, make sure and read them in opposite order
    this.transforms.model = multiplyArrayOfMatrices([
      translateMatrix, // step 4
      rotateYMatrix, // step 3
      rotateXMatrix, // step 2
      scaleMatrix, // step 1
    ]);

    // Performance caveat: in real production code it's best not to create
    // new arrays and objects in a loop. This example chooses code clarity
    // over performance.
  }

  draw() {
    const gl = this.gl;
    const now = Date.now();
    // Compute our matrices
    this.computeModelMatrix(now);
    // Update the data going to the GPU
    // Setup the color uniform that will be shared across all triangles
    gl.uniformMatrix4fv(
      this.locations.model,
      false,
      new Float32Array(this.transforms.model),
    );

    // Set the positions attribute
    gl.enableVertexAttribArray(this.locations.position);
    gl.bindBuffer(gl.ARRAY_BUFFER, this.buffers.positions);
    gl.vertexAttribPointer(this.locations.position, 3, gl.FLOAT, false, 0, 0);

    // Set the colors attribute
    gl.enableVertexAttribArray(this.locations.color);
    gl.bindBuffer(gl.ARRAY_BUFFER, this.buffers.colors);
    gl.vertexAttribPointer(this.locations.color, 4, gl.FLOAT, false, 0, 0);

    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.buffers.elements);
    // Perform the actual draw
    gl.drawElements(gl.TRIANGLES, 36, gl.UNSIGNED_SHORT, 0);
    // Run the draw as a loop
    requestAnimationFrame(() => this.draw());
  }
}

const cube = new CubeDemo();
cube.draw();
```

Im Shader wird jeder Positionsvertex zuerst in eine homogene Koordinate (ein `vec4` Objekt) transformiert und dann gegen die Modellmatrix multipliziert.

```glsl
gl_Position = model * vec4(position, 1.0);
```

> [!NOTE]
> In JavaScript erfordert die Matrizenmultiplikation eine benutzerdefinierte Funktion, während im Shader die Multiplikation mit dem einfachen `*` Operator in die Sprache integriert ist.

Der vollständige Orchestrierungscode ist verborgen. Wenn Sie interessiert sind, klicken Sie auf "Play" in einem Codeblock in diesem Abschnitt, um ihn zu überprüfen.

```html hidden live-sample___model_transform_ex
<!-- The vertex shader operates on individual vertices in our model data by setting gl_Position -->
<script id="vertex-shader" type="x-shader/x-vertex">
  // Each point has a position and color
  attribute vec3 position;
  attribute vec4 color;

  // The transformation matrix
  uniform mat4 model;

  // Pass the color attribute down to the fragment shader
  varying vec4 vColor;

  void main() {
    // Pass the color down to the fragment shader
    vColor = color;
    gl_Position = model * vec4(position, 1.0);
  }
</script>
```

```html hidden live-sample___model_transform_ex live-sample___divide_by_w_ex live-sample___simple_projection_ex live-sample___projection_matrix_ex live-sample___view_matrix_ex
<!-- The fragment shader determines the color of the final pixel by setting gl_FragColor -->
<script id="fragment-shader" type="x-shader/x-fragment">
  precision mediump float;
  varying vec4 vColor;

  void main() {
    gl_FragColor = vColor;
  }
</script>
```

### Die Ergebnisse

{{EmbedLiveSample("model_transform_ex", "", 600)}}

An diesem Punkt ist der `w`-Wert des transformierten Punktes immer noch 1,0. Der Würfel hat noch keine Perspektive. Der nächste Abschnitt wird dieses Setup nehmen und die `w`-Werte ändern, um eine Perspektive zu bieten.

### Übungen

- Verkleinern Sie das Feld mithilfe der Skalierungs-Matrix und positionieren Sie es an verschiedenen Stellen innerhalb des Clipraums.
- Versuchen Sie es außerhalb des Clipraums zu bewegen.
- Ändern Sie die Größe des Fensters und beobachten Sie, wie sich das Feld verformt.
- Fügen Sie eine `rotateZ`-Matrix hinzu.

## Division durch W

Ein einfacher Weg, um etwas Perspektive auf unser Modell des Würfels zu bekommen, besteht darin, die Z-Koordinate zu nehmen und sie über zur `w`-Koordinate zu kopieren. Normalerweise wird bei der Umwandlung eines kartesischen Punktes in eine homogene es `(x,y,z,1)`, aber wir werden es so einstellen, dass es etwas wie `(x,y,z,z)` ist. Tatsächlich möchten wir sicherstellen, dass z größer ist als 0 für Punkte im Sichtfeld, daher werden wir es leicht ändern, indem wir den Wert in `((1.0 + z) * scaleFactor)` ändern. Dies wird einen Punkt nehmen, der normalerweise im Clipraum liegt (-1 bis 1) und ihn in einen Raum mehr wie (0 bis 1) je nach dem eingestellten Skalierungsfaktor bewegen. Der Skalierungsfaktor verändert den endgültigen `w`-Wert so, dass er entweder insgesamt höher oder niedriger wird.

Der Shader-Code sieht so aus.

```glsl
// First transform the point
vec4 transformedPosition = model * vec4(position, 1.0);

// How much effect does the perspective have?
float scaleFactor = 0.5;

// Set w by taking the z value which is typically ranged -1 to 1, then scale
// it to be from 0 to some number, in this case 0-1.
float w = (1.0 + transformedPosition.z) * scaleFactor;

// Save the new gl_Position with the custom w component
gl_Position = vec4(transformedPosition.xyz, w);
```

```html hidden live-sample___divide_by_w_ex
<script id="vertex-shader" type="x-shader/x-vertex">
  // Each point has a position and color
  attribute vec3 position;
  attribute vec4 color;

  // The projection matrix
  uniform mat4 model;

  // Pass the color attribute down to the fragment shader
  varying vec4 vColor;

  void main() {
    // Pass the color down to the fragment shader
    vColor = color;

    // First transform the point
    vec4 transformedPosition = model * vec4(position, 1.0);

    // How much affect does the perspective have?
    float scaleFactor = 0.5;

    // Set w by taking the Z value which is typically ranged -1 to 1, then scale
    // it to be from 0 to some number, in this case 0-1.
    float w = (1.0 + transformedPosition.z) * scaleFactor;

    // Save the new gl_Position with the custom w component
    gl_Position = vec4(transformedPosition.xyz, w);
  }
</script>
```

### Die Ergebnisse

{{EmbedLiveSample("divide_by_w_ex", "", 600)}}

Sehen Sie dieses kleine Dreieck auf der Ecke, die zur Kamera zeigt? Hier ist ein Screenshot, wann es auftaucht:

![Ein kleines Dreieck erscheint in der oberen rechten Ecke](part4.png)

Das ist eine zusätzliche Seite, die zu unserem Objekt hinzugefügt wurde, weil die Rotation unserer Form dazu geführt hat, dass diese Ecke außerhalb des Clipraums erweitert wurde, wodurch die Ecke abgeschnitten wird. Lesen Sie [Perspektivprojektionsmatrix](#perspektivprojektionsmatrix) unten für eine Einführung darüber, wie man komplexere Matrizen verwendet, um das Abschneiden zu steuern und zu verhindern.

### Übung

Wenn das ein wenig abstrakt klingt, öffnen Sie den Vertex-Shader und spielen Sie mit dem Skalierungsfaktor herum und beobachten Sie, wie er die Vertizes mehr in Richtung Oberfläche schrumpfen lässt. Ändern Sie die `w`-Komponentenwerte vollständig für wirklich abgefahrene Darstellungen von Raum.

Im nächsten Abschnitt werden wir diesen Schritt des Kopierens von Z in den `w`-Slot nehmen und in eine Matrix umwandeln.

## Einfache Projektion

Der letzte Schritt, das Ausfüllen der `w`-Komponente, kann tatsächlich mit einer einfachen Matrix erreicht werden. Beginnen Sie mit der Einheitsmatrix:

```js
// prettier-ignore
const identity = [
  1, 0, 0, 0,
  0, 1, 0, 0,
  0, 0, 1, 0,
  0, 0, 0, 1,
];

multiplyPoint(identity, [2, 3, 4, 1]);
// [2, 3, 4, 1]
```

Dann verschieben Sie die 1 der letzten Spalte um einen Platz nach oben.

```js
// prettier-ignore
const copyZ = [
  1, 0, 0, 0,
  0, 1, 0, 0,
  0, 0, 1, 1,
  0, 0, 0, 0,
];

multiplyPoint(copyZ, [2, 3, 4, 1]);
// [2, 3, 4, 4]
```

Jedoch im letzten Beispiel führten wir `(z + 1) * scaleFactor` aus:

```js
const scaleFactor = 0.5;

// prettier-ignore
const simpleProjection = [
  1, 0, 0, 0,
  0, 1, 0, 0,
  0, 0, 1, scaleFactor,
  0, 0, 0, scaleFactor,
];

multiplyPoint(simpleProjection, [2, 3, 4, 1]);
// [2, 3, 4, 2.5]
```

Wenn wir es etwas weiter auflösen, können wir sehen, wie dies funktioniert:

```js
const x = 2 * 1 + 3 * 0 + 4 * 0 + 1 * 0;
const y = 2 * 0 + 3 * 1 + 4 * 0 + 1 * 0;
const z = 2 * 0 + 3 * 0 + 4 * 1 + 1 * 0;
const w = 2 * 0 + 3 * 0 + 4 * scaleFactor + 1 * scaleFactor;
```

Die letzte Zeile könnte vereinfacht werden zu:

```js
const w = 4 * scaleFactor + 1 * scaleFactor;
```

Dann durch Faktorieren des `scaleFactor`, erhalten wir dies:

```js
const w = (4 + 1) * scaleFactor;
```

Dies ist genau das Gleiche wie das `(z + 1) * scaleFactor`, das wir im vorherigen Beispiel verwendet haben.

Im Box-Demo wird eine zusätzliche Methode `computeSimpleProjectionMatrix()` hinzugefügt. Diese wird in der `draw()`-Methode aufgerufen und hat den Skalierungsfaktor übergeben. Das Ergebnis sollte identisch mit dem letzten Beispiel sein:

```js
function computeSimpleProjectionMatrix(scaleFactor) {
  // prettier-ignore
  this.transforms.projection = [
    1, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 1, scaleFactor,
    0, 0, 0, scaleFactor,
  ];
}
```

```js hidden live-sample___simple_projection_ex
class CubeDemo {
  canvas = document.getElementById("my-canvas");
  gl = this.canvas.getContext("webgl");
  webglProgram = createWebGLProgramFromIds(
    this.gl,
    "vertex-shader",
    "fragment-shader",
  );
  transforms = {}; // All of the matrix transforms
  locations = {}; // All of the shader locations
  buffers;

  constructor() {
    const gl = this.gl;
    gl.useProgram(this.webglProgram);
    this.buffers = createBuffersForCube(gl, createCubeData());

    // Save the attribute and uniform locations
    this.locations.model = gl.getUniformLocation(this.webglProgram, "model");
    this.locations.projection = gl.getUniformLocation(
      this.webglProgram,
      "projection",
    );
    this.locations.position = gl.getAttribLocation(
      this.webglProgram,
      "position",
    );
    this.locations.color = gl.getAttribLocation(this.webglProgram, "color");

    // Tell WebGL to test the depth when drawing
    gl.enable(gl.DEPTH_TEST);
  }

  computeModelMatrix(now) {
    // Scale down by 20%
    const scaleMatrix = scale(0.2, 0.2, 0.2);
    // Rotate a slight tilt
    const rotateXMatrix = rotateX(now * 0.0003);
    // Rotate according to time
    const rotateYMatrix = rotateY(now * 0.0005);
    // Move slightly down
    const translateMatrix = translate(0, -0.1, 0);
    // Multiply together, make sure and read them in opposite order
    this.transforms.model = multiplyArrayOfMatrices([
      translateMatrix, // step 4
      rotateYMatrix, // step 3
      rotateXMatrix, // step 2
      scaleMatrix, // step 1
    ]);

    // Performance caveat: in real production code it's best not to create
    // new arrays and objects in a loop. This example chooses code clarity
    // over performance.
  }

  computeSimpleProjectionMatrix(scaleFactor) {
    // prettier-ignore
    this.transforms.projection = [
      1, 0, 0, 0,
      0, 1, 0, 0,
      0, 0, 1, scaleFactor, // Note the extra scale factor here
      0, 0, 0, scaleFactor,
    ];

    // This matrix copies the point and sets the W component to 1 + (z * scaleFactor)
  }

  draw() {
    const gl = this.gl;
    const now = Date.now();
    // Compute our matrices
    this.computeModelMatrix(now);
    this.computeSimpleProjectionMatrix(0.5);
    // Update the data going to the GPU
    // Setup the color uniform that will be shared across all triangles
    gl.uniformMatrix4fv(
      this.locations.model,
      false,
      new Float32Array(this.transforms.model),
    );
    gl.uniformMatrix4fv(
      this.locations.projection,
      false,
      new Float32Array(this.transforms.projection),
    );

    // Set the positions attribute
    gl.enableVertexAttribArray(this.locations.position);
    gl.bindBuffer(gl.ARRAY_BUFFER, this.buffers.positions);
    gl.vertexAttribPointer(this.locations.position, 3, gl.FLOAT, false, 0, 0);

    // Set the colors attribute
    gl.enableVertexAttribArray(this.locations.color);
    gl.bindBuffer(gl.ARRAY_BUFFER, this.buffers.colors);
    gl.vertexAttribPointer(this.locations.color, 4, gl.FLOAT, false, 0, 0);

    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.buffers.elements);
    // Perform the actual draw
    gl.drawElements(gl.TRIANGLES, 36, gl.UNSIGNED_SHORT, 0);
    // Run the draw as a loop
    requestAnimationFrame(() => this.draw());
  }
}

const cube = new CubeDemo();
cube.draw();
```

Obwohl das Ergebnis identisch ist, ist der wichtige Schritt hier im Vertex-Shader. Anstatt den Vertex direkt zu modifizieren, wird er mit einer zusätzlichen **[Projektionsmatrix](#the_model_view_and_projection_matrices)** multipliziert, die (wie der Name andeutet) 3D-Punkte auf eine 2D-Zeichenoberfläche projiziert:

```glsl
// Make sure to read the transformations in reverse order
gl_Position = projection * model * vec4(position, 1.0);
```

```html hidden live-sample___simple_projection_ex live-sample___projection_matrix_ex
<!-- The vertex shader operates on individual vertices in our model data by setting gl_Position -->
<script id="vertex-shader" type="x-shader/x-vertex">
  // Each point has a position and color
  attribute vec3 position;
  attribute vec4 color;

  // The transformation matrices
  uniform mat4 model;
  uniform mat4 projection;

  // Pass the color attribute down to the fragment shader
  varying vec4 vColor;

  void main() {
    // Pass the color down to the fragment shader
    vColor = color;

    // Read the multiplication in reverse order, the original point is moved
    // into clip space, and then projected into a perspective view by filling
    // in the W component
    gl_Position = projection * model * vec4(position, 1.0);
  }
</script>
```

### Die Ergebnisse

{{EmbedLiveSample("simple_projection_ex", "", 600)}}

## Der Sichtbereich

Bevor wir dazu übergehen, wie man eine Perspektivprojektionsmatrix berechnet, müssen wir das Konzept des **[Sichtkegels](https://en.wikipedia.org/wiki/Viewing_frustum)** einführen (auch bekannt als der **View Frustum**). Dies ist der Raumabschnitt, dessen Inhalte zu einem bestimmten Zeitpunkt für den Benutzer sichtbar sind. Es ist der 3D-Raum, der durch das Sichtfeld und die Abstände definiert wird, die als nächster und entferntester Inhalt angegeben werden, der gerendert werden soll.

Beim Rendering müssen wir bestimmen, welche Polygone gerendert werden müssen, um die Szene darzustellen. Dies ist das, was der Sichtbereich definiert. Aber was ist überhaupt ein Frustum?

Ein [Frustum](https://en.wikipedia.org/wiki/Frustum) ist der 3D-Körper, der entsteht, wenn ein beliebiger Körper genommen und zwei Abschnitte davon abgeschnitten werden, indem zwei parallele Ebenen verwendet werden. Stellen Sie sich unsere Kamera vor, die einen Bereich betrachtet, der direkt vor ihrem Objektiv beginnt und sich in die Ferne erstreckt. Der sichtbare Bereich ist eine vierseitige Pyramide mit ihrem Gipfel am Objektiv, ihren vier Seiten, die den Umfang ihres peripheren Sichtbereichs entsprechen, und ihrer Basis in der größten Entfernung, die sie sehen kann, so wie hier:

![Eine Darstellung des gesamten Sichtbereichs einer Kamera. Dieser Bereich ist eine vierseitige Pyramide mit ihrem Gipfel am Objektiv und ihrer Basis an der maximal sichtbaren Distanz zur Welt.](fullcamerafov.svg)

Wenn wir dies verwenden würden, um die zu rendernden Polygone in jedem Frame zu bestimmen, müsste unser Renderer jedes Polygon in dieser Pyramide rendern, bis in die Unendlichkeit, einschließlich auch Polygone, die sehr nahe am Objektiv sind — wahrscheinlich zu nahe, um nützlich zu sein (und sicherlich Dinge einschließend, die so nahe sind, dass ein echter Mensch sie in der gleichen Einstellung nicht fokussieren könnte).

Also, der erste Schritt in der Reduzierung der Anzahl der Polygone, die wir berechnen und rendern müssen, ist es, diese Pyramide in den Sichtkegel zu verwandeln. Die beiden Ebenen, die wir verwenden werden, um Vertizes abzuschneiden und dadurch die Polygonanzahl zu reduzieren, sind die **nahe Clipping-Ebene** und die **ferne Clipping-Ebene**.

In WebGL werden die nahen und fernen Clipping-Ebenen dadurch definiert, dass der Abstand vom Objektiv zum nächsten Punkt auf einer Ebene angegeben wird, die senkrecht zur Blickrichtung verläuft. Alles, was näher am Objektiv als die nahe Clipping-Ebene oder weiter von ihr entfernt als die ferne Clipping-Ebene ist, wird entfernt. Dies führt zum Sichtkegel, der so aussieht:

![Eine Darstellung des Sichtkegels der Kamera; die nahen und fernen Ebenen haben einen Teil des Volumens entfernt und die Polygonanzahl reduziert.](camera_view_frustum.svg)

Die Menge der Objekte, die für jeden Frame gerendert werden sollen, wird im Wesentlichen erstellt, indem man mit der Menge aller Objekte in der Szene beginnt. Dann werden alle Objekte, die _vollständig_ außerhalb des Sichtkegels liegen, aus der Menge entfernt. Als nächstes werden Objekte, die teilweise außerhalb des Sichtkegels hervortreten, geklippt, indem alle Polygone entfernt werden, die vollständig außerhalb des Sichtkegels liegen, und indem die Polygone, die über den Sichtkegel hinausgehen, so geklippt werden, dass sie ihn nicht mehr verlassen.

Nachdem dies getan wurde, haben wir die größte Menge an Polygonen, die vollständig innerhalb des Sichtkegels liegen. Diese Liste wird normalerweise weiter reduziert, indem Prozesse wie [Back-Face Culling](https://en.wikipedia.org/wiki/Back-face_culling) (Entfernung von Polygonen, deren Rückseite zur Kamera zeigt) und Occlusion Culling unter Verwendung von [Hidden-Surface Determination](https://en.wikipedia.org/wiki/Hidden-surface_determination) (Entfernung von Polygonen, die nicht gesehen werden können, weil sie vollständig von Polygonen blockiert werden, die näher zum Objektiv sind) verwendet werden.

## Perspektivprojektionsmatrix

Bis zu diesem Punkt haben wir unser eigenes 3D-Rendering-Setup Schritt für Schritt aufgebaut. Doch der aktuelle Code, wie wir ihn erstellt haben, hat einige Probleme. Einer davon ist, dass er verzerrt wird, wenn wir unser Fenster in der Größe ändern. Ein anderes ist, dass unsere einfache Projektion keinen großen Wertebereich für die Szenendaten handhabt. Die meisten Szenen funktionieren nicht im Clipraum. Es wäre hilfreich, die relevante Distanz zur Szene zu definieren, damit beim Umwandeln der Zahlen keine Präzision verloren geht. Schließlich ist es sehr hilfreich, eine abgestimmte Kontrolle darüber zu haben, welche Punkte innerhalb und außerhalb des Clipraums platziert werden. In den vorherigen Beispielen werden gelegentlich die Ecken des Würfels abgeschnitten.

Die **Perspektivprojektionsmatrix** ist eine Art von Projektionsmatrix, die all diese Anforderungen erfüllt. Die Mathematik wird auch etwas anspruchsvoller und wird in diesen Beispielen nicht vollständig erklärt. Kurz gesagt, sie kombiniert die Division durch w (wie in den vorherigen Beispielen durchgeführt) mit einigen genialen Manipulationen basierend auf [ähnlichen Dreiecken](https://de.wikipedia.org/wiki/%C3%84hnlichkeit_%28Geometrie%29). Wenn Sie eine vollständige Erklärung der dahinterstehenden Mathematik lesen möchten, schauen Sie sich einige der folgenden Links an:

- [OpenGL Projektionsmatrix](https://www.songho.ca/opengl/gl_projectionmatrix.html)
- [Perspektivprojektion](https://ogldev.org/)
- [Versuch, die Mathematik hinter der Perspektivprojektionsmatrix in WebGL zu verstehen](https://stackoverflow.com/questions/28286057/trying-to-understand-the-math-behind-the-perspective-matrix-in-webgl/28301213#28301213)

Ein wichtiger Punkt zur Perspektivprojektionsmatrix, die unten verwendet wird, ist, dass sie die Z-Achse umkehrt. Im Clipraum verläuft z+ vom Betrachter weg, während es mit dieser Matrix zum Betrachter hin kommt.

Der Grund, die Z-Achse umzukehren, liegt darin, dass das Clipraum-Koordinatensystem ein linkshändiges Koordinatensystem ist (wobei die Z-Achse vom Betrachter weg und in den Bildschirm zeigt), während die Konvention in Mathematik, Physik und 3D-Modellierung sowie für das Sichtachsen-Koordinatensystem in OpenGL darin besteht, ein rechtshändiges Koordinatensystem zu verwenden (Z-Achse zeigt aus dem Bildschirm in Richtung des Betrachters). Mehr dazu in den entsprechenden Wikipedia-Artikeln: [Kartesisches Koordinatensystem](https://de.wikipedia.org/wiki/Kartesisches_Koordinatensystem#Ausrichtung_und_Handedness), [Rechte-Hand-Regel](https://de.wikipedia.org/wiki/Rechte-Hand-Regel).

Lassen Sie uns einen Blick auf eine `perspective()` Funktion werfen, die die Perspektivprojektionsmatrix berechnet.

```js live-sample___projection_matrix_ex live-sample___view_matrix_ex
function perspective(fieldOfViewInRadians, aspectRatio, near, far) {
  const f = 1.0 / Math.tan(fieldOfViewInRadians / 2);
  const rangeInv = 1 / (near - far);

  // prettier-ignore
  return [
    f / aspectRatio, 0, 0, 0,
    0, f, 0, 0,
    0, 0, (near + far) * rangeInv, -1,
    0, 0, near * far * rangeInv * 2, 0,
  ];
}
```

Die vier Parameter in dieser Funktion sind:

- `fieldOfViewInRadians`
  - : Ein Winkel, angegeben in Radiant, der angibt, wie viel der Szene zu einem Zeitpunkt für den Betrachter sichtbar ist. Je größer die Zahl ist, desto mehr ist durch die Kamera sichtbar. Die Geometrie an den Rändern wird immer stärker verzerrt, was einem Weitwinkelobjektiv entspricht. Wenn das Sichtfeld größer ist, werden die Objekte typischerweise kleiner. Wenn das Sichtfeld kleiner ist, kann die Kamera weniger und weniger im Szenen sehen. Die Objekte werden viel weniger durch Perspektive verzerrt und Objekte scheinen viel näher zur Kamera
- `aspectRatio`
  - : Das Seitenverhältnis der Szene, das dem entspricht ihrer Breite geteilt durch ihre Höhe. In diesen Beispielen ist das die Fensterbreite geteilt durch die Fensterhöhe. Die Einführung dieses Parameters löst schließlich das Problem, bei dem das Modell verzerrt wird, wenn die Leinwand in der Größe angepasst und umgeformt wird.
- `nearClippingPlaneDistance`
  - : Eine positive Zahl, die den Abstand in den Bildschirm zu einer Ebene angibt, die senkrecht zum Boden steht, näher als der alles abgeschnitten wird. Dies wird auf -1 im Clipraum gemappt und sollte nicht auf 0 gesetzt werden.
- `farClippingPlaneDistance`
  - : Eine positive Zahl, die den Abstand zur Ebene angibt, jenseits welcher die Geometrie abgeschnitten wird. Dies wird zu 1 im Clipraum gemappt. Dieser Wert sollte vernünftigerweise nahe an der Distanz der Geometrie gehalten werden, um dazu, Präzisionsfehler zu vermeiden, die beim Rendern auftreten.

Im neuesten Version der Box-Demo wurde die `computeSimpleProjectionMatrix()`-Methode durch die `computePerspectiveMatrix()`-Methode ersetzt.

```js
function computePerspectiveMatrix() {
  const fieldOfViewInRadians = Math.PI * 0.5;
  const aspectRatio = window.innerWidth / window.innerHeight;
  const nearClippingPlaneDistance = 1;
  const farClippingPlaneDistance = 50;

  this.transforms.projection = perspective(
    fieldOfViewInRadians,
    aspectRatio,
    nearClippingPlaneDistance,
    farClippingPlaneDistance,
  );
}
```

```js hidden live-sample___projection_matrix_ex
class CubeDemo {
  canvas = document.getElementById("my-canvas");
  gl = this.canvas.getContext("webgl");
  webglProgram = createWebGLProgramFromIds(
    this.gl,
    "vertex-shader",
    "fragment-shader",
  );
  transforms = {}; // All of the matrix transforms
  locations = {}; // All of the shader locations
  buffers;

  constructor() {
    const gl = this.gl;
    gl.useProgram(this.webglProgram);
    this.buffers = createBuffersForCube(gl, createCubeData());

    // Save the attribute and uniform locations
    this.locations.model = gl.getUniformLocation(this.webglProgram, "model");
    this.locations.projection = gl.getUniformLocation(
      this.webglProgram,
      "projection",
    );
    this.locations.position = gl.getAttribLocation(
      this.webglProgram,
      "position",
    );
    this.locations.color = gl.getAttribLocation(this.webglProgram, "color");

    // Tell WebGL to test the depth when drawing
    gl.enable(gl.DEPTH_TEST);
  }

  computeModelMatrix(now) {
    // Scale up
    const scaleMatrix = scale(5, 5, 5);
    // Rotate a slight tilt
    const rotateXMatrix = rotateX(now * 0.0003);
    // Rotate according to time
    const rotateYMatrix = rotateY(now * 0.0005);
    // Move slightly down
    const translateMatrix = translate(0, 0, -20);
    // Multiply together, make sure and read them in opposite order
    this.transforms.model = multiplyArrayOfMatrices([
      translateMatrix, // step 4
      rotateYMatrix, // step 3
      rotateXMatrix, // step 2
      scaleMatrix, // step 1
    ]);

    // Performance caveat: in real production code it's best not to create
    // new arrays and objects in a loop. This example chooses code clarity
    // over performance.
  }

  computePerspectiveMatrix(scaleFactor) {
    const fieldOfViewInRadians = Math.PI * 0.5;
    const aspectRatio = window.innerWidth / window.innerHeight;
    const nearClippingPlaneDistance = 1;
    const farClippingPlaneDistance = 50;

    this.transforms.projection = perspective(
      fieldOfViewInRadians,
      aspectRatio,
      nearClippingPlaneDistance,
      farClippingPlaneDistance,
    );
  }

  draw() {
    const gl = this.gl;
    const now = Date.now();
    // Compute our matrices
    this.computeModelMatrix(now);
    this.computePerspectiveMatrix(0.5);
    // Update the data going to the GPU
    // Setup the color uniform that will be shared across all triangles
    gl.uniformMatrix4fv(
      this.locations.model,
      false,
      new Float32Array(this.transforms.model),
    );
    gl.uniformMatrix4fv(
      this.locations.projection,
      false,
      new Float32Array(this.transforms.projection),
    );

    // Set the positions attribute
    gl.enableVertexAttribArray(this.locations.position);
    gl.bindBuffer(gl.ARRAY_BUFFER, this.buffers.positions);
    gl.vertexAttribPointer(this.locations.position, 3, gl.FLOAT, false, 0, 0);

    // Set the colors attribute
    gl.enableVertexAttribArray(this.locations.color);
    gl.bindBuffer(gl.ARRAY_BUFFER, this.buffers.colors);
    gl.vertexAttribPointer(this.locations.color, 4, gl.FLOAT, false, 0, 0);

    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.buffers.elements);
    // Perform the actual draw
    gl.drawElements(gl.TRIANGLES, 36, gl.UNSIGNED_SHORT, 0);
    // Run the draw as a loop
    requestAnimationFrame(() => this.draw());
  }
}

const cube = new CubeDemo();
cube.draw();
```

Der Shader-Code ist identisch mit dem vorherigen Beispiel:

```glsl
gl_Position = projection * model * vec4(position, 1.0);
```

Zusätzlich (nicht gezeigt) wurden die Positions- und Skalierungsmatrizen des Modells geändert, um es aus dem Clipraum in das größere Koordinatensystem zu bringen.

### Die Ergebnisse

{{EmbedLiveSample("projection_matrix_ex", "", 600)}}

### Übungen

- Experimentieren Sie mit den Parametern der Perspektivprojektionsmatrix und der Modellmatrix.
- Ersetzen Sie die Perspektivprojektionsmatrix durch eine [orthographische Projektion](https://de.wikipedia.org/wiki/Orthogonale_Projektion). Im MDN WebGL-Shared-Code finden Sie die `MDN.orthographicMatrix()`. Dies kann die `MDN.perspectiveMatrix()` Funktion in `CubeDemo.prototype.computePerspectiveMatrix()` ersetzen.

## Ansichts-Matrix

Während einige Grafikbibliotheken eine virtuelle Kamera haben, die positioniert und gerichtet werden kann, während eine Szene komponiert wird, hat OpenGL (und damit WebGL) das nicht. Hier kommt die **Ansichts-Matrix** ins Spiel. Ihre Aufgabe ist es, die Objekte in der Szene zu übersetzen, zu drehen und zu skalieren, damit sie an der richtigen Stelle relativ zum Betrachter entsprechend der Position und Ausrichtung des Betrachters platziert sind.

### Eine Kamera simulieren

Dies macht Nutzung von einem der grundlegenden Aspekte von Einsteins spezieller Relativitätstheorie: Das Prinzip der Bezugssysteme und der relativen Bewegung besagt, dass aus der Perspektive eines Betrachters, Sie können die Änderung der Position und Ausrichtung des Betrachters simulieren, indem die entgegengesetzte Änderung auf die Objekte in der Szene angewandt wird. Auf jeden Fall erscheint das Ergebnis für den Betrachter identisch.

Stellen Sie sich eine Box vor, die auf einem Tisch sitzt, und eine Kamera, die sich einen Meter entfernt auf dem Tisch befindet, die direkt zur Box zeigt. Dann stellen Sie sich vor, die Kamera von der Box weg zu bewegen, bis sie zwei Meter entfernt ist (durch Hinzufügen eines Meters zur Z-Position der Kamera), dann schieben Sie es 10 Zentimeter nach links. Die Box weicht um diesen Betrag von der Kamera zurück und gleitet leicht nach rechts, erscheint dadurch kleiner der Kamera und offenbart eine kleine Menge seiner linken Seite zur Kamera.

Setzen wir nun die Szene zurück, indem die Box wieder an ihre Ausgangsposition bringt, mit der Kamera zwei Meter von, und direkt auf, der Box ausgerichtet. Dieses Mal jedoch, ist die Kamera auf dem Tisch verriegelt und kann nicht bewegt oder gedreht werden. So ist es, mit WebGL zu arbeiten. Wie simulieren wir also das Bewegen der Kamera durch den Raum?

Anstatt die Kamera zurück und nach links zu bewegen, wenden wir die inverse Transformation auf die Box an: wir bewegen die _Box_ einen Meter zurück und dann 10 Zentimeter nach rechts. Das Ergebnis, aus der Perspektive der beiden Objekte, ist identisch.

Der letzte Schritt in all dem ist es, die **Ansichtsmatrix** zu erstellen, die die Objekte in der Szene so transformiert, dass sie positioniert sind, um die aktuelle Position und Ausrichtung der Kamera zu simulieren. Unser bestehender Code kann den Würfel in der Welt bewegen Raum und alles projizieren, um Perspektive zu haben, aber wir immer noch die Kamera nicht bewegen können.

Stellen Sie sich vor, Sie drehen einen Film mit einer physischen Kamera. Sie haben die Freiheit, die Kamera fast überall zu platzieren, und die Kamera in jede Richtung zu richten, die Sie auswählen. Um dies in 3D-Grafiken zu simulieren, verwenden wir eine Ansichtsmatrix, um die Position und Rotation dieser physischen Kamera zu simulieren.

Im Gegensatz zur Modellmatrix, die die Modellvertizes direkt transformiert, bewegt die Ansichtsmatrix eine abstrakte Kamera herum. In Wirklichkeit bewegt der Vertex-Shader immer noch nur die Modelle, während die "Kamera" bleibt an Ort und Stelle. Damit dies korrekt funktioniert, muss die Inversen der Transformationsmatrix verwendet werden. Die Inversenmatrix kehrt im Wesentlichen eine Transformation um, sodass, wenn wir die Kameransicht nach vorne bewegen, die Inversenmatrix die Objekte in der Szene nach hinten bewegt.

Die folgende `computeViewMatrix()` Methode animiert die Ansichtsmatrix, indem sie sich hinein- und herausbewegt, und nach links und rechts.

```js
function computeViewMatrix(now) {
  const moveInAndOut = 20 * Math.sin(now * 0.002);
  const moveLeftAndRight = 15 * Math.sin(now * 0.0017);

  // Move the camera around
  const position = translate(moveLeftAndRight, 0, 50 + moveInAndOut);

  // Multiply together, make sure and read them in opposite order
  this.transforms.view = multiplyArrayOfMatrices([
    // Exercise: rotate the camera view
    position,
  ]);
}
```

```js hidden live-sample___view_matrix_ex
class CubeDemo {
  canvas = document.getElementById("my-canvas");
  gl = this.canvas.getContext("webgl");
  webglProgram = createWebGLProgramFromIds(
    this.gl,
    "vertex-shader",
    "fragment-shader",
  );
  transforms = {}; // All of the matrix transforms
  locations = {}; // All of the shader locations
  buffers;

  constructor() {
    const gl = this.gl;
    gl.useProgram(this.webglProgram);
    this.buffers = createBuffersForCube(gl, createCubeData());

    // Save the attribute and uniform locations
    this.locations.model = gl.getUniformLocation(this.webglProgram, "model");
    this.locations.view = gl.getUniformLocation(this.webglProgram, "view");
    this.locations.projection = gl.getUniformLocation(
      this.webglProgram,
      "projection",
    );
    this.locations.position = gl.getAttribLocation(
      this.webglProgram,
      "position",
    );
    this.locations.color = gl.getAttribLocation(this.webglProgram, "color");

    // Tell WebGL to test the depth when drawing
    gl.enable(gl.DEPTH_TEST);
  }

  computeModelMatrix(now) {
    // Scale up
    const scaleMatrix = scale(5, 5, 5);
    // Fixed rotation
    const rotateXMatrix = rotateX(Math.PI * 0.2);
    // Fixed rotation
    const rotateYMatrix = rotateY(Math.PI * 0.2);
    // Multiply together, make sure and read them in opposite order
    this.transforms.model = multiplyArrayOfMatrices([
      rotateYMatrix, // step 3
      rotateXMatrix, // step 2
      scaleMatrix, // step 1
    ]);

    // Performance caveat: in real production code it's best not to create
    // new arrays and objects in a loop. This example chooses code clarity
    // over performance.
  }

  computeViewMatrix(now) {
    const zoomInAndOut = 5 * Math.sin(now * 0.002);

    // Move slightly down
    const position = translate(0, 0, -20 + zoomInAndOut);

    // Multiply together, make sure and read them in opposite order
    this.transforms.view = multiplyArrayOfMatrices([
      // Exercise: rotate the camera view
      position,
    ]);
  }

  computePerspectiveMatrix(scaleFactor) {
    const fieldOfViewInRadians = Math.PI * 0.5;
    const aspectRatio = window.innerWidth / window.innerHeight;
    const nearClippingPlaneDistance = 1;
    const farClippingPlaneDistance = 50;

    this.transforms.projection = perspective(
      fieldOfViewInRadians,
      aspectRatio,
      nearClippingPlaneDistance,
      farClippingPlaneDistance,
    );
  }

  draw() {
    const gl = this.gl;
    const now = Date.now();
    // Compute our matrices
    this.computeModelMatrix(now);
    this.computeViewMatrix(now);
    this.computePerspectiveMatrix(0.5);
    // Update the data going to the GPU
    // Setup the color uniform that will be shared across all triangles
    gl.uniformMatrix4fv(
      this.locations.model,
      false,
      new Float32Array(this.transforms.model),
    );
    gl.uniformMatrix4fv(
      this.locations.projection,
      false,
      new Float32Array(this.transforms.projection),
    );
    gl.uniformMatrix4fv(
      this.locations.view,
      false,
      new Float32Array(this.transforms.view),
    );

    // Set the positions attribute
    gl.enableVertexAttribArray(this.locations.position);
    gl.bindBuffer(gl.ARRAY_BUFFER, this.buffers.positions);
    gl.vertexAttribPointer(this.locations.position, 3, gl.FLOAT, false, 0, 0);

    // Set the colors attribute
    gl.enableVertexAttribArray(this.locations.color);
    gl.bindBuffer(gl.ARRAY_BUFFER, this.buffers.colors);
    gl.vertexAttribPointer(this.locations.color, 4, gl.FLOAT, false, 0, 0);

    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.buffers.elements);
    // Perform the actual draw
    gl.drawElements(gl.TRIANGLES, 36, gl.UNSIGNED_SHORT, 0);
    // Run the draw as a loop
    requestAnimationFrame(() => this.draw());
  }
}

const cube = new CubeDemo();
cube.draw();
```

Der Shader verwendet jetzt drei Matrizen.

```glsl
gl_Position = projection * view * model * vec4(position, 1.0);
```

```html hidden live-sample___view_matrix_ex
<!-- The vertex shader operates on individual vertices in our model data by setting gl_Position -->
<script id="vertex-shader" type="x-shader/x-vertex">
  // Each point has a position and color
  attribute vec3 position;
  attribute vec4 color;

  // The transformation matrices
  uniform mat4 model;
  uniform mat4 view;
  uniform mat4 projection;

  // Pass the color attribute down to the fragment shader
  varying vec4 vColor;

  void main() {
    // Pass the color down to the fragment shader
    vColor = color;

    // Read the multiplication in reverse order, the point is taken from
    // the original model space and moved into world space. It is then
    // projected into clip space as a homogeneous point. Generally the
    // W value will be something other than 1 at the end of it.
    gl_Position = projection * view * model * vec4(position, 1.0);
  }
</script>
```

Nach diesem Schritt wird die GPU-Pipeline die außer Reichweite befindlichen Vertizes abschneiden und das Modell an den Fragment-Shader senden zur Rasterung.

### Die Ergebnisse

{{EmbedLiveSample("view_matrix_ex", "", 600)}}

### Die Koordinatensysteme in Beziehung setzen

An diesem Punkt wäre es vorteilhaft, einen Schritt zurückzutreten, um die verschiedenen von uns verwendeten Koordinatensysteme zu betrachten und zu benennen. Zuerst einmal sind die Vertices des Würfels in **Modellraum** definiert. Um das Modell herum zu bewegen, müssen diese Vertizes in **Weltraum** umgewandelt werden, indem die Modellmatrix angewendet wird.

Modellraum → Modellmatrix → Weltraum

Die Kamera hat noch nichts gemacht, und die Punkte müssen erneut bewegt werden. Aktuell sind sie im Weltraum, aber sie müssen zum **Sichtraum** verschoben werden (mithilfe der Ansichtsmatrix), um die Kameraplatzierung darzustellen.

Weltraum → Ansichtsmatrix → Sichtraum

Schließlich muss eine **Projektions** (in unserem Fall die Perspektivprojektionsmatrix) hinzugefügt werden, um die Weltkoordinaten in Clipraum-Koordinaten zu überführen.

Sichtraum → Projektionsmatrix → Clipraum

### Übung

- Bewegen Sie die Kamera in der Szene herum.
- Fügen Sie einige Rotationsmatrizen zur Ansichtsmatrix hinzu, um sich umzusehen.
- Verfolgen Sie schließlich die Position der Maus. Verwenden Sie 2 Rotationsmatrizen, um die Kamera je nach Position der Maus des Benutzers auf dem Bildschirm nach oben und unten schauen zu lassen.

## Siehe auch

- [WebGL](/de/docs/Web/API/WebGL_API)
- [3D-Projektion](https://de.wikipedia.org/wiki/3D-Projektion)
