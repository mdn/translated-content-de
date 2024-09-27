---
title: Zeichen von Formen mit Canvas
slug: Web/API/Canvas_API/Tutorial/Drawing_shapes
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Basic_usage", "Web/API/Canvas_API/Tutorial/Applying_styles_and_colors")}}

Nachdem wir unsere [Canvas-Umgebung](/de/docs/Web/API/Canvas_API/Tutorial/Basic_usage) eingerichtet haben, können wir uns den Details des Zeichnens auf dem Canvas widmen. Am Ende dieses Artikels haben Sie gelernt, wie man Rechtecke, Dreiecke, Linien, Bögen und Kurven zeichnet, und erhalten somit Vertrautheit mit einigen der grundlegenden Formen. Das Arbeiten mit Pfaden ist essenziell, wenn Objekte auf das Canvas gezeichnet werden, und wir werden sehen, wie das gemacht werden kann.

## Das Raster

Bevor wir mit dem Zeichnen beginnen, müssen wir über das Canvas-Raster oder den **Koordinatenraum** sprechen. Unser HTML-Gerüst von der vorherigen Seite hatte ein Canvas-Element, das 150 Pixel breit und 150 Pixel hoch war.

![Canvas-Raster mit einem blauen Quadrat, das Koordinaten und Achsen zeigt.](canvas_default_grid.png)

Normalerweise entspricht 1 Einheit im Raster einem Pixel auf dem Canvas. Der Ursprung dieses Rasters befindet sich in der _oberen linken_ Ecke bei der Koordinate (0,0). Alle Elemente werden relativ zu diesem Ursprung platziert. Die Position der oberen linken Ecke des blauen Quadrats wird also x Pixel von links und y Pixel von oben, bei der Koordinate (x,y). Später in diesem Tutorial werden wir sehen, wie wir den Ursprung in eine andere Position verschieben, das Raster drehen und sogar skalieren können, aber vorerst bleiben wir beim Standard.

## Zeichnen von Rechtecken

Im Gegensatz zu [SVG](/de/docs/Glossary/SVG) unterstützt {{HTMLElement("canvas")}} nur zwei primitive Formen: Rechtecke und Pfade (Listen von Punkten, die durch Linien verbunden sind). Alle anderen Formen müssen durch die Kombination von einem oder mehreren Pfaden erstellt werden. Glücklicherweise haben wir eine Auswahl an Pfadzeichenfunktionen, die es ermöglichen, sehr komplexe Formen zu komponieren.

Zuerst schauen wir uns das Rechteck an. Es gibt drei Funktionen, die Rechtecke auf dem Canvas zeichnen:

- [`fillRect(x, y, width, height)`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect)
  - : Zeichnet ein gefülltes Rechteck.
- [`strokeRect(x, y, width, height)`](/de/docs/Web/API/CanvasRenderingContext2D/strokeRect)
  - : Zeichnet einen rechteckigen Umriss.
- [`clearRect(x, y, width, height)`](/de/docs/Web/API/CanvasRenderingContext2D/clearRect)
  - : Löscht den angegebenen rechteckigen Bereich und macht ihn vollständig transparent.

Jede dieser drei Funktionen nimmt dieselben Parameter. `x` und `y` geben die Position des oberen linken Ecks des Rechtecks auf dem Canvas an (relativ zum Ursprung). `width` und `height` geben die Größe des Rechtecks an.

Unten finden Sie die `draw()`-Funktion von der vorherigen Seite, jetzt jedoch unter Verwendung dieser drei Funktionen.

### Beispiel für rechteckige Formen

```html hidden
<html lang="en">
  <body>
    <canvas id="canvas" width="150" height="150"></canvas>
  </body>
</html>
```

```js
function draw() {
  const canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");

    ctx.fillRect(25, 25, 100, 100);
    ctx.clearRect(45, 45, 60, 60);
    ctx.strokeRect(50, 50, 50, 50);
  }
}
```

```js hidden
draw();
```

Die Ausgabe dieses Beispiels wird unten gezeigt.

{{EmbedLiveSample("Rectangular_shape_example", "", "160")}}

Die `fillRect()`-Funktion zeichnet ein großes schwarzes Quadrat mit 100 Pixeln auf jeder Seite. Die `clearRect()`-Funktion löscht dann ein 60x60 Pixel großes Quadrat aus der Mitte, und dann wird `strokeRect()` aufgerufen, um einen rechteckigen Umriss von 50x50 Pixeln innerhalb des gelöschten Quadrats zu erzeugen.

Auf den kommenden Seiten werden wir zwei alternative Methoden für `clearRect()` sehen, und wir werden auch sehen, wie die Farbe und der Strichstil der gerenderten Formen geändert werden können.

Anders als die Pfadfunktionen, die wir im nächsten Abschnitt sehen werden, zeichnen alle drei Rechteckfunktionen sofort auf das Canvas.

## Zeichnen von Pfaden

Nun schauen wir uns Pfade an. Ein Pfad ist eine Liste von Punkten, verbunden durch Segmente von Linien, die unterschiedliche Formen haben können, gekrümmt oder nicht, von unterschiedlicher Breite und unterschiedlicher Farbe. Ein Pfad oder sogar ein Unterpfad kann geschlossen sein. Um Formen mit Pfaden zu erstellen, sind einige zusätzliche Schritte erforderlich:

1. Zuerst erstellen Sie den Pfad.
2. Dann verwenden Sie [Zeichenbefehle](/de/docs/Web/API/CanvasRenderingContext2D#paths), um in den Pfad zu zeichnen.
3. Sobald der Pfad erstellt ist, können Sie den Pfad umranden oder füllen, um ihn zu rendern.

Dies sind die Funktionen, die verwendet werden, um diese Schritte auszuführen:

- [`beginPath()`](/de/docs/Web/API/CanvasRenderingContext2D/beginPath)
  - : Erstellt einen neuen Pfad. Nach der Erstellung werden zukünftige Zeichenbefehle in den Pfad gerichtet und zum Aufbau des Pfads verwendet.
- [Pfadmethoden](/de/docs/Web/API/CanvasRenderingContext2D#paths)
  - : Methoden zum Festlegen verschiedener Pfade für Objekte.
- [`closePath()`](/de/docs/Web/API/CanvasRenderingContext2D/closePath)
  - : Fügt eine gerade Linie zum Pfad hinzu, die zum Start des aktuellen Unterpfads geht.
- [`stroke()`](/de/docs/Web/API/CanvasRenderingContext2D/stroke)
  - : Zeichnet die Form durch Umranden ihres Umrisses.
- [`fill()`](/de/docs/Web/API/CanvasRenderingContext2D/fill)
  - : Zeichnet eine feste Form, indem der Inhalt des Pfades gefüllt wird.

Der erste Schritt zur Erstellung eines Pfades besteht darin, `beginPath()` aufzurufen. Pfade werden intern als Liste von Unterpfaden (Linien, Bögen usw.) gespeichert, die zusammen eine Form bilden. Jedes Mal, wenn diese Methode aufgerufen wird, wird die Liste zurückgesetzt und wir können neue Formen zeichnen.

> [!NOTE]
> Wenn der aktuelle Pfad leer ist, wie unmittelbar nach dem Aufruf von `beginPath()`, oder auf einem neu erstellten Canvas, wird der erste Pfaderstellungsbefehl immer als `moveTo()` behandelt, unabhängig davon, was es tatsächlich ist. Aus diesem Grund möchten Sie fast immer Ihre Startposition speziell nach dem Zurücksetzen eines Pfades festlegen.

Der zweite Schritt besteht darin, die Methoden aufzurufen, die tatsächlich die zu zeichnenden Pfade angeben. Wir werden diese in Kürze betrachten.

Der dritte und optionale Schritt besteht darin, `closePath()` aufzurufen. Diese Methode versucht, die Form zu schließen, indem eine gerade Linie von der aktuellen Position zum Start gezeichnet wird. Wenn die Form bereits geschlossen ist oder nur ein Punkt in der Liste vorhanden ist, tut diese Funktion nichts.

> [!NOTE]
> Wenn Sie `fill()` aufrufen, werden alle offenen Formen automatisch geschlossen, sodass Sie `closePath()` nicht aufzurufen brauchen. Dies ist **nicht** der Fall, wenn Sie `stroke()` aufrufen.

### Zeichnen eines Dreiecks

Beispielsweise würde der Code zum Zeichnen eines Dreiecks in etwa so aussehen:

```html hidden
<html lang="en">
  <body>
    <canvas id="canvas" width="100" height="100"></canvas>
  </body>
</html>
```

```js
function draw() {
  const canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.moveTo(75, 50);
    ctx.lineTo(100, 75);
    ctx.lineTo(100, 25);
    ctx.fill();
  }
}
```

```js hidden
draw();
```

Das Ergebnis sieht so aus:

{{EmbedLiveSample("Drawing_a_triangle", "", "110")}}

### Bewegen des Stiftes

Eine sehr nützliche Funktion, die eigentlich nichts zeichnet, aber Teil der oben beschriebenen Pfadliste wird, ist die `moveTo()`-Funktion. Sie können dies wahrscheinlich am besten als das Abheben eines Stiftes oder Bleistifts von einem Punkt auf einem Blatt Papier und das Platzieren am nächsten Punkt verstehen.

- [`moveTo(x, y)`](/de/docs/Web/API/CanvasRenderingContext2D/moveTo)
  - : Bewegt den Stift zu den durch `x` und `y` angegebenen Koordinaten.

Beim Initialisieren des Canvas oder beim Aufrufen von `beginPath()` möchten Sie normalerweise die `moveTo()`-Funktion verwenden, um den Startpunkt an eine andere Stelle zu versetzen. Wir könnten auch `moveTo()` verwenden, um nicht verbundene Pfade zu zeichnen. Schauen Sie sich das Smiley-Gesicht unten an.

Um dies auszuprobieren, können Sie den folgenden Code-Schnipsel verwenden. Einfach in die `draw()`-Funktion einfügen, die wir zuvor betrachtet haben.

```html hidden
<html lang="en">
  <body>
    <canvas id="canvas" width="150" height="150"></canvas>
  </body>
</html>
```

```js
function draw() {
  const canvas = document.getElementById("canvas");
  if (canvas.getContext) {
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
}
```

```js hidden
draw();
```

Das Ergebnis sieht so aus:

{{EmbedLiveSample("Moving_the_pen", "", "160")}}

Wenn Sie die Verbindungslinien sehen möchten, können Sie die Zeilen entfernen, die `moveTo()` aufrufen.

> [!NOTE]
> Um mehr über die `arc()`-Funktion zu erfahren, sehen Sie sich den Abschnitt [Bögen](#bögen) unten an.

### Linien

Zum Zeichnen gerader Linien verwenden Sie die `lineTo()`-Methode.

- [`lineTo(x, y)`](/de/docs/Web/API/CanvasRenderingContext2D/lineTo)
  - : Zeichnet eine Linie von der aktuellen Zeichenposition zu der durch `x` und `y` angegebenen Position.

Diese Methode nimmt zwei Argumente, `x` und `y`, die die Koordinaten des Endpunkts der Linie sind. Der Startpunkt hängt von zuvor gezeichneten Pfaden ab, wobei der Endpunkt des vorherigen Pfades der Startpunkt für den folgenden ist usw. Der Startpunkt kann auch mit der `moveTo()`-Methode geändert werden.

Das Beispiel unten zeichnet zwei Dreiecke, eines gefüllt und eines umrandet.

```html hidden
<html lang="en">
  <body>
    <canvas id="canvas" width="150" height="150"></canvas>
  </body>
</html>
```

```js
function draw() {
  const canvas = document.getElementById("canvas");
  if (canvas.getContext) {
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
}
```

```js hidden
draw();
```

Dies beginnt mit einem Aufruf von `beginPath()`, um einen neuen Formenpfad zu starten. Wir verwenden dann die `moveTo()`-Methode, um den Startpunkt an die gewünschte Position zu versetzen. Darunter werden zwei Linien gezeichnet, die zwei Seiten des Dreiecks bilden.

{{EmbedLiveSample("Lines", "", "160")}}

Sie werden den Unterschied zwischen dem gefüllten und dem umrandeten Dreieck bemerken. Dies liegt, wie oben erwähnt, daran, dass Formen automatisch geschlossen werden, wenn ein Pfad gefüllt wird, aber nicht, wenn sie umrandet werden. Wenn wir das `closePath()` für das umrandete Dreieck weglassen würden, würden nur zwei Linien gezeichnet, kein komplettes Dreieck.

### Bögen

Zum Zeichnen von Bögen oder Kreisen verwenden wir die `arc()`- oder `arcTo()`-Methoden.

- [`arc(x, y, radius, startAngle, endAngle, counterclockwise)`](/de/docs/Web/API/CanvasRenderingContext2D/arc)
  - : Zeichnet einen Bogen, der am _(x, y)_-Position mit Radius _r_ zentriert ist und der bei _startAngle_ beginnt und bei _endAngle_ im angegebenen durch _counterclockwise_ (standardmäßig im Uhrzeigersinn) angegebenen Richtung endet.
- [`arcTo(x1, y1, x2, y2, radius)`](/de/docs/Web/API/CanvasRenderingContext2D/arcTo)
  - : Zeichnet einen Bogen mit den angegebenen Kontrollpunkten und Radius, der mit einer geraden Linie mit dem vorherigen Punkt verbunden ist.

Schauen wir uns die `arc`-Methode genauer an, die sechs Parameter benötigt: `x` und `y` sind die Koordinaten des Mittelpunktes des Kreises, auf dem der Bogen gezeichnet werden soll. `radius` ist selbsterklärend. Die Parameter `startAngle` und `endAngle` definieren die Start- und Endpunkte des Bogens im Bogenmaß entlang der Kurve des Kreises. Diese werden von der x-Achse gemessen. `counterclockwise` ist ein Boolescher Wert, der `true` ist, wenn der Bogen gegen den Uhrzeigersinn gezeichnet wird; andernfalls wird der Bogen im Uhrzeigersinn gezeichnet.

> [!NOTE]
> Winkel in der `arc`-Funktion werden im Bogenmaß, nicht in Grad gemessen. Um Grad in Bogenmaß umzuwandeln, können Sie den folgenden JavaScript-Ausdruck verwenden: `radians = (Math.PI/180)*degrees`.

Das folgende Beispiel ist etwas komplexer als die oben gezeigten. Es zeichnet 12 verschiedene Bögen, alle mit unterschiedlichen Winkeln und Füllungen.

Die beiden [`for`-Schleifen](/de/docs/Web/JavaScript/Reference/Statements/for) sind zum Durchlaufen der Reihen und Spalten der Bögen. Für jeden Bogen beginnen wir einen neuen Pfad, indem `beginPath()` aufgerufen wird. Im Code sind die Parameter für den Bogen jeweils in einer Variablen, um die Übersichtlichkeit zu erhöhen, aber in der Praxis würden Sie wahrscheinlich nicht unbedingt so verfahren.

Die `x`- und `y`-Koordinaten sollten klar genug sein. `radius` und `startAngle` sind fest. Der `endAngle` beginnt bei 180 Grad (ein Halbkreis) in der ersten Spalte und wird in Schritten von 90 Grad erhöht, was schließlich in einem vollständigen Kreis in der letzten Spalte endet.

Die Anweisung für den `clockwise`-Parameter führt dazu, dass die erste und dritte Reihe als Bögen im Uhrzeigersinn und die zweite und vierte Reihe als Bögen gegen den Uhrzeigersinn gezeichnet werden. Schließlich macht die `if`-Anweisung die oberen Hälften zu umrandeten Bögen und die unteren Hälften zu gefüllten Bögen.

> [!NOTE]
> Dieses Beispiel erfordert ein etwas größeres Canvas als die anderen auf dieser Seite: 150 x 200 Pixel.

```html hidden
<html lang="en">
  <body>
    <canvas id="canvas" width="150" height="200"></canvas>
  </body>
</html>
```

```js
function draw() {
  const canvas = document.getElementById("canvas");
  if (canvas.getContext) {
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
}
```

```js hidden
draw();
```

{{EmbedLiveSample("Arcs", "", "210")}}

### Bezier- und quadratische Kurven

Der nächste verfügbare Pfadtyp sind [Bézier-Kurven](/de/docs/Glossary/Bezier_curve), verfügbar in sowohl kubischen als auch quadratischen Varianten. Diese werden im Allgemeinen verwendet, um komplexe organische Formen zu zeichnen.

- [`quadraticCurveTo(cp1x, cp1y, x, y)`](/de/docs/Web/API/CanvasRenderingContext2D/quadraticCurveTo)
  - : Zeichnet eine quadratische Bézier-Kurve von der aktuellen Stiftposition zum Endpunkt, der durch `x` und `y` angegeben ist, unter Verwendung des durch `cp1x` und `cp1y` angegebenen Kontrollpunktes.
- [`bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)`](/de/docs/Web/API/CanvasRenderingContext2D/bezierCurveTo)
  - : Zeichnet eine kubische Bézier-Kurve von der aktuellen Stiftposition zum Endpunkt, der durch `x` und `y` angegeben ist, unter Verwendung der durch (`cp1x`, `cp1y`) und (`cp2x`, `cp2y`) angegebenen Kontrollpunkte.

Der Unterschied besteht darin, dass eine quadratische Bézier-Kurve einen Start- und einen Endpunkt (blaue Punkte) und nur einen **Kontrollpunkt** (angezeigt durch den roten Punkt) hat, während eine kubische Bézier-Kurve zwei Kontrollpunkte verwendet.
![Vergleich von quadratischen und Bezier-Kurven.](canvas_curves.png)

Die `x`- und `y`-Parameter in beiden dieser Methoden sind die Koordinaten des Endpunktes. `cp1x` und `cp1y` sind die Koordinaten des ersten Kontrollpunktes, und `cp2x` und `cp2y` sind die Koordinaten des zweiten Kontrollpunktes.

Die Verwendung von quadratischen und kubischen Bézier-Kurven kann recht herausfordernd sein, denn im Gegensatz zu Vektorgrafiksoftware wie Adobe Illustrator haben wir kein direktes visuelles Feedback darüber, was wir tun. Das macht es ziemlich schwer, komplexe Formen zu zeichnen. Im folgenden Beispiel zeichnen wir einige einfache organische Formen, aber wenn Sie die Zeit und vor allem die Geduld haben, können viel komplexere Formen erstellt werden.

In diesen Beispielen gibt es nichts besonders Schwieriges. In beiden Fällen sehen wir eine Abfolge von Kurven, die schließlich eine vollständige Form ergeben.

#### Quadratische Bezier-Kurven

Dieses Beispiel verwendet mehrere quadratische Bézier-Kurven, um eine Sprechblase zu rendern.

```html hidden
<html lang="en">
  <body>
    <canvas id="canvas" width="150" height="150"></canvas>
  </body>
</html>
```

```js
function draw() {
  const canvas = document.getElementById("canvas");
  if (canvas.getContext) {
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
}
```

```js hidden
draw();
```

{{EmbedLiveSample("Quadratic_Bezier_curves", "", "160")}}

#### Kubische Bezier-Kurven

Dieses Beispiel zeichnet ein Herz mit kubischen Bézier-Kurven.

```html hidden
<html lang="en">
  <body>
    <canvas id="canvas" width="150" height="150"></canvas>
  </body>
</html>
```

```js
function draw() {
  const canvas = document.getElementById("canvas");
  if (canvas.getContext) {
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
}
```

```js hidden
draw();
```

{{EmbedLiveSample("Cubic_Bezier_curves", "", "160")}}

### Rechtecke

Zusätzlich zu den drei Methoden, die wir im Abschnitt [Zeichnen von Rechtecken](#zeichnen_von_rechtecken) gesehen haben, die rechteckige Formen direkt auf das Canvas zeichnen, gibt es auch die `rect()`-Methode, die einen rechteckigen Pfad zu einem derzeit geöffneten Pfad hinzufügt.

- [`rect(x, y, width, height)`](/de/docs/Web/API/CanvasRenderingContext2D/rect)
  - : Zeichnet ein Rechteck, dessen obere linke Ecke durch (`x`, `y`) mit der angegebenen `width` und `height` spezifiziert ist.

Bevor diese Methode ausgeführt wird, wird die `moveTo()`-Methode automatisch mit den Parametern (x,y) aufgerufen. Mit anderen Worten, die aktuelle Stiftposition wird automatisch auf die Standardkoordinaten zurückgesetzt.

### Kombinationen erstellen

Bisher hat jedes Beispiel auf dieser Seite nur einen Pfadtyp pro Form verwendet. Es gibt jedoch keine Einschränkung hinsichtlich der Anzahl oder der Arten von Pfaden, die Sie zur Erstellung einer Form verwenden können. In diesem letzten Beispiel kombinieren wir alle Pfadfunktionen, um eine Reihe sehr berühmter Spielcharaktere zu erstellen.

```html hidden
<html lang="en">
  <body>
    <canvas id="canvas" width="200" height="185"></canvas>
  </body>
</html>
```

```js
function draw() {
  const canvas = document.getElementById("canvas");
  if (canvas.getContext) {
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

Wir werden dies nicht im Detail durchgehen, da es eigentlich überraschend einfach ist. Die wichtigsten Dinge, die zu beachten sind, sind die Verwendung der `fillStyle`-Eigenschaft auf dem Zeichenkontext und die Verwendung einer Hilfsfunktion (in diesem Fall `roundedRect()`). Die Verwendung von Hilfsfunktionen für Zeichenarbeiten, die Sie häufig ausführen, kann sehr hilfreich sein und die Menge des benötigten Codes sowie dessen Komplexität verringern.

Wir werden später in diesem Tutorial einen weiteren Blick auf `fillStyle` werfen, um es genauer zu untersuchen. Hier verwenden wir es einfach, um die Füllfarbe für Pfade von der Standardfarbe Schwarz auf Weiß zu ändern und dann wieder zurück.

### Formen mit Löchern

Um eine Form mit einem Loch darin zu zeichnen, müssen wir das Loch in unterschiedlichen Uhrzeigerrichtungen zeichnen, während wir die äußere Form zeichnen. Entweder zeichnen wir die äußere Form im Uhrzeigersinn und die innere Form gegen den Uhrzeigersinn oder die äußere Form gegen den Uhrzeigersinn und die innere Form im Uhrzeigersinn.

```html hidden
<html lang="en">
  <body>
    <canvas id="canvas" width="150" height="150"></canvas>
  </body>
</html>
```

```js
function draw() {
  const canvas = document.getElementById("canvas");
  if (canvas.getContext) {
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
}
```

```js hidden
draw();
```

{{EmbedLiveSample("Shapes_with_holes", "", "160")}}

Im obigen Beispiel verläuft das äußere Dreieck im Uhrzeigersinn (zum oberen linken Eckpunkt gehen, dann eine Linie zum oberen rechten Eckpunkt und am unteren Eckpunkt enden) und das innere Dreieck verläuft gegen den Uhrzeigersinn (zum oberen Eckpunkt gehen, dann eine Linie zum unteren linken Eckpunkt und am unteren rechten Eckpunkt enden).

## Path2D-Objekte

Wie wir im letzten Beispiel gesehen haben, kann es eine Reihe von Pfaden und Zeichenanweisungen geben, um Objekte auf Ihrem Canvas zu zeichnen. Um den Code zu vereinfachen und die Leistung zu verbessern, erlaubt das [`Path2D`](/de/docs/Web/API/Path2D)-Objekt, das in neueren Versionen von Browsern verfügbar ist, das Zwischenspeichern oder Aufzeichnen dieser Zeichenanweisungen. Sie können Ihre Pfade schnell wieder abspielen.
Sehen wir uns an, wie wir ein `Path2D`-Objekt erstellen können:

- [`Path2D()`](/de/docs/Web/API/Path2D/Path2D)
  - : Der **`Path2D()`**-Konstruktor gibt ein neu instanziiertes `Path2D`-Objekt zurück, optional mit einem anderen Pfad als Argument (erstellt eine Kopie) oder optional mit einer Zeichenkette, die [SVG-Pfad](/de/docs/Web/SVG/Tutorial/Paths)-Daten enthält.

```js
new Path2D(); // empty path object
new Path2D(path); // copy from another Path2D object
new Path2D(d); // path from SVG path data
```

Alle [Pfadmethoden](/de/docs/Web/API/CanvasRenderingContext2D#paths) wie `moveTo`, `rect`, `arc` oder `quadraticCurveTo` usw., die wir oben kennengelernt haben, sind auf `Path2D`-Objekten verfügbar.

Das `Path2D`-API fügt auch eine Möglichkeit hinzu, Pfade mit der `addPath`-Methode zu kombinieren. Dies kann nützlich sein, wenn Sie Objekte aus mehreren Komponenten bauen möchten.

- [`Path2D.addPath(path [, transform])`](/de/docs/Web/API/Path2D/addPath)
  - : Fügt einen Pfad zum aktuellen Pfad mit einer optionalen Transformationsmatrix hinzu.

### Path2D Beispiel

In diesem Beispiel erstellen wir ein Rechteck und einen Kreis. Beide werden als `Path2D`-Objekte gespeichert, sodass sie für eine spätere Verwendung verfügbar sind. Mit dem neuen `Path2D`-API wurden mehrere Methoden aktualisiert, um optional ein `Path2D`-Objekt anstelle des aktuellen Pfades zu verwenden. Hier werden `stroke` und `fill` mit einem Pfadargument verwendet, um beide Objekte auf das Canvas zu zeichnen.

```html hidden
<html lang="en">
  <body>
    <canvas id="canvas" width="130" height="100"></canvas>
  </body>
</html>
```

```js
function draw() {
  const canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");

    const rectangle = new Path2D();
    rectangle.rect(10, 10, 50, 50);

    const circle = new Path2D();
    circle.arc(100, 35, 25, 0, 2 * Math.PI);

    ctx.stroke(rectangle);
    ctx.fill(circle);
  }
}
```

```js hidden
draw();
```

{{EmbedLiveSample("Path2D_example", "", "110")}}

### Verwendung von SVG-Pfaden

Ein weiteres leistungsfähiges Merkmal des neuen Canvas-`Path2D`-APIs ist die Verwendung von [SVG-Pfad-Daten](/de/docs/Web/SVG/Tutorial/Paths) zum Initialisieren von Pfaden auf Ihrem Canvas. Dies könnte es Ihnen ermöglichen, Pfaddaten weiterzugeben und sowohl in SVG als auch in Canvas wiederzuverwenden.

Der Pfad bewegt sich zu Punkt (`M10 10`) und dann horizontal 80 Punkte nach rechts (`h 80`), dann 80 Punkte nach unten (`v 80`), dann 80 Punkte nach links (`h -80`) und dann zurück zum Start (`z`). Sie können dieses Beispiel auf der Seite des [`Path2D`-Konstruktors](/de/docs/Web/API/Path2D/Path2D#using_svg_paths) sehen.

```js
const p = new Path2D("M10 10 h 80 v 80 h -80 Z");
```

{{PreviousNext("Web/API/Canvas_API/Tutorial/Basic_usage", "Web/API/Canvas_API/Tutorial/Applying_styles_and_colors")}}
