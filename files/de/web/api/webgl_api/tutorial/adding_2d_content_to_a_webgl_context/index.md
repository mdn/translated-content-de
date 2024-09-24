---
title: Hinzufügen von 2D-Inhalten zu einem WebGL-Kontext
slug: Web/API/WebGL_API/Tutorial/Adding_2D_content_to_a_WebGL_context
l10n:
  sourceCommit: b065c09b79d18abf0f04778c9307e1c312b8c6f9
---

{{DefaultAPISidebar("WebGL")}} {{PreviousNext("Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL", "Web/API/WebGL_API/Tutorial/Using_shaders_to_apply_color_in_WebGL")}}

Sobald Sie erfolgreich [einen WebGL-Kontext erstellt haben](/de/docs/Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL), können Sie beginnen, darin zu rendern. Eine einfache Aufgabe, die wir erledigen können, ist das Zeichnen einer untexturierten quadratischen Ebene, also beginnen wir damit.

Der vollständige Quellcode für dieses Projekt ist [auf GitHub verfügbar](https://github.com/mdn/dom-examples/tree/main/webgl-examples/tutorial/sample2).

## Einbinden der glMatrix-Bibliothek

Dieses Projekt verwendet die [glMatrix](https://glmatrix.net/) Bibliothek für seine Matrixoperationen, daher müssen Sie diese in Ihr Projekt einbinden. Wir laden eine Kopie von einem CDN.

> [!NOTE]
> Aktualisieren Sie Ihre "index.html", sodass sie wie folgt aussieht:

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

Das Wichtigste zu verstehen, bevor wir beginnen, ist, dass wir, obwohl wir in diesem Beispiel nur ein quadratisches Flächenobjekt rendern, immer noch in 3D-Raum zeichnen. Wir zeichnen lediglich ein Quadrat und platzieren es direkt vor der Kamera senkrecht zu ihrer Blickrichtung. Wir müssen die Shader definieren, die die Farbe für unsere einfache Szene erstellen und unser Objekt zeichnen. Diese bestimmen, wie das quadratische Feld auf dem Bildschirm erscheint.

### Die Shader

Ein **Shader** ist ein Programm, das in der [OpenGL ES Shading Language](https://registry.khronos.org/OpenGL/specs/es/3.2/GLSL_ES_Specification_3.20.pdf) (**GLSL**) geschrieben ist. Es nimmt Informationen über die Eckpunkte, aus denen eine Form besteht, und generiert die Daten, die nötig sind, um die Pixel auf dem Bildschirm zu rendern: nämlich die Positionen der Pixel und ihre Farben.

Es gibt zwei Shader-Funktionen, die beim Zeichnen von WebGL-Inhalten ausgeführt werden: den **Vertex-Shader** und den **Fragment-Shader**. Diese schreiben Sie in GLSL und übergeben den Code als Text an WebGL, um ihn für die Ausführung auf der GPU zu kompilieren. Zusammen wird ein Satz aus Vertex- und Fragment-Shadern als **Shader-Programm** bezeichnet.

Schauen wir uns kurz die beiden Arten von Shadern an, mit dem Beispiel vor Augen, eine 2D-Form in den WebGL-Kontext zu zeichnen.

#### Vertex-Shader

Jedes Mal, wenn eine Form gerendert wird, wird für jeden Eckpunkt der Form der Vertex-Shader ausgeführt. Seine Aufgabe ist es, den Eingabe-Eckpunkt von seinem ursprünglichen Koordinatensystem in das von WebGL verwendete **[Clip Space](/de/docs/Web/API/WebGL_API/WebGL_model_view_projection#clip_space)**-Koordinatensystem zu transformieren. In diesem System hat jede Achse einen Bereich von -1,0 bis 1,0, unabhängig vom Seitenverhältnis, der tatsächlichen Größe oder anderen Faktoren.

Der Vertex-Shader muss die erforderlichen Transformationen auf der Position des Eckpunkts ausführen, alle anderen Anpassungen oder Berechnungen vornehmen, die auf einer pro-Eckpunkt-Basis erforderlich sind, und dann den transformierten Eckpunkt in einer speziellen von GLSL bereitgestellten Variable namens `gl_Position` speichern.

Der Vertex-Shader kann bei Bedarf auch Dinge wie die Bestimmung der Koordinaten innerhalb der Textur des Oberflächen-{{Glossary("Texel")}}, das auf den Eckpunkt angewendet werden soll, durchführen, die Normalen anwenden, um den Beleuchtungsfaktor zu bestimmen, der auf den Eckpunkt angewendet werden soll, usw. Diese Informationen können dann in [Varyings](/de/docs/Web/API/WebGL_API/Data#varyings) oder [Attributes](/de/docs/Web/API/WebGL_API/Data#attributes) gespeichert werden, um angemessen mit dem Fragment-Shader geteilt zu werden.

Unser untenstehender Vertex-Shader erhält Werte zur Eckpunktposition aus einem von uns definierten Attribut namens `aVertexPosition`. Diese Position wird dann mit zwei 4x4-Matrizen multipliziert, die wir bereitstellen: `uProjectionMatrix` und `uModelViewMatrix`; `gl_Position` wird auf das Ergebnis gesetzt. Für mehr Informationen über Projektion und andere Matrizen könnten [Sie diesen Artikel nützlich finden](https://webglfundamentals.org/webgl/lessons/webgl-3d-perspective.html).

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

Es ist erwähnenswert, dass wir ein `vec4`-Attribut für die Eckpunktposition verwenden, obwohl es eigentlich keinen Vektor mit 4 Komponenten verwendet; das heißt, es könnte je nach Situation als `vec2` oder `vec3` behandelt werden. Aber wenn wir unsere Berechnungen durchführen, müssen wir es als `vec4` haben, daher verwenden wir von Anfang an ein `vec4`. Dies eliminiert Operationen aus jeder Berechnung, die wir in unserem Shader durchführen. Leistung ist wichtig.

In diesem Beispiel berechnen wir überhaupt keine Beleuchtung, da wir noch keine auf die Szene angewendet haben. Das wird später im Beispiel [Beleuchtung in WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Lighting_in_WebGL) kommen. Beachten Sie auch das Fehlen jeglicher Arbeiten mit Texturen hier; das wird in [Verwendung von Texturen in WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL) hinzugefügt.

#### Fragment-Shader

Der **Fragment-Shader** wird einmal für jedes Pixel auf jeder zu zeichnenden Form aufgerufen, nachdem die Eckpunkte der Form durch den Vertex-Shader verarbeitet wurden. Seine Aufgabe ist es, die Farbe dieses Pixels zu bestimmen, indem er herausfindet, welches Texel (das heißt, das Pixel aus der Textur der Form) auf das Pixel angewendet wird, die Farbe dieses Texels erhält und dann die entsprechende Beleuchtung auf die Farbe anwendet. Die Farbe wird dann an die WebGL-Schicht zurückgegeben, indem sie in der speziellen Variablen `gl_FragColor` gespeichert wird. Diese Farbe wird dann auf dem Bildschirm an der korrekten Position für das entsprechende Pixel der Form gezeichnet.

In diesem Fall geben wir jedes Mal Weiß zurück, da wir lediglich ein weißes Quadrat zeichnen, ohne dass Beleuchtung verwendet wird.

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

Nachdem wir die beiden Shader definiert haben, müssen wir sie an WebGL übergeben, kompilieren und miteinander verknüpfen. Der folgende Code erstellt die beiden Shader durch Aufruf von `loadShader()`, wobei der Typ und der Quelltext des Shaders übergeben werden. Dann wird ein Programm erstellt, die Shader werden angehängt und miteinander verknüpft. Falls das Kompilieren oder Verknüpfen fehlschlägt, zeigt der Code eine Warnung an.

> [!NOTE]
> Fügen Sie diese beiden Funktionen zu Ihrem "webgl-demo.js"-Skript hinzu:

```js
//
// Initialisieren eines Shader-Programms, damit WebGL weiß, wie unsere Daten gezeichnet werden sollen
//
function initShaderProgram(gl, vsSource, fsSource) {
  const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);
  const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);

  // Erstellen des Shader-Programms

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
// erstellt einen Shader des angegebenen Typs, lädt den Quellcode und
// kompiliert ihn.
//
function loadShader(gl, type, source) {
  const shader = gl.createShader(type);

  // Quelltext an das Shader-Objekt senden

  gl.shaderSource(shader, source);

  // Kompilieren des Shader-Programms

  gl.compileShader(shader);

  // Prüfen, ob es erfolgreich kompiliert wurde

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    alert(
      `Beim Kompilieren der Shader ist ein Fehler aufgetreten: ${gl.getShaderInfoLog(shader)}`,
    );
    gl.deleteShader(shader);
    return null;
  }

  return shader;
}
```

Die Funktion `loadShader()` nimmt den WebGL-Kontext, den Shader-Typ und den Quellcode als Eingabe und erstellt und kompiliert den Shader wie folgt:

1. Ein neuer Shader wird durch Aufruf von {{domxref("WebGLRenderingContext.createShader", "gl.createShader()")}} erstellt.
2. Der Quellcode des Shaders wird dem Shader durch Aufruf von {{domxref("WebGLRenderingContext.shaderSource", "gl.shaderSource()")}} übermittelt.
3. Nachdem der Shader den Quellcode erhalten hat, wird er mit {{domxref("WebGLRenderingContext.compileShader", "gl.compileShader()")}} kompiliert.
4. Um sicherzustellen, dass der Shader erfolgreich kompiliert wurde, wird der Shader-Parameter `gl.COMPILE_STATUS` überprüft. Um seinen Wert zu erhalten, rufen wir {{domxref("WebGLRenderingContext.getShaderParameter", "gl.getShaderParameter()")}} auf, spezifizieren den Shader und den Namen des zu überprüfenden Parameters (`gl.COMPILE_STATUS`). Falls dieser `false` ist, wissen wir, dass der Shader nicht kompiliert wurde, zeigen eine Warnung mit Protokollinformationen an, die vom Compiler mit {{domxref("WebGLRenderingContext.getShaderInfoLog", "gl.getShaderInfoLog()")}} erhalten wurden, löschen dann den Shader und geben `null` zurück, um ein Scheitern beim Laden des Shaders anzuzeigen.
5. Wenn der Shader geladen und erfolgreich kompiliert wurde, wird der kompilierte Shader an den Aufrufer zurückgegeben.

> [!NOTE]
> Fügen Sie diesen Code zu Ihrer `main()`-Funktion hinzu:

```js
// Initialisieren eines Shader-Programms; hier werden alle Lichtquellen
// sowie die Eckpunkte und dergleichen festgelegt.
const shaderProgram = initShaderProgram(gl, vsSource, fsSource);
```

Nachdem wir ein Shader-Programm erstellt haben, müssen wir die von WebGL zugewiesenen Positionen unserer Eingaben ermitteln. In diesem Fall haben wir ein Attribut und zwei Uniforms. Attribute erhalten Werte aus Puffer. Jede Iteration des Vertex-Shaders erhält den nächsten Wert aus dem Puffer, der diesem Attribut zugewiesen ist. [Uniforms](/de/docs/Web/API/WebGL_API/Data#uniforms) ähneln globalen JavaScript-Variablen. Sie behalten den gleichen Wert für alle Iterationen eines Shaders. Da die Attribut- und Uniform-Positionen spezifisch für ein einzelnes Shader-Programm sind, speichern wir sie zusammen, um sie leicht weitergeben zu können.

> [!NOTE]
> Fügen Sie diesen Code zu Ihrer `main()`-Funktion hinzu:

```js
// Sammeln aller Informationen, die benötigt werden, um das Shader-Programm zu verwenden.
// Nachschlagen, welches Attribut unser Shader-Programm verwendet
// für aVertexPosition und Nachschlagen von Uniform-Positionen.
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

Bevor wir unsere quadratische Ebene rendern können, müssen wir den Puffer erstellen, der ihre Eckpunktpositionen enthält, und die Eckpunktpositionen darin ablegen.

Wir werden dies mit einer Funktion tun, die wir `initBuffers()` nennen und die wir in einem separaten [JavaScript-Modul](/de/docs/Web/JavaScript/Guide/Modules) implementieren. Wenn wir fortgeschrittenere WebGL-Konzepte erkunden, wird dieses Modul erweitert, um mehr und komplexere 3D-Objekte zu erstellen.

> [!NOTE]
> Erstellen Sie eine neue Datei mit dem Namen "init-buffers.js" und geben Sie ihr folgenden Inhalt:

```js
function initBuffers(gl) {
  const positionBuffer = initPositionBuffer(gl);

  return {
    position: positionBuffer,
  };
}

function initPositionBuffer(gl) {
  // Erstellen eines Puffers für die Positionen des Quadrats
  const positionBuffer = gl.createBuffer();

  // Wählen Sie den positionBuffer als den Pufferauswahl um Pufferoperationen darauf auszuführen
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

  // Jetzt ein Array von Positionen für das Quadrat erstellen
  const positions = [1.0, 1.0, -1.0, 1.0, 1.0, -1.0, -1.0, -1.0];

  // Jetzt die Liste der Positionen in WebGL übergeben, um die
  // Form zu erstellen. Wir machen das, indem wir ein Float32Array aus dem
  // JavaScript-Array erstellen und es dann verwenden, um den Momentanpuffer zu füllen.
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

  return positionBuffer;
}

export { initBuffers };
```

Diese Routine ist ziemlich simpel angesichts der grundlegenden Natur der Szene in diesem Beispiel. Sie beginnt, indem sie die Methode {{domxref("WebGLRenderingContext.createBuffer()", "createBuffer()")}} des `gl`-Objekts aufruft, um einen Puffer zu erhalten, in dem wir die Eckpunktpositionen speichern werden. Dieser wird dann durch Aufruf der Methode {{domxref("WebGLRenderingContext.bindBuffer()", "bindBuffer()")}} an den Kontext gebunden.

Sobald das erledigt ist, erstellen wir ein JavaScript-Array, das die Position für jeden Eckpunkt der quadratischen Ebene enthält. Dieses wird dann in ein Float-Array umgewandelt und mit der Methode {{domxref("WebGLRenderingContext.bufferData()", "bufferData()")}} des `gl`-Objekts übergeben, um die Eckpunktpositionen des Objekts festzulegen.

## Rendern der Szene

Nachdem die Shader erstellt wurden, die Positionen abgerufen und die Eckpunktpositionen der quadratischen Ebene in einen Puffer gelegt wurden, können wir die Szene tatsächlich rendern. Wir werden dies in einer `drawScene()`-Funktion tun, die wir erneut in einem separaten JavaScript-Modul implementieren.

> [!NOTE]
> Erstellen Sie eine neue Datei mit dem Namen "draw-scene.js" und geben Sie ihr folgenden Inhalt:

```js
function drawScene(gl, programInfo, buffers) {
  gl.clearColor(0.0, 0.0, 0.0, 1.0); // Klar zu Schwarz, vollständig undurchsichtig
  gl.clearDepth(1.0); // Alles löschen
  gl.enable(gl.DEPTH_TEST); // Tiefentest aktivieren
  gl.depthFunc(gl.LEQUAL); // Nahe Objekte verdecken ferne Objekte

  // Löschen der Leinwand bevor wir beginnen, darauf zu zeichnen.

  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

  // Erstellen einer Perspektivmatrix, eine spezielle Matrix, die
  // verwendet wird, um die Verzerrung der Perspektive in einer Kamera zu simulieren.
  // Unser Sichtfeld beträgt 45 Grad, mit einem Breite-zu-Höhe-
  // Verhältnis, das ist mit der Anzeigengröße der Leinwand übereinstimmt
  // und wir wollen nur Objekte zwischen 0,1 Einheiten
  // und 100 Einheiten Entfernung von der Kamera sehen.

  const fieldOfView = (45 * Math.PI) / 180; // in Radianten
  const aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
  const zNear = 0.1;
  const zFar = 100.0;
  const projectionMatrix = mat4.create();

  // Hinweis: glmatrix.js hat immer das erste Argument
  // als das Ziel, um das Ergebnis zu erhalten.
  mat4.perspective(projectionMatrix, fieldOfView, aspect, zNear, zFar);

  // Setzen der Zeichenposition auf den "Identity"-Punkt, der ist
  // der Mittelpunkt der Szene.
  const modelViewMatrix = mat4.create();

  // Jetzt die Zeichenposition ein bisschen in die Position verschieben,
  // in der wir die Zeichnung des Quadrats beginnen möchten.
  mat4.translate(
    modelViewMatrix, // Zielmatrix
    modelViewMatrix, // Matrix, die übersetzt werden soll
    [-0.0, 0.0, -6.0],
  ); // Übersetzungsbetrag

  // Sagen WebGL, wie es die Positionen vom Positions-
  // puffer in das Attribut vertexPosition überführt.
  setPositionAttribute(gl, buffers, programInfo);

  // Sagen WebGL, dass es unser Programm beim Zeichnen verwenden soll
  gl.useProgram(programInfo.program);

  // Die Shader-Uniforms festlegen
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

// Sagen WebGL, wie es die Positionen vom Positions-
// puffer in das Attribut vertexPosition überträgt.
function setPositionAttribute(gl, buffers, programInfo) {
  const numComponents = 2; // 2 Werte pro Iteration extrahieren
  const type = gl.FLOAT; // die Daten im Puffer sind 32-Bit-Floats
  const normalize = false; // nicht normalisieren
  const stride = 0; // wie viele Bytes von einem Satz von Werten zum nächsten zu erhalten sind
  // 0 = verwenden Sie Typ und numComponents oben
  const offset = 0; // wie viele Bytes innerhalb des Puffers zum Start der Werte
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

Der erste Schritt besteht darin, die Leinwand auf unsere Hintergrundfarbe zu löschen. Dann stellen wir die Perspektive der Kamera ein. Wir setzen ein Sichtfeld von 45°, mit einem Breite-zu-Höhe-Verhältnis, das mit den Anzeigedimensionen unserer Leinwand übereinstimmt. Wir geben auch an, dass wir nur Objekte zwischen 0,1 und 100 Einheiten von der Kamera entfernt rendern möchten.

Dann bestimmen wir die Position der quadratischen Ebene, indem wir die Identitätsposition laden und um 6 Einheiten weg von der Kamera versetzen. Danach binden wir den Eckpunktpuffer des Quadrats an das Attribut, das der Shader für `aVertexPosition` verwendet, und sagen WebGL, wie es die Daten daraus entnehmen soll. Schließlich zeichnen wir das Objekt durch Aufrufen der Methode {{domxref("WebGLRenderingContext.drawArrays()", "drawArrays()")}}.

Schließlich rufen wir `initBuffers()` und `drawScene()` auf.

> [!NOTE]
> Fügen Sie diesen Code zu Beginn Ihrer "webgl-demo.js"-Datei hinzu:

```js
import { initBuffers } from "./init-buffers.js";
import { drawScene } from "./draw-scene.js";
```

> [!NOTE]
> Fügen Sie diesen Code zum Ende Ihrer `main()`-Funktion hinzu:

```js
// Hier rufen wir die Routine auf, die alle
// Objekte erstellt, die wir zeichnen werden.
const buffers = initBuffers(gl);

// Die Szene zeichnen
drawScene(gl, programInfo, buffers);
```

Das Ergebnis sollte so aussehen:

{{EmbedGHLiveSample('dom-examples/webgl-examples/tutorial/sample2/index.html', 670, 510) }}

[Vollständigen Code anzeigen](https://github.com/mdn/dom-examples/tree/main/webgl-examples/tutorial/sample2) | [Diese Demo auf einer neuen Seite öffnen](https://mdn.github.io/dom-examples/webgl-examples/tutorial/sample2/)

## Matrix-Dienstprogramme

Matrixoperationen mögen kompliziert erscheinen, aber [sie sind tatsächlich ziemlich einfach, wenn Sie sie Schritt für Schritt durchführen](https://webglfundamentals.org/webgl/lessons/webgl-2d-matrices.html). Im Allgemeinen verwenden Leute eher eine Matrix-Bibliothek, als ihre eigene zu schreiben. In unserem Fall verwenden wir die beliebte [glMatrix-Bibliothek](https://glmatrix.net/).

### Siehe auch

- [Matrizen](https://webglfundamentals.org/webgl/lessons/webgl-2d-matrices.html) auf WebGLFundamentals
- [Matrizen](https://mathworld.wolfram.com/Matrix.html) auf Wolfram MathWorld
- [Matrix](<https://en.wikipedia.org/wiki/Matrix_(mathematics)>) auf Wikipedia

{{PreviousNext("Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL", "Web/API/WebGL_API/Tutorial/Using_shaders_to_apply_color_in_WebGL")}}
