---
title: Erstellen von 3D-Objekten mit WebGL
slug: Web/API/WebGL_API/Tutorial/Creating_3D_objects_using_WebGL
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{DefaultAPISidebar("WebGL")}} {{PreviousNext("Web/API/WebGL_API/Tutorial/Animating_objects_with_WebGL", "Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL")}}

Lassen Sie uns unsere quadratische Fläche in drei Dimensionen bringen, indem wir fünf weitere Flächen hinzufügen, um einen Würfel zu erstellen. Um dies effizient zu tun, wechseln wir von der direkten Verwendung der Vertices beim Zeichnen mit der Methode [`gl.drawArrays()`](/de/docs/Web/API/WebGLRenderingContext/drawArrays) zur Nutzung des Vertex-Arrays als Tabelle, und verweisen auf einzelne Vertices in dieser Tabelle, um die Positionen der Vertices jeder Fläche zu definieren, indem wir [`gl.drawElements()`](/de/docs/Web/API/WebGLRenderingContext/drawElements) aufrufen.

Bedenken Sie: Jede Fläche erfordert vier Vertices, um sie zu definieren, aber jeder Vertex wird von drei Flächen geteilt. Wir können deutlich weniger Daten austauschen, indem wir ein Array mit allen 24 Vertices aufbauen und dann auf jeden Vertex über seinen Index in diesem Array verweisen, anstatt ganze Koordinatensätze herumzuschieben. Wenn Sie sich fragen, warum wir 24 Vertices benötigen und nicht nur 8, liegt das daran, dass jede Ecke zu drei Flächen mit unterschiedlichen Farben gehört und ein einzelner Vertex eine bestimmte Farbe haben muss; daher werden wir drei Kopien jedes Vertexes in drei verschiedenen Farben erstellen, eine für jede Fläche.

## Definieren der Positionen der Vertices des Würfels

Zuerst bauen wir den Vertex-Positionspuffer des Würfels, indem wir den Code in `initBuffers()` aktualisieren. Das ist fast dasselbe wie bei der quadratischen Fläche, aber etwas länger, da es 24 Vertices gibt (4 pro Seite).

> [!NOTE]
> Ersetzen Sie in der Funktion `initPositionBuffer()` Ihres "init-buffers.js"-Moduls die Deklaration von `positions` mit diesem Code:

```js
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
```

Da wir einen z-Komponenten zu unseren Vertices hinzugefügt haben, müssen wir die `numComponents` unseres `vertexPosition`-Attributs auf 3 aktualisieren.

> [!NOTE]
> Ändern Sie in der Funktion `setPositionAttribute()` Ihres "draw-scene.js"-Moduls die Konstante `numComponents` von `2` auf `3`:

```js
const numComponents = 3;
```

## Definieren der Farben der Vertices

Wir müssen auch ein Array von Farben für jeden der 24 Vertices erstellen. Dieser Code beginnt mit der Definition einer Farbe für jede Fläche und verwendet dann eine Schleife, um ein Array aller Farben für die Vertices zusammenzustellen.

> [!NOTE]
> Ersetzen Sie in der Funktion `initColorBuffer()` Ihres "init-buffers.js"-Moduls die Deklaration von `colors` mit diesem Code:

```js
const faceColors = [
  [1.0, 1.0, 1.0, 1.0], // Front face: white
  [1.0, 0.0, 0.0, 1.0], // Back face: red
  [0.0, 1.0, 0.0, 1.0], // Top face: green
  [0.0, 0.0, 1.0, 1.0], // Bottom face: blue
  [1.0, 1.0, 0.0, 1.0], // Right face: yellow
  [1.0, 0.0, 1.0, 1.0], // Left face: purple
];

// Convert the array of colors into a table for all the vertices.

var colors = [];

for (var j = 0; j < faceColors.length; ++j) {
  const c = faceColors[j];
  // Repeat each color four times for the four vertices of the face
  colors = colors.concat(c, c, c, c);
}
```

## Definieren des Element-Arrays

Sobald die Vertex-Arrays erstellt sind, müssen wir das Element-Array aufbauen.

> [!NOTE]
> Fügen Sie in Ihrem "init-buffer.js"-Modul die folgende Funktion hinzu:

```js
function initIndexBuffer(gl) {
  const indexBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);

  // This array defines each face as two triangles, using the
  // indices into the vertex array to specify each triangle's
  // position.

  const indices = [
    0,
    1,
    2,
    0,
    2,
    3, // front
    4,
    5,
    6,
    4,
    6,
    7, // back
    8,
    9,
    10,
    8,
    10,
    11, // top
    12,
    13,
    14,
    12,
    14,
    15, // bottom
    16,
    17,
    18,
    16,
    18,
    19, // right
    20,
    21,
    22,
    20,
    22,
    23, // left
  ];

  // Now send the element array to GL

  gl.bufferData(
    gl.ELEMENT_ARRAY_BUFFER,
    new Uint16Array(indices),
    gl.STATIC_DRAW,
  );

  return indexBuffer;
}
```

Das `indices`-Array definiert jede Fläche als ein Paar von Dreiecken und gibt die Vertices jedes Dreiecks als Index in die Vertex-Arrays des Würfels an. So wird der Würfel als eine Sammlung von 12 Dreiecken beschrieben.

Als nächstes müssen Sie diese neue Funktion aus `initBuffers()` aufrufen und den Puffer, den sie erstellt, zurückgeben.

> [!NOTE]
> Fügen Sie am Ende der Funktion `initBuffers()` Ihres "init-buffers.js"-Moduls den folgenden Code hinzu, und ersetzen Sie die bestehende `return`-Anweisung:

```js
const indexBuffer = initIndexBuffer(gl);

return {
  position: positionBuffer,
  color: colorBuffer,
  indices: indexBuffer,
};
```

## Zeichnen des Würfels

Als nächstes müssen wir Code zu unserer Funktion `drawScene()` hinzufügen, um den Indexpuffer des Würfels zu zeichnen, indem neue Aufrufe von [`gl.bindBuffer()`](/de/docs/Web/API/WebGLRenderingContext/bindBuffer) und [`gl.drawElements()`](/de/docs/Web/API/WebGLRenderingContext/drawElements) hinzugefügt werden.

> [!NOTE]
> Fügen Sie in Ihrer `drawScene()`-Funktion den folgenden Code direkt vor der `gl.useProgram`-Zeile hinzu:

```js
// Tell WebGL which indices to use to index the vertices
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffers.indices);
```

> [!NOTE]
> Ersetzen Sie in der Funktion `drawScene()` Ihres "draw-scene.js"-Moduls den Block direkt nach den zwei `gl.uniformMatrix4fv`-Aufrufen, der die `gl.drawArrays()`-Zeile enthält, durch den folgenden Block:

```js
{
  const vertexCount = 36;
  const type = gl.UNSIGNED_SHORT;
  const offset = 0;
  gl.drawElements(gl.TRIANGLES, vertexCount, type, offset);
}
```

Da jede Fläche unseres Würfels aus zwei Dreiecken besteht, gibt es 6 Vertices pro Seite oder 36 Vertices insgesamt im Würfel, obwohl viele davon Duplikate sind.

Schließlich lassen Sie uns unsere Variable `squareRotation` durch `cubeRotation` ersetzen und eine zweite Rotation um die x-Achse hinzufügen.

> [!NOTE]
> Ersetzen Sie zu Beginn Ihrer "webgl-demo.js"-Datei die Deklaration von `squareRotation` durch diese Zeile:

```js
let cubeRotation = 0.0;
```

> [!NOTE]
> Ersetzen Sie in Ihrer `drawScene()`-Funktionsdeklaration `squareRotation` durch `cubeRotation`:

```js-nolint
function drawScene(gl, programInfo, buffers, cubeRotation) {
```

> [!NOTE]
> Ersetzen Sie in Ihrer `drawScene()`-Funktion den Aufruf von `mat4.rotate` durch den folgenden Code:

```js
mat4.rotate(
  modelViewMatrix, // destination matrix
  modelViewMatrix, // matrix to rotate
  cubeRotation, // amount to rotate in radians
  [0, 0, 1],
); // axis to rotate around (Z)
mat4.rotate(
  modelViewMatrix, // destination matrix
  modelViewMatrix, // matrix to rotate
  cubeRotation * 0.7, // amount to rotate in radians
  [0, 1, 0],
); // axis to rotate around (Y)
mat4.rotate(
  modelViewMatrix, // destination matrix
  modelViewMatrix, // matrix to rotate
  cubeRotation * 0.3, // amount to rotate in radians
  [1, 0, 0],
); // axis to rotate around (X)
```

> [!NOTE]
> Ersetzen Sie in Ihrer `main()`-Funktion den Code, der `drawScene()` aufruft und `squareRotation` aktualisiert, um stattdessen `cubeRotation` zu übergeben und zu aktualisieren:

```js
drawScene(gl, programInfo, buffers, cubeRotation);
cubeRotation += deltaTime;
```

An diesem Punkt haben wir nun einen animierten Würfel, der rotiert und dessen sechs Flächen recht lebhaft gefärbt sind.

{{EmbedGHLiveSample('dom-examples/webgl-examples/tutorial/sample5/index.html', 670, 510) }}

[Sehen Sie sich den kompletten Code an](https://github.com/mdn/dom-examples/tree/main/webgl-examples/tutorial/sample5) | [Öffnen Sie diese Demo in einer neuen Seite](https://mdn.github.io/dom-examples/webgl-examples/tutorial/sample5/)

{{PreviousNext("Web/API/WebGL_API/Tutorial/Animating_objects_with_WebGL", "Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL")}}
