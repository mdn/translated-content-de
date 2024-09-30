---
title: Ein einfaches 2D-WebGL-Animationsbeispiel
slug: Web/API/WebGL_API/Basic_2D_animation_example
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{DefaultAPISidebar("WebGL")}}

In diesem WebGL-Beispiel erstellen wir ein `<canvas>` und rendern darin ein rotierendes Quadrat mit WebGL. Das Koordinatensystem, das wir zur Darstellung unserer Szene verwenden, ist dasselbe wie das des Canvas. Das heißt, (0, 0) befindet sich in der oberen linken Ecke und die untere rechte Ecke bei (600, 460).

## Ein rotierendes Quadrat Beispiel

Folgen wir den verschiedenen Schritten, um unser rotierendes Quadrat zu erhalten.

### Vertex-Shader

Betrachten wir zunächst den Vertex-Shader. Seine Aufgabe ist es, die Koordinaten, die wir für unsere Szene verwenden, in Clipspace-Koordinaten zu konvertieren (d.h. das System, bei dem (0, 0) im Zentrum des Kontexts liegt und jede Achse von -1.0 bis 1.0 reicht, unabhängig von der tatsächlichen Größe des Kontexts).

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

Das Hauptprogramm teilt uns das Attribut `aVertexPosition` mit, das die Position des Vertex in welchem Koordinatensystem auch immer ist, das es verwendet. Wir müssen diese Werte so konvertieren, dass beide Komponenten der Position im Bereich von -1.0 bis 1.0 liegen. Dies kann einfach erreicht werden, indem mit einem Skalierungsfaktor multipliziert wird, der auf dem [Seitenverhältnis](/de/docs/Glossary/aspect_ratio) des Kontexts basiert. Diese Berechnung werden wir in Kürze sehen.

Wir drehen auch die Form, und das können wir hier tun, indem wir eine Transformation anwenden. Das tun wir zuerst. Die gedrehte Position des Vertex wird berechnet, indem der Rotationsvektor angewendet wird, der sich im Uniform `uRotationVector` befindet, das durch den JavaScript-Code berechnet wurde.

Dann wird die endgültige Position berechnet, indem die gedrehte Position mit dem Skalierungsvektor multipliziert wird, der vom JavaScript-Code in `uScalingFactor` bereitgestellt wird. Die Werte von `z` und `w` sind festgelegt auf 0.0 und 1.0, da wir in 2D zeichnen.

Die Standard-WebGL-Variable `gl_Position` wird dann auf die transformierte und gedrehte Position des Vertex gesetzt.

### Fragment-Shader

Als nächstes kommt der Fragment-Shader. Seine Rolle ist es, die Farbe jedes Pixels in der zu rendernden Form zurückzugeben. Da wir eine feste, nicht texturierte Form ohne Beleuchtung zeichnen, ist dies ausgesprochen einfach:

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

Dies beginnt mit der Festlegung der Präzision des `float`-Typs, wie erforderlich. Dann setzen wir die globale `gl_FragColor` auf den Wert des Uniforms `uGlobalColor`, das vom JavaScript-Code auf die Farbe gesetzt wird, die zum Zeichnen des Quadrats verwendet wird.

### HTML

Das HTML besteht ausschließlich aus dem {{HTMLElement("canvas")}}, auf dem wir einen WebGL-Kontext erhalten werden.

```html
<canvas id="glcanvas" width="600" height="460">
  Oh no! Your browser doesn't support canvas!
</canvas>
```

### Globale Variablen und Initialisierung

Zuerst die globalen Variablen. Wir werden diese hier nicht diskutieren; stattdessen sprechen wir über sie, wann immer sie im kommenden Code verwendet werden.

```js
let gl = null;
let glCanvas = null;

// Aspect ratio and coordinate system
// details

let aspectRatio;
let currentRotation = [0, 1];
let currentScale = [1.0, 1.0];

// Vertex information

let vertexArray;
let vertexBuffer;
let vertexNumComponents;
let vertexCount;

// Rendering data shared with the
// scalers.

let uScalingFactor;
let uGlobalColor;
let uRotationVector;
let aVertexPosition;

// Animation timing

let shaderProgram;
let currentAngle;
let previousTime = 0.0;
let degreesPerSecond = 90.0;
```

Die Initialisierung des Programms wird durch einen [`load`](/de/docs/Web/API/Window/load_event)-Ereignishandler namens `startup()` gehandhabt:

```js
window.addEventListener("load", startup, false);

function startup() {
  glCanvas = document.getElementById("glcanvas");
  gl = glCanvas.getContext("webgl");

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

  shaderProgram = buildShaderProgram(shaderSet);

  aspectRatio = glCanvas.width / glCanvas.height;
  currentRotation = [0, 1];
  currentScale = [1.0, aspectRatio];

  vertexArray = new Float32Array([
    -0.5, 0.5, 0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, -0.5, -0.5,
  ]);

  vertexBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, vertexArray, gl.STATIC_DRAW);

  vertexNumComponents = 2;
  vertexCount = vertexArray.length / vertexNumComponents;

  currentAngle = 0.0;

  animateScene();
}
```

Nachdem wir den WebGL-Kontext `gl` erhalten haben, müssen wir mit dem Aufbau des Shader-Programms beginnen. Hier verwenden wir Code, der es uns ermöglicht, mehrere Shader problemlos zu unserem Programm hinzuzufügen. Das Array `shaderSet` enthält eine Liste von Objekten, die jede Shader-Funktion beschreiben, die in das Programm kompiliert werden soll. Jede Funktion besitzt einen Typ (einen von `gl.VERTEX_SHADER` oder `gl.FRAGMENT_SHADER`) und eine ID (die ID des {{HTMLElement("script")}}-Elements, das den Code des Shaders enthält).

Das Shader-Set wird in die Funktion `buildShaderProgram()` übergeben, die das kompilierte und verknüpfte Shader-Programm zurückgibt. Wir werden uns als Nächstes ansehen, wie das funktioniert.

Nachdem das Shader-Programm erstellt wurde, berechnen wir das Seitenverhältnis unseres Kontexts, indem wir seine Breite durch seine Höhe teilen. Dann setzen wir den aktuellen Rotationsvektor für die Animation auf `[0, 1]` und den Skalierungsvektor auf `[1.0, aspectRatio]`. Der Skalierungsvektor wird, wie wir im Vertex-Shader gesehen haben, verwendet, um die Koordinaten in den Bereich -1.0 bis 1.0 zu skalieren.

Als nächstes wird das Array der Vertices erstellt, als {{jsxref("Float32Array")}} mit sechs Koordinaten (drei 2D-Vertices) pro zu zeichnendem Dreieck, insgesamt 12 Werte.

Wie Sie sehen können, verwenden wir ein Koordinatensystem von -1.0 bis 1.0 für jede Achse. Warum, fragen Sie sich vielleicht, müssen wir überhaupt Anpassungen vornehmen? Das liegt daran, dass unser Kontext nicht quadratisch ist. Wir verwenden einen Kontext, der 600 Pixel breit und 460 hoch ist. Jede dieser Dimensionen wird auf den Bereich -1.0 bis 1.0 abgebildet. Da die beiden Achsen nicht gleich lang sind, wird das Quadrat ohne Anpassung der Werte einer Achse in eine Richtung gestreckt. Daher müssen wir diese Werte normalisieren.

Sobald das Vertex-Array erstellt wurde, erstellen wir einen neuen GL-Buffer, um sie zu enthalten, indem wir [`gl.createBuffer()`](/de/docs/Web/API/WebGLRenderingContext/createBuffer) aufrufen. Wir binden die Standard-WebGL-Array-Buffer-Referenz daran, indem wir [`gl.bindBuffer()`](/de/docs/Web/API/WebGLRenderingContext/bindBuffer) aufrufen und dann die Vertex-Daten mit [`gl.bufferData()`](/de/docs/Web/API/WebGLRenderingContext/bufferData) in den Buffer kopieren. Der Verwendungshinweis `gl.STATIC_DRAW` wird angegeben, um WebGL mitzuteilen, dass die Daten nur einmal gesetzt werden und nie geändert, aber wiederholt verwendet werden. Dies erlaubt es WebGL, jegliche Optimierungen zu erwägen, die es aufgrund dieser Information anwenden kann, um die Leistung zu verbessern.

Mit den jetzt an WebGL übermittelten Vertex-Daten setzen wir `vertexNumComponents` auf die Anzahl der Komponenten in jedem Vertex (2, da es 2D-Vertices sind) und `vertexCount` auf die Anzahl der Vertices in der Vertex-Liste.

Dann wird der aktuelle Rotationswinkel (in Grad) auf 0.0 gesetzt, da wir noch keine Rotation durchgeführt haben, und die Rotationsgeschwindigkeit (in Grad pro Bildwiederholungsperiode des Bildschirms, typischerweise 60 FPS) wird auf 6 gesetzt.

Schließlich wird `animateScene()` aufgerufen, um den ersten Frame zu rendern und den nächsten Frame der Animation zu planen.

### Kompilieren und Verknüpfen des Shader-Programms

Die Funktion `buildShaderProgram()` akzeptiert als Eingabe ein Array von Objekten, das eine Gruppe von Shader-Funktionen beschreibt, die kompiliert und in das Shader-Programm verknüpft werden sollen, und gibt das Shader-Programm zurück, nachdem es erstellt und verknüpft wurde.

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

Dann rufen wir für jeden Shader in der angegebenen Liste von Shadern die Funktion `compileShader()` auf, um ihn zu kompilieren, indem wir die ID und den Typ der zu erstellenden Shader-Funktion übergeben. Jedes dieser Objekte enthält, wie bereits erwähnt, die ID des `<script>`-Elements, in dem sich der Shader-Code befindet, und den Typ des Shaders. Der kompilierte Shader wird durch Übergeben an [`gl.attachShader()`](/de/docs/Web/API/WebGLRenderingContext/attachShader) an das Shader-Programm angehängt.

> [!NOTE]
> Wir könnten hier noch einen Schritt weiter gehen und den Wert des `type`-Attributs des `<script>`-Elements betrachten, um den Shader-Typ zu bestimmen.

Sobald alle Shader kompiliert sind, wird das Programm mit [`gl.linkProgram()`](/de/docs/Web/API/WebGLRenderingContext/linkProgram) verknüpft.

Wenn beim Verknüpfen des Programms ein Fehler auftritt, wird die Fehlermeldung in die Konsole protokolliert.

Schließlich wird das kompilierte Programm an den Aufrufer zurückgegeben.

### Kompilieren eines einzelnen Shaders

Die Funktion `compileShader()`, die unten gezeigt ist, wird von `buildShaderProgram()` aufgerufen, um einen einzelnen Shader zu kompilieren.

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

Der Code wird aus dem HTML-Dokument abgerufen, indem der Wert des Textknotens innerhalb des {{HTMLElement("script")}}-Elements mit der angegebenen ID abgerufen wird. Dann wird ein neuer Shader des angegebenen Typs mit [`gl.createShader()`](/de/docs/Web/API/WebGLRenderingContext/createShader) erstellt.

Der Quellcode wird in den neuen Shader geschickt, indem er in [`gl.shaderSource()`](/de/docs/Web/API/WebGLRenderingContext/shaderSource) übergeben wird, und dann wird der Shader mit [`gl.compileShader()`](/de/docs/Web/API/WebGLRenderingContext/compileShader) kompiliert.

Kompilierfehler werden in der Konsole protokolliert. Beachten Sie die Verwendung eines [Template-Literal](/de/docs/Web/JavaScript/Reference/Template_literals)-Strings, um den korrekten Shader-Typ-String in die generierte Nachricht einzufügen. Die tatsächlichen Fehlerdetails werden durch Aufrufen von [`gl.getShaderInfoLog()`](/de/docs/Web/API/WebGLRenderingContext/getShaderInfoLog) abgerufen.

Schließlich wird der kompilierte Shader an den Aufrufer (der die Funktion `buildShaderProgram()` ist) zurückgegeben.

### Zeichnen und Animieren der Szene

Die Funktion `animateScene()` wird aufgerufen, um jeden Animationsframe zu rendern.

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

Das Erste, was getan werden muss, um einen Frame der Animation zu zeichnen, ist das Löschen des Hintergrunds auf die gewünschte Farbe. In diesem Fall setzen wir das Ansichtsfenster basierend auf der Größe des {{HTMLElement("canvas")}}, rufen [`clearColor()`](/de/docs/Web/API/WebGLRenderingContext/clearColor) auf, um die Farbe einzustellen, die beim Löschen des Inhalts verwendet werden soll, und löschen dann den Speicher mit [`clear()`](/de/docs/Web/API/WebGLRenderingContext/clear).

Als nächstes wird der aktuelle Rotationsvektor berechnet, indem die aktuelle Rotation in Grad (`currentAngle`) in [Bogenmaß](https://de.wikipedia.org/wiki/Bogenmaß) umgewandelt wird und dann der erste Komponentenwert des Rotationsvektors auf den [Sinus](https://de.wikipedia.org/wiki/Sinus) dieses Wertes und der zweite Komponentenwert auf den [Kosinus](https://de.wikipedia.org/wiki/Kosinus) gesetzt wird. Der `currentRotation`-Vektor ist jetzt der Punkt auf dem [Einheitskreis](https://de.wikipedia.org/wiki/Einheitskreis) an dem Winkel `currentAngle`.

[`useProgram()`](/de/docs/Web/API/WebGLRenderingContext/useProgram) wird aufgerufen, um das zuvor erstellte GLSL-Shader-Programm zu aktivieren. Dann erhalten wir die Positionen jedes der Uniforms, die verwendet werden, um Informationen zwischen dem JavaScript-Code und den Shadern auszutauschen (mit [`getUniformLocation()`](/de/docs/Web/API/WebGLRenderingContext/getUniformLocation)).

Das Uniform mit dem Namen `uScalingFactor` wird auf den zuvor berechneten `currentScale`-Wert gesetzt; das ist, wie Sie sich vielleicht erinnern, der Wert, der verwendet wird, um das Koordinatensystem basierend auf dem Seitenverhältnis des Kontext anzupassen. Dies erfolgt mit [`uniform2fv()`](/de/docs/Web/API/WebGLRenderingContext/uniform), da dies ein 2-Werte-Gleitkomma-Vektor ist.

`uRotationVector` wird auf den aktuellen Rotationsvektor (`currentRotation`) gesetzt, ebenfalls mit `uniform2fv()`.

`uGlobalColor` wird mit Hilfe von [`uniform4fv()`](/de/docs/Web/API/WebGLRenderingContext/uniform) auf die Farbe gesetzt, die wir verwenden möchten, um das Quadrat zu zeichnen. Dies ist ein 4-Komponenten-Gleitkomma-Vektor (eine Komponente für Rot, Grün, Blau und Alpha).

Jetzt, da dies alles erledigt ist, können wir den Vertex-Puffer einrichten und unsere Form zeichnen. Der Puffer von Vertices, der verwendet wird, um die Dreiecke der Form zu zeichnen, wird durch Aufruf von [`bindBuffer()`](/de/docs/Web/API/WebGLRenderingContext/bindBuffer) gesetzt. Dann wird der Index des Vertex-Positionsattributs aus dem Shader-Programm abgerufen, indem [`getAttribLocation()`](/de/docs/Web/API/WebGLRenderingContext/getAttribLocation) aufgerufen wird.

Mit dem jetzt in `aVertexPosition` verfügbaren Index des Vertex-Positionsattribus rufen wir `enableVertexAttribArray()` auf, um das Positionsattribut zu aktivieren, sodass es vom Shader-Programm verwendet werden kann (insbesondere vom Vertex-Shader).

Dann wird der Vertex-Puffer an das `aVertexPosition`-Attribut durch Aufruf von [`vertexAttribPointer()`](/de/docs/Web/API/WebGLRenderingContext/vertexAttribPointer) gebunden. Dieser Schritt ist nicht offensichtlich, da diese Bindung fast eine Nebenwirkung ist. Aber als Ergebnis wird durch den Zugriff auf `aVertexPosition` jetzt Daten aus dem Vertex-Puffer abgerufen.

Mit der bestehenden Assoziation zwischen dem Vertex-Puffer unserer Form und dem `aVertexPosition`-Attribut, das verwendet wird, um Vertices nacheinander in den Vertex-Shader zu liefern, sind wir bereit, die Form durch Aufrufen von [`drawArrays()`](/de/docs/Web/API/WebGLRenderingContext/drawArrays) zu zeichnen.

An diesem Punkt ist der Frame gezeichnet. Alles, was noch zu tun ist, ist, den nächsten zu zeichnenden Frame zu planen. Das wird hier erreicht, indem [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) aufgerufen wird, das darum bittet, dass beim nächsten Mal, wenn der Browser bereit ist, den Bildschirm zu aktualisieren, eine Callback-Funktion ausgeführt wird.

Unser `requestAnimationFrame()`-Callback empfängt als Eingabe einen einzigen Parameter `currentTime`, der die Zeit angibt, zu der das Zeichnen des Frames begann. Wir verwenden diesen und die gespeicherte Zeit, zu der der letzte Frame gezeichnet wurde, `previousTime`, zusammen mit der Anzahl der Grad pro Sekunde, die das Quadrat rotieren soll (`degreesPerSecond`), um den neuen Wert von `currentAngle` zu berechnen. Dann wird der Wert von `previousTime` aktualisiert und wir rufen `animateScene()` auf, um den nächsten Frame zu zeichnen (und wiederum den nächsten Frame zu planen, Ad infinitum).

### Ergebnis

Dies ist ein ziemlich einfaches Beispiel, da es nur ein einfaches Objekt zeichnet, aber die hier verwendeten Konzepte erweitern sich auf weitaus komplexere Animationen.

{{EmbedLiveSample("A_rotating_square_example", 660, 500)}}

## Siehe auch

- [WebGL API](/de/docs/Web/API/WebGL_API)
- [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial)
