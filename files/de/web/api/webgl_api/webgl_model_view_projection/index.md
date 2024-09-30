---
title: WebGL model view projection
slug: Web/API/WebGL_API/WebGL_model_view_projection
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{DefaultAPISidebar("WebGL")}}

Dieser Artikel untersucht, wie man Daten in einem [WebGL](/de/docs/Web/API/WebGL_API)-Projekt nimmt und sie in die richtigen Räume projiziert, um sie auf dem Bildschirm anzuzeigen. Es wird vorausgesetzt, dass Sie grundlegende Matrixmathematik mit Übersetzungs-, Skalierungs- und Rotationsmatrizen kennen. Er erklärt die drei Kernmatrizen, die typischerweise bei der Erstellung einer 3D-Szene verwendet werden: die Modell-, Sicht- und Projektionsmatrizen.

> [!NOTE]
> Dieser Artikel ist auch als [MDN Content Kit](https://github.com/gregtatum/mdn-model-view-projection) verfügbar. Er verwendet auch eine Sammlung von [Utility-Funktionen](https://github.com/gregtatum/mdn-webgl), die unter dem `MDN`-globalen Objekt verfügbar sind.

## Die Modell-, Sicht- und Projektionsmatrizen

Individuelle Transformationen von Punkten und Polygonen im Raum in WebGL werden von den grundlegenden Transformationsmatrizen wie Übersetzung, Skalierung und Rotation behandelt. Diese Matrizen können zusammengefasst und in speziellen Weisen gruppiert werden, um sie für das Rendering komplexer 3D-Szenen nützlich zu machen. Diese zusammengesetzten Matrizen bewegen letztendlich die ursprünglichen Modelldaten in einen speziellen Koordinatenraum, der als **Clip Space** bekannt ist. Dies ist ein 2 Einheiten breiter Würfel, zentriert bei (0,0,0), mit Ecken, die von (-1,-1,-1) bis (1,1,1) reichen. Dieser Clip Space wird in einen 2D-Raum komprimiert und in ein Bild gerastert.

Die erste diskutierte Matrix ist die **Modellmatrix**, die definiert, wie Sie Ihre ursprünglichen Modelldaten nehmen und sie im 3D-Weltraum bewegen. Die **Projektionsmatrix** wird verwendet, um Weltkoordinaten in Clip-Space-Koordinaten umzuwandeln. Eine häufig verwendete Projektionsmatrix, die **Perspektivprojektionsmatrix**, wird verwendet, um die _Effekte_ einer typischen Kamera nachzuahmen, die als Vertreter des Betrachters in der 3D-Virtual-Welt dient. Die **Sichtmatrix** ist dafür verantwortlich, die Objekte in der Szene zu verschieben, um die Position der Kamera zu simulieren, was beeinflusst, was der Betrachter momentan sehen kann.

Die unten aufgeführten Abschnitte bieten einen tiefgehenden Einblick in die Ideen hinter und die Implementierung der Modell-, Sicht- und Projektionsmatrizen. Diese Matrizen sind von zentraler Bedeutung für die Bewegung von Daten auf dem Bildschirm und sind Konzepte, die über einzelne Frameworks und Engines hinausgehen.

## Clip Space

In einem WebGL-Programm werden Daten typischerweise mit ihrem eigenen Koordinatensystem auf die GPU hochgeladen, und dann transformiert der Vertex-Shader diese Punkte in ein spezielles Koordinatensystem, das als **Clip Space** bekannt ist. Jegliche Daten, die außerhalb des Clip Space liegen, werden abgeschnitten und nicht gerendert. Wenn jedoch ein Dreieck die Grenze dieses Raumes überschreitet, wird es in neue Dreiecke zerteilt, und nur die Teile dieser neuen Dreiecke, die sich im Clip Space befinden, werden beibehalten.

![Ein 3D-Diagramm zeigt den Clip Space in WebGL.](clip_space_graph.svg)

Die obige Grafik ist eine Visualisierung des Clip Space, in den alle Punkte passen müssen. Es ist ein Würfel mit zwei Einheiten auf jeder Seite, mit einer Ecke bei (-1,-1,-1) und der gegenüberliegenden Ecke bei (1,1,1). Der Mittelpunkt des Würfels ist der Punkt (0,0,0). Dieses 8 Kubikmeter Koordinatensystem, das vom Clip Space verwendet wird, ist als Normalisierte Gerätekoordinaten (NDC) bekannt. Sie könnten auf diesen Begriff stoßen, während Sie WebGL-Code recherchieren und damit arbeiten.

Für diesen Abschnitt werden wir unsere Daten direkt in das Clip-Space-Koordinatensystem einfügen. Normalerweise werden Modelldaten in einem beliebigen Koordinatensystem verwendet und dann mithilfe einer Matrix transformiert, um die Modellkoordinaten in das Clip-Space-Koordinatensystem umzuwandeln. Für dieses Beispiel ist es einfacher, zu veranschaulichen, wie der Clip Space funktioniert, indem man Modellkoordinatenwerte verwendet, die von (-1,-1,-1) bis (1,1,1) reichen. Der Code unten erstellt zwei Dreiecke, die ein Quadrat auf dem Bildschirm zeichnen. Die Z-Tiefe in den Quadraten bestimmt, was oben gezeichnet wird, wenn sich die Quadrate denselben Raum teilen. Die kleineren Z-Werte werden über den größeren Z-Werten gerendert.

### WebGLBox-Beispiel

Dieses Beispiel erstellt ein benutzerdefiniertes `WebGLBox`-Objekt, das eine 2D-Box auf dem Bildschirm zeichnet.

> [!NOTE]
> Der Code für jedes WebGLBox-Beispiel ist in diesem [GitHub-Repository](https://github.com/gregtatum/mdn-model-view-projection/tree/master/lessons) verfügbar und nach Abschnitten geordnet. Außerdem gibt es einen JSFiddle-Link am Ende jedes Abschnitts.

#### WebGLBox-Konstruktor

Der Konstruktor sieht folgendermaßen aus:

```js
function WebGLBox() {
  // Setup the canvas and WebGL context
  this.canvas = document.getElementById("canvas");
  this.canvas.width = window.innerWidth;
  this.canvas.height = window.innerHeight;
  this.gl = MDN.createContext(canvas);

  const gl = this.gl;

  // Setup a WebGL program, anything part of the MDN object is defined outside of this article
  this.webglProgram = MDN.createWebGLProgramFromIds(
    gl,
    "vertex-shader",
    "fragment-shader",
  );
  gl.useProgram(this.webglProgram);

  // Save the attribute and uniform locations
  this.positionLocation = gl.getAttribLocation(this.webglProgram, "position");
  this.colorLocation = gl.getUniformLocation(this.webglProgram, "color");

  // Tell WebGL to test the depth when drawing, so if a square is behind
  // another square it won't be drawn
  gl.enable(gl.DEPTH_TEST);
}
```

#### WebGLBox-Zeichnen

Jetzt erstellen wir eine Methode, um eine Box auf dem Bildschirm zu zeichnen.

```js
WebGLBox.prototype.draw = function (settings) {
  // Create some attribute data; these are the triangles that will end being
  // drawn to the screen. There are two that form a square.

  const data = new Float32Array([
    //Triangle 1
    settings.left,
    settings.bottom,
    settings.depth,
    settings.right,
    settings.bottom,
    settings.depth,
    settings.left,
    settings.top,
    settings.depth,

    //Triangle 2
    settings.left,
    settings.top,
    settings.depth,
    settings.right,
    settings.bottom,
    settings.depth,
    settings.right,
    settings.top,
    settings.depth,
  ]);

  // Use WebGL to draw this onto the screen.

  // Performance Note: Creating a new array buffer for every draw call is slow.
  // This function is for illustration purposes only.

  const gl = this.gl;

  // Create a buffer and bind the data
  const buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);

  // Setup the pointer to our attribute data (the triangles)
  gl.enableVertexAttribArray(this.positionLocation);
  gl.vertexAttribPointer(this.positionLocation, 3, gl.FLOAT, false, 0, 0);

  // Setup the color uniform that will be shared across all triangles
  gl.uniform4fv(this.colorLocation, settings.color);

  // Draw the triangles to the screen
  gl.drawArrays(gl.TRIANGLES, 0, 6);
};
```

Die Shader sind die Codebestandteile, die in GLSL geschrieben sind und unsere Datenpunkte nehmen und letztendlich auf den Bildschirm rendern. Diese Shader werden der Einfachheit halber in einem {{htmlelement("script")}}-Element gespeichert, das durch die benutzerdefinierte Funktion `MDN.createWebGLProgramFromIds()` in das Programm eingebracht wird. Diese Funktion ist Teil einer Sammlung von [Utility-Funktionen](https://github.com/gregtatum/mdn-webgl), die für diese Tutorials geschrieben wurden, und wird hier nicht im Detail erklärt. Diese Funktion behandelt die Grundlagen davon, GLSL-Quellcode zu nehmen und in ein WebGL-Programm zu kompilieren. Die Funktion nimmt drei Parameter — den Kontext zur Wiedergabe des Programms, die ID des {{htmlelement("script")}}-Elements, das den Vertex-Shader enthält, und die ID des {{htmlelement("script")}}-Elements, das den Fragment-Shader enthält. Der Vertex-Shader positioniert die Vertices und der Fragment-Shader färbt jedes Pixel.

Betrachten Sie zuerst den Vertex-Shader, der die Vertices auf dem Bildschirm bewegen wird:

```glsl
// The individual position vertex
attribute vec3 position;

void main() {
  // the gl_Position is the final position in clip space after the vertex shader modifies it
  gl_Position = vec4(position, 1.0);
}
```

Um die Daten tatsächlich in Pixel zu rasterisieren, bewertet der Fragment-Shader alles auf Pixelbasis und setzt eine einzelne Farbe. Die GPU ruft die Shaderfunktion für jedes Pixel auf, das sie rendern muss; die Aufgabe des Shaders ist es, die Farbe zurückzugeben, die für diesen Pixel verwendet werden soll.

```glsl
precision mediump float;
uniform vec4 color;

void main() {
  gl_FragColor = color;
}
```

Mit diesen Einstellungen ist es an der Zeit, direkt mit den Clip-Space-Koordinaten auf den Bildschirm zu zeichnen.

```js
const box = new WebGLBox();
```

Zeichnen Sie zuerst eine rote Box in der Mitte.

```js
box.draw({
  top: 0.5, // x
  bottom: -0.5, // x
  left: -0.5, // y
  right: 0.5, // y

  depth: 0, // z
  color: [1, 0.4, 0.4, 1], // red
});
```

Als nächstes zeichnen Sie eine grüne Box oben und hinter der roten Box.

```js
box.draw({
  top: 0.9, // x
  bottom: 0, // x
  left: -0.9, // y
  right: 0.9, // y

  depth: 0.5, // z
  color: [0.4, 1, 0.4, 1], // green
});
```

Schließlich, um zu demonstrieren, dass tatsächlich Clipping stattfindet, wird diese Box nicht gezeichnet, da sie vollständig außerhalb des Clip Space liegt. Die Tiefe liegt außerhalb des Bereichs von -1,0 bis 1,0.

```js
box.draw({
  top: 1, // x
  bottom: -1, // x
  left: -1, // y
  right: 1, // y

  depth: -1.5, // z
  color: [0.4, 0.4, 1, 1], // blue
});
```

#### Die Ergebnisse

[Auf JSFiddle ansehen](https://jsfiddle.net/tatumcreative/mff99yu5/)

![Das Ergebnis des Zeichnens in den Clip Space mit WebGL.](part1.png)

#### Übung

Eine hilfreiche Übung an diesem Punkt ist es, die Boxen im Clip Space zu bewegen, indem Sie den Code variieren, um ein Gefühl dafür zu bekommen, wie Punkte im Clip Space abgeschnitten und bewegt werden. Versuchen Sie, ein Bild wie ein kastenförmiges Smiley-Gesicht mit Hintergrund zu zeichnen.

## Homogene Koordinaten

Die Hauptzeile des vorherigen Clip-Space-Vertex-Shaders enthielt diesen Code:

```js
gl_Position = vec4(position, 1.0);
```

Die `position`-Variable wurde in der `draw()`-Methode definiert und als Attribut an den Shader übergeben. Dies ist ein dreidimensionaler Punkt, aber die `gl_Position`-Variable, die letztendlich durch die Pipeline weitergegeben wird, ist tatsächlich 4-dimensional — anstatt `(x, y, z)` ist es `(x, y, z, w)`. Hinter `z` gibt es keinen Buchstaben, daher wird diese vierte Dimension konventionell als `w` bezeichnet. Im obigen Beispiel ist die `w`-Koordinate auf 1,0 gesetzt.

Die offensichtliche Frage ist: "Warum die zusätzliche Dimension?" Es stellt sich heraus, dass diese Addition viele nützliche Techniken zur Manipulation von 3D-Daten ermöglicht. Diese zusätzliche Dimension führt den Begriff der Perspektive in das Koordinatensystem ein; mit ihr können wir 3D-Koordinaten in 2D-Raum abbilden und damit zwei parallele Linien im Hintergrund in der Ferne zusammenlaufen lassen. Der Wert von `w` wird als Teiler für die anderen Komponenten der Koordinate verwendet, sodass die echten Werte von `x`, `y` und `z` als `x/w`, `y/w` und `z/w` berechnet werden (und `w` wird dann auch zu `w/w`, also 1).

Ein dreidimensionaler Punkt wird in einem typischen kartesischen Koordinatensystem definiert. Die hinzugefügte vierte Dimension verwandelt diesen Punkt in eine [homogene Koordinate](https://de.wikipedia.org/wiki/Homogene_Koordinaten). Es stellt immer noch einen Punkt im 3D-Raum dar und es kann leicht demonstriert werden, wie man diesen Koordinatentyp durch ein Paar einfacher Funktionen konstruiert.

```js
function cartesianToHomogeneous(point) {
  let x = point[0];
  let y = point[1];
  let z = point[2];

  return [x, y, z, 1];
}

function homogeneousToCartesian(point) {
  let x = point[0];
  let y = point[1];
  let z = point[2];
  let w = point[3];

  return [x / w, y / w, z / w];
}
```

Wie zuvor erwähnt und in den obigen Funktionen gezeigt, dividiert die w-Komponente die x-, y- und z-Komponenten. Wenn die w-Komponente eine von null verschiedene reelle Zahl ist, lässt sich die homogene Koordinate leicht wieder in einen normalen Punkt im kartesischen Raum übersetzen. Was passiert nun, wenn die w-Komponente null ist? In JavaScript wäre der zurückgegebene Wert wie folgt:

```js
homogeneousToCartesian([10, 4, 5, 0]);
```

Dies ergibt: `[Infinity, Infinity, Infinity]`.

Diese homogene Koordinate stellt einen Punkt im Unendlichen dar. Dies ist eine nützliche Möglichkeit, einen Strahl darzustellen, der vom Ursprung in eine bestimmte Richtung abgeht. Zusätzlich zu einem Strahl könnte man es auch als Darstellung eines Richtungsvektors betrachten. Wird diese homogene Koordinate mit einer Matrix mit einer Übersetzung multipliziert, wird die Übersetzung effektiv herausgefiltert.

Wenn Zahlen auf Computern extrem groß (oder extrem klein) sind, werden sie weniger und weniger präzise, da es nur eine begrenzte Anzahl von Einsen und Nullen gibt, um sie darzustellen. Je mehr Operationen an größeren Zahlen durchgeführt werden, desto mehr Fehler akkumulieren sich im Ergebnis. Durch das Dividieren durch w kann die Präzision sehr großer Zahlen effektiv erhöht werden, indem mit zwei potenziell kleineren, weniger fehleranfälligen Zahlen gearbeitet wird.

Der letzte Vorteil der Verwendung homogener Koordinaten besteht darin, dass sie sehr gut für die Multiplikation mit 4x4-Matrizen geeignet sind. Ein Vertex muss mindestens eine der Dimensionen einer Matrix entsprechen, um mit ihr multipliziert werden zu können. Die 4x4-Matrix kann eine Vielzahl nützlicher Transformationen kodieren. Tatsächlich verwendet die typische Perspektivprojektionsmatrix die Division durch die w-Komponente, um ihre Transformation zu erreichen.

Das Beschneiden von Punkten und Polygonen aus dem Clip Space erfolgt, bevor die homogenen Koordinaten wieder in kartesische Koordinaten (durch Teilen durch w) umgewandelt werden. Dieser endgültige Raum ist als **Normalisierte Gerätekoordinaten** oder NDC bekannt.

Um mit dieser Idee zu spielen, kann das vorherige Beispiel verändert werden, um die Verwendung der `w`-Komponente zu ermöglichen.

```js
//Redefine the triangles to use the W component
const data = new Float32Array([
  //Triangle 1
  settings.left,
  settings.bottom,
  settings.depth,
  settings.w,
  settings.right,
  settings.bottom,
  settings.depth,
  settings.w,
  settings.left,
  settings.top,
  settings.depth,
  settings.w,

  //Triangle 2
  settings.left,
  settings.top,
  settings.depth,
  settings.w,
  settings.right,
  settings.bottom,
  settings.depth,
  settings.w,
  settings.right,
  settings.top,
  settings.depth,
  settings.w,
]);
```

Dann verwendet der Vertex-Shader den übergebenen 4-dimensionalen Punkt.

```glsl
attribute vec4 position;

void main() {
  gl_Position = position;
}
```

Zuerst zeichnen wir eine rote Box in der Mitte, setzen aber W auf 0,7. Da die Koordinaten durch 0,7 geteilt werden, werden sie alle vergrößert.

```js
box.draw({
  top: 0.5, // y
  bottom: -0.5, // y
  left: -0.5, // x
  right: 0.5, // x
  w: 0.7, // w - enlarge this box

  depth: 0, // z
  color: [1, 0.4, 0.4, 1], // red
});
```

Jetzt zeichnen wir eine grüne Box oben, die jedoch durch Setzen der w-Komponente auf 1,1 verkleinert wird.

```js
box.draw({
  top: 0.9, // y
  bottom: 0, // y
  left: -0.9, // x
  right: 0.9, // x
  w: 1.1, // w - shrink this box

  depth: 0.5, // z
  color: [0.4, 1, 0.4, 1], // green
});
```

Diese letzte Box wird nicht gezeichnet, da sie außerhalb des Clip Space liegt. Die Tiefe liegt außerhalb des Bereichs von -1,0 bis 1,0.

```js
box.draw({
  top: 1, // y
  bottom: -1, // y
  left: -1, // x
  right: 1, // x
  w: 1.5, // w - Bring this box into range

  depth: -1.5, // z
  color: [0.4, 0.4, 1, 1], // blue
});
```

### Die Ergebnisse

![Die Ergebnisse der Verwendung homogener Koordinaten zur Verschiebung der Boxen in WebGL.](part2.png)

### Übungen

- Spielen Sie mit diesen Werten, um zu sehen, wie sie das Rendern auf dem Bildschirm beeinflussen. Beachten Sie, wie die zuvor abgeschnittene blaue Box durch Setzen ihrer w-Komponente zurück in den Bereich gebracht wird.
- Versuchen Sie, eine neue Box zu erstellen, die außerhalb des Clip Space liegt, und bringen Sie sie durch Teilung durch w zurück in den Bereich.

## Modellumwandlung

Das direkte Platzieren von Punkten in den Clip Space ist von begrenztem Nutzen. In realen Anwendungen haben Sie nicht alle Ihre Quellkoordinaten bereits in Clip-Space-Koordinaten. In den meisten Fällen müssen Sie die Modelldaten und andere Koordinaten in den Clip Space transformieren. Der bescheidene Würfel ist ein einfaches Beispiel, wie man dies tut. Würfeldaten bestehen aus Vertexpositionen, den Farben der Würfelflächen und der Reihenfolge der Vertexpositionen, die die einzelnen Polygone (in Gruppen von 3 Vertices, um die Dreiecke zu konstruieren, aus denen die Würfelflächen bestehen) bilden. Die Positionen und Farben werden in GL-Buffer gespeichert, als Attribute an den Shader gesendet und dann einzeln bearbeitet.

Schließlich wird eine einzelne Modellmatrix berechnet und festgelegt. Diese Matrix stellt die Transformationen dar, die an jedem Punkt des Modells durchgeführt werden müssen, um ihn in den richtigen Raum zu bewegen, und um alle anderen erforderlichen Transformationen an jedem Punkt des Modells durchzuführen. Dies gilt nicht nur für jeden Vertex, sondern auch für jeden einzelnen Punkt auf jeder Oberfläche des Modells.

In diesem Fall wird für jeden Frame der Animation eine Reihe von Skalierungs-, Rotations- und Übersetzungsmatrizen verwendet, um die Daten an die gewünschte Stelle im Clip Space zu bewegen. Der Würfel ist so groß wie der Clip Space (-1, -1, -1) bis (1, 1, 1), sodass er verkleinert werden muss, um nicht den gesamten Clip Space zu füllen. Diese Matrix wird direkt an den Shader gesendet, nachdem sie zuvor in JavaScript multipliziert wurde.

Das folgende Codebeispiel definiert eine Methode im `CubeDemo`-Objekt, die die Modellmatrix erstellt. Es verwendet benutzerdefinierte Funktionen, um Matrizen zu erstellen und zu multiplizieren, wie im [MDN WebGL](https://github.com/gregtatum/mdn-webgl)-gemeinsamen Code definiert. Die neue Funktion sieht folgendermaßen aus:

```js
CubeDemo.prototype.computeModelMatrix = function (now) {
  //Scale down by 50%
  const scale = MDN.scaleMatrix(0.5, 0.5, 0.5);

  // Rotate a slight tilt
  const rotateX = MDN.rotateXMatrix(now * 0.0003);

  // Rotate according to time
  const rotateY = MDN.rotateYMatrix(now * 0.0005);

  // Move slightly down
  const position = MDN.translateMatrix(0, -0.1, 0);

  // Multiply together, make sure and read them in opposite order
  this.transforms.model = MDN.multiplyArrayOfMatrices([
    position, // step 4
    rotateY, // step 3
    rotateX, // step 2
    scale, // step 1
  ]);
};
```

Um dies im Shader zu verwenden, muss es an einen Uniform-Ort gesetzt werden. Die Positionen für die Uniformen werden im `locations`-Objekt gespeichert, das unten gezeigt wird:

```js
this.locations.model = gl.getUniformLocation(webglProgram, "model");
```

Und schließlich wird das Uniform an diesem Ort festgelegt. Dies übergibt die Matrix an die GPU.

```js
gl.uniformMatrix4fv(
  this.locations.model,
  false,
  new Float32Array(this.transforms.model),
);
```

Im Shader wird jeder Positionsvertex zuerst in eine homogene Koordinate (ein `vec4`-Objekt) transformiert und dann gegen die Modellmatrix multipliziert.

```glsl
gl_Position = model * vec4(position, 1.0);
```

> [!NOTE]
> In JavaScript erfordert die Matrizenmultiplikation eine benutzerdefinierte Funktion, während sie im Shader in die Sprache mit dem einfachen \*-Operator integriert ist.

### Die Ergebnisse

[Auf JSFiddle ansehen](https://jsfiddle.net/tatumcreative/5jofzgsh/)

![Verwendung einer Modellmatrix](part3.png)

An diesem Punkt ist der w-Wert des transformierten Punktes immer noch 1,0. Der Würfel hat immer noch keine Perspektive. Der nächste Abschnitt wird dieses Setup nehmen und die w-Werte modifizieren, um etwas Perspektive zu liefern.

### Übungen

- Verkleinern Sie die Box mithilfe der Skalierungs 

matrix und positionieren Sie sie an verschiedenen Stellen innerhalb des Clip Space.
- Versuchen Sie, sie außerhalb des Clip Space zu bewegen.
- Ändern Sie die Größe des Fensters und beobachten Sie, wie die Box aus der Form gerät.
- Fügen Sie eine `rotateZ`-Matrix hinzu.

## Division durch W

Eine einfache Möglichkeit, um etwas Perspektive auf unser Modell des Würfels zu erhalten, besteht darin, die Z-Koordinate zu nehmen und sie in die w-Koordinate zu kopieren. Normalerweise wird ein kartesischer Punkt in eine homogene Koordinate umgewandelt, indem aus `(x,y,z,1)` etwas wie `(x,y,z,z)` wird. In Wirklichkeit möchten wir sicherstellen, dass z für Punkte im Blickfeld größer als 0 ist, daher ändern wir es leicht, indem wir den Wert auf `((1.0 + z) * scaleFactor)` setzen. Dies wird einen Punkt, der normalerweise im Clip Space ist (-1 bis 1), in einen Raum mehr wie (0 bis 1) verschieben, abhängig davon, was der Skalierungsfaktor ist. Der Skalierungsfaktor ändert den endgültigen w-Wert, um entweder insgesamt höher oder niedriger zu sein.

Der Shader-Code sieht so aus.

```glsl
// First transform the point
vec4 transformedPosition = model * vec4(position, 1.0);

// How much effect does the perspective have?
float scaleFactor = 0.5;

// Set w by taking the z value which is typically ranged -1 to 1, then scale
// it to be from 0 to some number, in this case 0-1.
float w = (1.0 + transformedPosition.z) * scaleFactor;

// Save the new gl_Position with the custom w component
gl_Position = vec4(transformedPosition.xyz, w);
```

### Die Ergebnisse

[Auf JSFiddle ansehen](https://jsfiddle.net/tatumcreative/vk9r8h2c/)

![Füllen der W-Komponente und Erstellen einer Projektion.](part4.png)

Sehen Sie das kleine dunkle blaue Dreieck? Das ist eine zusätzliche Fläche, die zu unserem Objekt hinzugefügt wurde, weil die Rotation unserer Form dazu geführt hat, dass diese Ecke außerhalb des Clip Space hervortritt, was dazu führte, dass die Ecke abgeschnitten wurde. Siehe [Perspektivprojektionsmatrix](#perspektivprojektionsmatrix) unten für eine Einführung, wie man komplexere Matrizen verwendet, um Clipping zu kontrollieren und zu verhindern.

### Übung

Wenn das etwas abstrakt klingt, öffnen Sie den Vertex-Shader und spielen Sie mit dem Skalierungsfaktor und beobachten Sie, wie er die Vertices mehr zur Oberfläche hin schrumpft. Ändern Sie die w-Komponentenwerte vollständig für wirklich abgefahrene Darstellungen des Raumes.

Im nächsten Abschnitt werden wir diesen Schritt des Kopierens von Z in den w-Slot nehmen und ihn in eine Matrix umwandeln.

## Einfache Projektion

Der letzte Schritt des Ausfüllens der w-Komponente kann tatsächlich mit einer einfachen Matrix erreicht werden. Beginnen Sie mit der Einheitsmatrix:

```js
const identity = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];

MDN.multiplyPoint(identity, [2, 3, 4, 1]);
//> [2, 3, 4, 1]
```

Dann verschieben Sie die 1 der letzten Spalte um einen Platz nach oben.

```js
const copyZ = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0];

MDN.multiplyPoint(copyZ, [2, 3, 4, 1]);
//> [2, 3, 4, 4]
```

Aber im letzten Beispiel haben wir `(z + 1) * scaleFactor` durchgeführt:

```js
const scaleFactor = 0.5;

const simpleProjection = [
  1,
  0,
  0,
  0,
  0,
  1,
  0,
  0,
  0,
  0,
  1,
  scaleFactor,
  0,
  0,
  0,
  scaleFactor,
];

MDN.multiplyPoint(simpleProjection, [2, 3, 4, 1]);
//> [2, 3, 4, 2.5]
```

Brechen wir es ein wenig weiter auseinander, können wir sehen, wie das funktioniert:

```js
let x = 2 * 1 + 3 * 0 + 4 * 0 + 1 * 0;
let y = 2 * 0 + 3 * 1 + 4 * 0 + 1 * 0;
let z = 2 * 0 + 3 * 0 + 4 * 1 + 1 * 0;
let w = 2 * 0 + 3 * 0 + 4 * scaleFactor + 1 * scaleFactor;
```

Die letzte Zeile könnte vereinfacht werden zu:

```js
w = 4 * scaleFactor + 1 * scaleFactor;
```

Dann den Skalierungsfaktor herausfaktorisieren, erhalten wir dies:

```js
w = (4 + 1) * scaleFactor;
```

Was genau das gleiche ist wie das `(z + 1) * scaleFactor`, das wir im vorherigen Beispiel verwendet haben.

Im Box-Demo wurde eine zusätzliche `computeSimpleProjectionMatrix()`-Methode hinzugefügt. Dies wird in der `draw()`-Methode aufgerufen und hat den Skalierungsfaktor übergeben. Das Ergebnis sollte mit dem letzten Beispiel identisch sein:

```js
CubeDemo.prototype.computeSimpleProjectionMatrix = function (scaleFactor) {
  this.transforms.projection = [
    1,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    1,
    scaleFactor,
    0,
    0,
    0,
    scaleFactor,
  ];
};
```

Obwohl das Ergebnis identisch ist, ist der wichtige Schritt hier im Vertex-Shader. Anstatt die Vertex direkt zu modifizieren, wird sie mit einer zusätzlichen **[Projektionsmatrix](#the_model_view_and_projection_matrices)** multipliziert, die (wie der Name schon sagt) 3D-Punkte auf eine 2D-Zeichenfläche projiziert:

```glsl
// Make sure to read the transformations in reverse order
gl_Position = projection * model * vec4(position, 1.0);
```

### Die Ergebnisse

[Auf JSFiddle ansehen](https://jsfiddle.net/tatumcreative/zwyLLcbw/)

![Eine einfache Projektionsmatrix](part5.png)

## Der Ansichtskegel

Bevor wir dazu übergehen, wie man eine Perspektivprojektionsmatrix berechnet, müssen wir das Konzept des **[Ansichtskegels](https://de.wikipedia.org/wiki/Sichtfrustum)** einführen (auch bekannt als **View Frustum**). Dies ist der Raum, dessen Inhalt derzeit für den Benutzer sichtbar ist. Es ist der 3D-Raum, der durch das Sichtfeld und die Abstände definiert ist, die als die nächsten und entferntesten Inhalte gerendert werden sollen.

Während des Renderns müssen wir bestimmen, welche Polygone gerendert werden müssen, um die Szene darzustellen. Dies ist das, was der Ansichtskegel definiert. Aber was ist überhaupt ein Frustum?

Ein [Frustum](https://de.wikipedia.org/wiki/Frustum) ist das 3D-Volumen, das resultiert, wenn man einen beliebigen Festkörper nimmt und zwei Teile davon mit zwei parallelen Ebenen abschneidet. Stellen Sie sich unsere Kamera vor, die einen Bereich ansieht, der direkt vor ihrem Objektiv beginnt und sich in die Ferne erstreckt. Der sichtbare Bereich ist ein vierseitiges Pyramide mit ihrer Spitze am Objektiv, ihren vier Seiten entsprechend dem Umfang ihrer peripheren Sichtweite und ihrer Basis in der größten Entfernung, die sie sehen kann, so:

![Eine Darstellung des gesamten Sichtbereichs einer Kamera. Dieser Bereich ist eine vierseitige Pyramide mit ihrer Spitze am Objektiv und ihrer Basis in der Welt am weitesten entfernten sichtbaren Entfernung.](fullcamerafov.svg)

Wenn wir dies verwenden würden, um die zu rendernden Polygone jedes Frame zu bestimmen, müsste unser Renderer jedes Polygon innerhalb dieser Pyramide rendern, was bis ins Unendliche reicht, einschließlich Polygone, die sehr nahe am Objektiv sind—wahrscheinlich zu nah, um nützlich zu sein (und sicherlich Dinge, die so nah sind, dass ein echter Mensch sie in derselben Einstellung nicht fokussieren könnte).

Der erste Schritt zur Reduzierung der Anzahl der Polygone, die wir berechnen und rendern müssen, besteht darin, diese Pyramide in den Ansichtskegel zu verwandeln. Die beiden Ebenen, die wir verwenden, um die Vertices abzuschneiden, um die Polygonanzahl zu reduzieren, sind die **nahe Abschneideebene** und die **ferne Abschneideebene**.

In WebGL werden die nahen und fernen Abschneideebenen definiert, indem der Abstand vom Objektiv zu dem nächstgelegenen Punkt auf einer Ebene angegeben wird, die senkrecht zur Betrachtungsrichtung steht. Alles, was näher am Objektiv ist als die nahe Abschneideebene oder weiter entfernt als die ferne Abschneideebene, wird entfernt. Dies ergibt den Ansichtskegel, der folgendermaßen aussieht:

![Eine Darstellung des Sicht-Frustums der Kamera; die nahe und die ferne Ebene haben einen Teil des Volumens entfernt, wodurch die Polygonanzahl reduziert wurde.](camera_view_frustum.svg)

Das zu rendernde Set von Objekten für jeden Frame wird im Wesentlichen erstellt, indem man mit dem Set aller Objekte in der Szene beginnt. Dann werden alle Objekte entfernt, die _vollständig_ außerhalb des Ansichtskegels liegen. Als nächstes werden Objekte, die teilweise außerhalb des Ansichtskegels herausragen, beschnitten, indem alle Polygone entfernt werden, die vollständig außerhalb des Frustums liegen, und indem die Polygone, die außerhalb des Frustums hinausragen, bis sie es nicht mehr verlassen, abgeschnitten werden.

Nachdem das getan wurde, haben wir das größte Set von Polygonen, das sich vollständig innerhalb des Frustums befindet. Diese Liste wird normalerweise weiter reduziert, indem Prozesse wie [Back-Face Culling](https://de.wikipedia.org/wiki/Backface_Culling) (Entfernen von Polygonen, deren Rückseite zur Kamera zeigt) und Okklusionsculling unter Verwendung der [vorderseitebestimmung](https://de.wikipedia.org/wiki/Verdeckungsberechnung) (Entfernen von Polygonen, die nicht gesehen werden können, da sie vollständig von näher am Objektiv liegenden Polygonen blockiert werden) angewendet werden.

## Perspektivprojektionsmatrix

Bis zu diesem Punkt haben wir unsere eigene 3D-Rendering-Setup Schritt für Schritt aufgebaut. Der aktuelle Code, wie wir ihn erstellt haben, weist jedoch einige Probleme auf. Zum einen wird er verzerrt, wenn wir unser Fenster in der Größe ändern. Ein weiteres Problem ist, dass unsere einfache Projektion keinen großen Bereich an Werten für die Szenendaten bewältigt. Die meisten Szenen arbeiten nicht im Clip Space. Es wäre hilfreich, festzulegen, welche Entfernung für die Szene relevant ist, um keine Präzision beim Konvertieren der Werte zu verlieren. Schließlich ist es sehr hilfreich, eine fein abgestimmte Kontrolle darüber zu haben, welche Punkte in den Clip Space gelangen und welche nicht. In den vorherigen Beispielen werden gelegentlich die Ecken des Würfels abgeschnitten.

Die **Perspektivprojektionsmatrix** ist eine Art von Projektionsmatrix, die all diese Anforderungen erfüllt. Die Mathematik beginnt auch ein wenig involvierter zu werden und wird in diesen Beispielen nicht vollständig erklärt. Kurz gesagt, sie kombiniert die Division durch w (wie bei den vorherigen Beispielen) mit einigen genialen Manipulationen basierend auf [ähnlichen Dreiecken](https://de.wikipedia.org/wiki/Ähnlichkeit_%28Geometrie%29). Wenn Sie eine vollständige Erklärung der Mathematik dahinter lesen möchten, schauen Sie sich einige der folgenden Links an:

- [OpenGL Projektion Matrix](https://www.songho.ca/opengl/gl_projectionmatrix.html)
- [Perspektivprojektion](https://ogldev.org/)
- [Versuch, die Mathematik hinter der Perspektivmatrix in WebGL zu verstehen](https://stackoverflow.com/questions/28286057/trying-to-understand-the-math-behind-the-perspective-matrix-in-webgl/28301213#28301213)

Eine wichtige Sache zu beachten ist, dass die perspektivische Projektionsmatrix, die unten verwendet wird, die Z-Achse umdreht. Im Clip Space geht das z+ vom Betrachter weg, während es mit dieser Matrix auf den Betrachter zugeht.

Der Grund, die Z-Achse umzudrehen, ist, dass das Clip Space-Koordinatensystem ein linkshändiges Koordinatensystem ist (wobei die Z-Achse vom Betrachter weg und in den Bildschirm zeigt), während die Konvention in Mathematik, Physik und 3D-Modellierung sowie für das Sicht- bzw. Augenkamerasystem in OpenGL darin besteht, ein rechtshändiges Koordinatensystem zu verwenden (die Z-Achse zeigt aus dem Bildschirm zum Betrachter). Mehr dazu in den entsprechenden Wikipedia-Artikeln: [Kartesisches Koordinatensystem](https://de.wikipedia.org/wiki/Kartesisches_Koordinatensystem#Orientation_and_handedness), [Rechte-Hand-Regel](https://de.wikipedia.org/wiki/Rechte-Hand-Regel).

Schauen wir uns eine `perspectiveMatrix()`-Funktion an, die die Perspektivprojektion berechnet.

```js
MDN.perspectiveMatrix = function (
  fieldOfViewInRadians,
  aspectRatio,
  near,
  far,
) {
  const f = 1.0 / Math.tan(fieldOfViewInRadians / 2);
  const rangeInv = 1 / (near - far);

  return [
    f / aspectRatio,
    0,
    0,
    0,
    0,
    f,
    0,
    0,
    0,
    0,
    (near + far) * rangeInv,
    -1,
    0,
    0,
    near * far * rangeInv * 2,
    0,
  ];
};
```

Die vier Parameter der Funktion sind:

- `fieldOfViewInRadians`
  - : Ein Winkel, angegeben in Radiant, der angibt, wie viel von der Szene dem Betrachter auf einmal sichtbar ist. Je größer die Zahl ist, desto mehr ist für die Kamera sichtbar. Die Geometrie an den Rändern wird zunehmend verzerrt, äquivalent zu einem Weitwinkelobjektiv. Wenn das Sichtfeld größer ist, werden die Objekte typischerweise kleiner. Wenn das Sichtfeld kleiner ist, kann die Kamera weniger und weniger von der Szene sehen. Die Objekte werden viel weniger durch Perspektive verzerrt und scheinen viel näher an der Kamera zu sein.
- `aspectRatio`
  - : Das Seitenverhältnis der Szene, das ihrer Breite geteilt durch ihre Höhe entspricht. In diesen Beispielen ist das die Fensterbreite geteilt durch die Fensterhöhe. Die Einführung dieses Parameters löst endlich das Problem, bei dem das Modell verzerrt wird, wenn die Leinwand in der Größe geändert und umgeformt wird.
- `nearClippingPlaneDistance`
  - : Eine positive Zahl, die die Entfernung in den Bildschirm zu einer Ebene angibt, die senkrecht zum Boden steht, und näher als die alles entfernt wird. Dies wird auf -1 im Clip Space abgebildet und sollte nicht auf 0 gesetzt werden.
- `farClippingPlaneDistance`
  - : Eine positive Zahl, die die Entfernung zur Ebene angibt, jenseits derer die Geometrie abgeschnitten wird. Dies wird auf 1 im Clip Space abgebildet. Dieser Wert sollte in angemessener Nähe zur Distanz der Geometrie gehalten werden, um zu vermeiden, dass Präzisionsfehler beim Rendern auftreten.

In der neuesten Version des Box-Demos wurde die Methode `computeSimpleProjectionMatrix()` durch die Methode `computePerspectiveMatrix()` ersetzt.

```js
CubeDemo.prototype.computePerspectiveMatrix = function () {
  const fieldOfViewInRadians = Math.PI * 0.5;
  const aspectRatio = window.innerWidth / window.innerHeight;
  const nearClippingPlaneDistance = 1;
  const farClippingPlaneDistance = 50;

  this.transforms.projection = MDN.perspectiveMatrix(
    fieldOfViewInRadians,
    aspectRatio,
    nearClippingPlaneDistance,
    farClippingPlaneDistance,
  );
};
```

Der Shader-Code ist identisch mit dem vorherigen Beispiel:

```js
gl_Position = projection * model * vec4(position, 1.0);
```

Zusätzlich (nicht gezeigt) wurden die Positions- und Skalierungsmatrizen des Modells geändert, um es aus dem Clip Space herauszunehmen und in das größere Koordinatensystem zu bringen.

### Die Ergebnisse

[Auf JSFiddle ansehen](https://jsfiddle.net/tatumcreative/Lzxw7e1q/)

![Eine echte Perspektivmatrix](part6.png)

### Übungen

- Experimentieren Sie mit den Parametern der Perspektivprojektionsmatrix und der Modellmatrix.
- Ersetzen Sie die Perspektivprojektionsmatrix durch die [Orthografische Projektion](https://de.wikipedia.org/wiki/Orthografische_Projektion). Im MDN WebGL-gemeinsamen Code finden Sie die Funktion `MDN.orthographicMatrix()`. Diese kann die Funktion `MDN.perspectiveMatrix()` in `CubeDemo.prototype.computePerspectiveMatrix()` ersetzen.

## Sichtmatrix

Während einige Grafikbibliotheken eine virtuelle Kamera haben, die bei der Erstellung einer Szene positioniert und ausgerichtet werden kann, hat OpenGL (und damit auch WebGL) dies nicht. Hier kommt die **Sichtmatrix** ins Spiel. Ihre Aufgabe ist es, die Objekte in der Szene zu übersetzen, zu rotieren und zu skalieren, sodass sie, relativ zur Position und Ausrichtung des Betrachters, am richtigen Platz sind.

### Eine Kamera simulieren

Dies nutzt einen der grundlegenden Aspekte der speziellen Relativitätstheorie Einsteins: das Prinzip der Bezugssysteme und relativer Bewegung besagt, dass man aus der Perspektive eines Beobachters das Ändern der Position und Ausrichtung des Beobachters simulieren kann, indem die entgegengesetzte Änderung an den Objekten in der Szene vorgenommen wird. So oder so erscheint das Ergebnis für den Betrachter identisch.

Stellen Sie sich eine Box vor, die auf einem Tisch steht, und eine Kamera, die auf dem Tisch einen Meter entfernt steht und auf die Box zeigt, deren Vorderseite auf die Kamera gerichtet ist. Gehen wir nun davon aus, dass die Kamera von der Box weg bewegt wird, bis sie zwei Meter entfernt ist (indem wir der Z-Position der Kamera einen Meter hinzufügen) und sie dann um 10 Zentimeter nach links geschoben wird. Die Box entfernt sich von der Kamera um diesen Betrag und schiebt sich leicht nach rechts, wodurch sie für die Kamera kleiner erscheint und ein kleiner Teil ihrer linken Seite freigelegt wird.

Setzen wir nun die Szene zurück, indem wir die Box an ihren Ausgangspunkt zurückversetzen, wobei die Kamera zwei Meter von der Box entfernt ist und direkt auf sie gerichtet ist. Diesmal jedoch ist die Kamera auf dem Tisch befestigt und kann nicht bewegt oder gedreht werden. So verhält es sich auch bei der Arbeit mit WebGL. Wie simulieren wir dann die Bewegung der Kamera durch den Raum?

Anstatt die Kamera rückwärts und nach links zu bewegen, w wenden wir die inverse Transformation auf die Box an: Wir bewegen die _Box_ rückwärts um einen Meter und dann um 10 Zentimeter nach rechts. Das Ergebnis ist aus der Perspektive der beiden Objekte identisch.

Der letzte Schritt bei all dem ist es, die **Ansichtsmatrix** zu erstellen, die die Objekte in der Szene transformiert, sodass sie positioniert werden, um die aktuelle Position und Orientierung der Kamera zu simulieren. Unser derzeitiger Code kann den Würfel im Weltall bewegen und alles mit Perspektive projizieren, aber wir können die Kamera immer noch nicht bewegen.

Stellen Sie sich vor, Sie drehen einen Film mit einer physischen Kamera. Sie haben die Freiheit, die Kamera praktisch überall zu platzieren und die Kamera in jede gewünschte Richtung zu richten. Um dies in 3D-Grafiken zu simulieren, verwenden wir eine Ansichtsmatrix, um die Position und Rotation dieser physischen Kamera zu simulieren.

Anders als die Modellmatrix, die die Modellvertices direkt transformiert, bewegt die Ansichtsmatrix eine abstrakte Kamera umher. In Wirklichkeit bewegt der Vertex-Shader immer noch nur die Modelle, während die "Kamera" an Ort und Stelle bleibt. Um das korrekt zu erreichen, muss die Inverse der Transformationsmatrix verwendet werden. Die Inverse einer Matrix kehrt im Wesentlichen eine Transformation um, sodass, wenn wir die Kameraansicht vorwärts bewegen, die Inverse Matrix die Objekte in der Szene zurückbewegt.

Die folgende `computeViewMatrix()`-Methode animiert die Ansichtsmatrix, indem sie nach innen und außen und nach links und rechts bewegt.

```js
CubeDemo.prototype.computeViewMatrix = function (now) {
  const moveInAndOut = 20 * Math.sin(now * 0.002);
  const moveLeftAndRight = 15 * Math.sin(now * 0.0017);

  // Move the camera around
  const position = MDN.translateMatrix(moveLeftAndRight, 0, 50 + moveInAndOut);

  // Multiply together, make sure and read them in opposite order
  const matrix = MDN.multiplyArrayOfMatrices([
    // Exercise: rotate the camera view
    position,
  ]);

  // Inverse the operation for camera movements, because we are actually
  // moving the geometry in the scene, not the camera itself.
  this.transforms.view = MDN.invertMatrix(matrix);
};
```

Der Shader verwendet nun drei Matrizen.

```glsl
gl_Position = projection * view * model * vec4(position, 1.0);
```

Nach diesem Schritt wird die GPU-Pipeline die außerhalb des Bereichs liegenden Vertices abschneiden und das Modell an den Fragment-Shader zur Rasterung senden.

### Die Ergebnisse

[Auf JSFiddle ansehen](https://jsfiddle.net/tatumcreative/86fd797g/)

![Die Ansichtsmatrix](part7.png)

### Beziehung der Koordinatensysteme

An diesem Punkt wäre es vorteilhaft, einen Schritt zurückzutreten und die verschiedenen verwendeten Koordinatensysteme zu betrachten und zu beschriften. Zuerst werden die Vertices des Würfels in **Modellraum** definiert. Um das Modell in der Szene zu bewegen, müssen diese Vertices in **Weltraum** umgewandelt werden, indem die Modellmatrix angewendet wird.

Modellraum → Modellmatrix → Weltraum

Die Kamera hat noch nichts getan, und die Punkte müssen erneut bewegt werden. Derzeit befinden sie sich im Weltraum, aber sie müssen in **Sichtraum** verschoben werden (unter Verwendung der Ansichtsmatrix), um die Kameraposition darzustellen.

Weltraum → Ansichtsmatrix → Sichtraum

Schließlich muss eine **Projektion** (in unserem Fall die Perspektivprojektionsmatrix) hinzugefügt werden, um die Weltkoordinaten in Clip-Space-Koordinaten abzubilden.

Sichtraum → Projektionsmatrix → Clip Space

### Übung

- Bewegen Sie die Kamera durch die Szene.
- Fügen Sie einige Rotationsmatrizen zur Ansichtsmatrix hinzu, um sich umzusehen.
- Verfolgen Sie schließlich die Position der Maus. Verwenden Sie 2 Rotationsmatrizen, um die Kamera basierend darauf, wo sich die Maus des Benutzers auf dem Bildschirm befindet, nach oben und unten schauen zu lassen.

## Siehe auch

- [WebGL](/de/docs/Web/API/WebGL_API)
- [3D-Projektion](https://de.wikipedia.org/wiki/3D-Projektion)
