---
title: Anwenden von Stilen und Farben
slug: Web/API/Canvas_API/Tutorial/Applying_styles_and_colors
l10n:
  sourceCommit: 9f7e7e9075e9f2b1937d2c8000f52a8ff76bff52
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Drawing_shapes", "Web/API/Canvas_API/Tutorial/Drawing_text")}}

Im Kapitel über [Zeichnen von Formen](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes) haben wir nur die Standardlinien- und Füllstile verwendet. Hier werden wir die Canvas-Optionen erkunden, die uns zur Verfügung stehen, um unseren Zeichnungen ein wenig mehr Attraktivität zu verleihen. Sie werden lernen, wie Sie verschiedene Farben, Linienstile, Verläufe, Muster und Schatten zu Ihren Zeichnungen hinzufügen können.

> [!NOTE]
> Canvas-Inhalt ist für Screenreader nicht zugänglich. Wenn das Canvas rein dekorativ ist, fügen Sie `role="presentation"` zum öffnenden `<canvas>`-Tag hinzu. Andernfalls fügen Sie einen beschreibenden Text als Wert des [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)-Attributs direkt zum Canvas-Element hinzu oder fügen Sie einen Fallback-Inhalt innerhalb des öffnenden und schließenden Canvas-Tags ein. Canvas-Inhalt ist nicht Teil des DOM, aber eingebetteter Fallback-Inhalt ist es.

## Farben

Bisher haben wir nur Methoden des Zeichenkontexts gesehen. Wenn wir Farben auf eine Form anwenden wollen, gibt es zwei wichtige Eigenschaften, die wir verwenden können: `fillStyle` und `strokeStyle`.

- [`fillStyle = color`](/de/docs/Web/API/CanvasRenderingContext2D/fillStyle)
  - : Legt den Stil fest, der beim Füllen von Formen verwendet wird.
- [`strokeStyle = color`](/de/docs/Web/API/CanvasRenderingContext2D/strokeStyle)
  - : Legt den Stil für die Umrisse von Formen fest.

`color` ist ein String, der eine CSS {{cssxref("&lt;color&gt;")}}, ein Verlauf-Objekt oder ein Muster-Objekt darstellt. Wir werden später auf Verlauf- und Muster-Objekte eingehen. Standardmäßig sind die Stroke- und Füllfarben auf Schwarz gesetzt (CSS-Farbwert `#000000`).

> [!NOTE]
> Wenn Sie die Eigenschaft `strokeStyle` und/oder `fillStyle` setzen, wird der neue Wert zum Standard für alle künftig gezeichneten Formen. Für jede Form, die Sie in einer anderen Farbe wünschen, müssen Sie die Eigenschaft `fillStyle` oder `strokeStyle` neu zuweisen.

Die gültigen Zeichenfolgen, die Sie eingeben können, sollten laut Spezifikation CSS {{cssxref("&lt;color&gt;")}}-Werte sein. Die folgenden Beispiele beschreiben jeweils die gleiche Farbe.

```js
// these all set the fillStyle to 'orange'

ctx.fillStyle = "orange";
ctx.fillStyle = "#FFA500";
ctx.fillStyle = "rgb(255 165 0)";
ctx.fillStyle = "rgb(255 165 0 / 100%)";
```

### Ein `fillStyle`-Beispiel

In diesem Beispiel verwenden wir erneut zwei `for`-Schleifen, um ein Gitter aus Rechtecken zu zeichnen, von denen jedes eine andere Farbe hat. Das resultierende Bild sollte in etwa wie der Screenshot aussehen. Es passiert hier nichts allzu Spektakuläres. Wir verwenden die beiden Variablen `i` und `j`, um eine einzigartige RGB-Farbe für jedes Quadrat zu erzeugen und verändern dabei nur die Rot- und Grünwerte. Der Blaukanal hat einen festen Wert. Durch die Modifizierung der Kanäle können Sie alle Arten von Paletten erzeugen. Durch Erhöhung der Schritte können Sie etwas erreichen, das wie die Farbpalletten von Photoshop aussieht.

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

Das Ergebnis sieht folgendermaßen aus:

{{EmbedLiveSample("A_fillStyle_example", "", "160")}}

### Ein `strokeStyle`-Beispiel

Dieses Beispiel ist dem obigen ähnlich, aber hier wird die Eigenschaft `strokeStyle` verwendet, um die Farben der Umrisse der Formen zu ändern. Wir verwenden die Methode `arc()`, um Kreise statt Quadrate zu zeichnen.

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

Das Ergebnis sieht folgendermaßen aus:

{{EmbedLiveSample("A_strokeStyle_example", "", "160")}}

## Transparenz

Zusätzlich zum Zeichnen von undurchsichtigen Formen auf der Canvas können wir auch halbtransparente (oder durchscheinende) Formen zeichnen. Dies geschieht entweder durch Setzen der `globalAlpha`-Eigenschaft oder durch Zuweisung einer halbtransparenten Farbe zum Stroke- und/oder Füllstil.

- [`globalAlpha = transparencyValue`](/de/docs/Web/API/CanvasRenderingContext2D/globalAlpha)
  - : Wendet den angegebenen Transparenzwert auf alle zukünftigen auf der Canvas gezeichneten Formen an. Der Wert muss zwischen 0.0 (vollständig transparent) und 1.0 (vollständig undurchsichtig) liegen. Dieser Wert ist standardmäßig 1.0 (vollständig undurchsichtig).

Die `globalAlpha`-Eigenschaft kann nützlich sein, wenn Sie viele Formen auf der Canvas mit ähnlicher Transparenz zeichnen möchten, aber ansonsten ist es im Allgemeinen nützlicher, die Transparenz für einzelne Formen beim Festlegen ihrer Farben festzulegen.

Da die Eigenschaften `strokeStyle` und `fillStyle` CSS-RGB-Farbwerte akzeptieren, können wir die folgende Notation verwenden, um ihnen eine transparente Farbe zuzuweisen.

```js
// Assigning transparent colors to stroke and fill style

ctx.strokeStyle = "rgb(255 0 0 / 50%)";
ctx.fillStyle = "rgb(255 0 0 / 50%)";
```

Die `rgb()`-Funktion hat einen optionalen zusätzlichen Parameter. Der letzte Parameter setzt den Transparenzwert dieser speziellen Farbe. Der gültige Bereich wird als Prozentsatz zwischen `0%` (vollständig transparent) und `100%` (vollständig undurchsichtig) oder als Zahl zwischen `0.0` (entspricht `0%`) und `1.0` (entspricht `100%`) angegeben.

### Ein `globalAlpha`-Beispiel

In diesem Beispiel zeichnen wir einen Hintergrund aus vier verschiedenfarbigen Quadraten. Auf diese zeichnen wir eine Reihe halbtransparenter Kreise. Die `globalAlpha`-Eigenschaft ist auf `0.2` gesetzt, was für alle Formen ab diesem Punkt verwendet wird. Jeder Schritt in der `for`-Schleife zeichnet einen Satz von Kreisen mit einem zunehmenden Radius. Das Endergebnis ist ein radialer Verlauf. Indem immer mehr Kreise übereinander gelegt werden, reduzieren wir effektiv die Transparenz der Kreise, die bereits gezeichnet wurden. Durch Erhöhung der Schrittanzahl und dem Effekt, mehr Kreise zu zeichnen, würde der Hintergrund komplett aus dem Zentrum des Bildes verschwinden.

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

In diesem zweiten Beispiel machen wir etwas Ähnliches wie im oben genannten, aber anstelle von übereinanderliegenden Kreisen habe ich kleine Rechtecke mit zunehmender Opazität gezeichnet. Die Verwendung von `rgb()` gibt Ihnen ein wenig mehr Kontrolle und Flexibilität, da wir den Füll- und Stroke-Stil individuell festlegen können.

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

Es gibt mehrere Eigenschaften, die uns erlauben, Linien zu gestalten.

- [`lineWidth = value`](/de/docs/Web/API/CanvasRenderingContext2D/lineWidth)
  - : Legt die Breite der zukünftig gezeichneten Linien fest.
- [`lineCap = type`](/de/docs/Web/API/CanvasRenderingContext2D/lineCap)
  - : Legt das Erscheinungsbild der Enden von Linien fest.
- [`lineJoin = type`](/de/docs/Web/API/CanvasRenderingContext2D/lineJoin)
  - : Legt das Erscheinungsbild der "Ecken" fest, bei denen Linien zusammentreffen.
- [`miterLimit = value`](/de/docs/Web/API/CanvasRenderingContext2D/miterLimit)
  - : Bestimmt eine Grenze für die Gehrung, wenn zwei Linien bei einem scharfen Winkel zusammenstoßen, um zu kontrollieren, wie dick die Verbindung wird.
- [`getLineDash()`](/de/docs/Web/API/CanvasRenderingContext2D/getLineDash)
  - : Gibt das aktuelle Liniendashmuster-Array zurück, das eine gerade Anzahl nicht-negativer Zahlen enthält.
- [`setLineDash(segments)`](/de/docs/Web/API/CanvasRenderingContext2D/setLineDash)
  - : Setzt das aktuelle Liniendashmuster.
- [`lineDashOffset = value`](/de/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)
  - : Gibt an, wo ein Dash-Array auf einer Linie beginnt.

Sie werden ein besseres Verständnis davon bekommen, was diese bewirken, wenn Sie sich die Beispiele unten ansehen.

### Ein `lineWidth`-Beispiel

Diese Eigenschaft setzt die aktuelle Linienstärke. Werte müssen positive Zahlen sein. Standardmäßig ist dieser Wert auf 1.0 Einheiten gesetzt.

Die Linienbreite ist die Dicke des Strichs, der zentriert auf dem angegebenen Pfad liegt. Mit anderen Worten, der gezeichnete Bereich erstreckt sich auf beiden Seiten des Pfads um die halbe Linienbreite. Da Canvas-Koordinaten Pixel nicht direkt referenzieren, muss besonders darauf geachtet werden, um saubere horizontale und vertikale Linien zu erhalten.

Im Beispiel unten werden 10 gerade Linien mit zunehmender Linienbreite gezeichnet. Die Linie ganz links ist 1.0 Einheiten breit. Die linke und alle anderen mit ungerader Linienbreite erscheinen jedoch nicht scharf, aufgrund der Positionierung des Pfads.

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

> [!NOTE]
> Wenn Sie sich fragen, warum die Linien am Rand grau statt schwarz erscheinen, schauen Sie sich den Abschnitt [Unscharfe Kanten sehen?](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#seeing_blurry_edges) im vorhergehenden Kapitel an.

### Ein `lineCap`-Beispiel

Die `lineCap`-Eigenschaft bestimmt, wie die Endpunkte jeder Linie gezeichnet werden. Es gibt drei mögliche Werte für diese Eigenschaft: `butt`, `round` und `square`. Standardmäßig ist diese Eigenschaft auf `butt` eingestellt:

- `butt`
  - : Die Enden von Linien sind an den Endpunkten abgeschnitten.
- `round`
  - : Die Enden von Linien sind abgerundet.
- `square`
  - : Die Enden von Linien sind durch ein Quadrat mit gleicher Breite und halber Höhe der Linienstärke abgeschnitten.

Nur Anfangs- und Endendpunkte eines Pfades sind betroffen: Wenn ein Pfad mit `closePath()` geschlossen wird, gibt es keinen Anfangs- und Endendpunkt; stattdessen werden alle Endpunkte im Pfad mit ihrem vorherigen und nächsten Segment unter Verwendung der aktuellen `lineJoin`-Einstellung verbunden.

In diesem Beispiel zeichnen wir drei Linien, jede mit einem anderen Wert für die `lineCap`-Eigenschaft. Ich habe auch zwei Hilfslinien hinzugefügt, um die genauen Unterschiede zwischen den dreien zu sehen. Jede dieser Linien beginnt und endet genau auf diesen Hilfslinien.

Die Linie auf der linken Seite verwendet die Standardoption `butt`. Sie werden bemerken, dass sie vollständig bündig zu den Hilfslinien gezeichnet ist. Die zweite ist gesetzt, um die Option `round` zu verwenden. Dies fügt ein Halbkreis am Ende hinzu, der einen Radius von der Hälfte der Linienbreite hat. Die Linie auf der rechten Seite verwendet die Option `square`. Dies fügt ein Rechteck mit gleicher Breite und halber Höhe der Linienstärke hinzu.

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

Die `lineJoin`-Eigenschaft bestimmt, wie zwei verbundene Segmente (von Linien, Bögen oder Kurven) mit nicht-null Längen in einer Form miteinander verbunden werden (degenerierte Segmente mit Null-Längen, deren angegebene Endpunkte und Kontrollpunkte genau an derselben Position sind, werden übersprungen).

Es gibt drei mögliche Werte für diese Eigenschaft: `round`, `bevel` und `miter`. Standardmäßig ist diese Eigenschaft auf `miter` eingestellt. Beachten Sie, dass die `lineJoin`-Einstellung keine Auswirkungen hat, wenn die zwei verbundenen Segmente dieselbe Richtung haben, da in diesem Fall keine Verbindung hinzugefügt wird:

- `round`
  - : Rundet die Ecken einer Form ab, indem es einen zusätzlichen Sektor eines Kreises zentriert am gemeinsamen Endpunkt verbundener Segmente füllt. Der Radius für diese abgerundeten Ecken ist gleich der Hälfte der Linienbreite.
- `bevel`
  - : Füllt einen zusätzlichen dreieckigen Bereich zwischen dem gemeinsamen Endpunkt verbundener Segmente und den separaten außenliegenden rechteckigen Ecken jedes Segments.
- `miter`
  - : Verbundene Segmente werden durch Verlängerung ihrer Außenkanten verbunden, um an einem einzigen Punkt verbunden zu werden, mit dem Effekt, dass ein zusätzlicher rautenförmiger Bereich gefüllt wird. Diese Einstellung wird von der Eigenschaft `miterLimit` beeinflusst, die unten erklärt wird.

Das folgende Beispiel zeichnet drei verschiedene Pfade und demonstriert jede der drei `lineJoin`-Eigenschaftseinstellungen; das Output wird oben gezeigt.

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

Wie Sie im vorherigen Beispiel gesehen haben, wenn Sie zwei Linien mit der `miter`-Option verbinden, werden die Außenkanten der beiden verbundenen Linien bis zu dem Punkt verlängert, an dem sie sich treffen. Bei Linien, die in großen Winkeln zueinander stehen, ist dieser Punkt nicht weit vom inneren Verbindungspunkt entfernt. Wenn jedoch die Winkel zwischen den Linien abnehmen, wächst der Abstand (Gehrungslänge) zwischen diesen Punkten exponentiell.

Die `miterLimit`-Eigenschaft bestimmt, wie weit der äußere Verbindungspunkt vom inneren Verbindungspunkt platziert werden kann. Wenn zwei Linien diesen Wert überschreiten, wird eine Schrägverbindung anstelle einer Keilverbindung gezeichnet. Beachten Sie, dass die maximale Gehrungslänge das Produkt der Linienbreite im aktuellen Koordinatensystem mit dem Wert dieser `miterLimit`-Eigenschaft ist (dessen Standardwert 10.0 im HTML-{{HTMLElement("canvas")}} ist), damit kann die `miterLimit` unabhängig von der aktuellen Anzeigeskalierung oder jeglichen affinen Transformationen von Pfaden eingestellt werden. Sie beeinflusst nur die tatsächlich gerenderte Form der Linienränder.

Genauer gesagt ist die Gehrungsgrenze das maximal erlaubte Verhältnis der Verlängerungslänge (im HTML-Canvas, wird es gemessen zwischen der äußeren Ecke der verbundenen Kanten der Linie und dem gemeinsamen Endpunkt der in dem Pfad angegebenen verbindenden Segmente) auf die halbe Linienbreite. Es kann äquivalent als das maximal erlaubte Verhältnis des Abstands zwischen dem inneren und äußeren Punkt der Schnittstelle der Kanten, zur gesamten Linienbreite definiert werden. Es entspricht dann dem Sekantenwinkel der halben minimalen Innenwinkels der verbundenen Segmente, unterhalb dessen keine Gehrungsverbindung gerendert wird, sondern nur eine Schrägverbindung:

- `miterLimit` = **max** `miterLength` / `lineWidth` = 1 / **sin** ( **min** _θ_ / 2 )
- Das Standard-Gehrungslimit von 10.0 entfernt alle Gehren für scharfe Winkel unter etwa 11 Grad.
- Ein Gehrungslimit gleich √2 ≈ 1.4142136 (aufgerundet) entfernt Gehren für alle spitzen Winkel und behält Gehren nur für stumpfe oder rechte Winkel bei.
- Ein Gehrungslimit von 1.0 ist gültig, deaktiviert jedoch alle Gehren.
- Werte unter 1.0 sind ungültig für das Gehrungslimit.

Hier ist eine kleine Demonstration, in der Sie das `miterLimit` dynamisch setzen können und sehen, wie dies die Formen auf der Canvas beeinflusst. Die blauen Linien zeigen, wo die Start- und Endpunkte für jede der Linien im Zickzackmuster sind.

Wenn Sie einen `miterLimit`-Wert unter 4.2 in diesem Demo angeben, werden keine der sichtbaren Ecken mit einer Gehrungsverlängerung verbunden, sondern nur mit einer kleinen Schrägverbindung in der Nähe der blauen Linien; mit einem `miterLimit` über 10 sollten die meisten Ecken in diesem Demo mit einer Gehrung weit entfernt von den blauen Linien verbunden sein, deren Höhe zwischen den Ecken von links nach rechts abnimmt, weil sie sich mit wachsenden Winkeln verbinden; mit Zwischenwerten, die Ecken auf der linken Seite werden nur mit einer Schrägverbindung in der Nähe der blauen Linien verbunden und die Ecken auf der rechten Seite mit einer Gehrungsverlängerung (auch mit abnehmender Höhe).

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
<canvas id="canvas" width="150" height="150" role="presentation"></canvas>
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
  .getElementById("canvas")
  .getContext("2d").miterLimit;
draw();

const redraw = document.getElementById("redraw");
redraw.addEventListener("click", draw);
```

{{EmbedLiveSample("A_demo_of_the_miterLimit_property", "", "180")}}

### Verwendung von Liniendashes

Die Methode `setLineDash` und die Eigenschaft `lineDashOffset` spezifizieren das Strichmuster für Linien. Die Methode `setLineDash` akzeptiert eine Liste von Zahlen, die Entfernungen angeben, um abwechselnd eine Linie und einen Abstand zu zeichnen, und die Eigenschaft `lineDashOffset` legt einen Offset fest, wo das Muster beginnen soll.

In diesem Beispiel erstellen wir einen marschierenden Ameisen-Effekt. Es ist eine Animationstechnik, die oft in Auswahlwerkzeugen von Computergraphikprogrammen gefunden wird. Sie hilft dem Benutzer, die Auswahlgrenze vom Bildhintergrund zu unterscheiden, indem sie die Grenze animiert. In einem späteren Teil dieses Tutorials können Sie lernen, wie man dies und andere [grundlegende Animationen](/de/docs/Web/API/Canvas_API/Tutorial/Basic_animations) durchführt.

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

Genau wie in jedem normalen Zeichenprogramm können wir Formen mit linearen, radialen und konischen Verläufen füllen und umrahmen. Wir erstellen ein [`CanvasGradient`](/de/docs/Web/API/CanvasGradient)-Objekt, indem wir eine der folgenden Methoden verwenden. Wir können dann dieses Objekt den `fillStyle`- oder `strokeStyle`-Eigenschaften zuweisen.

- [`createLinearGradient(x1, y1, x2, y2)`](/de/docs/Web/API/CanvasRenderingContext2D/createLinearGradient)
  - : Erstellt ein lineares Verlauf-Objekt mit einem Ausgangspunkt von (`x1`, `y1`) und einem Endpunkt von (`x2`, `y2`).
- [`createRadialGradient(x1, y1, r1, x2, y2, r2)`](/de/docs/Web/API/CanvasRenderingContext2D/createRadialGradient)
  - : Erstellt ein radiales Verlaufs-Objekt. Die Parameter repräsentieren zwei Kreise, einen mit seinem Zentrum bei (`x1`, `y1`) und einem Radius von `r1`, und den anderen mit seinem Zentrum bei (`x2`, `y2`) mit einem Radius von `r2`.
- [`createConicGradient(angle, x, y)`](/de/docs/Web/API/CanvasRenderingContext2D/createConicGradient)
  - : Erstellt ein konisches Verlauf-Objekt mit einem Startwinkel von `angle` in Radiant am Punkt (`x`, `y`).

Zum Beispiel:

```js
const lineargradient = ctx.createLinearGradient(0, 0, 150, 150);
const radialgradient = ctx.createRadialGradient(75, 75, 0, 75, 75, 100);
```

Sobald wir ein `CanvasGradient`-Objekt erstellt haben, können wir ihm Farben zuweisen, indem wir die `addColorStop()`-Methode verwenden.

- [`gradient.addColorStop(position, color)`](/de/docs/Web/API/CanvasGradient/addColorStop)
  - : Erstellt einen neuen Farbanschlag auf dem `gradient`-Objekt. Die `position` ist eine Zahl zwischen 0.0 und 1.0 und definiert die relative Position der Farbe im Verlauf, und das `color`-Argument muss ein String sein, der einen CSS {{cssxref("&lt;color&gt;")}} darstellt, der angibt, welche Farbe der Verlauf an diesem Übergangspunkt annehmen soll.

Sie können so viele Farbanschläge zu einem Verlauf hinzufügen, wie Sie benötigen. Unten ist ein sehr einfacher linearer Verlauf von Weiß zu Schwarz.

```js
const lineargradient = ctx.createLinearGradient(0, 0, 150, 150);
lineargradient.addColorStop(0, "white");
lineargradient.addColorStop(1, "black");
```

### Ein `createLinearGradient`-Beispiel

In diesem Beispiel erstellen wir zwei verschiedene Verläufe. Wie Sie hier sehen können, können sowohl die `strokeStyle`- als auch die `fillStyle`-Eigenschaften ein `canvasGradient`-Objekt als gültigen Input akzeptieren.

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

Der erste ist ein Hintergrundverlauf. Wie Sie sehen, haben wir zwei Farben an derselben Position zugewiesen. Sie tun dies, um sehr scharfe Farbverläufe zu erzeugen – in diesem Fall von Weiß zu Grün. Normalerweise spielt es keine Rolle, in welcher Reihenfolge Sie die Farbstopps definieren, aber in diesem speziellen Fall tut es das signifikant. Wenn Sie die Zuweisungen in der Reihenfolge behalten, in der Sie sie erscheinen lassen möchten, wird das kein Problem sein.

Im zweiten Verlauf haben wir die Startfarbe (an Position 0.0) nicht zugewiesen, da es nicht unbedingt notwendig war, da es automatisch die Farbe des nächsten Farbstopps annimmt. Daher macht das Zuweisen der schwarzen Farbe an Position 0.5 den Verlauf von Anfang bis zu diesem Stopp automatisch schwarz.

{{EmbedLiveSample("A_createLinearGradient_example", "", "160")}}

### Ein `createRadialGradient`-Beispiel

In diesem Beispiel definieren wir vier verschiedene radiale Verläufe. Da wir Kontrolle über Start- und Endpunkte des Verlaufs haben, können wir komplexere Effekte erzielen, als wir normalerweise bei den "klassischen" radialen Verläufen sehen, die wir zum Beispiel in Photoshop sehen (das heißt, ein Verlauf mit einem einzigen Mittelpunkt, wo sich der Verlauf in einer kreisförmigen Form nach außen ausdehnt).

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

In diesem Fall haben wir den Startpunkt leicht vom Endpunkt abgesetzt, um einen sphärischen 3D-Effekt zu erzielen. Es ist am besten zu vermeiden, dass sich die inneren und äußeren Kreise überschneiden, da dies zu seltsamen Effekten führt, die schwer vorherzusagen sind.

Der letzte Farbenstopp in jedem der vier Verläufe verwendet eine vollständig transparente Farbe. Wenn Sie einen schönen Übergang von diesem zum vorherigen Farbenstopp haben möchten, sollten beide Farben gleich sein. Dies ist aus dem Code nicht sehr offensichtlich, weil zwei verschiedene CSS-Farbmethoden als Demonstration verwendet werden, aber im ersten Verlauf `#019F62 = rgb(1 159 98 / 100%)`.

{{EmbedLiveSample("A_createRadialGradient_example", "", "160")}}

### Ein `createConicGradient`-Beispiel

In diesem Beispiel definieren wir zwei verschiedene konische Verläufe. Ein konischer Verlauf unterscheidet sich von einem radialen Verlauf, da er sich nicht auf Kreise beschränkt, sondern um einen Punkt rotiert.

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

Der erste Verlauf ist im Zentrum des ersten Rechtecks positioniert und wechselt von einem grünen Farbenstopp am Anfang zu einem weißen am Ende. Der Winkel beginnt bei 2 Radiant, was bemerkbar ist durch die Anfangs-/Endlinie, die nach Südosten zeigt.

Der zweite Verlauf ist ebenfalls im Zentrum des zweiten Rechtecks positioniert. Dieser hat mehrere Farbenstops, die jeweils an jedem Viertel der Rotation von Schwarz zu Weiß wechseln. Dies gibt uns den karierten Effekt.

{{EmbedLiveSample("A_createConicGradient_example", "", "160")}}

## Muster

In einem der Beispiele auf der vorherigen Seite haben wir eine Reihe von Schleifen verwendet, um ein Muster aus Bildern zu erstellen. Es gibt jedoch eine viel einfachere Methode: die `createPattern()`-Methode.

- [`createPattern(image, type)`](/de/docs/Web/API/CanvasRenderingContext2D/createPattern)
  - : Erstellt und gibt ein neues Canvas-Musterobjekt zurück. `image` ist die Quelle des Bildes (das heißt ein [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement), ein [`SVGImageElement`](/de/docs/Web/API/SVGImageElement), ein anderes [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) oder ein [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas), ein [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) oder ein [`VideoFrame`](/de/docs/Web/API/VideoFrame), oder ein [`ImageBitmap`](/de/docs/Web/API/ImageBitmap)). `type` ist ein String, der angibt, wie das Bild verwendet werden soll.

Der Typ gibt an, wie das Bild verwendet werden soll, um das Muster zu erstellen, und muss eine der folgenden Zeichenfolgenwerte sein:

- `repeat`
  - : Kachelt das Bild in beiden vertikalen und horizontalen Richtungen.
- `repeat-x`
  - : Kachelt das Bild horizontal, aber nicht vertikal.
- `repeat-y`
  - : Kachelt das Bild vertikal, aber nicht horizontal.
- `no-repeat`
  - : Kachelt das Bild nicht. Es wird nur einmal verwendet.

Wir verwenden diese Methode, um ein [`CanvasPattern`](/de/docs/Web/API/CanvasPattern)-Objekt zu erstellen, das den Gradientenmethoden, die wir oben gesehen haben, sehr ähnlich ist. Sobald wir ein Muster erstellt haben, können wir es den `fillStyle`- oder `strokeStyle`-Eigenschaften zuweisen. Zum Beispiel:

```js
const img = new Image();
img.src = "some-image.png";
const pattern = ctx.createPattern(img, "repeat");
```

> [!NOTE]
> Wie bei der `drawImage()`-Methode müssen Sie sicherstellen, dass das verwendete Bild geladen ist, bevor diese Methode aufgerufen wird, da das Muster ansonsten möglicherweise falsch gezeichnet wird.

### Ein `createPattern`-Beispiel

In diesem letzten Beispiel erstellen wir ein Muster, das der `fillStyle`-Eigenschaft zugewiesen wird. Das einzige, was es zu beachten gilt, ist die Verwendung des `onload`-Handlers des Bildes. Dies stellt sicher, dass das Bild geladen wird, bevor es dem Muster zugewiesen wird.

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
  - : Gibt die horizontale Entfernung an, die der Schatten sich vom Objekt erstrecken soll. Dieser Wert wird nicht von der Transformationsmatrix betroffen. Der Standardwert ist 0.
- [`shadowOffsetY = float`](/de/docs/Web/API/CanvasRenderingContext2D/shadowOffsetY)
  - : Gibt die vertikale Entfernung an, die der Schatten sich vom Objekt erstrecken soll. Dieser Wert wird nicht von der Transformationsmatrix betroffen. Der Standardwert ist 0.
- [`shadowBlur = float`](/de/docs/Web/API/CanvasRenderingContext2D/shadowBlur)
  - : Gibt die Größe des Weichzeichnungseffekts an; dieser Wert entspricht keiner Anzahl von Pixeln und wird nicht von der aktuellen Transformationsmatrix beeinflusst. Der Standardwert ist 0.
- [`shadowColor = color`](/de/docs/Web/API/CanvasRenderingContext2D/shadowColor)
  - : Ein standardmäßiger CSS-Farbwert, der die Farbe des Schatteneffekts angibt; standardmäßig ist es vollständig transparentes Schwarz.

Die Eigenschaften `shadowOffsetX` und `shadowOffsetY` geben an, wie weit sich der Schatten vom Objekt in den X- und Y-Richtungen erstrecken soll; diese Werte werden nicht von der aktuellen Transformationsmatrix beeinflusst. Verwenden Sie negative Werte, um den Schatten nach oben oder links zu erstrecken, und positive Werte, um den Schatten nach unten oder rechts zu ziehen. Diese Werte sind standardmäßig beide 0.

Die `shadowBlur`-Eigenschaft gibt die Größe des Weichzeichnungseffekts an; dieser Wert entspricht keiner Anzahl von Pixeln und wird nicht von der aktuellen Transformationsmatrix beeinflusst. Der Standardwert ist 0.

Die `shadowColor`-Eigenschaft ist ein standardmäßiger CSS-Farbwert, der die Farbe des Schatteneffekts anzeigt; standardmäßig ist es vollständig transparentes Schwarz.

> [!NOTE]
> Schatten werden nur für `source-over`- [Kompositionsoperationen](/de/docs/Web/API/Canvas_API/Tutorial/Compositing) gezeichnet.

### Ein Beispiel für beschatteten Text

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

Wir werden die `font`-Eigenschaft und die `fillText`-Methode im nächsten Kapitel über [Text zeichnen](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text) näher betrachten.

## Canvas-Füllregeln

Wenn Sie `fill` (oder [`clip`](/de/docs/Web/API/CanvasRenderingContext2D/clip) und [`isPointInPath`](/de/docs/Web/API/CanvasRenderingContext2D/isPointInPath)) verwenden, können Sie optional ein Füllregel-Algorithmus angeben, um zu bestimmen, ob ein Punkt innerhalb oder außerhalb eines Pfads liegt und somit gefüllt wird oder nicht. Dies ist nützlich, wenn ein Pfad sich selbst schneidet oder verschachtelt ist.

Zwei Werte sind möglich:

- `nonzero`
  - : Die [Non-Zero-Windungsregel](https://de.wikipedia.org/wiki/Nonzero-rule), welche die Standardregel ist.
- `evenodd`
  - : Die [Even-Odd-Windungsregel](https://de.wikipedia.org/wiki/Even%E2%80%93odd_rule).

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
