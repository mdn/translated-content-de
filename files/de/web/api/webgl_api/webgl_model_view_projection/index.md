---
title: WebGL-Modell-View-Projektion
slug: Web/API/WebGL_API/WebGL_model_view_projection
l10n:
  sourceCommit: 6f1b699dd8891431bbfe0bc3bb803f929fa6032e
---

{{DefaultAPISidebar("WebGL")}}

Dieser Artikel untersucht, wie man Daten innerhalb eines [WebGL](/de/docs/Web/API/WebGL_API)-Projekts projiziert, um sie korrekt auf dem Bildschirm darzustellen. Es wird vorausgesetzt, dass Sie Grundkenntnisse in der Matrizentheorie, insbesondere mit Translations-, Skalierungs- und Rotationsmatrizen, besitzen. Es erklärt die drei Kernmatrizen, die typischerweise beim Erstellen einer 3D-Szene verwendet werden: die Modell-, View- und Projektionsmatrix.

## Die Modell-, View- und Projektionsmatrizen

Individuelle Transformationen von Punkten und Polygonen im Raum in WebGL werden durch die grundlegenden Transformationsmatrizen wie Translation, Skalierung und Rotation gehandhabt. Diese Matrizen können zusammengesetzt und auf besondere Weise gruppiert werden, um sie nützlich für das Rendern komplizierter 3D-Szenen zu machen. Diese zusammengesetzten Matrizen verschieben letztendlich die ursprünglichen Modelldaten in einen speziellen Koordinatenraum, der als **Clippingraum** bekannt ist. Dies ist ein 2 Einheiten breiter Würfel, zentriert bei (0,0,0), mit Ecken, die von (-1,-1,-1) bis (1,1,1) reichen. Dieser Clippingraum wird zu einem 2D-Raum komprimiert und in ein Bild rasterisiert.

Die erste unten diskutierte Matrix ist die **Modellmatrix**, die definiert, wie Sie Ihre ursprünglichen Modelldaten nehmen und im 3D-Weltraum verschieben. Die **Projektionsmatrix** wird verwendet, um Weltkoordinaten in Clipping-Koordinaten zu konvertieren. Eine häufig verwendete Projektionsmatrix, die **perspektivische Projektionsmatrix**, wird verwendet, um die _Effekte_ einer typischen Kamera zu imitieren, die als Stellvertreter für den Betrachter in der 3D-virtuellen Welt dient. Die **View-Matrix** ist dafür verantwortlich, die Objekte in der Szene zu bewegen, um die Position der Kamera zu simulieren, was verändert, was der Betrachter aktuell sehen kann.

Die folgenden Abschnitte bieten einen tiefen Einblick in die Ideen hinter und die Implementierung der Modell-, View- und Projektionsmatrizen. Diese Matrizen sind zentral für das Bewegen von Daten auf dem Bildschirm und sind Konzepte, die über einzelne Frameworks und Engines hinausgehen.

## Clippingraum

In einem WebGL-Programm werden Daten typischerweise mit ihrem eigenen Koordinatensystem zur GPU hochgeladen, und dann transformiert der Vertex-Shader diese Punkte in ein spezielles Koordinatensystem, das als **Clippingraum** bekannt ist. Alle Daten, die über den Clippingraum hinausragen, werden abgeschnitten und nicht gerendert. Wenn ein Dreieck jedoch die Grenze dieses Raumes überschreitet, wird es in neue Dreiecke aufgeteilt, und nur die Teile der neuen Dreiecke, die im Clippingraum liegen, werden beibehalten.

![Ein 3D-Diagramm zeigt den Clippingraum in WebGL.](clip_space_graph.svg)

Die obige Grafik ist eine Visualisierung des Clippingraums, in den alle Punkte passen müssen. Es ist ein Würfel mit zwei Einheiten auf jeder Seite, mit einer Ecke bei (-1,-1,-1) und der gegenüberliegenden Ecke bei (1,1,1). Das Zentrum des Würfels ist der Punkt (0,0,0). Dieses 8 Kubikmeter Koordinatensystem, das vom Clippingraum verwendet wird, ist unter dem Begriff "Normierte Gerätekoordinaten" (engl. normalized device coordinates, NDC) bekannt. Möglicherweise stoßen Sie von Zeit zu Zeit auf diesen Begriff, während Sie WebGL-Code erforschen und bearbeiten.

In diesem Abschnitt werden wir unsere Daten direkt in das Koordinatensystem des Clippingraums setzen. Normalerweise werden Modelldaten verwendet, die in einem beliebigen Koordinatensystem vorliegen und dann mit einer Matrix transformiert werden, welche die Modellkoordinaten in das Clippingraum-Koordinatensystem konvertieren. Für dieses Beispiel ist es am einfachsten, zu veranschaulichen, wie Clippingraum funktioniert, indem man Modellkoordinatenwerte verwendet, die im Bereich von (-1,-1,-1) bis (1,1,1) liegen. Der folgende Code wird 2 Dreiecke erstellen, die ein Quadrat auf dem Bildschirm zeichnen werden. Die Z-Tiefe in den Quadraten bestimmt, was gezeichnet wird, wenn die Quadrate denselben Raum teilen. Kleinere Z-Werte werden über größeren Z-Werten gerendert.

<!-- Gemeinsame einrichtung -->

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

Dieses Beispiel erstellt ein benutzerdefiniertes `WebGLBox`-Objekt, das ein 2D-Quadrat auf dem Bildschirm zeichnen wird. Es ist als Klasse implementiert, die einen Konstruktor und eine `draw()`-Methode enthält, um ein Quadrat auf dem Bildschirm zu zeichnen:

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

Die Shader sind die Teile des Codes, die in GLSL geschrieben sind und unsere Datenpunkte letztendlich auf dem Bildschirm rendern. Zur Vereinfachung sind diese Shader in einem {{htmlelement("script")}}-Element gespeichert, das über die benutzerdefinierte Funktion `createWebGLProgramFromIds()` in das Programm eingebracht wird. Diese Funktion erledigt die Grundlagen des Nehmens von GLSL-Quellcode und kompiliert ihn zu einem WebGL-Programm. Es nimmt drei Parameter — den Kontext, in dem das Programm gerendert wird, die ID des {{htmlelement("script")}}-Elements, das den Vertex-Shader enthält, und die ID des {{htmlelement("script")}}-Elements, das den Fragment-Shader enthält. Diese Funktion wird hier nicht ausführlich erklärt; wenn Sie ihre Implementierung sehen möchten, klicken Sie auf "Play" im Codeblock. Der Vertex-Shader positioniert die Vertices, und der Fragment-Shader färbt jedes Pixel.

Schaun Sie sich zunächst den Vertex-Shader an, der die Vertices auf dem Bildschirm bewegen wird:

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

Als nächstes, um die Daten tatsächlich in Pixel zu rasterisieren, bewertet der Fragment-Shader alles auf Pixelbasis und legt eine einzige Farbe fest. Die GPU ruft die Shader-Funktion für jedes Pixel auf, das gerendert werden muss; die Aufgabe des Shaders ist es, die Farbe zurückzugeben, die für dieses Pixel verwendet werden soll.

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

Mit diesen Einstellungen ist es an der Zeit, direkt mit Clippingraum-Koordinaten auf den Bildschirm zu zeichnen.

```js live-sample___clip_space_ex
const box = new WebGLBox();
```

Zuerst zeichnen Sie ein rotes Quadrat in der Mitte.

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

Als nächstes zeichnen Sie ein grünes Quadrat oben und hinter dem roten Quadrat.

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

Schließlich wird zur Demonstration, dass tatsächlich eine Clipping stattfindet, dieses Quadrat nicht gezeichnet, da es vollständig außerhalb des Clippingraums liegt. Die Tiefe liegt außerhalb des Bereichs von -1,0 bis 1,0.

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

Eine hilfreiche Übung an diesem Punkt ist es, die Kästchen im Clippingraum zu verschieben, indem Sie den Code variieren, um ein Gefühl dafür zu bekommen, wie Punkte im Clippingraum abgeschnitten und bewegt werden. Versuchen Sie, ein Bild wie ein kantiges Smiley-Gesicht mit einem Hintergrund zu zeichnen.

## Homogene Koordinaten

Die Hauptzeile des vorhergehenden Clip-Space-Vertex-Shader enthält diesen Code:

```glsl
gl_Position = vec4(position, 1.0);
```

Die `position`-Variable wurde in der `draw()`-Methode definiert und als Attribut an den Shader übergeben. Dies ist ein dreidimensionaler Punkt, aber die `gl_Position`-Variable, die letztendlich durch die Pipeline weitergegeben wird, ist tatsächlich 4-dimensional — anstelle von `(x, y, z)` ist es `(x, y, z, w)`. Es gibt keinen Buchstaben nach `z`, daher wird diese vierte Dimension konventionell als `w` bezeichnet. Im obigen Beispiel wird die `w`-Koordinate auf 1.0 gesetzt.

Die offensichtliche Frage ist "Warum die zusätzliche Dimension?" Es stellt sich heraus, dass diese Hinzufügung viele nette Techniken zur Manipulation von 3D-Daten ermöglicht. Diese zusätzliche Dimension führt den Begriff der Perspektive in das Koordinatensystem ein; mit ihr kann man 3D-Koordinaten in den 2D-Raum abbilden — wodurch es möglich wird, dass zwei parallele Linien an einer Stelle zusammenlaufen, wenn sie in die Ferne rücken. Der Wert von `w` wird als Divisor für die anderen Komponenten der Koordinate verwendet, sodass die echten Werte von `x`, `y` und `z` als `x/w`, `y/w` und `z/w` berechnet werden (und `w` wird dann auch `w/w`, was 1 wird).

Ein dreidimensionaler Punkt wird in einem typischen kartesischen Koordinatensystem definiert. Die hinzugefügte vierte Dimension verändert diesen Punkt in eine [homogene Koordinate](https://en.wikipedia.org/wiki/Homogeneous_coordinates). Es stellt immer noch einen Punkt im 3D-Raum dar, und es kann leicht demonstriert werden, wie dieser Koordinatentyp durch ein Paar einfacher Funktionen konstruiert wird.

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

Wie bereits erwähnt und in den obigen Funktionen gezeigt, dividiert die w-Komponente die x, y und z-Komponenten. Wenn die w-Komponente eine andere als null reale Zahl ist, dann wird die homogene Koordinate leicht in einen normalen Punkt im kartesischen Raum übersetzt. Was passiert nun, wenn die w-Komponente null ist? In JavaScript würde der zurückgegebene Wert wie folgt aussehen.

```js
homogeneousToCartesian([10, 4, 5, 0]);
```

Dies ergibt: `[Infinity, Infinity, Infinity]`.

Diese homogene Koordinate repräsentiert einen Punkt im Unendlichen. Dies ist eine praktische Möglichkeit, einen Strahl zu repräsentieren, der von der Ursprungsrichtung in eine bestimmte Richtung schießt. Zusätzlich zu einem Strahl könnte es auch als Repräsentation eines Richtungsvektors betrachtet werden. Wenn diese homogene Koordinate mit einer Matrix mit einer Translation multipliziert wird, wird die Translation effektiv entfernt.

Wenn Zahlen auf Computern extrem groß (oder extrem klein) werden, beginnen sie weniger genau zu werden, weil es nur so viele Einsen und Nullen gibt, um sie darzustellen. Je mehr Operationen mit größeren Zahlen durchgeführt werden, desto mehr Fehler häufen sich im Ergebnis an. Die Division durch w kann effektiv die Präzision sehr großer Zahlen erhöhen, indem mit zwei potenziell kleineren, weniger fehleranfälligen Zahlen gearbeitet wird.

Der letzte Vorteil der Verwendung homogener Koordinaten ist, dass sie sehr gut für die Multiplikation mit 4x4-Matrizen geeignet sind. Ein Vertex muss mindestens eine der Dimensionen einer Matrix übereinstimmen, um mit ihm multipliziert werden zu können. Die 4x4-Matrix kann verwendet werden, um eine Vielzahl nützlicher Transformationen zu kodieren. In der Tat verwendet die typische perspektivische Projektionsmatrix die Division durch die w-Komponente, um ihre Transformation zu erreichen.

Das Abtrennen von Punkten und Polygonen aus dem Clip-Raum erfolgt, bevor die homogenen Koordinaten wieder in kartesische Koordinaten transformiert wurden (durch Division durch w). Dieser endgültige Raum wird als **normierte Gerätekoordinaten** oder NDC bezeichnet.

Um mit dieser Idee zu spielen, kann das vorherige Beispiel so modifiziert werden, dass die `w`-Komponente verwendet werden kann. Zusätzlich zur Änderung der `data`-Variable denken Sie daran, `vertexAttribPointer()` so zu ändern, dass 4 Komponenten (der zweite `size`-Parameter) anstelle von 3 verwendet werden.

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
  canvas = document.getElementById("canvas");
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

Dann verwendet der Vertex-Shader den übergebenen 4-dimensionalen Punkt.

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

Zuerst zeichnen wir ein rotes Rechteck in der Mitte, aber setzen W auf 0,7. Da die Koordinaten durch 0,7 dividiert werden, werden sie alle vergrößert.

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

Nun zeichnen wir ein grünes Quadrat oben, aber verkleinern es durch Setzen der w-Komponente auf 1,1

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

Dieses letzte Quadrat wird nicht gezeichnet, da es außerhalb des Clippingraums liegt. Die Tiefe liegt außerhalb des Bereichs -1,0 bis 1,0.

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

- Spielen Sie mit diesen Werten herum, um zu sehen, wie sie sich auf das, was auf dem Bildschirm dargestellt wird, auswirken. Beachten Sie, wie das zuvor abgeschnittene blaue Kästchen wieder in den Bereich zurückgebracht wird, indem die w-Komponente gesetzt wird.
- Versuchen Sie, ein neues Kästchen zu erstellen, das außerhalb des Clippingraums liegt, und bringen Sie es durch die Division durch w zurück in den Raum.

## Modelltransformation

Das Platzieren von Punkten direkt im Clippingraum ist von begrenztem Nutzen. In realen Anwendungen haben Sie nicht alle Quellkoordinaten bereits in Clippingraum-Koordinaten. Daher müssen Sie die Modelldaten und andere Koordinaten meistens in den Clippingraum transformieren. Der bescheidene Würfel ist ein einfaches Beispiel dafür, wie dies zu tun ist. Würfeldaten bestehen aus Vertex-Positionen, den Farben der Würfelflächen und der Reihenfolge der Vertex-Positionen, die die einzelnen Polygone bilden (in Gruppen von 3 Vertices, um die Dreiecke zu konstruieren, die die Würfelflächen bilden). Die Positionen und Farben werden in GL-Puffern gespeichert, als Attribute an den Shader gesendet und dann individuell bearbeitet.

Schließlich wird eine einzelne Modellmatrix berechnet und festgelegt. Diese Matrix repräsentiert die Transformationen, die an jedem Punkt des Modells durchgeführt werden müssen, um ihn in den richtigen Raum zu verschieben, und um alle anderen notwendigen Transformationen an jedem Punkt des Modells durchzuführen. Dies gilt nicht nur für jeden Vertex, sondern für jeden einzelnen Punkt auf jeder Oberfläche des Modells.

In diesem Fall wird für jeden Frame der Animation eine Reihe von Skalierungs-, Rotations- und Translationsmatrizen verwendet, um die Daten an die gewünschte Stelle im Clippingraum zu verschieben. Der Würfel ist so groß wie der Clippingraum (-1,-1,-1) bis (1,1,1), sodass er verkleinert werden muss, um nicht den gesamten Clippingraum zu füllen. Diese Matrix wird direkt an den Shader gesendet, nachdem sie zuvor in JavaScript multipliziert wurde.

Der folgende Codeausschnitt definiert eine Methode im `CubeDemo`-Objekt, die die Modellmatrix erstellt. Die neue Funktion sieht so aus (die Hilfsfunktionen werden im [Matrix-Mathematik für das Web](/de/docs/Web/API/WebGL_API/Matrix_math_for_the_web)-Kapitel vorgestellt):

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

Um dies im Shader zu verwenden, muss es an eine einheitliche Position gesetzt werden. Die Orte für die Uniformen werden im `locations`-Objekt unten gespeichert:

```js
this.locations.model = gl.getUniformLocation(webglProgram, "model");
```

Und schließlich wird die Uniform auf diesen Ort gesetzt. Dies übergibt die Matrix an die GPU.

```js
gl.uniformMatrix4fv(
  this.locations.model,
  false,
  new Float32Array(this.transforms.model),
);
```

```js hidden live-sample___model_transform_ex live-sample___divide_by_w_ex
class CubeDemo {
  canvas = document.getElementById("canvas");
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

Im Shader wird jeder Positions-Vertex zuerst in eine homogene Koordinate (ein `vec4`-Objekt) transformiert und dann mit der Modellmatrix multipliziert.

```glsl
gl_Position = model * vec4(position, 1.0);
```

> [!NOTE]
> In JavaScript erfordert die Matrixmultiplikation eine benutzerdefinierte Funktion, während sie im Shader mit dem einfachen `*`-Operator in die Sprache integriert ist.

Der vollständige Orchestrierungscode ist ausgeblendet. Wenn Sie interessiert sind, klicken Sie erneut auf "Play" in einem Codeblock in diesem Abschnitt, um ihn sich anzusehen.

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

Zu diesem Zeitpunkt ist der w-Wert des transformierten Punkts immer noch 1.0. Der Würfel hat immer noch keine Perspektive. Der nächste Abschnitt wird dieses Setup nehmen und die w-Werte modifizieren, um etwas Perspektive zu liefern.

### Übungen

- Verkleinern Sie das Kästchen mit der Skalierungsmatrix und platzieren Sie es an verschiedenen Stellen im Clippingraum.
- Versuchen Sie, es außerhalb des Clippingraums zu bewegen.
- Ändern Sie die Größe des Fensters und beobachten Sie, wie das Kästchen aus der Form gerät.
- Fügen Sie eine `rotateZ`-Matrix hinzu.

## Division durch W

Eine einfache Möglichkeit, etwas Perspektive auf unser Würfelmodell zu bekommen, besteht darin, die Z-Koordinate zu nehmen und in die w-Koordinate zu kopieren. Normalerweise wird bei der Umwandlung eines kartesischen Punktes in einen homogenen Punkt `(x,y,z,1)`, aber wir werden ihn in etwas wie `(x,y,z,z)` ändern. In Wirklichkeit möchten wir sicherstellen, dass z für Punkte, die im Sichtfeld liegen, größer als 0 ist, sodass wir es leicht modifizieren, indem wir den Wert auf `((1.0 + z) * scaleFactor)` ändern. Dies wird einen Punkt, der normalerweise im Clippingraum liegt (-1 bis 1), in einen Raum wie (0 bis 1) verschieben, abhängig davon, was der Skalierungsfaktor ist. Der Skalierungsfaktor ändert den endgültigen w-Wert, sodass er insgesamt entweder größer oder kleiner wird.

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

Sehen Sie das kleine Dreieck an der Ecke, das zur Kamera zeigt? Hier ist ein Screenshot, wann es erscheint:

![Ein kleines Dreieck erscheint in der oberen rechten Ecke](part4.png)

Das ist eine zusätzliche Fläche, die unserem Objekt hinzugefügt wurde, weil die Rotation unserer Form dazu geführt hat, dass diese Ecke außerhalb des Clippingraums herausragt, wodurch die Ecke abgeschnitten wird. Siehe [Perspektivische Projektionsmatrix](#perspektivische_projektionsmatrix) unten für eine Einführung, wie Sie komplexere Matrizen verwenden können, um das Clipping zu steuern und zu verhindern.

### Übung

Wenn das etwas abstrakt klingt, öffnen Sie den Vertex-Shader und spielen Sie mit dem Skalierungsfaktor herum und beobachten Sie, wie er die Vertices mehr zur Oberfläche hin schrumpft. Ändern Sie die w-Komponentenwerte vollständig für wirklich abgefahrene Darstellungen des Raumes.

Im nächsten Abschnitt werden wir diesen Schritt des Kopierens von Z in den w-Bereich nehmen und ihn in eine Matrix verwandeln.

## Einfache Projektion

Der letzte Schritt des Ausfüllens der w-Komponente kann tatsächlich mit einer einfachen Matrix erreicht werden. Beginnen Sie mit der Identitätsmatrix:

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

Verschieben Sie dann die 1 der letzten Spalte um einen Platz nach oben.

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

Im letzten Beispiel haben wir jedoch `(z + 1) * scaleFactor` durchgeführt:

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

Wenn wir es noch weiter aufbrechen, können wir sehen, wie dies funktioniert:

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

Dann den Skalierungsfaktor herausfaktorieren, erhalten wir dies:

```js
const w = (4 + 1) * scaleFactor;
```

Dies ist genau das gleiche wie das `(z + 1) * scaleFactor`, das wir im vorherigen Beispiel verwendet haben.

Im Box-Demo wird eine zusätzliche `computeSimpleProjectionMatrix()`-Methode hinzugefügt. Dies wird in der `draw()`-Methode aufgerufen und hat den Skalierungsfaktor übergeben. Das Ergebnis sollte identisch mit dem letzten Beispiel sein:

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
  canvas = document.getElementById("canvas");
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

Obwohl das Ergebnis identisch ist, besteht der wichtige Schritt hier im Vertex-Shader. Anstatt den Vertex direkt zu modifizieren, wird er mit einer zusätzlichen **[Projektionsmatrix](#the_model_view_and_projection_matrices)** multipliziert, die (wie der Name schon sagt) 3D-Punkte auf eine 2D-Zeichenfläche projiziert:

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

## Der Sichtfrustum

Bevor wir fortfahren, wie man eine perspektivische Projektionsmatrix berechnet, müssen wir das Konzept des **[Sichtfrustum](https://en.wikipedia.org/wiki/Viewing_frustum)** (auch bekannt als **Sichtfrust") vorstellen. Dies ist der Bereich des Raumes, dessen Inhalt dem Benutzer aktuell sichtbar ist. Es ist der 3D-Raum, der durch das Sichtfeld und die Abstände definiert ist, die als die nächstgelegenen und am weitesten entfernten Inhalte angegeben werden, die gerendert werden sollten.

Beim Rendern müssen wir bestimmen, welche Polygone gerendert werden müssen, um die Szene darzustellen. Das ist das, was das Sichtfrustum definiert. Aber was ist ein Frustum überhaupt?

Ein [Frustum](https://en.wikipedia.org/wiki/Frustum) ist der 3D-Körper, der entsteht, wenn man einen beliebigen Körper nimmt und ihn mit zwei parallelen Ebenen abteilt. Betrachten Sie unsere Kamera, die einen Bereich betrachtet, der direkt vor ihrer Linse beginnt und in die Ferne reicht. Der sichtbare Bereich ist eine vierseitige Pyramide mit ihrem Gipfel an der Linse, ihren vier Seiten, die dem Umfang des peripheren Sichtbereichs entsprechen, und ihrer Basis am entferntesten Punkt, den sie sehen kann, wie hier:

![Eine Darstellung des gesamten Sichtfeldes einer Kamera. Dieser Bereich ist eine vierseitige Pyramide mit ihrem Gipfel an der Linse und ihrer Basis an der maximal sichtbaren Entfernung der Welt.](fullcamerafov.svg)

Wenn wir dies verwenden würden, um die Polygone zu bestimmen, die jedes Bild gerendert werden müssen, müsste unser Renderer jedes Polygon innerhalb dieser Pyramide rendern, bis ins Unendliche, einschließlich auch der sehr nahe an der Linse — wahrscheinlich zu nah, um nützlich zu sein (und sicherlich inklusive Dinge, die so nahe sind, dass ein echter Mensch in derselben Einstellung nicht darauf fokussieren könnte).

Der erste Schritt zur Reduzierung der Anzahl von Polygonen, die wir berechnen und rendern müssen, besteht darin, diese Pyramide in das Sichtfrustum zu verwandeln. Die beiden Ebenen, die wir verwenden, um Vertices abzuschneiden und die Polygonanzahl zu reduzieren, sind die **nahen Abwendungsebenen** und die **fernen Abwendungsebenen**.

In WebGL werden die nahen und fernen Abwendungsebenen definiert, indem der Abstand von der Linse zum nächsten Punkt auf einer Ebene angegeben wird, die senkrecht zur Blickrichtung steht. Alles, was näher an der Linse ist als die nahe Abwendungsebene oder weiter von ihr entfernt als die ferne Abwendungsebene, wird entfernt. Dies ergibt das Sichtfrustum, das so aussieht:

![Eine Darstellung des Kamera-Blickfrustums; die nahen und fernen Ebenen haben einen Teil des Volumens entfernt und die Polygonanzahl verringert.](camera_view_frustum.svg)

Das Set von Objekten, das für jeden Frame gerendert werden soll, wird im Wesentlichen erstellt, indem man mit dem Set aller Objekte in der Szene beginnt. Dann werden alle Objekte, die _vollständig_ außerhalb des Sichtfrustums liegen, aus dem Set entfernt. Als Nächstes werden Objekte abgeschnitten, die teilweise über das Sichtfrustum hinausgehen, indem alle Polygone, die vollständig außerhalb des Frustums liegen, abgeschnitten werden, sowie die Polygone, die über das Frustum hinausgehen, so abgeflacht werden, dass sie es nicht mehr verlassen.

Nachdem dies geschehen ist, haben wir das größte Set von Polygonen, das vollständig innerhalb des Sichtfrustums liegt. Diese Liste wird normalerweise weiter reduziert, indem Prozesse wie [Back-Face-Abschattung](https://en.wikipedia.org/wiki/Back-face_culling) (Entfernen von Polygonen, deren Rückseite zur Kamera gerichtet ist) und Ausblendung von Okkultationen mit [verdeckte Flächenermittlung](https://en.wikipedia.org/wiki/Hidden-surface_determination) (Entfernen von Polygonen, die nicht gesehen werden können, weil sie vollständig durch Polygone blockiert sind, die näher an der Linse sind) angewendet werden.

## Perspektivische Projektionsmatrix

Bis zu diesem Punkt haben wir unsere eigene 3D-Rendering-Umgebung Schritt für Schritt aufgebaut. Allerdings hat der aktuelle Code, so wie wir ihn aufgebaut haben, einige Probleme. Zum einen wird das Bild verzerrt, wann immer wir unser Fenster neu dimensionieren. Ein weiteres ist, dass unsere einfache Projektion nicht mit einem breiten Bereich von Werten für die Szenendaten umgeht. Die meisten Szenen arbeiten nicht im Clippingraum. Es wäre hilfreich, den relevanten Abstand zur Szene zu definieren, damit keine Präzision bei der Umwandlung der Zahlen verloren geht. Schließlich ist es sehr hilfreich, eine genaue Kontrolle darüber zu haben, welche Punkte im Clip-Raum platziert werden und welche nicht. In den vorherigen Beispielen werden die Ecken des Würfels gelegentlich abgeschnitten.

Die **perspektivische Projektionsmatrix** ist eine Art von Projektionsmatrix, die all diese Anforderungen erfüllt. Die Mathematik fängt auch an, etwas eindringlicher zu werden und wird in diesen Beispielen nicht vollständig erklärt. Kurz gesagt, es kombiniert die Division durch w (wie in den vorherigen Beispielen) mit einigen genialen Manipulationen basierend auf [ähnlichen Dreiecken](https://en.wikipedia.org/wiki/Similarity_%28geometry%29). Wenn Sie die vollständige Erklärung über die Mathematik dahinter lesen möchten, schauen Sie sich einige der folgenden Links an:

- [OpenGL-Projektionsmatrix](https://www.songho.ca/opengl/gl_projectionmatrix.html)
- [Perspektivische Projektion](https://ogldev.org/)
- [Versuch, die Mathematik hinter der perspektivischen Projektionsmatrix in WebGL zu verstehen](https://stackoverflow.com/questions/28286057/trying-to-understand-the-math-behind-the-perspective-matrix-in-webgl/28301213#28301213)

Ein wichtiger Punkt, der bei der perspektivischen Projektionsmatrix, die unten verwendet wird, zu beachten ist, dass sie die z-Achse umdreht. Im Clippingraum geht z+ vom Betrachter weg, während mit dieser Matrix z auf den Betrachter zugeht.

Der Grund, die z-Achse umzukehren, ist, dass das Clippingraum-Koordinatensystem ein linkshändiges Koordinatensystem ist (wobei die z-Achse vom Betrachter weg und in den Bildschirm zeigt), während die Konvention in Mathematik, Physik und 3D-Modellierung sowie für das View/Eye-Koordinatensystem in OpenGL darin besteht, ein rechtshändiges Koordinatensystem zu verwenden (z-Achse zeigt aus dem Bildschirm auf den Betrachter zu). Mehr dazu in den entsprechenden Wikipedia-Artikeln: [Kartesisches Koordinatensystem](https://en.wikipedia.org/wiki/Cartesian_coordinate_system#Orientation_and_handedness), [Rechte-Hand-Regel](https://en.wikipedia.org/wiki/Right-hand_rule).

Werfen wir einen Blick auf eine `perspective()`-Funktion, die die perspektivische Projektionsmatrix berechnet.

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

Die vier Parameter dieser Funktion sind:

- `fieldOfViewInRadians`
  - : Ein Winkel, angegeben in Radiant, der angibt, wie viel von der Szene gleichzeitig für den Betrachter sichtbar ist. Je größer die Zahl ist, desto mehr ist durch die Kamera sichtbar. Die Geometrie an den Rändern wird mehr und mehr verzerrt, was einem Weitwinkelobjektiv entspricht. Wenn das Sichtfeld größer ist, werden die Objekte normalerweise kleiner. Wenn das Sichtfeld kleiner ist, kann die Kamera weniger und weniger in der Szene sehen. Die Objekte werden viel weniger durch Perspektive verzerrt und Objekte scheinen viel näher an die Kamera gerückt zu sein.
- `aspectRatio`
  - : Das Seitenverhältnis der Szene, das gleich der Breite geteilt durch die Höhe ist. In diesen Beispielen ist das die Fensterbreite geteilt durch die Fensterhöhe. Die Einführung dieses Parameters löst schließlich das Problem, dass das Modell verzerrt wird, wenn die Kanvasgröße geändert und umgeformt wird.
- `nearClippingPlaneDistance`
  - : Eine positive Zahl, die den Abstand in den Bildschirm zu einer Ebene, die senkrecht zum Boden steht, angibt, näher als die alles abgeschnitten wird. Dies wird auf -1 im Clippingraum gemappt und sollte nicht auf 0 gesetzt werden.
- `farClippingPlaneDistance`
  - : Eine positive Zahl, die den Abstand zur Ebene angibt, jenseits der die Geometrie abgeschnitten wird. Dies wird auf 1 im Clippingraum gemappt. Dieser Wert sollte in einem vernünftigen Abstand zur Geometrie gehalten werden, um Präzisionsfehler beim Rendern zu vermeiden.

In der neuesten Version des Box-Demos wurde die `computeSimpleProjectionMatrix()`-Methode durch die `computePerspectiveMatrix()`-Methode ersetzt.

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
  canvas = document.getElementById("canvas");
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

Der Shader-Code ist identisch mit dem des vorherigen Beispiels:

```glsl
gl_Position = projection * model * vec4(position, 1.0);
```

Zusätzlich (nicht gezeigt) wurden die Positions- und Skalierungsmatrizen des Modells so geändert, dass es aus dem Clippingraum heraus und in das größere Koordinatensystem gebracht wird.

### Die Ergebnisse

{{EmbedLiveSample("projection_matrix_ex", "", 600)}}

### Übungen

- Experimentieren Sie mit den Parametern der perspektivischen Projektionsmatrix und der Modellmatrix.
- Ersetzen Sie die perspektivische Projektionsmatrix durch [orthografische Projektion](https://en.wikipedia.org/wiki/Orthographic_projection). In dem geteilten MDN-WebGL-Code finden Sie die `MDN.orthographicMatrix()`. Diese kann die `MDN.perspectiveMatrix()`-Funktion in `CubeDemo.prototype.computePerspectiveMatrix()` ersetzen.

## View-Matrix

Während einige Grafikbibliotheken eine virtuelle Kamera haben, die positioniert und auf die Szene gerichtet werden kann, hat OpenGL (und dadurch WebGL) keine. Hier kommt die **View-Matrix** ins Spiel. Ihre Aufgabe ist es, die Objekte in der Szene zu übersetzen, zu drehen und zu skalieren, sodass sie sich im richtigen Verhältnis zum Betrachter befinden, basierend auf der Position und Orientierung des Betrachters.

### Eine Kamera simulieren

Dies macht sich einen der grundlegenden Aspekte der speziellen Relativitätstheorie von Einstein zunutze: das Prinzip der Bezugssysteme und der relativen Bewegung sagt, dass man aus der Perspektive eines Betrachters das Ändern der Position und Orientierung des Betrachters simulieren kann, indem man die entgegengesetzte Änderung auf die Objekte in der Szene anwendet. In beiden Fällen erscheint das Ergebnis dem Betrachter identisch.

Betrachten Sie ein Kästchen, das auf einem Tisch steht, und eine Kamera, die auf dem Tisch einen Meter entfernt positioniert und auf das Kästchen gerichtet ist. Dann stellen Sie sich vor, die Kamera vom Kästchen weg zu bewegen, bis sie zwei Meter entfernt ist (indem Sie einen Meter zur Z-Position der Kamera hinzufügen), und dann sie 10 Zentimeter nach links zu schieben. Auf diese Weise entfernt sich das Kästchen von der Kamera um diesen Betrag und rutscht leicht nach rechts, wodurch es für die Kamera kleiner erscheint und ein kleiner Teil seiner linken Seite exponiert wird.

Setzen wir jetzt die Szene zurück und platzieren das Kästchen wieder an seinem Ausgangspunkt, wobei die Kamera zwei Meter entfernt und direkt auf das Kästchen gerichtet ist. Diesmal kann die Kamera jedoch nicht bewegt oder gedreht werden, da sie auf dem Tisch festgemacht ist. Das ist bei WebGL so. Wie simulieren wir also das Bewegen der Kamera durch den Raum?

Anstatt die Kamera rückwärts und nach links zu bewegen, wenden wir die umgekehrte Transformation auf das Kästchen an: Wir bewegen das _Kästchen_ einen Meter rückwärts und dann 10 Zentimeter nach rechts. Das Ergebnis ist aus der Perspektive beider Objekte identisch.

Der letzte Schritt in all dem ist die Erstellung der **View-Matrix**, die die Objekte in der Szene so transformiert, dass sie positioniert sind, um die aktuelle Position und Orientierung der Kamera zu simulieren. Unser bisheriger Code kann den Würfel im Weltraum bewegen und alles projizieren, um Perspektive zu haben, aber wir können die Kamera noch immer nicht bewegen.

Stellen Sie sich vor, Sie drehen einen Film mit einer physischen Kamera. Sie haben die Freiheit, die Kamera grundsätzlich überall zu platzieren, und die Kamera in jede Richtung zu richten, die Sie wählen. Um dies in 3D-Grafiken zu simulieren, verwenden wir eine View-Matrix, um die Position und Drehung dieser physischen Kamera zu simulieren.

Im Gegensatz zur Modellmatrix, die die Modell-Vertices direkt transformiert, bewegt die View-Matrix eine abstrakte Kamera umher. In Wirklichkeit bewegt der Vertex-Shader immer noch nur die Modelle, während die "Kamera" an Ort und Stelle bleibt. Damit dies korrekt funktioniert, muss die umgekehrte Transformationsmatrix verwendet werden. Die umgekehrte Matrix kehrt im Wesentlichen eine Transformation um, sodass wenn wir die Kameraansicht nach vorne bewegen, die umgekehrte Matrix die Objekte in der Szene nach hinten bewegt.

Die folgende `computeViewMatrix()`-Methode animiert die View-Matrix, indem sie sich ein- und auswärts sowie links und rechts bewegt.

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
  canvas = document.getElementById("canvas");
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

Der Shader verwendet nun drei Matrizen.

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

Nach diesem Schritt wird die GPU-Pipeline die aus dem Bereich liegenden Vertices ausschneiden und das Modell zum Fragment-Shader zum Rasterisieren senden.

### Die Ergebnisse

{{EmbedLiveSample("view_matrix_ex", "", 600)}}

### Beziehung der Koordinatensysteme

An diesem Punkt wäre es vorteilhaft, einen Schritt zurückzutreten und die verschiedenen Koordinatensysteme, die wir verwenden, zu betrachten und zu kennzeichnen. Zuerst einmal werden die Vertices des Würfels in **Modellraum** definiert. Um das Modell in der Szene zu bewegen, müssen diese Vertices in den **Weltraum** konvertiert werden, indem die Modellmatrix angewendet wird.

Modellraum → Modellmatrix → Weltraum

Die Kamera hat noch nichts getan, und die Punkte müssen erneut verschoben werden. Derzeit befinden sie sich im Weltraum, aber sie müssen in den **Altersraum** verschoben werden (mit der Altersmatrix), um die Platzierung der Kamera darzustellen.

Weltraum → Altersmatrix → Altersraum

Schließlich muss eine **Projektion** hinzugefügt werden (in unserem Fall die perspektivische Projektionsmatrix), um die Weltkoordinaten in Clipperraum-Koordinaten zu verwandeln.

Altersraum → Projektionsmatrix → Clipperraum

### Übung

- Bewegen Sie die Kamera in der Szene herum.
- Fügen Sie der View-Matrix einige Drehungsmatrizen hinzu, um sich umzuschauen.
- Schließlich verfolgen Sie die Position der Maus. Verwenden Sie 2 Drehungsmatrizen, um die Ansicht der Kamera nach oben und unten auf der Basis des Bildschirms positiv zu wenden.

## Siehe auch

- [WebGL](/de/docs/Web/API/WebGL_API)
- [3D-Projektion](https://en.wikipedia.org/wiki/3D_projection)
