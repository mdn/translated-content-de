---
title: Anwenden von Stilen und Farben
slug: Web/API/Canvas_API/Tutorial/Applying_styles_and_colors
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Drawing_shapes", "Web/API/Canvas_API/Tutorial/Drawing_text")}}

Im Kapitel über das [Zeichnen von Formen](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes) haben wir nur die Standardlinien- und Füllstile verwendet. Hier werden wir die Canvas-Optionen erkunden, die uns zur Verfügung stehen, um unsere Zeichnungen etwas attraktiver zu gestalten. Sie werden lernen, wie man verschiedene Farben, Linienstile, Verläufe, Muster und Schatten zu Ihren Zeichnungen hinzufügt.

> [!NOTE]
> Canvas-Inhalte sind für Screenreader nicht zugänglich. Wenn das Canvas rein dekorativ ist, fügen Sie `role="presentation"` zum öffnenden `<canvas>` Tag hinzu. Andernfalls fügen Sie beschreibenden Text als Wert des [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)-Attributs direkt zum Canvas-Element hinzu oder fügen Sie Rückfallinhalte innerhalb der öffnenden und schließenden Canvas-Tags ein. Canvas-Inhalte sind nicht Teil des DOM, aber verschachtelte Rückfallinhalte sind es.

## Farben

Bisher haben wir nur Methoden des Zeichenkontexts gesehen. Wenn wir Farben auf eine Form anwenden wollen, gibt es zwei wichtige Eigenschaften, die wir verwenden können: `fillStyle` und `strokeStyle`.

- [`fillStyle = color`](/de/docs/Web/API/CanvasRenderingContext2D/fillStyle)
  - : Legt den Stil fest, der beim Füllen von Formen verwendet wird.
- [`strokeStyle = color`](/de/docs/Web/API/CanvasRenderingContext2D/strokeStyle)
  - : Legt den Stil für die Umrisse von Formen fest.

`color` ist ein String, der eine CSS {{cssxref("&lt;color&gt;")}}, ein Verlaufsobjekt oder ein Musterobjekt darstellt. Wir werden uns später Verläufe und Musterobjekte ansehen. Standardmäßig sind die Strich- und Füllfarben auf Schwarz gesetzt (CSS-Farbwert `#000000`).

> [!NOTE]
> Wenn Sie die `strokeStyle`- und/oder `fillStyle`-Eigenschaft setzen, wird der neue Wert zum Standardwert für alle anschließend gezeichneten Formen. Für jede Form, die Sie in einer anderen Farbe haben möchten, müssen Sie die `fillStyle`- oder `strokeStyle`-Eigenschaft neu zuweisen.

Die gültigen Strings sollten laut Spezifikation CSS {{cssxref("&lt;color&gt;")}} Werte sein. Jedes der folgenden Beispiele beschreibt die gleiche Farbe.

```js
// these all set the fillStyle to 'orange'

ctx.fillStyle = "orange";
ctx.fillStyle = "#FFA500";
ctx.fillStyle = "rgb(255 165 0)";
ctx.fillStyle = "rgb(255 165 0 / 100%)";
```

### Ein `fillStyle`-Beispiel

In diesem Beispiel verwenden wir erneut zwei `for`-Schleifen, um ein Raster von Rechtecken zu zeichnen, jedes in einer anderen Farbe. Das resultierende Bild sollte ungefähr wie der Screenshot aussehen. Hier passiert nichts allzu Spektakuläres. Wir verwenden die beiden Variablen `i` und `j`, um eine eindeutige RGB-Farbe für jedes Quadrat zu erzeugen, und modifizieren nur die Rot- und Grünwerte. Der Blaukanal hat einen festen Wert. Durch Modifizieren der Kanäle können Sie alle Arten von Paletten erzeugen. Durch Erhöhen der Schritte können Sie etwas erreichen, das wie die Farbpaletten von Photoshop aussieht.

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

Das Resultat sieht so aus:

{{EmbedLiveSample("A_fillStyle_example", "", "160")}}

### Ein `strokeStyle`-Beispiel

Dieses Beispiel ist dem obigen ähnlich, verwendet jedoch die `strokeStyle`-Eigenschaft, um die Farben der Umrisse der Formen zu ändern. Wir verwenden die `arc()`-Methode, um Kreise anstelle von Quadraten zu zeichnen.

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

Das Resultat sieht so aus:

{{EmbedLiveSample("A_strokeStyle_example", "", "160")}}

## Transparenz

Zusätzlich zu undurchsichtigen Formen auf das Canvas zu zeichnen, können wir auch halbtransparente (oder durchscheinende) Formen zeichnen. Dies wird entweder durch das Setzen der `globalAlpha`-Eigenschaft erreicht oder indem man eine halbtransparente Farbe dem Strich- oder Füllstil zuweist.

- [`globalAlpha = transparencyValue`](/de/docs/Web/API/CanvasRenderingContext2D/globalAlpha)
  - : Wendet den angegebenen Transparenzwert auf alle zukünftigen Formen an, die auf dem Canvas gezeichnet werden. Der Wert muss zwischen 0,0 (vollständig transparent) und 1,0 (vollständig undurchsichtig) liegen. Dieser Wert ist standardmäßig 1,0 (vollständig undurchsichtig).

Die `globalAlpha`-Eigenschaft kann nützlich sein, wenn Sie viele Formen auf dem Canvas mit ähnlicher Transparenz zeichnen möchten, aber im Allgemeinen ist es normalerweise nützlicher, die Transparenz auf einzelnen Formen beim Setzen ihrer Farben festzulegen.

Da die `strokeStyle`- und `fillStyle`-Eigenschaften CSS-RGB-Farbwerte akzeptieren, können wir die folgende Notation verwenden, um ihnen eine transparente Farbe zuzuweisen.

```js
// Assigning transparent colors to stroke and fill style

ctx.strokeStyle = "rgb(255 0 0 / 50%)";
ctx.fillStyle = "rgb(255 0 0 / 50%)";
```

Die Funktion `rgb()` hat einen optionalen zusätzlichen Parameter. Der letzte Parameter setzt den Transparenzwert dieser speziellen Farbe. Der gültige Bereich wird als Prozentsatz zwischen `0%` (vollständig transparent) und `100%` (vollständig undurchsichtig) oder als Zahl zwischen `0.0` (entspricht `0%`) und `1.0` (entspricht `100%`) angegeben.

### Ein `globalAlpha`-Beispiel

In diesem Beispiel zeichnen wir einen Hintergrund aus vier verschiedenfarbigen Quadraten. Darüber zeichnen wir eine Reihe von halbtransparenten Kreisen. Die `globalAlpha`-Eigenschaft ist auf `0.2` gesetzt, was für alle Formen ab diesem Punkt verwendet wird. Jeder Schritt in der `for`-Schleife zeichnet eine Reihe von Kreisen mit einem zunehmenden Radius. Das Endergebnis ist ein radialer Verlauf. Durch das Überlagern von immer mehr Kreisen übereinander verringern wir effektiv die Transparenz der bereits gezeichneten Kreise. Durch Erhöhung der Schrittzahl und in dem Effekt mehr Kreise zu zeichnen, würde der Hintergrund im Zentrum des Bildes vollständig verschwinden.

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

### Ein Beispiel mit `rgb()` und Alpha-Transparenz

In diesem zweiten Beispiel machen wir etwas Ähnliches wie im obigen, aber anstatt Kreise übereinander zu zeichnen, habe ich kleine Rechtecke mit zunehmender Deckkraft gezeichnet. Die Verwendung von `rgb()` gibt Ihnen etwas mehr Kontrolle und Flexibilität, da wir den Füll- und Strichstil individuell festlegen können.

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
  - : Legt die Breite der in der Zukunft gezeichneten Linien fest.
- [`lineCap = type`](/de/docs/Web/API/CanvasRenderingContext2D/lineCap)
  - : Legt das Erscheinungsbild der Enden von Linien fest.
- [`lineJoin = type`](/de/docs/Web/API/CanvasRenderingContext2D/lineJoin)
  - : Legt das Erscheinungsbild der "Ecken" fest, an denen Linien aufeinandertreffen.
- [`miterLimit = value`](/de/docs/Web/API/CanvasRenderingContext2D/miterLimit)
  - : Setzt ein Limit für die Verlängerung an, wenn zwei Linien in einem scharfen Winkel verbunden sind, um zu kontrollieren, wie dick die Verbindung wird.
- [`getLineDash()`](/de/docs/Web/API/CanvasRenderingContext2D/getLineDash)
  - : Gibt das aktuelle Linienstreifenmuster-Array zurück, das eine gerade Anzahl von nicht negativen Zahlen enthält.
- [`setLineDash(segments)`](/de/docs/Web/API/CanvasRenderingContext2D/setLineDash)
  - : Setzt das aktuelle Linienstreifenmuster.
- [`lineDashOffset = value`](/de/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)
  - : Gibt an, wo ein Streifenmuster auf einer Linie beginnen soll.

Sie werden ein besseres Verständnis davon bekommen, was diese bewirken, indem Sie die untenstehenden Beispiele ansehen.

### Ein `lineWidth`-Beispiel

Diese Eigenschaft setzt die aktuelle Linienstärke. Werte müssen positive Zahlen sein. Standardmäßig ist dieser Wert auf 1,0 Einheiten gesetzt.

Die Linienbreite ist die Dicke des Strichs, der auf dem gegebenen Pfad zentriert ist. Mit anderen Worten, der gezeichnete Bereich erstreckt sich um die halbe Linienbreite auf beiden Seiten des Pfades. Da Canvas-Koordinaten keine Pixel direkt referenzieren, muss besondere Vorsicht darauf verwendet werden, um klare horizontale und vertikale Linien zu erhalten.

Im untenstehenden Beispiel werden 10 gerade Linien mit zunehmenden Linienbreiten gezeichnet. Die Linie ganz links ist 1,0 Einheiten breit. Dennoch erscheinen die linke und alle anderen ungeraden Ganzzahllinien nicht klar, aufgrund der Platzierung des Pfades.

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

Um klare Linien zu erhalten, muss man verstehen, wie Pfade gestrichen werden. In den unten abgebildeten Gittern repräsentiert das Gitter das Canvas-Koordinatengitter. Die Quadrate zwischen den Gittern sind tatsächliche Bildschirm-Pixel. Im ersten Gitterbild unten wird ein Rechteck von (2,1) bis (5,5) gefüllt. Der gesamte Bereich dazwischen (hellrot) fällt auf die Pixelgrenzen, sodass das resultierende gefüllte Rechteck klare Kanten hat.

![Drei Koordinatensysteme. Die Gitterlinien sind tatsächliche Pixel auf dem Bildschirm. Die obere linke Ecke jedes Gitters ist mit (0,0) beschriftet. Im ersten Gitter ist ein Rechteck von (2,1) bis (5,5) in hellrot ausgefüllt. Im zweiten Gitter ist (3,1) bis (3,5) mit einer 1-Pixel dicken königsblauen Linie verbunden. Die königsblaue Linie ist auf einer Gitterlinie zentriert und erstreckt sich von 2.5 bis 3.5 auf der x-Achse, halb in die Pixel auf beiden Seiten der Gitterlinie hinein, mit einem hellblauen Hintergrund auf beiden Seiten, der sich von 2 bis 4 auf der x-Achse erstreckt. Um die hellblaue Verwischung der Linie im zweiten Koordinatengitter zu vermeiden, ist im dritten Koordinatengitter der Pfad eine königsblaue Linie von (3.5,1) bis (3.5,5). Die 1-Pixel-Linienbreite füllt am Ende eine einzige vertikale Pixelzeile vollständig und genau.](canvas-grid.png)

Wenn Sie einen Pfad von (3,1) bis (3,5) mit einer Linienstärke von `1.0` betrachten, landen Sie in der Situation im zweiten Bild. Der tatsächlich zu füllende Bereich (dunkelblau) erstreckt sich nur zur Hälfte in die Pixel auf beiden Seiten des Pfades. Dies muss näherungsweise gerendert werden, was bedeutet, dass diese Pixel nur teilweise gefärbt sind, und führt dazu, dass der gesamte Bereich (das hellblaue und das dunkelblaue) mit einer Farbe gefüllt wird, die nur halb so dunkel ist wie die eigentliche Strichfarbe. Das ist das, was mit der `1.0`-Breitenlinie im vorherigen Beispielcode passiert.

Um dies zu beheben, müssen Sie sehr präzise in Ihrer Pfaderstellung sein. Wenn Sie wissen, dass eine `1.0`-Breite-Linie sich um eine halbe Einheit auf beiden Seiten des Pfades erstrecken wird, führt das Erstellen des Pfades von (3.5,1) bis (3.5,5) zur Situation im dritten Bild - die `1.0`-Linienbreite füllt am Ende eine einzige vertikale Pixelzeile vollständig und genau.

> [!NOTE]
> Beachten Sie, dass in unserem vertikalen Linienbeispiel die Y-Position immer noch eine ganzzahlige Gitterlinienposition war - wenn sie es nicht gewesen wäre, würden wir Pixel mit halber Abdeckung an den Endpunkten sehen (aber beachten Sie auch, dass dieses Verhalten vom aktuellen `lineCap`-Stil abhängt, dessen Standardwert `butt` ist; um konsistente Striche mit halber Pixel-Koordinate für ungerade Breitenlinien zu berechnen, möchten Sie möglicherweise den `lineCap`-Stil auf `square` setzen, sodass der äußere Rand des Strichs um den Endpunkt automatisch erweitert wird, um das gesamte Pixel genau abzudecken).
>
> Beachten Sie auch, dass nur Start- und Endendpunkte eines Pfades betroffen sind: Wenn ein Pfad mit `closePath()` geschlossen wird, gibt es keinen Start- und Endendpunkt; stattdessen werden alle Endpunkte im Pfad an ihr verbundenes vorheriges und nächstes Segment mit dem aktuellen `lineJoin`-Stilsetting verbunden, dessen Standardwert `miter` ist, mit dem Effekt, dass die äußeren Ränder der verbundenen Segmente automatisch zu ihrem Schnittpunkt erweitert werden, sodass der gerenderte Strich genau volle Pixel abdeckt, die an jedem Endpunkt zentriert sind, wenn diese verbundenen Segmente horizontal und/oder vertikal sind. Siehe die nächsten beiden Abschnitte für Demonstrationen dieser zusätzlichen Linienstile.

Bei Linien mit gerader Breite endet jede Hälfte in einer ganzzahligen Menge von Pixeln, sodass Sie einen Pfad wollen, der zwischen den Pixeln liegt (das heißt, (3,1) bis (3,5)), anstatt durch die Mitte der Pixel.

Obwohl es bei der Arbeit mit skalierbarer 2D-Grafik anfangs etwas schmerzhaft ist, stellt das Beachten der Pixelraster und der Position von Pfaden sicher, dass Ihre Zeichnungen unabhängig vom Skalieren oder anderen Transformationen korrekt aussehen. Eine vertikale Linie mit 1.0-Breite, die an der richtigen Position gezeichnet wird, wird eine klare 2-Pixel-Linie, wenn sie um den Faktor 2 vergrößert wird, und wird an der richtigen Position erscheinen.

### Ein `lineCap`-Beispiel

Die `lineCap`-Eigenschaft bestimmt, wie die Endpunkte jeder Linie gezeichnet werden. Es gibt drei mögliche Werte für diese Eigenschaft, und diese sind: `butt`, `round` und `square`. Standardmäßig ist diese Eigenschaft auf `butt` gesetzt:

- `butt`
  - : Die Enden von Linien sind an den Endpunkten abgeschnitten.
- `round`
  - : Die Enden von Linien sind abgerundet.
- `square`
  - : Die Enden von Linien sind quadratisch abgerundet, indem eine Box mit gleicher Breite und halber Höhe der Linienstärke hinzugefügt wird.

In diesem Beispiel werden wir drei Linien zeichnen, jede mit einem anderen Wert für die `lineCap`-Eigenschaft. Ich habe auch zwei Leitlinien hinzugefügt, um die genauen Unterschiede zwischen den dreien zu sehen. Jede dieser Linien beginnt und endet genau an diesen Leitlinien.

Die Linie links verwendet die Standard-`butt`-Option. Sie werden bemerken, dass sie vollständig bündig mit den Leitlinien gezeichnet ist. Die zweite ist auf die Verwendung der `round`-Option gesetzt. Dies fügt den Enden einen Halbkreis hinzu, der einen Radius von der halben Breite der Linie hat. Die Linie rechts verwendet die `square`-Option. Dies fügt eine Box mit gleicher Breite und halber Höhe der Linienstärke hinzu.

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

Die `lineJoin`-Eigenschaft bestimmt, wie zwei verbundene Segmente (von Linien, Bögen oder Kurven) mit einer Länge ungleich null in einer Form miteinander verbunden werden (degenerierte Segmente mit einer Länge von null, deren spezifizierte End- und Kontrollpunkte genau an derselben Position liegen, werden übersprungen).

Es gibt drei mögliche Werte für diese Eigenschaft: `round`, `bevel` und `miter`. Standardmäßig ist diese Eigenschaft auf `miter` gesetzt. Beachten Sie, dass die `lineJoin`-Einstellung keine Wirkung hat, wenn die zwei verbundenen Segmente dieselbe Richtung haben, da in diesem Fall kein Verbindungsbereich hinzugefügt wird:

- `round`
  - : Rundet die Ecken einer Form ab, indem ein zusätzlicher Sektor einer Scheibe gefüllt wird, zentriert am gemeinsamen Endpunkt der verbundenen Segmente. Der Radius für diese abgerundeten Ecken ist gleich der halben Linienbreite.
- `bevel`
  - : Füllt einen zusätzlichen dreieckigen Bereich zwischen dem gemeinsamen Endpunkt der verbundenen Segmente und den getrennten Außenkanten jedes Segments.
- `miter`
  - : Verbundene Segmente sind verbunden, indem ihre Außenkanten bis zu einem einzigen Punkt erweitert werden, mit dem Effekt, einen zusätzlichen rautenförmigen Bereich zu füllen. Diese Einstellung wird durch die `miterLimit`-Eigenschaft beeinflusst, die unten erklärt wird.

Das Beispiel unten zeichnet drei verschiedene Pfade, die jeweils eine dieser drei Einstellungen der `lineJoin`-Eigenschaft demonstrieren; das Ergebnis wird oben gezeigt.

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

Wie Sie im vorherigen Beispiel gesehen haben, wenn zwei Linien mit der `miter`-Option verbunden werden, werden die Außenkanten der beiden verbundenen Linien bis zu dem Punkt verlängert, an dem sie sich treffen. Für Linien, die in großen Winkeln zueinander stehen, ist dieser Punkt nicht weit vom inneren Verbindungspunkt entfernt. Wenn die Winkel zwischen jeder Linie jedoch abnehmen, nimmt die Distanz (die Miterlänge) zwischen diesen Punkten exponentiell zu.

Die `miterLimit`-Eigenschaft bestimmt, wie weit der Außenverbindungspunkt vom Innenverbindungspunkt entfernt sein kann. Wenn zwei Linien diesen Wert überschreiten, wird stattdessen eine abgeschrägte Verbindung gezeichnet. Beachten Sie, dass die maximale Miterlänge das Produkt der aktuellen Koordinatensystemlinienstärke und des Wertes dieser `miterLimit`-Eigenschaft (dessen Standardwert im HTML {{HTMLElement("canvas")}} 10.0 ist) ist, sodass die `miterLimit`-Eigenschaft unabhängig von der aktuellen Anzeigeskalierung oder irgendwelchen Affinentransformationen von Pfaden gesetzt werden kann: Sie beeinflusst nur die tatsächlich gerenderte Form der Linieneckpunkte.

Genauer gesagt, das Miterlimit ist das maximal erlaubte Verhältnis der Verlängerungslänge (im HTML-Canvas wird es zwischen dem Außenwinkel der verbundenen Kanten der Linie und dem gemeinsamen Endpunkt der verbundenen Segmente angegeben) zur halben Linienbreite. Es kann auch als das maximal erlaubte Verhältnis der Entfernung zwischen den Innen- und Außenpunkten des Ansatzpunktes von Kanten zur gesamten Linienbreite definiert werden. Es ist dann gleich dem Kotangens des halben minimalen Innenwinkels von verbundenen Segmenten, unter dem kein Miter-Verbinder gerendert wird, sondern nur ein abgeschrägter Verbinder:

- `miterLimit` = **max** `miterLength` / `lineWidth` = 1 / **sin** ( **min** _θ_ / 2 )
- Das Standard-Miterlimit von 10,0 wird alle Miterungen für scharfe Winkel unter etwa 11 Grad entfernen.
- Ein Miterlimit gleich √2 ≈ 1.4142136 (aufgerundet) wird Miterungen für alle spitzen Winkel entfernen und Miterverbindungen nur für stumpfe oder rechte Winkel beibehalten.
- Ein Miterlimit von 1,0 ist gültig, wird aber alle Miterungen deaktivieren.
- Werte unter 1,0 sind für das Miterlimit ungültig.

Hier ist eine kleine Demonstration, in der Sie das `miterLimit` dynamisch festlegen können, um zu sehen, wie sich dies auf die Formen im Canvas auswirkt. Die blauen Linien zeigen, wo sich Start- und Endpunkte für jede der Linien im Zickzackmuster befinden.

Wenn Sie im Demo ein `miterLimit`-Wert unter 4.2 angeben, wird keine der sichtbaren Ecken mit einer Miterverlängerung verbunden, sondern nur mit einer kleinen Schräge in der Nähe der blauen Linien; mit einer `miterLimit` über 10 sollten die meisten Ecken im Demo sich mit einer Miterverlängerung weit weg von den blauen Linien verbinden, deren Höhe abnimmt zwischen den Ecken von links nach rechts, weil sie mit wachsenden Winkeln verbunden sind; bei Zwischenwerten werden nur Ecken auf der linken Seite mit einer Schräge in der Nähe der blauen Linien verbunden und Ecken auf der rechten Seite mit einer Miterverlängerung (auch mit abnehmender Höhe).

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

### Verwendung von Linienstrichen

Die Methode `setLineDash` und die Eigenschaft `lineDashOffset` spezifizieren das Muster der Striche für Linien. Die `setLineDash`-Methode akzeptiert eine Liste von Zahlen, die Abstände spezifizieren, um abwechselnd eine Linie zu ziehen und eine Lücke, und die Eigenschaft `lineDashOffset` setzt einen Offset, wo das Muster beginnt.

In diesem Beispiel erstellen wir einen marschierenden Ameiseneffekt. Es ist eine Animationstechnik, die oft in Auswahlwerkzeugen von Computer-Grafikprogrammen zu finden ist. Sie hilft dem Benutzer, die Auswahlgrenze vom Bildhintergrund zu unterscheiden, indem die Grenze animiert wird. In einem späteren Teil dieses Tutorials können Sie lernen, wie Sie dies und andere [grundlegende Animationen](/de/docs/Web/API/Canvas_API/Tutorial/Basic_animations) umsetzen.

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

Ähnlich wie in jedem normalen Zeichenprogramm können wir Formen und Umrisse durch lineare, radiale und kegelförmige Verläufe füllen. Wir erstellen ein [`CanvasGradient`](/de/docs/Web/API/CanvasGradient)-Objekt mit einer der folgenden Methoden. Wir können dieses Objekt dann den Eigenschaften `fillStyle` oder `strokeStyle` zuweisen.

- [`createLinearGradient(x1, y1, x2, y2)`](/de/docs/Web/API/CanvasRenderingContext2D/createLinearGradient)
  - : Erstellt ein lineares Verlaufsobjekt mit einem Startpunkt von (`x1`, `y1`) und einem Endpunkt von (`x2`, `y2`).
- [`createRadialGradient(x1, y1, r1, x2, y2, r2)`](/de/docs/Web/API/CanvasRenderingContext2D/createRadialGradient)
  - : Erstellt einen radialen Verlauf. Die Parameter repräsentieren zwei Kreise, einen mit seinem Zentrum bei (`x1`, `y1`) und einem Radius von `r1` und den anderen mit seinem Zentrum bei (`x2`, `y2`) mit einem Radius von `r2`.
- [`createConicGradient(angle, x, y)`](/de/docs/Web/API/CanvasRenderingContext2D/createConicGradient)
  - : Erstellt ein kegelförmiges Verlaufsobjekt mit einem Startwinkel von `angle` in Bogenmaß, an der Position (`x`, `y`).

Zum Beispiel:

```js
const lineargradient = ctx.createLinearGradient(0, 0, 150, 150);
const radialgradient = ctx.createRadialGradient(75, 75, 0, 75, 75, 100);
```

Nachdem wir ein `CanvasGradient`-Objekt erstellt haben, können wir diesem mit der Methode `addColorStop()` Farben zuweisen.

- [`gradient.addColorStop(position, color)`](/de/docs/Web/API/CanvasGradient/addColorStop)
  - : Erstellt einen neuen Farbpunkt im `gradient`-Objekt. Die `position` ist eine Zahl zwischen 0,0 und 1,0 und definiert die relative Position der Farbe im Verlauf, und das Argument `color` muss ein String sein, der eine CSS {{cssxref("&lt;color&gt;")}} darstellt, die angibt, welche Farbe der Verlauf an diesem Punkt der Übergang sollte.

Sie können so viele Farbstopps zu einem Verlauf hinzufügen, wie Sie benötigen. Unten ist ein sehr einfacher linearer Verlauf von Weiß zu Schwarz.

```js
const lineargradient = ctx.createLinearGradient(0, 0, 150, 150);
lineargradient.addColorStop(0, "white");
lineargradient.addColorStop(1, "black");
```

### Ein `createLinearGradient`-Beispiel

In diesem Beispiel erstellen wir zwei verschiedene Verläufe. Wie Sie hier sehen können, können sowohl die Eigenschaften `strokeStyle` als auch `fillStyle` ein `canvasGradient`-Objekt als gültigen Eingabewert akzeptieren.

```js
function draw() {
  const ctx = document.getElementById("canvas").getContext("2d");

  // Create gradients
  const lingrad = ctx.createLinearGradient(0, 0, 0, 150);
  lingrad.addColorStop(0, "#00ABEB");
  lingrad.addColorStop(0.5, "#fff");
  lingrad.addColorStop(0.5, "#26C000");
  lingrad.addColorStop(1, "#fff");

  const lingrad2 = ctx.createLinearGradient(0, 50, 0, 95);
  lingrad2.addColorStop(0.5, "#000");
  lingrad2.addColorStop(1, "rgb(0 0 0 / 0%)");

  // assign gradients to fill and stroke styles
  ctx.fillStyle = lingrad;
  ctx.strokeStyle = lingrad2;

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

Der erste ist ein Hintergrundverlauf. Wie Sie sehen, haben wir zwei Farben an derselben Position zugewiesen. Dies tun Sie, um sehr scharfe Farbübergänge zu erzeugen - in diesem Fall von Weiß nach Grün. Normalerweise spielt es keine Rolle, in welcher Reihenfolge Sie die Farbstopps definieren, aber in diesem speziellen Fall tut es das erheblich. Wenn Sie die Zuweisungen in der Reihenfolge halten, in der Sie sie erscheinen möchten, wird dies kein Problem sein.

Im zweiten Verlauf haben wir die Startfarbe (bei Position 0,0) nicht zugewiesen, da dies nicht unbedingt notwendig war, weil es automatisch die Farbe des nächsten Farbstopps annimmt. Das Zuweisen der schwarzen Farbe bei Position 0,5 macht daher automatisch den Verlauf vom Start bis zu diesem Stopp schwarz.

{{EmbedLiveSample("A_createLinearGradient_example", "", "160")}}

### Ein `createRadialGradient`-Beispiel

In diesem Beispiel definieren wir vier verschiedene radiale Verläufe. Da wir die Kontrolle über die Start- und Schlusspunkte des Verlaufs haben, können wir komplexere Effekte erzielen, als wir sie normalerweise in den "klassischen" radialen Verläufen hätten, die wir zum Beispiel in Photoshop sehen (das heißt, ein Verlauf mit einem einzigen Mittelpunkt, bei dem sich der Verlauf nach außen in einer kreisförmigen Form ausdehnt).

```js
function draw() {
  const ctx = document.getElementById("canvas").getContext("2d");

  // Create gradients
  const radgrad = ctx.createRadialGradient(45, 45, 10, 52, 50, 30);
  radgrad.addColorStop(0, "#A7D30C");
  radgrad.addColorStop(0.9, "#019F62");
  radgrad.addColorStop(1, "rgb(1 159 98 / 0%)");

  const radgrad2 = ctx.createRadialGradient(105, 105, 20, 112, 120, 50);
  radgrad2.addColorStop(0, "#FF5F98");
  radgrad2.addColorStop(0.75, "#FF0188");
  radgrad2.addColorStop(1, "rgb(255 1 136 / 0%)");

  const radgrad3 = ctx.createRadialGradient(95, 15, 15, 102, 20, 40);
  radgrad3.addColorStop(0, "#00C9FF");
  radgrad3.addColorStop(0.8, "#00B5E2");
  radgrad3.addColorStop(1, "rgb(0 201 255 / 0%)");

  const radgrad4 = ctx.createRadialGradient(0, 150, 50, 0, 140, 90);
  radgrad4.addColorStop(0, "#F4F201");
  radgrad4.addColorStop(0.8, "#E4C700");
  radgrad4.addColorStop(1, "rgb(228 199 0 / 0%)");

  // draw shapes
  ctx.fillStyle = radgrad4;
  ctx.fillRect(0, 0, 150, 150);
  ctx.fillStyle = radgrad3;
  ctx.fillRect(0, 0, 150, 150);
  ctx.fillStyle = radgrad2;
  ctx.fillRect(0, 0, 150, 150);
  ctx.fillStyle = radgrad;
  ctx.fillRect(0, 0, 150, 150);
}
```

```html hidden
<canvas id="canvas" width="150" height="150" role="presentation"></canvas>
```

```js hidden
draw();
```

In diesem Fall haben wir den Startpunkt leicht vom Endpunkt versetzt, um einen sphärischen 3D-Effekt zu erzielen. Es ist am besten, zu vermeiden, dass die inneren und äußeren Kreise sich überlappen, da dies zu merkwürdigen Effekten führt, die schwer vorherzusagen sind.

Der letzte Farbpunkt in jedem der vier Verläufe verwendet eine vollständig transparente Farbe. Wenn Sie einen schönen Übergang von diesem zum vorherigen Farbpunkt möchten, sollten beide Farben gleich sein. Das ist aus dem Code nicht sehr offensichtlich, da es zwei verschiedene CSS-Farbmethoden verwendet, als Demonstration, aber im ersten Verlauf `#019F62 = rgb(1 159 98 / 100%)`.

{{EmbedLiveSample("A_createRadialGradient_example", "", "160")}}

### Ein `createConicGradient`-Beispiel

In diesem Beispiel definieren wir zwei verschiedene kegelförmige Verläufe. Ein kegelförmiger Verlauf unterscheidet sich von einem radialen Verlauf, da er statt Kreise zu erzeugen um einen Punkt kreist.

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

Der erste Verlauf ist in der Mitte des ersten Rechtecks positioniert und wechselt von einem grünen Farbpunkt am Anfang zu einem weißen am Ende. Der Winkel beginnt bei 2 Bogenmaßen, was aufgrund der Start-/Ende-Linie, die nach Südosten zeigt, auffällig ist.

Der zweite Verlauf ist ebenfalls im Zentrum des zweiten Rechtecks positioniert. Dieser hat mehrere Farbstopps, die sich abwechselnd von Schwarz zu Weiß bei jedem Vierteldrehung ändern. Dies ergibt den karierten Effekt.

{{EmbedLiveSample("A_createConicGradient_example", "", "160")}}

## Muster

In einem der Beispiele auf der vorherigen Seite haben wir eine Reihe von Schleifen verwendet, um ein Muster von Bildern zu erzeugen. Es gibt jedoch eine viel einfachere Methode: die `createPattern()`-Methode.

- [`createPattern(image, type)`](/de/docs/Web/API/CanvasRenderingContext2D/createPattern)
  - : Erstellt und gibt ein neues Canvas-Musterobjekt zurück. `image` ist die Quelle des Bildes (das heißt, ein [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement), ein [`SVGImageElement`](/de/docs/Web/API/SVGImageElement), ein anderes [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) oder ein [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas), ein [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) oder ein [`VideoFrame`](/de/docs/Web/API/VideoFrame), oder ein [`ImageBitmap`](/de/docs/Web/API/ImageBitmap)). `type` ist ein String, der angibt, wie man das Bild verwenden soll.

Der Typ bestimmt, wie das Bild verwendet wird, um das Muster zu erstellen und muss einer der folgenden Stringwerte sein:

- `repeat`
  - : Kachelt das Bild in beide, vertikale und horizontale Richtungen.
- `repeat-x`
  - : Kachelt das Bild nur horizontal.
- `repeat-y`
  - : Kachelt das Bild nur vertikal.
- `no-repeat`
  - : Das Bild wird nicht gekachelt. Es wird nur einmal verwendet.

Wir verwenden diese Methode, um ein [`CanvasPattern`](/de/docs/Web/API/CanvasPattern) Objekt zu erstellen, das sehr ähnlich zu den oben gesehenen Verlaufsmethoden ist. Sobald wir ein Muster erstellt haben, können wir es den Eigenschaften `fillStyle` oder `strokeStyle` zuweisen. Zum Beispiel:

```js
const img = new Image();
img.src = "someimage.png";
const ptrn = ctx.createPattern(img, "repeat");
```

> [!NOTE]
> Wie bei der `drawImage()`-Methode müssen Sie sicherstellen, dass das verwendete Bild geladen ist, bevor Sie diese Methode aufrufen, da das Muster sonst möglicherweise falsch gezeichnet wird.

### Ein `createPattern`-Beispiel

In diesem letzten Beispiel erstellen wir ein Muster zur Zuweisung an die `fillStyle`-Eigenschaft. Das einzige, was erwähnenswert ist, ist die Verwendung des `onload`-Handlers des Bildes. Dies dient dazu, sicherzustellen, dass das Bild geladen ist, bevor es dem Muster zugewiesen wird.

```js
function draw() {
  const ctx = document.getElementById("canvas").getContext("2d");

  // create new image object to use as pattern
  const img = new Image();
  img.src = "canvas_createpattern.png";
  img.onload = () => {
    // create pattern
    const ptrn = ctx.createPattern(img, "repeat");
    ctx.fillStyle = ptrn;
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

Das Verwenden von Schatten beinhaltet nur vier Eigenschaften:

- [`shadowOffsetX = float`](/de/docs/Web/API/CanvasRenderingContext2D/shadowOffsetX)
  - : Gibt die horizontale Entfernung an, die der Schatten vom Objekt ausgedehnt werden soll. Dieser Wert wird nicht von der Transformationsmatrix beeinflusst. Der Standard ist 0.
- [`shadowOffsetY = float`](/de/docs/Web/API/CanvasRenderingContext2D/shadowOffsetY)
  - : Gibt die vertikale Entfernung an, die der Schatten vom Objekt ausgedehnt werden soll. Dieser Wert wird nicht von der Transformationsmatrix beeinflusst. Der Standard ist 0.
- [`shadowBlur = float`](/de/docs/Web/API/CanvasRenderingContext2D/shadowBlur)
  - : Gibt die Größe des Weichzeichnungseffekts an; dieser Wert entspricht nicht einer Anzahl von Pixeln und wird nicht von der aktuellen Transformationsmatrix beeinflusst. Der Standardwert ist 0.
- [`shadowColor = color`](/de/docs/Web/API/CanvasRenderingContext2D/shadowColor)
  - : Ein standardmäßiger CSS-Farbwert, der die Farbe des Schatteneffekts angibt; standardmäßig ist es vollständig transparentes Schwarz.

Die Eigenschaften `shadowOffsetX` und `shadowOffsetY` geben an, wie weit sich der Schatten in den X- und Y-Richtungen vom Objekt erstrecken soll; diese Werte werden nicht von der aktuellen Transformationsmatrix beeinflusst. Verwenden Sie negative Werte, um den Schatten nach oben oder nach links zu verlängern, und positive Werte, um den Schatten nach unten oder nach rechts zu verlängern. Diese sind standardmäßig beide auf 0 gesetzt.

Die Eigenschaft `shadowBlur` gibt die Größe des Weichzeichnungseffekts an; dieser Wert entspricht nicht einer Anzahl von Pixeln und wird nicht von der aktuellen Transformationsmatrix beeinflusst. Der Standardwert ist 0.

Die Eigenschaft `shadowColor` ist ein standardmäßiger CSS-Farbwert, der die Farbe des Schatteneffekts angibt; standardmäßig ist es vollständig transparentes Schwarz.

> [!NOTE]
> Schatten werden nur für `source-over` [Zusammenführungsoperationen](/de/docs/Web/API/Canvas_API/Tutorial/Compositing) gezeichnet.

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

Wir werden die `font`-Eigenschaft und die `fillText`-Methode im nächsten Kapitel über das [Zeichnen von Text](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text) betrachten.

## Canvas-Füllregeln

Beim Verwenden von `fill` (oder [`clip`](/de/docs/Web/API/CanvasRenderingContext2D/clip) und [`isPointInPath`](/de/docs/Web/API/CanvasRenderingContext2D/isPointInPath)) können Sie optional ein Füllregel-Algorithmus angeben, der bestimmt, ob ein Punkt innerhalb oder außerhalb eines Pfades ist und somit, ob er gefüllt wird oder nicht. Dies ist nützlich, wenn ein Pfad sich selbst schneidet oder geschachtelt ist.

Zwei Werte sind möglich:

- `nonzero`
  - : Die [ungerade Regel](https://de.wikipedia.org/wiki/Nichtnullregel), welche die Standardregel ist.
- `evenodd`
  - : Die [gerade Regel](https://de.wikipedia.org/wiki/Gerade-Regel).

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
