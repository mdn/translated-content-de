---
title: Anwendung von Stilen und Farben
slug: Web/API/Canvas_API/Tutorial/Applying_styles_and_colors
l10n:
  sourceCommit: f3c4fc42e8817d0b8f703cf83957c33cd5342019
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Drawing_shapes", "Web/API/Canvas_API/Tutorial/Drawing_text")}}

In dem Kapitel über [Zeichnen von Formen](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes) haben wir nur die standardmäßigen Linien- und Füllstile verwendet. Hier werden wir die Canvas-Optionen untersuchen, die uns zur Verfügung stehen, um unsere Zeichnungen etwas attraktiver zu gestalten. Sie lernen, wie Sie Ihren Zeichnungen verschiedene Farben, Linienstile, Verläufe, Muster und Schatten hinzufügen können.

> [!NOTE]
> Canvas-Inhalte sind für Screenreader nicht zugänglich. Wenn der Canvas rein dekorativ ist, fügen Sie `role="presentation"` zum öffnenden Tag des `<canvas>` hinzu. Andernfalls fügen Sie beschreibenden Text als Wert des [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) Attributs direkt im Canvas-Element hinzu oder fügen Sie Fallback-Inhalte innerhalb des öffnenden und schließenden Canvas-Tags hinzu. Canvas-Inhalte sind nicht Teil des DOM, aber verschachtelte Fallback-Inhalte schon.

## Farben

Bisher haben wir nur Methoden des Zeichenkontexts gesehen. Wenn wir Farben auf eine Form anwenden möchten, gibt es zwei wichtige Eigenschaften, die wir verwenden können: `fillStyle` und `strokeStyle`.

- [`fillStyle = color`](/de/docs/Web/API/CanvasRenderingContext2D/fillStyle)
  - : Legt den Stil fest, der beim Füllen von Formen verwendet wird.
- [`strokeStyle = color`](/de/docs/Web/API/CanvasRenderingContext2D/strokeStyle)
  - : Legt den Stil für die Umrisse von Formen fest.

`color` ist ein String, der eine CSS {{cssxref("&lt;color&gt;")}}, ein Verlauf-Objekt oder ein Muster-Objekt darstellt. Wir werden später auf Verlauf- und Muster-Objekte eingehen. Standardmäßig sind die Strich- und Füllfarbe auf Schwarz (CSS-Farbwert `#000000`) eingestellt.

> [!NOTE]
> Wenn Sie die Eigenschaft `strokeStyle` und/oder `fillStyle` setzen, wird der neue Wert zum Standard für alle danach gezeichneten Formen. Für jede Form, die Sie in einer anderen Farbe haben möchten, müssen Sie die Eigenschaft `fillStyle` oder `strokeStyle` neu zuweisen.

Die gültigen Strings, die Sie eingeben können, sollten laut der Spezifikation CSS {{cssxref("&lt;color&gt;")}} Werte sein. Jedes der folgenden Beispiele beschreibt die gleiche Farbe.

```js
// these all set the fillStyle to 'orange'

ctx.fillStyle = "orange";
ctx.fillStyle = "#FFA500";
ctx.fillStyle = "rgb(255 165 0)";
ctx.fillStyle = "rgb(255 165 0 / 100%)";
```

### Ein `fillStyle`-Beispiel

In diesem Beispiel verwenden wir erneut zwei `for` Schleifen, um ein Raster von Rechtecken zu zeichnen, jedes in einer anderen Farbe. Das resultierende Bild sollte etwa wie der Screenshot aussehen. Hier passiert nichts spektakuläres. Wir verwenden die beiden Variablen `i` und `j`, um eine eindeutige RGB-Farbe für jedes Quadrat zu generieren und ändern nur die Rot- und Grünwerte. Der Blaukanal hat einen festen Wert. Durch Ändern der Kanäle können Sie alle Arten von Paletten generieren. Durch Erhöhen der Schritte können Sie etwas erreichen, das wie die Farbpaletten von Photoshop aussieht.

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

Dieses Beispiel ähnelt dem obigen, verwendet aber die `strokeStyle`-Eigenschaft, um die Farben der Umrisse der Formen zu ändern. Wir verwenden die Methode `arc()`, um Kreise anstelle von Quadraten zu zeichnen.

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

Zusätzlich zum Zeichnen opaker Formen auf dem Canvas können wir auch halbtransparente (oder transluzente) Formen zeichnen. Dies geschieht entweder durch Setzen der Eigenschaft `globalAlpha` oder durch Zuweisen einer halbtransparenten Farbe zum Strich- und/oder Füllstil.

- [`globalAlpha = transparencyValue`](/de/docs/Web/API/CanvasRenderingContext2D/globalAlpha)
  - : Wendet den angegebenen Transparenzwert auf alle zukünftigen Formen an, die auf dem Canvas gezeichnet werden. Der Wert muss zwischen 0.0 (vollständig transparent) und 1.0 (vollständig opak) liegen. Dieser Wert ist standardmäßig 1.0 (vollständig opak).

Die Eigenschaft `globalAlpha` kann nützlich sein, wenn Sie viele Formen auf dem Canvas mit ähnlicher Transparenz zeichnen möchten, ansonsten ist es im Allgemeinen nützlicher, die Transparenz beim Festlegen ihrer Farben auf einzelne Formen einzustellen.

Da die Eigenschaften `strokeStyle` und `fillStyle` CSS-RGB-Farbwerte akzeptieren, können wir die folgende Notation verwenden, um eine transparente Farbe zuzuweisen.

```js
// Assigning transparent colors to stroke and fill style

ctx.strokeStyle = "rgb(255 0 0 / 50%)";
ctx.fillStyle = "rgb(255 0 0 / 50%)";
```

Die Funktion `rgb()` hat einen optionalen zusätzlichen Parameter. Der letzte Parameter legt den Transparenzwert dieser bestimmten Farbe fest. Der gültige Bereich ist als Prozentsatz zwischen `0%` (vollständig transparent) und `100%` (vollständig opak) oder als Zahl zwischen `0.0` (entspricht `0%`) und `1.0` (entspricht `100%`) angegeben.

### Ein `globalAlpha`-Beispiel

In diesem Beispiel zeichnen wir einen Hintergrund aus vier unterschiedlich farbigen Quadraten. Darüber zeichnen wir eine Reihe halbtransparenter Kreise. Die Eigenschaft `globalAlpha` ist auf `0,2` gesetzt, was für alle Formen ab diesem Punkt verwendet wird. Jeder Schritt in der `for` Schleife zeichnet eine Reihe von Kreisen mit einem zunehmenden Radius. Das Endergebnis ist ein radialer Verlauf. Indem wir immer mehr Kreise übereinander legen, reduzieren wir effektiv die Transparenz der bereits gezeichneten Kreise. Durch Erhöhen der Schrittzahl und damit des Zeichnens von mehr Kreisen würde der Hintergrund vollständig aus der Mitte des Bildes verschwinden.

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

In diesem zweiten Beispiel machen wir etwas Ähnliches wie im vorherigen, aber anstatt Kreise übereinander zu zeichnen, habe ich kleine Rechtecke mit zunehmender Deckkraft gezeichnet. Durch die Verwendung von `rgb()` haben Sie ein wenig mehr Kontrolle und Flexibilität, da wir den Füll- und Strichstil individuell festlegen können.

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

Es gibt mehrere Eigenschaften, mit denen wir Linien gestalten können.

- [`lineWidth = value`](/de/docs/Web/API/CanvasRenderingContext2D/lineWidth)
  - : Legt die Breite der in Zukunft gezeichneten Linien fest.
- [`lineCap = type`](/de/docs/Web/API/CanvasRenderingContext2D/lineCap)
  - : Legt das Aussehen der Enden von Linien fest.
- [`lineJoin = type`](/de/docs/Web/API/CanvasRenderingContext2D/lineJoin)
  - : Legt das Aussehen der "Ecken" fest, an denen sich Linien treffen.
- [`miterLimit = value`](/de/docs/Web/API/CanvasRenderingContext2D/miterLimit)
  - : Legt ein Limit am Gehrungswinkel fest, wenn zwei Linien in einem scharfen Winkel aufeinandertreffen, um zu steuern, wie dick die Verbindung wird.
- [`getLineDash()`](/de/docs/Web/API/CanvasRenderingContext2D/getLineDash)
  - : Gibt das aktuelle Strichmuster zurück, das ein Array von geraden Anzahl nicht-negativer Zahlen enthält.
- [`setLineDash(segments)`](/de/docs/Web/API/CanvasRenderingContext2D/setLineDash)
  - : Legt das aktuelle Strichmuster fest.
- [`lineDashOffset = value`](/de/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)
  - : Gibt an, wo eine gestrichelte Linie beginnen soll.

Sie werden ein besseres Verständnis dafür bekommen, was diese Eigenschaften bewirken, indem Sie sich die Beispiele unten ansehen.

### Ein `lineWidth`-Beispiel

Diese Eigenschaft setzt die aktuelle Linienstärke. Werte müssen positive Zahlen sein. Standardmäßig ist dieser Wert auf 1,0 Einheiten eingestellt.

Die Linienbreite ist die Dicke des Strichs, der in der Mitte auf dem angegebenen Pfad verläuft. Mit anderen Worten, der gezeichnete Bereich erstreckt sich über die halbe Linienbreite auf beiden Seiten des Pfads. Da Canvas-Koordinaten sich nicht direkt auf Pixel beziehen, muss besondere Vorsicht angewendet werden, um scharfe horizontale und vertikale Linien zu erzielen.

Im Beispiel unten werden 10 gerade Linien mit zunehmender Linienbreite gezeichnet. Die Linie ganz links ist 1,0 Einheiten breit. Die ganz links und alle anderen ungeraden Linienbreiten erscheinen jedoch nicht scharf aufgrund der Positionierung des Pfads.

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

Um scharfe Linien zu erhalten, muss man verstehen, wie Pfade gestrahlt werden. In den Abbildungen unten stellt das Raster das Canvas-Koordinatenraster dar. Die Quadrate zwischen den Gittern sind tatsächliche Bildschirm-Pixel. Im ersten Rasterbild unten wird ein Rechteck von (2,1) bis (5,5) gefüllt. Der gesamte Bereich dazwischen (hellrot) liegt auf den Pixelgrenzen, sodass das resultierende gefüllte Rechteck scharfe Kanten hat.

![Drei Koordinatenraster. Die Gitternetzlinien sind tatsächliche Pixel auf dem Bildschirm. Die obere linke Ecke jedes Rasters ist mit (0,0) beschriftet. Im ersten Raster ist ein Rechteck von (2,1) bis (5,5) in hellroter Farbe gefüllt. Im zweiten Raster ist (3,1) bis (3,5) mit einer 1-Pixel dicken königsblauen Linie verbunden. Die königsblaue Linie ist auf einer Gitternetzlinie zentriert, erstreckt sich von 2,5 bis 3,5 auf der x-Achse, zur Hälfte in die Pixel auf beiden Seiten der Grafenlinie, mit einem hellblauen Hintergrund auf beiden Seiten von 2 bis 4 auf der x-Achse. Um die hellblaue Unschärfeverlängerung der Linie im zweiten Koordinatenraster zu vermeiden, befindet sich der Pfad im dritten Koordinatenraster als königsblaue Linie von (3,5,1) bis (3,5,5). Die 1-Pixel-Linienbreite füllt letztendlich eine einzelne vertikale Pixel-Linie vollständig und präzise.](canvas-grid.png)

Wenn Sie einen Pfad von (3,1) bis (3,5) mit einer Linienstärke von `1,0` betrachten, enden Sie mit der im zweiten Bild dargestellten Situation. Der tatsächlich zu füllende Bereich (dunkelblau) erstreckt sich nur zur Hälfte in die Pixel auf beiden Seiten des Pfads. Eine Annäherung daran muss gerendert werden, was bedeutet, dass diese Pixel nur teilweise schattiert werden, und das Ergebnis ist, dass der gesamte Bereich (hellblau und dunkelblau) mit einer Farbe gefüllt wird, die nur halb so dunkel wie die tatsächliche Strichfarbe ist. Das passiert mit der `1.0`-Breitenlinie im vorherigen Beispielcode.

Um dies zu korrigieren, muss man bei der Erstellung des Pfads sehr genau sein. Wenn man weiß, dass eine `1,0`-Breitenlinie sich zur Hälfte zur einen oder anderen Seite des Pfads erstrecken wird, führt die Erstellung des Pfads von (3,5,1) bis (3,5,5) zu der im dritten Bild dargestellten Situation—die `1.0`-Breitenlinie füllt letztendlich eine einzelne vertikale Pixel-Linie vollständig und präzise aus.

> [!NOTE]
> Beachten Sie, dass in unserem vertikalen Linienbeispiel die Y-Position immer noch auf eine ganze Gitternetzlinienposition bezogen ist—wenn dem nicht so wäre, würden wir Pixel mit halber Abdeckung an den Endpunkten sehen (beachten Sie jedoch auch, dass dieses Verhalten von dem aktuellen `lineCap`-Stil abhängt, dessen Standardwert `butt` ist; Sie möchten möglicherweise konsistente Striche mit halben Pixelkoordinaten für ungerade Linienbreiten berechnen, indem Sie den `lineCap`-Stil auf `square` setzen, damit die äußere Grenze des Strichs um den Endpunkt herum automatisch verlängert wird, um das gesamte Pixel genau abzudecken).
>
> Beachten Sie auch, dass nur die Start- und Endpunkte eines Pfads beeinflusst werden: wenn ein Pfad mit `closePath()` geschlossen wird, gibt es keinen Start- und Endpunkt; stattdessen werden alle Endpunkte im Pfad unter Verwendung der aktuellen Einstellung des `lineJoin`-Stils, dessen Standardwert `miter` ist, mit ihrem verbundenen vorherigen und nächsten Segment verbunden, mit dem Effekt, die äußeren Grenzen der verbundenen Segmente automatisch zu ihrem Schnittpunkt zu verlängern, sodass der gerenderte Strich genau ganze Pixel abdeckt, die an jedem Endpunkt zentriert sind, wenn diese verbundenen Segmente horizontal und/oder vertikal sind. Sehen Sie sich die nächsten beiden Abschnitte an, um Demonstrationen dieser zusätzlichen Linienstile zu sehen.

Für Linien mit geraden Breiten endet jede Hälfte in einer ganzzahligen Anzahl von Pixeln, so dass Sie einen Pfad möchten, der zwischen den Pixeln liegt (das heißt, (3,1) bis (3,5)), anstatt in der Mitte der Pixel.

Während es anfänglich bei der Arbeit mit skalierbaren 2D-Grafiken etwas mühsam ist, den Pixelraster und die Position der Pfade zu beachten, stellt dies sicher, dass Ihre Zeichnungen unabhängig von Skalierung oder anderen beteiligten Transformationen korrekt aussehen. Eine an der richtigen Stelle gezeichnete Linie mit einer Breite von 1,0 wird bei einer Vergrößerung um den Faktor 2 zu einer scharfen 2-Pixel-Linie und erscheint an der richtigen Stelle.

### Ein `lineCap`-Beispiel

Die `lineCap`-Eigenschaft bestimmt, wie die Endpunkte jeder Linie gezeichnet werden. Es gibt drei mögliche Werte für diese Eigenschaft, nämlich `butt`, `round` und `square`. Standardmäßig ist diese Eigenschaft auf `butt` eingestellt:

- `butt`
  - : Die Enden von Linien werden an den Endpunkten abgeschnitten.
- `round`
  - : Die Enden von Linien sind abgerundet.
- `square`
  - : Die Enden von Linien werden durch Hinzufügen eines Kästchens mit gleicher Breite und halber Höhe der Linienbreite abgeschlossen.

In diesem Beispiel zeichnen wir drei Linien, jede mit einem anderen Wert für die `lineCap`-Eigenschaft. Ich habe auch zwei Führungslinien hinzugefügt, um die genauen Unterschiede zwischen den dreien zu sehen. Jede dieser Linien beginnt und endet genau auf diesen Führungslinien.

Die Linie links verwendet die Standardoption `butt`. Sie werden feststellen, dass sie vollständig bündig mit den Führungslinien gezeichnet wird. Die zweite ist auf die Option `round` eingestellt. Dies fügt ein Halbkreis an das Ende hinzu, der einen Radius von der halben Breite der Linie hat. Die rechte Linie verwendet die Option `square`. Dies fügt ein Kästchen mit gleicher Breite und halber Höhe der Linienstärke hinzu.

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

Die `lineJoin`-Eigenschaft bestimmt, wie zwei Verbindungssegmente (von Linien, Kreisbögen oder Kurven) mit nicht-nulliger Länge in einer Form miteinander verbunden werden (degenerierte Segmente mit null Länge, deren angegebene Endpunkte und Kontrollpunkte genau an derselben Position sind, werden übersprungen).

Es gibt drei mögliche Werte für diese Eigenschaft: `round`, `bevel` und `miter`. Standardmäßig ist diese Eigenschaft auf `miter` eingestellt. Beachten Sie, dass die `lineJoin`-Einstellung keine Wirkung hat, wenn die beiden verbundenen Segmente in derselben Richtung verlaufen, da in diesem Fall kein Verbindungsbereich hinzugefügt wird:

- `round`
  - : Rundet die Ecken einer Form ab, indem ein zusätzlicher Kreisausschnitt in der Mitte am gemeinsamen Endpunkt der verbundenen Segmente gefüllt wird. Der Radius für diese abgerundeten Ecken entspricht der halben Linienbreite.
- `bevel`
  - : Füllt einen zusätzlichen dreieckigen Bereich zwischen dem gemeinsamen Endpunkt der verbundenen Segmente und den separaten äußeren rechteckigen Ecken jedes Segments.
- `miter`
  - : Verbundene Segmente werden verbunden, indem die Außenkanten ihrer Verbindung zu einem einzigen Punkt verlängert werden, mit dem Effekt, einen zusätzlichen rautenförmigen Bereich zu füllen. Diese Einstellung wird von der Eigenschaft `miterLimit` beeinflusst, die unten erläutert wird.

Das Beispiel unten zeichnet drei verschiedene Pfade und demonstriert jede dieser drei `lineJoin`-Eigenschaftseinstellungen; das Ergebnis wird oben angezeigt.

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

Wie Sie im vorherigen Beispiel gesehen haben, wenn zwei Linien mit der `miter`-Option verbunden werden, werden die Außenkanten der beiden verbundenen Linien bis zu dem Punkt verlängert, an dem sie sich treffen. Für Linien, die in einem großen Winkel zueinander stehen, ist dieser Punkt nicht weit vom inneren Verbindungspunkt entfernt. Wenn die Winkel zwischen den Linien jedoch kleiner werden, nimmt die Entfernung (Miter-Länge) zwischen diesen Punkten exponentiell zu.

Die Eigenschaft `miterLimit` bestimmt, wie weit der äußere Verbindungspunkt vom inneren Verbindungspunkt platziert werden kann. Wenn zwei Linien diesen Wert überschreiten, wird stattdessen eine Gehrung gezeichnet. Beachten Sie, dass die maximale Miter-Länge das Produkt der Linienbreite, gemessen im aktuellen Koordinatensystem, mit dem Wert dieser `miterLimit`-Eigenschaft ist (deren Standardwert in der HTML {{HTMLElement("canvas")}} 10.0 beträgt), sodass das `miterLimit` unabhängig von der aktuellen Anzeigenmaßstab oder beliebigen affinen Transformationen von Pfaden festgelegt werden kann: es beeinflusst nur die tatsächlich gerenderte Form von Linienkanten.

Genauer gesagt, das Miter-Limit ist das maximal zulässige Verhältnis der Verlängerungslänge (im HTML-Canvas wird es zwischen der äußeren Ecke der verbundenen Kanten der Linie und dem gemeinsamen Endpunkt der verbundenen Segmente gemessen, die im Pfad angegeben sind) zu halben Linienbreite. Es kann äquivalent als das maximal zulässige Verhältnis der Entfernung zwischen den inneren und äußeren Punkten der Verbindung der Kanten zur gesamten Linienbreite definiert werden. Es ist dann gleich dem Kotangens der Hälfte des minimalen inneren Winkels der verbundenen Segmente, unter dem keine Gehrungsverbindung gerendert wird, sondern nur eine Gehrungsverbindung:

- `miterLimit` = **max** `miterLength` / `lineWidth` = 1 / **sin** ( **min** _θ_ / 2 )
- Das Standard-Miter-Limit von 10,0 entfernt alle Miter für scharfe Winkel unter etwa 11 Grad.
- Ein Miter-Limit von √2 ≈ 1.4142136 (aufrundet) entfernt Miter für alle spitzen Winkel und behält Miterverbindungen nur für stumpfe oder rechte Winkel bei.
- Ein Miter-Limit von 1,0 ist gültig, schaltet jedoch alle Miter ab.
- Werte unter 1,0 sind ungültig für das Miter-Limit.

Hier ist eine kleine Demo, in der Sie `miterLimit` dynamisch festlegen können, um die Auswirkungen auf die Formen auf dem Canvas zu sehen. Die blauen Linien zeigen, wo die Start- und Endpunkte für jede der Linien im Zick-Zack-Muster sind.

Wenn Sie in diesem Demo einen `miterLimit`-Wert unter 4.2 angeben, wird keine der sichtbaren Ecken mit einer Miter-Erweiterung verbunden, sondern nur mit einer kleinen Gehrung in der Nähe der blauen Linien; bei einem `miterLimit` über 10 sollten die meisten Ecken in diesem Demo mit einer Miter weit weg von den blauen Linien verbunden sein, und deren Höhe nimmt zwischen den Ecken von links nach rechts ab, da sie sich mit wachsenden Winkeln verbinden; mit Zwischenwerten werden die Ecken auf der linken Seite nur mit einem Gehrung nahe den blauen Linien verbunden, und die Ecken auf der rechten Seite mit einer Miter-Erweiterung (ebenfalls mit abnehmender Höhe).

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

### Verwendung von Strichmustern

Die `setLineDash`-Methode und die `lineDashOffset`-Eigenschaft spezifizieren das Strichmuster für Linien. Die `setLineDash`-Methode akzeptiert eine Liste von Zahlen, die die Abstände zum abwechselnden Zeichnen einer Linie und eines Lückenmusters angeben, und die `lineDashOffset`-Eigenschaft gibt einen Versatz an, wo das Muster beginnen soll.

In diesem Beispiel erzeugen wir einen Effekt von "laufenden Ameisen". Es handelt sich um eine Animationstechnik, die häufig in Auswahlwerkzeugen von Grafikprogrammen zu finden ist. Es hilft dem Benutzer, den Auswahlrahmen vom Hintergrund zu unterscheiden, indem er den Rand animiert. Zu einem späteren Zeitpunkt dieser Anleitung erfahren Sie, wie Sie dies und andere [einfache Animationen](/de/docs/Web/API/Canvas_API/Tutorial/Basic_animations) durchführen können.

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

Genau wie bei einem normalen Zeichenprogramm können wir Formen mit linearen, radialen und konischen Verläufen füllen und umranden. Wir erstellen ein [`CanvasGradient`](/de/docs/Web/API/CanvasGradient) Objekt, indem wir eine der folgenden Methoden verwenden. Wir können dann dieses Objekt den Eigenschaften `fillStyle` oder `strokeStyle` zuweisen.

- [`createLinearGradient(x1, y1, x2, y2)`](/de/docs/Web/API/CanvasRenderingContext2D/createLinearGradient)
  - : Erstellt ein lineares Verlauf-Objekt mit einem Startpunkt von (`x1`, `y1`) und einem Endpunkt von (`x2`, `y2`).
- [`createRadialGradient(x1, y1, r1, x2, y2, r2)`](/de/docs/Web/API/CanvasRenderingContext2D/createRadialGradient)
  - : Erstellt einen radialen Verlauf. Die Parameter repräsentieren zwei Kreise, einen mit seinem Zentrum bei (`x1`, `y1`) und einem Radius von `r1`, und den anderen mit seinem Zentrum bei (`x2`, `y2`) mit einem Radius von `r2`.
- [`createConicGradient(angle, x, y)`](/de/docs/Web/API/CanvasRenderingContext2D/createConicGradient)
  - : Erstellt ein konisches Verlauf-Objekt mit einem Startwinkel von `angle` in Radians, an der Position (`x`, `y`).

Zum Beispiel:

```js
const lineargradient = ctx.createLinearGradient(0, 0, 150, 150);
const radialgradient = ctx.createRadialGradient(75, 75, 0, 75, 75, 100);
```

Nachdem wir ein `CanvasGradient`-Objekt erstellt haben, können wir ihm mit der Methode `addColorStop()` Farben zuweisen.

- [`gradient.addColorStop(position, color)`](/de/docs/Web/API/CanvasGradient/addColorStop)
  - : Erstellt einen neuen Farbstopp auf dem `gradient` Objekt. Die `position` ist eine Zahl zwischen 0,0 und 1,0 und definiert die relative Position der Farbe im Verlauf, und das `color` Argument muss ein String sein, der eine CSS {{cssxref("&lt;color&gt;")}} darstellt, die die Farbe angibt, die der Verlauf an dieser Stelle des Übergangs erreichen soll.

Sie können so viele Farbstopps zu einem Verlauf hinzufügen, wie Sie benötigen. Im Folgenden ist ein sehr einfacher linearer Verlauf von Weiß zu Schwarz dargestellt.

```js
const lineargradient = ctx.createLinearGradient(0, 0, 150, 150);
lineargradient.addColorStop(0, "white");
lineargradient.addColorStop(1, "black");
```

### Ein `createLinearGradient`-Beispiel

In diesem Beispiel erstellen wir zwei verschiedene Verläufe. Wie Sie hier sehen können, können sowohl die `strokeStyle` als auch die `fillStyle` Eigenschaften ein `canvasGradient` Objekt als gültigen Eingang akzeptieren.

```js
function draw() {
  const ctx = document.getElementById("canvas").getContext("2d");

  // Create gradients
  const linGrad = ctx.createLinearGradient(0, 0, 0, 150);
  linGrad.addColorStop(0, "#00ABEB");
  linGrad.addColorStop(0.5, "#fff");
  linGrad.addColorStop(0.5, "#26C000");
  linGrad.addColorStop(1, "#fff");

  const linGrad2 = ctx.createLinearGradient(0, 50, 0, 95);
  linGrad2.addColorStop(0.5, "#000");
  linGrad2.addColorStop(1, "rgb(0 0 0 / 0%)");

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

Der erste ist ein Hintergrundverlauf. Wie Sie sehen können, haben wir zwei Farben an derselben Position zugewiesen. Dies tun Sie, um sehr scharfe Farbwechsel zu machen – in diesem Fall von Weiß zu Grün. Normalerweise spielt es keine Rolle, in welcher Reihenfolge Sie die Farbstopps definieren, aber in diesem speziellen Fall macht es einen bedeutenden Unterschied. Wenn Sie die Zuweisungen in der Reihenfolge behalten, in der Sie sie erscheinen lassen möchten, wird dies kein Problem darstellen.

Im zweiten Verlauf haben wir die Startfarbe (an Position 0,0) nicht zugewiesen, da es nicht unbedingt notwendig war, da sie automatisch die Farbe des nächsten Farbstopps annimmt. Daher macht das Zuweisen der schwarzen Farbe an Position 0,5 automatisch den Verlauf von Anfang bis zu diesem Stopp schwarz.

{{EmbedLiveSample("A_createLinearGradient_example", "", "160")}}

### Ein `createRadialGradient`-Beispiel

In diesem Beispiel werden wir vier verschiedene radiale Verläufe definieren. Da wir die Kontrolle über die Start- und Endpunkte des Verlaufs haben, können wir komplexere Effekte erzielen als üblicherweise bei den "klassischen" radialen Verläufen, die wir zum Beispiel in Photoshop sehen (das heißt, ein Verlauf mit einem einzigen Mittelpunkt, von dem aus der Verlauf kreisförmig nach außen expandiert).

```js
function draw() {
  const ctx = document.getElementById("canvas").getContext("2d");

  // Create gradients
  const radGrad = ctx.createRadialGradient(45, 45, 10, 52, 50, 30);
  radGrad.addColorStop(0, "#A7D30C");
  radGrad.addColorStop(0.9, "#019F62");
  radGrad.addColorStop(1, "rgb(1 159 98 / 0%)");

  const radGrad2 = ctx.createRadialGradient(105, 105, 20, 112, 120, 50);
  radGrad2.addColorStop(0, "#FF5F98");
  radGrad2.addColorStop(0.75, "#FF0188");
  radGrad2.addColorStop(1, "rgb(255 1 136 / 0%)");

  const radGrad3 = ctx.createRadialGradient(95, 15, 15, 102, 20, 40);
  radGrad3.addColorStop(0, "#00C9FF");
  radGrad3.addColorStop(0.8, "#00B5E2");
  radGrad3.addColorStop(1, "rgb(0 201 255 / 0%)");

  const radGrad4 = ctx.createRadialGradient(0, 150, 50, 0, 140, 90);
  radGrad4.addColorStop(0, "#F4F201");
  radGrad4.addColorStop(0.8, "#E4C700");
  radGrad4.addColorStop(1, "rgb(228 199 0 / 0%)");

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

In diesem Fall haben wir den Startpunkt leicht vom Endpunkt versetzt, um einen sphärischen 3D-Effekt zu erzielen. Es ist am besten zu vermeiden, dass sich die inneren und äußeren Kreise überlappen, da dies zu seltsamen Effekten führt, die schwer vorhersehbar sind.

Der letzte Farbstopp in jedem der vier Verläufe verwendet eine vollständig transparente Farbe. Wenn Sie einen schönen Übergang von diesem zum vorherigen Farbstopp haben möchten, sollten beide Farben gleich sein. Dies ist nicht offensichtlich aus dem Code, da er zwei verschiedene CSS-Farbmethoden als Demonstration verwendet, aber im ersten Verlauf `#019F62 = rgb(1 159 98 / 100%)`.

{{EmbedLiveSample("A_createRadialGradient_example", "", "160")}}

### Ein `createConicGradient`-Beispiel

In diesem Beispiel definieren wir zwei verschiedene konische Verläufe. Ein konischer Verlauf unterscheidet sich von einem radialen Verlauf dadurch, dass er sich nicht um Kreise handelt, sondern um einen Punkt herumkreist.

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

Der erste Verlauf ist in der Mitte des ersten Rechtecks positioniert und verschiebt einen grünen Farbstopp am Anfang zu einem weißem am Ende. Der Winkel beginnt bei 2 Radians, was dadurch auffällt, dass die Start-/Endlinie nach Südosten zeigt.

Der zweite Verlauf ist ebenfalls in der Mitte seines zweiten Rechtecks positioniert. Dieser hat mehrere Farbstopps, die bei jedem Viertel der Drehung von Schwarz zu Weiß wechseln. Das gibt uns den karierten Effekt.

{{EmbedLiveSample("A_createConicGradient_example", "", "160")}}

## Muster

In einem der Beispiele auf der vorherigen Seite haben wir eine Reihe von Schleifen verwendet, um ein Muster von Bildern zu erstellen. Es gibt jedoch eine viel einfachere Methode: die Methode `createPattern()`.

- [`createPattern(image, type)`](/de/docs/Web/API/CanvasRenderingContext2D/createPattern)
  - : Erstellt und gibt ein neues Canvas-Musterobjekt zurück. `image` ist die Quelle des Bildes (das heißt, ein [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement), ein [`SVGImageElement`](/de/docs/Web/API/SVGImageElement), ein anderes [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) oder ein [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas), ein [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) oder ein [`VideoFrame`](/de/docs/Web/API/VideoFrame), oder ein [`ImageBitmap`](/de/docs/Web/API/ImageBitmap)). `type` ist ein String, der angibt, wie das Bild verwendet werden soll.

Der Typ gibt an, wie das Bild verwendet werden soll, um das Muster zu erstellen, und muss einer der folgenden String-Werte sein:

- `repeat`
  - : Kachelt das Bild sowohl in vertikaler als auch in horizontaler Richtung.
- `repeat-x`
  - : Kachelt das Bild horizontal, aber nicht vertikal.
- `repeat-y`
  - : Kachelt das Bild vertikal, aber nicht horizontal.
- `no-repeat`
  - : Kachelt das Bild nicht. Es wird nur einmal verwendet.

Wir verwenden diese Methode, um ein [`CanvasPattern`](/de/docs/Web/API/CanvasPattern) Objekt zu erstellen, das den Verlaufsmethoden, die wir oben gesehen haben, sehr ähnlich ist. Sobald wir ein Muster erstellt haben, können wir es den Eigenschaften `fillStyle` oder `strokeStyle` zuweisen. Zum Beispiel:

```js
const img = new Image();
img.src = "some-image.png";
const pattern = ctx.createPattern(img, "repeat");
```

> [!NOTE]
> Wie bei der Methode `drawImage()` müssen Sie sicherstellen, dass das verwendete Bild geladen ist, bevor Sie diese Methode aufrufen, da das Muster ansonsten möglicherweise falsch gezeichnet wird.

### Ein `createPattern`-Beispiel

In diesem letzten Beispiel erstellen wir ein Muster, das der `fillStyle`-Eigenschaft zugewiesen wird. Erwähnenswert ist die Verwendung des `onload`-Handlers des Bildes. Dies soll sicherstellen, dass das Bild geladen ist, bevor es dem Muster zugewiesen wird.

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
  - : Gibt die horizontale Entfernung an, die der Schatten vom Objekt erstrecken soll. Dieser Wert wird nicht von der Transformationsmatrix beeinflusst. Der Standardwert ist 0.
- [`shadowOffsetY = float`](/de/docs/Web/API/CanvasRenderingContext2D/shadowOffsetY)
  - : Gibt die vertikale Entfernung an, die der Schatten vom Objekt erstrecken soll. Dieser Wert wird nicht von der Transformationsmatrix beeinflusst. Der Standardwert ist 0.
- [`shadowBlur = float`](/de/docs/Web/API/CanvasRenderingContext2D/shadowBlur)
  - : Gibt die Größe des Unschärfeeffekts an; Dieser Wert entspricht keiner Anzahl von Pixeln und wird nicht von der aktuellen Transformationsmatrix beeinflusst. Der Standardwert ist 0.
- [`shadowColor = color`](/de/docs/Web/API/CanvasRenderingContext2D/shadowColor)
  - : Ein Standard-CSS-Farbwert, der die Farbe des Schatteneffekts angibt; Standardmäßig ist es volltransparentes Schwarz.

Die Eigenschaften `shadowOffsetX` und `shadowOffsetY` geben an, wie weit der Schatten in den X- und Y-Richtungen vom Objekt erstreckt werden soll; Diese Werte werden nicht von der aktuellen Transformationsmatrix beeinflusst. Verwenden Sie negative Werte, um den Schatten nach oben oder nach links zu erstrecken, und positive Werte, um den Schatten nach unten oder nach rechts zu erstrecken. Standardmäßig sind beide 0.

Die Eigenschaft `shadowBlur` gibt die Größe des Unschärfeeffekts an; Dieser Wert entspricht keiner Anzahl von Pixeln und wird nicht von der aktuellen Transformationsmatrix beeinflusst. Der Standardwert ist 0.

Die Eigenschaft `shadowColor` ist ein Standard-CSS-Farbwert, der die Farbe des Schatteneffekts angibt; Standardmäßig ist sie volltransparentes Schwarz.

> [!NOTE]
> Schatten werden nur für `source-over` [Kompositionsoperationen](/de/docs/Web/API/Canvas_API/Tutorial/Compositing) gezeichnet.

### Ein schattiertes Textbeispiel

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

Wir werden uns die `font`-Eigenschaft und die Methode `fillText` im nächsten Kapitel über [Zeichnen von Text](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text) ansehen.

## Canvas-Füllregeln

Beim Verwenden von `fill` (oder [`clip`](/de/docs/Web/API/CanvasRenderingContext2D/clip) und [`isPointInPath`](/de/docs/Web/API/CanvasRenderingContext2D/isPointInPath)) können Sie optional einen Füllregelalgorithmus angeben, um zu bestimmen, ob ein Punkt innerhalb oder außerhalb eines Pfads liegt und ob er daher gefüllt wird oder nicht. Dies ist nützlich, wenn ein Pfad sich selbst schneidet oder verschachtelt ist.

Zwei Werte sind möglich:

- `nonzero`
  - : Die [Nicht-Null-Aufregel](https://en.wikipedia.org/wiki/Nonzero-rule), die die Standardregel ist.
- `evenodd`
  - : Die [Gerade-Ungerade-Aufregel](https://en.wikipedia.org/wiki/Even%E2%80%93odd_rule).

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
