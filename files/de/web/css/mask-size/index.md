---
title: mask-size
slug: Web/CSS/mask-size
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`mask-size`** [CSS](/de/docs/Web/CSS) Eigenschaft gibt die Größen der angegebenen Maskenbilder an. Die Größen der Maskenbilder können vollständig oder teilweise eingeschränkt werden, um ihre {{Glossary("aspect_ratio", "intrinsischen Seitenverhältnisse")}} zu bewahren.

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

Die `mask-size` Eigenschaft akzeptiert eine durch Kommas getrennte Liste von `<bg-size>` Werten. Ein `<bg-size>` Wert ist entweder `cover`, `contain`, ein Wertepaar, das die Breite und Höhe angibt (in dieser Reihenfolge), oder ein einzelner Wert, der die Breite angibt (wobei die Höhe auf `auto` gesetzt wird). Mögliche Werte sind:

- `contain`
  - : Skaliert das Maskenbild nach oben oder unten, während das Seitenverhältnis beibehalten wird, sodass die Maske so groß wie möglich innerhalb ihres Containers ist, ohne sie zuzuschneiden oder zu strecken.
    Wenn das Maskenbild kleiner als der Container ist, wiederholt sich die Maske (kachelt), es sei denn, die {{cssxref("mask-repeat")}} Eigenschaft ist auf `no-repeat` gesetzt.

- `cover`
  - : Skaliert das Maskenbild auf die kleinstmögliche Größe, um den Container auszufüllen, während das Seitenverhältnis beibehalten wird. Wenn das Seitenverhältnis des Maskenbildes vom Element abweicht, wird es vertikal oder horizontal beschnitten.

- `auto`
  - : Bewahrt das ursprüngliche Seitenverhältnis der Maskenquelle. Wenn sowohl für die Breite als auch für die Höhe eingestellt, wird die ursprüngliche Größe der Maskenressource verwendet. Andernfalls skaliert `auto` das Maskenbild in der entsprechenden Richtung so, dass das ursprüngliche Seitenverhältnis beibehalten wird.

- {{cssxref("&lt;length&gt;")}}
  - : Rendert das Maskenbild in der angegebenen Länge in der entsprechenden Dimension (Breite, wenn als erstes oder einziges Wert festgelegt, Höhe, wenn als zweites Wert festgelegt). Negative Werte sind nicht erlaubt.

- {{cssxref("&lt;percentage&gt;")}}
  - : Rendert das Maskenbild in der entsprechenden Dimension auf den angegebenen Prozentsatz der Ursprungsfläche der Box, wie durch die {{cssxref("mask-origin")}} Eigenschaft definiert, die standardmäßig auf `padding-box` steht. Negative Werte sind nicht erlaubt.

## Beschreibung

Die `mask-size` Eigenschaft wird verwendet, um Maskenebenen zu dimensionieren.

Ein Element kann mehrere Maskenebenen haben. Die Anzahl der Maskenebenen wird durch die Anzahl der durch Kommas getrennten Werte in der {{cssxref("mask-image")}} Eigenschaft bestimmt (ein Wert erzeugt eine Maskenebene, selbst wenn es `none` ist).

Jeder `mask-size` Wert in der durch Kommas getrennten Liste von Werten wird mit einer zugehörigen Maskenebene abgeglichen, wie sie durch die Liste der `mask-image` Werte definiert ist, in der Reihenfolge. Wenn die Anzahl der Werte in den beiden Eigenschaften unterschiedlich ist:

- Wenn `mask-size` mehr Werte als `mask-image` hat, werden die überschüssigen Werte von `mask-size` nicht verwendet.
- Wenn `mask-size` weniger Werte als `mask-image` hat, werden die `mask-size` Werte wiederholt.

Jeder `mask-size` Wert ist ein `<bg-size>` Wert. Es gibt drei Möglichkeiten, jedes `<bg-size>` zu deklarieren: ein Schlüsselwort, zwei Längen, Prozentsätze oder das Schlüsselwort `auto`, oder eine Länge, Prozentsatz oder `auto`:

- Die verfügbaren Schlüsselwörter sind `cover` und `contain`.
- Wenn zwei Werte angegeben sind, definiert der erste die Maskenbreite und der zweite die Maskenhöhe.
- Wenn ein Wert angegeben ist, definiert er nur die Maskenbreite, mit der Höhe auf `auto` gesetzt.

Die Breiten- und Höhenwerte sind ein {{cssxref("&lt;length&gt;")}}, ein {{cssxref("&lt;percentage&gt;")}}, oder das Schlüsselwort `auto`, das die Standardeinstellung ist. Wenn ein oder beide Werte auf `auto` gesetzt sind, wird das ursprüngliche Seitenverhältnis des Maskenbildes beibehalten.

Die gerenderte Größe des Maskenbildes wird wie folgt berechnet:

- Wenn beide Komponenten von `mask-size` angegeben sind und nicht `auto` sind, wird das Maskenbild in der angegebenen Größe gerendert.
- Wenn `mask-size` `contain` oder `cover` ist, wird das Bild unter Beibehaltung seines Seitenverhältnisses in der größten Größe gerendert, die im Maskenpositionierungsbereich enthalten ist oder ihn abdeckt. Wenn das Bild keine intrinsischen Proportionen hat, wie bei Verläufen, wird es in der Größe des Maskenpositionierungsbereichs gerendert.
- Wenn `mask-size` `auto` ist (was sich zu `auto auto` auflöst), wird es in der Größe gerendert, in der die Maske angezeigt würde, wenn kein CSS angewendet würde, um die Darstellung zu ändern; dies ist ihre {{Glossary("intrinsic_size", "intrinsische Größe")}}. Wenn sie keine intrinsischen Dimensionen und keine intrinsischen Proportionen hat, wie im Fall von [CSS Verläufen](/de/docs/Web/CSS/gradient), wird sie in der Größe des Maskenpositionierungsbereichs gerendert, definiert durch die {{cssxref("mask-origin")}} (die standardmäßig auf `border-box` steht).
  Wenn die Maskenquelle keine Dimensionen hat, aber eine Proportion (Seitenverhältnis), wird es bei einem Wert von `auto` so gerendert, als ob `contain` angegeben worden wäre. Wenn das Bild eine dimensionale Vorgabe und eine Proportion hat, wird es in der durch diese Dimension und die Proportion bestimmten Größe gerendert. Wenn das Bild eine dimensionale Vorgabe hat, aber keine Proportion, wird es anhand der dimensionalen Vorgabe und der entsprechenden Dimension des Maskenpositionierungsbereichs gerendert.
- Wenn `mask-size` eine `auto` Komponente und eine nicht-`auto` Komponente hat, die für alle Einzelwertwerte gilt, wird, falls die Maskenquelle eine intrinsische Proportion hat, das Seitenverhältnis beibehalten. Wenn keine intrinsischen Proportionen vorhanden sind, wird angenommen, dass der `auto` Wert die Dimension des Maskenpositionierungsbereichs ist.

Wie bei allen Langversion-Komponenten der Kurzform Eigenschaft, wenn die {{cssxref("mask")}} Kurzform Eigenschaft gesetzt ist und der Wert der `mask-size` Eigenschaft innerhalb einer Maskenebene nicht definiert ist, wird der `mask-size` Wert für diese Maskenebenen auf seinen Anfangswert `auto` zurückgesetzt.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Beispiele

### Maskengröße als Prozentsatz festlegen

Dieses Beispiel zeigt die grundlegende Verwendung und demonstriert gleichzeitig Prozentwerte für `mask-size`.

#### HTML

Wir fügen zwei {{htmlelement("div")}} Elemente ein:

```html
<div class="width"></div>
<div class="height"></div>
```

#### CSS

Die `<div>` Elemente werden definiert, um doppelt so hoch wie breit zu sein, mit einem Verlaufshintergrund und einer Maske:

```css
div {
  width: 200px;
  height: 400px;
  background: blue linear-gradient(red, blue);
  mask-image: url(https://mdn.github.io/shared-assets/images/examples/mdn.svg);
}
```

Die Breite einer `<div>` Element-Maske ist auf `50%` gesetzt, wobei die Höhe standardmäßig auf `auto` eingestellt ist. Die Höhe der Maske für das zweite `<div>` Element ist auf `50%` gesetzt, wobei die Breite auf `auto` eingestellt ist:

```css
.width {
  mask-size: 50%;
}

.height {
  mask-size: auto 50%;
}
```

Im `width` Fall wird die Maske `100px` breit (`50%` des `200px` breiten Elements) gerendert. Die Höhe wird standardmäßig auf `auto` gesetzt, was das Seitenverhältnis der Maske beibehält.
Im `height` Fall wird die Maske `200px` hoch (`50%` des `400px` hohen Containers) gerendert. Die Breite ist explizit auf `auto` gesetzt, wodurch das Seitenverhältnis der Maske beibehalten wird.

```css hidden
body {
  display: flex;
  gap: 20px;
}
```

#### Ergebnisse

{{EmbedLiveSample("Maskengröße als Prozentsatz", "", "430px")}}

### Cover und contain

Dieses Beispiel zeigt die Schlüsselwortwerte für `mask-size`.

#### HTML

Drei {{htmlelement("section")}} Elemente werden definiert, jedes mit einem anderen Klassennamen und jedes enthält ein `<div>`.

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

Die `<div>` Elemente werden definiert, um doppelt so hoch wie breit zu sein, mit einem Verlaufshintergrund und einer Maske:

```css
div {
  width: 200px;
  height: 400px;
  background: blue linear-gradient(red, blue);
  mask-image: url(https://mdn.github.io/shared-assets/images/examples/mask-star.svg);
}
```

Die `mask-size` von zwei der `<div>` Elemente ist auf einen der Schlüsselwortwerte der Eigenschaft gesetzt. Das dritte `<div>` hat eine `mask-size` von `auto` gesetzt, die die ursprünglichen intrinsischen Dimensionen der Maske demonstriert:

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

Die Eigenschaftswerte werden mithilfe von [generiertem Inhalt](/de/docs/Web/CSS/CSS_generated_content) angezeigt.

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

Mit `auto` wird der Stern in seiner intrinsischen Größe `100px` mal `100px` angezeigt. Mit `cover` wächst der Stern auf `400px` Höhe, wodurch der gesamte Ursprungsbereich abgedeckt wird. Mit `contain` wächst der Stern, bis eine Dimension der gleichen Dimension des [Ursprungsbereichs](/de/docs/Web/CSS/mask-origin) entspricht, was bedeutet, dass der Stern so groß wie möglich ist (`200px` breit), aber trotzdem darin enthalten ist.

### Wenn die Maske größer als der Container ist

Unter Verwendung des gleichen HTML und CSS wie oben, nur mit einer anderen Ursprungsboxgröße, untersucht dieses Beispiel, was passiert, wenn die Ursprungsbox kleiner als die intrinsischen Dimensionen der Maske ist.

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
  mask-image: url(https://mdn.github.io/shared-assets/images/examples/mask-star.svg);
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

Der einzige Unterschied ist die Größe des umgebenden Kastens (und der generierte Inhalt):

```css
div {
  width: 70px;
  height: 70px;
}
```

{{EmbedLiveSample("Wenn die Maske größer als der Container ist", "", "120px")}}

Der `contain` Wert enthält die Maske innerhalb der Ursprungsbox. Der `cover` Wert bedeckt sie. In beiden Fällen schrumpft die Maske, während das ursprüngliche Seitenverhältnis beibehalten wird. Mit `auto` wird die Maske beschnitten, da die intrinsischen Dimensionen größer als die Boxabmessungen sind.

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
- [Einführung in CSS-Masking](/de/docs/Web/CSS/CSS_masking/Masking)
- [CSS `mask` Eigenschaften](/de/docs/Web/CSS/CSS_masking/Mask_properties)
- [Deklarieren von mehreren Masken](/de/docs/Web/CSS/CSS_masking/Multiple_masks)
- [CSS-Masking](/de/docs/Web/CSS/CSS_masking) Modul
