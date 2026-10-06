---
title: Stile und Farben anwenden
slug: Web/API/Canvas_API/Tutorial/Applying_styles_and_colors
l10n:
  sourceCommit: aba807125c2353106efb38decb31def1c5236224
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Drawing_shapes", "Web/API/Canvas_API/Tutorial/Drawing_text")}}

Im Kapitel über das [Zeichnen von Formen](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes) haben wir nur die standardmäßigen Linien- und Füllstile verwendet. Hier erkunden wir die Canvas-Optionen, mit denen wir unsere Zeichnungen etwas ansprechender gestalten können. Sie erfahren, wie Sie Ihren Zeichnungen verschiedene Farben, Linienstile, Farbverläufe, Muster und Schatten hinzufügen.

> [!NOTE]
> Canvas-Inhalte sind für Screenreader nicht zugänglich. Wenn das Canvas rein dekorativ ist, fügen Sie dem öffnenden `<canvas>`-Tag `role="presentation"` hinzu. Andernfalls fügen Sie eine Beschreibung als Wert des Attributs [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) direkt am Canvas-Element oder Ersatzinhalt zwischen dem öffnenden und dem schließenden Canvas-Tag ein. Canvas-Inhalte sind nicht Teil des DOM, verschachtelter Ersatzinhalt hingegen schon.

## Farben

Bisher haben wir nur Methoden des Zeichenkontexts kennengelernt. Wenn wir einer Form Farben zuweisen möchten, können wir zwei wichtige Eigenschaften verwenden: `fillStyle` und `strokeStyle`.

- [`fillStyle = color`](/de/docs/Web/API/CanvasRenderingContext2D/fillStyle)
  - : Legt den Stil zum Füllen von Formen fest.
- [`strokeStyle = color`](/de/docs/Web/API/CanvasRenderingContext2D/strokeStyle)
  - : Legt den Stil für die Umrisse von Formen fest.

`color` ist ein String, der eine CSS-Farbe vom Typ {{cssxref("&lt;color&gt;")}}, ein Farbverlaufsobjekt oder ein Musterobjekt repräsentiert. Farbverlaufs- und Musterobjekte sehen wir uns später an. Standardmäßig sind die Farben für Umrisse und Füllungen auf Schwarz gesetzt (CSS-Farbwert `#000000`).

> [!NOTE]
> Wenn Sie die Eigenschaft `strokeStyle` und/oder `fillStyle` festlegen, wird der neue Wert zum Standard für alle anschließend gezeichneten Formen. Für jede Form, die eine andere Farbe haben soll, müssen Sie die Eigenschaft `fillStyle` oder `strokeStyle` erneut zuweisen.

Laut Spezifikation müssen die eingegebenen gültigen Strings CSS-Werte vom Typ {{cssxref("&lt;color&gt;")}} sein. Jedes der folgenden Beispiele beschreibt dieselbe Farbe.

```js
// these all set the fillStyle to 'orange'

ctx.fillStyle = "orange";
ctx.fillStyle = "#FFA500";
ctx.fillStyle = "rgb(255 165 0)";
ctx.fillStyle = "rgb(255 165 0 / 100%)";
```

### Ein Beispiel für `fillStyle`

In diesem Beispiel verwenden wir wieder zwei `for`-Schleifen, um ein Raster aus Rechtecken zu zeichnen, jedes in einer anderen Farbe. Das Ergebnis sollte ungefähr wie im Screenshot aussehen. Hier geschieht nichts besonders Spektakuläres. Wir verwenden die beiden Variablen `i` und `j`, um für jedes Quadrat eine eindeutige RGB-Farbe zu erzeugen, und ändern nur die Rot- und Grünwerte. Der blaue Kanal hat einen festen Wert. Durch Ändern der Kanäle können Sie verschiedenste Farbpaletten erzeugen. Wenn Sie die Anzahl der Schritte erhöhen, können Sie etwas erzielen, das den Farbpaletten von Photoshop ähnelt.

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

Neben deckenden Formen können wir auf dem Canvas auch halbtransparente (oder durchscheinende) Formen zeichnen. Dazu legen wir entweder die Eigenschaft `globalAlpha` fest oder weisen dem Umriss- und/oder Füllstil eine halbtransparente Farbe zu.

- [`globalAlpha = transparencyValue`](/de/docs/Web/API/CanvasRenderingContext2D/globalAlpha)
  - : Wendet den angegebenen Transparenzwert auf alle künftig auf dem Canvas gezeichneten Formen an. Der Wert muss zwischen 0.0 (vollständig transparent) und 1.0 (vollständig deckend) liegen. Standardmäßig beträgt er 1.0 (vollständig deckend).

Die Eigenschaft `globalAlpha` kann nützlich sein, wenn Sie viele Formen mit ähnlicher Transparenz auf dem Canvas zeichnen möchten. Andernfalls ist es in der Regel sinnvoller, die Transparenz einzelner Formen beim Festlegen ihrer Farben einzustellen.

Da die Eigenschaften `strokeStyle` und `fillStyle` CSS-rgb-Farbwerte akzeptieren, können wir ihnen mit der folgenden Schreibweise eine transparente Farbe zuweisen.

```js
// Assigning transparent colors to stroke and fill style

ctx.strokeStyle = "rgb(255 0 0 / 50%)";
ctx.fillStyle = "rgb(255 0 0 / 50%)";
```

Die Funktion `rgb()` hat einen optionalen zusätzlichen Parameter. Der letzte Parameter legt den Transparenzwert dieser Farbe fest. Der gültige Bereich wird entweder als Prozentsatz zwischen `0%` (vollständig transparent) und `100%` (vollständig deckend) oder als Zahl zwischen `0.0` (entspricht `0%`) und `1.0` (entspricht `100%`) angegeben.

### Ein Beispiel für `globalAlpha`

In diesem Beispiel zeichnen wir einen Hintergrund aus vier verschiedenfarbigen Quadraten. Darüber zeichnen wir mehrere halbtransparente Kreise. Die Eigenschaft `globalAlpha` wird auf `0.2` gesetzt; dieser Wert gilt für alle Formen, die von diesem Punkt an gezeichnet werden. Jeder Durchlauf der `for`-Schleife zeichnet einen Kreis mit größerem Radius. Das Endergebnis ist ein radialer Farbverlauf. Indem wir immer mehr Kreise übereinanderlegen, verringern wir effektiv die Transparenz der bereits gezeichneten Kreise. Wenn wir die Anzahl der Schritte erhöhen und dadurch mehr Kreise zeichnen, würde der Hintergrund in der Bildmitte vollständig verschwinden.

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

In diesem zweiten Beispiel machen wir etwas Ähnliches wie zuvor. Statt Kreise übereinanderzuzeichnen, zeichnen wir jedoch kleine Rechtecke mit zunehmender Deckkraft. `rgb()` bietet Ihnen etwas mehr Kontrolle und Flexibilität, da wir Füll- und Umrissstil einzeln festlegen können.

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

Mit mehreren Eigenschaften können wir Linien gestalten.

- [`lineWidth = value`](/de/docs/Web/API/CanvasRenderingContext2D/lineWidth)
  - : Legt die Breite künftig gezeichneter Linien fest.
- [`lineCap = type`](/de/docs/Web/API/CanvasRenderingContext2D/lineCap)
  - : Legt das Aussehen der Linienenden fest.
- [`lineJoin = type`](/de/docs/Web/API/CanvasRenderingContext2D/lineJoin)
  - : Legt das Aussehen der „Ecken“ fest, an denen Linien zusammentreffen.
- [`miterLimit = value`](/de/docs/Web/API/CanvasRenderingContext2D/miterLimit)
  - : Legt einen Grenzwert für die Gehrung fest, wenn zwei Linien in einem spitzen Winkel zusammentreffen. Damit können Sie steuern, wie weit die Verbindung hervorsteht.
- [`getLineDash()`](/de/docs/Web/API/CanvasRenderingContext2D/getLineDash)
  - : Gibt das aktuelle Strichmuster als Array mit einer geraden Anzahl nicht negativer Zahlen zurück.
- [`setLineDash(segments)`](/de/docs/Web/API/CanvasRenderingContext2D/setLineDash)
  - : Legt das aktuelle Strichmuster fest.
- [`lineDashOffset = value`](/de/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)
  - : Legt fest, an welcher Stelle einer Linie das Strichmuster beginnt.

Die folgenden Beispiele zeigen anschaulicher, was diese Eigenschaften und Methoden bewirken.

### Ein Beispiel für `lineWidth`

Diese Eigenschaft legt die aktuelle Linienstärke fest. Die Werte müssen positive Zahlen sein. Standardmäßig ist der Wert auf 1.0 Einheiten gesetzt.

Die Linienbreite bezeichnet die Stärke des Umrisses, der um den angegebenen Pfad zentriert ist. Anders ausgedrückt: Der gezeichnete Bereich erstreckt sich auf beiden Seiten des Pfads jeweils um die halbe Linienbreite. Da Canvas-Koordinaten nicht direkt Pixeln entsprechen, ist besondere Sorgfalt erforderlich, um scharfe horizontale und vertikale Linien zu erhalten.

Im folgenden Beispiel werden 10 gerade Linien mit zunehmender Linienbreite gezeichnet. Die Linie ganz links ist 1.0 Einheiten breit. Sie und alle anderen Linien mit einer ungeradzahligen Breite erscheinen jedoch wegen der Positionierung des Pfads nicht scharf.

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

Die Eigenschaft `lineCap` bestimmt, wie die Endpunkte jeder Linie gezeichnet werden. Es gibt drei mögliche Werte: `butt`, `round` und `square`. Standardmäßig ist diese Eigenschaft auf `butt` gesetzt:

- `butt`
  - : Die Linien enden bündig und rechtwinklig an ihren Endpunkten.
- `round`
  - : Die Linienenden sind abgerundet.
- `square`
  - : Die Linienenden werden durch Hinzufügen eines Rechtecks rechtwinklig verlängert. Das Rechteck ist so breit wie die Linie und ragt um die halbe Linienstärke über den Endpunkt hinaus.

Dies betrifft nur den Anfangs- und Endpunkt eines Pfads: Wird ein Pfad mit `closePath()` geschlossen, gibt es keinen Anfangs- und Endpunkt mehr. Stattdessen werden alle Endpunkte des Pfads mit dem jeweils vorherigen und nächsten Segment verbunden, wobei die aktuelle Einstellung von `lineJoin` verwendet wird.

In diesem Beispiel zeichnen wir drei Linien mit jeweils einem anderen Wert für die Eigenschaft `lineCap`. Außerdem habe ich zwei Hilfslinien hinzugefügt, um die genauen Unterschiede zwischen den drei Varianten zu zeigen. Jede der Linien beginnt und endet exakt auf diesen Hilfslinien.

Die linke Linie verwendet die Standardeinstellung `butt`. Sie sehen, dass sie genau bündig mit den Hilfslinien gezeichnet wird. Für die zweite Linie ist `round` eingestellt. Dadurch wird am Linienende ein Halbkreis hinzugefügt, dessen Radius der halben Linienbreite entspricht. Die rechte Linie verwendet `square`. Dadurch wird ein Rechteck hinzugefügt, das so breit wie die Linie ist und um die halbe Linienstärke über das Ende hinausragt.

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

Die Eigenschaft `lineJoin` bestimmt, wie zwei miteinander verbundene Segmente einer Form (Linien, Kreisbögen oder Kurven) mit einer Länge ungleich null verbunden werden. Degenerierte Segmente mit der Länge null, deren angegebene End- und Kontrollpunkte genau an derselben Position liegen, werden übersprungen.

Für diese Eigenschaft gibt es drei mögliche Werte: `round`, `bevel` und `miter`. Standardmäßig ist sie auf `miter` gesetzt. Beachten Sie, dass die Einstellung `lineJoin` keine Wirkung hat, wenn die beiden verbundenen Segmente in dieselbe Richtung verlaufen, da in diesem Fall kein zusätzlicher Verbindungsbereich entsteht:

- `round`
  - : Rundet die Ecken einer Form ab, indem ein zusätzlicher Kreissektor mit Mittelpunkt am gemeinsamen Endpunkt der verbundenen Segmente gefüllt wird. Der Radius dieser abgerundeten Ecken entspricht der halben Linienbreite.
- `bevel`
  - : Füllt einen zusätzlichen dreieckigen Bereich zwischen dem gemeinsamen Endpunkt der verbundenen Segmente und den getrennten äußeren Ecken der beiden Segmente.
- `miter`
  - : Die verbundenen Segmente werden verknüpft, indem ihre Außenkanten verlängert werden, bis sie sich in einem Punkt treffen. Dadurch wird ein zusätzlicher rautenförmiger Bereich gefüllt. Diese Einstellung wird durch die unten erläuterte Eigenschaft `miterLimit` beeinflusst.

Das folgende Beispiel zeichnet drei verschiedene Pfade, um die drei Einstellungen der Eigenschaft `lineJoin` zu veranschaulichen. Das Ergebnis wird darunter angezeigt.

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

Wie Sie im vorherigen Beispiel gesehen haben, werden beim Verbinden zweier Linien mit der Option `miter` die Außenkanten der beiden Linien verlängert, bis sie sich treffen. Wenn die Linien in einem großen Winkel zueinander stehen, liegt dieser Punkt nicht weit vom inneren Verbindungspunkt entfernt. Je kleiner jedoch der Winkel zwischen den Linien wird, desto stärker wächst der Abstand (die Gehrungslänge) zwischen diesen Punkten.

Die Eigenschaft `miterLimit` bestimmt, wie weit der äußere Verbindungspunkt vom inneren Verbindungspunkt entfernt sein darf. Überschreiten zwei Linien diesen Wert, wird stattdessen eine abgeflachte Verbindung gezeichnet. Beachten Sie, dass die maximale Gehrungslänge dem Produkt aus der im aktuellen Koordinatensystem gemessenen Linienbreite und dem Wert der Eigenschaft `miterLimit` entspricht (deren Standardwert beim HTML-Element {{HTMLElement("canvas")}} 10.0 beträgt). `miterLimit` kann daher unabhängig vom aktuellen Anzeigemaßstab oder affinen Transformationen der Pfade festgelegt werden: Die Eigenschaft beeinflusst nur die tatsächlich gerenderte Form der Linienkanten.

Genauer gesagt ist die Gehrungsgrenze das maximal zulässige Verhältnis der Länge der Verlängerung zur halben Linienbreite. Beim HTML-Canvas wird diese Länge zwischen der äußeren Ecke der verbundenen Linienkanten und dem im Pfad angegebenen gemeinsamen Endpunkt der verbundenen Segmente gemessen. Gleichwertig lässt sie sich als das maximal zulässige Verhältnis des Abstands zwischen dem inneren und dem äußeren Verbindungspunkt der Kanten zur gesamten Linienbreite definieren. Sie entspricht damit dem Kosekans des halben kleinsten Innenwinkels zwischen verbundenen Segmenten, unterhalb dessen keine Gehrungsverbindung, sondern nur eine abgeflachte Verbindung gerendert wird:

- `miterLimit` = **max** `miterLength` / `lineWidth` = 1 / **sin** ( **min** _θ_ / 2 )
- Die standardmäßige Gehrungsgrenze von 10.0 verhindert Gehrungen bei spitzen Winkeln unter etwa 11 Grad.
- Eine Gehrungsgrenze von √2 ≈ 1.4142136 (aufgerundet) verhindert Gehrungen bei allen spitzen Winkeln; Gehrungsverbindungen bleiben nur bei stumpfen oder rechten Winkeln erhalten.
- Eine Gehrungsgrenze von 1.0 ist gültig, deaktiviert aber alle Gehrungen.
- Werte unter 1.0 sind als Gehrungsgrenze ungültig.

Hier ist eine kleine Demonstration, in der Sie `miterLimit` dynamisch einstellen und sehen können, wie sich dies auf die Formen im Canvas auswirkt. Die blauen Linien zeigen, wo die Anfangs- und Endpunkte der Linien im Zickzackmuster liegen.

Wenn Sie in dieser Demonstration einen `miterLimit`-Wert unter 4.2 angeben, erhält keine der sichtbaren Ecken eine Gehrungsverlängerung. Stattdessen entsteht nahe den blauen Linien nur eine kleine Abflachung. Bei einem `miterLimit` über 10 sollten die meisten Ecken durch eine Gehrung verbunden werden, die weit von den blauen Linien entfernt liegt. Ihre Höhe nimmt von links nach rechts ab, da die Winkel zwischen den Linien größer werden. Bei Zwischenwerten werden die Ecken links nahe den blauen Linien nur abgeflacht, während die Ecken rechts eine Gehrungsverlängerung erhalten, deren Höhe ebenfalls abnimmt.

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

Die Methode `setLineDash` und die Eigenschaft `lineDashOffset` legen das Strichmuster von Linien fest. Die Methode `setLineDash` akzeptiert eine Liste von Zahlen, die abwechselnd die Längen von Strichen und Lücken angeben. Die Eigenschaft `lineDashOffset` legt fest, mit welchem Versatz das Muster beginnt.

In diesem Beispiel erzeugen wir einen animierten gestrichelten Rahmen. Diese Animationstechnik wird häufig bei Auswahlwerkzeugen in Grafikprogrammen verwendet. Durch die Animation des Rahmens können Benutzer die Auswahlbegrenzung vom Bildhintergrund unterscheiden. In einem späteren Teil dieses Tutorials erfahren Sie, wie Sie diesen und andere [einfache Animationseffekte](/de/docs/Web/API/Canvas_API/Tutorial/Basic_animations) umsetzen.

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

Wie in einem gewöhnlichen Zeichenprogramm können wir Formen mit linearen, radialen und konischen Farbverläufen füllen und ihre Umrisse damit zeichnen. Mit einer der folgenden Methoden erstellen wir ein [`CanvasGradient`](/de/docs/Web/API/CanvasGradient)-Objekt. Dieses Objekt können wir anschließend den Eigenschaften `fillStyle` oder `strokeStyle` zuweisen.

- [`createLinearGradient(x1, y1, x2, y2)`](/de/docs/Web/API/CanvasRenderingContext2D/createLinearGradient)
  - : Erstellt ein Objekt für einen linearen Farbverlauf mit einem Startpunkt bei (`x1`, `y1`) und einem Endpunkt bei (`x2`, `y2`).
- [`createRadialGradient(x1, y1, r1, x2, y2, r2)`](/de/docs/Web/API/CanvasRenderingContext2D/createRadialGradient)
  - : Erstellt einen radialen Farbverlauf. Die Parameter beschreiben zwei Kreise: Der eine hat seinen Mittelpunkt bei (`x1`, `y1`) und den Radius `r1`, der andere seinen Mittelpunkt bei (`x2`, `y2`) und den Radius `r2`.
- [`createConicGradient(angle, x, y)`](/de/docs/Web/API/CanvasRenderingContext2D/createConicGradient)
  - : Erstellt ein Objekt für einen konischen Farbverlauf mit einem Startwinkel von `angle` im Bogenmaß an der Position (`x`, `y`).

Zum Beispiel:

```js
const lineargradient = ctx.createLinearGradient(0, 0, 150, 150);
const radialgradient = ctx.createRadialGradient(75, 75, 0, 75, 75, 100);
```

Nachdem wir ein `CanvasGradient`-Objekt erstellt haben, können wir ihm mit der Methode `addColorStop()` Farben zuweisen.

- [`gradient.addColorStop(position, color)`](/de/docs/Web/API/CanvasGradient/addColorStop)
  - : Erstellt einen neuen Farbstopp im Objekt `gradient`. `position` ist eine Zahl zwischen 0.0 und 1.0 und bestimmt die relative Position der Farbe im Verlauf. Das Argument `color` muss ein String sein, der eine CSS-Farbe vom Typ {{cssxref("&lt;color&gt;")}} repräsentiert und angibt, welche Farbe der Verlauf an dieser Position des Übergangs erreichen soll.

Sie können einem Farbverlauf beliebig viele Farbstopps hinzufügen. Unten sehen Sie einen sehr einfachen linearen Verlauf von Weiß nach Schwarz.

```js
const lineargradient = ctx.createLinearGradient(0, 0, 150, 150);
lineargradient.addColorStop(0, "white");
lineargradient.addColorStop(1, "black");
```

### Ein Beispiel für `createLinearGradient`

In diesem Beispiel erstellen wir zwei verschiedene Farbverläufe. Wie Sie sehen, können sowohl `strokeStyle` als auch `fillStyle` ein `canvasGradient`-Objekt als gültigen Wert annehmen.

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

Der erste ist ein Hintergrundverlauf. Wie Sie sehen, haben wir derselben Position zwei Farben zugewiesen. So erzeugen Sie einen sehr scharfen Farbübergang – in diesem Fall von Weiß zu Grün. Normalerweise spielt die Reihenfolge, in der Sie die Farbstopps definieren, keine Rolle. In diesem Sonderfall ist sie jedoch entscheidend. Wenn Sie die Zuweisungen in der Reihenfolge vornehmen, in der die Farben erscheinen sollen, ist das kein Problem.

Beim zweiten Farbverlauf haben wir keine Startfarbe (an Position 0.0) zugewiesen, da dies nicht unbedingt nötig war: Es wird automatisch die Farbe des nächsten Farbstopps angenommen. Wenn Sie Schwarz an Position 0.5 zuweisen, ist der Verlauf vom Anfang bis zu diesem Farbstopp daher automatisch schwarz.

{{EmbedLiveSample("A_createLinearGradient_example", "", "160")}}

### Ein Beispiel für `createRadialGradient`

In diesem Beispiel definieren wir vier verschiedene radiale Farbverläufe. Da wir die Anfangs- und Endpunkte des Verlaufs festlegen können, lassen sich komplexere Effekte erzielen als mit den „klassischen“ radialen Farbverläufen, die wir beispielsweise aus Photoshop kennen. Diese haben einen einzigen Mittelpunkt, von dem aus sich der Verlauf kreisförmig nach außen ausbreitet.

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

Hier haben wir den Startpunkt leicht gegenüber dem Endpunkt versetzt, um einen kugelförmigen 3D-Effekt zu erzielen. Vermeiden Sie möglichst, dass sich der innere und der äußere Kreis überschneiden, da dies zu merkwürdigen, schwer vorhersehbaren Effekten führt.

Der letzte Farbstopp jedes der vier Farbverläufe verwendet eine vollständig transparente Farbe. Für einen gleichmäßigen Übergang vom vorherigen Farbstopp sollten beide Farben gleich sein. Das ist im Code nicht sofort erkennbar, da zur Veranschaulichung zwei unterschiedliche CSS-Farbschreibweisen verwendet werden. Im ersten Verlauf gilt jedoch `#019F62 = rgb(1 159 98 / 100%)`.

{{EmbedLiveSample("A_createRadialGradient_example", "", "160")}}

### Ein Beispiel für `createConicGradient`

In diesem Beispiel definieren wir zwei verschiedene konische Farbverläufe. Anders als ein radialer Farbverlauf erzeugt ein konischer Verlauf keine konzentrischen Kreise, sondern verläuft um einen Punkt herum.

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

Der erste Farbverlauf ist in der Mitte des ersten Rechtecks positioniert und geht von einem grünen Farbstopp am Anfang zu einem weißen am Ende über. Der Winkel beginnt bei 2 Radiant. Das ist an der nach Südosten zeigenden Linie zwischen Anfang und Ende zu erkennen.

Der zweite Farbverlauf ist ebenfalls in der Mitte seines Rechtecks positioniert. Er hat mehrere Farbstopps, die bei jeder Vierteldrehung zwischen Schwarz und Weiß wechseln. Dadurch entsteht ein Schachbrettmuster.

{{EmbedLiveSample("A_createConicGradient_example", "", "160")}}

## Muster

In einem der Beispiele auf der vorherigen Seite haben wir mit mehreren Schleifen ein Bildmuster erzeugt. Es gibt jedoch eine wesentlich einfachere Möglichkeit: die Methode `createPattern()`.

- [`createPattern(image, type)`](/de/docs/Web/API/CanvasRenderingContext2D/createPattern)
  - : Erstellt ein neues Canvas-Musterobjekt und gibt es zurück. `image` ist die Bildquelle (also ein [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement), ein [`SVGImageElement`](/de/docs/Web/API/SVGImageElement), ein weiteres [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) oder ein [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas), ein [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) oder ein [`VideoFrame`](/de/docs/Web/API/VideoFrame) oder ein [`ImageBitmap`](/de/docs/Web/API/ImageBitmap)). `type` ist ein String, der angibt, wie das Bild verwendet werden soll.

Der Typ bestimmt, wie das Bild zum Erstellen des Musters verwendet wird, und muss einer der folgenden String-Werte sein:

- `repeat`
  - : Wiederholt das Bild sowohl vertikal als auch horizontal.
- `repeat-x`
  - : Wiederholt das Bild horizontal, aber nicht vertikal.
- `repeat-y`
  - : Wiederholt das Bild vertikal, aber nicht horizontal.
- `no-repeat`
  - : Wiederholt das Bild nicht. Es wird nur einmal verwendet.

Mit dieser Methode erstellen wir ein [`CanvasPattern`](/de/docs/Web/API/CanvasPattern)-Objekt. Das funktioniert ganz ähnlich wie bei den zuvor vorgestellten Methoden für Farbverläufe. Sobald wir ein Muster erstellt haben, können wir es den Eigenschaften `fillStyle` oder `strokeStyle` zuweisen. Zum Beispiel:

```js
const img = new Image();
img.src = "some-image.png";
const pattern = ctx.createPattern(img, "repeat");
```

> [!NOTE]
> Wie bei der Methode `drawImage()` müssen Sie sicherstellen, dass das verwendete Bild geladen ist, bevor Sie diese Methode aufrufen. Andernfalls wird das Muster möglicherweise nicht korrekt gezeichnet.

### Ein Beispiel für `createPattern`

In diesem letzten Beispiel erstellen wir ein Muster und weisen es der Eigenschaft `fillStyle` zu. Erwähnenswert ist hier nur die Verwendung des `onload`-Handlers für das Bild. So stellen wir sicher, dass das Bild geladen ist, bevor es dem Muster zugewiesen wird.

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
  - : Gibt den horizontalen Abstand des Schattens vom Objekt an. Dieser Wert wird von der Transformationsmatrix nicht beeinflusst. Der Standardwert ist 0.
- [`shadowOffsetY = float`](/de/docs/Web/API/CanvasRenderingContext2D/shadowOffsetY)
  - : Gibt den vertikalen Abstand des Schattens vom Objekt an. Dieser Wert wird von der Transformationsmatrix nicht beeinflusst. Der Standardwert ist 0.
- [`shadowBlur = float`](/de/docs/Web/API/CanvasRenderingContext2D/shadowBlur)
  - : Gibt die Stärke des Weichzeichnungseffekts an. Dieser Wert entspricht keiner Pixelanzahl und wird von der aktuellen Transformationsmatrix nicht beeinflusst. Der Standardwert ist 0.
- [`shadowColor = color`](/de/docs/Web/API/CanvasRenderingContext2D/shadowColor)
  - : Ein CSS-Standardfarbwert, der die Farbe des Schattens angibt. Standardmäßig ist dies vollständig transparentes Schwarz.

Die Eigenschaften `shadowOffsetX` und `shadowOffsetY` geben an, wie weit der Schatten in X- und Y-Richtung vom Objekt versetzt ist. Diese Werte werden von der aktuellen Transformationsmatrix nicht beeinflusst. Verwenden Sie negative Werte, um den Schatten nach oben oder links zu verschieben, und positive Werte, um ihn nach unten oder rechts zu verschieben. Beide Werte sind standardmäßig 0.

Die Eigenschaft `shadowBlur` gibt die Stärke des Weichzeichnungseffekts an. Dieser Wert entspricht keiner Pixelanzahl und wird von der aktuellen Transformationsmatrix nicht beeinflusst. Der Standardwert ist 0.

Die Eigenschaft `shadowColor` ist ein CSS-Standardfarbwert, der die Farbe des Schattens angibt. Standardmäßig ist dies vollständig transparentes Schwarz.

> [!NOTE]
> Schatten werden nur bei der [Compositing-Operation](/de/docs/Web/API/Canvas_API/Tutorial/Compositing) `source-over` gezeichnet.

### Ein Beispiel für Text mit Schatten

Dieses Beispiel zeichnet einen Text mit Schatteneffekt.

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

Bei der Verwendung von `fill` (oder [`clip`](/de/docs/Web/API/CanvasRenderingContext2D/clip) und [`isPointInPath`](/de/docs/Web/API/CanvasRenderingContext2D/isPointInPath)) können Sie optional eine Füllregel angeben. Sie bestimmt, ob ein Punkt innerhalb oder außerhalb eines Pfads liegt und somit gefüllt wird oder nicht. Das ist nützlich, wenn sich ein Pfad selbst überschneidet oder Teilpfade ineinander verschachtelt sind.

Zwei Werte sind möglich:

- `nonzero`
  - : Die [Nichtnull-Windungsregel](https://en.wikipedia.org/wiki/Nonzero-rule), die standardmäßig verwendet wird.
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
