---
title: Stil- und Farbgebung anwenden
slug: Web/API/Canvas_API/Tutorial/Applying_styles_and_colors
l10n:
  sourceCommit: b4d7275e992575d765bd1f504c28c0a64e1d0632
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Drawing_shapes", "Web/API/Canvas_API/Tutorial/Drawing_text")}}

Im Kapitel über das [Zeichnen von Formen](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes) hatten wir nur die Standardlinien- und Füllstile verwendet. Hier werden wir die Canvas-Optionen erkunden, die uns zur Verfügung stehen, um unsere Zeichnungen etwas attraktiver zu gestalten. Sie werden lernen, wie man verschiedene Farben, Linienstile, Verläufe, Muster und Schatten zu Ihren Zeichnungen hinzufügt.

> [!NOTE]
> Canvas-Inhalte sind für Screenreader nicht zugänglich. Wenn das Canvas rein dekorativ ist, fügen Sie `role="presentation"` in das öffnende `<canvas>`-Tag ein. Andernfalls fügen Sie einen beschreibenden Text als Wert des [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)-Attributs direkt in das Canvas-Element ein oder inkludieren Sie einen Fallback-Inhalt zwischen dem öffnenden und schließenden Canvas-Tag. Canvas-Inhalte sind nicht Teil des DOM, aber verschachtelte Fallback-Inhalte schon.

## Farben

Bisher haben wir nur Methoden des Zeichnungskontexts gesehen. Wenn wir Farben auf eine Form anwenden möchten, gibt es zwei wichtige Eigenschaften, die wir verwenden können: `fillStyle` und `strokeStyle`.

- [`fillStyle = color`](/de/docs/Web/API/CanvasRenderingContext2D/fillStyle)
  - : Legt den Stil fest, der zum Füllen von Formen verwendet wird.
- [`strokeStyle = color`](/de/docs/Web/API/CanvasRenderingContext2D/strokeStyle)
  - : Legt den Stil für die Umrisse von Formen fest.

`color` ist ein String, der einen CSS {{cssxref("&lt;color&gt;")}}, ein Verlauf-Objekt oder ein Muster-Objekt darstellt. Wir werden später auf Verlauf- und Muster-Objekte eingehen. Standardmäßig sind die Strich- und Füllfarbe auf Schwarz (CSS-Farbwert `#000000`) gesetzt.

> [!NOTE]
> Wenn Sie die `strokeStyle`- und/oder `fillStyle`-Eigenschaft festlegen, wird der neue Wert zum Standardwert für alle anschließend gezeichneten Formen. Für jede Form, die Sie in einer anderen Farbe wollen, müssen Sie die `fillStyle`- oder `strokeStyle`-Eigenschaft neu zuweisen.

Die gültigen Strings, die Sie eingeben können, sollten gemäß der Spezifikation CSS {{cssxref("&lt;color&gt;")}} Werte sein. Jedes der folgenden Beispiele beschreibt die gleiche Farbe.

```js
// these all set the fillStyle to 'orange'

ctx.fillStyle = "orange";
ctx.fillStyle = "#FFA500";
ctx.fillStyle = "rgb(255 165 0)";
ctx.fillStyle = "rgb(255 165 0 / 100%)";
```

### Ein Beispiel für `fillStyle`

In diesem Beispiel verwenden wir erneut zwei `for`-Schleifen, um ein Raster von Rechtecken zu zeichnen, jedes in einer anderen Farbe. Das resultierende Bild sollte in etwa wie der Screenshot aussehen. Hier passiert nichts allzu Spektakuläres. Wir verwenden die zwei Variablen `i` und `j`, um eine einzigartige RGB-Farbe für jedes Quadrat zu generieren und ändern nur die roten und grünen Werte. Der Blaukanal hat einen festen Wert. Durch das Modifizieren der Kanäle können Sie alle möglichen Paletten erzeugen. Durch Erhöhen der Schritte können Sie etwas erreichen, das den Farbpaletten von Photoshop ähnelt.

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

Das Resultat sieht wie folgt aus:

{{EmbedLiveSample("A_fillStyle_example", "", "160")}}

### Ein Beispiel für `strokeStyle`

Dieses Beispiel ähnelt dem obigen, verwendet aber die `strokeStyle`-Eigenschaft, um die Farben der Umrisse der Formen zu ändern. Wir verwenden die `arc()`-Methode, um Kreise statt Quadrate zu zeichnen.

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

Das Resultat sieht wie folgt aus:

{{EmbedLiveSample("A_strokeStyle_example", "", "160")}}

## Transparenz

Zusätzlich zum Zeichnen undurchsichtiger Formen auf das Canvas können wir auch halbtransparente (oder durchscheinende) Formen zeichnen. Dies geschieht entweder durch Festlegen der `globalAlpha`-Eigenschaft oder durch Zuweisen einer halbtransparenten Farbe zum Strich- und/oder Füllstil.

- [`globalAlpha = transparencyValue`](/de/docs/Web/API/CanvasRenderingContext2D/globalAlpha)
  - : Wendet den angegebenen Transparenzwert auf alle zukünftig gezeichneten Formen auf dem Canvas an. Der Wert muss zwischen 0.0 (vollständig transparent) und 1.0 (vollständig undurchsichtig) liegen. Standardmäßig ist dieser Wert 1.0 (vollständig undurchsichtig).

Die `globalAlpha`-Eigenschaft kann nützlich sein, wenn Sie viele Formen auf dem Canvas mit ähnlicher Transparenz zeichnen möchten, aber ansonsten ist es im Allgemeinen nützlicher, die Transparenz bei einzelnen Formen festzulegen, wenn Sie ihre Farben festlegen.

Da die `strokeStyle`- und `fillStyle`-Eigenschaften CSS-rgb-Farbwerte akzeptieren, können wir folgende Notation verwenden, um eine transparente Farbe zuzuweisen.

```js
// Assigning transparent colors to stroke and fill style

ctx.strokeStyle = "rgb(255 0 0 / 50%)";
ctx.fillStyle = "rgb(255 0 0 / 50%)";
```

Die `rgb()`-Funktion hat einen optionalen zusätzlichen Parameter. Der letzte Parameter legt den Transparenzwert dieser speziellen Farbe fest. Der gültige Bereich ist als Prozentsatz zwischen `0%` (vollständig transparent) und `100%` (vollständig undurchsichtig) oder als Zahl zwischen `0.0` (entspricht `0%`) und `1.0` (entspricht `100%`) angegeben.

### Ein Beispiel für `globalAlpha`

In diesem Beispiel zeichnen wir einen Hintergrund aus vier verschiedenfarbigen Quadraten. Darüber zeichnen wir eine Reihe halbtransparenter Kreise. Die `globalAlpha`-Eigenschaft ist auf `0.2` gesetzt, die für alle Formen ab diesem Punkt verwendet wird. Jeder Schritt in der `for`-Schleife zeichnet eine Reihe von Kreisen mit zunehmendem Radius. Das endgültige Ergebnis ist ein radialer Verlauf. Durch das Overlaying immer mehr Kreise übereinander reduzieren wir effektiv die Transparenz der bereits gezeichneten Kreise. Durch Erhöhen der Schrittanzahl und damit das Zeichnen weiterer Kreise würde der Hintergrund vollständig verschwinden.

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

### Ein Beispiel unter Verwendung von `rgb()` mit Alpha-Transparenz

In diesem zweiten Beispiel machen wir etwas Ähnliches wie im obigen Beispiel, aber anstatt Kreise übereinander zu zeichnen, habe ich kleine Rechtecke mit zunehmender Deckkraft gezeichnet. Die Verwendung von `rgb()` bietet Ihnen etwas mehr Kontrolle und Flexibilität, da wir den Füll- und Strichstil individuell festlegen können.

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
  - : Legt die Breite der zukünftig gezeichneten Linien fest.
- [`lineCap = type`](/de/docs/Web/API/CanvasRenderingContext2D/lineCap)
  - : Legt das Erscheinungsbild der Enden von Linien fest.
- [`lineJoin = type`](/de/docs/Web/API/CanvasRenderingContext2D/lineJoin)
  - : Legt das Erscheinungsbild der "Ecken", an denen Linien aufeinander treffen, fest.
- [`miterLimit = value`](/de/docs/Web/API/CanvasRenderingContext2D/miterLimit)
  - : Legt ein Limit für den Gehrungswinkel fest, wenn zwei Linien in einem scharfen Winkel aufeinandertreffen, um zu steuern, wie dick die Verbindung wird.
- [`getLineDash()`](/de/docs/Web/API/CanvasRenderingContext2D/getLineDash)
  - : Gibt das aktuelle Muster des Strichs mit einem Array von geraden, nicht negativen Zahlen zurück.
- [`setLineDash(segments)`](/de/docs/Web/API/CanvasRenderingContext2D/setLineDash)
  - : Legt das aktuelle Muster des Strichs fest.
- [`lineDashOffset = value`](/de/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)
  - : Gibt an, wo ein Strichmuster auf einer Linie beginnt.

Sie werden ein besseres Verständnis davon bekommen, was diese tun, indem Sie sich die folgenden Beispiele ansehen.

### Ein Beispiel für `lineWidth`

Diese Eigenschaft legt die aktuelle Linienstärke fest. Werte müssen positive Zahlen sein. Standardmäßig ist dieser Wert auf 1.0 Einheiten gesetzt.

Die Linienstärke ist die Dicke des Strichs, die auf dem gegebenen Pfad zentriert ist. Mit anderen Worten, der Bereich, der gezeichnet wird, erstreckt sich um die halbe Breite der Linie auf beiden Seiten des Pfades. Da Canvas-Koordinaten nicht direkt auf Pixel verweisen, muss besondere Sorgfalt aufgewendet werden, um scharfe horizontale und vertikale Linien zu erhalten.

Im Beispiel unten werden 10 gerade Linien mit zunehmender Linienbreite gezeichnet. Die Linie ganz links ist 1.0 Einheiten breit. Die linienextremen, die ungeradzahlige Breiten haben, scheinen jedoch aufgrund der Positionierung des Pfades nicht scharf zu sein.

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
> Wenn Sie sich darüber wundern, dass die Linien an den Rändern grau statt schwarz erscheinen, schauen Sie sich den Abschnitt [Unscharfe Kanten sehen?](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#seeing_blurry_edges) im vorherigen Kapitel an.

### Ein Beispiel für `lineCap`

Die `lineCap`-Eigenschaft bestimmt, wie die Endpunkte jeder Linie gezeichnet werden. Es gibt drei mögliche Werte für diese Eigenschaft: `butt`, `round` und `square`. Standardmäßig ist diese Eigenschaft auf `butt` gesetzt:

- `butt`
  - : Die Enden der Linien werden an den Endpunkten bündig abgeschnitten.
- `round`
  - : Die Enden der Linien sind abgerundet.
- `square`
  - : Die Enden der Linien werden durch Hinzufügen einer Box mit gleicher Breite und halber Höhe der Linienstärke abgeflacht.

Nur Start- und Endpunkte eines Pfades sind betroffen: Wenn ein Pfad mit `closePath()` geschlossen wird, gibt es keinen Start- und Endpunkt; stattdessen werden alle Endpunkte im Pfad mit ihrem vorherigen und nächsten Segment entsprechend der aktuellen Einstellung des `lineJoin`-Stils verbunden.

In diesem Beispiel zeichnen wir drei Linien, jede mit einem anderen Wert für die `lineCap`-Eigenschaft. Ich habe auch zwei Leitlinien hinzugefügt, um die genauen Unterschiede zwischen den dreien zu sehen. Jede dieser Linien beginnt und endet genau an diesen Leitlinien.

Die Linie links verwendet die Standardoption `butt`. Sie werden bemerken, dass sie vollständig bündig mit den Leitlinien gezeichnet ist. Die zweite ist auf die Option `round` eingestellt. Dies fügt dem Ende, das einen Radius hat, der halb so groß ist wie die Breite der Linie, einen Halbkreis hinzu. Die rechte Linie verwendet die Option `square`. Dies fügt eine Box mit gleicher Breite und halber Höhe der Linienstärke hinzu.

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

### Ein Beispiel für `lineJoin`

Die `lineJoin`-Eigenschaft bestimmt, wie zwei verbundene Segmente (von Linien, Bögen oder Kurven) mit einer Länge ungleich Null in einer Form miteinander verbunden werden (degenerierte Segmente ohne Länge, deren angegebene Endpunkte und Steuerungspunkte genau an derselben Position liegen, werden übergangen).

Es gibt drei mögliche Werte für diese Eigenschaft: `round`, `bevel` und `miter`. Standardmäßig ist diese Eigenschaft auf `miter` eingestellt. Beachten Sie, dass die `lineJoin`-Einstellung keine Wirkung hat, wenn die zwei verbundenen Segmente die gleiche Richtung haben, da in diesem Fall kein Verbindungsbereich hinzugefügt wird:

- `round`
  - : Rundet die Ecken einer Form ab, indem er einen zusätzlichen Sektor einer Scheibe füllt, die am gemeinsamen Endpunkt der verbundenen Segmente zentriert ist. Der Radius für diese abgerundeten Ecken entspricht der halben Linienstärke.
- `bevel`
  - : Füllt einen zusätzlichen dreieckigen Bereich zwischen dem gemeinsamen Endpunkt der verbundenen Segmente und den getrennten äußeren rechteckigen Ecken jedes Segments.
- `miter`
  - : Verbundene Segmente werden durch Verlängern ihrer Außenkanten verbunden, sodass sie in einem einzigen Punkt verbunden sind. Dies hat zur Folge, dass ein zusätzlicher rautenförmiger Bereich gefüllt wird. Diese Einstellung wird durch die `miterLimit`-Eigenschaft beeinflusst, die unten erklärt wird.

Das folgende Beispiel zeichnet drei verschiedene Pfade, die jede dieser drei `lineJoin`-Eigenschaften demonstrieren; die Ausgabe ist oben gezeigt.

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

Wie Sie im vorherigen Beispiel gesehen haben, wenn zwei Linien mit der Option `miter` verbunden sind, werden die Außenkanten der beiden miteinander verbundenen Linien bis zu dem Punkt, an dem sie sich treffen, verlängert. Für Linien, die in großen Winkeln zueinander stehen, ist dieser Punkt nicht weit vom inneren Verbindungspunkt entfernt. Wenn jedoch die Winkel zwischen den Linien kleiner werden, erhöht sich der Abstand (Gehrungslänge) zwischen diesen Punkten exponentiell.

Die Eigenschaft `miterLimit` bestimmt, wie weit der äußere Verbindungspunkt vom inneren Verbindungspunkt entfernt platziert werden kann. Wenn zwei Linien diesen Wert überschreiten, wird stattdessen eine abgeschrägte Verbindung gezeichnet. Beachten Sie, dass die maximale Gehrungslänge das Produkt der Linienstärke gemessen im aktuellen Koordinatensystem ist, multipliziert mit dem Wert dieser `miterLimit`-Eigenschaft (dessen Standardwert in HTML {{HTMLElement("canvas")}} 10.0 ist), sodass das `miterLimit` unabhängig vom aktuellen Anzeigemaßstab oder Affintransformationen von Pfaden festgelegt werden kann: Es beeinflusst nur die effektiv gerenderte Form von Linienkanten.

Genauer gesagt ist das Miterlimit das maximal zulässige Verhältnis der Verlängerungslänge (im HTML-Canvas wird es zwischen der äußeren Ecke der verbundenen Kanten der Linie und dem gemeinsamen Endpunkt der verbundenen Segmente angegeben, die im Pfad angegeben sind) zur halben Linienstärke. Es kann äquivalent als das maximal zulässige Verhältnis der Entfernung zwischen den innenliegenden und außenliegenden Punkten der Verbindung von Kanten zur Gesamtliniendicke definiert werden. Es entspricht dann dem Kotangens der halben minimalen Innenwinkel der verbundenen Segmente, unterhalb derer keine Gehrungsfuge gerendert wird, sondern nur eine abgeschrägte Verbindung:

- `miterLimit` = **max** `miterLength` / `lineWidth` = 1 / **sin** ( **min** _θ_ / 2 )
- Das Standard-Gehrungslimit von 10.0 wird alle Gehrungen für scharfe Winkel unter etwa 11 Grad abschneiden.
- Ein Gehrungslimit gleich √2 ≈ 1.4142136 (aufgerundet) wird Gehrungen für alle spitzen Winkel abschneiden und Gehrungsverbindungen nur für stumpfe oder rechte Winkel beibehalten.
- Ein Gehrungslimit gleich 1.0 ist gültig, deaktiviert jedoch alle Gehrungen.
- Werte unter 1.0 sind für das Gehrungslimit ungültig.

Hier ist eine kleine Demonstration, in der Sie das `miterLimit` dynamisch einstellen und sehen können, wie dies die Formen auf dem Canvas beeinflusst. Die blauen Linien zeigen, wo der Start- und Endpunkt für jede der Linien im Zick-Zack-Muster liegt.

Wenn Sie einen `miterLimit`-Wert unter 4.2 in dieser Demo angeben, wird keine der sichtbaren Ecken mit einer Gehrungserweiterung verbunden, sondern nur mit einer kleinen Abschrägung in der Nähe der blauen Linien; Bei einem `miterLimit` über 10 sollten die meisten Ecken in dieser Demo mit einer Gehrung verbunden werden, die weit von den blauen Linien entfernt ist und deren Höhe sich von den Ecken von links nach rechts verringert, da sie mit zunehmenden Winkeln verbunden sind. Mit mittleren Werten werden die Ecken auf der linken Seite nur mit einer Abschrägung in der Nähe der blauen Linien verbunden und die Ecken auf der rechten Seite mit einer Gehrungserweiterung (ebenfalls mit abnehmender Höhe).

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

Die Methode `setLineDash` und die Eigenschaft `lineDashOffset` spezifizieren das Strichmuster für Linien. Die Methode `setLineDash` akzeptiert eine Liste von Zahlen, die Entfernungen zur alternierenden Zeichnung einer Linie und eines Zwischenraums spezifizieren, und die Eigenschaft `lineDashOffset` legt einen Offset fest, wo das Muster beginnen soll.

In diesem Beispiel erzeugen wir einen Marschierende Ameisen-Effekt. Es ist eine Animationstechnik, die häufig in Auswahlwerkzeugen von Computer-Grafikprogrammen zu finden ist. Sie hilft dem Benutzer, den Auswahlrand vom Hintergrund des Bildes zu unterscheiden, indem sie den Rand animiert. In einem späteren Teil dieses Tutorials können Sie lernen, dies und andere [einfache Animationen](/de/docs/Web/API/Canvas_API/Tutorial/Basic_animations) zu machen.

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

Genau wie bei einem normalen Zeichenprogramm können wir Formen mit linearen, radialen und konischen Verläufen füllen und umranden. Wir erstellen ein [`CanvasGradient`](/de/docs/Web/API/CanvasGradient)-Objekt, indem wir eine der folgenden Methoden verwenden. Wir können dieses Objekt dann den Eigenschaften `fillStyle` oder `strokeStyle` zuweisen.

- [`createLinearGradient(x1, y1, x2, y2)`](/de/docs/Web/API/CanvasRenderingContext2D/createLinearGradient)
  - : Erstellt ein lineares Verlauf-Objekt mit einem Startpunkt von (`x1`, `y1`) und einem Endpunkt von (`x2`, `y2`).
- [`createRadialGradient(x1, y1, r1, x2, y2, r2)`](/de/docs/Web/API/CanvasRenderingContext2D/createRadialGradient)
  - : Erstellt einen radialen Verlauf. Die Parameter repräsentieren zwei Kreise, einer mit seinem Mittelpunkt bei (`x1`, `y1`) und einem Radius von `r1`, und der andere mit seinem Mittelpunkt bei (`x2`, `y2`) mit einem Radius von `r2`.
- [`createConicGradient(angle, x, y)`](/de/docs/Web/API/CanvasRenderingContext2D/createConicGradient)
  - : Erstellt ein konischen Verlauf-Objekt mit einem Startwinkel von `angle` in Radiant an der Position (`x`, `y`).

Zum Beispiel:

```js
const lineargradient = ctx.createLinearGradient(0, 0, 150, 150);
const radialgradient = ctx.createRadialGradient(75, 75, 0, 75, 75, 100);
```

Sobald wir ein `CanvasGradient`-Objekt erstellt haben, können wir mit der Methode `addColorStop()` Farben hinzufügen.

- [`gradient.addColorStop(position, color)`](/de/docs/Web/API/CanvasGradient/addColorStop)
  - : Erstellt einen neuen Farbpunkt im `gradient`-Objekt. Die `position` ist eine Zahl zwischen 0.0 und 1.0 und definiert die relative Position der Farbe im Verlauf, und das `color` Argument muss ein String sein, der einen CSS {{cssxref("&lt;color&gt;")}} darstellt, der angibt, welche Farbe der Verlauf an diesem Punkt erreichen soll.

Sie können so viele Farbhaltepunkt zu einem Verlauf hinzufügen, wie Sie benötigen. Unten ist ein sehr einfacher linearer Verlauf von Weiß zu Schwarz.

```js
const lineargradient = ctx.createLinearGradient(0, 0, 150, 150);
lineargradient.addColorStop(0, "white");
lineargradient.addColorStop(1, "black");
```

### Ein Beispiel für `createLinearGradient`

In diesem Beispiel erstellen wir zwei verschiedene Verläufe. Wie Sie hier sehen können, können sowohl die `strokeStyle`- als auch `fillStyle`-Eigenschaften ein `canvasGradient`-Objekt als gültigen Eingang akzeptieren.

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

Das erste ist ein Hintergrundverlauf. Wie Sie sehen können, haben wir zwei Farben an derselben Position zugewiesen. Dies tun Sie, um sehr scharfe Farbwechsel zu machen - in diesem Fall von Weiß zu Grün. Normalerweise spielt es keine Rolle, in welcher Reihenfolge Sie die Farbstopps definieren, aber in diesem speziellen Fall macht es einen erheblichen Unterschied. Wenn Sie die Zuweisungen in der Reihenfolge beibehalten, in der Sie sie erscheinen lassen möchten, wird dies kein Problem darstellen.

Im zweiten Verlauf haben wir die Startfarbe (an Position 0.0) nicht zugewiesen, da dies nicht unbedingt notwendig war, da sie automatisch die Farbe des nächsten Farbstopps annimmt. Daher macht der schwarze Farbverlauf an Position 0.5 den Verlauf vom Start bis zu diesem Punkt automatisch schwarz.

{{EmbedLiveSample("A_createLinearGradient_example", "", "160")}}

### Ein Beispiel für `createRadialGradient`

In diesem Beispiel definieren wir vier verschiedene radiale Verläufe. Da wir die Kontrolle über die Start- und Schlusspunkte des Verlaufs haben, können wir komplexere Effekte erzielen, als wir normalerweise in den "klassischen" radialen Verläufen sehen, die wir zum Beispiel in Photoshop sehen (das heißt, ein Verlauf mit einem einzigen Mittelpunkt, bei dem der Verlauf in einer kreisförmigen Form nach außen expandiert).

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

In diesem Fall haben wir den Startpunkt leicht vom Endpunkt versetzt, um einen sphärischen 3D-Effekt zu erzielen. Es ist am besten, zu vermeiden, dass sich die inneren und äußeren Kreise überlappen, da dies zu merkwürdigen, schwer vorhersehbaren Effekten führt.

Der letzte Farbhalt in jedem der vier Verläufe verwendet eine vollständig transparente Farbe. Wenn Sie einen schönen Übergang von diesem zum vorherigen Farbhalt wünschen, sollten beide Farben gleich sein. Dies ist aus dem Code nicht sofort ersichtlich, da er zwei verschiedene CSS-Farbmethoden als Demonstration verwendet, aber im ersten Verlauf `#019F62 = rgb(1 159 98 / 100%)`.

{{EmbedLiveSample("A_createRadialGradient_example", "", "160")}}

### Ein Beispiel für `createConicGradient`

In diesem Beispiel definieren wir zwei verschiedene kegelartige Verläufe. Ein konischer Verlauf unterscheidet sich von einem radialen Verlauf dadurch, dass er nicht Kreise erzeugt, sondern sich um einen Punkt dreht.

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

Der erste Verlauf ist im Zentrum des ersten Rechtecks positioniert und wechselt von einem grünen Farbhalt am Anfang zu einem weißen am Ende. Der Winkel beginnt bei 2 Radianten, was sich bemerkbar macht, da die Anfangs-/Endlinie nach Südosten zeigt.

Der zweite Verlauf ist ebenfalls im Zentrum seines zweiten Rechtecks positioniert. Dieser hat mehrere Farbhalte, die bei jedem Viertel der Drehung von Schwarz zu Weiß wechseln. Dies ergibt den Schachbrett-Effekt.

{{EmbedLiveSample("A_createConicGradient_example", "", "160")}}

## Muster

In einem der Beispiele auf der vorherigen Seite haben wir eine Reihe von Schleifen verwendet, um ein Muster von Bildern zu erstellen. Es gibt jedoch eine viel einfachere Methode: die Methode `createPattern()`.

- [`createPattern(image, type)`](/de/docs/Web/API/CanvasRenderingContext2D/createPattern)
  - : Erstellt und gibt ein neues Canvas-Musterobjekt zurück. `image` ist die Quelle des Bildes (d.h. ein [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement), ein [`SVGImageElement`](/de/docs/Web/API/SVGImageElement), ein weiteres [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) oder ein [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas), ein [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) oder ein [`VideoFrame`](/de/docs/Web/API/VideoFrame), oder ein [`ImageBitmap`](/de/docs/Web/API/ImageBitmap)). `type` ist ein String, der angibt, wie das Bild verwendet werden soll.

Der Typ gibt an, wie das Bild verwendet werden soll, um das Muster zu erstellen, und muss einer der folgenden String-Werte sein:

- `repeat`
  - : Kachelt das Bild in vertikaler und horizontaler Richtung.
- `repeat-x`
  - : Kachelt das Bild horizontal, aber nicht vertikal.
- `repeat-y`
  - : Kachelt das Bild vertikal, aber nicht horizontal.
- `no-repeat`
  - : Kachelt das Bild nicht. Es wird nur einmal verwendet.

Wir verwenden diese Methode, um ein [`CanvasPattern`](/de/docs/Web/API/CanvasPattern)-Objekt zu erstellen, das den Verlaufsmethoden, die wir oben gesehen haben, sehr ähnlich ist. Nachdem wir ein Muster erstellt haben, können wir es den Eigenschaften `fillStyle` oder `strokeStyle` zuweisen. Zum Beispiel:

```js
const img = new Image();
img.src = "some-image.png";
const pattern = ctx.createPattern(img, "repeat");
```

> [!NOTE]
> Wie bei der Methode `drawImage()` müssen Sie sicherstellen, dass das verwendete Bild geladen ist, bevor Sie diese Methode aufrufen, da das Muster sonst möglicherweise falsch gezeichnet wird.

### Ein Beispiel für `createPattern`

In diesem letzten Beispiel erstellen wir ein Muster, das wir der `fillStyle`-Eigenschaft zuweisen. Das einzige, was es zu beachten gibt, ist die Verwendung des `onload`-Handlers des Bildes. Dies stellt sicher, dass das Bild geladen ist, bevor es dem Muster zugewiesen wird.

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
  - : Gibt an, wie weit der Schatten in horizontaler Richtung von dem Objekt ausgehen soll. Dieser Wert wird nicht durch die Transformationsmatrix beeinflusst. Der Standardwert ist 0.
- [`shadowOffsetY = float`](/de/docs/Web/API/CanvasRenderingContext2D/shadowOffsetY)
  - : Gibt an, wie weit der Schatten in vertikaler Richtung von dem Objekt ausgehen soll. Dieser Wert wird nicht durch die Transformationsmatrix beeinflusst. Der Standardwert ist 0.
- [`shadowBlur = float`](/de/docs/Web/API/CanvasRenderingContext2D/shadowBlur)
  - : Gibt die Größe des Verwischungseffekts an; dieser Wert entspricht keiner Anzahl von Pixeln und wird nicht von der aktuellen Transformationsmatrix beeinflusst. Der Standardwert beträgt 0.
- [`shadowColor = color`](/de/docs/Web/API/CanvasRenderingContext2D/shadowColor)
  - : Ein Standard-CSS-Farbwert, der die Farbe des Schatteneffekts angibt; standardmäßig ist es vollständig transparentes Schwarz.

Die Eigenschaften `shadowOffsetX` und `shadowOffsetY` geben an, wie weit sich der Schatten vom Objekt in den X- und Y-Richtungen ausdehnen soll; diese Werte werden nicht von der aktuellen Transformationsmatrix beeinflusst. Verwenden Sie negative Werte, um den Schatten nach oben oder links zu ziehen, und positive Werte, um den Schatten nach unten oder rechts zu ziehen. Beide sind standardmäßig auf 0 gesetzt.

Die Property `shadowBlur` gibt die Größe des Verwischungseffekts an; dieser Wert entspricht keiner Anzahl von Pixeln und wird nicht von der aktuellen Transformationsmatrix beeinflusst. Der Standardwert beträgt 0.

Die Property `shadowColor` ist ein Standard-CSS-Farbwert, der die Farbe des Schatteneffekts angibt; standardmäßig ist es vollständig transparentes Schwarz.

> [!NOTE]
> Schatten werden nur für `source-over` [Kompositoperationen](/de/docs/Web/API/Canvas_API/Tutorial/Compositing) gezeichnet.

### Ein Beispiel für einen beschatteten Text

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

Wir werden die `font`-Eigenschaft und die `fillText`-Methode im nächsten Kapitel über [Text zeichnen](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text) betrachten.

## Canvas-Füllregeln

Bei Verwendung von `fill` (oder [`clip`](/de/docs/Web/API/CanvasRenderingContext2D/clip) und [`isPointInPath`](/de/docs/Web/API/CanvasRenderingContext2D/isPointInPath)) können Sie optional einen Füllregel-Algorithmus angeben, durch den bestimmt wird, ob ein Punkt innerhalb oder außerhalb eines Pfades liegt und somit gefüllt wird oder nicht. Dies ist nützlich, wenn sich ein Pfad selbst schneidet oder verschachtelt ist.

Zwei Werte sind möglich:

- `nonzero`
  - : Die [Nicht-Null-Regel](https://en.wikipedia.org/wiki/Nonzero-rule), die die Standardregel ist.
- `evenodd`
  - : Die [gerade-ungerade Regel](https://en.wikipedia.org/wiki/Even%E2%80%93odd_rule).

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
