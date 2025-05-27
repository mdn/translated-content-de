---
title: Anwenden von Stilen und Farben
slug: Web/API/Canvas_API/Tutorial/Applying_styles_and_colors
l10n:
  sourceCommit: 2c0f972d873ea2db5163dbcb12987847124751ad
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Drawing_shapes", "Web/API/Canvas_API/Tutorial/Drawing_text")}}

Im Kapitel über [Formen zeichnen](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes) haben wir nur die Standardlinien- und Füllstile verwendet. Hier werden wir die Canvas-Optionen erkunden, die uns zur Verfügung stehen, um unsere Zeichnungen etwas attraktiver zu gestalten. Sie werden lernen, wie Sie verschiedene Farben, Linienstile, Verläufe, Muster und Schatten zu Ihren Zeichnungen hinzufügen können.

> [!NOTE]
> Canvas-Inhalte sind für Screenreader nicht zugänglich. Wenn das Canvas rein dekorativ ist, fügen Sie `role="presentation"` zum `<canvas>`-Öffnungstag hinzu. Andernfalls fügen Sie beschreibenden Text als Wert des [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)-Attributs direkt zum Canvas-Element hinzu oder platzieren Sie einen Fallback-Inhalt innerhalb des Öffnungs- und Endtags von Canvas. Canvas-Inhalte sind nicht Teil des DOM, aber verschachtelte Fallback-Inhalte sind es.

## Farben

Bisher haben wir nur Methoden des Zeichenkontexts gesehen. Wenn wir eine Form farblich gestalten möchten, gibt es zwei wichtige Eigenschaften, die wir verwenden können: `fillStyle` und `strokeStyle`.

- [`fillStyle = color`](/de/docs/Web/API/CanvasRenderingContext2D/fillStyle)
  - : Legt den Stil fest, der beim Füllen von Formen verwendet wird.
- [`strokeStyle = color`](/de/docs/Web/API/CanvasRenderingContext2D/strokeStyle)
  - : Legt den Stil für die Umrisse von Formen fest.

`color` ist ein String, der entweder ein CSS-{{cssxref("&lt;color&gt;")}}, ein Gradient-Objekt oder ein Musterobjekt repräsentiert. Auf die Gradient- und Musterobjekte werden wir später eingehen. Standardmäßig sind die Strich- und Füllfarbe auf Schwarz (CSS-Farbwert `#000000`) gesetzt.

> [!NOTE]
> Wenn Sie die Eigenschaft `strokeStyle` und/oder `fillStyle` festlegen, wird der neue Wert zum Standard für alle Formen, die ab diesem Zeitpunkt gezeichnet werden. Für jede Form, die Sie in einer anderen Farbe möchten, müssen Sie die Eigenschaft `fillStyle` oder `strokeStyle` erneut zuweisen.

Die gültigen Strings, die Sie eingeben können, sollten laut Spezifikation CSS-{{cssxref("&lt;color&gt;")}}-Werte sein. Jedes der folgenden Beispiele beschreibt dieselbe Farbe.

```js
// these all set the fillStyle to 'orange'

ctx.fillStyle = "orange";
ctx.fillStyle = "#FFA500";
ctx.fillStyle = "rgb(255 165 0)";
ctx.fillStyle = "rgb(255 165 0 / 100%)";
```

### Ein Beispiel für `fillStyle`

In diesem Beispiel verwenden wir erneut zwei `for`-Schleifen, um ein Raster von Rechtecken zu zeichnen, jedes in einer anderen Farbe. Das resultierende Bild sollte ungefähr wie das Screenshot aussehen. Hier passiert nichts allzu Spektakuläres. Wir nutzen die beiden Variablen `i` und `j`, um eine einzigartige RGB-Farbe für jedes Quadrat zu generieren, und ändern nur die roten und grünen Werte. Der Blaukanal hat einen festen Wert. Durch das Ändern der Kanäle können Sie alle Arten von Paletten erzeugen. Durch Erhöhen der Schritte können Sie etwas erreichen, das wie die Farbpaletten aussieht, die in Photoshop verwendet werden.

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

Dieses Beispiel ähnelt dem vorherigen, verwendet jedoch die Eigenschaft `strokeStyle`, um die Farben der Umrisse der Formen zu ändern. Wir verwenden die Methode `arc()`, um Kreise statt Quadrate zu zeichnen.

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

Zusätzlich zum Zeichnen undurchsichtiger Formen auf dem Canvas können wir auch halbtransparente (oder durchscheinende) Formen zeichnen. Dies erfolgt entweder durch Festlegen der Eigenschaft `globalAlpha` oder durch Zuweisen einer halbtransparenten Farbe zum Strich- und/oder Füllstil.

- [`globalAlpha = transparencyValue`](/de/docs/Web/API/CanvasRenderingContext2D/globalAlpha)
  - : Wendet den angegebenen Transparenzwert auf alle zukünftigen Formen an, die auf dem Canvas gezeichnet werden. Der Wert muss zwischen 0,0 (vollständig transparent) und 1,0 (vollständig undurchsichtig) liegen. Dieser Wert ist standardmäßig auf 1,0 (vollständig undurchsichtig) eingestellt.

Die `globalAlpha`-Eigenschaft kann nützlich sein, wenn Sie viele Formen auf dem Canvas mit ähnlicher Transparenz zeichnen möchten, ansonsten ist es im Allgemeinen nützlicher, die Transparenz einzelner Formen beim Festlegen ihrer Farben zu steuern.

Da die Eigenschaften `strokeStyle` und `fillStyle` CSS-rgb-Farbwerte akzeptieren, können wir die folgende Notation verwenden, um ihnen eine transparente Farbe zuzuweisen.

```js
// Assigning transparent colors to stroke and fill style

ctx.strokeStyle = "rgb(255 0 0 / 50%)";
ctx.fillStyle = "rgb(255 0 0 / 50%)";
```

Die `rgb()`-Funktion hat einen optionalen zusätzlichen Parameter. Der letzte Parameter legt den Transparenzwert dieser bestimmten Farbe fest. Der gültige Bereich ist als Prozentsatz zwischen `0%` (vollständig transparent) und `100%` (vollständig undurchsichtig) oder als Zahl zwischen `0,0` (entspricht `0%`) und `1,0` (entspricht `100%`) angegeben.

### Ein Beispiel für `globalAlpha`

In diesem Beispiel zeichnen wir einen Hintergrund aus vier unterschiedlich farbigen Quadraten. Darüber zeichnen wir eine Reihe von halbtransparenten Kreisen. Die `globalAlpha`-Eigenschaft ist auf `0,2` eingestellt, was für alle ab diesem Punkt gezeichneten Formen verwendet wird. Jeder Schritt in der `for`-Schleife zeichnet eine Reihe von Kreisen mit einem zunehmenden Radius. Das Endergebnis ist ein radialer Verlauf. Durch das Überlagern immer mehr Kreise aufeinander reduzieren wir effektiv die Transparenz der bereits gezeichneten Kreise. Durch Erhöhen der Schrittanzahl und damit des Zeichnens von mehr Kreisen würde der Hintergrund vollständig aus der Mitte des Bildes verschwinden.

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

### Ein Beispiel unter Verwendung von `rgb()` mit Alphatransparenz

In diesem zweiten Beispiel machen wir etwas Ähnliches wie im vorherigen, aber anstatt Kreise übereinander zu zeichnen, habe ich kleine Rechtecke mit zunehmender Deckkraft gezeichnet. Die Verwendung von `rgb()` gibt Ihnen ein wenig mehr Kontrolle und Flexibilität, da wir den Füll- und Strichstil individuell festlegen können.

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
  - : Legt die Breite der in Zukunft gezeichneten Linien fest.
- [`lineCap = type`](/de/docs/Web/API/CanvasRenderingContext2D/lineCap)
  - : Legt das Aussehen der Enden von Linien fest.
- [`lineJoin = type`](/de/docs/Web/API/CanvasRenderingContext2D/lineJoin)
  - : Legt das Aussehen der "Ecken" fest, wo Linien sich treffen.
- [`miterLimit = value`](/de/docs/Web/API/CanvasRenderingContext2D/miterLimit)
  - : Legt eine Grenze für den Miter fest, wenn zwei Linien sich in einem scharfen Winkel treffen, um zu kontrollieren, wie dick die Verbindung wird.
- [`getLineDash()`](/de/docs/Web/API/CanvasRenderingContext2D/getLineDash)
  - : Gibt das aktuelle Liniendash-Muster zurück, das eine gerade Anzahl von nicht-negativen Zahlen enthält.
- [`setLineDash(segments)`](/de/docs/Web/API/CanvasRenderingContext2D/setLineDash)
  - : Legt das aktuelle Liniendash-Muster fest.
- [`lineDashOffset = value`](/de/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)
  - : Gibt an, wo ein Dash-Muster auf einer Linie beginnen soll.

Sie bekommen ein besseres Verständnis dafür, was diese tun, indem Sie sich die Beispiele unten ansehen.

### Ein Beispiel für `lineWidth`

Diese Eigenschaft legt die aktuelle Linienstärke fest. Die Werte müssen positive Zahlen sein. Standardmäßig ist dieser Wert auf 1,0 Einheiten eingestellt.

Die Linienstärke ist die Dicke des Strichs, der auf dem angegebenen Pfad zentriert ist. Mit anderen Worten, der Bereich, der gezeichnet wird, erstreckt sich um die Hälfte der Linienstärke auf beiden Seiten des Pfades. Da Canvas-Koordinaten nicht direkt auf Pixel verweisen, muss besondere Sorgfalt getroffen werden, um präzise horizontale und vertikale Linien zu erhalten.

Im folgenden Beispiel werden 10 gerade Linien mit zunehmender Linienbreite gezeichnet. Die Linie ganz links ist 1,0 Einheiten breit. Allerdings erscheinen die linkeste und alle anderen ungeraden Linienstärkebreiten nicht präzise, aufgrund der Positionierung des Pfades.

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

Um präzise Linien zu erhalten, muss man verstehen, wie Pfade gestrichen werden. In den Bildern unten repräsentiert das Raster das Canvas-Koordinatengitter. Die Quadrate zwischen den Gitterlinien sind tatsächliche Bildschirm-Pixel. Im ersten Rasterbild unten ist ein Rechteck von (2,1) bis (5,5) ausgefüllt. Der gesamte Bereich dazwischen (hellrot) fällt auf Pixelgrenzen, sodass das resultierende ausgefüllte Rechteck präzise Kanten haben wird.

![Drei Koordinatengitter. Die Gitterlinien sind tatsächliche Pixel auf dem Bildschirm. Die obere linke Ecke jedes Gitters ist mit (0,0) beschriftet. Im ersten Gitter ist ein Rechteck von (2,1) bis (5,5) in hellrot gefüllt. Im zweiten Gitter ist (3,1) bis (3,5) mit einer 1-Pixel dicken königsblauen Linie verbunden. Die königsblaue Linie ist auf einer Gitterlinie zentriert und erstreckt sich von 2.5 bis 3.5 auf der x-Achse, halb in die Pixel auf beiden Seiten der Grafiklinie hinein, mit einem hellblauen Hintergrund auf beiden Seiten von 2 bis 4 auf der x-Achse. Um die hellblaue Unschärfeerweiterung der Linie im zweiten Koordinatengitter zu vermeiden, ist der Pfad im dritten Koordinatengitter eine königsblaue Linie von (3.5,1) bis (3.5,5). Die 1-Pixel-Linienbreite füllt am Ende vollständig und präzise eine einfache Pixel-Vertikallinie aus.](canvas-grid.png)

Wenn Sie einen Pfad von (3,1) bis (3,5) mit einer Linienstärke von `1.0` betrachten, landen Sie in der Situation im zweiten Bild. Der tatsächliche Bereich, der gefüllt werden soll (dunkelblau), erstreckt sich nur halb in die Pixel auf beiden Seiten des Pfades hinein. Eine Annäherung daran muss gerendert werden, was bedeutet, dass diese Pixel nur teilweise beschattet werden und dazu führt, dass der gesamte Bereich (das hellblaue und das dunkelblaue) mit einer Farbe gefüllt wird, die nur halb so dunkel ist wie die tatsächliche Strichfarbe. Dies geschieht mit der `1.0` Linienbreite im vorherigen Beispielcode.

Um dies zu beheben, müssen Sie bei der Pfaderstellung sehr präzise sein. Wenn man weiß, dass eine `1.0`-Breite-Linie sich um eine halbe Einheit auf beide Seiten des Pfades erstrecken wird, führt das Erstellen des Pfades von (3.5,1) bis (3.5,5) zu der Situation im dritten Bild — die `1.0` Linienbreite füllt am Ende vollständig und präzise eine einfache Pixel-Vertikallinie aus.

> [!NOTE]
> Seien Sie sich bewusst, dass in unserem Beispiel der vertikalen Linie die Y-Position immer noch eine ganze Gitterlinienposition referenziert — wenn dies nicht der Fall wäre, würden wir an den Endpunkten Pixel mit halber Abdeckung sehen (beachten Sie jedoch auch, dass dieses Verhalten von dem aktuellen `lineCap`-Still abhängt, dessen Standardwert `butt` ist; Sie sollten möglicherweise konsistente Striche mit halben Pixelkoordinaten für ungerade Breitenlinien berechnen, indem Sie den `lineCap`-Stil auf `square` einstellen, sodass der äußere Rand des Strichs um den Endpunkt automatisch erweitert wird, um das ganze Pixel genau abzudecken).
>
> Beachten Sie auch, dass nur Anfangs- und Endendpunkte eines Pfades betroffen sind: Wenn ein Pfad mit `closePath()` geschlossen wird, gibt es keinen Anfangs- und Endendpunkt; stattdessen sind alle Endpunkte im Pfad mit ihren angehängten vorherigen und nächsten Segmenten verbunden und verwenden die aktuelle Einstellung des `lineJoin`-Stils, dessen Standardwert `miter` ist, mit der Wirkung, die äußeren Ränder der verbundenen Segmente auf ihren Schnittpunkt automatisch zu erweitern, sodass der gerenderte Strich ganze Pixel genau abdeckt, die bei jedem Endpunkt zentriert sind, wenn diese verbundenen Segmente horizontal und/oder vertikal sind. Sehen Sie sich die nächsten beiden Abschnitte an, um Demonstrationen dieser zusätzlichen Linienstile zu sehen.

Für Linien mit gerader Breite endet jede Hälfte als eine ganze Anzahl von Pixeln, also möchten Sie einen Pfad, der sich zwischen den Pixeln befindet (das heißt, (3,1) bis (3,5)), anstatt in der Mitte der Pixel.

Während das anfängliche Arbeiten mit skalierbaren 2D-Grafiken möglicherweise ein wenig schmerzhaft erscheint, sorgt die Achtsamkeit des Pixelrasters und der Position von Pfaden dafür, dass Ihre Zeichnungen unabhängig von Skalierung oder anderen Transformationen korrekt aussehen. Eine `1.0`-Breiten-Vertikallinie, die an der richtigen Position gezeichnet wird, wird eine präzise 2-Pixel-Linie, wenn sie um den Faktor 2 skaliert wird, und erscheint an der richtigen Position.

### Ein Beispiel für `lineCap`

Die `lineCap`-Eigenschaft bestimmt, wie die Endpunkte jeder Linie gezeichnet werden. Es gibt drei mögliche Werte für diese Eigenschaft: `butt`, `round` und `square`. Standardmäßig ist diese Eigenschaft auf `butt` eingestellt:

- `butt`
  - : Die Enden der Linien werden an den Endpunkten rechtwinklig abgeschnitten.
- `round`
  - : Die Enden der Linien sind abgerundet.
- `square`
  - : Die Enden der Linien werden durch Hinzufügen eines Rechtecks mit gleicher Breite und halber Höhe der Linienstärke rechtwinklig abgeschnitten.

In diesem Beispiel werden wir drei Linien zeichnen, jede mit einem anderen Wert für die `lineCap`-Eigenschaft. Ich habe auch zwei Hilfslinien hinzugefügt, um die genauen Unterschiede zwischen den dreien zu sehen. Jede dieser Linien beginnt und endet genau auf diesen Hilfslinien.

Die Linie links verwendet die Standardoption `butt`. Sie werden bemerken, dass sie vollständig bündig mit den Hilfslinien gezeichnet ist. Die zweite ist auf die Nutzung der Option `round` eingestellt. Dies fügt dem Ende einen Halbkreis hinzu, der einen Radius halb der Linienstärke hat. Die Linie auf der rechten Seite verwendet die Option `square`. Das fügt ein Rechteck mit gleicher Breite und halber Höhe der Linienstärke hinzu.

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

Die `lineJoin`-Eigenschaft bestimmt, wie zwei verbundene Segmente (von Linien, Bögen oder Kurven) mit nicht-null Längen in einer Form zusammengefügt werden (degenerierte Segmente mit null Längen, deren angegebene End- und Kontrollpunkte genau an derselben Position sind, werden übersprungen).

Es gibt drei mögliche Werte für diese Eigenschaft: `round`, `bevel` und `miter`. Standardmäßig ist diese Eigenschaft auf `miter` eingestellt. Beachten Sie, dass die Einstellung `lineJoin` keinen Effekt hat, wenn die beiden verbundenen Segmente dieselbe Richtung haben, da in diesem Fall kein Verbindungsbereich hinzugefügt wird:

- `round`
  - : Rundet die Ecken einer Form ab, indem ein zusätzlicher Kreissektor am gemeinsamen Endpunkt der verbundenen Segmente gefüllt wird. Der Radius für diese abgerundeten Ecken entspricht der halben Linienstärke.
- `bevel`
  - : Füllt einen zusätzlichen dreieckigen Bereich zwischen dem gemeinsamen Endpunkt der verbundenen Segmente und den getrennten äußeren rechteckigen Ecken jedes Segments.
- `miter`
  - : Verbundene Segmente werden verbunden, indem ihre äußeren Kanten zu einem einzigen Punkt erweitert werden, mit dem Effekt, dass ein zusätzlicher rauteartiger Bereich gefüllt wird. Diese Einstellung wird durch die `miterLimit`-Eigenschaft beeinflusst, die unten erklärt wird.

Das folgende Beispiel zeichnet drei verschiedene Pfade, die jeweils eine dieser drei `lineJoin`-Eigenschaftseinstellungen demonstrieren; das Ergebnis ist oben gezeigt.

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

Wie Sie im vorherigen Beispiel gesehen haben, wenn zwei Linien mit der Option `miter` verbunden werden, werden die äußeren Kanten der beiden verbundenen Linien bis zu dem Punkt, an dem sie sich treffen, verlängert. Bei Linien, die in großen Winkeln zueinander stehen, ist dieser Punkt nicht weit vom innenliegenden Verbindungspunkt entfernt. Wenn die Winkel zwischen jeder Linie jedoch abnehmen, erhöht sich die Entfernung (Miterlänge) zwischen diesen Punkten exponentiell.

Die `miterLimit`-Eigenschaft bestimmt, wie weit der äußere Verbindungspunkt vom innenliegenden Verbindungspunkt entfernt sein kann. Wenn zwei Linien diesen Wert überschreiten, wird stattdessen eine abgeschrägte Verbindung gezeichnet. Beachten Sie, dass die maximale Miterlänge das Produkt der Linienstärke, gemessen im aktuellen Koordinatensystem, mit dem Wert dieser `miterLimit`-Eigenschaft (dessen Standardwert im HTML-{{HTMLElement("canvas")}} 10,0 ist), sodass die `miterLimit`-Eigenschaft unabhängig von der aktuellen Anzeigeskalierung oder einer affinen Transformation von Pfaden festgelegt werden kann: Sie beeinflusst nur die effektiv dargestellte Form der Linienkanten.

Genauer gesagt ist das Miter-Limit das maximale Verhältnis der Verlängerungslänge (im HTML-Canvas wird es zwischen der äußeren Ecke der verbundenen Kanten der Linie und dem gemeinsamen Endpunkt der verbundenen Segmente gemessen) zur Hälfte der Linienstärke. Es kann auch als das maximale Verhältnis der Entfernung zwischen dem inneren und äußeren Punkt der Verbindung definiert werden, zur Gesamtliniendicke. Sie entspricht dann der Kosinussinus des halben minimalen inneren Winkels der verbundenen Segmente, unter dem keine Miter-Verbindung gerendert wird, sondern nur eine abgeschrägte Verbindung:

- `miterLimit` = **max** `miterLength` / `lineWidth` = 1 / **sin** ( **min** _θ_ / 2 )
- Das Standard-Miterlimit von 10,0 wird alle Miters für scharfe Winkel unter etwa 11 Grad beseitigen.
- Ein Miterlimit gleich √2 ≈ 1,4142136 (gerundet) wird Miters für alle spitzen Winkel entfernen, sodass Miter-Verbindungen nur für stumpfe oder rechte Winkel beibehalten werden.
- Ein Miterlimit von 1,0 ist gültig, verhindert aber alle Mitters.
- Werte unter 1,0 sind ungültig für das Miterlimit.

Hier ist eine kleine Demo, bei der Sie `miterLimit` dynamisch festlegen und sehen können, wie sich dies auf die Formen im Canvas auswirkt. Die blauen Linien zeigen, wo Start- und Endpunkte für jede der Linien im Zickzack-Muster sind.

Wenn Sie in dieser Demo einen `miterLimit`-Wert unter 4,2 angeben, wird keine der sichtbaren Ecken mit einer Miter-Verlängerung verbunden, sondern nur mit einer kleinen Abschrägung in der Nähe der blauen Linien; mit einem `miterLimit` über 10 sollten die meisten Ecken in dieser Demo mit einer Miter-Verlängerung weit entfernt von den blauen Linien verbunden sein, deren Höhe zwischen den Ecken von links nach rechts abnimmt, da sie mit wachsenden Winkeln verbunden sind; mit Zwischenwerten werden die Ecken auf der linken Seite nur mit einer kleinen Abschrägung in der Nähe der blauen Linien verbunden, und die Ecken auf der rechten Seite mit einer Miter-Verlängerung (ebenfalls mit abnehmender Höhe).

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

### Verwendung von Liniendashes

Die `setLineDash`-Methode und die `lineDashOffset`-Eigenschaft spezifizieren das Dash-Muster für Linien. Die `setLineDash`-Methode akzeptiert eine Liste von Zahlen, die Abstände angibt, um abwechselnd eine Linie und einen Abstand zu zeichnen, und die `lineDashOffset`-Eigenschaft legt einen Versatz fest, wo das Muster beginnen soll.

In diesem Beispiel erstellen wir einen „Marching Ants“-Effekt. Es ist eine Animationstechnik, die man häufig in Auswahlwerkzeugen von Computer-Grafikprogrammen findet. Sie hilft dem Benutzer, den Auswahlrahmen vom Bildhintergrund zu unterscheiden, indem sie den Rahmen animiert. In einem späteren Teil dieses Tutorials können Sie lernen, wie Sie dies und andere [einfache Animationen](/de/docs/Web/API/Canvas_API/Tutorial/Basic_animations) erstellen.

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

Wie in jedem normalen Zeichenprogramm können wir Formen mit linearen, radialen und konischen Verläufen füllen und umranden. Wir erstellen ein [`CanvasGradient`](/de/docs/Web/API/CanvasGradient)-Objekt, indem wir eine der folgenden Methoden verwenden. Wir können dann dieses Objekt den Eigenschaften `fillStyle` oder `strokeStyle` zuweisen.

- [`createLinearGradient(x1, y1, x2, y2)`](/de/docs/Web/API/CanvasRenderingContext2D/createLinearGradient)
  - : Erstellt ein lineares Verlaufsobjekt mit einem Startpunkt bei (`x1`, `y1`) und einem Endpunkt bei (`x2`, `y2`).
- [`createRadialGradient(x1, y1, r1, x2, y2, r2)`](/de/docs/Web/API/CanvasRenderingContext2D/createRadialGradient)
  - : Erstellt einen radialen Verlauf. Die Parameter repräsentieren zwei Kreise, einen mit seinem Mittelpunkt bei (`x1`, `y1`) und einem Radius von `r1`, und den anderen mit seinem Mittelpunkt bei (`x2`, `y2`) mit einem Radius von `r2`.
- [`createConicGradient(angle, x, y)`](/de/docs/Web/API/CanvasRenderingContext2D/createConicGradient)
  - : Erstellt ein konisches Verlaufsobjekt mit einem Startwinkel von `angle` in Radiant, an der Position (`x`, `y`).

Zum Beispiel:

```js
const lineargradient = ctx.createLinearGradient(0, 0, 150, 150);
const radialgradient = ctx.createRadialGradient(75, 75, 0, 75, 75, 100);
```

Sobald wir ein `CanvasGradient`-Objekt erstellt haben, können wir ihm mit der `addColorStop()`-Methode Farben zuweisen.

- [`gradient.addColorStop(position, color)`](/de/docs/Web/API/CanvasGradient/addColorStop)
  - : Erstellt einen neuen Farbhalt auf dem `gradient`-Objekt. Die `position` ist eine Zahl zwischen 0,0 und 1,0 und definiert die relative Position der Farbe im Verlauf, und das Argument `color` muss ein String sein, der ein CSS {{cssxref("&lt;color&gt;")}} darstellt und angibt, welche Farbe der Verlauf an dieser Stelle innerhalb des Übergangs erreichen soll.

Sie können einem Verlauf so viele Farbhaltepunkte hinzufügen, wie Sie benötigen. Unten ist ein sehr einfacher linearer Verlauf von Weiß zu Schwarz.

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

Der erste ist ein Hintergrundverlauf. Wie Sie sehen, haben wir zwei Farben an derselben Position zugewiesen. Sie tun dies, um sehr scharfe Farbwechsel zu erzeugen — in diesem Fall von Weiß nach Grün. Normalerweise ist es egal, in welcher Reihenfolge Sie die Farbhaltepunkte definieren, aber in diesem speziellen Fall ist es erheblich. Wenn Sie die Zuweisungen in der Reihenfolge beibehalten, in der Sie sie erscheinen lassen möchten, wird dies kein Problem sein.

Im zweiten Verlauf haben wir die Startfarbe (bei Position 0,0) nicht zugewiesen, da es nicht unbedingt erforderlich war, weil er automatisch die Farbe des nächsten Farbhaltepunkts annimmt. Daher macht das Zuweisen der schwarzen Farbe an Position 0,5 den Verlauf automatisch von Anfang an bis zu diesem Punkt schwarz.

{{EmbedLiveSample("A_createLinearGradient_example", "", "160")}}

### Ein Beispiel für `createRadialGradient`

In diesem Beispiel definieren wir vier verschiedene radiale Verläufe. Da wir Kontrolle über den Start- und Endpunkt des Verlaufs haben, können wir komplexere Effekte erzielen, als wir normalerweise in den „klassischen“ radialen Verläufen sehen, die beispielsweise in Photoshop zu finden sind (das ist, ein Verlauf mit einem einzigen Mittelpunkt, an dem der Verlauf sich kreisförmig nach außen erstreckt).

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

In diesem Fall haben wir den Startpunkt leicht vom Endpunkt versetzt, um einen sphärischen 3D-Effekt zu erzielen. Es ist am besten zu vermeiden, dass sich die inneren und äußeren Kreise überschneiden, da dies zu seltsamen Effekten führt, die schwer vorhersehbar sind.

Der letzte Farbhalt in jedem der vier Verläufe verwendet eine vollständig transparente Farbe. Wenn Sie einen schönen Übergang von diesem zum vorherigen Farbhalt haben möchten, sollten beide Farben gleich sein. Das ist aus dem Code nicht sehr offensichtlich, weil er zwei verschiedene CSS-Farbmethoden als Demonstration verwendet, aber im ersten Verlauf `#019F62 = rgb(1 159 98 / 100%)`.

{{EmbedLiveSample("A_createRadialGradient_example", "", "160")}}

### Ein Beispiel für `createConicGradient`

In diesem Beispiel definieren wir zwei verschiedene konische Verläufe. Ein konischer Verlauf unterscheidet sich von einem radialen Verlauf, da er nicht Kreise, sondern um einen Punkt herum kreiert.

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

Der erste Verlauf ist in der Mitte des ersten Rechtecks positioniert und bewegt einen grünen Farbhalt am Anfang zu einem weißen am Ende. Der Winkel beginnt bei 2 Rad, was bemerkbar ist, da die Anfängs-/Endlinie nach Südosten zeigt.

Der zweite Verlauf ist ebenfalls im Zentrum seines zweiten Rechtecks positioniert. Dieser hat mehrere Farbhaltepunkte, die sich abwechselnd von Schwarz zu Weiß bei jedem Viertel der Drehung bewegen. Dies gibt uns den Schachbrett-Effekt.

{{EmbedLiveSample("A_createConicGradient_example", "", "160")}}

## Muster

In einem der Beispiele auf der vorherigen Seite haben wir eine Serie von Schleifen verwendet, um ein Muster von Bildern zu erstellen. Es gibt jedoch eine wesentlich einfachere Methode: die `createPattern()`-Methode.

- [`createPattern(image, type)`](/de/docs/Web/API/CanvasRenderingContext2D/createPattern)
  - : Erstellt und gibt ein neues Musterobjekt zurück. `image` ist die Quelle der Bilddaten (das heißt, ein [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement), ein [`SVGImageElement`](/de/docs/Web/API/SVGImageElement), ein anderes [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) oder ein [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas), ein [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) oder ein [`VideoFrame`](/de/docs/Web/API/VideoFrame), oder ein [`ImageBitmap`](/de/docs/Web/API/ImageBitmap)). `type` ist ein String, der angibt, wie das Bild verwendet werden soll.

Der Typ spezifiziert, wie das Bild verwendet werden soll, um das Muster zu erstellen, und muss eine der folgenden String-Werte sein:

- `repeat`
  - : Kachelt das Bild sowohl in vertikaler als auch horizontaler Richtung.
- `repeat-x`
  - : Kachelt das Bild horizontal, aber nicht vertikal.
- `repeat-y`
  - : Kachelt das Bild vertikal, aber nicht horizontal.
- `no-repeat`
  - : Kachelt das Bild nicht. Es wird nur einmal verwendet.

Wir verwenden diese Methode, um ein [`CanvasPattern`](/de/docs/Web/API/CanvasPattern)-Objekt zu erstellen, das den Gradient-Methoden, die wir oben gesehen haben, sehr ähnlich ist. Sobald wir ein Muster erstellt haben, können wir es den Eigenschaften `fillStyle` oder `strokeStyle` zuweisen. Zum Beispiel:

```js
const img = new Image();
img.src = "some-image.png";
const pattern = ctx.createPattern(img, "repeat");
```

> [!NOTE]
> Wie bei der `drawImage()`-Methode müssen Sie sicherstellen, dass das Bild, das Sie verwenden, geladen ist, bevor Sie diese Methode aufrufen, da das Muster sonst möglicherweise falsch gezeichnet wird.

### Ein Beispiel für `createPattern`

In diesem letzten Beispiel erstellen wir ein Muster, um es der `fillStyle`-Eigenschaft zuzuweisen. Das Einzige, was es zu beachten gilt, ist der Einsatz des `onload`-Handlers des Bildes. Dies stellt sicher, dass das Bild geladen ist, bevor es dem Muster zugewiesen wird.

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

Die Verwendung von Schatten beinhaltet nur vier Eigenschaften:

- [`shadowOffsetX = float`](/de/docs/Web/API/CanvasRenderingContext2D/shadowOffsetX)
  - : Gibt den horizontalen Abstand an, den der Schatten vom Objekt aus erstrecken sollte. Dieser Wert wird nicht von der Transformationsmatrix beeinflusst. Der Standardwert ist 0.
- [`shadowOffsetY = float`](/de/docs/Web/API/CanvasRenderingContext2D/shadowOffsetY)
  - : Gibt den vertikalen Abstand an, den der Schatten vom Objekt aus erstrecken sollte. Dieser Wert wird nicht von der Transformationsmatrix beeinflusst. Der Standardwert ist 0.
- [`shadowBlur = float`](/de/docs/Web/API/CanvasRenderingContext2D/shadowBlur)
  - : Gibt die Größe des Unschärfeeffekts an; dieser Wert entspricht nicht einer Anzahl von Pixeln und wird nicht von der aktuellen Transformationsmatrix beeinflusst. Der Standardwert ist 0.
- [`shadowColor = color`](/de/docs/Web/API/CanvasRenderingContext2D/shadowColor)
  - : Ein Standard-CSS-Farbwert, der die Farbe des Schatteneffekts angibt; standardmäßig ist es volltransparentes Schwarz.

Die Eigenschaften `shadowOffsetX` und `shadowOffsetY` geben an, wie weit sich der Schatten vom Objekt in X- und Y-Richtung erstrecken soll; diese Werte werden nicht von der aktuellen Transformationsmatrix beeinflusst. Verwenden Sie negative Werte, um den Schatten nach oben oder links zu verlängern, und positive Werte, um den Schatten nach unten oder rechts zu verlängern. Beide sind standardmäßig 0.

Die Eigenschaft `shadowBlur` gibt die Größe des Unschärfeeffekts an; dieser Wert entspricht nicht einer Anzahl von Pixeln und wird nicht von der aktuellen Transformationsmatrix beeinflusst. Der Standardwert ist 0.

Die Eigenschaft `shadowColor` ist ein Standard-CSS-Farbwert, der die Farbe des Schatteneffekts angibt; standardmäßig ist es volltransparentes Schwarz.

> [!NOTE]
> Schatten werden nur für `source-over` [Kompositionsoperationen](/de/docs/Web/API/Canvas_API/Tutorial/Compositing) gezeichnet.

### Ein Beispiel für schattierten Text

Dieses Beispiel zeichnet eine Textzeichenfolge mit einem Schattierungseffekt.

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

Wir werden die `font`-Eigenschaft und die `fillText`-Methode im nächsten Kapitel über [Text zeichnen](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text) betrachten.

## Canvas-Füllregeln

Bei der Verwendung von `fill` (oder [`clip`](/de/docs/Web/API/CanvasRenderingContext2D/clip) und [`isPointInPath`](/de/docs/Web/API/CanvasRenderingContext2D/isPointInPath)) können Sie optional einen Füllregelalgorithmus angeben, nach dem bestimmt wird, ob ein Punkt innerhalb oder außerhalb eines Pfades liegt und somit gefüllt wird oder nicht. Dies ist nützlich, wenn sich ein Pfad selbst schneidet oder verschachtelt ist.

Zwei Werte sind möglich:

- `nonzero`
  - : Die [Non-Zero-Windregel](https://en.wikipedia.org/wiki/Nonzero-rule), die die Standardregel ist.
- `evenodd`
  - : Die [Even-Odd-Windregel](https://en.wikipedia.org/wiki/Even%E2%80%93odd_rule).

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
