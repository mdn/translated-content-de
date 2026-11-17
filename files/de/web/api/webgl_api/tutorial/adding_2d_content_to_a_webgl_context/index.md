---
title: 2D-Inhalte zu einem WebGL-Kontext hinzufügen
slug: Web/API/WebGL_API/Tutorial/Adding_2D_content_to_a_WebGL_context
l10n:
  sourceCommit: 7d55f113b5a05afe6ada6bb9b76bd3b0458f077d
---

{{DefaultAPISidebar("WebGL")}} {{PreviousNext("Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL", "Web/API/WebGL_API/Tutorial/Using_shaders_to_apply_color_in_WebGL")}}

Nachdem Sie einen [WebGL-Kontext erstellt](/de/docs/Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL) haben, können Sie damit beginnen, darin zu rendern. Als einfaches Beispiel zeichnen wir eine quadratische Fläche ohne Textur.

Der vollständige Quellcode für dieses Projekt ist [auf GitHub verfügbar](https://github.com/mdn/dom-examples/tree/main/webgl-examples/tutorial/sample2).

## Die glMatrix-Bibliothek einbinden

Dieses Projekt verwendet die [glMatrix-Bibliothek](https://glmatrix.net/) für Matrixoperationen. Sie müssen sie daher in Ihr Projekt einbinden. Wir laden eine Kopie von einem CDN.

> [!NOTE]
> Aktualisieren Sie Ihre „index.html“ so, dass sie wie folgt aussieht:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>WebGL Demo</title>
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/gl-matrix/2.8.1/gl-matrix-min.js"
      integrity="sha512-zhHQR0/H5SEBL3Wn6yYSaTTZej12z0hVZKOv3TwCUXT1z5qeqGcXJLLrbERYRScEDDpYIJhPC1fk31gqR783iQ=="
      crossorigin="anonymous"
      defer></script>
    <script src="webgl-demo.js" type="module"></script>
  </head>

  <body>
    <canvas id="gl-canvas" width="640" height="480"></canvas>
  </body>
</html>
```

## Die Szene zeichnen

Bevor wir beginnen, ist eines wichtig: Obwohl wir in diesem Beispiel nur eine quadratische Fläche rendern, zeichnen wir weiterhin im dreidimensionalen Raum. Wir platzieren das Quadrat lediglich direkt vor der Kamera, senkrecht zur Blickrichtung. Wir müssen die Shader definieren, die die Farbe für unsere einfache Szene erzeugen und unser Objekt zeichnen. Sie bestimmen, wie die quadratische Fläche auf dem Bildschirm erscheint.

### Die Shader

Ein **Shader** ist ein Programm, das in der [OpenGL ES Shading Language](https://registry.khronos.org/OpenGL/specs/es/3.2/GLSL_ES_Specification_3.20.pdf) (**GLSL**) geschrieben ist. Es verarbeitet Informationen über die Vertices, aus denen eine Form besteht, und erzeugt die Daten, die zum Rendern der Pixel auf dem Bildschirm benötigt werden: ihre Positionen und Farben.

Beim Zeichnen von WebGL-Inhalten werden zwei Arten von Shadern ausgeführt: der **Vertex-Shader** und der **Fragment-Shader**. Sie schreiben beide in GLSL und übergeben den Quelltext an WebGL, damit er für die Ausführung auf der GPU kompiliert wird. Zusammen bilden Vertex- und Fragment-Shader ein **Shader-Programm**.

Sehen wir uns die beiden Shader-Typen kurz anhand einer 2D-Form an, die in einen WebGL-Kontext gezeichnet wird.

#### Vertex-Shader

Jedes Mal, wenn eine Form gerendert wird, wird der Vertex-Shader für jeden ihrer Vertices ausgeführt. Seine Aufgabe ist es, den Eingabe-Vertex aus seinem ursprünglichen Koordinatensystem in das von WebGL verwendete Koordinatensystem des **[Clip Space](/de/docs/Web/API/WebGL_API/WebGL_model_view_projection#clip_space)** zu transformieren. Dort reicht jede Achse von −1,0 bis 1,0 – unabhängig vom Seitenverhältnis, der tatsächlichen Größe oder anderen Faktoren.

Der Vertex-Shader muss die nötigen Transformationen auf die Position des Vertex anwenden, gegebenenfalls weitere Anpassungen oder Berechnungen für diesen Vertex vornehmen und den transformierten Vertex anschließend in einer speziellen, von GLSL bereitgestellten Variable namens `gl_Position` speichern.

Bei Bedarf kann der Vertex-Shader außerdem beispielsweise bestimmen, welcher {{Glossary("texel", "Texel")}} innerhalb der Textur einer Fläche dem Vertex zugeordnet wird, oder anhand der Normalen den Beleuchtungsfaktor für den Vertex berechnen. Diese Informationen können dann je nach Bedarf in [Varyings](/de/docs/Web/API/WebGL_API/Data#varyings) oder [Attributes](/de/docs/Web/API/WebGL_API/Data#attributes) gespeichert und mit dem Fragment-Shader geteilt werden.

Unser Vertex-Shader erhält die Vertex-Positionen über ein von uns definiertes Attribute namens `aVertexPosition`. Diese Position wird anschließend mit zwei von uns bereitgestellten 4×4-Matrizen namens `uProjectionMatrix` und `uModelViewMatrix` multipliziert; das Ergebnis wird `gl_Position` zugewiesen. Weitere Informationen zur Projektion und zu anderen Matrizen finden Sie in [diesem Artikel](https://webglfundamentals.org/webgl/lessons/webgl-3d-perspective.html).

> [!NOTE]
> Fügen Sie diesen Code zu Ihrer `main()`-Funktion hinzu:

```js
// Vertex shader program
const vsSource = `
    attribute vec4 aVertexPosition;
    uniform mat4 uModelViewMatrix;
    uniform mat4 uProjectionMatrix;
    void main() {
      gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
    }
  `;
```

Beachten Sie, dass wir für die Vertex-Position ein `vec4`-Attribute verwenden, obwohl dafür nicht unbedingt ein Vektor mit vier Komponenten nötig wäre: Je nach Situation könnte auch ein `vec2` oder `vec3` verwendet werden. Für unsere Berechnungen benötigen wir jedoch ein `vec4`. Statt die Position bei jeder Berechnung in ein `vec4` umzuwandeln, verwenden wir es von Anfang an. So sparen wir bei jeder Berechnung im Shader Operationen ein. Leistung ist wichtig.

In diesem Beispiel berechnen wir noch keine Beleuchtung, da wir der Szene noch keine hinzugefügt haben. Das folgt später im Beispiel [Beleuchtung in WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Lighting_in_WebGL). Beachten Sie auch, dass wir hier noch keine Texturen verwenden. Diese kommen unter [Texturen in WebGL verwenden](/de/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL) hinzu.

#### Fragment-Shader

Der **Fragment-Shader** wird für jeden Pixel jeder zu zeichnenden Form einmal aufgerufen, nachdem der Vertex-Shader die Vertices der Form verarbeitet hat. Seine Aufgabe ist es, die Farbe des Pixels zu bestimmen: Er ermittelt, welcher Texel – also welcher Pixel aus der Textur der Form – verwendet werden soll, liest dessen Farbe aus und berücksichtigt die entsprechende Beleuchtung. Die Farbe wird anschließend an die WebGL-Ebene zurückgegeben, indem sie in der speziellen Variable `gl_FragColor` gespeichert wird. Danach wird sie an der richtigen Position für den betreffenden Pixel der Form auf dem Bildschirm gezeichnet.

Hier geben wir jedes Mal Weiß zurück, da wir lediglich ein weißes Quadrat ohne Beleuchtung zeichnen.

> [!NOTE]
> Fügen Sie diesen Code zu Ihrer `main()`-Funktion hinzu:

```js
const fsSource = `
    void main() {
      gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
    }
  `;
```

### Die Shader initialisieren

Nachdem wir die beiden Shader definiert haben, müssen wir sie an WebGL übergeben, kompilieren und miteinander verknüpfen. Der folgende Code erstellt die beiden Shader durch Aufrufe von `loadShader()`, denen jeweils der Typ und der Quelltext des Shaders übergeben werden. Anschließend erstellt er ein Programm, fügt die Shader hinzu und verknüpft sie. Wenn die Kompilierung oder Verknüpfung fehlschlägt, zeigt der Code eine Warnmeldung an.

> [!NOTE]
> Fügen Sie diese beiden Funktionen zu Ihrem Skript „webgl-demo.js“ hinzu:

```js
//
// Initialize a shader program, so WebGL knows how to draw our data
//
function initShaderProgram(gl, vsSource, fsSource) {
  const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);
  const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);

  // Create the shader program

  const shaderProgram = gl.createProgram();
  gl.attachShader(shaderProgram, vertexShader);
  gl.attachShader(shaderProgram, fragmentShader);
  gl.linkProgram(shaderProgram);

  // If creating the shader program failed, alert

  if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
    alert(
      `Unable to initialize the shader program: ${gl.getProgramInfoLog(
        shaderProgram,
      )}`,
    );
    return null;
  }

  return shaderProgram;
}

//
// creates a shader of the given type, uploads the source and
// compiles it.
//
function loadShader(gl, type, source) {
  const shader = gl.createShader(type);

  // Send the source to the shader object

  gl.shaderSource(shader, source);

  // Compile the shader program

  gl.compileShader(shader);

  // See if it compiled successfully

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    alert(
      `An error occurred compiling the shaders: ${gl.getShaderInfoLog(shader)}`,
    );
    gl.deleteShader(shader);
    return null;
  }

  return shader;
}
```

Die Funktion `loadShader()` nimmt den WebGL-Kontext, den Shader-Typ und den Quellcode entgegen. Sie erstellt und kompiliert den Shader dann wie folgt:

1. Durch Aufruf von [`gl.createShader()`](/de/docs/Web/API/WebGLRenderingContext/createShader) wird ein neuer Shader erstellt.
2. Mit [`gl.shaderSource()`](/de/docs/Web/API/WebGLRenderingContext/shaderSource) wird dem Shader sein Quellcode übergeben.
3. Sobald der Shader den Quellcode hat, wird er mit [`gl.compileShader()`](/de/docs/Web/API/WebGLRenderingContext/compileShader) kompiliert.
4. Um zu prüfen, ob die Kompilierung erfolgreich war, wird der Shader-Parameter `gl.COMPILE_STATUS` abgefragt. Dazu rufen wir [`gl.getShaderParameter()`](/de/docs/Web/API/WebGLRenderingContext/getShaderParameter) auf und übergeben den Shader sowie den Namen des zu prüfenden Parameters (`gl.COMPILE_STATUS`). Ist der Wert `false`, ist die Kompilierung fehlgeschlagen. In diesem Fall zeigen wir eine Warnmeldung mit den über [`gl.getShaderInfoLog()`](/de/docs/Web/API/WebGLRenderingContext/getShaderInfoLog) erhaltenen Compiler-Informationen an, löschen den Shader und geben `null` zurück, um den Fehler beim Laden anzuzeigen.
5. Wurde der Shader geladen und erfolgreich kompiliert, wird der kompilierte Shader zurückgegeben.

> [!NOTE]
> Fügen Sie diesen Code zu Ihrer `main()`-Funktion hinzu:

```js
// Initialize a shader program; this is where all the lighting
// for the vertices and so forth is established.
const shaderProgram = initShaderProgram(gl, vsSource, fsSource);
```

Nachdem wir ein Shader-Programm erstellt haben, müssen wir die Positionen ermitteln, die WebGL unseren Eingaben zugewiesen hat. In diesem Fall haben wir ein Attribute und zwei Uniforms. Attributes erhalten ihre Werte aus Buffern. Bei jeder Ausführung des Vertex-Shaders wird der nächste Wert aus dem Buffer gelesen, der dem jeweiligen Attribute zugewiesen ist. [Uniforms](/de/docs/Web/API/WebGL_API/Data#uniforms) ähneln globalen JavaScript-Variablen: Ihr Wert bleibt bei allen Ausführungen eines Shaders gleich. Da die Positionen von Attributes und Uniforms jeweils zu einem bestimmten Shader-Programm gehören, speichern wir sie zusammen, damit wir sie einfach weitergeben können.

> [!NOTE]
> Fügen Sie diesen Code zu Ihrer `main()`-Funktion hinzu:

```js
// Collect all the info needed to use the shader program.
// Look up which attribute our shader program is using
// for aVertexPosition and look up uniform locations.
const programInfo = {
  program: shaderProgram,
  attribLocations: {
    vertexPosition: gl.getAttribLocation(shaderProgram, "aVertexPosition"),
  },
  uniformLocations: {
    projectionMatrix: gl.getUniformLocation(shaderProgram, "uProjectionMatrix"),
    modelViewMatrix: gl.getUniformLocation(shaderProgram, "uModelViewMatrix"),
  },
};
```

## Die quadratische Fläche erstellen

Bevor wir die quadratische Fläche rendern können, müssen wir einen Buffer für ihre Vertex-Positionen erstellen und diese Positionen darin speichern.

Dafür verwenden wir eine Funktion namens `initBuffers()`, die wir in einem separaten [JavaScript-Modul](/de/docs/Web/JavaScript/Guide/Modules) implementieren. Wenn wir uns mit fortgeschritteneren WebGL-Konzepten befassen, werden wir dieses Modul erweitern, um weitere – und komplexere – 3D-Objekte zu erstellen.

> [!NOTE]
> Erstellen Sie eine neue Datei namens „init-buffers.js“ mit folgendem Inhalt:

```js
function initBuffers(gl) {
  const positionBuffer = initPositionBuffer(gl);

  return {
    position: positionBuffer,
  };
}

function initPositionBuffer(gl) {
  // Create a buffer for the square's positions.
  const positionBuffer = gl.createBuffer();

  // Select the positionBuffer as the one to apply buffer
  // operations to from here out.
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

  // Now create an array of positions for the square.
  const positions = [1.0, 1.0, -1.0, 1.0, 1.0, -1.0, -1.0, -1.0];

  // Now pass the list of positions into WebGL to build the
  // shape. We do this by creating a Float32Array from the
  // JavaScript array, then use it to fill the current buffer.
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

  return positionBuffer;
}

export { initBuffers };
```

Angesichts der einfachen Szene in diesem Beispiel ist diese Funktion recht unkompliziert. Zuerst ruft sie die Methode [`createBuffer()`](/de/docs/Web/API/WebGLRenderingContext/createBuffer) des `gl`-Objekts auf, um einen Buffer für die Vertex-Positionen zu erstellen. Dieser wird anschließend mit [`bindBuffer()`](/de/docs/Web/API/WebGLRenderingContext/bindBuffer) an den Kontext gebunden.

Danach erstellen wir ein JavaScript-Array mit den Positionen aller Vertices der quadratischen Fläche. Dieses wird in ein Array von Gleitkommazahlen umgewandelt und an die Methode [`bufferData()`](/de/docs/Web/API/WebGLRenderingContext/bufferData) des `gl`-Objekts übergeben, um die Vertex-Positionen des Objekts festzulegen.

## Die Szene rendern

Sobald die Shader eingerichtet, die Positionen ermittelt und die Vertex-Positionen der quadratischen Fläche in einem Buffer gespeichert sind, können wir die Szene rendern. Dazu verwenden wir die Funktion `drawScene()`, die wir ebenfalls in einem separaten JavaScript-Modul implementieren.

> [!NOTE]
> Erstellen Sie eine neue Datei namens „draw-scene.js“ mit folgendem Inhalt:

```js
function drawScene(gl, programInfo, buffers) {
  gl.clearColor(0.0, 0.0, 0.0, 1.0); // Clear to black, fully opaque
  gl.clearDepth(1.0); // Clear everything
  gl.enable(gl.DEPTH_TEST); // Enable depth testing
  gl.depthFunc(gl.LEQUAL); // Near things obscure far things

  // Clear the canvas before we start drawing on it.

  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

  // Create a perspective matrix, a special matrix that is
  // used to simulate the distortion of perspective in a camera.
  // Our field of view is 45 degrees, with a width/height
  // ratio that matches the display size of the canvas
  // and we only want to see objects between 0.1 units
  // and 100 units away from the camera.

  const fieldOfView = (45 * Math.PI) / 180; // in radians
  const aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
  const zNear = 0.1;
  const zFar = 100.0;
  const projectionMatrix = mat4.create();

  // note: glMatrix always has the first argument
  // as the destination to receive the result.
  mat4.perspective(projectionMatrix, fieldOfView, aspect, zNear, zFar);

  // Set the drawing position to the "identity" point, which is
  // the center of the scene.
  const modelViewMatrix = mat4.create();

  // Now move the drawing position a bit to where we want to
  // start drawing the square.
  mat4.translate(
    modelViewMatrix, // destination matrix
    modelViewMatrix, // matrix to translate
    [-0.0, 0.0, -6.0],
  ); // amount to translate

  // Tell WebGL how to pull out the positions from the position
  // buffer into the vertexPosition attribute.
  setPositionAttribute(gl, buffers, programInfo);

  // Tell WebGL to use our program when drawing
  gl.useProgram(programInfo.program);

  // Set the shader uniforms
  gl.uniformMatrix4fv(
    programInfo.uniformLocations.projectionMatrix,
    false,
    projectionMatrix,
  );
  gl.uniformMatrix4fv(
    programInfo.uniformLocations.modelViewMatrix,
    false,
    modelViewMatrix,
  );

  {
    const offset = 0;
    const vertexCount = 4;
    gl.drawArrays(gl.TRIANGLE_STRIP, offset, vertexCount);
  }
}

// Tell WebGL how to pull out the positions from the position
// buffer into the vertexPosition attribute.
function setPositionAttribute(gl, buffers, programInfo) {
  const numComponents = 2; // pull out 2 values per iteration
  const type = gl.FLOAT; // the data in the buffer is 32bit floats
  const normalize = false; // don't normalize
  const stride = 0; // how many bytes to get from one set of values to the next
  // 0 = use type and numComponents above
  const offset = 0; // how many bytes inside the buffer to start from
  gl.bindBuffer(gl.ARRAY_BUFFER, buffers.position);
  gl.vertexAttribPointer(
    programInfo.attribLocations.vertexPosition,
    numComponents,
    type,
    normalize,
    stride,
    offset,
  );
  gl.enableVertexAttribArray(programInfo.attribLocations.vertexPosition);
}

export { drawScene };
```

Zuerst löschen wir den bisherigen Inhalt des Canvas und setzen ihn auf unsere Hintergrundfarbe. Anschließend legen wir die Perspektive der Kamera fest: Wir verwenden einen Blickwinkel von 45° und ein Seitenverhältnis, das den Anzeigemaßen unseres Canvas entspricht. Außerdem geben wir an, dass nur Objekte gerendert werden sollen, die zwischen 0,1 und 100 Einheiten von der Kamera entfernt sind.

Dann legen wir die Position der quadratischen Fläche fest, indem wir die Identitätsmatrix laden und die Fläche um 6 Einheiten von der Kamera weg verschieben. Danach binden wir den Vertex-Buffer des Quadrats an das Attribute, das der Shader für `aVertexPosition` verwendet, und teilen WebGL mit, wie die Daten daraus gelesen werden sollen. Schließlich zeichnen wir das Objekt durch Aufruf der Methode [`drawArrays()`](/de/docs/Web/API/WebGLRenderingContext/drawArrays).

Rufen wir abschließend `initBuffers()` und `drawScene()` auf.

> [!NOTE]
> Fügen Sie diesen Code am Anfang Ihrer Datei „webgl-demo.js“ hinzu:

```js
import { initBuffers } from "./init-buffers.js";
import { drawScene } from "./draw-scene.js";
```

> [!NOTE]
> Fügen Sie diesen Code am Ende Ihrer `main()`-Funktion hinzu:

```js
// Here's where we call the routine that builds all the
// objects we'll be drawing.
const buffers = initBuffers(gl);

// Draw the scene
drawScene(gl, programInfo, buffers);
```

Das Ergebnis sollte so aussehen:

{{EmbedGHLiveSample('dom-examples/webgl-examples/tutorial/sample2/index.html', 670, 510) }}

[Vollständigen Code ansehen](https://github.com/mdn/dom-examples/tree/main/webgl-examples/tutorial/sample2) | [Demo auf einer neuen Seite öffnen](https://mdn.github.io/dom-examples/webgl-examples/tutorial/sample2/)

## Hilfsoperationen für Matrizen

Matrixoperationen mögen kompliziert erscheinen, aber [wenn Sie sie Schritt für Schritt betrachten, sind sie recht einfach](https://webglfundamentals.org/webgl/lessons/webgl-2d-matrices.html). Üblicherweise verwendet man eine Matrixbibliothek, statt selbst eine zu schreiben. In unserem Fall verwenden wir die verbreitete [glMatrix-Bibliothek](https://glmatrix.net/).

## Siehe auch

- [Matrizen](https://webglfundamentals.org/webgl/lessons/webgl-2d-matrices.html) auf WebGLFundamentals
- [Matrizen](https://mathworld.wolfram.com/Matrix.html) auf Wolfram MathWorld
- [Matrix](<https://en.wikipedia.org/wiki/Matrix_(mathematics)>) auf Wikipedia

{{PreviousNext("Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL", "Web/API/WebGL_API/Tutorial/Using_shaders_to_apply_color_in_WebGL")}}
