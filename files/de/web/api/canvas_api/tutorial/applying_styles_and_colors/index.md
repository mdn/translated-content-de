---
title: Anwenden von Stilen und Farben
slug: Web/API/Canvas_API/Tutorial/Applying_styles_and_colors
l10n:
  sourceCommit: 6f1b699dd8891431bbfe0bc3bb803f929fa6032e
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Drawing_shapes", "Web/API/Canvas_API/Tutorial/Drawing_text")}}

Im Kapitel über das [Zeichnen von Formen](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes) haben wir nur die Standardlinien- und Füllstile verwendet. Hier werden wir die verfügbaren Optionen des Canvas erkunden, um unsere Zeichnungen etwas attraktiver zu gestalten. Sie lernen, wie Sie verschiedene Farben, Linienstile, Verläufe, Muster und Schatten zu Ihren Zeichnungen hinzufügen können.

> [!NOTE]
> Canvas-Inhalte sind für Screenreader nicht zugänglich. Wenn das Canvas rein dekorativ ist, fügen Sie `role="presentation"` zum Eröffnungstag des `<canvas>` hinzu. Andernfalls fügen Sie beschreibenden Text als Wert des [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)-Attributs direkt dem Canvas-Element hinzu oder fügen Sie Ersatzinhalte zwischen den öffnenden und schließenden Canvas-Tags ein. Canvas-Inhalte sind nicht Teil des DOM, aber verschachtelte Ersatzinhalte sind es.

## Farben

Bisher haben wir nur Methoden des Zeichnungskontextes gesehen. Wenn wir Farben auf eine Form anwenden möchten, gibt es zwei wichtige Eigenschaften, die wir verwenden können: `fillStyle` und `strokeStyle`.

- [`fillStyle = color`](/de/docs/Web/API/CanvasRenderingContext2D/fillStyle)
  - : Legt den Stil fest, der beim Füllen von Formen verwendet wird.
- [`strokeStyle = color`](/de/docs/Web/API/CanvasRenderingContext2D/strokeStyle)
  - : Legt den Stil für die Umrisse von Formen fest.

`color` ist eine Zeichenkette, die entweder eine CSS {{cssxref("&lt;color&gt;")}}, ein Gradient-Objekt oder ein Musterobjekt repräsentiert. Später werden wir auf Gradient- und Musterobjekte eingehen. Standardmäßig sind die Linien- und Füllfarben auf Schwarz (CSS-Farbwert `#000000`) eingestellt.

> [!NOTE]
> Wenn Sie die Eigenschaften `strokeStyle` und/oder `fillStyle` festlegen, wird der neue Wert zum Standard für alle von dort an gezeichneten Formen. Für jede Form, die Sie in einer anderen Farbe haben möchten, müssen Sie die Eigenschaft `fillStyle` oder `strokeStyle` neu zuweisen.

Die gültigen Zeichenketten sollten gemäß der Spezifikation CSS {{cssxref("&lt;color&gt;")}}-Werte sein. Jedes der folgenden Beispiele beschreibt die gleiche Farbe.

```js
// these all set the fillStyle to 'orange'

ctx.fillStyle = "orange";
ctx.fillStyle = "#FFA500";
ctx.fillStyle = "rgb(255 165 0)";
ctx.fillStyle = "rgb(255 165 0 / 100%)";
```

### Ein `fillStyle`-Beispiel

In diesem Beispiel verwenden wir erneut zwei `for`-Schleifen, um ein Gitter von Rechtecken zu zeichnen, jeweils in einer anderen Farbe. Das resultierende Bild sollte in etwa wie der Screenshot aussehen. Es passiert hier nichts allzu Spektakuläres. Wir verwenden die beiden Variablen `i` und `j`, um für jedes Quadrat eine einzigartige RGB-Farbe zu erzeugen, und ändern nur die roten und grünen Werte. Der blaue Kanal hat einen festen Wert. Durch Ändern der Kanäle können Sie alle Arten von Paletten erzeugen. Durch Erhöhen der Schritte können Sie etwas erreichen, das wie die Farbpaletten von Photoshop aussieht.

```js
function draw() {
  const ctx = document.getElementById("my-canvas").getContext("2d");
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
<canvas id="my-canvas" width="150" height="150"
  >A 6 by 6 square grid displaying 36 different colors</canvas
>
```

```js hidden
draw();
```

Das Ergebnis sieht folgendermaßen aus:

{{EmbedLiveSample("A_fillStyle_example", "", "160")}}

### Ein `strokeStyle`-Beispiel

Dieses Beispiel ist dem obigen ähnlich, verwendet jedoch die `strokeStyle`-Eigenschaft, um die Farben der Umrisse der Formen zu ändern. Wir verwenden die `arc()`-Methode, um Kreise anstelle von Quadraten zu zeichnen.

```js
function draw() {
  const ctx = document.getElementById("my-canvas").getContext("2d");
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
<canvas id="my-canvas" width="150" height="150" role="presentation"></canvas>
```

```js hidden
draw();
```

Das Ergebnis sieht folgendermaßen aus:

{{EmbedLiveSample("A_strokeStyle_example", "", "160")}}

## Transparenz

Zusätzlich zum Zeichnen von undurchsichtigen Formen auf das Canvas können wir auch halbtransparente (oder durchscheinende) Formen zeichnen. Dies geschieht entweder durch Festlegen der `globalAlpha`-Eigenschaft oder durch Zuweisen einer halbtransparenten Farbe zum Linien- und/oder Füllstil.

- [`globalAlpha = transparencyValue`](/de/docs/Web/API/CanvasRenderingContext2D/globalAlpha)
  - : Wendet den angegebenen Transparenzwert auf alle zukünftigen auf dem Canvas gezeichneten Formen an. Der Wert muss zwischen 0.0 (vollständig transparent) und 1.0 (vollständig undurchsichtig) liegen. Dieser Wert ist standardmäßig 1.0 (vollständig undurchsichtig).

Die `globalAlpha`-Eigenschaft kann nützlich sein, wenn Sie viele Formen auf dem Canvas mit ähnlicher Transparenz zeichnen möchten; ansonsten ist es im Allgemeinen nützlicher, die Transparenz auf einzelnen Formen festzulegen, wenn Sie deren Farben einstellen.

Da die Eigenschaften `strokeStyle` und `fillStyle` CSS-rgb-Farbwerte akzeptieren, können wir die folgende Notation verwenden, um ihnen eine transparente Farbe zuzuweisen.

```js
// Assigning transparent colors to stroke and fill style

ctx.strokeStyle = "rgb(255 0 0 / 50%)";
ctx.fillStyle = "rgb(255 0 0 / 50%)";
```

Die `rgb()`-Funktion hat einen optionalen zusätzlichen Parameter. Der letzte Parameter legt den Transparenzwert dieser bestimmten Farbe fest. Der gültige Bereich wird als Prozentsatz zwischen `0%` (vollständig transparent) und `100%` (vollständig undurchsichtig) oder als Zahl zwischen `0.0` (entspricht `0%`) und `1.0` (entspricht `100%`) angegeben.

### Ein `globalAlpha`-Beispiel

In diesem Beispiel zeichnen wir einen Hintergrund aus vier verschiedenfarbigen Quadraten. Darauf zeichnen wir eine Reihe von halbtransparenten Kreisen. Die `globalAlpha`-Eigenschaft wird auf `0.2` gesetzt, was für alle Formen ab diesem Punkt verwendet wird. Jeder Schritt in der `for`-Schleife zeichnet eine Reihe von Kreisen mit zunehmendem Radius. Das Endergebnis ist ein radialer Verlauf. Durch das Überlagern von immer mehr Kreisen wird die Transparenz der bereits gezeichneten Kreise effektiv reduziert. Durch Erhöhen der Schrittzahl und damit das Zeichnen von mehr Kreisen würde der Hintergrund in der Mitte des Bildes vollständig verschwinden.

```js
function draw() {
  const ctx = document.getElementById("my-canvas").getContext("2d");
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
<canvas id="my-canvas" width="150" height="150" role="presentation"></canvas>
```

```js hidden
draw();
```

{{EmbedLiveSample("A_globalAlpha_example", "", "160")}}

### Ein Beispiel für die Verwendung von `rgb()` mit Alphatransparenz

In diesem zweiten Beispiel machen wir etwas Ähnliches wie im obigen, aber anstatt Kreise übereinander zu zeichnen, habe ich kleine Rechtecke mit zunehmender Deckkraft gezeichnet. Die Verwendung von `rgb()` gibt Ihnen ein wenig mehr Kontrolle und Flexibilität, da wir den Füll- und Linienstil individuell festlegen können.

```js
function draw() {
  const ctx = document.getElementById("my-canvas").getContext("2d");

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
<canvas id="my-canvas" width="150" height="150" role="presentation"></canvas>
```

```js hidden
draw();
```

{{EmbedLiveSample("An_example_using_rgb_with_alpha_transparency", "", "160")}}

## Linienstile

Es gibt mehrere Eigenschaften, mit denen wir Linien stilisieren können.

- [`lineWidth = value`](/de/docs/Web/API/CanvasRenderingContext2D/lineWidth)
  - : Legt die Breite für in Zukunft gezeichnete Linien fest.
- [`lineCap = type`](/de/docs/Web/API/CanvasRenderingContext2D/lineCap)
  - : Legt das Aussehen der Enden von Linien fest.
- [`lineJoin = type`](/de/docs/Web/API/CanvasRenderingContext2D/lineJoin)
  - : Legt das Aussehen der "Ecken" fest, an denen sich Linien treffen.
- [`miterLimit = value`](/de/docs/Web/API/CanvasRenderingContext2D/miterLimit)
  - : Legt ein Limit auf das "Miter" fest, wenn zwei Linien in einem spitzen Winkel aufeinandertreffen, um zu kontrollieren, wie dick die Verbindung wird.
- [`getLineDash()`](/de/docs/Web/API/CanvasRenderingContext2D/getLineDash)
  - : Gibt das aktuelle Linienmuster-Array mit einer geraden Anzahl von nicht-negativen Zahlen zurück.
- [`setLineDash(segments)`](/de/docs/Web/API/CanvasRenderingContext2D/setLineDash)
  - : Legt das aktuelle Linienmuster fest.
- [`lineDashOffset = value`](/de/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)
  - : Gibt an, wo ein Musterarray auf einer Linie beginnen soll.

Sie werden ein besseres Verständnis dafür bekommen, was diese tun, wenn Sie sich die folgenden Beispiele ansehen.

### Ein `lineWidth`-Beispiel

Diese Eigenschaft legt die aktuelle Linienstärke fest. Werte müssen positive Zahlen sein. Standardmäßig ist dieser Wert auf 1.0 Einheiten eingestellt.

Die Linienbreite ist die Dicke des Striches, der sich auf beiden Seiten des Pfades erstreckt. Anders ausgedrückt: Der Bereich, der gezeichnet wird, erstreckt sich um die halbe Linienbreite auf beiden Seiten des Pfades. Da Canvas-Koordinaten nicht direkt Pixel referenzieren, muss besondere Sorgfalt angewendet werden, um klare horizontale und vertikale Linien zu erhalten.

Im untenstehenden Beispiel werden 10 gerade Linien mit zunehmender Linienbreite gezeichnet. Die Linie ganz links ist 1.0 Einheiten breit. Allerdings erscheinen die linke und alle anderen ungeraden Linienbreiten nicht scharf, aufgrund der Positionierung des Pfades.

```js
function draw() {
  const ctx = document.getElementById("my-canvas").getContext("2d");
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
<canvas id="my-canvas" width="150" height="150" role="presentation"></canvas>
```

```js hidden
draw();
```

{{EmbedLiveSample("A_lineWidth_example", "", "160")}}

> [!NOTE]
> Wenn Sie sich fragen, warum die Linien am Rand statt schwarz grau erscheinen, schauen Sie sich den Abschnitt [Unscharfe Kanten sehen?](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#seeing_blurry_edges) im vorherigen Kapitel an.

### Ein `lineCap`-Beispiel

Die `lineCap`-Eigenschaft bestimmt, wie die Endpunkte jeder Linie gezeichnet werden. Es gibt drei mögliche Werte für diese Eigenschaft, und diese sind: `butt`, `round` und `square`. Standardmäßig ist diese Eigenschaft auf `butt` eingestellt:

- `butt`
  - : Die Enden von Linien sind an den Endpunkten abgeschnitten.
- `round`
  - : Die Enden von Linien sind abgerundet.
- `square`
  - : Die Enden von Linien sind durch das Hinzufügen eines Vierecks mit gleicher Breite und halber Höhe der Linienstärke abgeschnitten.

Nur Start- und Endpunkte eines Pfades sind betroffen: wenn ein Pfad mit `closePath()` geschlossen wird, gibt es keinen Start- und Endpunkt mehr; stattdessen sind alle Endpunkte im Pfad mit ihrem vorherigen und nächsten Segment verbunden, mit der aktuellen Einstellung des `lineJoin`-Stils.

In diesem Beispiel werden wir drei Linien zeichnen, jede mit einem anderen Wert für die `lineCap`-Eigenschaft. Ich habe auch zwei Führungen hinzugefügt, um die genauen Unterschiede zwischen den dreien zu sehen. Jede dieser Linien beginnt und endet genau auf diesen Führungen.

Die Linie links verwendet die Standardoption `butt`. Sie werden feststellen, dass sie vollständig bündig mit den Führungen gezeichnet ist. Die zweite ist auf die Verwendung der Option `round` eingestellt. Dies fügt an den Enden einen Halbkreis hinzu, dessen Radius die Hälfte der Linienbreite beträgt. Die Linie rechts verwendet die Option `square`. Dies fügt an den Enden ein Viereck hinzu, das die gleiche Breite und halbe Höhe der Linienstärke hat.

```js
function draw() {
  const ctx = document.getElementById("my-canvas").getContext("2d");

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
<canvas id="my-canvas" width="150" height="150" role="presentation"></canvas>
```

```js hidden
draw();
```

{{EmbedLiveSample("A_lineCap_example", "", "160")}}

### Ein `lineJoin`-Beispiel

Die `lineJoin`-Eigenschaft bestimmt, wie zwei Verbindungssegmente (von Linien, Bögen oder Kurven) mit nicht-null Länge in einer Form zusammengefügt werden (degenerierte Segmente mit null Länge, deren angegebene Endpunkte und Kontrollpunkte sich genau an derselben Position befinden, werden übersprungen).

Es gibt drei mögliche Werte für diese Eigenschaft: `round`, `bevel` und `miter`. Standardmäßig ist diese Eigenschaft auf `miter` gesetzt. Beachten Sie, dass die Einstellung `lineJoin` keine Wirkung hat, wenn die zwei verbundenen Segmente die gleiche Richtung haben, da in diesem Fall kein Verbindungsbereich hinzufügt wird:

- `round`
  - : Rundet die Ecken einer Form ab, indem ein zusätzliches Kreissegment gefüllt wird, das am gemeinsamen Endpunkt verbundener Segmente zentriert ist. Der Radius für diese abgerundeten Ecken ist gleich der halben Linienbreite.
- `bevel`
  - : Füllt einen zusätzlichen dreieckigen Bereich zwischen dem gemeinsamen Endpunkt verbundener Segmente und den separaten äußeren rechteckigen Ecken jedes Segments.
- `miter`
  - : Verbundene Segmente werden durch das Verlängern ihrer äußeren Kanten verbunden, um an einem einzigen Punkt zu konvergieren, wodurch ein zusätzliches rautenförmiges Gebiet gefüllt wird. Diese Einstellung wird durch die `miterLimit`-Eigenschaft beeinflusst, die unten erklärt wird.

Das folgende Beispiel zeichnet drei verschiedene Pfade, die jede dieser drei `lineJoin`-Eigenschaften demonstrieren; das Ergebnis wird oben gezeigt.

```js
function draw() {
  const ctx = document.getElementById("my-canvas").getContext("2d");
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
<canvas id="my-canvas" width="150" height="150" role="presentation"></canvas>
```

```js hidden
draw();
```

{{EmbedLiveSample("A_lineJoin_example", "", "160")}}

### Eine Demo der `miterLimit`-Eigenschaft

Wie Sie im vorherigen Beispiel gesehen haben, werden bei der Verbindung zweier Linien mit der `miter`-Option die äußeren Kanten der zwei verbindenden Linien bis zum Punkt verlängert, an dem sie sich treffen. Für Linien, die in großen Winkeln zueinander stehen, liegt dieser Punkt nicht weit vom inneren Verbindungspunkt entfernt. Wenn jedoch die Winkel zwischen jeder Linie abnehmen, erhöht sich die Entfernung (Miter-Länge) zwischen diesen Punkten exponentiell.

Die `miterLimit`-Eigenschaft bestimmt, wie weit der äußere Verbindungspunkt vom inneren Verbindungspunkt entfernt platziert werden kann. Wenn zwei Linien diesen Wert überschreiten, wird stattdessen eine abgeschrägte Verbindung gezeichnet. Beachten Sie, dass die maximale Miter-Länge das Produkt der Linienbreite ist, die im aktuellen Koordinatensystem gemessen wird, durch den Wert dieser `miterLimit`-Eigenschaft (deren Standardwert im HTML-{{HTMLElement("canvas")}} bei 10.0 liegt), sodass die `miterLimit` unabhängig von der aktuellen Anzeigeskalierung oder Affin-Transformationen von Pfaden eingestellt werden kann: sie beeinflusst nur die effektiv gerenderte Form der Linienkanten.

Ganz genau gesagt ist die Miter-Limitierung das maximal zulässige Verhältnis der Verlängerungslänge (im HTML-Canvas wird sie zwischen der äußeren Ecke der verbundenen Kanten der Linie und dem gemeinsamen Endpunkt der verbundenen Segmente gemessen, die im Pfad angegeben sind) zur halben Linienbreite. Sie kann äquivalent als das maximal erlaubte Verhältnis der Entfernung zwischen dem inneren und äußeren Punkt der Verbindung der Kanten zur gesamten Linienbreite definiert werden. Sie entspricht dann der Kosekans des halben minimalen Innenwinkels der verbundenen Segmente, unterhalb dessen keine Miter-Verbindung gezeichnet wird, sondern nur eine abgeschrägte Verbindung:

- `miterLimit` = **max** `miterLength` / `lineWidth` = 1 / **sin** ( **min** _θ_ / 2 )
- Die Standard-Miter-Limitierung von 10.0 wird alle Miter für scharfe Winkel unter etwa 11 Grad entfernen.
- Eine Miter-Limitierung gleich √2 ≈ 1.4142136 (aufgerundet) wird Miter für alle spitzen Winkel entfernen und Miter-Verbindungen nur für stumpfe oder rechte Winkel beibehalten.
- Eine Miter-Limitierung gleich 1.0 ist gültig, aber wird alle Miter deaktivieren.
- Werte unter 1.0 sind für die Miter-Limitierung ungültig.

Hier ist eine kleine Demo, in der Sie die `miterLimit` dynamisch einstellen können, um zu sehen, wie diese die Formen auf dem Canvas beeinflusst. Die blauen Linien zeigen, wo sich die Start- und Endpunkte jeder Linie im Zick-Zack-Muster befinden.

Wenn Sie in dieser Demo einen `miterLimit`-Wert unter 4.2 angeben, wird keine der sichtbaren Ecken mit einer Miter-Verlängerung verbunden, sondern nur mit einer kleinen Abschrägung in der Nähe der blauen Linien; mit einer `miterLimit` über 10 sollten die meisten Ecken in dieser Demo mit einem Miter weit weg von den blauen Linien verbunden werden, und deren Höhe nimmt zwischen den Ecken von links nach rechts ab, da sie mit zunehmenden Winkeln verbunden sind; mit Zwischenwerten werden die Ecken auf der linken Seite nur mit einer Abschrägung in der Nähe der blauen Linien verbunden, und die Ecken auf der rechten Seite mit einer Miter-Verlängerung (ebenfalls mit abnehmender Höhe).

```js
function draw() {
  const ctx = document.getElementById("my-canvas").getContext("2d");

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
<canvas id="my-canvas" width="150" height="150" role="presentation"></canvas>
<div>
  Change the <code>miterLimit</code> by entering a new value below and clicking
  the redraw button.<br /><br />
  <label for="miterLimit">Miter limit</label>
  <input type="number" id="miterLimit" min="1" />
  <button id="redraw">Redraw</button>
</div>
```

```css hidden
body {
  display: flex;
}
```

```js hidden
document.getElementById("miterLimit").value = document
  .getElementById("my-canvas")
  .getContext("2d").miterLimit;
draw();

const redraw = document.getElementById("redraw");
redraw.addEventListener("click", draw);
```

{{EmbedLiveSample("A_demo_of_the_miterLimit_property", "", "180")}}

### Verwendung von Liniendashes

Die `setLineDash`-Methode und die `lineDashOffset`-Eigenschaft spezifizieren das Dash-Muster für Linien. Die `setLineDash`-Methode akzeptiert eine Liste von Zahlen, die Entfernungen spezifiziert, um abwechselnd eine Linie und eine Lücke zu zeichnen, und die `lineDashOffset`-Eigenschaft setzt einen Offset, wo das Muster beginnen soll.

In diesem Beispiel erstellen wir einen "marching ants"-Effekt. Es handelt sich um eine Animationstechnik, die oft in Auswahlwerkzeugen von Computer-Grafikprogrammen verwendet wird. Es hilft dem Benutzer, den Auswahlrand von dem Hintergrund des Bildes zu unterscheiden, indem es den Rand animiert. In einem späteren Teil dieses Tutorials können Sie lernen, wie man das macht und andere [Basis-Animationen](/de/docs/Web/API/Canvas_API/Tutorial/Basic_animations).

```html hidden
<canvas id="my-canvas" width="111" height="111" role="presentation"></canvas>
```

```js
const ctx = document.getElementById("my-canvas").getContext("2d");
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

Genau wie in jedem normalen Zeichenprogramm können wir Formen mit linearen, radialen und konischen Verläufen füllen und umranden. Wir erstellen ein [`CanvasGradient`](/de/docs/Web/API/CanvasGradient)-Objekt mit einer der folgenden Methoden. Wir können dann dieses Objekt den Eigenschaften `fillStyle` oder `strokeStyle` zuweisen.

- [`createLinearGradient(x1, y1, x2, y2)`](/de/docs/Web/API/CanvasRenderingContext2D/createLinearGradient)
  - : Erstellt ein lineares Gradient-Objekt mit einem Startpunkt von (`x1`, `y1`) und einem Endpunkt von (`x2`, `y2`).
- [`createRadialGradient(x1, y1, r1, x2, y2, r2)`](/de/docs/Web/API/CanvasRenderingContext2D/createRadialGradient)
  - : Erstellt ein radialen Verlauf. Die Parameter stehen für zwei Kreise, einer mit seinem Zentrum bei (`x1`, `y1`) und einem Radius von `r1`, und der andere mit seinem Zentrum bei (`x2`, `y2`) mit einem Radius von `r2`.
- [`createConicGradient(angle, x, y)`](/de/docs/Web/API/CanvasRenderingContext2D/createConicGradient)
  - : Erstellt ein konischen Verlauf-Objekt mit einem Startwinkel von `angle` in Bogenmaß, an der Position (`x`, `y`).

Zum Beispiel:

```js
const lineargradient = ctx.createLinearGradient(0, 0, 150, 150);
const radialgradient = ctx.createRadialGradient(75, 75, 0, 75, 75, 100);
```

Sobald wir ein `CanvasGradient`-Objekt erstellt haben, können wir ihm mit der Methode `addColorStop()` Farben zuweisen.

- [`gradient.addColorStop(position, color)`](/de/docs/Web/API/CanvasGradient/addColorStop)
  - : Erstellt einen neuen Farbverlauf auf dem `gradient`-Objekt. Die `position` ist eine Zahl zwischen 0.0 und 1.0 und definiert die relative Position der Farbe im Verlauf, und das `color`-Argument muss eine Zeichenkette sein, die eine CSS {{cssxref("&lt;color&gt;")}} repräsentiert, die angibt, welche Farbe der Verlauf an dieser Stelle der Übergang erreichen sollte.

Sie können einem Verlauf so viele Farbverläufe hinzufügen, wie Sie benötigen. Unten sehen Sie einen sehr einfachen linearen Verlauf von Weiß zu Schwarz.

```js
const lineargradient = ctx.createLinearGradient(0, 0, 150, 150);
lineargradient.addColorStop(0, "white");
lineargradient.addColorStop(1, "black");
```

### Ein `createLinearGradient`-Beispiel

In diesem Beispiel erstellen wir zwei verschiedene Verläufe. Wie Sie hier sehen können, können die Eigenschaften `strokeStyle` und `fillStyle` ein `canvasGradient`-Objekt als gültige Eingabe akzeptieren.

```js
function draw() {
  const ctx = document.getElementById("my-canvas").getContext("2d");

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
<canvas id="my-canvas" width="150" height="150" role="presentation"></canvas>
```

```js hidden
draw();
```

Der erste ist ein Hintergrundverlauf. Wie Sie sehen können, haben wir zwei Farben an derselben Position zugewiesen. Dies tun Sie, um sehr scharfe Farbverläufe zu erzeugen - in diesem Fall von Weiß zu Grün. Normalerweise ist es egal, in welcher Reihenfolge Sie die Verläufe definieren, aber in diesem speziellen Fall macht es einen signifikanten Unterschied. Wenn Sie die Zuordnungen in der Reihenfolge belassen, in der sie erscheinen sollen, wird das kein Problem darstellen.

Im zweiten Verlauf haben wir die Ausgangsfarbe (an Position 0.0) nicht zugewiesen, da es nicht unbedingt notwendig war, da sie automatisch die Farbe des nächsten Farbverlaufs annehmen wird. Daher macht die Zuordnung der schwarzen Farbe an der Position 0.5 den gesamten Verlauf von Anfang bis zu diesem Farbverlauf schwarz.

{{EmbedLiveSample("A_createLinearGradient_example", "", "160")}}

### Ein `createRadialGradient`-Beispiel

In diesem Beispiel definieren wir vier verschiedene radiale Verläufe. Weil wir die Kontrolle über den Start- und Endpunkt des Verlaufs haben, können wir komplexere Effekte erzielen, als wir sie normalerweise bei den "klassischen" radialen Verläufen sehen, z.B. in Photoshop (das ist ein Verlauf mit einem einzelnen Mittelpunkt, bei dem der Verlauf sich in einer kreisförmigen Form nach außen ausbreitet).

```js
function draw() {
  const ctx = document.getElementById("my-canvas").getContext("2d");

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
<canvas id="my-canvas" width="150" height="150" role="presentation"></canvas>
```

```js hidden
draw();
```

In diesem Fall haben wir den Startpunkt leicht vom Endpunkt versetzt, um einen sphärischen 3D-Effekt zu erzielen. Es ist am besten zu vermeiden, dass sich die inneren und äußeren Kreise überlappen, da dies zu schwer vorhersagbaren Effekten führt.

Der letzte Farbverlauf in jedem der vier Verläufe verwendet eine vollständig transparente Farbe. Wenn Sie einen schönen Übergang von dieser zur vorherigen Farbe haben möchten, sollten beide Farben gleich sein. Dies ist nicht sehr offensichtlich am Code, da er zwei verschiedene CSS-Farbmethoden als Demonstration verwendet, aber im ersten Verlauf `#019F62 = rgb(1 159 98 / 100%)`.

{{EmbedLiveSample("A_createRadialGradient_example", "", "160")}}

### Ein `createConicGradient`-Beispiel

In diesem Beispiel definieren wir zwei verschiedene konische Verläufe. Ein konischer Verlauf unterscheidet sich von einem radialen Verlauf, da er an einem Punkt herumkreist, anstatt Kreise zu erzeugen.

```js
function draw() {
  const ctx = document.getElementById("my-canvas").getContext("2d");

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
<canvas id="my-canvas" width="250" height="150" role="presentation"
  >A conic gradient</canvas
>
```

```js hidden
draw();
```

Der erste Verlauf ist im Zentrum des ersten Rechtecks positioniert und bewegt einen grünen Farbverlauf am Anfang zu einem weißen am Ende. Der Winkel beginnt bei 2 Radianten, was bemerkbar ist, da die Anfangs-/Endlinie nach Südosten zeigt.

Der zweite Verlauf ist ebenfalls im Zentrum des zweiten Rechtecks positioniert. Dieser hat mehrere Farbverläufe, die sich an jedem Viertel der Drehung zwischen Schwarz und Weiß abwechseln. Das ergibt den schachbrettartigen Effekt.

{{EmbedLiveSample("A_createConicGradient_example", "", "160")}}

## Muster

In einem der Beispiele auf der vorherigen Seite haben wir eine Reihe von Schleifen verwendet, um ein Muster aus Bildern zu erstellen. Es gibt jedoch eine viel einfachere Methode: die `createPattern()`-Methode.

- [`createPattern(image, type)`](/de/docs/Web/API/CanvasRenderingContext2D/createPattern)
  - : Erstellt und gibt ein neues Canvas-Musterobjekt zurück. `image` ist die Quelle des Bildes (das heißt, ein [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement), ein [`SVGImageElement`](/de/docs/Web/API/SVGImageElement), ein anderes [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) oder ein [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas), ein [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) oder ein [`VideoFrame`](/de/docs/Web/API/VideoFrame), oder ein [`ImageBitmap`](/de/docs/Web/API/ImageBitmap)). `type` ist eine Zeichenkette, die angibt, wie das Bild verwendet werden soll.

Der Typ gibt an, wie das Bild verwendet werden soll, um das Muster zu erstellen, und muss einer der folgenden Zeichenwerte sein:

- `repeat`
  - : Kachelt das Bild in beide Richtungen.
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
> Wie bei der Methode `drawImage()` müssen Sie sicherstellen, dass das verwendete Bild geladen ist, bevor Sie diese Methode aufrufen, anderenfalls wird das Muster möglicherweise falsch gezeichnet.

### Ein `createPattern`-Beispiel

In diesem letzten Beispiel erstellen wir ein Muster, das der `fillStyle`-Eigenschaft zugewiesen wird. Das einzige, was es wert ist zu beachten, ist die Verwendung des `onload`-Handlers des Bildes. Dies soll sicherstellen, dass das Bild geladen ist, bevor es dem Muster zugewiesen wird.

```js
function draw() {
  const ctx = document.getElementById("my-canvas").getContext("2d");

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
<canvas id="my-canvas" width="150" height="150" role="presentation"></canvas>
```

```js hidden
draw();
```

{{EmbedLiveSample("A_createPattern_example", "", "160")}}

## Schatten

Die Verwendung von Schatten beinhaltet nur vier Eigenschaften:

- [`shadowOffsetX = float`](/de/docs/Web/API/CanvasRenderingContext2D/shadowOffsetX)
  - : Gibt die horizontale Entfernung an, die der Schatten vom Objekt aus erstrecken sollte. Dieser Wert wird nicht von der Transformationsmatrix beeinflusst. Der Standardwert ist 0.
- [`shadowOffsetY = float`](/de/docs/Web/API/CanvasRenderingContext2D/shadowOffsetY)
  - : Gibt die vertikale Entfernung an, die der Schatten vom Objekt aus erstrecken sollte. Dieser Wert wird nicht von der Transformationsmatrix beeinflusst. Der Standardwert ist 0.
- [`shadowBlur = float`](/de/docs/Web/API/CanvasRenderingContext2D/shadowBlur)
  - : Gibt die Größe des Unschärfeneffekts an; dieser Wert entspricht nicht einer Pixelanzahl und wird nicht von der aktuellen Transformationsmatrix beeinflusst. Der Standardwert ist 0.
- [`shadowColor = color`](/de/docs/Web/API/CanvasRenderingContext2D/shadowColor)
  - : Ein standardmäßiger CSS-Farbwert, der die Farbe des Schatteneffekts angibt; standardmäßig ist es volltransparentes Schwarz.

Die Eigenschaften `shadowOffsetX` und `shadowOffsetY` geben an, wie weit der Schatten sich vom Objekt in den X- und Y-Richtungen erstrecken soll; diese Werte werden nicht von der aktuellen Transformationsmatrix beeinflusst. Verwenden Sie negative Werte, um den Schatten nach oben oder nach links zu verursachen, und positive Werte, um den Schatten nach unten oder nach rechts zu verursachen. Beide Standardwerte sind 0.

Die `shadowBlur`-Eigenschaft gibt die Größe des Unschärfeneffekts an; dieser Wert entspricht nicht einer Pixelanzahl und wird nicht von der aktuellen Transformationsmatrix beeinflusst. Der Standardwert ist 0.

Die `shadowColor`-Eigenschaft ist ein standardmäßiger CSS-Farbwert, der die Farbe des Schatteneffekts angibt; standardmäßig ist es volltransparentes Schwarz.

> [!NOTE]
> Schatten werden nur für `source-over` [Kombinationsoperationen](/de/docs/Web/API/Canvas_API/Tutorial/Compositing) gezeichnet.

### Ein Beispiel für Schattentext

Dieses Beispiel zeichnet eine Textzeile mit einem Schattierungseffekt.

```js
function draw() {
  const ctx = document.getElementById("my-canvas").getContext("2d");

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
<canvas id="my-canvas" width="150" height="80" role="presentation"></canvas>
```

```js hidden
draw();
```

{{EmbedLiveSample("A_shadowed_text_example")}}

Im nächsten Kapitel über [Text zeichnen](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text) werden wir die Eigenschaft `font` und die Methode `fillText` genauer betrachten.

## Canvas-Füllregeln

Wenn Sie `fill` (oder [`clip`](/de/docs/Web/API/CanvasRenderingContext2D/clip) und [`isPointInPath`](/de/docs/Web/API/CanvasRenderingContext2D/isPointInPath)) verwenden, können Sie optional einen Füllregel-Algorithmus angeben, durch den bestimmt wird, ob ein Punkt innerhalb oder außerhalb eines Pfades liegt und somit gefüllt wird oder nicht. Dies ist nützlich, wenn sich ein Pfad selbst schneidet oder verschachtelt ist.

Zwei Werte sind möglich:

- `nonzero`
  - : Die [Nicht-Null-Wickelregel](https://de.wikipedia.org/wiki/Winding-Nummer), die die Standardregel ist.
- `evenodd`
  - : Die [gerade-ungerade Regel](https://de.wikipedia.org/wiki/Gerade-ungerade_Regel).

In diesem Beispiel verwenden wir die `evenodd`-Regel.

```js
function draw() {
  const ctx = document.getElementById("my-canvas").getContext("2d");
  ctx.beginPath();
  ctx.arc(50, 50, 30, 0, Math.PI * 2, true);
  ctx.arc(50, 50, 15, 0, Math.PI * 2, true);
  ctx.fill("evenodd");
}
```

```html hidden
<canvas id="my-canvas" width="100" height="100" role="presentation"></canvas>
```

```js hidden
draw();
```

{{EmbedLiveSample("Canvas_fill_rules")}}

{{PreviousNext("Web/API/Canvas_API/Tutorial/Drawing_shapes", "Web/API/Canvas_API/Tutorial/Drawing_text")}}
