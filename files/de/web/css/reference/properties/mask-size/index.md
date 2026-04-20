---
title: "`mask-size` CSS property"
short-title: mask-size
slug: Web/CSS/Reference/Properties/mask-size
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`mask-size`** [CSS](/de/docs/Web/CSS) Eigenschaft gibt die Größen der angegebenen Maskenbilder an. Die Größen der Maskenbilder können vollständig oder teilweise angepasst werden, um ihre {{Glossary("aspect_ratio", "intrinsischen Seitenverhältnisse")}} zu erhalten.

## Syntax

```css
/* Keyword syntax */
mask-size: cover;
mask-size: contain;
mask-size: auto;

/* One-value syntax */
/* Mask width. Sets height to 'auto'. */
mask-size: 50%;
mask-size: 3em;
mask-size: 12px;

/* Two-value syntax */
/* First value: mask width. Second value: mask height */
mask-size: 3em 25%;
mask-size: auto 6px;
mask-size: auto 50%;

/* Multiple values */
mask-size: auto, contain;
mask-size:
  50%,
  50% 25%,
  auto 25%;
mask-size: 6px, auto, contain;

/* Global values */
mask-size: inherit;
mask-size: initial;
mask-size: revert;
mask-size: revert-layer;
mask-size: unset;
```

### Werte

Die `mask-size` Eigenschaft akzeptiert eine durch Kommata getrennte Liste von `<bg-size>` Werten. Ein `<bg-size>` Wert ist entweder `cover`, `contain`, ein Paar von Werten, die die Breite und Höhe spezifizieren (in dieser Reihenfolge), oder ein einzelner Wert, der die Breite spezifiziert (in diesem Fall wird die Höhe auf `auto` gesetzt). Werte umfassen:

- `contain`
  - : Skaliert das Maskenbild nach oben oder unten, während das Seitenverhältnis beibehalten wird, sodass die Maske innerhalb ihres Containers so groß wie möglich ist, ohne dass sie beschnitten oder gestreckt wird.
    Wenn das Maskenbild kleiner als der Container ist, wird die Maske gekachelt oder wiederholt, es sei denn, die {{cssxref("mask-repeat")}} Eigenschaft ist auf `no-repeat` gesetzt.

- `cover`
  - : Skaliert das Maskenbild auf die kleinste mögliche Größe, um den Container auszufüllen und gleichzeitig das Seitenverhältnis beizubehalten. Wenn das Seitenverhältnis des Maskenbildes von dem des Elements abweicht, wird es vertikal oder horizontal beschnitten.

- `auto`
  - : Behält das ursprüngliche Seitenverhältnis der Maskenquelle bei. Wenn sowohl die Breite als auch die Höhe eingestellt sind, wird die ursprüngliche Größe der Maskenressource verwendet. Andernfalls skaliert `auto` das Maskenbild in die entsprechende Richtung, sodass das ursprüngliche Seitenverhältnis erhalten bleibt.

- {{cssxref("&lt;length&gt;")}}
  - : Rendert das Maskenbild auf die angegebene Länge in der entsprechenden Dimension (Breite, wenn als erster oder einziger Wert gesetzt, Höhe, wenn als zweiter Wert gesetzt). Negative Werte sind nicht erlaubt.

- {{cssxref("&lt;percentage&gt;")}}
  - : Rendert das Maskenbild in der entsprechenden Dimension als den angegebenen Prozentsatz des Ursprungsbereichs der Box, wie durch die {{cssxref("mask-origin")}} Eigenschaft definiert, die standardmäßig auf `padding-box` gesetzt ist. Negative Werte sind nicht erlaubt.

## Beschreibung

Die `mask-size` Eigenschaft wird verwendet, um Maskenschichten zu skalieren.

Ein Element kann mehrere Maskenschichten haben. Die Anzahl der Maskenschichten wird durch die Anzahl der durch Komma getrennten Werte im Wert der {{cssxref("mask-image")}} Eigenschaft bestimmt (ein Wert erstellt eine Maskenschicht, selbst wenn es `none` ist).

Jeder `mask-size` Wert in der durch Komma getrennten Liste der Werte wird mit einer zugehörigen Maskenschicht abgeglichen, wie durch die Liste der `mask-image` Werte definiert. Wenn die Anzahl der Werte in den beiden Eigenschaften unterschiedlich ist:

- Wenn `mask-size` mehr Werte als `mask-image` hat, werden die überschüssigen Werte von `mask-size` nicht verwendet.
- Wenn `mask-size` weniger Werte als `mask-image` hat, werden die `mask-size` Werte wiederholt.

Jeder `mask-size` Wert ist ein `<bg-size>` Wert. Es gibt drei Möglichkeiten, jedes `<bg-size>` zu deklarieren: ein Schlüsselwort, zwei Längen, Prozentsätze oder das Schlüsselwort `auto`, oder eine Länge, ein Prozentsatz oder `auto`:

- Die verfügbaren Schlüsselwörter sind `cover` und `contain`.
- Wenn zwei Werte angegeben sind, definiert der erste die Maskenbreite und der zweite die Maskenhöhe.
- Wenn ein Wert angegeben ist, definiert er nur die Maskenbreite, wobei die Höhe auf `auto` gesetzt wird.

Die Breiten- und Höhenwerte sind ein {{cssxref("&lt;length&gt;")}}, ein {{cssxref("&lt;percentage&gt;")}}, oder das Schlüsselwort `auto`, welches der Standard ist. Das Setzen eines oder beider Werte auf `auto` erhält das ursprüngliche Seitenverhältnis des Maskenbildes.

Die gerenderte Größe des Maskenbildes wird wie folgt berechnet:

- Wenn beide Komponenten von `mask-size` angegeben sind und nicht `auto` sind, wird das Maskenbild in der angegebenen Größe gerendert.
- Wenn die `mask-size` `contain` oder `cover` ist, wird das Bild so gerendert, dass sein Seitenverhältnis in der größten Größe innerhalb oder außerhalb des Bereichs der Maskenposition erhalten bleibt. Wenn das Bild keine intrinsische Proportion hat, wie bei Verläufen, wird es in der Größe des Bereichs der Maskenposition gerendert.
- Wenn die `mask-size` `auto` ist (was sich zu `auto auto` auflöst), wird es in der Größe gerendert, in der die Maske angezeigt würde, wenn kein CSS angewendet würde, um die Darstellung zu ändern; dies ist seine {{Glossary("intrinsic_size", "intrinsische Größe")}}. Wenn es keine intrinsischen Dimensionen und keine intrinsische Proportion hat, wie im Fall von [CSS-Verläufen](/de/docs/Web/CSS/Reference/Values/gradient), wird es in der Größe des Bereichs der Maskenposition gerendert, definiert von der {{cssxref("mask-origin")}} (die standardmäßig auf `border-box` gesetzt ist).
  Wenn die Maskenquelle keine Dimensionen, aber eine Proportion (Seitenverhältnis) hat, wird ein Wert von `auto` es so rendern, als ob `contain` stattdessen angegeben worden wäre. Wenn das Bild eine intrinsische Dimension und eine Proportion hat, wird es in der durch diese eine Dimension und die Proportion bestimmten Größe gerendert. Wenn das Bild eine intrinsische Dimension, aber keine Proportion hat, wird es unter Verwendung der intrinsischen Dimension und der entsprechenden Dimension des Bereichs der Maskenposition gerendert.
- Wenn `mask-size` eine `auto` Komponente und eine nicht-`auto` Komponente hat, was auf alle Einzelwertwerte zutrifft, wird das Seitenverhältnis beibehalten, wenn die Maskenquelle eine intrinsische Proportion hat. Wenn es keine intrinsischen Proportionen gibt, wird der `auto` Wert als die Dimension des Bereichs der Maskenposition angenommen.

Wie bei allen Langformen von Kurzformeigenschaften, wenn die {{cssxref("mask")}} Kurzformeigenschaft gesetzt ist und der Wert der `mask-size` Eigenschaft nicht innerhalb einer Maskenschicht definiert ist, wird der `mask-size` Wert auf seinen ursprünglichen Wert von `auto` für diese Maskenschichten zurückgesetzt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Maskengröße als Prozentsatz einstellen

Dieses Beispiel zeigt die grundlegende Verwendung, während es auch Prozentwerte für `mask-size` demonstriert.

#### HTML

Wir fügen zwei {{htmlelement("div")}} Elemente ein:

```html
<div class="width"></div>
<div class="height"></div>
```

#### CSS

Die `<div>` Elemente sind definiert, doppelt so hoch wie breit zu sein, mit einem Hintergrundverlauf und einer Maske:

```css
div {
  width: 200px;
  height: 400px;
  background: blue linear-gradient(red, blue);
  mask-image: url("/shared-assets/images/examples/mdn.svg");
}
```

Die Breite einer Maske des `<div>` Elements ist auf `50%` gesetzt, wobei die Höhe standardmäßig `auto` ist. Die Höhe der Maske für das zweite `<div>` Element ist auf `50%` gesetzt, wobei die Breite ausdrücklich `auto` ist:

```css
.width {
  mask-size: 50%;
}

.height {
  mask-size: auto 50%;
}
```

Im Fall der `width` wird die Maske `100px` breit (`50%` des `200px` breiten Elements) gerendert. Die Höhe bleibt standardmäßig `auto`, wodurch das Seitenverhältnis der Maske beibehalten wird.
Im Fall der `height` wird die Maske `200px` hoch (`50%` des `400px` hohen Containers) gerendert. Die Breite ist ausdrücklich auf `auto` gesetzt, wodurch das Seitenverhältnis der Maske beibehalten wird.

```css hidden
body {
  display: flex;
  gap: 20px;
}
```

#### Ergebnisse

{{EmbedLiveSample("Maskengröße als Prozentsatz einstellen", "", "430px")}}

### Cover und contain

Dieses Beispiel zeigt die Schlüsselwortwerte für `mask-size`.

#### HTML

Drei {{htmlelement("section")}} Elemente werden definiert, jedes mit einem anderen Klassennamen und jedes mit einem `<div>` versehen.

```html
<section class="auto">
  <div></div>
</section>
<section class="cover">
  <div></div>
</section>
<section class="contain">
  <div></div>
</section>
```

#### CSS

Die `<div>` Elemente sind definiert, doppelt so hoch wie breit zu sein, mit einem Hintergrundverlauf und einer Maske:

```css
div {
  width: 200px;
  height: 400px;
  background: blue linear-gradient(red, blue);
  mask-image: url("/shared-assets/images/examples/mask-star.svg");
}
```

Die `mask-size` von zwei der `<div>` Elemente ist auf einen der Schlüsselwortwerte der Eigenschaft gesetzt. Das dritte `<div>` hat eine `mask-size` von `auto` gesetzt, welches die ursprünglichen intrinsischen Dimensionen der Maske zeigt:

```css
.auto div {
  mask-size: auto;
}

.cover div {
  mask-size: cover;
}

.contain div {
  mask-size: contain;
}
```

Die Eigenschaftswerte werden mit [generiertem Inhalt](/de/docs/Web/CSS/Guides/Generated_content) angezeigt.

```css
section::before {
  content: "mask-size: " attr(class) ";";
  display: block;
  text-align: center;
  border-bottom: 1px solid;
}
```

```css hidden
body {
  display: flex;
  flex-flow: row wrap;
  gap: 10px;
}
section {
  border: 1px solid;
}
```

#### Ergebnisse

{{EmbedLiveSample("Cover und contain", "", "430px")}}

Mit `auto` wird der Stern in seiner intrinsischen Größe von `100px` mal `100px` angezeigt. Mit `cover` vergrößert sich der Stern, um `400px` hoch zu sein und den gesamten Ursprungsbereich zu verdecken. Mit `contain` vergrößert sich der Stern, bis eine Dimension der gleichen Dimension der [Ursprungsbox](/de/docs/Web/CSS/Reference/Properties/mask-origin) entspricht, was bedeutet, dass der Stern so groß wie möglich ist (`200px` breit), aber immer noch von ihr eingeschlossen ist.

### Wenn die Maske größer als der Container ist

Unter Verwendung des gleichen HTML und CSS wie oben, mit nur einer anderen Ursprungskastengröße, erforscht dieses Beispiel, was passiert, wenn die Ursprungskiste kleiner als die intrinsischen Dimensionen der Maske ist.

```html hidden
<section class="auto">
  <div></div>
</section>
<section class="cover">
  <div></div>
</section>
<section class="contain">
  <div></div>
</section>
```

```css hidden
div {
  background: blue linear-gradient(red, blue);
  mask-image: url("/shared-assets/images/examples/mask-star.svg");
}

.auto div {
  mask-size: auto;
}

.cover div {
  mask-size: cover;
}

.contain div {
  mask-size: contain;
}

section::before {
  content: attr(class);
  display: block;
  text-align: center;
  border-bottom: 1px solid;
}

body {
  display: flex;
  flex-flow: row wrap;
  gap: 10px;
}
section {
  border: 1px solid;
}
```

Der einzige Unterschied ist die Größe der umgebenden Box (und der generierte Inhalt):

```css
div {
  width: 70px;
  height: 70px;
}
```

{{EmbedLiveSample("Wenn die Maske größer als der Container ist", "", "120px")}}

Der `contain` Wert hält die Maske innerhalb der Ursprungskiste. Der `cover` Wert deckt sie ab. In beiden Fällen schrumpft die Maske, wobei das ursprüngliche Seitenverhältnis beibehalten wird. Mit `auto` wird die Maske abgeschnitten, da die intrinsischen Dimensionen größer als die Dimensionen der Box sind.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("background-size")}}
- {{cssxref("mask")}} Kurzform
- {{cssxref("mask-image")}}
- {{cssxref("mask-origin")}}
- {{cssxref("mask-position")}}
- {{cssxref("mask-repeat")}}
- {{cssxref("mask-image")}}
- {{cssxref("mask-border")}}
- {{cssxref("background-size")}}
- {{cssxref("mask-border-width")}}
- [Einführung in CSS-Maskierung](/de/docs/Web/CSS/Guides/Masking/Introduction)
- [CSS `mask` Eigenschaften](/de/docs/Web/CSS/Guides/Masking/Mask_properties)
- [Deklarieren mehrerer Masken](/de/docs/Web/CSS/Guides/Masking/Multiple_masks)
- [CSS Maskierung](/de/docs/Web/CSS/Guides/Masking) Modul
