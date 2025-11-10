---
title: Skalierung von SVG-Hintergründen
slug: Web/CSS/Guides/Backgrounds_and_borders/Scaling_SVG_backgrounds
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Angesichts der Flexibilität von SVG-Bildern gibt es einiges zu beachten, wenn Sie diese als Hintergrundbilder mit der {{ cssxref("background-image") }}-Eigenschaft verwenden, und noch mehr, wenn Sie sie mit der {{ cssxref("background-size") }}-Eigenschaft skalieren. Dieser Artikel beschreibt, wie die Skalierung von SVG-Bildern bei Verwendung dieser Eigenschaften gehandhabt wird.

## Der Hintergrund-Skalierungsalgorithmus

Der Algorithmus zur Bestimmung der Hintergrundgröße eines Hintergrundbildes lässt sich größtenteils durch diese vier Regeln zusammenfassen. Es gibt einige Sonderfälle, die von diesen Regeln nicht abgedeckt werden, aber sie decken die Mehrheit der Fälle ab.

1. Wenn {{ cssxref("background-size") }} eine feste Dimension angibt (das heißt, Prozentwerte und relative Einheiten sind durch ihren Kontext festgelegt), gewinnt diese Dimension.
2. Wenn das Bild ein intrinsisches Verhältnis hat (das heißt, sein Breiten-Höhen-Verhältnis ist konstant, beispielsweise 16:9, 4:3, 2.39:1, 1:1 usw.), wird das gerenderte Bild dieses Verhältnis beibehalten.
3. Wenn das Bild eine Größe angibt und die Größe nicht durch `constrain` oder `cover` modifiziert wird, gewinnt die angegebene Größe.
4. Wenn keiner der oben genannten Fälle zutrifft, wird das Bild in derselben Größe wie der Hintergrundbereich gerendert.

Es ist wichtig zu beachten, dass der Hintergrund-Skalierungsalgorithmus nur auf die Dimensionen und Proportionen des Bildes achtet, oder deren Fehlen. Ein SVG-Bild mit festen Dimensionen wird genauso behandelt wie ein Rasterbild derselben Größe.

> [!NOTE]
> Wenn Sie versuchen, Ihr SVG mit CSS auf ein anderes {{Glossary("aspect_ratio", "Seitenverhältnis")}} zu strecken, um es beispielsweise über den Seitenhintergrund zu spannen, stellen Sie sicher, dass Ihr SVG `preserveAspectRatio="none"` umfasst. Weitere Informationen zu {{svgattr("preserveAspectRatio")}} finden Sie hier.

## Quellbild-Beispiele

Bevor wir uns die Ergebnisse der Verwendung verschiedener Arten von SVG-Quellbildern ansehen und sehen, wie sie mit {{ cssxref("background-size") }} aussehen, ist es hilfreich, sich einige Beispiel-Quellbilder anzusehen, die unterschiedliche Abmessungen und Größenangaben haben, die wir später als unsere `background-image`-Werte in unseren Beispielen verwenden werden. Der Browser rendert {{SVGelement("svg")}}-Bilder standardmäßig mit einer Breite von `300px` und einer Höhe von `150px`.

### Dimensionslos und proporzionslos

Dieses SVG-Verlaufsbild ist sowohl dimensionslos als auch proporzionslos. Es ist ihm egal, welche Größe es hat, noch interessiert es sich dafür, ein bestimmtes Seitenverhältnis beizubehalten. Dies wäre ein guter Verlaufs-Desktop-Hintergrund, der unabhängig von Ihrer Bildschirmgröße und deren Seitenverhältnis funktionieren würde.

```html
<svg>
  <title>Corner-to-corner gradient</title>
  <defs>
    <linearGradient id="g" x1="0%" x2="100%" y1="0%" y2="100%">
      <stop stop-color="pink" offset="0" />
      <stop stop-color="goldenrod" offset="1" />
    </linearGradient>
  </defs>
  <rect fill="url('#g')" width="100%" height="100%" />
</svg>
```

{{ EmbedLiveSample('Dimensionless_and_proportionless', 200, 180) }}

### Eine angegebene Dimension und proporzionslos

Dieses Bild gibt eine Breite von 100 Pixeln an, aber keine Höhe oder intrinsisches Verhältnis. Es handelt sich im Grunde um einen dünnen Streifen Tapete, der über die gesamte Höhe eines Blocks gestreckt werden könnte.

```html
<svg width="100">
  <title>Vertical gradient, with a fixed width</title>
  <defs>
    <linearGradient id="g" x1="0%" x2="0%" y1="0%" y2="100%">
      <stop stop-color="purple" offset="0" />
      <stop stop-color="lime" offset="1" />
    </linearGradient>
  </defs>
  <rect fill="url('#g')" width="100%" height="100%" />
</svg>
```

{{ EmbedLiveSample('One specified dimension and proportionless', 200, 180) }}

### Eine angegebene Dimension mit intrinsischem Verhältnis

Dieses Bild gibt eine Höhe von 100 Pixeln an, aber keine Breite. Es gibt auch ein intrinsisches Seitenverhältnis von 3:4 an. Dies stellt sicher, dass sein Breiten-Höhen-Verhältnis immer 3:4 beträgt, es sei denn, es wird absichtlich auf eine unverhältnismäßige Größe skaliert (das heißt, indem sowohl Breite als auch Höhe ausdrücklich angegeben werden, die nicht in diesem Verhältnis stehen).

Dies ist sehr ähnlich wie das Angeben einer bestimmten Breite und Höhe; da, wenn Sie eine Dimension und ein Verhältnis haben, wird die andere Dimension impliziert.

```html
<svg height="100" viewBox="0 0 3 4" preserveAspectRatio="none">
  <title>Vertical gradient, with a fixed height and intrinsic ratio</title>
  <defs>
    <linearGradient id="g" x1="0%" x2="0%" y1="0%" y2="100%">
      <stop stop-color="teal" offset="0" />
      <stop stop-color="orange" offset="1" />
    </linearGradient>
  </defs>
  <rect fill="url('#g')" width="100%" height="100%" />
</svg>
```

{{ EmbedLiveSample('One specified dimension with intrinsic ratio', 200, 180) }}

### Keine Breite oder Höhe mit intrinsischem Verhältnis

Dieses Bild spezifiziert weder eine Breite noch eine Höhe; stattdessen spezifiziert es ein intrinsisches Verhältnis von 1:1. Es ist immer quadratisch und kann in jeder Größe verwendet werden, z.B. 32x32, 128x128 oder 512x512.

```html
<svg viewBox="0 0 1 1" preserveAspectRatio="none">
  <title>Intrinsic ratio</title>
  <defs>
    <linearGradient id="g" x1="0%" x2="100%" y1="0%" y2="0%">
      <stop stop-color="navy" offset="0" />
      <stop stop-color="maroon" offset="1" />
    </linearGradient>
  </defs>
  <rect fill="url('#g')" width="100%" height="100%" />
</svg>
```

{{ EmbedLiveSample('No width or height with intrinsic ratio', 200, 180) }}

## Skalierungsbeispiele

Sehen wir uns nun einige Beispiele an, was passiert, wenn wir unterschiedliche Skalierungen auf diese Bilder anwenden. In jedem der untenstehenden Beispiele sind die umschließenden {{htmlelement("div")}}-Elemente 300 Pixel breit und 200 Pixel hoch, mit einem 2 Pixel breiten Rahmen. Um sicherzustellen, dass wir das SVG-Hintergrundbild für diese Demonstrationen nur einmal anzeigen, setzen wir {{ cssxref("background-repeat") }} auf `no-repeat`.

```css
div {
  width: 300px;
  height: 200px;
  background-repeat: no-repeat;
  border: 2px solid black;
}
```

### Feste Längen für beide Dimensionen angeben

Wenn Sie {{ cssxref("background-size") }} verwenden, um feste Längen für beide Dimensionen anzugeben, werden diese Längen immer verwendet, gemäß Regel 1 oben. Mit anderen Worten, das Bild wird immer auf die von Ihnen angegebenen Dimensionen gestreckt, unabhängig davon, ob das Quellbild seine Dimensionen und/oder sein Seitenverhältnis angegeben hat.

#### Keine Dimensionen oder intrinsisches Verhältnis

In diesem Beispiel hat das Bild keine Dimensionen oder ein intrinsisches Verhältnis:

```html hidden live-sample___scaling1
<div></div>
```

```css hidden live-sample___scaling1
div {
  width: 300px;
  height: 200px;
  background-repeat: no-repeat;
  border: 2px solid black;
}
```

```css live-sample___scaling1
div {
  background-image: url("no-dimensions-or-ratio.svg");
  background-size: 125px 175px;
}
```

{{ EmbedLiveSample('scaling1', 200, 230) }}

#### Eine angegebene Dimension, kein intrinsisches Verhältnis

In diesem Beispiel hat das Bild eine angegebene Dimension und kein intrinsisches Verhältnis:

```html hidden live-sample___scaling2
<div></div>
```

```css hidden live-sample___scaling2
div {
  width: 300px;
  height: 200px;
  background-repeat: no-repeat;
  border: 2px solid black;
}
```

```css live-sample___scaling2
div {
  background-image: url("100px-wide-no-height-or-ratio.svg");
  background-size: 250px 150px;
}
```

{{ EmbedLiveSample('scaling2', 200, 230) }}

#### Eine angegebene Dimension mit intrinsischem Verhältnis

```html hidden live-sample___scaling3
<div></div>
```

In diesem Beispiel hat das Bild eine Dimension explizit angegeben, zusammen mit einem intrinsischen Verhältnis, was bedeutet, dass beide Dimensionen effektiv definiert sind. Die Angabe einer absoluten Höhe und Breite für `background-size` überschreibt die im SVG angegebenen Dimensionen:

```css hidden live-sample___scaling3
div {
  width: 300px;
  height: 200px;
  background-repeat: no-repeat;
  border: 2px solid black;
}
```

```css live-sample___scaling3
div {
  background-image: url("100px-height-3x4-ratio.svg");
  background-size: 275px 125px;
}
```

{{ EmbedLiveSample('scaling3', 200, 230) }}

#### Keine angegebene Breite oder Höhe mit intrinsischem Verhältnis

In diesem Beispiel hat das Bild ein intrinsisches Verhältnis, aber keine angegebenen Dimensionen:

```html hidden live-sample___scaling4
<div></div>
```

```css hidden live-sample___scaling4
div {
  width: 300px;
  height: 200px;
  background-repeat: no-repeat;
  border: 2px solid black;
}
```

```css live-sample___scaling4
div {
  background-image: url("no-dimensions-1x1-ratio.svg");
  background-size: 250px 100px;
}
```

{{ EmbedLiveSample('scaling4', 200, 230) }}

### Verwendung von contain oder cover

Die Angabe von `cover` für {{ cssxref("background-size") }} macht das Bild so klein wie möglich, während es immer noch den gesamten Hintergrundbereich abdeckt. `contain` hingegen macht das Bild so groß wie möglich, ohne vom Hintergrundbereich abgeschnitten zu werden.

Für ein Bild mit einem intrinsischen Verhältnis passt genau eine Größe zu den `cover`/fit-Kriterien allein. Aber wenn kein intrinsisches Verhältnis angegeben ist, sind `cover`/fit nicht ausreichend, sodass die großen/kleinen Einschränkungen die resultierende Größe wählen.

#### Keine Dimensionen oder intrinsisches Verhältnis

In diesem Beispiel hat das Bild weder Dimensionen noch ein intrinsisches Verhältnis. Wenn ein Bild weder Dimensionen noch ein intrinsisches Verhältnis angibt, sind weder Regel 2 noch Regel 3 anwendbar, sodass Regel 4 übernimmt: das Hintergrundbild wird über den gesamten Hintergrundbereich gerendert. Dies erfüllt die größtesten oder kleinsten Einschränkungen.

```html hidden live-sample___cc1
<div></div>
```

```css hidden live-sample___cc1
div {
  width: 300px;
  height: 200px;
  background-repeat: no-repeat;
  border: 2px solid black;
}
```

```css live-sample___cc1
div {
  background-image: url("no-dimensions-or-ratio.svg");
  background-size: contain;
}
```

{{ EmbedLiveSample('cc1', 200, 230) }}

#### Eine angegebene Dimension, kein intrinsisches Verhältnis

In diesem Beispiel, bei dem das Bild eine angegebene Dimension hat, aber kein intrinsisches Verhältnis, gilt Regel 4, und das Bild wird so vergrößert, dass es den gesamten Hintergrundbereich abdeckt.

```html hidden live-sample___cc2
<div></div>
```

```css hidden live-sample___cc2
div {
  width: 300px;
  height: 200px;
  background-repeat: no-repeat;
  border: 2px solid black;
}
```

```css live-sample___cc2
div {
  background-image: url("100px-wide-no-height-or-ratio.svg");
  background-size: contain;
}
```

{{ EmbedLiveSample('cc2', 200, 230) }}

#### Eine angegebene Dimension mit intrinsischem Verhältnis

In diesen Beispielen hat das Bild eine Dimension explizit angegeben, zusammen mit einem intrinsischen Verhältnis.

Die Dinge ändern sich, wenn Sie ein intrinsisches Verhältnis angeben. In diesem Fall ist Regel 1 nicht relevant, sodass Regel 2 angewendet wird: wir versuchen, jedes intrinsische Verhältnis beizubehalten (wobei `contain` oder `cover` respektiert werden). Beispielsweise bedeutet das Beibehalten eines 3:4 intrinsischen Seitenverhältnisses für eine 300x200 Box mit `contain`, dass ein 150x200 Hintergrund gezeichnet wird.

##### contain Fall

```html hidden live-sample___cc3
<div></div>
```

Gegebenenfalls diese CSS:

```css hidden live-sample___cc3
div {
  width: 300px;
  height: 200px;
  background-repeat: no-repeat;
  border: 2px solid black;
}
```

```css live-sample___cc3
div {
  background-image: url("100px-height-3x4-ratio.svg");
  background-size: contain;
}
```

{{ EmbedLiveSample('cc3', 200, 230) }}

Beachten Sie, wie das gesamte Bild gerendert wird und bestmöglich an die Box angepasst wird, ohne dass Teile davon abgeschnitten werden.

##### cover Fall

```html hidden live-sample___cc5
<div></div>
```

```css hidden live-sample___cc5
div {
  width: 300px;
  height: 200px;
  background-repeat: no-repeat;
  border: 2px solid black;
}
```

```css live-sample___cc5
div {
  background-image: url("100px-height-3x4-ratio.svg");
  background-size: cover;
}
```

{{ EmbedLiveSample('cc5', 200, 230) }}

Hier wird das 3:4-Verhältnis beibehalten, während das Bild dennoch gestreckt wird, um die gesamte Box auszufüllen. Dadurch wird der untere Teil des Bildes abgeschnitten.

#### Keine Dimensionen mit intrinsischem Verhältnis

Diese Beispiele verwenden das Bild mit einem intrinsischen Verhältnis, aber ohne definierte Dimensionen. Wenn ein Bild keine intrinsischen Dimensionen hat, jedoch ein intrinsisches Verhältnis, funktionieren die Dinge ähnlich.

##### contain Fall

```html hidden live-sample___cc6
<div></div>
```

```css hidden live-sample___cc6
div {
  width: 300px;
  height: 200px;
  background-repeat: no-repeat;
  border: 2px solid black;
}
```

```css live-sample___cc6
div {
  background-image: url("no-dimensions-1x1-ratio.svg");
  background-size: contain;
}
```

{{ EmbedLiveSample('cc6', 200, 230) }}

Beachten Sie, dass das Bild so groß ist, dass es in die kleinste Dimension passt, während das 1:1 Seitenverhältnis beibehalten wird.

##### cover Fall

```html hidden live-sample___cc7
<div></div>
```

```css hidden live-sample___cc7
div {
  width: 300px;
  height: 200px;
  background-repeat: no-repeat;
  border: 2px solid black;
}
```

```css live-sample___cc7
div {
  background-image: url("no-dimensions-1x1-ratio.svg");
  background-size: cover;
}
```

{{ EmbedLiveSample('cc7', 200, 230) }}

Hier ist das Bild so bemessen, dass es die größte Dimension füllt. Das 1:1 Seitenverhältnis wurde beibehalten, obwohl es bei diesem Quellbild schwierig zu erkennen sein kann.

### Automatische Größenbestimmung mit "auto" für beide Dimensionen

Wenn {{ cssxref("background-size") }} auf `auto` oder `auto auto` gesetzt ist, besagt Regel 2, dass das Rendering jedes intrinsische Verhältnis beibehalten muss, das angegeben ist.

#### Keine Dimensionen oder intrinsisches Verhältnis

Wenn Hintergrundbilder ohne intrinsisches Verhältnis oder angegebene Dimensionen automatisch bemessen werden, tritt Regel 4 in Kraft, und das Bild wird so gerendert, dass es den Hintergrundbereich füllt.

```html hidden live-sample___both-auto1
<div></div>
```

```css hidden live-sample___both-auto1
div {
  width: 300px;
  height: 200px;
  background-repeat: no-repeat;
  border: 2px solid black;
}
```

```css live-sample___both-auto1
div {
  background-image: url("no-dimensions-or-ratio.svg");
  background-size: auto auto;
}
```

{{ EmbedLiveSample('both-auto1', 200, 230) }}

#### Eine Dimension und kein intrinsisches Verhältnis

Wenn kein intrinsisches Verhältnis angegeben ist, aber mindestens eine Dimension angegeben ist, tritt Regel 3 in Kraft, und wir rendern das Bild unter Berücksichtigung dieser Dimensionen.

```html hidden live-sample___both-auto2
<div></div>
```

```css hidden live-sample___both-auto2
div {
  width: 300px;
  height: 200px;
  background-repeat: no-repeat;
  border: 2px solid black;
}
```

```css live-sample___both-auto2
div {
  background-image: url("100px-wide-no-height-or-ratio.svg");
  background-size: auto auto;
}
```

{{ EmbedLiveSample('both-auto2', 200, 230) }}

Beachten Sie hier, dass die Breite, die im Quell-SVG auf 100 Pixel festgelegt ist, beachtet wird, während die Höhe den Hintergrundbereich füllt, da sie weder explizit noch durch ein intrinsisches Verhältnis angegeben ist.

#### Eine Dimension und ein intrinsisches Verhältnis

Wenn wir ein intrinsisches Verhältnis mit einer festen Dimension haben, wird damit beide Dimensionen festgelegt. Wie bereits erwähnt, ist die Kenntnis einer Dimension und eines Verhältnisses gleichbedeutend mit der expliziten Angabe beider Dimensionen.

```html hidden live-sample___both-auto3
<div></div>
```

```css hidden live-sample___both-auto3
div {
  width: 300px;
  height: 200px;
  background-repeat: no-repeat;
  border: 2px solid black;
}
```

```css live-sample___both-auto3
div {
  background-image: url("100px-height-3x4-ratio.svg");
  background-size: auto auto;
}
```

{{ EmbedLiveSample('both-auto3', 200, 230) }}

Da dieses Bild eine explizite Höhe von `100px` hat, wird mit dem 3:4-Verhältnis, das im SVG festgelegt ist, im Falle von `auto` die Breite des Bildes auf 75 Pixel festgelegt.

#### Keine festen Dimensionen mit intrinsischem Verhältnis

Wenn ein intrinsisches Verhältnis angegeben ist, aber keine Dimensionen, wird Regel 4 angewendet — mit Ausnahme, dass Regel 2 ebenfalls gilt. Das Bild wird daher genauso gerendert wie im `contain`-Fall.

```html hidden live-sample___both-auto4
<div></div>
```

```css hidden live-sample___both-auto4
div {
  width: 300px;
  height: 200px;
  background-repeat: no-repeat;
  border: 2px solid black;
}
```

```css live-sample___both-auto4
div {
  background-image: url("no-dimensions-1x1-ratio.svg");
  background-size: auto auto;
}
```

{{ EmbedLiveSample('both-auto4', 200, 230) }}

### Verwendung von "auto" und einer spezifischen Länge

Angesichts von Regel 1 werden angegebene Dimensionen immer verwendet, sodass wir unsere Regeln nur anwenden müssen, um die zweite Dimension zu bestimmen.

#### Keine Dimensionen oder intrinsisches Verhältnis

Wenn das Bild keine Dimensionen oder ein intrinsisches Verhältnis hat, wird Regel 4 angewendet und wir verwenden die Dimension des Hintergrundbereichs, um den Wert für die `auto`-Dimension zu bestimmen.

```html hidden live-sample___auto0
<div></div>
```

```css hidden live-sample___auto0
div {
  width: 300px;
  height: 200px;
  background-repeat: no-repeat;
  border: 2px solid black;
}
```

```css live-sample___auto0
div {
  background-image: url("no-dimensions-or-ratio.svg");
  background-size: auto 140px;
}
```

{{ EmbedLiveSample('auto0', 200, 230) }}

Hier wird die Breite unter Verwendung der Breite des Hintergrundbereichs gemäß Regel 4 bestimmt, während die Höhe die im CSS angegebene `140px` ist.

#### Eine festgelegte Dimension ohne intrinsisches Verhältnis

Wenn das Bild eine Dimension spezifiziert hat, aber kein intrinsisches Verhältnis, wird diese spezifizierte Dimension gemäß Regel 3 verwendet, wenn diese Dimension im CSS auf `auto` gesetzt ist.

```html hidden live-sample___auto1
<div></div>
```

```css hidden live-sample___auto1
div {
  width: 300px;
  height: 200px;
  background-repeat: no-repeat;
  border: 2px solid black;
}
```

```css live-sample___auto1
div {
  background-image: url("100px-wide-no-height-or-ratio.svg");
  background-size: 200px auto;
}
```

{{ EmbedLiveSample('auto1', 200, 230) }}

Hier überschreiben die im CSS angegebenen `200px` die im SVG spezifizierte `100px`-Breite gemäß Regel 1. Da kein intrinsisches Verhältnis oder Höhe angegeben ist, wählt `auto` die Höhe des Hintergrundbereichs als Höhe für das gerenderte Bild.

```html hidden live-sample___auto2
<div></div>
```

```css hidden live-sample___auto2
div {
  width: 300px;
  height: 200px;
  background-repeat: no-repeat;
  border: 2px solid black;
}
```

```css live-sample___auto2
div {
  background-image: url("100px-wide-no-height-or-ratio.svg");
  background-size: auto 125px;
}
```

{{ EmbedLiveSample('auto2', 200, 230) }}

In diesem Fall ist die Breite im CSS als `auto` angegeben, sodass die im SVG spezifizierte Breite von `100px` gemäß Regel 3 ausgewählt wird. Die Höhe ist im CSS auf `125px` festgelegt, sodass diese gemäß Regel 1 ausgewählt wird.

#### Eine festgelegte Dimension mit intrinsischem Verhältnis

Wenn eine Dimension spezifiziert ist, wird Regel 1 diese Dimension aus dem SVG auf den gerenderten Hintergrund anwenden, es sei denn, sie wird ausdrücklich durch das CSS überschrieben. Wenn auch ein intrinsisches Verhältnis angegeben ist, wird dieses verwendet, um die andere Dimension zu bestimmen.

```html hidden live-sample___auto3
<div></div>
```

```css hidden live-sample___auto3
div {
  width: 300px;
  height: 200px;
  background-repeat: no-repeat;
  border: 2px solid black;
}
```

```css live-sample___auto3
div {
  background-image: url("100px-height-3x4-ratio.svg");
  background-size: 150px auto;
}
```

{{ EmbedLiveSample('auto3', 200, 230) }}

In diesem Fall verwenden wir die Breite des Bildes, die im CSS auf `150px` festgelegt ist, sodass Regel 1 angewendet wird. Das intrinsische 3:4-Seitenverhältnis bestimmt dann die Höhe für den `auto`-Fall.

#### Keine angegebenen Dimensionen mit intrinsischem Verhältnis

Wenn keine Dimensionen im SVG spezifiziert sind, wird die im CSS angegebene Dimension angewendet, dann wird das intrinsische Verhältnis verwendet, um die andere Dimension zu bestimmen, gemäß Regel 2.

```html hidden live-sample___auto4
<div></div>
```

```css hidden live-sample___auto4
div {
  width: 300px;
  height: 200px;
  background-repeat: no-repeat;
  border: 2px solid black;
}
```

```css live-sample___auto4
div {
  background-image: url("no-dimensions-1x1-ratio.svg");
  background-size: 150px auto;
}
```

{{ EmbedLiveSample('auto4', 200, 230) }}

Die Breite wird vom CSS auf `150px` festgelegt. Der `auto`-Wert für die Höhe wird unter Verwendung dieser Breite und des 1:1-Seitenverhältnisses auf ebenfalls `150px` berechnet.

## Siehe auch

- {{cssxref("background-size")}}
- [CSS-Hintergründe und Rahmen](/de/docs/Web/CSS/Guides/Backgrounds_and_borders) Modul
