---
title: Beispiel für eine einfache 2D-Animation mit WebGL
slug: Web/API/WebGL_API/Basic_2D_animation_example
l10n:
  sourceCommit: 4bb8f0d1f9cb2d0e23b9e19f798a7ff39ac34a49
---

{{DefaultAPISidebar("WebGL")}}

In diesem WebGL-Beispiel erstellen wir ein Canvas und zeichnen darin mit WebGL ein rotierendes Quadrat. Das Koordinatensystem, mit dem wir die Szene beschreiben, entspricht dem Koordinatensystem des Canvas: (0, 0) liegt in der oberen linken Ecke und (600, 460) in der unteren rechten Ecke.

## Beispiel für ein rotierendes Quadrat

Gehen wir die einzelnen Schritte durch, mit denen wir das Quadrat zum Rotieren bringen.

### Vertex-Shader

Sehen wir uns zunächst den Vertex-Shader an. Seine Aufgabe besteht wie immer darin, die Koordinaten unserer Szene in Clip-Space-Koordinaten umzuwandeln. In diesem Koordinatensystem liegt (0, 0) in der Mitte des Kontexts, und jede Achse reicht unabhängig von der tatsächlichen Größe des Kontexts von -1.0 bis 1.0.

```html
<script id="vertex-shader" type="x-shader/x-vertex">
  attribute vec2 aVertexPosition;

  uniform vec2 uScalingFactor;
  uniform vec2 uRotationVector;

  void main() {
    vec2 rotatedPosition = vec2(
      aVertexPosition.x * uRotationVector.y +
            aVertexPosition.y * uRotationVector.x,
      aVertexPosition.y * uRotationVector.y -
            aVertexPosition.x * uRotationVector.x
    );

    gl_Position = vec4(rotatedPosition * uScalingFactor, 0.0, 1.0);
  }
</script>
```

Das Hauptprogramm stellt dem Shader das Attribut `aVertexPosition` bereit. Es enthält die Position des Vertex im Koordinatensystem des Hauptprogramms. Wir müssen diese Werte so umrechnen, dass beide Komponenten der Position im Bereich von -1.0 bis 1.0 liegen. Das lässt sich durch Multiplikation mit einem Skalierungsfaktor erreichen, der auf dem {{Glossary("aspect_ratio", "Seitenverhältnis")}} des Kontexts basiert. Die Berechnung sehen wir gleich.

Außerdem drehen wir die Form. Das können wir hier mit einer Transformation erledigen, die wir zuerst anwenden. Die gedrehte Position des Vertex wird mithilfe des Rotationsvektors berechnet, der im Uniform `uRotationVector` enthalten ist und zuvor vom JavaScript-Code berechnet wurde.

Anschließend wird die endgültige Position berechnet, indem die gedrehte Position mit dem Skalierungsvektor multipliziert wird, den der JavaScript-Code in `uScalingFactor` bereitstellt. Die Werte von `z` und `w` sind auf 0.0 beziehungsweise 1.0 festgelegt, da wir in 2D zeichnen.

Die Standard-Globalvariable `gl_Position` von WebGL wird dann auf die transformierte und gedrehte Position des Vertex gesetzt.

### Fragment-Shader

Als Nächstes kommt der Fragment-Shader. Er gibt die Farbe jedes Pixels der gezeichneten Form zurück. Da wir ein einfarbiges Objekt ohne Textur und Beleuchtung zeichnen, ist er besonders einfach:

```html
<script id="fragment-shader" type="x-shader/x-fragment">
  #ifdef GL_ES
    precision highp float;
  #endif

  uniform vec4 uGlobalColor;

  void main() {
    gl_FragColor = uGlobalColor;
  }
</script>
```

Zunächst wird wie erforderlich die Genauigkeit des Typs `float` festgelegt. Danach setzen wir die Globalvariable `gl_FragColor` auf den Wert des Uniforms `uGlobalColor`. Der JavaScript-Code setzt diesen Wert auf die Farbe, mit der das Quadrat gezeichnet werden soll.

### HTML

Das HTML besteht ausschließlich aus dem {{HTMLElement("canvas")}}, für das wir einen WebGL-Kontext abrufen.

```html
<canvas id="gl-canvas" width="600" height="460">
  Oh no! Your browser doesn't support canvas!
</canvas>
```

### Globale Variablen und Initialisierung

Zunächst die globalen Variablen. Wir besprechen sie nicht an dieser Stelle, sondern jeweils dann, wenn sie im folgenden Code verwendet werden.

```js
const glCanvas = document.getElementById("gl-canvas");
const gl = glCanvas.getContext("webgl");

const shaderSet = [
  {
    type: gl.VERTEX_SHADER,
    id: "vertex-shader",
  },
  {
    type: gl.FRAGMENT_SHADER,
    id: "fragment-shader",
  },
];

const shaderProgram = buildShaderProgram(shaderSet);

// Aspect ratio and coordinate system details
const aspectRatio = glCanvas.width / glCanvas.height;
const currentRotation = [0, 1];
const currentScale = [1.0, aspectRatio];

// Vertex information
const vertexArray = new Float32Array([
  -0.5, 0.5, 0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, -0.5, -0.5,
]);
const vertexBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
gl.bufferData(gl.ARRAY_BUFFER, vertexArray, gl.STATIC_DRAW);
const vertexNumComponents = 2;
const vertexCount = vertexArray.length / vertexNumComponents;

// Rendering data shared with the scalers.
let uScalingFactor;
let uGlobalColor;
let uRotationVector;
let aVertexPosition;

// Animation timing
let previousTime = 0.0;
const degreesPerSecond = 90.0;
let currentAngle = 0.0;

animateScene();
```

Nachdem wir den WebGL-Kontext `gl` abgerufen haben, erstellen wir zuerst das Shader-Programm. Der hier verwendete Code ist so ausgelegt, dass wir dem Programm problemlos mehrere Shader hinzufügen können. Das Array `shaderSet` enthält eine Liste von Objekten, die jeweils eine Shader-Funktion beschreiben, die für das Programm kompiliert werden soll. Jede Funktion hat einen Typ (`gl.VERTEX_SHADER` oder `gl.FRAGMENT_SHADER`) und eine ID (die ID des {{HTMLElement("script")}}-Elements, das den Shader-Code enthält).

Die Shader-Liste wird an die Funktion `buildShaderProgram()` übergeben, die das kompilierte und gelinkte Shader-Programm zurückgibt. Als Nächstes sehen wir uns an, wie das funktioniert.

Sobald das Shader-Programm erstellt ist, berechnen wir das Seitenverhältnis des Kontexts, indem wir seine Breite durch seine Höhe teilen. Dann setzen wir den aktuellen Rotationsvektor für die Animation auf `[0, 1]` und den Skalierungsvektor auf `[1.0, aspectRatio]`. Wie wir beim Vertex-Shader gesehen haben, dient der Skalierungsvektor dazu, die Koordinaten an den Bereich von -1.0 bis 1.0 anzupassen.

Als Nächstes wird das Vertex-Array erstellt: ein {{jsxref("Float32Array")}} mit sechs Koordinaten (drei 2D-Vertices) pro zu zeichnendem Dreieck, insgesamt also 12 Werten.

Wie Sie sehen, verwenden wir für jede Achse ein Koordinatensystem von -1.0 bis 1.0. Warum sind dann überhaupt Anpassungen nötig? Der Grund ist, dass unser Kontext nicht quadratisch ist: Er ist 600 Pixel breit und 460 Pixel hoch. Jede dieser Abmessungen wird auf den Bereich von -1.0 bis 1.0 abgebildet. Da die beiden Achsen unterschiedlich lang sind, würde das Quadrat ohne Anpassung der Werte einer Achse in eine Richtung gestreckt. Deshalb müssen wir diese Werte normalisieren.

Nachdem das Vertex-Array erstellt wurde, erzeugen wir mit [`gl.createBuffer()`](/de/docs/Web/API/WebGLRenderingContext/createBuffer) einen neuen GL-Buffer für die Daten. Mit [`gl.bindBuffer()`](/de/docs/Web/API/WebGLRenderingContext/bindBuffer) binden wir die Standard-Array-Buffer-Referenz daran und kopieren anschließend die Vertex-Daten mit [`gl.bufferData()`](/de/docs/Web/API/WebGLRenderingContext/bufferData) in den Buffer. Der Verwendungshinweis `gl.STATIC_DRAW` teilt WebGL mit, dass die Daten nur einmal gesetzt und danach nicht mehr geändert, aber wiederholt verwendet werden. Anhand dieser Information kann WebGL mögliche Leistungsoptimierungen berücksichtigen.

Nachdem WebGL die Vertex-Daten zur Verfügung stehen, setzen wir `vertexNumComponents` auf die Anzahl der Komponenten pro Vertex (2, da es sich um 2D-Vertices handelt) und `vertexCount` auf die Anzahl der Vertices in der Liste.

Dann setzen wir den aktuellen Rotationswinkel in Grad auf 0.0, da noch keine Drehung stattgefunden hat. Die Rotationsgeschwindigkeit wird auf 6 Grad pro Bildschirmaktualisierung gesetzt; diese erfolgt typischerweise mit 60 FPS.

Schließlich wird `animateScene()` aufgerufen, um den ersten Frame zu zeichnen und das Zeichnen des nächsten Animationsframes einzuplanen.

### Das Shader-Programm kompilieren und linken

Die Funktion `buildShaderProgram()` nimmt ein Array von Objekten entgegen, die die zu kompilierenden und zu linkenden Shader-Funktionen beschreiben. Sie gibt das fertig erstellte und gelinkte Shader-Programm zurück.

```js
function buildShaderProgram(shaderInfo) {
  const program = gl.createProgram();

  shaderInfo.forEach((desc) => {
    const shader = compileShader(desc.id, desc.type);

    if (shader) {
      gl.attachShader(program, shader);
    }
  });

  gl.linkProgram(program);

  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.log("Error linking shader program:");
    console.log(gl.getProgramInfoLog(program));
  }

  return program;
}
```

Zuerst wird [`gl.createProgram()`](/de/docs/Web/API/WebGLRenderingContext/createProgram) aufgerufen, um ein neues, leeres GLSL-Programm zu erstellen.

Dann rufen wir für jeden Shader in der übergebenen Liste die Funktion `compileShader()` auf. Dabei übergeben wir ihr die ID und den Typ der zu erstellenden Shader-Funktion. Wie bereits erwähnt, enthält jedes dieser Objekte die ID des `<script>`-Elements mit dem Shader-Code sowie den Shader-Typ. Der kompilierte Shader wird mit [`gl.attachShader()`](/de/docs/Web/API/WebGLRenderingContext/attachShader) an das Shader-Programm angehängt.

> [!NOTE]
> Wir könnten hier noch einen Schritt weitergehen und den Wert des Attributs `type` des `<script>`-Elements prüfen, um den Shader-Typ zu bestimmen.

Sobald alle Shader kompiliert sind, wird das Programm mit [`gl.linkProgram()`](/de/docs/Web/API/WebGLRenderingContext/linkProgram) gelinkt.

Tritt beim Linken des Programms ein Fehler auf, wird die Fehlermeldung in der Konsole protokolliert.

Zum Schluss wird das kompilierte Programm an die aufrufende Funktion zurückgegeben.

### Einen einzelnen Shader kompilieren

Die folgende Funktion `compileShader()` wird von `buildShaderProgram()` aufgerufen, um einen einzelnen Shader zu kompilieren.

```js
function compileShader(id, type) {
  const code = document.getElementById(id).firstChild.nodeValue;
  const shader = gl.createShader(type);

  gl.shaderSource(shader, code);
  gl.compileShader(shader);

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.log(
      `Error compiling ${
        type === gl.VERTEX_SHADER ? "vertex" : "fragment"
      } shader:`,
    );
    console.log(gl.getShaderInfoLog(shader));
  }
  return shader;
}
```

Der Code wird aus dem HTML-Dokument abgerufen, indem der Wert des Textknotens im {{HTMLElement("script")}}-Element mit der angegebenen ID ausgelesen wird. Anschließend wird mit [`gl.createShader()`](/de/docs/Web/API/WebGLRenderingContext/createShader) ein neuer Shader des angegebenen Typs erstellt.

Der Quellcode wird mit [`gl.shaderSource()`](/de/docs/Web/API/WebGLRenderingContext/shaderSource) an den neuen Shader übergeben. Danach wird der Shader mit [`gl.compileShader()`](/de/docs/Web/API/WebGLRenderingContext/compileShader) kompiliert.

Kompilierungsfehler werden in der Konsole protokolliert. Beachten Sie die Verwendung eines [Template-Literals](/de/docs/Web/JavaScript/Reference/Template_literals), um die passende Zeichenfolge für den Shader-Typ in die erzeugte Meldung einzufügen. Die eigentlichen Fehlerdetails werden mit [`gl.getShaderInfoLog()`](/de/docs/Web/API/WebGLRenderingContext/getShaderInfoLog) abgerufen.

Zum Schluss wird der kompilierte Shader an die aufrufende Funktion `buildShaderProgram()` zurückgegeben.

### Die Szene zeichnen und animieren

Die Funktion `animateScene()` wird aufgerufen, um jeden Animationsframe zu zeichnen.

```js
function animateScene() {
  gl.viewport(0, 0, glCanvas.width, glCanvas.height);
  gl.clearColor(0.8, 0.9, 1.0, 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT);

  const radians = (currentAngle * Math.PI) / 180.0;
  currentRotation[0] = Math.sin(radians);
  currentRotation[1] = Math.cos(radians);

  gl.useProgram(shaderProgram);

  uScalingFactor = gl.getUniformLocation(shaderProgram, "uScalingFactor");
  uGlobalColor = gl.getUniformLocation(shaderProgram, "uGlobalColor");
  uRotationVector = gl.getUniformLocation(shaderProgram, "uRotationVector");

  gl.uniform2fv(uScalingFactor, currentScale);
  gl.uniform2fv(uRotationVector, currentRotation);
  gl.uniform4fv(uGlobalColor, [0.1, 0.7, 0.2, 1.0]);

  gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);

  aVertexPosition = gl.getAttribLocation(shaderProgram, "aVertexPosition");

  gl.enableVertexAttribArray(aVertexPosition);
  gl.vertexAttribPointer(
    aVertexPosition,
    vertexNumComponents,
    gl.FLOAT,
    false,
    0,
    0,
  );

  gl.drawArrays(gl.TRIANGLES, 0, vertexCount);

  requestAnimationFrame((currentTime) => {
    const deltaAngle =
      ((currentTime - previousTime) / 1000.0) * degreesPerSecond;

    currentAngle = (currentAngle + deltaAngle) % 360;

    previousTime = currentTime;
    animateScene();
  });
}
```

Um einen Animationsframe zu zeichnen, muss zuerst der Hintergrund mit der gewünschten Farbe gefüllt werden. Dazu legen wir den Viewport anhand der Größe des {{HTMLElement("canvas")}} fest, setzen mit [`clearColor()`](/de/docs/Web/API/WebGLRenderingContext/clearColor) die Farbe für das Leeren des Inhalts und leeren dann den Buffer mit [`clear()`](/de/docs/Web/API/WebGLRenderingContext/clear).

Als Nächstes berechnen wir den aktuellen Rotationsvektor. Dazu wandeln wir die aktuelle Rotation in Grad (`currentAngle`) in [Radiant](https://en.wikipedia.org/wiki/Radians) um. Die erste Komponente des Rotationsvektors setzen wir auf den [Sinus](https://en.wikipedia.org/wiki/Sine) dieses Werts, die zweite auf den [Kosinus](https://en.wikipedia.org/wiki/Cosine). Der Vektor `currentRotation` beschreibt nun die Position des Punkts auf dem [Einheitskreis](https://en.wikipedia.org/wiki/Unit_circle) beim Winkel `currentAngle`.

Mit [`useProgram()`](/de/docs/Web/API/WebGLRenderingContext/useProgram) aktivieren wir das zuvor erstellte GLSL-Shader-Programm. Anschließend rufen wir mit [`getUniformLocation()`](/de/docs/Web/API/WebGLRenderingContext/getUniformLocation) die Positionen der Uniforms ab, über die Informationen zwischen dem JavaScript-Code und den Shadern ausgetauscht werden.

Das Uniform `uScalingFactor` wird auf den zuvor berechneten Wert `currentScale` gesetzt. Wie Sie sich vielleicht erinnern, dient dieser Wert dazu, das Koordinatensystem an das Seitenverhältnis des Kontexts anzupassen. Dafür verwenden wir [`uniform2fv()`](/de/docs/Web/API/WebGLRenderingContext/uniform), da es sich um einen Gleitkomma-Vektor mit zwei Werten handelt.

Auch `uRotationVector` wird mit `uniform2fv()` gesetzt, und zwar auf den aktuellen Rotationsvektor (`currentRotation`).

Mit [`uniform4fv()`](/de/docs/Web/API/WebGLRenderingContext/uniform) setzen wir `uGlobalColor` auf die Farbe, mit der wir das Quadrat zeichnen möchten. Sie wird als Gleitkomma-Vektor mit vier Komponenten angegeben: je eine für Rot, Grün, Blau und Alpha.

Nun können wir den Vertex-Buffer einrichten und die Form zeichnen. Zuerst legen wir mit [`bindBuffer()`](/de/docs/Web/API/WebGLRenderingContext/bindBuffer) den Buffer fest, dessen Vertices zum Zeichnen der Dreiecke verwendet werden. Danach rufen wir mit [`getAttribLocation()`](/de/docs/Web/API/WebGLRenderingContext/getAttribLocation) den Index des Vertex-Positionsattributs aus dem Shader-Programm ab.

Da der Index des Vertex-Positionsattributs nun in `aVertexPosition` verfügbar ist, rufen wir `enableVertexAttribArray()` auf. Dadurch wird das Positionsattribut aktiviert und kann vom Shader-Programm, insbesondere vom Vertex-Shader, verwendet werden.

Anschließend wird der Vertex-Buffer durch einen Aufruf von [`vertexAttribPointer()`](/de/docs/Web/API/WebGLRenderingContext/vertexAttribPointer) an das Attribut `aVertexPosition` gebunden. Dieser Schritt ist nicht offensichtlich, da die Bindung eher eine Nebenwirkung des Aufrufs ist. Im Ergebnis liefert ein Zugriff auf `aVertexPosition` nun Daten aus dem Vertex-Buffer.

Damit ist der Vertex-Buffer unserer Form dem Attribut `aVertexPosition` zugeordnet, über das die Vertices einzeln an den Vertex-Shader übergeben werden. Nun können wir die Form mit [`drawArrays()`](/de/docs/Web/API/WebGLRenderingContext/drawArrays) zeichnen.

Der Frame ist damit gezeichnet. Jetzt muss nur noch das Zeichnen des nächsten Frames eingeplant werden. Dazu rufen wir [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) auf. Die Funktion veranlasst, dass eine Callback-Funktion ausgeführt wird, sobald der Browser bereit ist, den Bildschirm erneut zu aktualisieren.

Unser `requestAnimationFrame()`-Callback erhält einen einzelnen Parameter, `currentTime`. Er gibt den Zeitpunkt an, zu dem das Zeichnen des Frames begonnen hat. Aus diesem Wert, dem gespeicherten Zeitpunkt des vorherigen Frames (`previousTime`) und der gewünschten Rotationsgeschwindigkeit des Quadrats in Grad pro Sekunde (`degreesPerSecond`) berechnen wir den neuen Wert von `currentAngle`. Anschließend aktualisieren wir `previousTime` und rufen `animateScene()` auf, um den nächsten Frame zu zeichnen – und wiederum das Zeichnen des darauffolgenden Frames einzuplanen, immer weiter.

### Ergebnis

Dieses Beispiel ist recht einfach, da es nur ein einzelnes Objekt zeichnet. Die hier verwendeten Konzepte lassen sich jedoch auch auf wesentlich komplexere Animationen übertragen.

{{EmbedLiveSample("A_rotating_square_example", 660, 500)}}

## Siehe auch

- [WebGL-API](/de/docs/Web/API/WebGL_API)
- [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial)
