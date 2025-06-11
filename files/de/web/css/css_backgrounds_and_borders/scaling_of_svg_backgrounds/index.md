---
title: Skalierung von SVG-Hintergründen
slug: Web/CSS/CSS_backgrounds_and_borders/Scaling_of_SVG_backgrounds
l10n:
  sourceCommit: 0dcad86763896bba7f8e1ddc30c6dfd2aa664c6b
---

{{CSSRef}}

Angesichts der Flexibilität von SVG-Bildern gibt es viel zu beachten, wenn Sie sie als Hintergrundbilder mit der {{cssxref("background-image")}} Eigenschaft verwenden, und noch mehr zu beachten, wenn Sie sie mit der {{cssxref("background-size")}} Eigenschaft skalieren. Dieser Artikel beschreibt, wie die Skalierung von SVG-Bildern bei Verwendung dieser Eigenschaften gehandhabt wird.

## Der Hintergrund-Skalierungsalgorithmus

Der Algorithmus, der verwendet wird, um die Größe des Hintergrundbildes zu bestimmen, kann größtenteils durch diese vier Regeln zusammengefasst werden. Es gibt einige Randfälle, die nicht von diesen Regeln abgedeckt sind, aber sie decken die Mehrheit der Fälle ab.

1. Wenn {{cssxref("background-size")}} eine feste Dimension angibt (d.h. Prozentsätze und relative Einheiten sind durch ihren Kontext festgelegt), gewinnt diese Dimension.
2. Wenn das Bild ein intrinsisches Verhältnis hat (d.h. das Breiten-Höhen-Verhältnis ist konstant, wie z.B. 16:9, 4:3, 2.39:1, 1:1 usw.), bleibt die gerenderte Größe in diesem Verhältnis.
3. Wenn das Bild eine Größe angibt und die Größe nicht durch `constrain` oder `cover` modifiziert wird, gewinnt die angegebene Größe.
4. Wenn keiner der obigen Fälle zutrifft, wird das Bild in der gleichen Größe wie der Hintergrundbereich gerendert.

Es ist wichtig zu beachten, dass der Hintergrund-Skalierungsalgorithmus nur auf die Dimensionen und Proportionen des Bildes achtet, oder auf deren Fehlen. Ein SVG-Bild mit festen Dimensionen wird genauso behandelt wie ein Rasterbild der gleichen Größe.

> [!NOTE]
> Wenn Sie versuchen, Ihr SVG mit CSS auf ein anderes {{Glossary("aspect_ratio", "Seitenverhältnis")}} zu strecken – beispielsweise um es über den gesamten Seitenhintergrund zu strecken – stellen Sie sicher, dass Ihr SVG `preserveAspectRatio="none"` enthält. Erfahren Sie mehr über {{svgattr("preserveAspectRatio")}}.

## Beispiele für Quellbilder

Bevor Sie mit den Ergebnissen der Verwendung verschiedener Arten von SVG-Quellbildern und deren Darstellung mit {{cssxref("background-size")}} beginnen, ist es hilfreich, sich einige Beispielquellbilder anzusehen, die unterschiedliche Dimensionen und Größeneinstellungen haben, die wir später als unsere `background-image` Werte in unseren Beispielen verwenden werden. Der Browser rendert {{SVGelement("svg")}} Bilder standardmäßig mit `300px` Breite und `150px` Höhe.

### Ohne Maße und proportionenlos

Dieses SVG-Verlaufsbild ist sowohl maßlos als auch proportionenlos. Es kümmert sich nicht um seine Größe, noch darum, ein bestimmtes Seitenverhältnis beizubehalten. Dies wäre ein guter Hintergrundverlauf für den Desktop, der unabhängig von Ihrer Bildschirmgröße und Ihrem Seitenverhältnis funktioniert.

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

### Eine festgelegte Dimension und proportionenlos

Dieses Bild gibt eine Breite von 100 Pixeln an, aber keine Höhe oder intrinsisches Verhältnis. Dies ist im Grunde ein dünner Tapetenstreifen, der über die gesamte Höhe eines Blocks gestreckt werden könnte.

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

### Eine festgelegte Dimension mit intrinsischem Verhältnis

Dieses Bild gibt eine Höhe von 100 Pixeln an, aber keine Breite, und gibt auch ein intrinsisches Seitenverhältnis von 3:4 an. Das stellt sicher, dass sein Breiten-Höhen-Verhältnis immer 3:4 ist, es sei denn, es wird absichtlich auf eine unverhältnismäßige Größe skaliert (d.h. indem sowohl Breite als auch Höhe explizit angegeben werden, die nicht in diesem Verhältnis stehen).

Dies ist sehr ähnlich wie das Festlegen einer spezifischen Breite und Höhe; sobald man eine Dimension und ein Verhältnis hat, ist die andere Dimension impliziert.

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

Dieses Bild gibt weder eine Breite noch eine Höhe an; stattdessen gibt es ein intrinsisches Verhältnis von 1:1 an. Es ist immer quadratisch und in jeder Größe verwendbar, z.B. 32x32, 128x128 oder 512x512.

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

Schauen wir uns nun einige Beispiele an, was passiert, wenn wir diese Bilder unterschiedlich skalieren. In jedem der folgenden Beispiele sind die umschließenden {{htmlelement("div")}} Elemente 300 Pixel breit und 200 Pixel hoch, mit einem 2 Pixel breiten Rahmen. Um sicherzustellen, dass wir das SVG-Hintergrundbild nur einmal für diese Demonstrationen anzeigen, setzen wir {{cssxref("background-repeat")}} auf `no-repeat`.

```css
div {
  width: 300px;
  height: 200px;
  background-repeat: no-repeat;
  border: 2px solid black;
}
```

### Festlegen fester Längen für beide Dimensionen

Wenn Sie {{cssxref("background-size")}} verwenden, um feste Längen für beide Dimensionen festzulegen, werden diese Längen gemäß Regel 1 immer verwendet. Mit anderen Worten, das Bild wird immer auf die von Ihnen festgelegten Dimensionen gestreckt, unabhängig davon, ob das Quellbild seine Dimensionen und/oder sein Seitenverhältnis angegeben hat oder nicht.

#### Keine Dimensionen oder intrinsisches Verhältnis

In diesem Beispiel hat das Bild keine Dimensionen oder ein intrinsisches Verhältnis gesetzt:

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

In diesem Beispiel hat das Bild eine festgelegte Dimension, aber kein intrinsisches Verhältnis:

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

In diesem Beispiel hat das Bild eine Dimension explizit festgelegt, zusammen mit einem intrinsischen Verhältnis, was bedeutet, dass beide Dimensionen effektiv definiert sind. Das Festlegen einer absoluten Höhe und Breite für `background-size` überschreibt die im SVG festgelegten Dimensionen:

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

Das Angeben von `cover` für {{cssxref("background-size")}} macht das Bild so klein wie möglich, während es den gesamten Hintergrundbereich abdeckt. `contain` hingegen macht das Bild so groß wie möglich, ohne vom Hintergrundbereich abgeschnitten zu werden.

Für ein Bild mit einem intrinsischen Verhältnis passt genau eine Größe zu den alleinigen Kriterien `cover`/fit. Aber wenn kein intrinsisches Verhältnis angegeben ist, sind `cover`/fit nicht ausreichend, sodass die großen/kleinen Einschränkungen die resultierende Größe auswählen.

#### Keine Dimensionen oder intrinsisches Verhältnis

In diesem Beispiel hat das Bild keine Dimensionen oder ein intrinsisches Verhältnis gesetzt. Wenn ein Bild weder Dimensionen noch ein intrinsisches Verhältnis angibt, gelten weder Regel 2 noch Regel 3, sodass Regel 4 greift: das Hintergrundbild wird über den gesamten Hintergrundbereich gerendert. Dies erfüllt die größte-oder-kleinste Einschränkung.

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

In diesem Beispiel, wobei das Bild eine Dimension angegeben hat, aber kein intrinsisches Verhältnis, gilt Regel 4 und das Bild wird skaliert, um den gesamten Hintergrundbereich abzudecken.

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

Die Dinge ändern sich, wenn Sie ein intrinsisches Verhältnis angeben. In diesem Fall ist Regel 1 nicht relevant, sodass Regel 2 angewendet wird: wir versuchen, ein intrinsisches Verhältnis zu wahren (während wir `contain` oder `cover` respektieren). Zum Beispiel bedeutet das Bewahren eines 3:4 intrinsischen Seitenverhältnisses für eine 300x200 Box mit `contain`, einen 150x200 Hintergrund zu zeichnen.

##### contain-Fall

```html hidden live-sample___cc3
<div></div>
```

Mit diesem CSS:

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

Beachten Sie, wie das gesamte Bild gerendert wird und so gut wie möglich in die Box passt, ohne dass Teile davon abgeschnitten werden.

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

Hier wird das 3:4 Verhältnis beibehalten, während das Bild so gestreckt wird, dass es die gesamte Box ausfüllt. Das führt dazu, dass der untere Teil des Bildes abgeschnitten wird.

#### Keine Dimensionen mit intrinsischem Verhältnis

Diese Beispiele verwenden das Bild mit einem festgelegten intrinsischen Verhältnis, aber ohne definierte Dimensionen. Bei der Verwendung eines Bildes ohne intrinsische Dimensionen, aber mit einem intrinsischen Verhältnis, funktioniert alles ähnlich.

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

Beachten Sie, dass das Bild so skaliert wird, dass es die kleinste Dimension ausfüllt, während das 1:1-Seitenverhältnis beibehalten wird.

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

Hier wird das Bild so skaliert, dass es die größte Dimension ausfüllt. Das 1:1-Seitenverhältnis wurde beibehalten, obwohl dies bei diesem Quellbild schwer zu erkennen sein kann.

### Automatische Größenbestimmung mit "auto" für beide Dimensionen

Wenn {{cssxref("background-size")}} auf `auto` oder `auto auto` gesetzt ist, besagt Regel 2, dass das Rendern jedes angegebene intrinsische Verhältnis beibehalten muss.

#### Keine Dimensionen oder intrinsisches Verhältnis

Beim automatischen Skalieren von Hintergrundbildern ohne angegebenes intrinsisches Verhältnis oder Dimensionen greift Regel 4, und das Bild wird so gerendert, dass es den Hintergrundbereich vollständig ausfüllt.

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

Wenn kein intrinsisches Verhältnis angegeben ist, aber mindestens eine Dimension festgelegt ist, greift Regel 3, und wir rendern das Bild unter Berücksichtigung dieser Dimensionen.

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

Beachten Sie hier, dass die Breite, die im Quell-SVG mit 100 Pixeln angegeben ist, beachtet wird, während die Höhe den Hintergrundbereich füllt, da sie nicht angegeben ist (weder explizit noch durch ein intrinsisches Verhältnis).

#### Eine Dimension und ein intrinsisches Verhältnis

Wenn wir ein intrinsisches Verhältnis mit einer festen Dimension haben, fixiert das beide Dimensionen. Wie bereits erwähnt, entspricht das Wissen über eine Dimension und ein Verhältnis dem expliziten Festlegen beider Dimensionen.

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

Da dieses Bild eine explizite Höhe von `100px` hat. Mit dem im SVG festgelegten 3:4-Verhältnis beträgt die Breite des Bildes im Falle von `auto` 75 Pixel.

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

Gemäß Regel 1 werden spezifizierte Dimensionen immer verwendet, daher müssen wir unsere Regeln nur anwenden, um die zweite Dimension zu bestimmen.

#### Keine Dimensionen oder intrinsisches Verhältnis

Wenn das Bild keine Dimensionen oder ein intrinsisches Verhältnis hat, gilt Regel 4, und wir verwenden die Dimension des Hintergrundbereichs, um den Wert für die `auto`-Dimension zu bestimmen.

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

Hier wird die Breite unter Verwendung der Breite des Hintergrundbereichs gemäß Regel 4 bestimmt, während die Höhe die im CSS angegebene `140px` beträgt.

#### Eine festgelegte Dimension mit keinem intrinsischen Verhältnis

Wenn das Bild eine festgelegte Dimension hat, aber kein intrinsisches Verhältnis, wird diese festgelegte Dimension gemäß Regel 3 verwendet, wenn diese Dimension im CSS auf `auto` festgelegt ist.

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

Hier überschreibt die im CSS angegebene `200px` die im SVG angegebene `100px` Breite gemäß Regel 1. Da kein intrinsisches Verhältnis oder Höhe angegeben ist, wählt `auto` die Höhe des Hintergrundbereichs als Höhe für das gerenderte Bild.

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

In diesem Fall ist die Breite im CSS als `auto` festgelegt, daher wird die im SVG angegebene `100px` Breite gemäß Regel 3 gewählt. Die Höhe ist im CSS auf `125px` festgelegt, daher wird diese gemäß Regel 1 gewählt.

#### Eine festgelegte Dimension mit intrinsischem Verhältnis

Wenn eine Dimension angegeben ist, wird diese Dimension aus dem SVG zum gerenderten Hintergrund angewendet, es sei denn, sie wird speziell durch das CSS überschrieben. Wenn ein intrinsisches Verhältnis ebenfalls angegeben ist, wird dieses verwendet, um die andere Dimension zu bestimmen.

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

In diesem Fall verwenden wir die im CSS festgelegte Breite des Bildes von `150px`, sodass Regel 1 angewendet wird. Das intrinsische 3:4 Seitenverhältnis bestimmt dann die Höhe für den `auto`-Fall.

#### Keine angegebenen Dimensionen mit intrinsischem Verhältnis

Wenn keine Dimensionen im SVG angegeben sind, wird die im CSS spezifizierte Dimension angewendet, dann wird das intrinsische Verhältnis verwendet, um die andere Dimension gemäß Regel 2 zu bestimmen.

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

Die Breite wird im CSS auf `150px` festgelegt. Der `auto`-Wert für die Höhe wird unter Verwendung dieser Breite und des 1:1 Verhältnisses ebenfalls auf `150px` berechnet.

## Siehe auch

- {{cssxref("background-size")}}
- [CSS Hintergründe und Rahmen](/de/docs/Web/CSS/CSS_backgrounds_and_borders) Modul
