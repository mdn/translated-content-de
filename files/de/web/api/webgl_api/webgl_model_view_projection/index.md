---
title: WebGL-Model-View-Projektion
slug: Web/API/WebGL_API/WebGL_model_view_projection
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{DefaultAPISidebar("WebGL")}}

Dieser Artikel untersucht, wie Daten in einem [WebGL](/de/docs/Web/API/WebGL_API)-Projekt in die richtigen Räume projiziert werden, um sie auf dem Bildschirm anzuzeigen. Es wird davon ausgegangen, dass Sie grundlegende Kenntnisse der Matrixmathematik mit Translations-, Skalierungs- und Rotationsmatrizen haben. Es werden die drei Kernmatrizen erläutert, die typischerweise beim Erstellen einer 3D-Szene verwendet werden: die Modellmatrix, die Ansichtsmatrix und die Projektionsmatrix.

> [!NOTE]
> Dieser Artikel ist auch als [MDN Content Kit](https://github.com/gregtatum/mdn-model-view-projection) verfügbar. Es verwendet auch eine Sammlung von [Hilfsfunktionen](https://github.com/gregtatum/mdn-webgl), die unter dem globalen Objekt `MDN` verfügbar sind.

## Die Modell-, Ansicht- und Projektionsmatrizen

Individuelle Transformationen von Punkten und Polygonen im Raum in WebGL werden durch die grundlegenden Transformationsmatrizen wie Translation, Skalierung und Rotation durchgeführt. Diese Matrizen können kombiniert und in speziellen Anwendungen gruppiert werden, um sie für das Rendern komplizierter 3D-Szenen nützlich zu machen. Diese zusammengefassten Matrizen verschieben letztendlich die ursprünglichen Modelldaten in einen speziellen Koordinatenraum namens **Clip-Raum**. Dies ist ein 2 Einheiten breiter Würfel, zentriert bei (0,0,0), mit Ecken, die von (-1,-1,-1) bis (1,1,1) reichen. Dieser Clip-Raum wird in einen 2D-Raum komprimiert und in ein Bild rasterisiert.

Die erste unten besprochene Matrix ist die **Modellmatrix**, die definiert, wie Sie Ihre ursprünglichen Modelldaten nehmen und sie im 3D-Weltraum bewegen. Die **Projektionsmatrix** wird verwendet, um die Weltkoordinaten in Clip-Koordinaten zu konvertieren. Eine häufig verwendete Projektionsmatrix, die **perspektivische Projektionsmatrix**, wird verwendet, um die _Effekte_ einer typischen Kamera nachzuahmen, die als Stellvertreter für den Betrachter in der 3D-virtuellen Welt dient. Die **Ansichtsmatrix** ist dafür verantwortlich, die Objekte in der Szene zu bewegen, um die Position der Kamera zu simulieren, wodurch verändert wird, was der Betrachter gerade sehen kann.

Die folgenden Abschnitte bieten einen detaillierten Einblick in die Ideen hinter und die Implementierung der Modell-, Ansicht- und Projektionsmatrizen. Diese Matrizen sind zentral, um Daten auf dem Bildschirm zu verschieben, und sind Konzepte, die über einzelne Frameworks und Engines hinausgehen.

## Clip-Raum

In einem WebGL-Programm werden Daten typischerweise mit einem eigenen Koordinatensystem auf die GPU hochgeladen und dann transformiert der Vertex-Shader diese Punkte in ein spezielles Koordinatensystem, das als **Clip-Raum** bekannt ist. Alle Daten, die außerhalb des Clip-Raums liegen, werden abgeschnitten und nicht gerendert. Wenn jedoch ein Dreieck die Grenze dieses Raums überschreitet, wird es in neue Dreiecke aufgeteilt, und nur die Teile der neuen Dreiecke, die sich im Clip-Raum befinden, werden beibehalten.

![Ein 3D-Diagramm, das den Clip-Raum in WebGL zeigt.](clip_space_graph.svg)

Die obige Grafik ist eine Visualisierung des Clip-Raums, in den alle Punkte passen müssen. Es ist ein Würfel mit zwei Einheiten auf jeder Seite, mit einer Ecke bei (-1,-1,-1) und der gegenüberliegenden Ecke bei (1,1,1). Der Mittelpunkt des Würfels ist der Punkt (0,0,0). Dieses 8 Kubikmeter große Koordinatensystem, das vom Clip-Raum verwendet wird, ist als normalisierte Gerätekoordinaten (NDC) bekannt. Möglicherweise stoßen Sie während der Recherche und Arbeit mit WebGL-Code gelegentlich auf diesen Begriff.

Für diesen Abschnitt werden wir unsere Daten direkt in das Clip-Raum-Koordinatensystem einfügen. Normalerweise werden Modelldaten verwendet, die sich in einem beliebigen Koordinatensystem befinden und dann mit einer Matrix transformiert werden, um die Modellkoordinaten in das Clip-Raum-Koordinatensystem zu überführen. Für dieses Beispiel ist es am einfachsten zu veranschaulichen, wie der Clip-Raum funktioniert, indem Modellkoordinatenwerte verwendet werden, die von (-1,-1,-1) bis (1,1,1) reichen. Der unten stehende Code erzeugt 2 Dreiecke, die ein Quadrat auf dem Bildschirm zeichnen werden. Die Z-Tiefe in den Quadraten bestimmt, was oben gezeichnet wird, wenn die Quadrate denselben Raum teilen. Kleinere Z-Werte werden über größeren Z-Werten gerendert.

### WebGLBox-Beispiel

Dieses Beispiel erstellt ein benutzerdefiniertes `WebGLBox`-Objekt, das ein 2D-Rechteck auf dem Bildschirm zeichnet.

> [!NOTE]
> Der Code für jedes WebGLBox-Beispiel ist in diesem [GitHub-Repo](https://github.com/gregtatum/mdn-model-view-projection/tree/master/lessons) verfügbar und nach Abschnitt organisiert. Zusätzlich gibt es einen JSFiddle-Link am Ende jedes Abschnitts.

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

Die Shader sind die Codefragmente, die in GLSL geschrieben sind und unsere Datenpunkte nehmen und letztendlich auf den Bildschirm rendern. Der Einfachheit halber sind diese Shader in einem {{htmlelement("script")}}-Element gespeichert, das über die benutzerdefinierte Funktion `MDN.createWebGLProgramFromIds()` in das Programm eingebunden wird. Diese Funktion ist Teil einer Sammlung von [Hilfsfunktionen](https://github.com/gregtatum/mdn-webgl), die für diese Tutorials geschrieben wurden und nicht im Detail hier erklärt wird. Diese Funktion übernimmt die Grundlagen, um etwas GLSL-Quellcode zu einem WebGL-Programm zu erstellen und zu kompilieren. Die Funktion benötigt drei Parameter – den Kontext, in dem das Programm gerendert werden soll, die ID des {{htmlelement("script")}}-Elements, das den Vertex-Shader enthält, und die ID des {{htmlelement("script")}}-Elements, das den Fragment-Shader enthält. Der Vertex-Shader positioniert die Vertices, und der Fragment-Shader färbt jedes Pixel.

Werfen Sie zuerst einen Blick auf den Vertex-Shader, der die Vertices auf dem Bildschirm bewegen wird:

```glsl
// The individual position vertex
attribute vec3 position;

void main() {
  // the gl_Position is the final position in clip space after the vertex shader modifies it
  gl_Position = vec4(position, 1.0);
}
```

Um die Daten tatsächlich in Pixel zu rasterisieren, bewertet der Fragment-Shader alles auf pro Pixel Basis und legt eine Farbe fest. Die GPU ruft die Shader-Funktion für jedes Pixel auf, das gerendert werden muss; die Aufgabe des Shaders ist es, die Farbe für dieses Pixel zurückzugeben.

```glsl
precision mediump float;
uniform vec4 color;

void main() {
  gl_FragColor = color;
}
```

Mit diesen Einstellungen ist es nun an der Zeit, direkt mit Clip-Raum-Koordinaten auf den Bildschirm zu zeichnen.

```js
const box = new WebGLBox();
```

Zeichnen Sie zuerst ein rotes Rechteck in der Mitte.

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

Zeichnen Sie als nächstes ein grünes Rechteck oben und hinter dem roten Rechteck.

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

Schließlich, um zu demonstrieren, dass tatsächlich ein Clipping stattfindet, wird dieses Rechteck nicht gezeichnet, weil es sich vollständig außerhalb des Clip-Raums befindet. Die Tiefe liegt außerhalb des Bereichs von -1,0 bis 1,0.

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

[Anzeigen auf JSFiddle](https://jsfiddle.net/tatumcreative/mff99yu5/)

![Die Ergebnisse des Zeichnens im Clip-Raum mit WebGL.](part1.png)

#### Übung

Eine hilfreiche Übung an diesem Punkt ist es, die Rechtecke im Clip-Raum zu bewegen, indem der Code variiert wird, um ein Gefühl dafür zu bekommen, wie Punkte im Clip-Raum abgeschnitten und bewegt werden. Versuchen Sie, ein Bild wie ein kantiges Smiley-Gesicht mit einem Hintergrund zu zeichnen.

## Homogene Koordinaten

Die Hauptzeile des vorherigen Clip-Raum-Vertex-Shaders enthielt diesen Code:

```js
gl_Position = vec4(position, 1.0);
```

Die `position`-Variable wurde in der `draw()`-Methode definiert und als Attribut an den Shader übergeben. Dies ist ein dreidimensionaler Punkt, aber die `gl_Position`-Variable, die letztlich durch die Pipeline weitergegeben wird, ist tatsächlich vierdimensional — statt `(x, y, z)` ist es `(x, y, z, w)`. Nach `z` gibt es keinen Buchstaben mehr, daher wird diese vierte Dimension konventionell `w` genannt. Im obigen Beispiel ist die `w`-Koordinate auf 1.0 gesetzt.

Die offensichtliche Frage ist: „Warum die zusätzliche Dimension?“ Es stellt sich heraus, dass diese Addition viele schöne Techniken zur Manipulation von 3D-Daten ermöglicht. Diese hinzugefügte Dimension führt das Konzept der Perspektive in das Koordinatensystem ein; mit ihr können wir 3D-Koordinaten in einem 2D-Raum abbilden — dadurch wird es möglich, dass zwei parallele Linien in der Ferne konvergieren. Der Wert von `w` wird als Divisor für die anderen Komponenten der Koordinate verwendet, so dass die eigentlichen Werte von `x`, `y` und `z` als `x/w`, `y/w` und `z/w` berechnet werden (und `w` wird dann auch `w/w`, was 1 ergibt).

Ein dreidimensionaler Punkt wird in einem typischen kartesischen Koordinatensystem definiert. Die hinzugefügte vierte Dimension ändert diesen Punkt in eine [homogene Koordinate](https://en.wikipedia.org/wiki/Homogeneous_coordinates). Sie repräsentiert immer noch einen Punkt im 3D-Raum und es kann leicht demonstriert werden, wie dieser Koordinatentyp durch ein Paar einfacher Funktionen konstruierbar ist.

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

Wie zuvor erwähnt und in den Funktionen oben gezeigt, teilt die `w`-Komponente die `x`-, `y`- und `z`-Komponenten. Wenn die `w`-Komponente eine von null verschiedene reelle Zahl ist, dann wird die homogene Koordinate leicht wieder in einen normalen Punkt im kartesischen Raum übersetzt. Was passiert jedoch, wenn die `w`-Komponente null ist? In JavaScript wäre der zurückgegebene Wert wie folgt.

```js
homogeneousToCartesian([10, 4, 5, 0]);
```

Dies ergibt: `[Infinity, Infinity, Infinity]`.

Diese homogene Koordinate repräsentiert einen Punkt im Unendlichen. Dies ist eine praktische Möglichkeit, einen Strahl in eine bestimmte Richtung vom Ursprung aus darzustellen. Zusätzlich zu einem Strahl könnte es auch als Darstellung eines Richtungsvektors gedacht werden. Wenn diese homogene Koordinate gegen eine Matrix mit einer Translation multipliziert wird, wird die Translation effektiv entfernt.

Wenn Zahlen auf Computern extrem groß (oder extrem klein) sind, werden sie immer ungenauer, da es nur eine begrenzte Anzahl von Einsen und Nullen gibt, um sie darzustellen. Je mehr Operationen auf größeren Zahlen durchgeführt werden, desto mehr häufen sich die Fehler im Ergebnis. Durch die Division durch `w` kann effektiv die Präzision sehr großer Zahlen erhöht werden, indem mit zwei potenziell kleineren, weniger fehleranfälligen Zahlen gearbeitet wird.

Der letzte Vorteil der Verwendung homogener Koordinaten besteht darin, dass sie sehr gut zur Multiplikation gegen 4x4-Matrizen passen. Ein Vertex muss mindestens einer der Dimensionen einer Matrix entsprechen, um gegen sie multipliziert werden zu können. Die 4x4-Matrix kann verwendet werden, um eine Vielzahl nützlicher Transformationen zu kodieren. Tatsächlich verwendet die typische perspektivische Projektionsmatrix die Division durch die `w`-Komponente, um ihre Transformation zu erreichen.

Das Abschneiden von Punkten und Polygonen aus dem Clip-Raum erfolgt, bevor die homogenen Koordinaten wieder in kartesische Koordinaten (durch Division durch `w`) umgewandelt wurden. Dieser finale Raum ist als **normalisierte Gerätekoordinaten** oder NDC bekannt.

Um mit dieser Idee zu experimentieren, kann das vorherige Beispiel so modifiziert werden, dass die Verwendung der `w`-Komponente ermöglicht wird.

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

Dann verwendet der Vertex-Shader den hereinkommenden vierdimensionalen Punkt.

```glsl
attribute vec4 position;

void main() {
  gl_Position = position;
}
```

Erstens zeichnen wir ein rotes Rechteck in der Mitte, setzen aber W auf 0,7. Da die Koordinaten durch 0,7 geteilt werden, werden sie alle vergrößert.

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

Dieses letzte Rechteck wird nicht gezeichnet, da es sich außerhalb des Clip-Raums befindet. Die Tiefe liegt außerhalb des Bereichs von -1,0 bis 1,0.

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

![Die Ergebnisse der Verwendung homogener Koordinaten zum Bewegen der Rechtecke in WebGL.](part2.png)

### Übungen

- Experimentieren Sie mit diesen Werten, um zu sehen, wie sie das auf dem Bildschirm gerenderte Ergebnis beeinflussen. Beachten Sie, wie das zuvor abgeschnittene blaue Rechteck in den Bereich zurückgebracht wird, indem seine `w`-Komponente eingestellt wird.
- Erstellen Sie ein neues Rechteck, das sich außerhalb des Clip-Raums befindet und bringen Sie es durch Division durch `w` zurück.

## Modelltransformation

Punkte direkt in den Clip-Raum zu platzieren, ist nur von begrenztem Nutzen. In realen Anwendungen sind nicht alle Quellkoordinaten bereits in Clip-Raum-Koordinaten vorhanden. Daher müssen die Modelldaten und andere Koordinaten meistens in den Clip-Raum transformiert werden. Der bescheidene Würfel ist ein einfaches Beispiel, wie dies zu tun ist. Würfeldaten bestehen aus Eckpunktpositionen, den Farben der Würfelflächen und der Reihenfolge der Eckpunktpositionen, die die einzelnen Polygone bilden (in Gruppen von 3 Eckpunkten, um die Dreiecke zu konstruieren, die die Würfelflächen zusammensetzen). Die Positionen und Farben werden in GL-Puffern gespeichert, als Attribute an den Shader gesendet und dann individuell bearbeitet.

Schließlich wird eine einzelne Modellmatrix berechnet und festgelegt. Diese Matrix stellt die Transformationen dar, die an jedem Punkt des Modells durchgeführt werden, um es in den richtigen Raum zu verschieben und andere benötigte Transformationen auf jeden Punkt im Modell auszuführen. Dies gilt nicht nur für jeden Eckpunkt, sondern für jeden einzelnen Punkt auf jeder Fläche des Modells.

In diesem Fall wird für jeden Frame der Animation eine Reihe von Skalierungs-, Rotations- und Translationsmatrizen angewendet, um die Daten an die gewünschte Stelle im Clip-Raum zu verschieben. Der Würfel ist die Größe des Clip-Raums (-1,-1,-1) bis (1,1,1), daher muss er verkleinert werden, um nicht den gesamten Clip-Raum auszufüllen. Diese Matrix wird direkt an den Shader gesendet, nachdem sie vorher in JavaScript multipliziert wurde.

Das folgende Codebeispiel definiert eine Methode am `CubeDemo`-Objekt, die die Modellmatrix erstellt. Es verwendet benutzerdefinierte Funktionen, um Matrizen zu erstellen und zu multiplizieren, wie sie im [MDN WebGL](https://github.com/gregtatum/mdn-webgl) gemeinsam genutzten Code definiert sind. Die neue Funktion sieht so aus:

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

Um dies im Shader zu verwenden, muss es an einem einheitlichen Standort gesetzt werden. Die Standorte für die Uniformen werden im unten gezeigten `locations`-Objekt gespeichert:

```js
this.locations.model = gl.getUniformLocation(webglProgram, "model");
```

Und schließlich wird die Uniform an diesem Ort gesetzt. Damit wird die Matrix an die GPU übergeben.

```js
gl.uniformMatrix4fv(
  this.locations.model,
  false,
  new Float32Array(this.transforms.model),
);
```

Im Shader wird jeder Positions-Vektor zuerst in eine homogene Koordinate (ein `vec4`-Objekt) transformiert und dann mit der Modellmatrix multipliziert.

```glsl
gl_Position = model * vec4(position, 1.0);
```

> [!NOTE]
> In JavaScript erfordert die Matrixmultiplikation eine benutzerdefinierte Funktion, während sie im Shader in die Sprache mit dem einfachen \* Operator integriert ist.

### Die Ergebnisse

[Anzeigen auf JSFiddle](https://jsfiddle.net/tatumcreative/5jofzgsh/)

![Verwendung einer Modellmatrix](part3.png)

An dieser Stelle hat der `w`-Wert des transformierten Punktes immer noch den Wert 1.0. Der Würfel hat noch keine Perspektive. Der nächste Abschnitt wird dieses Setup verwenden und die `w`-Werte modifizieren, um eine Perspektive zu bieten.

### Übungen

- Verkleinern Sie das Rechteck mit der Skalierungsmatrix und positionieren Sie es an verschiedenen Orten innerhalb des Clip-Raums.
- Versuchen Sie, es außerhalb des Clip-Raums zu bewegen.
- Ändern Sie die Fenstergröße und beobachten Sie, wie das Rechteck seine Form ändert.
- Fügen Sie eine `rotateZ`-Matrix hinzu.

## Division durch W

Eine einfache Möglichkeit, etwas Perspektive auf unser Würfelmodell zu geben, besteht darin, die Z-Koordinate zu nehmen und sie in die `w`-Koordinate zu kopieren. Normalerweise beim Konvertieren eines kartesischen Punktes zu homogenem wird es zu `(x,y,z,1)`, aber wir werden es so einstellen, dass es sowas ist wie `(x,y,z,z)`. In Wirklichkeit wollen wir sicherstellen, dass z für sichtbare Punkte größer als 0 ist, daher werden wir es leicht modifizieren, indem wir den Wert zu `((1.0 + z) * scaleFactor)` ändern. Dadurch wird ein Punkt, der normalerweise im Clip-Raum ist (-1 bis 1), in einen Raum mehr wie (0 bis 1) verschoben, abhängig davon, wie der Skalierungsfaktor eingestellt ist. Der Skalierungsfaktor ändert den endgültigen `w`-Wert, um entweder insgesamt höher oder niedriger zu sein.

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

[Anzeigen auf JSFiddle](https://jsfiddle.net/tatumcreative/vk9r8h2c/)

![Das W-Komponente füllen und eine Projektion erstellen.](part4.png)

Sehen Sie das kleine dunkelblaue Dreieck? Das ist eine zusätzliche Fläche, die zu unserem Objekt hinzugefügt wurde, da die Drehung unseres Objekts dazu geführt hat, dass diese Ecke außerhalb des Clip-Raums verlängert wurde, was dazu führt, dass die Ecke abgeschnitten wird. Siehe [Perspektivische Projektionsmatrix](#perspektivische_projektionsmatrix) unten für eine Einführung, wie komplexere Matrizen verwendet werden können, um das Clipping zu kontrollieren und zu verhindern.

### Übung

Wenn das abstrakt klingt, öffnen Sie den Vertex-Shader und experimentieren Sie mit den Skalierungsfaktoren und beobachten Sie, wie es die Vertices näher an die Oberfläche schrumpft. Verändern Sie die `w`-Komponentenwerte für wirklich ungewöhnliche Darstellungen des Raums.

Im nächsten Abschnitt werden wir diesen Schritt des Kopierens von Z in die `w`-Schlitz nehmen und es mit einer Matrix umsetzen.

## Einfache Projektion

Der letzte Schritt des Ausfüllens der `w`-Komponente kann tatsächlich mit einer einfachen Matrix erreicht werden. Beginnen Sie mit der Identitätsmatrix:

```js
const identity = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];

MDN.multiplyPoint(identity, [2, 3, 4, 1]);
//> [2, 3, 4, 1]
```

Dann verschieben Sie die 1 der letzten Spalte einen Platz nach oben.

```js
const copyZ = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0];

MDN.multiplyPoint(copyZ, [2, 3, 4, 1]);
//> [2, 3, 4, 4]
```

In dem letzten Beispiel haben wir jedoch `(z + 1) * scaleFactor` durchgeführt:

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

Wenn wir es weiter aufschlüsseln, können wir sehen, wie dies funktioniert:

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

Dann, unter Herausrechnung des Skalierungsfaktors, erhalten wir dies:

```js
w = (4 + 1) * scaleFactor;
```

Das ist genau das gleiche `(z + 1) * scaleFactor`, das wir im vorherigen Beispiel verwendet haben.

Im Box-Demo wird eine zusätzliche `computeSimpleProjectionMatrix()`-Methode hinzugefügt. Diese wird in der `draw()`-Methode aufgerufen und der Skalierungsfaktor wird an sie übergeben. Das Ergebnis sollte mit dem letzten Beispiel identisch sein:

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

Obwohl das Ergebnis identisch ist, ist der wichtige Schritt hier im Vertex-Shader. Anstatt den Vertex direkt zu modifizieren, wird er mit einer zusätzlichen **[Projektionsmatrix](#the_model_view_and_projection_matrices)** multipliziert, die (wie der Name schon sagt) 3D-Punkte auf eine 2D-Zeichenoberfläche projiziert:

```glsl
// Make sure to read the transformations in reverse order
gl_Position = projection * model * vec4(position, 1.0);
```

### Die Ergebnisse

[Anzeigen auf JSFiddle](https://jsfiddle.net/tatumcreative/zwyLLcbw/)

![Eine einfache Projektionsmatrix](part5.png)

## Der Sichtfrustum

Bevor wir dazu übergehen, zu erläutern, wie eine Perspektivprojektionmatrix berechnet wird, müssen wir das Konzept des **[Sichtfrustums](https://en.wikipedia.org/wiki/Viewing_frustum)** (auch bekannt als **Blickfeldfrustum**) einführen. Dies ist der Raumteil, dessen Inhalt dem Benutzer zurzeit sichtbar ist. Es ist der 3D-Raumteil, der durch das Sichtfeld und die Abstände definiert wird, die die nächste und entfernteste zu rendernde Inhalte bestimmen.

Beim Rendern müssen wir bestimmen, welche Polygone gerendert werden müssen, um die Szene darzustellen. Das ist es, was das Sichtfrustum definiert. Aber was ist überhaupt ein Frustum?

Ein [Frustum](https://en.wikipedia.org/wiki/Frustum) ist der 3D-Körper, der entsteht, wenn man irgendeinen Körper nimmt und zwei Abschnitte davon mit zwei parallelen Ebenen abschneidet. Stellen Sie sich unsere Kamera vor, die einen Bereich betrachtet, der sofort vor ihrer Linse beginnt und sich in die Ferne erstreckt. Der sichtbare Bereich ist eine vierseitige Pyramide mit ihrem Scheitelpunkt an der Linse, ihren vier Seiten, die den Umfang ihres peripheren Sichtbereichs angeben, und ihrer Basis in der größten Entfernung, die sie sehen kann, so:

![Eine Darstellung des gesamten Sehbereichs einer Kamera. Dieser Bereich ist eine vierseitige Pyramide mit ihrer Spitze an der Linse und ihrer Basis an der maximal entfernten Anzeigedistanz der Welt.](fullcamerafov.svg)

Wenn wir dies verwenden, um die Polygone zu bestimmen, die wir pro Frame rendern müssen, müsste unsere Render-Engine jedes Polygon innerhalb dieser Pyramide rendern, bis hin ins Unendliche, dazu auch Polygone, die sehr nahe an der Linse sind — wahrscheinlich zu nah, um nützlich zu sein (und sicherlich einschließlich Dingen, die so nah sind, dass ein echter Mensch nicht darauf fokussieren könnte).

Also der erste Schritt zur Reduzierung der Anzahl von Polygonen, die wir berechnen und rendern müssen, besteht darin, diese Pyramide in das Sichtfrustum zu verwandeln. Die beiden Ebenen, die wir verwenden werden, um Eckpunkte wegzuschneiden und somit die Polygonanzahl zu reduzieren, sind die **nahe Schnittebene** und die **ferne Schnittebene**.

In WebGL werden die nahen und fernen Schnittebenen bestimmt, indem der Abstand von der Linse zum nächsten Punkt auf einer Ebene angegeben wird, die zu der Blickrichtung des Betrachters senkrecht steht. Alles, das näher an der Linse als die nahe Schnittebene oder weiter von ihr entfernt als die ferne Schnittebene ist, wird entfernt. Dies ergibt das Sichtfrustum, das so aussieht:

![Eine Darstellung des Sichtfrustums der Kamera; die nahen und fernen Ebenen haben einen Teil des Volumens entfernt, wodurch die Anzahl der Polygone reduziert wird.](camera_view_frustum.svg)

Der Satz von Objekten, der für jeden Frame gerendert werden soll, wird im Wesentlichen durch den Ausgangssatz aller Objekte in der Szene erstellt. Dann werden alle Objekte, die _vollständig_ außerhalb des Sichtfrustums liegen, entfernt. Danach werden Objekte, die teilweise außerhalb des Sichtfrustums liegen, durch Wegschneiden aller Polygone, die vollständig außerhalb des Frustums liegen, und durch Ersetzen der Polygone, die außerhalb des Frustums herausragen, so dass sie es nicht mehr verlassen, geschnitten.

Nachdem das getan wurde, haben wir die größte Menge von Polygonen, die vollständig innerhalb des Sichtfrustums liegen. Diese Liste wird normalerweise weiter reduziert durch Prozesse wie [Backface-Culling](https://en.wikipedia.org/wiki/Back-face_culling) (Entfernen von Polygonen, deren Rückseite zur Kamera zeigt) und Okklusions-Culling durch [Bestimmung der verborgenen Flächen](https://en.wikipedia.org/wiki/Hidden-surface_determination) (Entfernen von Polygonen, die nicht gesehen werden können, weil sie vollständig von näher an der Linse befindlichen Polygonen blockiert sind).

## Perspektivische Projektionsmatrix

Bis zu diesem Punkt haben wir unser eigenes 3D-Rendering-Setup Stück für Stück aufgebaut. Der aktuelle Code, wie wir ihn aufgebaut haben, hat jedoch einige Probleme. Zum einen verzerrt er, wann immer wir unser Fenster in der Größe ändern. Ein weiteres Problem ist, dass unsere einfache Projektion keine große Bandbreite an Werten für die Szenendaten handhaben kann. Die meisten Szenen funktionieren nicht im Clip-Raum. Es wäre hilfreich, festzulegen, welcher Abstand für die Szene relevant ist, um keine Präzision beim Konvertieren der Zahlen zu verlieren. Schließlich ist es sehr hilfreich, eine feine Kontrolle darüber zu haben, welche Punkte innerhalb und außerhalb des Clip-Raums platziert werden. In den vorherigen Beispielen geraten die Ecken des Würfels gelegentlich in den Clipping-Bereich.

Die **perspektivische Projektionsmatrix** ist eine Art Projektionsmatrix, die all diese Anforderungen erfüllt. Die Mathematik wird dabei etwas komplexer und wird in diesen Beispielen nicht vollständig erklärt. Kurz gesagt, sie kombiniert die Division durch `w` (wie in den vorherigen Beispielen) mit einigen genialen Manipulationen basierend auf [ähnlichen Dreiecken](https://en.wikipedia.org/wiki/Similarity_%28geometry%29). Wenn Sie eine vollständige Erklärung der dahinterstehenden Mathematik lesen möchten, müssen Sie sich einige der folgenden Links ansehen:

- [OpenGL-Projektionsmatrix](https://www.songho.ca/opengl/gl_projectionmatrix.html)
- [Perspektivische Projektion](https://ogldev.org/)
- [Versuch, die Mathematik hinter der perspektivischen Projektionsmatrix in WebGL zu verstehen](https://stackoverflow.com/questions/28286057/trying-to-understand-the-math-behind-the-perspective-matrix-in-webgl/28301213#28301213)

Ein wichtiger Hinweis zur perspektivischen Projektionsmatrix, die unten verwendet wird, ist, dass sie die z-Achse umdreht. Im Clip-Raum geht `z+` vom Betrachter weg, während bei dieser Matrix `z` zum Betrachter hingezogen wird.

Der Grund für das Umdrehen der z-Achse ist, dass das Clip-Raum-Koordinatensystem ein linkshändiges Koordinatensystem ist (worin die z-Achse vom Betrachter weg und in den Bildschirm zeigt), während die Konvention in Mathematik, Physik und 3D-Modellierung sowie für das Blick-/Augen-Koordinatensystem in OpenGL darin besteht, ein rechtshändiges Koordinatensystem zu verwenden (z-Achse zeigt aus dem Bildschirm zum Betrachter). Mehr dazu in den entsprechenden Wikipedia-Artikeln: [Kartesisches Koordinatensystem](https://en.wikipedia.org/wiki/Cartesian_coordinate_system#Orientation_and_handedness), [Rechte-Hand-Regel](https://en.wikipedia.org/wiki/Right-hand_rule).

Lassen Sie uns einen Blick auf eine `perspectiveMatrix()`-Funktion werfen, die die perspektivische Projektionsmatrix berechnet.

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

Die vier Parameter dieser Funktion sind:

- `fieldOfViewInRadians`
  - : Ein Winkel, angegeben in Radianten, der angibt, wie viel von der Szene dem Betrachter gleichzeitig sichtbar ist. Je größer die Zahl ist, desto mehr kann die Kamera sehen. Die Geometrie an den Rändern wird immer verzerrter, was einem Weitwinkelobjektiv entspricht. Wenn das Sichtfeld größer ist, werden die Objekte normalerweise kleiner. Wenn das Sichtfeld kleiner ist, kann die Kamera immer weniger in der Szene sehen. Die Objekte werden viel weniger von der Perspektive verzerrt und erscheinen der Kamera viel näher.
- `aspectRatio`
  - : Das Seitenverhältnis der Szene, das gleich ihrer Breite geteilt durch ihre Höhe ist. In diesen Beispielen ist das die Fensterbreite geteilt durch die Fensterhöhe. Die Einführung dieses Parameters löst endlich das Problem, dass das Modell verzerrt wird, wenn die Leinwand in der Größe angepasst und umgeformt wird.
- `nearClippingPlaneDistance`
  - : Eine positive Zahl, die den Abstand in den Bildschirm zu einer Ebene anzeigt, die senkrecht zum Boden ist, und näher an der alles weggeschnitten wird. Dies wird in Clip-Raum auf -1 abgebildet und sollte nicht auf 0 gesetzt werden.
- `farClippingPlaneDistance`
  - : Eine positive Zahl, die den Abstand zu der Ebene angibt, jenseits derer die Geometrie abgeschnitten wird. Dies wird in Clip-Raum auf 1 abgebildet. Dieser Wert sollte relativ nahe an der Entfernung der Geometrie gehalten werden, um zu verhindern, dass Präzisionsfehler beim Rendern auftreten.

In der neuesten Version der Box-Demo wurde die `computeSimpleProjectionMatrix()`-Methode durch die `computePerspectiveMatrix()`-Methode ersetzt.

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

Zusätzlich (nicht gezeigt) wurden die Positions- und Skalierungsmatrizen des Modells geändert, um es aus dem Clip-Raum in das größere Koordinatensystem zu bringen.

### Die Ergebnisse

[Anzeigen auf JSFiddle](https://jsfiddle.net/tatumcreative/Lzxw7e1q/)

![Eine echte Perspektivmatrix](part6.png)

### Übungen

- Experimentieren Sie mit den Parametern der perspektivischen Projektionsmatrix und der Modellmatrix.
- Ersetzen Sie die perspektivische Projektionsmatrix durch [orthographische Projektion](https://en.wikipedia.org/wiki/Orthographic_projection). Im MDN WebGL geteilten Code finden Sie die `MDN.orthographicMatrix()`. Diese kann die `MDN.perspectiveMatrix()`-Funktion in `CubeDemo.prototype.computePerspectiveMatrix()` ersetzen.

## Ansichtsmatrix

Während einige Grafikbibliotheken eine virtuelle Kamera haben, die beim Erstellen einer Szene positioniert und ausgerichtet werden kann, haben OpenGL (und damit WebGL) das nicht. Hier kommt die **Ansichtsmatrix** ins Spiel. Ihre Aufgabe ist es, die Objekte in der Szene zu übersetzen, zu drehen und zu skalieren, sodass sie relativ zum Betrachter basierend auf der Position und Ausrichtung des Betrachters an der richtigen Stelle positioniert sind.

### Simulation einer Kamera

Dies nutzt einen der grundlegenden Aspekte von Einsteins spezieller Relativitätstheorie: das Prinzip der Bezugsrahmen und der relativen Bewegung besagt, dass aus der Perspektive des Betrachters eine Änderung der Position und Ausrichtung des Betrachters simuliert werden kann, indem die entgegengesetzte Änderung an den Objekten in der Szene vorgenommen wird. So oder so erscheint das Ergebnis für den Betrachter identisch.

Denken Sie an eine Kiste auf einem Tisch und eine Kamera, die auf dem Tisch einen Meter entfernt steht und auf die Kiste zeigt, deren Vorderseite zur Kamera zeigt. Dann erwägen Sie, die Kamera von der Kiste weg zu bewegen, bis sie zwei Meter entfernt ist (indem Sie der Z-Position der Kamera einen Meter hinzufügen), und dann 10 Zentimeter nach links zu schieben. Die Kiste entfernt sich von der Kamera um diesen Betrag und verschiebt sich leicht nach rechts, wodurch sie kleiner erscheint und der Kamera eine kleine Menge ihrer linken Seite offenbart.

Lassen Sie uns nun die Szene zurücksetzen, wobei die Kiste an ihrem Ausgangspunkt positioniert ist, mit der Kamera zwei Meter von der Box entfernt und direkt darauf gerichtet. Dieses Mal jedoch ist die Kamera auf dem Tisch fixiert und kann nicht bewegt oder gedreht werden. Dies ist, wie das Arbeiten in WebGL ist. Also, wie simulieren wir das Bewegen der Kamera durch den Raum?

Anstatt die Kamera rückwärts und nach links zu bewegen, wenden wir die inverse Transformation an die Kiste an: wir bewegen die _Kiste_ einen Meter zurück und dann um 10 Zentimeter nach rechts. Das Ergebnis ist aus der Perspektive jedes der beiden Objekte identisch.

Der letzte Schritt bei all dem ist es, die **Ansichtsmatrix** zu erstellen, die die Objekte in der Szene so transformiert, dass sie so positioniert sind, dass die aktuelle Position und Ausrichtung der Kamera simuliert werden. Unser Code, wie er jetzt ist, kann den Würfel im Weltall bewegen und alles mit Perspektive projizieren, aber wir können die Kamera noch nicht bewegen.

Stellen Sie sich vor, Sie drehen einen Film mit einer physischen Kamera. Sie haben die Freiheit, die Kamera im Wesentlichen überall zu platzieren, wo Sie möchten, und die Kamera in die gewünschte Richtung zu richten. Um dies in 3D-Grafiken zu simulieren, verwenden wir eine Ansichtsmatrix, um die Position und die Rotation dieser physischen Kamera zu simulieren.

Im Gegensatz zur Modellmatrix, die die Modellvertex direkt transformiert, bewegt die Ansichtsmatrix eine abstrakte Kamera. In Wirklichkeit bewegt der Vertex-Shader jedoch nur die Modelle, während die "Kamera" bleibt an Ort und Stelle. Damit dies korrekt funktioniert, muss die inverse Transformationsmatrix verwendet werden. Die inverse Matrix kehrt im Wesentlichen eine Transformation um, sodass, wenn wir das Kamerabild vorwärts bewegen, die inverse Matrix die Objekte in der Szene zurückbewegt.

Die folgende `computeViewMatrix()` Methode animiert die Ansichtsmatrix, indem sie hinein- und heraus- und nach links und rechts bewegt wird.

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

Nach diesem Schritt clippt die GPU-Pipeline die außer Reichweite liegenden Vertizes und sendet das Modell zur Fragmentshader zur Rasterisierung.

### Die Ergebnisse

[Anzeigen auf JSFiddle](https://jsfiddle.net/tatumcreative/86fd797g/)

![Die Ansichtsmatrix](part7.png)

### Die Koordinatensysteme in Beziehung setzen

An diesem Punkt wäre es vorteilhaft, einen Schritt zurückzutreten und sich die verschiedenen Koordinatensysteme anzusehen und zu benennen, die wir verwenden. Zuerst werden die Eckpunkte des Würfels im **Modellraum** definiert. Um das Modell im Raum zu bewegen, müssen diese Eckpunkte durch Anwenden der Modellmatrix in den **Weltraum** umgewandelt werden.

Modellraum → Modellmatrix → Weltraum

Die Kamera hat noch nichts getan und die Punkte müssen erneut verschoben werden. Derzeit befinden sie sich im Weltraum, müssen jedoch in den **Ansichtsraum** verschoben werden (unter Verwendung der Ansichtsmatrix), um die Kameraplatzierung darzustellen.

Weltraum → Ansichtsmatrix → Ansichtsraum

Schließlich muss eine **Projektion** (in unserem Fall die perspektivische Projektionsmatrix) hinzugefügt werden, um die Weltkoordinaten in Clip-Raum-Koordinaten abzubilden.

Ansichtsraum → Projektionsmatrix → Clip-Raum

### Übungen

- Bewegen Sie die Kamera durch die Szene.
- Fügen Sie der Ansichtsmatrix einige Rotationsmatrizen hinzu, um sich umzusehen.
- Schließlich verfolgen Sie die Position der Maus. Verwenden Sie 2 Rotationsmatrizen, um die Kamera auf und ab basierend auf der Position der Benutzermaus auf dem Bildschirm anzuzeigen.

## Siehe auch

- [WebGL](/de/docs/Web/API/WebGL_API)
- [3D-Projektion](https://en.wikipedia.org/wiki/3D_projection)
