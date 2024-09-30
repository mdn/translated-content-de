---
title: Verwendung von Shadern zur Farbapplikation in WebGL
slug: Web/API/WebGL_API/Tutorial/Using_shaders_to_apply_color_in_WebGL
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{DefaultAPISidebar("WebGL")}} {{PreviousNext("Web/API/WebGL_API/Tutorial/Adding_2D_content_to_a_WebGL_context", "Web/API/WebGL_API/Tutorial/Animating_objects_with_WebGL")}}

Nachdem im [vorangegangenen Demonstration](/de/docs/Web/API/WebGL_API/Tutorial/Adding_2D_content_to_a_WebGL_context) eine quadratische Fläche erstellt wurde, ist der nächste logische Schritt, ihr Farbe zu verleihen. Dies kann durch das Anpassen der Shader erreicht werden.

## Farbe auf die Scheitelpunkte anwenden

In WebGL werden Objekte aus Sätzen von Scheitelpunkten aufgebaut, von denen jeder eine Position und eine Farbe hat. Standardmäßig werden alle anderen Pixel-Farben (und alle anderen Attribute, einschließlich der Position) mittels Interpolation berechnet, was automatisch sanfte Farbverläufe erzeugt. Zuvor hat unser Vertex-Shader keine spezifischen Farben auf die Scheitelpunkte angewandt. Da der Fragment-Shader jedem Pixel die feste Farbe Weiß zugewiesen hat, wurde das gesamte Quadrat als solides Weiß dargestellt.

Angenommen, wir möchten einen Verlauf rendern, bei dem jede Ecke des Quadrats eine andere Farbe hat: Rot, Blau, Grün und Weiß. Der erste Schritt ist, diese Farben für die vier Scheitelpunkte festzulegen. Dazu müssen wir zuerst ein Array von Scheitelpunktfarben erstellen und dann in einen WebGL-Puffer speichern.

> [!NOTE]
> Fügen Sie die folgende Funktion zu Ihrem `init-buffers.js` Modul hinzu:

```js
function initColorBuffer(gl) {
  const colors = [
    1.0,
    1.0,
    1.0,
    1.0, // white
    1.0,
    0.0,
    0.0,
    1.0, // red
    0.0,
    1.0,
    0.0,
    1.0, // green
    0.0,
    0.0,
    1.0,
    1.0, // blue
  ];

  const colorBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);

  return colorBuffer;
}
```

Dieser Code beginnt damit, ein JavaScript-Array mit vier 4-Werte-Vektoren zu erstellen, je einen für jede Scheitelpunktfarbe. Dann wird ein neuer WebGL-Puffer zugewiesen, um diese Farben zu speichern, und das Array wird in Gleitkommazahlen umgewandelt und im Puffer gespeichert.

Natürlich müssen wir auch diese neue Funktion von `initBuffers()` aus aufrufen und den neuen Puffer zurückgeben, den sie erstellt.

> [!NOTE]
> Fügen Sie am Ende Ihrer `initBuffers()` Funktion den folgenden Code hinzu und ersetzen Sie die vorhandene `return` Anweisung:

```js
const colorBuffer = initColorBuffer(gl);

return {
  position: positionBuffer,
  color: colorBuffer,
};
```

Um diese Farben zu verwenden, muss der Vertex-Shader aktualisiert werden, um die passende Farbe aus dem Farbpuffer zu holen.

> [!NOTE]
> Aktualisieren Sie die `vsSource` Deklaration in Ihrer `main()` Funktion wie folgt:

```js
// Vertex shader program

const vsSource = `
    attribute vec4 aVertexPosition;
    attribute vec4 aVertexColor;

    uniform mat4 uModelViewMatrix;
    uniform mat4 uProjectionMatrix;

    varying lowp vec4 vColor;

    void main(void) {
      gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
      vColor = aVertexColor;
    }
  `;
```

Der wesentliche Unterschied hier ist, dass wir für jeden Scheitelpunkt seine Farbe mittels eines `varying` an den Fragment-Shader übergeben.

## Färbung der Fragmente

Um die interpolierte Farbe für jedes Pixel zu erfassen, müssen wir den Fragment-Shader ändern, sodass er den Wert aus dem `vColor` varying abruft.

> [!NOTE]
> Aktualisieren Sie die `fsSource` Deklaration in Ihrer `main()` Funktion wie folgt:

```js
// Fragment shader program

const fsSource = `
    varying lowp vec4 vColor;

    void main(void) {
      gl_FragColor = vColor;
    }
  `;
```

Jedes Fragment erhält die interpolierte Farbe basierend auf seiner Position relativ zu den Scheitelpunktpositionen anstelle eines festen Werts.

## Zeichnen unter Verwendung der Farben

Als nächstes müssen Sie Code hinzufügen, um den Attributstandort für die Farben zu ermitteln und dieses Attribut für das Shader-Programm einzurichten.

> [!NOTE]
> Aktualisieren Sie die `programInfo` Deklaration in Ihrer `main()` Funktion wie folgt:

```js
// Collect all the info needed to use the shader program.
// Look up which attributes our shader program is using
// for aVertexPosition, aVertexColor and also
// look up uniform locations.
const programInfo = {
  program: shaderProgram,
  attribLocations: {
    vertexPosition: gl.getAttribLocation(shaderProgram, "aVertexPosition"),
    vertexColor: gl.getAttribLocation(shaderProgram, "aVertexColor"),
  },
  uniformLocations: {
    projectionMatrix: gl.getUniformLocation(shaderProgram, "uProjectionMatrix"),
    modelViewMatrix: gl.getUniformLocation(shaderProgram, "uModelViewMatrix"),
  },
};
```

Als nächstes muss `drawScene()` diese Farben verwenden, wenn das Quadrat gezeichnet wird.

> [!NOTE]
> Fügen Sie die folgende Funktion zu Ihrem `draw-scene.js` Modul hinzu:

```js
// Tell WebGL how to pull out the colors from the color buffer
// into the vertexColor attribute.
function setColorAttribute(gl, buffers, programInfo) {
  const numComponents = 4;
  const type = gl.FLOAT;
  const normalize = false;
  const stride = 0;
  const offset = 0;
  gl.bindBuffer(gl.ARRAY_BUFFER, buffers.color);
  gl.vertexAttribPointer(
    programInfo.attribLocations.vertexColor,
    numComponents,
    type,
    normalize,
    stride,
    offset,
  );
  gl.enableVertexAttribArray(programInfo.attribLocations.vertexColor);
}
```

> [!NOTE]
> Rufen Sie die `setColorAttribute()` Funktion von `drawScene()` aus auf, direkt vor dem `gl.useProgram()` Aufruf:

```js
setColorAttribute(gl, buffers, programInfo);
```

Das Ergebnis sollte nun so aussehen:

{{EmbedGHLiveSample('dom-examples/webgl-examples/tutorial/sample3/index.html', 670, 510) }}

[Den vollständigen Code anzeigen](https://github.com/mdn/dom-examples/tree/main/webgl-examples/tutorial/sample3) | [Dieses Demo auf einer neuen Seite öffnen](https://mdn.github.io/dom-examples/webgl-examples/tutorial/sample3/)

{{PreviousNext("Web/API/WebGL_API/Tutorial/Adding_2D_content_to_a_WebGL_context", "Web/API/WebGL_API/Tutorial/Animating_objects_with_WebGL")}}
