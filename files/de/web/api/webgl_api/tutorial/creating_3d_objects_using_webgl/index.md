---
title: Erstellen von 3D-Objekten mit WebGL
slug: Web/API/WebGL_API/Tutorial/Creating_3D_objects_using_WebGL
l10n:
  sourceCommit: 3c13d9a0c239ed31ae861486393952bc03e0b5bd
---

{{DefaultAPISidebar("WebGL")}} {{PreviousNext("Web/API/WebGL_API/Tutorial/Animating_objects_with_WebGL", "Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL")}}

Lassen Sie uns unser quadratisches Plane in drei Dimensionen erweitern, indem wir fünf weitere Flächen hinzufügen, um einen Würfel zu erstellen. Um dies effizient zu tun, werden wir vom direkten Zeichnen mittels der Vertizes über die Methode [`gl.drawArrays()`](/de/docs/Web/API/WebGLRenderingContext/drawArrays) zu einer Nutzung des Vertex-Arrays als Tabelle wechseln. Dabei referenzieren wir einzelne Vertizes in dieser Tabelle, um die Positionen der Vertizes jeder Fläche zu definieren, indem wir [`gl.drawElements()`](/de/docs/Web/API/WebGLRenderingContext/drawElements) aufrufen.

Bedenken Sie: Jede Fläche erfordert vier Vertizes, aber jeder Vertex wird von drei Flächen geteilt. Wir können deutlich weniger Daten umherreichen, indem wir ein Array mit allen 24 Vertizes erstellen und dann jeden Vertex über seinen Index in diesem Array ansprechen, anstatt ganze Koordinatensätze zu verschieben. Falls Sie sich wundern, warum wir 24 und nicht nur 8 Vertizes benötigen: Jede Ecke gehört zu drei Flächen unterschiedlicher Farben, und ein einzelner Vertex benötigt eine einzelne spezifische Farbe. Daher erstellen wir drei Kopien jedes Vertex in drei verschiedenen Farben, je eine für jede Fläche.

## Definieren der Positionen der Vertizes des Würfels

Zuerst erstellen wir den Vertex-Positions-Puffer des Würfels, indem wir den Code in `initBuffers()` aktualisieren. Dies ist im Wesentlichen dasselbe wie bei der quadratischen Fläche, aber etwas länger, da es 24 Vertizes sind (4 pro Seite).

Ersetzen Sie in der Funktion `initPositionBuffer()` Ihres Moduls "init-buffers.js" die Deklaration von `positions` mit diesem Code:

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

Da wir einen z-Komponente zu unseren Vertizes hinzugefügt haben, müssen wir die `numComponents` unseres `vertexPosition` Attributs auf 3 aktualisieren.

Ändern Sie in der Funktion `setPositionAttribute()` Ihres Moduls "draw-scene.js" die Konstante `numComponents` von `2` auf `3`:

```js
const numComponents = 3;
```

## Definieren der Farben der Vertizes

Wir müssen auch ein Array von Farben für jeden der 24 Vertizes erstellen. Dieser Code beginnt mit der Definition einer Farbe für jede Fläche und verwendet dann eine Schleife, um ein Array aller Farben für jeden der Vertizes zusammenzustellen.

Ersetzen Sie in der Funktion `initColorBuffer()` Ihres Moduls "init-buffers.js" die Deklaration von `colors` mit diesem Code:

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

Fügen Sie diese Funktion in Ihr Modul "init-buffer.js" ein:

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

Das `indices` Array definiert jede Fläche als ein Paar von Dreiecken, wobei die Vertizes jedes Dreiecks als Index in die Vertex-Arrays des Würfels angegeben werden. Somit wird der Würfel als Sammlung von 12 Dreiecken beschrieben.

Als Nächstes müssen Sie diese neue Funktion aus `initBuffers()` aufrufen und den Puffer zurückgeben, den sie erstellt.

Am Ende der Funktion `initBuffers()` Ihres Moduls "init-buffers.js" fügen Sie diesen Code ein und ersetzen die bestehende `return`-Anweisung:

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

## Den Würfel zeichnen

Als Nächstes müssen wir unserem `drawScene()`-Funktion Code hinzufügen, um den Index-Puffer des Würfels zu zeichnen, indem neue Aufrufe von [`gl.bindBuffer()`](/de/docs/Web/API/WebGLRenderingContext/bindBuffer) und [`gl.drawElements()`](/de/docs/Web/API/WebGLRenderingContext/drawElements) hinzugefügt werden.

Fügen Sie in Ihrer `drawScene()`-Funktion diesen Code unmittelbar vor der `gl.useProgram`-Zeile hinzu:

```js
// Tell WebGL which indices to use to index the vertices
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffers.indices);
```

Ersetzen Sie in der `drawScene()`-Funktion Ihres Moduls "draw-scene.js" den Block direkt nach den zwei `gl.uniformMatrix4fv`-Aufrufen, der die Zeile `gl.drawArrays()` enthält, durch den folgenden Block:

```js
{
  const vertexCount = 36;
  const type = gl.UNSIGNED_SHORT;
  const offset = 0;
  gl.drawElements(gl.TRIANGLES, vertexCount, type, offset);
}
```

Da jede Fläche unseres Würfels aus zwei Dreiecken besteht, sind es 6 Vertizes pro Seite oder 36 insgesamt im Würfel, obwohl viele davon Duplikate sind.

Schließlich ersetzen wir unsere Variable `squareRotation` mit `cubeRotation` und fügen eine zweite Rotation um die x-Achse hinzu.

Ersetzen Sie zu Beginn Ihrer Datei "webgl-demo.js" die Deklaration von `squareRotation` durch diese Zeile:

```js
let cubeRotation = 0.0;
```

Ersetzen Sie in Ihrer `drawScene()`-Funktionsdeklaration `squareRotation` mit `cubeRotation`:

```js
function drawScene(gl, programInfo, buffers, cubeRotation) {
  // …
}
```

Ersetzen Sie in Ihrer `drawScene()`-Funktion den Aufruf von `mat4.rotate` durch den folgenden Code:

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

Ersetzen Sie in Ihrer `main()`-Funktion den Code, der `drawScene()` aufruft und `squareRotation` aktualisiert, um stattdessen `cubeRotation` zu übergeben und zu aktualisieren:

```js
drawScene(gl, programInfo, buffers, cubeRotation);
cubeRotation += deltaTime;
```

An diesem Punkt haben wir nun einen animierten Würfel, der rotiert und dessen sechs Flächen lebhaft gefärbt sind.

{{EmbedGHLiveSample('dom-examples/webgl-examples/tutorial/sample5/index.html', 670, 510) }}

[Sehen Sie den vollständigen Code](https://github.com/mdn/dom-examples/tree/main/webgl-examples/tutorial/sample5) | [Öffnen Sie dieses Demo auf einer neuen Seite](https://mdn.github.io/dom-examples/webgl-examples/tutorial/sample5/)

{{PreviousNext("Web/API/WebGL_API/Tutorial/Animating_objects_with_WebGL", "Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL")}}
