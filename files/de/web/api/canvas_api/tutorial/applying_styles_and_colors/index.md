---
title: Anwenden von Stilen und Farben
slug: Web/API/Canvas_API/Tutorial/Applying_styles_and_colors
l10n:
  sourceCommit: bc9f7bec1ab48f29d241e38a9f1598f783f6b60a
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Drawing_shapes", "Web/API/Canvas_API/Tutorial/Drawing_text")}}

Im Kapitel über das [Zeichnen von Formen](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes) haben wir nur die Standard-Linear- und Füllstile verwendet. Hier werden wir die Optionen des Canvas erkunden, die uns zur Verfügung stehen, um unsere Zeichnungen etwas ansprechender zu gestalten. Sie werden lernen, wie man verschiedene Farben, Linienstile, Verläufe, Muster und Schatten zu Ihren Zeichnungen hinzufügt.

> [!NOTE]
> Canvas-Inhalte sind von Screenreadern nicht zugänglich. Wenn das Canvas rein dekorativ ist, fügen Sie `role="presentation"` im öffnenden `<canvas>`-Tag ein. Andernfalls fügen Sie beschreibenden Text als Wert des [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)-Attributs direkt im Canvas-Element ein oder fügen Sie Fallback-Inhalte ein, die innerhalb des öffnenden und schließenden Canvas-Tags platziert sind. Canvas-Inhalte sind nicht Teil des DOM, aber verschachtelte Fallback-Inhalte sind es.

## Farben

Bis jetzt haben wir nur Methoden des Zeichnungskontextes gesehen. Wenn wir Farben auf eine Form anwenden wollen, stehen uns zwei wichtige Eigenschaften zur Verfügung: `fillStyle` und `strokeStyle`.

- [`fillStyle = color`](/de/docs/Web/API/CanvasRenderingContext2D/fillStyle)
  - : Legt den Stil fest, der beim Füllen von Formen verwendet wird.
- [`strokeStyle = color`](/de/docs/Web/API/CanvasRenderingContext2D/strokeStyle)
  - : Legt den Stil für die Umrisse von Formen fest.

`color` ist ein String, der ein CSS {{cssxref("&lt;color&gt;")}}, ein Verlaufsobjekt oder ein Musterobjekt darstellt. Wir werden uns später Verlaufs- und Musterobjekte ansehen. Standardmäßig sind die Strich- und Füllfarbe auf Schwarz (CSS-Farbwert `#000000`) gesetzt.

> [!NOTE]
> Wenn Sie die `strokeStyle` und/oder `fillStyle`-Eigenschaft festlegen, wird der neue Wert zum Standard für alle Formen, die von diesem Zeitpunkt an gezeichnet werden. Für jede Form, die Sie in einer anderen Farbe haben möchten, müssen Sie die Eigenschaft `fillStyle` oder `strokeStyle` neu zuweisen.

Die gültigen Strings, die Sie eingeben können, sollten gemäß der Spezifikation CSS {{cssxref("&lt;color&gt;")}} Werte sein. Jedes der folgenden Beispiele beschreibt die gleiche Farbe.

```js
// these all set the fillStyle to 'orange'

ctx.fillStyle = "orange";
ctx.fillStyle = "#FFA500";
ctx.fillStyle = "rgb(255 165 0)";
ctx.fillStyle = "rgb(255 165 0 / 100%)";
```

### Ein `fillStyle`-Beispiel

In diesem Beispiel verwenden wir erneut zwei `for`-Schleifen, um ein Raster von Rechtecken zu zeichnen, jedes in einer anderen Farbe. Das resultierende Bild sollte ungefähr wie der Screenshot aussehen. Hier passiert nichts allzu Spektakuläres. Wir verwenden die beiden Variablen `i` und `j`, um eine eindeutige RGB-Farbe für jedes Quadrat zu erzeugen und nur die roten und grünen Werte zu ändern. Der blaue Kanal hat einen festen Wert. Durch das Modifizieren der Kanäle können Sie alle Arten von Paletten erzeugen. Durch Erhöhen der Schritte können Sie etwas erreichen, das wie die Farbpaletten von Photoshop aussieht.

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

### Ein `strokeStyle`-Beispiel

Dieses Beispiel ist ähnlich wie das obige, verwendet jedoch die `strokeStyle`-Eigenschaft, um die Farben der Umrisse der Formen zu ändern. Wir verwenden die Methode `arc()`, um Kreise anstelle von Quadraten zu zeichnen.

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

Neben dem Zeichnen von undurchsichtigen Formen auf das Canvas können wir auch halbtransparente (oder durchscheinende) Formen zeichnen. Dies geschieht entweder durch Festlegen der `globalAlpha`-Eigenschaft oder durch Zuweisen einer halbtransparenten Farbe zum Strich- und/oder Füllstil.

- [`globalAlpha = transparencyValue`](/de/docs/Web/API/CanvasRenderingContext2D/globalAlpha)
  - : Wendet den angegebenen Transparenzwert auf alle zukünftigen auf das Canvas gezeichneten Formen an. Der Wert muss zwischen 0,0 (vollständig transparent) und 1,0 (vollständig undurchsichtig) liegen. Dieser Wert ist standardmäßig 1,0 (vollständig undurchsichtig).

Die `globalAlpha`-Eigenschaft kann nützlich sein, wenn Sie viele Formen auf das Canvas mit ähnlicher Transparenz zeichnen möchten, ansonsten ist es im Allgemeinen nützlicher, die Transparenz auf einzelnen Formen festzulegen, wenn Sie deren Farben festlegen.

Da die Eigenschaften `strokeStyle` und `fillStyle` CSS-rgb-Farbwerte akzeptieren, können wir die folgende Notation verwenden, um ihnen eine transparente Farbe zuzuweisen.

```js
// Assigning transparent colors to stroke and fill style

ctx.strokeStyle = "rgb(255 0 0 / 50%)";
ctx.fillStyle = "rgb(255 0 0 / 50%)";
```

Die Funktion `rgb()` hat einen optionalen zusätzlichen Parameter. Der letzte Parameter legt den Transparenzwert dieser speziellen Farbe fest. Der gültige Bereich wird angegeben als Prozentsatz zwischen `0%` (vollständig transparent) und `100%` (vollständig undurchsichtig) oder als Zahl zwischen `0.0` (entspricht `0%`) und `1.0` (entspricht `100%`).

### Ein `globalAlpha`-Beispiel

In diesem Beispiel zeichnen wir einen Hintergrund aus vier unterschiedlich farbigen Quadraten. Darüber zeichnen wir eine Reihe von halbtransparenten Kreisen. Die `globalAlpha`-Eigenschaft ist auf `0,2` gesetzt, was für alle Formen ab diesem Punkt verwendet wird. Jeder Schritt in der `for`-Schleife zeichnet eine Reihe von Kreisen mit zunehmendem Radius. Das endgültige Ergebnis ist ein radialer Farbverlauf. Durch das Überlagern immer mehr Kreisen reduziert man effektiv die Transparenz der bereits gezeichneten Kreise. Durch das Erhöhen der Schrittanzahl und damit das Zeichnen von mehr Kreisen würde der Hintergrund vom Zentrum des Bildes vollständig verschwinden.

```js
function draw() {
  const ctx = document.getElementById("canvas").getContext("2d");
  // draw background
  ctx.fillStyle = "#ffdd00";
  ctx.fillRect(0, 0, 75, 75);
  ctx.fillStyle = "#66cc00";
  ctx.fillRect(75, 0, 75, 75);
  ctx.fillStyle = "#0099ff";
  ctx.fillRect(0, 75, 75, 75);
  ctx.fillStyle = "#ff3300";
  ctx.fillRect(75, 75, 75, 75);
  ctx.fillStyle = "white";

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

### Ein Beispiel mit `rgb()` mit Alpha-Transparenz

In diesem zweiten Beispiel tun wir etwas Ähnliches wie im obigen, aber anstatt Kreise übereinander zu zeichnen, habe ich kleine Rechtecke mit zunehmender Deckkraft gezeichnet. Die Verwendung von `rgb()` gibt Ihnen ein wenig mehr Kontrolle und Flexibilität, da wir den Füll- und Strichstil individuell festlegen können.

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

Es gibt mehrere Eigenschaften, die es uns ermöglichen, Linien zu gestalten.

- [`lineWidth = value`](/de/docs/Web/API/CanvasRenderingContext2D/lineWidth)
  - : Legt die Breite von in Zukunft gezeichneten Linien fest.
- [`lineCap = type`](/de/docs/Web/API/CanvasRenderingContext2D/lineCap)
  - : Bestimmt das Aussehen der Enden von Linien.
- [`lineJoin = type`](/de/docs/Web/API/CanvasRenderingContext2D/lineJoin)
  - : Bestimmt das Aussehen der "Ecken", an denen sich Linien treffen.
- [`miterLimit = value`](/de/docs/Web/API/CanvasRenderingContext2D/miterLimit)
  - : Stellt eine Begrenzung des Gehrungsanschlags fest, wenn zwei Linien in einem spitzen Winkel zusammenlaufen, um zu steuern, wie dick die Verbindung wird.
- [`getLineDash()`](/de/docs/Web/API/CanvasRenderingContext2D/getLineDash)
  - : Gibt das aktuelle Liniendash-Muster als Array mit einer geraden Anzahl von nicht negativen Zahlen zurück.
- [`setLineDash(segments)`](/de/docs/Web/API/CanvasRenderingContext2D/setLineDash)
  - : Legt das aktuelle Liniendash-Muster fest.
- [`lineDashOffset = value`](/de/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)
  - : Gibt an, wo ein Strichmuster auf einer Linie begonnen werden soll.

Sie werden ein besseres Verständnis dafür bekommen, was diese tun, indem Sie sich die Beispiele unten ansehen.

### Ein `lineWidth`-Beispiel

Diese Eigenschaft legt die aktuelle Linienstärke fest. Werte müssen positive Zahlen sein. Standardmäßig ist dieser Wert auf 1,0 Einheiten gesetzt.

Die Linienbreite ist die Stärke des Strichs, der zentriert auf dem gegebenen Pfad liegt. Mit anderen Worten, der gezeichnete Bereich erstreckt sich auf beiden Seiten des Pfades um die Hälfte der Linienbreite. Da Canvas-Koordinaten nicht direkt auf Pixel verweisen, muss besondere Sorgfalt aufgebracht werden, um präzise horizontale und vertikale Linien zu erhalten.

Im folgenden Beispiel werden 10 gerade Linien mit zunehmender Linienbreite gezeichnet. Die Linie ganz links ist 1,0 Einheiten breit. Allerdings erscheinen die linke und alle ungeraden Linienbreiten nicht sauber, aufgrund der Positionierung des Pfades.

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

Um saubere Linien zu erhalten, muss man verstehen, wie Pfade gestreift werden. In den Bildern unten repräsentiert das Gitter das Koordinatengitter des Canvas. Die Quadrate zwischen den Gitterlinien sind tatsächliche Bildschirm-Pixel. Im ersten Bild unten wird ein Rechteck von (2,1) bis (5,5) gefüllt. Der gesamte Bereich dazwischen (hellrot) fällt auf die Pixelgrenzen, sodass das resultierende gefüllte Rechteck scharfe Ränder hat.

![Drei Koordinatengitter. Die Gitterlinien sind tatsächliche Pixel auf dem Bildschirm. Die obere linke Ecke jedes Gitters ist als (0,0) gekennzeichnet. Im ersten Gitter ist ein Rechteck von (2,1) bis (5,5) in hellrot gefüllt. Im zweiten Gitter ist (3,1) bis (3,5) mit einer 1-Pixel-dicken königsblauen Linie verbunden. Die königsblaue Linie ist auf einer Gitterlinie zentriert und erstreckt sich von 2,5 bis 3,5 auf der x-Achse, zur Hälfte in die Pixel auf beiden Seiten der Ganglienlinie, mit einem hellblauen Hintergrund auf beiden Seiten, der sich von 2 bis 4 auf der x-Achse erstreckt. Um die hellblaue Unschärfe-Ausweitung der Linie im zweiten Koordinatengitter zu vermeiden, ist der Pfad im dritten Koordinatengitter ein königsblauer von (3,5,1) bis (3,5,5). Die 1-Pixel-Linienbreite füllt eine einzelne Pixelvertikale vollständig und präzise.](canvas-grid.png)

Wenn man einen Pfad von (3,1) bis (3,5) mit einer Linienstärke von `1.0` betrachtet, erhält man die Situation im zweiten Bild. Der tatsächliche Bereich, der gefüllt werden soll (dunkelblau), erstreckt sich nur zur Hälfte in die Pixel auf beiden Seiten des Pfades. Eine Annäherung daran muss gerendert werden, was bedeutet, dass diese Pixel nur teilweise schattiert werden und der gesamte Bereich (hellblau und dunkelblau) mit einer Farbe gefüllt wird, die nur halb so dunkel ist wie die tatsächliche Strichfarbe. Das ist es, was mit der `1.0`-Breite-Linie im vorherigen Beispiel passiert.

Um dies zu beheben, muss man beim Erstellen seiner Pfade sehr genau sein. Wenn man weiß, dass eine `1.0`-Breite-Linie zur Hälfte auf beiden Seiten des Pfades hinausreicht, resultiert das Erstellen des Pfades von (3.5,1) bis (3.5,5) in der Situation im dritten Bild - die `1.0`-Linienbreite füllt am Ende eine einzelne Pixelvertikale vollständig und präzise.

> [!NOTE]
> Beachten Sie, dass in unserem Beispiel der vertikalen Linie die Y-Position immer noch auf eine ganze Gitterlinienposition verweist - wenn nicht, würden wir Pixel mit halber Abdeckung an den Endpunkten sehen (beachten Sie aber auch, dass dieses Verhalten vom aktuellen `lineCap`-Stil abhängt, dessen Standardwert `butt` ist; Sie können konsistente Striche mit Halbpixelkoordinaten für ungerade Breitenlinien berechnen, indem Sie den `lineCap`-Stil auf `square` setzen, sodass die Außenkante des Strichs um das Ende herum automatisch erweitert wird, um das ganze Pixel genau zu decken).
>
> Beachten Sie auch, dass nur Start- und Endpunkte eines Pfades betroffen sind: Wenn ein Pfad mit `closePath()` geschlossen wird, gibt es keinen Start- und Endpunkt; stattdessen werden alle Endpunkte im Pfad mit ihrem angehängten vorherigen und nächsten Segment durch den aktuellen `lineJoin`-Stil verbunden, dessen Standardwert `miter` ist, mit der Wirkung, dass die Außenränder der verbundenen Segmente automatisch zu ihrem Schnittpunkt erweitert werden, sodass der gerenderte Strich genau ganze Pixel an jedem Endpunkt abdeckt, wenn diese verbundenen Segmente horizontal und/oder vertikal sind. Siehe die nächsten beiden Abschnitte für Demonstrationen dieser zusätzlichen Linienstile.

Bei geradzahligen Breitenlinien endet jede Hälfte als ganze Anzahl von Pixeln, sodass man einen Pfad möchte, der sich zwischen den Pixeln befindet (d.h. (3,1) bis (3,5)), anstatt in der Mitte der Pixel.

Während etwas schmerzhaft bei der ersten Arbeit mit skalierbaren 2D-Grafiken, sorgt die Beachtung des Pixelgitters und der Position von Pfaden dafür, dass Ihre Zeichnungen korrekt aussehen, unabhängig von der Skalierung oder den anderen beteiligten Transformationen. Eine `1.0`-Breiten-Vertikallinie, die an der richtigen Position gezeichnet wird, wird zu einer scharfen 2-Pixel-Linie, wenn sie mit 2x skaliert wird, und erscheint an der richtigen Position.

### Ein `lineCap`-Beispiel

Die `lineCap`-Eigenschaft bestimmt, wie die Endpunkte jeder Linie gezeichnet werden. Es gibt drei mögliche Werte für diese Eigenschaft, und diese sind: `butt`, `round` und `square`. Standardmäßig ist diese Eigenschaft auf `butt` gesetzt:

- `butt`
  - : Die Enden der Linien sind an den Endpunkten abgestumpft.
- `round`
  - : Die Enden der Linien sind abgerundet.
- `square`
  - : Die Enden der Linien sind durch ein Quadrat mit gleicher Breite und halber Höhe der Linienstärke abgestumpft.

In diesem Beispiel zeichnen wir drei Linien, jede mit einem anderen Wert für die `lineCap`-Eigenschaft. Ich habe auch zwei Führungen hinzugefügt, um die genauen Unterschiede zwischen den drei zu sehen. Jede dieser Linien beginnt und endet genau auf diesen Führungen.

Die Linie auf der linken Seite verwendet die Standardoption `butt`. Sie werden feststellen, dass sie vollständig mit den Führungen bündig ist. Die zweite ist so eingestellt, dass sie die `round`-Option verwendet. Dies fügt dem Ende einen Halbkreis hinzu, der einen Radius hat, der die Hälfte der Linienbreite beträgt. Die Linie auf der rechten Seite verwendet die `square`-Option. Dies fügt ein Quadrat mit gleicher Breite und halber Höhe der Linienstärke hinzu.

```js
function draw() {
  const ctx = document.getElementById("canvas").getContext("2d");

  // Draw guides
  ctx.strokeStyle = "#0099ff";
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

### Ein `lineJoin`-Beispiel

Die `lineJoin`-Eigenschaft bestimmt, wie zwei verbundene Segmente (von Linien, Bögen oder Kurven) mit nicht null Längen in einer Form zusammengefügt werden (entartete Segmente mit null Längen, deren angegebene Endpunkte und Kontrollpunkte sich genau an derselben Position befinden, werden übersprungen).

Es gibt drei mögliche Werte für diese Eigenschaft: `round`, `bevel` und `miter`. Standardmäßig ist diese Eigenschaft auf `miter` gesetzt. Beachten Sie, dass die `lineJoin`-Einstellung keinen Effekt hat, wenn die beiden verbundenen Segmente die gleiche Richtung haben, da in diesem Fall kein Verbindungsbereich hinzugefügt wird:

- `round`
  - : Rundet die Ecken einer Form ab, indem ein zusätzlicher Sektor eines Kreises gefüllt wird, der am gemeinsamen Endpunkt verbundener Segmente zentriert ist. Der Radius dieser abgerundeten Ecken ist gleich der Hälfte der Linienbreite.
- `bevel`
  - : Füllt einen zusätzlichen dreieckigen Bereich zwischen dem gemeinsamen Endpunkt verbundener Segmente und den getrennten äußeren rechteckigen Ecken jedes Segments.
- `miter`
  - : Verbundene Segmente werden durch die Verlängerung ihrer Außenkanten so verbunden, dass sie an einem einzelnen Punkt verbunden werden, mit der Wirkung, dass ein zusätzlicher rautenförmiger Bereich gefüllt wird. Diese Einstellung wird durch die `miterLimit`-Eigenschaft beeinflusst, die unten erklärt wird.

Das folgende Beispiel zeichnet drei verschiedene Pfade, die jede dieser drei `lineJoin`-Eigenschaftseinstellungen demonstrieren; das Ergebnis wird oben gezeigt.

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

### Eine Demo der `miterLimit`-Eigenschaft

Wie Sie im vorherigen Beispiel gesehen haben, werden beim Verbinden von zwei Linien mit der `miter`-Option die Außenkanten der zwei zu verbindenden Linien bis zu dem Punkt verlängert, an dem sie sich treffen. Für Linien, die im großen Winkel zueinander stehen, liegt dieser Punkt nicht weit vom inneren Verbindungspunkt entfernt. Sobald die Winkel zwischen den Linien jedoch kleiner werden, erhöht sich der Abstand (Gehrungslänge) zwischen diesen Punkten exponentiell.

Die `miterLimit`-Eigenschaft bestimmt, wie weit der außenliegende Verbindungspunkt vom innenliegenden Verbindungspunkt entfernt sein kann. Wenn zwei Linien diesen Wert überschreiten, wird stattdessen eine Fase gezeichnet. Beachten Sie, dass die maximale Gehrungslänge das Produkt der Linienbreite in das aktuelle Koordinatensystem gemessener Breite, multipliziert mit dem Wert dieser `miterLimit`-Eigenschaft ist (deren Standardwert in der HTML {{HTMLElement("canvas")}} 10,0 beträgt), sodass die `miterLimit` unabhängig von der aktuellen Anzeige des Maßstabs oder der affinen Transformationen von Pfaden festgelegt werden kann: Sie beeinflusst nur die tatsächlich gerenderte Form der Linienkanten.

Das `miterLimit` ist genau das maximal erlaubte Verhältnis der Verlängerungslänge (im HTML-Canvas wird es zwischen der Außenkante der verbundenen Linienkanten und dem gemeinsamen Endpunkt der in der Pfadlinie angegebenen Segmente gemessen) zur halben Linienbreite. Es kann gleichwertig definiert werden als das maximal zugelassene Verhältnis des Abstands zwischen den innenliegenden und außenliegenden Verbindungspunkten von Kanten zur gesamten Linienbreite. Es ist dann gleich der Kosekante des halben Mindestinnenwinkels der verbundenen Segmente, unter dem keine Gehrungverbindung mehr erzeugt wird, sondern nur eine einfache Fase:

- `miterLimit` = **max** `miterLength` / `lineWidth` = 1 / **sin** ( **min** _θ_ / 2 )
- Der Standard-Gehrungsanschlag von 10,0 wird alle Gehrungen für scharfe Winkel unter etwa 11 Grad ausschneiden.
- Ein Gehrungsanschlag gleich √2 ≈ 1,4142136 (aufgerundet) wird Gehrungen für alle spitzen Winkel abschneiden und nur Gehrungen für stumpfe oder rechte Winkel belassen.
- Ein Gehrungsanschlag gleich 1,0 ist gültig, wird jedoch alle Gehrungen deaktivieren.
- Werte unter 1,0 sind für den Gehrungsanschlag ungültig.

Hier ist eine kleine Demo, in der Sie den `miterLimit` dynamisch einstellen und sehen können, wie sich dies auf die Formen auf dem Canvas auswirkt. Die blauen Linien zeigen, wo die Start- und Endpunkte für jede der Linien im Zick-Zack-Muster sind.

Wenn Sie in dieser Demo einen `miterLimit`-Wert unter 4,2 angeben, wird keiner der sichtbaren Ecken mit einer Gehrungserweiterung verbunden, sondern nur mit einer kleinen Fase nahe den blauen Linien; mit einem `miterLimit` über 10 sollten die meisten Ecken in dieser Demo mit einer Gehrung weit entfernt von den blauen Linien verbunden werden, und deren Höhe nimmt zwischen den Ecken von links nach rechts ab, weil sie sich mit zunehmenden Winkeln verbinden; mit Zwischenwerten werden die Ecken auf der linken Seite nur mit einer Fase nahe den blauen Linien verbunden und die Ecken auf der rechten Seite mit einer Gehrungserweiterung (ebenfalls mit abnehmender Höhe).

```js
function draw() {
  const ctx = document.getElementById("canvas").getContext("2d");

  // Clear canvas
  ctx.clearRect(0, 0, 150, 150);

  // Draw guides
  ctx.strokeStyle = "#0099ff";
  ctx.lineWidth = 2;
  ctx.strokeRect(-5, 50, 160, 50);

  // Set line styles
  ctx.strokeStyle = "black";
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
    ctx.lineTo(i ** 1.5 * 2, 75 + dy);
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

### Verwendung von gestrichelten Linien

Die Methode `setLineDash` und die Eigenschaft `lineDashOffset` geben das Strichmuster für Linien an. Die Methode `setLineDash` akzeptiert eine Liste von Zahlen, die die Abstände angeben, um abwechselnd eine Linie und einen Abstand zu ziehen, und die Eigenschaft `lineDashOffset` legt einen Ausgangspunkt fest, an dem das Muster beginnen soll.

In diesem Beispiel erstellen wir einen Marschierende-Ameisen-Effekt. Es ist eine Animationstechnik, die oft in Auswahlwerkzeugen von Computer-Grafikprogrammen zu finden ist. Sie hilft dem Benutzer, die Auswahlgrenze vom Bildhintergrund zu unterscheiden, indem die Grenze animiert wird. In einem späteren Teil dieses Tutorials erfahren Sie, wie Sie dies und andere [einfache Animationen](/de/docs/Web/API/Canvas_API/Tutorial/Basic_animations) durchführen können.

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

## Verlaufsfarben

Genau wie in jedem normalen Zeichenprogramm können wir Formen mit linearen, radialen und konischen Verlaufsfarben füllen und Striche ziehen. Wir erstellen ein [`CanvasGradient`](/de/docs/Web/API/CanvasGradient)-Objekt, indem wir eine der folgenden Methoden verwenden. Wir können dieses Objekt dann den Eigenschaften `fillStyle` oder `strokeStyle` zuweisen.

- [`createLinearGradient(x1, y1, x2, y2)`](/de/docs/Web/API/CanvasRenderingContext2D/createLinearGradient)
  - : Erstellt ein lineares Verlauf-Objekt mit einem Startpunkt von (`x1`, `y1`) und einem Endpunkt von (`x2`, `y2`).
- [`createRadialGradient(x1, y1, r1, x2, y2, r2)`](/de/docs/Web/API/CanvasRenderingContext2D/createRadialGradient)
  - : Erstellt ein radiales Verlauf. Die Parameter repräsentieren zwei Kreise, einen mit seinem Zentrum bei (`x1`, `y1`) und einem Radius von `r1`, und der andere mit seinem Zentrum bei (`x2`, `y2`) mit einem Radius von `r2`.
- [`createConicGradient(angle, x, y)`](/de/docs/Web/API/CanvasRenderingContext2D/createConicGradient)
  - : Erstellt ein konisches Verlaufsobjekt mit einem Startwinkels von `angle` in Radiant, an der Position (`x`, `y`).

Zum Beispiel:

```js
const lineargradient = ctx.createLinearGradient(0, 0, 150, 150);
const radialgradient = ctx.createRadialGradient(75, 75, 0, 75, 75, 100);
```

Sobald wir ein `CanvasGradient`-Objekt erstellt haben, können wir ihm Farben zuweisen, indem wir die Methode `addColorStop()` verwenden.

- [`gradient.addColorStop(position, color)`](/de/docs/Web/API/CanvasGradient/addColorStop)
  - : Erstellt einen neuen Farbverlaufspunkt auf dem `gradient`-Objekt. Die `position` ist eine Zahl zwischen 0,0 und 1,0 und definiert die relative Position der Farbe im Verlauf, und das `color`-Argument muss ein String sein, der einen CSS {{cssxref("&lt;color&gt;")}} darstellt und die Farbe angibt, die der Verlauf bei diesem Offset im Übergang erreichen sollte.

Sie können so viele Farbverlaufspunkte zu einem Verlauf hinzufügen, wie Sie benötigen. Unten ist ein sehr einfacher lineare Verlauf von Weiß zu Schwarz.

```js
const lineargradient = ctx.createLinearGradient(0, 0, 150, 150);
lineargradient.addColorStop(0, "white");
lineargradient.addColorStop(1, "black");
```

### Ein `createLinearGradient`-Beispiel

In diesem Beispiel erstellen wir zwei verschiedene Farbverläufe. Wie Sie hier sehen können, können die Eigenschaften `strokeStyle` und `fillStyle` ein `canvasGradient`-Objekt als gültige Eingabe akzeptieren.

```js
function draw() {
  const ctx = document.getElementById("canvas").getContext("2d");

  // Create gradients
  const linGrad = ctx.createLinearGradient(0, 0, 0, 150);
  linGrad.addColorStop(0, "#00ABEB");
  linGrad.addColorStop(0.5, "white");
  linGrad.addColorStop(0.5, "#26C000");
  linGrad.addColorStop(1, "white");

  const linGrad2 = ctx.createLinearGradient(0, 50, 0, 95);
  linGrad2.addColorStop(0.5, "black");
  linGrad2.addColorStop(1, "transparent");

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

Der erste ist ein Hintergrundverlauf. Wie Sie sehen können, haben wir zwei Farben an derselben Position zugewiesen. Sie tun dies, um sehr scharfe Farbübergänge zu erzeugen - in diesem Fall von Weiß zu Grün. Normalerweise spielt die Reihenfolge, in der Sie die Farbverlaufspunkte definieren, keine Rolle, aber in diesem speziellen Fall tut es dies erheblich. Wenn Sie die Zuweisungen in der Reihenfolge belassen, in der Sie sie erscheinen lassen möchten, wird dies kein Problem darstellen.

Im zweiten Verlauf haben wir die Startfarbe (an Position 0,0) nicht zugewiesen, da dies nicht unbedingt erforderlich war, da sie automatisch die Farbe des nächsten Farbverlaufspunktes annimmt. Daher macht das Zuweisen der schwarzen Farbe an Position 0,5 den Verlauf von der Startposition zu diesem Punkt automatisch schwarz.

{{EmbedLiveSample("A_createLinearGradient_example", "", "160")}}

### Ein `createRadialGradient`-Beispiel

In diesem Beispiel definieren wir vier verschiedene radiale Farbverläufe. Weil wir Kontrolle über die Start- und Endpunkte des Verlaufs haben, können wir komplexere Effekte erzielen, als wir sie normalerweise in den "klassischen" radialen Verläufen sehen, die wir zum Beispiel in Photoshop haben (d.h. ein Verlauf mit einem einzigen Mittelpunkt, an dem sich der Verlauf in einer kreisförmigen Form ausbreitet).

```js
function draw() {
  const ctx = document.getElementById("canvas").getContext("2d");

  // Create gradients
  const radGrad = ctx.createRadialGradient(45, 45, 10, 52, 50, 30);
  radGrad.addColorStop(0, "#A7D30C");
  radGrad.addColorStop(0.9, "#019F62");
  radGrad.addColorStop(1, "transparent");

  const radGrad2 = ctx.createRadialGradient(105, 105, 20, 112, 120, 50);
  radGrad2.addColorStop(0, "#FF5F98");
  radGrad2.addColorStop(0.75, "#FF0188");
  radGrad2.addColorStop(1, "transparent");

  const radGrad3 = ctx.createRadialGradient(95, 15, 15, 102, 20, 40);
  radGrad3.addColorStop(0, "#00C9FF");
  radGrad3.addColorStop(0.8, "#00B5E2");
  radGrad3.addColorStop(1, "transparent");

  const radGrad4 = ctx.createRadialGradient(0, 150, 50, 0, 140, 90);
  radGrad4.addColorStop(0, "#F4F201");
  radGrad4.addColorStop(0.8, "#E4C700");
  radGrad4.addColorStop(1, "transparent");

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

In diesem Fall haben wir den Startpunkt leicht vom Endpunkt verschoben, um einen sphärischen 3D-Effekt zu erzielen. Es ist am besten zu vermeiden, dass die inneren und äußeren Kreise sich überlappen, da dies zu seltsamen Effekten führt, die schwer vorherzusagen sind.

Der letzte Farbverlaufspunkt in jedem der vier Verläufe verwendet eine vollständig transparente Farbe. Wenn Sie einen schönen Übergang davon zum vorherigen Farbverlaufspunkt haben möchten, sollten beide Farben gleich sein. Dies ist aus dem Code nicht sehr offensichtlich, da es zwei verschiedene CSS-Farbmethoden als Demonstration verwendet, aber im ersten Verlauf `#019F62 = rgb(1 159 98 / 100%)`.

{{EmbedLiveSample("A_createRadialGradient_example", "", "160")}}

### Ein `createConicGradient`-Beispiel

In diesem Beispiel definieren wir zwei verschiedene konische Farbverläufe. Ein konischer Verlauf unterscheidet sich von einem radialen Verlauf, da er sich, anstatt Kreise zu erzeugen, um einen Punkt dreht.

```js
function draw() {
  const ctx = document.getElementById("canvas").getContext("2d");

  // Create gradients
  const conicGrad1 = ctx.createConicGradient(2, 62, 75);
  conicGrad1.addColorStop(0, "#A7D30C");
  conicGrad1.addColorStop(1, "white");

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

Der erste Verlauf befindet sich in der Mitte des ersten Rechtecks und bewegt einen grünen Farbverlaufspunkt am Anfang zu einem weißen am Ende. Der Winkel beginnt bei 2 Radiant, was wegen der nach Südosten weisenden Anfangs-/Endlinie auffällt.

Der zweite Verlauf befindet sich ebenfalls in der Mitte seines zweiten Rechtecks. Dieser hat mehrere Farbverlaufspunkte, die bei jeder Vierteldrehung von Schwarz zu Weiß wechseln. Dies gibt uns den schachbrettartigen Effekt.

{{EmbedLiveSample("A_createConicGradient_example", "", "160")}}

## Muster

In einem der Beispiele auf der vorherigen Seite haben wir eine Reihe von Schleifen verwendet, um ein Muster von Bildern zu erstellen. Es gibt jedoch eine viel einfachere Methode: die Methode `createPattern()`.

- [`createPattern(image, type)`](/de/docs/Web/API/CanvasRenderingContext2D/createPattern)
  - : Erstellt und gibt ein neues Canvas-Muster-Objekt zurück. `image` ist die Quelle des Bildes (d.h. ein [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement), ein [`SVGImageElement`](/de/docs/Web/API/SVGImageElement), ein anderes [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) oder ein [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas), ein [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) oder ein [`VideoFrame`](/de/docs/Web/API/VideoFrame), oder ein [`ImageBitmap`](/de/docs/Web/API/ImageBitmap)). `type` ist ein String, der angibt, wie das Bild verwendet werden soll.

Der Typ gibt an, wie das Bild verwendet werden soll, um das Muster zu erstellen, und muss einer der folgenden String-Werte sein:

- `repeat`
  - : Kachelt das Bild in beide Richtungen, vertikal und horizontal.
- `repeat-x`
  - : Kachelt das Bild horizontal, aber nicht vertikal.
- `repeat-y`
  - : Kachelt das Bild vertikal, aber nicht horizontal.
- `no-repeat`
  - : Kachelt das Bild nicht. Es wird nur einmal verwendet.

Wir verwenden diese Methode, um ein [`CanvasPattern`](/de/docs/Web/API/CanvasPattern)-Objekt zu erstellen, das sehr ähnlich wie die oben gesehenen Verlaufsfarben-Methoden ist. Sobald wir ein Muster erstellt haben, können wir es den Eigenschaften `fillStyle` oder `strokeStyle` zuweisen. Zum Beispiel:

```js
const img = new Image();
img.src = "some-image.png";
const pattern = ctx.createPattern(img, "repeat");
```

> [!NOTE]
> Wie bei der `drawImage()`-Methode müssen Sie sicherstellen, dass das verwendete Bild geladen ist, bevor Sie diese Methode aufrufen, da das Muster sonst möglicherweise falsch gezeichnet wird.

### Ein `createPattern`-Beispiel

In diesem letzten Beispiel erstellen wir ein Muster, das der `fillStyle`-Eigenschaft zugewiesen wird. Das einzige, das beachtet werden sollte, ist die Verwendung des `onload`-Handlers des Bildes. Dies ist, um sicherzustellen, dass das Bild geladen ist, bevor es dem Muster zugewiesen wird.

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

Die Verwendung von Schatten umfasst nur vier Eigenschaften:

- [`shadowOffsetX = float`](/de/docs/Web/API/CanvasRenderingContext2D/shadowOffsetX)
  - : Gibt die horizontale Entfernung an, die der Schatten vom Objekt aus verlaufen soll. Dieser Wert wird nicht von der Transformationsmatrix beeinflusst. Der Standardwert ist 0.
- [`shadowOffsetY = float`](/de/docs/Web/API/CanvasRenderingContext2D/shadowOffsetY)
  - : Gibt die vertikale Entfernung an, die der Schatten vom Objekt aus verlaufen soll. Dieser Wert wird nicht von der Transformationsmatrix beeinflusst. Der Standardwert ist 0.
- [`shadowBlur = float`](/de/docs/Web/API/CanvasRenderingContext2D/shadowBlur)
  - : Gibt die Größe des Unschärfeeffekts an; dieser Wert entspricht nicht einer Anzahl von Pixeln und wird nicht von der aktuellen Transformationsmatrix beeinflusst. Der Standardwert ist 0.
- [`shadowColor = color`](/de/docs/Web/API/CanvasRenderingContext2D/shadowColor)
  - : Ein Standard-CSS-Farbwert, der die Farbe des Schatteneffekts angibt; standardmäßig ist er vollständig transparenter Schwarz.

Die Eigenschaften `shadowOffsetX` und `shadowOffsetY` geben an, wie weit der Schatten vom Objekt in X- und Y-Richtung verlängert werden soll; diese Werte werden nicht durch die aktuelle Transformationsmatrix beeinflusst. Verwenden Sie negative Werte, um den Schatten nach oben oder nach links zu verlängern, und positive Werte, um ihn nach unten oder nach rechts zu verlängern. Beide haben standardmäßig den Wert 0.

Die Eigenschaft `shadowBlur` gibt die Größe des Unschärfeeffekts an; dieser Wert entspricht nicht einer Anzahl von Pixeln und wird nicht von der aktuellen Transformationsmatrix beeinflusst. Der Standardwert ist 0.

Die Eigenschaft `shadowColor` ist ein Standard-CSS-Farbwert, der die Farbe des Schatteneffekts angibt; standardmäßig ist er vollständig transparenter Schwarz.

> [!NOTE]
> Schatten werden nur für `source-over` [Kompositionsoperationen](/de/docs/Web/API/Canvas_API/Tutorial/Compositing) gezeichnet.

### Ein Beispiel für beschatteten Text

Dieses Beispiel zeichnet eine Textzeichenfolge mit einem Schatteneffekt.

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

Wir werden uns die `font`-Eigenschaft und die `fillText`-Methode im nächsten Kapitel über [Text zeichnen](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text) ansehen.

## Canvas-Füllregeln

Beim Verwenden von `fill` (oder [`clip`](/de/docs/Web/API/CanvasRenderingContext2D/clip) und [`isPointInPath`](/de/docs/Web/API/CanvasRenderingContext2D/isPointInPath)) können Sie optional einen Füllregelalgorithmus angeben, mit dem bestimmt wird, ob ein Punkt innerhalb oder außerhalb eines Pfades liegt und ob er gefüllt wird oder nicht. Dies ist nützlich, wenn sich ein Pfad selbst schneidet oder verschachtelt ist.

Es sind zwei Werte möglich:

- `nonzero`
  - : Die [Nicht-Null-Winde-Regel](https://de.wikipedia.org/wiki/Non-zero-rule), die die Standardregel ist.
- `evenodd`
  - : Die [Gerade-Ungerade-Regel](https://de.wikipedia.org/wiki/Even%E2%80%93odd_rule).

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
