---
title: mask-size
slug: Web/CSS/Reference/Properties/mask-size
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Die **`mask-size`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Größen der angegebenen Maskenbilder fest. Maskenbildgrößen können vollständig oder teilweise eingeschränkt werden, um ihre {{Glossary("aspect_ratio", "intrinsischen Seitenverhältnisse")}} zu bewahren.

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

Die `mask-size` Eigenschaft akzeptiert eine durch Kommata getrennte Liste von `<bg-size>` Werten. Ein `<bg-size>` Wert ist entweder `cover`, `contain`, ein Paar von Werten, die die Breite und Höhe angeben (in dieser Reihenfolge), oder ein einzelner Wert, der die Breite angibt (in diesem Fall wird die Höhe auf `auto` gesetzt). Werte umfassen:

- `contain`
  - : Skaliert das Maskenbild nach oben oder unten, während das Seitenverhältnis beibehalten wird, sodass die Maske so groß wie möglich innerhalb ihres Containers ist, ohne sie zu beschneiden oder zu strecken.
    Wenn das Maskenbild kleiner als der Container ist, wird die Maske gekachelt oder wiederholt, es sei denn, die Eigenschaft {{cssxref("mask-repeat")}} ist auf `no-repeat` gesetzt.

- `cover`
  - : Skaliert das Maskenbild auf die kleinste mögliche Größe, um den Container auszufüllen, während das Seitenverhältnis beibehalten wird. Wenn das Seitenverhältnis des Maskenbildes von dem des Elements abweicht, wird es vertikal oder horizontal beschnitten.

- `auto`
  - : Beibehaltung des ursprünglichen Seitenverhältnisses der Maskenquelle. Wenn sowohl für die Breite als auch für die Höhe eingestellt, wird die Ursprungsgöße der Maskenressource verwendet. Andernfalls skaliert `auto` das Maskenbild in der entsprechenden Richtung, sodass das ursprüngliche Seitenverhältnis beibehalten wird.

- {{cssxref("&lt;length&gt;")}}
  - : Rendert das Maskenbild in der angegebenen Länge in der entsprechenden Dimension (Breite, wenn als erster oder einziger Wert gesetzt, Höhe, wenn als zweiter Wert gesetzt). Negative Werte sind nicht erlaubt.

- {{cssxref("&lt;percentage&gt;")}}
  - : Rendert das Maskenbild in der entsprechenden Dimension als Prozentsatz der Box-Ursprungsfläche, wie durch die Eigenschaft {{cssxref("mask-origin")}} definiert, die standardmäßig auf `padding-box` gesetzt ist. Negative Werte sind nicht erlaubt.

## Beschreibung

Die `mask-size` Eigenschaft wird verwendet, um Maskenschichten zu dimensionieren.

Ein Element kann mehrere Maskenschichten haben. Die Anzahl der Maskenschichten ergibt sich aus der Anzahl der durch Kommas getrennten Werte im Wert der Eigenschaft {{cssxref("mask-image")}} (ein Wert erstellt eine Maskenschicht, selbst wenn er auf `none` gesetzt ist).

Jeder `mask-size` Wert in der Liste der durch Kommata getrennten Werte wird mit einer zugeordneten Maskenschicht gemäß der Liste der `mask-image` Werte in der Reihenfolge abgeglichen. Wenn die Anzahl der Werte in den beiden Eigenschaften unterschiedlich ist:

- Wenn `mask-size` mehr Werte als `mask-image` hat, werden die überschüssigen Werte von `mask-size` nicht verwendet.
- Wenn `mask-size` weniger Werte als `mask-image` hat, werden die `mask-size` Werte wiederholt.

Jeder `mask-size` Wert ist ein `<bg-size>` Wert. Es gibt drei Möglichkeiten, jeden `<bg-size>` zu deklarieren: ein Schlüsselwort, zwei Längen, Prozentsätze oder das Schlüsselwort `auto`, oder eine Länge, ein Prozentsatz oder `auto`:

- Die verfügbaren Schlüsselwörter sind `cover` und `contain`.
- Wenn zwei Werte angegeben sind, definiert der erste die Maskenbreite und der zweite die Höhe.
- Wenn ein Wert angegeben ist, definiert er nur die Maskenbreite, wobei die Höhe auf `auto` gesetzt ist.

Die Breiten- und Höhenwerte sind ein {{cssxref("&lt;length&gt;")}}, ein {{cssxref("&lt;percentage&gt;")}}, oder das `auto` Schlüsselwort, welches der Standard ist. Das Setzen eines oder beider Werte auf `auto` bewahrt das ursprüngliche Seitenverhältnis des Maskenbildes.

Die gerenderte Größe des Maskenbildes wird wie folgt berechnet:

- Wenn beide Komponenten von `mask-size` angegeben und nicht `auto` sind, wird das Maskenbild in der angegebenen Größe gerendert.
- Wenn `mask-size` `contain` oder `cover` ist, wird das Bild unter Beibehaltung seines Seitenverhältnisses in der größtmöglichen Größe innerhalb der oder die Maskenplatzierungsfläche ausfüllend gerendert. Wenn das Bild keine intrinsische Proportion hat, wie z.B. bei Verläufen, wird es in der Größe der Maskenpositionierungsfläche gerendert.
- Wenn `mask-size` `auto` ist (was zu `auto auto` aufgelöst wird), wird es in der Größe dargestellt, in der die Maske angezeigt würde, wenn kein CSS angewendet worden wäre, um das Rendering zu ändern; dies ist seine {{Glossary("intrinsic_size", "intrinsische Größe")}}. Falls sie keine intrinsischen Dimensionen und keine intrinsische Proportion hat, wie es bei [CSS-Gradienten](/de/docs/Web/CSS/Reference/Values/gradient) der Fall ist, wird sie in der Größe der durch die {{cssxref("mask-origin")}} definierten Maskenpositionierungsfläche dargestellt (die standardmäßig auf `border-box` gesetzt ist).
  Wenn die Maskenquelle keine Dimensionen, aber eine Proportion (Seitenverhältnis) hat, wird ein `auto` Wert es so darstellen, als ob `contain` stattdessen angegeben worden wäre. Hat das Bild eine intrinsische Dimension und eine Proportion, wird es in der Größe gerendert, die durch diese eine Dimension und die Proportion bestimmt ist. Hat das Bild eine intrinsische Dimension, aber keine Proportion, wird es mit der intrinsischen Dimension und der entsprechenden Dimension der Maskenpositionierungsfläche gerendert.
- Wenn `mask-size` eine `auto` Komponente und eine Nicht-`auto` Komponente hat, was auf alle Einzelwertwerte zutrifft, wird das Seitenverhältnis beibehalten, wenn die Maskenquelle eine intrinsische Proportion hat. Wenn es keine intrinsischen Proportionen gibt, wird der `auto` Wert angenommen, die Dimension der Maskenpositionierungsfläche zu sein.

Wie bei allen Langhandkomponenten der Shorthand-Eigenschaft, wenn die {{cssxref("mask")}} Shorthand-Eigenschaft gesetzt ist und der Wert der `mask-size` Eigenschaft in keiner Maskenschicht definiert ist, wird der `mask-size` Wert auf seinen Anfangswert von `auto` für diese Maskenschichten zurückgesetzt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Maskengröße als Prozentsatz festlegen

Dieses Beispiel demonstriert die grundlegende Nutzung und die Verwendung von Prozentwerten für `mask-size`.

#### HTML

Wir fügen zwei {{htmlelement("div")}} Elemente ein:

```html
<div class="width"></div>
<div class="height"></div>
```

#### CSS

Die `<div>` Elemente sind definiert, doppelt so hoch wie breit zu sein, mit einem Verlaufs-Hintergrund und einer Maske:

```css
div {
  width: 200px;
  height: 400px;
  background: blue linear-gradient(red, blue);
  mask-image: url("/shared-assets/images/examples/mdn.svg");
}
```

Die Breite der Maske eines `<div>` Elements ist auf `50%` eingestellt, wobei die Höhe auf `auto` voreingestellt ist. Die Maskenhöhe des zweiten `<div>` Elements ist auf `50%` gesetzt, wobei die Breite auf `auto` gesetzt ist:

```css
.width {
  mask-size: 50%;
}

.height {
  mask-size: auto 50%;
}
```

Im `width`-Fall wird die Maske mit `100px` Breite (`50%` des `200px` breiten Elements) gerendert. Die Höhe stellt sich auf `auto` ein und bewahrt das Seitenverhältnis der Maske.
Im `height`-Fall wird die Maske `200px` hoch gerendert (`50%` des `400px` hohen Containers). Die Breite ist explizit auf `auto` eingestellt und bewahrt das Seitenverhältnis der Maske.

```css hidden
body {
  display: flex;
  gap: 20px;
}
```

#### Ergebnisse

{{EmbedLiveSample("Maskengröße als Prozentsatz festlegen", "", "430px")}}

### Cover und Contain

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

Die `<div>` Elemente sind definiert, doppelt so hoch wie breit zu sein, mit einem Verlaufs-Hintergrund und einer Maske:

```css
div {
  width: 200px;
  height: 400px;
  background: blue linear-gradient(red, blue);
  mask-image: url("/shared-assets/images/examples/mask-star.svg");
}
```

Die `mask-size` von zwei der `<div>` Elemente ist auf einen der Schlüsselwortwerte der Eigenschaft eingestellt. Das dritte `<div>` hat eine `mask-size` von `auto`, die die ursprünglichen intrinsischen Dimensionen der Maske demonstriert:

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

{{EmbedLiveSample("Cover und Contain", "", "430px")}}

Mit `auto` wird der Stern in seiner intrinsischen `100px` mal `100px` Größe angezeigt. Mit `cover` wächst der Stern auf `400px` Höhe, sodass er das gesamte Ursprungskastens abdeckt. Mit `contain` wächst der Stern, bis eine Dimension dieselbe Dimension des [Ursprungskastens](/de/docs/Web/CSS/Reference/Properties/mask-origin) erreicht, was bedeutet, dass der Stern so groß wie möglich ist (`200px` breit), aber dennoch darin enthalten.

### Wenn die Maske größer als der Container ist

Mit demselben HTML und CSS wie oben, nur mit einer anderen Größe des Ursprungskastens, untersucht dieses Beispiel, was passiert, wenn der Ursprungskasten kleiner als die intrinsischen Dimensionen der Maske ist.

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

Der einzige Unterschied ist die Größe des enthaltenen Kastens (und der generierte Inhalt):

```css
div {
  width: 70px;
  height: 70px;
}
```

{{EmbedLiveSample("Wenn die Maske größer als der Container ist", "", "120px")}}

Der `contain` Wert enthält die Maske innerhalb des Ursprungskastens. Der `cover` Wert deckt ihn ab. In beiden Fällen schrumpft die Maske, während das ursprüngliche Seitenverhältnis beibehalten wird. Mit `auto` wird die Maske abgeschnitten, da die intrinsischen Dimensionen größer als die Box-Dimensionen sind.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("background-size")}}
- {{cssxref("mask")}} Shorthand
- {{cssxref("mask-image")}}
- {{cssxref("mask-origin")}}
- {{cssxref("mask-position")}}
- {{cssxref("mask-repeat")}}
- {{cssxref("mask-image")}}
- {{cssxref("mask-border")}}
- {{cssxref("background-size")}}
- {{cssxref("mask-border-width")}}
- [Einführung in das CSS-Masking](/de/docs/Web/CSS/CSS_masking/Masking)
- [CSS `mask` Eigenschaften](/de/docs/Web/CSS/CSS_masking/Mask_properties)
- [Deklarieren mehrerer Masken](/de/docs/Web/CSS/CSS_masking/Multiple_masks)
- [CSS-Masking](/de/docs/Web/CSS/CSS_masking) Modul
