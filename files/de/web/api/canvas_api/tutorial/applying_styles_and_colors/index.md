---
title: Anwendung von Stilen und Farben
slug: Web/API/Canvas_API/Tutorial/Applying_styles_and_colors
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Drawing_shapes", "Web/API/Canvas_API/Tutorial/Drawing_text")}}

Im Kapitel über [Formen zeichnen](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes) haben wir nur die Standardlinien- und -füllstile verwendet. Hier werden wir die Canvas-Optionen erkunden, die uns zur Verfügung stehen, um unsere Zeichnungen ein wenig attraktiver zu gestalten. Sie werden lernen, wie man verschiedene Farben, Linienstile, Verläufe, Muster und Schatten zu Ihren Zeichnungen hinzufügt.

> [!NOTE]
> Canvas-Inhalte sind für Screenreader nicht zugänglich. Wenn das Canvas rein dekorativ ist, fügen Sie `role="presentation"` zum öffnenden `<canvas>`-Tag hinzu. Ansonsten fügen Sie beschreibenden Text als Wert des [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)-Attributs direkt zum Canvas-Element hinzu oder integrieren Sie alternativen Inhalt zwischen dem öffnenden und schließenden Canvas-Tag. Canvas-Inhalte sind nicht Teil des DOMs, aber verschachtelte alternative Inhalte sind es.

## Farben

Bis jetzt haben wir nur Methoden des Zeichenkontexts gesehen. Wenn wir Farben auf eine Form anwenden möchten, stehen uns zwei wichtige Eigenschaften zur Verfügung: `fillStyle` und `strokeStyle`.

- {{domxref("CanvasRenderingContext2D.fillStyle", "fillStyle = color")}}
  - : Legt den Stil fest, der beim Füllen von Formen verwendet wird.
- {{domxref("CanvasRenderingContext2D.strokeStyle", "strokeStyle = color")}}
  - : Legt den Stil für die Umrisse von Formen fest.

`color` ist ein String, der entweder eine CSS-{{cssxref("&lt;color&gt;")}}, ein Verlaufsobjekt oder ein Musterobjekt darstellt. Wir werden uns später mit Verlaufs- und Musterobjekten beschäftigen. Standardmäßig sind die Strich- und Füllfarben auf Schwarz (CSS-Farbwert `#000000`) eingestellt.

> [!NOTE]
> Wenn Sie die Eigenschaft `strokeStyle` und/oder `fillStyle` festlegen, wird der neue Wert zum Standard für alle danach gezeichneten Formen. Für jede Form, die Sie in einer anderen Farbe wünschen, müssen Sie die Eigenschaft `fillStyle` oder `strokeStyle` neu zuweisen.

Die gültigen Strings, die Sie eingeben können, sollten laut Spezifikation CSS-{{cssxref("&lt;color&gt;")}}-Werte sein. Jedes der folgenden Beispiele beschreibt dieselbe Farbe.

```js
// alle setzen den fillStyle auf 'orange'

ctx.fillStyle = "orange";
ctx.fillStyle = "#FFA500";
ctx.fillStyle = "rgb(255 165 0)";
ctx.fillStyle = "rgb(255 165 0 / 100%)";
```

### Ein `fillStyle`-Beispiel

In diesem Beispiel verwenden wir erneut zwei `for`-Schleifen, um ein Raster aus Rechtecken zu zeichnen, jedes in einer anderen Farbe. Das resultierende Bild sollte ungefähr wie der Screenshot aussehen. Hier passiert nichts allzu Spektakuläres. Wir verwenden die beiden Variablen `i` und `j`, um eine einzigartige RGB-Farbe für jedes Quadrat zu generieren, und modifizieren nur die Rot- und Grünwerte. Der Blaukanal hat einen festen Wert. Durch das Modifizieren der Kanäle können Sie alle Arten von Paletten generieren. Durch Erhöhen der Schritte können Sie etwas erreichen, das wie die Farbpaletten von Photoshop aussieht.

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

Dieses Beispiel ist dem obigen ähnlich, verwendet jedoch die Eigenschaft `strokeStyle`, um die Farben der Umrisse der Formen zu ändern. Wir verwenden die Methode `arc()`, um Kreise anstelle von Quadraten zu zeichnen.

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

Zusätzlich zum Zeichnen opaker Formen auf dem Canvas können wir auch halbtransparente (oder durchsichtige) Formen zeichnen. Dies wird entweder durch Festlegen der Eigenschaft `globalAlpha` oder durch Zuordnung einer halbtransparenten Farbe zum Füll- und/oder Strichstil erreicht.

- {{domxref("CanvasRenderingContext2D.globalAlpha", "globalAlpha = transparencyValue")}}
  - : Wendet den angegebenen Transparenzwert auf alle zukünftig auf dem Canvas gezeichneten Formen an. Der Wert muss zwischen 0,0 (vollständig transparent) und 1,0 (vollständig opak) liegen. Dieser Wert ist standardmäßig 1,0 (vollständig opak).

Die Eigenschaft `globalAlpha` kann nützlich sein, wenn Sie viele Formen auf dem Canvas mit ähnlicher Transparenz zeichnen möchten. Ansonsten ist es in der Regel nützlicher, die Transparenz auf einzelnen Formen festzulegen, wenn man ihre Farben setzt.

Da die Eigenschaften `strokeStyle` und `fillStyle` CSS-RGB-Farbwerte akzeptieren, können wir die folgende Notation verwenden, um ihnen eine transparente Farbe zuzuweisen.

```js
// Zuweisung transparenter Farben zu Füll- und Strichstil

ctx.strokeStyle = "rgb(255 0 0 / 50%)";
ctx.fillStyle = "rgb(255 0 0 / 50%)";
```

Die Funktion `rgb()` hat einen optionalen zusätzlichen Parameter. Der letzte Parameter legt den Transparenzwert dieser bestimmten Farbe fest. Der gültige Bereich wird als Prozentsatz zwischen `0%` (vollständig transparent) und `100%` (vollständig opak) oder als Zahl zwischen `0,0` (entspricht `0%`) und `1,0` (entspricht `100%`) spezifiziert.

### Ein `globalAlpha`-Beispiel

In diesem Beispiel zeichnen wir einen Hintergrund aus vier unterschiedlich gefärbten Quadraten. Darüber zeichnen wir eine Reihe von halbtransparenten Kreisen. Die Eigenschaft `globalAlpha` ist auf `0.2` gesetzt, was für alle Formen von da an verwendet wird. Jeder Schritt in der `for`-Schleife zeichnet eine Reihe von Kreisen mit einem zunehmenden Radius. Das Endergebnis ist ein radialer Verlauf. Durch das Überlagern von immer mehr Kreisen übereinander reduzieren wir effektiv die Transparenz der bereits gezeichneten Kreise. Durch Erhöhen der Schrittanzahl und damit Zeichnen von mehr Kreisen würde der Hintergrund vollständig aus der Mitte des Bildes verschwinden.

```js
function draw() {
  const ctx = document.getElementById("canvas").getContext("2d");
  // Hintergrund zeichnen
  ctx.fillStyle = "#FD0";
  ctx.fillRect(0, 0, 75, 75);
  ctx.fillStyle = "#6C0";
  ctx.fillRect(75, 0, 75, 75);
  ctx.fillStyle = "#09F";
  ctx.fillRect(0, 75, 75, 75);
  ctx.fillStyle = "#F30";
  ctx.fillRect(75, 75, 75, 75);
  ctx.fillStyle = "#FFF";

  // Transparenzwert festlegen
  ctx.globalAlpha = 0.2;

  // Halbtransparente Kreise zeichnen
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

In diesem zweiten Beispiel machen wir etwas Ähnliches wie oben, aber anstatt Kreise übereinander zu zeichnen, habe ich kleine Rechtecke mit zunehmender Deckkraft gezeichnet. Die Verwendung von `rgb()` gibt Ihnen ein wenig mehr Kontrolle und Flexibilität, da wir den Füll- und den Strichstil individuell festlegen können.

```js
function draw() {
  const ctx = document.getElementById("canvas").getContext("2d");

  // Hintergrund zeichnen
  ctx.fillStyle = "rgb(255 221 0)";
  ctx.fillRect(0, 0, 150, 37.5);
  ctx.fillStyle = "rgb(102 204 0)";
  ctx.fillRect(0, 37.5, 150, 37.5);
  ctx.fillStyle = "rgb(0 153 255)";
  ctx.fillRect(0, 75, 150, 37.5);
  ctx.fillStyle = "rgb(255 51 0)";
  ctx.fillRect(0, 112.5, 150, 37.5);

  // Halbtransparente Rechtecke zeichnen
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

- {{domxref("CanvasRenderingContext2D.lineWidth", "lineWidth = value")}}
  - : Setzt die Breite der zukünftig gezeichneten Linien.
- {{domxref("CanvasRenderingContext2D.lineCap", "lineCap = type")}}
  - : Bestimmt das Aussehen der Enden von Linien.
- {{domxref("CanvasRenderingContext2D.lineJoin", "lineJoin = type")}}
  - : Bestimmt das Aussehen der "Ecken", an denen Linien zusammentreffen.
- {{domxref("CanvasRenderingContext2D.miterLimit", "miterLimit = value")}}
  - : Legt ein Limit für die Verlängerung fest, wenn zwei Linien mit einem scharfen Winkel verbunden werden, um zu kontrollieren, wie dick der Übergang wird.
- {{domxref("CanvasRenderingContext2D.getLineDash", "getLineDash()")}}
  - : Gibt das aktuelle Linienstil-Musterarray zurück, das eine gerade Anzahl von nicht-negativen Zahlen enthält.
- {{domxref("CanvasRenderingContext2D.setLineDash", "setLineDash(segments)")}}
  - : Setzt das aktuelle Linienstil-Muster.
- {{domxref("CanvasRenderingContext2D.lineDashOffset", "lineDashOffset = value")}}
  - : Gibt an, wo ein Strichmuster auf einer Linie beginnen soll.

Sie werden ein besseres Verständnis davon bekommen, was diese tun, indem Sie sich die folgenden Beispiele ansehen.

### Ein `lineWidth`-Beispiel

Diese Eigenschaft legt die aktuelle Linienstärke fest. Werte müssen positive Zahlen sein. Standardmäßig ist dieser Wert auf 1,0 Einheiten eingestellt.

Die Linienbreite ist die Dicke des Strichs, die in der Mitte des gegebenen Pfads zentriert ist. Mit anderen Worten: Der gezeichnete Bereich erstreckt sich zur Hälfte der Linienbreite auf beiden Seiten des Pfades. Da Canvas-Koordinaten keine direkten Pixel referenzieren, muss besondere Sorgfalt aufgewendet werden, um klare horizontale und vertikale Linien zu erzielen.

Im folgenden Beispiel werden 10 gerade Linien mit zunehmenden Linienbreiten gezeichnet. Die Linie ganz links ist 1,0 Einheiten breit. Allerdings erscheinen die ganz linke und alle anderen ungeraden dickeren Linien nicht klar, aufgrund der Positionierung des Pfades.

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

Klaren Linien zu erhalten, erfordert ein Verständnis dafür, wie Pfade gezeichnet werden. In den Bildern unten repräsentiert das Raster das Canvas-Koordinatenraster. Die Quadrate zwischen den Rasterlinien sind tatsächliche Bildschirm-Pixel. Im ersten Rasterbild unten wird ein Rechteck von (2,1) bis (5,5) gefüllt. Der gesamte Bereich dazwischen (leicht rot) fällt auf Pixellinien, sodass das resultierende gefüllte Rechteck scharfe Kanten hat.

![Drei Koordinatenraster. Die Rasterlinien sind tatsächliche Bildschirm-Pixel. Die obere linke Ecke jedes Rasters ist als (0,0) gekennzeichnet. Im ersten Raster ist ein Rechteck von (2,1) bis (5,5) in hellrot gefärbt. Im zweiten Raster ist (3,1) bis (3,5) mit einer 1-Pixel dicken königsblauen Linie verbunden. Die königsblaue Linie befindet sich zentriert auf einer Rasterlinie, erstreckt sich von 2,5 bis 3,5 auf der x-Achse und halb in die Pixel auf beiden Seiten der Rasterlinie hinein, mit einem hellblauen Hintergrund auf beiden Seiten, der sich von 2 bis 4 auf der x-Achse erstreckt. Um die hellblaue Unschärfe der Linie im zweiten Koordinatenraster zu vermeiden, ist der Pfad im dritten Koordinatenraster eine königsblaue Linie von (3,5,1) bis (3,5,5). Die 1-Pixel-Linienbreite endet vollständig und füllt eine einzelne Pixel-vertikale Linie präzise aus.](canvas-grid.png)

Wenn Sie einen Pfad von (3,1) bis (3,5) mit einer Linienbreite von `1.0` betrachten, enden Sie mit der Situation im zweiten Bild. Der tatsächlich zu füllende Bereich (dunkelblau) erstreckt sich nur halb in die Pixel auf beiden Seiten des Pfades. Eine Annäherung an diese muss gerendert werden, was bedeutet, dass diese Pixel nur teilweise überdeckt werden, was dazu führt, dass der gesamte Bereich (das Hell- und Dunkelblau) mit einer Farbe gefüllt wird, die nur halb so dunkel ist wie die tatsächliche Strichfarbe. Das ist das, was bei der `1.0` dicken Linie im vorherigen Beispielcode passiert.

Um dies zu korrigieren, müssen Sie sehr präzise bei der Erstellung Ihres Pfades sein. Wenn Sie wissen, dass eine `1.0` dicke Linie sich halb um die Einheit auf beiden Seiten des Pfades erstrecken wird, führt das Erstellen des Pfades von (3.5,1) bis (3.5,5) zu der Situation im dritten Bild – die `1.0` Linienbreite füllt am Ende vollständig und präzise eine einzelne Pixel-vertikale Linie aus.

> [!NOTE]
> Seien Sie sich bewusst, dass in unserem Beispiel mit der vertikalen Linie die Y-Position immer noch eine ganzzahlige Rasterposition referenziert — wenn dies nicht der Fall wäre, würden wir Pixel mit halber Abdeckung an den Endpunkten sehen (beachten Sie jedoch, dass dieses Verhalten vom aktuellen `lineCap`-Stil abhängt, dessen Standardwert `butt` ist; Sie möchten möglicherweise konsistente Striche mit Halbpixel-Koordinaten für ungerade breite Linien berechnen, indem Sie den `lineCap`-Stil auf `square` setzen, sodass die äußere Begrenzung des Strichs um den Endpunkt automatisch erweitert wird, um das gesamte Pixel exakt zu überdecken).
>
> Beachten Sie auch, dass nur Start- und Endendpunkte eines Pfades betroffen sind: Wenn ein Pfad mit `closePath()` geschlossen wird, gibt es keine Start- und Endendpunkte mehr; stattdessen werden alle Endpunkte im Pfad mit dem aktuellen `lineJoin`-Stil verbunden, dessen Standardwert `miter` ist, was den Effekt hat, die äußeren Begrenzungen der verbundenen Segmente zu ihrem Schnittpunkt automatisch zu verlängern, sodass der gerenderte Strich genau volle Pixel um jeden Endpunkt herum überdeckt, wenn diese verbundenen Segmente horizontal und/oder vertikal sind. In den nächsten beiden Abschnitten werden diese weiteren Linienstile demonstriert.

Für Linien mit gerader Breite endet jede Hälfte als eine ganze Anzahl von Pixeln, sodass Sie einen Pfad haben möchten, der zwischen den Pixeln liegt (d. h. (3,1) bis (3,5)), anstatt in der Mitte der Pixel.

Während es anfänglich etwas schmerzlich sein kann, mit skalierbaren 2D-Grafiken zu arbeiten, sorgt die Beachtung des Pixelrasters und der Positionierung von Pfaden dafür, dass Ihre Zeichnungen unabhängig von der Skalierung oder anderen beteiligten Transformationen korrekt aussehen. Eine korrekt positionierte vertikale Linie mit 1.0-Breite wird zu einer klaren 2-Pixel-Linie, wenn sie um das 2-fache skaliert wird, und erscheint an der richtigen Position.

### Ein `lineCap`-Beispiel

Die `lineCap`-Eigenschaft bestimmt, wie die Endpunkte jeder Linie gezeichnet werden. Es gibt drei mögliche Werte für diese Eigenschaft und diese sind: `butt`, `round` und `square`. Standardmäßig ist diese Eigenschaft auf `butt` eingestellt:

- `butt`
  - : Die Enden von Linien sind an den Endpunkten abgeflacht.
- `round`
  - : Die Enden von Linien sind abgerundet.
- `square`
  - : Die Enden von Linien werden durch Hinzufügen eines Kästchens mit gleicher Breite und halber Höhe der Liniendicke abgeflacht.

In diesem Beispiel werden wir drei Linien zeichnen, jede mit einem anderen Wert für die `lineCap`-Eigenschaft. Ich habe auch zwei Leitlinien hinzugefügt, um die genauen Unterschiede zwischen den dreien zu sehen. Jede dieser Linien beginnt und endet genau auf diesen Leitlinien.

Die Linie links verwendet die Standardoption `butt`. Sie werden feststellen, dass sie völlig bündig mit den Leitlinien gezeichnet wird. Die zweite ist so eingestellt, dass sie die `round`-Option verwendet. Dies fügt dem Ende einen Halbkreis hinzu, der einen Radius von halb der Linienbreite hat. Die Linie rechts verwendet die `square`-Option. Dies fügt die Linienbreite plus die halbe Breite der Linienstärke.

```js
function draw() {
  const ctx = document.getElementById("canvas").getContext("2d");

  // Leitlinien zeichnen
  ctx.strokeStyle = "#09f";
  ctx.beginPath();
  ctx.moveTo(10, 10);
  ctx.lineTo(140, 10);
  ctx.moveTo(10, 140);
  ctx.lineTo(140, 140);
  ctx.stroke();

  // Linien zeichnen
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

Die `lineJoin`-Eigenschaft bestimmt, wie zwei verbundene Segmente (von Linien, Bögen oder Kurven) mit nicht-nulliger Länge in einer Form miteinander verbunden werden (entartete Segmente mit nuller Länge, deren spezifizierte Endpunkte und Steuerpunkte sich genau an derselben Position befinden, werden übersprungen).

Es gibt drei mögliche Werte für diese Eigenschaft: `round`, `bevel` und `miter`. Standardmäßig ist diese Eigenschaft auf `miter` eingestellt. Beachten Sie, dass die `lineJoin`-Einstellung keine Wirkung hat, wenn die beiden verbundenen Segmente dieselbe Richtung haben, da in diesem Fall kein Verbindungsbereich hinzugefügt wird:

- `round`
  - : Rundet die Ecken einer Form ab, indem er einen zusätzlichen Sektor einer Scheibe füllt, deren Mittelpunkt sich am gemeinsamen Endpunkt der verbundenen Segmente befindet. Der Radius für diese abgerundeten Ecken entspricht der halben Linienbreite.
- `bevel`
  - : Füllt einen zusätzlichen dreieckigen Bereich zwischen dem gemeinsamen Endpunkt der verbundenen Segmente und den separaten äußeren rechtwinkligen Ecken jedes Segments.
- `miter`
  - : Verbundene Segmente werden verbunden, indem ihre äußeren Kanten so weit verlängert werden, dass sie an einem Punkt verbunden werden, mit dem Effekt, einen zusätzlichen rautenförmigen Bereich zu füllen. Diese Einstellung wird von der `miterLimit`-Eigenschaft beeinflusst, die unten erklärt wird.

Das untenstehende Beispiel zeichnet drei verschiedene Pfade, die jede dieser drei `lineJoin`-Eigenschaftseinstellungen demonstrieren; die Ausgabe wird oben angezeigt.

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

Wie Sie im vorherigen Beispiel gesehen haben, werden beim Verbinden von zwei Linien mit der `miter`-Option die äußeren Kanten der beiden verbundenen Linien bis zu dem Punkt verlängert, an dem sie sich treffen. Für Linien, die in einem großen Winkel zueinander stehen, ist dieser Punkt nicht weit vom inneren Verbindungspunkt entfernt. Wenn jedoch die Winkel zwischen den Linien abnehmen, steigt die Entfernung (Mitelänge) zwischen diesen Punkten exponentiell an.

Die Eigenschaft `miterLimit` bestimmt, wie weit der äußere Verbindungspunkt vom inneren Verbindungspunkt entfernt sein kann. Wenn zwei Linien diesen Wert überschreiten, wird stattdessen eine abgeschrägte Verbindung gezeichnet. Beachten Sie, dass die maximale Mitellänge das Produkt der Linienbreite ist, gemessen im aktuellen Koordinatensystem, multipliziert mit dem Wert dieser `miterLimit`-Eigenschaft (deren Standardwert 10.0 im HTML-Element der {{HTMLElement("canvas")}} ist), sodass das `miterLimit` unabhängig von der aktuellen Anzeigeskala oder irgendwelchen affinen Transformationen von Pfaden festgelegt werden kann: es beeinflusst nur die tatsächlich gerenderte Form der Außenkanten.

Genauer gesagt ist das Mitelimit das maximal zulässige Verhältnis der Verlängerungslänge (im HTML-Canvas wird es gemessen zwischen der äußeren Ecke der verbundenen Kanten der Linie und dem gemeinsamen Endpunkt der verbundenen Segmente, die im Pfad angegeben sind) zur halben Linienbreite. Es kann gleichwertig als das maximal zulässige Verhältnis der Entfernung zwischen den inneren und äußeren Verbindungspunkten der Außenkanten, zur gesamten Linienbreite definiert werden. Es entspricht dann dem Kosekans des halben minimalen Innenwinkels der verbundenen Segmente, unterhalb dessen keine Mitertons mehr gerendert werden, sondern nur eine Abschrägung:

- `miterLimit` = **max** `miterLength` / `lineWidth` = 1 / **sin** ( **min** _θ_ / 2 )
- Das Standard-Mitellimit von 10,0 beseitigt Miter für scharfe Winkel unter etwa 11 Grad.
- Ein Mitellimit gleich √2 ≈ 1,4142136 (aufgerundet) beseitigt Mitertons für alle spitzen Winkel und erhält Mitertons nur für stumpfe oder rechte Winkel.
- Ein Mitellimit von 1.0 ist gültig, beseitigt jedoch alle Mitertons.
- Werte unter 1.0 sind für das Mitellimit ungültig.

Hier ist eine kleine Demo, in der Sie das `miterLimit` dynamisch einstellen können, um zu sehen, wie sich dies auf die Formen auf der Leinwand auswirkt. Die blauen Linien zeigen, wo die Start- und Endpunkte für jede der Linien im Zickzackmuster sind.

Wenn Sie einen `miterLimit`-Wert unter 4,2 in dieser Demo angeben, wird keiner der sichtbaren Ecken mit einer Mitertonsverlängerung verbunden, sondern nur mit einer kleinen Abschrägung in der Nähe der blauen Linien; mit einem `miterLimit` über 10 sollten die meisten Ecken in dieser Demo mit einem Miter weit entfernt von den blauen Linien verbunden sein, dessen Höhe zwischen den Ecken von links nach rechts abnimmt, da sie mit zunehmenden Winkeln verbunden sind; mit Zwischenwerten werden die Ecken auf der linken Seite der Demo nur mit einer Abschrägung in der Nähe der blauen Linien verbunden, und die Ecken auf der rechten Seite mit einer Mitertonsverlängerung (ebenfalls mit abnehmender Höhe).

```js
function draw() {
  const ctx = document.getElementById("canvas").getContext("2d");

  // Leinwand löschen
  ctx.clearRect(0, 0, 150, 150);

  // Leitlinien zeichnen
  ctx.strokeStyle = "#09f";
  ctx.lineWidth = 2;
  ctx.strokeRect(-5, 50, 160, 50);

  // Liniensytile setzen
  ctx.strokeStyle = "#000";
  ctx.lineWidth = 10;

  // Eingabe prüfen
  if (document.getElementById("miterLimit").checkValidity()) {
    ctx.miterLimit = parseFloat(document.getElementById("miterLimit").value);
  }

  // Linien zeichnen
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
      Ändern Sie das <code>miterLimit</code>, indem Sie unten einen neuen Wert eingeben und die Schaltfläche "Neuzeichnen" klicken.<br /><br />
      <label for="miterLimit">Mitellimit</label>
      <input type="number" id="miterLimit" size="3" min="1" />
      <input type="submit" id="redraw" value="Neuzeichnen" />
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

### Verwendung von Linienstilen

Die Methode `setLineDash` und die Eigenschaft `lineDashOffset` spezifizieren das Strichmuster für Linien. Die Methode `setLineDash` akzeptiert eine Liste von Zahlen, die Entfernungen angeben, um abwechselnd eine Linie und eine Lücke zu zeichnen, und die Eigenschaft `lineDashOffset` setzt einen Versatz, wo das Muster beginnen soll.

In diesem Beispiel erstellen wir einen Marschierenden-Ameisen-Effekt. Es ist eine Animationstechnik, die oft in Auswahlwerkzeugen von Computer-Grafikprogrammen zu finden ist. Sie hilft dem Benutzer, den Auswahlrand vom Hintergrundbild zu unterscheiden, indem sie den Rand animiert. In einem späteren Teil dieses Tutorials können Sie lernen, wie Sie dies und andere [grundlegende Animationen](/de/docs/Web/API/Canvas_API/Tutorial/Basic_animations) machen.

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

Genau wie bei jedem normalen Zeichenprogramm, können wir Formen mit linearen, radialen und Konusverläufen füllen und nachzeichnen. Wir erstellen ein {{domxref("CanvasGradient")}}-Objekt, indem wir eine der folgenden Methoden verwenden. Wir können dann dieses Objekt den Eigenschaften `fillStyle` oder `strokeStyle` zuweisen.

- {{domxref("CanvasRenderingContext2D.createLinearGradient", "createLinearGradient(x1, y1, x2, y2)")}}
  - : Erstellt ein lineares Verlaufsobjekt mit einem Startpunkt von (`x1`, `y1`) und einem Endpunkt von (`x2`, `y2`).
- {{domxref("CanvasRenderingContext2D.createRadialGradient", "createRadialGradient(x1, y1, r1, x2, y2, r2)")}}
  - : Erstellt ein radialen Verlauf. Die Parameter repräsentieren zwei Kreise, einen mit seinem Zentrum bei (`x1`, `y1`) und einem Radius von `r1`, und den anderen mit seinem Zentrum bei (`x2`, `y2`) mit einem Radius von `r2`.
- {{domxref("CanvasRenderingContext2D.createConicGradient", "createConicGradient(angle, x, y)")}}
  - : Erstellt ein konusförmiges Verlaufsobjekt mit einem Startwinkel von `angle` in Radianten, an der Position (`x`, `y`).

Zum Beispiel:

```js
const lineargradient = ctx.createLinearGradient(0, 0, 150, 150);
const radialgradient = ctx.createRadialGradient(75, 75, 0, 75, 75, 100);
```

Nachdem wir ein `CanvasGradient`-Objekt erstellt haben, können wir Farben zu ihm mit der Methode `addColorStop()` hinzufügen.

- {{domxref("CanvasGradient.addColorStop", "gradient.addColorStop(position, color)")}}
  - : Erstellt einen neuen Farbunterbrechungspunkt auf dem `gradient`-Objekt. Die `position` ist eine Zahl zwischen 0.0 und 1.0 und definiert die relative Position der Farbe im Verlauf, und das `color` Argument muss ein String sein, der einen CSS-{{cssxref("&lt;color&gt;")}} darstellt und die Farbe angibt, die der Verlauf bei diesem Offset in der Übergangsphase erreichen soll.

Sie können so viele Farbunterbrechungen zu einem Verlauf hinzufügen, wie Sie benötigen. Unten ist ein sehr einfacher linearer Verlauf von Weiß zu Schwarz.

```js
const lineargradient = ctx.createLinearGradient(0, 0, 150, 150);
lineargradient.addColorStop(0, "white");
lineargradient.addColorStop(1, "black");
```

### Ein `createLinearGradient`-Beispiel

In diesem Beispiel erstellen wir zwei verschiedene Verläufe. Wie Sie hier sehen können, können sowohl die Eigenschaften `strokeStyle` als auch `fillStyle` ein `canvasGradient`-Objekt als gültige Eingabe akzeptieren.

```js
function draw() {
  const ctx = document.getElementById("canvas").getContext("2d");

  // Verläufe erstellen
  const lingrad = ctx.createLinearGradient(0, 0, 0, 150);
  lingrad.addColorStop(0, "#00ABEB");
  lingrad.addColorStop(0.5, "#fff");
  lingrad.addColorStop(0.5, "#26C000");
  lingrad.addColorStop(1, "#fff");

  const lingrad2 = ctx.createLinearGradient(0, 50, 0, 95);
  lingrad2.addColorStop(0.5, "#000");
  lingrad2.addColorStop(1, "rgb(0 0 0 / 0%)");

  // Verläufe zu Füll- und Strichstilen zuweisen
  ctx.fillStyle = lingrad;
  ctx.strokeStyle = lingrad2;

  // Formen zeichnen
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

Der erste ist ein Hintergrundverlauf. Wie Sie sehen können, haben wir zwei Farben an derselben Position zugewiesen. Sie tun dies, um sehr scharfe Farbwechsel zu erzeugen – in diesem Fall von Weiß nach Grün. Normalerweise spielt es keine Rolle, in welcher Reihenfolge Sie die Farbunterbrechungen definieren, aber in diesem speziellen Fall spielt es signifikant eine Rolle. Wenn Sie die Zuweisungen in der Reihenfolge halten, Sie wollen, dass sie erscheinen, wird dies kein Problem sein.

Im zweiten Verlauf haben wir die Startfarbe (an der Position 0.0) nicht zugewiesen, da es nicht zwingend nötig war, weil es automatisch die Farbe des nächsten Farbunterbrechungsabschnitts annehmen wird. Daher macht der Verlauf automatisch von Anfang an bis zu diesem Abschnitt schwarz.

{{EmbedLiveSample("A_createLinearGradient_example", "", "160")}}

### Ein `createRadialGradient`-Beispiel

In diesem Beispiel definieren wir vier verschiedene radiale Verläufe. Da wir Kontrolle über den Start- und Endpunkt des Verlaufs haben, können wir komplexere Effekte erzielen, als wir normalerweise in den „klassischen“ radialen Verläufen in z. B. Photoshop hätten (das ist, ein Verlauf mit einem einzelnen Mittelpunkt, wo der Verlauf sich kreisförmig nach außen erstreckt).

```js
function draw() {
  const ctx = document.getElementById("canvas").getContext("2d");

  // Verläufe erstellen
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

  // Formen zeichnen
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

In diesem Fall haben wir den Startpunkt leicht vom Endpunkt versetzt, um einen sphärischen 3D-Effekt zu erzielen. Es ist am besten zu versuchen, zu vermeiden, dass sich die inneren und äußeren Kreise überlappen, da dies zu seltsamen Effekten führt, die schwer vorherzusagen sind.

Der letzte Farbunterbrechungsabschnitt in jedem der vier Verläufe verwendet eine vollständig transparente Farbe. Wenn Sie eine schöne Übergang zu diesem zum vorherigen Farbunterbrechungsabschnitt haben möchten, sollten beide Farben gleich sein. Dies ist im Code nicht sehr offensichtlich, da es zwei verschiedene CSS-Farbmethoden als Demonstration verwendet, aber im ersten Verlauf `#019F62 = rgb(1 159 98 / 100%)`.

{{EmbedLiveSample("A_createRadialGradient_example", "", "160")}}

### Ein `createConicGradient`-Beispiel

In diesem Beispiel werden wir zwei verschiedene konische Verläufe definieren. Ein konischer Verlauf unterscheidet sich von einem radialen Verlauf, da er keine Kreise erstellt, sondern sich um einen Punkt dreht.

```js
function draw() {
  const ctx = document.getElementById("canvas").getContext("2d");

  // Verläufe erstellen
  const conicGrad1 = ctx.createConicGradient(2, 62, 75);
  conicGrad1.addColorStop(0, "#A7D30C");
  conicGrad1.addColorStop(1, "#fff");

  const conicGrad2 = ctx.createConicGradient(0, 187, 75);
  // wir multiplizieren unsere Werte mit Math.PI/180, um Grad in Radianten umzuwandeln
  conicGrad2.addColorStop(0, "black");
  conicGrad2.addColorStop(0.25, "black");
  conicGrad2.addColorStop(0.25, "white");
  conicGrad2.addColorStop(0.5, "white");
  conicGrad2.addColorStop(0.5, "black");
  conicGrad2.addColorStop(0.75, "black");
  conicGrad2.addColorStop(0.75, "white");
  conicGrad2.addColorStop(1, "white");

  // Formen zeichnen
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

Der erste Verlauf ist in der Mitte des ersten Rechtecks positioniert und bewegt einen grünen Farbunterbrechungspunkt am Anfang zu einem weißen am Ende. Der Winkel beginnt bei 2 Radianten, was bemerkbar ist, da die Anfangs-/Endlinie nach Südosten zeigt.

Der zweite Verlauf ist ebenfalls in der Mitte seines zweiten Rechtecks positioniert. Dieser hat mehrere Farbunterbrechungsabschnitte, die bei jedem Viertel der Drehung von Schwarz zu Weiß wechseln. Das gibt uns den Kariert-Effekt.

{{EmbedLiveSample("A_createConicGradient_example", "", "160")}}

## Muster

In einem der Beispiele auf der vorherigen Seite haben wir eine Reihe von Schleifen verwendet, um ein Muster aus Bildern zu erstellen. Es gibt jedoch eine viel einfachere Methode: die `createPattern()`-Methode.

- {{domxref("CanvasRenderingContext2D.createPattern", "createPattern(image, type)")}}
  - : Erstellt und gibt ein neues Canvasmustermusterobjekt zurück. `image` ist die Quelle des Bildes (d. h. ein {{domxref("HTMLImageElement")}}, ein {{domxref("SVGImageElement")}}, ein weiteres {{domxref("HTMLCanvasElement")}} oder ein {{domxref("OffscreenCanvas")}}, ein {{domxref("HTMLVideoElement")}} oder ein {{domxref("VideoFrame")}}, oder ein {{domxref("ImageBitmap")}}). `type` ist ein String, der angibt, wie das Bild verwendet werden soll.

Der Typ gibt an, wie das Bild verwendet werden soll, um das Muster zu erstellen, und muss einer der folgenden Zeichenfolgenwerte sein:

- `repeat`
  - : Kachelt das Bild sowohl in vertikaler als auch in horizontaler Richtung.
- `repeat-x`
  - : Kachelt das Bild nur horizontal, nicht vertikal.
- `repeat-y`
  - : Kachelt das Bild nur vertikal, nicht horizontal.
- `no-repeat`
  - : Kachelt das Bild nicht. Es wird nur einmal verwendet.

Wir verwenden diese Methode, um ein {{domxref("CanvasPattern")}}-Objekt zu erstellen, das den Gradientenmethoden, die wir oben gesehen haben, sehr ähnlich ist. Sobald wir ein Muster erstellt haben, können wir es den Eigenschaften `fillStyle` oder `strokeStyle` zuweisen. Zum Beispiel:

```js
const img = new Image();
img.src = "someimage.png";
const ptrn = ctx.createPattern(img, "repeat");
```

> [!NOTE]
> Wie bei der Methode `drawImage()` müssen Sie sicherstellen, dass das von Ihnen verwendete Bild geladen ist, bevor Sie diese Methode aufrufen, da das Muster andernfalls falsch gezeichnet werden kann.

### Ein `createPattern`-Beispiel

In diesem letzten Beispiel erstellen wir ein Muster, das der `fillStyle`-Eigenschaft zugewiesen wird. Das einzige, was erwähnenswert ist, ist die Verwendung des `onload`-Handlers des Bildes. Dies ist, um sicherzustellen, dass das Bild geladen ist, bevor es dem Muster zugewiesen wird.

```js
function draw() {
  const ctx = document.getElementById("canvas").getContext("2d");

  // neues Bildobjekt erstellen, das als Muster verwendet werden soll
  const img = new Image();
  img.src = "canvas_createpattern.png";
  img.onload = () => {
    // Muster erstellen
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

Die Verwendung von Schatten umfasst nur vier Eigenschaften:

- {{domxref("CanvasRenderingContext2D.shadowOffsetX", "shadowOffsetX = float")}}
  - : Gibt die horizontale Entfernung an, die der Schatten vom Objekt aus erstrecken soll. Dieser Wert wird nicht von der Transformationsmatrix beeinflusst. Der Standard ist 0.
- {{domxref("CanvasRenderingContext2D.shadowOffsetY", "shadowOffsetY = float")}}
  - : Gibt die vertikale Entfernung an, die der Schatten vom Objekt aus erstrecken soll. Dieser Wert wird nicht von der Transformationsmatrix beeinflusst. Der Standard ist 0.
- {{domxref("CanvasRenderingContext2D.shadowBlur", "shadowBlur = float")}}
  - : Gibt die Größe des Unschärfeeffekts an; dieser Wert entspricht nicht einer Anzahl von Pixeln und wird nicht von der aktuellen Transformationsmatrix beeinflusst. Der Standardwert ist 0.
- {{domxref("CanvasRenderingContext2D.shadowColor", "shadowColor = color")}}
  - : Ein standardmäßiger CSS-Farbwert, der die Farbe des Schatteneffekts angibt; standardmäßig ist es vollständig transparentes Schwarz.

Die Eigenschaften `shadowOffsetX` und `shadowOffsetY` geben an, wie weit sich der Schatten in den X- und Y-Richtungen vom Objekt aus erstrecken soll; diese Werte werden nicht von der aktuellen Transformationsmatrix beeinflusst. Verwenden Sie negative Werte, um den Schatten nach oben oder nach links zu strecken, und positive Werte, um den Schatten nach unten oder nach rechts zu strecken. Diese sind standardmäßig beide 0.

Die Eigenschaft `shadowBlur` gibt die Größe des Unschärfeeffekts an; dieser Wert entspricht nicht einer Anzahl von Pixeln und wird nicht von der aktuellen Transformationsmatrix beeinflusst. Der Standardwert ist 0.

Die Eigenschaft `shadowColor` ist ein standardmäßiger CSS-Farbwert, der die Farbe des Schatteneffekts angibt; standardmäßig ist sie vollständig transparentes Schwarz.

> [!NOTE]
> Schatten werden nur für `source-over` [Compositing-Operationen](/de/docs/Web/API/Canvas_API/Tutorial/Compositing) gezeichnet.

### Ein Beispiel für beschatteten Text

Dieses Beispiel zeigt eine Textzeichenfolge mit einem Schattierungseffekt.

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

Wir werden uns die `font`-Eigenschaft und die `fillText`-Methode im nächsten Kapitel über [Texte zeichnen](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text) anschauen.

## Canvas-Füllregeln

Bei der Verwendung von `fill` (oder {{domxref("CanvasRenderingContext2D.clip", "clip")}} und {{domxref("CanvasRenderingContext2D.isPointInPath", "isPointInPath")}}) können Sie optional einen Füllregelalgorithmus angeben, mit dem bestimmt wird, ob ein Punkt innerhalb oder außerhalb eines Pfades liegt und somit gefüllt wird oder nicht. Dies ist nützlich, wenn ein Pfad sich selbst schneidet oder verschachtelt ist.

Zwei Werte sind möglich:

- `nonzero`
  - : Die [Nicht-Null-Wicklungsregel](https://en.wikipedia.org/wiki/Nonzero-rule), die die Standardregel ist.
- `evenodd`
  - : Die [kürzeste Distanzregel](https://en.wikipedia.org/wiki/Even%E2%80%93odd_rule).

In diesem Beispiel verwenden wir die `evenodd` Regel.

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
