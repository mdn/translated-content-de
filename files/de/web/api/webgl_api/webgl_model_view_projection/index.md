---
title: WebGL Modell-View-Projektion
slug: Web/API/WebGL_API/WebGL_model_view_projection
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{DefaultAPISidebar("WebGL")}}

Dieser Artikel erklärt, wie Sie Daten innerhalb eines [WebGL](/de/docs/Web/API/WebGL_API)-Projekts in die richtigen Räume projizieren, um sie auf dem Bildschirm darzustellen. Es wird ein grundlegendes Verständnis der Matrizenmathematik unter Verwendung von Translations-, Skalierungs- und Rotationsmatrizen vorausgesetzt. Es erklärt die drei Kernmatrizen, die typischerweise beim Erstellen einer 3D-Szene verwendet werden: die Modell-, View- und Projektionsmatrizen.

> [!NOTE]
> Dieser Artikel ist auch als [MDN Content Kit](https://github.com/gregtatum/mdn-model-view-projection) verfügbar. Es wird auch eine Sammlung von [Dienstprogrammfunktionen](https://github.com/gregtatum/mdn-webgl) verwendet, die unter dem globalen Objekt `MDN` verfügbar sind.

## Die Modell-, View- und Projektionsmatrizen

Einzelne Transformationen von Punkten und Polygonen im Raum in WebGL werden durch grundlegende Transformationsmatrizen wie Translation, Skalierung und Rotation behandelt. Diese Matrizen können zusammengefügt und in speziellen Weisen gruppiert werden, um sie für das Rendern komplizierter 3D-Szenen nützlich zu machen. Diese zusammengesetzten Matrizen bewegen letztlich die ursprünglichen Modelldaten in einen speziellen Koordinatenraum, der als **Clippingraum** bezeichnet wird. Dies ist ein 2 Einheiten großer Würfel, zentriert bei (0,0,0), mit Ecken, die von (-1,-1,-1) bis (1,1,1) reichen. Dieser Clippingraum wird in einen 2D-Raum komprimiert und in ein Bild gerastert.

Die erste Matrix, die unten besprochen wird, ist die **Modellmatrix**, die definiert, wie Sie Ihre ursprünglichen Modelldaten nehmen und im 3D-Weltraum bewegen. Die **Projektionsmatrix** wird verwendet, um Weltkoordinaten in Clippingraumkoordinaten zu konvertieren. Eine häufig verwendete Projektionsmatrix, die **Perspektivprojectionsmatrix**, wird verwendet, um die _Effekte_ einer typischen Kamera zu imitieren, die als Stellvertreter für den Betrachter in der 3D-Virtualwelt dient. Die **View-Matrix** ist dafür verantwortlich, die Objekte in der Szene so zu bewegen, dass die Position der Kamera simuliert wird, was verändert, was der Betrachter derzeit sehen kann.

Die folgenden Abschnitte bieten einen ausführlichen Einblick in die Ideen hinter und die Implementierung der Modell-, View- und Projektionsmatrizen. Diese Matrizen sind zentral für die Bewegung von Daten auf dem Bildschirm und sind Konzepte, die über einzelne Frameworks und Engines hinausgehen.

## Clippingraum

In einem WebGL-Programm werden Daten typischerweise mit einem eigenen Koordinatensystem auf die GPU hochgeladen und dann transformiert der Vertex-Shader diese Punkte in ein spezielles Koordinationssystem, das als **Clippingraum** bekannt ist. Jegliche Daten, die über den Clippingraum hinausgehen, werden abgeschnitten und nicht gerendert. Wenn jedoch ein Dreieck die Grenze dieses Raumes überschreitet, wird es in neue Dreiecke aufgeteilt, und nur die Teile der neuen Dreiecke, die sich im Clippingraum befinden, werden beibehalten.

![Ein 3D-Diagramm, das den Clippingraum in WebGL zeigt.](clip_space_graph.svg)

Die oben abgebildete Grafik ist eine Visualisierung des Clippingraums, in den alle Punkte passen müssen. Es ist ein Würfel mit zwei Einheiten auf jeder Seite, mit einer Ecke bei (-1,-1,-1) und der gegenüberliegenden Ecke bei (1,1,1). Der Mittelpunkt des Würfels ist der Punkt (0,0,0). Dieses Koordinatensystem des 8-Kubikmeters, das vom Clippingraum benutzt wird, ist als normalisierte Gerätekoordinaten (NDC) bekannt. Sie können diesem Begriff hin und wieder begegnen, wenn Sie recherchieren und mit WebGL-Code arbeiten.

In diesem Abschnitt werden wir unsere Daten direkt in das Clippingraum-Koordinatensystem einfügen. Normalerweise werden Modelldaten verwendet, die sich in einem beliebigen Koordinatensystem befinden und dann mithilfe einer Matrix transformiert werden, die die Modellkoordinaten in das Clippingraum-Koordinatensystem umwandelt. Für dieses Beispiel ist es am einfachsten zu veranschaulichen, wie der Clippingraum funktioniert, indem Modellkoordinatenwerte von (-1,-1,-1) bis (1,1,1) verwendet werden. Der folgende Code wird 2 Dreiecke erstellen, die ein Quadrat auf dem Bildschirm zeichnen. Die Z-Tiefe in den Quadraten bestimmt, was oben gezeichnet wird, wenn die Quadrate denselben Raum teilen. Die kleineren Z-Werte werden über den größeren Z-Werten gerendert.

### WebGLBox Beispiel

In diesem Beispiel wird ein benutzerdefiniertes `WebGLBox`-Objekt erstellt, das ein 2D-Rechteck auf dem Bildschirm zeichnen wird.

> [!NOTE]
> Der Code für jedes WebGLBox-Beispiel ist in diesem [GitHub-Repo](https://github.com/gregtatum/mdn-model-view-projection/tree/master/lessons) verfügbar und ist nach Abschnitt organisiert. Zusätzlich gibt es einen JSFiddle-Link am Ende jedes Abschnitts.

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

#### WebGLBox zeichnen

Jetzt erstellen wir eine Methode, um ein Rechteck auf dem Bildschirm zu zeichnen.

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

Die Shader sind die Stücke von Code, die in GLSL geschrieben sind, die unsere Datenpunkte aufnehmen und letztendlich auf dem Bildschirm rendern. Der Einfachheit halber sind diese Shader in einem {{htmlelement("script")}}-Element gespeichert, das durch die benutzerdefinierte Funktion `MDN.createWebGLProgramFromIds()` in das Programm eingebracht wird. Diese Funktion ist Teil einer Sammlung von [Dienstprogrammfunktionen](https://github.com/gregtatum/mdn-webgl), die für diese Tutorials geschrieben wurden und hier nicht im Detail erklärt werden. Diese Funktion übernimmt die Grundlagen der Kompilierung von GLSL-Quellcode in ein WebGL-Programm. Die Funktion nimmt drei Parameter an — den Kontext, in dem das Programm gerendert werden soll, die ID des {{htmlelement("script")}}-Elements, das den Vertex-Shader enthält, und die ID des {{htmlelement("script")}}-Elements, das den Fragment-Shader enthält. Der Vertex-Shader positioniert die Vertizes, und der Fragment-Shader färbt jedes Pixel.

Werfen Sie zunächst einen Blick auf den Vertex-Shader, der die Vertizes auf dem Bildschirm verschieben wird:

```glsl
// The individual position vertex
attribute vec3 position;

void main() {
  // the gl_Position is the final position in clip space after the vertex shader modifies it
  gl_Position = vec4(position, 1.0);
}
```

Um die Daten tatsächlich in Pixel zu rasterisieren, bewertet der Fragment-Shader alles auf einer Pixel-zu-Pixel-Basis, indem er eine einheitliche Farbe setzt. Die GPU ruft die Shader-Funktion für jedes Pixel auf, das gerendert werden muss; die Aufgabe des Shaders ist es, die zu verwendende Farbe für dieses Pixel zurückzugeben.

```glsl
precision mediump float;
uniform vec4 color;

void main() {
  gl_FragColor = color;
}
```

Mit diesen Einstellungen wird es Zeit, direkt auf den Bildschirm mit Clippingraumkoordinaten zu zeichnen.

```js
const box = new WebGLBox();
```

Zuerst zeichnen wir ein rotes Rechteck in der Mitte.

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

Als nächstes zeichnen wir ein grünes Rechteck oben und hinter dem roten Rechteck.

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

Um zu demonstrieren, dass das Clipping tatsächlich funktioniert, wird dieses Rechteck nicht gezeichnet, da es sich vollständig außerhalb des Clippingraums befindet. Die Tiefe liegt außerhalb des Bereichs von -1,0 bis 1,0.

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

![Die Ergebnisse des Zeichnens im Clippingraum mit WebGL.](part1.png)

#### Übung

Eine hilfreiche Übung an diesem Punkt ist es, die Boxen im Clippingraum zu bewegen, indem Sie den Code variieren, um ein Gefühl dafür zu bekommen, wie Punkte geclipt und im Clippingraum bewegt werden. Versuchen Sie, ein Bild wie ein quadratisches Smiley-Gesicht mit einem Hintergrund zu zeichnen.

## Homogene Koordinaten

Die Hauptzeile des vorherigen Clippingraum-Vertex-Shaders enthielt diesen Code:

```js
gl_Position = vec4(position, 1.0);
```

Die `position`-Variable wurde in der `draw()`-Methode definiert und als Attribut an den Shader übergeben. Dies ist ein dreidimensionaler Punkt, aber die `gl_Position`-Variable, die letztendlich durch die Pipeline weitergegeben wird, ist tatsächlich vierdimensional — anstelle von `(x, y, z)` ist es `(x, y, z, w)`. Es gibt keinen Buchstaben nach `z`, daher wird diese vierte Dimension konventionell mit `w` bezeichnet. Im obigen Beispiel ist die `w`-Koordinate auf 1,0 gesetzt.

Die offensichtliche Frage ist: "Warum die zusätzliche Dimension?" Es stellt sich heraus, dass diese Ergänzung viele nützliche Techniken zur Manipulation von 3D-Daten ermöglicht. Diese hinzugefügte Dimension führt das Konzept der Perspektive in das Koordinatensystem ein; damit an Ort und Stelle können wir 3D-Koordinaten in den 2D-Raum abbilden—wodurch es möglich wird, dass zwei parallele Linien sich treffen, wenn sie in die Ferne rücken. Der Wert von `w` wird als Teiler für die anderen Komponenten der Koordinate verwendet, sodass die tatsächlichen Werte von `x`, `y` und `z` als `x/w`, `y/w` und `z/w` berechnet werden (und `w` auch `w/w` ist, was 1 wird).

Ein dreidimensionaler Punkt ist in einem typischen kartesischen Koordinatensystem definiert. Die hinzugefügte vierte Dimension verwandelt diesen Punkt in eine [homogene Koordinate](https://en.wikipedia.org/wiki/Homogeneous_coordinates). Es stellt immer noch einen Punkt im 3D-Raum dar und es kann leicht gezeigt werden, wie man diese Art von Koordinate durch ein Paar einfacher Funktionen konstruiert.

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

Wie oben erwähnt und in den Funktionen gezeigt, teilt die `w`-Komponente die `x`-, `y`- und `z`-Komponenten. Wenn die `w`-Komponente eine nicht-null-reelle Zahl ist, kann die homogene Koordinate leicht in einen normalen Punkt im kartesischen Raum zurückübersetzt werden. Was passiert, wenn die `w`-Komponente null ist? In JavaScript würde der zurückgegebene Wert wie folgt aussehen:

```js
homogeneousToCartesian([10, 4, 5, 0]);
```

Dies ergibt: `[Infinity, Infinity, Infinity]`.

Diese homogene Koordinate stellt einen Punkt im Unendlichen dar. Dies ist eine praktische Möglichkeit, einen Strahl, der in eine bestimmte Richtung vom Ursprung ausgeht, darzustellen. Zusätzlich zu einem Strahl könnte es auch als Darstellung eines Richtungsvektors betrachtet werden. Wenn diese homogene Koordinate mit einer Matrix multipliziert wird, die mit einer Translation versehen ist, wird die Translation effektiv herausgefiltert.

Wenn Zahlen auf Computern extrem groß (oder extrem klein) sind, werden sie immer ungenauer, da nur so viele Einsen und Nullen vorhanden sind, um sie darzustellen. Je mehr Operationen mit größeren Zahlen durchgeführt werden, desto mehr Fehler summieren sich in das Ergebnis. Wenn durch `w` geteilt wird, kann dies die Genauigkeit sehr großer Zahlen effektiv durch Arbeiten an zwei möglicherweise kleineren, weniger fehleranfälligen Zahlen erhöhen.

Der abschließende Vorteil der Verwendung homogener Koordinaten besteht darin, dass sie sich sehr gut eignen, um mit 4x4-Matrizen multipliziert zu werden. Ein Vertex muss mindestens eine der Dimensionen einer Matrix passen, um mit ihr multipliziert zu werden. Die 4x4-Matrix kann verwendet werden, um eine Vielzahl nützlicher Transformationen zu codieren. Tatsächlich verwendet die typische Perspektivprojektionsmatrix die Division durch die `w`-Komponente, um ihre Transformation zu erreichen.

Das Clipping von Punkten und Polygonen aus dem Clippingraum erfolgt, bevor die homogenen Koordinaten wieder in kartesische Koordinaten umgewandelt wurden (durch Division durch `w`). Dieser letzte Raum ist als **normalisierte Gerätekoordinaten** oder NDC bekannt.

Um mit dieser Idee zu spielen, kann das vorherige Beispiel modifiziert werden, um die Verwendung der `w`-Komponente zu ermöglichen.

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

Dann verwendet der Vertex-Shader den übergebenen vierdimensionalen Punkt.

```glsl
attribute vec4 position;

void main() {
  gl_Position = position;
}
```

Zuerst zeichnen wir ein rotes Rechteck in der Mitte, setzen `W` jedoch auf 0,7. Da die Koordinaten durch 0,7 geteilt werden, werden sie alle vergrößert.

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

Jetzt zeichnen wir ein grünes Rechteck oben, schrumpfen es jedoch, indem wir die `w`-Komponente auf 1,1 setzen.

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

Dieses letzte Rechteck wird nicht gezeichnet, da es sich außerhalb des Clippingraums befindet. Die Tiefe liegt außerhalb des Bereichs von -1,0 bis 1,0.

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

![Die Ergebnisse der Verwendung homogener Koordinaten, um die Boxen in WebGL zu bewegen.](part2.png)

### Übungen

- Spielen Sie mit diesen Werten herum, um zu sehen, wie sie sich auf das, was auf dem Bildschirm gerendert wird, auswirken. Beachten Sie, wie das vorher abgeschnittene blaue Rechteck durch Einstellen seiner `w`-Komponente wieder in den Bereich gebracht wird.
- Versuchen Sie, ein neues Rechteck zu erstellen, das sich außerhalb des Clippingraums befindet, und bringen Sie es durch Division durch `w` wieder herein.

## Modelltransformation

Das direkte Platzieren von Punkten in Clippingraum ist von begrenztem Nutzen. In realen Anwendungen haben Sie nicht alle Ihre Quellkoordinaten bereits in Clippingraumkoordinaten. Die meiste Zeit müssen Sie die Modelldaten und andere Koordinaten in Clippingraum transformieren. Der bescheidene Würfel ist ein einfaches Beispiel, wie dies zu tun ist. Würfeldaten bestehen aus Scheitelpunktpositionen, den Farben der Würfelseiten und der Reihenfolge der Scheitelpunktpositionen, die die einzelnen Polygone (in Gruppen von 3 Scheitelpunkten zur Konstruktion der Dreiecke, die die Würfelseiten bilden) bilden. Die Positionen und Farben werden in GL-Puffern gespeichert, als Attribute an den Shader gesendet und dann individuell operiert.

Schließlich wird eine einzelne Modellmatrix berechnet und gesetzt. Diese Matrix stellt die Transformationen dar, die an jedem Punkt des Modells durchgeführt werden müssen, um es in den richtigen Raum zu bringen und eventuell andere erforderliche Transformationen an jedem Punkt im Modell durchzuführen. Dies gilt nicht nur für jeden Vertex, sondern auch für jeden einzelnen Punkt auf jeder Oberfläche des Modells.

In diesem Fall bewegt eine Serie von Skalierungs-, Rotations- und Translationsmatrizen die Daten in den gewünschten Standort in Clippingraum für jede Bildsequenz der Animation. Der Würfel hat die Größe des Clippingraums (-1,-1,-1) bis (1,1,1), sodass er verkleinert werden muss, um nicht den gesamten Clippingraum zu füllen. Diese Matrix wird direkt an den Shader übergeben, nachdem sie zuvor in JavaScript multipliziert wurde.

Der folgende Codebeispiel definiert eine Methode für das `CubeDemo`-Objekt, die die Modellmatrix erstellt. Es verwendet benutzerdefinierte Funktionen, um Matrizen zu erstellen und zu multiplizieren, wie im gemeinsamen Code von [MDN WebGL](https://github.com/gregtatum/mdn-webgl) definiert. Die neue Funktion sieht so aus:

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

Um dies im Shader verwenden zu können, muss es auf eine uniforme Location gesetzt werden. Die Locations für die Uniforms werden im `locations`-Objekt unten gespeichert:

```js
this.locations.model = gl.getUniformLocation(webglProgram, "model");
```

Und schließlich wird das Uniform auf diese Location gesetzt. Dies übergibt die Matrix an die GPU.

```js
gl.uniformMatrix4fv(
  this.locations.model,
  false,
  new Float32Array(this.transforms.model),
);
```

Im Shader wird jeder Positionsvertex zuerst in eine homogene Koordinate (ein `vec4`-Objekt) transformiert und dann mit der Modellmatrix multipliziert.

```glsl
gl_Position = model * vec4(position, 1.0);
```

> [!NOTE]
> In JavaScript erfordert die Matrixmultiplikation eine benutzerdefinierte Funktion, während sie im Shader in die Sprache mit dem einfachen `*`-Operator eingebaut ist.

### Die Ergebnisse

[Auf JSFiddle ansehen](https://jsfiddle.net/tatumcreative/5jofzgsh/)

![Verwendung einer Modellmatrix](part3.png)

An diesem Punkt ist der `w`-Wert des transformierten Punktes immer noch 1,0. Der Würfel hat immer noch keine Perspektive. Der nächste Abschnitt wird dieses Setup nutzen und die `w`-Werte ändern, um etwas Perspektive zu bieten.

### Übungen

- Verkleinern Sie die Box mit der Skalierungsmatrix und positionieren Sie sie an verschiedenen Stellen innerhalb des Clippingraums.
- Versuchen Sie, sie außerhalb des Clippingraums zu bewegen.
- Ändern Sie die Fenstergröße und beobachten Sie, wie die Box aus der Form gerät.
- Fügen Sie eine `rotateZ`-Matrix hinzu.

## Division durch W

Ein einfacher Weg, um etwas Perspektive auf unser Modell des Würfels zu bekommen, ist es, die Z-Koordinate zu nehmen und sie in die `w`-Koordinate zu kopieren. Normalerweise wird bei der Umwandlung eines kartesischen Punktes in homogenes `(x,y,z,1)`, aber wir werden es auf etwas wie `(x,y,z,z)` setzen. Tatsächlich wollen wir sicherstellen, dass `z` größer als 0 ist für Punkte im Sichtbereich, sodass wir es leicht ändern, indem wir den Wert in `((1.0 + z) * scaleFactor)` ändern. Dies wird einen Punkt, der normalerweise im Clippingraum ist (-1 bis 1), in einen Raum bewegen, der eher wie (0 bis 1) ist, abhängig von dem, was der Skalierungsfaktor eingestellt ist. Der Skalierungsfaktor ändert den endgültigen `w`-Wert insgesamt nach oben oder unten.

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

![Das Füllen der W-Komponente und das Erstellen einer Projektion.](part4.png)

Sehen Sie dieses kleine dunkelblaue Dreieck? Das ist eine zusätzliche Fläche zu unserem Objekt hinzugefügt, weil die Rotation unserer Form dazu geführt hat, dass diese Ecke außerhalb des Clippingraums hervorragt, was dazu führt, dass die Ecke abgeschnitten wird. Siehe [Perspektivprojektionsmatrix](#perspektivprojektion_matrix) unten für eine Einführung, wie komplexere Matrizen verwendet werden können, um das Clipping zu steuern und zu verhindern.

### Übung

Wenn das ein wenig abstrakt klingt, öffnen Sie den Vertex-Shader und spielen Sie mit dem Skalierungsfaktor herum und beobachten Sie, wie er die Vertizen mehr auf die Oberfläche zuschrumpfen lässt. Völlig ändern Sie die `w`-Komponenten-Werte für wirklich psychedelische Darstellungen von Raum.

Im nächsten Abschnitt werden wir diesen Schritt des Kopierens von `Z` in den `w`-Slot nutzen und ihn in eine Matrix verwandeln.

## Einfache Projektion

Der letzte Schritt des Ausfüllens der `w`-Komponente kann tatsächlich mit einer einfachen Matrix erreicht werden. Beginnen Sie mit der Identitätsmatrix:

```js
const identity = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];

MDN.multiplyPoint(identity, [2, 3, 4, 1]);
//> [2, 3, 4, 1]
```

Verschieben Sie dann die letzte 1 der Spalte um einen Platz nach oben.

```js
const copyZ = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0];

MDN.multiplyPoint(copyZ, [2, 3, 4, 1]);
//> [2, 3, 4, 4]
```

Die letzte Zeile könnte vereinfacht werden zu:

```js
w = 4 * scaleFactor + 1 * scaleFactor;
```

Dann den Skalierungsfaktor ausklammernd, erhalten wir das:

```js
w = (4 + 1) * scaleFactor;
```

Was genau dasselbe ist wie das `(z + 1) * scaleFactor`, das wir im vorherigen Beispiel verwendet haben.

Im Box-Demo wird eine zusätzliche `computeSimpleProjectionMatrix()`-Methode hinzugefügt. Diese wird in der `draw()`-Methode aufgerufen und der Skalierungsfaktor wird an sie übergeben. Das Ergebnis sollte identisch mit dem letzten Beispiel sein:

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

Obwohl das Ergebnis identisch ist, ist der wichtige Schritt hier im Vertex-Shader. Anstatt den Vertex direkt zu ändern, wird er mit einer zusätzlichen **[Projektionsmatrix](#the_model_view_and_projection_matrices)** multipliziert, die (wie der Name schon sagt) 3D-Punkte auf eine 2D-Zeichnungsoberfläche projiziert:

```glsl
// Make sure to read the transformations in reverse order
gl_Position = projection * model * vec4(position, 1.0);
```

### Die Ergebnisse

[Auf JSFiddle ansehen](https://jsfiddle.net/tatumcreative/zwyLLcbw/)

![Eine einfache Projektionsmatrix](part5.png)

## Der Sichtfrustum

Bevor wir fortfahren, wie eine Perspektivprojektionsmatrix berechnet wird, müssen wir das Konzept des **[Sichtfrustums](https://en.wikipedia.org/wiki/Viewing_frustum)** (auch bekannt als **View-Frustum**) einführen. Dies ist der Raumbereich, dessen Inhalt dem Benutzer aktuell sichtbar ist. Es ist der 3D-Raumraum, der durch das Sichtfeld und die angegebenen Abstände als der nächste und weiteste Inhalt, der gerendert werden sollte, definiert wird.

Beim Rendern müssen wir bestimmen, welche Polygone gerendert werden müssen, um die Szene darzustellen. Dies ist, was das Sichtfrustum definiert. Aber was ist überhaupt ein Frustum?

Ein [Frustum](https://en.wikipedia.org/wiki/Frustum) ist das 3D-Volumen, das entsteht, wenn ein beliebiger Körper genommen und zwei Abschnitte davon mit zwei parallelen Ebenen abgeschnitten werden. Betrachten Sie unsere Kamera, die einen Bereich ansieht, der direkt vor ihrem Objektiv beginnt und sich in die Ferne erstreckt. Der sichtbare Bereich ist eine vierseitige Pyramide, deren Spitze am Objektiv, deren vier Seiten den Umfang ihres peripheren Sehbereichs entsprechen, und deren Basis am entferntesten Punkt, den es sehen kann, wie dies:

![Eine Darstellung des gesamten Sichtbereichs einer Kamera. Dieser Bereich ist eine vierseitige Pyramide mit ihrer Spitze am Objektiv und ihrer Basis an der maximal sichtbaren Entfernung der Welt.](fullcamerafov.svg)

Wenn wir dies verwenden würden, um die Polygone zu bestimmen, die für jeden Frame gerendert werden müssen, müsste unser Renderer jedes Polygon innerhalb dieser Pyramide rendern, bis ins Unendliche, und auch Polygone, die sehr nahe am Objektiv sind — wahrscheinlich zu nah, um nützlich zu sein (und sicherlich Dinge einschließen, die so nah sind, dass ein echter Mensch nicht in der Lage wäre, sich auf sie in derselben Einstellung zu konzentrieren).

Der erste Schritt zur Verringerung der Anzahl der Polygone, die wir berechnen und rendern müssen, besteht darin, diese Pyramide in das Sichtfrustum umzuwandeln. Die zwei Ebenen, die wir verwenden werden, um Vertizes abzuschneiden, um die Polygonanzahl zu reduzieren, sind die **nahe Clippingebene** und die **ferne Clippingebene**.

In WebGL werden die nahen und fernen Clippingebenen definiert, indem die Entfernung von dem Objektiv zum nächstgelegenen Punkt auf einer Ebene angegeben wird, die senkrecht zur Betrachtungsrichtung steht. Alles, was näher am Objektiv liegt als die nahe Clippingebene oder weiter entfernt als die ferne Clippingebene, wird entfernt. Dies ergibt das Sichtfrustum, das so aussieht:

![Eine Darstellung des Kamera-Sichtfrustums; die nahen und fernen Ebenen haben einen Teil des Volumens entfernt und so die Polygonanzahl reduziert.](camera_view_frustum.svg)

Der Satz von Objekten, die für jeden Frame gerendert werden sollen, wird im Wesentlichen erstellt, indem man mit dem Satz aller Objekte in der Szene beginnt. Dann werden alle Objekte entfernt, die _ganz_ außerhalb des Sichtfrustums liegen. Anschließend werden Objekte, die teilweise außerhalb des Sichtfrustums herausragen, abgeschnitten, indem man alle Polygone fallen lässt, die vollständig außerhalb des Frustums liegen, und indem man die Polygone, die über das Frustum hinausgehen, abschneidet, so dass sie es nicht mehr verlassen.

Sobald das erledigt ist, haben wir die größte Anzahl von Polygonen, die vollständig innerhalb des Sichtfrustums liegen. Diese Liste wird normalerweise weiter reduziert, indem Prozesse wie [Backface Culling](https://en.wikipedia.org/wiki/Back-face_culling) (Entfernen von Polygonen, die mit ihrer Rückseite zur Kamera zeigen) und Okklusionskürzung mit [Verdeckungsermittlung](https://en.wikipedia.org/wiki/Hidden-surface_determination) (Entfernen von Polygonen, die nicht gesehen werden können, weil sie vollständig von näher gelegenen Polygonen verdeckt werden) verwendet werden.

## Perspektivprojektion matrix

Bis zu diesem Punkt haben wir unser eigenes 3D-Rendering-Setup schrittweise aufgebaut. Trotzdem gibt es einige Probleme mit dem aktuellen Code, wie wir ihn entwickelt haben. Eines davon ist, dass er verzerrt wird, wenn wir unser Fenster verkleinern. Ein weiteres Problem ist, dass unsere einfache Projektion keine große Bandbreite für die Szenendaten verarbeiten kann. Die meisten Szenen funktionieren nicht im Clippingraum. Es wäre hilfreich, zu definieren, welche Entfernung für die Szene relevant ist, damit keine Präzision verloren geht beim Konvertieren der Zahlen. Schließlich ist es sehr hilfreich, eine genaue Kontrolle darüber zu haben, welche Punkte innerhalb und außerhalb des Clippingraums platziert werden. In den vorherigen Beispielen wird gelegentlich die Ecke des Würfels abgeschnitten.

Die **Perspektivprojektionsmatrix** ist eine Art von Projektionsmatrix, die all diese Anforderungen erfüllt. Die Mathematik beginnt auch ein bisschen komplizierter zu werden und wird nicht vollständig in diesen Beispielen erklärt. Kurz gesagt, sie kombiniert die Division durch `w` (wie in den vorherigen Beispielen) mit einigen cleveren Manipulationen basierend auf [ähnlichen Dreiecken](<https://de.wikipedia.org/wiki/Ähnlichkeit_(Geometrie)>). Wenn Sie eine vollständige Erklärung der Mathematik dahinter lesen möchten, schauen Sie sich einige der folgenden Links an:

- [OpenGL-Projektionsmatrix](https://www.songho.ca/opengl/gl_projectionmatrix.html)
- [Perspektivprojekt](https://ogldev.org/)
- [Versuch, die Mathematik hinter der Perspektivprojektionsmatrix in WebGL zu verstehen](https://stackoverflow.com/questions/28286057/trying-to-understand-the-math-behind-the-perspective-matrix-in-webgl/28301213#28301213)

Eine wichtige Sache zu beachten bei der unten verwendeten Perspektivprojektionsmatrix ist, dass sie die `z`-Achse umdreht. Im Clippingraum bewegt sich `z+` vom Betrachter weg, während bei dieser Matrix es auf den Betrachter zukommt.

Der Grund, die `z`-Achse zu drehen, ist, dass das Koordinatensystem des Clippingraums ein linkshändiges Koordinatensystem ist (wobei die `z`-Achse vom Betrachter in den Bildschirm hinein zeigt), während die Konvention in Mathematik, Physik und 3D-Modellierung sowie für das View- oder Augenkoordinatensystem in OpenGL darin besteht, ein rechtshändiges Koordinatensystem zu verwenden (wobei die `z`-Achse aus dem Bildschirm zum Betrachter zeigt). Mehr dazu in den relevanten Wikipedia-Artikeln: [Kartesisches Koordinatensystem](https://de.wikipedia.org/wiki/Kartesisches_Koordinatensystem#Orientierung_und_Händigkeit), [Rechte-Hand-Regel](https://de.wikipedia.org/wiki/Rechte-Hand-Regel).

Werfen wir einen Blick auf eine `perspectiveMatrix()`-Funktion, die die Perspektivprojektionsmatrix berechnet.

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

Die vier Parameter in dieser Funktion sind:

- `fieldOfViewInRadians`
  - : Ein Winkel, angegeben in Radiant, der angibt, wie viel von der Szene für den Betrachter auf einmal sichtbar ist. Der größere die Zahl ist, desto mehr ist durch die Kamera sichtbar. Die Geometrie an den Rändern wird immer mehr verzerrt, ähnlich wie bei einem Weitwinkelobjektiv. Wenn das Sichtfeld größer ist, werden die Objekte normalerweise kleiner. Wenn das Sichtfeld kleiner ist, kann die Kamera immer weniger von der Szene sehen. Die Objekte sind viel weniger durch die Perspektive verzerrt und die Objekte scheinen viel näher an der Kamera zu sein.
- `aspectRatio`
  - : Verhältnis von Breite zu Höhe der Szene. In diesen Beispielen ist das das Verhältnis der Breite des Fensters zur Höhe des Fensters. Die Einführung dieses Parameters löst schließlich das Problem, dass das Modell verzerrt wird, wenn die Leinwand neu skaliert und umgeformt wird.
- `nearClippingPlaneDistance`
  - : Eine positive Zahl, die den Abstand in den Bildschirm zu einer Ebene angibt, die senkrecht zum Boden steht, näher als der alles weggeschnitten wird. Dies wird in Clippingraum auf -1 abgebildet und sollte nicht auf 0 gesetzt werden.
- `farClippingPlaneDistance`
  - : Eine positive Zahl, die den Abstand zu der Ebene angibt, über die hinaus Geometrie abgeschnitten wird. Dies wird in Clippingraum auf 1 abgebildet. Dieser Wert sollte in einem angemessenen Abstand zur Geometrie gehalten werden, um Präzisionsfehler beim Rendern zu vermeiden.

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

Der Shader-Code ist identisch zum vorherigen Beispiel:

```js
gl_Position = projection * model * vec4(position, 1.0);
```

Zusätzlich (nicht gezeigt) wurden die Positions- und Skalierungs-Matrizen des Modells geändert, um es aus dem Clippingraum heraus und in das größere Koordinatensystem zu bringen.

### Die Ergebnisse

[Auf JSFiddle ansehen](https://jsfiddle.net/tatumcreative/Lzxw7e1q/)

![Eine echte Perspektivmatrix](part6.png)

### Übungen

- Experimentieren Sie mit den Parametern der Perspektivprojektionsmatrix und der Modellmatrix.
- Ersetzen Sie die Perspektivprojektionsmatrix durch die [Orthographieprojektion](https://de.wikipedia.org/wiki/Orthographie). Im gemeinsamen Code von MDN WebGL finden Sie `MDN.orthographicMatrix()`. Diese kann die `MDN.perspectiveMatrix()`-Funktion in `CubeDemo.prototype.computePerspectiveMatrix()` ersetzen.

## View-Matrix

Während einige Grafikbibliotheken eine virtuelle Kamera haben, die beim Erstellen einer Szene positioniert und ausgerichtet werden kann, hat OpenGL (und damit WebGL) keine. Hier kommt die **View-Matrix** ins Spiel. Ihre Aufgabe ist es, die Objekte in der Szene so zu übersetzen, zu rotieren und zu skalieren, dass sie relativ zum Betrachter gegebenen dessen Position und Orientierung an der richtigen Stelle positioniert sind.

### Eine Kamera simulieren

Dies macht die Nutzung eines der grundlegenden Aspekte von Einsteins spezieller Relativitätstheorie: das Prinzip der Bezugssysteme und relativen Bewegung sagt, dass Sie aus der Sicht eines Betrachters die Position und Ausrichtung des Betrachters simulieren können, indem Sie die entgegengesetzte Änderung auf die Objekte in der Szene anwenden. Auf beide Arten erscheint das Ergebnis für den Betrachter identisch.

Betrachten Sie ein Quadrat, das auf einem Tisch sitzt und eine Kamera, die einen Meter entfernt auf dem Tisch ruht und auf das Quadrat zeigt, dessen Vorderseite zur Kamera zeigt. Betrachten Sie dann, die Kamera vom Quadrat weg zu bewegen, bis es zwei Meter entfernt ist (indem ein Meter zur Z-Position der Kamera hinzugefügt wird), und dann sie 10 Zentimeter nach links zu schieben. Das Quadrat entfernt sich von der Kamera in dieser Menge und gleitet leicht nach rechts, so dass es für die Kamera kleiner erscheint und eine kleine Menge seiner linken Seite der Kamera zeigt.

Setzen wir nun die Szene zurück, platzieren das Quadrat wieder an seinen Ausgangspunkt, mit der Kamera zwei Meter von ihm entfernt und direkt auf das Quadrat gerichtet. Diesmal jedoch ist die Kamera auf dem Tisch fixiert und kann nicht bewegt oder gedreht werden. Das ist, wie das Arbeiten in WebGL ist. Wie simulieren wir also die Bewegung der Kamera durch den Raum?

Stattdessen bewegen wir die Kamera rückwärts und nach links, wir wenden die Umkehrtransformation auf das Quadrat an: Wir bewegen das _Quadrat_ um einen Meter rückwärts und dann 10 Zentimeter nach rechts. Das Ergebnis ist aus Sicht der beiden Objekte identisch.

Der letzte Schritt in all dem ist die Erstellung der **View-Matrix**, die die Objekte in der Szene so transformiert, dass sie positioniert werden, um die aktuelle Position und Orientierung der Kamera zu simulieren. Unser Code, wie er steht, kann den Würfel im Weltraum bewegen und alles projizieren, um Perspektive zu haben, aber wir können immer noch nicht die Kamera bewegen.

Stellen Sie sich vor, einen Film mit einer physischen Kamera zu drehen. Sie haben die Freiheit, die Kamera im Wesentlichen überall zu platzieren, und die Kamera in jede Richtung zu richten, die Sie wählen. Um dies in 3D-Grafiken zu simulieren, verwenden wir eine View-Matrix, um die Position und Rotation dieser physischen Kamera zu simulieren.

Im Gegensatz zur Modellmatrix, die die Modellvertullen direkt transformiert, bewegt die View-Matrix eine abstrakte Kamera herum. In Wirklichkeit bewegt der Vertex-Shader immer noch nur die Modelle, während die "Kamera" an Ort und Stelle bleibt. Damit dies richtig funktioniert, muss die Umkehrung der Transformationsmatrix verwendet werden. Die inverse Matrix kehrt im Wesentlichen eine Transformation um, sodass wenn wir die Kamerasicht nach vorne bewegen, die inverse Matrix die Objekte in der Szene zurück bewegt.

Die folgende `computeViewMatrix()`-Methode animiert die View-Matrix, indem sie hinein und hinaus und nach links und rechts bewegt wird.

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

Der Shader verwendet jetzt drei Matrizen.

```glsl
gl_Position = projection * view * model * vec4(position, 1.0);
```

Nach diesem Schritt wird die GPU-Pipeline die aus dem Bereich liegenden Vertizes abschneiden und das Modell zur Fragment-Shader zur Rasterung senden.

### Die Ergebnisse

[Auf JSFiddle ansehen](https://jsfiddle.net/tatumcreative/86fd797g/)

![Die View-Matrix](part7.png)

### Die Koordinatensysteme in Beziehung setzen

Zu diesem Zeitpunkt wäre es nützlich, einen Schritt zurückzutreten und die verschiedenen Koordinatensysteme, die wir verwenden, zu betrachten und zu benennen. Erstens sind die Vertizes des Würfels in **Objektraum** definiert. Um das Modell in der Szene zu bewegen. Diese Vertizes müssen mithilfe der Modellmatrix in **Weltraum** konvertiert werden.

Objektraum → Modellmatrix → Weltraum

Die Kamera hat noch nichts gemacht und die Punkte müssen wieder bewegt werden. Derzeit sind sie im Weltraum, aber sie müssen in **Ansichtsraum** (unter Verwendung der View-Matrix) bewegt werden, um die Kameraplatzierung darzustellen.

Weltraum → View-Matrix → Ansichtsraum

Schließlich muss eine **Projektion** (in unserem Fall die Perspektivprojektionsmatrix) hinzugefügt werden, um die Weltkoordinaten in Clippingraumkoordinaten abzubilden.

Ansichtsraum → Projektionsmatrix → Clippingraum

### Übung

- Bewegen Sie die Kamera in der Szene herum.
- Fügen Sie ein paar Rotationsmatrizen zur View-Matrix hinzu, um sich umzusehen.
- Schließlich verfolgen Sie die Position der Maus. Verwenden Sie 2 Rotationsmatrizen, um die Kamera nach oben und unten schauen zu lassen, basierend darauf, wo sich die Maus des Benutzers auf dem Bildschirm befindet.

## Siehe auch

- [WebGL](/de/docs/Web/API/WebGL_API)
- [3D Projektions](https://de.wikipedia.org/wiki/3D-Projektion)
