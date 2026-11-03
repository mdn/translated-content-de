---
title: Formen mit Canvas zeichnen
slug: Web/API/Canvas_API/Tutorial/Drawing_shapes
l10n:
  sourceCommit: e874c91a572640824bb4cd8e8ab5b6111fd04661
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Basic_usage", "Web/API/Canvas_API/Tutorial/Applying_styles_and_colors")}}

Nachdem wir unsere [Canvas-Umgebung](/de/docs/Web/API/Canvas_API/Tutorial/Basic_usage) eingerichtet haben, können wir uns genauer ansehen, wie man auf dem Canvas zeichnet. Am Ende dieses Artikels werden Sie wissen, wie Sie Rechtecke, Dreiecke, Linien, Kreisbögen und Kurven zeichnen. Dabei lernen Sie einige grundlegende Formen kennen. Beim Zeichnen von Objekten auf dem Canvas ist die Arbeit mit Pfaden unerlässlich. Wir werden sehen, wie das funktioniert.

## Das Raster

Bevor wir mit dem Zeichnen beginnen, müssen wir über das Canvas-Raster beziehungsweise den **Koordinatenraum** sprechen. Unser HTML-Grundgerüst von der vorherigen Seite enthielt ein Canvas-Element mit einer Breite und Höhe von jeweils 150 Pixeln.

![Canvas-Raster mit einem blauen Quadrat zur Veranschaulichung von Koordinaten und Achsen.](canvas_default_grid.svg)

Normalerweise entspricht eine Einheit im Raster einem Pixel auf dem Canvas. Der Ursprung dieses Rasters liegt in der _oberen linken_ Ecke bei den Koordinaten (0,0). Alle Elemente werden relativ zu diesem Ursprung platziert. Die obere linke Ecke des blauen Quadrats liegt somit bei den Koordinaten (x,y): x Pixel vom linken und y Pixel vom oberen Rand entfernt. Später in diesem Tutorial werden wir sehen, wie wir den Ursprung verschieben, das Raster drehen und sogar skalieren können. Vorerst bleiben wir jedoch bei der Standardeinstellung.

## Rechtecke zeichnen

Anders als {{Glossary("SVG", "SVG")}} unterstützt {{HTMLElement("canvas")}} nur zwei Grundformen: Rechtecke und Pfade (Listen von Punkten, die durch Linien verbunden sind). Alle anderen Formen müssen durch die Kombination eines oder mehrerer Pfade erstellt werden. Glücklicherweise stehen uns verschiedene Funktionen zum Zeichnen von Pfaden zur Verfügung, mit denen sich auch sehr komplexe Formen zusammensetzen lassen.

Sehen wir uns zunächst das Rechteck an. Drei Funktionen zeichnen Rechtecke auf dem Canvas:

- [`fillRect(x, y, width, height)`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect)
  - : Zeichnet ein ausgefülltes Rechteck.
- [`strokeRect(x, y, width, height)`](/de/docs/Web/API/CanvasRenderingContext2D/strokeRect)
  - : Zeichnet den Umriss eines Rechtecks.
- [`clearRect(x, y, width, height)`](/de/docs/Web/API/CanvasRenderingContext2D/clearRect)
  - : Löscht den angegebenen rechteckigen Bereich und macht ihn vollständig transparent.

Alle drei Funktionen verwenden dieselben Parameter. `x` und `y` geben die Position der oberen linken Ecke des Rechtecks auf dem Canvas relativ zum Ursprung an. `width` und `height` bestimmen die Größe des Rechtecks.

Nachfolgend sehen Sie die Funktion `draw()` von der vorherigen Seite. Jetzt verwendet sie diese drei Funktionen.

### Beispiel für eine rechteckige Form

```html hidden
<canvas id="my-canvas" width="150" height="150"></canvas>
```

```js
function draw() {
  const canvas = document.getElementById("my-canvas");
  const ctx = canvas.getContext("2d");

  ctx.fillRect(25, 25, 100, 100);
  ctx.clearRect(45, 45, 60, 60);
  ctx.strokeRect(50, 50, 50, 50);
}
```

```js hidden
draw();
```

Das Ergebnis dieses Beispiels sehen Sie unten.

{{EmbedLiveSample("Rectangular_shape_example", "", "160")}}

Die Funktion `fillRect()` zeichnet ein großes schwarzes Quadrat mit einer Seitenlänge von 100 Pixeln. Anschließend löscht `clearRect()` in der Mitte ein Quadrat von 60 × 60 Pixeln. Danach wird `strokeRect()` aufgerufen, um innerhalb des gelöschten Quadrats einen rechteckigen Umriss von 50 × 50 Pixeln zu erzeugen (_konzeptionell_ 50 × 50; tatsächlich sind es 52 × 52, wie im nächsten Abschnitt erläutert wird).

Auf den folgenden Seiten werden wir zwei Alternativen zu `clearRect()` kennenlernen. Außerdem werden wir sehen, wie sich die Farbe und der Strichstil der gezeichneten Formen ändern lassen.

Anders als die Pfadfunktionen, die wir im nächsten Abschnitt kennenlernen, zeichnen alle drei Rechteckfunktionen unmittelbar auf den Canvas.

## Unscharfe Kanten?

Im obigen Rechteckbeispiel und in allen folgenden Beispielen fällt Ihnen möglicherweise auf, dass die Kanten der Formen unschärfer wirken als die entsprechenden Formen, die mit SVG oder CSS gezeichnet wurden. Das liegt nicht daran, dass die Canvas API keine scharfen Kanten zeichnen könnte. Vielmehr hängt es damit zusammen, wie das Canvas-Raster den tatsächlichen Pixeln auf dem Bildschirm zugeordnet wird und, in bestimmten Fällen, wie der Browser den Canvas skaliert. Falls das obige Beispiel den Effekt nicht deutlich genug zeigt, vergrößern wir den Canvas mit CSS:

```html live-sample___seeing_blurry_edges live-sample___seeing_blurry_edges_2 live-sample___seeing_blurry_edges_3
<canvas id="canvas" width="15" height="15"></canvas>
```

```css live-sample___seeing_blurry_edges live-sample___seeing_blurry_edges_2 live-sample___seeing_blurry_edges_3
#canvas {
  width: 300px;
  height: 300px;
}
```

```js live-sample___seeing_blurry_edges live-sample___seeing_blurry_edges_2
function draw() {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  ctx.strokeRect(2, 2, 10, 10);
  ctx.fillRect(7, 7, 1, 1);
}
```

```js hidden live-sample___seeing_blurry_edges live-sample___seeing_blurry_edges_2 live-sample___seeing_blurry_edges_3
draw();
```

{{EmbedLiveSample("Seeing blurry edges", "", "350")}}

In diesem Beispiel erstellen wir einen sehr kleinen Canvas (15 × 15), skalieren ihn aber anschließend mit CSS auf 300 × 300 Pixel. Dadurch wird jedes Canvas-Pixel nun als Block von 20 × 20 CSS-Pixeln dargestellt. Wir zeichnen den Umriss eines Rechtecks von (2,2) bis (12,12) und ein ausgefülltes Rechteck von (7,7) bis (8,8). Das Ergebnis wirkt _sehr_ unscharf. Der Grund dafür ist, dass der Browser beim Skalieren von Rasterbildern standardmäßig einen Glättungsalgorithmus verwendet, um die zusätzlichen Pixel zu interpolieren. Für Fotos oder Canvas-Grafiken mit geschwungenen Kanten eignet sich das gut, für Formen mit geraden Kanten dagegen weniger. Um das zu beheben, können wir {{cssxref("image-rendering")}} auf `pixelated` setzen:

```css live-sample___seeing_blurry_edges_2 live-sample___seeing_blurry_edges_3
#canvas {
  image-rendering: pixelated;
}
```

{{EmbedLiveSample("Seeing blurry edges 2", "", "350")}}

Wenn der Browser den Canvas nun skaliert, bleibt die Pixelstruktur des Originals so weit wie möglich erhalten.

> [!NOTE]
> `image-rendering: pixelated` ist als Technik zur Erhaltung scharfer Kanten nicht frei von Problemen. Wenn CSS-Pixel nicht mit Geräte-Pixeln übereinstimmen (wenn [`devicePixelRatio`](/de/docs/Web/API/Window/devicePixelRatio) keine ganze Zahl ist), können manche Pixel größer gezeichnet werden als andere. Dadurch entsteht ein uneinheitliches Erscheinungsbild. Dieses Problem lässt sich allerdings nicht leicht lösen, da Geräte-Pixel nicht exakt ausgefüllt werden können, wenn CSS-Pixel nicht präzise auf sie abgebildet werden können.

Jetzt wird jedoch ein weiteres Problem sichtbar, das Sie auch schon im ursprünglichen Rechteckbeispiel beobachten können: Der Rechteckumriss ist nicht nur 2 statt 1 Pixel breit, sondern erscheint außerdem grau statt standardmäßig schwarz. Das liegt daran, wie die Koordinaten als Grenzen der Form interpretiert werden.

Wenn Sie sich das Diagramm zum [Raster](#das_raster) oben noch einmal ansehen, erkennen Sie, dass Koordinaten wie `2` oder `12` kein Pixel bezeichnen, sondern die Grenze zwischen zwei Pixeln. In den folgenden Bildern stellt das Raster das Canvas-Koordinatenraster dar. Die Quadrate zwischen den Rasterlinien sind tatsächliche Bildschirmpixel. Im ersten Rasterbild ist ein Rechteck von (2,1) bis (5,5) ausgefüllt. Seine gesamte Fläche (hellrot) liegt innerhalb der Pixelgrenzen, sodass das resultierende ausgefüllte Rechteck scharfe Kanten hat.

![Drei Koordinatenraster. Die Quadrate zwischen den Rasterlinien entsprechen den tatsächlichen Bildschirmpixeln. Die obere linke Ecke jedes Rasters ist mit (0,0) beschriftet. Im ersten Raster ist ein Rechteck von (2,1) bis (5,5) hellrot ausgefüllt. Im zweiten Raster verbindet eine 1 Pixel breite dunkelblaue Linie (3,1) und (3,5). Sie ist auf einer Rasterlinie zentriert und reicht auf der x-Achse von 2,5 bis 3,5, also jeweils zur Hälfte in die Pixel auf beiden Seiten der Rasterlinie. Ein hellblauer Bereich erstreckt sich auf beiden Seiten von 2 bis 4 auf der x-Achse. Um diesen hellblauen Unschärfebereich zu vermeiden, verläuft der dunkelblaue Pfad im dritten Raster von (3,5; 1) bis (3,5; 5). Die 1 Pixel breite Linie füllt dadurch eine einzelne vertikale Pixelreihe vollständig und präzise aus.](canvas-grid.svg)

Betrachten wir einen Pfad von (3,1) bis (3,5) mit einer Linienstärke von `1.0`, ergibt sich die Situation im zweiten Bild. Die tatsächlich auszufüllende Fläche (dunkelblau) reicht auf beiden Seiten des Pfads jeweils nur bis zur Mitte der Pixel. Dafür muss eine Annäherung gerendert werden: Diese Pixel werden nur teilweise eingefärbt. Daher wird der gesamte Bereich (hellblau und dunkelblau) mit einer Farbe dargestellt, die nur halb so dunkel ist wie die eigentliche Strichfarbe. Genau das geschieht bei der `1.0` breiten Linie des Aufrufs `strokeRect()` im obigen Rechteckbeispiel.

Um dies zu beheben, müssen Sie Ihre Pfade sehr präzise anlegen. Da sich eine Linie mit der Breite `1.0` auf beiden Seiten des Pfads jeweils um eine halbe Einheit erstreckt, führt ein Pfad durch die _Mittelpunkte_ der Pixel zur Situation im dritten Bild: Die `1.0` breite Linie füllt genau eine vertikale Pixelreihe vollständig aus.

> [!NOTE]
> Beachten Sie, dass die Y-Position in unserem Beispiel mit der vertikalen Linie weiterhin auf einer Rasterlinie mit ganzzahliger Koordinate liegt. Wäre das nicht der Fall, würden an den Endpunkten teilweise bedeckte Pixel sichtbar.

Deshalb haben wir zuvor gesagt, dass der Aufruf `strokeRect(50, 50, 50, 50)` im Rechteckbeispiel _konzeptionell_ 50 × 50 Pixel ergibt, tatsächlich aber 52 × 52 Pixel. Der ausgefüllte Bereich des Umrisses beginnt bei (49,5; 49,5) und endet bei (100,5; 100,5). Aufgrund der teilweise ausgefüllten Pixel reicht die tatsächlich eingefärbte Fläche von (49,49) bis (101,101), ist also 52 × 52 Pixel groß und hat 2 Pixel breite Kanten. Für einen durchgehend 1 Pixel breiten Umriss mit einer Gesamtgröße von genau 50 × 50 Pixeln müssten Sie das Rechteck um die Breite des Umrisses (1px) _verkleinern_ und um die halbe Breite (0.5px) verschieben:

```js live-sample___seeing_blurry_edges_3
function draw() {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  ctx.strokeRect(2.5, 2.5, 9, 9);
  ctx.fillRect(7, 7, 1, 1);
}
```

{{EmbedLiveSample("Seeing blurry edges 3", "", "350")}}

Bei Linien mit geradzahliger Breite entspricht jede Hälfte einer ganzzahligen Anzahl von Pixeln. Der Pfad sollte daher zwischen Pixeln verlaufen (also von (3,1) bis (3,5)) und nicht durch deren Mitte.

Das mag bei der ersten Arbeit mit skalierbaren 2D-Grafiken etwas mühsam sein. Wenn Sie jedoch auf das Pixelraster und die Position der Pfade achten, sehen Ihre Zeichnungen unabhängig von der Skalierung oder anderen Transformationen korrekt aus. Eine vertikale Linie mit der Breite 1.0, die an der richtigen Position gezeichnet wurde, wird bei einer Vergrößerung um den Faktor 2 zu einer scharfen, 2 Pixel breiten Linie und bleibt an der richtigen Position.

Teilweise ausgefüllte Pixel treten auch bei Formen auf, die nicht am Pixelraster ausgerichtet sind. Betrachten Sie beispielsweise ein gedrehtes Rechteck (wie Sie eines zeichnen, erfahren Sie im nächsten Abschnitt). Um den Unterschied mit und ohne `image-rendering: pixelated` zu zeigen, haben wir zwei Canvases nebeneinander und einen dritten in voller Größe mit Rasterlinien:

```html hidden live-sample___seeing_blurry_edges_4
<canvas id="canvas1" width="12" height="12"></canvas>
<canvas id="canvas2" width="12" height="12"></canvas>
<canvas id="canvas3" width="240" height="240"></canvas>
```

```css hidden live-sample___seeing_blurry_edges_4
html,
body {
  width: 800px;
  overflow-x: scroll;
}

@media (width < 500px) {
  html,
  body {
    width: 300px;
  }
}

#canvas1,
#canvas2 {
  width: 240px;
  height: 240px;
}
#canvas2 {
  image-rendering: pixelated;
}
```

```js live-sample___seeing_blurry_edges_4
function draw(canvasId) {
  const canvas = document.getElementById(canvasId);
  const ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.moveTo(3, 2);
  ctx.lineTo(9, 4.5);
  ctx.lineTo(6.5, 10.5);
  ctx.lineTo(0.5, 8);
  ctx.closePath();
  ctx.fill();
}

function drawFullScale() {
  const canvas = document.getElementById("canvas3");
  const ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.moveTo(60, 40);
  ctx.lineTo(180, 90);
  ctx.lineTo(130, 210);
  ctx.lineTo(10, 160);
  ctx.closePath();
  ctx.fill();
  ctx.strokeStyle = "lightgray";
  for (let i = 0; i < 16; i++) {
    ctx.moveTo(i * 20, 0);
    ctx.lineTo(i * 20, 300);
    ctx.moveTo(0, i * 20);
    ctx.lineTo(300, i * 20);
    ctx.stroke();
  }
}
```

```js hidden live-sample___seeing_blurry_edges_4
draw("canvas1");
draw("canvas2");
drawFullScale();
```

{{EmbedLiveSample("Seeing blurry edges 4", "", "350")}}

Wenn das _Vergrößern_ eines Bildes es unschärfer erscheinen lässt als beabsichtigt, kann das _Verkleinern_ eines Bildes es _schärfer_ erscheinen lassen. Wenn ein Canvas beispielsweise auf dem Bildschirm 300 × 150 Pixel groß sein soll, können Sie ihn mit 600 × 300 Pixeln erstellen und anschließend mit CSS verkleinern. Das ist besonders auf Bildschirmen mit hoher Pixeldichte (etwa Apples Retina-Displays) nützlich, auf denen ein CSS-Pixel durch mehrere Bildschirmpixel dargestellt wird. Wenn Sie dort einen Canvas mit genau 300 × 150 Pixeln zeichnen, hat er nicht dieselbe Pixelauflösung wie andere Elemente auf der Seite.

## Pfade zeichnen

Sehen wir uns nun Pfade an. Ein Pfad ist eine Liste von Punkten, die durch Liniensegmente verbunden sind. Diese Segmente können unterschiedliche Formen haben, gerade oder gekrümmt sein sowie unterschiedliche Breiten und Farben aufweisen. Ein Pfad oder auch ein Teilpfad kann geschlossen sein. Um mithilfe von Pfaden Formen zu erstellen, sind einige zusätzliche Schritte nötig:

1. Zuerst erstellen Sie den Pfad.
2. Dann zeichnen Sie mithilfe von [Zeichenbefehlen](/de/docs/Web/API/CanvasRenderingContext2D#paths) in den Pfad.
3. Sobald der Pfad erstellt ist, können Sie seinen Umriss zeichnen oder ihn ausfüllen, um ihn darzustellen.

Für diese Schritte werden die folgenden Funktionen verwendet:

- [`beginPath()`](/de/docs/Web/API/CanvasRenderingContext2D/beginPath)
  - : Erstellt einen neuen Pfad. Nachfolgende Zeichenbefehle werden auf diesen Pfad angewendet und bauen ihn auf.
- [Pfadmethoden](/de/docs/Web/API/CanvasRenderingContext2D#paths)
  - : Methoden zum Festlegen verschiedener Pfade für Objekte.
- [`closePath()`](/de/docs/Web/API/CanvasRenderingContext2D/closePath)
  - : Fügt dem Pfad eine gerade Linie zum Anfang des aktuellen Teilpfads hinzu.
- [`stroke()`](/de/docs/Web/API/CanvasRenderingContext2D/stroke)
  - : Zeichnet die Form, indem ihr Umriss nachgezogen wird.
- [`fill()`](/de/docs/Web/API/CanvasRenderingContext2D/fill)
  - : Zeichnet eine ausgefüllte Form, indem die vom Pfad eingeschlossene Fläche gefüllt wird.

Der erste Schritt beim Erstellen eines Pfads ist der Aufruf von `beginPath()`. Intern werden Pfade als Liste von Teilpfaden (Linien, Kreisbögen usw.) gespeichert, die zusammen eine Form bilden. Bei jedem Aufruf dieser Methode wird die Liste zurückgesetzt, sodass wir mit dem Zeichnen neuer Formen beginnen können.

> [!NOTE]
> Wenn der aktuelle Pfad leer ist, beispielsweise unmittelbar nach einem Aufruf von `beginPath()` oder bei einem neu erstellten Canvas, wird der erste Befehl zum Erstellen eines Pfads immer wie ein `moveTo()` behandelt – unabhängig davon, welcher Befehl tatsächlich aufgerufen wurde. Deshalb sollten Sie nach dem Zurücksetzen eines Pfads fast immer ausdrücklich einen Startpunkt festlegen.

Im zweiten Schritt rufen wir die Methoden auf, die die zu zeichnenden Pfade tatsächlich festlegen. Diese werden wir gleich kennenlernen.

Der dritte und optionale Schritt ist der Aufruf von `closePath()`. Diese Methode versucht, die Form zu schließen, indem sie eine gerade Linie vom aktuellen Punkt zum Anfangspunkt zeichnet. Ist die Form bereits geschlossen oder enthält die Liste nur einen Punkt, bewirkt die Funktion nichts.

> [!NOTE]
> Beim Aufruf von `fill()` werden alle offenen Formen automatisch geschlossen. Sie müssen `closePath()` daher nicht aufrufen. Bei `stroke()` ist das **nicht** der Fall.

### Ein Dreieck zeichnen

Der Code zum Zeichnen eines Dreiecks könnte beispielsweise so aussehen:

```html hidden
<canvas id="my-canvas" width="100" height="100"></canvas>
```

```js
function draw() {
  const canvas = document.getElementById("my-canvas");
  const ctx = canvas.getContext("2d");

  ctx.beginPath();
  ctx.moveTo(75, 50);
  ctx.lineTo(100, 75);
  ctx.lineTo(100, 25);
  ctx.fill();
}
```

```js hidden
draw();
```

Das Ergebnis sieht so aus:

{{EmbedLiveSample("Drawing_a_triangle", "", "110")}}

### Den Stift bewegen

Eine sehr nützliche Funktion, die selbst nichts zeichnet, aber Teil der oben beschriebenen Pfadliste wird, ist `moveTo()`. Stellen Sie sich vor, Sie heben einen Stift von einer Stelle auf einem Blatt Papier ab und setzen ihn an einer anderen wieder auf.

- [`moveTo(x, y)`](/de/docs/Web/API/CanvasRenderingContext2D/moveTo)
  - : Bewegt den Stift zu den durch `x` und `y` angegebenen Koordinaten.

Wenn der Canvas initialisiert oder `beginPath()` aufgerufen wird, verwenden Sie normalerweise `moveTo()`, um den Startpunkt an eine andere Stelle zu setzen. Mit `moveTo()` können wir auch nicht miteinander verbundene Pfade zeichnen. Sehen Sie sich das folgende Smiley-Gesicht an.

Wenn Sie es selbst ausprobieren möchten, können Sie den folgenden Codeausschnitt verwenden. Fügen Sie ihn einfach in die Funktion `draw()` ein, die wir zuvor kennengelernt haben.

```html hidden
<canvas id="my-canvas" width="150" height="150"></canvas>
```

```js
function draw() {
  const canvas = document.getElementById("my-canvas");
  const ctx = canvas.getContext("2d");

  ctx.beginPath();
  ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
  ctx.moveTo(110, 75);
  ctx.arc(75, 75, 35, 0, Math.PI, false); // Mouth (clockwise)
  ctx.moveTo(65, 65);
  ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // Left eye
  ctx.moveTo(95, 65);
  ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // Right eye
  ctx.stroke();
}
```

```js hidden
draw();
```

Das Ergebnis sieht so aus:

{{EmbedLiveSample("Moving_the_pen", "", "160")}}

Wenn Sie die Verbindungslinien sehen möchten, können Sie die Zeilen entfernen, die `moveTo()` aufrufen.

> [!NOTE]
> Mehr über die Funktion `arc()` erfahren Sie im folgenden Abschnitt [Kreisbögen](#kreisbögen).

### Linien

Zum Zeichnen gerader Linien verwenden Sie die Methode `lineTo()`.

- [`lineTo(x, y)`](/de/docs/Web/API/CanvasRenderingContext2D/lineTo)
  - : Zeichnet eine Linie von der aktuellen Zeichenposition zu der durch `x` und `y` angegebenen Position.

Diese Methode nimmt zwei Argumente entgegen: `x` und `y`, die Koordinaten des Linienendpunkts. Der Startpunkt hängt von zuvor gezeichneten Pfaden ab: Der Endpunkt des vorherigen Pfads ist der Startpunkt des nächsten usw. Mit `moveTo()` lässt sich der Startpunkt ebenfalls ändern.

Das folgende Beispiel zeichnet zwei Dreiecke: eines ausgefüllt und eines als Umriss.

```html hidden
<canvas id="my-canvas" width="150" height="150"></canvas>
```

```js
function draw() {
  const canvas = document.getElementById("my-canvas");
  const ctx = canvas.getContext("2d");

  // Filled triangle
  ctx.beginPath();
  ctx.moveTo(25, 25);
  ctx.lineTo(105, 25);
  ctx.lineTo(25, 105);
  ctx.fill();

  // Stroked triangle
  ctx.beginPath();
  ctx.moveTo(125, 125);
  ctx.lineTo(125, 45);
  ctx.lineTo(45, 125);
  ctx.closePath();
  ctx.stroke();
}
```

```js hidden
draw();
```

Zu Beginn wird `beginPath()` aufgerufen, um einen neuen Pfad für die Form anzulegen. Anschließend setzen wir den Startpunkt mit `moveTo()` an die gewünschte Position. Daraufhin werden zwei Linien gezeichnet, die zwei Seiten des Dreiecks bilden.

{{EmbedLiveSample("Lines", "", "160")}}

Sie werden den Unterschied zwischen dem ausgefüllten Dreieck und dem Dreieck mit Umriss bemerken. Wie oben erwähnt, liegt das daran, dass Formen beim Ausfüllen eines Pfads automatisch geschlossen werden, beim Zeichnen des Umrisses aber nicht. Würden wir beim Dreieck mit Umriss `closePath()` weglassen, würden nur zwei Linien statt eines vollständigen Dreiecks gezeichnet.

### Kreisbögen

Zum Zeichnen von Kreisbögen oder Kreisen verwenden wir die Methoden `arc()` oder `arcTo()`.

- [`arc(x, y, radius, startAngle, endAngle, counterclockwise)`](/de/docs/Web/API/CanvasRenderingContext2D/arc)
  - : Zeichnet einen Kreisbogen mit Mittelpunkt an der Position _(x, y)_ und Radius _r_, der bei _startAngle_ beginnt und bei _endAngle_ endet. Die Zeichenrichtung wird durch _counterclockwise_ angegeben (standardmäßig im Uhrzeigersinn).
- [`arcTo(x1, y1, x2, y2, radius)`](/de/docs/Web/API/CanvasRenderingContext2D/arcTo)
  - : Zeichnet einen Kreisbogen mit den angegebenen Kontrollpunkten und dem angegebenen Radius, der durch eine gerade Linie mit dem vorherigen Punkt verbunden wird.

Sehen wir uns die Methode `arc` mit ihren sechs Parametern genauer an: `x` und `y` sind die Koordinaten des Mittelpunkts des Kreises, auf dem der Bogen gezeichnet werden soll. `radius` ist selbsterklärend. Die Parameter `startAngle` und `endAngle` bestimmen den Anfangs- und Endwinkel des Bogens im Bogenmaß entlang der Kreislinie. Sie werden von der x-Achse aus gemessen. Der Parameter `counterclockwise` ist ein boolescher Wert: Bei `true` wird der Bogen gegen den Uhrzeigersinn gezeichnet, andernfalls im Uhrzeigersinn.

> [!NOTE]
> Winkel werden in der Funktion `arc` im Bogenmaß gemessen, nicht in Grad. Um Grad in das Bogenmaß umzurechnen, können Sie den folgenden JavaScript-Ausdruck verwenden: `radians = (Math.PI/180)*degrees`.

Das folgende Beispiel ist etwas komplexer als die bisherigen. Es zeichnet zwölf verschiedene Kreisbögen mit unterschiedlichen Winkeln und Füllungen.

Mit den beiden [`for`-Schleifen](/de/docs/Web/JavaScript/Reference/Statements/for) durchlaufen wir die Zeilen und Spalten der Kreisbögen. Für jeden Bogen beginnen wir mit einem Aufruf von `beginPath()` einen neuen Pfad. Im Code ist jeder Parameter für den Bogen zur besseren Übersichtlichkeit in einer Variablen gespeichert. In der Praxis ist das nicht unbedingt erforderlich.

Die Koordinaten `x` und `y` dürften klar sein. `radius` und `startAngle` sind fest vorgegeben. `endAngle` beginnt in der ersten Spalte bei 180 Grad (einem Halbkreis) und wird in Schritten von 90 Grad erhöht, bis in der letzten Spalte ein vollständiger Kreis entsteht.

Der Ausdruck für den Parameter `clockwise` bewirkt, dass die Bögen in der ersten und dritten Zeile im Uhrzeigersinn und in der zweiten und vierten Zeile gegen den Uhrzeigersinn gezeichnet werden. Schließlich sorgt die `if`-Anweisung dafür, dass in der oberen Hälfte die Umrisse der Bögen gezeichnet und die Bögen in der unteren Hälfte ausgefüllt werden.

> [!NOTE]
> Dieses Beispiel benötigt einen etwas größeren Canvas als die anderen Beispiele auf dieser Seite: 150 × 200 Pixel.

```html hidden
<canvas id="my-canvas" width="150" height="200"></canvas>
```

```js
function draw() {
  const canvas = document.getElementById("my-canvas");
  const ctx = canvas.getContext("2d");

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 3; j++) {
      ctx.beginPath();
      const x = 25 + j * 50; // x coordinate
      const y = 25 + i * 50; // y coordinate
      const radius = 20; // Arc radius
      const startAngle = 0; // Starting point on circle
      const endAngle = Math.PI + (Math.PI * j) / 2; // End point on circle
      const counterclockwise = i % 2 !== 0; // clockwise or counterclockwise

      ctx.arc(x, y, radius, startAngle, endAngle, counterclockwise);

      if (i > 1) {
        ctx.fill();
      } else {
        ctx.stroke();
      }
    }
  }
}
```

```js hidden
draw();
```

{{EmbedLiveSample("Arcs", "", "210")}}

### Bézier- und quadratische Kurven

Die nächste verfügbare Art von Pfaden sind {{Glossary("Bezier_curve", "Bézierkurven")}}. Es gibt sie als kubische und quadratische Kurven. Sie werden üblicherweise zum Zeichnen komplexer organischer Formen verwendet.

- [`quadraticCurveTo(cp1x, cp1y, x, y)`](/de/docs/Web/API/CanvasRenderingContext2D/quadraticCurveTo)
  - : Zeichnet eine quadratische Bézierkurve von der aktuellen Stiftposition bis zu dem durch `x` und `y` angegebenen Endpunkt. Dabei wird der durch `cp1x` und `cp1y` angegebene Kontrollpunkt verwendet.
- [`bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)`](/de/docs/Web/API/CanvasRenderingContext2D/bezierCurveTo)
  - : Zeichnet eine kubische Bézierkurve von der aktuellen Stiftposition bis zu dem durch `x` und `y` angegebenen Endpunkt. Dabei werden die durch (`cp1x`, `cp1y`) und (`cp2x`, `cp2y`) angegebenen Kontrollpunkte verwendet.

Der Unterschied besteht darin, dass eine quadratische Bézierkurve einen Anfangs- und einen Endpunkt (blaue Punkte) und nur einen **Kontrollpunkt** (roter Punkt) hat, während eine kubische Bézierkurve zwei Kontrollpunkte verwendet.
![Vergleich einer quadratischen und einer kubischen Bézierkurve.](canvas_curves.png)

Die Parameter `x` und `y` sind bei beiden Methoden die Koordinaten des Endpunkts. `cp1x` und `cp1y` sind die Koordinaten des ersten Kontrollpunkts, `cp2x` und `cp2y` die des zweiten.

Die Verwendung quadratischer und kubischer Bézierkurven kann anspruchsvoll sein. Anders als bei Vektorzeichenprogrammen wie Adobe Illustrator erhalten wir keine unmittelbare visuelle Rückmeldung zu unseren Eingaben. Dadurch wird das Zeichnen komplexer Formen recht schwierig. Im folgenden Beispiel zeichnen wir einige einfache organische Formen. Mit genügend Zeit und vor allem Geduld lassen sich aber auch deutlich komplexere Formen erstellen.

Die Beispiele selbst sind nicht besonders schwierig. In beiden Fällen werden nacheinander Kurven gezeichnet, die schließlich eine vollständige Form ergeben.

#### Quadratische Bézierkurven

Dieses Beispiel verwendet mehrere quadratische Bézierkurven, um eine Sprechblase darzustellen.

```html hidden
<canvas id="my-canvas" width="150" height="150"></canvas>
```

```js
function draw() {
  const canvas = document.getElementById("my-canvas");
  const ctx = canvas.getContext("2d");

  // Quadratic curves example
  ctx.beginPath();
  ctx.moveTo(75, 25);
  ctx.quadraticCurveTo(25, 25, 25, 62.5);
  ctx.quadraticCurveTo(25, 100, 50, 100);
  ctx.quadraticCurveTo(50, 120, 30, 125);
  ctx.quadraticCurveTo(60, 120, 65, 100);
  ctx.quadraticCurveTo(125, 100, 125, 62.5);
  ctx.quadraticCurveTo(125, 25, 75, 25);
  ctx.stroke();
}
```

```js hidden
draw();
```

{{EmbedLiveSample("Quadratic_Bezier_curves", "", "160")}}

#### Kubische Bézierkurven

Dieses Beispiel zeichnet mit kubischen Bézierkurven ein Herz.

```html hidden
<canvas id="my-canvas" width="150" height="150"></canvas>
```

```js
function draw() {
  const canvas = document.getElementById("my-canvas");
  const ctx = canvas.getContext("2d");

  // Cubic curves example
  ctx.beginPath();
  ctx.moveTo(75, 40);
  ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
  ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
  ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
  ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
  ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
  ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
  ctx.fill();
}
```

```js hidden
draw();
```

{{EmbedLiveSample("Cubic_Bezier_curves", "", "160")}}

### Rechtecke

Zusätzlich zu den drei Methoden aus dem Abschnitt [Rechtecke zeichnen](#rechtecke_zeichnen), die Rechtecke direkt auf den Canvas zeichnen, gibt es die Methode `rect()`. Sie fügt dem aktuell geöffneten Pfad einen rechteckigen Pfad hinzu.

- [`rect(x, y, width, height)`](/de/docs/Web/API/CanvasRenderingContext2D/rect)
  - : Zeichnet ein Rechteck, dessen obere linke Ecke durch (`x`, `y`) und dessen Größe durch `width` und `height` angegeben wird.

Bevor diese Methode ausgeführt wird, wird automatisch `moveTo()` mit den Parametern (x,y) aufgerufen. Mit anderen Worten: Die aktuelle Stiftposition wird automatisch auf diese Koordinaten gesetzt.

### Formen kombinieren

Bisher wurde in jedem Beispiel auf dieser Seite nur eine Art von Pfadfunktion pro Form verwendet. Es gibt jedoch keine Beschränkung hinsichtlich der Anzahl oder Art der Pfade, mit denen Sie eine Form erstellen können. Kombinieren wir in diesem letzten Beispiel alle Pfadfunktionen, um eine Reihe sehr bekannter Spielfiguren zu zeichnen.

```html hidden
<canvas id="my-canvas" width="200" height="185"></canvas>
```

```js
function draw() {
  const canvas = document.getElementById("my-canvas");
  const ctx = canvas.getContext("2d");

  roundedRect(ctx, 12, 12, 184, 168, 15);
  roundedRect(ctx, 19, 19, 170, 154, 9);
  roundedRect(ctx, 53, 53, 49, 33, 10);
  roundedRect(ctx, 53, 119, 49, 16, 6);
  roundedRect(ctx, 135, 53, 49, 33, 10);
  roundedRect(ctx, 135, 119, 25, 49, 10);

  ctx.beginPath();
  ctx.arc(37, 37, 13, Math.PI / 7, -Math.PI / 7, false);
  ctx.lineTo(31, 37);
  ctx.fill();

  for (let i = 0; i < 8; i++) {
    ctx.fillRect(51 + i * 16, 35, 4, 4);
  }

  for (let i = 0; i < 6; i++) {
    ctx.fillRect(115, 51 + i * 16, 4, 4);
  }

  for (let i = 0; i < 8; i++) {
    ctx.fillRect(51 + i * 16, 99, 4, 4);
  }

  ctx.beginPath();
  ctx.moveTo(83, 116);
  ctx.lineTo(83, 102);
  ctx.bezierCurveTo(83, 94, 89, 88, 97, 88);
  ctx.bezierCurveTo(105, 88, 111, 94, 111, 102);
  ctx.lineTo(111, 116);
  ctx.lineTo(106.333, 111.333);
  ctx.lineTo(101.666, 116);
  ctx.lineTo(97, 111.333);
  ctx.lineTo(92.333, 116);
  ctx.lineTo(87.666, 111.333);
  ctx.lineTo(83, 116);
  ctx.fill();

  ctx.fillStyle = "white";
  ctx.beginPath();
  ctx.moveTo(91, 96);
  ctx.bezierCurveTo(88, 96, 87, 99, 87, 101);
  ctx.bezierCurveTo(87, 103, 88, 106, 91, 106);
  ctx.bezierCurveTo(94, 106, 95, 103, 95, 101);
  ctx.bezierCurveTo(95, 99, 94, 96, 91, 96);
  ctx.moveTo(103, 96);
  ctx.bezierCurveTo(100, 96, 99, 99, 99, 101);
  ctx.bezierCurveTo(99, 103, 100, 106, 103, 106);
  ctx.bezierCurveTo(106, 106, 107, 103, 107, 101);
  ctx.bezierCurveTo(107, 99, 106, 96, 103, 96);
  ctx.fill();

  ctx.fillStyle = "black";
  ctx.beginPath();
  ctx.arc(101, 102, 2, 0, Math.PI * 2, true);
  ctx.fill();

  ctx.beginPath();
  ctx.arc(89, 102, 2, 0, Math.PI * 2, true);
  ctx.fill();
}

// A utility function to draw a rectangle with rounded corners.

function roundedRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x, y + radius);
  ctx.arcTo(x, y + height, x + radius, y + height, radius);
  ctx.arcTo(x + width, y + height, x + width, y + height - radius, radius);
  ctx.arcTo(x + width, y, x + width - radius, y, radius);
  ctx.arcTo(x, y, x, y + radius, radius);
  ctx.stroke();
}
```

```js hidden
draw();
```

Das Ergebnis sieht so aus:

{{EmbedLiveSample("Making_combinations", "", "200")}}

Wir gehen nicht im Detail darauf ein, da es tatsächlich überraschend einfach ist. Am wichtigsten sind die Verwendung der Eigenschaft `fillStyle` des Zeichenkontexts und die Verwendung einer Hilfsfunktion (in diesem Fall `roundedRect()`). Hilfsfunktionen für häufig benötigte Zeichenelemente können sehr nützlich sein: Sie reduzieren sowohl die Menge als auch die Komplexität des benötigten Codes.

Wir werden uns `fillStyle` später in diesem Tutorial noch einmal genauer ansehen. Hier verwenden wir die Eigenschaft lediglich, um die Füllfarbe der Pfade von der Standardfarbe Schwarz auf Weiß und anschließend wieder zurückzusetzen.

### Formen mit Aussparungen

Um eine Form mit einer Aussparung zu zeichnen, müssen wir die Aussparung in der entgegengesetzten Umlaufrichtung zur äußeren Form zeichnen. Wir zeichnen also entweder die äußere Form im Uhrzeigersinn und die innere gegen den Uhrzeigersinn oder umgekehrt.

```html hidden
<canvas id="my-canvas" width="150" height="150"></canvas>
```

```js
function draw() {
  const canvas = document.getElementById("my-canvas");
  const ctx = canvas.getContext("2d");

  ctx.beginPath();

  // Outer shape clockwise ⟳
  ctx.moveTo(0, 0);
  ctx.lineTo(150, 0);
  ctx.lineTo(75, 129.9);

  // Inner shape counterclockwise ↺
  ctx.moveTo(75, 20);
  ctx.lineTo(50, 60);
  ctx.lineTo(100, 60);

  ctx.fill();
}
```

```js hidden
draw();
```

{{EmbedLiveSample("Shapes_with_holes", "", "160")}}

Im obigen Beispiel verläuft das äußere Dreieck im Uhrzeigersinn (von der oberen linken Ecke zur oberen rechten Ecke und schließlich nach unten), während das innere Dreieck gegen den Uhrzeigersinn verläuft (von oben zur unteren linken Ecke und schließlich zur unteren rechten Ecke).

## Path2D-Objekte

Wie wir im letzten Beispiel gesehen haben, kann das Zeichnen von Objekten auf dem Canvas eine Reihe von Pfaden und Zeichenbefehlen erfordern. Mit dem in neueren Browserversionen verfügbaren Objekt [`Path2D`](/de/docs/Web/API/Path2D) können Sie diese Zeichenbefehle zwischenspeichern oder aufzeichnen. Das vereinfacht den Code und verbessert die Leistung. Anschließend können Sie Ihre Pfade schnell erneut zeichnen.
Sehen wir uns an, wie ein `Path2D`-Objekt erstellt wird:

- [`Path2D()`](/de/docs/Web/API/Path2D/Path2D)
  - : Der Konstruktor **`Path2D()`** gibt ein neu instanziiertes `Path2D`-Objekt zurück. Optional kann ein anderer Pfad als Argument übergeben werden (wodurch eine Kopie erstellt wird) oder ein String mit [SVG-Pfaddaten](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Paths).

```js
new Path2D(); // empty path object
new Path2D(path); // copy from another Path2D object
new Path2D(d); // path from SVG path data
```

Alle oben vorgestellten [Pfadmethoden](/de/docs/Web/API/CanvasRenderingContext2D#paths) wie `moveTo`, `rect`, `arc` oder `quadraticCurveTo` stehen auch für `Path2D`-Objekte zur Verfügung.

Die `Path2D` API bietet außerdem die Möglichkeit, Pfade mit der Methode `addPath` zu kombinieren. Das kann beispielsweise nützlich sein, wenn Sie Objekte aus mehreren Bestandteilen zusammensetzen möchten.

- [`Path2D.addPath(path [, transform])`](/de/docs/Web/API/Path2D/addPath)
  - : Fügt dem aktuellen Pfad einen Pfad hinzu, optional mit einer Transformationsmatrix.

### Path2D-Beispiel

In diesem Beispiel erstellen wir ein Rechteck und einen Kreis. Beide werden als `Path2D`-Objekt gespeichert, damit sie später wiederverwendet werden können. Mit der neuen `Path2D` API wurden mehrere Methoden so erweitert, dass sie optional ein `Path2D`-Objekt anstelle des aktuellen Pfads verwenden können. Hier werden beispielsweise `stroke` und `fill` mit einem Pfad als Argument aufgerufen, um beide Objekte auf den Canvas zu zeichnen.

```html hidden
<canvas id="my-canvas" width="130" height="100"></canvas>
```

```js
function draw() {
  const canvas = document.getElementById("my-canvas");
  const ctx = canvas.getContext("2d");

  const rectangle = new Path2D();
  rectangle.rect(10, 10, 50, 50);

  const circle = new Path2D();
  circle.arc(100, 35, 25, 0, 2 * Math.PI);

  ctx.stroke(rectangle);
  ctx.fill(circle);
}
```

```js hidden
draw();
```

{{EmbedLiveSample("Path2D_example", "", "110")}}

### SVG-Pfade verwenden

Eine weitere leistungsfähige Funktion der neuen Canvas-`Path2D` API ist die Verwendung von [SVG-Pfaddaten](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Paths), um Pfade auf dem Canvas zu initialisieren. So können Sie Pfaddaten weitergeben und sowohl in SVG als auch auf dem Canvas wiederverwenden.

Der Pfad beginnt am Punkt (`M10 10`), verläuft dann 80 Einheiten waagerecht nach rechts (`h 80`), anschließend 80 Einheiten nach unten (`v 80`), dann 80 Einheiten nach links (`h -80`) und schließlich zurück zum Anfang (`z`). Sie finden dieses Beispiel auf der Seite zum [`Path2D`-Konstruktor](/de/docs/Web/API/Path2D/Path2D#using_svg_paths).

```js
const p = new Path2D("M10 10 h 80 v 80 h -80 Z");
```

{{PreviousNext("Web/API/Canvas_API/Tutorial/Basic_usage", "Web/API/Canvas_API/Tutorial/Applying_styles_and_colors")}}
