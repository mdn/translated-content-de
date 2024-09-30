---
title: Erstellen von 3D-Objekten mit WebGL
slug: Web/API/WebGL_API/Tutorial/Creating_3D_objects_using_WebGL
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{DefaultAPISidebar("WebGL")}} {{PreviousNext("Web/API/WebGL_API/Tutorial/Animating_objects_with_WebGL", "Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL")}}

Lassen Sie uns unser quadratisches Objekt in drei Dimensionen erweitern, indem wir fünf weitere Seiten hinzufügen, um einen Würfel zu erstellen. Dazu wechseln wir von der direkten Verwendung von Vertices mit der Methode [`gl.drawArrays()`](/de/docs/Web/API/WebGLRenderingContext/drawArrays) zur Nutzung des Vertex-Arrays als Tabelle. Wir verweisen auf einzelne Vertices in dieser Tabelle, um die Positionen der Vertices jeder Seite zu definieren, indem wir [`gl.drawElements()`](/de/docs/Web/API/WebGLRenderingContext/drawElements) aufrufen.

Überlegen Sie: Jede Seite erfordert vier Vertices, aber jeder Vertex wird von drei Seiten geteilt. Wir können viel weniger Daten herumreichen, indem wir ein Array aus allen 24 Vertices erstellen und dann auf jeden Vertex durch seinen Index in diesem Array verweisen, anstatt ganze Koordinatensätze zu verschieben. Falls Sie sich fragen, warum wir 24 Vertices und nicht nur 8 benötigen – das liegt daran, dass jede Ecke drei Seiten mit unterschiedlichen Farben hat, und ein einzelner Vertex eine einzige spezifische Farbe haben muss. Daher erstellen wir drei Kopien jedes Vertex in drei verschiedenen Farben, eine für jede Seite.

## Definieren der Positionen der Würfel-Vertices

Zuerst erstellen wir den Positionspuffer der Würfel-Vertices, indem wir den Code in `initBuffers()` aktualisieren. Dies ähnelt dem Vorgehen beim quadratischen Objekt, ist jedoch etwas länger, da es 24 Vertices gibt (4 pro Seite).

> [!NOTE]
> Ersetzen Sie in der Funktion `initPositionBuffer()` Ihres Moduls "init-buffers.js" die Deklaration von `positions` durch diesen Code:

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

Da wir eine z-Komponente zu unseren Vertices hinzugefügt haben, müssen wir die `numComponents` unseres `vertexPosition`-Attributs auf 3 aktualisieren.

> [!NOTE]
> Ändern Sie in der Funktion `setPositionAttribute()` Ihres Moduls "draw-scene.js" die Konstante `numComponents` von `2` zu `3`:

```js
const numComponents = 3;
```

## Definieren der Farben der Vertices

Wir müssen auch ein Array von Farben für jeden der 24 Vertices erstellen. Dieser Code beginnt mit der Definition einer Farbe für jede Seite und verwendet dann eine Schleife, um ein Array aller Farben für jeden der Vertices zusammenzustellen.

> [!NOTE]
> Ersetzen Sie in der Funktion `initColorBuffer()` Ihres Moduls "init-buffers.js" die Deklaration von `colors` durch diesen Code:

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

Sobald die Vertex-Arrays erstellt sind, müssen wir das Element-Array erstellen.

> [!NOTE]
> Fügen Sie in Ihrem Modul "init-buffer.js" die folgende Funktion hinzu:

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

Das `indices`-Array definiert jede Seite als Paar von Dreiecken und spezifiziert die Vertices jedes Dreiecks als Index in die Vertex-Arrays des Würfels. Somit wird der Würfel als Sammlung von 12 Dreiecken beschrieben.

Nun müssen Sie diese neue Funktion aus `initBuffers()` aufrufen und den von ihr erzeugten Puffer zurückgeben.

> [!NOTE]
> Fügen Sie am Ende der `initBuffers()`-Funktion Ihres Moduls "init-buffers.js" den folgenden Code hinzu und ersetzen Sie die vorhandene `return`-Anweisung:

```js
const indexBuffer = initIndexBuffer(gl);

return {
  position: positionBuffer,
  color: colorBuffer,
  indices: indexBuffer,
};
```

## Zeichnen des Würfels

Als Nächstes müssen wir Code in unsere `drawScene()`-Funktion hinzufügen, um den Indexpuffer des Würfels zu verwenden, und neue Aufrufe von [`gl.bindBuffer()`](/de/docs/Web/API/WebGLRenderingContext/bindBuffer) und [`gl.drawElements()`](/de/docs/Web/API/WebGLRenderingContext/drawElements) hinzufügen.

> [!NOTE]
> Fügen Sie in Ihrer `drawScene()`-Funktion den folgenden Code direkt vor der `gl.useProgram`-Zeile hinzu:

```js
// Tell WebGL which indices to use to index the vertices
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffers.indices);
```

> [!NOTE]
> Ersetzen Sie in der `drawScene()`-Funktion Ihres Moduls "draw-scene.js" den Block direkt nach den beiden `gl.uniformMatrix4fv`-Aufrufen, der die Zeile `gl.drawArrays()` enthält, durch den folgenden Block:

```js
{
  const vertexCount = 36;
  const type = gl.UNSIGNED_SHORT;
  const offset = 0;
  gl.drawElements(gl.TRIANGLES, vertexCount, type, offset);
}
```

Da jede Seite unseres Würfels aus zwei Dreiecken besteht, gibt es 6 Vertices pro Seite oder insgesamt 36 Vertices im Würfel, obwohl viele von ihnen Duplikate sind.

Schließlich ersetzen wir unsere Variable `squareRotation` durch `cubeRotation` und fügen eine zweite Rotation um die x-Achse hinzu.

> [!NOTE]
> Ersetzen Sie zu Beginn Ihrer Datei "webgl-demo.js" die Deklaration von `squareRotation` durch diese Zeile:

```js
let cubeRotation = 0.0;
```

> [!NOTE]
> Ersetzen Sie in der Deklaration der `drawScene()`-Funktion `squareRotation` durch `cubeRotation`:

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
> Ersetzen Sie in Ihrer `main()`-Funktion den Code, der `drawScene()` aufruft und `squareRotation` aktualisiert, so dass `cubeRotation` stattdessen übergeben und aktualisiert wird:

```js
drawScene(gl, programInfo, buffers, cubeRotation);
cubeRotation += deltaTime;
```

Zu diesem Zeitpunkt haben wir nun einen rotierenden Würfel, dessen sechs Seiten lebhaft gefärbt sind.

{{EmbedGHLiveSample('dom-examples/webgl-examples/tutorial/sample5/index.html', 670, 510) }}

[Den vollständigen Code anzeigen](https://github.com/mdn/dom-examples/tree/main/webgl-examples/tutorial/sample5) | [Dieses Demo auf einer neuen Seite öffnen](https://mdn.github.io/dom-examples/webgl-examples/tutorial/sample5/)

{{PreviousNext("Web/API/WebGL_API/Tutorial/Animating_objects_with_WebGL", "Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL")}}
