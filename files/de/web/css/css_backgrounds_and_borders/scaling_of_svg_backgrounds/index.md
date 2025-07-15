---
title: Skalierung von SVG-Hintergründen
slug: Web/CSS/CSS_backgrounds_and_borders/Scaling_of_SVG_backgrounds
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Angesichts der Flexibilität von SVG-Bildern gibt es viel zu beachten, wenn diese als Hintergrundbilder mit der {{ cssxref("background-image") }}-Eigenschaft verwendet werden, und noch mehr, wenn sie mit der {{ cssxref("background-size") }}-Eigenschaft skaliert werden. Dieser Artikel beschreibt, wie die Skalierung von SVG-Bildern gehandhabt wird, wenn diese Eigenschaften verwendet werden.

## Der Hintergrund-Skalierungsalgorithmus

Der Algorithmus zur Bestimmung der Hintergrundgröße eines Hintergrundbildes lässt sich größtenteils durch diese vier Regeln zusammenfassen. Es gibt einige Randfälle, die nicht von diesen Regeln abgedeckt werden, aber sie decken die Mehrheit der Fälle ab.

1. Wenn {{ cssxref("background-size") }} eine feste Dimension angibt (d.h. Prozentsätze und relative Einheiten sind durch ihren Kontext festgelegt), gewinnt diese Dimension.
2. Wenn das Bild ein intrinsisches Verhältnis hat (d.h. sein Breite:Höhe-Verhältnis konstant ist, z.B. 16:9, 4:3, 2.39:1, 1:1 usw.), wird das gerenderte Bild dieses Verhältnis beibehalten.
3. Wenn das Bild eine Größe angibt und diese nicht durch `constrain` oder `cover` modifiziert wird, gewinnt die angegebene Größe.
4. Wenn keiner der oben genannten Fälle zutrifft, wird das Bild in der gleichen Größe wie der Hintergrundbereich gerendert.

Es ist erwähnenswert, dass der Hintergrund-Skalierungsalgorithmus nur die Dimensionen und Proportionen des Bildes interessiert oder deren Fehlen. Ein SVG-Bild mit festen Dimensionen wird wie ein Rasterbild derselben Größe behandelt.

> [!NOTE]
> Wenn Sie versuchen, Ihr SVG mit CSS auf ein anderes {{Glossary("aspect_ratio", "Seitenverhältnis")}} zu strecken — zum Beispiel, um es über den gesamten Seitenhintergrund zu spannen — stellen Sie sicher, dass Ihr SVG `preserveAspectRatio="none"` enthält. Erfahren Sie mehr über {{svgattr("preserveAspectRatio")}}.

## Beispielquellenbilder

Bevor wir uns die Ergebnisse der Nutzung verschiedener Arten von SVG-Quellenbildern ansehen und wie sie aussehen, wenn sie mit {{ cssxref("background-size") }} verwendet werden, ist es hilfreich, ein paar Beispielquellenbilder zu betrachten, die unterschiedliche Dimensionen und Größeneinstellungen haben, die wir später als unsere `background-image`-Werte in unseren Beispielen verwenden werden. Der Browser rendert {{SVGelement("svg")}}-Bilder standardmäßig mit einer Breite von `300px` und einer Höhe von `150px`.

### Ohne Dimensionen und ohne Proportionen

Dieses SVG-Verlaufsbild ist sowohl dimensionenlos als auch ohne Proportionen. Es ist ihm egal, welche Größe es hat, noch bleibt es bei einem bestimmten Seitenverhältnis. Dies würde ein gutes Desktop-Verlaufs-Hintergrundbild ergeben, das unabhängig von Ihrer Bildschirmgröße und Ihrem Seitenverhältnis funktioniert.

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

### Eine angegebene Dimension und ohne Proportionen

Dieses Bild gibt eine Breite von 100 Pixeln an, aber keine Höhe oder ein intrinsisches Verhältnis. Dies ist im Grunde ein dünner Tapetenstreifen, der über die gesamte Höhe eines Blocks gestreckt werden könnte.

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

### Eine angegebene Dimension mit intrinsischem Verhältnis

Dieses Bild gibt eine Höhe von 100 Pixeln an, aber keine Breite. Außerdem gibt es ein intrinsisches Seitenverhältnis von 3:4 an. Dies stellt sicher, dass das Breite:Höhe-Verhältnis immer 3:4 bleibt, es sei denn, es wird absichtlich auf eine unverhältnismäßige Größe skaliert (d.h. durch explizite Angabe beider Dimensionen, die nicht in diesem Verhältnis stehen).

Dies ist sehr ähnlich wie die Angabe einer spezifischen Breite und Höhe; sobald Sie eine Dimension und ein Verhältnis haben, ist die andere Dimension impliziert.

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

Dieses Bild gibt weder eine Breite noch eine Höhe an; stattdessen hat es ein intrinsisches Verhältnis von 1:1. Es ist immer quadratisch und kann in jeder Größe verwendet werden, z.B. 32x32, 128x128 oder 512x512.

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

Lassen Sie uns nun einige Beispiele ansehen, was passiert, wenn wir unterschiedliche Skalierungen auf diese Bilder anwenden. In jedem der folgenden Beispiele sind die umgebenden {{htmlelement("div")}}-Elemente 300 Pixel breit und 200 Pixel hoch, mit einem 2 Pixel breiten Rahmen. Um sicherzustellen, dass wir das SVG-Hintergrundbild für diese Demonstrationen nur einmal anzeigen, setzen wir {{ cssxref("background-repeat") }} auf `no-repeat`.

```css
div {
  width: 300px;
  height: 200px;
  background-repeat: no-repeat;
  border: 2px solid black;
}
```

### Festgelegte Längen für beide Dimensionen angeben

Wenn Sie {{ cssxref("background-size") }} verwenden, um festgelegte Längen für beide Dimensionen anzugeben, werden diese Längen immer verwendet, gemäß Regel 1 oben. Mit anderen Worten, das Bild wird immer auf die von Ihnen angegebenen Dimensionen gestreckt, unabhängig davon, ob das Quellbild seine Dimensionen und/oder sein Seitenverhältnis angegeben hat oder nicht.

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
  background-image: url(100px-wide-no-height-or-ratio.svg);
  background-size: 250px 150px;
}
```

{{ EmbedLiveSample('scaling2', 200, 230) }}

#### Eine angegebene Dimension mit intrinsischem Verhältnis

```html hidden live-sample___scaling3
<div></div>
```

In diesem Beispiel hat das Bild eine Dimension explizit festgelegt, zusammen mit einem intrinsischen Verhältnis, was bedeutet, dass beide Dimensionen effektiv definiert sind. Das Festlegen einer absoluten Höhe und Breite für `background-size` überschreibt die in der SVG festgelegten Dimensionen:

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

#### Keine angegebene Breite oder Höhe mit intrinsischem Verhältnis

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

Die Angabe von `cover` für {{ cssxref("background-size") }} macht das Bild so klein wie möglich, während es immer noch den gesamten Hintergrundbereich abdeckt. `Contain` hingegen macht das Bild so groß wie möglich, ohne dass es vom Hintergrundbereich abgeschnitten wird.

Für ein Bild mit einem intrinsischen Verhältnis passt genau eine Größe zu den `cover`-/anpassungs-Kriterien allein. Aber wenn kein intrinsisches Verhältnis angegeben ist, reicht `cover`/anpassung nicht aus, weshalb die großen/kleinen Einschränkungen die resultierende Größe wählen.

#### Keine Dimensionen oder intrinsisches Verhältnis

In diesem Beispiel hat das Bild keine Dimensionen oder ein intrinsisches Verhältnis. Wenn ein Bild weder Dimensionen noch ein intrinsisches Verhältnis angibt, gelten weder Regel 2 noch Regel 3, also übernimmt Regel 4: das Hintergrundbild wird so gerendert, dass es den gesamten Hintergrundbereich abdeckt. Dies erfüllt die größte-oder-kleinste-Einschränkung.

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

#### Eine angegebene Dimension, kein intrinsisches Verhältnis

In diesem Beispiel, in dem das Bild eine angegebene Dimension hat, aber kein intrinsisches Verhältnis, gilt Regel 4, und das Bild wird skaliert, um den gesamten Hintergrundbereich abzudecken.

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

#### Eine angegebene Dimension mit intrinsischem Verhältnis

In diesen Beispielen hat das Bild eine explizite Dimension zusammen mit einem intrinsischen Verhältnis.

Die Dinge ändern sich, wenn Sie ein intrinsisches Verhältnis angeben. In diesem Fall ist Regel 1 nicht relevant, sodass Regel 2 angewendet wird: wir versuchen, jedes intrinsische Verhältnis (unter Berücksichtigung von `contain` oder `cover`) beizubehalten. Zum Beispiel bedeutet das Beibehalten eines 3:4 intrinsischen Seitenverhältnisses für ein 300x200-Feld mit `contain`, dass ein 150x200 Hintergrund gezeichnet wird.

##### contains-Fall

```html hidden live-sample___cc3
<div></div>
```

Unter Verwendung dieses CSS:

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

Beachten Sie, wie das gesamte Bild gerendert wird und bestmöglich in das Feld passt, ohne dass ein Teil davon abgeschnitten wird.

##### cover-Fall

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

Hier wird das 3:4-Verhältnis beibehalten, während das Bild immer noch gedehnt wird, um das gesamte Feld auszufüllen. Das führt dazu, dass der untere Teil des Bildes abgeschnitten wird.

#### Keine Dimensionen mit intrinsischem Verhältnis

Diese Beispiele verwenden das Bild mit einem angegebenen intrinsischen Verhältnis, jedoch ohne definierte Dimensionen. Wenn ein Bild ohne intrinsische Dimensionen aber mit intrinsischem Verhältnis verwendet wird, funktioniert es ähnlich.

##### contain-Fall

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

Beachten Sie, dass das Bild so skaliert wird, dass es die kleinste Dimension unter Beibehaltung des 1:1-Seitenverhältnisses passt.

##### cover-Fall

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

Hier wird das Bild so skaliert, dass es die größte Dimension füllt. Das 1:1-Seitenverhältnis wurde beibehalten, obwohl dies bei diesem Quellbild schwierig zu erkennen sein kann.

### Automatische Größenanpassung mit "auto" für beide Dimensionen

Wenn {{ cssxref("background-size") }} auf `auto` oder `auto auto` gesetzt ist, besagt Regel 2, dass beim Rendern jedes intrinsische Verhältnis, das bereitgestellt wird, beibehalten werden muss.

#### Keine Dimensionen oder intrinsisches Verhältnis

Beim automatischen Skalieren von Hintergrundbildern ohne angegebenes intrinsisches Verhältnis oder Dimensionen, tritt Regel 4 in Kraft und das Bild wird gerendert, um den Hintergrundbereich auszufüllen.

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

Wenn kein intrinsisches Verhältnis angegeben ist, aber mindestens eine Dimension, tritt Regel 3 in Kraft und das Bild wird entsprechend diesen Dimensionen gerendert.

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

Beachten Sie hier, dass die Breite, die im Quell-SVG auf 100 Pixel festgelegt ist, berücksichtigt wird, während die Höhe den Hintergrundbereich füllt, da sie weder explizit noch durch ein intrinsisches Verhältnis angegeben ist.

#### Eine Dimension und ein intrinsisches Verhältnis

Wenn wir ein intrinsisches Verhältnis mit einer festen Dimension haben, fixiert dies beide Dimensionen. Wie bereits erwähnt, ist das Wissen um eine Dimension und ein Verhältnis das Gleiche wie die explizite Angabe beider Dimensionen.

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

Da dieses Bild eine explizite Höhe von `100px` hat, ergibt das mit dem 3:4-Verhältnis im SVG bei `auto` eine Breite von 75 Pixeln.

#### Keine festen Dimensionen mit intrinsischem Verhältnis

Wenn ein intrinsisches Verhältnis angegeben ist, aber keine Dimensionen, wird Regel 4 angewendet — außer dass Regel 2 auch gilt. Das Bild wird daher genauso gerendert wie im `contain`-Fall.

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

### Verwenden von "auto" und einer spezifischen Länge

Gemäß Regel 1 werden spezifizierte Dimensionen immer verwendet. Daher müssen wir unsere Regeln nur anwenden, um die zweite Dimension zu bestimmen.

#### Keine Dimensionen oder intrinsisches Verhältnis

Wenn das Bild keine Dimensionen oder ein intrinsisches Verhältnis hat, gilt Regel 4, und wir verwenden die Dimension des Hintergrundbereichs zur Bestimmung des Werts für die `auto`-Dimension.

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

Hier wird die Breite gemäß Regel 4 unter Verwendung der Breite des Hintergrundbereichs bestimmt, während die Höhe die im CSS angegebene `140px` beträgt.

#### Eine angegebene Dimension ohne intrinsisches Verhältnis

Wenn das Bild eine angegebene Dimension hat, aber kein intrinsisches Verhältnis, wird diese angegebene Dimension gemäß Regel 3 verwendet, wenn diese Dimension im CSS auf `auto` gesetzt ist.

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

Hier überschreibt das im CSS angegebene `200px` die im SVG angegebene Breite von `100px`, gemäß Regel 1. Da kein intrinsisches Verhältnis oder Höhe verfügbar ist, wählt `auto` die Höhe des Hintergrundbereichs für das gerenderte Bild.

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

In diesem Fall ist die Breite im CSS auf `auto` gesetzt, daher wird die im SVG angegebene Breite von `100px` gemäß Regel 3 ausgewählt. Die Höhe ist im CSS auf `125px` festgelegt, daher wird diese Höhe gemäß Regel 1 ausgewählt.

#### Eine angegebene Dimension mit intrinsischem Verhältnis

Wenn eine Dimension angegeben ist, wird gemäß Regel 1 diese Dimension aus dem SVG auf den gerenderten Hintergrund angewendet, es sei denn, sie wird ausdrücklich vom CSS überschrieben. Wenn zusätzlich ein intrinsisches Verhältnis angegeben ist, wird dieses zur Bestimmung der anderen Dimension verwendet.

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

In diesem Fall verwenden wir die im CSS auf `150px` festgelegte Breite des Bildes, daher gilt Regel 1. Das intrinsische 3:4-Seitenverhältnis bestimmt dann die Höhe für den `auto`-Fall.

#### Keine angegebenen Dimensionen mit intrinsischem Verhältnis

Wenn keine Dimensionen im SVG angegeben sind, wird die im CSS angegebene Dimension angewendet, dann wird das intrinsische Verhältnis verwendet, um die andere Dimension auszuwählen, gemäß Regel 2.

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

Die Breite ist im CSS auf `150px` festgelegt. Der `auto`-Wert für die Höhe wird unter Verwendung dieser Breite und des 1:1-Seitenverhältnisses zu ebenfalls `150px` berechnet.

## Siehe auch

- {{cssxref("background-size")}}
- [CSS-Hintergründe und Rahmen](/de/docs/Web/CSS/CSS_backgrounds_and_borders) Modul
