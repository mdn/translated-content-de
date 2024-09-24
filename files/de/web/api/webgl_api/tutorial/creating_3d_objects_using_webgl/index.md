---
title: Erstellen von 3D-Objekten mit WebGL
slug: Web/API/WebGL_API/Tutorial/Creating_3D_objects_using_WebGL
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{DefaultAPISidebar("WebGL")}} {{PreviousNext("Web/API/WebGL_API/Tutorial/Animating_objects_with_WebGL", "Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL")}}

Bringen Sie unsere quadratische Fläche in drei Dimensionen, indem Sie fünf weitere Flächen hinzufügen, um einen Würfel zu erstellen. Um dies effizient zu tun, wechseln wir von der direkten Verwendung der Vertizes beim Zeichnen mit der Methode {{domxref("WebGLRenderingContext.drawArrays()", "gl.drawArrays()")}} zur Verwendung des Vertex-Arrays als Tabelle. Wir referenzieren individuelle Vertizes in dieser Tabelle, um die Positionen der Vertizes jeder Fläche zu definieren, indem wir {{domxref("WebGLRenderingContext.drawElements()", "gl.drawElements()")}} aufrufen.

Überlegen Sie: Jede Fläche benötigt vier Vertizes, um sie zu definieren, aber jeder Vertex wird von drei Flächen geteilt. Wir können viel weniger Daten bewegen, indem wir ein Array aller 24 Vertizes erstellen und dann jeden Vertex über seinen Index in diesem Array referenzieren, anstatt ganze Koordinatensätze zu verschieben. Falls Sie sich fragen, warum wir 24 Vertizes benötigen und nicht nur 8, liegt das daran, dass jede Ecke zu drei Flächen unterschiedlicher Farben gehört und ein einzelner Vertex eine spezifische Farbe haben muss; daher erstellen wir drei Kopien jedes Vertex in drei verschiedenen Farben, eine für jede Fläche.

## Definieren Sie die Positionen der Vertizes des Würfels

Zuerst erstellen wir den Puffer für die Positionen der Vertizes des Würfels, indem wir den Code in `initBuffers()` aktualisieren. Das ist weitgehend das Gleiche wie für die quadratische Fläche, aber etwas länger, da es 24 Vertizes gibt (4 pro Seite).

> [!NOTE]
> Ersetzen Sie in der Funktion `initPositionBuffer()` Ihres Moduls "init-buffers.js" die `positions`-Deklaration durch diesen Code:

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

Da wir eine z-Komponente zu unseren Vertizes hinzugefügt haben, müssen wir die `numComponents` unseres `vertexPosition` Attributs auf 3 aktualisieren.

> [!NOTE]
> Ändern Sie in der Funktion `setPositionAttribute()` Ihres Moduls "draw-scene.js" die Konstante `numComponents` von `2` auf `3`:

```js
const numComponents = 3;
```

## Definieren Sie die Farben der Vertizes

Wir müssen auch ein Array von Farben für jeden der 24 Vertizes erstellen. Dieser Code beginnt mit der Definition einer Farbe für jede Fläche und verwendet dann eine Schleife, um ein Array aller Farben für die Vertizes zu erstellen.

> [!NOTE]
> Ersetzen Sie in der Funktion `initColorBuffer()` Ihres Moduls "init-buffers.js" die `colors`-Deklaration durch diesen Code:

```js
const faceColors = [
  [1.0, 1.0, 1.0, 1.0], // Front face: white
  [1.0, 0.0, 0.0, 1.0], // Back face: red
  [0.0, 1.0, 0.0, 1.0], // Top face: green
  [0.0, 0.0, 1.0, 1.0], // Bottom face: blue
  [1.0, 1.0, 0.0, 1.0], // Right face: yellow
  [1.0, 0.0, 1.0, 1.0], // Left face: purple
];

// Konvertieren Sie das Array von Farben in eine Tabelle für alle Vertizes.

var colors = [];

for (var j = 0; j < faceColors.length; ++j) {
  const c = faceColors[j];
  // Wiederholen Sie jede Farbe viermal für die vier Vertizes der Fläche
  colors = colors.concat(c, c, c, c);
}
```

## Definieren Sie das Element-Array

Sobald die Vertex-Arrays generiert sind, müssen wir das Element-Array erstellen.

> [!NOTE]
> Fügen Sie in Ihrem Modul "init-buffer.js" die folgende Funktion hinzu:

```js
function initIndexBuffer(gl) {
  const indexBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);

  // Dieses Array definiert jede Fläche als zwei Dreiecke, wobei
  // die Indizes im Vertex-Array verwendet werden, um die Position
  // jedes Dreiecks anzugeben.

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

  // Jetzt das Element-Array an GL senden

  gl.bufferData(
    gl.ELEMENT_ARRAY_BUFFER,
    new Uint16Array(indices),
    gl.STATIC_DRAW,
  );

  return indexBuffer;
}
```

Das `indices` Array definiert jede Fläche als Paar von Dreiecken und spezifiziert die Vertizes jedes Dreiecks als Index in den Vertex-Arrays des Würfels. Dadurch wird der Würfel als Sammlung von 12 Dreiecken beschrieben.

Als nächstes müssen Sie diese neue Funktion von `initBuffers()` aus aufrufen und den erstellten Puffer zurückgeben.

> [!NOTE]
> Fügen Sie am Ende der `initBuffers()` Funktion Ihres Moduls "init-buffers.js" den folgenden Code hinzu und ersetzen Sie die bestehende `return`-Anweisung:

```js
const indexBuffer = initIndexBuffer(gl);

return {
  position: positionBuffer,
  color: colorBuffer,
  indices: indexBuffer,
};
```

## Zeichnen des Würfels

Als Nächstes müssen wir unserem `drawScene()` Code hinzufügen, um mit dem Indexpuffer des Würfels zu zeichnen, neue {{domxref("WebGLRenderingContext.bindBuffer()", "gl.bindBuffer()")}} und {{domxref("WebGLRenderingContext.drawElements()", "gl.drawElements()")}} Aufrufe hinzufügen.

> [!NOTE]
> Fügen Sie in Ihrer `drawScene()` Funktion den folgenden Code direkt vor der `gl.useProgram` Zeile hinzu:

```js
// WebGL mitteilen, welche Indizes zu verwenden sind, um die Vertizes zu indizieren
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffers.indices);
```

> [!NOTE]
> Ersetzen Sie in der `drawScene()` Funktion Ihres Moduls "draw-scene.js" den Block direkt nach den zwei `gl.uniformMatrix4fv` Aufrufen, der die `gl.drawArrays()` Zeile enthält, durch den folgenden Block:

```js
{
  const vertexCount = 36;
  const type = gl.UNSIGNED_SHORT;
  const offset = 0;
  gl.drawElements(gl.TRIANGLES, vertexCount, type, offset);
}
```

Da jede Fläche unseres Würfels aus zwei Dreiecken besteht, gibt es 6 Vertizes pro Seite oder insgesamt 36 Vertizes im Würfel, obwohl viele davon Duplikate sind.

Lassen Sie uns abschließend unsere Variable `squareRotation` durch `cubeRotation` ersetzen und eine zweite Rotation um die x-Achse hinzufügen.

> [!NOTE]
> Ersetzen Sie zu Beginn Ihrer Datei "webgl-demo.js" die `squareRotation` Deklaration durch diese Zeile:

```js
let cubeRotation = 0.0;
```

> [!NOTE]
> Ersetzen Sie in Ihrer `drawScene()` Funktionsdeklaration `squareRotation` durch `cubeRotation`:

```js-nolint
function drawScene(gl, programInfo, buffers, cubeRotation) {
```

> [!NOTE]
> Ersetzen Sie in Ihrer `drawScene()` Funktion den `mat4.rotate` Aufruf durch den folgenden Code:

```js
mat4.rotate(
  modelViewMatrix, // Ziel-Matrix
  modelViewMatrix, // zu rotierende Matrix
  cubeRotation, // Drehmenge in Radianten
  [0, 0, 1],
); // Achse, um die rotiert werden soll (Z)
mat4.rotate(
  modelViewMatrix, // Ziel-Matrix
  modelViewMatrix, // zu rotierende Matrix
  cubeRotation * 0.7, // Drehmenge in Radianten
  [0, 1, 0],
); // Achse, um die rotiert werden soll (Y)
mat4.rotate(
  modelViewMatrix, // Ziel-Matrix
  modelViewMatrix, // zu rotierende Matrix
  cubeRotation * 0.3, // Drehmenge in Radianten
  [1, 0, 0],
); // Achse, um die rotiert werden soll (X)
```

> [!NOTE]
> Ersetzen Sie in Ihrer `main()` Funktion den Code, der `drawScene()` aufruft und `squareRotation` aktualisiert, damit stattdessen `cubeRotation` übergeben und aktualisiert wird:

```js
drawScene(gl, programInfo, buffers, cubeRotation);
cubeRotation += deltaTime;
```

An diesem Punkt haben wir nun einen animierten, rotierenden Würfel, dessen sechs Flächen recht lebendig gefärbt sind.

{{EmbedGHLiveSample('dom-examples/webgl-examples/tutorial/sample5/index.html', 670, 510) }}

[Den vollständigen Code ansehen](https://github.com/mdn/dom-examples/tree/main/webgl-examples/tutorial/sample5) | [Dieses Demo auf einer neuen Seite öffnen](https://mdn.github.io/dom-examples/webgl-examples/tutorial/sample5/)

{{PreviousNext("Web/API/WebGL_API/Tutorial/Animating_objects_with_WebGL", "Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL")}}
