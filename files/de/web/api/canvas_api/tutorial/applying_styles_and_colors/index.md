---
title: Anwenden von Stilen und Farben
slug: Web/API/Canvas_API/Tutorial/Applying_styles_and_colors
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Drawing_shapes", "Web/API/Canvas_API/Tutorial/Drawing_text")}}

Im Kapitel über das [Zeichnen von Formen](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes) haben wir nur die Standardlinien- und Füllstile verwendet. Hier werden wir die Canvas-Optionen erkunden, die uns zur Verfügung stehen, um unsere Zeichnungen etwas attraktiver zu gestalten. Sie werden lernen, wie man verschiedene Farben, Linienstile, Verläufe, Muster und Schatten zu Ihren Zeichnungen hinzufügt.

> [!NOTE]
> Canvas-Inhalte sind für Screenreader nicht zugänglich. Wenn das Canvas rein dekorativ ist, fügen Sie `role="presentation"` im öffnenden `<canvas>`-Tag hinzu. Andernfalls fügen Sie einen beschreibenden Text als Wert des [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)-Attributs direkt beim Canvas-Element hinzu oder platzieren Sie einen Fallback-Inhalt innerhalb des öffnenden und schließenden Canvas-Tags. Canvas-Inhalte sind nicht Teil des DOM, aber verschachtelte Fallback-Inhalte sind es.

## Farben

Bis jetzt haben wir nur Methoden des Zeichnungskontexts gesehen. Wenn wir Farben auf eine Form anwenden möchten, gibt es zwei wichtige Eigenschaften, die wir nutzen können: `fillStyle` und `strokeStyle`.

- [`fillStyle = color`](/de/docs/Web/API/CanvasRenderingContext2D/fillStyle)
  - : Legt den Stil fest, der beim Füllen von Formen verwendet wird.
- [`strokeStyle = color`](/de/docs/Web/API/CanvasRenderingContext2D/strokeStyle)
  - : Legt den Stil für die Umrisse von Formen fest.

`color` ist ein String, der eine CSS-{{cssxref("&lt;color&gt;")}}, ein Verlauf-Objekt oder ein Muster-Objekt darstellt. Auf Verlauf- und Musterobjekte werden wir später eingehen. Standardmäßig sind die Strich- und Füllfarbe auf Schwarz gesetzt (CSS-Farbwert `#000000`).

> [!NOTE]
> Wenn Sie die Eigenschaft `strokeStyle` und/oder `fillStyle` setzen, wird der neue Wert zum Standard für alle Formen, die von da an gezeichnet werden. Für jede Form, die Sie in einer anderen Farbe möchten, müssen Sie die Eigenschaft `fillStyle` oder `strokeStyle` neu zuweisen.

Die gültigen Strings, die Sie eingeben können, sollten laut Spezifikation CSS-{{cssxref("&lt;color&gt;")}}-Werte sein. Jedes der folgenden Beispiele beschreibt dieselbe Farbe.

```js
// these all set the fillStyle to 'orange'

ctx.fillStyle = "orange";
ctx.fillStyle = "#FFA500";
ctx.fillStyle = "rgb(255 165 0)";
ctx.fillStyle = "rgb(255 165 0 / 100%)";
```

### Ein Beispiel für `fillStyle`

In diesem Beispiel verwenden wir erneut zwei `for`-Schleifen, um ein Raster von Rechtecken zu zeichnen, jedes in einer anderen Farbe. Das resultierende Bild sollte etwa so aussehen wie der Screenshot. Hier passiert nichts allzu Spektakuläres. Wir verwenden die beiden Variablen `i` und `j`, um eine eindeutige RGB-Farbe für jedes Quadrat zu erzeugen, und ändern nur die roten und grünen Werte. Der blaue Kanal hat einen festen Wert. Durch das Modifizieren der Kanäle können Sie alle Arten von Paletten erzeugen. Durch das Erhöhen der Schritte können Sie etwas erreichen, das aussieht wie die Farbpalletten, die Photoshop verwendet.

```js
function draw() {
  const ctx = document.getElementById("canvas").getContext("2d");
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
      ctx.fillStyle = `rgb(${Math.floor(255 - 42.5 * i)} ${Math.floor(
        255 - 42.5 * j,
      )} 0)`;
      ctx.fillRect(j * 25, i * 25, 25, 25);
    }
  }
}
```

```html hidden
<canvas id="canvas" width="150" height="150"
  >A 6 by 6 square grid displaying 36 different colors</canvas
>
```

```js hidden
draw();
```

Das Ergebnis sieht so aus:

{{EmbedLiveSample("A_fillStyle_example", "", "160")}}

### Ein Beispiel für `strokeStyle`

Dieses Beispiel ist dem oben genannten ähnlich, verwendet jedoch die Eigenschaft `strokeStyle`, um die Farben der Umrisse der Formen zu ändern. Wir verwenden die Methode `arc()`, um Kreise statt Quadrate zu zeichnen.

```js
function draw() {
  const ctx = document.getElementById("canvas").getContext("2d");
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
      ctx.strokeStyle = `rgb(0 ${Math.floor(255 - 42.5 * i)} ${Math.floor(
        255 - 42.5 * j,
      )})`;
      ctx.beginPath();
      ctx.arc(12.5 + j * 25, 12.5 + i * 25, 10, 0, 2 * Math.PI, true);
      ctx.stroke();
    }
  }
}
```

```html hidden
<canvas id="canvas" width="150" height="150" role="presentation"></canvas>
```

```js hidden
draw();
```

Das Ergebnis sieht so aus:

{{EmbedLiveSample("A_strokeStyle_example", "", "160")}}

## Transparenz

Zusätzlich zum Zeichnen opaker Formen auf dem Canvas können wir auch halbtransparente (oder durchscheinende) Formen zeichnen. Dies geschieht entweder durch Setzen der Eigenschaft `globalAlpha` oder durch Zuweisen einer halbtransparenten Farbe zum Strich- und/oder Füllstil.

- [`globalAlpha = transparencyValue`](/de/docs/Web/API/CanvasRenderingContext2D/globalAlpha)
  - : Wendet den angegebenen Transparenzwert auf alle zukünftigen gezeichneten Formen auf dem Canvas an. Der Wert muss zwischen 0,0 (vollständig transparent) und 1,0 (vollständig undurchsichtig) liegen. Dieser Wert ist standardmäßig auf 1,0 (vollständig undurchsichtig) gesetzt.

Die Eigenschaft `globalAlpha` kann nützlich sein, wenn Sie viele Formen auf dem Canvas mit ähnlicher Transparenz zeichnen möchten, aber es ist im Allgemeinen nützlicher, die Transparenz einzelner Formen festzulegen, wenn Sie deren Farben einstellen.

Da die Eigenschaften `strokeStyle` und `fillStyle` CSS-RGB-Farbwerte akzeptieren, können wir die folgende Notation verwenden, um ihnen eine transparente Farbe zuzuweisen.

```js
// Assigning transparent colors to stroke and fill style

ctx.strokeStyle = "rgb(255 0 0 / 50%)";
ctx.fillStyle = "rgb(255 0 0 / 50%)";
```

Die Funktion `rgb()` hat einen optionalen zusätzlichen Parameter. Der letzte Parameter setzt den Transparenzwert dieser bestimmten Farbe. Der gültige Bereich ist als Prozentsatz zwischen `0%` (vollständig transparent) und `100%` (vollständig undurchsichtig) oder als Zahl zwischen `0.0` (entspricht `0%`) und `1.0` (entspricht `100%`) angegeben.

### Ein Beispiel für `globalAlpha`

In diesem Beispiel zeichnen wir einen Hintergrund aus vier verschiedenfarbigen Quadraten. Darüber werden wir einen Satz von halbtransparenten Kreisen zeichnen. Die Eigenschaft `globalAlpha` ist auf `0,2` gesetzt und wird für alle Formen ab diesem Punkt verwendet. Jeder Schritt in der `for`-Schleife zeichnet einen Satz von Kreisen mit wachsendem Radius. Das Endergebnis ist ein radialer Verlauf. Durch das Überlagern immer weiterer Kreise einander wird effektiv die Transparenz der bereits gezeichneten Kreise reduziert. Durch Erhöhen der Schrittzahl und damit Zeichnen weiterer Kreise würde der Hintergrund vollständig aus der Mitte des Bildes verschwinden.

```js
function draw() {
  const ctx = document.getElementById("canvas").getContext("2d");
  // draw background
  ctx.fillStyle = "#FD0";
  ctx.fillRect(0, 0, 75, 75);
  ctx.fillStyle = "#6C0";
  ctx.fillRect(75, 0, 75, 75);
  ctx.fillStyle = "#09F";
  ctx.fillRect(0, 75, 75, 75);
  ctx.fillStyle = "#F30";
  ctx.fillRect(75, 75, 75, 75);
  ctx.fillStyle = "#FFF";

  // set transparency value
  ctx.globalAlpha = 0.2;

  // Draw semi transparent circles
  for (let i = 0; i < 7; i++) {
    ctx.beginPath();
    ctx.arc(75, 75, 10 + 10 * i, 0, Math.PI * 2, true);
    ctx.fill();
  }
}
```

```html hidden
<canvas id="canvas" width="150" height="150" role="presentation"></canvas>
```

```js hidden
draw();
```

{{EmbedLiveSample("A_globalAlpha_example", "", "160")}}

### Ein Beispiel mit `rgb()` und Alphatransparenz

In diesem zweiten Beispiel machen wir etwas Ähnliches wie im vorherigen, jedoch anstatt Kreise übereinander zu zeichnen, habe ich kleine Rechtecke mit zunehmender Deckkraft gezeichnet. Die Verwendung von `rgb()` gibt Ihnen ein wenig mehr Kontrolle und Flexibilität, da wir den Füll- und Strichstil individuell festlegen können.

```js
function draw() {
  const ctx = document.getElementById("canvas").getContext("2d");

  // Draw background
  ctx.fillStyle = "rgb(255 221 0)";
  ctx.fillRect(0, 0, 150, 37.5);
  ctx.fillStyle = "rgb(102 204 0)";
  ctx.fillRect(0, 37.5, 150, 37.5);
  ctx.fillStyle = "rgb(0 153 255)";
  ctx.fillRect(0, 75, 150, 37.5);
  ctx.fillStyle = "rgb(255 51 0)";
  ctx.fillRect(0, 112.5, 150, 37.5);

  // Draw semi transparent rectangles
  for (let i = 0; i < 10; i++) {
    ctx.fillStyle = `rgb(255 255 255 / ${(i + 1) / 10})`;
    for (let j = 0; j < 4; j++) {
      ctx.fillRect(5 + i * 14, 5 + j * 37.5, 14, 27.5);
    }
  }
}
```

```html hidden
<canvas id="canvas" width="150" height="150" role="presentation"></canvas>
```

```js hidden
draw();
```

{{EmbedLiveSample("An_example_using_rgb_with_alpha_transparency", "", "160")}}

## Linienstile

Es gibt mehrere Eigenschaften, die es uns ermöglichen, Linien zu stylen.

- [`lineWidth = value`](/de/docs/Web/API/CanvasRenderingContext2D/lineWidth)
  - : Legt die Breite der zukünftig gezeichneten Linien fest.
- [`lineCap = type`](/de/docs/Web/API/CanvasRenderingContext2D/lineCap)
  - : Legt das Erscheinungsbild der Enden von Linien fest.
- [`lineJoin = type`](/de/docs/Web/API/CanvasRenderingContext2D/lineJoin)
  - : Legt das Erscheinungsbild der "Ecken" fest, an denen sich Linien treffen.
- [`miterLimit = value`](/de/docs/Web/API/CanvasRenderingContext2D/miterLimit)
  - : Legt eine Grenze für das Miter fest, wenn zwei Linien sich in einem scharfen Winkel verbinden, um zu kontrollieren, wie dick die Verbindung wird.
- [`getLineDash()`](/de/docs/Web/API/CanvasRenderingContext2D/getLineDash)
  - : Gibt das aktuelle Liniendash-Musterarray zurück, das eine gerade Anzahl nicht-negativer Zahlen enthält.
- [`setLineDash(segments)`](/de/docs/Web/API/CanvasRenderingContext2D/setLineDash)
  - : Legt das aktuelle Liniendash-Muster fest.
- [`lineDashOffset = value`](/de/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)
  - : Legt fest, an welchem Punkt des Dashmusters auf einer Linie begonnen wird.

Sie werden ein besseres Verständnis dafür bekommen, was diese Eigenschaften bewirken, wenn Sie sich die folgenden Beispiele ansehen.

### Ein Beispiel für `lineWidth`

Diese Eigenschaft legt die aktuelle Linienstärke fest. Werte müssen positive Zahlen sein. Standardmäßig ist dieser Wert auf 1,0 Einheiten gesetzt.

Die Linienbreite ist die Dicke des Strichs, der zentriert auf dem angegebenen Pfad liegt. Mit anderen Worten, der gezeichnete Bereich erstreckt sich um die Hälfte der Linienbreite auf jeder Seite des Pfades. Da Canvas-Koordinaten keine Pixel direkt referenzieren, muss besondere Sorgfalt aufgewendet werden, um scharfe horizontale und vertikale Linien zu erhalten.

Im Beispiel unten werden 10 gerade Linien mit zunehmenden Linienbreiten gezeichnet. Die Linie ganz links ist 1,0 Einheiten breit. Die ganz links und alle anderen Dicken mit ungeraden Zahlen sehen jedoch nicht scharf aus, da die Position des Pfades nicht korrekt ist.

```js
function draw() {
  const ctx = document.getElementById("canvas").getContext("2d");
  for (let i = 0; i < 10; i++) {
    ctx.lineWidth = 1 + i;
    ctx.beginPath();
    ctx.moveTo(5 + i * 14, 5);
    ctx.lineTo(5 + i * 14, 140);
    ctx.stroke();
  }
}
```

```html hidden
<canvas id="canvas" width="150" height="150" role="presentation"></canvas>
```

```js hidden
draw();
```

{{EmbedLiveSample("A_lineWidth_example", "", "160")}}

Scharfe Linien zu erhalten erfordert das Verständnis, wie Pfade gestrichen werden. In den Bildern unten repräsentiert das Raster das Canvas-Koordinatenraster. Die Quadrate zwischen den Rasterlinien sind tatsächliche On-Screen-Pixel. Im ersten Rasterbild unten wird ein Rechteck von (2,1) bis (5,5) gefüllt. Der gesamte Bereich dazwischen (hellrot) fällt auf Pixelgrenzen, sodass das resultierende gefüllte Rechteck scharfe Kanten hat.

![Drei Koordinatengitter. Die Gitterlinien sind aktuelle Bildschirm-Pixel. Die obere linke Ecke jedes Gitters ist mit (0,0) gekennzeichnet. Im ersten Gitter ist ein Rechteck von (2,1) bis (5,5) in hellroter Farbe gefüllt. Im zweiten Gitter ist eine Linie von (3,1) bis (3,5) mit einer Breite von 1-Pixel in königsblauer Farbe gezeichnet. Die königsblaue Linie ist zentriert auf einer Gitterlinie, erstreckt sich von 2,5 bis 3,5 auf der x-Achse, halb in die Pixel auf beiden Seiten der Grafikkarte hinein, mit einem hellblauen Hintergrund auf beiden Seiten von 2 bis 4 auf der x-Achse. Um die hellblaue Verwischungserweiterung der Linie im zweiten Koordinatengitter zu vermeiden, ist der Pfad im dritten Koordinatengitter eine königsblaue Linie von (3,5,1) bis (3,5,5). Die 1-Pixel-Linienbreite füllt am Ende eine einzelne vertikale Pixelreihe vollständig aus.](canvas-grid.png)

Wenn Sie einen Pfad von (3,1) bis (3,5) mit einer Linienstärke von `1.0` betrachten, haben Sie die Situation im zweiten Bild. Der tatsächliche Bereich, der gefüllt werden soll (dunkelblau), erstreckt sich nur halb in die Pixel auf beiden Seiten des Pfades hinein. Eine Annäherung daran muss gerendert werden, was bedeutet, dass diese Pixel nur teilweise gefärbt werden, und dies führt dazu, dass der gesamte Bereich (das hellblaue und dunkelblaue) mit einer Farbe gefüllt wird, die nur halb so dunkel ist wie die tatsächliche Strichfarbe. Dies ist das, was bei der `1.0`-Breite-Linie im vorherigen Beispielcode passiert.

Um dies zu beheben, müssen Sie sehr präzise bei der Pfaderstellung sein. Wenn Sie wissen, dass eine `1.0`-Breite-Linie sich um jeweils eine halbe Einheit auf beiden Seiten des Pfades erstreckt, ergibt das Erstellen des Pfades von (3.5,1) bis (3.5,5) die Situation im dritten Bild - die `1.0`-Linienbreite füllt am Ende vollständig und präzise eine einzelne vertikale Pixelreihe.

> [!NOTE]
> Beachten Sie, dass bei unserem Beispiel der vertikalen Linie die Y-Position immer noch auf eine ganzzahlige Gitterlinienposition referenziert wird - wäre dies nicht der Fall, würden wir Pixel mit halber Abdeckung an den Endpunkten sehen (aber beachten Sie auch, dass dieses Verhalten vom aktuellen `lineCap`-Stil abhängt, dessen Standardwert `butt` ist; möglicherweise möchten Sie konsistente Striche mit halben Pixelkoordinaten für ungerade Breitenlinien berechnen, indem Sie den `lineCap`-Stil auf `square` einstellen, sodass die äußere Grenze des Strichs um den Endpunkt automatisch erweitert wird, um genau das ganze Pixel abzudecken).
>
> Beachten Sie auch, dass nur der Start- und Endendpunkt eines Pfades betroffen ist: Wenn ein Pfad mit `closePath()` geschlossen wird, gibt es keinen Start- und Endendpunkt; stattdessen werden alle Endpunkte im Pfad mit ihrem angebundenen vorhergehenden und nachfolgenden Segment unter Verwendung der aktuellen Einstellung des `lineJoin`-Stils verbunden, dessen Standardwert `miter` ist, mit dem Effekt, die äußeren Ränder der verbundenen Segmente automatisch zu ihrem Schnittpunkt zu erweitern, sodass der gerenderte Strich genau volle Pixel in den Endpunkten abdeckt, wenn diese verbundenen Segmente horizontal und/oder vertikal sind. Siehe die nächsten beiden Abschnitte für Demonstrationen dieser zusätzlichen Linienstile.

Für Linien mit gerader Breite fällt jede Hälfte am Ende in eine ganzzahlige Anzahl von Pixeln, sodass Sie einen Pfad wählen möchten, der zwischen den Pixeln liegt (d.h. (3,1) bis (3,5)), anstatt mitten durch die Pixel.

Auch wenn dies anfangs etwas mühsam ist, wenn Sie mit skalierbaren 2D-Grafiken arbeiten, stellt das Beachten des Pixelrasters und die Position der Pfade sicher, dass Ihre Zeichnungen unabhängig von Skalierung oder anderen involvierten Transformationen korrekt aussehen. Eine vertikale Linie mit 1.0-Breite, die an der richtigen Position gezeichnet wird, wird bei einer Skalierung um 2 zu einer scharfen 2-Pixel-Linie und erscheint an der richtigen Position.

### Ein Beispiel für `lineCap`

Die Eigenschaft `lineCap` bestimmt, wie die Endpunkte jeder Linie gezeichnet werden. Es gibt drei mögliche Werte für diese Eigenschaft: `butt`, `round` und `square`. Standardmäßig ist diese Eigenschaft auf `butt` gesetzt:

- `butt`
  - : Die Enden der Linien werden an den Endpunkten abgeschnitten.
- `round`
  - : Die Enden der Linien sind abgerundet.
- `square`
  - : Die Enden der Linien werden durch ein Quadrat abgekantet, das dieselbe Breite und die Hälfte der Linienbreite als Höhe hat.

In diesem Beispiel zeichnen wir drei Linien, jede mit einem anderen Wert für die `lineCap`-Eigenschaft. Ich habe auch zwei Leitlinien hinzugefügt, um die genauen Unterschiede zwischen den dreien zu sehen. Jede dieser Linien beginnt und endet genau auf diesen Leitlinien.

Die Linie ganz links verwendet die Standardoption `butt`. Sie werden feststellen, dass sie vollständig bündig mit den Leitlinien gezeichnet wird. Die zweite ist auf die Option `round` gesetzt. Dies fügt dem Ende einen Halbkreis hinzu, dessen Radius die Hälfte der Linienbreite beträgt. Die Linie ganz rechts verwendet die Option `square`. Dies fügt ein Quadrat hinzu, dessen Breite gleich der Linienbreite und dessen Höhe der Hälfte der Linienbreite entspricht.

```js
function draw() {
  const ctx = document.getElementById("canvas").getContext("2d");

  // Draw guides
  ctx.strokeStyle = "#09f";
  ctx.beginPath();
  ctx.moveTo(10, 10);
  ctx.lineTo(140, 10);
  ctx.moveTo(10, 140);
  ctx.lineTo(140, 140);
  ctx.stroke();

  // Draw lines
  ctx.strokeStyle = "black";
  ["butt", "round", "square"].forEach((lineCap, i) => {
    ctx.lineWidth = 15;
    ctx.lineCap = lineCap;
    ctx.beginPath();
    ctx.moveTo(25 + i * 50, 10);
    ctx.lineTo(25 + i * 50, 140);
    ctx.stroke();
  });
}
```

```html hidden
<canvas id="canvas" width="150" height="150" role="presentation"></canvas>
```

```js hidden
draw();
```

{{EmbedLiveSample("A_lineCap_example", "", "160")}}

### Ein Beispiel für `lineJoin`

Die Eigenschaft `lineJoin` bestimmt, wie zwei verbundene Segmente (von Linien, Bögen oder Kurven) mit nicht-null Längen in einer Form zusammengefügt werden (degenerierte Segmente mit null Längen, deren spezifizierte Endpunkte und Kontrollpunkte genau an derselben Position sind, werden übersprungen).

Es gibt drei mögliche Werte für diese Eigenschaft: `round`, `bevel` und `miter`. Standardmäßig ist diese Eigenschaft auf `miter` gesetzt. Beachten Sie, dass die Einstellung `lineJoin` keine Wirkung hat, wenn die beiden verbundenen Segmente dieselbe Richtung haben, da in diesem Fall kein Verbindungsbereich hinzugefügt wird:

- `round`
  - : Rundet die Ecken einer Form ab, indem ein zusätzlicher Kreisausschnitt gefüllt wird, der am gemeinsamen Endpunkt der verbundenen Segmente zentriert ist. Der Radius für diese abgerundeten Ecken entspricht der Hälfte der Linienbreite.
- `bevel`
  - : Füllt einen zusätzlichen dreieckigen Bereich zwischen dem gemeinsamen Endpunkt der verbundenen Segmente und den getrennten äußeren rechtwinkligen Ecken jedes Segments.
- `miter`
  - : Verbundene Segmente werden verbunden, indem ihre äußeren Ränder so verlängert werden, dass sie sich an einem Punkt verbinden, mit dem Effekt, dass ein zusätzlicher rautenförmiger Bereich gefüllt wird. Diese Einstellung wird durch die Eigenschaft `miterLimit` beeinflusst, die unten erklärt wird.

Das untenstehende Beispiel zeichnet drei verschiedene Pfade und demonstriert jede der drei `lineJoin`-Eigenschaftseinstellungen. Die Ausgabe ist oben dargestellt.

```js
function draw() {
  const ctx = document.getElementById("canvas").getContext("2d");
  ctx.lineWidth = 10;
  ["round", "bevel", "miter"].forEach((lineJoin, i) => {
    ctx.lineJoin = lineJoin;
    ctx.beginPath();
    ctx.moveTo(-5, 5 + i * 40);
    ctx.lineTo(35, 45 + i * 40);
    ctx.lineTo(75, 5 + i * 40);
    ctx.lineTo(115, 45 + i * 40);
    ctx.lineTo(155, 5 + i * 40);
    ctx.stroke();
  });
}
```

```html hidden
<canvas id="canvas" width="150" height="150" role="presentation"></canvas>
```

```js hidden
draw();
```

{{EmbedLiveSample("A_lineJoin_example", "", "160")}}

### Eine Demonstration der `miterLimit`-Eigenschaft

Wie Sie im vorherigen Beispiel gesehen haben, werden die äußeren Ränder der beiden verbundenden Linien beim Verbinden mit der Option `miter` verlängert, bis zu dem Punkt, an dem sie sich treffen. Bei Linien, die sich in großen Winkeln zueinander befinden, ist dieser Punkt nicht weit vom inneren Verbindungspunkt entfernt. Wenn jedoch die Winkel zwischen den Linien abnehmen, nimmt der Abstand (Miterlänge) zwischen diesen Punkten exponentiell zu.

Die Eigenschaft `miterLimit` bestimmt, wie weit der äußere Verbindungspunkt vom inneren Verbindungspunkt entfernt sein kann. Wenn zwei Linien diesen Wert überschreiten, wird stattdessen ein abgeschrägter Übergang gezeichnet. Beachten Sie, dass die maximale Miterlänge das Produkt der Linienbreite ist, gemessen im aktuellen Koordinatensystem, multipliziert mit dem Wert dieser `miterLimit`-Eigenschaft (deren Standardwert 10.0 im HTML {{HTMLElement("canvas")}} ist). Daher kann die `miterLimit`-Eigenschaft unabhängig von der aktuellen Anzeigeskalierung oder anderen affinen Transformationen der Pfade festgelegt werden: Sie beeinflusst nur die tatsächlich gerenderte Form der Linienkanten.

Genauer gesagt, die Mitergrenze ist das maximal zulässige Verhältnis der Verlängerungslänge (im HTML-Canvas, gemessen zwischen der äußeren Ecke der verbundenen Kanten der Linie und dem gemeinsamen Endpunkt der verbundenen Segmente, die im Pfad spezifiziert sind) zur halben Linienbreite. Sie kann auch als das maximal zulässige Verhältnis des Abstands zwischen den Innen- und Außenpunkten der Verbindung der Kanten zur gesamten Linienbreite definiert werden. Sie entspricht dann dem Kotangens des halben minimalen Innenwinkels der verbundenen Segmente, unterhalb dessen kein Miter-Übergang gerendert wird, sondern nur ein abgeschrägter Übergang:

- `miterLimit` = **max** `miterLength` / `lineWidth` = 1 / **sin** (**min** _θ_ / 2 )
- Die Standardmitergrenze von 10,0 wird alle Miter für scharfe Winkel unter etwa 11 Grad entfernen.
- Eine Mitergrenze gleich √2 ≈ 1,4142136 (aufgerundet) wird Miter für alle spitzen Winkel entfernen, wobei die Miter-Übergänge nur für stumpfe oder rechte Winkel beibehalten werden.
- Eine Mitergrenze von 1,0 ist gültig, deaktiviert jedoch alle Miter.
- Werte unter 1,0 sind für die Mitergrenze ungültig.

Hier ist eine kleine Demo, in der Sie `miterLimit` dynamisch einstellen können und sehen, wie sich dies auf die Formen auf dem Canvas auswirkt. Die blauen Linien zeigen, wo die Start- und Endpunkte für jede der Linien im Zickzackmuster sind.

Wenn Sie einen `miterLimit`-Wert unter 4,2 in diesem Demo angeben, wird keine der sichtbaren Ecken mit einer Miter-Verlängerung verbunden, sondern nur mit einem kleinen Abschrägung nahe den blauen Linien; mit einem `miterLimit` über 10 sollten die meisten Ecken in diesem Demo mit einem Miter weit entfernt von den blauen Linien verbunden sein, und deren Höhe nimmt zwischen den Ecken von links nach rechts ab, da sie mit wachsenden Winkeln verbunden sind; mit mittleren Werten werden nur die Ecken auf der linken Seite mit einer Kante nahe den blauen Linien verbunden und die Ecken auf der rechten Seite mit einer Miter-Verlängerung (ebenfalls mit abnehmender Höhe).

```js
function draw() {
  const ctx = document.getElementById("canvas").getContext("2d");

  // Clear canvas
  ctx.clearRect(0, 0, 150, 150);

  // Draw guides
  ctx.strokeStyle = "#09f";
  ctx.lineWidth = 2;
  ctx.strokeRect(-5, 50, 160, 50);

  // Set line styles
  ctx.strokeStyle = "#000";
  ctx.lineWidth = 10;

  // check input
  if (document.getElementById("miterLimit").checkValidity()) {
    ctx.miterLimit = parseFloat(document.getElementById("miterLimit").value);
  }

  // Draw lines
  ctx.beginPath();
  ctx.moveTo(0, 100);
  for (let i = 0; i < 24; i++) {
    const dy = i % 2 === 0 ? 25 : -25;
    ctx.lineTo(Math.pow(i, 1.5) * 2, 75 + dy);
  }
  ctx.stroke();
  return false;
}
```

```html hidden
<table>
  <tr>
    <td>
      <canvas id="canvas" width="150" height="150" role="presentation"></canvas>
    </td>
    <td>
      Change the <code>miterLimit</code> by entering a new value below and
      clicking the redraw button.<br /><br />
      <label for="miterLimit">Miter limit</label>
      <input type="number" id="miterLimit" size="3" min="1" />
      <input type="submit" id="redraw" value="Redraw" />
    </td>
  </tr>
</table>
```

```js hidden
document.getElementById("miterLimit").value = document
  .getElementById("canvas")
  .getContext("2d").miterLimit;
draw();

const redraw = document.getElementById("redraw");
redraw.addEventListener("click", draw);
```

{{EmbedLiveSample("A_demo_of_the_miterLimit_property", "", "180")}}

### Verwendung von Liniendashes

Die Methode `setLineDash` und die Eigenschaft `lineDashOffset` spezifizieren das Dash-Muster für Linien. Die Methode `setLineDash` akzeptiert eine Liste von Zahlen, die Entfernungen angeben, um abwechselnd eine Linie und eine Lücke zu zeichnen, und die Eigenschaft `lineDashOffset` legt einen Versatz fest, an dem das Muster begonnen werden soll.

In diesem Beispiel erstellen wir einen "Marching Ants"-Effekt. Dabei handelt es sich um eine Animationstechnik, die häufig in Auswahlwerkzeugen von Grafikprogrammen verwendet wird. Sie hilft dem Benutzer, die Auswahlgrenze vom Bildhintergrund zu unterscheiden, indem die Grenze animiert wird. In einem späteren Teil dieses Tutorials können Sie lernen, wie man dies und andere [einfache Animationen](/de/docs/Web/API/Canvas_API/Tutorial/Basic_animations) erstellt.

```html hidden
<canvas id="canvas" width="111" height="111" role="presentation"></canvas>
```

```js
const ctx = document.getElementById("canvas").getContext("2d");
let offset = 0;

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.setLineDash([4, 2]);
  ctx.lineDashOffset = -offset;
  ctx.strokeRect(10, 10, 100, 100);
}

function march() {
  offset++;
  if (offset > 5) {
    offset = 0;
  }
  draw();
  setTimeout(march, 20);
}

march();
```

{{EmbedLiveSample("Using_line_dashes")}}

## Verläufe

Wie bei jedem normalen Zeichenprogramm können wir Formen mit linearen, radialen und konischen Verläufen füllen und umranden. Wir erstellen ein [`CanvasGradient`](/de/docs/Web/API/CanvasGradient)-Objekt, indem wir eine der folgenden Methoden verwenden. Wir können dieses Objekt dann den Eigenschaften `fillStyle` oder `strokeStyle` zuweisen.

- [`createLinearGradient(x1, y1, x2, y2)`](/de/docs/Web/API/CanvasRenderingContext2D/createLinearGradient)
  - : Erstellt ein lineares Verlaufsobjekt mit einem Startpunkt von (`x1`, `y1`) und einem Endpunkt von (`x2`, `y2`).
- [`createRadialGradient(x1, y1, r1, x2, y2, r2)`](/de/docs/Web/API/CanvasRenderingContext2D/createRadialGradient)
  - : Erstellt einen radialen Verlauf. Die Parameter stellen zwei Kreise dar, von denen einer seinen Mittelpunkt bei (`x1`, `y1`) und einen Radius von `r1` hat, und der andere seinen Mittelpunkt bei (`x2`, `y2`) mit einem Radius von `r2`.
- [`createConicGradient(angle, x, y)`](/de/docs/Web/API/CanvasRenderingContext2D/createConicGradient)
  - : Erstellt ein konisches Verlaufsobjekt mit einem Startwinkel von `angle` in Radiant, an der Position (`x`, `y`).

Zum Beispiel:

```js
const lineargradient = ctx.createLinearGradient(0, 0, 150, 150);
const radialgradient = ctx.createRadialGradient(75, 75, 0, 75, 75, 100);
```

Sobald wir ein `CanvasGradient`-Objekt erstellt haben, können wir ihm mit der Methode `addColorStop()` Farben zuweisen.

- [`gradient.addColorStop(position, color)`](/de/docs/Web/API/CanvasGradient/addColorStop)
  - : Erstellt einen neuen Farbstop auf dem `gradient`-Objekt. Die `position` ist eine Zahl zwischen 0,0 und 1,0 und definiert die relative Position der Farbe im Verlauf, und das Argument `color` muss ein String sein, der eine CSS {{cssxref("&lt;color&gt;")}} darstellt und die Farbe angibt, die der Verlauf an diesem Punkt erreichen soll.

Es können so viele Farbstops zu einem Verlauf hinzugefügt werden, wie benötigt werden. Unten ist ein sehr einfacher linearer Verlauf von Weiß zu Schwarz.

```js
const lineargradient = ctx.createLinearGradient(0, 0, 150, 150);
lineargradient.addColorStop(0, "white");
lineargradient.addColorStop(1, "black");
```

### Ein Beispiel für `createLinearGradient`

In diesem Beispiel erstellen wir zwei verschiedene Verläufe. Wie Sie hier sehen können, können sowohl die Eigenschaften `strokeStyle` als auch `fillStyle` ein `canvasGradient`-Objekt als gültige Eingabe akzeptieren.

```js
function draw() {
  const ctx = document.getElementById("canvas").getContext("2d");

  // Create gradients
  const linGrad = ctx.createLinearGradient(0, 0, 0, 150);
  linGrad.addColorStop(0, "#00ABEB");
  linGrad.addColorStop(0.5, "#fff");
  linGrad.addColorStop(0.5, "#26C000");
  linGrad.addColorStop(1, "#fff");

  const linGrad2 = ctx.createLinearGradient(0, 50, 0, 95);
  linGrad2.addColorStop(0.5, "#000");
  linGrad2.addColorStop(1, "rgb(0 0 0 / 0%)");

  // assign gradients to fill and stroke styles
  ctx.fillStyle = linGrad;
  ctx.strokeStyle = linGrad2;

  // draw shapes
  ctx.fillRect(10, 10, 130, 130);
  ctx.strokeRect(50, 50, 50, 50);
}
```

```html hidden
<canvas id="canvas" width="150" height="150" role="presentation"></canvas>
```

```js hidden
draw();
```

Der erste ist ein Hintergrundverlauf. Wie Sie sehen, haben wir zwei Farben an derselben Position zugewiesen. Sie tun dies, um sehr scharfe Farbübergänge zu erzeugen— in diesem Fall von Weiß zu Grün. Normalerweise ist es egal, in welcher Reihenfolge Sie die Farbstops definieren, aber in diesem speziellen Fall macht es einen erheblichen Unterschied. Wenn Sie die Zuordnungen in der Reihenfolge belassen, in der Sie sie erscheinen lassen möchten, wird dies kein Problem sein.

Im zweiten Verlauf haben wir die Startfarbe (an Position 0,0) nicht zugewiesen, da dies nicht strikt notwendig war, da sie automatisch die Farbe des nächsten Farbstopps annimmt. Das Zuweisen der schwarzen Farbe an Position 0,5 macht den Verlauf von Anfang bis zu diesem Stopp automatisch schwarz.

{{EmbedLiveSample("A_createLinearGradient_example", "", "160")}}

### Ein Beispiel für `createRadialGradient`

In diesem Beispiel definieren wir vier verschiedene radiale Verläufe. Da wir über den Start- und Endpunkt des Verlaufs kontrolieren haben, können wir komplexere Effekte erzielen, als es normalerweise in den "klassischen" radialen Verläufen der Fall ist, die wir zum Beispiel in Photoshop sehen (also ein Verlauf mit einem einzigen Mittelpunkt, von dem aus sich der Verlauf in kreisförmiger Form nach außen erstreckt).

```js
function draw() {
  const ctx = document.getElementById("canvas").getContext("2d");

  // Create gradients
  const radGrad = ctx.createRadialGradient(45, 45, 10, 52, 50, 30);
  radGrad.addColorStop(0, "#A7D30C");
  radGrad.addColorStop(0.9, "#019F62");
  radGrad.addColorStop(1, "rgb(1 159 98 / 0%)");

  const radGrad2 = ctx.createRadialGradient(105, 105, 20, 112, 120, 50);
  radGrad2.addColorStop(0, "#FF5F98");
  radGrad2.addColorStop(0.75, "#FF0188");
  radGrad2.addColorStop(1, "rgb(255 1 136 / 0%)");

  const radGrad3 = ctx.createRadialGradient(95, 15, 15, 102, 20, 40);
  radGrad3.addColorStop(0, "#00C9FF");
  radGrad3.addColorStop(0.8, "#00B5E2");
  radGrad3.addColorStop(1, "rgb(0 201 255 / 0%)");

  const radGrad4 = ctx.createRadialGradient(0, 150, 50, 0, 140, 90);
  radGrad4.addColorStop(0, "#F4F201");
  radGrad4.addColorStop(0.8, "#E4C700");
  radGrad4.addColorStop(1, "rgb(228 199 0 / 0%)");

  // draw shapes
  ctx.fillStyle = radGrad4;
  ctx.fillRect(0, 0, 150, 150);
  ctx.fillStyle = radGrad3;
  ctx.fillRect(0, 0, 150, 150);
  ctx.fillStyle = radGrad2;
  ctx.fillRect(0, 0, 150, 150);
  ctx.fillStyle = radGrad;
  ctx.fillRect(0, 0, 150, 150);
}
```

```html hidden
<canvas id="canvas" width="150" height="150" role="presentation"></canvas>
```

```js hidden
draw();
```

In diesem Fall haben wir den Startpunkt ein wenig vom Endpunkt verschoben, um einen sphärischen 3D-Effekt zu erzielen. Es ist am besten zu vermeiden, dass sich die inneren und äußeren Kreise überlappen, da dies zu seltsamen Effekten führen kann, die schwer vorherzusagen sind.

Der letzte Farbverlauf in jedem der vier Verläufe verwendet eine vollständig transparente Farbe. Wenn Sie einen schönen Übergang von diesem zum vorherigen Farbverlauf wünschen, sollten beide Farben gleich sein. Dies ist im Code nicht sehr offensichtlich, da er zwei verschiedene CSS-Farbmethoden als Demonstration verwendet, aber im ersten Farbverlauf ist `#019F62 = rgb(1 159 98 / 100%)`.

{{EmbedLiveSample("A_createRadialGradient_example", "", "160")}}

### Ein Beispiel für `createConicGradient`

In diesem Beispiel definieren wir zwei verschiedene konische Verläufe. Ein konischer Verlauf unterscheidet sich von einem radialen Verlauf, da er nicht Kreise erstellt, sondern sich um einen Punkt dreht.

```js
function draw() {
  const ctx = document.getElementById("canvas").getContext("2d");

  // Create gradients
  const conicGrad1 = ctx.createConicGradient(2, 62, 75);
  conicGrad1.addColorStop(0, "#A7D30C");
  conicGrad1.addColorStop(1, "#fff");

  const conicGrad2 = ctx.createConicGradient(0, 187, 75);
  // we multiply our values by Math.PI/180 to convert degrees to radians
  conicGrad2.addColorStop(0, "black");
  conicGrad2.addColorStop(0.25, "black");
  conicGrad2.addColorStop(0.25, "white");
  conicGrad2.addColorStop(0.5, "white");
  conicGrad2.addColorStop(0.5, "black");
  conicGrad2.addColorStop(0.75, "black");
  conicGrad2.addColorStop(0.75, "white");
  conicGrad2.addColorStop(1, "white");

  // draw shapes
  ctx.fillStyle = conicGrad1;
  ctx.fillRect(12, 25, 100, 100);
  ctx.fillStyle = conicGrad2;
  ctx.fillRect(137, 25, 100, 100);
}
```

```html hidden
<canvas id="canvas" width="250" height="150" role="presentation"
  >A conic gradient</canvas
>
```

```js hidden
draw();
```

Der erste Verlauf ist im Zentrum des ersten Rechtecks positioniert und bewegt einen grünen Farbverlauf am Anfang zu einem weißen am Ende. Der Winkel beginnt bei 2 Radiant, was bemerkbar ist, da die Anfangs-/Endlinie nach Südosten zeigt.

Der zweite Verlauf ist ebenfalls im Zentrum seines zweiten Rechtecks positioniert. Dieser hat mehrere Farbstops, die bei jedem Viertel der Rotation von Schwarz zu Weiß wechseln. Dies ergibt den karierten Effekt.

{{EmbedLiveSample("A_createConicGradient_example", "", "160")}}

## Muster

In einem der Beispiele auf der vorherigen Seite haben wir eine Reihe von Schleifen verwendet, um ein Bildmuster zu erstellen. Es gibt jedoch eine viel einfachere Methode: die `createPattern()`-Methode.

- [`createPattern(image, type)`](/de/docs/Web/API/CanvasRenderingContext2D/createPattern)
  - : Erstellt und gibt ein neues Canvas-Musterobjekt zurück. `image` ist die Quelle des Bildes (also ein [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement), ein [`SVGImageElement`](/de/docs/Web/API/SVGImageElement), ein anderes [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) oder ein [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas), ein [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) oder ein [`VideoFrame`](/de/docs/Web/API/VideoFrame), oder ein [`ImageBitmap`](/de/docs/Web/API/ImageBitmap)). `type` ist ein String, der angibt, wie das Bild verwendet werden soll.

Der Typ gibt an, wie das Bild verwendet werden soll, um das Muster zu erstellen und muss einer der folgenden Stringwerte sein:

- `repeat`
  - : Kachelt das Bild in beide Richtungen, vertikal und horizontal.
- `repeat-x`
  - : Kachelt das Bild horizontal, aber nicht vertikal.
- `repeat-y`
  - : Kachelt das Bild vertikal, jedoch nicht horizontal.
- `no-repeat`
  - : Kachelt das Bild nicht. Es wird nur einmal verwendet.

Wir verwenden diese Methode, um ein [`CanvasPattern`](/de/docs/Web/API/CanvasPattern)-Objekt zu erstellen, das den Gradientenmethoden ähnelt, die wir oben gesehen haben. Sobald wir ein Muster erstellt haben, können wir es den Eigenschaften `fillStyle` oder `strokeStyle` zuweisen. Zum Beispiel:

```js
const img = new Image();
img.src = "some-image.png";
const pattern = ctx.createPattern(img, "repeat");
```

> [!NOTE]
> Wie bei der `drawImage()`-Methode müssen Sie sicherstellen, dass das verwendete Bild geladen ist, bevor Sie diese Methode aufrufen, da das Muster sonst möglicherweise falsch gezeichnet wird.

### Ein Beispiel für `createPattern`

In diesem letzten Beispiel erstellen wir ein Muster, das der `fillStyle`-Eigenschaft zugewiesen wird. Das einzig Erwähnenswerte ist die Verwendung des `onload`-Handlers des Bildes. Dies dient dazu, sicherzustellen, dass das Bild geladen wird, bevor es dem Muster zugewiesen wird.

```js
function draw() {
  const ctx = document.getElementById("canvas").getContext("2d");

  // create new image object to use as pattern
  const img = new Image();
  img.src = "canvas_create_pattern.png";
  img.onload = () => {
    // create pattern
    const pattern = ctx.createPattern(img, "repeat");
    ctx.fillStyle = pattern;
    ctx.fillRect(0, 0, 150, 150);
  };
}
```

```html hidden
<canvas id="canvas" width="150" height="150" role="presentation"></canvas>
```

```js hidden
draw();
```

{{EmbedLiveSample("A_createPattern_example", "", "160")}}

## Schatten

Das Verwenden von Schatten umfasst nur vier Eigenschaften:

- [`shadowOffsetX = float`](/de/docs/Web/API/CanvasRenderingContext2D/shadowOffsetX)
  - : Gibt die horizontale Entfernung an, die sich der Schatten vom Objekt erstrecken soll. Dieser Wert wird nicht von der Transformationsmatrix beeinflusst. Der Standardwert ist 0.
- [`shadowOffsetY = float`](/de/docs/Web/API/CanvasRenderingContext2D/shadowOffsetY)
  - : Gibt die vertikale Entfernung an, die sich der Schatten vom Objekt erstrecken soll. Dieser Wert wird nicht von der Transformationsmatrix beeinflusst. Der Standardwert ist 0.
- [`shadowBlur = float`](/de/docs/Web/API/CanvasRenderingContext2D/shadowBlur)
  - : Gibt die Größe des Unschärfeeffekts an; dieser Wert entspricht nicht einer Anzahl von Pixeln und wird nicht von der aktuellen Transformationsmatrix beeinflusst. Der Standardwert ist 0.
- [`shadowColor = color`](/de/docs/Web/API/CanvasRenderingContext2D/shadowColor)
  - : Ein Standard-CSS-Farbwert, der die Farbe des Schattens angibt; standardmäßig ist es ein vollständig transparenter Schwarzton.

Die Eigenschaften `shadowOffsetX` und `shadowOffsetY` geben an, wie weit sich der Schatten in X- und Y-Richtung vom Objekt aus erstrecken soll; diese Werte werden nicht von der aktuellen Transformationsmatrix beeinflusst. Verwenden Sie negative Werte, um den Schatten nach oben oder nach links auszuweiten, und positive Werte, um den Schatten nach unten oder nach rechts zu erweitern. Diese sind beide standardmäßig auf 0 gesetzt.

Die Eigenschaft `shadowBlur` gibt die Größe des Unschärfeeffekts an; dieser Wert entspricht nicht einer Anzahl von Pixeln und wird nicht von der aktuellen Transformationsmatrix beeinflusst. Der Standardwert ist 0.

Die Eigenschaft `shadowColor` ist ein Standard-CSS-Farbwert, der die Farbe des Schattens angibt; standardmäßig ist es ein vollständig transparenter Schwarzton.

> [!NOTE]
> Schatten werden nur für `source-over` [Compositing-Operationen](/de/docs/Web/API/Canvas_API/Tutorial/Compositing) gezeichnet.

### Ein Beispiel für beschatteten Text

Dieses Beispiel zeichnet eine Textzeichenkette mit einem Schatteneffekt.

```js
function draw() {
  const ctx = document.getElementById("canvas").getContext("2d");

  ctx.shadowOffsetX = 2;
  ctx.shadowOffsetY = 2;
  ctx.shadowBlur = 2;
  ctx.shadowColor = "rgb(0 0 0 / 50%)";

  ctx.font = "20px Times New Roman";
  ctx.fillStyle = "Black";
  ctx.fillText("Sample String", 5, 30);
}
```

```html hidden
<canvas id="canvas" width="150" height="80" role="presentation"></canvas>
```

```js hidden
draw();
```

{{EmbedLiveSample("A_shadowed_text_example")}}

Wir werden uns die Eigenschaft `font` und die Methode `fillText` im nächsten Kapitel über das [Zeichnen von Text](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text) ansehen.

## Canvas-Füllregeln

Beim Verwenden von `fill` (oder [`clip`](/de/docs/Web/API/CanvasRenderingContext2D/clip) und [`isPointInPath`](/de/docs/Web/API/CanvasRenderingContext2D/isPointInPath)) können Sie optional einen Füllregel-Algorithmus bereitstellen, der bestimmt, ob ein Punkt innerhalb oder außerhalb eines Pfades liegt und daher gefüllt wird oder nicht. Dies ist nützlich, wenn sich ein Pfad selbst überschneidet oder verschachtelt ist.

Zwei Werte sind möglich:

- `nonzero`
  - : Die [non-zero winding rule](https://en.wikipedia.org/wiki/Nonzero-rule), die die Standardregel ist.
- `evenodd`
  - : Die [even-odd winding rule](https://en.wikipedia.org/wiki/Even%E2%80%93odd_rule).

In diesem Beispiel verwenden wir die `evenodd`-Regel.

```js
function draw() {
  const ctx = document.getElementById("canvas").getContext("2d");
  ctx.beginPath();
  ctx.arc(50, 50, 30, 0, Math.PI * 2, true);
  ctx.arc(50, 50, 15, 0, Math.PI * 2, true);
  ctx.fill("evenodd");
}
```

```html hidden
<canvas id="canvas" width="100" height="100" role="presentation"></canvas>
```

```js hidden
draw();
```

{{EmbedLiveSample("Canvas_fill_rules")}}

{{PreviousNext("Web/API/Canvas_API/Tutorial/Drawing_shapes", "Web/API/Canvas_API/Tutorial/Drawing_text")}}
