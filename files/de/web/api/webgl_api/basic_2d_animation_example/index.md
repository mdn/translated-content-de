---
title: Ein einfaches WebGL-Animationsbeispiel in 2D
slug: Web/API/WebGL_API/Basic_2D_animation_example
l10n:
  sourceCommit: 9a4005caa5cc13f5174e3b8981eeec5631ed83d1
---

{{DefaultAPISidebar("WebGL")}}

In diesem WebGL-Beispiel erstellen wir eine Leinwand und rendern darin ein rotierendes Quadrat mit WebGL. Das Koordinatensystem, das wir verwenden, um unsere Szene darzustellen, entspricht dem Koordinatensystem der Leinwand. Das heißt, (0, 0) befindet sich in der oberen linken Ecke und die untere rechte Ecke bei (600, 460).

## Ein Beispiel für ein rotierendes Quadrat

Lassen Sie uns die verschiedenen Schritte verfolgen, um unser rotierendes Quadrat zu erhalten.

### Vertex-Shader

Zuerst werfen wir einen Blick auf den Vertex-Shader. Seine Aufgabe ist es, wie immer, die Koordinaten, die wir für unsere Szene verwenden, in ClipSpace-Koordinaten umzuwandeln (das ist das System, bei dem (0, 0) im Zentrum des Kontextes liegt und jede Achse von -1.0 bis 1.0 reicht, unabhängig von der tatsächlichen Größe des Kontextes).

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

Das Hauptprogramm teilt uns das Attribut `aVertexPosition` mit, das die Position des Scheitelpunkts in welchem auch immer benutzten Koordinatensystem ist. Diese Werte müssen so umgewandelt werden, dass beide Komponenten der Position im Bereich von -1.0 bis 1.0 liegen. Dies kann leicht erreicht werden, indem man mit einem Skalierungsfaktor multipliziert, der auf dem [Seitenverhältnis](/de/docs/Glossar/aspect_ratio) des Kontexts basiert. Diese Berechnung werden wir gleich sehen.

Wir rotieren auch die Form, und das können wir hier tun, indem wir eine Transformation anwenden. Wir machen das zuerst. Die rotierte Position des Scheitelpunkts wird berechnet, indem der Rotationsvektor angewandt wird, der im Uniform `uRotationVector` enthalten ist und durch den JavaScript-Code errechnet wurde.

Dann wird die endgültige Position berechnet, indem die rotierte Position mit dem Skalierungsvektor multipliziert wird, der durch den JavaScript-Code in `uScalingFactor` bereitgestellt wird. Die Werte von `z` und `w` sind fest auf 0.0 bzw. 1.0 gesetzt, da wir in 2D zeichnen.

Die standardmäßige WebGL-Globale `gl_Position` wird dann auf die transformierte und rotierte Position des Scheitelpunkts gesetzt.

### Fragment-Shader

Als nächstes kommt der Fragment-Shader. Seine Aufgabe ist es, die Farbe jedes Pixels in der gezeichneten Form zurückzugeben. Da wir ein massives, untexturiertes Objekt ohne Beleuchtung zeichnen, ist dies außerordentlich einfach:

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

Dies beginnt mit der Angabe der Präzision des `float`-Typs, wie erforderlich. Dann wird die globale `gl_FragColor` auf den Wert des Uniforms `uGlobalColor` gesetzt, das durch den JavaScript-Code auf die Farbe gesetzt wird, die für das Zeichnen des Quadrats verwendet wird.

### HTML

Das HTML besteht ausschließlich aus dem {{HTMLElement("canvas")}}, auf dem wir einen WebGL-Kontext erhalten werden.

```html
<canvas id="gl-canvas" width="600" height="460">
  Oh no! Your browser doesn't support canvas!
</canvas>
```

### Globals und Initialisierung

Zuerst die globalen Variablen. Wir werden diese hier nicht besprechen; stattdessen werden wir über sie sprechen, während sie im nachfolgenden Code verwendet werden.

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

Die Initialisierung des Programms wird über einen [`load`](/de/docs/Web/API/Window/load_event)-Ereignishandler namens `startup()` durchgeführt:

```js
window.addEventListener("load", startup, false);

function startup() {
  glCanvas = document.getElementById("gl-canvas");
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

Nachdem Sie den WebGL-Kontext `gl` erhalten haben, müssen wir zunächst das Shader-Programm erstellen. Hier verwenden wir Code, der es uns ermöglicht, mehrere Shader zu unserem Programm hinzuzufügen. Das Array `shaderSet` enthält eine Liste von Objekten, die jeweils eine Shaderfunktion beschreiben, die ins Programm kompiliert werden soll. Jede Funktion hat einen Typ (einer von `gl.VERTEX_SHADER` oder `gl.FRAGMENT_SHADER`) und eine ID (die ID des {{HTMLElement("script")}}-Elements, das den Shader-Code enthält).

Das Shader-Set wird an die Funktion `buildShaderProgram()` übergeben, die das kompilierte und verlinkte Shader-Programm zurückgibt. Wir werden uns als nächstes ansehen, wie das funktioniert.

Sobald das Shader-Programm erstellt ist, berechnen wir das Seitenverhältnis unseres Kontexts, indem wir seine Breite durch seine Höhe teilen. Dann setzen wir den aktuellen Rotationsvektor für die Animation auf `[0, 1]` und den Skalierungsvektor auf `[1.0, aspectRatio]`. Der Skalierungsvektor, wie wir im Vertex-Shader gesehen haben, wird verwendet, um die Koordinaten auf den Bereich -1.0 bis 1.0 zu skalieren.

Der Array der Vertizes wird als nächstes erstellt, als {{jsxref("Float32Array")}} mit sechs Koordinaten (drei 2D-Scheitelpunkte) pro zu zeichnendes Dreieck, insgesamt 12 Werte.

Wie Sie sehen können, verwenden wir ein Koordinatensystem von -1.0 bis 1.0 für jede Achse. Warum, könnten Sie fragen, müssen wir überhaupt Anpassungen vornehmen? Dies liegt daran, dass unser Kontext nicht quadratisch ist. Wir verwenden einen Kontext, der 600 Pixel breit und 460 hoch ist. Jede dieser Dimensionen wird auf den Bereich -1.0 bis 1.0 abgebildet. Da die beiden Achsen nicht die gleiche Länge haben, wird das Quadrat in eine Richtung verzerrt, wenn wir die Werte einer der beiden Achsen nicht anpassen. Daher müssen wir diese Werte normalisieren.

Nachdem das Vertex-Array erstellt wurde, erstellen wir einen neuen GL-Puffer, um sie zu enthalten, indem wir [`gl.createBuffer()`](/de/docs/Web/API/WebGLRenderingContext/createBuffer) aufrufen. Wir binden die Standard-WebGL-Array-Pufferreferenz daran, indem wir [`gl.bindBuffer()`](/de/docs/Web/API/WebGLRenderingContext/bindBuffer) aufrufen und dann die Vertex-Daten in den Puffer kopieren, mit [`gl.bufferData()`](/de/docs/Web/API/WebGLRenderingContext/bufferData). Der Verwendungshinweis `gl.STATIC_DRAW` wird angegeben, was WebGL mitteilt, dass die Daten nur einmal gesetzt und nie bearbeitet, aber wiederholt verwendet werden. Dies lässt WebGL überlegen, welche Optimierungen es anwenden kann, um die Leistung basierend auf diesen Informationen zu verbessern.

Mit den nun an WebGL bereitgestellten Vertex-Daten setzen wir `vertexNumComponents` auf die Anzahl der Komponenten in jedem Vertex (2, da es sich um 2D-Scheitelpunkte handelt) und `vertexCount` auf die Anzahl der Scheitelpunkte in der Vertexliste.

Dann wird der aktuelle Rotationswinkel (in Grad) auf 0.0 gesetzt, da wir noch keine Rotation durchgeführt haben, und die Rotationsgeschwindigkeit (in Grad pro Bildwiederholungsperiode, typischerweise 60 FPS) auf 6.

Schließlich wird `animateScene()` aufgerufen, um den ersten Frame zu rendern und das Rendern des nächsten Frames der Animation zu planen.

### Kompilieren und Verlinken des Shader-Programms

Die Funktion `buildShaderProgram()` akzeptiert als Eingabe ein Array von Objekten, die eine Reihe von Shader-Funktionen beschreiben, die in das Shader-Programm kompiliert und verlinkt werden sollen, und gibt das Shader-Programm zurück, nachdem es erstellt und verlinkt wurde.

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

Dann rufen wir für jeden Shader in der angegebenen Liste von Shadern eine `compileShader()`-Funktion auf, um es zu kompilieren, indem wir ihr die ID und den Typ der zu erstellenden Shader-Funktion übergeben. Jedes dieser Objekte enthält, wie zuvor erwähnt, die ID des `<script>`-Elements, in dem sich der Shader-Code befindet, und den Typ des Shaders. Der kompilierte Shader wird an das Shader-Programm angehängt, indem er an [`gl.attachShader()`](/de/docs/Web/API/WebGLRenderingContext/attachShader) übergeben wird.

> [!NOTE]
> Wir könnten hier tatsächlich einen Schritt weiter gehen und den Wert des `type`-Attributs des `<script>`-Elements betrachten, um den Shader-Typ zu bestimmen.

Wenn alle Shader kompiliert sind, wird das Programm mit [`gl.linkProgram()`](/de/docs/Web/API/WebGLRenderingContext/linkProgram) verlinkt.

Tritt beim Verlinken des Programms ein Fehler auf, wird die Fehlermeldung in der Konsole protokolliert.

Schließlich wird das kompilierte Programm an den Aufrufer zurückgegeben.

### Kompilieren eines einzelnen Shaders

Die `compileShader()`-Funktion, unten, wird von `buildShaderProgram()` aufgerufen, um einen einzelnen Shader zu kompilieren.

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

Der Code wird aus dem HTML-Dokument abgerufen, indem der Wert der Text-Node innerhalb des {{HTMLElement("script")}}-Elements mit der angegebenen ID erhalten wird. Dann wird ein neuer Shader des angegebenen Typs erstellt, indem [`gl.createShader()`](/de/docs/Web/API/WebGLRenderingContext/createShader) verwendet wird.

Der Quellcode wird in den neuen Shader übergeben, indem er in [`gl.shaderSource()`](/de/docs/Web/API/WebGLRenderingContext/shaderSource) übermittelt wird, und dann wird der Shader mit [`gl.compileShader()`](/de/docs/Web/API/WebGLRenderingContext/compileShader) kompiliert.

Kompilierfehler werden in der Konsole protokolliert. Beachten Sie die Verwendung einer [Template Literal](/de/docs/Web/JavaScript/Reference/Template_literals)-Zeichenkette, um den richtigen Shader-Typ-String in die generierte Nachricht einzufügen. Die tatsächlichen Fehlerdetails werden abgerufen, indem [`gl.getShaderInfoLog()`](/de/docs/Web/API/WebGLRenderingContext/getShaderInfoLog) aufgerufen wird.

Schließlich wird der kompilierte Shader an den Aufrufer zurückgegeben (also die `buildShaderProgram()`-Funktion).

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

Das erste, was getan werden muss, um einen Frame der Animation zu zeichnen, ist, den Hintergrund auf die gewünschte Farbe zu setzen. In diesem Fall legen wir den Viewport basierend auf der Größe des {{HTMLElement("canvas")}} fest, rufen [`clearColor()`](/de/docs/Web/API/WebGLRenderingContext/clearColor) auf, um die Farbe festzulegen, die zum Löschen des Inhalts verwendet werden soll, und löschen dann den Puffer mit [`clear()`](/de/docs/Web/API/WebGLRenderingContext/clear).

Als nächstes wird der aktuelle Rotationsvektor berechnet, indem die aktuelle Rotation in Grad (`currentAngle`) in [Radiant](/de/docs/Web/JavaScript/Referenz/Objekte/Syntax/Nummer/Radiant) umgewandelt wird und dann die erste Komponente des Rotationsvektors auf den [Sinus](https://de.wikipedia.org/wiki/Sinus) dieses Wertes und die zweite Komponente auf den [Kosinus](https://de.wikipedia.org/wiki/Kosinus) gesetzt wird. Der `currentRotation`-Vektor ist jetzt der Ort des Punktes auf dem [Einheitskreis](https://de.wikipedia.org/wiki/Einheitskreis), der sich im Winkel `currentAngle` befindet.

[`useProgram()`](/de/docs/Web/API/WebGLRenderingContext/useProgram) wird aufgerufen, um das bereits etablierte GLSL-Shading-Programm zu aktivieren. Dann erhalten wir die Positionen jedes der Uniforms, die verwendet werden, um Informationen zwischen dem JavaScript-Code und den Shadern zu teilen (mit [`getUniformLocation()`](/de/docs/Web/API/WebGLRenderingContext/getUniformLocation)).

Das Uniform mit dem Namen `uScalingFactor` wird auf den vorher berechneten `currentScale`-Wert gesetzt; dies ist, wie Sie sich vielleicht erinnern, der Wert, der verwendet wird, um das Koordinatensystem basierend auf dem Seitenverhältnis des Kontextes anzupassen. Dies wird mit [`uniform2fv()`](/de/docs/Web/API/WebGLRenderingContext/uniform) (da dies ein 2-Wert-Float-Vektor ist) durchgeführt.

`uRotationVector` wird auf den aktuellen Rotationsvektor (`currentRotation`) gesetzt, ebenfalls unter Verwendung von `uniform2fv()`.

`uGlobalColor` wird mit [`uniform4fv()`](/de/docs/Web/API/WebGLRenderingContext/uniform) auf die Farbe gesetzt, die wir beim Zeichnen des Quadrats verwenden möchten. Dies ist ein 4-Komponenten-Float-Vektor (eine Komponente für jeweils Rot, Grün, Blau und Alpha).

Jetzt, da das alles erledigt ist, können wir den Vertex-Puffer einrichten und unsere Form zeichnen. Zuerst wird der Puffer der Vertexe, die zum Zeichnen der Dreiecke der Form verwendet werden, durch Aufrufen von [`bindBuffer()`](/de/docs/Web/API/WebGLRenderingContext/bindBuffer) gesetzt. Dann wird der Attributindex der Vertex-Position aus dem Shader-Programm durch Aufrufen von [`getAttribLocation()`](/de/docs/Web/API/WebGLRenderingContext/getAttribLocation) erhalten.

Mit dem nun im `aVertexPosition` verfügbaren Index des Vertex-Positionsattributs rufen wir `enableVertexAttribArray()` auf, um das Positionsattribut zu aktivieren, sodass es vom Shader-Programm (insbesondere vom Vertex-Shader) verwendet werden kann.

Dann wird der Vertex-Puffer an das `aVertexPosition`-Attribut gebunden, indem [`vertexAttribPointer()`](/de/docs/Web/API/WebGLRenderingContext/vertexAttribPointer) aufgerufen wird. Dieser Schritt ist nicht offensichtlich, da diese Bindung fast wie ein Nebeneffekt erscheint. Aber als Ergebnis wird durch das Zugreifen auf `aVertexPosition` nun Daten aus dem Vertex-Puffer erhalten.

Mit der bestehenden Assoziation zwischen dem Vertex-Puffer für unsere Form und dem `aVertexPosition`-Attribut, das dazu verwendet wird, Scheitelpunkte einzeln in den Vertex-Shader zu liefern, sind wir bereit, die Form durch Aufrufen von [`drawArrays()`](/de/docs/Web/API/WebGLRenderingContext/drawArrays) zu zeichnen.

An diesem Punkt ist der Frame gezeichnet. Alles, was noch zu tun ist, ist, den nächsten Frame einzuplanen, der gezeichnet werden soll. Dies wird hier durch Aufrufen von [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) erledigt, das darum bittet, dass eine Callback-Funktion ausgeführt wird, wenn der Browser das nächste Mal bereit ist, den Bildschirm zu aktualisieren.

Unser `requestAnimationFrame()`-Callback erhält als Eingabe einen einzigen Parameter, `currentTime`, der die Zeit angibt, zu der das Frame-Drawing begonnen hat. Wir verwenden dies und die gespeicherte Zeit, zu der das letzte Frame gezeichnet wurde, `previousTime`, zusammen mit der Anzahl der Grad pro Sekunde, die das Quadrat drehen soll (`degreesPerSecond`), um den neuen Wert von `currentAngle` zu berechnen. Dann wird der Wert von `previousTime` aktualisiert und wir rufen `animateScene()` auf, um den nächsten Frame zu zeichnen (und wiederum den nächsten Frame zu planen, der gezeichnet werden soll, ad infinitum).

### Ergebnis

Dies ist ein ziemlich einfaches Beispiel, da es nur ein einfaches Objekt zeichnet, aber die hier verwendeten Konzepte erstrecken sich auf viel komplexere Animationen.

{{EmbedLiveSample("A_rotating_square_example", 660, 500)}}

## Siehe auch

- [WebGL API](/de/docs/Web/API/WebGL_API)
- [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial)
