---
title: Erstellen von 3D-Objekten mit WebGL
slug: Web/API/WebGL_API/Tutorial/Creating_3D_objects_using_WebGL
l10n:
  sourceCommit: f723de8e9a946a1b73daaf52c292522351234841
---

{{DefaultAPISidebar("WebGL")}} {{PreviousNext("Web/API/WebGL_API/Tutorial/Animating_objects_with_WebGL", "Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL")}}

Lassen Sie uns unsere quadratische Fläche in drei Dimensionen erweitern, indem wir fünf weitere Flächen hinzufügen, um einen Würfel zu erstellen. Um dies effizient zu tun, werden wir von der direkten Verwendung der Vertices beim Zeichnen mit der Methode [`gl.drawArrays()`](/de/docs/Web/API/WebGLRenderingContext/drawArrays) umschalten, sodass das Vertex-Array als Tabelle verwendet wird. Indem wir dann auf einzelne Vertices in dieser Tabelle verweisen, definieren wir die Positionen der Vertices jeder Fläche durch den Aufruf von [`gl.drawElements()`](/de/docs/Web/API/WebGLRenderingContext/drawElements).

Überlegen Sie: Jede Fläche benötigt vier Vertices zur Definition, aber jeder Vertex wird von drei Flächen geteilt. Wir können viel weniger Daten herumschicken, indem wir ein Array aus allen 24 Vertices erstellen und dann auf jeden Vertex durch seinen Index in diesem Array verweisen, anstatt ganze Koordinatensätze zu verschieben. Falls Sie sich fragen, warum wir 24 Vertices benötigen und nicht nur 8, liegt es daran, dass jede Ecke zu drei Flächen in verschiedenen Farben gehört und ein einzelner Vertex eine spezifische Farbe haben muss; daher erstellen wir drei Kopien jedes Vertex in drei verschiedenen Farben, eine für jede Fläche.

## Definieren der Positionen der Vertices des Würfels

Zuerst erstellen wir den Vertex-Positionspuffer des Würfels, indem wir den Code in `initBuffers()` aktualisieren. Dies ist im Wesentlichen dasselbe wie bei der quadratischen Fläche, jedoch etwas länger, da es 24 Vertices gibt (4 pro Seite).

In der Funktion `initPositionBuffer()` Ihres "init-buffers.js"-Moduls ersetzen Sie die `positions`-Deklaration mit diesem Code:

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

Da wir eine z-Komponente zu unseren Vertices hinzugefügt haben, müssen wir die `numComponents` unseres `vertexPosition` Attributs auf 3 aktualisieren.

In der Funktion `setPositionAttribute()` Ihres "draw-scene.js"-Moduls ändern Sie die Konstante `numComponents` von `2` auf `3`:

```js
const numComponents = 3;
```

## Definieren der Farben der Vertices

Wir müssen auch ein Array von Farben für jeden der 24 Vertices erstellen. Dieser Code beginnt mit der Definition einer Farbe für jede Fläche und verwendet dann eine Schleife, um ein Array aller Farben für jeden der Vertices zusammenzustellen.

In der Funktion `initColorBuffer()` Ihres "init-buffers.js"-Moduls ersetzen Sie die `colors`-Deklaration mit diesem Code:

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

let colors = [];

for (let j = 0; j < faceColors.length; ++j) {
  const c = faceColors[j];
  // Repeat each color four times for the four vertices of the face
  colors = colors.concat(c, c, c, c);
}
```

## Definieren des Elemente-Arrays

Sobald die Vertex-Arrays erzeugt sind, müssen wir das Elemente-Array erstellen.

Fügen Sie in Ihrem "init-buffer.js"-Modul die folgende Funktion hinzu:

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

Das `indices`-Array definiert jede Fläche als ein Paar Dreiecke und spezifiziert die Vertices jedes Dreiecks als einen Index in den Vertex-Arrays des Würfels. Somit wird der Würfel als eine Sammlung von 12 Dreiecken beschrieben.

Als Nächstes müssen Sie diese neue Funktion aus `initBuffers()` aufrufen und den von ihr erstellten Puffer zurückgeben.

Am Ende der Funktion `initBuffers()` Ihres "init-buffers.js"-Moduls fügen Sie den folgenden Code hinzu und ersetzen die bestehende `return`-Anweisung:

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

Als Nächstes müssen wir in unserer `drawScene()`-Funktion Code hinzufügen, um den Würfel mit dem Indexpuffer zu zeichnen und neue Aufrufe von [`gl.bindBuffer()`](/de/docs/Web/API/WebGLRenderingContext/bindBuffer) und [`gl.drawElements()`](/de/docs/Web/API/WebGLRenderingContext/drawElements) hinzuzufügen.

Fügen Sie in Ihrer `drawScene()`-Funktion den folgenden Code direkt vor der `gl.useProgram`-Zeile hinzu:

```js
// Tell WebGL which indices to use to index the vertices
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffers.indices);
```

Ersetzen Sie in der `drawScene()`-Funktion Ihres "draw-scene.js"-Moduls den Block direkt nach den beiden `gl.uniformMatrix4fv`-Aufrufen, der die `gl.drawArrays()`-Zeile enthält, durch den folgenden Block:

```js
{
  const vertexCount = 36;
  const type = gl.UNSIGNED_SHORT;
  const offset = 0;
  gl.drawElements(gl.TRIANGLES, vertexCount, type, offset);
}
```

Da jede Fläche unseres Würfels aus zwei Dreiecken besteht, gibt es 6 Vertices pro Seite, also insgesamt 36 Vertices im Würfel, obwohl viele davon Duplikate sind.

Lassen Sie uns schließlich unsere Variable `squareRotation` durch `cubeRotation` ersetzen und eine zweite Rotation um die x-Achse hinzufügen.

Ersetzen Sie am Anfang Ihrer "webgl-demo.js"-Datei die `squareRotation`-Deklaration durch diese Zeile:

```js
let cubeRotation = 0.0;
```

Ersetzen Sie in Ihrer `drawScene()`-Funktionsdeklaration `squareRotation` durch `cubeRotation`:

```js
function drawScene(gl, programInfo, buffers, cubeRotation) {
  // …
}
```

Ersetzen Sie in Ihrer `drawScene()`-Funktion den `mat4.rotate`-Aufruf durch den folgenden Code:

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

Ersetzen Sie in Ihrer `main()`-Funktion den Code, der `drawScene()` aufruft und `squareRotation` aktualisiert, sodass stattdessen `cubeRotation` übergeben und aktualisiert wird:

```js
drawScene(gl, programInfo, buffers, cubeRotation);
cubeRotation += deltaTime;
```

An diesem Punkt haben wir nun einen animierten, rotierenden Würfel, dessen sechs Flächen ziemlich farbenfroh sind.

{{EmbedGHLiveSample('dom-examples/webgl-examples/tutorial/sample5/index.html', 670, 510) }}

[Den vollständigen Code anzeigen](https://github.com/mdn/dom-examples/tree/main/webgl-examples/tutorial/sample5) | [Dieses Demo auf einer neuen Seite öffnen](https://mdn.github.io/dom-examples/webgl-examples/tutorial/sample5/)

{{PreviousNext("Web/API/WebGL_API/Tutorial/Animating_objects_with_WebGL", "Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL")}}
