---
title: Verwenden von Shadern zur Anwendung von Farbe in WebGL
slug: Web/API/WebGL_API/Tutorial/Using_shaders_to_apply_color_in_WebGL
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{DefaultAPISidebar("WebGL")}} {{PreviousNext("Web/API/WebGL_API/Tutorial/Adding_2D_content_to_a_WebGL_context", "Web/API/WebGL_API/Tutorial/Animating_objects_with_WebGL")}}

Nachdem im [vorherigen Beispiel](/de/docs/Web/API/WebGL_API/Tutorial/Adding_2D_content_to_a_WebGL_context) eine quadratische Fläche erstellt wurde, ist der nächste offensichtliche Schritt, ihr einen Farbtupfer hinzuzufügen. Dies können wir erreichen, indem wir die Shader überarbeiten.

## Anwendung von Farbe auf die Vertices

In WebGL werden Objekte mit Hilfe von Sätzen von Vertices aufgebaut, von denen jede eine Position und eine Farbe hat. Standardmäßig werden die Farben aller anderen Pixel (sowie all ihre anderen Attribute, einschließlich der Position) durch Interpolation berechnet, wodurch automatisch sanfte Farbverläufe entstehen. Bisher hat unser Vertex-Shader keine spezifischen Farben auf die Vertices angewandt. Zwischen diesem und dem Fragment-Shader, der jedem Pixel die feste Farbe Weiß zuweist, wurde das gesamte Quadrat als einfarbig weiß gerendert.

Angenommen, wir möchten einen Farbverlauf darstellen, bei dem jede Ecke des Quadrats eine andere Farbe hat: rot, blau, grün und weiß. Der erste Schritt besteht darin, diese Farben für die vier Vertices festzulegen. Dazu müssen wir zuerst ein Array von Vertex-Farben erstellen und es in einem WebGL-Puffer speichern.

> [!NOTE]
> Fügen Sie Ihrem `init-buffers.js` Modul die folgende Funktion hinzu:

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

Dieses Code-Beispiel beginnt mit der Erstellung eines JavaScript-Arrays, das vier 4-Werte-Vektoren enthält, einen für jede Vertex-Farbe. Danach wird ein neuer WebGL-Puffer zugewiesen, um diese Farben zu speichern, und das Array wird in Fließkommazahlen konvertiert und im Puffer gespeichert.

Natürlich müssen wir auch diese neue Funktion von `initBuffers()` aufrufen und den neuen Puffer zurückgeben, den sie erstellt.

> [!NOTE]
> Am Ende Ihrer `initBuffers()` Funktion fügen Sie den folgenden Code hinzu und ersetzen die vorhandene `return` Anweisung:

```js
const colorBuffer = initColorBuffer(gl);

return {
  position: positionBuffer,
  color: colorBuffer,
};
```

Um diese Farben zu verwenden, muss der Vertex-Shader so aktualisiert werden, dass er die entsprechende Farbe aus dem Farb-Puffer übernimmt.

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

Der entscheidende Unterschied besteht hier darin, dass wir für jedes Vertex seine Farbe mittels eines `varying` an den Fragment-Shader übergeben.

## Färben der Fragmente

Um die interpolierte Farbe für jedes Pixel abzurufen, müssen wir den Fragment-Shader ändern, damit er den Wert aus dem `vColor` varying abruft.

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

Jedes Fragment erhält die interpolierte Farbe basierend auf seiner Position relativ zu den Vertex-Positionen, anstatt eines festen Wertes.

## Zeichnen mit den Farben

Als Nächstes müssen Sie Code hinzufügen, um den Attributstandort für die Farben abzurufen und dieses Attribut für das Shader-Programm einzurichten.

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

Als Nächstes muss `drawScene()` diese Farben verwenden, wenn das Quadrat gezeichnet wird.

> [!NOTE]
> Fügen Sie Ihrem `draw-scene.js` Modul die folgende Funktion hinzu:

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

[Sehen Sie sich den vollständigen Code an](https://github.com/mdn/dom-examples/tree/main/webgl-examples/tutorial/sample3) | [Öffnen Sie dieses Demo in einem neuen Fenster](https://mdn.github.io/dom-examples/webgl-examples/tutorial/sample3/)

{{PreviousNext("Web/API/WebGL_API/Tutorial/Adding_2D_content_to_a_WebGL_context", "Web/API/WebGL_API/Tutorial/Animating_objects_with_WebGL")}}
