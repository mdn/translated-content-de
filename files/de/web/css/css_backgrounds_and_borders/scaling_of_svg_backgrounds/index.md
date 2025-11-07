---
title: Skalierung von SVG-Hintergründen
slug: Web/CSS/CSS_backgrounds_and_borders/Scaling_of_SVG_backgrounds
l10n:
  sourceCommit: 9944f7b12ef1a6aecd54d4b2f0c188a82fdeaaf0
---

Angesichts der Flexibilität von SVG-Bildern gibt es viel zu bedenken, wenn Sie diese als Hintergrundbilder mit der Eigenschaft {{ cssxref("background-image") }} verwenden, und noch mehr, wenn Sie sie mit der Eigenschaft {{ cssxref("background-size") }} skalieren. Dieser Artikel beschreibt, wie die Skalierung von SVG-Bildern beim Einsatz dieser Eigenschaften gehandhabt wird.

## Der Hintergrund-Skalierungsalgorithmus

Der Algorithmus zur Bestimmung der Hintergrundgröße eines Hintergrundbilds kann größtenteils mit diesen vier Regeln zusammengefasst werden. Es gibt einige Grenzfälle, die von diesen Regeln nicht abgedeckt sind, aber sie erfassen die Mehrzahl der Fälle.

1. Wenn {{ cssxref("background-size") }} eine feste Dimension angibt (d.h. Prozentsätze und relative Einheiten werden durch ihren Kontext festgelegt), hat diese Dimension Vorrang.
2. Hat das Bild ein intrinsisches Verhältnis (d.h. sein Breiten-Höhen-Verhältnis ist konstant, z. B. 16:9, 4:3, 2.39:1, 1:1 usw.), wird die Größe unter Beibehaltung dieses Verhältnisses gerendert.
3. Wenn das Bild eine Größe angibt und diese durch `constrain` oder `cover` nicht geändert wird, hat die angegebene Größe Vorrang.
4. Wenn keiner der oben genannten Fälle zutrifft, wird das Bild in der gleichen Größe wie der Hintergrundbereich gerendert.

Es ist wichtig zu beachten, dass sich der Hintergrund-Skalierungsalgorithmus nur um die Dimensionen und Proportionen des Bildes kümmert oder deren Fehlen. Ein SVG-Bild mit festen Dimensionen wird genauso behandelt wie ein Rasterbild derselben Größe.

> [!NOTE]
> Wenn Sie versuchen, Ihr SVG mit CSS auf ein anderes {{Glossary("aspect_ratio", "Seitenverhältnis")}} zu strecken – z. B. um es über den Seitenhintergrund zu strecken – stellen Sie sicher, dass Ihr SVG `preserveAspectRatio="none"` enthält. Erfahren Sie mehr über {{svgattr("preserveAspectRatio")}}.

## Quellbild-Beispiele

Bevor Sie sich mit den Ergebnissen verschiedener SVG-Quellbilder und deren Aussehen bei der Verwendung mit {{ cssxref("background-size") }} befassen, ist es hilfreich, einige Beispiel-Quellbilder mit unterschiedlichen Dimensionen und Größeneinstellungen zu betrachten, die wir später als unsere `background-image`-Werte in den Beispielen verwenden werden. Der Browser rendert {{SVGelement("svg")}}-Bilder standardmäßig mit einer Breite von `300px` und einer Höhe von `150px`.

### Dimensionslos und proportionslos

Dieses SVG-Verlaufsbild ist sowohl dimensionslos als auch proportionslos. Es kümmert sich weder um seine Größe noch um die Beibehaltung eines bestimmten Seitenverhältnisses. Dies wäre ein guter Verlaufshintergrund für den Desktop, der unabhängig von Ihrer Bildschirmgröße und ihrem Seitenverhältnis funktioniert.

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

### Eine angegebene Dimension und proportionslos

Dieses Bild gibt eine Breite von 100 Pixel an, aber keine Höhe oder ein intrinsisches Verhältnis. Im Grunde handelt es sich um einen dünnen Tapetenstreifen, der über die gesamte Höhe eines Blocks gestreckt werden könnte.

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

Dieses Bild gibt eine Höhe von 100 Pixel an, aber keine Breite. Es gibt auch ein intrinsisches Seitenverhältnis von 3:4 an. Dies stellt sicher, dass das Breiten-Höhen-Verhältnis immer 3:4 beträgt, es sei denn, es wird absichtlich auf eine unverhältnismäßige Größe skaliert (d.h. durch explizites Festlegen von Breite und Höhe, die nicht diesem Verhältnis entsprechen).

Dies ist sehr ähnlich, als würde man eine bestimmte Breite und Höhe angeben; da, wenn Sie eine Dimension und ein Verhältnis haben, die andere Dimension impliziert ist.

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

Dieses Bild gibt weder eine Breite noch eine Höhe an; stattdessen gibt es ein intrinsisches Verhältnis von 1:1 an. Es ist immer quadratisch und in jeder Größe verwendbar, beispielsweise 32x32, 128x128 oder 512x512.

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

Schauen wir uns nun einige Beispiele an, was passiert, wenn wir diese Bilder auf unterschiedliche Weise skalieren. In jedem der untenstehenden Beispiele sind die umgebenden {{htmlelement("div")}}-Elemente 300 Pixel breit und 200 Pixel hoch und haben einen 2 Pixel breiten Rahmen. Um sicherzustellen, dass wir das SVG-Hintergrundbild für diese Demonstrationen nur einmal anzeigen, setzen wir {{ cssxref("background-repeat") }} auf `no-repeat`.

```css
div {
  width: 300px;
  height: 200px;
  background-repeat: no-repeat;
  border: 2px solid black;
}
```

### Festgelegte Längen für beide Dimensionen angeben

Wenn Sie {{ cssxref("background-size") }} verwenden, um feste Längen für beide Dimensionen anzugeben, werden diese Längen immer verwendet, gemäß Regel 1 oben. Mit anderen Worten, das Bild wird immer auf die angegebenen Dimensionen gestreckt, unabhängig davon, ob das Quellbild seine Dimensionen und/oder sein Seitenverhältnis angegeben hat.

#### Keine Dimensionen oder intrinsisches Verhältnis

In diesem Beispiel hat das Bild keine Dimensionen oder ein intrinsisches Verhältnis festgelegt:

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

In diesem Beispiel hat das Bild eine Dimension angegeben und kein intrinsisches Verhältnis festgelegt:

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

In diesem Beispiel hat das Bild eine Dimension explizit festgelegt, zusammen mit einem intrinsischen Verhältnis, was bedeutet, dass beide Dimensionen effektiv definiert sind. Die Angabe einer absoluten Höhe und Breite für `background-size` überschreibt die in der SVG festgelegten Dimensionen:

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
  background-image: url("no-dimensions-1x1-ratio.svg");
  background-size: 250px 100px;
}
```

{{ EmbedLiveSample('scaling4', 200, 230) }}

### Verwendung von "contain" oder "cover"

Die Angabe von `cover` für {{ cssxref("background-size") }} macht das Bild so klein wie möglich, während es den gesamten Hintergrundbereich abdeckt. `contain` hingegen macht das Bild so groß wie möglich, ohne vom Hintergrundbereich abgeschnitten zu werden.

Für ein Bild mit einem intrinsischen Verhältnis passt genau eine Größe zu den Kriterien von `cover`/fit allein. Aber wenn kein intrinsisches Verhältnis angegeben ist, reicht `cover`/fit nicht aus, sodass der große/kleine Zwang die resultierende Größe wählt.

#### Keine Dimensionen oder intrinsisches Verhältnis

In diesem Beispiel hat das Bild keine Dimensionen oder ein intrinsisches Verhältnis festgelegt. Wenn ein Bild weder Dimensionen noch ein intrinsisches Verhältnis angibt, gelten weder Regel 2 noch Regel 3, sodass Regel 4 greift: Das Hintergrundbild wird gerendert, indem es den gesamten Hintergrundbereich abdeckt. Dies erfüllt die größten-oder-kleinsten-Beschränkung.

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

In diesem Beispiel, bei dem das Bild eine Dimension angegeben hat, aber kein intrinsisches Verhältnis, gilt Regel 4, und das Bild wird so skaliert, dass es den gesamten Hintergrundbereich abdeckt.

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

In diesen Beispielen hat das Bild eine Dimension explizit festgelegt, zusammen mit einem intrinsischen Verhältnis.

Die Dinge ändern sich, wenn Sie ein intrinsisches Verhältnis angeben. In diesem Fall ist Regel 1 nicht relevant, sodass Regel 2 angewendet wird: Wir versuchen, jedes intrinsische Verhältnis zu bewahren (während wir `contain` oder `cover` respektieren). Beispielsweise bedeutet das Bewahren eines 3:4 intrinsischen Seitenverhältnisses für ein 300x200 Rechteck mit `contain`, dass ein 150x200 Hintergrund gezeichnet wird.

##### contain-Fall

```html hidden live-sample___cc3
<div></div>
```

Diese CSS wird verwendet:

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

Beachten Sie, wie das gesamte Bild gerendert wird und bestmöglich in das Rechteck passt, ohne dass es abgeschnitten wird.

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
  background-image: url("100px-height-3x4-ratio.svg");
  background-size: cover;
}
```

{{ EmbedLiveSample('cc5', 200, 230) }}

Hier wird das 3:4-Verhältnis beibehalten, während das Bild dennoch gedehnt wird, um die gesamte Box zu füllen. Das führt dazu, dass der untere Teil des Bildes abgeschnitten wird.

#### Keine Dimensionen mit intrinsischem Verhältnis

Diese Beispiele verwenden das Bild mit einem intrinsischen Verhältnis, aber ohne definierte Dimensionen. Bei Verwendung eines Bildes ohne intrinsische Dimensionen, jedoch mit einem intrinsischen Verhältnis, funktioniert es ähnlich.

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
  background-image: url("no-dimensions-1x1-ratio.svg");
  background-size: contain;
}
```

{{ EmbedLiveSample('cc6', 200, 230) }}

Beachten Sie, dass das Bild so skaliert wird, dass die kleinste Dimension passt, während das 1:1-Verhältnis beibehalten wird.

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
  background-image: url("no-dimensions-1x1-ratio.svg");
  background-size: cover;
}
```

{{ EmbedLiveSample('cc7', 200, 230) }}

Hier wird das Bild so skaliert, dass es die größte Dimension ausfüllt. Das 1:1-Verhältnis bleibt erhalten, obwohl es bei diesem Quellbild schwer erkennbar sein kann.

### Automatische Größenanpassung mit "auto" für beide Dimensionen

Wenn {{ cssxref("background-size") }} auf `auto` oder `auto auto` gesetzt wird, besagt Regel 2, dass das Rendering eines beliebigen angegebenen intrinsischen Verhältnisses beibehalten werden muss.

#### Keine Dimensionen oder intrinsisches Verhältnis

Wenn die Hintergrundbilder automatisch skaliert werden, ohne dass ein intrinsisches Verhältnis oder Dimensionen angegeben sind, tritt Regel 4 in Kraft, und das Bild wird so eingestellt, dass es den Hintergrundbereich ausfüllt.

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

Wenn kein intrinsisches Verhältnis angegeben ist, aber mindestens eine Dimension, tritt Regel 3 in Kraft, und das Bild wird unter Beachtung dieser Dimensionen gerendert.

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

Beachten Sie hier, dass die in der SVG-Quelle angegebene Breite von 100 Pixeln eingehalten wird, während die Höhe den Hintergrundbereich ausfüllt, da sie weder explizit noch durch ein intrinsisches Verhältnis angegeben ist.

#### Eine Dimension und ein intrinsisches Verhältnis

Wenn wir ein intrinsisches Verhältnis mit einer festen Dimension haben, fixiert das beide Dimensionen. Wie bereits erwähnt, entspricht es dem expliziten Festlegen beider Dimensionen, wenn man eine Dimension und ein Verhältnis kennt.

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

Da dieses Bild eine explizite Höhe von `100px` hat, beträgt die Breite des Bildes im Fall von `auto`, basierend auf dem 3:4-Verhältnis, 75 Pixel.

#### Keine festen Dimensionen mit intrinsischem Verhältnis

Wenn ein intrinsisches Verhältnis angegeben ist, aber keine Dimensionen, wird Regel 4 angewendet – außer dass Regel 2 ebenfalls gilt. Das Bild wird daher genauso gerendert wie beim `contain`-Fall.

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

Angesichts von Regel 1 werden spezifizierte Dimensionen immer verwendet, daher müssen wir unsere Regeln nur anwenden, um die zweite Dimension zu bestimmen.

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
  background-image: url("no-dimensions-or-ratio.svg");
  background-size: auto 140px;
}
```

{{ EmbedLiveSample('auto0', 200, 230) }}

Hier wird die Breite unter Verwendung der Breite des Hintergrundbereichs gemäß Regel 4 bestimmt, während die Höhe die im CSS angegebene `140px` ist.

#### Eine angegebene Dimension ohne intrinsisches Verhältnis

Wenn das Bild eine angegebene Dimension, aber kein intrinsisches Verhältnis hat, wird diese angegebene Dimension gemäß Regel 3 verwendet, wenn diese Dimension im CSS auf `auto` gesetzt ist.

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

Hier überschreibt die im CSS angegebene `200px` die im SVG angegebene Breite von `100px`, gemäß Regel 1. Da es kein intrinsisches Verhältnis oder keine Höhe gibt, wählt `auto` die Höhe des Hintergrundbereichs als Höhe für das gerenderte Bild.

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

In diesem Fall ist die Breite im CSS als `auto` angegeben, daher wird die im SVG angegebene Breite von `100px` gemäß Regel 3 ausgewählt. Die Höhe wird im CSS auf `125px` gesetzt, sodass diese gemäß Regel 1 ausgewählt wird.

#### Eine angegebene Dimension mit intrinsischem Verhältnis

Wenn eine Dimension angegeben ist, wendet Regel 1 diese Dimension aus dem SVG auf den gerenderten Hintergrund an, es sei denn, sie wird speziell durch das CSS überschrieben. Wenn auch ein intrinsisches Verhältnis angegeben ist, wird dieses verwendet, um die andere Dimension zu bestimmen.

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

In diesem Fall verwenden wir die im CSS auf `150px` gesetzte Breite, sodass Regel 1 angewendet wird. Das intrinsische 3:4-Verhältnis bestimmt dann die Höhe für den `auto`-Fall.

#### Keine angegebenen Dimensionen mit intrinsischem Verhältnis

Wenn in der SVG keine Dimensionen angegeben sind, wird die im CSS angegebene Dimension angewendet, dann wird das intrinsische Verhältnis verwendet, um die andere Dimension gemäß Regel 2 auszuwählen.

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

Die Breite wird durch das CSS auf `150px` festgelegt. Der `auto`-Wert für die Höhe wird basierend auf dieser Breite und dem 1:1-Verhältnis ebenfalls auf `150px` berechnet.

## Siehe auch

- {{cssxref("background-size")}}
- [CSS Hintergründe und Rahmen](/de/docs/Web/CSS/Guides/Backgrounds_and_borders)-Modul
