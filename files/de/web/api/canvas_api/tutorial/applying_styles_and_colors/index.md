---
title: Stile und Farben anwenden
slug: Web/API/Canvas_API/Tutorial/Applying_styles_and_colors
l10n:
  sourceCommit: 8b77a013c518ef1b62534a8446a60732d582a24b
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Drawing_shapes", "Web/API/Canvas_API/Tutorial/Drawing_text")}}

Im Kapitel über das [Zeichnen von Formen](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes) haben wir nur die standardmäßigen Linien- und Füllstile verwendet. Hier sehen wir uns die Canvas-Optionen an, mit denen wir unsere Zeichnungen etwas ansprechender gestalten können. Sie erfahren, wie Sie Ihren Zeichnungen verschiedene Farben, Linienstile, Farbverläufe, Muster und Schatten hinzufügen.

> [!NOTE]
> Canvas-Inhalte sind für Screenreader nicht zugänglich. Wenn das Canvas rein dekorativ ist, fügen Sie dem öffnenden `<canvas>`-Tag `role="presentation"` hinzu. Andernfalls fügen Sie entweder einen beschreibenden Text als Wert des Attributs [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) direkt auf dem Canvas-Element hinzu oder platzieren Sie Ersatzinhalt zwischen dem öffnenden und dem schließenden Canvas-Tag. Canvas-Inhalte sind nicht Teil des DOM, darin verschachtelte Ersatzinhalte hingegen schon.

## Farben

Bisher haben wir nur Methoden des Zeichenkontexts kennengelernt. Wenn wir eine Form einfärben möchten, können wir zwei wichtige Eigenschaften verwenden: `fillStyle` und `strokeStyle`.

- [`fillStyle = color`](/de/docs/Web/API/CanvasRenderingContext2D/fillStyle)
  - : Legt den Stil fest, mit dem Formen gefüllt werden.
- [`strokeStyle = color`](/de/docs/Web/API/CanvasRenderingContext2D/strokeStyle)
  - : Legt den Stil für die Umrisse von Formen fest.

`color` ist eine Zeichenfolge, die einen CSS-{{cssxref("&lt;color&gt;")}}-Wert darstellt, oder ein Farbverlaufs- oder Musterobjekt. Farbverlaufs- und Musterobjekte sehen wir uns später an. Standardmäßig sind die Linien- und Füllfarbe auf Schwarz gesetzt (CSS-Farbwert `#000000`).

> [!NOTE]
> Wenn Sie `strokeStyle` und/oder `fillStyle` festlegen, gilt der neue Wert von da an standardmäßig für alle gezeichneten Formen. Für jede Form, die eine andere Farbe erhalten soll, müssen Sie `fillStyle` oder `strokeStyle` erneut zuweisen.

Gemäß der Spezifikation müssen gültige Zeichenfolgen CSS-{{cssxref("&lt;color&gt;")}}-Werte sein. Jedes der folgenden Beispiele beschreibt dieselbe Farbe.

```js
// these all set the fillStyle to 'orange'

ctx.fillStyle = "orange";
ctx.fillStyle = "#FFA500";
ctx.fillStyle = "rgb(255 165 0)";
ctx.fillStyle = "rgb(255 165 0 / 100%)";
```

### Ein Beispiel für `fillStyle`

In diesem Beispiel verwenden wir erneut zwei `for`-Schleifen, um ein Raster aus Rechtecken zu zeichnen, die jeweils eine andere Farbe haben. Das Ergebnis sollte ungefähr wie im Screenshot aussehen. Hier geschieht nichts besonders Spektakuläres: Wir verwenden die beiden Variablen `i` und `j`, um für jedes Quadrat eine eindeutige RGB-Farbe zu erzeugen, und ändern dabei nur den Rot- und den Grünwert. Der Blaukanal hat einen festen Wert. Indem Sie die Kanäle verändern, können Sie alle möglichen Farbpaletten erzeugen. Wenn Sie die Anzahl der Schritte erhöhen, können Sie ein Ergebnis erzielen, das den Farbpaletten von Photoshop ähnelt.

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

Das Ergebnis sieht so aus:

{{EmbedLiveSample("A_fillStyle_example", "", "160")}}

### Ein Beispiel für `strokeStyle`

Dieses Beispiel ähnelt dem vorherigen, verwendet aber die Eigenschaft `strokeStyle`, um die Farben der Formumrisse zu ändern. Mit der Methode `arc()` zeichnen wir Kreise statt Quadrate.

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

Das Ergebnis sieht so aus:

{{EmbedLiveSample("A_strokeStyle_example", "", "160")}}

## Transparenz

Neben deckenden Formen können wir auf dem Canvas auch halbtransparente Formen zeichnen. Dazu legen wir entweder die Eigenschaft `globalAlpha` fest oder weisen dem Linien- und/oder Füllstil eine halbtransparente Farbe zu.

- [`globalAlpha = transparencyValue`](/de/docs/Web/API/CanvasRenderingContext2D/globalAlpha)
  - : Wendet den angegebenen Transparenzwert auf alle künftig auf dem Canvas gezeichneten Formen an. Der Wert muss zwischen 0.0 (vollständig transparent) und 1.0 (vollständig deckend) liegen. Standardmäßig ist er auf 1.0 (vollständig deckend) gesetzt.

Die Eigenschaft `globalAlpha` kann nützlich sein, wenn Sie viele Formen mit ähnlicher Transparenz auf dem Canvas zeichnen möchten. Andernfalls ist es meist sinnvoller, die Transparenz beim Festlegen der Farbe für jede Form einzeln zu bestimmen.

Da die Eigenschaften `strokeStyle` und `fillStyle` CSS-RGB-Farbwerte akzeptieren, können wir ihnen mit der folgenden Schreibweise eine transparente Farbe zuweisen.

```js
// Assigning transparent colors to stroke and fill style

ctx.strokeStyle = "rgb(255 0 0 / 50%)";
ctx.fillStyle = "rgb(255 0 0 / 50%)";
```

Die Funktion `rgb()` verfügt über einen optionalen zusätzlichen Parameter. Dieser letzte Parameter legt den Transparenzwert der jeweiligen Farbe fest. Gültig sind Prozentwerte zwischen `0%` (vollständig transparent) und `100%` (vollständig deckend) oder Zahlen zwischen `0.0` (entspricht `0%`) und `1.0` (entspricht `100%`).

### Ein Beispiel für `globalAlpha`

In diesem Beispiel zeichnen wir einen Hintergrund aus vier verschiedenfarbigen Quadraten. Darüber zeichnen wir mehrere halbtransparente Kreise. Die Eigenschaft `globalAlpha` wird auf `0.2` gesetzt; dieser Wert gilt für alle danach gezeichneten Formen. Jeder Durchlauf der `for`-Schleife zeichnet eine Reihe von Kreisen mit zunehmendem Radius. Das Endergebnis ist ein radialer Farbverlauf. Indem wir immer mehr Kreise übereinanderlegen, verringern wir effektiv die Transparenz der bereits gezeichneten Kreise. Würden wir die Anzahl der Schritte erhöhen und damit noch mehr Kreise zeichnen, wäre der Hintergrund in der Bildmitte schließlich überhaupt nicht mehr zu sehen.

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

### Ein Beispiel mit `rgb()` und Alpha-Transparenz

In diesem zweiten Beispiel machen wir etwas Ähnliches wie zuvor. Statt Kreise übereinanderzuzeichnen, zeichnen wir jedoch kleine Rechtecke mit zunehmender Deckkraft. `rgb()` bietet etwas mehr Kontrolle und Flexibilität, da wir den Füll- und den Linienstil unabhängig voneinander festlegen können.

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

Mit mehreren Eigenschaften können wir das Aussehen von Linien gestalten.

- [`lineWidth = value`](/de/docs/Web/API/CanvasRenderingContext2D/lineWidth)
  - : Legt die Breite künftig gezeichneter Linien fest.
- [`lineCap = type`](/de/docs/Web/API/CanvasRenderingContext2D/lineCap)
  - : Legt das Aussehen der Linienenden fest.
- [`lineJoin = type`](/de/docs/Web/API/CanvasRenderingContext2D/lineJoin)
  - : Legt das Aussehen der „Ecken“ fest, an denen Linien zusammentreffen.
- [`miterLimit = value`](/de/docs/Web/API/CanvasRenderingContext2D/miterLimit)
  - : Legt einen Grenzwert für die Gehrung fest, wenn zwei Linien in einem spitzen Winkel zusammentreffen. So können Sie steuern, wie weit die Verbindung hervorragt.
- [`getLineDash()`](/de/docs/Web/API/CanvasRenderingContext2D/getLineDash)
  - : Gibt das aktuelle Strichmuster als Array mit einer geraden Anzahl nicht negativer Zahlen zurück.
- [`setLineDash(segments)`](/de/docs/Web/API/CanvasRenderingContext2D/setLineDash)
  - : Legt das aktuelle Strichmuster fest.
- [`lineDashOffset = value`](/de/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)
  - : Legt fest, an welcher Stelle einer Linie ein Strichmuster beginnt.

Die folgenden Beispiele veranschaulichen, was diese Eigenschaften und Methoden bewirken.

### Ein Beispiel für `lineWidth`

Diese Eigenschaft legt die aktuelle Linienbreite fest. Der Wert muss eine positive Zahl sein. Standardmäßig beträgt er 1.0 Einheiten.

Die Linienbreite beschreibt die Dicke des Strichs, der auf dem angegebenen Pfad zentriert ist. Anders ausgedrückt: Der gezeichnete Bereich erstreckt sich auf beiden Seiten des Pfads jeweils um die halbe Linienbreite. Da Canvas-Koordinaten nicht unmittelbar Pixeln entsprechen, ist besondere Sorgfalt nötig, um scharfe horizontale und vertikale Linien zu erhalten.

Im folgenden Beispiel werden 10 gerade Linien mit zunehmender Breite gezeichnet. Die Linie ganz links ist 1.0 Einheiten breit. Sie und alle anderen Linien mit einer ungeraden ganzzahligen Breite erscheinen aufgrund der Positionierung des Pfads jedoch nicht scharf.

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
> Falls Sie sich fragen, warum die Linien an den Rändern grau statt schwarz erscheinen, lesen Sie den Abschnitt [Unscharfe Kanten?](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#seeing_blurry_edges) im vorherigen Kapitel.

### Ein Beispiel für `lineCap`

Die Eigenschaft `lineCap` bestimmt, wie die Endpunkte jeder Linie gezeichnet werden. Sie kann die drei Werte `butt`, `round` und `square` annehmen. Standardmäßig ist sie auf `butt` gesetzt:

- `butt`
  - : Die Linien schließen an ihren Endpunkten bündig ab.
- `round`
  - : Die Linienenden werden abgerundet.
- `square`
  - : An den Linienenden wird jeweils ein Rechteck angefügt, dessen Breite der Liniendicke und dessen Höhe der halben Liniendicke entspricht.

Betroffen sind nur der Anfangs- und der Endpunkt eines Pfads. Wird ein Pfad mit `closePath()` geschlossen, gibt es keinen Anfangs- und Endpunkt mehr. Stattdessen werden alle Endpunkte des Pfads gemäß der aktuellen `lineJoin`-Einstellung mit dem vorherigen und dem nächsten Segment verbunden.

In diesem Beispiel zeichnen wir drei Linien mit jeweils einem anderen Wert für `lineCap`. Außerdem habe ich zwei Hilfslinien hinzugefügt, damit die Unterschiede deutlich werden. Jede der drei Linien beginnt und endet genau auf diesen Hilfslinien.

Die linke Linie verwendet die Standardeinstellung `butt`. Sie sehen, dass sie genau an den Hilfslinien abschließt. Für die zweite Linie ist `round` eingestellt. Dadurch wird an den Enden jeweils ein Halbkreis mit einem Radius von der halben Linienbreite hinzugefügt. Die rechte Linie verwendet `square`. Dabei wird ein Rechteck hinzugefügt, dessen Breite der Liniendicke und dessen Höhe der halben Liniendicke entspricht.

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

### Ein Beispiel für `lineJoin`

Die Eigenschaft `lineJoin` bestimmt, wie zwei verbundene Segmente einer Form – Linien, Kreisbögen oder Kurven – mit einer Länge größer als null miteinander verbunden werden. Entartete Segmente mit einer Länge von null, deren angegebene End- und Kontrollpunkte genau an derselben Position liegen, werden übersprungen.

Für diese Eigenschaft gibt es drei mögliche Werte: `round`, `bevel` und `miter`. Standardmäßig ist sie auf `miter` gesetzt. Beachten Sie, dass `lineJoin` keine Wirkung hat, wenn die beiden verbundenen Segmente in dieselbe Richtung verlaufen, da in diesem Fall keine zusätzliche Verbindungsfläche entsteht:

- `round`
  - : Rundet die Ecken einer Form ab, indem ein zusätzlicher Kreissektor um den gemeinsamen Endpunkt der verbundenen Segmente gefüllt wird. Der Radius der abgerundeten Ecken beträgt die Hälfte der Linienbreite.
- `bevel`
  - : Füllt eine zusätzliche dreieckige Fläche zwischen dem gemeinsamen Endpunkt der verbundenen Segmente und den äußeren Ecken der beiden Segmente.
- `miter`
  - : Verlängert die Außenkanten der verbundenen Segmente, bis sie sich in einem Punkt treffen. Dadurch wird eine zusätzliche rautenförmige Fläche gefüllt. Diese Einstellung wird durch die weiter unten erläuterte Eigenschaft `miterLimit` beeinflusst.

Das folgende Beispiel zeichnet drei verschiedene Pfade und zeigt damit die drei Einstellungen für `lineJoin`.

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

### Eine Demonstration der Eigenschaft `miterLimit`

Wie Sie im vorherigen Beispiel gesehen haben, werden bei der Verbindung zweier Linien mit der Option `miter` deren Außenkanten bis zu ihrem Schnittpunkt verlängert. Treffen die Linien in einem großen Winkel aufeinander, liegt dieser Punkt nicht weit vom inneren Verbindungspunkt entfernt. Je kleiner der Winkel zwischen den Linien wird, desto stärker wächst jedoch der Abstand zwischen diesen Punkten – die Gehrungslänge.

Die Eigenschaft `miterLimit` bestimmt, wie weit der äußere Verbindungspunkt vom inneren Verbindungspunkt entfernt sein darf. Wird dieser Grenzwert bei zwei Linien überschritten, wird stattdessen eine abgeschrägte Verbindung gezeichnet. Beachten Sie, dass sich die maximale Gehrungslänge aus der im aktuellen Koordinatensystem gemessenen Linienbreite multipliziert mit dem Wert von `miterLimit` ergibt. Dessen Standardwert im HTML-{{HTMLElement("canvas")}} beträgt 10.0. Daher kann `miterLimit` unabhängig vom aktuellen Darstellungsmaßstab und von affinen Transformationen der Pfade festgelegt werden: Die Eigenschaft beeinflusst nur die tatsächlich gerenderte Form der Linienkanten.

Genauer gesagt ist der Gehrungsgrenzwert das maximal zulässige Verhältnis der Verlängerungslänge zur halben Linienbreite. Im HTML-Canvas wird die Verlängerungslänge zwischen der äußeren Ecke der verbundenen Linienkanten und dem gemeinsamen, im Pfad angegebenen Endpunkt der Segmente gemessen. Gleichwertig lässt sich der Grenzwert als maximal zulässiges Verhältnis des Abstands zwischen dem inneren und dem äußeren Schnittpunkt der Kanten zur gesamten Linienbreite definieren. Er entspricht dem Kosekans des halben kleinsten Innenwinkels zwischen verbundenen Segmenten, unterhalb dessen keine Gehrung, sondern nur eine Abschrägung gezeichnet wird:

- `miterLimit` = **max** `miterLength` / `lineWidth` = 1 / **sin** ( **min** _θ_ / 2 )
- Beim Standardwert von 10.0 entfallen Gehrungen für spitze Winkel unter etwa 11 Grad.
- Bei einem Gehrungsgrenzwert von √2 ≈ 1.4142136 (aufgerundet) entfallen Gehrungen für alle spitzen Winkel; sie bleiben nur bei stumpfen oder rechten Winkeln erhalten.
- Ein Gehrungsgrenzwert von 1.0 ist gültig, deaktiviert aber alle Gehrungen.
- Werte unter 1.0 sind als Gehrungsgrenzwert ungültig.

In der folgenden kleinen Demonstration können Sie `miterLimit` dynamisch einstellen und sehen, wie sich der Wert auf die Formen im Canvas auswirkt. Die blauen Linien zeigen, wo die Linien des Zickzackmusters jeweils beginnen und enden.

Wenn Sie in dieser Demonstration für `miterLimit` einen Wert unter 4.2 angeben, erhält keine der sichtbaren Ecken eine verlängerte Gehrung. Stattdessen werden sie nahe den blauen Linien leicht abgeschrägt. Bei einem Wert über 10 sollten die meisten Ecken eine Gehrung erhalten, die weit über die blauen Linien hinausragt. Ihre Höhe nimmt von links nach rechts ab, weil die Winkel zwischen den Linien größer werden. Bei Werten dazwischen werden die Ecken links nahe den blauen Linien nur abgeschrägt, während die Ecken rechts verlängerte Gehrungen mit ebenfalls abnehmender Höhe erhalten.

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

### Gestrichelte Linien verwenden

Die Methode `setLineDash` und die Eigenschaft `lineDashOffset` legen das Strichmuster für Linien fest. `setLineDash` nimmt eine Liste von Zahlen entgegen, die abwechselnd die Länge eines gezeichneten Strichs und einer Lücke angeben. `lineDashOffset` legt fest, mit welchem Versatz das Muster beginnt.

In diesem Beispiel erzeugen wir einen „Marching Ants“-Effekt. Diese Animationstechnik kommt häufig bei Auswahlwerkzeugen in Grafikprogrammen vor. Durch die animierte Umrandung lässt sich die Auswahlgrenze leichter vom Bildhintergrund unterscheiden. In einem späteren Teil dieses Tutorials erfahren Sie, wie Sie diesen und andere [grundlegende Animationseffekte](/de/docs/Web/API/Canvas_API/Tutorial/Basic_animations) umsetzen.

```html hidden
<canvas id="my-canvas" width="111" height="111" role="presentation"></canvas>
```

```js
const canvas = document.getElementById("my-canvas");
const ctx = canvas.getContext("2d");
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

## Farbverläufe

Wie in einem gewöhnlichen Zeichenprogramm können wir Formen mit linearen, radialen und konischen Farbverläufen füllen oder umranden. Mit einer der folgenden Methoden erstellen wir ein [`CanvasGradient`](/de/docs/Web/API/CanvasGradient)-Objekt. Anschließend können wir dieses Objekt `fillStyle` oder `strokeStyle` zuweisen.

- [`createLinearGradient(x1, y1, x2, y2)`](/de/docs/Web/API/CanvasRenderingContext2D/createLinearGradient)
  - : Erstellt einen linearen Farbverlauf mit dem Startpunkt (`x1`, `y1`) und dem Endpunkt (`x2`, `y2`).
- [`createRadialGradient(x1, y1, r1, x2, y2, r2)`](/de/docs/Web/API/CanvasRenderingContext2D/createRadialGradient)
  - : Erstellt einen radialen Farbverlauf. Die Parameter beschreiben zwei Kreise: Der erste hat seinen Mittelpunkt bei (`x1`, `y1`) und den Radius `r1`, der zweite seinen Mittelpunkt bei (`x2`, `y2`) und den Radius `r2`.
- [`createConicGradient(angle, x, y)`](/de/docs/Web/API/CanvasRenderingContext2D/createConicGradient)
  - : Erstellt einen konischen Farbverlauf mit dem Startwinkel `angle` im Bogenmaß an der Position (`x`, `y`).

Zum Beispiel:

```js
const lineargradient = ctx.createLinearGradient(0, 0, 150, 150);
const radialgradient = ctx.createRadialGradient(75, 75, 0, 75, 75, 100);
```

Nachdem wir ein `CanvasGradient`-Objekt erstellt haben, können wir ihm mit der Methode `addColorStop()` Farben zuweisen.

- [`gradient.addColorStop(position, color)`](/de/docs/Web/API/CanvasGradient/addColorStop)
  - : Fügt dem Objekt `gradient` einen neuen Farbstopp hinzu. `position` ist eine Zahl zwischen 0.0 und 1.0 und gibt die relative Position der Farbe im Farbverlauf an. Das Argument `color` muss eine Zeichenfolge sein, die einen CSS-{{cssxref("&lt;color&gt;")}}-Wert darstellt und die Farbe angibt, die der Verlauf an dieser Position erreichen soll.

Sie können einem Farbverlauf beliebig viele Farbstopps hinzufügen. Unten sehen Sie einen sehr einfachen linearen Farbverlauf von Weiß nach Schwarz.

```js
const lineargradient = ctx.createLinearGradient(0, 0, 150, 150);
lineargradient.addColorStop(0, "white");
lineargradient.addColorStop(1, "black");
```

### Ein Beispiel für `createLinearGradient`

In diesem Beispiel erstellen wir zwei verschiedene Farbverläufe. Wie Sie sehen, akzeptieren sowohl `strokeStyle` als auch `fillStyle` ein `canvasGradient`-Objekt als Wert.

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

Der erste ist ein Hintergrundverlauf. Wie Sie sehen, haben wir zwei Farben derselben Position zugewiesen. So entsteht ein sehr abrupter Farbübergang – hier von Weiß zu Grün. Normalerweise spielt die Reihenfolge, in der Sie Farbstopps definieren, keine Rolle. In diesem Sonderfall ist sie jedoch entscheidend. Wenn Sie die Farbstopps in der Reihenfolge zuweisen, in der sie erscheinen sollen, entsteht kein Problem.

Beim zweiten Farbverlauf haben wir keine Anfangsfarbe an Position 0.0 angegeben, weil das nicht unbedingt nötig ist: Der Verlauf übernimmt dafür automatisch die Farbe des nächsten Farbstopps. Wenn wir Schwarz an Position 0.5 zuweisen, ist der Verlauf daher vom Anfang bis zu diesem Farbstopp schwarz.

{{EmbedLiveSample("A_createLinearGradient_example", "", "160")}}

### Ein Beispiel für `createRadialGradient`

In diesem Beispiel definieren wir vier verschiedene radiale Farbverläufe. Da wir die Start- und Endpunkte des Farbverlaufs steuern können, lassen sich komplexere Effekte erzielen als mit den „klassischen“ radialen Farbverläufen, wie man sie beispielsweise aus Photoshop kennt. Diese haben nur einen Mittelpunkt, von dem aus sich der Verlauf kreisförmig nach außen ausbreitet.

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

Hier haben wir den Startpunkt leicht gegenüber dem Endpunkt versetzt, um einen kugelförmigen 3D-Effekt zu erzielen. Vermeiden Sie möglichst, dass sich der innere und der äußere Kreis überschneiden, da dies zu merkwürdigen und schwer vorhersehbaren Effekten führt.

Der letzte Farbstopp jedes der vier Verläufe verwendet eine vollständig transparente Farbe. Für einen gleichmäßigen Übergang vom vorherigen Farbstopp sollten beide Farben gleich sein. Das ist im Code nicht unmittelbar zu erkennen, weil zur Veranschaulichung zwei verschiedene CSS-Farbschreibweisen verwendet werden. Beim ersten Farbverlauf gilt jedoch `#019F62 = rgb(1 159 98 / 100%)`.

{{EmbedLiveSample("A_createRadialGradient_example", "", "160")}}

### Ein Beispiel für `createConicGradient`

In diesem Beispiel definieren wir zwei verschiedene konische Farbverläufe. Anders als ein radialer Farbverlauf bildet ein konischer Farbverlauf keine Kreise, sondern verläuft um einen Punkt herum.

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

Der erste Farbverlauf ist in der Mitte des ersten Rechtecks positioniert und geht von einem grünen Farbstopp am Anfang zu einem weißen am Ende über. Der Startwinkel beträgt 2 Radiant. Das erkennen Sie an der nach Südosten zeigenden Linie zwischen Anfang und Ende.

Auch der zweite Farbverlauf ist in der Mitte seines Rechtecks positioniert. Er hat mehrere Farbstopps, die in jedem Viertel der Umdrehung zwischen Schwarz und Weiß wechseln. Dadurch entsteht der Schachbretteffekt.

{{EmbedLiveSample("A_createConicGradient_example", "", "160")}}

## Muster

In einem der Beispiele auf der vorherigen Seite haben wir mit mehreren Schleifen ein Bildmuster erzeugt. Es gibt jedoch eine wesentlich einfachere Möglichkeit: die Methode `createPattern()`.

- [`createPattern(image, type)`](/de/docs/Web/API/CanvasRenderingContext2D/createPattern)
  - : Erstellt ein neues Canvas-Musterobjekt und gibt es zurück. `image` ist die Bildquelle, also ein [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement), ein [`SVGImageElement`](/de/docs/Web/API/SVGImageElement), ein weiteres [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) oder ein [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas), ein [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) oder ein [`VideoFrame`](/de/docs/Web/API/VideoFrame) oder ein [`ImageBitmap`](/de/docs/Web/API/ImageBitmap). `type` ist eine Zeichenfolge, die angibt, wie das Bild verwendet werden soll.

Der Typ legt fest, wie das Bild zur Erzeugung des Musters verwendet wird. Er muss einer der folgenden Zeichenfolgen entsprechen:

- `repeat`
  - : Wiederholt das Bild sowohl vertikal als auch horizontal.
- `repeat-x`
  - : Wiederholt das Bild horizontal, aber nicht vertikal.
- `repeat-y`
  - : Wiederholt das Bild vertikal, aber nicht horizontal.
- `no-repeat`
  - : Wiederholt das Bild nicht. Es wird nur einmal verwendet.

Mit dieser Methode erstellen wir ein [`CanvasPattern`](/de/docs/Web/API/CanvasPattern)-Objekt, ähnlich wie bei den oben beschriebenen Farbverläufen. Anschließend können wir das Muster `fillStyle` oder `strokeStyle` zuweisen. Zum Beispiel:

```js
const img = new Image();
img.src = "some-image.png";
const pattern = ctx.createPattern(img, "repeat");
```

> [!NOTE]
> Wie bei der Methode `drawImage()` müssen Sie sicherstellen, dass das verwendete Bild geladen ist, bevor Sie diese Methode aufrufen. Andernfalls wird das Muster möglicherweise nicht richtig gezeichnet.

### Ein Beispiel für `createPattern`

In diesem letzten Beispiel erstellen wir ein Muster, das wir `fillStyle` zuweisen. Bemerkenswert ist dabei vor allem die Verwendung des `onload`-Handlers des Bildes. Er stellt sicher, dass das Bild geladen ist, bevor es für das Muster verwendet wird.

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

Für Schatten benötigen wir nur vier Eigenschaften:

- [`shadowOffsetX = float`](/de/docs/Web/API/CanvasRenderingContext2D/shadowOffsetX)
  - : Gibt an, wie weit der Schatten horizontal vom Objekt versetzt ist. Dieser Wert wird durch die Transformationsmatrix nicht beeinflusst. Der Standardwert ist 0.
- [`shadowOffsetY = float`](/de/docs/Web/API/CanvasRenderingContext2D/shadowOffsetY)
  - : Gibt an, wie weit der Schatten vertikal vom Objekt versetzt ist. Dieser Wert wird durch die Transformationsmatrix nicht beeinflusst. Der Standardwert ist 0.
- [`shadowBlur = float`](/de/docs/Web/API/CanvasRenderingContext2D/shadowBlur)
  - : Gibt die Stärke des Weichzeichnungseffekts an. Der Wert entspricht keiner Pixelanzahl und wird durch die aktuelle Transformationsmatrix nicht beeinflusst. Der Standardwert ist 0.
- [`shadowColor = color`](/de/docs/Web/API/CanvasRenderingContext2D/shadowColor)
  - : Ein gewöhnlicher CSS-Farbwert, der die Farbe des Schattens angibt. Standardmäßig ist dies vollständig transparentes Schwarz.

Die Eigenschaften `shadowOffsetX` und `shadowOffsetY` geben an, wie weit der Schatten in X- beziehungsweise Y-Richtung vom Objekt versetzt ist. Diese Werte werden durch die aktuelle Transformationsmatrix nicht beeinflusst. Mit negativen Werten verschieben Sie den Schatten nach oben oder links, mit positiven Werten nach unten oder rechts. Beide Standardwerte sind 0.

Die Eigenschaft `shadowBlur` gibt die Stärke des Weichzeichnungseffekts an. Ihr Wert entspricht keiner Pixelanzahl und wird durch die aktuelle Transformationsmatrix nicht beeinflusst. Der Standardwert ist 0.

Die Eigenschaft `shadowColor` ist ein gewöhnlicher CSS-Farbwert, der die Farbe des Schattens angibt. Standardmäßig ist dies vollständig transparentes Schwarz.

> [!NOTE]
> Schatten werden nur bei der [Kompositionsoperation](/de/docs/Web/API/Canvas_API/Tutorial/Compositing) `source-over` gezeichnet.

### Ein Beispiel für Text mit Schatten

Dieses Beispiel zeichnet eine Zeichenfolge mit Schatteneffekt.

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

Die Eigenschaft `font` und die Methode `fillText` sehen wir uns im nächsten Kapitel über das [Zeichnen von Text](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text) an.

## Füllregeln für Canvas

Bei der Verwendung von `fill` (oder [`clip`](/de/docs/Web/API/CanvasRenderingContext2D/clip) und [`isPointInPath`](/de/docs/Web/API/CanvasRenderingContext2D/isPointInPath)) können Sie optional eine Füllregel angeben. Sie bestimmt, ob ein Punkt innerhalb oder außerhalb eines Pfads liegt und damit, ob er gefüllt wird. Das ist nützlich, wenn sich ein Pfad selbst schneidet oder Pfade ineinander verschachtelt sind.

Zwei Werte sind möglich:

- `nonzero`
  - : Die [Windungsregel mit Wert ungleich null](https://en.wikipedia.org/wiki/Nonzero-rule), die standardmäßig verwendet wird.
- `evenodd`
  - : Die [Gerade-Ungerade-Regel](https://en.wikipedia.org/wiki/Even%E2%80%93odd_rule).

In diesem Beispiel verwenden wir die Regel `evenodd`.

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
