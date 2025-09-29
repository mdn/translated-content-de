---
title: Anwenden von Stil- und Farbeffekten
slug: Web/API/Canvas_API/Tutorial/Applying_styles_and_colors
l10n:
  sourceCommit: fd2acb039cc1caee4af10f76ffb839c8da7da5b8
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Drawing_shapes", "Web/API/Canvas_API/Tutorial/Drawing_text")}}

Im Kapitel über das [Zeichnen von Formen](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes) haben wir nur die Standardlinien- und Füllstile verwendet. Hier werden wir die Canvas-Optionen untersuchen, die uns zur Verfügung stehen, um unsere Zeichnungen etwas attraktiver zu gestalten. Sie werden lernen, wie Sie Ihren Zeichnungen verschiedene Farben, Linienstile, Verläufe, Muster und Schatten hinzufügen können.

> [!NOTE]
> Canvas-Inhalte sind für Bildschirmleser nicht zugänglich. Wenn das Canvas rein dekorativ ist, fügen Sie dem `<canvas>`-Eröffnungstag `role="presentation"` hinzu. Andernfalls fügen Sie beschreibenden Text als Wert des [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)-Attributs direkt zum Canvas-Element selbst oder platzieren Sie Fallback-Inhalte innerhalb des öffnenden und schließenden Canvas-Tags. Canvas-Inhalte sind nicht Teil des DOM, aber verschachtelte Fallback-Inhalte schon.

## Farben

Bisher haben wir nur Methoden des Zeichenkontexts gesehen. Wenn wir Formen Farben zuweisen möchten, gibt es zwei wichtige Eigenschaften, die wir verwenden können: `fillStyle` und `strokeStyle`.

- [`fillStyle = color`](/de/docs/Web/API/CanvasRenderingContext2D/fillStyle)
  - : Legt den Stil fest, der beim Füllen von Formen verwendet wird.
- [`strokeStyle = color`](/de/docs/Web/API/CanvasRenderingContext2D/strokeStyle)
  - : Legt den Stil für die Umrisse von Formen fest.

`color` ist ein String, der ein CSS {{cssxref("&lt;color&gt;")}}, ein Verlaufsobjekt oder ein Musterobjekt darstellt. Wir werden später auf Verlaufs- und Musterobjekte eingehen. Standardmäßig sind die Strich- und Füllfarben auf Schwarz (CSS-Farbwert `#000000`) eingestellt.

> [!NOTE]
> Wenn Sie die Eigenschaft `strokeStyle` und/oder `fillStyle` festlegen, wird der neue Wert zum Standard für alle danach gezeichneten Formen. Für jede Form, die Sie in einer anderen Farbe haben möchten, müssen Sie die Eigenschaft `fillStyle` oder `strokeStyle` neu zuweisen.

Die gültigen Strings, die Sie eingeben können, sollten entsprechend der Spezifikation CSS-{{cssxref("&lt;color&gt;")}}-Werte sein. Jedes der folgenden Beispiele beschreibt die gleiche Farbe.

```js
// these all set the fillStyle to 'orange'

ctx.fillStyle = "orange";
ctx.fillStyle = "#FFA500";
ctx.fillStyle = "rgb(255 165 0)";
ctx.fillStyle = "rgb(255 165 0 / 100%)";
```

### Ein `fillStyle`-Beispiel

In diesem Beispiel verwenden wir erneut zwei `for`-Schleifen, um ein Gitter mit Rechtecken zu zeichnen, die jeweils in einer anderen Farbe sind. Das resultierende Bild sollte ungefähr wie der Screenshot aussehen. Es passiert hier nichts allzu Spektakuläres. Wir verwenden die zwei Variablen `i` und `j`, um eine eindeutige RGB-Farbe für jedes Quadrat zu generieren, und ändern nur die roten und grünen Werte. Der blaue Kanal hat einen festen Wert. Durch die Modifikation der Kanäle können Sie alle Arten von Paletten erzeugen. Durch Erhöhen der Schritte können Sie etwas erreichen, das wie die Farbpaletten von Photoshop aussieht.

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

Dieses Beispiel ist dem obigen ähnlich, aber es verwendet die Eigenschaft `strokeStyle`, um die Farben der Umrisse der Formen zu ändern. Wir verwenden die Methode `arc()`, um Kreise anstelle von Quadraten zu zeichnen.

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

Zusätzlich zum Zeichnen von opaken Formen auf das Canvas können wir auch halbtransparente (oder durchscheinende) Formen zeichnen. Dies geschieht entweder durch Festlegen der Eigenschaft `globalAlpha` oder durch Zuweisen einer halbtransparenten Farbe zu den Strich- und/oder Füllstilen.

- [`globalAlpha = transparencyValue`](/de/docs/Web/API/CanvasRenderingContext2D/globalAlpha)
  - : Wendet den angegebenen Transparenzwert auf alle zukünftigen Formen an, die auf das Canvas gezeichnet werden. Der Wert muss zwischen 0,0 (vollständig transparent) und 1,0 (vollständig opak) liegen. Dieser Wert ist standardmäßig 1,0 (vollständig opak).

Die Eigenschaft `globalAlpha` kann nützlich sein, wenn Sie viele Formen auf das Canvas mit ähnlicher Transparenz zeichnen möchten. Andernfalls ist es jedoch im Allgemeinen nützlicher, die Transparenz für einzelne Formen festzulegen, wenn Sie deren Farben einstellen.

Da die Eigenschaften `strokeStyle` und `fillStyle` CSS-RGB-Farbwerte akzeptieren, können wir die folgende Notation verwenden, um ihnen eine transparente Farbe zuzuweisen.

```js
// Assigning transparent colors to stroke and fill style

ctx.strokeStyle = "rgb(255 0 0 / 50%)";
ctx.fillStyle = "rgb(255 0 0 / 50%)";
```

Die Funktion `rgb()` hat einen optionalen zusätzlichen Parameter. Der letzte Parameter setzt den Transparenzwert dieser bestimmten Farbe. Der gültige Bereich wird entweder als Prozentsatz zwischen `0%` (vollständig transparent) und `100%` (vollständig opak) oder als Zahl zwischen `0.0` (entspricht `0%`) und `1.0` (entspricht `100%`) angegeben.

### Ein `globalAlpha`-Beispiel

In diesem Beispiel zeichnen wir einen Hintergrund aus vier unterschiedlich farbigen Quadraten. Darüber werden wir eine Reihe von halbtransparenten Kreisen zeichnen. Die Eigenschaft `globalAlpha` wird auf `0.2` gesetzt, die für alle Formen von diesem Punkt an verwendet wird. Jeder Schritt in der `for`-Schleife zeichnet eine Reihe von Kreisen mit einem zunehmenden Radius. Das Endergebnis ist ein radialer Verlauf. Indem immer mehr Kreise übereinander gelegt werden, reduzieren wir effektiv die Transparenz der bereits gezeichneten Kreise. Durch Erhöhung der Schrittanzahl und das Zeichnen weiterer Kreise würde der Hintergrund vollständig aus dem Zentrum des Bildes verschwinden.

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

### Ein Beispiel mit `rgb()` mit Alphatransparenz

In diesem zweiten Beispiel machen wir etwas Ähnliches wie oben, aber anstatt Kreise übereinander zu zeichnen, habe ich kleine Rechtecke mit zunehmender Opazität gezeichnet. Die Verwendung von `rgb()` bietet Ihnen ein wenig mehr Kontrolle und Flexibilität, da wir den Füll- und Strichstil individuell festlegen können.

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
  - : Legt die Breite der in Zukunft gezeichneten Linien fest.
- [`lineCap = type`](/de/docs/Web/API/CanvasRenderingContext2D/lineCap)
  - : Bestimmt das Aussehen der Enden von Linien.
- [`lineJoin = type`](/de/docs/Web/API/CanvasRenderingContext2D/lineJoin)
  - : Legt das Aussehen der "Ecken" fest, an denen Linien zusammentreffen.
- [`miterLimit = value`](/de/docs/Web/API/CanvasRenderingContext2D/miterLimit)
  - : Legt ein Limit für das Miter fest, wenn zwei Linien in einem scharfen Winkel zusammentreffen, sodass Sie steuern können, wie dick die Verbindung wird.
- [`getLineDash()`](/de/docs/Web/API/CanvasRenderingContext2D/getLineDash)
  - : Gibt das aktuelle Linen-Dash-Musterarray zurück, das eine gerade Anzahl nicht-negativer Zahlen enthält.
- [`setLineDash(segments)`](/de/docs/Web/API/CanvasRenderingContext2D/setLineDash)
  - : Legt das aktuelle Linen-Dash-Muster fest.
- [`lineDashOffset = value`](/de/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)
  - : Gibt an, wo ein Dash-Array auf einer Linie beginnt.

Sie werden ein besseres Verständnis dafür bekommen, was diese tun, indem Sie sich die folgenden Beispiele ansehen.

### Ein `lineWidth`-Beispiel

Diese Eigenschaft legt die aktuelle Linienstärke fest. Werte müssen positive Zahlen sein. Standardmäßig ist dieser Wert auf 1,0 Einheiten eingestellt.

Die Linienbreite ist die Dicke des Strichs, die auf dem gegebenen Pfad zentriert ist. Mit anderen Worten erstreckt sich der gezeichnete Bereich um die Hälfte der Linienbreite auf beiden Seiten des Pfades. Da Canvas-Koordinaten nicht direkt auf Pixel verweisen, muss besondere Vorsicht walten, um klare horizontale und vertikale Linien zu erhalten.

Im Beispiel unten werden 10 gerade Linien mit zunehmender Linienbreite gezeichnet. Die Linie ganz links ist 1,0 Einheiten breit. Allerdings erscheinen die ganz links und alle anderen ungeraden Integer-breiten Linien nicht scharf, aufgrund der Positionierung des Pfades.

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
> Wenn Sie sich über die Linien wundern, die in der Nähe der Kante statt Schwarz grau erscheinen, sehen Sie sich den Abschnitt [Verschwommene Kanten sehen?](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#seeing_blurry_edges) im vorherigen Kapitel an.

### Ein `lineCap`-Beispiel

Die Eigenschaft `lineCap` bestimmt, wie die Endpunkte jeder Linie gezeichnet werden. Es gibt drei mögliche Werte für diese Eigenschaft: `butt`, `round` und `square`. Standardmäßig ist diese Eigenschaft auf `butt` eingestellt:

- `butt`
  - : Die Enden von Linien werden an den Endpunkten abgekappt.
- `round`
  - : Die Enden von Linien sind gerundet.
- `square`
  - : Die Enden von Linien werden durch Hinzufügen eines Kästchens mit gleicher Breite und halber Höhe der Linienstärke abgekappt.

Es sind nur die Start- und Endendpunkte eines Pfades betroffen: Wenn ein Pfad mit `closePath()` geschlossen wird, gibt es keinen Start- und Endendpunkt; stattdessen werden alle Endpunkte im Pfad mithilfe der aktuellen Einstellung des `lineJoin`-Stils mit ihrem angehängten vorherigen und nächsten Segment verbunden.

In diesem Beispiel werden wir drei Linien zeichnen, jede mit einem anderen Wert für die Eigenschaft `lineCap`. Ich habe auch zwei Leitlinien hinzugefügt, um die genauen Unterschiede zwischen den drei zu sehen. Jede dieser Linien beginnt und endet genau auf diesen Leitlinien.

Die Linie links verwendet die Standardoption `butt`. Sie werden bemerken, dass sie vollständig bündig mit den Leitlinien gezeichnet ist. Die zweite ist so eingestellt, dass sie die Option `round` verwendet. Dies fügt dem Ende einen Halbkreis hinzu, der einen Radius von der Hälfte der Linienbreite hat. Die Linie rechts verwendet die Option `square`. Dies fügt ein Kästchen mit gleicher Breite und halber Höhe der Linienstärke hinzu.

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

Die Eigenschaft `lineJoin` bestimmt, wie zwei verbindende Segmente (von Linien, Bögen oder Kurven) mit nicht-null-Längen in einer Form verbunden werden (degenerierte Segmente mit Null-Längen, deren angegebene Endpunkte und Kontrollpunkte genau an derselben Position liegen, werden übersprungen).

Es gibt drei mögliche Werte für diese Eigenschaft: `round`, `bevel` und `miter`. Standardmäßig ist diese Eigenschaft auf `miter` eingestellt. Beachten Sie, dass die Einstellung `lineJoin` keine Wirkung hat, wenn die beiden verbundenen Segmente die gleiche Richtung haben, da in diesem Fall kein Verbindungsbereich hinzugefügt wird:

- `round`
  - : Rundet die Ecken einer Form ab, indem ein zusätzlicher Kreissektors gefüllt wird, der am gemeinsamen Endpunkt der verbundenen Segmente zentriert ist. Der Radius für diese abgerundeten Ecken entspricht der Hälfte der Linienbreite.
- `bevel`
  - : Füllt einen zusätzlichen dreieckigen Bereich zwischen dem gemeinsamen Endpunkt der verbundenen Segmente und den separaten äußeren rechteckigen Ecken jedes Segments.
- `miter`
  - : Verbundene Segmente werden verbunden, indem ihre äußeren Kanten bis zu einem einzigen Punkt verlängert werden, mit der Wirkung, dass ein zusätzlicher rautenförmiger Bereich gefüllt wird. Diese Einstellung wird durch die Eigenschaft `miterLimit` beeinflusst, die unten erläutert wird.

Das folgende Beispiel zeichnet drei unterschiedliche Pfade, die jede dieser drei `lineJoin`-Eigenschaftseinstellungen demonstrieren; der Output wird oben angezeigt.

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

Wie Sie im vorherigen Beispiel gesehen haben, werden beim Verbinden von zwei Linien mit der `miter`-Option die äußeren Kanten der beiden verbündeten Linien bis zu dem Punkt verlängert, an dem sie sich treffen. Für Linien, die in großen Winkeln zueinander stehen, ist dieser Punkt nicht weit vom inneren Verbindungspunkt entfernt. Wenn jedoch die Winkel zwischen den Linien kleiner werden, nimmt der Abstand (Miterlänge) zwischen diesen Punkten exponentiell zu.

Die Eigenschaft `miterLimit` bestimmt, wie weit der äußere Verbindungspunkt vom inneren Verbindungspunkt entfernt werden kann. Wenn zwei Linien diesen Wert überschreiten, wird stattdessen ein Fasenverbindung gezeichnet. Beachten Sie, dass die maximale Miterlänge das Produkt der Linienbreite, gemessen im aktuellen Koordinatensystem, mit dem Wert dieser `miterLimit`-Eigenschaft (deren Standardwert in der HTML-{{HTMLElement("canvas")}} 10.0 beträgt) ist, sodass die `miterLimit` unabhängig von dem aktuellen Anzeigefaktor oder jeglichen affinen Transformationen von Pfaden gesetzt werden kann: sie beeinflusst nur die effektiv gerenderte Form der Kanten von Linien.

Genauer gesagt ist das Miterlimit das maximal erlaubte Verhältnis der Verlängerungslänge (im HTML-Canvas wird es zwischen der äußeren Ecke der verbundenen Kanten der Linie und dem gemeinsamen Endpunkt der im Pfad angegebenen Verbindungspunkte gemessen) zur halben Linienbreite. Es kann gleichwertig als das maximal zulässige Verhältnis der Entfernung zwischen dem inneren und äußeren Punkt der Verbindung von Kanten zur gesamten Linienbreite definiert werden. Es entspricht dann dem Kosekanten-Halbwert des minimalen Innenwinkels der Verbindungspunkte unterhalb dessen keine Miterverbindung gerendert wird, sondern nur eine Fasenverbindung:

- `miterLimit` = **max** `miterLength` / `lineWidth` = 1 / **sin** ( **min** _θ_ / 2 )
- Das Standard-Miterlimit von 10,0 entfernt alle Miters für scharfe Winkel unter etwa 11 Grad.
- Ein Miterlimit von √2 ≈ 1,4142136 (aufgerundet) entfernt die Miter für alle spitzen Winkel und behält Miterverbindungen nur für stumpfe oder rechte Winkel.
- Ein Miterlimit von 1,0 ist gültig, entfernt jedoch alle Miters.
- Werte unter 1,0 sind für das Miterlimit ungültig.

Hier ist eine kleine Demo, in der Sie `miterLimit` dynamisch festlegen können und sehen, wie sich dies auf die Formen auf dem Canvas auswirkt. Die blauen Linien zeigen, wo die Start- und Endpunkte für jede der Linien im Zick-Zack-Muster sind.

Wenn Sie in dieser Demo einen `miterLimit`-Wert unter 4,2 angeben, wird keine der sichtbaren Ecken mit einer Mitererweiterung verbunden, sondern nur mit einer kleinen Fase in der Nähe der blauen Linien; mit einem `miterLimit` über 10 sollten die meisten Ecken in dieser Demo mit einem Miter weit weg von den blauen Linien verbunden werden, dessen Höhe zwischen den Ecken von links nach rechts abnimmt, da sie mit wachsenden Winkeln verbunden sind; bei Zwischenwerten werden die Ecken auf der linken Seite nur mit einer Fase in der Nähe der blauen Linien verbunden, und die Ecken auf der rechten Seite mit einer Mitererweiterung (ebenfalls mit abnehmender Höhe).

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

### Verwendung von Liniendashes

Die Methode `setLineDash` und die Eigenschaft `lineDashOffset` spezifizieren das Dash-Muster für Linien. Die Methode `setLineDash` akzeptiert eine Liste von Zahlen, die Abstände zum abwechselnden Zeichnen einer Linie und einer Lücke angibt, und die Eigenschaft `lineDashOffset` setzt einen Versatz, bei dem das Muster beginnt.

In diesem Beispiel erstellen wir einen "marching ants"-Effekt. Es ist eine Animationstechnik, die häufig in Auswahlwerkzeugen von Computergraphikprogrammen zu finden ist. Sie hilft dem Benutzer, die Auswahlgrenze vom Bildhintergrund zu unterscheiden, indem sie die Grenze animiert. In einem späteren Teil dieses Tutorials können Sie lernen, wie Sie dies und andere [grundlegende Animationen](/de/docs/Web/API/Canvas_API/Tutorial/Basic_animations) durchführen.

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

Genau wie in einem normalen Zeichenprogramm können wir Formen mit linearen, radialen und konischen Verläufen füllen und umranden. Wir erstellen ein [`CanvasGradient`](/de/docs/Web/API/CanvasGradient)-Objekt, indem wir eine der folgenden Methoden verwenden. Wir können dieses Objekt dann den Eigenschaften `fillStyle` oder `strokeStyle` zuweisen.

- [`createLinearGradient(x1, y1, x2, y2)`](/de/docs/Web/API/CanvasRenderingContext2D/createLinearGradient)
  - : Erstellt ein lineares Verlaufsobjekt mit einem Startpunkt von (`x1`, `y1`) und einem Endpunkt von (`x2`, `y2`).
- [`createRadialGradient(x1, y1, r1, x2, y2, r2)`](/de/docs/Web/API/CanvasRenderingContext2D/createRadialGradient)
  - : Erstellt einen radialen Verlauf. Die Parameter repräsentieren zwei Kreise, einer mit seinem Zentrum bei (`x1`, `y1`) und einem Radius von `r1`, und der andere mit seinem Zentrum bei (`x2`, `y2`) mit einem Radius von `r2`.
- [`createConicGradient(angle, x, y)`](/de/docs/Web/API/CanvasRenderingContext2D/createConicGradient)
  - : Erstellt ein konisches Verlaufsobjekt mit einem Startwinkel von `angle` in Radianten an der Position (`x`, `y`).

Zum Beispiel:

```js
const lineargradient = ctx.createLinearGradient(0, 0, 150, 150);
const radialgradient = ctx.createRadialGradient(75, 75, 0, 75, 75, 100);
```

Sobald wir ein `CanvasGradient`-Objekt erstellt haben, können wir mithilfe der Methode `addColorStop()` Farben zuweisen.

- [`gradient.addColorStop(position, color)`](/de/docs/Web/API/CanvasGradient/addColorStop)
  - : Erstellt einen neuen Farbstop auf dem `gradient`-Objekt. Die `position` ist eine Zahl zwischen 0.0 und 1.0 und definiert die relative Position der Farbe im Verlauf, und das `color`-Argument muss ein String sein, der ein CSS {{cssxref("&lt;color&gt;")}} darstellt, der die Farbe angibt, die der Verlauf an diesem Offset in den Übergang erreichen soll.

Sie können einem Verlauf so viele Farbstopps hinzufügen, wie Sie benötigen. Unten ist ein sehr einfacher linearer Verlauf von Weiß zu Schwarz.

```js
const lineargradient = ctx.createLinearGradient(0, 0, 150, 150);
lineargradient.addColorStop(0, "white");
lineargradient.addColorStop(1, "black");
```

### Ein `createLinearGradient`-Beispiel

In diesem Beispiel erstellen wir zwei verschiedene Verläufe. Wie Sie hier sehen können, können sowohl die Eigenschaften `strokeStyle` als auch `fillStyle` ein `canvasGradient`-Objekt als gültigen Eingang akzeptieren.

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

Der erste ist ein Hintergrundverlauf. Wie Sie sehen können, haben wir zwei Farben an derselben Position zugewiesen. Sie tun dies, um sehr scharfe Farbübergänge zu erzeugen, in diesem Fall von Weiß zu Grün. Normalerweise spielt es keine Rolle, in welcher Reihenfolge Sie die Farbstopps definieren, aber in diesem speziellen Fall ist es bedeutend. Wenn Sie die Zuweisungen in der Reihenfolge belassen, in der Sie sie erscheinen lassen möchten, wird dies kein Problem darstellen.

Beim zweiten Verlauf haben wir die Startfarbe (an Position 0.0) nicht zugewiesen, da dies nicht unbedingt erforderlich war, da sie automatisch die Farbe des nächsten Farbstopps annimmt. Daher macht die Zuweisung der schwarzen Farbe an Position 0.5 den Verlauf automatisch von Anfang bis zu diesem Stopp schwarz.

{{EmbedLiveSample("A_createLinearGradient_example", "", "160")}}

### Ein `createRadialGradient`-Beispiel

In diesem Beispiel definieren wir vier verschiedene radiale Verläufe. Da wir über Anfangs- und Endpunkte des Verlaufs Kontrolle haben, können wir komplexere Effekte erzielen, als wir normalerweise in den "klassischen" radialen Verläufen sehen, wie sie beispielsweise in Photoshop verwendet werden (d.h. ein Verlauf mit einem einzigen Mittelpunkt, von dem aus der Verlauf in kreisförmiger Form expandiert).

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

In diesem Fall haben wir den Startpunkt leicht vom Endpunkt versetzt, um einen sphärischen 3D-Effekt zu erzielen. Es ist am besten zu vermeiden, dass sich die inneren und äußeren Kreise überlappen, da dies zu seltsamen Effekten führt, die schwer vorherzusagen sind.

Der letzte Farbverlauf in jedem der vier Verläufe verwendet eine vollständig transparente Farbe. Wenn Sie einen schönen Übergang von diesem zu dem vorherigen Farbverlauf haben möchten, sollten beide Farben gleich sein. Dies ist im Code nicht sehr offensichtlich, da es zwei verschiedene CSS-Farbmethoden als Demonstration verwendet, aber im ersten Verlauf `#019F62 = rgb(1 159 98 / 100%)`.

{{EmbedLiveSample("A_createRadialGradient_example", "", "160")}}

### Ein `createConicGradient`-Beispiel

In diesem Beispiel definieren wir zwei verschiedene konische Verläufe. Ein konischer Verlauf unterscheidet sich von einem radialen Verlauf dadurch, dass er sich nicht um Kreise, sondern um einen Punkt dreht.

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

Der erste Verlauf ist in der Mitte des ersten Rechtecks positioniert und bewegt einen grünen Farbverlaufstopp zu Beginn zu einem weißen am Ende. Der Winkel beginnt bei 2 Radianten, was erkennbar ist, da die Anfangs-/Endlinie nach Südosten zeigt.

Der zweite Verlauf ist ebenfalls in der Mitte des zweiten Rechtecks positioniert. Dieser hat mehrere Farbverläufe, die abwechselnd von Schwarz zu Weiß bei jedem Viertel der Rotation führen. Dies gibt uns den karierten Effekt.

{{EmbedLiveSample("A_createConicGradient_example", "", "160")}}

## Muster

In einem der Beispiele auf der vorherigen Seite haben wir eine Reihe von Schleifen verwendet, um ein Muster aus Bildern zu erstellen. Es gibt jedoch eine viel einfachere Methode: die Methode `createPattern()`.

- [`createPattern(image, type)`](/de/docs/Web/API/CanvasRenderingContext2D/createPattern)
  - : Erstellt und gibt ein neues Canvasmuster-Objekt zurück. `image` ist die Quelle des Bildes (d.h. ein [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement), ein [`SVGImageElement`](/de/docs/Web/API/SVGImageElement), ein anderes [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) oder ein [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas), ein [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) oder ein [`VideoFrame`](/de/docs/Web/API/VideoFrame), oder ein [`ImageBitmap`](/de/docs/Web/API/ImageBitmap)). `type` ist ein String, der angibt, wie das Bild verwendet werden soll.

Der Typ gibt an, wie das Bild verwendet werden soll, um das Muster zu erstellen, und muss einer der folgenden Stringwerte sein:

- `repeat`
  - : Kachelt das Bild in beiden vertikalen und horizontalen Richtungen.
- `repeat-x`
  - : Kachelt das Bild horizontal, aber nicht vertikal.
- `repeat-y`
  - : Kachelt das Bild vertikal, aber nicht horizontal.
- `no-repeat`
  - : Kachelt das Bild nicht. Es wird nur einmal verwendet.

Wir verwenden diese Methode, um ein [`CanvasPattern`](/de/docs/Web/API/CanvasPattern)-Objekt zu erstellen, das den Gradientmethoden oben sehr ähnlich ist. Sobald wir ein Muster erstellt haben, können wir es den Eigenschaften `fillStyle` oder `strokeStyle` zuweisen. Zum Beispiel:

```js
const img = new Image();
img.src = "some-image.png";
const pattern = ctx.createPattern(img, "repeat");
```

> [!NOTE]
> Wie bei der Methode `drawImage()` müssen Sie sicherstellen, dass das verwendete Bild geladen ist, bevor Sie diese Methode aufrufen, andernfalls wird das Muster möglicherweise nicht korrekt gezeichnet.

### Ein `createPattern`-Beispiel

In diesem letzten Beispiel erstellen wir ein Muster, das der Eigenschaft `fillStyle` zugewiesen wird. Das einzige, was erwähnenswert ist, ist die Verwendung des `onload`-Handlers des Bildes. Dies stellt sicher, dass das Bild geladen ist, bevor es dem Muster zugewiesen wird.

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
  - : Gibt die horizontale Entfernung an, die der Schatten vom Objekt ausreichen soll. Dieser Wert wird nicht von der Transformationsmatrix beeinflusst. Der Standardwert ist 0.
- [`shadowOffsetY = float`](/de/docs/Web/API/CanvasRenderingContext2D/shadowOffsetY)
  - : Gibt die vertikale Entfernung an, die der Schatten vom Objekt ausreichen soll. Dieser Wert wird nicht von der Transformationsmatrix beeinflusst. Der Standardwert ist 0.
- [`shadowBlur = float`](/de/docs/Web/API/CanvasRenderingContext2D/shadowBlur)
  - : Gibt die Größe des Weichzeichnungseffekts an; dieser Wert entspricht nicht einer Anzahl von Pixeln und wird von der aktuellen Transformationsmatrix nicht beeinflusst. Der Standardwert ist 0.
- [`shadowColor = color`](/de/docs/Web/API/CanvasRenderingContext2D/shadowColor)
  - : Ein Standard-CSS-Farbwert, der die Farbe des Schatteneffekts angibt; standardmäßig ist es vollständig transparentes Schwarz.

Die Eigenschaften `shadowOffsetX` und `shadowOffsetY` geben an, wie weit der Schatten vom Objekt in X- und Y-Richtung ausgedehnt werden soll; diese Werte werden von der aktuellen Transformationsmatrix nicht beeinflusst. Verwenden Sie negative Werte, um den Schatten nach oben oder nach links zu verschieben, und positive Werte, um den Schatten nach unten oder nach rechts zu verschieben. Beide sind standardmäßig auf 0 gesetzt.

Die Eigenschaft `shadowBlur` gibt die Größe des Weichzeichnungseffekts an; dieser Wert entspricht nicht einer Anzahl von Pixeln und wird von der aktuellen Transformationsmatrix nicht beeinflusst. Der Standardwert ist 0.

Die Eigenschaft `shadowColor` ist ein standardmäßiger CSS-Farbwert, der die Farbe des Schatteneffekts angibt; standardmäßig ist es vollständig transparentes Schwarz.

> [!NOTE]
> Schatten werden nur für `source-over` [Compositing-Operationen](/de/docs/Web/API/Canvas_API/Tutorial/Compositing) gezeichnet.

### Ein Beispiel für beschatteten Text

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

Wir werden uns die `font`-Eigenschaft und die Methode `fillText` im nächsten Kapitel über das [Zeichnen von Text](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text) ansehen.

## Regeln zur Canvasfüllung

Beim Verwenden von `fill` (oder [`clip`](/de/docs/Web/API/CanvasRenderingContext2D/clip) und [`isPointInPath`](/de/docs/Web/API/CanvasRenderingContext2D/isPointInPath)) können Sie optional einen Füllregel-Algorithmus angeben, um zu bestimmen, ob ein Punkt innerhalb oder außerhalb eines Pfades liegt und somit gefüllt wird oder nicht. Dies ist nützlich, wenn sich ein Pfad selbst schneidet oder verschachtelt ist.

Zwei Werte sind möglich:

- `nonzero`
  - : Die [Nonzero-Regel](https://en.wikipedia.org/wiki/Nonzero-rule), die Standardregel.
- `evenodd`
  - : Die [Even-odd-Regel](https://en.wikipedia.org/wiki/Even%E2%80%93odd_rule).

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
