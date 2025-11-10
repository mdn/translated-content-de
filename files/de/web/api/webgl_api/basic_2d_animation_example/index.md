---
title: Ein einfaches 2D-WebGL-Animationsbeispiel
slug: Web/API/WebGL_API/Basic_2D_animation_example
l10n:
  sourceCommit: 116577234db1d6275c74a8bb879fce54d944f4ed
---

{{DefaultAPISidebar("WebGL")}}

In diesem WebGL-Beispiel erstellen wir eine Leinwand (canvas) und rendern darin ein rotierendes Quadrat mit WebGL. Das Koordinatensystem, das wir zur Darstellung unserer Szene verwenden, ist dasselbe wie das Koordinatensystem der Leinwand. Das bedeutet, dass (0, 0) in der oberen linken Ecke und die untere rechte Ecke bei (600, 460) liegt.

## Ein Beispiel eines rotierenden Quadrats

Lassen Sie uns die verschiedenen Schritte durchgehen, um unser rotierendes Quadrat zu erstellen.

### Vertex-Shader

Zuerst werfen wir einen Blick auf den Vertex-Shader. Seine Aufgabe ist es, die Koordinaten, die wir für unsere Szene verwenden, in Clipspace-Koordinaten zu konvertieren (das System, bei dem (0, 0) im Zentrum des Kontextes liegt und jede Achse von -1.0 bis 1.0 reicht, unabhängig von der tatsächlichen Größe des Kontextes).

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

Das Hauptprogramm teilt uns das Attribut `aVertexPosition` mit, welches die Position des Vertex in welchem Koordinatensystem auch immer darstellt. Wir müssen diese Werte so umwandeln, dass beide Komponenten der Position im Bereich von -1.0 bis 1.0 liegen. Das kann leicht erreicht werden, indem man mit einem Skalierungsfaktor multipliziert, der auf dem {{Glossary("aspect_ratio", "Seitenverhältnis")}} des Kontextes basiert. Wir werden diese Berechnung in Kürze sehen.

Wir drehen auch die Form, und das können wir hier tun, indem wir eine Transformation anwenden. Das machen wir zuerst. Die gedrehte Position des Vertex wird berechnet, indem der Rotationsvektor angewendet wird, der in der Uniform `uRotationVector` abgelegt ist und vom JavaScript-Code berechnet wurde.

Dann wird die endgültige Position berechnet, indem die gedrehte Position mit dem Skalierungsvektor multipliziert wird, der vom JavaScript-Code in `uScalingFactor` bereitgestellt wird. Die Werte von `z` und `w` sind fest auf 0.0 bzw. 1.0 gesetzt, da wir in 2D zeichnen.

Der Standard-WebGL-Global `gl_Position` wird dann auf die transformierte und gedrehte Position des Vertex gesetzt.

### Fragment-Shader

Als Nächstes kommt der Fragment-Shader. Seine Rolle ist es, die Farbe jedes Pixels in der gezeichneten Form zurückzugeben. Da wir ein solides, untexturiertes Objekt ohne Beleuchtung zeichnen, ist dies außerordentlich einfach:

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

Dies beginnt mit der Spezifikation der Präzision des `float`-Typs, wie es erforderlich ist. Dann setzen wir den globalen `gl_FragColor` auf den Wert der Uniform `uGlobalColor`, die vom JavaScript-Code auf die Farbe gesetzt wird, mit der das Quadrat gezeichnet wird.

### HTML

Das HTML besteht ausschließlich aus dem {{HTMLElement("canvas")}}, auf dem wir einen WebGL-Kontext erhalten werden.

```html
<canvas id="gl-canvas" width="600" height="460">
  Oh no! Your browser doesn't support canvas!
</canvas>
```

### Globale Variablen und Initialisierung

Zuerst die globalen Variablen. Wir werden diese hier nicht besprechen; stattdessen sprechen wir über sie, während sie im kommenden Code verwendet werden.

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

Nachdem wir den WebGL-Kontext `gl` erhalten haben, müssen wir mit dem Aufbau des Shader-Programms beginnen. Hier verwenden wir Code, der es uns ermöglicht, unserem Programm auf recht einfache Weise mehrere Shader hinzuzufügen. Das Array `shaderSet` enthält eine Liste von Objekten, die jeweils eine Shader-Funktion beschreiben, die in das Programm kompiliert werden soll. Jede Funktion hat einen Typ (einer von `gl.VERTEX_SHADER` oder `gl.FRAGMENT_SHADER`) und eine ID (die ID des {{HTMLElement("script")}}-Elements, das den Code des Shaders enthält).

Das Shader-Set wird in die Funktion `buildShaderProgram()` übergeben, die das kompilierte und verlinkte Shader-Programm zurückgibt. Wir werden uns als Nächstes ansehen, wie das funktioniert.

Sobald das Shader-Programm erstellt ist, berechnen wir das Seitenverhältnis unseres Kontextes, indem wir dessen Breite durch die Höhe teilen. Dann setzen wir den aktuellen Rotationsvektor für die Animation auf `[0, 1]` und den Skalierungsvektor auf `[1.0, aspectRatio]`. Der Skalierungsvektor, wie wir im Vertex-Shader gesehen haben, wird verwendet, um die Koordinaten anzupassen, um in den Bereich von -1.0 bis 1.0 zu passen.

Das Array von Vertexen wird als nächstes erstellt, als {{jsxref("Float32Array")}} mit sechs Koordinaten (drei 2D-Vertexe) pro zu zeichnendem Dreieck, insgesamt 12 Werte.

Wie Sie sehen können, verwenden wir ein Koordinatensystem von -1.0 bis 1.0 für jede Achse. Warum müssen wir überhaupt irgendwelche Anpassungen vornehmen? Das liegt daran, dass unser Kontext nicht quadratisch ist. Wir verwenden einen Kontext, der 600 Pixel breit und 460 Pixel hoch ist. Jede dieser Dimensionen wird auf den Bereich von -1.0 bis 1.0 abgebildet. Da die beiden Achsen nicht gleich lang sind, wird das Quadrat, wenn wir die Werte einer der beiden Achsen nicht anpassen, in eine Richtung oder die andere gestreckt. Daher müssen wir diese Werte normalisieren.

Sobald das Vertex-Array erstellt wurde, erstellen wir einen neuen GL-Puffer, um sie zu enthalten, indem wir [`gl.createBuffer()`](/de/docs/Web/API/WebGLRenderingContext/createBuffer) aufrufen. Wir binden den Standard-WebGL-Array-Puffer-Verweis daran, indem wir [`gl.bindBuffer()`](/de/docs/Web/API/WebGLRenderingContext/bindBuffer) aufrufen und dann die Vertex-Daten mit [`gl.bufferData()`](/de/docs/Web/API/WebGLRenderingContext/bufferData) in den Puffer kopieren. Der Nutzungshinweis `gl.STATIC_DRAW` wird angegeben, um WebGL mitzuteilen, dass die Daten nur einmal gesetzt und nie geändert werden, aber wiederholt verwendet werden. Dies ermöglicht WebGL, alle Optimierungen in Betracht zu ziehen, die es basierend auf diesen Informationen anwenden kann, um die Leistung zu verbessern.

Mit den nun WebGL bereitgestellten Vertex-Daten setzen wir `vertexNumComponents` auf die Anzahl der Komponenten in jedem Vertex (2, da es sich um 2D-Vertexe handelt) und `vertexCount` auf die Anzahl der Verteckten in der Vertexliste.

Dann wird der aktuelle Rotationswinkel (in Grad) auf 0.0 gesetzt, da wir noch keine Rotation ausgeführt haben, und die Rotationsgeschwindigkeit (in Grad pro Bildwiederholungsperiode, normalerweise 60 FPS) wird auf 6 gesetzt.

Schließlich wird `animateScene()` aufgerufen, um den ersten Frame zu rendern und das Rendern des nächsten Frames der Animation zu planen.

### Kompilieren und Verknüpfen des Shader-Programms

Die Funktion `buildShaderProgram()` akzeptiert als Eingabe ein Array von Objekten, die eine Reihe von Shaderfunktionen beschreiben, die in das Shader-Programm kompiliert und verlinkt werden sollen, und gibt das Shader-Programm zurück, nachdem es erstellt und verlinkt wurde.

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

Dann rufen wir für jeden Shader in der angegebenen Liste von Shadern eine `compileShader()`-Funktion auf, um ihn zu kompilieren, indem wir die ID und den Typ der Shader-Funktion, die wir erstellen wollen, übergeben. Jedes dieser Objekte enthält, wie bereits erwähnt, die ID des `<script>`-Elements, in dem der Shader-Code gefunden wird, und den Shader-Typ. Der kompilierte Shader wird am Shader-Programm angehängt, indem er in [`gl.attachShader()`](/de/docs/Web/API/WebGLRenderingContext/attachShader) übergeben wird.

> [!NOTE]
> Wir könnten sogar noch einen Schritt weiter gehen und den Wert des `type`-Attributs des `<script>`-Elements betrachten, um den Shader-Typ zu bestimmen.

Sobald alle Shader kompiliert sind, wird das Programm mit [`gl.linkProgram()`](/de/docs/Web/API/WebGLRenderingContext/linkProgram) verlinkt.

Wenn beim Verlinken des Programms ein Fehler auftritt, wird die Fehlermeldung in der Konsole protokolliert.

Schließlich wird das kompilierte Programm an den Aufrufer zurückgegeben.

### Kompilieren eines einzelnen Shaders

Die `compileShader()`-Funktion wird von `buildShaderProgram()` aufgerufen, um einen einzelnen Shader zu kompilieren.

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

Der Code wird aus dem HTML-Dokument abgerufen, indem der Wert des Textknotens innerhalb des {{HTMLElement("script")}}-Elements mit der angegebenen ID erfasst wird. Dann wird ein neuer Shader des angegebenen Typs mit [`gl.createShader()`](/de/docs/Web/API/WebGLRenderingContext/createShader) erstellt.

Der Quellcode wird in den neuen Shader gesendet, indem er in [`gl.shaderSource()`](/de/docs/Web/API/WebGLRenderingContext/shaderSource) übergeben wird, und dann wird der Shader mit [`gl.compileShader()`](/de/docs/Web/API/WebGLRenderingContext/compileShader) kompiliert.

Kompilierungsfehler werden in der Konsole protokolliert. Beachten Sie die Verwendung von [Template Literals](/de/docs/Web/JavaScript/Reference/Template_literals), um den korrekten Shader-Typ-String in die generierte Meldung einzufügen. Die tatsächlichen Fehlermeldungsdetails werden durch den Aufruf von [`gl.getShaderInfoLog()`](/de/docs/Web/API/WebGLRenderingContext/getShaderInfoLog) erhalten.

Schließlich wird der kompilierte Shader an den Aufrufer zurückgegeben (die `buildShaderProgram()`-Funktion).

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

Das Erste, was getan werden muss, um einen Frame der Animation zu zeichnen, ist, den Hintergrund in die gewünschte Farbe zu löschen. In diesem Fall setzen wir den Viewport basierend auf der Größe des {{HTMLElement("canvas")}}, rufen [`clearColor()`](/de/docs/Web/API/WebGLRenderingContext/clearColor) auf, um die Farbe festzulegen, die bei der Löschung von Inhalten verwendet werden soll, und löschen dann das Puffer mit [`clear()`](/de/docs/Web/API/WebGLRenderingContext/clear).

Als Nächstes wird der aktuelle Rotationsvektor berechnet, indem die aktuelle Rotation in Grad (`currentAngle`) in [Bogenmaß](https://en.wikipedia.org/wiki/Radians) umgewandelt wird, dann wird die erste Komponente des Rotationsvektors auf den [Sinus](https://en.wikipedia.org/wiki/Sine) dieses Wertes und die zweite Komponente auf den [Kosinus](https://en.wikipedia.org/wiki/Cosine) dieses Wertes gesetzt. Der `currentRotation`-Vektor ist nun der Standort des Punktes auf dem [Einheitskreis](https://en.wikipedia.org/wiki/Unit_circle), der sich im Winkel `currentAngle` befindet.

[`useProgram()`](/de/docs/Web/API/WebGLRenderingContext/useProgram) wird aufgerufen, um das zuvor eingerichtete GLSL-Shading-Programm zu aktivieren. Dann erhalten wir die Positionen jeder der Uniforms, die verwendet werden, um Informationen zwischen dem JavaScript-Code und den Shadern zu teilen (mit [`getUniformLocation()`](/de/docs/Web/API/WebGLRenderingContext/getUniformLocation)).

Die Uniform mit dem Namen `uScalingFactor` wird auf den zuvor berechneten `currentScale`-Wert gesetzt; das ist, wie Sie sich erinnern werden, der Wert, der verwendet wird, um das Koordinatensystem basierend auf dem Seitenverhältnis des Kontextes anzupassen. Dies wird mit [`uniform2fv()`](/de/docs/Web/API/WebGLRenderingContext/uniform) gemacht (da es sich um einen 2-Wert Gleitkomma-Vektor handelt).

`uRotationVector` wird auf den aktuellen Rotationsvektor (`currentRotation`), ebenfalls mit `uniform2fv()` gesetzt.

`uGlobalColor` wird mit [`uniform4fv()`](/de/docs/Web/API/WebGLRenderingContext/uniform) auf die Farbe gesetzt, mit der wir das Quadrat zeichnen wollen. Dies ist ein 4-Komponenten Gleitkomma-Vektor (eine Komponente für Rot, Grün, Blau und Alpha).

Jetzt, wo das alles erledigt ist, können wir den Vertex-Puffer einrichten und unsere Form zeichnen. Zuerst wird der Puffer von Vertexen, die verwendet werden, um die Dreiecke der Form zu zeichnen, durch den Aufruf von [`bindBuffer()`](/de/docs/Web/API/WebGLRenderingContext/bindBuffer) festgelegt. Dann wird der Attribut-Index der Vertex-Position aus dem Shader-Programm durch den Aufruf von [`getAttribLocation()`](/de/docs/Web/API/WebGLRenderingContext/getAttribLocation) entnommen.

Mit dem Index des Vertex-Positionsattributs, der nun in `aVertexPosition` verfügbar ist, rufen wir `enableVertexAttribArray()` auf, um das Positionsattribut zu aktivieren, damit es vom Shader-Programm verwendet werden kann (insbesondere vom Vertex-Shader).

Dann wird der Vertex-Puffer an das `aVertexPosition`-Attribut gebunden, indem [`vertexAttribPointer()`](/de/docs/Web/API/WebGLRenderingContext/vertexAttribPointer) aufgerufen wird. Dieser Schritt ist nicht offensichtlich, da diese Bindung fast als Nebeneffekt erfolgt. Aber infolgedessen wird beim Zugriff auf `aVertexPosition` nun auf Daten aus dem Vertex-Puffer zugegriffen.

Mit der Verbindung zwischen dem Vertex-Puffer für unsere Form und dem `aVertexPosition`-Attribut, das verwendet wird, um die Vertexe einzeln in den Vertex-Shader zu liefern, können wir die Form über den Aufruf von [`drawArrays()`](/de/docs/Web/API/WebGLRenderingContext/drawArrays) zeichnen.

An diesem Punkt wurde der Frame gezeichnet. Alles, was noch zu tun bleibt, ist, die Zeichnung des nächsten zu planen. Das wird hier durch den Aufruf von [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) gemacht, der bittet, dass eine Callback-Funktion das nächste Mal ausgeführt wird, wenn der Browser bereit ist, den Bildschirm zu aktualisieren.

Unser `requestAnimationFrame()`-Callback erhält als Eingabe einen einzelnen Parameter, `currentTime`, der die Zeit angibt, zu der das Frame-Zeichnen begonnen hat. Wir verwenden diesen und die gespeicherte Zeit, zu der das letzte Frame gezeichnet wurde, `previousTime`, zusammen mit der Anzahl von Grad pro Sekunde, um die sich das Quadrat drehen sollte (`degreesPerSecond`), um den neuen Wert von `currentAngle` zu berechnen. Dann wird der Wert von `previousTime` aktualisiert und wir rufen `animateScene()` auf, um das nächste Frame zu zeichnen (und wiederum die Zeichnung des nächsten Frames in alle Ewigkeit zu planen).

### Ergebnis

Dies ist ein recht einfaches Beispiel, da es nur ein einfaches Objekt zeichnet, aber die hier verwendeten Konzepte erstrecken sich auf weitaus komplexere Animationen.

{{EmbedLiveSample("A_rotating_square_example", 660, 500)}}

## Siehe auch

- [WebGL API](/de/docs/Web/API/WebGL_API)
- [WebGL Tutorial](/de/docs/Web/API/WebGL_API/Tutorial)
