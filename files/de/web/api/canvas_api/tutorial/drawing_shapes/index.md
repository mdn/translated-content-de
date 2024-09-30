---
title: Formen mit Canvas zeichnen
slug: Web/API/Canvas_API/Tutorial/Drawing_shapes
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Basic_usage", "Web/API/Canvas_API/Tutorial/Applying_styles_and_colors")}}

Nachdem wir unser [Canvas-Umfeld](/de/docs/Web/API/Canvas_API/Tutorial/Basic_usage) eingerichtet haben, können wir uns den Details widmen, wie man auf dem Canvas zeichnet. Am Ende dieses Artikels haben Sie gelernt, wie man Rechtecke, Dreiecke, Linien, Bögen und Kurven zeichnet, um sich mit einigen der grundlegenden Formen vertraut zu machen. Mit Pfaden zu arbeiten ist essenziell, um Objekte auf die Leinwand zu zeichnen, und wir werden sehen, wie das gemacht werden kann.

## Das Raster

Bevor wir anfangen können zu zeichnen, müssen wir über das Canvas-Raster oder **Koordinatensystem** sprechen. Unser HTML-Skelett von der vorherigen Seite hatte ein Canvas-Element, das 150 Pixel breit und 150 Pixel hoch war.

![Canvas-Raster mit einem blauen Quadrat, das Koordinaten und Achsen demonstriert.](canvas_default_grid.png)

Normalerweise entspricht 1 Einheit im Raster einem Pixel auf dem Canvas. Der Ursprung dieses Rasters befindet sich in der _oberen linken_ Ecke bei der Koordinate (0,0). Alle Elemente werden relativ zu diesem Ursprung platziert. So wird die Position der oberen linken Ecke des blauen Quadrats x Pixel von links und y Pixel von oben bei der Koordinate (x,y). Später in diesem Tutorial werden wir sehen, wie wir den Ursprung an eine andere Position verschieben, das Raster drehen und sogar skalieren können, aber für den Moment bleiben wir beim Standard.

## Rechtecke zeichnen

Im Gegensatz zu [SVG](/de/docs/Glossary/SVG) unterstützt {{HTMLElement("canvas")}} nur zwei primitive Formen: Rechtecke und Pfade (Listen von Punkten, die durch Linien verbunden sind). Alle anderen Formen müssen durch das Kombinieren von einem oder mehreren Pfaden erstellt werden. Zum Glück haben wir eine Reihe von Pfadzeichnungsfunktionen, die es ermöglichen, sehr komplexe Formen zu erstellen.

Schauen wir uns zuerst das Rechteck an. Es gibt drei Funktionen, die Rechtecke auf das Canvas zeichnen:

- [`fillRect(x, y, width, height)`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect)
  - : Zeichnet ein gefülltes Rechteck.
- [`strokeRect(x, y, width, height)`](/de/docs/Web/API/CanvasRenderingContext2D/strokeRect)
  - : Zeichnet einen rechteckigen Umriss.
- [`clearRect(x, y, width, height)`](/de/docs/Web/API/CanvasRenderingContext2D/clearRect)
  - : Löscht den angegebenen rechteckigen Bereich, wodurch er vollständig transparent wird.

Jede dieser drei Funktionen nimmt die gleichen Parameter. `x` und `y` spezifizieren die Position auf dem Canvas (relativ zum Ursprung) der oberen linken Ecke des Rechtecks. `width` und `height` geben die Größe des Rechtecks an.

Unten ist die `draw()`-Funktion von der vorherigen Seite, aber jetzt nutzt sie diese drei Funktionen.

### Beispiel: Rechteckige Form

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

Die `fillRect()`-Funktion zeichnet ein großes schwarzes Quadrat mit 100 Pixeln auf jeder Seite. Die `clearRect()`-Funktion löscht dann ein 60x60 Pixel großes Quadrat aus der Mitte und `strokeRect()` wird aufgerufen, um einen rechteckigen Umriss von 50x50 Pixeln innerhalb des gelöschten Quadrats zu erstellen.

Auf den kommenden Seiten werden wir zwei alternative Methoden für `clearRect()` sehen, und wir werden auch sehen, wie man die Farbe und den Strichstil der gezeichneten Formen ändert.

Im Gegensatz zu den Pfadfunktionen, die wir im nächsten Abschnitt sehen werden, zeichnen alle drei Rechteckfunktionen sofort auf das Canvas.

## Pfade zeichnen

Schauen wir uns nun die Pfade an. Ein Pfad ist eine Liste von Punkten, verbunden durch Liniensegmente, die unterschiedliche Formen, gebogen oder nicht, von unterschiedlicher Breite und in unterschiedlichen Farben sein können. Ein Pfad oder sogar ein Subpfad kann geschlossen sein. Um Formen mit Pfaden zu erstellen, unternehmen wir einige zusätzliche Schritte:

1. Zuerst erstellen Sie den Pfad.
2. Dann verwenden Sie [Zeichenbefehle](/de/docs/Web/API/CanvasRenderingContext2D#paths), um in den Pfad zu zeichnen.
3. Sobald der Pfad erstellt wurde, können Sie den Pfad umranden oder füllen, um ihn zu rendern.

Hier sind die Funktionen, die zur Ausführung dieser Schritte verwendet werden:

- [`beginPath()`](/de/docs/Web/API/CanvasRenderingContext2D/beginPath)
  - : Erstellt einen neuen Pfad. Sobald erstellt, richten sich zukünftige Zeichenbefehle in den Pfad und werden verwendet, um den Pfad aufzubauen.
- [Path-Methoden](/de/docs/Web/API/CanvasRenderingContext2D#paths)
  - : Methoden, um verschiedene Pfade für Objekte festzulegen.
- [`closePath()`](/de/docs/Web/API/CanvasRenderingContext2D/closePath)
  - : Fügt eine gerade Linie zum Pfad hinzu, die zum Anfang des aktuellen Subpfads führt.
- [`stroke()`](/de/docs/Web/API/CanvasRenderingContext2D/stroke)
  - : Zeichnet die Form, indem ihr Umriss umrissen wird.
- [`fill()`](/de/docs/Web/API/CanvasRenderingContext2D/fill)
  - : Zeichnet eine feste Form, indem der Inhaltsbereich des Pfads gefüllt wird.

Der erste Schritt, um einen Pfad zu erstellen, ist der Aufruf von `beginPath()`. Intern werden Pfade als Liste von Subpfaden (Linien, Bögen etc.) gespeichert, die zusammen eine Form bilden. Jedes Mal, wenn diese Methode aufgerufen wird, wird die Liste zurückgesetzt und wir können neue Formen zeichnen.

> [!NOTE]
> Wenn der aktuelle Pfad leer ist, wie direkt nachdem `beginPath()` aufgerufen wurde oder auf einem neu erstellten Canvas, wird der erste Pfadkonstruktionsbefehl immer als `moveTo()` behandelt, unabhängig davon, was er tatsächlich ist. Aus diesem Grund möchten Sie fast immer Ihre Startposition explizit festlegen, nachdem ein Pfad zurückgesetzt wurde.

Der zweite Schritt ist das Aufrufen der Methoden, die tatsächlich die zu zeichnenden Pfade spezifizieren. Diese werden wir in Kürze sehen.

Der dritte und ein optionaler Schritt ist das Aufrufen von `closePath()`. Diese Methode versucht, die Form zu schließen, indem eine gerade Linie vom aktuellen Punkt zum Anfang gezeichnet wird. Wenn die Form bereits geschlossen ist oder es nur einen Punkt in der Liste gibt, macht diese Funktion nichts.

> [!NOTE]
> Wenn Sie `fill()` aufrufen, werden alle offenen Formen automatisch geschlossen, sodass Sie `closePath()` nicht aufrufen müssen. Dies ist **nicht** der Fall, wenn Sie `stroke()` aufrufen.

### Ein Dreieck zeichnen

Das Code-Beispiel für das Zeichnen eines Dreiecks würde so aussehen:

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

Das Ergebnis sieht wie folgt aus:

{{EmbedLiveSample("Drawing_a_triangle", "", "110")}}

### Den Stift bewegen

Eine sehr nützliche Funktion, die eigentlich nichts zeichnet, aber Teil der oben beschriebenen Pfadliste wird, ist die `moveTo()`-Funktion. Sie können wahrscheinlich am besten denken, dass dies dem Anheben eines Stifts oder Bleistifts von einer Stelle auf einem Blatt Papier und dem Platzieren an der nächsten entspricht.

- [`moveTo(x, y)`](/de/docs/Web/API/CanvasRenderingContext2D/moveTo)
  - : Bewegt den Stift zu den durch `x` und `y` angegebenen Koordinaten.

Wenn das Canvas initialisiert wird oder `beginPath()` aufgerufen wird, möchten Sie normalerweise die `moveTo()`-Funktion verwenden, um den Startpunkt woanders zu platzieren. Wir könnten `moveTo()` auch verwenden, um unverbundene Pfade zu zeichnen. Schauen Sie sich das Smiley-Gesicht unten an.

Um dies selbst auszuprobieren, können Sie das unten stehende Codefragment verwenden. Fügen Sie es einfach in die `draw()`-Funktion ein, die wir zuvor gesehen haben.

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

Wenn Sie die Verbindungsleitungen sehen möchten, können Sie die Zeilen entfernen, die `moveTo()` aufrufen.

> [!NOTE]
> Weitere Informationen zur `arc()`-Funktion finden Sie im Abschnitt [Bögen](#bögen) unten.

### Linien

Zum Zeichnen gerader Linien verwenden Sie die `lineTo()`-Methode.

- [`lineTo(x, y)`](/de/docs/Web/API/CanvasRenderingContext2D/lineTo)
  - : Zeichnet eine Linie von der aktuellen Zeichenposition zu der durch `x` und `y` angegebenen Position.

Diese Methode nimmt zwei Argumente entgegen, `x` und `y`, die die Koordinaten des Endpunkts der Linie sind. Der Startpunkt hängt von vorher gezeichneten Pfaden ab, wobei der Endpunkt des vorherigen Pfads der Startpunkt für den folgenden ist, usw. Der Startpunkt kann auch durch die Verwendung der `moveTo()`-Methode geändert werden.

Das folgende Beispiel zeichnet zwei Dreiecke, eines gefüllt und eines umrissen.

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

Dies beginnt mit einem Aufruf von `beginPath()`, um einen neuen Formpfad zu starten. Dann verwenden wir die `moveTo()`-Methode, um den Startpunkt an die gewünschte Position zu verschieben. Darunter werden zwei Linien gezeichnet, die zwei Seiten des Dreiecks bilden.

{{EmbedLiveSample("Lines", "", "160")}}

Sie werden den Unterschied zwischen dem gefüllten und dem umrandeten Dreieck bemerken. Dies liegt, wie oben erwähnt, daran, dass Formen automatisch geschlossen werden, wenn ein Pfad gefüllt wird, aber nicht, wenn sie umrandet sind. Wenn wir das `closePath()` für das umrandete Dreieck weggelassen hätten, wären nur zwei Linien gezeichnet worden, nicht ein vollständiges Dreieck.

### Bögen

Um Bögen oder Kreise zu zeichnen, verwenden wir die Methoden `arc()` oder `arcTo()`.

- [`arc(x, y, radius, startAngle, endAngle, counterclockwise)`](/de/docs/Web/API/CanvasRenderingContext2D/arc)
  - : Zeichnet einen Bogen, der im Mittelpunkt _(x, y)_ liegt, mit Radius _r_, beginnend bei _startAngle_ und endend bei _endAngle_, in die gegebene Richtung angezeigt durch _counterclockwise_ (standardmäßig im Uhrzeigersinn).
- [`arcTo(x1, y1, x2, y2, radius)`](/de/docs/Web/API/CanvasRenderingContext2D/arcTo)
  - : Zeichnet einen Bogen mit den angegebenen Kontrollpunkten und dem Radius, verbunden mit dem vorherigen Punkt durch eine gerade Linie.

Werfen wir einen detaillierteren Blick auf die `arc`-Methode, die sechs Parameter benötigt: `x` und `y` sind die Koordinaten des Mittelpunkts des Kreises, auf dem der Bogen gezeichnet werden soll. `radius` erklärt sich von selbst. Die Parameter `startAngle` und `endAngle` definieren die Start- und Endpunkte des Bogens in Radianten, entlang der Kurve des Kreises. Diese werden von der x-Achse gemessen. Der `counterclockwise`-Parameter ist ein Boolescher Wert, der, wenn `true`, den Bogen gegen den Uhrzeigersinn zeichnet; andernfalls wird der Bogen im Uhrzeigersinn gezeichnet.

> [!NOTE]
> Winkel in der `arc`-Funktion werden in Radianten gemessen, nicht in Grad. Um Grad in Radianten umzuwandeln, können Sie den folgenden JavaScript-Ausdruck verwenden: `radians = (Math.PI/180)*degrees`.

Das folgende Beispiel ist etwas komplexer als die bisherigen. Es zeichnet 12 verschiedene Bögen, alle mit unterschiedlichen Winkeln und Füllungen.

Die zwei [`for`-Schleifen](/de/docs/Web/JavaScript/Reference/Statements/for) dienen dazu, durch die Zeilen und Spalten von Bögen zu iterieren. Für jeden Bogen starten wir einen neuen Pfad, indem wir `beginPath()` aufrufen. Im Code ist jeder der Parameter für den Bogen in einer Variable für die Klarheit, aber das würden Sie im echten Leben nicht unbedingt so tun.

Die `x`- und `y`-Koordinaten sollten klar genug sein. `radius` und `startAngle` sind festgelegt. Der `endAngle` startet bei 180 Grad (ein Halbkreis) in der ersten Spalte und wird schrittweise um 90 Grad erhöht, wobei er in einem vollständigen Kreis in der letzten Spalte kulminiert.

Die Anweisung für den `clockwise`-Parameter führt dazu, dass die erste und dritte Reihe im Uhrzeigersinn Bögen zeichnen und die zweite und vierte Reihe gegen den Uhrzeigersinn Bögen zeichnen. Schließlich sorgt die `if`-Anweisung dafür, dass die obere Hälfte der Bögen umrandet und die untere Hälfte gefüllt ist.

> [!NOTE]
> Dieses Beispiel erfordert eine etwas größere Leinwand als die anderen auf dieser Seite: 150 x 200 Pixel.

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

Der nächste verfügbare Pfadtyp sind [Bézier-Kurven](/de/docs/Glossary/Bezier_curve), verfügbar in kubischen und quadratischen Varianten. Diese werden im Allgemeinen verwendet, um komplexe organische Formen zu zeichnen.

- [`quadraticCurveTo(cp1x, cp1y, x, y)`](/de/docs/Web/API/CanvasRenderingContext2D/quadraticCurveTo)
  - : Zeichnet eine quadratische Bézier-Kurve von der aktuellen Stiftposition zum Endpunkt, der durch `x` und `y` angegeben ist, unter Verwendung des Kontrollpunkts, der durch `cp1x` und `cp1y` angegeben ist.
- [`bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)`](/de/docs/Web/API/CanvasRenderingContext2D/bezierCurveTo)
  - : Zeichnet eine kubische Bézier-Kurve von der aktuellen Stiftposition zum Endpunkt, der durch `x` und `y` angegeben ist, unter Verwendung der Kontrollpunkte, die durch (`cp1x`, `cp1y`) und (`cp2x`, `cp2y`) angegeben sind.

Der Unterschied zwischen diesen ist, dass eine quadratische Bézier-Kurve einen Start- und einen Endpunkt (blaue Punkte) und nur einen **Kontrollpunkt** (angezeigt durch den roten Punkt) hat, während eine kubische Bézier-Kurve zwei Kontrollpunkte verwendet.
![Vergleich von quadratischen und Bézier-Kurven.](canvas_curves.png)

Die `x`- und `y`-Parameter in beiden dieser Methoden sind die Koordinaten des Endpunkts. `cp1x` und `cp1y` sind die Koordinaten des ersten Kontrollpunkts, und `cp2x` und `cp2y` sind die Koordinaten des zweiten Kontrollpunkts.

Das Verwenden von quadratischen und kubischen Bézier-Kurven kann ziemlich herausfordernd sein, da wir im Gegensatz zu Vektorzeichenprogrammen wie Adobe Illustrator keine direkte visuelle Rückmeldung darüber haben, was wir tun. Dies macht es ziemlich schwierig, komplexe Formen zu zeichnen. Im folgenden Beispiel zeichnen wir einige einfache organische Formen, aber wenn Sie die Zeit und vor allem die Geduld haben, können viel komplexere Formen erstellt werden.

Es gibt nichts sehr Schwieriges in diesen Beispielen. In beiden Fällen sehen wir eine Abfolge von Kurven, die schließlich eine vollständige Form ergeben.

#### Quadratische Bézier-Kurven

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

#### Kubische Bézier-Kurven

Dieses Beispiel zeichnet ein Herz unter Verwendung von kubischen Bézier-Kurven.

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

Zusätzlich zu den drei Methoden, die wir im Abschnitt [Rechtecke zeichnen](#rechtecke_zeichnen) gesehen haben und die rechteckige Formen direkt auf das Canvas zeichnen, gibt es auch die `rect()`-Methode, die einen rechteckigen Pfad zu einem derzeit offenen Pfad hinzufügt.

- [`rect(x, y, width, height)`](/de/docs/Web/API/CanvasRenderingContext2D/rect)
  - : Zeichnet ein Rechteck, dessen obere linke Ecke durch (`x`, `y`) angegeben ist, mit der angegebenen `width` und `height`.

Bevor diese Methode ausgeführt wird, wird die `moveTo()`-Methode automatisch mit den Parametern (x,y) aufgerufen. Mit anderen Worten, die aktuelle Stiftposition wird automatisch auf die Standardkoordinaten zurückgesetzt.

### Kombinationen erstellen

Bisher hat jedes Beispiel auf dieser Seite nur einen Typ von Pfadfunktion pro Form verwendet. Es gibt jedoch keine Einschränkung für die Anzahl oder die Arten von Pfaden, die Sie verwenden können, um eine Form zu erstellen. In diesem letzten Beispiel kombinieren wir alle Pfadfunktionen, um eine Reihe sehr bekannter Spielfiguren zu erstellen.

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

Wir werden dies nicht im Detail durchgehen, da es tatsächlich überraschend einfach ist. Die wichtigsten Dinge zu beachten sind die Verwendung der `fillStyle`-Eigenschaft auf dem Zeichenkontext und die Verwendung einer Hilfsfunktion (in diesem Fall `roundedRect()`). Die Verwendung von Hilfsfunktionen für Teile des Zeichnens, die Sie oft ausführen, kann sehr hilfreich sein und die Menge an Code reduzieren, die Sie benötigen, sowie deren Komplexität.

Wir werden später in diesem Tutorial `fillStyle` genauer betrachten. Hier ändern wir nur die Füllfarbe für Pfade von der Standardfarbe Schwarz zu Weiß und dann wieder zurück.

### Formen mit Löchern

Um eine Form mit einem Loch darin zu zeichnen, müssen wir das Loch in entgegengesetzte Richtungen zeichnen, wie wir die äußere Form zeichnen. Wir zeichnen entweder die äußere Form im Uhrzeigersinn und die innere Form gegen den Uhrzeigersinn oder umgekehrt.

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

Im obigen Beispiel geht das äußere Dreieck im Uhrzeigersinn (Bewegen zur oberen linken Ecke, dann eine Linie zur oberen rechten Ecke, und endet unten) und das innere Dreieck geht gegen den Uhrzeigersinn (Bewegen nach oben, dann Linie zur unteren linken Ecke, und endet unten rechts).

## Path2D-Objekte

Wie wir im letzten Beispiel gesehen haben, kann es eine Reihe von Pfaden und Zeichenbefehlen geben, um Objekte auf Ihr Canvas zu zeichnen. Um den Code zu vereinfachen und die Leistung zu verbessern, ermöglicht das [`Path2D`](/de/docs/Web/API/Path2D)-Objekt, das in neueren Browserversionen verfügbar ist, das Zwischenspeichern oder Aufzeichnen dieser Zeichenbefehle. Sie sind in der Lage, Ihre Pfade schnell wiederzugeben.
Sehen wir uns an, wie wir ein `Path2D`-Objekt konstruieren können:

- [`Path2D()`](/de/docs/Web/API/Path2D/Path2D)
  - : Der **`Path2D()`**-Konstruktor gibt ein neu instanziiertes `Path2D`-Objekt zurück, optional mit einem anderen Pfad als Argument (erstellt eine Kopie) oder optional mit einem String, der aus [SVG-Pfaddaten](/de/docs/Web/SVG/Tutorial/Paths) besteht.

```js
new Path2D(); // empty path object
new Path2D(path); // copy from another Path2D object
new Path2D(d); // path from SVG path data
```

Alle [Pfadmethoden](/de/docs/Web/API/CanvasRenderingContext2D#paths) wie `moveTo`, `rect`, `arc` oder `quadraticCurveTo` usw., die wir oben kennengelernt haben, sind auf `Path2D`-Objekten verfügbar.

Die `Path2D`-API fügt auch eine Möglichkeit hinzu, Pfade mit der `addPath`-Methode zu kombinieren. Dies kann nützlich sein, wenn Sie Objekte aus mehreren Komponenten erstellen möchten, zum Beispiel.

- [`Path2D.addPath(path [, transform])`](/de/docs/Web/API/Path2D/addPath)
  - : Fügt einen Pfad zum aktuellen Pfad mit einer optionalen Transformationsmatrix hinzu.

### Path2D-Beispiel

In diesem Beispiel erstellen wir ein Rechteck und einen Kreis. Beide werden als `Path2D`-Objekte gespeichert, sodass sie später verfügbar sind. Mit der neuen `Path2D`-API wurden mehrere Methoden aktualisiert, um optional ein `Path2D`-Objekt zu akzeptieren, das anstelle des aktuellen Pfades verwendet wird. Hier werden `stroke` und `fill` mit einem Pfadargument verwendet, um beide Objekte auf das Canvas zu zeichnen.

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

Ein weiteres leistungsstarkes Merkmal der neuen Canvas-`Path2D`-API ist die Verwendung von [SVG-Pfaddaten](/de/docs/Web/SVG/Tutorial/Paths), um Pfade auf Ihrem Canvas zu initialisieren. Dies ermöglicht es Ihnen möglicherweise, Pfaddaten zu übermitteln und sowohl in SVG als auch in Canvas wiederzuverwenden.

Der Pfad wird zu Punkt (`M10 10`) wechseln und dann horizontal 80 Punkte nach rechts (`h 80`) gehen, dann 80 Punkte nach unten (`v 80`), dann 80 Punkte nach links (`h -80`), und dann zurück zum Anfang (`z`). Sie können dieses Beispiel auf der Seite [`Path2D`-Konstruktor](/de/docs/Web/API/Path2D/Path2D#using_svg_paths) sehen.

```js
const p = new Path2D("M10 10 h 80 v 80 h -80 Z");
```

{{PreviousNext("Web/API/Canvas_API/Tutorial/Basic_usage", "Web/API/Canvas_API/Tutorial/Applying_styles_and_colors")}}
