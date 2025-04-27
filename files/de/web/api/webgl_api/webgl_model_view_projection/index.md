---
title: WebGL Modellansicht und Projektion
slug: Web/API/WebGL_API/WebGL_model_view_projection
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{DefaultAPISidebar("WebGL")}}

Dieser Artikel untersucht, wie Daten in einem [WebGL](/de/docs/Web/API/WebGL_API)-Projekt verarbeitet und in die richtigen Räume projiziert werden, um sie auf dem Bildschirm darzustellen. Er setzt Kenntnisse der grundlegenden Matrizenmathematik unter Verwendung von Translations-, Skalierungs- und Rotationsmatrizen voraus. Er erklärt die drei Hauptmatrizen, die typischerweise bei der Komposition einer 3D-Szene verwendet werden: die Modell-, Ansichts- und Projektionsmatrix.

> [!NOTE]
> Dieser Artikel ist auch als [MDN-Inhaltskit](https://github.com/gregtatum/mdn-model-view-projection) verfügbar. Es verwendet auch eine Sammlung von [Hilfsfunktionen](https://github.com/gregtatum/mdn-webgl), die unter dem globalen Objekt `MDN` verfügbar sind.

## Die Modell-, Ansichts- und Projektionsmatrizen

Einzelne Transformationen von Punkten und Polygonen im Raum in WebGL werden durch grundlegende Transformationsmatrizen wie Translation, Skalierung und Rotation behandelt. Diese Matrizen können zusammengefügt und auf besondere Weise gruppiert werden, um sie für das Rendern komplizierter 3D-Szenen nützlich zu machen. Diese zusammengesetzten Matrizen bewegen letztendlich die ursprünglichen Modelldaten in einen speziellen Koordinatenraum namens **Clip-Raum**. Dies ist ein 2 Einheiten breiter Würfel, zentriert bei (0,0,0), mit Ecken, die von (-1,-1,-1) bis (1,1,1) reichen. Dieser Clip-Raum wird in einen 2D-Raum komprimiert und in ein Bild rasterisiert.

Die erste Matrix, die im Folgenden besprochen wird, ist die **Modellmatrix**, die definiert, wie Sie Ihre ursprünglichen Modelldaten nehmen und sie im 3D-Weltraum verschieben. Die **Projektionsmatrix** wird verwendet, um Weltkoordinaten in Clip-Space-Koordinaten zu konvertieren. Eine häufig verwendete Projektionsmatrix, die **Perspektivprojektionsmatrix**, wird verwendet, um die _Effekte_ einer typischen Kamera nachzuahmen, die als Stellvertreter für den Betrachter in der 3D-virtuellen Welt dient. Die **Ansichtsmatrix** ist dafür verantwortlich, die Objekte in der Szene zu bewegen, um die Position der Kamera zu simulieren, was das verändert, was der Betrachter momentan sehen kann.

Die folgenden Abschnitte bieten einen detaillierten Einblick in die Ideen hinter und die Implementierung der Modell-, Ansichts- und Projektionsmatrizen. Diese Matrizen sind entscheidend für die Bewegung von Daten auf dem Bildschirm und sind Konzepte, die über einzelne Frameworks und Engines hinausgehen.

## Clip-Raum

In einem WebGL-Programm werden Daten typischerweise mit ihrem eigenen Koordinatensystem an die GPU hochgeladen, und der Vertex-Shader transformiert diese Punkte in ein spezielles Koordinatensystem, das als **Clip-Raum** bekannt ist. Alle Daten, die außerhalb des Clip-Raums liegen, werden abgeschnitten und nicht gerendert. Wenn jedoch ein Dreieck die Grenze dieses Raumes überschreitet, wird es in neue Dreiecke aufgeteilt, und nur die Teile der neuen Dreiecke, die sich im Clip-Raum befinden, werden beibehalten.

![Ein 3D-Diagramm, das den Clip-Raum in WebGL zeigt.](clip_space_graph.svg)

Die obige Grafik ist eine Visualisierung des Clip-Raums, in den alle Punkte passen müssen. Es ist ein Würfel mit zwei Einheiten an jeder Seite, mit einer Ecke bei (-1,-1,-1) und der gegenüberliegenden Ecke bei (1,1,1). Das Zentrum des Würfels ist der Punkt (0,0,0). Dieses 8 Kubikmeter umfassende Koordinatensystem, das vom Clip-Raum verwendet wird, ist als normalisierte Gerätekoordinaten (NDC) bekannt. Sie werden diesem Begriff von Zeit zu Zeit begegnen, während Sie WebGL-Code recherchieren und daran arbeiten.

Für diesen Abschnitt werden wir unsere Daten direkt in das Koordinatensystem des Clip-Raums einfügen. Normalerweise werden Modelldaten verwendet, die in einem beliebigen Koordinatensystem vorliegen und dann mittels einer Matrix transformiert werden, die die Modellkoordinaten in das Koordinatensystem des Clip-Raums umwandelt. In diesem Beispiel ist es am einfachsten zu veranschaulichen, wie der Clip-Raum funktioniert, indem Modellkoordinatenwerte von (-1,-1,-1) bis (1,1,1) verwendet werden. Der folgende Code erzeugt zwei Dreiecke, die ein Quadrat auf dem Bildschirm zeichnen. Die Z-Tiefe in den Quadraten bestimmt, was oben gezeichnet wird, wenn die Quadrate denselben Raum teilen. Kleinere Z-Werte werden über größere Z-Werte gerendert.

### WebGLBox Beispiel

Dieses Beispiel erstellt ein benutzerdefiniertes `WebGLBox`-Objekt, das ein 2D-Quadrat auf dem Bildschirm zeichnet.

> [!NOTE]
> Der Code für jedes WebGLBox-Beispiel ist in diesem [GitHub-Repo](https://github.com/gregtatum/mdn-model-view-projection/tree/master/lessons) verfügbar und nach Sektionen organisiert. Darüber hinaus gibt es am Ende jeder Sektion einen JSFiddle-Link.

#### WebGLBox Konstruktor

Der Konstruktor sieht so aus:

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

Nun erstellen wir eine Methode, um ein Quadrat auf dem Bildschirm zu zeichnen.

```js
WebGLBox.prototype.draw = function (settings) {
  // Create some attribute data; these are the triangles that will end being
  // drawn to the screen. There are two that form a square.

  const data = new Float32Array([
    // Triangle 1
    settings.left,
    settings.bottom,
    settings.depth,
    settings.right,
    settings.bottom,
    settings.depth,
    settings.left,
    settings.top,
    settings.depth,

    // Triangle 2
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

Die Shader sind die Codebestandteile, die in GLSL geschrieben wurden und unsere Datenpunkte letztendlich auf dem Bildschirm rendern. Aus Gründen der Übersichtlichkeit sind diese Shader in einem {{htmlelement("script")}}-Element gespeichert, das über die benutzerdefinierte Funktion `MDN.createWebGLProgramFromIds()` in das Programm eingebracht wird. Diese Funktion ist Teil einer Sammlung von [Hilfsfunktionen](https://github.com/gregtatum/mdn-webgl), die für diese Tutorials geschrieben wurden und hier nicht ausführlich erklärt werden. Diese Funktion übernimmt die Grundlagen, um einige GLSL-Quellcodes zu einem WebGL-Programm zu kompilieren. Die Funktion benötigt drei Parameter — den Kontext, um das Programm darin zu rendern, die ID des {{htmlelement("script")}}-Elements, das den Vertex-Shader enthält, und die ID des {{htmlelement("script")}}-Elements, das den Fragment-Shader enthält. Der Vertex-Shader positioniert die Vertices, und der Fragment-Shader färbt jeden Pixel ein.

Zuerst einen Blick auf den Vertex-Shader werfen, der die Vertices auf dem Bildschirm bewegt:

```glsl
// The individual position vertex
attribute vec3 position;

void main() {
  // the gl_Position is the final position in clip space after the vertex shader modifies it
  gl_Position = vec4(position, 1.0);
}
```

Als Nächstes, um die Daten tatsächlich in Pixel zu rasterisieren, bewertet der Fragment-Shader alles auf einer Pixelbasis und setzt eine einzige Farbe fest. Die GPU ruft die Shader-Funktion für jeden Pixel auf, den sie rendern muss; die Aufgabe des Shaders ist es, die Farbe für diesen Pixel zu bestimmen.

```glsl
precision mediump float;
uniform vec4 color;

void main() {
  gl_FragColor = color;
}
```

Mit diesen Einstellungen ist es an der Zeit, direkt auf den Bildschirm unter Verwendung der Clip-Space-Koordinaten zu zeichnen.

```js
const box = new WebGLBox();
```

Zuerst ein rotes Quadrat in der Mitte zeichnen.

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

Als Nächstes ein grünes Quadrat oben und hinter dem roten Quadrat zeichnen.

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

Schließlich, als Demonstration, dass tatsächlich Clipping stattfindet, wird dieses Quadrat nicht gezeichnet, da es vollständig außerhalb des Clip-Raums liegt. Die Tiefe liegt außerhalb des Bereichs von -1.0 bis 1.0.

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

[Ansehen auf JSFiddle](https://jsfiddle.net/tatumcreative/mff99yu5/)

![Die Ergebnisse der Zeichnung im Clip-Raum mit WebGL.](part1.png)

#### Übung

Eine hilfreiche Übung an dieser Stelle ist es, die Quadrate im Clip-Raum zu bewegen, indem Sie den Code variieren, um ein Gefühl dafür zu bekommen, wie Punkte abgeschnitten und im Clip-Raum bewegt werden. Versuchen Sie, ein Bild wie ein kantiges Smiley-Gesicht mit einem Hintergrund zu zeichnen.

## Homogene Koordinaten

Die Hauptzeile des vorherigen Clip-Space-Vertex-Shaders enthielt diesen Code:

```js
gl_Position = vec4(position, 1.0);
```

Die Variable `position` wurde in der Methode `draw()` definiert und als Attribut an den Shader übergeben. Dies ist ein dreidimensionaler Punkt, aber die Variable `gl_Position`, die am Ende der Pipeline übergeben wird, ist tatsächlich 4-dimensional — anstelle von `(x, y, z)` ist es `(x, y, z, w)`. Nach `z` gibt es keinen Buchstaben mehr, daher wird diese vierte Dimension konventionell als `w` bezeichnet. Im obigen Beispiel ist die `w`-Koordinate auf 1.0 gesetzt.

Die offensichtliche Frage ist "Warum die zusätzliche Dimension?" Es stellt sich heraus, dass dieses Hinzufügen viele schöne Techniken für die Manipulation von 3D-Daten ermöglicht. Diese zusätzliche Dimension führt den Begriff der Perspektive in das Koordinatensystem ein; mit ihr an Ort und Stelle können wir 3D-Koordinaten in 2D-Raum abbilden und dadurch zwei parallele Linien so darstellen, dass sie in der Ferne zusammenlaufen. Der Wert von `w` wird als Teiler für die anderen Komponenten der Koordinate verwendet, sodass die tatsächlichen Werte von `x`, `y` und `z` als `x/w`, `y/w` und `z/w` berechnet werden (und `w` ist dann auch `w/w`, wird zu 1).

Ein dreidimensionaler Punkt wird in einem typischen kartesischen Koordinatensystem definiert. Die hinzugefügte vierte Dimension verwandelt diesen Punkt in eine [homogene Koordinate](https://de.wikipedia.org/wiki/Homogene_Koordinaten). Dennoch stellt sie einen Punkt im 3D-Raum dar und es kann leicht demonstriert werden, wie man diesen Koordinationstyp durch ein Paar einfacher Funktionen konstruiert.

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

Wie bereits erwähnt und in den obigen Funktionen gezeigt, teilt die w-Komponente die x-, y- und z-Komponenten. Wenn die w-Komponente eine von Null verschiedene reelle Zahl ist, dann lässt sich die homogene Koordinate leicht wieder in einen normalen Punkt im kartesischen Raum übersetzen. Was passiert jedoch, wenn die w-Komponente null ist? In JavaScript würde der zurückgegebene Wert wie folgt aussehen.

```js
homogeneousToCartesian([10, 4, 5, 0]);
```

Dies wird zu: `[Infinity, Infinity, Infinity]` ausgewertet.

Diese homogene Koordinate stellt einen Punkt im Unendlichen dar. Dies ist eine praktische Methode, um einen Strahl darzustellen, der vom Ursprung in eine bestimmte Richtung abgeschossen wird. Zusätzlich zu einem Strahl könnte auch von einem Richtungsvektor die Rede sein. Wenn diese homogene Koordinate mit einer Matrix mit einer Translation multipliziert wird, dann wird die Translation effektiv entfernt.

Wenn Zahlen auf Computern extrem groß (oder extrem klein) sind, werden sie immer ungenauer, weil es nur so viele Einsen und Nullen gibt, um sie darzustellen. Je mehr Operationen auf größeren Zahlen durchgeführt werden, desto mehr Fehler sammeln sich im Ergebnis an. Beim Teilen durch w kann dies die Präzision sehr großer Zahlen effektiv erhöhen, indem auf zwei potenziell kleinere, fehlerunanfälligere Zahlen operiert wird.

Der letzte Vorteil der Verwendung homogener Koordinaten besteht darin, dass sie sehr gut zur Multiplikation mit 4x4-Matrizen passen. Ein Vertex muss mindestens eine der Dimensionen einer Matrix übereinstimmen, um mit ihr multipliziert werden zu können. Die 4x4-Matrix kann verwendet werden, um eine Vielzahl nützlicher Transformationen zu kodieren. Tatsächlich nutzt die typische Perspektivprojektionsmatrix die Teilung durch die w-Komponente, um ihre Transformation zu erreichen.

Das Clipping von Punkten und Polygonen aus dem Clip-Raum erfolgt, bevor die homogenen Koordinaten wieder in kartesische Koordinaten umgewandelt wurden (durch Teilung durch w). Dieser endgültige Raum ist als **normalisierte Gerätekoordinaten** oder NDC bekannt.

Um mit dieser Idee zu beginnen, kann das vorherige Beispiel so geändert werden, dass die Verwendung der `w`-Komponente möglich wird.

```js
// Redefine the triangles to use the W component
const data = new Float32Array([
  // Triangle 1
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

  // Triangle 2
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

Zuerst zeichnen wir ein rotes Quadrat in der Mitte, setzen aber W auf 0.7. Da die Koordinaten durch 0,7 geteilt werden, werden sie alle vergrößert.

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

Jetzt zeichnen wir ein grünes Quadrat oben, aber wir verkleinern es, indem wir die w-Komponente auf 1.1 setzen.

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

Dieses letzte Quadrat wird nicht gezeichnet, weil es außerhalb des Clip-Raums liegt. Die Tiefe ist außerhalb des Bereichs von -1,0 bis 1,0.

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

![Die Ergebnisse der Verwendung homogener Koordinaten, um die Quadrate in WebGL zu bewegen.](part2.png)

### Übungen

- Spielen Sie mit diesen Werten herum, um zu sehen, wie sie das, was auf dem Bildschirm gerendert wird, beeinflussen. Beachten Sie, wie das zuvor abgeschnittene blaue Quadrat durch Setzen seiner w-Komponente wieder in den Bereich zurückgebracht wird.
- Versuchen Sie, ein neues Quadrat zu erstellen, das außerhalb des Clip-Raums liegt, und bringen Sie es zurück, indem Sie durch w teilen.

## Modell-Transformation

Punkte direkt in den Clip-Raum zu platzieren, ist von begrenztem Nutzen. In realen Anwendungen liegen nicht alle Quellkoordinaten bereits in Clip-Space-Koordinaten vor. Daher müssen die Modelldaten und andere Koordinaten die meiste Zeit in den Clip-Raum transformiert werden. Der bescheidene Würfel ist ein einfaches Beispiel dafür, wie man dies tun kann. Würfeldaten bestehen aus den Positionen der Vertices, den Farben der Flächen des Würfels und der Reihenfolge der Positionen der Vertices, die die einzelnen Polygone ausmachen (in Gruppen von 3 Vertices zur Konstruktion der Dreiecke, aus denen die Würfelflächen bestehen). Die Positionen und Farben werden in GL-Puffern gespeichert, als Attribute an den Shader gesendet und dann einzeln darauf angewendet.

Schließlich wird eine einzelne Modellmatrix berechnet und festgelegt. Diese Matrix stellt die Transformationen dar, die an jedem Punkt des Modells durchgeführt werden müssen, um es in den richtigen Raum zu bewegen und alle anderen erforderlichen Transformationen an jedem Punkt im Modell auszuführen. Dies gilt nicht nur für jedes Vertex, sondern für jeden einzelnen Punkt auf jeder Oberfläche des Modells.

In diesem Fall bewegen für jeden Frame der Animation eine Reihe von Skalierungs-, Rotations- und Translationsmatrizen die Daten an die gewünschte Stelle im Clip-Raum. Der Würfel entspricht der Größe des Clip-Raums (-1,-1,-1) bis (1,1,1), daher muss er verkleinert werden, um nicht den gesamten Clip-Raum auszufüllen. Diese Matrix wird direkt an den Shader gesendet, wobei sie zuvor in JavaScript multipliziert wurde.

Das folgende Codebeispiel definiert eine Methode im `CubeDemo`-Objekt, die die Modellmatrix erstellt. Sie verwendet benutzerdefinierte Funktionen, um Matrizen zu erstellen und zu multiplizieren, wie sie im [MDN WebGL](https://github.com/gregtatum/mdn-webgl) gemeinsamen Code definiert sind. Die neue Funktion sieht folgendermaßen aus:

```js
CubeDemo.prototype.computeModelMatrix = function (now) {
  // Scale down by 50%
  const scale = MDN.scaleMatrix(0.5, 0.5, 0.5);

  // Rotate around X according to time
  const rotateX = MDN.rotateXMatrix(now * 0.0003);

  // Rotate around Y according to time slightly faster
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

Um dies im Shader zu verwenden, muss es an einen Uniform-Ort gesetzt werden. Die Orte für die Uniforms werden im `locations`-Objekt wie unten gezeigt gespeichert:

```js
this.locations.model = gl.getUniformLocation(webglProgram, "model");
```

Und schließlich wird die Uniform auf diesen Ort gesetzt. Dies übergibt die Matrix an die GPU.

```js
gl.uniformMatrix4fv(
  this.locations.model,
  false,
  new Float32Array(this.transforms.model),
);
```

Im Shader wird jeder Positions-Vertex zuerst in eine homogene Koordinate (ein `vec4`-Objekt) umgewandelt und dann mit der Modellmatrix multipliziert.

```glsl
gl_Position = model * vec4(position, 1.0);
```

> [!NOTE]
> In JavaScript erfordert die Matrizenmultiplikation eine benutzerdefinierte Funktion, während sie im Shader als einfacher \* Operator in die Sprache integriert ist.

### Die Ergebnisse

[Ansehen auf JSFiddle](https://jsfiddle.net/tatumcreative/5jofzgsh/)

![Verwendung einer Modellmatrix](part3.png)

An diesem Punkt ist der w-Wert des transformierten Punktes immer noch 1.0. Der Würfel hat immer noch keine Perspektive. Der nächste Abschnitt wird dieses Setup nehmen und die w-Werte ändern, um etwas Perspektive zu bieten.

### Übungen

- Verkleinern Sie das Quadrat mit der Skalierungs-Matrix und platzieren Sie es an verschiedenen Stellen innerhalb des Clip-Raums.
- Versuchen Sie, es außerhalb des Clip-Raums zu bewegen.
- Ändern Sie die Fenstergröße und beobachten Sie, wie das Quadrat seine Form verliert.
- Fügen Sie eine `rotateZ`-Matrix hinzu.

## Durch W teilen

Eine einfache Möglichkeit, etwas Perspektive für unser Würfelmodell zu erhalten, besteht darin, die Z-Koordinate zu nehmen und sie in die w-Koordinate zu kopieren. Normalerweise wird bei der Umwandlung eines kartesischen Punktes in homogenes es `(x,y,z,1)`, aber wir werden es auf etwas wie `(x,y,z,z)` setzen. Tatsächlich möchten wir sicherstellen, dass z größer als 0 ist für Punkte im Sichtfeld, daher werden wir es leicht modifizieren, indem wir den Wert zu `((1.0 + z) * scaleFactor)` ändern. Dies nimmt einen Punkt, der sich normalerweise im Clip-Raum befindet (-1 bis 1), und bewegt ihn in einen Raum mehr wie (0 bis 1), abhängig davon, wie der Skalierungsfaktor gesetzt ist. Der Skalierungsfaktor ändert den endgültigen w-Wert entweder zu einem höheren oder niedrigeren Wert insgesamt.

Der Shader-Code sieht folgendermaßen aus.

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

[Ansehen auf JSFiddle](https://jsfiddle.net/tatumcreative/vk9r8h2c/)

![Den W-Komponenten füllen und eine Projektion erstellen.](part4.png)

Sehen Sie das kleine dunkelblaue Dreieck? Das ist eine zusätzliche Fläche, die zu unserem Objekt hinzugefügt wurde, weil die Rotation unserer Form diesen Winkel dazu gebracht hat, aus dem Clip-Raum herauszuragen, was dazu führt, dass die Ecke abgeschnitten wird. Siehe [Perspektivprojektionsmatrix](#perspektivprojektionsmatrix) unten für eine Einführung, wie komplexere Matrizen verwendet werden können, um Clipping zu steuern und zu verhindern.

### Übung

Wenn das etwas abstrakt klingt, öffnen Sie den Vertex-Shader und spielen Sie mit dem Skalierungsfaktor herum und beobachten Sie, wie er die Vertices mehr zur Oberfläche hin schrumpft. Ändern Sie die w-Komponentenwerte vollständig für wirklich abgefahrene Darstellungen des Raums.

Im nächsten Abschnitt werden wir diesen Schritt des Kopierens von Z in den w-Slot nehmen und ihn in eine Matrix umwandeln.

## Einfache Projektion

Der letzte Schritt des Auffüllens der w-Komponente kann tatsächlich mit einer einfachen Matrix erreicht werden. Beginnen Sie mit der Identitätsmatrix:

```js
const identity = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];

MDN.multiplyPoint(identity, [2, 3, 4, 1]);
// [2, 3, 4, 1]
```

Dann verschieben Sie die 1 in der letzten Spalte um einen Platz nach oben.

```js
const copyZ = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0];

MDN.multiplyPoint(copyZ, [2, 3, 4, 1]);
// [2, 3, 4, 4]
```

Aber im letzten Beispiel haben wir `(z + 1) * scaleFactor` ausgeführt:

```js
const scaleFactor = 0.5;

// prettier-ignore
const simpleProjection = [
  1, 0, 0, 0,
  0, 1, 0, 0,
  0, 0, 1, scaleFactor,
  0, 0, 0, scaleFactor,
];

MDN.multiplyPoint(simpleProjection, [2, 3, 4, 1]);
// [2, 3, 4, 2.5]
```

Wenn wir es ein wenig weiter herausbrechen, können wir sehen, wie dies funktioniert:

```js
const x = 2 * 1 + 3 * 0 + 4 * 0 + 1 * 0;
const y = 2 * 0 + 3 * 1 + 4 * 0 + 1 * 0;
const z = 2 * 0 + 3 * 0 + 4 * 1 + 1 * 0;
const w = 2 * 0 + 3 * 0 + 4 * scaleFactor + 1 * scaleFactor;
```

Die letzte Zeile könnte vereinfacht werden zu:

```js
const w = 4 * scaleFactor + 1 * scaleFactor;
```

Dann den Skalierungsfaktor herausfaktorisieren, erhalten wir dies:

```js
const w = (4 + 1) * scaleFactor;
```

Was genau das gleiche ist wie das `(z + 1) * scaleFactor`, das wir im vorherigen Beispiel verwendet haben.

Im Box-Demo wird eine zusätzliche Methode `computeSimpleProjectionMatrix()` hinzugefügt. Diese wird in der `draw()`-Methode aufgerufen und erhält den Skalierungsfaktor als Parameter. Das Ergebnis sollte identisch mit dem letzten Beispiel sein:

```js
CubeDemo.prototype.computeSimpleProjectionMatrix = function (scaleFactor) {
  // prettier-ignore
  this.transforms.projection = [
    1, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 1, scaleFactor,
    0, 0, 0, scaleFactor,
  ];
};
```

Obwohl das Ergebnis identisch ist, ist der wichtige Schritt hier im Vertex-Shader. Anstatt das Vertex direkt zu verändern, wird es mit einer zusätzlichen **[Projektionsmatrix](#the_model_view_and_projection_matrices)** multipliziert, die (wie der Name schon sagt) 3D-Punkte auf eine 2D-Zeichenfläche projiziert:

```glsl
// Make sure to read the transformations in reverse order
gl_Position = projection * model * vec4(position, 1.0);
```

### Die Ergebnisse

[Ansehen auf JSFiddle](https://jsfiddle.net/tatumcreative/zwyLLcbw/)

![Eine einfache Projektionsmatrix](part5.png)

## Das Sichtvolumen

Bevor wir weiter zur Berechnung einer Perspektivprojektionsmatrix übergehen, müssen wir das Konzept des **[Sichtvolumens](https://de.wikipedia.org/wiki/Sichtvolumen)** (auch bekannt als **Sichtpyramide**) einführen. Dies ist der Raum, dessen Inhalte dem Benutzer aktuell sichtbar sind. Es ist der 3D-Bereich des Raums, der durch das Sichtfeld und die Entfernungen, die als nächstem und entferntestem Inhalt dargestellt werden sollen, definiert wird.

Beim Rendern müssen wir bestimmen, welche Polygone gerendert werden müssen, um die Szene darzustellen. Dies ist, was das Sichtvolumen definiert. Aber was ist überhaupt ein Frustum?

Ein [Frustum](https://de.wikipedia.org/wiki/Frustum) ist der 3D-Körper, der entsteht, wenn man einen beliebigen Körper nimmt und zwei Abschnitte davon mit zwei parallelen Ebenen abschneidet. Betrachten wir unsere Kamera, die einen Bereich betrachtet, der direkt vor ihrer Linse beginnt und sich in die Ferne erstreckt. Der sichtbare Bereich ist eine vierseitige Pyramide mit ihrer Spitze an der Linse, ihren vier Seiten entsprechend der Reichweite ihres peripheren Gesichtsfeldes und ihrer Basis an der entferntesten Distanz, die sie sehen kann, wie hier dargestellt:

![Eine Darstellung des gesamten Sichtbereichs einer Kamera. Dieser Bereich ist eine vierseitige Pyramide mit ihrer Spitze an der Linse und ihrer Basis an der maximal sichtbaren Weltentfernung.](fullcamerafov.svg)

Wenn wir dies verwenden würden, um die Polygone zu bestimmen, die in jedem Bild gerendert werden sollen, müsste unser Renderer jedes Polygon innerhalb dieser Pyramide rendern, bis ins Unendliche hinein, einschließlich Polygone, die der Linse sehr nahe sind — wahrscheinlich zu nahe, um nützlich zu sein (und sicherlich Dinge einschließend, die so nah sind, dass ein echter Mensch sie im gleichen Umfeld nicht fokussieren könnte).

Der erste Schritt zur Reduzierung der Anzahl der Polygone, die wir berechnen und rendern müssen, besteht darin, diese Pyramide in das Sichtvolumen zu verwandeln. Die zwei Ebenen, die wir verwenden, um die Vertices abzuschneiden, um die Polygonanzahl zu reduzieren, sind die **Near Clipping Plane** und die **Far Clipping Plane**.

In WebGL werden die Nah- und Fern-Clipping-Ebenen definiert, indem die Entfernung von der Linse zum nächsten Punkt auf einer Ebene spezifiziert wird, die senkrecht zur Blickrichtung steht. Alles, was sich näher an der Linse befindet als die Nah-Clipping-Ebene oder weiter davon entfernt als die Fern-Clipping-Ebene, wird entfernt. Dies ergibt das Sichtvolumen, das so aussieht:

![Eine Darstellung des Sichtvolumens der Kamera; die Nah- und Fernebenen haben einen Teil des Volumens entfernt und damit die Anzahl der Polygone reduziert.](camera_view_frustum.svg)

Die Menge der zu rendernden Objekte für jeden Frame wird im Wesentlichen durch die Menge aller Objekte in der Szene erstellt. Dann werden alle Objekte, die _vollständig_ außerhalb des Sichtvolumens liegen, aus der Menge entfernt. Anschließend werden Objekte, die teilweise aus dem Blickwinkel herausragen, beschnitten, indem Polygone entfernt werden, die vollständig außerhalb des Frustums liegen, und indem die Polygone, die aus dem Frustum herausragen, so beschnitten werden, dass sie es nicht mehr verlassen.

Nachdem dies erledigt wurde, haben wir die größte Menge an Polygonen, die vollständig innerhalb des Sichtvolumens liegt. Diese Liste wird in der Regel weiter reduziert, indem Prozesse wie [Back-Face-Culling](https://de.wikipedia.org/wiki/Back-Face-Culling) (Entfernung von Polygonen, deren Rückseite zur Kamera zeigt) und Occlusion-Culling unter Verwendung der [sichtbaren Oberflächenermittlung](https://de.wikipedia.org/wiki/Verdeckungsberechnung) (Entfernung von Polygonen, die nicht gesehen werden können, weil sie vollständig von Polygonen blockiert werden, die näher an der Linse liegen) angewendet werden.

## Perspektivprojektionsmatrix

Bis zu diesem Punkt haben wir unser eigenes 3D-Rendering-Setup Schritt für Schritt aufgebaut. Allerdings hat der aktuelle Code, wie wir ihn erstellt haben, einige Probleme. Zum einen wird er verzerrt, wann immer wir unser Fenster ändern. Ein weiteres ist, dass unsere einfache Projektion einen weiten Bereich von Werten für die Szenendaten nicht gut verarbeitet. Die meisten Szenen funktionieren nicht im Clip-Raum. Es wäre hilfreich, die zur Szene relevante Entfernung zu definieren, damit beim Konvertieren der Zahlen keine Präzision verloren geht. Schließlich ist es sehr hilfreich, eine fein abgestimmte Kontrolle darüber zu haben, welche Punkte innerhalb und außerhalb des Clip-Raums platziert werden. In den vorherigen Beispielen werden die Ecken des Würfels gelegentlich abgeschnitten.

Die **Perspektivprojektionsmatrix** ist ein Typ der Projektionsmatrix, der all diese Anforderungen erfüllt. Die Mathematik wird auch etwas komplexer und wird in diesen Beispielen nicht vollständig erklärt. Kurz gesagt, sie kombiniert die Teilung durch w (wie bei den vorherigen Beispielen) mit einigen genialen Manipulationen basierend auf [ähnlichen Dreiecken](<https://de.wikipedia.org/wiki/Ahnlichkeit_(Geometrie)>). Wenn Sie eine vollständige Erklärung der Mathematik dahinter lesen möchten, schauen Sie sich einige der folgenden Links an:

- [OpenGL Projektionsmatrix](https://www.songho.ca/opengl/gl_projectionmatrix.html)
- [Perspektivische Projektion](https://ogldev.org/)
- [Versuch, die Mathematik hinter der Perspektivprojektionsmatrix in WebGL zu verstehen](https://stackoverflow.com/questions/28286057/trying-to-understand-the-math-behind-the-perspective-matrix-in-webgl/28301213#28301213)

Eine wichtige Sache, die bei der Perspektivprojektionsmatrix, die unten verwendet wird, zu beachten ist, ist, dass sie die Z-Achse umkehrt. Im Clip-Raum geht z+ weg vom Betrachter, während mit dieser Matrix z+ auf den Betrachter zukommt.

Der Grund für das Umkehren der Z-Achse ist, dass das Clip-Raum-Koordinatensystem ein linkshändiges Koordinatensystem ist (wobei die Z-Achse vom Betrachter weg und in den Bildschirm hinein zeigt), während die Konvention in Mathematik, Physik und 3D-Modellierung, sowie für das Betrachtungs- bzw. Augen-Koordinatensystem in OpenGL, darin besteht, ein rechtshändiges Koordinatensystem zu verwenden (Z-Achse zeigt aus dem Bildschirm in Richtung des Betrachters). Mehr darüber in den dazugehörigen Wikipedia-Artikeln: [Kartesisches Koordinatensystem](https://de.wikipedia.org/wiki/Kartesisches_Koordinatensystem#Orientierung_und_Händigkeit), [Rechte-Hand-Regel](https://de.wikipedia.org/wiki/Rechtshändigkeitsregel).

Werfen wir einen Blick auf eine Funktion `perspectiveMatrix()`, die die Perspektivprojektionsmatrix berechnet.

```js
MDN.perspectiveMatrix = function (
  fieldOfViewInRadians,
  aspectRatio,
  near,
  far,
) {
  const f = 1.0 / Math.tan(fieldOfViewInRadians / 2);
  const rangeInv = 1 / (near - far);

  // prettier-ignore
  return [
    f / aspectRatio, 0, 0, 0,
    0, f, 0, 0,
    0, 0, (near + far) * rangeInv, -1,
    0, 0, near * far * rangeInv * 2, 0,
  ];
};
```

Die vier Parameter für diese Funktion sind:

- `fieldOfViewInRadians`
  - : Ein Winkel, angegeben in Radiant, der angibt, wie viel von der Szene auf einmal für den Betrachter sichtbar ist. Je größer die Zahl, desto mehr ist für die Kamera sichtbar. Die Geometrie an den Rändern wird zunehmend verzerrt, was einem Weitwinkelobjektiv entspricht. Wenn das Sichtfeld größer ist, werden die Objekte typischerweise kleiner. Wenn das Sichtfeld kleiner ist, kann die Kamera immer weniger in der Szene sehen. Die Objekte werden durch die Perspektive viel weniger verzerrt und die Objekte scheinen viel näher an der Kamera zu sein.
- `aspectRatio`
  - : Das Seitenverhältnis der Szene, das dem Verhältnis von Breite zu Höhe entspricht. In diesen Beispielen ist das die Breite des Fensters geteilt durch die Höhe des Fensters. Die Einführung dieses Parameters löst endgültig das Problem, bei dem das Modell verzerrt wird, wenn die Leinwand geändert und umgeformt wird.
- `nearClippingPlaneDistance`
  - : Eine positive Zahl, die die Entfernung auf dem Bildschirm bis zu einer Ebene angibt, die senkrecht zum Boden steht, näher als die alles abgeschnitten wird. Dies wird in Clip-Raum auf -1 abgebildet und sollte nicht auf 0 gesetzt werden.
- `farClippingPlaneDistance`
  - : Eine positive Zahl, die die Entfernung zur Ebene angibt, die jenseits des Geometrie-Clippings liegt. Dies wird in Clip-Raum auf 1 abgebildet. Dieser Wert sollte relativ nahe an der Entfernung zur Geometriegehalten werden, um Präzisionsfehler beim Rendern zu vermeiden.

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

Zusätzlich (nicht gezeigt) wurden die Positions- und Größenmatrizen des Modells geändert, um es aus dem Clip-Raum in das größere Koordinatensystem zu bringen.

### Die Ergebnisse

[Ansehen auf JSFiddle](https://jsfiddle.net/tatumcreative/Lzxw7e1q/)

![Eine echte Perspektivmatrix](part6.png)

### Übungen

- Experimentieren Sie mit den Parametern der Perspektivprojektionsmatrix und der Modellmatrix.
- Ersetzen Sie die Perspektivprojektionsmatrix, um eine [orthographische Projektion](https://de.wikipedia.org/wiki/Orthographische_Projektion) zu verwenden. Im MDN WebGL-shared Code finden Sie die `MDN.orthographicMatrix()`. Diese kann die Funktion `MDN.perspectiveMatrix()` in `CubeDemo.prototype.computePerspectiveMatrix()` ersetzen.

## Ansichts-Matrix

Während einige Grafikbibliotheken eine virtuelle Kamera haben, die beim Zusammenstellen einer Szene positioniert und ausgerichtet werden kann, tun OpenGL (und infolgedessen auch WebGL) dies nicht. Hier kommt die **Ansichtsmatrix** ins Spiel. Ihre Aufgabe besteht darin, die Objekte in der Szene zu verschieben, zu drehen und zu skalieren, sodass sie relativ zum Betrachter entsprechend dessen Position und Ausrichtung richtig positioniert sind.

### Kamera simulieren

Dies nutzt einen der grundlegenden Aspekte von Einsteins spezieller Relativitätstheorie: das Prinzip der Bezugssysteme und der relativen Bewegung besagt, dass aus der Sicht eines Betrachters Sie die Änderung der Position und Ausrichtung des Betrachters simulieren können, indem Sie die gegenteilige Änderung auf die Objekte in der Szene anwenden. Das Ergebnis sieht aus Sicht des Betrachters in beiden Fällen identisch aus.

Stellen Sie sich ein auf einem Tisch stehendes Kästchen und eine Kamera vor, die einen Meter davon entfernt auf dem Tisch ruht und auf das Kästchen zeigt, dessen Vorderseite zur Kamera zeigt. Betrachten Sie dann das Abziehen des Kästchens von der Kamera, bis es zwei Meter entfernt ist (indem Sie einen Meter zur Z-Position der Kamera hinzufügen) und es dann zehn Zentimeter nach links verschieben. Das Kästchen zieht sich von der Kamera um diesen Betrag zurück und gleitet leicht nach rechts, wodurch es von der Kamera kleiner erscheint und ein kleiner Teil seiner linken Seite sichtbar wird.

Jetzt setzen wir die Szene zurück, indem wir das Kästchen wieder an seinen Ausgangspunkt stellen und die Kamera zwei Meter vom Kästchen entfernt halten und dabei auf es zeigen. Diesmal kann die Kamera jedoch nicht vom Tisch bewegt oder gedreht werden. Dies ist, wie das Arbeiten in WebGL ist. Wie simulieren wir dann das Bewegen der Kamera durch den Raum?

Anstatt die Kamera rückwärts und nach links zu bewegen, wenden wir die inverse Transformation auf das Kästchen an: Wir bewegen das _Kästchen_ einen Meter zurück und dann zehn Zentimeter nach rechts. Das Ergebnis aus der Perspektive jedes der beiden Objekte ist identisch.

Der letzte Schritt dabei ist es, die **Ansichtsmatrix** zu erstellen, die die Objekte in der Szene so transformiert, dass sie die aktuelle Position und Ausrichtung der Kamera simulieren. Unser derzeitiger Code kann den Würfel im Weltall bewegen und alles mit Perspektive projizieren, aber wir können die Kamera immer noch nicht bewegen.

Stellen Sie sich vor, Sie drehen mit einer physischen Kamera einen Film. Sie haben die Freiheit, die Kamera im Grunde überall zu platzieren, wo Sie möchten, und die Kamera in jede gewünschte Richtung zu schwenken. Um dies in der 3D-Grafik zu simulieren, verwenden wir eine Ansichtsmatrix, die die Position und Drehung dieser physischen Kamera simuliert.

Im Gegensatz zur Modellmatrix, die die Modell-Vertices direkt transformiert, bewegt die Ansichtsmatrix eine abstrakte Kamera herum. In Wirklichkeit bewegt der Vertex-Shader weiterhin nur die Modelle, während die "Kamera" stillsteht. Damit dies korrekt funktioniert, muss die inverse der Transformationsmatrix verwendet werden. Die inverse Matrix kehrt im Wesentlichen eine Transformation um, sodass, wenn wir die Kameransicht vorwärts bewegen, die inverse Matrix die Objekte in der Szene zurückbewegt.

Die folgende `computeViewMatrix()`-Methode animiert die Ansichtsmatrix, indem sie sich hinein und heraus und hin und her bewegt.

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

Nach diesem Schritt wird die GPU-Pipeline die aus dem Bereich liegenden Vertices abschneiden und das Modell an den Fragment-Shader zur Rasterisierung senden.

### Die Ergebnisse

[Ansehen auf JSFiddle](https://jsfiddle.net/tatumcreative/86fd797g/)

![Die Ansichtsmatrix](part7.png)

### Die Koordinatensysteme in Beziehung setzen

An diesem Punkt wäre es sinnvoll, einen Schritt zurückzutreten und die verschiedenen Koordinatensysteme, die wir verwenden, zu betrachten und zu benennen. Zuerst werden die Vertices des Würfels in **Modellraum** definiert. Um das Modell in der Szene zu bewegen, müssen diese Vertices in **Welt-Raum** konvertiert werden, indem die Modellmatrix angewendet wird.

Modellraum → Modellmatrix → Welt-Raum

Die Kamera hat noch nichts getan und die Punkte müssen erneut bewegt werden. Derzeit befinden sie sich im Welt-Raum, aber sie müssen zum **Ansichts-Raum** (mithilfe der Ansichts-Matrix) verschoben werden, um die Kameraposition zu repräsentieren.

Welt-Raum → Ansichtsmatrix → Ansichts-Raum

Schließlich muss eine **Projektion** (in unserem Fall die Perspektivprojektionsmatrix) hinzugefügt werden, um die Weltkoordinaten in Clip-Space-Koordinaten zu konvertieren.

Ansichts-Raum → Projektionsmatrix → Clip-Raum

### Übung

- Bewegen Sie die Kamera in der Szene umher.
- Fügen Sie einige Rotationsmatrizen zur Ansichtsmatrix hinzu, um sich umzusehen.
- Schließlich verfolgen Sie die Position der Maus. Verwenden Sie zwei Rotationsmatrizen, um die Kamera so zu positionieren, dass sie nach oben und unten schaut, basierend darauf, wo die Maus des Benutzers auf dem Bildschirm ist.

## Siehe auch

- [WebGL](/de/docs/Web/API/WebGL_API)
- [3D-Projektion](https://de.wikipedia.org/wiki/3D-Projektion)
