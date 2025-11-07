---
title: mask-size
slug: Web/CSS/Reference/Properties/mask-size
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`mask-size`** [CSS](/de/docs/Web/CSS) Eigenschaft gibt die Größen der angegebenen Maskenbilder an. Maskenbildgrößen können vollständig oder teilweise eingeschränkt werden, um ihre {{Glossary("aspect_ratio", "intrinsischen Seitenverhältnisse")}} zu bewahren.

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

Die `mask-size` Eigenschaft akzeptiert eine durch Kommas getrennte Liste von `<bg-size>` Werten. Ein `<bg-size>` Wert ist entweder `cover`, `contain`, ein Paar von Werten, das die Breite und Höhe angibt (in dieser Reihenfolge), oder ein einzelner Wert, der die Breite angibt (in diesem Fall wird die Höhe auf `auto` gesetzt). Werte beinhalten:

- `contain`

  - : Skaliert das Maskenbild hoch oder runter, wobei das Seitenverhältnis beibehalten wird, sodass die Maske so groß wie möglich innerhalb ihres Containers ist, ohne sie zu beschneiden oder zu strecken. Wenn das Maskenbild kleiner als der Container ist, wird die Maske gekachelt oder wiederholt, es sei denn, die Eigenschaft {{cssxref("mask-repeat")}} ist auf `no-repeat` gesetzt.

- `cover`

  - : Skaliert das Maskenbild auf die kleinstmögliche Größe, um den Container auszufüllen, während das Seitenverhältnis beibehalten wird. Wenn das Seitenverhältnis des Maskenbildes vom Element abweicht, wird es vertikal oder horizontal beschnitten.

- `auto`

  - : Bewahrt das ursprüngliche Seitenverhältnis des Maskenquellbildes. Wenn sowohl die Breite als auch die Höhe eingestellt sind, wird die ursprüngliche Größe der Maskenressource verwendet. Andernfalls skaliert `auto` das Maskenbild in der entsprechenden Richtung, sodass das ursprüngliche Seitenverhältnis beibehalten wird.

- {{cssxref("&lt;length&gt;")}}

  - : Rendert das Maskenbild in der angegebenen Länge in der entsprechenden Dimension (Breite, wenn als erster oder einziger Wert gesetzt, Höhe, wenn als zweiter Wert gesetzt). Negative Werte sind nicht erlaubt.

- {{cssxref("&lt;percentage&gt;")}}
  - : Rendert das Maskenbild in der entsprechenden Dimension als Prozentsatz des Ursprungsbereichs der Box, wie durch die Eigenschaft {{cssxref("mask-origin")}} definiert, die standardmäßig `padding-box` ist. Negative Werte sind nicht erlaubt.

## Beschreibung

Die `mask-size` Eigenschaft wird verwendet, um Maskenschichten zu skalieren.

Ein Element kann mehrere Maskenschichten haben. Die Anzahl der Maskenschichten wird durch die Anzahl der kommagetrennten Werte in der {{cssxref("mask-image")}} Eigenschaftsangabe bestimmt (ein Wert erstellt eine Maskenschicht, auch wenn es `none` ist).

Jeder `mask-size` Wert in der Liste der kommagetrennten Werte wird einer zugehörigen Maskenschicht zugeordnet, wie durch die Liste der `mask-image` Werte definiert, in der angegebenen Reihenfolge. Wenn die Anzahl der Werte in den beiden Eigenschaften unterschiedlich ist:

- Wenn `mask-size` mehr Werte als `mask-image` hat, werden die überschüssigen Werte von `mask-size` nicht verwendet.
- Wenn `mask-size` weniger Werte als `mask-image` hat, werden die `mask-size` Werte wiederholt.

Jeder `mask-size` Wert ist ein `<bg-size>` Wert. Es gibt drei Möglichkeiten, jedes `<bg-size>` zu deklarieren: ein Schlüsselwort, zwei Längen, Prozentsätze oder das Schlüsselwort `auto`, oder eine Länge, ein Prozentsatz oder `auto`:

- Die verfügbaren Schlüsselwörter sind `cover` und `contain`.
- Wenn zwei Werte angegeben sind, definiert der erste die Maskenbreite und der zweite ihre Höhe.
- Wenn ein Wert angegeben ist, definiert er nur die Maskenbreite, wobei die Höhe auf `auto` gesetzt ist.

Die Breiten- und Höhenwerte sind ein {{cssxref("&lt;length&gt;")}}, ein {{cssxref("&lt;percentage&gt;")}}, oder das Schlüsselwort `auto`, welches der Standard ist. Setzt man einen oder beide Werte auf `auto`, wird das ursprüngliche Seitenverhältnis des Maskenbildes beibehalten.

Die gerenderte Größe des Maskenbildes wird wie folgt berechnet:

- Wenn beide Komponenten von `mask-size` spezifiziert und nicht `auto` sind, wird das Maskenbild in der angegebenen Größe gerendert.
- Wenn die `mask-size` `contain` oder `cover` ist, wird das Bild unter Beibehaltung seines Seitenverhältnisses in der größten Größe gerendert, die im Maskenpositionierungsbereich enthalten ist oder diesen abdeckt. Hat das Bild keine intrinsische Proportion, wie bei Verläufen, wird es in der Größe des Maskenpositionierungsbereichs gerendert.
- Wenn die `mask-size` `auto` ist (was zu `auto auto` aufgelöst wird), wird es in der Größe gerendert, in der die Maske angezeigt würde, wenn kein CSS angewendet wäre, um die Darstellung zu ändern; dies ist seine {{Glossary("intrinsic_size", "intrinsische Größe")}}. Hat es keine intrinsischen Dimensionen und keine intrinsische Proportion, wie es bei [CSS Verläufen](/de/docs/Web/CSS/Reference/Values/gradient) der Fall ist, wird es in der Größe des Maskenpositionierungsbereichs gerendert, der durch die Eigenschaft {{cssxref("mask-origin")}} definiert wird (standardmäßig `border-box`). Hat die Maskenquelle keine Dimensionen, aber eine Proportion (Seitenverhältnis), wird ein Wert von `auto` so gerendert, als ob `contain` spezifiziert worden wäre. Hat das Bild eine intrinsische Dimension und eine Proportion, wird es in der durch diese Dimension und die Proportion bestimmten Größe gerendert. Hat ein Bild eine intrinsische Dimension, aber keine Proportion, wird es in der intrinsischen Dimension und der entsprechenden Dimension des Maskenpositionierungsbereichs gerendert.
- Hat `mask-size` eine `auto` Komponente und eine nicht-`auto` Komponente, welche auf alle Einzelwertwerte zutrifft, bleibt das Seitenverhältnis erhalten, wenn die Maskenquelle eine intrinsische Proportion aufweist. Wenn keine intrinsische Proportion vorhanden ist, wird davon ausgegangen, dass der `auto` Wert die Dimension des Maskenpositionierungsbereichs hat.

Wie bei allen Langhandkomponenten einer Kurzschreibweiseigenschaft, wenn die {{cssxref("mask")}} Kurzschreibweiseigenschaft gesetzt ist und der Wert der `mask-size` Eigenschaft in keiner Maskenschicht definiert ist, wird der `mask-size` Wert für diese Maskenschichten auf seinen Anfangswert `auto` zurückgesetzt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Die Maskengröße als Prozentsatz festlegen

Dieses Beispiel zeigt die Grundverwendung und auch die Prozentwerte für `mask-size`.

#### HTML

Wir fügen zwei {{htmlelement("div")}} Elemente ein:

```html
<div class="width"></div>
<div class="height"></div>
```

#### CSS

Die `<div>` Elemente sind definiert, um doppelt so hoch wie breit zu sein, mit einem Farbverlaufshintergrund und einer Maske:

```css
div {
  width: 200px;
  height: 400px;
  background: blue linear-gradient(red, blue);
  mask-image: url("/shared-assets/images/examples/mdn.svg");
}
```

Die Breite eines `<div>` Elements Maske wird auf `50%` eingestellt, bei dem die Höhe standardmäßig auf `auto` gesetzt ist. Die Höhe der Maske für das zweite `<div>` Element ist auf `50%` gesetzt, wobei die Breite auf `auto` gesetzt ist:

```css
.width {
  mask-size: 50%;
}

.height {
  mask-size: auto 50%;
}
```

Im Fall `width` wird die Maske mit `100px` Breite gerendert (`50%` des `200px` breiten Elements). Die Höhe wird standardmäßig auf `auto` gesetzt und behält das Seitenverhältnis der Maske bei. Im Fall `height` wird die Maske mit `200px` Höhe gerendert (`50%` des `400px` hohen Containers). Die Breite wird explizit auf `auto` gesetzt und behält das Seitenverhältnis der Maske bei.

```css hidden
body {
  display: flex;
  gap: 20px;
}
```

#### Ergebnisse

{{EmbedLiveSample("Setting mask size as a percentage", "", "430px")}}

### Cover und contain

Dieses Beispiel zeigt die Schlüsselwortwerte für `mask-size`.

#### HTML

Drei {{htmlelement("section")}} Elemente sind definiert, jedes mit einem anderen Klassennamen und jedes enthält ein `<div>`.

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

Die `<div>` Elemente sind definiert, um doppelt so hoch wie breit zu sein, mit einem Farbverlaufshintergrund und einer Maske:

```css
div {
  width: 200px;
  height: 400px;
  background: blue linear-gradient(red, blue);
  mask-image: url("/shared-assets/images/examples/mask-star.svg");
}
```

Die `mask-size` von zwei der `<div>` Elemente ist auf einen der Schlüsselwortwerte der Eigenschaft gesetzt. Das dritte `<div>` hat eine `mask-size` von `auto` gesetzt, was die ursprünglichen intrinsischen Dimensionen der Maske demonstriert:

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

Die Eigenschaftswerte werden mithilfe von [generiertem Inhalt](/de/docs/Web/CSS/Guides/Generated_content) angezeigt.

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

{{EmbedLiveSample("Cover and contain", "", "430px")}}

Mit `auto` wird der Stern in seiner intrinsischen `100px` x `100px` Größe angezeigt. Mit `cover` wächst der Stern auf `400px` Höhe, um den gesamten Ursprungsbereich zu bedecken. Mit `contain` wächst der Stern, bis eine Dimension die gleiche Dimension der [Ursprungsbox](/de/docs/Web/CSS/Reference/Properties/mask-origin) erreicht, was bedeutet, dass der Stern so groß wie möglich ist (`200px` breit), aber immer noch darin enthalten ist.

### Wenn die Maske größer als der Container ist

Unter Verwendung des gleichen HTML und CSS wie oben, mit nur einer anderen Ursprungsboxgröße, erforscht dieses Beispiel, was passiert, wenn die Ursprungsbox kleiner als die intrinsischen Dimensionen der Maske ist.

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

Der einzige Unterschied ist die Größe der umschließenden Box (und der generierte Inhalt):

```css
div {
  width: 70px;
  height: 70px;
}
```

{{EmbedLiveSample("When the mask is larger than the container", "", "120px")}}

Der `contain` Wert enthält die Maske innerhalb der Ursprungsbox. Der `cover` Wert deckt sie ab. In beiden Fällen schrumpft die Maske, während das ursprüngliche Seitenverhältnis beibehalten wird. Mit `auto` wird die Maske abgeschnitten, weil die intrinsischen Dimensionen größer als die Boxmaße sind.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("background-size")}}
- {{cssxref("mask")}} Kurzschreibweise
- {{cssxref("mask-image")}}
- {{cssxref("mask-origin")}}
- {{cssxref("mask-position")}}
- {{cssxref("mask-repeat")}}
- {{cssxref("mask-image")}}
- {{cssxref("mask-border")}}
- {{cssxref("background-size")}}
- {{cssxref("mask-border-width")}}
- [Einführung in CSS Maskierung](/de/docs/Web/CSS/Guides/Masking/Introduction)
- [CSS `mask` Eigenschaften](/de/docs/Web/CSS/Guides/Masking/Mask_properties)
- [Mehrere Masken deklarieren](/de/docs/Web/CSS/Guides/Masking/Multiple_masks)
- [CSS-Maskierung](/de/docs/Web/CSS/Guides/Masking) Modul
