---
title: Erstellen von 3D-Objekten mit WebGL
slug: Web/API/WebGL_API/Tutorial/Creating_3D_objects_using_WebGL
l10n:
  sourceCommit: cc41ecd796870c2b6c77ad0b04fcb8d8c7d877d2
---

{{DefaultAPISidebar("WebGL")}} {{PreviousNext("Web/API/WebGL_API/Tutorial/Animating_objects_with_WebGL", "Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL")}}

Lassen Sie uns unser quadratisches Flächenelement in drei Dimensionen erweitern, indem wir fünf weitere Flächen hinzufügen, um einen Würfel zu erstellen. Um dies effizient zu tun, werden wir von der direkten Zeichnung der Vertizes mittels der [`gl.drawArrays()`](/de/docs/Web/API/WebGLRenderingContext/drawArrays)-Methode zur Verwendung des Vertex-Arrays als Tabelle wechseln. Wir werden dann einzelne Vertizes in dieser Tabelle referenzieren, um die Positionen der Vertizes jeder Fläche zu definieren, indem wir [`gl.drawElements()`](/de/docs/Web/API/WebGLRenderingContext/drawElements) aufrufen.

Beachten Sie: Jede Fläche erfordert vier Vertizes zur Definition, wobei jeder Vertex von drei Flächen geteilt wird. Wir können deutlich weniger Daten bewegen, indem wir ein Array mit allen 24 Vertizes anlegen und dann jeden Vertex durch seinen Index in diesem Array referenzieren, anstatt ganze Mengen von Koordinaten zu verschieben. Falls Sie sich fragen, warum wir 24 Vertizes und nicht nur 8 benötigen, liegt es daran, dass jeder Eckpunkt zu drei unterschiedlich gefärbten Flächen gehört und ein einzelner Vertex eine spezifische Farbe haben muss. Daher erstellen wir drei Kopien jedes Vertexes in drei verschiedenen Farben, jeweils für eine Fläche.

## Definieren der Positionen der Vertizes des Würfels

Zuerst bauen wir den Positionspuffer des Vertexes für den Würfel, indem wir den Code in `initBuffers()` aktualisieren. Dies ist im Wesentlichen das Gleiche wie für die quadratische Fläche, aber etwas länger, da es 24 Vertizes gibt (4 pro Seite).

> [!NOTE]
> Ersetzen Sie in der Funktion `initPositionBuffer()` Ihres Moduls „init-buffers.js“ die Deklaration von `positions` durch diesen Code:

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

Da wir eine z-Komponente zu unseren Vertizes hinzugefügt haben, müssen wir die `numComponents` unseres `vertexPosition`-Attributs auf 3 aktualisieren.

> [!NOTE]
> Ändern Sie in der Funktion `setPositionAttribute()` Ihres Moduls „draw-scene.js“ die Konstante `numComponents` von `2` zu `3`:

```js
const numComponents = 3;
```

## Definieren der Farben der Vertizes

Wir müssen auch ein Array von Farben für jeden der 24 Vertizes erstellen. Dieser Code beginnt mit der Definition einer Farbe für jede Fläche und verwendet dann eine Schleife, um ein Array aller Farben für jeden der Vertizes zu erstellen.

> [!NOTE]
> Ersetzen Sie in der Funktion `initColorBuffer()` Ihres Moduls „init-buffers.js“ die Deklaration von `colors` durch diesen Code:

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

const colors = [];

for (let j = 0; j < faceColors.length; ++j) {
  const c = faceColors[j];
  // Repeat each color four times for the four vertices of the face
  colors = colors.concat(c, c, c, c);
}
```

## Definieren des Element-Arrays

Sobald die Vertex-Arrays generiert sind, müssen wir das Element-Array erstellen.

> [!NOTE]
> Fügen Sie in Ihrem Modul „init-buffer.js“ die folgende Funktion hinzu:

```js
function initIndexBuffer(gl) {
  const indexBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);

  // This array defines each face as two triangles, using the
  // indices into the vertex array to specify each triangle's
  // position.

  // prettier-ignore
  const indices = [
     0,  1,  2,      0,  2,  3,    // front
     4,  5,  6,      4,  6,  7,    // back
     8,  9,  10,     8,  10, 11,   // top
     12, 13, 14,     12, 14, 15,   // bottom
     16, 17, 18,     16, 18, 19,   // right
     20, 21, 22,     20, 22, 23,   // left
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

Das `indices`-Array definiert jede Fläche als ein Paar Dreiecke, wobei die Vertizes jedes Dreiecks als Index in die Vertex-Arrays des Würfels spezifiziert werden. So wird der Würfel als eine Sammlung von 12 Dreiecken beschrieben.

Als nächstes müssen Sie diese neue Funktion in `initBuffers()` aufrufen und den Puffer, den sie erstellt, zurückgeben.

> [!NOTE]
> Fügen Sie am Ende der Funktion `initBuffers()` Ihres Moduls „init-buffers.js“ den folgenden Code hinzu und ersetzen Sie die bestehende `return`-Anweisung:

```js
function initBuffers(gl) {
  // …

  const indexBuffer = initIndexBuffer(gl);

  return {
    position: positionBuffer,
    color: colorBuffer,
    indices: indexBuffer,
  };
}
```

## Zeichnen des Würfels

Nun müssen wir Code zu unserer Funktion `drawScene()` hinzufügen, um den Indexpuffer des Würfels zu verwenden und neue Aufrufe von [`gl.bindBuffer()`](/de/docs/Web/API/WebGLRenderingContext/bindBuffer) und [`gl.drawElements()`](/de/docs/Web/API/WebGLRenderingContext/drawElements) hinzufügen.

> [!NOTE]
> Fügen Sie in Ihrer Funktion `drawScene()` den folgenden Code direkt vor die Zeile `gl.useProgram` hinzu:

```js
// Tell WebGL which indices to use to index the vertices
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffers.indices);
```

> [!NOTE]
> Ersetzen Sie in der Funktion `drawScene()` Ihres Moduls „draw-scene.js“ den Block direkt nach den beiden `gl.uniformMatrix4fv`-Aufrufen, der die Zeile `gl.drawArrays()` enthält, durch den folgenden Block:

```js
{
  const vertexCount = 36;
  const type = gl.UNSIGNED_SHORT;
  const offset = 0;
  gl.drawElements(gl.TRIANGLES, vertexCount, type, offset);
}
```

Da jede Fläche unseres Würfels aus zwei Dreiecken besteht, gibt es 6 Vertizes pro Seite, also insgesamt 36 Vertizes im Würfel, obwohl viele davon Duplikate sind.

Zum Abschluss ersetzen Sie unsere Variable `squareRotation` durch `cubeRotation` und fügen eine zweite Rotation um die x-Achse hinzu.

> [!NOTE]
> Ersetzen Sie am Anfang Ihrer „webgl-demo.js“-Datei die Deklaration `squareRotation` durch diese Zeile:

```js
let cubeRotation = 0.0;
```

> [!NOTE]
> Ersetzen Sie in Ihrer Funktionsdeklaration `drawScene()` die `squareRotation` durch `cubeRotation`:

```js-nolint
function drawScene(gl, programInfo, buffers, cubeRotation) {
```

> [!NOTE]
> Ersetzen Sie in Ihrer Funktion `drawScene()` den Aufruf von `mat4.rotate` durch den folgenden Code:

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

An diesem Punkt haben wir nun einen animierten Würfel, der sich dreht, und dessen sechs Flächen ziemlich lebhaft gefärbt sind.

{{EmbedGHLiveSample('dom-examples/webgl-examples/tutorial/sample5/index.html', 670, 510) }}

[Den kompletten Code anzeigen](https://github.com/mdn/dom-examples/tree/main/webgl-examples/tutorial/sample5) | [Dieses Demo auf einer neuen Seite öffnen](https://mdn.github.io/dom-examples/webgl-examples/tutorial/sample5/)

{{PreviousNext("Web/API/WebGL_API/Tutorial/Animating_objects_with_WebGL", "Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL")}}
