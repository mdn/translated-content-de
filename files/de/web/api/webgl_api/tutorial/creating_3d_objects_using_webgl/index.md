---
title: Erstellen von 3D-Objekten mit WebGL
slug: Web/API/WebGL_API/Tutorial/Creating_3D_objects_using_WebGL
l10n:
  sourceCommit: b5437b737639d6952d18b95ebd1045ed73e4bfa7
---

{{DefaultAPISidebar("WebGL")}} {{PreviousNext("Web/API/WebGL_API/Tutorial/Animating_objects_with_WebGL", "Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL")}}

Lassen Sie uns unsere quadratische Fläche in drei Dimensionen überführen, indem wir fünf weitere Flächen hinzufügen, um einen Würfel zu erstellen. Um dies effizient zu tun, werden wir vom Zeichnen der Vertices direkt durch Aufruf der Methode [`gl.drawArrays()`](/de/docs/Web/API/WebGLRenderingContext/drawArrays) dazu übergehen, das Vertex-Array als Tabelle zu verwenden und einzelne Vertices in dieser Tabelle zu referenzieren, um die Positionen der Vertices jeder Fläche zu definieren, und zwar durch Aufruf von [`gl.drawElements()`](/de/docs/Web/API/WebGLRenderingContext/drawElements).

Betrachten Sie: jede Fläche benötigt vier Vertices, um sie zu definieren, aber jeder Vertex wird von drei Flächen geteilt. Wir können viel weniger Daten verschieben, indem wir ein Array von allen 24 Vertices erstellen und dann auf jeden Vertex durch seinen Index in diesem Array verweisen, anstatt ganze Koordinatensätze zu verschieben. Falls Sie sich fragen, warum wir 24 Vertices und nicht nur 8 benötigen: Das liegt daran, dass jede Ecke drei verschiedenen Flächen mit unterschiedlichen Farben gehört und ein einzelner Vertex eine bestimmte Farbe haben muss; daher erstellen wir drei Kopien jedes Vertex in drei verschiedenen Farben, eine für jede Fläche.

## Definition der Positionen der Vertices des Würfels

Zuerst wollen wir den Vertex-Positionspuffer des Würfels erstellen, indem wir den Code in `initBuffers()` aktualisieren. Dies ist im Wesentlichen dasselbe wie bei der quadratischen Fläche, aber etwas länger, da es 24 Vertices gibt (4 pro Seite).

In der Funktion `initPositionBuffer()` Ihres "init-buffers.js"-Moduls ersetzen Sie die Deklaration von `positions` mit diesem Code:

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

Da wir eine z-Komponente zu unseren Vertices hinzugefügt haben, müssen wir die `numComponents` unseres `vertexPosition`-Attributes auf 3 aktualisieren.

In der Funktion `setPositionAttribute()` Ihres "draw-scene.js"-Moduls ändern Sie die Konstante `numComponents` von `2` auf `3`:

```js
const numComponents = 3;
```

## Definition der Farben der Vertices

Wir müssen auch ein Array von Farben für jeden der 24 Vertices erstellen. Dieser Code beginnt mit der Definition einer Farbe für jede Fläche und verwendet dann eine Schleife, um ein Array aller Farben für jeden der Vertices zu erstellen.

In der Funktion `initColorBuffer()` Ihres "init-buffers.js"-Moduls ersetzen Sie die Deklaration von `colors` mit diesem Code:

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

for (const c of faceColors) {
  // Repeat each color four times for the four vertices of the face
  colors = colors.concat(c, c, c, c);
}
```

## Definition des Element-Arrays

Sobald die Vertex-Arrays erstellt sind, müssen wir das Element-Array erstellen.

In Ihrem "init-buffer.js"-Modul fügen Sie die folgende Funktion hinzu:

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

Das `indices`-Array definiert jede Fläche als Paar von Dreiecken, wobei die Vertices jedes Dreiecks als Index in die Vertex-Arrays des Würfels spezifiziert werden. Somit wird der Würfel als Sammlung von 12 Dreiecken beschrieben.

Als Nächstes müssen Sie diese neue Funktion von `initBuffers()` aufrufen und den Puffer zurückgeben, den sie erstellt.

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

Als Nächstes müssen wir Code zu unserer Funktion `drawScene()` hinzufügen, um mit dem Index-Puffer des Würfels zu zeichnen, indem neue Aufrufe von [`gl.bindBuffer()`](/de/docs/Web/API/WebGLRenderingContext/bindBuffer) und [`gl.drawElements()`](/de/docs/Web/API/WebGLRenderingContext/drawElements) hinzugefügt werden.

In Ihrer Funktion `drawScene()` fügen Sie den folgenden Code direkt vor der Zeile `gl.useProgram` ein:

```js
// Tell WebGL which indices to use to index the vertices
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffers.indices);
```

In der Funktion `drawScene()` Ihres "draw-scene.js"-Moduls ersetzen Sie den Block direkt nach den beiden `gl.uniformMatrix4fv`-Aufrufen, der die Zeile `gl.drawArrays()` enthält, durch den folgenden Block:

```js
{
  const vertexCount = 36;
  const type = gl.UNSIGNED_SHORT;
  const offset = 0;
  gl.drawElements(gl.TRIANGLES, vertexCount, type, offset);
}
```

Da jede Fläche unseres Würfels aus zwei Dreiecken besteht, gibt es 6 Vertices pro Seite, also insgesamt 36 Vertices im Würfel, obwohl viele von ihnen Duplikate sind.

Schließlich ersetzen wir unsere Variable `squareRotation` durch `cubeRotation` und fügen eine zweite Rotation um die x-Achse hinzu.

Am Anfang Ihrer "webgl-demo.js"-Datei ersetzen Sie die Deklaration von `squareRotation` durch diese Zeile:

```js
let cubeRotation = 0.0;
```

In Ihrer Deklaration der Funktion `drawScene()` ersetzen Sie `squareRotation` durch `cubeRotation`:

```js
function drawScene(gl, programInfo, buffers, cubeRotation) {
  // …
}
```

In Ihrer Funktion `drawScene()` ersetzen Sie den Aufruf von `mat4.rotate` durch folgenden Code:

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

In Ihrer Funktion `main()` ersetzen Sie den Code, der `drawScene()` aufruft und `squareRotation` aktualisiert, damit `cubeRotation` stattdessen übergeben und aktualisiert wird:

```js
drawScene(gl, programInfo, buffers, cubeRotation);
cubeRotation += deltaTime;
```

Zu diesem Zeitpunkt haben wir nun einen animierten Würfel, der sich dreht und dessen sechs Flächen ziemlich lebhaft gefärbt sind.

{{EmbedGHLiveSample('dom-examples/webgl-examples/tutorial/sample5/index.html', 670, 510) }}

[Vollständiger Code anzeigen](https://github.com/mdn/dom-examples/tree/main/webgl-examples/tutorial/sample5) | [Öffnen Sie dieses Demo auf einer neuen Seite](https://mdn.github.io/dom-examples/webgl-examples/tutorial/sample5/)

{{PreviousNext("Web/API/WebGL_API/Tutorial/Animating_objects_with_WebGL", "Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL")}}
