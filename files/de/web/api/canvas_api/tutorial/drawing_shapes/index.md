---
title: Zeichnen von Formen mit Canvas
slug: Web/API/Canvas_API/Tutorial/Drawing_shapes
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Basic_usage", "Web/API/Canvas_API/Tutorial/Applying_styles_and_colors")}}

Jetzt, da wir unsere [Canvas-Umgebung](/de/docs/Web/API/Canvas_API/Tutorial/Basic_usage) eingerichtet haben, können wir ins Detail gehen, wie man auf dem Canvas zeichnet. Am Ende dieses Artikels haben Sie gelernt, wie man Rechtecke, Dreiecke, Linien, Bögen und Kurven zeichnet, was Ihnen Vertrautheit mit einigen der Grundformen verschafft. Arbeiten mit Pfaden ist wesentlich beim Zeichnen von Objekten auf das Canvas, und wir werden sehen, wie das gemacht werden kann.

## Das Raster

Bevor wir zeichnen können, müssen wir über das Canvas-Raster oder den **Koordinatenraum** sprechen. Unser HTML-Gerüst von der vorherigen Seite hatte ein Canvas-Element, das 150 Pixel breit und 150 Pixel hoch ist.

![Canvas-Raster mit einem blauen Quadrat, das Koordinaten und Achsen demonstriert.](canvas_default_grid.png)

Normalerweise entspricht 1 Einheit im Raster 1 Pixel auf dem Canvas. Der Ursprung dieses Rasters befindet sich in der _oberen linken_ Ecke bei der Koordinate (0,0). Alle Elemente werden relativ zu diesem Ursprung platziert. Die Position der oberen linken Ecke des blauen Quadrats wird also um x Pixel von links und y Pixel von oben zur Koordinate (x,y). Später in diesem Tutorial werden wir sehen, wie wir den Ursprung an eine andere Position verschieben, das Raster drehen und sogar skalieren können, aber fürs Erste bleiben wir beim Standard.

## Zeichnen von Rechtecken

Anders als {{Glossary("SVG")}} unterstützt {{HTMLElement("canvas")}} nur zwei primitive Formen: Rechtecke und Pfade (Listen von Punkten, die durch Linien verbunden sind). Alle anderen Formen müssen durch Kombination von einem oder mehreren Pfaden erstellt werden. Glücklicherweise haben wir eine Auswahl an Zeichenfunktionen für Pfade, die es erlauben, sehr komplexe Formen zu komponieren.

Beginnen wir mit dem Rechteck. Es gibt drei Funktionen, die Rechtecke auf dem Canvas zeichnen:

- {{domxref("CanvasRenderingContext2D.fillRect", "fillRect(x, y, width, height)")}}
  - : Zeichnet ein gefülltes Rechteck.
- {{domxref("CanvasRenderingContext2D.strokeRect", "strokeRect(x, y, width, height)")}}
  - : Zeichnet eine rechteckige Umrandung.
- {{domxref("CanvasRenderingContext2D.clearRect", "clearRect(x, y, width, height)")}}
  - : Löscht den angegebenen rechteckigen Bereich und macht ihn vollständig transparent.

Jede dieser drei Funktionen nimmt die gleichen Parameter. `x` und `y` bestimmen die Position auf dem Canvas (relativ zum Ursprung) der oberen linken Ecke des Rechtecks. `width` und `height` geben die Größe des Rechtecks an.

Unten ist die `draw()`-Funktion von der vorherigen Seite, aber jetzt wird sie mit diesen drei Funktionen genutzt.

### Beispiel für rechteckige Form

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

Die Funktion `fillRect()` zeichnet ein großes schwarzes Quadrat mit 100 Pixeln auf jeder Seite. Die Funktion `clearRect()` löscht dann ein 60x60 Pixel großes Quadrat aus der Mitte, und anschließend wird `strokeRect()` aufgerufen, um eine rechteckige Umrandung 50x50 Pixel innerhalb des gelöschten Quadrats zu erstellen.

Auf den nächsten Seiten sehen wir zwei alternative Methoden für `clearRect()`, und wir werden auch sehen, wie man die Farbe und Strichart der gerenderten Formen ändert.

Anders als die Pfadfunktionen, die wir im nächsten Abschnitt sehen werden, zeichnen alle drei Rechteckfunktionen sofort auf das Canvas.

## Zeichnen von Pfaden

Jetzt schauen wir uns Pfade an. Ein Pfad ist eine Liste von Punkten, die durch Segmente von Linien verbunden sind, die unterschiedliche Formen haben können, gebogen oder nicht, von unterschiedlicher Breite und verschiedener Farbe. Ein Pfad oder sogar ein Teilpfad kann geschlossen sein. Um Formen mit Pfaden zu erstellen, unternehmen wir einige zusätzliche Schritte:

1. Zuerst erstellen Sie den Pfad.
2. Dann verwenden Sie [Zeichenbefehle](/de/docs/Web/API/CanvasRenderingContext2D#paths), um in den Pfad zu zeichnen.
3. Nachdem der Pfad erstellt wurde, können Sie den Pfad umranden oder ausfüllen, um ihn zu rendern.

Hier sind die Funktionen, die zur Durchführung dieser Schritte verwendet werden:

- {{domxref("CanvasRenderingContext2D.beginPath", "beginPath()")}}
  - : Erstellt einen neuen Pfad. Nach der Erstellung werden künftige Zeichenbefehle in den Pfad geleitet und verwendet, um den Pfad aufzubauen.
- [Pfadmethoden](/de/docs/Web/API/CanvasRenderingContext2D#paths)
  - : Methoden, um verschiedene Pfade für Objekte festzulegen.
- {{domxref("CanvasRenderingContext2D.closePath", "closePath()")}}
  - : Fügt dem Pfad eine gerade Linie hinzu, die zum Start des aktuellen Unterpfads führt.
- {{domxref("CanvasRenderingContext2D.stroke", "stroke()")}}
  - : Zeichnet die Form, indem es ihre Umrandung umrandet.
- {{domxref("CanvasRenderingContext2D.fill", "fill()")}}
  - : Zeichnet eine feste Form, indem es den Inhaltsbereich des Pfades füllt.

Der erste Schritt, um einen Pfad zu erstellen, ist das Aufrufen von `beginPath()`. Intern werden Pfade als eine Liste von Teilpfaden (Linien, Bögen usw.) gespeichert, die zusammen eine Form bilden. Jedes Mal, wenn diese Methode aufgerufen wird, wird die Liste zurückgesetzt, und wir können neue Formen zeichnen.

> [!NOTE]
> Wenn der aktuelle Pfad leer ist, wie z. B. direkt nach dem Aufruf von `beginPath()` oder auf einem neu erstellten Canvas, wird der erste Befehl zur Pfaderzeugung immer als `moveTo()` behandelt, unabhängig davon, was er tatsächlich ist. Aus diesem Grund möchten Sie fast immer Ihre Startposition speziell festlegen, nachdem Sie einen Pfad zurückgesetzt haben.

Der zweite Schritt ist das Aufrufen der Methoden, die die zu zeichnenden Pfade tatsächlich spezifizieren. Wir werden diese in Kürze sehen.

Der dritte, und optional Schritt, ist das Aufrufen von `closePath()`. Diese Methode versucht, die Form zu schließen, indem sie eine gerade Linie vom aktuellen Punkt zum Startpunkt zieht. Wenn die Form bereits geschlossen ist oder nur ein Punkt in der Liste vorhanden ist, macht diese Funktion nichts.

> [!NOTE]
> Wenn Sie `fill()` aufrufen, werden alle offenen Formen automatisch geschlossen, sodass Sie `closePath()` nicht aufrufen müssen. Dies ist **nicht** der Fall, wenn Sie `stroke()` aufrufen.

### Zeichnen eines Dreiecks

Zum Beispiel würde der Code zum Zeichnen eines Dreiecks ungefähr so aussehen:

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

### Bewegen des Stifts

Eine sehr nützliche Funktion, die eigentlich nichts zeichnet, aber Teil der oben beschriebenen Pfadliste wird, ist die `moveTo()`-Funktion. Sie können dies wahrscheinlich am besten damit vergleichen, einen Stift oder Bleistift von einer Stelle auf einem Blatt Papier zu heben und ihn an die nächste Stelle zu setzen.

- {{domxref("CanvasRenderingContext2D.moveTo", "moveTo(x, y)")}}
  - : Bewegt den Stift zu den durch `x` und `y` angegebenen Koordinaten.

Wenn das Canvas initialisiert oder `beginPath()` aufgerufen wird, möchten Sie normalerweise die `moveTo()`-Funktion verwenden, um den Startpunkt an eine andere Stelle zu setzen. Wir könnten `moveTo()` auch verwenden, um unverbundene Pfade zu zeichnen. Schauen Sie sich das Smiley-Gesicht unten an.

Um dies selbst auszuprobieren, können Sie den untenstehenden Code-Snippet verwenden. Fügen Sie ihn einfach in die `draw()`-Funktion ein, die wir zuvor gesehen haben.

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
    ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Äußerer Kreis
    ctx.moveTo(110, 75);
    ctx.arc(75, 75, 35, 0, Math.PI, false); // Mund (im Uhrzeigersinn)
    ctx.moveTo(65, 65);
    ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // Linkes Auge
    ctx.moveTo(95, 65);
    ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // Rechtes Auge
    ctx.stroke();
  }
}
```

```js hidden
draw();
```

Das Ergebnis sieht wie folgt aus:

{{EmbedLiveSample("Moving_the_pen", "", "160")}}

Wenn Sie die Verbindungslinien sehen möchten, können Sie die Linien, die `moveTo()` aufrufen, entfernen.

> [!NOTE]
> Um mehr über die `arc()`-Funktion zu erfahren, siehe den Abschnitt [Bögen](#bögen) unten.

### Linien

Um gerade Linien zu zeichnen, verwenden Sie die `lineTo()`-Methode.

- {{domxref("CanvasRenderingContext2D.lineTo", "lineTo(x, y)")}}
  - : Zeichnet eine Linie von der aktuellen Zeichenposition zur durch `x` und `y` angegebenen Position.

Diese Methode nimmt zwei Argumente, `x` und `y`, die die Koordinaten des Endpunktes der Linie sind. Der Startpunkt hängt von zuvor gezeichneten Pfaden ab, wobei der Endpunkt des vorherigen Pfades der Startpunkt für den folgenden ist usw. Der Startpunkt kann auch durch die Verwendung der `moveTo()`-Methode geändert werden.

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

    // Gefülltes Dreieck
    ctx.beginPath();
    ctx.moveTo(25, 25);
    ctx.lineTo(105, 25);
    ctx.lineTo(25, 105);
    ctx.fill();

    // Umrandetes Dreieck
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

Dies beginnt mit dem Aufruf von `beginPath()`, um einen neuen Formpfad zu starten. Anschließend verwenden wir die `moveTo()`-Methode, um den Startpunkt an die gewünschte Position zu bewegen. Darunter werden zwei Linien gezeichnet, die zwei Seiten des Dreiecks bilden.

{{EmbedLiveSample("Lines", "", "160")}}

Sie werden den Unterschied zwischen dem gefüllten und dem umrandeten Dreieck bemerken. Das liegt, wie oben erwähnt, daran, dass Formen automatisch geschlossen werden, wenn ein Pfad gefüllt wird, aber nicht, wenn sie umrandet werden. Wenn wir `closePath()` für das umrandete Dreieck ausgelassen hätten, wären nur zwei Linien gezeichnet worden, nicht ein vollständiges Dreieck.

### Bögen

Um Bögen oder Kreise zu zeichnen, verwenden wir die Methoden `arc()` oder `arcTo()`.

- {{domxref("CanvasRenderingContext2D.arc", "arc(x, y, radius, startAngle, endAngle, counterclockwise)")}}
  - : Zeichnet einen Bogen, der am Punkt _(x, y)_ zentriert ist mit Radius _r_ beginnend bei _startAngle_ und endend bei _endAngle_ in der angegebenen Richtung, die durch _counterclockwise_ angegeben wird (Standard: im Uhrzeigersinn).
- {{domxref("CanvasRenderingContext2D.arcTo", "arcTo(x1, y1, x2, y2, radius)")}}
  - : Zeichnet einen Bogen mit den gegebenen Kontrollpunkten und dem Radius, verbunden mit dem vorherigen Punkt durch eine gerade Linie.

Lassen Sie uns einen genaueren Blick auf die `arc`-Methode werfen, die sechs Parameter benötigt: `x` und `y` sind die Koordinaten des Zentrums des Kreises, auf dem der Bogen gezeichnet werden soll. `radius` ist selbsterklärend. Die Parameter `startAngle` und `endAngle` definieren die Start- und Endpunkte des Bogens in Radiant, entlang der Kreislinie. Diese werden von der x-Achse aus gemessen. Der Parameter `counterclockwise` ist ein Boolean-Wert, der, wenn `true`, den Bogen gegen den Uhrzeigersinn zeichnet; andernfalls wird der Bogen im Uhrzeigersinn gezeichnet.

> [!NOTE]
> Winkel in der `arc`-Funktion werden in Radiant und nicht in Grad gemessen. Um Grad in Radiant umzurechnen, können Sie den folgenden JavaScript-Ausdruck verwenden: `radians = (Math.PI/180)*degrees`.

Das folgende Beispiel ist etwas komplexer als die, die wir oben gesehen haben. Es zeichnet 12 verschiedene Bögen, alle mit unterschiedlichen Winkeln und Füllungen.

Die beiden [`for`-Schleifen](/de/docs/Web/JavaScript/Reference/Statements/for) sind dazu da, um durch die Reihen und Spalten der Bögen zu gehen. Für jeden Bogen beginnen wir einen neuen Pfad, indem `beginPath()` aufgerufen wird. Im Code befindet sich jeder der Parameter für den Bogen in einer Variablen zur besseren Übersichtlichkeit, aber in der Praxis würden Sie das nicht zwingend tun.

Die `x`- und `y`-Koordinaten sollten klar genug sein. `radius` und `startAngle` sind fest. Der `endAngle` beginnt bei 180 Grad (halber Kreis) in der ersten Spalte und wird durch Schritte von 90 Grad erhöht, bis er in der letzten Spalte einen vollständigen Kreis bildet.

Die Anweisung für den Parameter `clockwise` führt dazu, dass die erste und dritte Reihe im Uhrzeigersinn gezeichnet werden und die zweite und vierte Reihe gegen den Uhrzeigersinn. Schließlich sorgt die `if`-Anweisung dafür, dass die obere Hälfte umrandete Bögen und die untere Hälfte gefüllte Bögen hat.

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
        const x = 25 + j * 50; // x-Koordinate
        const y = 25 + i * 50; // y-Koordinate
        const radius = 20; // Bogenradius
        const startAngle = 0; // Startpunkt auf dem Kreis
        const endAngle = Math.PI + (Math.PI * j) / 2; // Endpunkt auf dem Kreis
        const counterclockwise = i % 2 !== 0; // im Uhrzeigersinn oder gegen den Uhrzeigersinn

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

Der nächste verfügbare Pfadtyp sind [Bézier-Kurven](/de/docs/Glossary/Bezier_curve), die sowohl in kubischen als auch quadratischen Varianten verfügbar sind. Diese werden im Allgemeinen verwendet, um komplexe organische Formen zu zeichnen.

- {{domxref("CanvasRenderingContext2D.quadraticCurveTo", "quadraticCurveTo(cp1x, cp1y, x, y)")}}
  - : Zeichnet eine quadratische Bézier-Kurve von der aktuellen Stiftposition zum Endpunkt, der durch `x` und `y` angegeben ist, unter Verwendung des Kontrollpunkts, der durch `cp1x` und `cp1y` angegeben ist.
- {{domxref("CanvasRenderingContext2D.bezierCurveTo", "bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)")}}
  - : Zeichnet eine kubische Bézier-Kurve von der aktuellen Stiftposition zum Endpunkt, der durch `x` und `y` angegeben ist, unter Verwendung der Kontrollpunkte, die durch (`cp1x`, `cp1y`) und (`cp2x`, `cp2y`) angegeben sind.

Der Unterschied zwischen diesen besteht darin, dass eine quadratische Bézier-Kurve einen Start- und einen Endpunkt (blaue Punkte) und nur einen **Kontrollpunkt** (angezeigt durch den roten Punkt) hat, während eine kubische Bézier-Kurve zwei Kontrollpunkte verwendet.
![Vergleich von quadratischer und Bézier-Kurve.](canvas_curves.png)

Die `x`- und `y`-Parameter in beiden Methoden sind die Koordinaten des Endpunkts. `cp1x` und `cp1y` sind die Koordinaten des ersten Kontrollpunkts, und `cp2x` und `cp2y` sind die Koordinaten des zweiten Kontrollpunkts.

Die Verwendung von quadratischen und kubischen Bézier-Kurven kann ziemlich herausfordernd sein, weil wir im Gegensatz zu Vektorzeichensoftware wie Adobe Illustrator kein direktes visuelles Feedback darüber haben, was wir tun. Das macht es ziemlich schwierig, komplexe Formen zu zeichnen. Im folgenden Beispiel zeichnen wir einige einfache organische Formen, aber wenn Sie Zeit und vor allem Geduld haben, können viel komplexere Formen erstellt werden.

Es gibt nichts sehr Schwieriges in diesen Beispielen. In beiden Fällen sehen wir eine Abfolge von Kurven, die gezeichnet werden und schließlich zu einer vollständigen Form führen.

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

    // Beispiel quadratischer Kurven
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

Dieses Beispiel zeichnet mit kubischen Bézier-Kurven ein Herz.

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

    // Beispiel kubischer Kurven
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

Zusätzlich zu den drei Methoden, die wir bei [Zeichnen von Rechtecken](#zeichnen_von_rechtecken) gesehen haben, die rechteckige Formen direkt auf das Canvas zeichnen, gibt es auch die `rect()`-Methode, die einen rechteckigen Pfad zu einem derzeit geöffneten Pfad hinzufügt.

- {{domxref("CanvasRenderingContext2D.rect", "rect(x, y, width, height)")}}
  - : Zeichnet ein Rechteck, dessen obere linke Ecke durch (`x`, `y`) mit der angegebenen `width` und `height` spezifiziert wird.

Bevor diese Methode ausgeführt wird, wird automatisch die `moveTo()`-Methode mit den Parametern (x,y) aufgerufen. Mit anderen Worten, die aktuelle Stiftposition wird automatisch auf die Standardkoordinaten zurückgesetzt.

### Kombinieren von Formen

Bisher hat jedes Beispiel auf dieser Seite nur einen Pfadtyp pro Form verwendet. Es gibt jedoch keine Einschränkung hinsichtlich der Anzahl oder Arten von Pfaden, die Sie verwenden können, um eine Form zu erstellen. In diesem letzten Beispiel kombinieren wir alle Pfadfunktionen, um eine Gruppe sehr berühmter Spielcharaktere zu erzeugen.

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

// Eine Hilfsfunktion, um ein Rechteck mit abgerundeten Ecken zu zeichnen.

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

Das resultierende Bild sieht wie folgt aus:

{{EmbedLiveSample("Making_combinations", "", "200")}}

Wir werden das hier nicht im Detail durchgehen, da es tatsächlich überraschend einfach ist. Das Wichtigste zu beachten ist die Verwendung der Eigenschaft `fillStyle` auf dem Zeichenkontext und die Verwendung einer Hilfsfunktion (in diesem Fall `roundedRect()`). Die Verwendung von Hilfsfunktionen für Zeichenteile, die Sie oft ausführen, kann sehr hilfreich sein und den benötigten Code reduzieren sowie dessen Komplexität.

Wir werden uns `fillStyle` später in diesem Tutorial noch einmal genauer anschauen. Hier verwenden wir es nur, um die Füllfarbe für Pfade von der Standardfarbe Schwarz auf Weiß zu ändern und dann wieder zurück.

### Formen mit Löchern

Um eine Form mit einem Loch darin zu zeichnen, müssen wir das Loch in unterschiedlichen Uhrzeigerrichtungen zeichnen, wie wir die äußere Form zeichnen. Entweder zeichnen wir die äußere Form im Uhrzeigersinn und die innere Form gegen den Uhrzeigersinn oder die äußere Form gegen den Uhrzeigersinn und die innere Form im Uhrzeigersinn.

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

    // Äußere Form im Uhrzeigersinn ⟳
    ctx.moveTo(0, 0);
    ctx.lineTo(150, 0);
    ctx.lineTo(75, 129.9);

    // Innere Form gegen den Uhrzeigersinn ↺
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

Im obigen Beispiel geht das äußere Dreieck im Uhrzeigersinn (bewegen Sie sich in die obere linke Ecke, dann zeichnen Sie eine Linie zur oberen rechten Ecke und enden Sie unten), und das innere Dreieck geht gegen den Uhrzeigersinn (bewegen Sie sich nach oben, dann Linie zur unteren linken Ecke und enden Sie an der unteren rechten).

## Path2D-Objekte

Wie wir im letzten Beispiel gesehen haben, kann es eine Reihe von Pfaden und Zeichenbefehlen geben, um Objekte auf Ihr Canvas zu zeichnen. Um den Code zu vereinfachen und die Leistung zu verbessern, lässt das {{domxref("Path2D")}}-Objekt, das in den neuesten Versionen der Browser verfügbar ist, Sie diese Zeichenbefehle zwischenspeichern oder aufzeichnen. Sie können Ihre Pfade schnell wiedergeben.
Lassen Sie uns sehen, wie wir ein `Path2D`-Objekt konstruieren können:

- {{domxref("Path2D.Path2D", "Path2D()")}}
  - : Der **`Path2D()`**-Konstruktor gibt ein neu instanziiertes `Path2D`-Objekt zurück, optional mit einem anderen Pfad als Argument (erstellt eine Kopie), oder optional mit einem String bestehend aus [SVG-Pfaddaten](/de/docs/Web/SVG/Tutorial/Paths).

```js
new Path2D(); // leeres Pfadobjekt
new Path2D(path); // Kopie aus einem anderen Path2D-Objekt
new Path2D(d); // Pfad aus SVG-Pfaddaten
```

Alle [Pfadmethoden](/de/docs/Web/API/CanvasRenderingContext2D#paths) wie `moveTo`, `rect`, `arc` oder `quadraticCurveTo` usw., die wir oben kennengelernt haben, sind auf `Path2D`-Objekten verfügbar.

Die `Path2D`-API fügt auch eine Methode hinzu, um Pfade mit der `addPath`-Methode zu kombinieren. Dies kann nützlich sein, wenn Sie Objekte aus mehreren Komponenten bauen möchten, zum Beispiel.

- {{domxref("Path2D.addPath", "Path2D.addPath(path [, transform])")}}
  - : Fügt einen Pfad zum aktuellen Pfad mit einer optionalen Transformationsmatrix hinzu.

### Path2D-Beispiel

In diesem Beispiel erstellen wir ein Rechteck und einen Kreis. Beide werden als `Path2D`-Objekt gespeichert, sodass sie für die spätere Verwendung verfügbar sind. Mit der neuen `Path2D`-API wurden mehrere Methoden aktualisiert, um optional ein `Path2D`-Objekt anstelle des aktuellen Pfades zu akzeptieren. Hier werden `stroke` und `fill` mit einem Pfadargument verwendet, um beide Objekte auf das Canvas zu zeichnen, zum Beispiel.

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

Eine weitere leistungsstarke Funktion der neuen Canvas-`Path2D`-API ist die Verwendung von [SVG-Pfaddaten](/de/docs/Web/SVG/Tutorial/Paths), um Pfade auf Ihrem Canvas zu initialisieren. Dies könnte es Ihnen ermöglichen, Pfaddaten weiterzugeben und sowohl in SVG als auch Canvas wiederzuverwenden.

Der Pfad wird sich zu Punkt (`M10 10`) bewegen und dann horizontal 80 Punkte nach rechts (`h 80`), dann 80 Punkte nach unten (`v 80`), dann 80 Punkte nach links (`h -80`) und schließlich zurück zum Anfang (`z`) bewegen. Sie können dieses Beispiel auf der Seite [`Path2D`-Konstruktor](/de/docs/Web/API/Path2D/Path2D#using_svg_paths) sehen.

```js
const p = new Path2D("M10 10 h 80 v 80 h -80 Z");
```

{{PreviousNext("Web/API/Canvas_API/Tutorial/Basic_usage", "Web/API/Canvas_API/Tutorial/Applying_styles_and_colors")}}
