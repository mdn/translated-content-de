---
title: Anwenden von Stilen und Farben
slug: Web/API/Canvas_API/Tutorial/Applying_styles_and_colors
l10n:
  sourceCommit: ed9ab1233c42a49fe4c448de628469f22b340065
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Drawing_shapes", "Web/API/Canvas_API/Tutorial/Drawing_text")}}

Im Kapitel über das [Zeichnen von Formen](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes) haben wir nur die standardmäßigen Linien- und Füllstile verwendet. Hier werden wir die Canvas-Optionen untersuchen, die uns zur Verfügung stehen, um unsere Zeichnungen etwas attraktiver zu gestalten. Sie erfahren, wie Sie Ihren Zeichnungen verschiedene Farben, Linienstile, Farbverläufe, Muster und Schatten hinzufügen.

> [!NOTE]
> Canvas-Inhalte sind für Screenreader nicht zugänglich. Wenn das Canvas rein dekorativ ist, fügen Sie `role="presentation"` zum öffnenden `<canvas>`-Tag hinzu. Fügen Sie andernfalls beschreibenden Text als Wert des Attributs [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) direkt zum Canvas-Element selbst hinzu oder verwenden Sie Fallback-Inhalte, die zwischen dem öffnenden und schließenden Canvas-Tag platziert werden. Canvas-Inhalte sind nicht Teil des DOM, verschachtelte Fallback-Inhalte jedoch schon.

## Farben

Bisher haben wir nur Methoden des Zeichenkontexts gesehen. Wenn wir einer Form Farben zuweisen möchten, können wir zwei wichtige Eigenschaften verwenden: `fillStyle` und `strokeStyle`.

- [`fillStyle = color`](/de/docs/Web/API/CanvasRenderingContext2D/fillStyle)
  - : Legt den beim Füllen von Formen verwendeten Stil fest.
- [`strokeStyle = color`](/de/docs/Web/API/CanvasRenderingContext2D/strokeStyle)
  - : Legt den Stil für die Umrisse von Formen fest.

`color` ist ein String, der ein CSS-{{cssxref("&lt;color&gt;")}}, ein Verlaufsobjekt oder ein Musterobjekt darstellt. Verlaufs- und Musterobjekte werden wir später betrachten. Standardmäßig sind die Kontur- und Füllfarbe auf Schwarz gesetzt (CSS-Farbwert `#000000`).

> [!NOTE]
> Wenn Sie die Eigenschaft `strokeStyle` und/oder `fillStyle` festlegen, wird der neue Wert zum Standard für alle danach gezeichneten Formen. Für jede Form, die eine andere Farbe haben soll, müssen Sie die Eigenschaft `fillStyle` oder `strokeStyle` erneut zuweisen.

Die gültigen Strings, die Sie eingeben können, sollten laut Spezifikation CSS-{{cssxref("&lt;color&gt;")}}-Werte sein. Jedes der folgenden Beispiele beschreibt dieselbe Farbe.

```js
// these all set the fillStyle to 'orange'

ctx.fillStyle = "orange";
ctx.fillStyle = "#FFA500";
ctx.fillStyle = "rgb(255 165 0)";
ctx.fillStyle = "rgb(255 165 0 / 100%)";
```

### Ein `fillStyle`-Beispiel

In diesem Beispiel verwenden wir erneut zwei `for`-Schleifen, um ein Raster aus Rechtecken zu zeichnen, jedes in einer anderen Farbe. Das resultierende Bild sollte in etwa wie der Screenshot aussehen. Hier passiert nichts besonders Spektakuläres. Wir verwenden die beiden Variablen `i` und `j`, um für jedes Quadrat eine eindeutige RGB-Farbe zu erzeugen, und ändern nur die Rot- und Grünwerte. Der Blaukanal hat einen festen Wert. Durch das Ändern der Kanäle können Sie alle möglichen Paletten erzeugen. Durch Erhöhen der Schritte können Sie etwas erreichen, das wie die von Photoshop verwendeten Farbpaletten aussieht.

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

Dieses Beispiel ähnelt dem obigen, verwendet jedoch die Eigenschaft `strokeStyle`, um die Farben der Formumrisse zu ändern. Wir verwenden die Methode `arc()`, um Kreise statt Quadrate zu zeichnen.

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

Zusätzlich zum Zeichnen undurchsichtiger Formen auf dem Canvas können wir auch halbtransparente (oder durchscheinende) Formen zeichnen. Dies geschieht entweder durch Festlegen der Eigenschaft `globalAlpha` oder durch Zuweisen einer halbtransparenten Farbe zum Kontur- und/oder Füllstil.

- [`globalAlpha = transparencyValue`](/de/docs/Web/API/CanvasRenderingContext2D/globalAlpha)
  - : Wendet den angegebenen Transparenzwert auf alle künftig auf dem Canvas gezeichneten Formen an. Der Wert muss zwischen 0.0 (vollständig transparent) und 1.0 (vollständig undurchsichtig) liegen. Standardmäßig ist dieser Wert 1.0 (vollständig undurchsichtig).

Die Eigenschaft `globalAlpha` kann nützlich sein, wenn Sie viele Formen mit ähnlicher Transparenz auf dem Canvas zeichnen möchten. Ansonsten ist es im Allgemeinen jedoch sinnvoller, die Transparenz einzelner Formen beim Festlegen ihrer Farben festzulegen.

Da die Eigenschaften `strokeStyle` und `fillStyle` CSS-rgb-Farbwerte akzeptieren, können wir die folgende Notation verwenden, um ihnen eine transparente Farbe zuzuweisen.

```js
// Assigning transparent colors to stroke and fill style

ctx.strokeStyle = "rgb(255 0 0 / 50%)";
ctx.fillStyle = "rgb(255 0 0 / 50%)";
```

Die Funktion `rgb()` hat einen optionalen zusätzlichen Parameter. Der letzte Parameter legt den Transparenzwert dieser bestimmten Farbe fest. Der gültige Bereich wird als Prozentsatz zwischen `0%` (vollständig transparent) und `100%` (vollständig undurchsichtig) oder als Zahl zwischen `0.0` (entspricht `0%`) und `1.0` (entspricht `100%`) angegeben.

### Ein `globalAlpha`-Beispiel

In diesem Beispiel zeichnen wir einen Hintergrund aus vier verschiedenfarbigen Quadraten. Darüber zeichnen wir eine Gruppe halbtransparenter Kreise. Die Eigenschaft `globalAlpha` wird auf `0.2` gesetzt, was für alle Formen ab diesem Zeitpunkt verwendet wird. Jeder Schritt in der `for`-Schleife zeichnet eine Gruppe von Kreisen mit zunehmendem Radius. Das Endergebnis ist ein radialer Farbverlauf. Indem wir immer mehr Kreise übereinanderlegen, verringern wir effektiv die Transparenz der bereits gezeichneten Kreise. Durch Erhöhen der Schrittzahl und damit das Zeichnen weiterer Kreise würde der Hintergrund aus der Mitte des Bildes vollständig verschwinden.

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

In diesem zweiten Beispiel machen wir etwas Ähnliches wie im obigen, aber anstatt Kreise übereinander zu zeichnen, habe ich kleine Rechtecke mit zunehmender Deckkraft gezeichnet. Die Verwendung von `rgb()` gibt Ihnen etwas mehr Kontrolle und Flexibilität, da wir den Füll- und Konturstil einzeln festlegen können.

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

Es gibt mehrere Eigenschaften, mit denen wir Linien gestalten können.

- [`lineWidth = value`](/de/docs/Web/API/CanvasRenderingContext2D/lineWidth)
  - : Legt die Breite künftig gezeichneter Linien fest.
- [`lineCap = type`](/de/docs/Web/API/CanvasRenderingContext2D/lineCap)
  - : Legt das Aussehen der Linienenden fest.
- [`lineJoin = type`](/de/docs/Web/API/CanvasRenderingContext2D/lineJoin)
  - : Legt das Aussehen der „Ecken“ fest, an denen Linien zusammentreffen.
- [`miterLimit = value`](/de/docs/Web/API/CanvasRenderingContext2D/miterLimit)
  - : Legt eine Begrenzung für die Gehrung fest, wenn zwei Linien in einem spitzen Winkel zusammentreffen, damit Sie steuern können, wie dick die Verbindung wird.
- [`getLineDash()`](/de/docs/Web/API/CanvasRenderingContext2D/getLineDash)
  - : Gibt das aktuelle Linienstrichmuster-Array zurück, das eine gerade Anzahl nicht negativer Zahlen enthält.
- [`setLineDash(segments)`](/de/docs/Web/API/CanvasRenderingContext2D/setLineDash)
  - : Legt das aktuelle Linienstrichmuster fest.
- [`lineDashOffset = value`](/de/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)
  - : Gibt an, wo ein Stricharray auf einer Linie beginnen soll.

Sie werden besser verstehen, was diese bewirken, wenn Sie sich die folgenden Beispiele ansehen.

### Ein `lineWidth`-Beispiel

Diese Eigenschaft legt die aktuelle Linienstärke fest. Werte müssen positive Zahlen sein. Standardmäßig ist dieser Wert auf 1.0 Einheiten festgelegt.

Die Linienbreite ist die Dicke der Kontur, die um den angegebenen Pfad zentriert ist. Anders ausgedrückt erstreckt sich der gezeichnete Bereich auf jeder Seite des Pfads um die Hälfte der Linienbreite. Da Canvas-Koordinaten nicht direkt auf Pixel verweisen, ist besondere Sorgfalt erforderlich, um scharfe horizontale und vertikale Linien zu erhalten.

Im folgenden Beispiel werden 10 gerade Linien mit zunehmenden Linienbreiten gezeichnet. Die Linie ganz links ist 1.0 Einheiten breit. Allerdings erscheinen die äußerst linke sowie alle Linien mit einer Breite in ungeraden ganzen Zahlen aufgrund der Positionierung des Pfads nicht scharf.

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
> Wenn Sie sich fragen, warum die Linien am Rand grau statt schwarz erscheinen, lesen Sie den Abschnitt [Unscharfe Ränder?](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#seeing_blurry_edges) im vorherigen Kapitel.

### Ein `lineCap`-Beispiel

Die Eigenschaft `lineCap` bestimmt, wie die Endpunkte jeder Linie gezeichnet werden. Für diese Eigenschaft gibt es drei mögliche Werte: `butt`, `round` und `square`. Standardmäßig ist diese Eigenschaft auf `butt` gesetzt:

- `butt`
  - : Die Linienenden werden an den Endpunkten rechtwinklig abgeschnitten.
- `round`
  - : Die Linienenden werden abgerundet.
- `square`
  - : Die Linienenden werden durch Hinzufügen eines Kastens mit gleicher Breite und halber Höhe der Linienstärke rechtwinklig abgeschlossen.

Nur der Start- und der endgültige Endpunkt eines Pfads sind betroffen: Wenn ein Pfad mit `closePath()` geschlossen wird, gibt es keinen Start- und endgültigen Endpunkt; stattdessen werden alle Endpunkte im Pfad mit ihren jeweils vorherigen und nächsten angrenzenden Segmenten unter Verwendung der aktuellen Einstellung des Stils `lineJoin` verbunden.

In diesem Beispiel zeichnen wir drei Linien, jeweils mit einem anderen Wert für die Eigenschaft `lineCap`. Ich habe außerdem zwei Hilfslinien hinzugefügt, um die genauen Unterschiede zwischen den drei Varianten zu sehen. Jede dieser Linien beginnt und endet genau auf diesen Hilfslinien.

Die Linie links verwendet die Standardoption `butt`. Sie werden feststellen, dass sie bündig mit den Hilfslinien gezeichnet wird. Die zweite ist auf die Option `round` gesetzt. Dies fügt am Ende einen Halbkreis hinzu, dessen Radius die halbe Breite der Linie beträgt. Die Linie rechts verwendet die Option `square`. Dies fügt einen Kasten mit gleicher Breite und halber Höhe der Linienstärke hinzu.

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

Die Eigenschaft `lineJoin` bestimmt, wie zwei verbindende Segmente (von Linien, Bögen oder Kurven) mit Längen ungleich null in einer Form verbunden werden (entartete Segmente mit Länge null, deren angegebene Endpunkte und Kontrollpunkte exakt an derselben Position liegen, werden übersprungen).

Für diese Eigenschaft gibt es drei mögliche Werte: `round`, `bevel` und `miter`. Standardmäßig ist diese Eigenschaft auf `miter` gesetzt. Beachten Sie, dass die Einstellung `lineJoin` keine Auswirkung hat, wenn die beiden verbundenen Segmente dieselbe Richtung haben, da in diesem Fall kein Verbindungsbereich hinzugefügt wird:

- `round`
  - : Rundet die Ecken einer Form ab, indem ein zusätzlicher Kreissektor gefüllt wird, der am gemeinsamen Endpunkt der verbundenen Segmente zentriert ist. Der Radius dieser abgerundeten Ecken entspricht der halben Linienbreite.
- `bevel`
  - : Füllt einen zusätzlichen dreieckigen Bereich zwischen dem gemeinsamen Endpunkt der verbundenen Segmente und den getrennten äußeren rechteckigen Ecken jedes Segments.
- `miter`
  - : Verbundene Segmente werden verbunden, indem ihre Außenkanten bis zu einem einzelnen Punkt verlängert werden, wodurch ein zusätzlicher rautenförmiger Bereich gefüllt wird. Diese Einstellung wird durch die weiter unten erläuterte Eigenschaft `miterLimit` beeinflusst.

Das folgende Beispiel zeichnet drei verschiedene Pfade und demonstriert jede dieser drei `lineJoin`-Eigenschaftseinstellungen; die Ausgabe wird oben angezeigt.

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

Wie Sie im vorherigen Beispiel gesehen haben, werden beim Verbinden zweier Linien mit der Option `miter` die Außenkanten der beiden verbundenen Linien bis zu dem Punkt verlängert, an dem sie zusammentreffen. Bei Linien, die große Winkel zueinander bilden, liegt dieser Punkt nicht weit vom inneren Verbindungspunkt entfernt. Wenn jedoch die Winkel zwischen den einzelnen Linien kleiner werden, nimmt die Entfernung (Gehrungslänge) zwischen diesen Punkten exponentiell zu.

Die Eigenschaft `miterLimit` bestimmt, wie weit der äußere Verbindungspunkt vom inneren Verbindungspunkt entfernt platziert werden kann. Wenn zwei Linien diesen Wert überschreiten, wird stattdessen eine abgeschrägte Verbindung gezeichnet. Beachten Sie, dass die maximale Gehrungslänge das Produkt aus der im aktuellen Koordinatensystem gemessenen Linienbreite und dem Wert dieser Eigenschaft `miterLimit` ist (deren Standardwert im HTML-{{HTMLElement("canvas")}} 10.0 beträgt), sodass `miterLimit` unabhängig vom aktuellen Anzeigemaßstab oder von affinen Transformationen von Pfaden festgelegt werden kann: Sie beeinflusst nur die effektiv gerenderte Form der Linienkanten.

Genauer gesagt ist die Gehrungsgrenze das maximal zulässige Verhältnis der Verlängerungslänge (im HTML-Canvas wird sie zwischen der äußeren Ecke der verbundenen Linienkanten und dem im Pfad angegebenen gemeinsamen Endpunkt der verbindenden Segmente gemessen) zur halben Linienbreite. Sie kann gleichwertig als das maximal zulässige Verhältnis der Entfernung zwischen den inneren und äußeren Verbindungspunkten der Kanten zur gesamten Linienbreite definiert werden. Sie entspricht dann dem Kosekans des halben minimalen Innenwinkels der verbindenden Segmente, unterhalb dessen keine Gehrungsverbindung, sondern nur eine abgeschrägte Verbindung gerendert wird:

- `miterLimit` = **max** `miterLength` / `lineWidth` = 1 / **sin** ( **min** _θ_ / 2 )
- Die standardmäßige Gehrungsgrenze von 10.0 entfernt alle Gehrungen für spitze Winkel unter etwa 11 Grad.
- Eine Gehrungsgrenze von √2 ≈ 1.4142136 (aufgerundet) entfernt Gehrungen für alle spitzen Winkel und behält Gehrungsverbindungen nur für stumpfe oder rechte Winkel bei.
- Eine Gehrungsgrenze von 1.0 ist gültig, deaktiviert jedoch alle Gehrungen.
- Werte unter 1.0 sind für die Gehrungsgrenze ungültig.

Hier ist eine kleine Demo, in der Sie `miterLimit` dynamisch festlegen und sehen können, wie sich dies auf die Formen auf dem Canvas auswirkt. Die blauen Linien zeigen, wo sich die Start- und Endpunkte jeder Linie im Zickzackmuster befinden.

Wenn Sie in dieser Demo einen `miterLimit`-Wert unter 4.2 angeben, wird keine der sichtbaren Ecken mit einer Gehrungsverlängerung verbunden, sondern nur mit einer kleinen Abschrägung nahe den blauen Linien; bei einem `miterLimit` über 10 sollten die meisten Ecken in dieser Demo mit einer weit von den blauen Linien entfernten Gehrung verbunden werden, deren Höhe von links nach rechts zwischen den Ecken abnimmt, da sie mit zunehmenden Winkeln verbunden werden; bei Zwischenwerten werden die Ecken auf der linken Seite nur mit einer Abschrägung nahe den blauen Linien und die Ecken auf der rechten Seite mit einer Gehrungsverlängerung verbunden (ebenfalls mit abnehmender Höhe).

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

### Verwenden von Linienstrichen

Die Methode `setLineDash` und die Eigenschaft `lineDashOffset` legen das Strichmuster für Linien fest. Die Methode `setLineDash` akzeptiert eine Liste von Zahlen, die abwechselnd die Entfernungen zum Zeichnen einer Linie und einer Lücke angeben, und die Eigenschaft `lineDashOffset` legt einen Versatz fest, an dem das Muster beginnen soll.

In diesem Beispiel erzeugen wir einen „laufende Ameisen“-Effekt. Dabei handelt es sich um eine Animationstechnik, die häufig in Auswahlwerkzeugen von Computergrafikprogrammen zu finden ist. Sie hilft dem Benutzer, den Auswahlrahmen vom Bildhintergrund zu unterscheiden, indem der Rahmen animiert wird. In einem späteren Teil dieses Tutorials können Sie lernen, wie dies und andere [grundlegende Animationen](/de/docs/Web/API/Canvas_API/Tutorial/Basic_animations) erstellt werden.

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

## Farbverläufe

Wie in jedem normalen Zeichenprogramm können wir Formen mit linearen, radialen und konischen Farbverläufen füllen und konturieren. Wir erstellen ein [`CanvasGradient`](/de/docs/Web/API/CanvasGradient)-Objekt mit einer der folgenden Methoden. Anschließend können wir dieses Objekt den Eigenschaften `fillStyle` oder `strokeStyle` zuweisen.

- [`createLinearGradient(x1, y1, x2, y2)`](/de/docs/Web/API/CanvasRenderingContext2D/createLinearGradient)
  - : Erstellt ein lineares Verlaufsobjekt mit einem Startpunkt bei (`x1`, `y1`) und einem Endpunkt bei (`x2`, `y2`).
- [`createRadialGradient(x1, y1, r1, x2, y2, r2)`](/de/docs/Web/API/CanvasRenderingContext2D/createRadialGradient)
  - : Erstellt einen radialen Farbverlauf. Die Parameter stellen zwei Kreise dar: einen mit Mittelpunkt bei (`x1`, `y1`) und Radius `r1` sowie einen weiteren mit Mittelpunkt bei (`x2`, `y2`) und Radius `r2`.
- [`createConicGradient(angle, x, y)`](/de/docs/Web/API/CanvasRenderingContext2D/createConicGradient)
  - : Erstellt ein konisches Verlaufsobjekt mit einem Startwinkel `angle` in Radiant an der Position (`x`, `y`).

Zum Beispiel:

```js
const lineargradient = ctx.createLinearGradient(0, 0, 150, 150);
const radialgradient = ctx.createRadialGradient(75, 75, 0, 75, 75, 100);
```

Nachdem wir ein `CanvasGradient`-Objekt erstellt haben, können wir ihm mit der Methode `addColorStop()` Farben zuweisen.

- [`gradient.addColorStop(position, color)`](/de/docs/Web/API/CanvasGradient/addColorStop)
  - : Erstellt einen neuen Farbstopp für das Objekt `gradient`. `position` ist eine Zahl zwischen 0.0 und 1.0 und definiert die relative Position der Farbe im Farbverlauf. Das Argument `color` muss ein String sein, der ein CSS-{{cssxref("&lt;color&gt;")}} darstellt und die Farbe angibt, die der Verlauf an diesem Versatz innerhalb des Übergangs erreichen soll.

Sie können einem Farbverlauf so viele Farbstopps hinzufügen, wie Sie benötigen. Unten sehen Sie einen sehr einfachen linearen Farbverlauf von Weiß zu Schwarz.

```js
const lineargradient = ctx.createLinearGradient(0, 0, 150, 150);
lineargradient.addColorStop(0, "white");
lineargradient.addColorStop(1, "black");
```

### Ein `createLinearGradient`-Beispiel

In diesem Beispiel erstellen wir zwei verschiedene Farbverläufe. Wie Sie hier sehen können, können sowohl die Eigenschaften `strokeStyle` als auch `fillStyle` ein `canvasGradient`-Objekt als gültige Eingabe akzeptieren.

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

Der erste ist ein Hintergrundfarbverlauf. Wie Sie sehen können, haben wir zwei Farben an derselben Position zugewiesen. Dies tun Sie, um sehr scharfe Farbübergänge zu erzeugen – in diesem Fall von Weiß zu Grün. Normalerweise spielt die Reihenfolge, in der Sie die Farbstopps definieren, keine Rolle, aber in diesem speziellen Fall ist sie von erheblicher Bedeutung. Wenn Sie die Zuweisungen in der Reihenfolge beibehalten, in der sie erscheinen sollen, ist dies kein Problem.

Im zweiten Farbverlauf haben wir die Startfarbe (bei Position 0.0) nicht zugewiesen, da dies nicht unbedingt erforderlich war, weil automatisch die Farbe des nächsten Farbstopps angenommen wird. Daher führt die Zuweisung der schwarzen Farbe an Position 0.5 automatisch dazu, dass der Farbverlauf vom Beginn bis zu diesem Stopp schwarz ist.

{{EmbedLiveSample("A_createLinearGradient_example", "", "160")}}

### Ein `createRadialGradient`-Beispiel

In diesem Beispiel definieren wir vier verschiedene radiale Farbverläufe. Da wir Kontrolle über die Start- und Endpunkte des Farbverlaufs haben, können wir komplexere Effekte erzielen, als dies normalerweise mit den „klassischen“ radialen Farbverläufen möglich wäre, die wir beispielsweise in Photoshop sehen (also ein Farbverlauf mit einem einzelnen Mittelpunkt, an dem sich der Verlauf kreisförmig nach außen ausbreitet).

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

In diesem Fall haben wir den Startpunkt leicht vom Endpunkt versetzt, um einen kugelförmigen 3D-Effekt zu erzielen. Es ist am besten, Überlappungen des inneren und äußeren Kreises zu vermeiden, da dies zu seltsamen und schwer vorhersehbaren Effekten führt.

Der letzte Farbstopp in jedem der vier Farbverläufe verwendet eine vollständig transparente Farbe. Wenn Sie einen schönen Übergang von dieser zur vorherigen Farbe erzielen möchten, sollten beide Farben gleich sein. Dies ist im Code nicht sehr offensichtlich, da zur Demonstration zwei verschiedene CSS-Farbmethoden verwendet werden, aber im ersten Farbverlauf gilt `#019F62 = rgb(1 159 98 / 100%)`.

{{EmbedLiveSample("A_createRadialGradient_example", "", "160")}}

### Ein `createConicGradient`-Beispiel

In diesem Beispiel definieren wir zwei verschiedene konische Farbverläufe. Ein konischer Farbverlauf unterscheidet sich von einem radialen Farbverlauf dadurch, dass er sich um einen Punkt dreht, anstatt Kreise zu erzeugen.

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

Der erste Farbverlauf ist in der Mitte des ersten Rechtecks positioniert und bewegt einen grünen Farbstopp am Anfang zu einem weißen am Ende. Der Winkel beginnt bei 2 Radiant, was durch die nach Südosten weisende Anfangs-/Endlinie erkennbar ist.

Der zweite Farbverlauf befindet sich ebenfalls in der Mitte des zweiten Rechtecks. Dieser hat mehrere Farbstopps, die sich bei jedem Viertel der Drehung zwischen Schwarz und Weiß abwechseln. Dadurch entsteht der Schachbretteffekt.

{{EmbedLiveSample("A_createConicGradient_example", "", "160")}}

## Muster

In einem der Beispiele auf der vorherigen Seite haben wir eine Reihe von Schleifen verwendet, um ein Muster aus Bildern zu erstellen. Es gibt jedoch eine wesentlich einfachere Methode: die Methode `createPattern()`.

- [`createPattern(image, type)`](/de/docs/Web/API/CanvasRenderingContext2D/createPattern)
  - : Erstellt und gibt ein neues Canvas-Musterobjekt zurück. `image` ist die Quelle des Bildes (d.h. ein [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement), ein [`SVGImageElement`](/de/docs/Web/API/SVGImageElement), ein weiteres [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) oder ein [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas), ein [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) oder ein [`VideoFrame`](/de/docs/Web/API/VideoFrame) oder ein [`ImageBitmap`](/de/docs/Web/API/ImageBitmap)). `type` ist ein String, der angibt, wie das Bild verwendet werden soll.

Der Typ gibt an, wie das Bild verwendet werden soll, um das Muster zu erstellen, und muss einer der folgenden String-Werte sein:

- `repeat`
  - : Kachelt das Bild sowohl vertikal als auch horizontal.
- `repeat-x`
  - : Kachelt das Bild horizontal, aber nicht vertikal.
- `repeat-y`
  - : Kachelt das Bild vertikal, aber nicht horizontal.
- `no-repeat`
  - : Kachelt das Bild nicht. Es wird nur einmal verwendet.

Wir verwenden diese Methode, um ein [`CanvasPattern`](/de/docs/Web/API/CanvasPattern)-Objekt zu erstellen, das den oben gesehenen Verlaufsmethoden sehr ähnlich ist. Nachdem wir ein Muster erstellt haben, können wir es den Eigenschaften `fillStyle` oder `strokeStyle` zuweisen. Zum Beispiel:

```js
const img = new Image();
img.src = "some-image.png";
const pattern = ctx.createPattern(img, "repeat");
```

> [!NOTE]
> Wie bei der Methode `drawImage()` müssen Sie sicherstellen, dass das verwendete Bild geladen ist, bevor Sie diese Methode aufrufen, da das Muster andernfalls möglicherweise falsch gezeichnet wird.

### Ein `createPattern`-Beispiel

In diesem letzten Beispiel erstellen wir ein Muster, das der Eigenschaft `fillStyle` zugewiesen wird. Das Einzige, das erwähnenswert ist, ist die Verwendung des `onload`-Handlers des Bildes. Dadurch wird sichergestellt, dass das Bild geladen ist, bevor es dem Muster zugewiesen wird.

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

Die Verwendung von Schatten umfasst nur vier Eigenschaften:

- [`shadowOffsetX = float`](/de/docs/Web/API/CanvasRenderingContext2D/shadowOffsetX)
  - : Gibt die horizontale Entfernung an, um die sich der Schatten vom Objekt erstrecken soll. Dieser Wert wird nicht durch die Transformationsmatrix beeinflusst. Der Standardwert ist 0.
- [`shadowOffsetY = float`](/de/docs/Web/API/CanvasRenderingContext2D/shadowOffsetY)
  - : Gibt die vertikale Entfernung an, um die sich der Schatten vom Objekt erstrecken soll. Dieser Wert wird nicht durch die Transformationsmatrix beeinflusst. Der Standardwert ist 0.
- [`shadowBlur = float`](/de/docs/Web/API/CanvasRenderingContext2D/shadowBlur)
  - : Gibt die Größe des Unschärfeeffekts an; dieser Wert entspricht keiner Anzahl von Pixeln und wird nicht durch die aktuelle Transformationsmatrix beeinflusst. Der Standardwert ist 0.
- [`shadowColor = color`](/de/docs/Web/API/CanvasRenderingContext2D/shadowColor)
  - : Ein standardmäßiger CSS-Farbwert, der die Farbe des Schatteneffekts angibt; standardmäßig ist dies vollständig transparentes Schwarz.

Die Eigenschaften `shadowOffsetX` und `shadowOffsetY` geben an, wie weit sich der Schatten vom Objekt in X- und Y-Richtung erstrecken soll; diese Werte werden nicht durch die aktuelle Transformationsmatrix beeinflusst. Verwenden Sie negative Werte, damit sich der Schatten nach oben oder links erstreckt, und positive Werte, damit er sich nach unten oder rechts erstreckt. Beide sind standardmäßig 0.

Die Eigenschaft `shadowBlur` gibt die Größe des Unschärfeeffekts an; dieser Wert entspricht keiner Anzahl von Pixeln und wird nicht durch die aktuelle Transformationsmatrix beeinflusst. Der Standardwert ist 0.

Die Eigenschaft `shadowColor` ist ein standardmäßiger CSS-Farbwert, der die Farbe des Schatteneffekts angibt; standardmäßig ist dies vollständig transparentes Schwarz.

> [!NOTE]
> Schatten werden nur für `source-over`-[Kompositionsoperationen](/de/docs/Web/API/Canvas_API/Tutorial/Compositing) gezeichnet.

### Ein Beispiel für Text mit Schatten

Dieses Beispiel zeichnet eine Textzeichenfolge mit einem Schatteneffekt.

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

Wir werden die Eigenschaft `font` und die Methode `fillText` im nächsten Kapitel über das [Zeichnen von Text](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text) betrachten.

## Canvas-Füllregeln

Bei der Verwendung von `fill` (oder [`clip`](/de/docs/Web/API/CanvasRenderingContext2D/clip) und [`isPointInPath`](/de/docs/Web/API/CanvasRenderingContext2D/isPointInPath)) können Sie optional einen Füllregelalgorithmus angeben, der bestimmt, ob ein Punkt innerhalb oder außerhalb eines Pfads liegt und somit gefüllt wird oder nicht. Dies ist nützlich, wenn sich ein Pfad selbst schneidet oder verschachtelt ist.

Zwei Werte sind möglich:

- `nonzero`
  - : Die [Nicht-Null-Windungsregel](https://en.wikipedia.org/wiki/Nonzero-rule), die die Standardregel ist.
- `evenodd`
  - : Die [Gerade-Ungerade-Windungsregel](https://en.wikipedia.org/wiki/Even%E2%80%93odd_rule).

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
