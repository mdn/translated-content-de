---
title: Stile und Farben anwenden
slug: Web/API/Canvas_API/Tutorial/Applying_styles_and_colors
l10n:
  sourceCommit: 5f2a755c4fa7d126f85b56fbca90b15c5f039eff
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Drawing_shapes", "Web/API/Canvas_API/Tutorial/Drawing_text")}}

Im Kapitel über [Formen zeichnen](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes) haben wir nur die Standardlinien- und Füllstile verwendet. Hier werden wir die Canvas-Optionen erkunden, die uns zur Verfügung stehen, um unsere Zeichnungen etwas attraktiver zu gestalten. Sie lernen, wie Sie Ihren Zeichnungen verschiedene Farben, Linienstile, Verläufe, Muster und Schatten hinzufügen können.

> [!NOTE]
> Canvas-Inhalt ist für Screenreader nicht zugänglich. Wenn das Canvas rein dekorativ ist, fügen Sie `role="presentation"` zum öffnenden `<canvas>`-Tag hinzu. Andernfalls fügen Sie beschreibenden Text als Wert des [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)-Attributs direkt zum Canvas-Element hinzu oder fügen Sie Ersatzinhalt zwischen dem öffnenden und dem schließenden Canvas-Tag hinzu. Canvas-Inhalt ist nicht Teil des DOM, aber verschachtelter Ersatzinhalt schon.

## Farben

Bisher haben wir nur Methoden des Zeichnungskontexts gesehen. Wenn wir Farben auf eine Form anwenden wollen, gibt es zwei wichtige Eigenschaften, die wir verwenden können: `fillStyle` und `strokeStyle`.

- [`fillStyle = color`](/de/docs/Web/API/CanvasRenderingContext2D/fillStyle)
  - : Legt den Stil fest, der beim Füllen von Formen verwendet wird.
- [`strokeStyle = color`](/de/docs/Web/API/CanvasRenderingContext2D/strokeStyle)
  - : Legt den Stil für die Umrisse von Formen fest.

`color` ist eine Zeichenkette, die einen CSS {{cssxref("&lt;color&gt;")}}, ein Gradientenobjekt oder ein Musterobjekt darstellt. Wir werden später auf Gradient- und Musterobjekte eingehen. Standardmäßig sind die Strich- und Füllfarbe auf Schwarz (CSS-Farbwert `#000000`) eingestellt.

> [!NOTE]
> Wenn Sie die Eigenschaft `strokeStyle` und/oder `fillStyle` setzen, wird der neue Wert zum Standardwert für alle zukünftig gezeichneten Formen. Für jede Form, die Sie in einer anderen Farbe haben möchten, müssen Sie die Eigenschaft `fillStyle` oder `strokeStyle` neu zuweisen.

Die gültigen Zeichenfolgen, die Sie eingeben können, sollten gemäß der Spezifikation CSS {{cssxref("&lt;color&gt;")}}-Werte sein. Jedes der folgenden Beispiele beschreibt dieselbe Farbe.

```js
// these all set the fillStyle to 'orange'

ctx.fillStyle = "orange";
ctx.fillStyle = "#FFA500";
ctx.fillStyle = "rgb(255 165 0)";
ctx.fillStyle = "rgb(255 165 0 / 100%)";
```

### Ein `fillStyle`-Beispiel

In diesem Beispiel verwenden wir erneut zwei `for`-Schleifen, um ein Gitter von Rechtecken zu zeichnen, von denen jedes eine andere Farbe hat. Das resultierende Bild sollte ungefähr wie der Screenshot aussehen. Hier passiert nichts allzu Spektakuläres. Wir verwenden die beiden Variablen `i` und `j`, um eine einzigartige RGB-Farbe für jedes Quadrat zu generieren und ändern nur die roten und grünen Werte. Der blaue Kanal hat einen festen Wert. Durch das Ändern der Kanäle können Sie alle Arten von Paletten generieren. Durch Erhöhen der Schritte können Sie etwas erreichen, das wie die Farbpaletten aussieht, die Photoshop verwendet.

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

Dieses Beispiel ähnelt dem vorherigen, verwendet jedoch die `strokeStyle`-Eigenschaft, um die Farben der Umrisse der Formen zu ändern. Wir verwenden die Methode `arc()`, um Kreise anstelle von Quadraten zu zeichnen.

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

Neben dem Zeichnen undurchsichtiger Formen auf dem Canvas können wir auch halbtransparente (oder durchscheinende) Formen zeichnen. Dies geschieht entweder durch Setzen der Eigenschaft `globalAlpha` oder durch Zuweisen einer halbtransparenten Farbe zum Strich- und/oder Füllstil.

- [`globalAlpha = transparencyValue`](/de/docs/Web/API/CanvasRenderingContext2D/globalAlpha)
  - : Wendet den angegebenen Transparenzwert auf alle zukünftigen, auf dem Canvas gezeichneten Formen an. Der Wert muss zwischen 0.0 (vollständig transparent) und 1.0 (vollständig deckend) liegen. Dieser Wert ist standardmäßig 1.0 (vollständig deckend).

Die Eigenschaft `globalAlpha` kann nützlich sein, wenn Sie viele Formen auf das Canvas zeichnen möchten, die eine ähnliche Transparenz aufweisen. Andernfalls ist es im Allgemeinen nützlicher, die Transparenz einzelner Formen einzustellen, wenn Sie ihre Farben festlegen.

Da die Eigenschaften `strokeStyle` und `fillStyle` CSS-RGB-Farbwerte akzeptieren, können wir die folgende Notation verwenden, um ihnen eine transparente Farbe zuzuweisen.

```js
// Assigning transparent colors to stroke and fill style

ctx.strokeStyle = "rgb(255 0 0 / 50%)";
ctx.fillStyle = "rgb(255 0 0 / 50%)";
```

Die Funktion `rgb()` hat einen optionalen Zusatzparameter. Der letzte Parameter legt den Transparenzwert dieser speziellen Farbe fest. Der gültige Bereich wird als Prozentsatz zwischen `0%` (vollständig transparent) und `100%` (vollständig deckend) oder als Zahl zwischen `0.0` (entspricht `0%`) und `1.0` (entspricht `100%`) angegeben.

### Ein `globalAlpha`-Beispiel

In diesem Beispiel zeichnen wir einen Hintergrund aus vier unterschiedlich gefärbten Quadraten. Darüber zeichnen wir eine Reihe von halbtransparenten Kreisen. Die Eigenschaft `globalAlpha` ist auf `0.2` gesetzt, was für alle darauf folgenden Formen verwendet wird. Jeder Schritt in der `for`-Schleife zeichnet eine Reihe von Kreisen mit zunehmendem Radius. Das Endergebnis ist ein radialer Verlauf. Durch das Überlagern von immer mehr Kreisen übereinander verringern wir effektiv die Transparenz der bereits gezeichneten Kreise. Durch Erhöhen der Schrittanzahl und effektives Zeichnen von mehr Kreisen würde der Hintergrund in der Mitte des Bildes vollständig verschwinden.

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

### Ein Beispiel mit `rgb()` und Alpha-Transparenz

In diesem zweiten Beispiel machen wir etwas Ähnliches wie im vorherigen, aber anstatt Kreise übereinander zu zeichnen, habe ich kleine Rechtecke mit zunehmender Deckkraft gezeichnet. Die Verwendung von `rgb()` bietet Ihnen etwas mehr Kontrolle und Flexibilität, da wir den Füll- und den Strichstil individuell setzen können.

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
  - : Setzt die Breite der in Zukunft gezeichneten Linien.
- [`lineCap = type`](/de/docs/Web/API/CanvasRenderingContext2D/lineCap)
  - : Legt das Aussehen der Enden von Linien fest.
- [`lineJoin = type`](/de/docs/Web/API/CanvasRenderingContext2D/lineJoin)
  - : Legt das Aussehen der "Ecken" fest, an denen Linien aufeinandertreffen.
- [`miterLimit = value`](/de/docs/Web/API/CanvasRenderingContext2D/miterLimit)
  - : Legt ein Limit für das Miter fest, wenn zwei Linien sich in einem scharfen Winkel treffen, um zu kontrollieren, wie dick der Übergang wird.
- [`getLineDash()`](/de/docs/Web/API/CanvasRenderingContext2D/getLineDash)
  - : Gibt das aktuelle Linienmuster als Array zurück, das eine gerade Anzahl nicht-negativer Zahlen enthält.
- [`setLineDash(segments)`](/de/docs/Web/API/CanvasRenderingContext2D/setLineDash)
  - : Setzt das aktuelle Linienmuster.
- [`lineDashOffset = value`](/de/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)
  - : Gibt an, wo ein Strichmuster auf einer Linie beginnen soll.

Sie werden ein besseres Verständnis dafür bekommen, was diese tun, wenn Sie sich die folgenden Beispiele ansehen.

### Ein `lineWidth`-Beispiel

Diese Eigenschaft setzt die aktuelle Linienstärke. Werte müssen positive Zahlen sein. Standardmäßig ist dieser Wert auf 1.0 Einheiten gesetzt.

Die Linienbreite ist die Dicke des Strichs, zentriert auf dem gegebenen Pfad. Mit anderen Worten, der gezeichnete Bereich erstreckt sich zu beiden Seiten des Pfades um die Hälfte der Linienbreite. Da Canvas-Koordinaten keine direkten Pixelreferenzen sind, muss beim Erreichen scharfer horizontaler und vertikaler Linien besondere Vorsicht walten.

Im folgenden Beispiel werden 10 gerade Linien mit zunehmenden Linienbreiten gezeichnet. Die Linie ganz links ist 1.0 Einheiten breit. Die linke und alle anderen Linien mit ungerade-ganzzahligen Breiten erscheinen jedoch nicht scharf, aufgrund der Positionierung des Pfades.

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

Das Erreichen scharfer Linien erfordert ein Verständnis dafür, wie Pfade gezeichnet werden. In den folgenden Bildern stellt das Raster das Canvas-Koordinatengitter dar. Die Quadrate zwischen den Rasterlinien sind die tatsächlichen Bildschirm-Pixel. Im ersten Rasterbild unten ist das Rechteck von (2,1) bis (5,5) gefüllt. Der gesamte Bereich dazwischen (hellrot) fällt auf die Pixelgrenzen, sodass das resultierende gefüllte Rechteck scharfe Kanten hat.

![Drei Koordinatengitter. Die Rasterlinien sind die tatsächlichen Pixel auf dem Bildschirm. Die obere linke Ecke jedes Gitters ist mit (0,0) markiert. Im ersten Gitter ist ein Rechteck von (2,1) bis (5,5) in hellrot eingefärbt. Im zweiten Gitter ist (3,1) bis (3,5) mit einer 1-Pixel-dicken königsblauen Linie verbunden. Die königsblaue Linie ist auf einer Rasterlinie zentriert, die von 2.5 bis 3.5 auf der x-Achse reicht, zur Hälfte der Pixel, die sich beiderseits der Darstellungslinie befinden, mit einem hellblauen Hintergrund auf beiden Seiten, der von 2 bis 4 auf der x-Achse reicht. Um die hellblaue Unschärfeverlängerung der Linie im zweiten Koordinatengitter zu vermeiden, ist der Pfad im dritten Koordinatengitter eine königsblaue Linie von (3.5,1) bis (3.5,5). Die 1-Pixel-Linienbreite füllt am Ende vollständig und exakt eine einzelne Pixelvertikallinie aus.](canvas-grid.png)

Wenn Sie einen Pfad von (3,1) bis (3,5) mit einer Linienstärke von `1.0` betrachten, endet dies in der Situation im zweiten Bild. Der tatsächlich zu füllende Bereich (dunkelblau) erstreckt sich nur zur Hälfte in die Pixel auf beiden Seiten des Pfades. Eine Annäherung an dieses muss gerendert werden, was bedeutet, dass diese Pixel nur teilweise gefüllt werden, und das Ergebnis ist, dass der gesamte Bereich (das hellblaue und dunkelblaue) mit einer Farbe gefüllt wird, die nur halb so dunkel wie die tatsächliche Strichfarbe ist. Dies passiert bei der `1.0` Breitlinie im vorherigen Beispielcode.

Um dies zu korrigieren, müssen Sie beim Erstellen von Pfaden sehr genau sein. Wenn Sie wissen, dass eine `1.0` breite Linie sich um eine halbe Einheit zu beiden Seiten des Pfades erstrecken wird, ergibt sich bei Erstellung des Pfades von (3.5,1) bis (3.5,5) die Situation im dritten Bild - die `1.0` Linienbreite füllt am Ende vollständig und exakt eine einzelne Pixelvertikallinie.

> [!NOTE]
> Bitte beachten Sie, dass in unserem Beispiel mit der vertikalen Linie die Y-Position immer noch eine Ganzzahlrasterposition referenziert - wenn dies nicht der Fall gewesen wäre, würden wir an den Endpunkten Pixel mit halber Abdeckung sehen (aber beachten Sie auch, dass dieses Verhalten vom aktuellen `lineCap`-Stil abhängt, dessen Standardwert `butt` ist; Sie möchten möglicherweise konsistente Striche mit halben Pixelkoordinaten für ungeradzahlige Breitenlinien berechnen, indem Sie den `lineCap`-Stil auf `square` setzen, sodass die äußere Begrenzung des Strichs um den Endpunkt automatisch erweitert wird, um das gesamte Pixel genau abzudecken).
>
> Beachten Sie auch, dass nur die Start- und Endendpunkte eines Pfades betroffen sind: wenn ein Pfad mit `closePath()` geschlossen wird, gibt es keinen Start- und Endendpunkt; stattdessen werden alle Punkte im Pfad mit dem aktuellen `lineJoin`-Stil verbunden, dessen Standardwert `miter` ist, mit der Wirkung, dass die äußeren Begrenzungen der verbundenen Segmente automatisch zu ihrem Schnittpunkt verlängert werden, sodass der gerenderte Strich genau volle Pixel in der Mitte jedes Endpunkts abdeckt, wenn diese verbundenen Segmente horizontal und/oder vertikal sind. Weitere Beispiele zu diesen zusätzlichen Linienstilen finden Sie in den nächsten beiden Abschnitten.

Bei Linien mit geraden Breiten ist jedes Ende eine ganze Anzahl von Pixeln, sodass Sie einen Pfad erstellen wollen, der zwischen den Pixeln ist (d.h. von (3,1) bis (3,5)), anstatt mitten durch die Pixel.

Während es ein wenig schmerzhaft sein kann, zuerst mit skalierbaren 2D-Grafiken zu arbeiten, stellt das Beachten des Pixelrasters und der Position der Pfade sicher, dass Ihre Zeichnungen unabhängig von der Skalierung oder anderen beteiligten Transformationen korrekt aussehen. Eine `1.0`-breite vertikale Linie, die an der richtigen Position gezeichnet wurde, wird zu einer scharfen 2-Pixel-Linie, wenn sie um das Doppelte vergrößert wird, und an der richtigen Position erscheinen.

### Ein `lineCap`-Beispiel

Die Eigenschaft `lineCap` bestimmt, wie die Endpunkte jeder Linie gezeichnet werden. Es gibt drei mögliche Werte für diese Eigenschaft, und dies sind: `butt`, `round` und `square`. Standardmäßig ist diese Eigenschaft auf `butt` gesetzt:

- `butt`
  - : Die Enden von Linien werden mit einem Flächensatz abgeschnitten.
- `round`
  - : Die Enden von Linien sind abgerundet.
- `square`
  - : Die Enden von Linien werden durch Hinzufügen eines Feldes mit gleicher Breite und halber Höhe der Linienstärke abgeschnitten.

In diesem Beispiel zeichnen wir drei Linien, jede mit einem anderen Wert für die `lineCap`-Eigenschaft. Ich habe auch zwei Hilfslinien hinzugefügt, um die genauen Unterschiede zwischen den dreien zu sehen. Jede dieser Linien beginnt und endet genau auf diesen Hilfslinien.

Die Linie auf der linken Seite verwendet die Standard-Option `butt`. Sie werden bemerken, dass sie vollständig bündig mit den Hilfslinien gezeichnet ist. Die zweite ist mit der Option `round` eingestellt. Diese fügt einen Halbkreis am Ende hinzu, der einen Radius hat, der halb so breit ist wie die Linie. Die Linie auf der rechten Seite verwendet die Option `square`. Diese fügt ein Feld mit gleicher Breite und halber Höhe der Linienstärke hinzu.

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

### Ein `lineJoin`-Beispiel

Die Eigenschaft `lineJoin` bestimmt, wie zwei verbundene Segmente (von Linien, Bögen oder Kurven) mit nicht null Längen in einer Form zusammengefügt werden (entartete Segmente mit null Längen, deren spezifizierte Endpunkte und Kontrollpunkte genau auf der gleichen Position sind, werden übersprungen).

Es gibt drei mögliche Werte für diese Eigenschaft: `round`, `bevel` und `miter`. Standardmäßig ist diese Eigenschaft auf `miter` gesetzt. Beachten Sie, dass die `lineJoin`-Einstellung keine Wirkung hat, wenn die beiden verbundenen Segmente dieselbe Richtung haben, da in diesem Fall kein Verbundbereich hinzugefügt wird:

- `round`
  - : Rundet die Ecken einer Form ab, indem ein zusätzliches Sektorreibscheibensegment am gemeinsamen Endpunkt der verbundenen Segmente gefüllt wird. Der Radius für diese abgerundeten Ecken entspricht der halben Linienbreite.
- `bevel`
  - : Füllt einen zusätzlichen dreieckigen Bereich zwischen dem gemeinsamen Endpunkt der verbundenen Segmente und den separaten äußeren rechteckigen Ecken jedes Segments.
- `miter`
  - : Verbundene Segmente werden durch Verlängern ihrer äußeren Kanten verbunden, um an einem einzelnen Punkt zu verbinden, mit der Wirkung eines zusätzlichen rautenförmigen Bereiches. Diese Einstellung wird durch die Eigenschaft `miterLimit` beeinflusst, die unten erklärt wird.

Das folgende Beispiel zeichnet drei verschiedene Pfade und demonstriert jede dieser drei `lineJoin`-Eigenschaftseinstellungen; der Output ist oben dargestellt.

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

Wie Sie im vorherigen Beispiel gesehen haben, werden bei der Verbindung von zwei Linien mit der `miter`-Option die äußeren Kanten der beiden verbundenen Linien bis zu dem Punkt verlängert, an dem sie sich treffen. Für Linien, die große Winkel miteinander haben, ist dieser Punkt nicht weit vom inneren Verbindungspunkt entfernt. Bei abnehmendem Winkel zwischen jeder Linie nimmt der Abstand (miter length) zwischen diesen Punkten jedoch exponentiell zu.

Die Eigenschaft `miterLimit` bestimmt, wie weit der äußere Verbindungspunkt vom inneren Verbindungspunkt entfernt sein kann. Wenn zwei Linien diesen Wert überschreiten, wird stattdessen eine abgeschrägte Verbindung gezeichnet. Beachten Sie, dass die maximale Miterlänge das Produkt der Linienbreite, gemessen im aktuellen Koordinatensystem, durch den Wert dieser `miterLimit`-Eigenschaft ist (deren Standardwert 10.0 im HTML {{HTMLElement("canvas")}}ist), sodass das `miterLimit` unabhängig von der aktuellen Bildschirmskala oder any Affinentransformationen von Pfaden gesetzt werden kann: Es beeinflusst nur die tatsächlich gerenderte Linienform der Linienkanten.

Genauer gesagt ist das Miterlimit das maximale Verhältnis der Erweiterungslänge (im HTML-Canvas, gemessen zwischen dem äußeren Eckpunkt der verbundenen Kanten der Linie und dem gemeinsamen Endpunkt verbundener Segmente, die im Pfad spezifiziert sind) zur halben Linienbreite. Es kann äquivalent als das maximale Verhältnis zwischen dem Abstand der inneren und äußeren Punkteder Verbindung der Kanten zur gesamten Linienbreite definiert werden. Es ist dann gleich dem Umkehrwert der Sinus-Hälfte des minimalen Innenwinkels der verbundenen Segmente unterhalb, bei dem keine Miterverbindung dargestellt wird, sondern nur mit einer Abschrägung:

- `miterLimit` = **max** `miterLength` / `lineWidth` = 1 / **sin** ( **min** _θ_ / 2 )
- Das Standard-Miterlimit von 10.0 wird alle Miter bei scharfen Winkeln unter etwa 11 Grad abscheren.
- Ein Miterlimit gleich √2 ≈ 1.4142136 (nach oben gerundet) wird Miter für alle spitzen Winkel abscheren und Miterverbindungen nur für stumpfe oder rechte Winkel beibehalten.
- Ein Miterlimit gleich 1.0 ist gültig, wird aber alle Miter deaktivieren.
- Werte unter 1.0 sind für das Miterlimit ungültig.

Hier ist eine kleine Demo, in der Sie das `miterLimit` dynamisch festlegen können und sehen, wie sich das auf die Formen auf dem Canvas auswirkt. Die blauen Linien zeigen, wo sich der Anfangs- und Endpunkt jedes der Linien im Zickzackmuster befinden.

Wenn Sie in dieser Demo einen `miterLimit`-Wert unter 4.2 angeben, wird keine der sichtbaren Ecken mit einer Miter-Erweiterung verbunden, sondern nur mit einer kleinen Abschrägung in der Nähe der blauen Linien; mit einem `miterLimit` über 10 sollte die meisten Ecken in dieser Demo mit einer Miter weit weg von den blauen Linien verbunden sein, und deren Höhe zwischen den Ecken von links nach rechts abnehmen, weil sie mit zunehmenden Winkeln verbunden sind; mit Zwischenwerten werden die Ecken auf der linken Seite nur mit einer Abschrägung in der Nähe der blauen Linien verbunden, und die Ecken auf der rechten Seite mit einer Miter-Erweiterung (auch mit einer abnehmenden Höhe).

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

### Verwendung von Linienstreifen

Die Methode `setLineDash` und die Eigenschaft `lineDashOffset` spezifizieren das Streifenmuster für Linien. Die Methode `setLineDash` akzeptiert eine Liste von Zahlen, die Entfernungen zum abwechselnden Zeichnen einer Linie und einer Lücke spezifizieren und die Eigenschaft `lineDashOffset` gibt einen Versatz an, wo das Muster beginnen soll.

In diesem Beispiel erzeugen wir einen "marching ants"-Effekt. Es handelt sich um eine Animationstechnik, die häufig in Auswahlwerkzeugen von Computer-Grafikprogrammen zu finden ist. Sie hilft dem Benutzer, den Auswahlrand vom Bildhintergrund zu unterscheiden, indem der Rand animiert wird. In einem späteren Teil dieses Tutorials lernen Sie, wie Sie dies und andere [grundlegende Animationen](/de/docs/Web/API/Canvas_API/Tutorial/Basic_animations) umsetzen können.

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

Genau wie bei jedem normalen Zeichenprogramm können wir Formen mit linearen, radialen und konischen Verläufen füllen und umranden. Wir erstellen ein [`CanvasGradient`](/de/docs/Web/API/CanvasGradient)-Objekt, indem wir eine der folgenden Methoden verwenden. Wir können dieses Objekt dann den Eigenschaften `fillStyle` oder `strokeStyle` zuweisen.

- [`createLinearGradient(x1, y1, x2, y2)`](/de/docs/Web/API/CanvasRenderingContext2D/createLinearGradient)
  - : Erstellt ein lineares Gradientenobjekt mit einem Startpunkt von (`x1`, `y1`) und einem Endpunkt von (`x2`, `y2`).
- [`createRadialGradient(x1, y1, r1, x2, y2, r2)`](/de/docs/Web/API/CanvasRenderingContext2D/createRadialGradient)
  - : Erstellt einen radialen Verlauf. Die Parameter stehen für zwei Kreise, einen mit seinem Mittelpunkt bei (`x1`, `y1`) und einem Radius von `r1`, und den anderen mit seinem Mittelpunkt bei (`x2`, `y2`) mit einem Radius von `r2`.
- [`createConicGradient(angle, x, y)`](/de/docs/Web/API/CanvasRenderingContext2D/createConicGradient)
  - : Erstellt ein konisches Gradientenobjekt mit einem Startwinkel von `angle` im Bogenmaß, an der Position (`x`, `y`).

Zum Beispiel:

```js
const lineargradient = ctx.createLinearGradient(0, 0, 150, 150);
const radialgradient = ctx.createRadialGradient(75, 75, 0, 75, 75, 100);
```

Sobald wir ein `CanvasGradient`-Objekt erstellt haben, können wir ihm Farben mit der Methode `addColorStop()` zuweisen.

- [`gradient.addColorStop(position, color)`](/de/docs/Web/API/CanvasGradient/addColorStop)
  - : Erstellt einen neuen Farbpunkt auf dem `gradient`-Objekt. Die `position` ist eine Zahl zwischen 0.0 und 1.0 und definiert die relative Position der Farbe im Verlauf, und das `color`-Argument muss eine Zeichenkette sein, die einen CSS {{cssxref("&lt;color&gt;")}} repräsentiert, was die Farbe angibt, die der Verlauf an diesem Offset in der Transition erreichen soll.

Sie können einem Verlauf so viele Farbstopps hinzufügen, wie Sie benötigen. Unten ist ein sehr einfacher linearer Verlauf von Weiß zu Schwarz dargestellt.

```js
const lineargradient = ctx.createLinearGradient(0, 0, 150, 150);
lineargradient.addColorStop(0, "white");
lineargradient.addColorStop(1, "black");
```

### Ein `createLinearGradient`-Beispiel

In diesem Beispiel erstellen wir zwei unterschiedliche Verläufe. Wie Sie hier sehen können, können sowohl die Eigenschaften `strokeStyle` als auch `fillStyle` ein `canvasGradient`-Objekt als gültige Eingabe akzeptieren.

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

Der erste ist ein Hintergrundverlauf. Wie Sie sehen können, haben wir zwei Farben an derselben Position zugewiesen. Sie machen dies, um sehr scharfe Farbwechsel zu erzeugen - in diesem Fall von Weiß zu Grün. Normalerweise spielt die Reihenfolge, in der Sie die Farbstopps definieren, keine Rolle, aber in diesem speziellen Fall ist es sehr entscheidend. Wenn Sie die Zuweisungen in der Reihenfolge lassen, in der sie erscheinen sollen, wird dies kein Problem darstellen.

Im zweiten Verlauf haben wir die Ausgangsfarbe (an Position 0.0) nicht zugewiesen, da es nicht strikt notwendig war, weil es automatisch die Farbe des nächsten Farbstopps annimmt. Daher stimmt es, dass die Zuweisung der schwarzen Farbe an Position 0.5 den Verlauf vom Anfang bis zu diesem Punkt schwarz macht.

{{EmbedLiveSample("A_createLinearGradient_example", "", "160")}}

### Ein `createRadialGradient`-Beispiel

In diesem Beispiel definieren wir vier verschiedene radiale Verläufe. Da wir Kontrolle über die Start- und Endpunkte des Verlaufs haben, können wir komplexere Effekte erzielen als normalerweise bei den "klassischen" radialen Verläufen, die wir beispielsweise in Photoshop sehen (das heißt, ein Verlauf mit einem einzelnen Mittelpunkt, bei dem der Verlauf in einer kreisförmigen Form nach außen expandiert).

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

In diesem Fall haben wir den Startpunkt leicht vom Endpunkt versetzt, um einen sphärischen 3D-Effekt zu erzielen. Es ist am besten zu vermeiden, dass sich die Innen- und Außenkreise überlappen, da dies zu schwer vorhersehbaren Effekten führt.

Der letzte Farbpunkt in jedem der vier Verläufe verwendet eine vollständig transparente Farbe. Wenn Sie einen schönen Übergang von diesem zu dem vorherigen Farbpunkt haben möchten, sollten beide Farben gleich sein. Dies ist aus dem Code nicht sehr offensichtlich, da er zwei verschiedene CSS-Farbmethoden als Demonstration verwendet, aber im ersten Verlauf `#019F62 = rgb(1 159 98 / 100%)`.

{{EmbedLiveSample("A_createRadialGradient_example", "", "160")}}

### Ein `createConicGradient`-Beispiel

In diesem Beispiel definieren wir zwei unterschiedliche konische Verläufe. Ein konischer Verlauf unterscheidet sich von einem radialen, da er statt Kreise zu erzeugen, um einen Punkt kreist.

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

Der erste Verlauf ist in der Mitte des ersten Rechtecks positioniert und bewegt einen grünen Farbpunkt am Anfang zu einem weißen am Ende. Der Winkel beginnt bei 2 Bogenmaß, was durch die nach Südosten zeigende Anfangs-/Endlinie erkennbar ist.

Der zweite Verlauf ist ebenfalls im Mittelpunkt seines zweiten Rechtecks positioniert. Dieser hat mehrere Farbstopps, die bei jeder viertel Drehung von Schwarz zu Weiß wechseln. Dies gibt uns den karierten Effekt.

{{EmbedLiveSample("A_createConicGradient_example", "", "160")}}

## Muster

In einem der Beispiele auf der vorherigen Seite haben wir eine Reihe von Schleifen verwendet, um ein Muster von Bildern zu erstellen. Es gibt jedoch eine weitaus einfachere Methode: die Methode `createPattern()`.

- [`createPattern(image, type)`](/de/docs/Web/API/CanvasRenderingContext2D/createPattern)
  - : Erstellt und gibt ein neues Canvas-Musterobjekt zurück. `image` ist die Quelle des Bildes (das heißt, ein [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement), ein [`SVGImageElement`](/de/docs/Web/API/SVGImageElement), ein anderes [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) oder ein [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas), ein [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) oder ein [`VideoFrame`](/de/docs/Web/API/VideoFrame), oder ein [`ImageBitmap`](/de/docs/Web/API/ImageBitmap)). `type` ist ein String, der angibt, wie das Bild verwendet werden soll.

Der Typ gibt an, wie das Bild zur Erstellung des Musters verwendet wird und muss einer der folgenden String-Werte sein:

- `repeat`
  - : Kachelt das Bild sowohl vertikal als auch horizontal.
- `repeat-x`
  - : Kachelt das Bild horizontal, aber nicht vertikal.
- `repeat-y`
  - : Kachelt das Bild vertikal, aber nicht horizontal.
- `no-repeat`
  - : Kachelt das Bild nicht. Es wird nur einmal verwendet.

Wir verwenden diese Methode, um ein [`CanvasPattern`](/de/docs/Web/API/CanvasPattern)-Objekt zu erstellen, das den Gradientenmethoden ähneln, die wir oben gesehen haben. Sobald wir ein Muster erstellt haben, können wir es den Eigenschaften `fillStyle` oder `strokeStyle` zuweisen. Beispielsweise:

```js
const img = new Image();
img.src = "some-image.png";
const pattern = ctx.createPattern(img, "repeat");
```

> [!NOTE]
> Wie bei der `drawImage()`-Methode müssen Sie sicherstellen, dass das verwendete Bild geladen ist, bevor Sie diese Methode aufrufen, andernfalls kann das Muster möglicherweise falsch gezeichnet werden.

### Ein `createPattern`-Beispiel

In diesem letzten Beispiel erstellen wir ein Muster, das wir der Eigenschaft `fillStyle` zuweisen. Das Einzige, das beachtet werden sollte, ist die Verwendung des `onload`-Handlers des Bildes. Dies soll sicherstellen, dass das Bild geladen wird, bevor es dem Muster zugewiesen wird.

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
  - : Gibt die horizontale Entfernung an, die der Schatten vom Objekt aus erstreckt werden soll. Dieser Wert wird nicht von der Transformationsmatrix beeinflusst. Der Standardwert ist 0.
- [`shadowOffsetY = float`](/de/docs/Web/API/CanvasRenderingContext2D/shadowOffsetY)
  - : Gibt die vertikale Entfernung an, die der Schatten vom Objekt aus erstreckt werden soll. Dieser Wert wird nicht von der Transformationsmatrix beeinflusst. Der Standardwert ist 0.
- [`shadowBlur = float`](/de/docs/Web/API/CanvasRenderingContext2D/shadowBlur)
  - : Gibt die Größe des Unschärfeeffekts an; dieser Wert entspricht nicht einer Anzahl von Pixeln und wird nicht von der aktuellen Transformationsmatrix beeinflusst. Der Standardwert ist 0.
- [`shadowColor = color`](/de/docs/Web/API/CanvasRenderingContext2D/shadowColor)
  - : Ein standardmäßiger CSS-Farbwert, der die Farbe des Schatteneffekts angibt; standardmäßig ist es vollständig transparentes Schwarz.

Die Eigenschaften `shadowOffsetX` und `shadowOffsetY` geben an, wie weit sich der Schatten vom Objekt in den X- und Y-Richtungen erstrecken soll; diese Werte werden nicht von der aktuellen Transformationsmatrix beeinflusst. Verwenden Sie negative Werte, um den Schatten nach oben oder nach links zu verlängern, und positive Werte, um den Schatten nach unten oder nach rechts zu verlängern. Beide sind standardmäßig 0.

Die Eigenschaft `shadowBlur` gibt die Größe des Unschärfeeffekts an; dieser Wert entspricht nicht einer Anzahl von Pixeln und wird nicht von der aktuellen Transformationsmatrix beeinflusst. Der Standardwert ist 0.

Die Eigenschaft `shadowColor` ist ein standardmäßiger CSS-Farbwert, der die Farbe des Schatteneffekts angibt; standardmäßig ist es vollständig transparentes Schwarz.

> [!NOTE]
> Schatten werden nur für `source-over` [Kompositionsoperationen](/de/docs/Web/API/Canvas_API/Tutorial/Compositing) gezeichnet.

### Ein Beispiel eines beschatteten Textes

Dieses Beispiel zeichnet einen Textstring mit einem Schatteneffekt.

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

Wenn Sie `fill` (oder [`clip`](/de/docs/Web/API/CanvasRenderingContext2D/clip) und [`isPointInPath`](/de/docs/Web/API/CanvasRenderingContext2D/isPointInPath)) verwenden, können Sie optional einen Füllregel-Algorithmus angeben, nach dem bestimmt wird, ob ein Punkt innerhalb oder außerhalb eines Pfades liegt und somit gefüllt wird oder nicht. Dies ist nützlich, wenn ein Pfad sich selbst schneidet oder verschachtelt ist.

Es sind zwei Werte möglich:

- `nonzero`
  - : Die [nicht null Regel](https://de.wikipedia.org/wiki/Nonzero-rule), die als Standardregel dient.
- `evenodd`
  - : Die [gerade-ungerade Regel](https://de.wikipedia.org/wiki/Even%E2%80%93odd_rule).

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
