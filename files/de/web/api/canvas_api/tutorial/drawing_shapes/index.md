---
title: Zeichnen von Formen mit Canvas
slug: Web/API/Canvas_API/Tutorial/Drawing_shapes
l10n:
  sourceCommit: 134fdc70d877bb19076d2ba51b94f76098d9336a
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Basic_usage", "Web/API/Canvas_API/Tutorial/Applying_styles_and_colors")}}

Nachdem wir unsere [Canvas-Umgebung eingerichtet](/de/docs/Web/API/Canvas_API/Tutorial/Basic_usage) haben, können wir uns nun den Details zuwenden, wie auf dem Canvas gezeichnet wird. Am Ende dieses Artikels werden Sie gelernt haben, wie man Rechtecke, Dreiecke, Linien, Bögen und Kurven zeichnet und dabei einige der grundlegenden Formen kennenlernt. Mit Pfaden zu arbeiten ist wesentlich, wenn Objekte auf das Canvas gezeichnet werden, und wir werden sehen, wie dies gemacht werden kann.

## Das Raster

Bevor wir mit dem Zeichnen beginnen können, müssen wir über das Canvas-Raster oder den **Koordinatenraum** sprechen. Unser HTML-Skelett von der vorherigen Seite hatte ein Canvas-Element, das 150 Pixel breit und 150 Pixel hoch war.

![Canvas-Raster mit einem blauen Quadrat, das Koordinaten und Achsen demonstriert.](canvas_default_grid.png)

Normalerweise entspricht 1 Einheit im Raster einem Pixel auf dem Canvas. Der Ursprung dieses Rasters befindet sich in der _oberen linken_ Ecke bei der Koordinate (0,0). Alle Elemente werden relativ zu diesem Ursprung platziert. Somit ist die Position der oberen linken Ecke des blauen Quadrats x Pixel von links und y Pixel von oben, bei der Koordinate (x,y). Später in diesem Tutorial werden wir sehen, wie wir den Ursprung an eine andere Position verschieben, das Raster drehen und es sogar skalieren können, aber für den Moment bleiben wir beim Standard.

## Zeichnen von Rechtecken

Im Gegensatz zu {{Glossary("SVG", "SVG")}} unterstützt {{HTMLElement("canvas")}} nur zwei primitive Formen: Rechtecke und Pfade (Listen von Punkten, die durch Linien verbunden sind). Alle anderen Formen müssen durch die Kombination von einem oder mehreren Pfaden erstellt werden. Glücklicherweise haben wir eine Vielzahl von Pfadzeichnungsfunktionen, die es ermöglichen, sehr komplexe Formen zusammenzusetzen.

Zuerst schauen wir uns das Rechteck an. Es gibt drei Funktionen, die Rechtecke auf dem Canvas zeichnen:

- [`fillRect(x, y, width, height)`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect)
  - : Zeichnet ein ausgefülltes Rechteck.
- [`strokeRect(x, y, width, height)`](/de/docs/Web/API/CanvasRenderingContext2D/strokeRect)
  - : Zeichnet einen rechteckigen Umriss.
- [`clearRect(x, y, width, height)`](/de/docs/Web/API/CanvasRenderingContext2D/clearRect)
  - : Löscht den angegebenen rechteckigen Bereich und macht ihn vollständig transparent.

Jede dieser drei Funktionen nimmt dieselben Parameter entgegen. `x` und `y` geben die Position des oberen linken Eckpunkts des Rechtecks auf dem Canvas an (relativ zum Ursprung). `width` und `height` geben die Größe des Rechtecks an.

Unten ist die `draw()` Funktion von der vorherigen Seite, die nun diese drei Funktionen verwendet.

### Beispiel für rechteckige Form

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js
function draw() {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  ctx.fillRect(25, 25, 100, 100);
  ctx.clearRect(45, 45, 60, 60);
  ctx.strokeRect(50, 50, 50, 50);
}
```

```js hidden
draw();
```

Die Ausgabe dieses Beispiels wird unten gezeigt.

{{EmbedLiveSample("Rectangular_shape_example", "", "160")}}

Die `fillRect()` Funktion zeichnet ein großes schwarzes Quadrat, das 100 Pixel auf jeder Seite hat. Die `clearRect()` Funktion löscht dann ein 60x60 Pixel großes Quadrat aus der Mitte, und dann wird `strokeRect()` aufgerufen, um einen rechteckigen Umriss von 50x50 Pixeln innerhalb des gelöschten Quadrats zu erstellen (_konzeptionell_ 50x50; in Wirklichkeit sind es 52x52, wie der nächste Abschnitt erklären wird).

Auf den folgenden Seiten werden wir zwei alternative Methoden für `clearRect()` sehen und auch, wie man die Farbe und den Strichstil der gerenderten Formen ändert.

Im Gegensatz zu den Pfadfunktionen, die wir im nächsten Abschnitt sehen werden, zeichnen alle drei Rechteckfunktionen sofort auf das Canvas.

## Verschwommene Kanten sehen?

Im obigen Rechteckbeispiel und in allen weiteren Beispielen könnte es Ihnen auffallen, dass die Kanten der Formen verschwommener erscheinen könnten als die entsprechenden Formen, die mit SVG oder CSS gezeichnet werden. Dies liegt nicht daran, dass die Canvas-API nicht in der Lage wäre, scharfe Kanten zu zeichnen, sondern vielmehr an der Art und Weise, wie das Canvas-Raster auf die tatsächlichen Pixel auf dem Bildschirm abgebildet wird und auch, in bestimmten Fällen, wie der Browser das Canvas skaliert. Wenn das obige Beispiel nicht deutlich genug ist, vergrößern wir das Canvas mithilfe von CSS:

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

In diesem Beispiel erstellen wir unser Canvas wirklich klein (15x15), verwenden dann jedoch CSS, um es auf 300x300 Pixel zu skalieren. Das Ergebnis ist, dass jedes Canvas-Pixel nun durch einen 20x20 Block von CSS-Pixels dargestellt wird. Wir zeichnen ein umrandetes Rechteck von (2,2) bis (12,12) und ein gefülltes Rechteck von (7,7) bis (8,8). Es erscheint _wirklich_ verschwommen. Dies liegt daran, dass standardmäßig, wenn der Browser Rasterbilder skaliert, ein Glättungsalgorithmus verwendet wird, um die zusätzlichen Pixel zu interpolieren. Dies ist großartig für Fotografien oder Canvas-Grafiken mit geschwungenen Kanten, jedoch nicht so gut für geradlinige Formen. Um dies zu beheben, können wir {{cssxref("image-rendering")}} auf `pixelated` setzen:

```css live-sample___seeing_blurry_edges_2 live-sample___seeing_blurry_edges_3
#canvas {
  image-rendering: pixelated;
}
```

{{EmbedLiveSample("Seeing blurry edges 2", "", "350")}}

Nun, wenn der Browser das Canvas skaliert, bewahrt er die Pixelstruktur des Originals so weit wie möglich.

> [!NOTE]
> `image-rendering: pixelated` ist nicht ohne Probleme als Technik zur Erhaltung scharfer Kanten. Wenn CSS-Pixels nicht mit Geräte-Pixels übereinstimmen (wenn der [`devicePixelRatio`](/de/docs/Web/API/Window/devicePixelRatio) kein ganzzahliger Wert ist), können bestimmte Pixels größer als andere gezeichnet werden, was zu einem ungleichmäßigen Erscheinungsbild führt. Dies ist jedoch ein schwer zu lösendes Problem, da es unmöglich ist, Geräte-Pixels genau zu füllen, wenn die CSS-Pixels nicht genau darauf abgebildet werden können.

Aber jetzt wird ein anderes Problem deutlich, eines, das Sie tatsächlich auch im ursprünglichen Rechteckbeispiel beobachten können: Das umrandete Rechteck ist nicht nur 2 Pixels breit statt 1, sondern erscheint auch grau anstelle des standardmäßigen Schwarz. Dies liegt daran, wie die Koordinaten als Formgrenzen interpretiert werden.

Wenn Sie sich das obige [Raster](#das_raster)-Diagramm erneut ansehen, können Sie sehen, dass Koordinaten wie `2` oder `12` keinen Pixel identifizieren, sondern vielmehr die Grenze zwischen zwei Pixels. In den Bildern unten steht das Raster für das Canvas-Koordinatengitter. Die Quadrate zwischen den Rasterlinien sind tatsächliche Bildschirm-Pixels. Im ersten Rasterbild unten wird ein Rechteck von (2,1) bis (5,5) gefüllt. Der gesamte Bereich dazwischen (hellrot) fällt auf Pixelgrenzen, sodass das resultierende gefüllte Rechteck scharfe Kanten haben wird.

![Drei Koordinatenraster. Die Rasterlinien sind tatsächliche Pixels auf dem Bildschirm. Die obere linke Ecke jedes Rasters ist mit (0,0) beschriftet. Im ersten Raster wird ein Rechteck von (2,1) bis (5,5) in hellrot gefüllt. Im zweiten Raster werden (3,1) bis (3,5) mit einer 1-Pixel dicken königsblauen Linie verbunden. Die königsblaue Linie ist auf einer Rasterlinie zentriert, erstreckt sich von 2,5 bis 3,5 auf der x-Achse, halb in die Pixels auf beiden Seiten der Graphlinie hinein, mit einem hellblauen Hintergrund auf beiden Seiten, der sich von 2 bis 4 auf der x-Achse erstreckt. Um die hellblaue Unschärfeverstreuung der Linie im zweiten Koordinatenraster zu vermeiden, ist der Pfad im dritten Koordinatenraster eine königsblaue Linie von (3.5,1) bis (3.5,5). Die 1-Pixel-Linienbreite füllt eine einzelpiele Pixel breite vertikale Linie vollständig und präzise aus.](canvas-grid.png)

Wenn Sie einen Pfad von (3,1) bis (3,5) mit einer Linienbreite von `1.0` betrachten, ergeben Sie sich die Situation im zweiten Bild. Der tatsächliche zu füllende Bereich (dunkelblau) erstreckt sich nur zur Hälfte in die Pixels auf beiden Seiten des Pfads. Eine Annäherung daran muss gerendert werden, was bedeutet, dass diese Pixels nur teilweise schattiert werden, und das führt dazu, dass der gesamte Bereich (das hellblaue und dunkelblaue) mit einer Farbe gefüllt wird, die nur halb so dunkel ist wie die tatsächliche Strichfarbe. Dies ist das, was mit der Breite `1.0` der Linie im `strokeRect()`-Aufruf im obigen Rechteckbeispiel passiert.

Um dies zu beheben, müssen Sie beim Erstellen Ihrer Pfade sehr genau vorgehen. Wenn bekannt ist, dass eine Linienbreite von `1.0` um die Hälfte einer Einheit zu beiden Seiten des Pfads erweitert wird, führt das Erstellen des Pfads aus den _Mitte_ der Pixels zur Situation im dritten Bild — die Linienbreite von `1.0` füllt eine einpixelige Breite vertikale Linie vollständig und präzise aus.

> [!NOTE]
> Beachten Sie, dass im Beispiel der vertikalen Linie die Y-Position immer noch auf eine ganzzahlige Rasterlinienposition bezogen ist — wäre sie das nicht, würden wir mit halber Füllung gedeckte Pixels an den Endpunkten sehen.

Aus diesem Grund sagten wir bereits, dass der Aufruf `strokeRect(50, 50, 50, 50)` im Rechteckbeispiel _konzeptionell_ 50x50 war, aber in Wirklichkeit ist er 52x52. Der tatsächliche gefüllte Bereich für den Umriss beginnt bei (49.5, 49.5) und endet bei (100.5, 100.5), und aufgrund der teilweise gefüllten Pixels ist der tatsächlich gefüllte Bereich von (49,49) bis (101,101), was 52x52 ist, und die Kanten sind 2 Pixels breit. Um einen festen 1-Pixel-breiten Umriss zu erhalten, der genau 50x50 ist, müssten Sie das Rechteck um die Dicke des Umrisses (1px) _verkleinern_ und es um die Hälfte der Dicke (0.5px) verschieben:

```js live-sample___seeing_blurry_edges_3
function draw() {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  ctx.strokeRect(2.5, 2.5, 9, 9);
  ctx.fillRect(7, 7, 1, 1);
}
```

{{EmbedLiveSample("Seeing blurry edges 3", "", "350")}}

Bei Linien mit gerader Breite endet jeder Hälftenteil als eine ganze Anzahl von Pixels, sodass Sie einen Pfad möchten, der zwischen den Pixels liegt (das heißt, (3,1) bis (3,5)), anstatt in der Mitte der Pixels.

Obwohl es beim Arbeiten mit skalierbaren 2D-Grafiken etwas mühselig ist, stellt die Beachtung des Pixelrasters und der Position der Pfade sicher, dass Ihre Zeichnungen unabhängig von der Skalierung oder anderen beteiligten Transformationen korrekt aussehen. Eine vertikale Linie mit einer Breite von 1.0, die an der richtigen Position gezeichnet wird, wird beim Hochskalieren auf 2 eine scharfe 2-Pixel-Linie, und sie wird an der richtigen Position angezeigt.

Dieses Phänomen der teilweise gefüllten Pixels erstreckt sich auch auf Formen, die nicht auf das Pixelraster ausgerichtet sind. Zum Beispiel denken Sie an ein gedrehtes Rechteck (Sie werden im nächsten Abschnitt lernen, wie es gezeichnet wird). Um zu sehen, wie es mit und ohne `image-rendering: pixelated` aussieht, haben wir zwei Leinwände nebeneinander und eine dritte, die im vollen Maßstab gezeichnet ist, mit Rasterlinien:

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

Wenn ein Bild _hoch_ skaliert wird, wirkt es verschwommener als beabsichtigt, wenn es hingegen _herunter_ skaliert wird, erscheint es _schärfer_. Beispielsweise, wenn Sie möchten, dass ein Canvas auf dem Bildschirm als 300x150 Pixel erscheint, können Sie es als 600x300 Pixel erstellen und dann mit CSS verkleinern. Dies ist besonders nützlich auf hochauflösenden Bildschirmen (wie Apple's Retina-Displays), auf denen ein CSS-Pixel durch mehrere Bildschirm-Pixels dargestellt wird. Wenn Sie ein 300x150 Pixel großes Canvas originalgetreu zeichnen, wird es nicht dieselbe Pixelauflösung wie andere Elemente auf der Seite haben.

## Pfade zeichnen

Schauen wir uns nun Pfade an. Ein Pfad ist eine Liste von Punkten, die durch Liniensegmente verbunden sind, die verschiedene Formen haben können, ob gekrümmt oder nicht, von unterschiedlicher Breite und von unterschiedlicher Farbe. Ein Pfad, oder sogar ein Unterpfad, kann geschlossen sein. Um Formen mit Pfaden zu erstellen, gehen wir einige zusätzliche Schritte:

1. Zuerst erstellen Sie den Pfad.
2. Dann verwenden Sie [Zeichnen-Befehle](/de/docs/Web/API/CanvasRenderingContext2D#paths), um in den Pfad zu zeichnen.
3. Sobald der Pfad erstellt wurde, können Sie den Pfad zeichnen oder füllen, um ihn zu rendern.

Hier sind die Funktionen, die verwendet werden, um diese Schritte auszuführen:

- [`beginPath()`](/de/docs/Web/API/CanvasRenderingContext2D/beginPath)
  - : Erstellt einen neuen Pfad. Einmal erstellt, werden zukünftige Zeichenbefehle in den Pfad geleitet und verwendet, um den Pfad aufzubauen.
- [Pfadmethoden](/de/docs/Web/API/CanvasRenderingContext2D#paths)
  - : Methoden zum Setzen unterschiedlicher Pfade für Objekte.
- [`closePath()`](/de/docs/Web/API/CanvasRenderingContext2D/closePath)
  - : Fügt dem Pfad eine gerade Linie hinzu, die zum Anfang des aktuellen Unterpfads führt.
- [`stroke()`](/de/docs/Web/API/CanvasRenderingContext2D/stroke)
  - : Zeichnet die Form, indem es ihren Umriss nachzieht.
- [`fill()`](/de/docs/Web/API/CanvasRenderingContext2D/fill)
  - : Zeichnet eine feste Form, indem es den Inhaltsbereich des Pfads füllt.

Der erste Schritt, um einen Pfad zu erstellen, besteht darin, `beginPath()` aufzurufen. Intern werden Pfade als Liste von Unterpfaden (Linien, Bögen, usw.) gespeichert, die zusammen eine Form bilden. Jedes Mal, wenn diese Methode aufgerufen wird, wird die Liste zurückgesetzt, und wir können neue Formen zeichnen.

> [!NOTE]
> Wenn der aktuelle Pfad leer ist, wie unmittelbar nach dem Aufruf von `beginPath()`, oder auf einem neu erstellten Canvas, wird der erste Konstruktion des Pfads immer als `moveTo()` behandelt, unabhängig davon, was er tatsächlich ist. Aus diesem Grund sollten Sie fast immer Ihre Startposition speziell nach dem Zurücksetzen eines Pfades setzen.

Der zweite Schritt besteht darin, die Methoden aufzurufen, die tatsächlich die zu zeichnenden Pfade angeben. Diese werden wir bald sehen.

Der dritte und ein optionaler Schritt besteht darin, `closePath()` aufzurufen. Diese Methode versucht, die Form zu schließen, indem eine gerade Linie vom aktuellen Punkt zum Anfang gezogen wird. Wenn die Form bereits geschlossen ist oder es nur einen Punkt in der Liste gibt, macht diese Funktion nichts.

> [!NOTE]
> Wenn Sie `fill()` aufrufen, werden alle offenen Formen automatisch geschlossen, Sie müssen also `closePath()` nicht aufrufen. Dies ist **nicht** der Fall, wenn Sie `stroke()` aufrufen.

### Zeichnen eines Dreiecks

Beispielsweise sähe der Code zum Zeichnen eines Dreiecks in etwa so aus:

```html hidden
<canvas id="canvas" width="100" height="100"></canvas>
```

```js
function draw() {
  const canvas = document.getElementById("canvas");
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

### Bewegen des Stifts

Eine sehr nützliche Funktion, die eigentlich nichts zeichnet, aber Teil der oben beschriebenen Pfadliste wird, ist die `moveTo()` Funktion. Sie können sich dies am besten als das Anheben eines Stiftes oder Bleistiftes von einem Punkt auf einem Blatt Papier und das Aufsetzen an der nächsten Stelle vorstellen.

- [`moveTo(x, y)`](/de/docs/Web/API/CanvasRenderingContext2D/moveTo)
  - : Verschiebt den Stift zu den Koordinaten, die durch `x` und `y` angegeben werden.

Wenn das Canvas initialisiert wird oder `beginPath()` aufgerufen wird, möchten Sie typischerweise die `moveTo()`-Funktion verwenden, um den Startpunkt woanders hin zu setzen. Wir könnten auch `moveTo()` verwenden, um nicht verbundene Pfade zu zeichnen. Sehen Sie sich das Smiley-Gesicht unten an.

Um dies selbst auszuprobieren, können Sie den nachstehenden Code-Schnipsel verwenden. Fügen Sie ihn einfach in die `draw()`-Funktion ein, die wir zuvor gesehen haben.

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js
function draw() {
  const canvas = document.getElementById("canvas");
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

Falls Sie die verbindenden Linien sehen möchten, können Sie die Zeilen entfernen, die `moveTo()` aufrufen.

> [!NOTE]
> Um mehr über die `arc()`-Funktion zu erfahren, lesen Sie den Abschnitt [Bögen](#bögen) unten.

### Linien

Zum Zeichnen gerader Linien verwenden Sie die `lineTo()`-Methode.

- [`lineTo(x, y)`](/de/docs/Web/API/CanvasRenderingContext2D/lineTo)
  - : Zeichnet eine Linie von der aktuellen Zeichenposition zur durch `x` und `y` angegebenen Position.

Diese Methode nimmt zwei Argumente entgegen, `x` und `y`, die die Koordinaten des Endpunkts der Linie sind. Der Startpunkt hängt von zuvor gezeichneten Pfaden ab, wobei der Endpunkt des vorherigen Pfades der Startpunkt für den folgenden ist, usw. Der Startpunkt kann auch mit der `moveTo()`-Methode geändert werden.

Das folgende Beispiel zeichnet zwei Dreiecke, eines gefüllt und eines umrandet.

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js
function draw() {
  const canvas = document.getElementById("canvas");
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

Das beginnt mit dem Aufruf von `beginPath()`, um einen neuen Formpfad zu starten. Wir verwenden dann die `moveTo()`-Methode, um den Startpunkt an die gewünschte Position zu verschieben. Darunter werden zwei Linien gezeichnet, die zwei Seiten des Dreiecks bilden.

{{EmbedLiveSample("Lines", "", "160")}}

Sie werden den Unterschied zwischen dem gefüllten und dem umrandeten Dreieck bemerken. Dies liegt, wie oben erwähnt, daran, dass Formen automatisch geschlossen werden, wenn ein Pfad gefüllt wird, jedoch nicht, wenn sie umrandet werden. Wenn wir das `closePath()` für das umrandete Dreieck weggelassen hätten, wären nur zwei Linien gezeichnet worden, und kein komplettes Dreieck.

### Bögen

Zum Zeichnen von Bögen oder Kreisen verwenden wir die `arc()`- oder `arcTo()`-Methoden.

- [`arc(x, y, radius, startAngle, endAngle, counterclockwise)`](/de/docs/Web/API/CanvasRenderingContext2D/arc)
  - : Zeichnet einen Bogen, der am Punkt _(x, y)_ zentriert ist, mit dem Radius _r_, beginnend bei _startAngle_ und endend bei _endAngle_, in der angegebenen Richtung, die durch _counterclockwise_ angegeben wird (standardmäßig im Uhrzeigersinn).
- [`arcTo(x1, y1, x2, y2, radius)`](/de/docs/Web/API/CanvasRenderingContext2D/arcTo)
  - : Zeichnet einen Bogen mit den gegebenen Kontrollpunkten und dem Radius, der durch eine gerade Linie mit dem vorherigen Punkt verbunden ist.

Schauen wir uns die `arc`-Methode genauer an, die sechs Parameter benötigt: `x` und `y` sind die Koordinaten des Mittelpunkts des Kreises, auf dem der Bogen gezeichnet werden soll. `radius` ist selbsterklärend. Die Parameter `startAngle` und `endAngle` definieren die Start- und Endpunkte des Bogens in Bogenmaß, entlang der Kurve des Kreises. Diese werden von der x-Achse aus gemessen. Der Parameter `counterclockwise` ist ein boolescher Wert, der bei `true` den Bogen gegen den Uhrzeigersinn zeichnet; andernfalls wird der Bogen im Uhrzeigersinn gezeichnet.

> [!NOTE]
> Winkel in der `arc`-Funktion werden im Bogenmaß und nicht in Grad gemessen. Um Grad in Bogenmaß umzuwandeln, können Sie den folgenden JavaScript-Ausdruck verwenden: `radians = (Math.PI/180)*degrees`.

Das folgende Beispiel ist etwas komplexer als die bisher gesehenen. Es zeichnet 12 verschiedene Bögen, alle mit unterschiedlichen Winkeln und Füllungen.

Die beiden [`for`-Schleifen](/de/docs/Web/JavaScript/Reference/Statements/for) sind zum Schleifen durch die Reihen und Spalten von Bögen. Für jeden Bogen starten wir einen neuen Pfad, indem wir `beginPath()` aufrufen. Im Code befinden sich die Parameter für den Bogen jeweils in einer Variablen, um Klarheit zu schaffen, aber in der Praxis würden Sie das nicht unbedingt so machen.

Die `x`- und `y`-Koordinaten sollten klar genug sein. `radius` und `startAngle` sind festgelegt. Der `endAngle` beginnt in der ersten Spalte bei 180 Grad (halber Kreis) und wird in Schritten von 90 Grad erhöht, wobei er in der letzten Spalte in einem vollständigen Kreis endet.

Die Anweisung für den `clockwise`-Parameter führt dazu, dass die erste und dritte Reihe als Bögen im Uhrzeigersinn und die zweite und vierte Reihe als Bögen gegen den Uhrzeigersinn gezeichnet werden. Schließlich bewirkt die `if`-Anweisung, dass die obere Hälfte gestrichelte Bögen und die untere Hälfte gefüllte Bögen sind.

> [!NOTE]
> Dieses Beispiel erfordert ein etwas größeres Canvas als die anderen auf dieser Seite: 150 x 200 Pixel.

```html hidden
<canvas id="canvas" width="150" height="200"></canvas>
```

```js
function draw() {
  const canvas = document.getElementById("canvas");
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

### Bézier- und Quadratische Kurven

Die nächste Art von Pfaden, die verfügbar sind, sind {{Glossary("Bezier_curve", "Bézier-Kurven")}}, die sowohl in kubischen als auch quadratischen Varianten verfügbar sind. Diese werden im Allgemeinen verwendet, um komplexe organische Formen zu zeichnen.

- [`quadraticCurveTo(cp1x, cp1y, x, y)`](/de/docs/Web/API/CanvasRenderingContext2D/quadraticCurveTo)
  - : Zeichnet eine quadratische Bézier-Kurve von der aktuellen Stiftposition zum Endpunkt, der durch `x` und `y` angegeben wird, wobei der Kontrollpunkt durch `cp1x` und `cp1y` spezifiziert wird.
- [`bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)`](/de/docs/Web/API/CanvasRenderingContext2D/bezierCurveTo)
  - : Zeichnet eine kubische Bézier-Kurve von der aktuellen Stiftposition zum Endpunkt, der durch `x` und `y` angegeben wird, wobei die Kontrollpunkte durch (`cp1x`, `cp1y`) und (`cp2x`, `cp2y`) spezifiziert werden.

Der Unterschied zwischen diesen ist, dass eine quadratische Bézier-Kurve einen Start- und Endpunkt (blaue Punkte) und nur einen **Kontrollpunkt** (angezeigt durch den roten Punkt) hat, während eine kubische Bézier-Kurve zwei Kontrollpunkte verwendet.
![Vergleich von quadratischer und Bézier-Kurve.](canvas_curves.png)

Die `x`- und `y`-Parameter in beiden Methoden sind die Koordinaten des Endpunkts. `cp1x` und `cp1y` sind die Koordinaten des ersten Kontrollpunkts, und `cp2x` und `cp2y` sind die Koordinaten des zweiten Kontrollpunkts.

Die Verwendung von quadratischen und kubischen Bézier-Kurven kann ziemlich herausfordernd sein, weil wir im Gegensatz zu Vektorgrafiksoftware wie Adobe Illustrator kein direktes visuelles Feedback darüber haben, was wir tun. Das macht es ziemlich schwer, komplexe Formen zu zeichnen. Im folgenden Beispiel zeichnen wir einige simple organische Formen, aber wenn Sie die Zeit und vor allem die Geduld haben, können deutlich komplexere Formen erstellt werden.

In diesen Beispielen gibt es nichts besonders Schwieriges. In beiden Fällen sehen wir eine Abfolge von Kurven, die schließlich in einer vollständigen Form resultieren.

#### Quadratische Bézier-Kurven

Dieses Beispiel verwendet mehrere quadratische Bézier-Kurven, um eine Sprechblase zu zeichnen.

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js
function draw() {
  const canvas = document.getElementById("canvas");
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

#### Kubische Bézier-Kurven

Dieses Beispiel zeichnet ein Herz mit kubischen Bézier-Kurven.

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js
function draw() {
  const canvas = document.getElementById("canvas");
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

Zusätzlich zu den drei Methoden, die wir im Abschnitt [Zeichnen von Rechtecken](#zeichnen_von_rechtecken) gesehen haben, welche rechteckige Formen direkt auf das Canvas zeichnen, gibt es auch die `rect()`-Methode, die einen rechteckigen Pfad zu einem aktuell offenen Pfad hinzufügt.

- [`rect(x, y, width, height)`](/de/docs/Web/API/CanvasRenderingContext2D/rect)
  - : Zeichnet ein Rechteck, dessen obere linke Ecke durch (`x`, `y`) angegeben wird, mit der angegebenen `width` und `height`.

Bevor diese Methode ausgeführt wird, wird die `moveTo()`-Methode automatisch mit den Parametern (x,y) aufgerufen. Mit anderen Worten, die aktuelle Stiftposition wird automatisch auf die Standardkoordinaten zurückgesetzt.

### Kombinationen erstellen

Bisher hat jedes Beispiel auf dieser Seite nur eine Art von Pfadfunktion pro Form verwendet. Es gibt jedoch keine Einschränkung hinsichtlich der Anzahl oder Typen von Pfaden, die Sie verwenden können, um eine Form zu erstellen. In diesem abschließenden Beispiel kombinieren wir alle Pfadfunktionen, um einen Satz sehr berühmter Spielcharaktere zu erstellen.

```html hidden
<canvas id="canvas" width="200" height="185"></canvas>
```

```js
function draw() {
  const canvas = document.getElementById("canvas");
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

Das resultierende Bild sieht so aus:

{{EmbedLiveSample("Making_combinations", "", "200")}}

Wir werden dies nicht im Detail durchgehen, da es eigentlich überraschend einfach ist. Die wichtigsten Dinge, die es zu beachten gilt, sind die Verwendung der `fillStyle`-Eigenschaft auf dem Zeichenkontext und die Verwendung einer Hilfsfunktion (in diesem Fall `roundedRect()`). Die Verwendung von Hilfsfunktionen für Zeichnungen, die Sie oft durchführen, kann sehr hilfreich sein und die Menge an Code, den Sie benötigen, sowie dessen Komplexität reduzieren.

Wir werden uns `fillStyle` später in diesem Tutorial noch einmal genauer ansehen. Hier verwenden wir es nur, um die Füllfarbe für Pfade von der Standardfarbe Schwarz auf Weiß und dann wieder zurück zu ändern.

### Formen mit Löchern

Um eine Form mit einem Loch darin zu zeichnen, müssen wir das Loch in verschiedenen Uhrzeigerrichtungen zeichnen, während wir die äußere Form zeichnen. Wir zeichnen entweder die äußere Form im Uhrzeigersinn und die innere Form gegen den Uhrzeigersinn oder die äußere Form gegen den Uhrzeigersinn und die innere Form im Uhrzeigersinn.

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js
function draw() {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  ctx.beginPath();

  // Outer shape clockwise ⟳
  ctx.moveTo(0, 0);
  ctx.lineTo(150, 0);
  ctx.lineTo(75, 129.9);

  // Inner shape anticlockwise ↺
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

Im obigen Beispiel verläuft das äußere Dreieck im Uhrzeigersinn (zur oberen linken Ecke bewegen, dann eine Linie zur oberen rechten Ecke ziehen und unten enden) und das innere Dreieck verläuft gegen den Uhrzeigersinn (zur oberen Mitte gehen, dann zum unteren linken Eckpunkt eine Linie ziehen und beim unteren rechten abschließen).

## Path2D-Objekte

Wie wir im letzten Beispiel gesehen haben, kann es eine Reihe von Pfaden und Zeichenbefehlen geben, um Objekte auf Ihr Canvas zu zeichnen. Um den Code zu vereinfachen und die Leistung zu verbessern, erlaubt Ihnen das [`Path2D`](/de/docs/Web/API/Path2D)-Objekt, verfügbar in den neueren Versionen der Browser, diese Zeichenbefehle zwischenzuspeichern oder aufzuzeichnen. Sie können dann Ihre Pfade schnell wiedergeben.
Schauen wir uns an, wie wir ein `Path2D`-Objekt erstellen können:

- [`Path2D()`](/de/docs/Web/API/Path2D/Path2D)
  - : Der **`Path2D()`**-Konstruktor gibt ein neu instanziiertes `Path2D`-Objekt zurück, optional mit einem anderen Pfad als Argument (erzeugt eine Kopie) oder optional mit einem String, bestehend aus [SVG-Pfaddaten](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Paths).

```js
new Path2D(); // empty path object
new Path2D(path); // copy from another Path2D object
new Path2D(d); // path from SVG path data
```

Alle [Pfadmethoden](/de/docs/Web/API/CanvasRenderingContext2D#paths) wie `moveTo`, `rect`, `arc` oder `quadraticCurveTo`, usw., die wir oben kennengelernt haben, sind auf `Path2D`-Objekten verfügbar.

Die `Path2D`-API fügt auch eine Möglichkeit hinzu, Pfade mithilfe der `addPath`-Methode zu kombinieren. Dies kann nützlich sein, wenn Sie Objekte aus mehreren Komponenten aufbauen möchten, zum Beispiel.

- [`Path2D.addPath(path [, transform])`](/de/docs/Web/API/Path2D/addPath)
  - : Fügt einen Pfad zum aktuellen Pfad mit einer optionalen Transformationsmatrix hinzu.

### Path2D-Beispiel

In diesem Beispiel erstellen wir ein Rechteck und einen Kreis. Beide werden als `Path2D`-Objekt gespeichert, damit sie für den späteren Gebrauch verfügbar sind. Mit der neuen `Path2D`-API wurden mehrere Methoden aktualisiert, die optional ein `Path2D`-Objekt anstelle des aktuellen Pfades verwenden können. Hier werden `stroke` und `fill` mit einem Pfadargument verwendet, um beide Objekte auf das Canvas zu zeichnen, zum Beispiel.

```html hidden
<canvas id="canvas" width="130" height="100"></canvas>
```

```js
function draw() {
  const canvas = document.getElementById("canvas");
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

### Verwendung von SVG-Pfaden

Eine weitere leistungsfähige Funktion der neuen Canvas-`Path2D`-API ist die Verwendung von [SVG-Pfaddaten](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Paths), um Pfade auf Ihrem Canvas zu initialisieren. Dies könnte Ihnen ermöglichen, Pfaddaten weiterzugeben und sie sowohl in SVG als auch im Canvas wiederzuverwenden.

Der Pfad wird zum Punkt (`M10 10`) gehen und dann horizontal 80 Punkte nach rechts (`h 80`), dann 80 Punkte nach unten (`v 80`), dann 80 Punkte nach links (`h -80`), und dann zurück zum Start (`z`). Sie können dieses Beispiel auf der Seite des [`Path2D`-Konstruktors](/de/docs/Web/API/Path2D/Path2D#using_svg_paths) sehen.

```js
const p = new Path2D("M10 10 h 80 v 80 h -80 Z");
```

{{PreviousNext("Web/API/Canvas_API/Tutorial/Basic_usage", "Web/API/Canvas_API/Tutorial/Applying_styles_and_colors")}}
