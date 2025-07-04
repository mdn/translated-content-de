---
title: mask-size
slug: Web/CSS/mask-size
l10n:
  sourceCommit: be28a11d9b2f6ab4ad0e5947e72a13ce16d4a6f2
---

{{CSSRef}}

Die **`mask-size`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Größen der angegebenen Maskenbilder fest. Maskenbildgrößen können vollständig oder teilweise eingeschränkt werden, um ihre {{Glossary("aspect_ratio", "intrinsischen Seitenverhältnisse")}} beizubehalten.

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

Die `mask-size` Eigenschaft akzeptiert eine durch Kommas getrennte Liste von `<bg-size>` Werten. Ein `<bg-size>` Wert ist entweder `cover`, `contain`, ein Paar von Werten, die die Breite und Höhe angeben (in dieser Reihenfolge), oder ein einzelner Wert, der die Breite angibt (in diesem Fall wird die Höhe auf `auto` gesetzt). Werte umfassen:

- `contain`
  - : Skaliert das Maskenbild auf oder ab, während das Seitenverhältnis beibehalten wird, sodass die Maske innerhalb ihres Containers so groß wie möglich ist, ohne sie zu beschneiden oder zu strecken.
    Wenn das Maskenbild kleiner als der Container ist, wird die Maske gekachelt oder wiederholt, es sei denn, die Eigenschaft {{cssxref("mask-repeat")}} ist auf `no-repeat` gesetzt.

- `cover`
  - : Skaliert das Maskenbild auf die kleinste mögliche Größe, um den Container auszufüllen, während das Seitenverhältnis beibehalten wird. Wenn das Seitenverhältnis des Maskenbildes von dem Element abweicht, wird es vertikal oder horizontal beschnitten.

- `auto`
  - : Behält das ursprüngliche Seitenverhältnis der Maskenquelle bei. Wenn für Breite und Höhe festgelegt, wird die Ursprungsgröße der Maskenressource verwendet. Andernfalls skaliert `auto` das Maskenbild in der entsprechenden Richtung so, dass sein ursprüngliches Seitenverhältnis beibehalten wird.

- {{cssxref("&lt;length&gt;")}}
  - : Rendert das Maskenbild in der angegebenen Länge in der entsprechenden Dimension (Breite, wenn als erster oder einziger Wert, Höhe, wenn als zweiter Wert festgelegt). Negative Werte sind nicht erlaubt.

- {{cssxref("&lt;percentage&gt;")}}
  - : Rendert das Maskenbild in der entsprechenden Dimension in dem spezifizierten Prozentsatz des Ursprungsbereichs der Box, wie durch die Eigenschaft {{cssxref("mask-origin")}} definiert, die standardmäßig auf `padding-box` gesetzt ist. Negative Werte sind nicht erlaubt.

## Beschreibung

Die `mask-size` Eigenschaft wird verwendet, um Maskenschichten zu dimensionieren.

Ein Element kann mehrere Maskenschichten haben. Die Anzahl der Maskenschichten wird durch die Anzahl der durch Kommas getrennten Werte im Wert der Eigenschaft {{cssxref("mask-image")}} bestimmt (ein Wert erstellt eine Maskenschicht, selbst wenn er `none` ist).

Jeder `mask-size` Wert in der kommagetrennten Liste von Werten wird mit einer zugehörigen Maskenschicht abgeglichen, wie durch die Liste der `mask-image` Werte definiert. Wenn sich die Anzahl der Werte in den beiden Eigenschaften unterscheidet:

- Wenn `mask-size` mehr Werte hat als `mask-image`, werden die überschüssigen Werte von `mask-size` nicht verwendet.
- Wenn `mask-size` weniger Werte hat als `mask-image`, werden die `mask-size` Werte wiederholt.

Jeder `mask-size` Wert ist ein `<bg-size>` Wert. Es gibt drei Möglichkeiten, jeden `<bg-size>` zu deklarieren: ein Schlüsselwort, zwei Längen, Prozentsätze oder das Schlüsselwort `auto`, oder eine Länge, Prozentzahl oder `auto`:

- Die verfügbaren Schlüsselwörter sind `cover` und `contain`.
- Wenn zwei Werte angegeben sind, definiert der erste die Maskenbreite und der zweite deren Höhe.
- Wenn ein Wert angegeben ist, definiert er nur die Maskenbreite, wobei die Höhe auf `auto` gesetzt wird.

Die Werte für Breite und Höhe sind ein {{cssxref("&lt;length&gt;")}}, ein {{cssxref("&lt;percentage&gt;")}}, oder das Schlüsselwort `auto`, welches der Standard ist. Wenn ein oder beide Werte auf `auto` gesetzt sind, bleibt das ursprüngliche Seitenverhältnis des Maskenbildes erhalten.

Die gerenderte Größe des Maskenbildes wird wie folgt berechnet:

- Wenn beide Komponenten von `mask-size` spezifiziert sind und nicht `auto` sind, wird das Maskenbild in der angegebenen Größe gerendert.
- Wenn die `mask-size` `contain` oder `cover` ist, wird das Bild unter Beibehaltung seines Seitenverhältnisses in der größten Größe innerhalb des oder über den Maskenpositionierungsbereich hinausgehend gerendert. Wenn das Bild keine intrinsische Proportion hat, wie etwa bei Verläufen, wird es in der Größe des Maskenpositionierungsbereichs gerendert.
- Wenn die `mask-size` `auto` ist (was sich zu `auto auto` auflöst), wird es in der Größe gerendert, in der die Maske angezeigt würde, wenn keine CSS angewendet würde, um die Darstellung zu ändern; dies ist ihre {{Glossary("intrinsic_size", "intrinsische Größe")}}. Wenn es keine intrinsischen Dimensionen und keine intrinsische Proportion hat, wie es bei [CSS-Verläufen](/de/docs/Web/CSS/gradient) der Fall ist, wird es in der Größe des Maskenpositionierungsbereichs gerendert, definiert durch die {{cssxref("mask-origin")}} (die standardmäßig auf `border-box` gesetzt ist).
  Wenn die Maskenquelle keine Dimensionen, aber eine Proportion (Seitenverhältnis) hat, wird ein Wert von `auto` es rendern, als ob `contain` stattdessen angegeben wurde. Wenn das Bild eine intrinsische Dimension und eine Proportion hat, wird es in der durch diese Dimension und die Proportion bestimmten Größe gerendert. Wenn das Bild eine intrinsische Dimension, aber keine Proportion hat, wird es mit der intrinsischen Dimension und der entsprechenden Dimension des Maskenpositionierungsbereichs gerendert.
- Wenn `mask-size` eine `auto` Komponente und eine nicht-`auto` Komponente hat, was für alle Einzelwertwerte gilt, wird das Seitenverhältnis beibehalten, wenn die Maskenquelle eine intrinsische Proportion hat. Wenn keine intrinsischen Proportionen vorliegen, wird der `auto` Wert als Dimension des Maskenpositionierungsbereichs angenommen.

Wie bei allen Langformkomponenten der Kurzform-Eigenschaft, wenn die {{cssxref("mask")}} Kurzform-Eigenschaft gesetzt ist und der Wert der `mask-size` Eigenschaft nicht innerhalb einer Maskenschicht definiert ist, wird der `mask-size` Wert für diese Maskenschichten auf seinen Anfangswert von `auto` zurückgesetzt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Maskengröße als Prozentsatz festlegen

Dieses Beispiel zeigt die grundlegende Verwendung, während es auch Prozentwerte für `mask-size` demonstriert.

#### HTML

Wir inkludieren zwei {{htmlelement("div")}} Elemente:

```html
<div class="width"></div>
<div class="height"></div>
```

#### CSS

Die `<div>` Elemente sind so definiert, dass sie doppelt so hoch wie breit sind, mit einem Verlaufs-Hintergrund und Maske:

```css
div {
  width: 200px;
  height: 400px;
  background: blue linear-gradient(red, blue);
  mask-image: url(https://mdn.github.io/shared-assets/images/examples/mdn.svg);
}
```

Die Breite der Maske eines `<div>` Elements ist auf `50%` gesetzt, wobei die Höhe standardmäßig auf `auto` gesetzt wird. Die Höhe der Maske für das zweite `<div>` Element ist auf `50%` gesetzt, mit der Breite auf `auto`:

```css
.width {
  mask-size: 50%;
}

.height {
  mask-size: auto 50%;
}
```

Im `width` Fall wird die Maske mit `100px` Breite (`50%` des `200px` breiten Elements) gerendert. Die Höhe wird auf `auto` gesetzt, wodurch das Seitenverhältnis der Maske beibehalten wird.
Im `height` Fall wird die Maske mit `200px` Höhe (`50%` des `400px` hohen Containers) gerendert. Die Breite wird explizit auf `auto` gesetzt, wodurch das Seitenverhältnis der Maske beibehalten wird.

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

Drei {{htmlelement("section")}} Elemente sind definiert, jedes mit einem anderen Klassennamen, und jedes enthält ein `<div>`.

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

Die `<div>` Elemente sind so definiert, dass sie doppelt so hoch wie breit sind, mit einem Verlaufs-Hintergrund und Maske:

```css
div {
  width: 200px;
  height: 400px;
  background: blue linear-gradient(red, blue);
  mask-image: url(https://mdn.github.io/shared-assets/images/examples/mask-star.svg);
}
```

Das `mask-size` von zwei der `<div>` Elemente ist auf einen der Schlüsselwortwerte der Eigenschaft gesetzt. Das dritte `<div>` hat ein `mask-size` von `auto`, das die ursprünglichen intrinsischen Dimensionen der Maske demonstriert:

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

Die Eigenschaftswerte werden unter Verwendung von [generiertem Inhalt](/de/docs/Web/CSS/CSS_generated_content) angezeigt.

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

Mit `auto` wird der Stern in seiner intrinsischen Größe von `100px` mal `100px` angezeigt. Mit `cover` wächst der Stern auf `400px` Höhe, um die gesamte Ursprungsbox zu bedecken. Mit `contain` wächst der Stern, bis eine Dimension mit der gleichen Dimension der [Ursprungsbox](/de/docs/Web/CSS/mask-origin) übereinstimmt, was bedeutet, dass der Stern so groß wie möglich ist (`200px` breit), aber immer noch darin enthalten ist.

### Wenn die Maske größer als der Container ist

Unter Verwendung desselben HTML und CSS wie oben, jedoch mit einer anderen Ursprungsbox-Größe, untersucht dieses Beispiel, was passiert, wenn die Ursprungsbox kleiner als die intrinsischen Dimensionen der Maske ist.

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

Der einzige Unterschied ist die Größe der umgebenden Box (und der generierte Inhalt):

```css
div {
  width: 70px;
  height: 70px;
}
```

{{EmbedLiveSample("When the mask is larger than the container", "", "120px")}}

Der `contain` Wert behält die Maske innerhalb der Ursprungsbox. Der `cover` Wert bedeckt sie. In beiden Fällen schrumpft die Maske, während das ursprüngliche Seitenverhältnis beibehalten wird. Mit `auto` wird die Maske abgeschnitten, da die intrinsischen Dimensionen größer als die Box-Dimensionen sind.

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
- [Einführung in CSS-Maskierung](/de/docs/Web/CSS/CSS_masking/Masking)
- [CSS `mask` Eigenschaften](/de/docs/Web/CSS/CSS_masking/Mask_properties)
- [Deklarieren mehrerer Masken](/de/docs/Web/CSS/CSS_masking/Multiple_masks)
- [CSS-Maskierung](/de/docs/Web/CSS/CSS_masking) Modul
