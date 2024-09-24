---
title: Ein einfaches 2D-WebGL-Animationsbeispiel
slug: Web/API/WebGL_API/Basic_2D_animation_example
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{DefaultAPISidebar("WebGL")}}

In diesem WebGL-Beispiel erstellen wir eine Leinwand (canvas) und rendern darin ein sich drehendes Quadrat mithilfe von WebGL. Das Koordinatensystem, das wir zur Darstellung unserer Szene verwenden, entspricht dem Koordinatensystem der Leinwand. Das heißt, (0, 0) befindet sich in der oberen linken Ecke und die untere rechte Ecke ist bei (600, 460).

## Ein Beispiel für ein rotierendes Quadrat

Lassen Sie uns die verschiedenen Schritte durchgehen, um unser rotierendes Quadrat zu erhalten.

### Vertex-Shader

Zuerst werfen wir einen Blick auf den Vertex-Shader. Seine Aufgabe ist es, die Koordinaten, die wir für unsere Szene verwenden, in Clipping-Koordinaten zu konvertieren (also das System, bei dem (0, 0) im Zentrum des Kontexts liegt und jede Achse von -1,0 bis 1,0 verläuft, unabhängig von der tatsächlichen Größe des Kontexts).

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

Das Hauptprogramm teilt uns das Attribut `aVertexPosition` mit, welches die Position des Vertex in welchem Koordinatensystem auch immer darstellt. Wir müssen diese Werte so konvertieren, dass beide Komponenten der Position im Bereich von -1,0 bis 1,0 liegen. Dies kann leicht erreicht werden, indem man mit einem Skalierungsfaktor multipliziert, der auf dem {{glossary("aspect ratio", "Seitenverhältnis")}} des Kontexts basiert. Diese Berechnung werden wir gleich sehen.

Wir drehen auch die Form, und das können wir hier tun, indem wir eine Transformation anwenden. Das machen wir zuerst. Die gedrehte Position des Vertex wird berechnet, indem der Rotationsvektor angewendet wird, der im einheitlichen `uRotationVector` enthalten ist und vom JavaScript-Code berechnet wurde.

Dann wird die endgültige Position berechnet, indem die gedrehte Position mit dem Skalierungsvektor multipliziert wird, der vom JavaScript-Code in `uScalingFactor` bereitgestellt wird. Die Werte von `z` und `w` sind jeweils auf 0,0 und 1,0 festgelegt, da wir in 2D zeichnen.

Die Standard-WebGL-Variable `gl_Position` wird dann auf die transformierte und gedrehte Position des Vertex festgelegt.

### Fragment-Shader

Als Nächstes kommt der Fragment-Shader. Seine Aufgabe ist es, die Farbe jedes Pixels der gezeichneten Form zurückzugeben. Da wir ein solides, untexturiertes Objekt ohne Lichtzeichnung rendern, ist dies außergewöhnlich einfach:

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

Dies beginnt mit der Angabe der Genauigkeit des Typs `float`, wie erforderlich. Dann setzen wir die globale Variable `gl_FragColor` auf den Wert des uniformen `uGlobalColor`, welches vom JavaScript-Code auf die Farbe gesetzt wird, die zum Zeichnen des Quadrats verwendet wird.

### HTML

Das HTML besteht ausschließlich aus dem {{HTMLElement("canvas")}}, auf dem wir einen WebGL-Kontext erhalten.

```html
<canvas id="glcanvas" width="600" height="460">
  Oh nein! Ihr Browser unterstützt keine Leinwand!
</canvas>
```

### Globale Variablen und Initialisierung

Zuerst die globalen Variablen. Wir werden diese hier nicht diskutieren; stattdessen werden wir über sie sprechen, wenn sie in den kommenden Codeabschnitten verwendet werden.

```js
let gl = null;
let glCanvas = null;

// Seitenverhältnis und Koordinatensystemdetails

let aspectRatio;
let currentRotation = [0, 1];
let currentScale = [1.0, 1.0];

// Vertex-Informationen

let vertexArray;
let vertexBuffer;
let vertexNumComponents;
let vertexCount;

// Renderdaten, die mit den
// Skalierungen geteilt werden

let uScalingFactor;
let uGlobalColor;
let uRotationVector;
let aVertexPosition;

// Animationstiming

let shaderProgram;
let currentAngle;
let previousTime = 0.0;
let degreesPerSecond = 90.0;
```

Die Initialisierung des Programms erfolgt durch einen {{domxref("Window/load_event", "load")}}-Ereignishandler namens `startup()`:

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

Nachdem wir den WebGL-Kontext `gl` erhalten haben, müssen wir mit dem Aufbau des Shader-Programms beginnen. Hier verwenden wir Code, der es uns ermöglicht, unserem Programm ganz einfach mehrere Shader hinzuzufügen. Das Array `shaderSet` enthält eine Liste von Objekten, die jeweils eine Shader-Funktion beschreiben, die in das Programm kompiliert werden soll. Jede Funktion hat einen Typ (einer von `gl.VERTEX_SHADER` oder `gl.FRAGMENT_SHADER`) und eine ID (die ID des {{HTMLElement("script")}}-Elements, das den Code des Shaders enthält).

Das Shader-Set wird in die Funktion `buildShaderProgram()` übergeben, die das kompilierte und verknüpfte Shader-Programm zurückgibt. Wir werden uns als Nächstes ansehen, wie dies funktioniert.

Sobald das Shader-Programm erstellt ist, berechnen wir das Seitenverhältnis unseres Kontexts, indem wir seine Breite durch seine Höhe teilen. Dann setzen wir den aktuellen Rotationsvektor für die Animation auf `[0, 1]`, und den Skalierungsvektor auf `[1.0, aspectRatio]`. Der Skalierungsvektor, wie wir im Vertex-Shader gesehen haben, wird verwendet, um die Koordinaten auf den Bereich von -1,0 bis 1,0 anzupassen.

Das Array von Vertices wird als nächstes erstellt, als {{jsxref("Float32Array")}} mit sechs Koordinaten (drei 2D-Vertices) pro zu zeichnendem Dreieck, insgesamt 12 Werten.

Wie Sie sehen, verwenden wir ein Koordinatensystem von -1,0 bis 1,0 für jede Achse. Warum, fragen Sie vielleicht, müssen wir überhaupt Anpassungen vornehmen? Das liegt daran, dass unser Kontext nicht quadratisch ist. Wir verwenden einen Kontext, der 600 Pixel breit und 460 Pixel hoch ist. Jede dieser Dimensionen wird auf den Bereich von -1,0 bis 1,0 abgebildet. Da die beiden Achsen nicht dieselbe Länge haben, würde das Quadrat in eine Richtung oder die andere verzerrt werden, wenn wir die Werte einer der beiden Achsen nicht anpassen. Wir müssen diese Werte also normalisieren.

Sobald das Vertex-Array erstellt wurde, erstellen wir einen neuen GL-Puffer, um es zu enthalten, indem wir {{domxref("WebGLRenderingContext.createBuffer", "gl.createBuffer()")}} aufrufen. Wir binden den Standard-WebGL-Array-Puffer-Verweis daran, indem wir {{domxref("WebGLRenderingContext.bindBuffer", "gl.bindBuffer()")}} aufrufen und dann die Vertex-Daten mit {{domxref("WebGLRenderingContext.bufferData", "gl.bufferData()")}} in den Puffer kopieren. Der Nutzungshinweis `gl.STATIC_DRAW` wird angegeben, was WebGL mitteilt, dass die Daten nur einmal festgelegt und nie geändert, aber wiederholt verwendet werden. Dies ermöglicht es WebGL, alle Optimierungen in Betracht zu ziehen, die möglicherweise aufgrund dieser Informationen die Leistung verbessern können.

Nachdem die Vertex-Daten nun WebGL bereitgestellt wurden, setzen wir `vertexNumComponents` auf die Anzahl der Komponenten in jedem Vertex (2, da es sich um 2D-Vertices handelt) und `vertexCount` auf die Anzahl der Vertices in der Vertex-Liste.

Dann wird der aktuelle Rotationswinkel (in Grad) auf 0,0 gesetzt, da wir bisher keine Drehung durchgeführt haben, und die Rotationsgeschwindigkeit (in Grad pro Bildschirmaktualisierungsperiode, typischerweise 60 FPS) wird auf 6 gesetzt.

Schließlich wird `animateScene()` aufgerufen, um den ersten Frame zu rendern und das Rendern des nächsten Frames der Animation zu planen.

### Kompilieren und Verknüpfen des Shader-Programms

Die Funktion `buildShaderProgram()` akzeptiert als Eingabe ein Array von Objekten, die eine Gruppe von Shader-Funktionen beschreiben, die kompiliert und in das Shader-Programm verknüpft werden sollen, und gibt das fertige Shader-Programm zurück, nachdem es erstellt und verknüpft wurde.

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

Zuerst wird {{domxref("WebGLRenderingContext.createProgram", "gl.createProgram()")}} aufgerufen, um ein neues, leeres GLSL-Programm zu erstellen.

Dann rufen wir für jeden Shader in der angegebenen Liste die Funktion `compileShader()` auf, um ihn zu kompilieren, und übergeben ihr die ID und den Typ der zu erstellenden Shader-Funktion. Jedes dieser Objekte enthält, wie bereits erwähnt, die ID des `<script>`-Elements, in dem sich der Shader-Code befindet, und den Typ des Shaders. Das kompilierte Shader wird dem Shader-Programm zur Verfügung gestellt, indem es {{domxref("WebGLRenderingContext.attachShader", "gl.attachShader()")}} aufgerufen wird.

> [!NOTE]
> Wir könnten hier tatsächlich noch weiter gehen und den Wert des `type`-Attributs des `<script>`-Elements betrachten, um den Shader-Typ zu bestimmen.

Sobald alle Shader kompiliert sind, wird das Programm mit {{domxref("WebGLRenderingContext.linkProgram", "gl.linkProgram()")}} verknüpft.

Tritt beim Verknüpfen des Programms ein Fehler auf, wird die Fehlermeldung in der Konsole protokolliert.

Schließlich wird das kompilierte Programm an den Aufrufer zurückgegeben.

### Kompilieren eines einzelnen Shaders

Die Funktion `compileShader()`, unten aufgeführt, wird von `buildShaderProgram()` aufgerufen, um einen einzelnen Shader zu kompilieren.

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

Der Code wird aus dem HTML-Dokument abgerufen, indem der Wert der Textknoten im {{HTMLElement("script")}}-Element mit der angegebenen ID abgerufen wird. Dann wird mit {{domxref("WebGLRenderingContext.createShader", "gl.createShader()")}} ein neuer Shader des angegebenen Typs erstellt.

Der Quellcode wird in den neuen Shader gesendet, indem er mit {{domxref("WebGLRenderingContext.shaderSource", "gl.shaderSource()")}} übergeben wird. Dann wird der Shader mit {{domxref("WebGLRenderingContext.compileShader", "gl.compileShader()")}} kompiliert.

Kompilierungsfehler werden in der Konsole protokolliert. Beachten Sie die Verwendung eines [Template-Literals](/de/docs/Web/JavaScript/Reference/Template_literals), um den korrekten Shader-Typ-String in die zu generierende Nachricht einzufügen. Die tatsächlichen Fehlerdetails werden durch Aufrufen von {{domxref("WebGLRenderingContext.getShaderInfoLog", "gl.getShaderInfoLog()")}} abgerufen.

Schließlich wird der kompilierte Shader an den Aufrufer (die Funktion `buildShaderProgram()`) zurückgegeben.

### Zeichnen und Animieren der Szene

Die Funktion `animateScene()` wird aufgerufen, um jeden Animationsrahmen zu rendern.

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

Das Erste, was erledigt werden muss, um einen Frame der Animation zu zeichnen, ist den Hintergrund auf die gewünschte Farbe zu leeren. In diesem Fall setzen wir den viewport basierend auf der Größe des {{HTMLElement("canvas")}}, rufen {{domxref("WebGLRenderingContext.clearColor", "clearColor()")}} auf, um die Farbe festzulegen, die beim Leeren des Inhalts verwendet werden soll, und leeren dann den Puffer mit {{domxref("WebGLRenderingContext.clear", "clear()")}}.

Als Nächstes wird der aktuelle Rotationsvektor berechnet, indem die aktuelle Drehung in Grad (`currentAngle`) in [Bogenmaß](https://de.wikipedia.org/wiki/Radiant) umgerechnet wird. Dann wird die erste Komponente des Rotationsvektors auf den [Sinus](https://de.wikipedia.org/wiki/Sinus) dieses Wertes und die zweite Komponente auf den [Kosinus](https://de.wikipedia.org/wiki/Kosinus) gesetzt. Der `currentRotation`-Vektor ist jetzt die Position des Punkts auf dem [Einheitskreis](https://de.wikipedia.org/wiki/Einheitskreis), der sich im Winkel `currentAngle` befindet.

{{domxref("WebGLRenderingContext.useProgram", "useProgram()")}} wird aufgerufen, um das zuvor erstellte GLSL-Shader-Programm zu aktivieren. Dann erhalten wir die Positionen der einzelnen Uniforms, die verwendet werden, um Informationen zwischen dem JavaScript-Code und den Shadern zu teilen (mit {{domxref("WebGLRenderingContext.getUniformLocation", "getUniformLocation()")}}).

Das Uniform mit dem Namen `uScalingFactor` wird auf den zuvor berechneten `currentScale`-Wert gesetzt; dies ist, wie Sie sich erinnern, der Wert, der verwendet wird, um das Koordinatensystem basierend auf dem Seitenverhältnis des Kontexts anzupassen. Dies geschieht mit {{domxref("WebGLRenderingContext/uniform", "uniform2fv()")}} (weil es sich um einen 2-Wertig Gleitkomma-Vektor handelt).

`uRotationVector` wird auf den aktuellen Rotationsvektor (`currentRotation`) gesetzt, ebenfalls mit `uniform2fv()`.

`uGlobalColor` wird mit {{domxref("WebGLRenderingContext/uniform", "uniform4fv()")}} auf die Farbe gesetzt, die wir zum Zeichnen des Quadrats verwenden möchten. Dies ist ein 4-Komponenten-Gleitkomma-Vektor (eine Komponente für Rot, Grün, Blau und Alpha).

Da das alles erledigt ist, können wir den Vertex-Puffer einrichten und unsere Form zeichnen. Zuerst wird der Puffer von Vertices, der zum Zeichnen der Dreiecke der Form verwendet wird, durch Aufrufen von {{domxref("WebGLRenderingContext.bindBuffer", "bindBuffer()")}} gesetzt. Dann wird der Index des Vertex-Positionsattributs aus dem Shader-Programm abgerufen, indem {{domxref("WebGLRenderingContext.getAttribLocation", "getAttribLocation()")}} aufgerufen wird.

Mit dem jetzt in `aVertexPosition` verfügbaren Index des Vertex-Positionsattributs rufen wir `enableVertexAttribArray()` auf, um das Positionsattribut zu aktivieren, sodass es vom Shader-Programm verwendet werden kann (insbesondere vom Vertex-Shader).

Dann wird der Vertex-Puffer dem `aVertexPosition`-Attribut zugeordnet, indem {{domxref("WebGLRenderingContext.vertexAttribPointer", "vertexAttribPointer()")}} aufgerufen wird. Dieser Schritt ist nicht offensichtlich, da diese Bindung fast ein Nebeneffekt ist. Aber dadurch, dass `aVertexPosition` jetzt auf die Daten aus dem Vertex-Puffer zugreift.

Mit der nun vorhandenen Zuordnung zwischen dem Vertex-Puffer für unsere Form und dem `aVertexPosition`-Attribut, das verwendet wird, um die Vertexes nacheinander in den Vertex-Shader zu liefern, sind wir bereit, die Form mit {{domxref("WebGLRenderingContext.drawArrays", "drawArrays()")}} zu zeichnen.

Zu diesem Zeitpunkt wurde der Frame gezeichnet. Alles, was noch zu tun ist, ist, den nächsten zu zeichnenden Frame zu terminieren. Das wird hier erledigt, indem {{domxref("Window.requestAnimationFrame", "requestAnimationFrame()")}} aufgerufen wird, das eine Callback-Funktion anfordert, die das nächste Mal ausgeführt wird, wenn der Browser bereit ist, den Bildschirm zu aktualisieren.

Unser `requestAnimationFrame()`-Callback erhält als Eingabe einen einzelnen Parameter, `currentTime`, der die Zeit angibt, zu der das Zeichnen des Frames begann. Wir verwenden diesen und die gespeicherte Zeit, zu der der letzte Frame gezeichnet wurde, `previousTime`, zusammen mit der Anzahl der Grad pro Sekunde, die das Quadrat drehen soll (`degreesPerSecond`), um den neuen Wert von `currentAngle` zu berechnen. Dann wird der Wert von `previousTime` aktualisiert und wir rufen `animateScene()` auf, um den nächsten Frame zu zeichnen (und wiederum den nächsten Frame zu terminieren, der gezeichnet werden soll, und so weiter).

### Ergebnis

Dies ist ein ziemlich einfaches Beispiel, da es nur ein einfaches Objekt zeichnet, aber die hier verwendeten Konzepte erstrecken sich auf viel komplexere Animationen.

{{EmbedLiveSample("A_rotating_square_example", 660, 500)}}

## Siehe auch

- [WebGL-API](/de/docs/Web/API/WebGL_API)
- [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial)
