---
title: Hinzufügen von 2D-Inhalten zu einem WebGL-Kontext
slug: Web/API/WebGL_API/Tutorial/Adding_2D_content_to_a_WebGL_context
l10n:
  sourceCommit: ec7b3262bcd4a03a09bab0c57e3de4b51d4de4f8
---

{{DefaultAPISidebar("WebGL")}} {{PreviousNext("Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL", "Web/API/WebGL_API/Tutorial/Using_shaders_to_apply_color_in_WebGL")}}

Sobald Sie erfolgreich [einen WebGL-Kontext erstellt haben](/de/docs/Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL), können Sie mit dem Rendern beginnen. Eine einfache Sache, die wir tun können, ist das Zeichnen einer untexturierten quadratischen Ebene, also beginnen wir damit.

Der vollständige Quellcode für dieses Projekt ist [auf GitHub verfügbar](https://github.com/mdn/dom-examples/tree/main/webgl-examples/tutorial/sample2).

## Einbinden der glMatrix-Bibliothek

Dieses Projekt verwendet die [glMatrix](https://glmatrix.net/)-Bibliothek für die Ausführung von Matrixoperationen, daher müssen Sie diese in Ihr Projekt einbinden. Wir laden eine Kopie von einem CDN.

> [!NOTE]
> Aktualisieren Sie Ihre "index.html", sodass sie wie folgt aussieht:

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

## Zeichnen der Szene

Das Wichtigste, das Sie verstehen sollten, bevor wir beginnen, ist, dass wir, obwohl wir in diesem Beispiel nur ein quadratisches Ebenenobjekt rendern, immer noch im 3D-Raum zeichnen. Es ist nur so, dass wir ein Quadrat zeichnen und dieses direkt vor der Kamera senkrecht zur Blickrichtung platzieren. Wir müssen die Shader definieren, die die Farbe für unsere einfache Szene erzeugen und unser Objekt zeichnen. Diese sorgen dafür, wie die quadratische Ebene auf dem Bildschirm erscheint.

### Die Shader

Ein **Shader** ist ein Programm, das mit der [OpenGL ES Shading Language](https://registry.khronos.org/OpenGL/specs/es/3.2/GLSL_ES_Specification_3.20.pdf) (**GLSL**) geschrieben ist und Informationen über die Eckpunkte eines Objekts verwendet, um die Daten zu generieren, die benötigt werden, um die Pixel auf den Bildschirm zu rendern: nämlich die Positionen der Pixel und ihre Farben.

Es gibt zwei Shader-Funktionen, die beim Zeichnen von WebGL-Inhalt ausgeführt werden: den **Vertex-Shader** und den **Fragment-Shader**. Sie schreiben diese in GLSL und übergeben den Text des Codes an WebGL zur Kompilierung für die Ausführung auf der GPU. Zusammen wird ein Satz von Vertex- und Fragment-Shadern als **Shader-Programm** bezeichnet.

Schauen wir uns die beiden Arten von Shadern kurz an, mit dem Gedanken im Hinterkopf, wie man eine 2D-Form in den WebGL-Kontext zeichnet.

#### Vertex-Shader

Jedes Mal, wenn eine Form gerendert wird, wird der Vertex-Shader für jeden Vertex der Form ausgeführt. Seine Aufgabe ist es, den Eingabe-Vertex von seinem ursprünglichen Koordinatensystem in das WebGL-Clipspace-Koordinatensystem umzurechnen, in dem jede Achse eine Reichweite von -1.0 bis 1.0 hat, unabhängig vom Seitenverhältnis, der tatsächlichen Größe oder anderen Faktoren.

Der Vertex-Shader muss die benötigten Transformationen auf die Position des Vertex ausführen, alle weiteren Anpassungen oder Berechnungen vornehmen, die er auf Basis jedes Vertex durchführen muss, und den transformierten Vertex in einer speziellen von GLSL bereitgestellten Variable namens `gl_Position` speichern.

Der Vertex-Shader kann bei Bedarf auch Dinge wie die Bestimmung der Koordinaten innerhalb der Textur des Oberflächenpixels (texel) zur Anwendung auf den Vertex, das Anwenden der Normalen zur Bestimmung des Beleuchtungsfaktors für den Vertex usw. durchführen. Diese Informationen können dann in [varyings](/de/docs/Web/API/WebGL_API/Data#varyings) oder [attributes](/de/docs/Web/API/WebGL_API/Data#attributes) gespeichert werden, um sie mit dem Fragment-Shader zu teilen.

Unser untenstehender Vertex-Shader erhält die Positionswerte der Vertexe aus einem von uns definierten Attribut namens `aVertexPosition`. Diese Position wird dann mit zwei von uns bereitgestellten 4x4-Matrizen, `uProjectionMatrix` und `uModelViewMatrix` genannt, multipliziert; `gl_Position` wird auf das Ergebnis gesetzt. Weitere Informationen zu Projektionen und anderen Matrizen finden Sie [in diesem Artikel](https://webglfundamentals.org/webgl/lessons/webgl-3d-perspective.html).

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

Es ist bemerkenswert, dass wir ein `vec4`-Attribut für die Position der Vertexe verwenden, das tatsächlich keinen 4-Komponenten-Vektor benötigt; es könnte je nach Situation auch als `vec2` oder `vec3` behandelt werden. Aber wenn wir unsere Berechnungen durchführen, müssen wir es als `vec4` verwenden, daher verwenden wir lieber von Anfang an ein `vec4`, anstatt es jedes Mal, wenn wir Berechnungen durchführen, in ein `vec4` zu konvertieren. Dies eliminiert Operationen jeder Berechnung, die wir in unserem Shader durchführen. Leistung ist wichtig.

In diesem Beispiel berechnen wir überhaupt keine Beleuchtung, da wir noch keine auf die Szene angewendet haben. Dies wird später im Beispiel [Beleuchtung in WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Lighting_in_WebGL) kommen. Beachten Sie auch, dass hier keine Arbeit mit Texturen durchgeführt wird; dies wird in [Verwendung von Texturen in WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL) hinzugefügt.

#### Fragment-Shader

Der **Fragment-Shader** wird einmal für jedes Pixel auf jeder zu zeichnenden Form aufgerufen, nachdem die Vertexe der Form vom Vertex-Shader verarbeitet worden sind. Seine Aufgabe ist es, die Farbe dieses Pixels zu bestimmen, indem er herausfindet, welches Texel (also das Pixel aus der Textur der Form) auf das Pixel angewendet werden soll, die Farbe dieses Texels ermittelt und dann die entsprechende Beleuchtung auf die Farbe anwendet. Die Farbe wird dann an die WebGL-Schicht zurückgegeben, indem sie in der speziellen Variablen `gl_FragColor` gespeichert wird. Diese Farbe wird dann in der korrekten Position für das entsprechende Pixel der Form auf dem Bildschirm gezeichnet.

In diesem Fall geben wir jedes Mal Weiß zurück, da wir einfach ein weißes Quadrat zeichnen, ohne Beleuchtung zu verwenden.

> [!NOTE]
> Fügen Sie diesen Code zu Ihrer `main()`-Funktion hinzu:

```js
const fsSource = `
    void main() {
      gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
    }
  `;
```

### Initialisieren der Shader

Nachdem wir die beiden Shader definiert haben, müssen wir sie an WebGL übergeben, kompilieren und miteinander verknüpfen. Der folgende Code erstellt die beiden Shader, indem er `loadShader()` aufruft und den Typ und den Quellcode des Shaders übergibt. Dann erstellt er ein Programm, fügt die Shader hinzu und verknüpft sie. Wenn das Kompilieren oder Verknüpfen fehlschlägt, zeigt der Code einen Alarm an.

> [!NOTE]
> Fügen Sie diese beiden Funktionen zu Ihrem "webgl-demo.js"-Skript hinzu:

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

Die Funktion `loadShader()` nimmt den WebGL-Kontext, den Shader-Typ und den Quellcode als Eingabe und erstellt und kompiliert den Shader wie folgt:

1. Ein neuer Shader wird erstellt, indem [`gl.createShader()`](/de/docs/Web/API/WebGLRenderingContext/createShader) aufgerufen wird.
2. Der Quellcode des Shaders wird dem Shader über [`gl.shaderSource()`](/de/docs/Web/API/WebGLRenderingContext/shaderSource) übergeben.
3. Nachdem der Shader den Quellcode hat, wird er mit [`gl.compileShader()`](/de/docs/Web/API/WebGLRenderingContext/compileShader) kompiliert.
4. Um sicherzustellen, dass der Shader erfolgreich kompiliert wurde, wird der Shader-Parameter `gl.COMPILE_STATUS` überprüft. Um seinen Wert zu erhalten, wird [`gl.getShaderParameter()`](/de/docs/Web/API/WebGLRenderingContext/getShaderParameter) aufgerufen, wobei der Shader und der Name des zu überprüfenden Parameters (`gl.COMPILE_STATUS`) angegeben werden. Wenn dieser `false` ist, wissen wir, dass der Shader nicht kompiliert wurde, also zeigen wir einen Alarm mit Protokollinformationen an, die vom Compiler mit [`gl.getShaderInfoLog()`](/de/docs/Web/API/WebGLRenderingContext/getShaderInfoLog) abgerufen werden. Dann löschen wir den Shader und geben `null` zurück, um ein Fehlschlagen des Ladens anzuzeigen.
5. Wenn der Shader geladen und erfolgreich kompiliert wurde, wird der kompilierte Shader an den Aufrufer zurückgegeben.

> [!NOTE]
> Fügen Sie diesen Code zu Ihrer `main()`-Funktion hinzu:

```js
// Initialize a shader program; this is where all the lighting
// for the vertices and so forth is established.
const shaderProgram = initShaderProgram(gl, vsSource, fsSource);
```

Nachdem wir ein Shader-Programm erstellt haben, müssen wir die von WebGL den Eingaben zugewiesenen Positionen ermitteln. In diesem Fall haben wir ein Attribut und zwei Uniformen. Attribute erhalten Werte aus Pufferarrays. Jede Iteration des Vertex-Shaders erhält den nächsten Wert aus dem Puffer, der diesem Attribut zugewiesen ist. [Uniforme](/de/docs/Web/API/WebGL_API/Data#uniforms) sind ähnlich globalen JavaScript-Variablen. Sie behalten für alle Iterationen eines Shaders denselben Wert. Da die Attribut- und Uniformpositionen spezifisch für ein einzelnes Shader-Programm sind, speichern wir sie zusammen, um sie einfach weitergeben zu können.

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

## Erstellen der quadratischen Ebene

Bevor wir unsere quadratische Ebene rendern können, müssen wir den Puffer erstellen, der ihre Vertex-Positionen enthält, und die Vertex-Positionen darin speichern.

Wir werden das mit einer Funktion namens `initBuffers()` tun, die wir in einem separaten [JavaScript-Modul](/de/docs/Web/JavaScript/Guide/Modules) implementieren. Während wir fortgeschrittenere WebGL-Konzepte erkunden, wird dieses Modul erweitert, um mehr - und komplexere - 3D-Objekte zu erstellen.

> [!NOTE]
> Erstellen Sie eine neue Datei namens "init-buffers.js" und geben Sie ihr den folgenden Inhalt:

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

Diese Routine ist ziemlich einfach, angesichts der grundlegenden Natur der Szene in diesem Beispiel. Sie beginnt mit dem Aufrufen der [`createBuffer()`](/de/docs/Web/API/WebGLRenderingContext/createBuffer)-Methode des `gl`-Objekts, um einen Puffer zu erhalten, in dem wir die Vertex-Positionen speichern werden. Dieser wird dann durch den Aufruf der [`bindBuffer()`](/de/docs/Web/API/WebGLRenderingContext/bindBuffer)-Methode an den Kontext gebunden.

Sobald das erledigt ist, erstellen wir ein JavaScript-Array, das die Position für jeden Vertex des quadratischen Plans enthält. Dieses wird dann in ein Array von Fließkommazahlen konvertiert und mit der [`bufferData()`](/de/docs/Web/API/WebGLRenderingContext/bufferData)-Methode des `gl`-Objekts übergeben, um die Vertex-Positionen für das Objekt festzulegen.

## Rendern der Szene

Sobald die Shader festgelegt sind, die Positionen ermittelt wurden und die Vertex-Positionen des quadratischen Plans in einen Puffer gelegt wurden, können wir tatsächlich die Szene rendern. Wir werden dies in einer `drawScene()`-Funktion tun, die wir wiederum in einem separaten JavaScript-Modul implementieren werden.

> [!NOTE]
> Erstellen Sie eine neue Datei namens "draw-scene.js" und geben Sie ihr den folgenden Inhalt:

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

Der erste Schritt besteht darin, die Leinwand auf unsere Hintergrundfarbe zu löschen; dann stellen wir die Perspektive der Kamera ein. Wir setzen ein Sichtfeld von 45° mit einem Breite-zu-Höhe-Verhältnis, das zu den Anzeigeabmessungen unserer Leinwand passt. Wir geben auch an, dass wir nur Objekte zwischen 0,1 und 100 Einheiten von der Kamera entfernt rendern wollen.

Dann legen wir die Position der quadratischen Ebene fest, indem wir die Identitätsposition laden und 6 Einheiten von der Kamera weg übersetzen. Danach binden wir den Eckpuffer des Quadrats an das Attribut, das der Shader für `aVertexPosition` verwendet, und wir teilen WebGL mit, wie die Daten daraus zu entnehmen sind. Schließlich zeichnen wir das Objekt, indem wir die [`drawArrays()`](/de/docs/Web/API/WebGLRenderingContext/drawArrays)-Methode aufrufen.

Lassen Sie uns abschließend `initBuffers()` und `drawScene()` aufrufen.

> [!NOTE]
> Fügen Sie diesen Code zu Beginn Ihrer "webgl-demo.js"-Datei hinzu:

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

Das Ergebnis sollte folgendermaßen aussehen:

{{EmbedGHLiveSample('dom-examples/webgl-examples/tutorial/sample2/index.html', 670, 510) }}

[Sehen Sie sich den vollständigen Code an](https://github.com/mdn/dom-examples/tree/main/webgl-examples/tutorial/sample2) | [Öffnen Sie dieses Demo auf einer neuen Seite](https://mdn.github.io/dom-examples/webgl-examples/tutorial/sample2/)

## Nützliche Matrixoperationen

Matrixoperationen mögen kompliziert erscheinen, aber [sie sind eigentlich ziemlich einfach, wenn Sie jeden Schritt einzeln betrachten](https://webglfundamentals.org/webgl/lessons/webgl-2d-matrices.html). Im Allgemeinen verwenden Menschen eher eine Matrixbibliothek, anstatt ihre eigene zu schreiben. In unserem Fall verwenden wir die beliebte [glMatrix-Bibliothek](https://glmatrix.net/).

### Siehe auch

- [Matrizen](https://webglfundamentals.org/webgl/lessons/webgl-2d-matrices.html) auf WebGLFundamentals
- [Matrizen](https://mathworld.wolfram.com/Matrix.html) auf Wolfram MathWorld
- [Matrix](<https://en.wikipedia.org/wiki/Matrix_(mathematics)>) auf Wikipedia

{{PreviousNext("Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL", "Web/API/WebGL_API/Tutorial/Using_shaders_to_apply_color_in_WebGL")}}
