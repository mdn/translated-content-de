---
title: Zeichnen von Formen mit Canvas
slug: Web/API/Canvas_API/Tutorial/Drawing_shapes
l10n:
  sourceCommit: 6f1b699dd8891431bbfe0bc3bb803f929fa6032e
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Basic_usage", "Web/API/Canvas_API/Tutorial/Applying_styles_and_colors")}}

Nachdem wir unser [Canvas-Umfeld eingerichtet](/de/docs/Web/API/Canvas_API/Tutorial/Basic_usage) haben, können wir uns nun den Details widmen, wie man auf das Canvas zeichnet. Am Ende dieses Artikels werden Sie gelernt haben, wie man Rechtecke, Dreiecke, Linien, Bögen und Kurven zeichnet, um sich mit einigen der grundlegenden Formen vertraut zu machen. Das Arbeiten mit Pfaden ist beim Zeichnen von Objekten auf dem Canvas entscheidend, und wir werden sehen, wie das gemacht wird.

## Das Raster

Bevor wir anfangen können zu zeichnen, müssen wir über das Canvas-Raster oder den **Koordinatenraum** sprechen. Unser HTML-Grundgerüst von der vorherigen Seite hatte ein Canvas-Element, das 150 Pixel breit und 150 Pixel hoch ist.

![Canvas-Raster mit einem blauen Quadrat, das Koordinaten und Achsen demonstriert.](canvas_default_grid.png)

Normalerweise entspricht eine Einheit im Raster einem Pixel auf dem Canvas. Der Ursprung dieses Rasters befindet sich in der _oberen linken_ Ecke bei der Koordinate (0,0). Alle Elemente werden relativ zu diesem Ursprung platziert. Die Position der oberen linken Ecke des blauen Quadrats wird also x Pixel von links und y Pixel von oben, bei der Koordinate (x,y). Später in diesem Tutorial werden wir sehen, wie wir den Ursprung an eine andere Position verschieben, das Raster drehen und es sogar skalieren können, aber vorerst bleiben wir beim Standard.

## Zeichnen von Rechtecken

Im Gegensatz zu {{Glossary("SVG", "SVG")}} unterstützt {{HTMLElement("canvas")}} nur zwei primitive Formen: Rechtecke und Pfade (Listen von Punkten, die durch Linien verbunden sind). Alle anderen Formen müssen durch das Kombinieren eines oder mehrerer Pfade erstellt werden. Glücklicherweise haben wir eine Vielzahl von Pfadzeichnungsfunktionen, die es möglich machen, sehr komplexe Formen zu komponieren.

Schauen wir uns zuerst das Rechteck an. Es gibt drei Funktionen, die Rechtecke auf dem Canvas zeichnen:

- [`fillRect(x, y, width, height)`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect)
  - : Zeichnet ein gefülltes Rechteck.
- [`strokeRect(x, y, width, height)`](/de/docs/Web/API/CanvasRenderingContext2D/strokeRect)
  - : Zeichnet einen rechteckigen Umriss.
- [`clearRect(x, y, width, height)`](/de/docs/Web/API/CanvasRenderingContext2D/clearRect)
  - : Löscht den angegebenen rechteckigen Bereich, wodurch er vollständig transparent wird.

Jede dieser drei Funktionen nimmt die gleichen Parameter. `x` und `y` geben die Position auf dem Canvas (relativ zum Ursprung) der oberen linken Ecke des Rechtecks an. `width` und `height` geben die Größe des Rechtecks an.

Unten ist die `draw()`-Funktion von der vorherigen Seite, aber nun wird sie unter Verwendung dieser drei Funktionen umgesetzt.

### Rechteckform-Beispiel

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

Die Ausgabe dieses Beispiels wird unten gezeigt.

{{EmbedLiveSample("Rectangular_shape_example", "", "160")}}

Die `fillRect()`-Funktion zeichnet ein großes schwarzes Quadrat mit 100 Pixeln an jeder Seite. Die `clearRect()`-Funktion löscht dann ein 60x60 Pixel großes Quadrat aus der Mitte, und dann wird `strokeRect()` aufgerufen, um einen rechteckigen Umriss von 50x50 Pixeln innerhalb des gelöschten Quadrats zu schaffen (_konzeptionell_ 50x50; in Wirklichkeit ist es 52x52, wie im nächsten Abschnitt erklärt wird).

Auf den kommenden Seiten werden wir zwei alternative Methoden für `clearRect()` sehen, und wir werden auch erfahren, wie die Farbe und der Strichstil der gerenderten Formen geändert werden können.

Im Gegensatz zu den Pfadfunktionen, die wir im nächsten Abschnitt sehen werden, zeichnen alle drei Rechteckfunktionen sofort auf das Canvas.

## Unscharfe Kanten sehen?

Im obigen Rechteckbeispiel und in allen kommenden Beispielen fällt Ihnen möglicherweise auf, dass die Kanten der Formen verschwommener erscheinen können als die äquivalenten Formen, die mit SVG oder CSS gezeichnet wurden. Dies liegt nicht daran, dass die Canvas-API keine scharfen Kanten zeichnen kann, sondern am Mapping des Canvas-Rasters zu den tatsächlichen Pixeln auf dem Bildschirm und in bestimmten Fällen daran, wie der Browser das Canvas skaliert. Wenn das obige Beispiel nicht offensichtlich genug ist, lassen Sie uns das Canvas mit CSS vergrößern:

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

In diesem Beispiel erstellen wir unser Canvas sehr klein (15x15), verwenden dann jedoch CSS, um es auf 300x300 Pixel zu skalieren. Dadurch wird jeder Canvas-Pixel nun durch einen 20x20 Block von CSS-Pixeln dargestellt. Wir zeichnen ein gestrecktes Rechteck von (2,2) bis (12,12) und ein gefülltes Rechteck von (7,7) bis (8,8). Das wirkt _wirklich_ verschwommen. Dies liegt daran, dass der Browser standardmäßig ein Glättungsalgorithmus verwendet, um die zusätzlichen Pixel beim Skalieren von Rasterbildern zu interpolieren. Dies ist großartig für Fotografien oder Canvas-Grafiken mit geschwungenen Kanten, aber nicht so ideal für gerade Kanten. Um dies zu beheben, können wir {{cssxref("image-rendering")}} auf `pixelated` setzen:

```css live-sample___seeing_blurry_edges_2 live-sample___seeing_blurry_edges_3
#canvas {
  image-rendering: pixelated;
}
```

{{EmbedLiveSample("Seeing blurry edges 2", "", "350")}}

Jetzt, wenn der Browser das Canvas skaliert, bewahrt es die Pixelierung des Originals so weit wie möglich.

> [!NOTE]
> `image-rendering: pixelated` ist nicht ohne Probleme als Technik zur Kantenbewahrung. Wenn CSS-Pixel nicht mit Geräte-Pixeln übereinstimmen (wenn das [`devicePixelRatio`](/de/docs/Web/API/Window/devicePixelRatio) kein ganzzahliges Verhältnis ist), können bestimmte Pixel größer als andere dargestellt werden, was zu einem ungleichmäßigen Erscheinungsbild führt. Dies ist jedoch kein leicht zu lösendes Problem, da es unmöglich ist, Geräte-Pixel genau zu füllen, wenn die CSS-Pixel nicht genau auf sie abgebildet werden können.

Aber jetzt wird ein weiteres Problem deutlich, das Sie auch im originalen Rechteckbeispiel beobachten können: Das gestreckte Rechteck ist nicht nur 2 Pixel breit statt 1, sondern erscheint auch grau statt in dem Standard schwarz. Dies liegt daran, wie die Koordinaten als Formgrenzen interpretiert werden.

Wenn Sie das [Raster](#das_raster)-Diagramm oben noch einmal ansehen, können Sie sehen, dass Koordinaten wie `2` oder `12` keine Pixel identifizieren, sondern vielmehr die Kante zwischen zwei Pixeln. In den Bildern unten stellt das Raster das Canvas-Koordinatenraster dar. Die Quadrate zwischen den Rasterlinien sind tatsächlich sichtbare Pixel auf dem Bildschirm. Im ersten Rasterbild unten ist ein Rechteck von (2,1) bis (5,5) gefüllt. Der gesamte Bereich dazwischen (hellrot) liegt auf Pixelrändern, sodass das resultierende gefüllte Rechteck scharfe Kanten aufweist.

![Drei Koordinatenraster. Die Rasterlinien sind tatsächliche Pixel auf dem Bildschirm. Die obere linke Ecke jedes Rasters ist mit (0,0) beschriftet. Im ersten Raster wird ein Rechteck von (2,1) bis (5,5) in hellrot gefüllt. Im zweiten Raster wird von (3,1) bis (3,5) eine 1-Pixel-dicke königsblaue Linie gezogen. Die königsblaue Linie wird in der Mitte einer Rasterlinie zentriert, erstreckt sich von 2.5 bis 3.5 auf der x-Achse, bis zur Hälfte in die Pixel auf beiden Seiten der Rasterlinie, mit einem hellblauen Hintergrund auf beiden Seiten, der sich von 2 bis 4 auf der x-Achse erstreckt. Um die hellblaue Unschärfe-Ausdehnung der Linie im zweiten Koordinatenraster zu vermeiden, befindet sich im dritten Koordinaten-Raster eine königsblaue Linie von (3.5,1) bis (3.5,5), die 1-Pixel-Linienbreite füllt am Ende komplett und präzise eine einzelne vertikale Pixel-Linie.](canvas-grid.png)

Wenn Sie einen Pfad von (3,1) zu (3,5) mit einer Linienbreite von `1.0` berücksichtigen, haben Sie die Situation im zweiten Bild. Der tatsächliche zu füllende Bereich (dunkelblau) erstreckt sich nur zur Hälfte in die Pixel auf beiden Seiten des Pfades. Eine Näherung davon muss gerendert werden, was bedeutet, dass diese Pixel nur teilweise schattiert sind, und dies führt dazu, dass der gesamte Bereich (das hellblaue und dunkelblaue) mit einer Farbe gefüllt wird, die nur halb so dunkel wie die tatsächliche Strichfarbe ist. Dies ist das, was mit der `1.0`-Linienbreite im `strokeRect()`-Aufruf im obigen Rechteckbeispiel geschieht.

Um dies zu beheben, müssen Sie sehr präzise in Ihrer Pfaderstellung sein. Wenn man weiß, dass eine `1.0`-Breitenlinie zu beiden Seiten des Pfades eine halbe Einheit herausragt, führt das Erstellen des Pfades von _Zentren_ der Pixel zu der Situation im dritten Bild—die `1.0`-Linienbreite füllt am Ende eine einzelne Pixel-Vertikallinie vollständig und präzise.

> [!NOTE]
> Beachten Sie, dass in unserem Beispiel mit der vertikalen Linie die Y-Position noch eine ganzzahlige Rasterlinienposition referenziert—wenn nicht, würden wir an den Endpunkten Pixel mit halber Abdeckung sehen.

Deshalb sagten wir früher, dass der `strokeRect(50, 50, 50, 50)`-Aufruf im Rechteckbeispiel _konzeptionell_ 50x50, aber in Wirklichkeit 52x52 ist. Der tatsächlich gefüllte Bereich für den Umriss beginnt bei (49.5, 49.5) und endet bei (100.5, 100.5), und aufgrund der teilweise gefüllten Pixel wird der tatsächlich gefüllte Bereich von (49,49) bis (101,101) reichen, was 52x52 macht und die Kanten 2-Pixel breit sind. Um eine solide 1-Pixel-breite Umrandung zu erhalten, die genau 50x50 ist, müssten Sie das Rechteck um die Dicke des Umrisses (1px) _verkleinern_ und es um die Hälfte der Dicke (0.5px) verschieben:

```js live-sample___seeing_blurry_edges_3
function draw() {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  ctx.strokeRect(2.5, 2.5, 9, 9);
  ctx.fillRect(7, 7, 1, 1);
}
```

{{EmbedLiveSample("Seeing blurry edges 3", "", "350")}}

Für Linien mit gerader Breite fällt jede Hälfte am Ende zu einer ganzzahlig Anzahl von Pixeln, also möchten Sie einen Pfad, der sich zwischen den Pixeln befindet (also (3,1) bis (3,5)), anstatt in der Mitte der Pixel.

Während es anfänglich etwas mühsam bei der Arbeit mit skalierbarer 2D-Grafik ist, sorgt das Beachten des Pixelrasters und der Position von Pfaden dafür, dass Ihre Zeichnungen unabhängig von der Skalierung oder anderen involvierten Transformationen korrekt aussehen. Eine 1.0 Breite Vertikallinie, die an der richtigen Position gezeichnet wird, wird zu einer scharfen 2-Pixel-Linie, wenn sie um das Doppelte vergrößert wird, und wird an der richtigen Position erscheinen.

Dieses Phänomen der teilweise gefüllten Pixel erstreckt sich auch auf Formen, die nicht mit dem Pixelraster übereinstimmen. Betrachten Sie zum Beispiel ein rotiertes Rechteck (Sie lernen im nächsten Abschnitt, es zu zeichnen). Um zu sehen, wie es mit und ohne `image-rendering: pixelated` aussieht, haben wir zwei Canvas nebeneinander und ein drittes, das in voller Größe gezeichnet wird, mit Rasterlinien:

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

Wenn das Hochskalieren eines Bildes es verschwommener erscheinen lässt als beabsichtigt, würde das Hinunterskalieren eines Bildes es _schärfer_ erscheinen lassen. Zum Beispiel, wenn Sie möchten, dass ein Canvas als 300x150 Pixel auf dem Bildschirm erscheint, können Sie es als 600x300 Pixel erstellen und dann CSS verwenden, um es zu verkleinern. Dies ist besonders nützlich auf hochauflösenden Bildschirmen (wie Apples Retina-Displays), wo ein CSS-Pixel durch mehrere Bildschirm-Pixel dargestellt wird, sodass wenn Sie ein 300x150-Pixel-Canvas originalgetreu malen, es nicht die gleiche Pixelauflösung wie andere Elemente auf der Seite haben wird.

## Zeichnen von Pfaden

Schauen wir uns nun die Pfade an. Ein Pfad ist eine Liste von Punkten, die durch Linien verbunden sind, die verschiedene Formen haben können, gebogen oder nicht, von unterschiedlicher Breite und von unterschiedlicher Farbe. Ein Pfad oder sogar ein Teilpfad kann geschlossen werden. Um Formen mit Pfaden zu erstellen, führen wir einige zusätzliche Schritte durch:

1. Zuerst erstellen Sie den Pfad.
2. Dann verwenden Sie [Zeichenbefehle](/de/docs/Web/API/CanvasRenderingContext2D#paths), um in den Pfad zu zeichnen.
3. Sobald der Pfad erstellt wurde, können Sie den Pfad umreißen oder füllen, um ihn zu rendern.

Hier sind die Funktionen, die verwendet werden, um diese Schritte durchzuführen:

- [`beginPath()`](/de/docs/Web/API/CanvasRenderingContext2D/beginPath)
  - : Erstellt einen neuen Pfad. Sobald er erstellt ist, werden zukünftige Zeichenbefehle in den Pfad gerichtet und benutzt, um den Pfad aufzubauen.
- [Pfadmethoden](/de/docs/Web/API/CanvasRenderingContext2D#paths)
  - : Methoden, um unterschiedliche Pfade für Objekte festzulegen.
- [`closePath()`](/de/docs/Web/API/CanvasRenderingContext2D/closePath)
  - : Fügt dem Pfad eine gerade Linie hinzu, die zum Anfang des aktuellen Teilpfades führt.
- [`stroke()`](/de/docs/Web/API/CanvasRenderingContext2D/stroke)
  - : Zeichnet die Form durch Umreißen ihrer Außengrenze.
- [`fill()`](/de/docs/Web/API/CanvasRenderingContext2D/fill)
  - : Zeichnet eine solide Form, indem der Inhalt des Pfades gefüllt wird.

Der erste Schritt zur Erstellung eines Pfades besteht darin, `beginPath()` aufzurufen. Intern werden Pfade als Liste von Teilpfaden (Linien, Bögen usw.) gespeichert, die zusammen eine Form bilden. Jedes Mal, wenn diese Methode aufgerufen wird, wird die Liste zurückgesetzt und wir können neue Formen zeichnen.

> [!NOTE]
> Wenn der aktuelle Pfad leer ist, wie unmittelbar nach dem Aufruf von `beginPath()`, oder auf einem neu erstellten Canvas, wird der erste Pfaderstellungsbefehl immer als `moveTo()` behandelt, unabhängig davon, was er tatsächlich ist. Aus diesem Grund werden Sie fast immer Ihren Startpunkt nach dem Zurücksetzen eines Pfades explizit festlegen wollen.

Der zweite Schritt besteht darin, die Methoden aufzurufen, die tatsächlich die zu zeichnenden Pfade spezifizieren. Wir werden diese in Kürze sehen.

Der dritte, optionaler Schritt, ist der Aufruf von `closePath()`. Diese Methode versucht, die Form zu schließen, indem sie eine gerade Linie vom aktuellen Punkt zum Anfang zeichnet. Wenn die Form bereits geschlossen wurde oder nur ein Punkt in der Liste ist, tut diese Funktion nichts.

> [!NOTE]
> Wenn Sie `fill()` aufrufen, werden alle offenen Formen automatisch geschlossen, sodass Sie `closePath()` nicht aufrufen müssen. Dies ist **nicht** der Fall, wenn Sie `stroke()` aufrufen.

### Zeichnen eines Dreiecks

Zum Beispiel würde der Code zum Zeichnen eines Dreiecks so aussehen:

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

### Bewegen des Stifts

Eine sehr nützliche Funktion, die tatsächlich nichts zeichnet, aber Teil der beschriebenen Pfadliste wird, ist die `moveTo()`-Funktion. Sie können sich das wahrscheinlich am besten so vorstellen, als ob Sie einen Stift oder Bleistift von einem Punkt auf einem Blatt Papier heben und an der nächsten Stelle platzieren.

- [`moveTo(x, y)`](/de/docs/Web/API/CanvasRenderingContext2D/moveTo)
  - : Bewegt den Stift zu den Koordinaten, die durch `x` und `y` angegeben werden.

Wenn das Canvas initialisiert wird oder `beginPath()` aufgerufen wird, möchten Sie in der Regel die `moveTo()`-Funktion verwenden, um den Startpunkt an eine andere Stelle zu setzen. Wir könnten `moveTo()` auch verwenden, um nicht verbundene Pfade zu zeichnen. Schauen Sie sich das lächelnde Gesicht unten an.

Um dies selbst auszuprobieren, können Sie das untenstehende Code-Snippet verwenden. Fügen Sie es einfach in die `draw()`-Funktion ein, die wir zuvor gesehen haben.

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

Wenn Sie die Verbindungslinien sehen möchten, können Sie die Zeilen, die `moveTo()` aufrufen, entfernen.

> [!NOTE]
> Um mehr über die `arc()`-Funktion zu erfahren, siehe den [Bögen](#bögen)-Abschnitt unten.

### Linien

Um gerade Linien zu zeichnen, verwenden Sie die `lineTo()`-Methode.

- [`lineTo(x, y)`](/de/docs/Web/API/CanvasRenderingContext2D/lineTo)
  - : Zeichnet eine Linie von der aktuellen Zeichenposition zur Position, die durch `x` und `y` spezifiziert wird.

Diese Methode nimmt zwei Argumente, `x` und `y`, die die Koordinaten des Endpunkts der Linie sind. Der Startpunkt hängt von zuvor gezeichneten Pfaden ab, wobei der Endpunkt des vorherigen Pfades der Startpunkt für den folgenden ist, usw. Der Startpunkt kann auch durch die Verwendung der `moveTo()`-Methode geändert werden.

Das Beispiel unten zeichnet zwei Dreiecke, eines gefüllt und eines umrandet.

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

Es beginnt mit dem Aufruf von `beginPath()`, um einen neuen Formpfad zu starten. Dann verwenden wir die `moveTo()`-Methode, um den Startpunkt an die gewünschte Position zu verschieben. Darunter werden zwei Linien gezeichnet, die zwei Seiten des Dreiecks bilden.

{{EmbedLiveSample("Lines", "", "160")}}

Sie werden den Unterschied zwischen dem gefüllten und dem umrandeten Dreieck bemerken. Dies liegt, wie oben erwähnt, daran, dass Formen automatisch geschlossen werden, wenn ein Pfad gefüllt wird, aber nicht, wenn sie umrandet werden. Wenn wir `closePath()` beim umrandeten Dreieck weggelassen hätten, wären nur zwei Linien gezeichnet worden, kein komplettes Dreieck.

### Bögen

Um Bögen oder Kreise zu zeichnen, verwenden wir die `arc()`- oder `arcTo()`-Methoden.

- [`arc(x, y, radius, startAngle, endAngle, counterclockwise)`](/de/docs/Web/API/CanvasRenderingContext2D/arc)
  - : Zeichnet einen Bogen, der am Position _(x, y)_ mit Radius _r_ zentriert ist, beginnend bei _startAngle_ und endend bei _endAngle_, in die angegebene Richtung, die durch _counterclockwise_ angezeigt wird (standardmäßig im Uhrzeigersinn).
- [`arcTo(x1, y1, x2, y2, radius)`](/de/docs/Web/API/CanvasRenderingContext2D/arcTo)
  - : Zeichnet einen Bogen mit den angegebenen Kontrollpunkten und Radius, der durch eine gerade Linie mit dem vorherigen Punkt verbunden ist.

Schauen wir uns die `arc`-Methode genauer an, die sechs Parameter übernimmt: `x` und `y` sind die Koordinaten des Mittelpunkts des Kreises, auf dem der Bogen gezeichnet werden sollte. `radius` ist selbsterklärend. Die `startAngle`- und `endAngle`-Parameter definieren die Start- und Endpunkte des Bogens im Bogenmaß entlang der Kurve des Kreises. Diese werden von der x-Achse aus gemessen. Der `counterclockwise`-Parameter ist ein boolescher Wert, der, wenn `true`, den Bogen gegen den Uhrzeigersinn zeichnet; andernfalls wird der Bogen im Uhrzeigersinn gezogen.

> [!NOTE]
> Winkel in der `arc`-Funktion werden im Bogenmaß gemessen, nicht in Grad. Um Grad in Bogenmaß umzurechnen, können Sie den folgenden JavaScript-Ausdruck verwenden: `radians = (Math.PI/180)*degrees`.

Das folgende Beispiel ist etwas komplexer als die bisher gesehenen. Es zeichnet 12 verschiedene Bögen, alle mit unterschiedlichen Winkeln und Füllungen.

Die zwei [`for`-Schleifen](/de/docs/Web/JavaScript/Reference/Statements/for) dienen dazu, die Reihen und Spalten der Bögen zu durchlaufen. Für jeden Bogen beginnen wir einen neuen Pfad, indem wir `beginPath()` aufrufen. Im Code stehen die Parameter für den Bogen jeweils in einer Variablen der Klarheit halber, allerdings würde man das im wirklichen Leben nicht unbedingt so machen.

Die `x`- und `y`-Koordinaten sollten klar genug sein. `radius` und `startAngle` sind fest. Der `endAngle` beginnt in der ersten Spalte bei 180 Grad (ein halber Kreis) und wird in Schritten von 90 Grad erhöht, wobei in der letzten Spalte ein vollständiger Kreis entsteht.

Die Anweisung für den `clockwise`-Parameter bewirkt, dass die erste und dritte Reihe als Uhrzeigerseingträgt und die zweite und vierte Reihe als gegen den Uhrzeigersinn Bögen gezeichnet werden. Schließlich macht die `if`-Anweisung die obere Hälfte zu umrandeten Bögen und die untere Hälfte zu gefüllten Bögen.

> [!NOTE]
> Dieses Beispiel erfordert ein etwas größeres Canvas als die anderen auf dieser Seite: 150 x 200 Pixel.

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

### Bezier- und Quadratische Kurven

Der nächste verfügbare Pfadtyp sind {{Glossary("Bezier_curve", "Bézier-Kurven")}}, die als kubische und quadratische Varianten verfügbar sind. Diese werden normalerweise verwendet, um komplexe organische Formen zu zeichnen.

- [`quadraticCurveTo(cp1x, cp1y, x, y)`](/de/docs/Web/API/CanvasRenderingContext2D/quadraticCurveTo)
  - : Zeichnet eine quadratische Bézier-Kurve von der aktuellen Stiftposition zum Endpunkt, der durch `x` und `y` angegeben ist, unter Verwendung des Kontrollpunkts, der durch `cp1x` und `cp1y` angegeben ist.
- [`bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)`](/de/docs/Web/API/CanvasRenderingContext2D/bezierCurveTo)
  - : Zeichnet eine kubische Bézier-Kurve von der aktuellen Stiftposition zum Endpunkt, der durch `x` und `y` angegeben ist, unter Verwendung der Kontrollpunkte, die durch (`cp1x`, `cp1y`) und (`cp2x`, `cp2y`) angegeben sind.

Der Unterschied zwischen diesen besteht darin, dass eine quadratische Bézier-Kurve einen Start- und einen Endpunkt (blaue Punkte) und nur einen **Kontrollpunkt** (angegeben durch den roten Punkt) hat, während eine kubische Bézier-Kurve zwei Kontrollpunkte verwendet.
![Quadratische und Bezier-Kurven-Vergleich.](canvas_curves.png)

Die Parameter `x` und `y` in beiden Methoden sind die Koordinaten des Endpunkts. `cp1x` und `cp1y` sind die Koordinaten des ersten Kontrollpunkts, und `cp2x` und `cp2y` sind die Koordinaten des zweiten Kontrollpunkts.

Die Verwendung von quadratischen und kubischen Bézier-Kurven kann ziemlich herausfordernd sein, da man im Gegensatz zu Vektorgrafiksoftware wie Adobe Illustrator kein direktes visuelles Feedback erhält, was man gerade tut. Dies macht es ziemlich schwer, komplexe Formen zu zeichnen. Im folgenden Beispiel zeichnen wir einige einfache organische Formen, aber wenn Sie Zeit und, vor allem, Geduld haben, können viel komplexere Formen erstellt werden.

Es gibt nichts wirklich Schwieriges in diesen Beispielen. In beiden Fällen sehen wir eine Reihe von Kurven, die gezeichnet werden, die schließlich zu einer kompletten Form führen.

#### Quadratische Bezier-Kurven

Dieses Beispiel verwendet mehrere quadratische Bézier-Kurven, um eine Sprechblase zu rendern.

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

#### Kubische Bezier-Kurven

Dieses Beispiel zeichnet ein Herz mit kubischen Bézier-Kurven.

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

Zusätzlich zu den drei Methoden, die wir im Abschnitt [Zeichnen von Rechtecken](#zeichnen_von_rechtecken) gesehen haben, die rechteckige Formen direkt auf das Canvas zeichnen, gibt es auch die `rect()`-Methode, die einen Rechteckpfad zu einem aktuell geöffneten Pfad hinzufügt.

- [`rect(x, y, width, height)`](/de/docs/Web/API/CanvasRenderingContext2D/rect)
  - : Zeichnet ein Rechteck, dessen obere linke Ecke durch (`x`, `y`) mit der angegebenen `width` und `height` spezifiziert wird.

Bevor diese Methode ausgeführt wird, wird automatisch die `moveTo()`-Methode mit den Parametern (x,y) aufgerufen. Mit anderen Worten, die aktuelle Stiftposition wird automatisch auf die Standardkoordinaten zurückgesetzt.

### Kombinationen erstellen

Bisher hat jedes Beispiel auf dieser Seite nur einen Typ von Pfadfunktion pro Form genutzt. Es gibt jedoch keine Einschränkung bezüglich der Anzahl oder Art von Pfaden, die Sie verwenden können, um eine Form zu erstellen. Also lassen Sie uns in diesem letzten Beispiel alle Pfadfunktionen kombinieren, um eine Reihe sehr berühmter Spielcharaktere zu erstellen.

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

Das resultierende Bild sieht so aus:

{{EmbedLiveSample("Making_combinations", "", "200")}}

Wir werden das nicht im Detail durchgehen, da es eigentlich überraschend einfach ist. Die wichtigsten Dinge, die Sie beachten sollten, sind die Verwendung der `fillStyle`-Eigenschaft auf dem Zeichenkontext und die Verwendung einer Hilfsfunktion (in diesem Fall `roundedRect()`). Die Verwendung von Hilfsfunktionen für Teile der Zeichnung, die Sie oft machen, kann sehr hilfreich sein und die Menge des Codes reduzieren, den Sie benötigen, sowie seine Komplexität.

Wir werden später in diesem Tutorial einen genaueren Blick auf `fillStyle` werfen. Hier verwenden wir es nur, um die Füllfarbe für Pfade von der Standardfarbe Schwarz auf Weiß zu ändern und dann wieder zurück.

### Formen mit Löchern

Um eine Form mit einem Loch darin zu zeichnen, müssen wir das Loch in verschiedenen Uhrzeigerrichtungen zeichnen, wie wir die äußere Form zeichnen. Entweder zeichnen wir die äußere Form im Uhrzeigersinn und die innere Form gegen den Uhrzeigersinn oder die äußere Form gegen den Uhrzeigersinn und die innere Form im Uhrzeigersinn.

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

Im obigen Beispiel geht das äußere Dreieck im Uhrzeigersinn (bewegen Sie sich zur oberen linken Ecke, dann zeichnen Sie eine Linie zur oberen rechten Ecke und beenden Sie am unteren Ende) und das innere Dreieck gegen den Uhrzeigersinn (bewegen Sie sich zur Spitze, dann Linie zur unteren linken Ecke und beenden Sie am unteren rechten).

## Path2D-Objekte

Wie wir im letzten Beispiel gesehen haben, kann es eine Reihe von Pfaden und Zeichenbefehlen geben, um Objekte auf Ihr Canvas zu zeichnen. Um den Code zu vereinfachen und die Leistung zu verbessern, ermöglicht Ihnen das [`Path2D`](/de/docs/Web/API/Path2D)-Objekt, das in den neuesten Versionen der Browser verfügbar ist, diese Zeichenbefehle zu zwischenspeichern oder aufzuzeichnen. Sie können Ihre Pfade schnell wiedergeben.
Lassen Sie uns sehen, wie wir ein `Path2D`-Objekt konstruieren können:

- [`Path2D()`](/de/docs/Web/API/Path2D/Path2D)
  - : Der **`Path2D()`** Konstruktor gibt ein neu instanziiertes `Path2D`-Objekt zurück, optional mit einem anderen Pfad als Argument (erstellt eine Kopie) oder optional mit einem String bestehend aus [SVG-Pfad](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Paths)-Daten.

```js
new Path2D(); // empty path object
new Path2D(path); // copy from another Path2D object
new Path2D(d); // path from SVG path data
```

Alle [Pfadmethoden](/de/docs/Web/API/CanvasRenderingContext2D#paths) wie `moveTo`, `rect`, `arc` oder `quadraticCurveTo`, etc., die wir oben kennengelernt haben, sind auf `Path2D`-Objekten verfügbar.

Die `Path2D`-API fügt auch eine Möglichkeit hinzu, Pfade mit der `addPath`-Methode zu kombinieren. Dies kann nützlich sein, wenn Sie Objekte aus mehreren Komponenten erstellen möchten, zum Beispiel.

- [`Path2D.addPath(path [, transform])`](/de/docs/Web/API/Path2D/addPath)
  - : Fügt einen Pfad zum aktuellen Pfad mit einer optionalen Transformationsmatrix hinzu.

### Path2D-Beispiel

In diesem Beispiel erstellen wir ein Rechteck und einen Kreis. Beide werden als `Path2D`-Objekt gespeichert, sodass sie für spätere Verwendungen verfügbar sind. Mit der neuen `Path2D`-API wurden mehrere Methoden aktualisiert, um optional ein `Path2D`-Objekt zu verwenden, anstatt des aktuellen Pfades. Hier werden `stroke` und `fill` mit einem Pfadargument verwendet, um beide Objekte auf das Canvas zu zeichnen, zum Beispiel.

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

### Verwendung von SVG-Pfaden

Ein weiteres leistungsstarkes Feature der neuen `Path2D`-API von Canvas ist die Verwendung von [SVG-Pfad](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Paths)-Daten, um Pfade auf Ihrem Canvas zu initialisieren. Dies könnte es Ihnen ermöglichen, Pfaddaten zu übergeben und sie sowohl in SVG als auch im Canvas wiederzuverwenden.

Der Pfad wird sich am Punkt (`M10 10`) bewegen und dann horizontal 80 Punkte nach rechts (`h 80`), dann 80 Punkte nach unten (`v 80`), dann 80 Punkte nach links (`h -80`) bewegen und dann zum Startpunkt zurückkehren (`z`). Sie können dieses Beispiel auf der [`Path2D` Konstruktor](/de/docs/Web/API/Path2D/Path2D#using_svg_paths)-Seite sehen.

```js
const p = new Path2D("M10 10 h 80 v 80 h -80 Z");
```

{{PreviousNext("Web/API/Canvas_API/Tutorial/Basic_usage", "Web/API/Canvas_API/Tutorial/Applying_styles_and_colors")}}
