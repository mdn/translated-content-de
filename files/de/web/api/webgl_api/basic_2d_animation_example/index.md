---
title: Ein grundlegendes 2D WebGL-Animationsbeispiel
slug: Web/API/WebGL_API/Basic_2D_animation_example
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{DefaultAPISidebar("WebGL")}}

In diesem WebGL-Beispiel erstellen wir eine Leinwand und rendern darin ein sich drehendes Quadrat mit WebGL. Das Koordinatensystem, das wir zur Darstellung unserer Szene verwenden, ist dasselbe wie das Koordinatensystem der Leinwand. Das heißt, (0, 0) befindet sich in der oberen linken Ecke und die untere rechte Ecke ist bei (600, 460).

## Ein Beispiel für ein sich drehendes Quadrat

Lassen Sie uns die verschiedenen Schritte durchgehen, um unser sich drehendes Quadrat zu erhalten.

### Vertex-Shader

Zuerst werfen wir einen Blick auf den Vertex-Shader. Seine Aufgabe besteht, wie üblich, darin, die Koordinaten, die wir für unsere Szene verwenden, in Clipping-Koordinaten umzuwandeln (das heißt, das System, bei dem (0, 0) im Zentrum des Kontextes liegt und jede Achse sich von -1,0 bis 1,0 erstreckt, unabhängig von der tatsächlichen Größe des Kontextes).

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

Das Hauptprogramm teilt uns das Attribut `aVertexPosition` mit, das die Position des Vertex in welchem Koordinatensystem auch immer ist. Wir müssen diese Werte so umwandeln, dass beide Komponenten der Position im Bereich von -1,0 bis 1,0 liegen. Dies kann einfach durch Multiplikation mit einem Skalierungsfaktor erfolgen, der auf dem [Seitenverhältnis](/de/docs/Glossary/aspect_ratio) des Kontextes basiert. Diese Berechnung werden wir in Kürze sehen.

Wir drehen auch die Form, und das können wir hier tun, indem wir eine Transformation anwenden. Das machen wir zuerst. Die gedrehte Position des Vertex wird berechnet, indem wir den Rotationsvektor anwenden, der sich im Uniform `uRotationVector` befindet und vom JavaScript-Code berechnet wurde.

Dann wird die endgültige Position berechnet, indem wir die gedrehte Position mit dem Skalierungsvektor multiplizieren, der vom JavaScript-Code in `uScalingFactor` bereitgestellt wird. Die Werte von `z` und `w` sind auf 0,0 bzw. 1,0 festgelegt, da wir in 2D zeichnen.

Der Standard-WebGL-Gloabal `gl_Position` wird dann auf die transformierte und gedrehte Position des Vertexes gesetzt.

### Fragment-Shader

Als nächstes kommt der Fragment-Shader. Seine Rolle besteht darin, die Farbe jedes Pixels in der zu rendernden Form zurückzugeben. Da wir ein solides, untexturiertes Objekt ohne Beleuchtung zeichnen, ist dies außergewöhnlich einfach:

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

Dies beginnt damit, die Präzision des `float`-Typs anzugeben, wie erforderlich. Dann setzen wir die globale `gl_FragColor` auf den Wert des Uniforms `uGlobalColor`, das vom JavaScript-Code auf die Farbe gesetzt wird, mit der das Quadrat gezeichnet wird.

### HTML

Das HTML besteht ausschließlich aus dem {{HTMLElement("canvas")}}, auf dem wir einen WebGL-Kontext erhalten werden.

```html
<canvas id="glcanvas" width="600" height="460">
  Oh no! Your browser doesn't support canvas!
</canvas>
```

### Globale Variablen und Initialisierung

Zuerst die globalen Variablen. Wir werden diese hier nicht besprechen; stattdessen werden wir über sie sprechen, wenn sie im kommenden Code verwendet werden.

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

Die Initialisierung des Programms wird durch einen [`load`](/de/docs/Web/API/Window/load_event)-Ereignishandler namens `startup()` durchgeführt:

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

Nachdem wir den WebGL-Kontext `gl` erhalten haben, müssen wir damit beginnen, das Shader-Programm zu erstellen. Hier verwenden wir Code, mit dem wir unserem Programm recht einfach mehrere Shader hinzufügen können. Das Array `shaderSet` enthält eine Liste von Objekten, von denen jedes eine Shader-Funktion beschreibt, die in das Programm kompiliert werden soll. Jede Funktion hat einen Typ (einer von `gl.VERTEX_SHADER` oder `gl.FRAGMENT_SHADER`) und eine ID (die ID des {{HTMLElement("script")}}-Elements, das den Code des Shaders enthält).

Das Shader-Set wird in die Funktion `buildShaderProgram()` übergeben, die das kompilierte und verknüpfte Shader-Programm zurückgibt. Als nächstes sehen wir, wie das funktioniert.

Sobald das Shader-Programm erstellt ist, berechnen wir das Seitenverhältnis unseres Kontextes, indem wir seine Breite durch seine Höhe teilen. Dann setzen wir den aktuellen Rotationsvektor für die Animation auf `[0, 1]` und den Skalierungsvektor auf `[1.0, aspectRatio]`. Der Skalierungsvektor, wie wir im Vertex-Shader gesehen haben, wird verwendet, um die Koordinaten anzupassen, damit sie in den Bereich von -1,0 bis 1,0 passen.

Das Array der Vertexe wird als nächstes erstellt, als eine {{jsxref("Float32Array")}} mit sechs Koordinaten (drei 2D-Vertexe) pro zu zeichnendem Dreieck, insgesamt also 12 Werte.

Wie Sie sehen, verwenden wir ein Koordinatensystem von -1,0 bis 1,0 für jede Achse. Warum müssen wir überhaupt Anpassungen vornehmen, fragen Sie vielleicht? Das liegt daran, dass unser Kontext nicht quadratisch ist. Wir verwenden einen Kontext, der 600 Pixel breit und 460 Pixel hoch ist. Jede dieser Dimensionen wird auf den Bereich von -1,0 bis 1,0 abgebildet. Da die beiden Achsen nicht gleich lang sind, wird das Quadrat ohne Anpassung der Werte einer der beiden Achsen in eine Richtung oder die andere gestreckt. Daher müssen wir diese Werte normalisieren.

Sobald das Vertex-Array erstellt wurde, erstellen wir einen neuen GL-Puffer, um sie zu enthalten, indem wir [`gl.createBuffer()`](/de/docs/Web/API/WebGLRenderingContext/createBuffer) aufrufen. Wir binden die Standard-WebGL-Array-Puffer-Referenz durch Aufruf von [`gl.bindBuffer()`](/de/docs/Web/API/WebGLRenderingContext/bindBuffer) und kopieren dann die Vertex-Daten mit [`gl.bufferData()`](/de/docs/Web/API/WebGLRenderingContext/bufferData) in den Puffer. Der Verwendungshinweis `gl.STATIC_DRAW` wird angegeben, was WebGL mitteilt, dass die Daten nur einmal gesetzt und nie geändert werden, aber wiederholt verwendet werden. Dies lässt WebGL eventuelle Optimierungen in Betracht ziehen, die es basierend auf diesen Informationen anwenden kann, um die Leistung zu verbessern.

Sobald die Vertex-Daten nun WebGL bereitgestellt wurden, setzen wir `vertexNumComponents` auf die Anzahl der Komponenten in jedem Vertex (2, da es sich um 2D-Vertexe handelt) und `vertexCount` auf die Anzahl der Vertexe in der Vertexliste.

Dann wird der aktuelle Rotationswinkel (in Grad) auf 0,0 gesetzt, da wir noch keine Rotation durchgeführt haben, und die Rotationsgeschwindigkeit (in Grad pro Bildschirmaktualisierungsperiode, typischerweise 60 FPS) wird auf 6 gesetzt.

Schließlich wird `animateScene()` aufgerufen, um den ersten Frame zu rendern und die Darstellung des nächsten Animationsframes zu planen.

### Kompilieren und Verknüpfen des Shader-Programms

Die `buildShaderProgram()`-Funktion akzeptiert als Eingabe ein Array von Objekten, die eine Reihe von Shader-Funktionen beschreiben, die in das Shader-Programm kompiliert und verknüpft werden sollen, und gibt das Shader-Programm zurück, nachdem es erstellt und verknüpft wurde.

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

Dann rufen wir für jeden Shader in der angegebenen Liste von Shadern eine `compileShader()`-Funktion auf, um sie zu kompilieren, und übergeben ihr die ID und den Typ der zu erstellenden Shader-Funktion. Jedes dieser Objekte enthält, wie bereits erwähnt, die ID des `<script>`-Elements, in dem der Shader-Code zu finden ist, und die Art des Shaders. Der kompilierte Shader wird mit [`gl.attachShader()`](/de/docs/Web/API/WebGLRenderingContext/attachShader) an das Shader-Programm angehängt.

> [!NOTE]
> Wir könnten hier tatsächlich noch einen Schritt weiter gehen und den Wert des `type`-Attributs des `<script>`-Elements betrachten, um den Shader-Typ zu bestimmen.

Sobald alle Shader kompiliert sind, wird das Programm mit [`gl.linkProgram()`](/de/docs/Web/API/WebGLRenderingContext/linkProgram) verknüpft.

Wenn beim Verknüpfen des Programms ein Fehler auftritt, wird die Fehlermeldung in die Konsole geloggt.

Abschließend wird das kompilierte Programm an den Aufrufer zurückgegeben.

### Kompilieren eines einzelnen Shaders

Die untenstehende `compileShader()`-Funktion wird von `buildShaderProgram()` aufgerufen, um einen einzelnen Shader zu kompilieren.

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

Der Code wird aus dem HTML-Dokument abgerufen, indem der Wert des Textknotens des {{HTMLElement("script")}}-Elements mit der angegebenen ID ermittelt wird. Dann wird ein neuer Shader des angegebenen Typs durch den Aufruf von [`gl.createShader()`](/de/docs/Web/API/WebGLRenderingContext/createShader) erstellt.

Der Quellcode wird in den neuen Shader gesendet, indem er in [`gl.shaderSource()`](/de/docs/Web/API/WebGLRenderingContext/shaderSource) übergeben wird, und dann wird der Shader durch Aufruf von [`gl.compileShader()`](/de/docs/Web/API/WebGLRenderingContext/compileShader) kompiliert

Kompilierungsfehler werden in die Konsole geloggt. Beachten Sie die Verwendung eines [Template-Literal](https://de.wikipedia.org/wiki/Template-String)-String zur Einfügung des richtigen Shader-Typs als Zeichenkette in die generierte Meldung. Die tatsächlichen Fehlerdetails werden durch den Aufruf von [`gl.getShaderInfoLog()`](/de/docs/Web/API/WebGLRenderingContext/getShaderInfoLog) ermittelt.

Schließlich wird der kompilierte Shader an den Aufrufer zurückgegeben (welcher die `buildShaderProgram()`-Funktion ist).

### Zeichnen und Animieren der Szene

Die `animateScene()`-Funktion wird aufgerufen, um jeden Animationsframe zu rendern.

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

Das Erste, was getan werden muss, um einen Frame der Animation zu zeichnen, ist, den Hintergrund auf die gewünschte Farbe zu löschen. In diesem Fall setzen wir den Viewport basierend auf der Größe des {{HTMLElement("canvas")}}, rufen [`clearColor()`](/de/docs/Web/API/WebGLRenderingContext/clearColor) auf, um die Farbe festzulegen, die beim Löschen des Inhalts verwendet werden soll, und löschen dann den Puffer mit [`clear()`](/de/docs/Web/API/WebGLRenderingContext/clear).

Als Nächstes wird der aktuelle Rotationsvektor berechnet, indem die aktuelle Drehung in Grad (`currentAngle`) in [Radiant](https://de.wikipedia.org/wiki/Bogenmaß) umgerechnet wird, dann die erste Komponente des Rotationsvektors auf den [Sinus](https://de.wikipedia.org/wiki/Sinus) dieses Werts gesetzt wird und die zweite Komponente auf den [Kosinus](https://de.wikipedia.org/wiki/Kosinus). Der `currentRotation`-Vektor ist nun der Ort des Punktes auf dem [Einheitskreis](https://de.wikipedia.org/wiki/Einheitskreis), der sich im Winkel `currentAngle` befindet.

[`useProgram()`](/de/docs/Web/API/WebGLRenderingContext/useProgram) wird aufgerufen, um das zuvor festgelegte GLSL-Shading-Programm zu aktivieren. Dann holen wir die Positionen jedes der Uniforms ab, die zum Teilen von Informationen zwischen dem JavaScript-Code und den Shadern verwendet werden (mit [`getUniformLocation()`](/de/docs/Web/API/WebGLRenderingContext/getUniformLocation)).

Das Uniform `uScalingFactor` wird auf den zuvor berechneten Wert `currentScale` gesetzt; wie Sie sich erinnern, ist dies der Wert, der verwendet wird, um das Koordinatensystem basierend auf dem Seitenverhältnis des Kontextes anzupassen. Dies geschieht mit [`uniform2fv()`](/de/docs/Web/API/WebGLRenderingContext/uniform) (da es sich um einen 2-Wert-Gleitkomma-Vektor handelt).

`uRotationVector` wird auf den aktuellen Rotationsvektor (`currentRotation) gesetzt, ebenfalls mit `uniform2fv()`.

`uGlobalColor` wird mit [`uniform4fv()`](/de/docs/Web/API/WebGLRenderingContext/uniform) auf die Farbe gesetzt, die wir verwenden möchten, um das Quadrat zu zeichnen. Dies ist ein Gleitkomma-Vektor mit 4 Komponenten (eine Komponente jeweils für Rot, Grün, Blau und Alpha).

Jetzt, da das erledigt ist, können wir den Vertex-Puffer einrichten und unsere Form zeichnen, zuerst wird der Puffer von Vertexen, der verwendet wird, um die Dreiecke der Form zu zeichnen, durch Aufruf von [`bindBuffer()`](/de/docs/Web/API/WebGLRenderingContext/bindBuffer) festgelegt. Dann wird der Index des Vertexposition-Attributes aus dem Shader-Programm ermittelt, indem [`getAttribLocation()`](/de/docs/Web/API/WebGLRenderingContext/getAttribLocation) aufgerufen wird.

Mit dem nun verfügbaren Index des Vertexposition-Attributes in `aVertexPosition`, rufen wir `enableVertexAttribArray()` auf, um das Positionsattribut so zu aktivieren, dass es vom Shader-Programm verwendet werden kann (insbesondere vom Vertex-Shader).

Dann wird der Vertex-Puffer an das `aVertexPosition`-Attribut gebunden, indem [`vertexAttribPointer()`](/de/docs/Web/API/WebGLRenderingContext/vertexAttribPointer) aufgerufen wird. Dieser Schritt ist nicht offensichtlich, da diese Bindung fast wie ein Nebeneffekt ist. Aber als Ergebnis greift der Zugriff auf `aVertexPosition` nun auf die Daten aus dem Vertex-Puffer zu.

Mit der jetzt bestehenden Zuordnung zwischen dem Vertex-Puffer unserer Form und dem `aVertexPosition`-Attribut, das verwendet wird, um Vertexe einzeln in den Vertex-Shader zu liefern, sind wir bereit, die Form zu zeichnen, indem wir [`drawArrays()`](/de/docs/Web/API/WebGLRenderingContext/drawArrays) aufrufen.

An diesem Punkt wurde der Frame gezeichnet. Alles, was noch zu tun ist, ist, den nächsten zu zeichnenden Frame zu planen. Dies wird hier durch den Aufruf von [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) erledigt, der darum bittet, dass eine Rückruf-Funktion das nächste Mal ausgeführt wird, wenn der Browser bereit ist, den Bildschirm zu aktualisieren.

Unser `requestAnimationFrame()` Callback erhält als Eingabe einen einzelnen Parameter, `currentTime`, der die Zeit angibt, zu der das Zeichnen des Frames begonnen hat. Wir verwenden diesen und die gespeicherte Zeit, zu der der letzte Frame gezeichnet wurde, `previousTime`, zusammen mit der Anzahl der Grad pro Sekunde, um die sich das Quadrat drehen soll (`degreesPerSecond`), um den neuen Wert von `currentAngle` zu berechnen. Dann wird der Wert von `previousTime` aktualisiert und wir rufen `animateScene()` auf, um den nächsten Frame zu zeichnen (und wiederum den nächsten zu zeichnenden Frame, ins Unendliche).

### Ergebnis

Dies ist ein ziemlich einfaches Beispiel, da es nur ein einfaches Objekt zeichnet, aber die hier verwendeten Konzepte erstrecken sich auf wesentlich komplexere Animationen.

{{EmbedLiveSample("A_rotating_square_example", 660, 500)}}

## Siehe auch

- [WebGL API](/de/docs/Web/API/WebGL_API)
- [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial)
