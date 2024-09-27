---
title: Hinzufügen von 2D-Inhalten zu einem WebGL-Kontext
slug: Web/API/WebGL_API/Tutorial/Adding_2D_content_to_a_WebGL_context
l10n:
  sourceCommit: b065c09b79d18abf0f04778c9307e1c312b8c6f9
---

{{DefaultAPISidebar("WebGL")}} {{PreviousNext("Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL", "Web/API/WebGL_API/Tutorial/Using_shaders_to_apply_color_in_WebGL")}}

Sobald Sie erfolgreich [einen WebGL-Kontext erstellt haben](/de/docs/Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL), können Sie anfangen, in ihm zu rendern. Eine einfache Sache, die wir tun können, ist, eine untexturierte quadratische Ebene zu zeichnen, also fangen wir damit an.

Der komplette Quellcode für dieses Projekt ist [auf GitHub verfügbar](https://github.com/mdn/dom-examples/tree/main/webgl-examples/tutorial/sample2).

## Einbinden der glMatrix-Bibliothek

Dieses Projekt verwendet die [glMatrix](https://glmatrix.net/) Bibliothek, um seine Matrixoperationen durchzuführen. Daher müssen Sie diese in Ihr Projekt einbinden. Wir laden eine Kopie von einem CDN.

> [!NOTE]
> Aktualisieren Sie Ihre "index.html", damit sie so aussieht:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>WebGL Demo</title>
    <link rel="stylesheet" href="./webgl.css" type="text/css" />
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/gl-matrix/2.8.1/gl-matrix-min.js"
      integrity="sha512-zhHQR0/H5SEBL3Wn6yYSaTTZej12z0hVZKOv3TwCUXT1z5qeqGcXJLLrbERYRScEDDpYIJhPC1fk31gqR783iQ=="
      crossorigin="anonymous"
      defer></script>
    <script src="webgl-demo.js" type="module"></script>
  </head>

  <body>
    <canvas id="glcanvas" width="640" height="480"></canvas>
  </body>
</html>
```

## Zeichnen der Szene

Das Wichtigste, das Sie verstehen müssen, bevor wir beginnen, ist, dass wir, obwohl wir in diesem Beispiel nur ein quadratisches Ebenenobjekt rendern, immer noch in einem 3D-Raum zeichnen. Wir zeichnen jedoch ein Quadrat und platzieren es direkt vor der Kamera senkrecht zur Blickrichtung. Wir müssen die Shader definieren, die die Farbe für unsere einfache Szene erzeugen sowie unser Objekt zeichnen werden. Diese bestimmen, wie die quadratische Ebene auf dem Bildschirm erscheint.

### Die Shader

Ein **Shader** ist ein Programm, geschrieben in der [OpenGL ES Shading Language](https://registry.khronos.org/OpenGL/specs/es/3.2/GLSL_ES_Specification_3.20.pdf) (**GLSL**), das Informationen über die Vertices, die eine Form bilden, nimmt und die Daten generiert, die benötigt werden, um die Pixel auf dem Bildschirm zu rendern: nämlich die Positionen der Pixel und deren Farben.

Beim Zeichnen von WebGL-Inhalten werden zwei Shader-Funktionen ausgeführt: der **Vertex-Shader** und der **Fragment-Shader**. Diese schreiben Sie in GLSL und übergeben den Text des Codes an WebGL, um ihn für die Ausführung auf der GPU zu kompilieren. Zusammen wird ein Satz von Vertex- und Fragment-Shadern als **Shader-Programm** bezeichnet.

Lassen Sie uns einen kurzen Blick auf die beiden Shader-Typen werfen, mit dem Beispiel im Kopf, eine 2D-Form in den WebGL-Kontext zu zeichnen.

#### Vertex-Shader

Jedes Mal, wenn eine Form gerendert wird, wird der Vertex-Shader für jeden Vertex in der Form ausgeführt. Seine Aufgabe ist es, den Eingabevertex von seinem ursprünglichen Koordinatensystem in das von WebGL verwendete **[Clip-Space](/de/docs/Web/API/WebGL_API/WebGL_model_view_projection#clip_space)**-Koordinatensystem zu transformieren, in dem jede Achse einen Bereich von -1.0 bis 1.0 hat, unabhängig von Seitenverhältnis, tatsächlicher Größe oder anderen Faktoren.

Der Vertex-Shader muss die erforderlichen Transformationen auf der Position des Vertexes durchführen, alle anderen Anpassungen oder Berechnungen vornehmen, die er auf einer Pro-Vertex-Basis vornehmen muss, dann den transformierten Vertex zurückgeben, indem er ihn in einer speziellen von GLSL bereitgestellten Variablen speichert, die `gl_Position` genannt wird.

Der Vertex-Shader kann nach Bedarf auch Dinge wie die Bestimmung der Koordinaten innerhalb der Textur der Fläche des [Texels](/de/docs/Glossary/texel) vornehmen, das auf den Vertex angewendet werden soll, die Normalen anwenden, um den Beleuchtungsfaktor zu bestimmen, der auf den Vertex angewendet werden soll, und so weiter. Diese Informationen können dann in [Varyings](/de/docs/Web/API/WebGL_API/Data#varyings) oder [Attributes](/de/docs/Web/API/WebGL_API/Data#attributes) gespeichert werden, um mit dem Fragment-Shader geteilt zu werden.

Unser untenstehender Vertex-Shader erhält Vertex-Positionswerte von einem Attribut, das wir `aVertexPosition` nennen. Diese Position wird dann mit zwei von uns bereitgestellten 4x4-Matrizen multipliziert, die `uProjectionMatrix` und `uModelViewMatrix` genannt werden; `gl_Position` wird auf das Ergebnis gesetzt. Für weitere Informationen über Projektionen und andere Matrizen [könnten Sie diesen Artikel nützlich finden](https://webglfundamentals.org/webgl/lessons/webgl-3d-perspective.html).

> [!NOTE]
> Fügen Sie diesen Code Ihrer `main()`-Funktion hinzu:

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

Es ist erwähnenswert, dass wir ein `vec4`-Attribut für die Vertex-Position verwenden, das eigentlich keinen 4-Komponenten-Vektor verwendet; das heißt, es könnte abhängig von der Situation als `vec2` oder `vec3` behandelt werden. Aber wenn wir unsere Mathematik machen, werden wir es als `vec4` benötigen, also anstatt es jedes Mal in ein `vec4` zu konvertieren, wenn wir Mathematik machen, verwenden wir von Anfang an ein `vec4`. Dies eliminiert Operationen aus jeder Berechnung, die wir in unserem Shader durchführen. Leistung spielt eine Rolle.

In diesem Beispiel berechnen wir überhaupt keine Beleuchtung, da wir noch keine auf die Szene angewandt haben. Das kommt später, im Beispiel [Beleuchtung in WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Lighting_in_WebGL). Beachten Sie auch das Fehlen von Arbeiten mit Texturen hier; dies wird in [Verwendung von Texturen in WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL) hinzugefügt.

#### Fragment-Shader

Der **Fragment-Shader** wird einmal für jedes Pixel auf jeder zu zeichnenden Form aufgerufen, nachdem die Vertices der Form vom Vertex-Shader verarbeitet wurden. Seine Aufgabe ist es, die Farbe dieses Pixels zu bestimmen, indem er herausfindet, welches Texel (das heißt, das Pixel innerhalb der Textur der Form) auf das Pixel angewendet werden soll, die Farbe dieses Texels zu erhalten und dann die entsprechende Beleuchtung auf die Farbe anzuwenden. Die Farbe wird dann an die WebGL-Schicht zurückgegeben, indem sie in der speziellen Variablen `gl_FragColor` gespeichert wird. Diese Farbe wird dann in der richtigen Position für das entsprechende Pixel der Form auf dem Bildschirm gezeichnet.

In diesem Fall geben wir jedes Mal Weiß zurück, da wir nur ein weißes Quadrat zeichnen, ohne Beleuchtung zu verwenden.

> [!NOTE]
> Fügen Sie diesen Code Ihrer `main()`-Funktion hinzu:

```js
const fsSource = `
    void main() {
      gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
    }
  `;
```

### Initialisieren der Shader

Jetzt, da wir die beiden Shader definiert haben, müssen wir sie an WebGL übergeben, kompilieren und miteinander verknüpfen. Der untenstehende Code erstellt die beiden Shader, indem er `loadShader()` aufruft und den Typ und den Quellcode für den Shader übergibt. Dann wird ein Programm erstellt, die Shader werden angehängt und diese miteinander verknüpft. Wenn das Kompilieren oder Verknüpfen fehlschlägt, zeigt der Code eine Warnung an.

> [!NOTE]
> Fügen Sie diese beiden Funktionen Ihrem "webgl-demo.js"-Skript hinzu:

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

Die Funktion `loadShader()` nimmt den WebGL-Kontext, den Shader-Typ und den Quellcode als Eingabe, erstellt und kompiliert dann den Shader wie folgt:

1. Ein neuer Shader wird durch Aufruf von [`gl.createShader()`](/de/docs/Web/API/WebGLRenderingContext/createShader) erstellt.
2. Der Quellcode des Shaders wird an den Shader gesendet, indem [`gl.shaderSource()`](/de/docs/Web/API/WebGLRenderingContext/shaderSource) aufgerufen wird.
3. Sobald der Shader den Quellcode hat, wird er mit [`gl.compileShader()`](/de/docs/Web/API/WebGLRenderingContext/compileShader) kompiliert.
4. Um sicherzustellen, dass der Shader erfolgreich kompiliert wurde, wird der Shader-Parameter `gl.COMPILE_STATUS` überprüft. Um seinen Wert zu erhalten, rufen wir [`gl.getShaderParameter()`](/de/docs/Web/API/WebGLRenderingContext/getShaderParameter) auf und spezifizieren den Shader und den Namen des Parameters, den wir überprüfen möchten (`gl.COMPILE_STATUS`). Wenn das `false` ist, wissen wir, dass der Shader nicht kompiliert wurde, daher zeigen wir eine Warnung mit Protokollinformationen an, die vom Compiler mit [`gl.getShaderInfoLog()`](/de/docs/Web/API/WebGLRenderingContext/getShaderInfoLog) erhalten wurden, löschen dann den Shader und geben `null` zurück, um ein Fehlschlagen beim Laden des Shaders anzuzeigen.
5. Wenn der Shader geladen und erfolgreich kompiliert wurde, wird der kompilierte Shader an den Aufrufer zurückgegeben.

> [!NOTE]
> Fügen Sie diesen Code Ihrer `main()`-Funktion hinzu:

```js
// Initialize a shader program; this is where all the lighting
// for the vertices and so forth is established.
const shaderProgram = initShaderProgram(gl, vsSource, fsSource);
```

Nachdem wir ein Shader-Programm erstellt haben, müssen wir die Orte suchen, die WebGL unseren Eingaben zugewiesen hat. In diesem Fall haben wir ein Attribut und zwei Uniforms. Attribute erhalten Werte aus Buffern. Jede Iteration des Vertex-Shaders erhält den nächsten Wert aus dem Puffer, der diesem Attribut zugewiesen ist. [Uniforms](/de/docs/Web/API/WebGL_API/Data#uniforms) sind ähnlich wie JavaScript-Globale Variablen. Sie bleiben für alle Iterationen eines Shaders gleich. Da die Attribut- und Uniform-Orte spezifisch für ein einzelnes Shader-Programm sind, speichern wir sie zusammen, um sie leicht weitergeben zu können.

> [!NOTE]
> Fügen Sie diesen Code Ihrer `main()`-Funktion hinzu:

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

Bevor wir unsere quadratische Ebene rendern können, müssen wir den Buffer erstellen, der ihre Vertex-Positionen enthält und die Vertex-Positionen darin ablegen.

Das werden wir mit einer Funktion namens `initBuffers()` tun, die wir in einem separaten [JavaScript-Modul](/de/docs/Web/JavaScript/Guide/Modules) implementieren werden. Während wir fortgeschrittenere WebGL-Konzepte erkunden, wird dieses Modul erweitert, um mehr und komplexere 3D-Objekte zu erstellen.

> [!NOTE]
> Erstellen Sie eine neue Datei namens "init-buffers.js" und geben Sie ihr folgenden Inhalt:

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

Diese Routine ist ziemlich einfach angesichts der grundlegenden Natur der Szene in diesem Beispiel. Sie beginnt mit dem Aufruf der Methode [`createBuffer()`](/de/docs/Web/API/WebGLRenderingContext/createBuffer) des `gl`-Objekts, um einen Buffer zu erhalten, in dem wir die Vertex-Positionen speichern werden. Dieser wird dann an den Kontext gebunden, indem die Methode [`bindBuffer()`](/de/docs/Web/API/WebGLRenderingContext/bindBuffer) aufgerufen wird.

Sobald das erledigt ist, erstellen wir ein JavaScript-Array, das die Position für jeden Vertex der quadratischen Ebene enthält. Dies wird dann in ein Array von Floats konvertiert und in die Methode [`bufferData()`](/de/docs/Web/API/WebGLRenderingContext/bufferData) des `gl`-Objekts übergeben, um die Vertex-Positionen für das Objekt festzulegen.

## Rendern der Szene

Sobald die Shader festgelegt, die Orte nachgeschlagen und die Vertex-Positionen der quadratischen Ebene in einen Buffer gelegt wurden, können wir die Szene tatsächlich rendern. Wir werden dies in einer Funktion `drawScene()` tun, die wir ebenfalls in einem separaten JavaScript-Modul implementieren werden.

> [!NOTE]
> Erstellen Sie eine neue Datei namens "draw-scene.js" und geben Sie ihr folgenden Inhalt:

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

  // note: glmatrix.js always has the first argument
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

Der erste Schritt ist, die Leinwand mit unserer Hintergrundfarbe zu löschen; dann etablieren wir die Perspektive der Kamera. Wir setzen ein Sichtfeld von 45°, mit einem Breite-zu-Höhe-Verhältnis, das den Anzeigemaßen unserer Leinwand entspricht. Wir geben auch an, dass wir nur Objekte zwischen 0.1 und 100 Einheiten von der Kamera entfernt rendern wollen.

Dann legen wir die Position der quadratischen Ebene fest, indem wir die Identitätsposition laden und um 6 Einheiten von der Kamera weg übersetzen. Danach binden wir den Vertex-Buffer des Quadrats an das Attribut, das der Shader für `aVertexPosition` verwendet, und sagen WebGL, wie es die Daten daraus extrahiert. Schließlich zeichnen wir das Objekt, indem wir die Methode [`drawArrays()`](/de/docs/Web/API/WebGLRenderingContext/drawArrays) aufrufen.

Zum Schluss rufen wir `initBuffers()` und `drawScene()` auf.

> [!NOTE]
> Fügen Sie diesen Code am Anfang Ihrer "webgl-demo.js"-Datei hinzu:

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

[Vollständigen Code ansehen](https://github.com/mdn/dom-examples/tree/main/webgl-examples/tutorial/sample2) | [Dieses Demo auf einer neuen Seite öffnen](https://mdn.github.io/dom-examples/webgl-examples/tutorial/sample2/)

## Matrix-Dienstprogramme

Matrixoperationen mögen kompliziert erscheinen, aber [sie sind eigentlich ziemlich einfach, wenn Sie sie Schritt für Schritt angehen](https://webglfundamentals.org/webgl/lessons/webgl-2d-matrices.html). Im Allgemeinen verwenden Menschen eine Matrix-Bibliothek anstelle ihre eigene zu schreiben. In unserem Fall verwenden wir die beliebte [glMatrix-Bibliothek](https://glmatrix.net/).

### Siehe auch

- [Matrizen](https://webglfundamentals.org/webgl/lessons/webgl-2d-matrices.html) auf WebGLFundamentals
- [Matrizen](https://mathworld.wolfram.com/Matrix.html) auf Wolfram MathWorld
- [Matrix](<https://en.wikipedia.org/wiki/Matrix_(mathematics)>) auf Wikipedia

{{PreviousNext("Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL", "Web/API/WebGL_API/Tutorial/Using_shaders_to_apply_color_in_WebGL")}}
