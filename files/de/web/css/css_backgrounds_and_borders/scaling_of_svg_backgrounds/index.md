---
title: Skalierung von SVG-Hintergründen
slug: Web/CSS/CSS_backgrounds_and_borders/Scaling_of_SVG_backgrounds
l10n:
  sourceCommit: f6497ec3b1a28d7b0a99f5d13e81027204293fa3
---

{{CSSRef}}

Aufgrund der Flexibilität von SVG-Bildern gibt es einiges zu beachten, wenn man sie als Hintergrundbilder mit der {{ cssxref("background-image") }} Eigenschaft verwendet, und noch mehr, wenn man sie mit der {{ cssxref("background-size") }} Eigenschaft skaliert. Dieser Artikel beschreibt, wie die Skalierung von SVG-Bildern beim Einsatz dieser Eigenschaften gehandhabt wird.

## Der Hintergrund-Skalierungsalgorithmus

Der Algorithmus zur Bestimmung der Hintergrundgröße eines Hintergrundbildes lässt sich größtenteils durch diese vier Regeln zusammenfassen. Es gibt einige Ausnahmefälle, die von diesen Regeln nicht abgedeckt werden, aber sie decken die Mehrheit der Fälle ab.

1. Wenn {{ cssxref("background-size") }} eine feste Dimension angibt (d.h. Prozentsätze und relative Einheiten werden durch ihren Kontext festgelegt), gewinnt diese Dimension.
2. Wenn das Bild ein intrinsisches Verhältnis hat (d.h. sein Breite:Höhe-Verhältnis konstant ist, wie z.B. 16:9, 4:3, 2.39:1, 1:1 und so weiter), wird die gerenderte Größe dieses Verhältnis beibehalten.
3. Wenn das Bild eine Größe angibt und die Größe nicht durch `constrain` oder `cover` modifiziert wird, gewinnt die angegebene Größe.
4. Wenn keiner der oben genannten Fälle zutrifft, wird das Bild in derselben Größe wie der Hintergrundbereich gerendert.

Es ist wichtig zu beachten, dass der Hintergrund-Skalierungsalgorithmus nur die Dimensionen und Proportionen eines Bildes berücksichtigt oder deren Fehlen. Ein SVG-Bild mit festen Dimensionen wird genauso behandelt wie ein Rasterbild derselben Größe.

> [!NOTE]
> Wenn Sie versuchen, Ihr SVG mit CSS auf ein anderes {{Glossary("aspect_ratio", "Seitenverhältnis")}} zu strecken—zum Beispiel, um es über den Seitenhintergrund zu erstrecken—stellen Sie sicher, dass Ihr SVG `preserveAspectRatio="none"` enthält. Erfahren Sie mehr über {{svgattr("preserveAspectRatio")}}.

## Beispiele für Quellbilder

Bevor Sie sich ansehen, wie verschiedene Arten von SVG-Quellbildern mit {{ cssxref("background-size") }} aussehen, ist es hilfreich, sich einige Beispiel-Quellbilder mit unterschiedlichen Dimensionen und Größeneinstellungen anzusehen, die wir später als unsere `background-image` Werte in unseren Beispielen verwenden werden. Der Browser rendert {{SVGelement("svg")}}-Bilder standardmäßig `300px` breit und `150px` hoch.

### Ohne Dimensionen und Proportionen

Dieses SVG-Gradientenbild ist sowohl dimensionslos als auch proportionslos. Es ist egal, in welcher Größe es vorliegt, und es muss kein bestimmtes Seitenverhältnis beibehalten werden. Dies wäre ein guter Gradient für einen Desktop-Hintergrund, der unabhängig von der Bildschirmgröße und dem Verhältnis funktionieren würde.

```html
<svg>
  <title>Corner-to-corner gradient</title>
  <defs>
    <linearGradient id="g" x1="0%" x2="100%" y1="0%" y2="100%">
      <stop style="stop-color:pink" offset="0" />
      <stop style="stop-color:goldenrod" offset="1" />
    </linearGradient>
  </defs>
  <rect style="fill: url(#g)" width="100%" height="100%" />
</svg>
```

{{ EmbedLiveSample('Dimensionless_and_proportionless', 200, 180) }}

### Eine angegebene Dimension und proportionslos

Dieses Bild gibt eine Breite von 100 Pixeln an, aber keine Höhe oder ein intrinsisches Verhältnis. Es ist sozusagen ein dünner Tapetenstreifen, der über die gesamte Höhe eines Blocks gestreckt werden könnte.

```html
<svg width="100">
  <title>Vertical gradient, with a fixed width</title>
  <defs>
    <linearGradient id="g" x1="0%" x2="0%" y1="0%" y2="100%">
      <stop style="stop-color: purple;" offset="0" />
      <stop style="stop-color: lime;" offset="1" />
    </linearGradient>
  </defs>
  <rect style="fill: url(#g);" width="100%" height="100%" />
</svg>
```

{{ EmbedLiveSample('One specified dimension and proportionless', 200, 180) }}

### Eine angegebene Dimension mit intrinsischem Verhältnis

Dieses Bild gibt eine Höhe von 100 Pixeln an, aber keine Breite. Es gibt auch ein intrinsisches Seitenverhältnis von 3:4 an. Dies stellt sicher, dass das Breite:Höhe-Verhältnis immer 3:4 ist, es sei denn, es wird absichtlich auf eine unverhältnismäßige Größe skaliert (d.h. indem explizit sowohl Breite als auch Höhe angegeben werden, die nicht diesem Verhältnis entsprechen).

Dies ist sehr ähnlich wie die Angabe einer bestimmten Breite und Höhe, da Sie, sobald Sie eine Dimension und ein Verhältnis haben, die andere Dimension impliziert ist.

```html
<svg height="100" viewBox="0 0 3 4" preserveAspectRatio="none">
  <title>Vertical gradient, with a fixed height and intrinsic ratio</title>
  <defs>
    <linearGradient id="g" x1="0%" x2="0%" y1="0%" y2="100%">
      <stop style="stop-color: teal;" offset="0" />
      <stop style="stop-color: orange;" offset="1" />
    </linearGradient>
  </defs>
  <rect style="fill: url(#g);" width="100%" height="100%" />
</svg>
```

{{ EmbedLiveSample('One specified dimension with intrinsic ratio', 200, 180) }}

### Keine Breite oder Höhe mit intrinsischem Verhältnis

Dieses Bild gibt weder eine Breite noch eine Höhe an; stattdessen gibt es ein intrinsisches Verhältnis von 1:1 an. Es ist immer quadratisch und kann in jeder Größe verwendet werden, z.B. 32x32, 128x128 oder 512x512.

```html
<svg viewBox="0 0 1 1" preserveAspectRatio="none">
  <title>Intrinsic ratio</title>
  <defs>
    <linearGradient id="g" x1="0%" x2="100%" y1="0%" y2="0%">
      <stop style="stop-color: navy;" offset="0" />
      <stop style="stop-color: maroon;" offset="1" />
    </linearGradient>
  </defs>
  <rect style="fill: url(#g);" width="100%" height="100%" />
</svg>
```

{{ EmbedLiveSample('No width or height with intrinsic ratio', 200, 180) }}

## Skalierungsbeispiele

Nun lassen Sie uns einige Beispiele sehen, was passiert, wenn wir unterschiedliche Skalierungen auf diese Bilder anwenden. In jedem der unten stehenden Beispiele sind die umgebenden {{htmlelement("div")}} Elemente 300 Pixel breit und 200 Pixel hoch, mit einem 2 Pixel breiten Rand. Um sicherzustellen, dass wir das SVG-Hintergrundbild nur einmal für diese Demonstrationen darstellen, setzen wir {{ cssxref("background-repeat") }} auf `no-repeat`.

```css
div {
  width: 300px;
  height: 200px;
  background-repeat: no-repeat;
  border: 2px solid black;
}
```

### Festgelegte Längen für beide Dimensionen angeben

Wenn Sie {{ cssxref("background-size") }} verwenden, um feste Längen für beide Dimensionen anzugeben, werden diese Längen immer verwendet, gemäß Regel 1 oben. Mit anderen Worten, das Bild wird immer auf die von Ihnen angegebenen Abmessungen gestreckt, unabhängig davon, ob das Quellbild seine Dimensionen und/oder sein Seitenverhältnis angegeben hat oder nicht.

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

In diesem Beispiel hat das Bild eine Dimension angegeben, aber kein intrinsisches Verhältnis:

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

In diesem Beispiel hat das Bild eine Dimension ausdrücklich festgelegt, zusammen mit einem intrinsischen Verhältnis, was bedeutet, dass beide Dimensionen effektiv definiert sind. Eine absolute Höhe und Breite für `background-size` festzulegen, überschreibt die in der SVG festgelegten Dimensionen:

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

In diesem Beispiel hat das Bild ein intrinsisches Verhältnis, aber keine Dimensionen festgelegt:

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

Die Angabe von `cover` für {{ cssxref("background-size") }} macht das Bild so klein wie möglich, während es immer noch den gesamten Hintergrundbereich abdeckt. `contain` hingegen macht das Bild so groß wie möglich, ohne vom Hintergrundbereich abgeschnitten zu werden.

Für ein Bild mit einem intrinsischen Verhältnis passt genau eine Größe für die `cover`/fit-Kriterien allein. Wenn jedoch kein intrinsisches Verhältnis angegeben ist, reichen `cover`/fit nicht aus, sodass die großen/kleinen Einschränkungen die resultierende Größe bestimmen.

#### Keine Dimensionen oder intrinsisches Verhältnis

In diesem Beispiel hat das Bild keine Dimensionen oder ein intrinsisches Verhältnis festgelegt. Wenn ein Bild keine Dimensionen oder ein intrinsisches Verhältnis angibt, gelten weder Regel 2 noch Regel 3, sodass Regel 4 greift: Das Hintergrundbild wird über den gesamten Hintergrundbereich gerendert. Dies erfüllt die größten-oder-kleinsten Einschränkungen.

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

In diesem Beispiel, bei dem das Bild eine Dimension hat, aber kein intrinsisches Verhältnis, gilt Regel 4 und das Bild wird angepasst, um den gesamten Hintergrundbereich zu bedecken.

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

In diesen Beispielen hat das Bild eine Dimension ausdrücklich festgelegt, zusammen mit einem intrinsischen Verhältnis.

Die Dinge ändern sich, wenn Sie ein intrinsisches Verhältnis angeben. In diesem Fall ist Regel 1 nicht relevant, also wird Regel 2 angewendet: Wir versuchen, jedes intrinsische Verhältnis zu bewahren (unter Beachtung von `contain` oder `cover`). Zum Beispiel bedeutet die Erhaltung eines 3:4-intrinsischen Seitenverhältnisses für eine 300x200-Box mit `contain`, ein 150x200-Hintergrund zu zeichnen.

##### Fall "contain"

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

Beachten Sie, wie das gesamte Bild gerendert wird und so gut wie möglich in die Box passt, ohne dass ein Teil davon abgeschnitten wird.

##### Fall "cover"

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

Hier wird das 3:4-Verhältnis beibehalten, während das Bild trotzdem über die gesamte Box gestreckt wird. Dadurch wird der untere Teil des Bildes abgeschnitten.

#### Keine Dimensionen mit intrinsischem Verhältnis

Diese Beispiele verwenden das Bild mit einem intrinsischen Verhältnis, aber ohne definierte Dimensionen. Wenn Sie ein Bild mit keinen intrinsischen Dimensionen, aber einem intrinsischen Verhältnis verwenden, funktionieren die Dinge ähnlich.

##### Fall "contain"

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

Beachten Sie, dass das Bild so dimensioniert ist, dass die kleinste Dimension passt, während das 1:1-Verhältnis beibehalten wird.

##### Fall "cover"

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

Hier wird das Bild so dimensioniert, dass es die größte Dimension füllt. Das 1:1-Verhältnis wurde beibehalten, obwohl dies bei diesem Quellbild schwer zu erkennen ist.

### Automatische Größenanpassung mit "auto" für beide Dimensionen

Wenn {{ cssxref("background-size") }} auf `auto` oder `auto auto` gesetzt ist, besagt Regel 2, dass das Rendering jedes angegebene intrinsische Verhältnis bewahren muss.

#### Keine Dimensionen oder intrinsisches Verhältnis

Wenn Hintergrundbilder automatisch skaliert werden, ohne dass ein intrinsisches Verhältnis oder Dimensionen angegeben sind, tritt Regel 4 in Kraft und das Bild wird so gerendert, dass es den Hintergrundbereich ausfüllt.

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

Wenn kein intrinsisches Verhältnis angegeben ist, aber wenigstens eine Dimension, greift Regel 3 und wir rendern das Bild entsprechend diesen Dimensionen.

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

Beachten Sie hier, dass die Breite, die im Quell-SVG auf 100 Pixel festgelegt ist, beachtet wird, während die Höhe den Hintergrundbereich ausfüllt, da sie nicht angegeben ist (weder explizit noch durch ein intrinsisches Verhältnis).

#### Eine Dimension und ein intrinsisches Verhältnis

Wenn wir ein intrinsisches Verhältnis mit einer festen Dimension haben, werden beide Dimensionen fixiert. Wie zuvor erwähnt, bedeutet das Wissen um eine Dimension und ein Verhältnis dasselbe wie die explizite Angabe beider Dimensionen.

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

Da dieses Bild eine explizite Höhe von `100px` hat. Mit dem 3:4-Verhältnis, das im SVG festgelegt ist, beträgt die Breite des Bildes im Fall von `auto` 75 Pixel.

#### Keine festen Dimensionen mit intrinsischem Verhältnis

Wenn ein intrinsisches Verhältnis angegeben ist, aber keine Dimensionen, wird Regel 4 angewendet — außer dass Regel 2 auch gilt. Das Bild wird daher genauso gerendert wie im Fall `contain`.

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

### Verwendung von "auto" und einer spezifischen Länge

Gemäß Regel 1 werden angegebene Dimensionen immer verwendet, daher müssen wir unsere Regeln nur anwenden, um die zweite Dimension zu bestimmen.

#### Keine Dimensionen oder intrinsisches Verhältnis

Wenn das Bild keine Dimensionen oder ein intrinsisches Verhältnis hat, gilt Regel 4 und wir verwenden die Dimension des Hintergrundbereichs, um den Wert für die `auto` Dimension zu bestimmen.

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

Hier wird die Breite mithilfe der Breite des Hintergrundbereichs gemäß Regel 4 bestimmt, während die Höhe die `140px`, die im CSS angegeben sind, beträgt.

#### Eine angegebene Dimension ohne intrinsisches Verhältnis

Wenn das Bild eine angegebene Dimension hat, aber kein intrinsisches Verhältnis, wird diese Dimension gemäß Regel 3 verwendet, wenn diese Dimension im CSS auf `auto` gesetzt ist.

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

Hier überschreibt die im CSS angegebene `200px` Breite die im SVG angegebene `100px` Breite gemäß Regel 1. Da kein intrinsisches Verhältnis oder Höhe angegeben ist, wählt `auto` die Höhe des Hintergrundbereichs als Höhe für das gerenderte Bild aus.

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

In diesem Fall ist die Breite als `auto` im CSS angegeben, sodass die im SVG angegebenen `100px` ausgewählt werden, gemäß Regel 3. Die Höhe wird auf `125px` im CSS festgelegt, daher wird diese gemäß Regel 1 ausgewählt.

#### Eine angegebene Dimension mit intrinsischem Verhältnis

Wenn eine Dimension angegeben ist, wendet Regel 1 diese Dimension aus dem SVG auf den gerenderten Hintergrund an, es sei denn, sie wird ausdrücklich vom CSS überschrieben. Wenn auch ein intrinsisches Verhältnis angegeben ist, wird dieses verwendet, um die andere Dimension zu bestimmen.

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

In diesem Fall verwenden wir die im CSS festgelegte Breite des Bildes von `150px`, daher wird Regel 1 angewendet. Das intrinsische Seitenverhältnis von 3:4 bestimmt dann die Höhe für den `auto` Fall.

#### Keine angegebenen Dimensionen mit intrinsischem Verhältnis

Wenn im SVG keine Dimensionen angegeben sind, wird die im CSS angegebene Dimension angewendet, und dann wird das intrinsische Verhältnis verwendet, um die andere Dimension auszuwählen, gemäß Regel 2.

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

Die Breite wird im CSS mit `150px` festgelegt. Der `auto`-Wert für die Höhe wird mithilfe dieser Breite und dem 1:1-Seitenverhältnis ebenfalls auf `150px` berechnet.

## Siehe auch

- {{cssxref("background-size")}}
- [CSS-Hintergründe und Rahmen](/de/docs/Web/CSS/CSS_backgrounds_and_borders) Modul
