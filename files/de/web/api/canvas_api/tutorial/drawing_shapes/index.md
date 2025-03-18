---
title: Zeichnen von Formen mit Canvas
slug: Web/API/Canvas_API/Tutorial/Drawing_shapes
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Basic_usage", "Web/API/Canvas_API/Tutorial/Applying_styles_and_colors")}}

Nachdem wir nun unser [Canvas-Umfeld](/de/docs/Web/API/Canvas_API/Tutorial/Basic_usage) eingerichtet haben, können wir uns den Details des Zeichnens auf dem Canvas widmen. Am Ende dieses Artikels werden Sie gelernt haben, wie man Rechtecke, Dreiecke, Linien, Bögen und Kurven zeichnet und somit mit einigen grundlegenden Formen vertraut wird. Das Arbeiten mit Pfaden ist essentiell, wenn man Objekte auf das Canvas zeichnen möchte, und wir werden sehen, wie das gemacht werden kann.

## Das Raster

Bevor wir mit dem Zeichnen beginnen können, müssen wir über das Canvas-Raster oder die **Koordinatenfläche** sprechen. Unser HTML-Gerüst von der vorherigen Seite hatte ein Canvas-Element mit einer Breite von 150 Pixeln und einer Höhe von 150 Pixeln.

![Canvas-Raster mit einem blauen Quadrat zur Demonstration der Koordinaten und Achsen.](canvas_default_grid.png)

Normalerweise entspricht eine Einheit im Raster einem Pixel auf dem Canvas. Der Ursprung dieses Rasters befindet sich in der _oberen linken_ Ecke bei den Koordinaten (0,0). Alle Elemente werden relativ zu diesem Ursprung positioniert. Die Position der oberen linken Ecke des blauen Quadrats wird also x Pixel von links und y Pixel von oben sein, bei den Koordinaten (x,y). Später in diesem Tutorial werden wir sehen, wie wir den Ursprung an eine andere Position verschieben, das Raster drehen und es sogar skalieren können, aber für den Moment bleiben wir beim Standard.

## Zeichnen von Rechtecken

Im Gegensatz zu {{Glossary("SVG", "SVG")}} unterstützt {{HTMLElement("canvas")}} nur zwei primitive Formen: Rechtecke und Pfade (Listen von Punkten, die durch Linien verbunden sind). Alle anderen Formen müssen durch die Kombination von einem oder mehreren Pfaden erstellt werden. Glücklicherweise haben wir eine Vielzahl von Pfad-Zeichnungsfunktionen, die es ermöglichen, sehr komplexe Formen zu komponieren.

Schauen wir uns zunächst das Rechteck an. Es gibt drei Funktionen, die Rechtecke auf das Canvas zeichnen:

- [`fillRect(x, y, width, height)`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect)
  - : Zeichnet ein gefülltes Rechteck.
- [`strokeRect(x, y, width, height)`](/de/docs/Web/API/CanvasRenderingContext2D/strokeRect)
  - : Zeichnet einen rechteckigen Umriss.
- [`clearRect(x, y, width, height)`](/de/docs/Web/API/CanvasRenderingContext2D/clearRect)
  - : Löscht den angegebenen rechteckigen Bereich und macht ihn vollständig transparent.

Jede dieser drei Funktionen nimmt die gleichen Parameter entgegen. `x` und `y` geben die Position auf dem Canvas an (relativ zum Ursprung) der oberen linken Ecke des Rechtecks. `width` und `height` geben die Größe des Rechtecks an.

Unten ist die `draw()`-Funktion von der vorherigen Seite, die nun diese drei Funktionen verwendet.

### Beispiel eines rechteckigen Gebildes

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

Die `fillRect()`-Funktion zeichnet ein großes schwarzes Quadrat mit 100 Pixeln Kantenlänge. Die `clearRect()`-Funktion löscht dann ein 60x60 Pixel großes Quadrat aus der Mitte, und dann wird `strokeRect()` aufgerufen, um einen rechteckigen Umriss von 50x50 Pixeln innerhalb des gelöschten Quadrats zu erstellen.

In den kommenden Seiten werden wir zwei alternative Methoden für `clearRect()` sehen und auch, wie man die Farbe und den Linienstil der gerenderten Formen ändert.

Im Gegensatz zu den Pfad-Funktionen, die wir im nächsten Abschnitt sehen werden, zeichnen alle drei Rechteckfunktionen sofort auf das Canvas.

## Zeichnen von Pfaden

Schauen wir uns nun Pfade an. Ein Pfad ist eine Liste von Punkten, die durch Segmente von Linien verbunden sind, die unterschiedliche Formen haben können, gekrümmt oder nicht, von unterschiedlicher Breite und unterschiedlicher Farbe. Ein Pfad oder sogar ein Teilpfad kann geschlossen sein. Um Formen mit Pfaden zu erzeugen, unternehmen wir einige zusätzliche Schritte:

1. Zunächst erstellen Sie den Pfad.
2. Dann verwenden Sie [Zeichenbefehle](/de/docs/Web/API/CanvasRenderingContext2D#paths), um in den Pfad zu zeichnen.
3. Sobald der Pfad erstellt wurde, können Sie den Pfad umranden oder füllen, um ihn zu rendern.

Hier sind die Funktionen, die verwendet werden, um diese Schritte auszuführen:

- [`beginPath()`](/de/docs/Web/API/CanvasRenderingContext2D/beginPath)
  - : Erstellt einen neuen Pfad. Einmal erstellt, werden zukünftige Zeichenbefehle in den Pfad gerichtet und verwendet, um den Pfad aufzubauen.
- [Pfadmethoden](/de/docs/Web/API/CanvasRenderingContext2D#paths)
  - : Methoden, um verschiedene Pfade für Objekte zu setzen.
- [`closePath()`](/de/docs/Web/API/CanvasRenderingContext2D/closePath)
  - : Fügt dem Pfad eine gerade Linie hinzu, die bis zum Start des aktuellen Teilpfads geht.
- [`stroke()`](/de/docs/Web/API/CanvasRenderingContext2D/stroke)
  - : Zeichnet die Form, indem ihr Umriss gezeichnet wird.
- [`fill()`](/de/docs/Web/API/CanvasRenderingContext2D/fill)
  - : Zeichnet eine solide Form, indem der gesamte Bereich des Pfads gefüllt wird.

Der erste Schritt, um einen Pfad zu erstellen, ist das Aufrufen der `beginPath()`. Intern werden Pfade als Liste von Teilpfaden (Linien, Bögen, usw.) gespeichert, die zusammen eine Form bilden. Jedes Mal, wenn diese Methode aufgerufen wird, wird die Liste zurückgesetzt und wir können neue Formen zeichnen.

> [!NOTE]
> Wenn der aktuelle Pfad leer ist, wie unmittelbar nach dem Aufruf von `beginPath()` oder bei einem neu erstellten Canvas, wird der erste Pfadaufbau-Befehl immer als `moveTo()` behandelt, unabhängig davon, was er tatsächlich ist. Aus diesem Grund möchten Sie fast immer Ihre Startposition speziell setzen, nachdem Sie einen Pfad zurückgesetzt haben.

Der zweite Schritt besteht darin, die Methoden aufzurufen, die die zu zeichnenden Pfade tatsächlich festlegen. Wir werden diese gleich sehen.

Der dritte, und optionale Schritt, ist der Aufruf von `closePath()`. Diese Methode versucht, die Form zu schließen, indem sie eine gerade Linie von dem aktuellen Punkt bis zum Start zieht. Wenn die Form bereits geschlossen wurde oder nur ein Punkt in der Liste ist, tut diese Funktion nichts.

> [!NOTE]
> Wenn Sie `fill()` aufrufen, werden alle offenen Formen automatisch geschlossen, sodass Sie nicht `closePath()` aufrufen müssen. Dies ist **nicht** der Fall, wenn Sie `stroke()` aufrufen.

### Zeichnen eines Dreiecks

Der Code für das Zeichnen eines Dreiecks würde beispielsweise so aussehen:

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

Das Ergebnis sieht folgendermaßen aus:

{{EmbedLiveSample("Drawing_a_triangle", "", "110")}}

### Bewegen des Stifts

Eine sehr nützliche Funktion, die eigentlich nichts zeichnet, aber Teil der oben beschriebenen Pfadliste wird, ist die `moveTo()`-Funktion. Sie können dies wahrscheinlich am besten als das Anheben eines Stifts oder Bleistifts von einem Punkt auf einem Blatt Papier und das Platzieren auf dem nächsten Punkt betrachten.

- [`moveTo(x, y)`](/de/docs/Web/API/CanvasRenderingContext2D/moveTo)
  - : Bewegt den Stift zu den durch `x` und `y` angegebenen Koordinaten.

Wenn das Canvas initialisiert wird oder `beginPath()` aufgerufen wird, werden Sie in der Regel die `moveTo()`-Funktion verwenden wollen, um den Ausgangspunkt woanders hin zu setzen. Wir könnten auch `moveTo()` nutzen, um unverbundene Wege zu zeichnen. Werfen Sie einen Blick auf das Smiley-Gesicht unten.

Um dies selbst auszuprobieren, können Sie den unten stehenden Code-Schnipsel verwenden. Fügen Sie ihn einfach in die `draw()`-Funktion ein, die wir zuvor gesehen haben.

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

Das Ergebnis sieht folgendermaßen aus:

{{EmbedLiveSample("Moving_the_pen", "", "160")}}

Wenn Sie die Verbindungsleitungen sehen möchten, können Sie die Zeilen entfernen, die `moveTo()` aufrufen.

> [!NOTE]
> Um mehr über die `arc()`-Funktion zu erfahren, siehe den Abschnitt [Bögen](#bögen) weiter unten.

### Linien

Um gerade Linien zu zeichnen, nutzen Sie die `lineTo()`-Methode.

- [`lineTo(x, y)`](/de/docs/Web/API/CanvasRenderingContext2D/lineTo)
  - : Zeichnet eine Linie von der aktuellen Zeichenposition zu der durch `x` und `y` angegebenen Position.

Diese Methode nimmt zwei Argumente, `x` und `y`, die die Koordinaten des Endpunkts der Linie sind. Der Startpunkt hängt von zuvor gezeichneten Pfaden ab, wobei der Endpunkt des vorherigen Pfads der Startpunkt des folgenden ist, usw. Der Startpunkt kann auch durch Verwendung der `moveTo()`-Methode geändert werden.

Das folgende Beispiel zeichnet zwei Dreiecke, eines gefüllt und eines umrandet.

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

Dies beginnt mit dem Aufruf von `beginPath()`, um einen neuen Formpfad zu starten. Wir verwenden dann die `moveTo()`-Methode, um den Startpunkt an die gewünschte Position zu bewegen. Darunter werden zwei Linien gezeichnet, die zwei Seiten des Dreiecks bilden.

{{EmbedLiveSample("Lines", "", "160")}}

Sie werden den Unterschied zwischen dem gefüllten und dem umrandeten Dreieck bemerken. Dies ist, wie oben erwähnt, weil Formen automatisch geschlossen werden, wenn ein Pfad gefüllt wird, aber nicht, wenn er umrandet wird. Wenn wir das `closePath()` für das umrandete Dreieck weggelassen hätten, wären nur zwei Linien gezeichnet worden, nicht ein komplettes Dreieck.

### Bögen

Um Bögen oder Kreise zu zeichnen, verwenden wir die `arc()`- oder `arcTo()`-Methoden.

- [`arc(x, y, radius, startAngle, endAngle, counterclockwise)`](/de/docs/Web/API/CanvasRenderingContext2D/arc)
  - : Zeichnet einen Bogen, der an der Position _(x, y)_ mit Radius _r_ zentriert ist, beginnend bei _startAngle_ und endend bei _endAngle_ in die angegebene Richtung, angegeben durch _counterclockwise_ (Standard ist im Uhrzeigersinn).
- [`arcTo(x1, y1, x2, y2, radius)`](/de/docs/Web/API/CanvasRenderingContext2D/arcTo)
  - : Zeichnet einen Bogen mit den gegebenen Kontrollpunkten und Radius, verbunden mit dem vorherigen Punkt durch eine gerade Linie.

Werfen wir einen detaillierteren Blick auf die `arc`-Methode, die sechs Parameter nimmt: `x` und `y` sind die Koordinaten des Zentrums des Kreises, auf dem der Bogen gezeichnet werden soll. `radius` erklärt sich selbst. Die `startAngle`- und `endAngle`-Parameter definieren die Anfangs- und Endpunkte des Bogens in Radians, entlang der Kurve des Kreises. Diese werden von der x-Achse gemessen. Der `counterclockwise`-Parameter ist ein Boolescher Wert, der, wenn `true`, den Bogen gegen den Uhrzeigersinn zeichnet; andernfalls wird der Bogen im Uhrzeigersinn gezeichnet.

> [!NOTE]
> Winkel in der `arc`-Funktion werden in Radians gemessen, nicht in Grad. Um Grad in Radians zu konvertieren, können Sie den folgenden JavaScript-Ausdruck verwenden: `radians = (Math.PI/180)*degrees`.

Das folgende Beispiel ist etwas komplexer als die oben gesehenen. Es zeichnet 12 verschiedene Bögen, alle mit unterschiedlichen Winkeln und Füllungen.

Die beiden [`for`-Schleifen](/de/docs/Web/JavaScript/Reference/Statements/for) durchlaufen die Zeilen und Spalten der Bögen. Für jeden Bogen beginnen wir einen neuen Pfad durch Aufruf von `beginPath()`. Im Code sind die Parameter für den Bogen jeweils in einer Variablen zur Klarheit, aber dies würde man im realen Leben nicht unbedingt so machen.

Die Parameter `x` und `y` sollten klar genug sein. `radius` und `startAngle` sind festgelegt. Der `endAngle` beginnt bei 180 Grad (halber Kreis) in der ersten Spalte und wird um Schritte von 90 Grad erhöht, was in einem vollständigen Kreis in der letzten Spalte gipfelt.

Die Anweisung für den `clockwise`-Parameter führt dazu, dass die erste und dritte Zeile im Uhrzeigersinn Bögen und die zweite und vierte Zeile gegen den Uhrzeigersinn Bögen sind. Schließlich lässt die `if`-Anweisung die obere Hälfte umrandete Bögen und die untere Hälfte gefüllte Bögen sein.

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

Der nächste verfügbare Wegtyp sind {{Glossary("Bezier_curve", "Bézier-Kurven")}}, sowohl in kubischer als auch in quadratischer Form. Diese werden im Allgemeinen verwendet, um komplexe organische Formen zu zeichnen.

- [`quadraticCurveTo(cp1x, cp1y, x, y)`](/de/docs/Web/API/CanvasRenderingContext2D/quadraticCurveTo)
  - : Zeichnet eine quadratische Bézier-Kurve von der aktuellen Position des Stifts zu dem durch `x` und `y` angegebenen Endpunkt, unter Verwendung des durch `cp1x` und `cp1y` angegebenen Kontrollpunkts.
- [`bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)`](/de/docs/Web/API/CanvasRenderingContext2D/bezierCurveTo)
  - : Zeichnet eine kubische Bézier-Kurve von der aktuellen Position des Stifts zu dem durch `x` und `y` angegebenen Endpunkt, unter Verwendung der durch (`cp1x`, `cp1y`) und (`cp2x`, `cp2y`) angegebenen Kontrollpunkte.

Der Unterschied zwischen diesen ist, dass eine quadratische Bézier-Kurve einen Start- und einen Endpunkt (blaue Punkte) sowie nur einen **Kontrollpunkt** (angezeigt durch den roten Punkt) hat, während eine kubische Bézier-Kurve zwei Kontrollpunkte verwendet.
![Vergleich von quadratischer und Bézier-Kurve.](canvas_curves.png)

Die Parameter `x` und `y` in beiden dieser Methoden sind die Koordinaten des Endpunkts. `cp1x` und `cp1y` sind die Koordinaten des ersten Kontrollpunkts, und `cp2x` und `cp2y` sind die Koordinaten des zweiten Kontrollpunkts.

Das Verwenden von quadratischen und kubischen Bézier-Kurven kann ziemlich herausfordernd sein, denn im Gegensatz zu Vektorgrafiksoftware wie Adobe Illustrator haben wir kein direktes visuelles Feedback darüber, was wir tun. Das macht es ziemlich schwierig, komplexe Formen zu zeichnen. Im folgenden Beispiel werden wir einige einfache organische Formen zeichnen, aber wenn Sie die Zeit und vor allem die Geduld haben, können viel komplexere Formen erstellt werden.

In diesen Beispielen gibt es nichts sehr Kompliziertes. In beiden Fällen sehen wir eine Abfolge von Kurven, die schließlich zu einer vollständigen Form führen.

#### Quadratische Bézier-Kurven

Dieses Beispiel verwendet mehrere quadratische Bézier-Kurven, um eine Sprechblase darzustellen.

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

#### Kubische Bézier-Kurven

Dieses Beispiel zeichnet ein Herz durch die Verwendung von kubischen Bézier-Kurven.

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
  - : Zeichnet ein Rechteck, dessen obere linke Ecke durch (`x`, `y`) mit der angegebenen `width` und `height` festgelegt ist.

Bevor diese Methode ausgeführt wird, wird die `moveTo()`-Methode automatisch mit den Parametern (x,y) aufgerufen. Mit anderen Worten, die aktuelle Stiftposition wird automatisch auf die Standardkoordinaten zurückgesetzt.

### Kombinationen erstellen

Bis jetzt hat jedes Beispiel auf dieser Seite nur einen Pfadtyp pro Shape verwendet. Es gibt jedoch keine Einschränkung für die Anzahl oder die Typen von Pfaden, die Sie verwenden können, um eine Form zu erstellen. Lassen Sie uns also in diesem letzten Beispiel alle Pfadfunktionen kombinieren, um eine Gruppe von sehr berühmten Spielcharakteren zu erstellen.

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

Das resultierende Bild sieht folgendermaßen aus:

{{EmbedLiveSample("Making_combinations", "", "200")}}

Wir werden nicht im Detail darauf eingehen, da es tatsächlich überraschend einfach ist. Die wichtigsten Dinge, die zu beachten sind, sind die Verwendung der `fillStyle`-Eigenschaft auf dem Zeichnungskontext und die Verwendung einer Hilfsfunktion (in diesem Fall `roundedRect()`). Die Verwendung von Hilfsfunktionen für Zeichnungsabläufe, die Sie häufig durchführen, kann sehr hilfreich sein und den benötigten Code sowie dessen Komplexität reduzieren.

Wir werden später in diesem Tutorial einen genaueren Blick auf `fillStyle` werfen. Hier ändern wir nur die Füllfarbe für Pfade von der Standardfarbe Schwarz zu Weiß und dann wieder zurück.

### Formen mit Löchern

Um eine Form mit einem Loch darin zu zeichnen, müssen wir das Loch in unterschiedlichen Uhrzeigerrichtungen zeichnen, wie wir die äußere Form zeichnen. Wir zeichnen entweder die äußere Form im Uhrzeigersinn und die innere Form gegen den Uhrzeigersinn oder die äußere Form gegen den Uhrzeigersinn und die innere Form im Uhrzeigersinn.

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

Im obigen Beispiel geht das äußere Dreieck im Uhrzeigersinn (bewegen Sie sich zur oberen linken Ecke, dann eine Linie zur oberen rechten Ecke und beenden Sie am Boden), und das innere Dreieck geht gegen den Uhrzeigersinn (bewegen Sie sich nach oben, dann eine Linie zur unteren linken Ecke und enden Sie an der unteren rechten).

## Path2D Objekte

Wie wir im letzten Beispiel gesehen haben, kann es eine Serie von Pfaden und Zeichenbefehlen geben, um Objekte auf Ihr Canvas zu zeichnen. Um den Code zu vereinfachen und die Leistung zu verbessern, lässt das [`Path2D`](/de/docs/Web/API/Path2D)-Objekt, verfügbar in neueren Versionen von Browsern, Sie diese Zeichenbefehle zwischenspeichern oder aufzeichnen. Sie können Ihre Pfade schnell wiedergeben. Lassen Sie uns sehen, wie wir ein `Path2D`-Objekt konstruieren können:

- [`Path2D()`](/de/docs/Web/API/Path2D/Path2D)
  - : Der **`Path2D()`** Konstruktor gibt ein neu instanziiertes `Path2D`-Objekt zurück, optional mit einem anderen Pfad als Argument (erstellt eine Kopie), oder optional mit einem String, der aus [SVG-Pfad](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Paths)-Daten besteht.

```js
new Path2D(); // empty path object
new Path2D(path); // copy from another Path2D object
new Path2D(d); // path from SVG path data
```

Alle [Pfadmethoden](/de/docs/Web/API/CanvasRenderingContext2D#paths) wie `moveTo`, `rect`, `arc` oder `quadraticCurveTo`, usw., die wir oben kennengelernt haben, sind auf `Path2D`-Objekten verfügbar.

Die `Path2D`-API fügt auch eine Möglichkeit hinzu, Pfade zu kombinieren, indem die `addPath`-Methode verwendet wird. Dies kann nützlich sein, wenn Sie Objekte aus mehreren Komponenten aufbauen möchten, zum Beispiel.

- [`Path2D.addPath(path [, transform])`](/de/docs/Web/API/Path2D/addPath)
  - : Fügt dem aktuellen Pfad einen Pfad mit einer optionalen Transformationsmatrix hinzu.

### Path2D Beispiel

In diesem Beispiel erstellen wir ein Rechteck und einen Kreis. Beide werden als `Path2D`-Objekt gespeichert, sodass sie für die spätere Verwendung verfügbar sind. Mit der neuen `Path2D`-API wurden mehrere Methoden aktualisiert, um optional ein `Path2D`-Objekt zu verwenden, anstatt des aktuellen Pfades. Hier werden `stroke` und `fill` mit einem Pfadargument verwendet, um beide Objekte auf das Canvas zu zeichnen, zum Beispiel.

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

Ein weiteres leistungsstarkes Merkmal der neuen Canvas `Path2D`-API ist die Verwendung von [SVG-Pfad-Daten](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Paths), um Pfade auf Ihrem Canvas zu initialisieren. Dies könnte Ihnen erlauben, Pfaddaten weiterzugeben und sowohl in SVG als auch in Canvas wiederzuverwenden.

Der Pfad wird zu Punkt (`M10 10`) wechseln und dann horizontal 80 Punkte nach rechts bewegen (`h 80`), dann 80 Punkte nach unten (`v 80`), dann 80 Punkte nach links (`h -80`) und dann zurück zum Start (`z`). Sie können dieses Beispiel auf der Seite des [`Path2D` Konstruktor](/de/docs/Web/API/Path2D/Path2D#using_svg_paths) sehen.

```js
const p = new Path2D("M10 10 h 80 v 80 h -80 Z");
```

{{PreviousNext("Web/API/Canvas_API/Tutorial/Basic_usage", "Web/API/Canvas_API/Tutorial/Applying_styles_and_colors")}}
