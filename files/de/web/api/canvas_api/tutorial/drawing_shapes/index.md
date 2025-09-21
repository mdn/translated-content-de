---
title: Zeichnen von Formen mit Canvas
slug: Web/API/Canvas_API/Tutorial/Drawing_shapes
l10n:
  sourceCommit: b4d7275e992575d765bd1f504c28c0a64e1d0632
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Basic_usage", "Web/API/Canvas_API/Tutorial/Applying_styles_and_colors")}}

Nun, da wir unsere [Canvas-Umgebung](/de/docs/Web/API/Canvas_API/Tutorial/Basic_usage) eingerichtet haben, können wir uns den Details widmen, wie man auf dem Canvas zeichnet. Am Ende dieses Artikels haben Sie gelernt, wie man Rechtecke, Dreiecke, Linien, Bögen und Kurven zeichnet und sich mit einigen der grundlegenden Formen vertraut macht. Das Arbeiten mit Pfaden ist entscheidend, wenn Sie Objekte auf das Canvas zeichnen, und wir werden sehen, wie das gemacht werden kann.

## Das Raster

Bevor wir mit dem Zeichnen beginnen können, müssen wir über das Raster des Canvas oder den **Koordinatenraum** sprechen. Unser HTML-Skelett von der vorherigen Seite hatte ein Canvas-Element, das 150 Pixel breit und 150 Pixel hoch war.

![Canvas-Raster mit einem blauen Quadrat, das Koordinaten und Achsen zeigt.](canvas_default_grid.png)

Normalerweise entspricht eine Einheit im Raster einem Pixel auf dem Canvas. Der Ursprung dieses Rasters ist in der _oberen linken_ Ecke bei der Koordinate (0,0) positioniert. Alle Elemente werden relativ zu diesem Ursprung platziert. Die Position der oberen linken Ecke des blauen Quadrats wird also x Pixel von links und y Pixel von oben bei der Koordinate (x,y). Später in diesem Tutorial werden wir sehen, wie wir den Ursprung auf eine andere Position verschieben, das Raster drehen und es sogar skalieren können, aber vorerst bleiben wir beim Standard.

## Zeichnen von Rechtecken

Im Gegensatz zu {{Glossary("SVG", "SVG")}} unterstützt {{HTMLElement("canvas")}} nur zwei primitive Formen: Rechtecke und Pfade (Listen von Punkten, die durch Linien verbunden sind). Alle anderen Formen müssen erstellt werden, indem ein oder mehrere Pfade kombiniert werden. Glücklicherweise haben wir eine Auswahl an Pfadzeichnungsfunktionen, die es ermöglichen, sehr komplexe Formen zu komponieren.

Sehen wir uns zuerst das Rechteck an. Es gibt drei Funktionen, die Rechtecke auf das Canvas zeichnen:

- [`fillRect(x, y, width, height)`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect)
  - : Zeichnet ein gefülltes Rechteck.
- [`strokeRect(x, y, width, height)`](/de/docs/Web/API/CanvasRenderingContext2D/strokeRect)
  - : Zeichnet einen rechteckigen Umriss.
- [`clearRect(x, y, width, height)`](/de/docs/Web/API/CanvasRenderingContext2D/clearRect)
  - : Löscht den angegebenen rechteckigen Bereich und macht ihn vollständig transparent.

Jede dieser drei Funktionen nimmt die gleichen Parameter an. `x` und `y` geben die Position auf dem Canvas an (relativ zum Ursprung) der oberen linken Ecke des Rechtecks. `width` und `height` bestimmen die Größe des Rechtecks.

Unten ist die `draw()`-Funktion von der vorherigen Seite, aber jetzt wird sie verwendet, um diese drei Funktionen zu nutzen.

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

Die `fillRect()`-Funktion zeichnet ein großes schwarzes Quadrat mit 100 Pixeln auf jeder Seite. Die `clearRect()`-Funktion löscht dann ein 60x60 Pixel großes Quadrat aus der Mitte, und dann wird `strokeRect()` aufgerufen, um einen rechteckigen Umriss von 50x50 Pixeln innerhalb des gelöschten Quadrats zu erstellen (_konzeptionell_ 50x50; in Wirklichkeit sind es 52x52, wie im nächsten Abschnitt erklärt wird).

Auf den kommenden Seiten werden wir zwei alternative Methoden für `clearRect()` sehen und auch, wie man die Farbe und den Strichstil der gezeichneten Formen ändert.

Im Gegensatz zu den Pfadfunktionen, die wir im nächsten Abschnitt sehen werden, zeichnen alle drei Rechteckfunktionen sofort auf das Canvas.

## Unscharfe Kanten sehen?

Im obigen Rechteckbeispiel und in allen kommenden Beispielen werden Ihnen möglicherweise die Kanten der Formen unschärfer erscheinen als die entsprechenden Formen, die mit SVG oder CSS gezeichnet wurden. Dies liegt nicht daran, dass die Canvas-API unfähig ist, scharfe Kanten zu zeichnen, sondern an der Art und Weise, wie das Canvas-Raster auf die tatsächlichen Pixel auf dem Bildschirm abgebildet wird, und in bestimmten Fällen, wie der Browser das Canvas skaliert. Wenn das obige Beispiel nicht deutlich genug ist, vergrößern wir das Canvas mit CSS:

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

In diesem Beispiel erstellen wir unser Canvas wirklich klein (15x15), verwenden aber dann CSS, um es auf 300x300 Pixel zu skalieren. Dadurch wird jedes Canvas-Pixel jetzt durch einen 20x20 Block von Bildschirm-Pixeln repräsentiert. Wir zeichnen ein gestricheltes Rechteck von (2,2) bis (12,12) und ein gefülltes Rechteck von (7,7) bis (8,8). Es erscheint _wirklich_ verschwommen. Das liegt daran, dass der Browser standardmäßig beim Skalieren von Rasterbildern einen Glättungsalgorithmus verwendet, um die zusätzlichen Pixel zu interpolieren. Das ist großartig für Fotos oder Canvas-Grafiken mit geschwungenen Kanten, aber nicht so gut für Formen mit geraden Kanten. Um dies zu beheben, können wir {{cssxref("image-rendering")}} auf `pixelated` setzen:

```css live-sample___seeing_blurry_edges_2 live-sample___seeing_blurry_edges_3
#canvas {
  image-rendering: pixelated;
}
```

{{EmbedLiveSample("Seeing blurry edges 2", "", "350")}}

Jetzt, wenn der Browser das Canvas skaliert, wird die Pixelierung des Originals so weit wie möglich beibehalten.

> [!NOTE]
> `image-rendering: pixelated` ist nicht ohne Probleme als Technik zur Erhaltung scharfer Kanten. Wenn CSS-Pixel nicht mit Geräte-Pixeln übereinstimmen (wenn der [`devicePixelRatio`](/de/docs/Web/API/Window/devicePixelRatio) nicht ganzzahlig ist), können bestimmte Pixel größer als andere gezeichnet werden, was zu einem ungleichmäßigen Erscheinungsbild führt. Dies ist jedoch kein einfach zu lösendes Problem, da es unmöglich ist, Geräte-Pixel präzise zu füllen, wenn die CSS-Pixel nicht genau auf sie abgebildet werden können.

Aber jetzt wird ein weiteres Problem deutlich, eines das Sie auch im ursprünglichen Rechteckbeispiel beobachten können: Das gestrichelte Rechteck ist nicht nur 2 Pixel breit anstelle von 1, sondern erscheint auch grau statt standardmäßig schwarz. Dies liegt daran, wie die Koordinaten als Formbegrenzungen interpretiert werden.

Wenn Sie das obige [Raster](#das_raster)-Diagramm noch einmal betrachten, können Sie sehen, dass Koordinaten wie `2` oder `12` nicht einen Pixel identifizieren, sondern vielmehr den Rand zwischen zwei Pixeln. In den unten stehenden Bildern repräsentiert das Raster das Canvas-Koordinatenraster. Die Quadrate zwischen den Rasterlinien sind tatsächliche Bildschirm-Pixel. Im ersten Rasterbild unten wird ein Rechteck von (2,1) bis (5,5) gefüllt. Der gesamte Bereich dazwischen (hellrot) liegt auf den Pixelgrenzen, so dass das resultierende gefüllte Rechteck scharfe Kanten hat.

![Drei Koordinatenraster. Die Rasterlinien sind tatsächliche Pixel auf dem Bildschirm. Die obere linke Ecke jedes Rasters ist als (0,0) beschriftet. Im ersten Raster ist ein Rechteck von (2,1) bis (5,5) in hellroter Farbe gefüllt. Im zweiten Raster ist (3,1) bis (3,5) mit einer 1-Pixel dicken königsblauen Linie verbunden. Die königsblaue Linie ist auf einer Rasterlinie zentriert, erstreckt sich von 2,5 bis 3,5 auf der x-Achse, zur Hälfte in die Pixel auf beiden Seiten der Grafenlinie, mit einem hellblauen Hintergrund auf beiden Seiten, der sich von 2 bis 4 auf der x-Achse erstreckt. Um die hellblaue Verschwommenheits-Erweiterung der Linie im zweiten Koordinatenraster zu vermeiden, ist der Pfad im dritten Koordinatenraster eine königsblaue Linie von (3,5,1) bis (3,5,5). Die 1 Pixel Linienbreite füllt am Ende vollständig und präzise eine einzelne Pixelvertikallinie aus.](canvas-grid.png)

Wenn Sie einen Pfad von (3,1) bis (3,5) mit einer Linienstärke von `1.0` in Betracht ziehen, enden Sie mit der Situation im zweiten Bild. Der tatsächlich zu füllende Bereich (dunkelblau) erstreckt sich nur zur Hälfte in die Pixel auf beiden Seiten des Pfades. Ein Näherungswert davon muss gerendert werden, was bedeutet, dass diese Pixel nur teilweise schattiert sind und der gesamte Bereich (das hellblaue und dunkelblaue) mit einer Farbe gefüllt wird, die nur halb so dunkel ist wie die eigentliche Strichfarbe. Dies passiert mit der `1.0` Breite Linie im `strokeRect()` Aufruf im oben genannten Rechteckbeispiel.

Um dies zu beheben, müssen Sie beim Erstellen Ihres Pfades sehr präzise sein. Wenn Sie wissen, dass eine `1.0` Breite Linie sich um eine halbe Einheit auf beide Seiten des Pfades erstreckt, führt das Erstellen des Pfades von den _Zentren_ der Pixel zur Situation im dritten Bild—die `1.0` Linienbreite füllt am Ende vollständig und präzise eine einzelne Pixelvertikallinie aus.

> [!NOTE]
> Beachten Sie, dass im Beispiel für die vertikale Linie die Y-Position immer noch eine ganzzahlige Rasterlinienposition referenziert—wenn dies nicht der Fall wäre, würden wir Pixel mit halber Abdeckung an den Endpunkten sehen.

Deshalb haben wir zuvor gesagt, dass der `strokeRect(50, 50, 50, 50)` Aufruf im Rechteckbeispiel _konzeptionell_ 50x50 war, aber in Wirklichkeit 52x52 ist. Der tatsächlich gefüllte Bereich für den Umriss beginnt bei (49.5, 49.5) und endet bei (100.5, 100.5), und wegen der teilweise gefüllten Pixel ist der tatsächlich gefüllte Bereich von (49,49) bis (101,101), was 52x52 ist, und die Kanten sind 2 Pixel breit. Um einen soliden 1 Pixel breiten Umriss zu erhalten, der genau 50x50 ist, müssten Sie das Rechteck um die Dicke des Umrisses (1px) verkleinern und es um die halbe Dicke (0.5px) verschieben:

```js live-sample___seeing_blurry_edges_3
function draw() {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  ctx.strokeRect(2.5, 2.5, 9, 9);
  ctx.fillRect(7, 7, 1, 1);
}
```

{{EmbedLiveSample("Seeing blurry edges 3", "", "350")}}

Bei geraden Breitenlinien endet jede Hälfte in einer ganzzahligen Anzahl von Pixeln, sodass Sie einen Pfad möchten, der zwischen den Pixeln (also, (3,1) bis (3,5)), anstelle von mittig über den Pixeln liegt.

Während es ein wenig schmerzhaft sein kann, beim Arbeiten mit skalierbaren 2D-Grafiken auf das Pixelraster und die Position der Pfade zu achten, stellt dies sicher, dass Ihre Zeichnungen unabhängig von der Skalierung oder anderen Transformationen korrekt aussehen. Eine 1.0-Breite vertikale Linie, die an der korrekten Position gezeichnet wird, wird beim Hochskalieren um 2 zu einer klaren 2-Pixel-Linie und erscheint an der richtigen Position.

Dieses Phänomen der teilweise gefüllten Pixel erstreckt sich auch auf Formen, die nicht auf das Pixelraster ausgerichtet sind. Betrachten Sie zum Beispiel ein gedrehtes Rechteck (Sie werden lernen, es im nächsten Abschnitt zu zeichnen). Um zu sehen, wie es mit und ohne `image-rendering: pixelated` aussieht, haben wir zwei Canvas nebeneinander und ein drittes, das in voller Größe gezeichnet ist, mit Rasterlinien:

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

Wenn das _Hochskalieren_ eines Bildes es unschärfer erscheinen lässt als beabsichtigt, dann würde das _Herunterskalieren_ eines Bildes es _schärfer_ erscheinen lassen. Wenn Sie möchten, dass ein Canvas mit 300x150 Pixeln auf dem Bildschirm erscheint, können Sie es als 600x300 Pixel erstellen und dann CSS verwenden, um es zu verkleinern. Dies ist besonders nützlich auf Bildschirmen mit hoher DPI (wie Apples Retina-Displays), bei denen ein CSS-Pixel durch mehrere Bildschirm-Pixel repräsentiert wird, wenn Sie ein 300x150 Pixel Canvas treu malen, hat es nicht dieselbe Pixelauflösung wie andere Elemente auf der Seite.

## Zeichnen von Pfaden

Nun lassen Sie uns Pfade betrachten. Ein Pfad ist eine Liste von Punkten, verbunden durch Segmente von Linien, die verschiedene Formen haben können, gekrümmt oder nicht, unterschiedlicher Breite und unterschiedlicher Farbe. Ein Pfad oder sogar ein Teilpfad kann geschlossen sein. Um Formen mit Pfaden zu erstellen, führen wir einige zusätzliche Schritte durch:

1. Zuerst erstellen Sie den Pfad.
2. Dann verwenden Sie [Zeichenbefehle](/de/docs/Web/API/CanvasRenderingContext2D#paths), um in den Pfad zu zeichnen.
3. Sobald der Pfad erstellt wurde, können Sie den Pfad umranden oder füllen, um ihn zu rendern.

Hier sind die Funktionen, die verwendet werden, um diese Schritte auszuführen:

- [`beginPath()`](/de/docs/Web/API/CanvasRenderingContext2D/beginPath)
  - : Erstellt einen neuen Pfad. Einmal erstellt, werden zukünftige Zeichenbefehle in den Pfad geleitet und verwendet, um den Pfad aufzubauen.
- [Pfad-Methoden](/de/docs/Web/API/CanvasRenderingContext2D#paths)
  - : Methoden, um verschiedene Pfade für Objekte festzulegen.
- [`closePath()`](/de/docs/Web/API/CanvasRenderingContext2D/closePath)
  - : Fügt dem Pfad eine gerade Linie hinzu, die zum Anfang des aktuellen Teilpfads führt.
- [`stroke()`](/de/docs/Web/API/CanvasRenderingContext2D/stroke)
  - : Zeichnet die Form, indem sie ihre Umrisse umrandet.
- [`fill()`](/de/docs/Web/API/CanvasRenderingContext2D/fill)
  - : Zeichnet eine feste Form, indem der Inhaltsbereich des Pfades gefüllt wird.

Der erste Schritt, um einen Pfad zu erstellen, ist der Aufruf von `beginPath()`. Intern werden Pfade als Liste von Teilpfaden (Linien, Bögen, etc.) gespeichert, die zusammen eine Form bilden. Jedes Mal, wenn diese Methode aufgerufen wird, wird die Liste zurückgesetzt und wir können neue Formen zeichnen.

> [!NOTE]
> Wenn der aktuelle Pfad leer ist, wie z. B. unmittelbar nach dem Aufruf von `beginPath()` oder bei einem neu erstellten Canvas, wird der erste Pfadbau-Befehl immer als `moveTo()` behandelt, unabhängig davon, was er tatsächlich ist. Aus diesem Grund werden Sie fast immer Ihren Ausgangsposition nach dem Zurücksetzen eines Pfades speziell festlegen wollen.

Der zweite Schritt ist der Aufruf der Methoden, die tatsächlich die zu zeichnenden Pfade festlegen. Diese werden wir in Kürze sehen.

Der dritte und optionale Schritt ist der Aufruf von `closePath()`. Diese Methode versucht, die Form zu schließen, indem eine gerade Linie vom aktuellen Punkt zum Start gezeichnet wird. Wenn die Form bereits geschlossen ist oder nur ein Punkt in der Liste ist, tut diese Funktion nichts.

> [!NOTE]
> Wenn Sie `fill()` aufrufen, werden alle offenen Formen automatisch geschlossen, sodass Sie `closePath()` nicht aufrufen müssen. Dies ist **nicht** der Fall, wenn Sie `stroke()` aufrufen.

### Zeichnen eines Dreiecks

Zum Beispiel würde der Code zum Zeichnen eines Dreiecks ungefähr so aussehen:

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

### Bewegen des Stiftes

Eine sehr nützliche Funktion, die eigentlich nichts zeichnet, sondern Teil der oben beschriebenen Pfadliste wird, ist die `moveTo()`-Funktion. Sie können sich dies wahrscheinlich am besten als das Anheben eines Stiftes oder Bleistiftes von einem Punkt auf einem Blatt Papier und das Platzieren auf dem nächsten vorstellen.

- [`moveTo(x, y)`](/de/docs/Web/API/CanvasRenderingContext2D/moveTo)
  - : Bewegt den Stift zu den Koordinaten, die durch `x` und `y` angegeben sind.

Wenn das Canvas initialisiert ist oder `beginPath()` aufgerufen wird, werden Sie normalerweise die `moveTo()`-Funktion verwenden, um den Ausgangspunkt woanders zu platzieren. Wir könnten `moveTo()` auch verwenden, um nicht verbundene Pfade zu zeichnen. Sehen Sie sich das lächelnde Gesicht unten an.

Um dies selbst auszuprobieren, können Sie den folgenden Code-Schnipsel verwenden. Fügen Sie ihn einfach in die `draw()`-Funktion ein, die wir vorher gesehen haben.

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

Wenn Sie die Verbindungslinien sehen möchten, können Sie die Zeilen entfernen, die `moveTo()` aufrufen.

> [!NOTE]
> Um mehr über die `arc()`-Funktion zu erfahren, siehe den Abschnitt [Bögen](#bögen) weiter unten.

### Linien

Zum Zeichnen von Geraden verwenden Sie die `lineTo()`-Methode.

- [`lineTo(x, y)`](/de/docs/Web/API/CanvasRenderingContext2D/lineTo)
  - : Zeichnet eine Linie von der aktuellen Zeichenposition zur durch `x` und `y` angegebenen Position.

Diese Methode nimmt zwei Argumente, `x` und `y`, die die Koordinaten des Endpunkts der Linie sind. Der Ausgangspunkt hängt von zuvor gezeichneten Pfaden ab, wobei der Endpunkt des vorhergehenden Pfades der Ausgangspunkt für den folgenden ist, usw. Der Ausgangspunkt kann auch durch die Verwendung der `moveTo()`-Methode geändert werden.

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

Dies beginnt mit dem Aufruf von `beginPath()`, um einen neuen Formpfad zu starten. Dann verwenden wir die `moveTo()`-Methode, um den Ausgangspunkt an die gewünschte Position zu bewegen. Unten werden zwei Linien gezeichnet, die zwei Seiten des Dreiecks bilden.

{{EmbedLiveSample("Lines", "", "160")}}

Sie werden den Unterschied zwischen dem gefüllten und dem gestrichelten Dreieck bemerken. Dies ist, wie oben erwähnt, da Formen automatisch geschlossen werden, wenn ein Pfad gefüllt wird, aber nicht, wenn sie gestrichelt sind. Wenn wir das `closePath()` für das gestrichelte Dreieck weggelassen hätten, wären nur zwei Linien gezeichnet worden, kein vollständiges Dreieck.

### Bögen

Um Bögen oder Kreise zu zeichnen, verwenden wir die `arc()`- oder `arcTo()`-Methoden.

- [`arc(x, y, radius, startAngle, endAngle, counterclockwise)`](/de/docs/Web/API/CanvasRenderingContext2D/arc)
  - : Zeichnet einen Bogen, der auf der Position _(x, y)_ zentriert ist mit Radius _r_, beginnend bei _startAngle_ und endend bei _endAngle_, in der angegebenen Richtung, die durch _counterclockwise_ angegeben ist (standardmäßig im Uhrzeigersinn).
- [`arcTo(x1, y1, x2, y2, radius)`](/de/docs/Web/API/CanvasRenderingContext2D/arcTo)
  - : Zeichnet einen Bogen mit den angegebenen Kontrollpunkten und Radius, der durch eine gerade Linie mit dem vorherigen Punkt verbunden ist.

Lassen Sie uns die `arc`-Methode genauer betrachten, die sechs Parameter annimmt: `x` und `y` sind die Koordinaten des Kreismittelpunkts, auf dem der Bogen gezeichnet werden soll. `radius` ist selbsterklärend. Die Parameter `startAngle` und `endAngle` definieren die Start- und Endpunkte des Bogens in Radiant entlang der Kreislinie. Diese werden von der x-Achse gemessen. Der `counterclockwise`-Parameter ist ein Boolescher Wert, der, wenn `true`, den Bogen entgegen dem Uhrzeigersinn zeichnet; andernfalls wird der Bogen im Uhrzeigersinn gezeichnet.

> [!NOTE]
> Winkel in der `arc`-Funktion werden in Radiant gemessen, nicht in Grad. Um Grad in Radiant umzuwandeln, können Sie den folgenden JavaScript-Ausdruck verwenden: `radians = (Math.PI/180)*degrees`.

Das folgende Beispiel ist etwas komplexer als die, die wir zuvor gesehen haben. Es zeichnet 12 verschiedene Bögen, alle mit unterschiedlichen Winkeln und Füllungen.

Die beiden [`for` Schleifen](/de/docs/Web/JavaScript/Reference/Statements/for) dienen zum Schleifen durch die Reihen und Spalten der Bögen. Für jeden Bogen starten wir einen neuen Pfad, indem wir `beginPath()` aufrufen. Im Code sind alle Parameter für den Bogen in einer Variablen für Klarheit, aber das würden Sie im wirklichen Leben nicht unbedingt tun.

Die `x`- und `y`-Koordinaten sollten klar genug sein. `radius` und `startAngle` sind festgelegt. Der `endAngle` beginnt bei 180 Grad (halbem Kreis) in der ersten Spalte und wird in Schritten von 90 Grad erhöht, was in einem vollständigen Kreis in der letzten Spalte gipfelt.

Die Aussage für den `clockwise`-Parameter führt dazu, dass die erste und dritte Reihe als im Uhrzeigersinn gezeichnete Bögen und die zweite und vierte Reihe als gegen den Uhrzeigersinn gezeichnete Bögen gezeichnet werden. Schließlich sorgt die `if`-Anweisung dafür, dass die obere Hälfte gestrichelte Bögen und die untere Hälfte gefüllte Bögen sind.

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

### Bezier- und quadratische Kurven

Der nächste verfügbare Pfadtyp sind {{Glossary("Bezier_curve", "Bézier-Kurven")}}, die sowohl in kubischen als auch in quadratischen Varianten verfügbar sind. Diese werden allgemein verwendet, um komplexe organische Formen zu zeichnen.

- [`quadraticCurveTo(cp1x, cp1y, x, y)`](/de/docs/Web/API/CanvasRenderingContext2D/quadraticCurveTo)
  - : Zeichnet eine quadratische Bézier-Kurve von der aktuellen Stiftposition zum Endpunkt, der durch `x` und `y` angegeben ist, unter Verwendung des Kontrollpunkts, der durch `cp1x` und `cp1y` angegeben ist.
- [`bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)`](/de/docs/Web/API/CanvasRenderingContext2D/bezierCurveTo)
  - : Zeichnet eine kubische Bézier-Kurve von der aktuellen Stiftposition zum Endpunkt, der durch `x` und `y` angegeben ist, unter Verwendung der Kontrollpunkte, die durch (`cp1x`, `cp1y`) und (`cp2x`, `cp2y`) angegeben sind.

Der Unterschied zwischen diesen ist, dass eine quadratische Bézier-Kurve einen Start- und einen Endpunkt (blaue Punkte) hat und nur einen **Kontrollpunkt** (angezeigt durch den roten Punkt) während eine kubische Bézier-Kurve zwei Kontrollpunkte verwendet.
![Vergleich von quadratischen und Bezier-Kurven.](canvas_curves.png)

Die `x`- und `y`-Parameter in beiden dieser Methoden sind die Koordinaten des Endpunkts. `cp1x` und `cp1y` sind die Koordinaten des ersten Kontrollpunkts, und `cp2x` und `cp2y` sind die Koordinaten des zweiten Kontrollpunkts.

Die Verwendung von quadratischen und kubischen Bézier-Kurven kann recht herausfordernd sein, da wir im Gegensatz zu Vektorgrafiksoftware wie Adobe Illustrator kein direktes visuelles Feedback darüber haben, was wir tun. Dies macht es ziemlich schwer, komplexe Formen zu zeichnen. Im folgenden Beispiel werden wir einige einfache organische Formen zeichnen, aber wenn Sie die Zeit und vor allem die Geduld haben, können viel komplexere Formen erstellt werden.

In diesen Beispielen ist nichts sehr schwierig. In beiden Fällen sehen wir eine Abfolge von Kurven, die schließlich zu einer vollständigen Form führen.

#### Quadratische Bezier-Kurven

Dieses Beispiel verwendet mehrere quadratische Bézier-Kurven, um eine Sprechblase zu rendern.

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

#### Kubische Bezier-Kurven

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

Zusätzlich zu den drei Methoden, die wir im [Zeichnen von Rechtecken](#zeichnen_von_rechtecken) gesehen haben, die rechteckige Formen direkt auf das Canvas zeichnen, gibt es auch die `rect()`-Methode, die einen rechteckigen Pfad zu einem derzeit geöffneten Pfad hinzufügt.

- [`rect(x, y, width, height)`](/de/docs/Web/API/CanvasRenderingContext2D/rect)
  - : Zeichnet ein Rechteck, dessen obere linke Ecke durch (`x`, `y`) angegeben ist mit der angegebenen `width` und `height`.

Bevor diese Methode ausgeführt wird, wird die `moveTo()`-Methode automatisch mit den Parametern (x,y) aufgerufen. Mit anderen Worten, die aktuelle Stiftposition wird automatisch auf die Standardkoordinaten zurückgesetzt.

### Kombinationen erstellen

Bisher hat jedes Beispiel auf dieser Seite nur einen Typ von Pfadfunktion pro Form verwendet. Es gibt jedoch keine Begrenzung für die Anzahl oder Arten von Pfaden, die Sie verwenden können, um eine Form zu erstellen. Lassen Sie uns in diesem letzten Beispiel alle Pfadfunktionen kombinieren, um eine Reihe sehr berühmter Spielecharaktere zu erstellen.

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

Wir werden dies nicht im Detail durchgehen, da es tatsächlich überraschend einfach ist. Die wichtigsten Dinge, die es zu beachten gilt, sind die Verwendung der `fillStyle`-Eigenschaft auf dem Zeichenkontext und die Verwendung einer Hilfsfunktion (in diesem Fall `roundedRect()`). Die Verwendung von Hilfsfunktionen für Teile der Zeichnung, die Sie oft machen, kann sehr hilfreich sein und die benötigte Code-Menge reduzieren sowie dessen Komplexität verringern.

Wir werden `fillStyle` später in diesem Tutorial noch einmal genauer betrachten. Hier verwenden wir es lediglich, um die Füllfarbe für Pfade von der Standardfarbe Schwarz zu Weiß zu ändern und dann wieder zurück.

### Formen mit Löchern

Um eine Form mit einem Loch darin zu zeichnen, müssen wir das Loch in unterschiedlichen Uhrzeigerrichtungen zeichnen, wie wir die äußere Form zeichnen. Entweder zeichnen wir die äußere Form im Uhrzeigersinn und die innere Form gegen den Uhrzeigersinn oder die äußere Form gegen den Uhrzeigersinn und die innere Form im Uhrzeigersinn.

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

Im obigen Beispiel geht das äußere Dreieck im Uhrzeigersinn (Bewegen zur oberen linken Ecke, dann eine Linie zur oberen rechten Ecke zeichnen und am unteren Ende enden), und das innere Dreieck geht gegen den Uhrzeigersinn (Bewegen zur Spitze, dann Linie zur unteren linken Ecke und am unteren rechten Ende enden).

## Path2D-Objekte

Wie wir im letzten Beispiel gesehen haben, kann es eine Reihe von Pfaden und Zeichenbefehlen geben, um Objekte auf Ihr Canvas zu zeichnen. Um den Code zu vereinfachen und die Leistung zu verbessern, ermöglicht das [`Path2D`](/de/docs/Web/API/Path2D)-Objekt, das in den neuesten Versionen der Browser verfügbar ist, das Zwischenspeichern oder Aufzeichnen dieser Zeichenbefehle. Sie sind in der Lage, Ihre Pfade schnell wiederzugeben. Lassen Sie uns sehen, wie wir ein `Path2D`-Objekt konstruieren können:

- [`Path2D()`](/de/docs/Web/API/Path2D/Path2D)
  - : Der **`Path2D()`**-Konstruktor gibt ein neu instanziiertes `Path2D`-Objekt zurück, optional mit einem anderen Pfad als Argument (erstellt eine Kopie) oder optional mit einem String bestehend aus [SVG-Pfad](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Paths)-Daten.

```js
new Path2D(); // empty path object
new Path2D(path); // copy from another Path2D object
new Path2D(d); // path from SVG path data
```

Alle [Pfadmethoden](/de/docs/Web/API/CanvasRenderingContext2D#paths) wie `moveTo`, `rect`, `arc` oder `quadraticCurveTo`, etc., die wir oben kennengelernt haben, sind auf `Path2D`-Objekten verfügbar.

Das `Path2D`-API fügt auch eine Möglichkeit hinzu, Pfade mit der `addPath`-Methode zu kombinieren. Dies kann nützlich sein, wenn Sie Objekte aus mehreren Komponenten erstellen möchten, zum Beispiel.

- [`Path2D.addPath(path [, transform])`](/de/docs/Web/API/Path2D/addPath)
  - : Fügt dem aktuellen Pfad einen Pfad mit einer optionalen Transformationsmatrix hinzu.

### Path2D-Beispiel

In diesem Beispiel erstellen wir ein Rechteck und einen Kreis. Beide werden als `Path2D`-Objekt gespeichert, damit sie für die spätere Verwendung verfügbar sind. Mit dem neuen `Path2D`-API wurden mehrere Methoden aktualisiert, um optional ein `Path2D`-Objekt anstelle des aktuellen Pfades zu verwenden. Hier werden `stroke` und `fill` mit einem Pfadargument verwendet, um beide Objekte auf das Canvas zu zeichnen, zum Beispiel.

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

Ein weiteres leistungsstarkes Feature des neuen Canvas-`Path2D`-API ist die Verwendung von [SVG-Pfad-Daten](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Paths), um Pfade auf Ihrem Canvas zu initialisieren. Dies könnte es ermöglichen, Pfaddaten weiterzugeben und sowohl in SVG als auch in Canvas wiederzuverwenden.

Der Pfad bewegt sich zu Punkt (`M10 10`) und bewegt sich dann horizontal 80 Punkte nach rechts (`h 80`), dann 80 Punkte nach unten (`v 80`), dann 80 Punkte nach links (`h -80`) und dann zurück zum Start (`z`). Sie können dieses Beispiel auf der [`Path2D` Konstruktor](/de/docs/Web/API/Path2D/Path2D#using_svg_paths) Seite sehen.

```js
const p = new Path2D("M10 10 h 80 v 80 h -80 Z");
```

{{PreviousNext("Web/API/Canvas_API/Tutorial/Basic_usage", "Web/API/Canvas_API/Tutorial/Applying_styles_and_colors")}}
