---
title: Anwenden von Stilen und Farben
slug: Web/API/Canvas_API/Tutorial/Applying_styles_and_colors
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Drawing_shapes", "Web/API/Canvas_API/Tutorial/Drawing_text")}}

Im Kapitel über das [Zeichnen von Formen](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes) haben wir nur die Standardlinien- und Füllstile verwendet. Hier werden wir die Canvas-Optionen erkunden, die uns zur Verfügung stehen, um unsere Zeichnungen etwas attraktiver zu gestalten. Sie lernen, wie Sie Ihren Zeichnungen verschiedene Farben, Linienstile, Verläufe, Muster und Schatten hinzufügen können.

> [!NOTE]
> Canvas-Inhalte sind für Screenreader nicht zugänglich. Wenn der Canvas rein dekorativ ist, fügen Sie `role="presentation"` im öffnenden `<canvas>`-Tag hinzu. Andernfalls fügen Sie beschreibenden Text als Wert des [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) Attributs direkt zum Canvas-Element hinzu oder platzieren Sie Fallback-Inhalte innerhalb des öffnenden und schließenden Canvas-Tags. Canvas-Inhalte sind nicht Teil des DOM, aber verschachtelte Fallback-Inhalte schon.

## Farben

Bis jetzt haben wir nur Methoden des Zeichenkontextes gesehen. Wenn wir Farben auf eine Form anwenden wollen, stehen uns zwei wichtige Eigenschaften zur Verfügung: `fillStyle` und `strokeStyle`.

- [`fillStyle = color`](/de/docs/Web/API/CanvasRenderingContext2D/fillStyle)
  - : Legt den Stil fest, der beim Ausfüllen von Formen verwendet wird.
- [`strokeStyle = color`](/de/docs/Web/API/CanvasRenderingContext2D/strokeStyle)
  - : Legt den Stil für die Umrisse von Formen fest.

`color` ist ein String, der eine CSS {{cssxref("&lt;color&gt;")}}, ein Gradientenobjekt oder ein Musterobjekt darstellt. Auf Gradienten- und Musterobjekte werden wir später eingehen. Standardmäßig sind die Linien- und Füllfarben auf Schwarz (CSS-Farbwert `#000000`) gesetzt.

> [!NOTE]
> Wenn Sie die Eigenschaft `strokeStyle` und/oder `fillStyle` setzen, wird der neue Wert zum Standard für alle danach gezeichneten Formen. Für jede Form, die eine andere Farbe haben soll, müssen Sie die Eigenschaft `fillStyle` oder `strokeStyle` neu zuweisen.

Die gültigen Zeichenfolgen sollten laut Spezifikation CSS {{cssxref("&lt;color&gt;")}} Werte sein. Jedes der folgenden Beispiele beschreibt die gleiche Farbe.

```js
// these all set the fillStyle to 'orange'

ctx.fillStyle = "orange";
ctx.fillStyle = "#FFA500";
ctx.fillStyle = "rgb(255 165 0)";
ctx.fillStyle = "rgb(255 165 0 / 100%)";
```

### Ein `fillStyle`-Beispiel

In diesem Beispiel verwenden wir erneut zwei `for`-Schleifen, um ein Gitter aus Rechtecken zu zeichnen, jedes in einer anderen Farbe. Das resultierende Bild sollte wie der Screenshot aussehen. Hier passiert nichts besonders Spektakuläres. Wir verwenden die beiden Variablen `i` und `j`, um eine eindeutige RGB-Farbe für jedes Quadrat zu erzeugen, und ändern nur die Rot- und Grünwerte. Der Blaukanal hat einen festen Wert. Durch Ändern der Kanäle können Sie alle Arten von Paletten erzeugen. Durch Erhöhen der Schritte können Sie etwas erreichen, das wie die Farbpipetten in Photoshop aussieht.

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

Dieses Beispiel ähnelt dem obigen, verwendet jedoch die Eigenschaft `strokeStyle`, um die Farben der Umrisse der Formen zu ändern. Wir verwenden die Methode `arc()`, um Kreise anstelle von Quadraten zu zeichnen.

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

Zusätzlich zum Zeichnen undurchsichtiger Formen auf dem Canvas können wir auch halbtransparente (oder durchscheinende) Formen zeichnen. Dies geschieht entweder durch Festlegung der Eigenschaft `globalAlpha` oder durch Zuweisung einer halbtransparenten Farbe zum Linien- und/oder Füllstil.

- [`globalAlpha = transparencyValue`](/de/docs/Web/API/CanvasRenderingContext2D/globalAlpha)
  - : Wendet den angegebenen Transparenzwert auf alle künftig gezeichneten Formen auf dem Canvas an. Der Wert muss zwischen 0.0 (vollkommen transparent) und 1.0 (vollkommen undurchsichtig) liegen. Der Standardwert ist 1.0 (vollkommen undurchsichtig).

Die `globalAlpha`-Eigenschaft kann nützlich sein, wenn Sie viele Formen auf dem Canvas mit ähnlicher Transparenz zeichnen möchten, aber ansonsten ist es im Allgemeinen nützlicher, die Transparenz auf individuellen Formen zu setzen, wenn Sie ihre Farben setzen.

Da die Eigenschaften `strokeStyle` und `fillStyle` CSS-rgb-Farbwerte akzeptieren, können wir folgende Notation verwenden, um ihnen eine transparente Farbe zuzuweisen.

```js
// Assigning transparent colors to stroke and fill style

ctx.strokeStyle = "rgb(255 0 0 / 50%)";
ctx.fillStyle = "rgb(255 0 0 / 50%)";
```

Die Funktion `rgb()` hat einen optionalen zusätzlichen Parameter. Der letzte Parameter setzt den Transparenzwert dieser bestimmten Farbe. Der gültige Bereich wird als Prozentsatz zwischen `0%` (vollkommen transparent) und `100%` (vollkommen undurchsichtig) oder als Zahl zwischen `0.0` (entspricht `0%`) und `1.0` (entspricht `100%`) angegeben.

### Ein `globalAlpha`-Beispiel

In diesem Beispiel zeichnen wir einen Hintergrund aus vier unterschiedlich gefärbten Quadraten. Darüber zeichnen wir eine Reihe halbtransparenter Kreise. Die Eigenschaft `globalAlpha` wird auf `0.2` gesetzt, was für alle von diesem Punkt an gezeichneten Formen verwendet wird. Jeder Schritt in der `for`-Schleife zeichnet einen Satz von Kreisen mit steigendem Radius. Das Endergebnis ist ein radialer Farbverlauf. Indem immer mehr Kreise übereinandergelegt werden, reduzieren wir effektiv die Transparenz der bereits gezeichneten Kreise. Durch Erhöhung der Schrittzahl und letztlich des Zeichnens von mehr Kreisen würde der Hintergrund vollständig aus der Mitte des Bildes verschwinden.

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

### Ein Beispiel mit `rgb()` und Alphatransparenz

In diesem zweiten Beispiel machen wir etwas Ähnliches wie im vorherigen, ziehen jedoch anstelle von übereinanderliegenden Kreisen kleine Rechtecke mit zunehmender Deckkraft. Die Verwendung von `rgb()` gibt Ihnen ein wenig mehr Kontrolle und Flexibilität, da wir den Füll- und Linienstil einzeln festlegen können.

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

Es gibt mehrere Eigenschaften, die uns ermöglichen, Linien zu stylen.

- [`lineWidth = value`](/de/docs/Web/API/CanvasRenderingContext2D/lineWidth)
  - : Setzt die Breite der in Zukunft gezeichneten Linien.
- [`lineCap = type`](/de/docs/Web/API/CanvasRenderingContext2D/lineCap)
  - : Bestimmt das Aussehen der Enden von Linien.
- [`lineJoin = type`](/de/docs/Web/API/CanvasRenderingContext2D/lineJoin)
  - : Bestimmt das Aussehen der "Ecken", in denen sich Linien treffen.
- [`miterLimit = value`](/de/docs/Web/API/CanvasRenderingContext2D/miterLimit)
  - : Legt ein Limit für den Verbindungspunkt fest, wenn zwei Linien in einem scharfen Winkel zusammentreffen, um zu kontrollieren, wie dick der Schnittpunkt wird.
- [`getLineDash()`](/de/docs/Web/API/CanvasRenderingContext2D/getLineDash)
  - : Gibt das aktuelle Strichmuster-Array mit einer geraden Anzahl von nicht-negativen Zahlen zurück.
- [`setLineDash(segments)`](/de/docs/Web/API/CanvasRenderingContext2D/setLineDash)
  - : Legt das aktuelle Strichmuster fest.
- [`lineDashOffset = value`](/de/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)
  - : Gibt an, wo ein Strichmuster auf einer Linie beginnen soll.

Sie werden ein besseres Verständnis davon bekommen, was diese Eigenschaften bewirken, indem Sie sich die folgenden Beispiele ansehen.

### Ein `lineWidth`-Beispiel

Diese Eigenschaft legt die aktuelle Linienstärke fest. Die Werte müssen positive Zahlen sein. Standardmäßig ist dieser Wert auf 1.0 Einheiten eingestellt.

Die Linienstärke ist die Dicke des Strichs, das in der Mitte des gegebenen Pfads gezogen wird. Mit anderen Worten, der Bereich, der gezeichnet wird, erstreckt sich auf halbem Wege der Linienstärke zu beiden Seiten des Pfads. Da Canvas-Koordinaten keine direkten Pixelreferenzen sind, muss besondere Vorsicht walten, um klare horizontale und vertikale Linien zu erhalten.

Im folgenden Beispiel werden 10 gerade Linien mit zunehmenden Linienbreiten gezeichnet. Die Linie ganz links ist 1.0 Einheiten breit. Allerdings erscheinen die ganz links und alle ungeradzahligen Linienstärken nicht klar, wegen der Positionierung des Pfads.

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
> Wenn Sie sich über die Linien, die nahe dem Rand grau anstelle von schwarz erscheinen, wundern, überprüfen Sie den Abschnitt [Verschwommene Kanten sehen?](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#seeing_blurry_edges) im vorherigen Kapitel.

### Ein `lineCap`-Beispiel

Die Eigenschaft `lineCap` bestimmt, wie die Endpunkte jeder Linie gezeichnet werden. Es gibt drei mögliche Werte für diese Eigenschaft: `butt`, `round` und `square`. Standardmäßig ist diese Eigenschaft auf `butt` gesetzt:

- `butt`
  - : Die Enden von Linien werden an den Endpunkten gekappt.
- `round`
  - : Die Enden von Linien sind abgerundet.
- `square`
  - : Die Enden von Linien sind quadratisch durch Hinzufügen eines Kästchens mit gleicher Breite und halber Höhe der Linienstärke.

Nur Start- und Endpunkte eines Pfads werden beeinflusst: wenn ein Pfad mit `closePath()` geschlossen wird, gibt es keine Start- und Endpunkte; stattdessen werden alle Endpunkte im Pfad mit ihren vorherigen und nachfolgenden Segmenten unter Verwendung der aktuellen Einstellung des `lineJoin`-Stils verbunden.

In diesem Beispiel zeichnen wir drei Linien, jede mit einem anderen Wert für die Eigenschaft `lineCap`. Ich habe auch zwei Hilfslinien hinzugefügt, um die genauen Unterschiede zwischen den dreien zu sehen. Jede dieser Linien beginnt und endet genau auf diesen Hilfslinien.

Die Linie links verwendet die Standardoption `butt`. Sie werden bemerken, dass sie vollständig bündig mit den Hilfslinien gezeichnet ist. Die zweite ist so eingestellt, dass die Option `round` verwendet wird. Dies fügt ein Halbkreis dem Ende hinzu, der einen Radius von der halben Breite der Linie hat. Die Linie rechts verwendet die Option `square`. Dies fügt ein Kästchen mit der gleichen Breite und halber Höhe der Linienstärke hinzu.

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

Die Eigenschaft `lineJoin` bestimmt, wie zwei verbundene Segmente (von Linien, Bögen oder Kurven) mit nicht-null Längen in einer Form zusammengefügt werden (entartete Segmente mit null Längen, deren spezifizierte Endpunkte und Kontrollpunkte genau an derselben Position liegen, werden übersprungen).

Es gibt drei mögliche Werte für diese Eigenschaft: `round`, `bevel` und `miter`. Standardmäßig ist diese Eigenschaft auf `miter` gesetzt. Beachten Sie, dass die Einstellung von `lineJoin` keinen Einfluss hat, wenn die beiden verbundenen Segmente die gleiche Richtung haben, da in diesem Fall keine Verbindungsfläche hinzugefügt wird:

- `round`
  - : Rundet die Ecken einer Form ab durch Füllen eines zusätzlichen Sektors einer Scheibe, die in ihrem gemeinsamen Endpunkt verknüpfter Segmente zentriert ist. Der Radius für diese abgerundeten Ecken entspricht der halben Linienstärke.
- `bevel`
  - : Füllt einen zusätzlichen dreieckigen Bereich zwischen dem gemeinsamen Endpunkt der verbundenen Segmente, und den separaten äußeren rechtwinkligen Ecken jedes Segments.
- `miter`
  - : Verbundene Segmente werden durch Verlängern ihrer Außenseiten verbunden, um an einem einzigen Punkt zu verbinden, mit dem Effekt, dass ein zusätzlicher rautenförmiger Bereich gefüllt wird. Diese Einstellung wird durch die Eigenschaft `miterLimit` beeinflusst, die im Folgenden erläutert wird.

Das folgende Beispiel zeigt drei verschiedene Pfade, die jede der drei `lineJoin`-Eigenschafteinstellungen demonstrieren; das gezeigte Ergebnis ist oben zu sehen.

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

### Ein Demo der `miterLimit`-Eigenschaft

Wie Sie im vorherigen Beispiel gesehen haben, werden beim Verbinden zweier Linien mit der `miter`-Option die Außenseiten der beiden aneinander grenzenden Linien bis zu dem Punkt verlängert, an dem sie sich treffen. Bei Linien, die große Winkel zueinander haben, ist dieser Punkt nicht weit vom inneren Verbindungspunkt entfernt. jedoch, wenn sich der Winkel zwischen jeder Linie verringert, steigt der Abstand (Gehrungs-Länge) zwischen diesen Punkten exponentiell.

Die Eigenschaft `miterLimit` bestimmt, wie weit der äußere Verbindungspunkt vom inneren Verbindungspunkt entfernt liegen kann. Wenn zwei Linien diesen Wert überschreiten, wird stattdessen ein Abschnittsverbund gezeichnet. Beachten Sie, dass die maximale Gehrungslänge das Produkt der Linienstärke im aktuellen Koordinatensystem ist, multipliziert mit dem Wert dieser `miterLimit`-Eigenschaft (dessen Standardwert 10.0 im HTML {{HTMLElement("canvas")}} ist). Daher kann das `miterLimit` unabhängig von der aktuellen Anzeigeskalierung oder jeglicher affinen Transformierungen von Pfaden gesetzt werden: es beeinflusst nur die tatsächlich gerenderte Form der Linienkanten.

Genauer gesagt, ist das Gehrungslimit das maximal erlaubte Verhältnis der Verlägerungslänge (im HTML-Canvas, gemessen zwischen der äußeren Ecke der verbundenen Kanten der Linie und dem gemeinsamen Endpunkt der verbundenen Segmente, die im Pfad angegeben sind) zur halben Linienstärke. Es kann äquivalent als das maximal erlaubte Verhältnis des Abstands zwischen den inneren und äußeren Punkten der Verbindung von Kanten definiert werden, zur gesamten Linienstärke. Dann ist es gleich der Kosekante des halben minimalen Innenwinkels der verbundenen Segmente, unterhalb dessen keine Gehrungs-Verbindung gerendert wird, sondern nur eine Abschnittsverbindung:

- `miterLimit` = **max** `miterLength` / `lineWidth` = 1 / **sin** ( **min** _θ_ / 2 )
- Das Standardmiterlimit von 10.0 wird alle Gehrungsverbindungen für spitze Winkel unter etwa 11 Grad entfernen.
- Ein Miterlimit gleich √2 ≈ 1,4142136 (aufgerundet) wird alle Gehrungsverbindungen für alle spitzen Winkel entfernen, Gehrungsverbindungen nur für stumpfe oder rechte Winkel beibehalten.
- Ein Miterlimit gleich 1.0 ist gültig, wird aber alle Gehrungsverbindungen deaktivieren.
- Werte unter 1.0 sind für das Miterlimit ungültig.

Hier ist ein kleines Demonstrationsbeispiel, in dem Sie das `miterLimit` dynamisch einstellen und sehen können, wie sich die Formen auf dem Canvas verändern. Die blauen Linien zeigen, wo die Start- und Endpunkte für jede der Linien im Zickzack-Muster sind.

Wenn Sie einen `miterLimit` Wert unter 4.2 in diesem Beispiel spezifizieren, wird keins der sichtbaren Ecken mit einer Gehrungsverlängerung, sondern nur mit einem kleinen Schnittteil nahe der blauen Linien verbunden; mit einem `miterLimit` über 10, sollten die meisten Ecken in diesem Beispiel mit einer Gehrung weit weg von den blauen Linien verbunden werden, und dessen Höhe sich zwischen den Ecken von links nach rechts verringert, weil sie sich mit wachsenden Winkeln verbinden; bei Zwischenwerten, werden die Ecken auf der linken Seite nur mit einem Schnittteil nahe den blauen Linien verbunden, und die Ecken auf der rechten Seite mit einer Gehrungs-Verlängerung (ebenfalls mit einer sich verringernden Höhe).

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

### Verwenden von Linienmustern

Die Methode `setLineDash` und die Eigenschaft `lineDashOffset` spezifizieren das Strichmuster für Linien. Die Methode `setLineDash` akzeptiert eine Liste von Zahlen, die Abstände zum abwechselnden Zeichnen einer Linie und einer Lücke angibt, und die Eigenschaft `lineDashOffset` setzt einen Offset, wo das Muster beginnen soll.

In diesem Beispiel erstellen wir einen "marching ants"-Effekt. Es ist eine Animationstechnik, die oft in Auswahlwerkzeugen von Computer-Grafikprogrammen gefunden wird. Es hilft dem Benutzer, die Auswahlgrenze vom Bildhintergrund zu unterscheiden, indem sie die Grenze animiert. In einem späteren Teil dieses Tutorials können Sie lernen, wie Sie dies und andere [einfache Animationen](/de/docs/Web/API/Canvas_API/Tutorial/Basic_animations) machen.

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

Genau wie in einem normalen Zeichenprogramm können wir Formen mit linearen, radialen und konischen Verläufen füllen und umfahren. Wir erstellen ein [`CanvasGradient`](/de/docs/Web/API/CanvasGradient)-Objekt unter Verwendung einer der folgenden Methoden. Wir können dann dieses Objekt den Eigenschaften `fillStyle` oder `strokeStyle` zuweisen.

- [`createLinearGradient(x1, y1, x2, y2)`](/de/docs/Web/API/CanvasRenderingContext2D/createLinearGradient)
  - : Erstellt ein lineares Gradientenobjekt mit einem Startpunkt von (`x1`, `y1`) und einem Endpunkt von (`x2`, `y2`).
- [`createRadialGradient(x1, y1, r1, x2, y2, r2)`](/de/docs/Web/API/CanvasRenderingContext2D/createRadialGradient)
  - : Erstellt einen radialen Verlauf. Die Parameter repräsentieren zwei Kreise, einen mit seinem Zentrum bei (`x1`, `y1`) und einem Radius von `r1`, und der andere mit seinem Zentrum bei (`x2`, `y2`) mit einem Radius von `r2`.
- [`createConicGradient(angle, x, y)`](/de/docs/Web/API/CanvasRenderingContext2D/createConicGradient)
  - : Erstellt ein konisches Gradientenobjekt mit einem Startwinkel von `angle` in Radiant, an der Position (`x`, `y`).

Zum Beispiel:

```js
const lineargradient = ctx.createLinearGradient(0, 0, 150, 150);
const radialgradient = ctx.createRadialGradient(75, 75, 0, 75, 75, 100);
```

Sobald wir ein `CanvasGradient`-Objekt erstellt haben, können wir Farben hinzufügen, indem wir die Methode `addColorStop()` verwenden.

- [`gradient.addColorStop(position, color)`](/de/docs/Web/API/CanvasGradient/addColorStop)
  - : Erstellt einen neuen Farbwert auf dem `gradient` Objekt. Die `position` ist eine Zahl zwischen 0.0 und 1.0 und definiert die relative Position der Farbe im Gradienten, und das `color` Argument muss ein String sein, der eine CSS {{cssxref("&lt;color&gt;")}} darstellt, die die Farbe angibt, die der Verlauf bei diesem Offset in den Übergang erreichen soll.

Sie können so viele Farben zu einem Gradienten hinzufügen, wie Sie benötigen. Unten ist ein sehr einfacher linearer Verlauf von Weiß bis Schwarz.

```js
const lineargradient = ctx.createLinearGradient(0, 0, 150, 150);
lineargradient.addColorStop(0, "white");
lineargradient.addColorStop(1, "black");
```

### Ein `createLinearGradient`-Beispiel

In diesem Beispiel erstellen wir zwei unterschiedliche Verläufe. Wie Sie hier sehen, können sowohl die Eigenschaften `strokeStyle` als auch `fillStyle` ein `canvasGradient`-Objekt als gültigen Input akzeptieren.

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

Der erste ist ein Hintergrundverlauf. Wie Sie sehen, haben wir zwei Farben an derselben Position zugewiesen. Sie tun dies, um sehr scharfe Farbübergänge zu machen - in diesem Fall von Weiß zu Grün. Normalerweise spielt es keine Rolle, in welcher Reihenfolge Sie die Farbwertzuweisungen definieren, aber in diesem speziellen Fall tut es das erheblich. Wenn Sie die Zuweisungen in der Reihenfolge halten, in der Sie sie erscheinen lassen wollen, wird dies kein Problem sein.

Im zweiten Verlauf haben wir die Startfarbe (an Position 0.0) nicht zugewiesen, da dies nicht strikt notwendig war, weil sie die Farbe der nächsten Farbwertzuweisung automatisch annehmen wird. Daher macht die Zuweisung der schwarzen Farbe an Position 0.5 den Verlauf, vom Anfang bis zu diesem Punkt, automatisch schwarz.

{{EmbedLiveSample("A_createLinearGradient_example", "", "160")}}

### Ein `createRadialGradient`-Beispiel

In diesem Beispiel definieren wir vier unterschiedliche radiale Verläufe. Da wir Kontrolle über den Start- und den Schlusspunkt des Verlaufs haben, können wir komplexere Effekte erzielen als bei den "klassischen" radialen Verläufen, die wir zum Beispiel in Photoshop sehen (das heißt, ein Verlauf mit einem einzelnen Startpunkt, bei dem sich der Verlauf in einer kreisförmigen Form nach außen ausdehnt).

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

In diesem Fall haben wir den Startpunkt leicht vom Endpunkt versetzt, um einen sphärischen 3D-Effekt zu erzielen. Es ist am besten, zu vermeiden, dass sich die inneren und äußeren Kreise überschneiden, da dies seltsame und schwer vorhersehbare Effekte zur Folge hat.

Der letzte Farbwert in jedem der vier Verläufe verwendet eine voll transparente Farbe. Wenn Sie einen schönen Übergang von diesem zum vorherigen Farbwert wünschen, sollten beide Farben gleich sein. Dies ist aus dem Code nicht sehr offensichtlich, da er zwei verschiedene CSS Farbmethoden als Demonstration verwendet, aber im ersten Verlauf ist `#019F62 = rgb(1 159 98 / 100%)`.

{{EmbedLiveSample("A_createRadialGradient_example", "", "160")}}

### Ein `createConicGradient`-Beispiel

In diesem Beispiel definieren wir zwei verschiedene konische Verläufe. Ein konischer Verlauf unterscheidet sich von einem radialen Verlauf, da er sich nicht in Form von Kreisen, sondern kreisförmig um einen Punkt erstreckt.

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

Der erste Verlauf ist im Zentrum des ersten Rechtecks positioniert und bewegt einen grünen Farbwert am Anfang zu einem weißen am Ende. Der Winkel beginnt bei 2 Radiant, was bemerkbar ist durch die Anfangs-/Endlinie, die nach Südosten zeigt.

Der zweite Verlauf ist ebenfalls im Zentrum des zweiten Rechtecks positioniert. Dieser hat mehrere Farbwerte, die bei jedem Viertel des Rotationswegs von Schwarz zu Weiß wechseln. Dies ergibt den karierten Effekt.

{{EmbedLiveSample("A_createConicGradient_example", "", "160")}}

## Muster

In einem der Beispiele auf der vorherigen Seite verwendeten wir eine Reihe von Schleifen, um ein Bildmuster zu erzeugen. Es gibt jedoch eine viel einfachere Methode: die `createPattern()`-Methode.

- [`createPattern(image, type)`](/de/docs/Web/API/CanvasRenderingContext2D/createPattern)
  - : Erstellt und gibt ein neues Canvas-Musterobjekt zurück. `image` ist die Quelle des Bildes (das heißt, ein [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement), ein [`SVGImageElement`](/de/docs/Web/API/SVGImageElement), ein weiteres [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) oder ein [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas), ein [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) oder ein [`VideoFrame`](/de/docs/Web/API/VideoFrame), oder ein [`ImageBitmap`](/de/docs/Web/API/ImageBitmap)). `type` ist ein String, der angibt, wie das Bild verwendet wird.

Der Typ gibt an, wie das Bild verwendet werden soll, um das Muster zu erzeugen, und muss einer der folgenden String-Werte sein:

- `repeat`
  - : Kachelt das Bild in sowohl vertikaler als auch horizontaler Richtung.
- `repeat-x`
  - : Kachelt das Bild horizontal, aber nicht vertikal.
- `repeat-y`
  - : Kachelt das Bild vertikal, aber nicht horizontal.
- `no-repeat`
  - : Kachelt das Bild nicht. Es wird nur einmal verwendet.

Wir verwenden diese Methode, um ein [`CanvasPattern`](/de/docs/Web/API/CanvasPattern)-Objekt zu erzeugen, das den Gradientenmethoden, die wir oben gesehen haben, sehr ähnlich ist. Sobald wir ein Muster erstellt haben, können wir es den Eigenschaften `fillStyle` oder `strokeStyle` zuweisen. Zum Beispiel:

```js
const img = new Image();
img.src = "some-image.png";
const pattern = ctx.createPattern(img, "repeat");
```

> [!NOTE]
> Wie bei der `drawImage()`-Methode müssen Sie sicherstellen, dass das Bild, das Sie verwenden, geladen ist, bevor Sie diese Methode aufrufen, oder das Muster wird möglicherweise nicht korrekt gezeichnet.

### Ein `createPattern`-Beispiel

In diesem letzten Beispiel erstellen wir ein Muster, das der `fillStyle`-Eigenschaft zugewiesen wird. Das einzig Erwähnenswerte ist die Verwendung des `onload`-Handlers des Bildes. Dies ist, um sicherzustellen, dass das Bild geladen ist, bevor es dem Muster zugewiesen wird.

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
  - : Gibt die horizontale Distanz an, die der Schatten vom Objekt aus erstrecken sollte. Dieser Wert wird nicht von der Transformationsmatrix beeinflusst. Der Standardwert ist 0.
- [`shadowOffsetY = float`](/de/docs/Web/API/CanvasRenderingContext2D/shadowOffsetY)
  - : Gibt die vertikale Distanz an, die der Schatten vom Objekt aus erstrecken sollte. Dieser Wert wird nicht von der Transformationsmatrix beeinflusst. Der Standardwert ist 0.
- [`shadowBlur = float`](/de/docs/Web/API/CanvasRenderingContext2D/shadowBlur)
  - : Gibt die Größe des Unschärfeeffekts an; dieser Wert entspricht nicht einer Anzahl von Pixeln und wird nicht von der aktuellen Transformationsmatrix beeinflusst. Der Standardwert ist 0.
- [`shadowColor = color`](/de/docs/Web/API/CanvasRenderingContext2D/shadowColor)
  - : Ein standardmäßiger CSS-Farbwert, der die Farbe des Schatteneffekts angibt; standardmäßig ist er vollständig transparenter Schwarz.

Die Eigenschaften `shadowOffsetX` und `shadowOffsetY` geben an, wie weit der Schatten in den X- und Y-Richtungen vom Objekt aus erstrecken soll; diese Werte werden nicht von der aktuellen Transformationsmatrix beeinflusst. Verwenden Sie negative Werte, um den Schatten nach oben oder links und positive Werte, um den Schatten nach unten oder rechts erstrecken zu lassen. Diese sind standardmäßig auf 0 gesetzt.

Die Eigenschaft `shadowBlur` gibt die Größe des Unschärfeeffekts an; dieser Wert entspricht nicht einer Anzahl von Pixeln und wird nicht von der aktuellen Transformationsmatrix beeinflusst. Der Standardwert ist 0.

Die Eigenschaft `shadowColor` ist ein standardmäßiger CSS-Farbwert, der die Farbe des Schatteneffekts angibt; standardmäßig ist er vollständig transparenter Schwarz.

> [!NOTE]
> Schatten werden nur für `source-over` [Kompositionsoperationen](/de/docs/Web/API/Canvas_API/Tutorial/Compositing) gezeichnet.

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

Wir werden uns die Eigenschaft `font` und die Methode `fillText` im nächsten Kapitel über das [Zeichnen von Text](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text) ansehen.

## Füllregeln für Canvas

Bei Verwendung von `fill` (oder [`clip`](/de/docs/Web/API/CanvasRenderingContext2D/clip) und [`isPointInPath`](/de/docs/Web/API/CanvasRenderingContext2D/isPointInPath)) können Sie optional einen Algorithmus für die Füllregel angeben, mit dem bestimmt wird, ob ein Punkt innerhalb oder außerhalb eines Pfads liegt und daher gefüllt wird oder nicht. Dies ist nützlich, wenn sich ein Pfad selbst schneidet oder geschachtelt ist.

Zwei Werte sind möglich:

- `nonzero`
  - : Die [Nonzero-Winding-Rule](https://de.wikipedia.org/wiki/Nonzero-rule), die die Standardregel ist.
- `evenodd`
  - : Die [gerad-ungerad Winding-Rule](https://de.wikipedia.org/wiki/Even%E2%80%93odd_rule).

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
