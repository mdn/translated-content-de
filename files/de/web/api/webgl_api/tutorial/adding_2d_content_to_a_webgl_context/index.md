---
title: Hinzufügen von 2D-Inhalten zu einem WebGL-Kontext
slug: Web/API/WebGL_API/Tutorial/Adding_2D_content_to_a_WebGL_context
l10n:
  sourceCommit: b065c09b79d18abf0f04778c9307e1c312b8c6f9
---

{{DefaultAPISidebar("WebGL")}} {{PreviousNext("Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL", "Web/API/WebGL_API/Tutorial/Using_shaders_to_apply_color_in_WebGL")}}

Sobald Sie erfolgreich [einen WebGL-Kontext erstellt haben](/de/docs/Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL), können Sie anfangen, darin zu rendern. Eine einfache Sache, die wir tun können, ist, eine untexturierte quadratische Ebene zu zeichnen, also beginnen wir hier.

Der vollständige Quellcode für dieses Projekt ist [auf GitHub verfügbar](https://github.com/mdn/dom-examples/tree/main/webgl-examples/tutorial/sample2).

## Einbinden der glMatrix-Bibliothek

Dieses Projekt verwendet die [glMatrix](https://glmatrix.net/)-Bibliothek, um seine Matrixoperationen durchzuführen. Daher müssen Sie diese in Ihr Projekt einbinden. Wir laden eine Kopie von einem CDN.

> [!NOTE]
> Aktualisieren Sie Ihre "index.html", sodass sie folgendermaßen aussieht:

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

## Die Szene zeichnen

Das Wichtigste, bevor wir beginnen, ist zu verstehen, dass wir, obwohl wir in diesem Beispiel nur ein quadratisches Flächenobjekt rendern, trotzdem im 3D-Raum zeichnen. Wir zeichnen lediglich ein Quadrat und platzieren es direkt vor der Kamera senkrecht zur Blickrichtung. Wir müssen die Shader definieren, die die Farbe für unsere einfache Szene erzeugen und unser Objekt zeichnen. Diese definieren, wie die quadratische Ebene auf dem Bildschirm erscheint.

### Die Shader

Ein **Shader** ist ein Programm, das mit der [OpenGL ES Shading Language](https://registry.khronos.org/OpenGL/specs/es/3.2/GLSL_ES_Specification_3.20.pdf) (**GLSL**) geschrieben wird. Es nimmt Informationen über die Scheitelpunkte, aus denen eine Form besteht, und generiert die Daten, die zum Rendern der Pixel auf dem Bildschirm benötigt werden, nämlich die Positionen der Pixel und deren Farben.

Beim Zeichnen von WebGL-Inhalten werden zwei Shader-Funktionen ausgeführt: der **Vertex-Shader** und der **Fragment-Shader**. Diese schreiben Sie in GLSL und übergeben den Code als Text an WebGL, um ihn für die Ausführung auf der GPU zu kompilieren. Zusammen wird ein Satz von Vertex- und Fragment-Shadern als **Shader-Programm** bezeichnet.

Werfen wir einen kurzen Blick auf die beiden Shader-Arten, im Hinblick darauf, eine 2D-Form in den WebGL-Kontext zu zeichnen.

#### Vertex-Shader

Jedes Mal, wenn eine Form gerendert wird, wird der Vertex-Shader für jeden Scheitelpunkt der Form ausgeführt. Seine Aufgabe ist es, den Eingabescheitelpunkt von seinem ursprünglichen Koordinatensystem in das von WebGL verwendete **[Clip-Space](/de/docs/Web/API/WebGL_API/WebGL_model_view_projection#clip_space)**-Koordinatensystem zu transformieren, in dem jede Achse einen Bereich von -1,0 bis 1,0 hat, unabhängig vom Seitenverhältnis, der tatsächlichen Größe oder anderen Faktoren.

Der Vertex-Shader muss die notwendigen Transformationen auf die Position des Scheitelpunkts anwenden, alle notwendigen Anpassungen oder Berechnungen auf per-Scheitelpunkt-Basis durchführen und dann den transformierten Scheitelpunkt in einer speziellen von GLSL bereitgestellten Variablen namens `gl_Position` speichern.

Der Vertex-Shader kann bei Bedarf auch Dinge wie die Bestimmung der Koordinaten innerhalb der Textur der Fläche des {{Glossary("texel", "Texels")}}, das auf den Scheitelpunkt angewendet wird, die Anwendung der Normalen zur Bestimmung des Beleuchtungsfaktors für den Scheitelpunkt usw. machen. Diese Informationen können dann in [Varyings](/de/docs/Web/API/WebGL_API/Data#varyings) oder [Attributes](/de/docs/Web/API/WebGL_API/Data#attributes) gespeichert werden, um mit dem Fragment-Shader geteilt zu werden.

Unser unten stehender Vertex-Shader empfängt Scheitelpunktpositionswerte von einem Attribut, das wir `aVertexPosition` nennen. Diese Position wird dann mit zwei 4x4-Matrizen multipliziert, die wir bereitstellen, genannt `uProjectionMatrix` und `uModelViewMatrix`; `gl_Position` wird auf das Ergebnis gesetzt. Für weitere Informationen über Projektion und andere Matrizen [könnten Sie diesen Artikel nützlich finden](https://webglfundamentals.org/webgl/lessons/webgl-3d-perspective.html).

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

Es ist erwähnenswert, dass wir ein `vec4`-Attribut für die Scheitelpunktposition verwenden, das eigentlich keinen 4-Komponenten-Vektor verwendet, d.h., es könnte je nach Situation als `vec2` oder `vec3` behandelt werden. Aber wenn wir unsere Mathematik durchführen, benötigen wir es als `vec4`, also konvertieren wir es nicht jedes Mal in ein `vec4`, sondern verwenden von Anfang an ein `vec4`. Dies eliminiert Operationen aus jeder Berechnung, die wir in unserem Shader durchführen. Leistung ist wichtig.

In diesem Beispiel berechnen wir überhaupt keine Beleuchtung, da wir noch keine auf die Szene angewendet haben. Das kommt später, im Beispiel [Beleuchtung in WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Lighting_in_WebGL). Beachten Sie auch das Fehlen jeglicher Arbeit mit Texturen hier; das wird in [Verwendung von Texturen in WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL) hinzugefügt.

#### Fragment-Shader

Der **Fragment-Shader** wird einmal für jedes Pixel auf jeder zu zeichnenden Form aufgerufen, nachdem die Scheitelpunkte der Form durch den Vertex-Shader verarbeitet wurden. Seine Aufgabe ist es, die Farbe dieses Pixels zu bestimmen, indem er herausfindet, welches Texel (das ist, das Pixel aus der Textur der Form) auf das Pixel angewendet werden soll, die Farbe dieses Texels abruft und dann die entsprechende Beleuchtung auf die Farbe anwendet. Die Farbe wird dann an die WebGL-Schicht durch Speichern in der speziellen Variablen `gl_FragColor` zurückgegeben. Diese Farbe wird dann an der richtigen Position für das entsprechende Pixel der Form auf den Bildschirm gezeichnet.

In diesem Fall geben wir jedes Mal Weiß zurück, da wir nur ein weißes Quadrat ohne Beleuchtung zeichnen.

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

Nachdem wir die beiden Shader definiert haben, müssen wir sie an WebGL übergeben, kompilieren und zusammenfügen. Der unten stehende Code erstellt die beiden Shader, indem er `loadShader()` aufruft und den Typ und den Quellcode für den Shader übergibt. Dann erstellt er ein Programm, hängt die Shader an und verlinkt sie. Wenn das Kompilieren oder Verlinken fehlschlägt, zeigt der Code eine Warnung an.

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

Die `loadShader()`-Funktion nimmt als Eingabe den WebGL-Kontext, den Shader-Typ und den Quellcode, erstellt und kompiliert den Shader wie folgt:

1. Ein neuer Shader wird durch Aufrufen von [`gl.createShader()`](/de/docs/Web/API/WebGLRenderingContext/createShader) erstellt.
2. Der Quellcode des Shaders wird dem Shader durch Aufrufen von [`gl.shaderSource()`](/de/docs/Web/API/WebGLRenderingContext/shaderSource) übermittelt.
3. Sobald der Shader den Quellcode hat, wird er mit [`gl.compileShader()`](/de/docs/Web/API/WebGLRenderingContext/compileShader) kompiliert.
4. Um sicherzugehen, dass der Shader erfolgreich kompiliert wurde, wird der Shader-Parameter `gl.COMPILE_STATUS` überprüft. Um seinen Wert zu erhalten, wird [`gl.getShaderParameter()`](/de/docs/Web/API/WebGLRenderingContext/getShaderParameter) aufgerufen, wobei der Shader und der Name des zu prüfenden Parameters (`gl.COMPILE_STATUS`) angegeben werden. Wenn das `false` ist, wissen wir, dass der Shader nicht kompiliert wurde, also zeigen wir eine Warnung mit Protokollinformationen vom Compiler an, die mit [`gl.getShaderInfoLog()`](/de/docs/Web/API/WebGLRenderingContext/getShaderInfoLog) abgerufen werden, löschen den Shader und geben `null` zurück, um ein Fehlschlagen des Ladevorgangs anzuzeigen.
5. Wenn der Shader geladen und erfolgreich kompiliert wurde, wird der kompilierte Shader an den Anrufer zurückgegeben.

> [!NOTE]
> Fügen Sie diesen Code zu Ihrer `main()`-Funktion hinzu:

```js
// Initialize a shader program; this is where all the lighting
// for the vertices and so forth is established.
const shaderProgram = initShaderProgram(gl, vsSource, fsSource);
```

Nachdem wir ein Shader-Programm erstellt haben, müssen wir die von WebGL unseren Eingaben zugewiesenen Positionen ermitteln. In diesem Fall haben wir ein Attribut und zwei Uniforms. Attribute empfangen Werte aus Buffern. Jede Iteration des Vertex-Shaders erhält den nächsten Wert aus dem Buffer, der dem Attribut zugewiesen ist. [Uniforms](/de/docs/Web/API/WebGL_API/Data#uniforms) sind ähnlich wie globale JavaScript-Variablen. Sie behalten denselben Wert für alle Iterationen eines Shaders. Da die Attribut- und Uniform-Positionen spezifisch für ein einzelnes Shader-Programm sind, speichern wir sie zusammen, um sie leichter weitergeben zu können.

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

Bevor wir unsere quadratische Ebene rendern können, müssen wir den Buffer erstellen, der ihre Scheitelpunktpositionen enthält, und die Scheitelpunktpositionen darin platzieren.

Das machen wir mit einer Funktion, die wir `initBuffers()` nennen, die wir in einem separaten [JavaScript-Modul](/de/docs/Web/JavaScript/Guide/Modules) implementieren. Während wir fortgeschrittenere WebGL-Konzepte erkunden, wird dieses Modul erweitert, um mehr — und kompliziertere — 3D-Objekte zu erstellen.

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

Diese Routine ist ziemlich einfach, angesichts der grundlegenden Natur der Szene in diesem Beispiel. Sie beginnt damit, die Methode [`createBuffer()`](/de/docs/Web/API/WebGLRenderingContext/createBuffer) des `gl`-Objekts aufzurufen, um einen Buffer zu erhalten, in dem wir die Scheitelpunktpositionen speichern. Dieser wird dann an den Kontext gebunden, indem die Methode [`bindBuffer()`](/de/docs/Web/API/WebGLRenderingContext/bindBuffer) aufgerufen wird.

Sobald das erledigt ist, erstellen wir ein JavaScript-Array mit den Positionen für jeden Scheitelpunkt der quadratischen Ebene. Dieses wird dann in ein Float-Array konvertiert und in die Methode [`bufferData()`](/de/docs/Web/API/WebGLRenderingContext/bufferData) des `gl`-Objekts übergeben, um die Scheitelpunktpositionen für das Objekt festzulegen.

## Die Szene rendern

Sobald die Shader festgelegt sind, die Positionen ermittelt wurden und die Scheitelpunktpositionen der quadratischen Ebene in einem Buffer platziert wurden, können wir tatsächlich die Szene rendern. Wir tun dies in einer `drawScene()`-Funktion, die wir ebenfalls in einem separaten JavaScript-Modul implementieren.

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

Der erste Schritt ist es, die Leinwand in unserer Hintergrundfarbe zu löschen; dann stellen wir die Perspektive der Kamera fest. Wir setzen ein Sichtfeld von 45°, mit einem Breite-zu-Höhe-Verhältnis, das den Anzeigeabmessungen unserer Leinwand entspricht. Wir geben auch an, dass wir nur Objekte zwischen 0,1 und 100 Einheiten von der Kamera entfernt rendern möchten.

Danach legen wir die Position der quadratischen Ebene fest, indem wir die Identitätsposition laden und 6 Einheiten von der Kamera weg übersetzen. Anschließend binden wir den Scheitelpunktbuffer des Quadrats an das Attribut, das der Shader für `aVertexPosition` verwendet, und weisen WebGL an, wie es die Daten daraus extrahieren soll. Schließlich zeichnen wir das Objekt, indem wir die Methode [`drawArrays()`](/de/docs/Web/API/WebGLRenderingContext/drawArrays) aufrufen.

Am Ende rufen wir `initBuffers()` und `drawScene()` auf.

> [!NOTE]
> Fügen Sie diesen Code am Anfang Ihrer "webgl-demo.js"-Datei ein:

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

[Vollständigen Code anzeigen](https://github.com/mdn/dom-examples/tree/main/webgl-examples/tutorial/sample2) | [Öffnen Sie dieses Demo auf einer neuen Seite](https://mdn.github.io/dom-examples/webgl-examples/tutorial/sample2/)

## Matrix-Hilfsoperationen

Matrixoperationen mögen kompliziert erscheinen, aber [sie sind tatsächlich ziemlich einfach, wenn Sie sie Schritt für Schritt durchführen](https://webglfundamentals.org/webgl/lessons/webgl-2d-matrices.html). Im Allgemeinen verwenden die Leute eher eine Matrix-Bibliothek, anstatt ihre eigene zu schreiben. In unserem Fall verwenden wir die beliebte [glMatrix-Bibliothek](https://glmatrix.net/).

### Siehe auch

- [Matrizen](https://webglfundamentals.org/webgl/lessons/webgl-2d-matrices.html) auf WebGLFundamentals
- [Matrizen](https://mathworld.wolfram.com/Matrix.html) auf Wolfram MathWorld
- [Matrix](<https://en.wikipedia.org/wiki/Matrix_(mathematics)>) auf Wikipedia

{{PreviousNext("Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL", "Web/API/WebGL_API/Tutorial/Using_shaders_to_apply_color_in_WebGL")}}
