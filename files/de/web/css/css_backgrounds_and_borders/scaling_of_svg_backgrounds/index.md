---
title: SVG-Hintergrundbilder skalieren
slug: Web/CSS/CSS_backgrounds_and_borders/Scaling_of_SVG_backgrounds
l10n:
  sourceCommit: a9063bb88f28dc2a9b32e39f060ab6930663da52
---

{{CSSRef}}

Aufgrund der Flexibilität von SVG-Bildern gibt es viel zu beachten, wenn Sie sie als Hintergrundbilder mit der {{ cssxref("background-image") }}-Eigenschaft verwenden, und noch mehr, wenn Sie sie mit der {{ cssxref("background-size") }}-Eigenschaft skalieren. Dieser Artikel beschreibt, wie die Skalierung von SVG-Bildern bei Verwendung dieser Eigenschaften behandelt wird.

## Der Hintergrundgrößenalgorithmus

Der Algorithmus, der zur Bestimmung der Hintergrundgröße eines Hintergrundbildes verwendet wird, kann größtenteils mit diesen vier Regeln zusammengefasst werden. Es gibt einige Sonderfälle, die von diesen Regeln nicht abgedeckt werden, aber dies deckt die Mehrheit der Fälle ab.

1. Wenn {{ cssxref("background-size") }} eine feste Dimension angibt (d.h. Prozentsätze und relative Einheiten sind durch ihren Kontext festgelegt), gewinnt diese Dimension.
2. Wenn das Bild ein intrinsisches Verhältnis hat (d.h. das Breite:Höhe-Verhältnis ist konstant, wie 16:9, 4:3, 2.39:1, 1:1 usw.), bleibt die gerenderte Größe bei diesem Verhältnis.
3. Wenn das Bild eine Größe angibt und die Größe nicht durch `constrain` oder `cover` modifiziert wird, gewinnt die angegebene Größe.
4. Wenn keiner der obigen Fälle zutrifft, wird das Bild in derselben Größe wie der Hintergrundbereich gerendert.

Es ist erwähnenswert, dass der Hintergrundgrößenalgorithmus sich nur um die Dimensionen und Proportionen des Bildes oder das Fehlen solcher kümmert. Ein SVG-Bild mit festen Dimensionen wird genauso behandelt wie ein Rasterbild derselben Größe.

> [!NOTE]
> Wenn Sie versuchen, Ihr SVG mit CSS auf ein anderes {{Glossary("aspect_ratio", "Seitenverhältnis")}} zu strecken - beispielsweise um es über den Hintergrund der Seite zu strecken - stellen Sie sicher, dass Ihr SVG `preserveAspectRatio="none"` enthält. Erfahren Sie mehr über {{svgattr("preserveAspectRatio")}}.

## Quelldatenbilder

Bevor wir uns die Ergebnisse der Verwendung verschiedener Arten von SVG-Quelldatenbildern ansehen und wie sie mit {{ cssxref("background-size") }} aussehen, ist es hilfreich, sich einige Beispiel-Quelldatenbilder mit unterschiedlichen Dimensionen und Größeneinstellungen anzusehen, die wir später als unsere `background-image`-Werte in unseren Beispielen verwenden werden. Der Browser rendert {{SVGelement("svg")}}-Bilder standardmäßig als `300px` breit und `150px` hoch.

### Dimensionenlos und verhältnislos

Dieses SVG-Verlaufsbild ist sowohl dimensionenlos als auch verhältnislos. Es ist ihm egal, welche Größe es hat, noch ist es ihm wichtig, ein bestimmtes Seitenverhältnis beizubehalten. Dies wäre ein guter Desktop-Hintergrund mit Verlauf, der unabhängig von Ihrer Bildschirmgröße und dessen Seitenverhältnis funktionieren würde.

```html
<svg>
  <title>Corner-to-corner gradient</title>
  <defs>
    <linearGradient id="g" x1="0%" x2="100%" y1="0%" y2="100%">
      <stop stop-color="pink" offset="0" />
      <stop stop-color="goldenrod" offset="1" />
    </linearGradient>
  </defs>
  <rect fill="url(#g)" width="100%" height="100%" />
</svg>
```

{{ EmbedLiveSample('Dimensionless_and_proportionless', 200, 180) }}

### Eine festgelegte Dimension und verhältnislos

Dieses Bild gibt eine Breite von 100 Pixel an, aber keine Höhe oder ein intrinsisches Verhältnis. Dies ist im Grunde ein dünner Streifen Tapete, der über die gesamte Höhe eines Blocks gestreckt werden könnte.

```html
<svg width="100">
  <title>Vertical gradient, with a fixed width</title>
  <defs>
    <linearGradient id="g" x1="0%" x2="0%" y1="0%" y2="100%">
      <stop stop-color="purple" offset="0" />
      <stop stop-color="lime" offset="1" />
    </linearGradient>
  </defs>
  <rect fill="url(#g)" width="100%" height="100%" />
</svg>
```

{{ EmbedLiveSample('One specified dimension and proportionless', 200, 180) }}

### Eine festgelegte Dimension mit intrinsischem Verhältnis

Dieses Bild gibt eine Höhe von 100 Pixeln an, aber keine Breite. Es gibt auch ein intrinsisches Seitenverhältnis von 3:4 an. Dies stellt sicher, dass sein Breite:Höhe-Verhältnis immer 3:4 ist, es sei denn, es ist absichtlich auf eine unverhältnismäßige Größe skaliert (d.h. indem explizit sowohl Breite als auch Höhe angegeben werden, die nicht diesem Verhältnis entsprechen).

Dies ist sehr ähnlich dem Festlegen einer spezifischen Breite und Höhe; denn sobald Sie eine Dimension und ein Verhältnis haben, ist die andere Dimension impliziert.

```html
<svg height="100" viewBox="0 0 3 4" preserveAspectRatio="none">
  <title>Vertical gradient, with a fixed height and intrinsic ratio</title>
  <defs>
    <linearGradient id="g" x1="0%" x2="0%" y1="0%" y2="100%">
      <stop stop-color="teal" offset="0" />
      <stop stop-color="orange" offset="1" />
    </linearGradient>
  </defs>
  <rect fill="url(#g)" width="100%" height="100%" />
</svg>
```

{{ EmbedLiveSample('One specified dimension with intrinsic ratio', 200, 180) }}

### Keine Breite oder Höhe mit intrinsischem Verhältnis

Dieses Bild gibt weder eine Breite noch eine Höhe an; stattdessen gibt es ein intrinsisches Verhältnis von 1:1 an. Es ist immer quadratisch und kann in jeder Größe verwendet werden, wie z. B. 32x32, 128x128 oder 512x512.

```html
<svg viewBox="0 0 1 1" preserveAspectRatio="none">
  <title>Intrinsic ratio</title>
  <defs>
    <linearGradient id="g" x1="0%" x2="100%" y1="0%" y2="0%">
      <stop stop-color="navy" offset="0" />
      <stop stop-color="maroon" offset="1" />
    </linearGradient>
  </defs>
  <rect fill="url(#g)" width="100%" height="100%" />
</svg>
```

{{ EmbedLiveSample('No width or height with intrinsic ratio', 200, 180) }}

## Skalierungsbeispiele

Sehen wir uns nun einige Beispiele an, was passiert, wenn wir diese Bilder unterschiedlich skalieren. In jedem der folgenden Beispiele sind die umschließenden {{htmlelement("div")}}-Elemente 300 Pixel breit und 200 Pixel hoch, mit einem 2 Pixel breiten Rahmen. Um sicherzustellen, dass wir das SVG-Hintergrundbild für diese Demonstrationen nur einmal anzeigen, setzen wir {{ cssxref("background-repeat") }} auf `no-repeat`.

```css
div {
  width: 300px;
  height: 200px;
  background-repeat: no-repeat;
  border: 2px solid black;
}
```

### Festlegen fester Längen für beide Dimensionen

Wenn Sie {{ cssxref("background-size") }} verwenden, um feste Längen für beide Dimensionen anzugeben, werden diese Längen immer verwendet, gemäß Regel 1 oben. Mit anderen Worten, das Bild wird immer auf die von Ihnen angegebenen Dimensionen gestreckt, unabhängig davon, ob das Quelldatenbild seine Dimensionen und/oder das Seitenverhältnis angegeben hat.

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
  background-image: url(no-dimensions-or-ratio.svg);
  background-size: 125px 175px;
}
```

{{ EmbedLiveSample('scaling1', 200, 230) }}

#### Eine festgelegte Dimension, kein intrinsisches Verhältnis

In diesem Beispiel hat das Bild eine Dimension angegeben, und kein intrinsisches Verhältnis gesetzt:

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
  background-image: url(100px-wide-no-height-or-ratio.svg);
  background-size: 250px 150px;
}
```

{{ EmbedLiveSample('scaling2', 200, 230) }}

#### Eine festgelegte Dimension mit intrinsischem Verhältnis

```html hidden live-sample___scaling3
<div></div>
```

In diesem Beispiel hat das Bild eine Dimension explizit festgelegt, zusammen mit einem intrinsischen Verhältnis, was bedeutet, dass beide Dimensionen effektiv definiert sind. Das Festlegen von absoluten Höhe und Breite für `background-size` überschreibt die im SVG festgelegten Dimensionen:

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
  background-image: url(100px-height-3x4-ratio.svg);
  background-size: 275px 125px;
}
```

{{ EmbedLiveSample('scaling3', 200, 230) }}

#### Keine festgelegte Breite oder Höhe mit intrinsischem Verhältnis

In diesem Beispiel hat das Bild ein intrinsisches Verhältnis, aber keine festgelegten Dimensionen:

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
  background-image: url(no-dimensions-1x1-ratio.svg);
  background-size: 250px 100px;
}
```

{{ EmbedLiveSample('scaling4', 200, 230) }}

### Verwenden von contain oder cover

Das Festlegen von `cover` für {{ cssxref("background-size") }} macht das Bild so klein wie möglich, während es den gesamten Hintergrundbereich abdeckt. `contain` hingegen macht das Bild so groß wie möglich, ohne dass es vom Hintergrundbereich abgeschnitten wird.

Für ein Bild mit einem intrinsischen Verhältnis passt genau eine Größe, die die `cover`/fit Kriterien alleine erfüllt. Wenn jedoch kein intrinsisches Verhältnis angegeben ist, reicht `cover`/fit nicht aus, so dass die großen/kleinen Einschränkungen die resultierende Größe bestimmen.

#### Keine Dimensionen oder intrinsisches Verhältnis

In diesem Beispiel hat das Bild keine Dimensionen oder ein intrinsisches Verhältnis gesetzt. Wenn ein Bild weder Dimensionen noch ein intrinsisches Verhältnis angibt, gelten weder Regel 2 noch Regel 3, sodass Regel 4 greift: Das Hintergrundbild wird über den gesamten Hintergrundbereich gerendert. Dies erfüllt die größte-oder-kleinste Einschränkung.

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
  background-image: url(no-dimensions-or-ratio.svg);
  background-size: contain;
}
```

{{ EmbedLiveSample('cc1', 200, 230) }}

#### Eine festgelegte Dimension, kein intrinsisches Verhältnis

In diesem Beispiel, bei dem das Bild eine Dimension angegeben hat, aber kein intrinsisches Verhältnis, greift Regel 4, und das Bild wird skaliert, um den gesamten Hintergrundbereich abzudecken.

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
  background-image: url(100px-wide-no-height-or-ratio.svg);
  background-size: contain;
}
```

{{ EmbedLiveSample('cc2', 200, 230) }}

#### Eine festgelegte Dimension mit intrinsischem Verhältnis

In diesen Beispielen hat das Bild eine Dimension explizit festgelegt, zusammen mit einem intrinsischen Verhältnis.

Die Dinge ändern sich, wenn Sie ein intrinsisches Verhältnis angeben. In diesem Fall ist Regel 1 nicht relevant, also wird Regel 2 angewendet: Wir versuchen, ein intrinsisches Verhältnis zu bewahren (während wir `contain` oder `cover` respektieren). Zum Beispiel bedeutet das Bewahren eines 3:4-intrinsischen Seitenverhältnisses für einen 300x200-Kasten mit `contain`, dass ein 150x200-Hintergrund gezeichnet wird.

##### contain Fall

```html hidden live-sample___cc3
<div></div>
```

Angesichts dieses CSS:

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
  background-image: url(100px-height-3x4-ratio.svg);
  background-size: contain;
}
```

{{ EmbedLiveSample('cc3', 200, 230) }}

Beachten Sie, wie das gesamte Bild gerendert wird und so gut wie möglich in den Kasten passt, ohne irgendeinen Teil davon abzuschneiden.

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
  background-image: url(100px-height-3x4-ratio.svg);
  background-size: cover;
}
```

{{ EmbedLiveSample('cc5', 200, 230) }}

Hier wird das 3:4-Verhältnis bewahrt, während das Bild dennoch gestreckt wird, um den gesamten Kasten zu füllen. Das führt dazu, dass der untere Teil des Bildes abgeschnitten wird.

#### Keine Dimensionen mit intrinsischem Verhältnis

Diese Beispiele verwenden das Bild mit einem intrinsischen Verhältnis, aber ohne festgelegte Dimensionen. Wenn Sie ein Bild ohne intrinsische Dimensionen, aber mit einem intrinsischen Verhältnis verwenden, arbeiten die Dinge ähnlich.

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
  background-image: url(no-dimensions-1x1-ratio.svg);
  background-size: contain;
}
```

{{ EmbedLiveSample('cc6', 200, 230) }}

Beachten Sie, dass das Bild auf die kleinste Dimension skaliert wird, während das 1:1-Seitenverhältnis beibehalten wird.

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
  background-image: url(no-dimensions-1x1-ratio.svg);
  background-size: cover;
}
```

{{ EmbedLiveSample('cc7', 200, 230) }}

Hier wird das Bild so skaliert, dass es die größte Dimension ausfüllt. Das 1:1-Seitenverhältnis wurde beibehalten, obwohl es mit diesem Quelldatenbild schwierig sein kann, dies zu erkennen.

### Automatische Größenbestimmung mit "auto" für beide Dimensionen

Wenn {{ cssxref("background-size") }} auf `auto` oder `auto auto` gesetzt ist, besagt Regel 2, dass das Rendering jedes vorgegebene intrinsische Verhältnis, das bereitgestellt wird, bewahren muss.

#### Keine Dimensionen oder intrinsisches Verhältnis

Wenn Sie Hintergrundbilder ohne intrinsisches Verhältnis oder festgelegte Dimensionen automatisch skalieren, gilt Regel 4, und das Bild wird so gerendert, dass es den Hintergrundbereich ausfüllt.

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
  background-image: url(no-dimensions-or-ratio.svg);
  background-size: auto auto;
}
```

{{ EmbedLiveSample('both-auto1', 200, 230) }}

#### Eine Dimension und kein intrinsisches Verhältnis

Wenn kein intrinsisches Verhältnis angegeben ist, aber mindestens eine Dimension festgelegt ist, greift Regel 3, und wir rendern das Bild unter Beachtung dieser Dimensionen.

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
  background-image: url(100px-wide-no-height-or-ratio.svg);
  background-size: auto auto;
}
```

{{ EmbedLiveSample('both-auto2', 200, 230) }}

Beachten Sie hier, dass die Breite, die im Quell-SVG auf 100 Pixel angegeben ist, beachtet wird, während die Höhe den Hintergrundbereich füllt, da sie nicht (entweder explizit oder durch ein intrinsisches Verhältnis) angegeben ist.

#### Eine Dimension und ein intrinsisches Verhältnis

Wenn wir ein intrinsisches Verhältnis mit einer festen Dimension haben, fixiert das beide Dimensionen. Wie zuvor erwähnt, ist das Wissen über eine Dimension und ein Verhältnis dasselbe, wie wenn beide Dimensionen explizit angegeben werden.

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
  background-image: url(100px-height-3x4-ratio.svg);
  background-size: auto auto;
}
```

{{ EmbedLiveSample('both-auto3', 200, 230) }}

Da dieses Bild eine explizite Höhe von `100px` hat. Mit dem 3:4-Verhältnis, das im SVG festgelegt ist, im Fall von `auto`, ist die Breite des Bildes 75 Pixel.

#### Keine festen Dimensionen mit intrinsischem Verhältnis

Wenn ein intrinsisches Verhältnis angegeben, aber keine Dimensionen festgelegt sind, wird Regel 4 angewendet – außer dass auch Regel 2 gilt. Das Bild wird daher genauso gerendert wie im Fall von `contain`.

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
  background-image: url(no-dimensions-1x1-ratio.svg);
  background-size: auto auto;
}
```

{{ EmbedLiveSample('both-auto4', 200, 230) }}

### Verwendung von "auto" und einer bestimmten Länge

Unter Berücksichtigung von Regel 1 werden festgelegte Dimensionen immer verwendet, daher müssen wir unsere Regeln nur verwenden, um die zweite Dimension zu bestimmen.

#### Keine Dimensionen oder intrinsisches Verhältnis

Wenn das Bild keine Dimensionen oder ein intrinsisches Verhältnis aufweist, gilt Regel 4, und wir verwenden die Dimension des Hintergrundbereichs, um den Wert für die `auto`-Dimension zu bestimmen.

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
  background-image: url(no-dimensions-or-ratio.svg);
  background-size: auto 140px;
}
```

{{ EmbedLiveSample('auto0', 200, 230) }}

Hier wird die Breite gemäß Regel 4 unter Verwendung der Breite des Hintergrundbereichs bestimmt, während die Höhe die `140px` ist, die im CSS angegeben sind.

#### Eine festgelegte Dimension ohne intrinsisches Verhältnis

Wenn das Bild eine festgelegte Dimension hat, aber kein intrinsisches Verhältnis, wird die festgelegte Dimension gemäß Regel 3 verwendet, wenn diese Dimension im CSS auf `auto` gesetzt ist.

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
  background-image: url(100px-wide-no-height-or-ratio.svg);
  background-size: 200px auto;
}
```

{{ EmbedLiveSample('auto1', 200, 230) }}

Hier überschreiben die im CSS angegebenen `200px` die im SVG angegebene Breite von `100px`, gemäß Regel 1. Da es kein intrinsisches Verhältnis oder keine angegebene Höhe gibt, wählt `auto` die Höhe des Hintergrundbereichs als Höhe für das gerenderte Bild.

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
  background-image: url(100px-wide-no-height-or-ratio.svg);
  background-size: auto 125px;
}
```

{{ EmbedLiveSample('auto2', 200, 230) }}

In diesem Fall ist die Breite im CSS als `auto` festgelegt, sodass die im SVG angegebene Breite von `100px` gemäß Regel 3 ausgewählt wird. Die Höhe ist im CSS auf `125px` festgelegt, sodass diese gemäß Regel 1 ausgewählt wird.

#### Eine festgelegte Dimension mit intrinsischem Verhältnis

Wenn eine Dimension angegeben ist, wendet Regel 1 diese Dimension aus dem SVG auf den gerenderten Hintergrund an, es sei denn, sie wird speziell vom CSS überschrieben. Wenn ein intrinsisches Verhältnis ebenfalls festgelegt ist, wird dies verwendet, um die andere Dimension zu bestimmen.

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
  background-image: url(100px-height-3x4-ratio.svg);
  background-size: 150px auto;
}
```

{{ EmbedLiveSample('auto3', 200, 230) }}

In diesem Fall verwenden wir die im CSS auf `150px` festgelegte Breite des Bildes, sodass Regel 1 angewendet wird. Das intrinsische 3:4-Seitenverhältnis bestimmt dann die Höhe für den `auto` Fall.

#### Keine festgelegten Dimensionen mit intrinsischem Verhältnis

Wenn keine Dimensionen im SVG angegeben sind, wird die im CSS angegebene Dimension angewendet, und dann wird das intrinsische Verhältnis verwendet, um die andere Dimension auszuwählen, gemäß Regel 2.

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
  background-image: url(no-dimensions-1x1-ratio.svg);
  background-size: 150px auto;
}
```

{{ EmbedLiveSample('auto4', 200, 230) }}

Die Breite ist im CSS auf `150px` festgelegt. Der `auto`-Wert für die Höhe wird anhand dieser Breite und des 1:1-Seitenverhältnisses zu ebenfalls `150px` berechnet.

## Siehe auch

- {{cssxref("background-size")}}
- [CSS-Hintergründe und Rahmen](/de/docs/Web/CSS/CSS_backgrounds_and_borders) Modul
