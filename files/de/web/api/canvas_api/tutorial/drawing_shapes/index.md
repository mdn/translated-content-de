---
title: Zeichnen von Formen mit <canvas>
slug: Web/API/Canvas_API/Tutorial/Drawing_shapes
l10n:
  sourceCommit: f542ed344953b3312fc92150bba11536667e288a
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Basic_usage", "Web/API/Canvas_API/Tutorial/Applying_styles_and_colors")}}

Nachdem wir unsere [Leinwandumgebung](/de/docs/Web/API/Canvas_API/Tutorial/Basic_usage) eingerichtet haben, können wir uns nun den Details widmen, wie man auf der Leinwand zeichnet. Am Ende dieses Artikels werden Sie gelernt haben, wie man Rechtecke, Dreiecke, Linien, Bögen und Kurven zeichnet, was Ihnen Vertrautheit mit einigen der grundlegenden Formen vermittelt. Die Arbeit mit Pfaden ist beim Zeichnen von Objekten auf die Leinwand unerlässlich, und wir werden sehen, wie das gemacht wird.

## Das Raster

Bevor wir mit dem Zeichnen beginnen können, müssen wir über das Leinwandraster oder den **Koordinatenraum** sprechen. Unser HTML-Skelett von der vorherigen Seite hatte ein `<canvas>`-Element, das 150 Pixel breit und 150 Pixel hoch ist.

![Canvas-Raster mit einem blauen Quadrat zur Demonstration von Koordinaten und Achsen.](canvas_default_grid.png)

Normalerweise entspricht 1 Einheit im Raster 1 Pixel auf der Leinwand. Der Ursprung dieses Rasters befindet sich in der _oberen linken_ Ecke bei der Koordinate (0,0). Alle Elemente werden relativ zu diesem Ursprung positioniert. Somit wird die Position der oberen linken Ecke des blauen Quadrats x Pixel von links und y Pixel von oben bei der Koordinate (x,y) platziert. Später in diesem Tutorial werden wir sehen, wie wir den Ursprung an eine andere Position verschieben, das Raster drehen und es sogar skalieren können, aber fürs Erste halten wir uns an die Standardeinstellung.

## Zeichnen von Rechtecken

Im Gegensatz zu {{Glossary("SVG", "SVG")}} unterstützt {{HTMLElement("canvas")}} nur zwei primitive Formen: Rechtecke und Pfade (Listen von Punkten, die durch Linien verbunden sind). Alle anderen Formen müssen durch die Kombination von einem oder mehreren Pfaden erstellt werden. Glücklicherweise haben wir eine Reihe von Pfadzeichnungsfunktionen, die es ermöglichen, sehr komplexe Formen zu komponieren.

Zuerst schauen wir uns das Rechteck an. Es gibt drei Funktionen, die Rechtecke auf der Leinwand zeichnen:

- [`fillRect(x, y, width, height)`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect)
  - : Zeichnet ein gefülltes Rechteck.
- [`strokeRect(x, y, width, height)`](/de/docs/Web/API/CanvasRenderingContext2D/strokeRect)
  - : Zeichnet eine rechteckige Umrandung.
- [`clearRect(x, y, width, height)`](/de/docs/Web/API/CanvasRenderingContext2D/clearRect)
  - : Leert den angegebenen rechteckigen Bereich und macht ihn vollständig transparent.

Jede dieser drei Funktionen nimmt die gleichen Parameter. `x` und `y` geben die Position auf der Leinwand (relativ zum Ursprung) der oberen linken Ecke des Rechtecks an. `width` und `height` liefern die Größe des Rechtecks.

Unten finden Sie die `draw()`-Funktion von der vorherigen Seite, die jetzt diese drei Funktionen nutzt.

### Beispiel für rechteckige Form

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

Die `fillRect()`-Funktion zeichnet ein großes schwarzes Quadrat von 100 Pixeln auf jeder Seite. Die `clearRect()`-Funktion löscht dann ein 60x60-Pixel-Quadrat aus der Mitte, und dann wird `strokeRect()` aufgerufen, um eine rechteckige Umrandung von 50x50 Pixeln innerhalb des geleerten Quadrats zu erstellen (_konzeptionell_ 50x50; in Wirklichkeit sind es 52x52, wie der nächste Abschnitt erklären wird).

Auf den kommenden Seiten werden wir zwei alternative Methoden für `clearRect()` sehen, und wir werden auch lernen, wie man die Farbe und den Zeichenstil der gerenderten Formen ändert.

Im Gegensatz zu den Pfadfunktionen, die wir im nächsten Abschnitt sehen werden, zeichnen alle drei Rechteckfunktionen sofort auf die Leinwand.

## Verschwommene Kanten sehen?

Im obigen Rechteckbeispiel und in allen kommenden Beispielen werden Ihnen möglicherweise die Kanten der Formen verschwommener erscheinen als die äquivalenten Formen, die mit SVG oder CSS gezeichnet wurden. Dies liegt nicht daran, dass die Canvas-API nicht in der Lage ist, scharfe Kanten zu zeichnen, sondern wegen der Art und Weise, wie das Leinwandraster auf die tatsächlichen Pixel auf dem Bildschirm abgebildet wird, und auch in bestimmten Fällen, wie der Browser die Leinwand skaliert. Wenn das obige Beispiel nicht deutlich genug ist, lassen Sie uns die Leinwand mit CSS vergrößern:

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

In diesem Beispiel erstellen wir unsere Leinwand wirklich klein (15x15), skalieren sie dann aber mit CSS auf 300x300 Pixel hoch. Dadurch wird jeder Leinwandpixel nun durch einen 20x20 Block von CSS-Pixeln dargestellt. Wir zeichnen ein umrandetes Rechteck von (2,2) bis (12,12) und ein gefülltes Rechteck von (7,7) bis (8,8). Es erscheint _wirklich_ verschwommen. Das liegt daran, dass standardmäßig, wenn der Browser Rasterbilder skaliert, er einen Glättungsalgorithmus verwendet, um die zusätzlichen Pixel zu interpolieren. Dies ist großartig für Fotos oder Canvas-Grafiken mit geschwungenen Kanten, aber nicht so gut für Formen mit geraden Kanten. Um dies zu beheben, können wir {{cssxref("image-rendering")}} auf `pixelated` setzen:

```css live-sample___seeing_blurry_edges_2 live-sample___seeing_blurry_edges_3
#canvas {
  image-rendering: pixelated;
}
```

{{EmbedLiveSample("Seeing blurry edges 2", "", "350")}}

Nun, wenn der Browser die Leinwand skaliert, bewahrt er die Pixelierung des Originals so weit wie möglich.

> [!NOTE]
> `image-rendering: pixelated` ist nicht ohne Probleme als Technik zur Erhaltung von scharfen Kanten. Wenn CSS-Pixel nicht mit Gerätepixeln übereinstimmen (wenn der [`devicePixelRatio`](/de/docs/Web/API/Window/devicePixelRatio) keine ganze Zahl ist), können bestimmte Pixel größer als andere gezeichnet werden, was zu einer ungleichmäßigen Darstellung führt. Dies ist jedoch kein einfach zu lösendes Problem, da es unmöglich ist, Gerätepixel genau zu füllen, wenn die CSS-Pixel nicht genau darauf abgebildet werden können.

Aber jetzt wird ein anderes Problem deutlich, das Sie übrigens auch im ursprünglichen Rechteckbeispiel beobachten können: Das umrandete Rechteck ist nicht nur 2 Pixel breit anstatt 1, sondern erscheint auch grau anstatt der Standardfarbe Schwarz. Das liegt daran, wie die Koordinaten als Formgrenzen interpretiert werden.

Wenn Sie sich das [Raster](#das_raster)-Diagramm oben noch einmal ansehen, können Sie sehen, dass Koordinaten wie `2` oder `12` keinen Pixel identifizieren, sondern vielmehr die Kante zwischen zwei Pixeln. In den folgenden Bildern des Rasters stellt das Raster das Leinwand-Koordinatenraster dar. Die Quadrate zwischen den Rasterlinien sind tatsächliche Pixel auf dem Bildschirm. Im ersten Rasterbild unten ist ein Rechteck von (2,1) bis (5,5) gefüllt. Der gesamte Bereich dazwischen (hellrot) fällt auf die Pixelgrenzen, so dass das resultierende gefüllte Rechteck scharfe Kanten haben wird.

![Drei Koordinatenraster. Die Rasterlinien sind tatsächliche Pixel auf dem Bildschirm. Die obere linke Ecke jedes Rasters ist mit (0,0) gekennzeichnet. Im ersten Raster ist ein Rechteck von (2,1) bis (5,5) in hellroter Farbe gefüllt. Im zweiten Raster ist (3,1) bis (3,5) mit einer 1-Pixel-dicken königsblauen Linie verbunden. Die königsblaue Linie ist auf einer Rasterlinie zentriert, reicht von 2,5 bis 3,5 auf der x-Achse, zur Hälfte in die Pixel auf beiden Seiten der Grafenlinie hinein, mit einem hellblauen Hintergrund auf beiden Seiten, der von 2 bis 4 auf der x-Achse reicht. Um die hellblaue Verwischungserweiterung der Linie im zweiten Koordinatenraster zu vermeiden, wird im dritten Koordinatenraster der Pfad in königsblau von Linie (3,5,1) bis (3,5,5) gezeichnet. Die 1 Pixel Linienbreite füllt am Ende vollständig und präzise eine einpixelige vertikale Linie vollständig aus.](canvas-grid.png)

Betrachtet man einen Pfad von (3,1) bis (3,5) mit einer Linienstärke von `1.0`, kommt man zur Situation im zweiten Bild. Der tatsächliche Bereich, der gefüllt werden soll (dunkelblau), reicht nur zur Hälfte in die Pixel auf beiden Seiten des Pfads. Eine Annäherung daran muss gerendert werden, was bedeutet, dass diese Pixel nur teilweise gefüllt werden, und das Ergebnis ist, dass der gesamte Bereich (der hellblaue und der dunkelblaue) mit einer Farbe gefüllt wird, die nur halb so dunkel ist wie die tatsächliche Strichfarbe. Dies ist es, was mit der `1.0` Breitenlinie in dem `strokeRect()` Aufruf im obigen Rechteckbeispiel passiert.

Um dies zu beheben, müssen Sie beim Erstellen Ihres Pfads sehr präzise sein. Da eine `1.0` Breitenlinie zur Hälfte zu beiden Seiten des Pfads reicht, führt die Erstellung des Pfads von _Zentren_ der Pixel zu der Situation im dritten Bild—die `1.0` Linienbreite füllt schließlich komplett und präzise eine einpixelige vertikale Linie vollständig aus.

> [!NOTE]
> Beachten Sie, dass im Beispiel der vertikalen Linie die Y-Position immer noch eine ganzzahlige Rasterlinienposition referenziert - wenn das nicht der Fall wäre, würden wir an den Endpunkten Pixel mit halber Abdeckung sehen.

Deshalb haben wir früher gesagt, dass der `strokeRect(50, 50, 50, 50)` Aufruf im Rechteckbeispiel _konzeptionell_ 50x50 war, aber in Wirklichkeit ist er 52x52. Der tatsächlich gefüllte Bereich für die Umrandung startet bei (49.5, 49.5) und endet bei (100.5, 100.5), und wegen der teilweise gefüllten Pixel ist der tatsächlich gefüllte Bereich von (49,49) bis (101,101), was 52x52 ist, und die Kanten sind 2 Pixel breit. Um eine solide, 1 Pixel breite Umrandung zu erhalten, die genau 50x50 ist, müssten Sie das Rechteck um die Dicke der Umrandung (1px) verkleinern und es um die Hälfte der Dicke (0.5px) verschieben:

```js live-sample___seeing_blurry_edges_3
function draw() {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  ctx.strokeRect(2.5, 2.5, 9, 9);
  ctx.fillRect(7, 7, 1, 1);
}
```

{{EmbedLiveSample("Seeing blurry edges 3", "", "350")}}

Bei Linien mit gerader Breite endet jede Hälfte darin, eine ganze Anzahl Pixel zu sein, also möchte man einen Pfad, der zwischen den Pixeln liegt (das heißt, (3,1) bis (3,5)), anstatt durch die Mitte der Pixel.

Während es anfangs etwas schmerzhaft ist, mit skalierbarer 2D-Grafik zu arbeiten, stellt die Aufmerksamkeit auf das Pixelraster und die Position der Pfade sicher, dass Ihre Zeichnungen unabhängig von der Skalierung oder anderen Transformationen korrekt aussehen. Eine 1.0-Breitlinie, die an der richtigen Position gezeichnet wird, wird eine scharfe 2-Pixel-Linie, wenn sie um das 2-fache vergrößert wird, und wird an der richtigen Position erscheinen.

Dieses Phänomen der teilweise gefüllten Pixel erstreckt sich auch auf Formen, die nicht mit dem Pixelraster übereinstimmen. Zum Beispiel betrachte man ein gedrehtes Rechteck (Sie werden lernen, wie man es im nächsten Abschnitt zeichnet). Um zu sehen, wie es mit und ohne `image-rendering: pixelated` aussieht, haben wir zwei Leinwände nebeneinander und eine dritte vollständig skalierte, mit Rasterlinien:

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

Wenn das _Vergrößern_ eines Bildes es verschwommener erscheinen lässt als beabsichtigt, dann macht das _Verkleinern_ eines Bildes es _schärfer_. Beispielsweise, wenn Sie eine Leinwand auf dem Bildschirm als 300x150 Pixel darstellen möchten, können Sie sie als 600x300 Pixel erstellen und dann CSS verwenden, um es zu verkleinern. Dies ist besonders nützlich auf hochauflösenden Bildschirmen (wie Apple's Retina-Displays), auf denen ein CSS-Pixel durch mehrere Bildschirmpixel dargestellt wird, so dass, wenn Sie eine 300x150 Pixel große Leinwand getreu malen, es nicht die gleiche Pixelauflösung wie andere Elemente auf der Seite hat.

## Zeichnen von Pfaden

Jetzt schauen wir uns die Pfade an. Ein Pfad ist eine Liste von Punkten, verbunden durch Linien-Segmente, die unterschiedliche Formen haben können, ob gekrümmt oder nicht, von unterschiedlicher Breite und unterschiedlicher Farbe. Ein Pfad oder sogar ein Unterpfad kann geschlossen sein. Um mit Pfaden Formen zu erstellen, unternehmen wir einige zusätzliche Schritte:

1. Zuerst erstellen Sie den Pfad.
2. Dann verwenden Sie [Zeichenbefehle](/de/docs/Web/API/CanvasRenderingContext2D#paths), um in den Pfad zu zeichnen.
3. Sobald der Pfad erstellt wurde, können Sie den Pfad umranden oder füllen, um ihn zu rendern.

Hier sind die Funktionen, die verwendet werden, um diese Schritte auszuführen:

- [`beginPath()`](/de/docs/Web/API/CanvasRenderingContext2D/beginPath)
  - : Erstellt einen neuen Pfad. Sobald dieser erstellt ist, werden zukünftige Zeichenbefehle in den Pfad gerichtet und verwendet, um den Pfad aufzubauen.
- [Pfade-Methoden](/de/docs/Web/API/CanvasRenderingContext2D#paths)
  - : Methoden, um verschiedene Pfade für Objekte festzulegen.
- [`closePath()`](/de/docs/Web/API/CanvasRenderingContext2D/closePath)
  - : Fügt eine gerade Linie zum Pfad hinzu, die zum Start des aktuellen Unterpfads führt.
- [`stroke()`](/de/docs/Web/API/CanvasRenderingContext2D/stroke)
  - : Zeichnet die Form, indem ihre Umrandung umrandet wird.
- [`fill()`](/de/docs/Web/API/CanvasRenderingContext2D/fill)
  - : Zeichnet eine feste Form, indem der Inhaltsbereich des Pfads gefüllt wird.

Der erste Schritt, um einen Pfad zu erstellen, ist der Aufruf von `beginPath()`. Intern werden Pfade als Liste von Unterpfaden (Linien, Bögen, etc.) gespeichert, die zusammen eine Form bilden. Jedes Mal, wenn diese Methode aufgerufen wird, wird die Liste zurückgesetzt und wir können beginnen, neue Formen zu zeichnen.

> [!NOTE]
> Wenn der aktuelle Pfad leer ist, wie beispielsweise direkt nach einem Aufruf von `beginPath()`, oder auf einer neu erstellten Leinwand, wird der erste Pfadkonstruktionsbefehl immer als `moveTo()` behandelt, unabhängig davon, was er eigentlich ist. Aus diesem Grund werden Sie fast immer Ihre Startposition explizit nach dem Zurücksetzen eines Pfads festlegen wollen.

Der zweite Schritt ist der Aufruf der Methoden, die tatsächlich die zu zeichnenden Pfade spezifizieren. Wir werden diese in Kürze sehen.

Der dritte und optionale Schritt ist der Aufruf von `closePath()`. Diese Methode versucht, die Form zu schließen, indem eine gerade Linie von der aktuellen Position zum Start gezogen wird. Sollte die Form bereits geschlossen sein oder es gibt nur einen Punkt in der Liste, führt diese Funktion nichts aus.

> [!NOTE]
> Wenn Sie `fill()` aufrufen, werden alle offenen Formen automatisch geschlossen, sodass Sie `closePath()` nicht aufrufen müssen. Dies ist **nicht** der Fall, wenn Sie `stroke()` aufrufen.

### Zeichnen eines Dreiecks

Zum Beispiel könnte der Code zum Zeichnen eines Dreiecks so aussehen:

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

Das Resultat sieht so aus:

{{EmbedLiveSample("Drawing_a_triangle", "", "110")}}

### Bewegen des Stifts

Eine sehr nützliche Funktion, die tatsächlich nichts zeichnet, aber Teil der oben beschriebenen Pfadliste wird, ist die Funktion `moveTo()`. Sie können dies wahrscheinlich am besten als das Anheben eines Stifts oder Bleistifts von einem Punkt auf einem Blatt Papier und das Platzieren auf dem nächsten betrachten.

- [`moveTo(x, y)`](/de/docs/Web/API/CanvasRenderingContext2D/moveTo)
  - : Bewegt den Stift zu den durch `x` und `y` angegebenen Koordinaten.

Wenn die Leinwand initialisiert wird oder `beginPath()` aufgerufen wird, möchten Sie in der Regel die `moveTo()`-Funktion verwenden, um den Startpunkt woanders zu platzieren. Wir könnten `moveTo()` auch verwenden, um unverbundene Pfade zu zeichnen. Schauen Sie sich das Smiley-Gesicht unten an.

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

Das Resultat sieht so aus:

{{EmbedLiveSample("Moving_the_pen", "", "160")}}

Wenn Sie die Verbindungs-Linien sehen möchten, können Sie die Zeilen entfernen, die `moveTo()` aufrufen.

> [!NOTE]
> Um mehr über die `arc()`-Funktion zu erfahren, siehe den Abschnitt [Bögen](#bögen) unten.

### Linien

Um gerade Linien zu zeichnen, verwenden Sie die `lineTo()`-Methode.

- [`lineTo(x, y)`](/de/docs/Web/API/CanvasRenderingContext2D/lineTo)
  - : Zeichnet eine Linie von der aktuellen Zeichenposition zur Position, die durch `x` und `y` angegeben ist.

Diese Methode nimmt zwei Argumente, `x` und `y`, die die Koordinaten des Endpunkts der Linie sind. Der Startpunkt hängt von zuvor gezeichneten Pfaden ab, wobei der Endpunkt des vorherigen Pfads der Startpunkt für den folgenden ist usw. Der Startpunkt kann auch durch die `moveTo()`-Methode geändert werden.

Das folgende Beispiel zeichnet zwei Dreiecke, eines gefüllt und eines umrandet.

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

Es beginnt damit, `beginPath()` aufzurufen, um einen neuen Formpfad zu starten. Wir verwenden dann die `moveTo()`-Methode, um den Startpunkt zu der gewünschten Position zu verschieben. Darunter werden zwei Linien gezeichnet, die zwei Seiten des Dreiecks bilden.

{{EmbedLiveSample("Lines", "", "160")}}

Sie werden den Unterschied zwischen dem gefüllten und dem umrandeten Dreieck bemerken. Dies liegt, wie oben erwähnt, daran, dass Formen automatisch geschlossen werden, wenn ein Pfad gefüllt ist, aber nicht, wenn er umrandet wird. Wenn wir das `closePath()` für das umrandete Dreieck weglassen würden, wären nur zwei Linien gezeichnet worden, kein komplettes Dreieck.

### Bögen

Um Bögen oder Kreise zu zeichnen, verwenden wir die Methoden `arc()` oder `arcTo()`.

- [`arc(x, y, radius, startAngle, endAngle, counterclockwise)`](/de/docs/Web/API/CanvasRenderingContext2D/arc)
  - : Zeichnet einen Bogen, der sich an der Position _(x, y)_ mit Radius _r_ befindet, beginnend bei _startAngle_ und endend bei _endAngle_, wobei er in die durch _counterclockwise_ angegebene Richtung verläuft (standardmäßig im Uhrzeigersinn).
- [`arcTo(x1, y1, x2, y2, radius)`](/de/docs/Web/API/CanvasRenderingContext2D/arcTo)
  - : Zeichnet einen Bogen mit den angegebenen Kontrollpunkten und dem Radius, verbunden mit dem vorherigen Punkt durch eine gerade Linie.

Werfen wir einen detaillierteren Blick auf die `arc`-Methode, die sechs Parameter benötigt: `x` und `y` sind die Koordinaten des Zentrums des Kreises, auf dem der Bogen gezeichnet werden soll. `radius` ist selbsterklärend. Die Parameter `startAngle` und `endAngle` definieren die Start- und Endpunkte des Bogens in Bogenmaß, entlang des Kreisumfangs. Diese werden von der x-Achse gemessen. Der Parameter `counterclockwise` ist ein boolescher Wert, der, wenn `true`, den Bogen gegen den Uhrzeigersinn zieht; andernfalls wird der Bogen im Uhrzeigersinn gezeichnet.

> [!NOTE]
> Winkel in der `arc`-Funktion werden in Bogenmaß gemessen, nicht in Grad. Um Grad in Bogenmaß zu konvertieren, können Sie den folgenden JavaScript-Ausdruck verwenden: `Radians = (Math.PI/180)*degrees`.

Das folgende Beispiel ist etwas komplexer als die, die wir oben gesehen haben. Es zeichnet 12 verschiedene Bögen, alle mit unterschiedlichen Winkeln und Füllungen.

Die beiden [`for` Schleifen](/de/docs/Web/JavaScript/Reference/Statements/for) dienen zum Durchlaufen der Zeilen und Spalten der Bögen. Für jeden Bogen beginnen wir einen neuen Pfad, indem wir `beginPath()` aufrufen. Im Code ist jeder der Parameter für den Bogen in einer Variable der Klarheit halber festgelegt, aber das würden Sie im wirklichen Leben nicht unbedingt tun.

Die `x` und `y` Koordinaten sollten klar genug sein. `radius` und `startAngle` sind fest. Der `endAngle` beginnt bei 180 Grad (ein halber Kreis) in der ersten Spalte und wird in Schritten von 90 Grad erhöht, was in einem vollständigen Kreis in der letzten Spalte kulminiert.

Die Anweisung für den `clockwise` Parameter führt dazu, dass die erste und dritte Reihe im Uhrzeigersinn gezeichnet werden und die zweite und vierte Reihe als gegen den Uhrzeigersinn Bögen. Schließlich macht die `if` Anweisung die obere Hälfte mit umrandeten Bögen und die untere Hälfte mit gefüllten Bögen.

> [!NOTE]
> Dieses Beispiel erfordert eine etwas größere Leinwand als die anderen auf dieser Seite: 150 x 200 Pixel.

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

Die nächste Art von verfügbaren Pfaden sind {{Glossary("Bezier_curve", "Bézier-Kurven")}}, die sowohl in kubischer als auch in quadratischer Form erhältlich sind. Diese werden im Allgemeinen für das Zeichnen komplexer, organischer Formen verwendet.

- [`quadraticCurveTo(cp1x, cp1y, x, y)`](/de/docs/Web/API/CanvasRenderingContext2D/quadraticCurveTo)
  - : Zeichnet eine quadratische Bézier-Kurve von der aktuellen Stiftposition zum durch `x` und `y` angegebenen Endpunkt, unter Verwendung des durch `cp1x` und `cp1y` angegebenen Kontrollpunkts.
- [`bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)`](/de/docs/Web/API/CanvasRenderingContext2D/bezierCurveTo)
  - : Zeichnet eine kubische Bézier-Kurve von der aktuellen Stiftposition zum durch `x` und `y` angegebenen Endpunkt, unter Verwendung der durch (`cp1x`, `cp1y`) und (`cp2x`, `cp2y`) angegebenen Kontrollpunkte.

Der Unterschied zwischen diesen besteht darin, dass eine quadratische Bézier-Kurve einen Start- und einen Endpunkt (blaue Punkte) und nur einen **Kontrollpunkt** (angezeigt durch den roten Punkt) hat, während eine kubische Bézier-Kurve zwei Kontrollpunkte verwendet.
![Vergleich Quadratische und Bezier-Kurve.](canvas_curves.png)

Die Parameter `x` und `y` in beiden Methoden sind die Koordinaten des Endpunkts. `cp1x` und `cp1y` sind die Koordinaten des ersten Kontrollpunkts und `cp2x` und `cp2y` sind die Koordinaten des zweiten Kontrollpunkts.

Die Verwendung von quadratischen und kubischen Bézier-Kurven kann ziemlich herausfordernd sein, da im Gegensatz zu Vektorgrafik-Software wie Adobe Illustrator, wir kein direktes visuelles Feedback dazu haben, was wir tun. Dies macht es ziemlich schwer, komplexe Formen zu zeichnen. In dem folgenden Beispiel werden wir einige einfache organische Formen zeichnen, aber wenn Sie die Zeit und vor allem die Geduld haben, können viel komplexere Formen erstellt werden.

Es gibt nichts wirklich Schwieriges in diesen Beispielen. In beiden Fällen sehen wir eine Abfolge von Kurven, die schließlich in einer vollständigen Form resultieren.

#### Quadratische Bézier-Kurven

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

#### Kubische Bézier-Kurven

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

Zusätzlich zu den drei Methoden, die wir beim [Zeichnen von Rechtecken](#zeichnen_von_rechtecken) gesehen haben, die rechtwinklige Formen direkt auf die Leinwand zeichnen, gibt es auch die `rect()`-Methode, die einen rechteckigen Pfad zu einem derzeit geöffneten Pfad hinzufügt.

- [`rect(x, y, width, height)`](/de/docs/Web/API/CanvasRenderingContext2D/rect)
  - : Zeichnet ein Rechteck, dessen obere linke Ecke durch (`x`, `y`) mit der angegebenen `width` und `height` angegeben ist.

Bevor diese Methode ausgeführt wird, wird automatisch die `moveTo()`-Methode mit den Parametern (x,y) aufgerufen. Mit anderen Worten, die aktuelle Stiftposition wird automatisch auf die Standardkoordinaten zurückgesetzt.

### Kombinationen erstellen

Bisher hat jedes Beispiel auf dieser Seite nur einen Typ von Pfadfunktion pro Form verwendet. Es gibt jedoch keine Einschränkung für die Anzahl oder Arten von Pfaden, die Sie verwenden können, um eine Form zu erstellen. Lassen Sie uns also in diesem letzten Beispiel alle Pfadfunktionen kombinieren, um eine Reihe von sehr berühmten Spielfiguren zu erstellen.

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

Wir werden dies nicht im Detail durchgehen, da es eigentlich überraschend einfach ist. Die wichtigsten Dinge, die zu beachten sind, sind die Verwendung der `fillStyle`-Eigenschaft im Zeichenkontext und die Verwendung einer Hilfsfunktion (in diesem Fall `roundedRect()`). Die Verwendung von Hilfsfunktionen für Zeichenteile, die Sie oft verwenden, kann sehr hilfreich sein und die Menge des Codes, den Sie benötigen, sowie dessen Komplexität verringern.

Wir werden `fillStyle` in mehr Detail an späterer Stelle in diesem Tutorial noch einmal betrachten. Hier verwenden wir es einfach, um die Füllfarbe für Pfade von der Standardfarbe Schwarz auf Weiß und dann wieder zurück zu ändern.

### Formen mit Löchern

Um eine Form mit einem Loch darin zu zeichnen, müssen wir das Loch in unterschiedlichen Uhrzeigerrichtungen wie die äußere Form zeichnen. Wir zeichnen entweder die äußere Form im Uhrzeigersinn und die innere Form gegen den Uhrzeigersinn oder die äußere Form gegen den Uhrzeigersinn und die innere Form im Uhrzeigersinn.

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

Im obigen Beispiel geht das äußere Dreieck im Uhrzeigersinn (zum oberen linken Eckpunkt bewegen, dann eine Linie zum oberen rechten Eckpunkt ziehen und am unteren Ende enden) und das innere Dreieck geht gegen den Uhrzeigersinn (zum oberen Rand bewegen, dann Linie zum unteren linken Eckpunkt und am unteren rechten enden).

## Path2D-Objekte

Wie wir im letzten Beispiel gesehen haben, kann es eine Reihe von Pfaden und Zeichenbefehlen geben, um Objekte auf Ihre Leinwand zu zeichnen. Um den Code zu vereinfachen und die Leistung zu verbessern, ermöglicht das [`Path2D`](/de/docs/Web/API/Path2D)-Objekt, das in neueren Versionen von Browsern verfügbar ist, Ihnen, diese Zeichenbefehle zwischenzuspeichern oder aufzuzeichnen. Sie können Ihre Pfade schnell wiedergeben.
Lassen Sie uns sehen, wie wir ein `Path2D`-Objekt konstruieren können:

- [`Path2D()`](/de/docs/Web/API/Path2D/Path2D)
  - : Der **`Path2D()`**-Konstruktor gibt ein neu instanziertes `Path2D`-Objekt zurück, optional mit einem anderen Pfad als Argument (erzeugt eine Kopie), oder optional mit einem String, der aus [SVG-Pfaddaten](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Paths) besteht.

```js
new Path2D(); // empty path object
new Path2D(path); // copy from another Path2D object
new Path2D(d); // path from SVG path data
```

Alle [Pfade-Methoden](/de/docs/Web/API/CanvasRenderingContext2D#paths) wie `moveTo`, `rect`, `arc` oder `quadraticCurveTo`, etc., die wir oben kennengelernt haben, sind auf `Path2D`-Objekten verfügbar.

Das `Path2D`-API fügt auch eine Möglichkeit hinzu, Pfade mithilfe der `addPath`-Methode zu kombinieren. Dies kann nützlich sein, wenn Sie Objekte aus mehreren Komponenten bauen möchten, zum Beispiel.

- [`Path2D.addPath(path [, transform])`](/de/docs/Web/API/Path2D/addPath)
  - : Fügt dem aktuellen Pfad einen Pfad mit einer optionalen Transformationsmatrix hinzu.

### Path2D-Beispiel

In diesem Beispiel erstellen wir ein Rechteck und einen Kreis. Beide werden als `Path2D`-Objekt gespeichert, sodass sie für die spätere Nutzung verfügbar sind. Mit dem neuen `Path2D`-API wurden mehrere Methoden aktualisiert, um optional ein `Path2D`-Objekt zu akzeptieren, das anstelle des aktuellen Pfads verwendet wird. Hier werden `stroke` und `fill` mit einem Pfadargument verwendet, um beide Objekte auf die Leinwand zu zeichnen, zum Beispiel.

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

Ein weiteres mächtiges Feature des neuen Canvas `Path2D`-APIs ist die Verwendung von [SVG-Pfaddaten](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Paths), um Pfade auf Ihrer Leinwand zu initialisieren. Dies könnte es Ihnen ermöglichen, Pfaddaten weiterzureichen und sowohl in SVG als auch in dem Canvas wiederzuverwenden.

Der Pfad bewegt sich zu Punkt (`M10 10`) und bewegt sich dann horizontal 80 Punkte nach rechts (`h 80`), dann 80 Punkte nach unten (`v 80`), dann 80 Punkte nach links (`h -80`), und dann zurück zum Start (`z`). Sie können dieses Beispiel auf der Seite zum [`Path2D`-Konstruktor](/de/docs/Web/API/Path2D/Path2D#using_svg_paths) sehen.

```js
const p = new Path2D("M10 10 h 80 v 80 h -80 Z");
```

{{PreviousNext("Web/API/Canvas_API/Tutorial/Basic_usage", "Web/API/Canvas_API/Tutorial/Applying_styles_and_colors")}}
