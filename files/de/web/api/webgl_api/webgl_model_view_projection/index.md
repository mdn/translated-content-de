---
title: WebGL Modell-Ansichts-Projektion
slug: Web/API/WebGL_API/WebGL_model_view_projection
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{DefaultAPISidebar("WebGL")}}

Dieser Artikel untersucht, wie Sie Daten in einem [WebGL](/de/docs/Web/API/WebGL_API) Projekt in die richtigen Räume projizieren, um sie auf dem Bildschirm anzuzeigen. Er setzt Kenntnisse der grundlegenden Matrizenmathematik mit Übersetzungs-, Skalierungs- und Rotationsmatrizen voraus. Er erklärt die drei Hauptmatrizen, die typischerweise beim Erstellen einer 3D-Szene verwendet werden: die Modell-, Ansichts- und Projektionsmatrizen.

> [!NOTE]
> Dieser Artikel ist auch als [MDN Content Kit](https://github.com/gregtatum/mdn-model-view-projection) verfügbar. Er verwendet auch eine Sammlung von [Utility-Funktionen](https://github.com/gregtatum/mdn-webgl), die unter dem globalen Objekt `MDN` verfügbar sind.

## Die Modell-, Ansichts- und Projektionsmatrizen

In WebGL werden individuelle Transformationen von Punkten und Polygonen im Raum durch grundlegende Transformationsmatrizen wie Übersetzung, Skalierung und Rotation gehandhabt. Diese Matrizen können zusammengefügt und in spezieller Weise gruppiert werden, um sie nützlich für das Rendern komplexer 3D-Szenen zu machen. Diese zusammengesetzten Matrizen bewegen die ursprünglichen Modelldaten letztlich in einen speziellen Koordinatenraum namens **Clip-Space**. Dies ist ein 2 Einheiten breiter Würfel, zentriert bei (0,0,0), mit Ecken, die von (-1,-1,-1) bis (1,1,1) reichen. Dieser Clip-Space wird in einen 2D-Raum komprimiert und in ein Bild gerastert.

Die erste weiter unten diskutierte Matrix ist die **Modellmatrix**, die definiert, wie Sie Ihre ursprünglichen Modelldaten in den 3D-Weltraum bewegen. Die **Projektionsmatrix** wird verwendet, um Weltkoordinaten in Clip-Space-Koordinaten umzurechnen. Eine häufig verwendete Projektionsmatrix, die **Perspektivprojektionsmatrix**, wird genutzt, um die _Effekte_ einer typischen Kamera nachzubilden, die als Stellvertreter für den Betrachter in der 3D-Virtualwelt dient. Die **Ansichtsmatrix** ist dafür verantwortlich, die Objekte in der Szene zu bewegen, um die Position der Kamera zu simulieren, wodurch verändert wird, was der Betrachter gerade sehen kann.

Die folgenden Abschnitte bieten einen detaillierten Einblick in die Ideen hinter und die Implementierung der Modell-, Ansichts- und Projektionsmatrizen. Diese Matrizen sind von zentraler Bedeutung, um Daten auf dem Bildschirm zu bewegen, und sie sind Konzepte, die über einzelne Frameworks und Engines hinausgehen.

## Clip-Space

In einem WebGL-Programm werden Daten typischerweise mit ihrem eigenen Koordinatensystem auf die GPU hochgeladen, und dann transformiert der Vertex-Shader diese Punkte in ein spezielles Koordinatensystem, das als **Clip-Space** bekannt ist. Jegliche Daten, die außerhalb des Clip-Spaces liegen, werden abgeschnitten und nicht gerendert. Wenn jedoch ein Dreieck die Grenze dieses Raumes überschneidet, wird es in neue Dreiecke zerlegt, und nur die Teile der neuen Dreiecke, die im Clip-Space sind, werden beibehalten.

![Ein 3D-Diagramm, das Clip-Space in WebGL zeigt.](clip_space_graph.svg)

Die obenstehende Grafik ist eine Visualisierung des Clip-Spaces, in den alle Punkte passen müssen. Es ist ein Würfel mit zwei Einheiten an jeder Seite, mit einer Ecke bei (-1,-1,-1) und der gegenüberliegenden Ecke bei (1,1,1). Der Mittelpunkt des Würfels ist der Punkt (0,0,0). Dieses 8 Kubikmeter große Koordinatensystem, das von Clip-Space verwendet wird, ist als normalisierte Gerätekoordinaten (NDC) bekannt. Sie könnten auf diesen Begriff stoßen, während Sie recherchieren und mit WebGL-Code arbeiten.

Für diesen Abschnitt werden wir unsere Daten direkt in das Clip-Space-Koordinatensystem einfügen. Normalerweise werden Modelldaten verwendet, die sich in einem beliebigen Koordinatensystem befinden, und dann wird ein Matrix-Transform verwendet, um die Modellkoordinaten in das Clip-Space-Koordinatensystem zu überführen. Für dieses Beispiel ist es am einfachsten zu illustrieren, wie Clip-Space funktioniert, indem Modellkoordinatenwerte im Bereich von (-1,-1,-1) bis (1,1,1) verwendet werden. Der unten stehende Code wird 2 Dreiecke erstellen, die ein Quadrat auf dem Bildschirm zeichnen. Die Z-Tiefe in den Quadraten bestimmt, was darüber gezeichnet wird, wenn die Quadrate denselben Raum teilen. Die kleineren Z-Werte werden über den größeren Z-Werten gerendert.

### WebGLBox Beispiel

Dieses Beispiel erstellt ein benutzerdefiniertes `WebGLBox` Objekt, das ein 2D-Box auf dem Bildschirm zeichnet.

> [!NOTE]
> Der Code für jedes WebGLBox-Beispiel ist in diesem [GitHub-Repository](https://github.com/gregtatum/mdn-model-view-projection/tree/master/lessons) verfügbar und ist nach Abschnitt organisiert. Zudem gibt es unten in jedem Abschnitt einen JSFiddle-Link.

#### WebGLBox Konstruktor

Der Konstruktor sieht folgendermaßen aus:

```js
function WebGLBox() {
  // Setup der Leinwand und des WebGL-Kontexts
  this.canvas = document.getElementById("canvas");
  this.canvas.width = window.innerWidth;
  this.canvas.height = window.innerHeight;
  this.gl = MDN.createContext(canvas);

  const gl = this.gl;

  // Setup eines WebGL-Programms, alles Teil des MDN-Objekts ist außerhalb
  // dieses Artikels definiert
  this.webglProgram = MDN.createWebGLProgramFromIds(
    gl,
    "vertex-shader",
    "fragment-shader",
  );
  gl.useProgram(this.webglProgram);

  // Speichere die Attribut- und Uniform-Lokationen
  this.positionLocation = gl.getAttribLocation(this.webglProgram, "position");
  this.colorLocation = gl.getUniformLocation(this.webglProgram, "color");

  // Weisen Sie WebGL an, die Tiefe beim Zeichnen zu testen, damit, wenn
  // ein Quadrat hinter einem anderen Quadrat liegt, es nicht gezeichnet wird
  gl.enable(gl.DEPTH_TEST);
}
```

#### WebGLBox zeichnen

Jetzt erstellen wir eine Methode, um ein Quadrat auf dem Bildschirm zu zeichnen.

```js
WebGLBox.prototype.draw = function (settings) {
  // Erstellen Sie einige Attributdaten; das sind die Dreiecke, die letztlich
  // auf den Bildschirm gezeichnet werden. Es gibt zwei, die ein Quadrat bilden.

  const data = new Float32Array([
    //Dreieck 1
    settings.left,
    settings.bottom,
    settings.depth,
    settings.right,
    settings.bottom,
    settings.depth,
    settings.left,
    settings.top,
    settings.depth,

    //Dreieck 2
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

  // Verwenden Sie WebGL, um dies auf den Bildschirm zu zeichnen.

  // Leistungsanmerkung: Jedes Mal ein neues Array-Buffer zu erstellen, ist langsam.
  // Diese Funktion dient nur zu Illustrationszwecken.

  const gl = this.gl;

  // Erstellen Sie einen Buffer und binden die Daten
  const buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);

  // Setup des Zeigers auf unsere Attributdaten (die Dreiecke)
  gl.enableVertexAttribArray(this.positionLocation);
  gl.vertexAttribPointer(this.positionLocation, 3, gl.FLOAT, false, 0, 0);

  // Setup der Farb-Uniform, die über alle Dreiecke hinweg geteilt wird
  gl.uniform4fv(this.colorLocation, settings.color);

  // Zeichne die Dreiecke auf den Bildschirm
  gl.drawArrays(gl.TRIANGLES, 0, 6);
};
```

Die Shader sind die Codefragmente, die in GLSL geschrieben sind und unsere Datenpunkte letztlich auf den Bildschirm rendern. Zur Bequemlichkeit sind diese Shader in einem {{htmlelement("script")}} Element gespeichert, das durch die benutzerdefinierte Funktion `MDN.createWebGLProgramFromIds()` in das Programm eingebracht wird. Diese Funktion ist Teil einer Sammlung von [Utility-Funktionen](https://github.com/gregtatum/mdn-webgl), die für diese Tutorials geschrieben wurden und hier nicht im Detail erklärt werden. Diese Funktion erledigt die Grundlagen der Aufnahme eines GLSL-Quellcodes und der Kompilierung in ein WebGL-Programm. Die Funktion benötigt drei Parameter — den Kontext, in dem das Programm gerendert werden soll, die ID des {{htmlelement("script")}} Elements, das den Vertex-Shader enthält, und die ID des {{htmlelement("script")}} Elements, das den Fragment-Shader enthält. Der Vertex-Shader positioniert die Vertices, und der Fragment-Shader färbt jedes Pixel.

Schauen Sie sich zunächst den Vertex-Shader an, der die Vertices auf dem Bildschirm verschiebt:

```glsl
// Der individuelle Positions-Vertex
attribute vec3 position;

void main() {
  // gl_Position ist die endgültige Position im Clip-Space, nachdem der Vertex-Shader sie modifiziert hat
  gl_Position = vec4(position, 1.0);
}
```

Als Nächstes, um die Daten tatsächlich in Pixel umzusetzen, bewertet der Fragment-Shader alles auf Pixelbasis und setzt eine einzelne Farbe. Die GPU ruft die Shader-Funktion für jedes Pixel auf, das gerendert werden muss; die Aufgabe des Shaders ist es, die Farbe für dieses Pixel zurückzugeben.

```glsl
precision mediump float;
uniform vec4 color;

void main() {
  gl_FragColor = color;
}
```

Mit diesen Einstellungen ist es an der Zeit, direkt unter Verwendung der Clip-Space-Koordinaten auf den Bildschirm zu zeichnen.

```js
const box = new WebGLBox();
```

Zuerst zeichnen wir ein rotes Quadrat in der Mitte.

```js
box.draw({
  top: 0.5, // x
  bottom: -0.5, // x
  left: -0.5, // y
  right: 0.5, // y

  depth: 0, // z
  color: [1, 0.4, 0.4, 1], // rot
});
```

Als Nächstes zeichnen wir ein grünes Quadrat oben und hinter dem roten Quadrat.

```js
box.draw({
  top: 0.9, // x
  bottom: 0, // x
  left: -0.9, // y
  right: 0.9, // y

  depth: 0.5, // z
  color: [0.4, 1, 0.4, 1], // grün
});
```

Schließlich wird zur Demonstration, dass tatsächlich ein Abschneiden erfolgt, dieses Quadrat nicht gezeichnet, da es sich vollständig außerhalb des Clip-Spaces befindet. Die Tiefe liegt außerhalb des Bereichs von -1.0 bis 1.0.

```js
box.draw({
  top: 1, // x
  bottom: -1, // x
  left: -1, // y
  right: 1, // y

  depth: -1.5, // z
  color: [0.4, 0.4, 1, 1], // blau
});
```

#### Die Ergebnisse

[Auf JSFiddle anzeigen](https://jsfiddle.net/tatumcreative/mff99yu5/)

![Die Ergebnisse des Zeichnens im Clip-Space unter Verwendung von WebGL.](part1.png)

#### Übung

Eine hilfreiche Übung an diesem Punkt ist es, die Quadrate im Clip-Space zu verschieben, indem Sie den Code variieren, um ein Gefühl dafür zu bekommen, wie Punkte abgeschnitten und im Clip-Space bewegt werden. Versuchen Sie, ein Bild wie ein kantiges Smiley-Gesicht mit einem Hintergrund zu zeichnen.

## Homogene Koordinaten

Die Hauptzeile des vorhergehenden Clip-Space-Vertex-Shaders enthielt diesen Code:

```js
gl_Position = vec4(position, 1.0);
```

Die Variable `position` wurde in der Methode `draw()` definiert und als Attribut an den Shader übergeben. Dies ist ein dreidimensionaler Punkt, aber die Variable `gl_Position`, die letztlich durch die Pipeline weitergeleitet wird, ist tatsächlich vierdimensional — anstatt `(x, y, z)` ist es `(x, y, z, w)`. Es gibt keinen Buchstaben nach `z`, daher wird diese vierte Dimension konventionell als `w` bezeichnet. Im obigen Beispiel wird die `w`-Koordinate auf 1.0 gesetzt.

Die offensichtliche Frage ist "warum die zusätzliche Dimension?" Es stellt sich heraus, dass diese Ergänzung viele schöne Techniken zum Verarbeiten von 3D-Daten ermöglicht. Diese zusätzliche Dimension führt die Vorstellung von Perspektive in das Koordinatensystem ein; mit ihr können wir 3D-Koordinaten in einen 2D-Raum projizieren—und somit zwei parallele Linien als in der Ferne sich schneidend darstellen. Der Wert von `w` wird als Divisor für die anderen Komponenten der Koordinate verwendet, sodass die tatsächlichen Werte von `x`, `y`, und `z` als `x/w`, `y/w`, und `z/w` (und `w` ist dann auch `w/w` und wird zu 1) berechnet werden.

Ein dreidimensionaler Punkt ist in einem typischen kartesischen Koordinatensystem definiert. Die hinzugefügte vierte Dimension verwandelt diesen Punkt in eine [homogene Koordinate](https://en.wikipedia.org/wiki/Homogeneous_coordinates). Sie stellt immer noch einen Punkt im 3D-Raum dar und es kann leicht gezeigt werden, wie diese Art von Koordinate durch ein Paar einfacher Funktionen konstruiert wird.

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

Wie bereits erwähnt und in den obigen Funktionen gezeigt, teilt die `w`-Komponente die `x`-, `y`- und `z`-Komponenten. Wenn die `w`-Komponente eine von null verschiedene reelle Zahl ist, lässt sich die homogene Koordinate leicht wieder in einen normalen Punkt im kartesischen Raum zurückübersetzen. Was passiert nun, wenn die `w`-Komponente null ist? In JavaScript würde der zurückgegebene Wert folgendermaßen lauten.

```js
homogeneousToCartesian([10, 4, 5, 0]);
```

Dies ergibt: `[Infinity, Infinity, Infinity]`.

Diese homogene Koordinate repräsentiert einen Punkt im Unendlichen. Dies ist eine praktische Möglichkeit, einen Strahl zu repräsentieren, der sich vom Ursprung in eine bestimmte Richtung erstreckt. Neben einem Strahl könnte es auch als Darstellung eines Richtungsvektors gedacht werden. Wenn diese homogene Koordinate mit einer Matrix multipliziert wird, die eine Übersetzung enthält, dann wird die Übersetzung effektiv herausgestrichen.

Wenn Zahlen auf Computern extrem groß (oder extrem klein) sind, beginnen sie, an Genauigkeit zu verlieren, weil es nur so viele Einsen und Nullen gibt, die zur Darstellung verwendet werden können. Je mehr Operationen mit größeren Zahlen durchgeführt werden, desto mehr Fehler sammeln sich im Ergebnis an. Beim Teilen durch `w` kann dies effektiv die Genauigkeit sehr großer Zahlen erhöhen, indem mit zwei potenziell kleineren, weniger fehleranfälligen Zahlen gearbeitet wird.

Der endgültige Vorteil der Verwendung homogener Koordinaten ist, dass sie sich sehr gut für die Multiplikation mit 4x4-Matrizen eignen. Ein Vertex muss mindestens eine der Dimensionen einer Matrix matchen, um gegen sie multipliziert werden zu können. Die 4x4-Matrix kann verwendet werden, um eine Vielzahl nützlicher Transformationen zu kodieren. Tatsächlich nutzt die typische Perspektivprojektionsmatrix die Division durch die `w`-Komponente, um ihre Transformation zu erreichen.

Das Abschneiden von Punkten und Polygonen aus Clip-Space erfolgt, bevor die homogenen Koordinaten wieder in kartesische umgewandelt wurden (durch Dividieren durch `w`). Dieser letzte Raum ist als **normalisierte Gerätekoordinaten** oder NDC bekannt.

Um mit dieser Idee zu beginnen, kann das vorherige Beispiel geändert werden, um die Verwendung der `w`-Komponente zu erlauben.

```js
//Definieren Sie die Dreiecke neu, um die W-Komponente zu verwenden
const data = new Float32Array([
  //Dreieck 1
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

  //Dreieck 2
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

Zuerst zeichnen wir ein rotes Quadrat in der Mitte, setzen aber W auf 0.7. Da die Koordinaten durch 0.7 geteilt werden, werden sie alle vergrößert.

```js
box.draw({
  top: 0.5, // y
  bottom: -0.5, // y
  left: -0.5, // x
  right: 0.5, // x
  w: 0.7, // w - vergrößert dieses Quadrat

  depth: 0, // z
  color: [1, 0.4, 0.4, 1], // rot
});
```

Nun zeichnen wir ein grünes Quadrat oben, verkleinern es jedoch, indem wir die w-Komponente auf 1.1 setzen

```js
box.draw({
  top: 0.9, // y
  bottom: 0, // y
  left: -0.9, // x
  right: 0.9, // x
  w: 1.1, // w - verkleinert dieses Quadrat

  depth: 0.5, // z
  color: [0.4, 1, 0.4, 1], // grün
});
```

Dieses letzte Quadrat wird nicht gezeichnet, da es sich außerhalb des Clip-Spaces befindet. Die Tiefe liegt außerhalb des Bereichs von -1.0 bis 1.0.

```js
box.draw({
  top: 1, // y
  bottom: -1, // y
  left: -1, // x
  right: 1, // x
  w: 1.5, // w - Bringen Sie dieses Quadrat in den Bereich

  depth: -1.5, // z
  color: [0.4, 0.4, 1, 1], // blau
});
```

### Die Ergebnisse

![Die Ergebnisse der Verwendung homogener Koordinaten zur Bewegung der Quadrate in WebGL.](part2.png)

### Übungen

- Spielen Sie mit diesen Werten, um zu sehen, wie sie das auf dem Bildschirm gerenderte Bild beeinflussen. Beachten Sie, wie das zuvor abgeschnittene blaue Quadrat durch das Setzen seiner w-Komponente wieder in den Bereich gebracht wird.
- Versuchen Sie, ein neues Quadrat zu erstellen, das sich außerhalb des Clip-Spaces befindet, und bringen Sie es durch Teilen durch w zurück in den Clip-Space.

## Modell-Transform

Das direkte Platzieren von Punkten im Clip-Space hat nur begrenzten Nutzen. In der Praxis haben Sie nicht alle Ihre Quellkoordinaten bereits in Clip-Space-Koordinaten. Die meiste Zeit müssen Sie die Modelldaten und andere Koordinaten in den Clip-Space transformieren. Ein einfacher Würfel ist ein einfaches Beispiel dafür, wie dies zu tun ist. Würfeldaten bestehen aus Vertex-Positionen, den Farben der Würfelflächen und der Reihenfolge der Vertex-Positionen, die die einzelnen Polygone bilden (in Gruppen von 3 Vertices, um die Dreiecke zu konstruieren, die die Würfelflächen zusammensetzen). Die Positionen und Farben werden in GL-Puffern gespeichert, als Attribute an den Shader gesendet und dann einzeln bearbeitet.

Schließlich wird eine einzelne Modellmatrix berechnet und festgelegt. Diese Matrix repräsentiert die Transformationen, die auf jeden Punkt, der das Modell bildet, ausgeführt werden müssen, um es in den richtigen Raum zu bewegen, und alle anderen erforderlichen Transformationen auf jeden Punkt im Modell auszuführen. Dies gilt nicht nur für jeden Vertex, sondern auch für jeden einzelnen Punkt auf jeder Oberfläche des Modells.

In diesem Fall, für jeden Frame der Animation, bewegt eine Serie von Skalierungs-, Rotations- und Übersetzungsmatrizen die Daten an den gewünschten Ort im Clip-Space. Der Würfel hat die Größe des Clip-Spaces (-1,-1,-1) bis (1,1,1), also muss er verkleinert werden, um nicht den gesamten Clip-Space zu füllen. Diese Matrix wird direkt an den Shader gesendet, nachdem sie zuvor in JavaScript multipliziert wurde.

Das folgende Codebeispiel definiert eine Methode im `CubeDemo`-Objekt, das die Modellmatrix erstellen wird. Es verwendet benutzerdefinierte Funktionen zum Erstellen und Multiplizieren von Matrizen, wie im [MDN WebGL](https://github.com/gregtatum/mdn-webgl) gemeinsamen Code definiert. Die neue Funktion sieht so aus:

```js
CubeDemo.prototype.computeModelMatrix = function (now) {
  //Skalierung um 50%
  const scale = MDN.scaleMatrix(0.5, 0.5, 0.5);

  // Leichte Neigung drehen
  const rotateX = MDN.rotateXMatrix(now * 0.0003);

  // Drehung entsprechend der Zeit
  const rotateY = MDN.rotateYMatrix(now * 0.0005);

  // Leicht nach unten bewegen
  const position = MDN.translateMatrix(0, -0.1, 0);

  // Zusammen multiplizieren, achten Sie darauf, sie in umgekehrter Reihenfolge zu lesen
  this.transforms.model = MDN.multiplyArrayOfMatrices([
    position, // Schritt 4
    rotateY, // Schritt 3
    rotateX, // Schritt 2
    scale, // Schritt 1
  ]);
};
```

Um dies im Shader zu verwenden, muss es an eine Uniform-Location gesetzt werden. Die Locations für die Uniforms werden im `locations`-Objekt gespeichert, wie unten gezeigt:

```js
this.locations.model = gl.getUniformLocation(webglProgram, "model");
```

Und schließlich wird die Uniform auf diese Location gesetzt. Dies übergibt die Matrix an die GPU.

```js
gl.uniformMatrix4fv(
  this.locations.model,
  false,
  new Float32Array(this.transforms.model),
);
```

Im Shader wird jeder Position-Vertex zunächst in eine homogene Koordinate (ein `vec4`-Objekt) umgewandelt und dann gegen die Modellmatrix multipliziert.

```glsl
gl_Position = model * vec4(position, 1.0);
```

> [!NOTE]
> In JavaScript erfordert die Matrixmultiplikation eine benutzerdefinierte Funktion, während sie im Shader in die Sprache mit dem einfachen \* Operator eingebaut ist.

### Die Ergebnisse

[Auf JSFiddle anzeigen](https://jsfiddle.net/tatumcreative/5jofzgsh/)

![Verwendung einer Modellmatrix](part3.png)

An diesem Punkt ist der w-Wert des transformierten Punktes immer noch 1.0. Der Würfel hat immer noch keine Perspektive. Der nächste Abschnitt wird diese Einrichtung nehmen und die w-Werte modifizieren, um etwas Perspektive zu bieten.

### Übungen

- Verkleinern Sie das Quadrat mithilfe der Skalierungsmatrix und positionieren Sie es an verschiedenen Stellen im Clip-Space.
- Versuchen Sie, es außerhalb des Clip-Space zu bewegen.
- Ändern Sie die Größe des Fensters, und beobachten Sie, wie das Quadrat aus der Form verzerrt wird.
- Fügen Sie eine `rotateZ`-Matrix hinzu.

## Division durch W

Eine einfache Möglichkeit, etwas Perspektive auf unser Modell des Würfels zu bekommen, besteht darin, die Z-Koordinate zu nehmen und sie auf die w-Koordinate zu kopieren. Normalerweise wird beim Konvertieren eines kartesischen Punktes in eine homogene Koordinate `(x,y,z,1)`, aber wir werden sie in etwas wie `(x,y,z,z)` setzen. In Wirklichkeit möchten wir sicherstellen, dass z für Punkte im Blickfeld größer als 0 ist, daher werden wir es leicht ändern, indem wir den Wert auf `((1.0 + z) * scaleFactor)` ändern. Dies wird einen Punkt nehmen, der normalerweise im Clip-Space ist (-1 bis 1) und ihn in einen Raum bewegen, der eher (0 bis 1) je nach dem eingestellten Skalierungsfaktor entspricht. Der Skalierungsfaktor ändert den endgültigen w-Wert, sodass er insgesamt entweder höher oder niedriger wird.

Der Shader-Code sieht folgendermaßen aus.

```glsl
// Zuerst den Punkt transformieren
vec4 transformedPosition = model * vec4(position, 1.0);

// Wie sehr wirkt sich die Perspektive aus?
float scaleFactor = 0.5;

// Setzen Sie w, indem Sie den z-Wert nehmen, der typischerweise im Bereich von -1 bis 1 liegt, und
// ihn dann skalieren, um von 0 bis zu einer bestimmten Zahl zu liegen, in diesem Fall 0-1.
float w = (1.0 + transformedPosition.z) * scaleFactor;

// Speichern Sie die neue gl_Position mit der benutzerdefinierten w-Komponente
gl_Position = vec4(transformedPosition.xyz, w);
```

### Die Ergebnisse

[Auf JSFiddle anzeigen](https://jsfiddle.net/tatumcreative/vk9r8h2c/)

![Filling the W component and creating some projection.](part4.png)

Sehen Sie das kleine dunkelblaue Dreieck? Das ist eine zusätzliche Fläche, die zu unserem Objekt hinzugefügt wurde, da die Drehung unserer Form dazu geführt hat, dass diese Ecke außerhalb des Clip-Space reicht, was dazu führte, dass die Ecke abgeschnitten wird. Siehe [Perspektivprojektionsmatrix](#perspektivprojektionsmatrix) unten für eine Einführung, wie man komplexere Matrizen verwendet, um das Clipping zu steuern und zu verhindern.

### Übung

Wenn das etwas abstrakt klingt, öffnen Sie den Vertex-Shader und experimentieren Sie mit dem Skalierungsfaktor und beobachten Sie, wie er die Vertices mehr zur Oberfläche hin verkleinert. Ändern Sie vollständig die w-Komponentenwerte für wirklich schräge Darstellungen des Raums.

Im nächsten Abschnitt werden wir diesen Schritt des Kopierens von Z in den w-Slot nehmen und ihn in eine Matrix verwandeln.

## Einfache Projektion

Der letzte Schritt des Filling in der w-Komponente kann tatsächlich mit einer einfachen Matrix erreicht werden. Beginnen Sie mit der Identitätsmatrix:

```js
const identity = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];

MDN.multiplyPoint(identity, [2, 3, 4, 1]);
//> [2, 3, 4, 1]
```

Dann verschieben Sie die 1 in der letzten Spalte um einen Platz nach oben.

```js
const copyZ = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0];

MDN.multiplyPoint(copyZ, [2, 3, 4, 1]);
//> [2, 3, 4, 4]
```

Allerdings haben wir im letzten Beispiel `(z + 1) * scaleFactor` durchgeführt:

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

Wenn wir es etwas weiter aufschlüsseln, können wir sehen, wie dies funktioniert:

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

Dann unterteilen wir den scaleFactor, diesen erhalten wir:

```js
w = (4 + 1) * scaleFactor;
```

Was genau dem `(z + 1) * scaleFactor` entspricht, das wir im vorhergehenden Beispiel verwendet haben.

Im Box-Demo, wurde eine zusätzliche `computeSimpleProjectionMatrix()`-Methode hinzugefügt. Diese wird in der `draw()`-Methode aufgerufen und der Skalierungsfaktor wird übergeben. Das Ergebnis sollte identisch mit dem letzten Beispiel sein:

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

Obwohl das Ergebnis identisch ist, ist der wichtige Schritt hier im Vertex-Shader. Anstatt den Vertex direkt zu ändern, wird er mit einer zusätzlichen **[Projektionsmatrix](#the_model_view_and_projection_matrices)** multipliziert, die (wie der Name schon sagt) 3D-Punkte auf eine 2D-Zeichenfläche projiziert:

```glsl
// Stellen Sie sicher, dass Sie die Transformationen in umgekehrter Reihenfolge lesen
gl_Position = projection * model * vec4(position, 1.0);
```

### Die Ergebnisse

[Auf JSFiddle anzeigen](https://jsfiddle.net/tatumcreative/zwyLLcbw/)

![Eine einfache Projektionsmatrix](part5.png)

## Der Sicht-Frustum

Bevor wir weitergehen, um zu besprechen, wie man eine Perspektivprojektionsmatrix berechnet, müssen wir das Konzept des **[Sichtfrustums](https://en.wikipedia.org/wiki/Viewing_frustum)** (auch bekannt als **Blickfrustum**) vorstellen. Dies ist der Raum, dessen Inhalt momentan für den Benutzer sichtbar ist. Es ist der 3D-Raum, der durch das Sichtfeld und die Abstände, die als die nächsten und entferntesten Inhalte angegeben werden, die gerendert werden sollen, definiert wird.

Während des Renderns müssen wir bestimmen, welche Polygone gerendert werden müssen, um die Szene darzustellen. Dies ist das, was das Sichtfrustum definiert. Aber was ist überhaupt ein Frustum?

Ein [Frustum](https://en.wikipedia.org/wiki/Frustum) ist der 3D-Körper, der entsteht, wenn man irgendeinen Körper nimmt und zwei Abschnitte damit durch zwei parallele Ebenen abschneidet. Nehmen Sie an, unsere Kamera betrachtet einen Bereich, der direkt vor ihrer Linse beginnt und sich in die Ferne erstreckt. Der sichtbare Bereich ist eine vierseitige Pyramide mit ihrer Spitze an der Linse, ihren vier Seiten, die den Bereich der peripheren Sichtweite entsprechen, und ihrer Basis in der maximalen sichtbaren Entfernung, so:

![Eine Darstellung des gesamten Sichtbereichs einer Kamera. Dieser Bereich ist eine vierseitige Pyramide, deren Spitze an der Linse und deren Basis an der maximalen sichtbaren Entfernung der Welt ist.](fullcamerafov.svg)

Wenn wir dies verwenden würden, um die Polygone zu bestimmen, die pro Frame gerendert werden sollen, müsste unser Renderer jedes Polygon innerhalb dieser Pyramide rendern, bis hin zu Unendlichkeit, darunter auch Polygone, die sehr nahe an der Linse sind — wahrscheinlich zu nah, um nützlich zu sein (und sicher Dinge, die so nah sind, dass ein echter Mensch nicht in der Lage wäre, in derselben Einstellung darauf scharfzustellen).

Der erste Schritt zur Reduzierung der Anzahl der zu berechnenden und zu rendernden Polygone besteht darin, diese Pyramide in das Sichtfrustum zu verwandeln. Die beiden Ebenen, die wir verwenden, um die Anzahl der Scheitelpunkte zu reduzieren, um die Anzahl der Polygone zu reduzieren, sind die **Nahe Clipping-Ebene** und die **Ferne Clipping-Ebene**.

In WebGL werden die nahen und fernen Clipping-Ebenen definiert, indem der Abstand von der Linse zu einem Punkt auf einer Ebene angegeben wird, die senkrecht zur Blickrichtung ist. Alles, was näher an der Linse liegt als die nahe Clipping-Ebene oder weiter entfernt als die ferne Clipping-Ebene, wird entfernt. Dies ergibt das Sichtfrustum, das so aussieht:

![Eine Darstellung des Sichtfrustums der Kamera; die nahen und fernen Ebenen haben einen Teil des Volumens entfernt und so die Polygonanzahl reduziert.](camera_view_frustum.svg)

Der Satz von Objekten, die für jeden Frame gerendert werden sollen, wird im Wesentlichen erstellt, indem mit dem Satz aller Objekte in der Szene begonnen wird. Dann werden alle Objekte, die _vollständig_ außerhalb des Sichtfrustums liegen, aus dem Satz entfernt. Als nächstes werden Objekte, die teilweise außerhalb des Sichtfrustums extrudieren, geclippt, indem alle Polygone, die vollständig außerhalb des Frustums sind, abgeschnitten werden, und indem die Polygone, die über das Frustum hinausgehen, so geclipt werden, dass sie es nicht mehr verlassen.

Sobald das erledigt ist, haben wir die größte Gruppe von Polygonen, die vollständig innerhalb des Sichtfrustums liegen. Diese Liste wird normalerweise weiter reduziert, indem Verfahren wie z. B. [Backface-Culling](https://en.wikipedia.org/wiki/Back-face_culling) (Entfernen von Polygonen, deren Rückseite der Kamera zugewandt ist) und Occlusion-Culling unter Verwendung [verdeckter-Oberflächen-Bestimmung](https://en.wikipedia.org/wiki/Hidden-surface_determination) durchgeführt werden (Entfernen von Polygonen, die nicht sichtbar sind, weil sie vollständig von Polygonen blockiert werden, die näher an der Linse sind).

## Perspektivprojektionsmatrix

Bis zu diesem Punkt haben wir unseren eigenen 3D-Rendering-Setup Schritt für Schritt aufgebaut. Allerdings hat der aktuelle Code einige Probleme. Zum einen wird er verzerrt, wenn wir unser Fenster in der Größe ändern. Ein weiteres ist, dass unsere einfache Projektion nicht eine breite Palette von Werten für die Szenendaten verarbeitet. Die meisten Szenen funktionieren nicht im Clip-Space. Es wäre hilfreich, die Entfernungen zu definieren, die für die Szene relevant sind, damit keine Präzision verloren geht, wenn die Zahlen konvertiert werden. Letztendlich ist es sehr hilfreich, eine fein abgestimmte Kontrolle darüber zu haben, welche Punkte innerhalb und außerhalb des Clip-Spaces platziert werden. In den bisherigen Beispielen werden die Ecken des Würfels gelegentlich abgeschnitten.

Die **Perspektivprojektionsmatrix** ist eine Art von Projektionsmatrix, die all diese Anforderungen erfüllt. Die Mathematik beginnt auch etwas komplexer zu werden und wird in diesen Beispielen nicht vollständig erklärt. Kurz gesagt, sie kombiniert die Division durch w (wie in den vorhergehenden Beispielen) mit einigen genialen Manipulationen, basierend auf [ähnlichen Dreiecken](https://en.wikipedia.org/wiki/Similarity_%28geometry%29). Wenn Sie eine vollständige Erklärung der Mathematik dahinter lesen möchten, sehen Sie sich einige der folgenden Links an:

- [OpenGL-Projektionsmatrix](https://www.songho.ca/opengl/gl_projectionmatrix.html)
- [Perspektivprojektion](https://ogldev.org/)
- [Versuchen, die hinter der Perspektivprojektionsmatrix in WebGL stehende Mathematik zu verstehen](https://stackoverflow.com/questions/28286057/trying-to-understand-the-math-behind-the-perspective-matrix-in-webgl/28301213#28301213)

Ein wichtiger Punkt, den man über die unten verwendete Perspektivprojektionsmatrix anmerken sollte, ist, dass sie die z-Achse umdreht. Im Clip-Space zeigt z+ vom Betrachter weg, während es bei dieser Matrix zum Betrachter hin kommt.

Der Grund für das Umdrehen der z-Achse ist, dass das Clip-Space-Koordinatensystem ein linkshändiges Koordinatensystem ist (wobei die z-Achse vom Betrachter wegzeigt und in den Bildschirm hinein), während die Konvention in Mathematik, Physik und 3D-Modellierung sowie für das Sicht-/Augen-Koordinatensystem in OpenGL darin besteht, ein rechtshändiges Koordinatensystem zu verwenden (z-Achse zeigt aus dem Bildschirm heraus in Richtung Betrachter). Mehr dazu finden Sie in den relevanten Wikipedia-Artikeln: [Kartesisches Koordinatensystem](https://en.wikipedia.org/wiki/Cartesian_coordinate_system#Orientation_and_handedness), [Rechtshänderregel](https://en.wikipedia.org/wiki/Right-hand_rule).

Schauen wir uns eine `perspectiveMatrix()` Funktion an, die die Perspektivprojektionsmatrix berechnet.

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
  - : Ein Winkel, angegeben in Radiant, der angibt, wie viel von der Szene dem Betrachter auf einmal sichtbar ist. Je größer die Zahl, desto mehr ist von der Kamera sichtbar. Die Geometrie an den Rändern wird immer mehr verzerrt, was einem Weitwinkelobjektiv entspricht. Wenn das Sichtfeld größer ist, werden die Objekte typischerweise kleiner. Wenn das Sichtfeld kleiner ist, kann die Kamera immer weniger von der Szene sehen. Die Objekte sind viel weniger durch Perspektive verzerrt und scheinen viel näher an der Kamera zu sein.
- `aspectRatio`
  - : Das Seitenverhältnis der Szene, das dem Breiten-zu-Höhen-Verhältnis entspricht. In diesen Beispielen ist das das Breiten-zu-Höhen-Verhältnis des Fensters. Die Einführung dieses Parameters löst schließlich das Problem, bei dem das Modell verzerrt wird, wenn die Leinwand in der Größe geändert wird.
- `nearClippingPlaneDistance`
  - : Eine positive Zahl, die den Abstand in den Bildschirm zu einer Ebene angibt, die senkrecht zum Boden liegt und näher ist, als welche alles abgeschnitten wird. Dies wird im Clip-Space auf -1 abgebildet und sollte nicht auf 0 gesetzt werden.
- `farClippingPlaneDistance`
  - : Eine positive Zahl, die den Abstand zur Ebene angibt, jenseits derer Geometrie abgeschnitten wird. Dies wird im Clip-Space auf 1 abgebildet. Dieser Wert sollte in angemessener Nähe zur Distanz der Geometrie gehalten werden, um Präzisionsfehler beim Rendern zu vermeiden.

In der neuesten Version des Box-Demos ist die `computeSimpleProjectionMatrix()` Methode durch die `computePerspectiveMatrix()` Methode ersetzt worden.

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

Der Shader-Code ist identisch mit dem vorhergehenden Beispiel:

```js
gl_Position = projection * model * vec4(position, 1.0);
```

Zusätzlich (nicht gezeigt), wurden die Positions- und Skalierungsmatrizen des Modells geändert, um es aus dem Clip-Space in das größere Koordinatensystem zu bringen.

### Die Ergebnisse

[Auf JSFiddle anzeigen](https://jsfiddle.net/tatumcreative/Lzxw7e1q/)

![Eine echte Perspektivmatrix](part6.png)

### Übungen

- Experimentieren Sie mit den Parametern der Perspektivprojektionsmatrix und der Modellmatrix.
- Tauschen Sie die Perspektivprojektionsmatrix gegen eine [orthografische Projektion](https://en.wikipedia.org/wiki/Orthographic_projection) aus. Im MDN WebGL gemeinsamen Code finden Sie die `MDN.orthographicMatrix()`. Diese kann die `MDN.perspectiveMatrix()` Funktion in `CubeDemo.prototype.computePerspectiveMatrix()` ersetzen.

## Ansichts-Matrix

Während einige Grafikbibliotheken eine virtuelle Kamera haben, die positioniert und ausgerichtet werden kann während des Komponierens einer Szene, haben OpenGL (und damit auch WebGL) dies nicht. Hier kommt die **Ansichtsmatrix** ins Spiel. Ihre Aufgabe ist es, die Objekte in der Szene so zu übersetzen, zu rotieren und zu skalieren, dass sie relativ zum Betrachter an der richtigen Stelle positioniert sind, entsprechend der Position und Ausrichtung des Betrachters.

### Simulieren einer Kamera

Dies nutzt eine der grundlegenden Facetten von Einsteins spezieller Relativitätstheorie: das Prinzip der Bezugssysteme und relativen Bewegung sagt, dass man aus der Perspektive eines Betrachters die Bewegung und Ausrichtung des Betrachters durch die gegenteilige Änderung der Objekte in der Szene simulieren kann. Auf diese Weise erscheint das Ergebnis für den Betrachter identisch.

Betrachten Sie eine Box, die auf einem Tisch steht und eine Kamera, die einen Meter entfernt auf dem Tisch steht, auf die Box gerichtet, deren Vorderseite zur Kamera zeigt. Stellen Sie sich dann vor, die Kamera bewegt sich weg von der Box, bis sie sich zwei Meter entfernt befindet (indem man einen Meter zur Z-Position der Kamera hinzufügt), dann gleitet sie um 10 Zentimeter nach links. Die Box entfernt sich von der Kamera um diesen Betrag und gleitet leicht nach rechts, was dazu führt, dass sie der Kamera kleiner erscheint und einen kleinen Teil ihrer linken Seite zeigt.

Setzen wir jetzt die Szene zurück, setzen wir die Box wieder in ihre Ausgangsposition, mit der Kamera zwei Meter von der Box entfernt, sie direkt auf die Box ausgerichtet. Dieses Mal jedoch ist die Kamera auf dem Tisch fixiert und kann nicht bewegt oder gedreht werden. So ist es, mit WebGL zu arbeiten. Wie simulieren wir also die Bewegung der Kamera durch den Raum?

Anstatt die Kamera rückwärts und nach links zu bewegen, wenden wir die inverse Transformation auf die Box an: wir bewegen die _Box_ um einen Meter zurück und dann um 10 Zentimeter nach rechts. Das Ergebnis ist aus der Perspektive jedes der beiden Objekte identisch.

Der letzte Schritt bei all dem ist es, die **Ansichtsmatrix** zu erstellen, die die Objekte in der Szene so transformiert, dass sie unter Berücksichtigung der aktuellen Position und Ausrichtung der Kamera positioniert werden. Unser Code, wie er derzeit steht, kann den Würfel im Weltraum bewegen und alles projizieren, um Perspektive zu haben, aber wir können die Kamera immer noch nicht bewegen.

Stellen Sie sich vor, Sie nehmen einen Film mit einer physischen Kamera auf. Sie haben die Freiheit, die Kamera im Wesentlichen überall zu platzieren und die Kamera in jede Richtung zu richten, die Sie wählen. Um dies in 3D-Grafiken zu simulieren, verwenden wir eine Ansichtsmatrix, um die Position und Rotation dieser physischen Kamera zu simulieren.

Im Gegensatz zur Modellmatrix, die die Modell-Vertices direkt transformiert, bewegt die Ansichtsmatrix eine abstrakte Kamera. In Wirklichkeit bewegt der Vertex-Shader immer noch nur die Modelle, während die "Kamera" an ihrem Platz bleibt. Damit dies korrekt funktioniert, muss die inverse Transformationsmatrix verwendet werden. Die inverse Matrix kehrt im Wesentlichen eine Transformation um, sodass, wenn wir die Kamerasicht nach vorne bewegen, die inverse Matrix dazu führt, dass sich die Objekte in der Szene zurückbewegen.

Die folgende Methode `computeViewMatrix()` animiert die Ansichtsmatrix, indem sie sich hinein- und herausbewegt sowie nach links und rechts bewegt.

```js
CubeDemo.prototype.computeViewMatrix = function (now) {
  const moveInAndOut = 20 * Math.sin(now * 0.002);
  const moveLeftAndRight = 15 * Math.sin(now * 0.0017);

  // Bewegen Sie die Kamera herum
  const position = MDN.translateMatrix(moveLeftAndRight, 0, 50 + moveInAndOut);

  // Zusammen multiplizieren, achten Sie darauf, sie in umgekehrter Reihenfolge zu lesen
  const matrix = MDN.multiplyArrayOfMatrices([
    // Übung: drehen Sie die Kamerasicht
    position,
  ]);

  // Invertieren Sie den Vorgang für Kamerabewegungen, weil wir tatsächlich
  // die Geometrie in der Szene bewegen, nicht die Kamera selbst.
  this.transforms.view = MDN.invertMatrix(matrix);
};
```

Der Shader verwendet jetzt drei Matrizen.

```glsl
gl_Position = projection * view * model * vec4(position, 1.0);
```

Nach diesem Schritt wird die GPU-Pipeline die außerhalb des Bereichs liegenden Vertices abschneiden und das Modell an den Fragment-Shader zur Rasterung senden.

### Die Ergebnisse

[Auf JSFiddle anzeigen](https://jsfiddle.net/tatumcreative/86fd797g/)

![Die Ansichtsmatrix](part7.png)

### Beziehung der Koordinatensysteme

An diesem Punkt wäre es vorteilhaft, einen Schritt zurück zu machen und die verschiedenen von uns verwendeten Koordinatensysteme zu betrachten und zu kennzeichnen. Zuerst einmal sind die Vertices des Würfels in **Modelraum** definiert. Um das Modell im Raum zu bewegen. Diese Vertices müssen durch Anwenden der Modellmatrix in **Welt-Raum** umgerechnet werden.

Modelraum → Modellmatrix → Welt-Raum

Die Kamera hat bisher nichts getan, und die Punkte müssen erneut bewegt werden. Derzeit befinden sie sich im Welt-Raum, aber sie müssen in den **Ansichtsraum** (unter Verwendung der Ansichtsmatrix) transformiert werden, um die Kameraplatzierung darzustellen.

Welt-Raum → Ansichtsmatrix → Ansichtsraum

Schließlich muss eine **Projektion** (in unserem Fall die Perspektivprojektionsmatrix) hinzugefügt werden, um die Weltkoordinaten in Clip-Space-Koordinaten zu überführen.

Ansichtsraum → Projektionsmatrix → Clip-Space

### Übung

- Bewegen Sie die Kamera in der Szene.
- Fügen Sie einige Rotationsmatrizen zur Ansichtsmatrix hinzu, um sich umzusehen.
- Schließlich verfolgen Sie die Position der Maus. Verwenden Sie zwei Rotationsmatrizen, damit sich die Kamera nach oben und unten bewegt, je nachdem, wo sich die Maus des Benutzers auf dem Bildschirm befindet.

## Weitere Informationen

- [WebGL](/de/docs/Web/API/WebGL_API)
- [3D-Projektion](https://en.wikipedia.org/wiki/3D_projection)
