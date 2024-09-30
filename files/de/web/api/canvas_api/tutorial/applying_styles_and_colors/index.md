---
title: Anwenden von Stilen und Farben
slug: Web/API/Canvas_API/Tutorial/Applying_styles_and_colors
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Drawing_shapes", "Web/API/Canvas_API/Tutorial/Drawing_text")}}

Im Kapitel über das [Zeichnen von Formen](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes) haben wir nur die Standardlinien- und Füllstile verwendet. Hier werden wir die Canvas-Optionen kennenlernen, die uns zur Verfügung stehen, um unsere Zeichnungen etwas attraktiver zu gestalten. Sie werden lernen, wie man verschiedene Farben, Linienstile, Verläufe, Muster und Schatten zu Ihren Zeichnungen hinzufügt.

> [!NOTE]
> Der Canvas-Inhalt ist für Screenreader nicht zugänglich. Wenn der Canvas rein dekorativ ist, fügen Sie `role="presentation"` im `<canvas>`-Öffnungstag hinzu. Andernfalls fügen Sie beschreibenden Text als Wert des [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)-Attributs direkt im Canvas-Element selbst hinzu oder fügen Sie entsprechenden Inhalte in den Öffnungs- und Schlusstag von Canvas ein. Der Canvas-Inhalt ist nicht Teil des DOM, aber eingebettete Ausweichinhalte sind es.

## Farben

Bis jetzt haben wir nur Methoden des Zeichenkontexts gesehen. Wenn wir Farben auf eine Form anwenden wollen, stehen uns zwei wichtige Eigenschaften zur Verfügung: `fillStyle` und `strokeStyle`.

- [`fillStyle = color`](/de/docs/Web/API/CanvasRenderingContext2D/fillStyle)
  - : Setzt den Stil, der beim Füllen von Formen verwendet wird.
- [`strokeStyle = color`](/de/docs/Web/API/CanvasRenderingContext2D/strokeStyle)
  - : Setzt den Stil für die Umrisse von Formen.

`color` ist ein String, der eine CSS {{cssxref("&lt;color&gt;")}}, ein Gradientenobjekt oder ein Musterobjekt darstellt. Wir werden uns später die Gradient- und Musterobjekte ansehen. Standardmäßig sind die Linien- und Füllfarbe auf Schwarz (CSS-Farbwert `#000000`) gesetzt.

> [!NOTE]
> Wenn Sie die Eigenschaft `strokeStyle` und/oder `fillStyle` setzen, wird der neue Wert zum Standard für alle ab dann gezeichneten Formen. Für jede Form, die Sie in einer anderen Farbe haben möchten, müssen Sie die `fillStyle`- oder `strokeStyle`-Eigenschaft neu zuweisen.

Die gültigen Strings, die Sie eingeben können, sollten gemäß der Spezifikation CSS {{cssxref("&lt;color&gt;")}}-Werte sein. Jedes der folgenden Beispiele beschreibt dieselbe Farbe.

```js
// these all set the fillStyle to 'orange'

ctx.fillStyle = "orange";
ctx.fillStyle = "#FFA500";
ctx.fillStyle = "rgb(255 165 0)";
ctx.fillStyle = "rgb(255 165 0 / 100%)";
```

### Ein `fillStyle`-Beispiel

In diesem Beispiel verwenden wir erneut zwei `for`-Schleifen, um ein Gitter von Rechtecken zu zeichnen, jedes in einer anderen Farbe. Das resultierende Bild sollte in etwa so aussehen wie der Screenshot. Hier passiert nichts allzu Spektakuläres. Wir verwenden die beiden Variablen `i` und `j`, um eine einzigartige RGB-Farbe für jedes Quadrat zu erzeugen und ändern nur die Rot- und Grünwerte. Der Blaubereich hat einen festen Wert. Durch das Ändern der Kanäle können Sie alle Arten von Paletten erzeugen. Durch die Erhöhung der Schritte können Sie etwas erreichen, das wie die Farbpaletten von Photoshop aussieht.

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

Dieses Beispiel ist ähnlich wie das oben, verwendet jedoch die `strokeStyle`-Eigenschaft, um die Farben der Umrisse der Formen zu ändern. Wir verwenden die `arc()`-Methode, um Kreise anstelle von Quadraten zu zeichnen.

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

Zusätzlich zum Zeichnen undurchsichtiger Formen auf der Leinwand können wir auch halbtransparente (oder durchscheinende) Formen zeichnen. Dies wird entweder durch Setzen der `globalAlpha`-Eigenschaft oder durch Zuweisen einer halbtransparenten Farbe für den Linien- und/oder Füllstil erreicht.

- [`globalAlpha = transparencyValue`](/de/docs/Web/API/CanvasRenderingContext2D/globalAlpha)
  - : Wendet den angegebenen Transparenzwert auf alle zukünftigen Formen an, die auf der Leinwand gezeichnet werden. Der Wert muss zwischen 0,0 (vollständig transparent) und 1,0 (vollständig undurchsichtig) liegen. Dieser Wert ist standardmäßig 1,0 (vollständig undurchsichtig).

Die `globalAlpha`-Eigenschaft kann nützlich sein, wenn Sie viele Formen mit ähnlicher Transparenz auf die Leinwand zeichnen möchten, ansonsten ist es im Allgemeinen nützlicher, die Transparenz bei einzelnen Formen festzulegen, wenn Sie deren Farben festlegen.

Da die Eigenschaften `strokeStyle` und `fillStyle` CSS-RGB-Farbwerte akzeptieren, können wir die folgende Notation verwenden, um eine transparente Farbe zuzuweisen.

```js
// Assigning transparent colors to stroke and fill style

ctx.strokeStyle = "rgb(255 0 0 / 50%)";
ctx.fillStyle = "rgb(255 0 0 / 50%)";
```

Die `rgb()`-Funktion hat einen optionalen zusätzlichen Parameter. Der letzte Parameter setzt den Transparenzwert dieser bestimmten Farbe. Der gültige Bereich wird als Prozentsatz zwischen `0%` (vollständig transparent) und `100%` (vollständig undurchsichtig) oder als Zahl zwischen `0,0` (entspricht `0%`) und `1,0` (entspricht `100%`) angegeben.

### Ein `globalAlpha`-Beispiel

In diesem Beispiel zeichnen wir einen Hintergrund aus vier unterschiedlich farbigen Quadraten. Darüber zeichnen wir eine Reihe von halbtransparenten Kreisen. Die `globalAlpha`-Eigenschaft ist auf `0,2` eingestellt, was für alle Formen ab diesem Punkt verwendet wird. Jeder Schritt in der `for`-Schleife zeichnet eine Reihe von Kreisen mit zunehmendem Radius. Das Endergebnis ist ein radialer Verlauf. Durch das Überlagen immer mehr Kreise reduziert sich effektiv die Transparenz der bereits gezeichneten Kreise. Durch die Erhöhung der Schrittanzahl und das tatsächliche Zeichnen weiterer Kreise würde der Hintergrund vollständig aus der Mitte des Bildes verschwinden.

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

### Ein Beispiel mit `rgb()` und Alphatransparenz

In diesem zweiten Beispiel machen wir etwas Ähnliches wie oben, aber anstatt Kreise übereinander zu zeichnen, habe ich kleine Rechtecke mit zunehmender Deckkraft gezeichnet. Die Verwendung von `rgb()` gibt Ihnen ein wenig mehr Kontrolle und Flexibilität, da wir den Füll- und Linienstil individuell festlegen können.

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

Es gibt mehrere Eigenschaften, die es uns erlauben, Linien zu stilisieren.

- [`lineWidth = value`](/de/docs/Web/API/CanvasRenderingContext2D/lineWidth)
  - : Setzt die Breite der in Zukunft gezeichneten Linien.
- [`lineCap = type`](/de/docs/Web/API/CanvasRenderingContext2D/lineCap)
  - : Setzt das Aussehen der Enden von Linien.
- [`lineJoin = type`](/de/docs/Web/API/CanvasRenderingContext2D/lineJoin)
  - : Setzt das Aussehen der "Ecken", wo Linien aufeinandertreffen.
- [`miterLimit = value`](/de/docs/Web/API/CanvasRenderingContext2D/miterLimit)
  - : Legt ein Limit für die Gehrung fest, wenn zwei Linien in einem spitzen Winkel aufeinandertreffen, um die Dicke der Verbindung zu kontrollieren.
- [`getLineDash()`](/de/docs/Web/API/CanvasRenderingContext2D/getLineDash)
  - : Gibt das aktuelle Linienstrichmuster-Array zurück, das eine gerade Anzahl von nicht-negativen Zahlen enthält.
- [`setLineDash(segments)`](/de/docs/Web/API/CanvasRenderingContext2D/setLineDash)
  - : Legt das aktuelle Linienstrichmuster fest.
- [`lineDashOffset = value`](/de/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)
  - : Gibt an, wo ein Strichmuster auf einer Linie begonnen werden soll.

Sie werden ein besseres Verständnis dafür bekommen, was diese tun, wenn Sie sich die folgenden Beispiele ansehen.

### Ein `lineWidth`-Beispiel

Diese Eigenschaft legt die aktuelle Linienstärke fest. Die Werte müssen positive Zahlen sein. Im Standard ist dieser Wert auf 1,0 Einheiten eingestellt.

Die Linienbreite ist die Dicke des Strichs, der zentriert auf dem gegebenen Pfad verläuft. Mit anderen Worten, der gezeichnete Bereich erstreckt sich von der Mitte der Linie zur Hälfte der Linienbreite auf beiden Seiten des Pfades. Da Canvas-Koordinaten nicht direkt auf Pixel verweisen, muss besondere Sorgfalt aufgewendet werden, um scharfe horizontale und vertikale Linien zu erhalten.

Im Beispiel unten werden 10 gerade Linien mit zunehmender Linienstärke gezeichnet. Die Linie ganz links ist 1,0 Einheiten breit. Die ganz linke und alle Linien mit ungerader Ganzzahlbreite erscheinen jedoch nicht scharf, aufgrund der Positionierung des Pfades.

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

Scharfe Linien zu erhalten, erfordert ein Verständnis dafür, wie Pfade gestrichen werden. In den Bildern unten stellt das Gitter das Canvas-Koordinatengitter dar. Die Quadrate zwischen den Gitterlinien sind tatsächliche auf dem Bildschirm sichtbare Pixel. Im ersten Gitterbild unten ist ein Rechteck von (2,1) bis (5,5) gefüllt. Der gesamte Bereich dazwischen (hellrot) fällt auf die Pixelgrenzen, sodass das resultierende gefüllte Rechteck scharfe Ränder haben wird.

![Drei Koordinatengitter. Die Gitterlinien sind tatsächliche Pixel auf dem Bildschirm. Die obere linke Ecke jedes Gitters ist mit (0,0) markiert. Im ersten Gitter ist ein Rechteck von (2,1) bis (5,5) in hellroter Farbe gefüllt. Im zweiten Gitter wird (3,1) bis (3,5) mit einer 1-Pixel dicken königsblauen Linie verbunden. Die königsblaue Linie ist zentriert auf einer Gitterlinie, erstreckt sich von 2.5 bis 3.5 auf der x-Achse, bis zur Hälfte in die Pixel auf beiden Seiten der Gitterlinie, mit einem hellblauen Hintergrund auf beiden Seiten von 2 bis 4 auf der x-Achse. Um die hellblaue Unschärfeerweiterung der Linie im zweiten Koordinatengitter zu vermeiden, verläuft der Pfad im dritten Koordinatengitter in königsblauer Linie von (3.5,1) bis (3.5,5). Die 1-Pixel-Linienbreite füllt am Ende vollständig und präzise eine einzelne vertikale Pixellinie aus.](canvas-grid.png)

Wenn Sie einen Pfad von (3,1) bis (3,5) mit einer Linienstärke von `1.0` in Betracht ziehen, landen Sie in der Situation im zweiten Bild. Der eigentliche Bereich, der gefüllt werden soll (dunkelblau), erstreckt sich nur zur Hälfte in die Pixel auf beiden Seiten des Pfades. Eine Annäherung daran muss gerendert werden, was bedeutet, dass diese Pixel nur teilweise schattiert werden und das Ergebnis, dass der gesamte Bereich (der hellblaue und der dunkelblaue) mit einer Farbe gefüllt wird, die nur halb so dunkel ist wie die tatsächliche Strichfarbe. Das passiert bei der `1.0`-Breite-Linie im vorherigen Beispielcode.

Um dies zu beheben, müssen Sie sehr genau in Ihrer Pfaderstellung sein. Da Sie wissen, dass eine `1.0` Breite Linie sich halb auf jede Seite des Pfades erstrecken wird, wird das Erstellen des Pfades von (3.5,1) bis (3.5,5) zu der Situation im dritten Bild führen—die `1.0`-Linienbreite füllt am Ende eine einzelne vertikale Pixelllinie vollständig und präzise aus.

> [!NOTE]
> Beachten Sie, dass in unserem vertikalen Linienbeispiel die Y-Position immer noch auf eine Ganzzahlgitterlinienposition bezogen wird – wenn nicht, würden wir Pixel mit halber Abdeckung an den Endpunkten sehen (beachten Sie jedoch auch, dass dieses Verhalten vom aktuellen `lineCap`-Stil abhängt, dessen Standardwert `butt` ist; Sie möchten möglicherweise konsistente Striche mit Halb-Pixel-Koordinaten für ungerade Breitenlinien berechnen, indem Sie den `lineCap`-Stil auf `square` setzen, so dass der äußere Rand des Strichs um den Endpunkt automatisch verlängert wird, um das gesamte Pixel genau abzudecken).
>
> Beachten Sie auch, dass nur Anfangs- und Endpunkte eines Pfads betroffen sind: Wenn ein Pfad mit `closePath()` geschlossen wird, gibt es keine Anfangs- und Endpunkte; stattdessen werden alle Endpunkte im Pfad mit ihrem verbundenen vorherigen und nächsten Segment unter Verwendung der aktuellen Einstellung des `lineJoin`-Stils verbunden, dessen Standardwert `miter` ist, mit dem Effekt, dass die äußeren Ränder der verbundenen Segmente automatisch zu ihrem Schnittpunkt verlängert werden, sodass der gerenderte Strich genau ganze Pixel abdeckt, die bei jedem Endpunkt zentriert sind, wenn diese verbundenen Segmente horizontal und / oder vertikal sind. Sehen Sie die nächsten beiden Abschnitte für Demonstrationen dieser zusätzlichen Linienstile.

Für Linien mit gerader Breite sind beide Hälften schließlich eine ganzzahlige Anzahl von Pixeln, also möchten Sie einen Pfad, der zwischen den Pixeln liegt (d. h. (3,1) zu (3,5)), anstatt in der Mitte der Pixel.

Während es etwas schmerzhaft sein kann, wenn man zum ersten Mal mit skalierbaren 2D-Grafiken arbeitet, stellt das Achten auf das Pixelgitter und die Position der Pfade sicher, dass Ihre Zeichnungen korrekt aussehen, unabhängig von der Skalierung oder anderen beteiligten Transformationen. Eine 1.0-Breite vertikale Linie, die an der richtigen Position gezeichnet wird, wird zu einer scharfen 2-Pixel Linie, wenn sie im Maßstab um 2 vergrößert wird, und erscheint an der richtigen Position.

### Ein `lineCap`-Beispiel

Die `lineCap`-Eigenschaft bestimmt, wie die Endpunkte jeder Linie gezeichnet werden. Es gibt drei mögliche Werte für diese Eigenschaft: `butt`, `round` und `square`. Standardmäßig ist diese Eigenschaft auf `butt` eingestellt:

- `butt`
  - : Die Enden der Linien sind an den Endpunkten abgeschnitten.
- `round`
  - : Die Enden der Linien sind abgerundet.
- `square`
  - : Die Enden der Linien werden durch Hinzufügen eines Kastens mit gleicher Breite und halber Höhe der Linienstärke abgekantet.

In diesem Beispiel zeichnen wir drei Linien, jede mit einem anderen Wert für die `lineCap`-Eigenschaft. Ich habe auch zwei Führungen hinzugefügt, um die genauen Unterschiede zwischen den dreien zu sehen. Jede dieser Linien beginnt und endet genau auf diesen Führungen.

Die Linie auf der linken Seite verwendet die Standardoption `butt`. Sie werden bemerken, dass sie vollständig bündig mit den Führungen gezeichnet ist. Die zweite ist so eingestellt, dass sie die Option `round` verwendet. Dies fügt dem Ende einen Halbkreis hinzu, der einen Radius hat, der der Hälfte der Linienbreite entspricht. Die Linie auf der rechten Seite verwendet die Option `square`. Dies fügt einen Kasten hinzu, der gleiche Breite und halbe Höhe der Linienstärke hat.

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

### Ein `lineJoin`-Beispiel

Die `lineJoin`-Eigenschaft bestimmt, wie zwei verbundene Segmente (von Linien, Bögen oder Kurven) mit nicht-zero Längen in einer Form miteinander verbunden werden (degenerierte Segmente mit Null-Längen, deren angegebene Endpunkte und Kontrollpunkte genau an derselben Position liegen, werden übersprungen).

Es gibt drei mögliche Werte für diese Eigenschaft: `round`, `bevel` und `miter`. Standardmäßig ist diese Eigenschaft auf `miter` eingestellt. Beachten Sie, dass die `lineJoin`-Einstellung keine Wirkung hat, wenn die zwei verbundenen Segmente dieselbe Richtung haben, da in diesem Fall kein Verbindungsbereich hinzugefügt wird:

- `round`
  - : Rundet die Ecken einer Form ab, indem ein zusätzlicher Sektor der Scheibe um den gemeinsamen Endpunkt der verbundenen Segmente gefüllt wird. Der Radius dieser abgerundeten Ecken ist gleich der Hälfte der Linienbreite.
- `bevel`
  - : Füllt einen zusätzlichen dreieckigen Bereich zwischen dem gemeinsamen Endpunkt der verbundenen Segmente und den separaten äußeren rechteckigen Ecken jedes Segments.
- `miter`
  - : Verbundene Segmente werden verbunden, indem ihre äußeren Ränder erweitert werden, um an einem einzigen Punkt zu verbinden, mit dem Effekt, dass ein zusätzlicher rautenförmiger Bereich gefüllt wird. Diese Einstellung wird durch die Eigenschaft `miterLimit` beeinflusst, die unten erklärt wird.

Das folgende Beispiel zeigt drei verschiedene Pfade, die jedes der drei `lineJoin`-Eigenschaftseinstellungen demonstrieren; das Ergebnis wird oben gezeigt.

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

### Ein `miterLimit`-Eigenschaftsbeispiel

Wie Sie im vorherigen Beispiel gesehen haben, wenn zwei Linien mit der `miter`-Option verbunden werden, werden die äußeren Kanten der beiden sich verbindenden Linien bis zu dem Punkt verlängert, an dem sie sich treffen. Bei Linien, die große Winkel miteinander bilden, ist dieser Punkt nicht weit vom inneren Verbindungspunkt entfernt. Wenn sich jedoch die Winkel zwischen jeder Linie verringern, nimmt die Entfernung (Gehrungslänge) zwischen diesen Punkten exponentiell zu.

Die `miterLimit`-Eigenschaft bestimmt, wie weit der äußere Verbindungspunkt vom inneren Verbindungspunkt entfernt sein kann. Wenn zwei Linien diesen Wert überschreiten, wird stattdessen eine abgeschrägte Verbindung gezeichnet. Beachten Sie, dass die maximale Gehrungslänge das Produkt der Linienbreite, gemessen im aktuellen Koordinatensystem, mit dem Wert dieser `miterLimit`-Eigenschaft ist (deren Standardwert in der HTML {{HTMLElement("canvas")}} 10.0 beträgt), sodass das `miterLimit` unabhängig vom aktuellen Anzeigebereich oder jeglichen affinen Transformationen von Pfaden gesetzt werden kann: es beeinflusst nur die tatsächlich gerenderte Form der Linienkanten.

Genauer gesagt ist das Gehrungslimit das maximal zulässige Verhältnis der Verlängerungslänge (in der HTML-Leinwand wird es zwischen der äußeren Ecke der verbundenen Kanten der Linie und dem gemeinsamen Endpunkt der verbundenen Segmente im Pfad gemessen) zur halben Linienbreite. Es kann gleichbedeutend als das maximal zulässige Verhältnis des Abstands zwischen den innen- und außenliegenden Punkten der Verbindung von Kanten zur gesamten Linienbreite definiert werden. Es ist dann gleich dem Kosekant der halben minimalen Innenecken der verbundenen Segmente, unterhalb welcher keine Gehrungsverbindung gerendert wird, sondern nur eine abgeschrägte Verbindung:

- `miterLimit` = **max** `miterLength` / `lineWidth` = 1 / **sin** ( **min** _θ_ / 2 )
- Das Standard-Gehrungslimit von 10.0 wird alle Gehrungen für scharfe Winkel unter etwa 11 Grad entfernen.
- Ein Gehrungslimit gleich √2 ≈ 1,4142136 (aufgerundet) wird Gehrungen für alle spitzen Winkel entfernen, behält jedoch Gehrungsverbindungen nur für stumpfe oder rechte Winkel bei.
- Ein Gehrungslimit gleich 1,0 ist gültig, wird jedoch alle Gehrungen deaktivieren.
- Werte unter 1,0 sind ungültig für das Gehrungslimit.

Hier ist ein kleines Demo, in dem Sie den `miterLimit` dynamisch setzen können und sehen, wie dies die Formen auf der Leinwand beeinflusst. Die blauen Linien zeigen, wo der Anfangs- und Endpunkt für jede der Linien im Zickzackmuster sind.

Wenn Sie in diesem Demo einen `miterLimit`-Wert unter 4.2 angeben, wird keine der sichtbaren Ecken mit einer Gehrungserweiterung verbunden, sondern nur mit einer kleinen Schräge nahe den blauen Linien; bei einem `miterLimit` über 10 sollten die meisten Ecken in diesem Demo mit einer Gehrung weit von den blauen Linien verbunden sein, deren Höhe zwischen den Ecken von links nach rechts abnimmt, da sie sich mit wachsenden Winkeln verbinden; mit Zwischenwerten werden die Ecken auf der linken Seite nur mit einer Schräge in der Nähe der blauen Linien verbunden und die Ecken auf der rechten Seite mit einer Gehrungserweiterung (ebenfalls mit abnehmender Höhe).

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

### Verwendun von Linienstrichen

Die `setLineDash`-Methode und die `lineDashOffset`-Eigenschaft spezifizieren das Strichmuster für Linien. Die `setLineDash`-Methode akzeptiert eine Liste von Zahlen, die die Distanzen zum abwechselnden Zeichnen einer Linie und einer Lücke angibt, und die `lineDashOffset`-Eigenschaft setzt einen Offset, an dem das Muster beginnen soll.

In diesem Beispiel erstellen wir einen "laufenden Ameisen"-Effekt. Es handelt sich um eine Animationstechnik, die häufig in Auswahlwerkzeugen von Grafikprogrammen vorkommt. Sie hilft dem Benutzer, die Auswahlgrenze vom Hintergrundbild zu unterscheiden, indem sie die Grenze animiert. In einem späteren Teil dieses Tutorials können Sie lernen, wie man dies und andere [grundlegende Animationen](/de/docs/Web/API/Canvas_API/Tutorial/Basic_animations) erstellt.

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

Genauso wie in einem normalen Zeichenprogramm können wir Formen mit linearen, radialen und konischen Verläufen füllen und zeichnen. Wir erstellen ein [`CanvasGradient`](/de/docs/Web/API/CanvasGradient)-Objekt durch eine der folgenden Methoden. Wir können dieses Objekt dann den Eigenschaften `fillStyle` oder `strokeStyle` zuweisen.

- [`createLinearGradient(x1, y1, x2, y2)`](/de/docs/Web/API/CanvasRenderingContext2D/createLinearGradient)
  - : Erstellt ein lineares Gradientenobjekt mit einem Startpunkt bei (`x1`, `y1`) und einem Endpunkt bei (`x2`, `y2`).
- [`createRadialGradient(x1, y1, r1, x2, y2, r2)`](/de/docs/Web/API/CanvasRenderingContext2D/createRadialGradient)
  - : Erstellt einen radialen Verlauf. Die Parameter repräsentieren zwei Kreise, einer mit seinem Zentrum bei (`x1`, `y1`) und einem Radius von `r1`, und der andere mit seinem Zentrum bei (`x2`, `y2`) mit einem Radius von `r2`.
- [`createConicGradient(angle, x, y)`](/de/docs/Web/API/CanvasRenderingContext2D/createConicGradient)
  - : Erstellt ein konisches Gradientenobjekt mit einem Startwinkel von `angle` in Radiant bei der Position (`x`, `y`).

Zum Beispiel:

```js
const lineargradient = ctx.createLinearGradient(0, 0, 150, 150);
const radialgradient = ctx.createRadialGradient(75, 75, 0, 75, 75, 100);
```

Nachdem wir ein `CanvasGradient`-Objekt erstellt haben, können wir mit der Methode `addColorStop()` Farben hinzufügen.

- [`gradient.addColorStop(position, color)`](/de/docs/Web/API/CanvasGradient/addColorStop)
  - : Erstellt einen neuen Farbpunkt im `gradient`-Objekt. Die `position` ist eine Zahl zwischen 0,0 und 1,0 und definiert die relative Position der Farbe im Verlauf, und das `color`-Argument muss ein String sein, der eine CSS {{cssxref("&lt;color&gt;")}} darstellt, die die Farbe angibt, die der Verlauf bei diesem Offset in die Überblendung erreichen soll.

Sie können so viele Farbstopps zu einem Verlauf hinzufügen, wie Sie benötigen. Unten ist ein sehr einfacher linearer Verlauf von Weiß zu Schwarz.

```js
const lineargradient = ctx.createLinearGradient(0, 0, 150, 150);
lineargradient.addColorStop(0, "white");
lineargradient.addColorStop(1, "black");
```

### Ein `createLinearGradient`-Beispiel

In diesem Beispiel erstellen wir zwei verschiedene Verläufe. Wie Sie hier sehen können, können sowohl die `strokeStyle`- als auch die `fillStyle`-Eigenschaften ein `canvasGradient`-Objekt als gültige Eingabe akzeptieren.

```js
function draw() {
  const ctx = document.getElementById("canvas").getContext("2d");

  // Create gradients
  const lingrad = ctx.createLinearGradient(0, 0, 0, 150);
  lingrad.addColorStop(0, "#00ABEB");
  lingrad.addColorStop(0.5, "#fff");
  lingrad.addColorStop(0.5, "#26C000");
  lingrad.addColorStop(1, "#fff");

  const lingrad2 = ctx.createLinearGradient(0, 50, 0, 95);
  lingrad2.addColorStop(0.5, "#000");
  lingrad2.addColorStop(1, "rgb(0 0 0 / 0%)");

  // assign gradients to fill and stroke styles
  ctx.fillStyle = lingrad;
  ctx.strokeStyle = lingrad2;

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

Der erste ist ein Hintergrundverlauf. Wie Sie sehen können, haben wir zwei Farben an derselben Position zugewiesen. Dies tun Sie, um sehr scharfe Farbüberblendungen zu erzielen—in diesem Fall von Weiß zu Grün. Normalerweise spielt es keine Rolle, in welcher Reihenfolge Sie die Farbstopps definieren, aber in diesem speziellen Fall tut es das erheblich. Wenn Sie die Zuweisungen in der Reihenfolge behalten, in der Sie sie erscheinen lassen möchten, ist das kein Problem.

Im zweiten Verlauf haben wir die Startfarbe (bei Position 0,0) nicht zugewiesen, da es nicht streng notwendig war, weil sie automatisch die Farbe des nächsten Farbstopps annimmt. Daher macht das Zuweisen der schwarzen Farbe an Position 0,5 den Verlauf automatisch von Anfang an zu diesem Stopp schwarz.

{{EmbedLiveSample("A_createLinearGradient_example", "", "160")}}

### Ein `createRadialGradient`-Beispiel

In diesem Beispiel definieren wir vier verschiedene radiale Verläufe. Da wir Kontrolle über die Start- und Endpunkte des Verlaufs haben, können wir komplexere Effekte erzielen als die "klassischen" radialen Verläufe, die wir zum Beispiel in Photoshop sehen (d.h. ein Verlauf mit einem einzelnen Mittelpunkt, an dem der Verlauf kreisförmig nach außen expandiert).

```js
function draw() {
  const ctx = document.getElementById("canvas").getContext("2d");

  // Create gradients
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

  // draw shapes
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

In diesem Fall haben wir den Startpunkt leicht vom Endpunkt versetzt, um einen kugelförmigen 3D-Effekt zu erzielen. Es ist am besten zu vermeiden, dass sich die inneren und äußeren Kreise überlappen, da dies zu seltsamen Effekten führt, die schwer vorherzusagen sind.

Der letzte Farbverlauf in jedem der vier Verläufe verwendet eine vollständig transparente Farbe. Wenn Sie einen schönen Übergang von diesem zum vorherigen Farbverlauf haben möchten, sollten beide Farben gleich sein. Dies ist im Code nicht sehr offensichtlich, da zwei verschiedene CSS-Farbmethoden als Demonstration verwendet werden, aber im ersten Verlauf `#019F62 = rgb(1 159 98 / 100%)`.

{{EmbedLiveSample("A_createRadialGradient_example", "", "160")}}

### Ein `createConicGradient`-Beispiel

In diesem Beispiel definieren wir zwei verschiedene konische Verläufe. Ein konischer Verlauf unterscheidet sich von einem radialen Verlauf, da er anstatt Kreise zu erzeugen, um einen Punkt herum kreist.

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

Der erste Verlauf ist im Zentrum des ersten Rechtecks platziert und bewegt einen grünen Farbverlauf zu Beginn zu einem weißen am Ende. Der Winkel beginnt bei 2 Radianten, was aufgrund der Beginnen/Ende-Linie, die nach Südosten zeigt, erkennbar ist.

Der zweite Verlauf ist ebenfalls im Zentrum des zweiten Rechtecks platziert. Dieser hat mehrere Farbverläufe, die bei jeweils einer Vierteldrehung von Schwarz zu Weiß wechseln. Dies gibt uns den Schachbrett-Effekt.

{{EmbedLiveSample("A_createConicGradient_example", "", "160")}}

## Muster

In einem der Beispiele auf der vorherigen Seite haben wir eine Serie von Schleifen verwendet, um ein Muster von Bildern zu erstellen. Es gibt jedoch eine viel einfachere Methode: die `createPattern()`-Methode.

- [`createPattern(image, type)`](/de/docs/Web/API/CanvasRenderingContext2D/createPattern)
  - : Erstellt und gibt ein neues Canvas-Musterobjekt zurück. `image` ist die Quelle des Bildes (also ein [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement), ein [`SVGImageElement`](/de/docs/Web/API/SVGImageElement), ein anderes [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) oder ein [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas), ein [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) oder ein [`Videoframe`](/de/docs/Web/API/VideoFrame), oder ein [`ImageBitmap`](/de/docs/Web/API/ImageBitmap)). `type` ist ein String, der angibt, wie das Bild verwendet werden soll.

Der Typ gibt an, wie das Bild verwendet werden soll, um das Muster zu erstellen, und muss einer der folgenden String-Werte sein:

- `repeat`
  - : Kachelt das Bild in beide Richtungen, vertikal und horizontal.
- `repeat-x`
  - : Kachelt das Bild horizontal, aber nicht vertikal.
- `repeat-y`
  - : Kachelt das Bild vertikal, aber nicht horizontal.
- `no-repeat`
  - : Kachelt das Bild nicht. Es wird nur einmal verwendet.

Wir verwenden diese Methode, um ein [`CanvasPattern`](/de/docs/Web/API/CanvasPattern)-Objekt zu erstellen, das dem obigen Gradient-Verlauf sehr ähnlich ist. Nachdem wir ein Muster erstellt haben, können wir es den Eigenschaften `fillStyle` oder `strokeStyle` zuweisen. Zum Beispiel:

```js
const img = new Image();
img.src = "someimage.png";
const ptrn = ctx.createPattern(img, "repeat");
```

> [!NOTE]
> Wie bei der `drawImage()`-Methode müssen Sie sicherstellen, dass das Bild, das Sie verwenden, geladen ist, bevor Sie diese Methode aufrufen, sonst kann das Muster möglicherweise nicht korrekt gezeichnet werden.

### Ein `createPattern`-Beispiel

In diesem letzten Beispiel erstellen wir ein Muster, das der `fillStyle`-Eigenschaft zugewiesen wird. Das einzig bemerkenswerte ist die Verwendung des `onload`-Handlers des Bildes. Dieser stellt sicher, dass das Bild geladen ist, bevor es dem Muster zugewiesen wird.

```js
function draw() {
  const ctx = document.getElementById("canvas").getContext("2d");

  // create new image object to use as pattern
  const img = new Image();
  img.src = "canvas_createpattern.png";
  img.onload = () => {
    // create pattern
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

Mit Schattenarbeiten sind nur vier Eigenschaften beteiligt:

- [`shadowOffsetX = float`](/de/docs/Web/API/CanvasRenderingContext2D/shadowOffsetX)
  - : Gibt die horizontale Entfernung an, die der Schatten vom Objekt entfernt sein soll. Dieser Wert wird nicht von der Transformationsmatrix beeinflusst. Der Standardwert ist 0.
- [`shadowOffsetY = float`](/de/docs/Web/API/CanvasRenderingContext2D/shadowOffsetY)
  - : Gibt die vertikale Entfernung an, die der Schatten vom Objekt entfernt sein soll. Dieser Wert wird nicht von der Transformationsmatrix beeinflusst. Der Standardwert ist 0.
- [`shadowBlur = float`](/de/docs/Web/API/CanvasRenderingContext2D/shadowBlur)
  - : Gibt die Größe des Unschärfeeffekts an; dieser Wert entspricht nicht der Anzahl der Pixel und wird nicht von der aktuellen Transformationsmatrix beeinflusst. Der Standardwert ist 0.
- [`shadowColor = color`](/de/docs/Web/API/CanvasRenderingContext2D/shadowColor)
  - : Ein Standard-CSS-Farbwert, der die Farbe des Schattens angibt; standardmäßig ist er voll transparentes Schwarz.

Die Eigenschaften `shadowOffsetX` und `shadowOffsetY` geben an, wie weit der Schatten vom Objekt in den X- und Y-Richtungen entfernt sein soll; diese Werte werden nicht von der aktuellen Transformationsmatrix beeinflusst. Verwenden Sie negative Werte, um den Schatten nach oben oder nach links auszuweiten, und positive Werte, um den Schatten nach unten oder nach rechts verlängern zu lassen. Beide sind standardmäßig auf 0 eingestellt.

Die `shadowBlur`-Eigenschaft gibt die Größe des Unschärfeeffekts an; dieser Wert entspricht nicht der Anzahl der Pixel und wird nicht von der aktuellen Transformationsmatrix beeinflusst. Der Standardwert ist 0.

Die `shadowColor`-Eigenschaft ist ein Standard-CSS-Farbwert, der die Farbe des Schattens angibt; standardmäßig ist er voll transparentes Schwarz.

> [!NOTE]
> Schatten werden nur für `source-over` [Compositing-Operationen](/de/docs/Web/API/Canvas_API/Tutorial/Compositing) gezeichnet.

### Ein beschattetes Textbeispiel

Dieses Beispiel zeichnet eine Textzeichenfolge mit einem Schatteneffekt.

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

Wir werden uns die `font`-Eigenschaft und die `fillText`-Methode im nächsten Kapitel über das [Zeichnen von Text](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text) ansehen.

## Canvas-Füllregeln

Beim Verwenden von `fill` (oder [`clip`](/de/docs/Web/API/CanvasRenderingContext2D/clip) und [`isPointInPath`](/de/docs/Web/API/CanvasRenderingContext2D/isPointInPath)) können Sie optional einen Füllregelalgorithmus angeben, mit dem bestimmt wird, ob ein Punkt innerhalb oder außerhalb eines Pfades liegt und somit gefüllt wird oder nicht. Dies ist nützlich, wenn sich ein Pfad selbst kreuzt oder geschachtelt ist.

Zwei Werte sind möglich:

- `nonzero`
  - : Die [Non-Zero-Füllregel](https://en.wikipedia.org/wiki/Nonzero-rule), die die Standardregel ist.
- `evenodd`
  - : Die [Even-Odd-Füllregel](https://en.wikipedia.org/wiki/Even%E2%80%93odd_rule).

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
