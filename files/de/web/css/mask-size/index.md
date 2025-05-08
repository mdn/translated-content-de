---
title: mask-size
slug: Web/CSS/mask-size
l10n:
  sourceCommit: 55fadd3dd555d051279bd316763033ede0d1ed86
---

{{CSSRef}}

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

Die `mask-size`-Eigenschaft akzeptiert eine durch Kommas getrennte Liste von `<bg-size>`-Werten. Ein `<bg-size>`-Wert ist entweder `cover`, `contain`, ein Paar von Werten, die die Breite und Höhe angeben (in dieser Reihenfolge), oder ein einzelner Wert, der die Breite angibt (wobei die Höhe auf `auto` gesetzt wird). Werte umfassen:

- `contain`

  - : Skaliert das Maskenbild nach oben oder unten, während das Seitenverhältnis beibehalten wird, und macht die Maske so groß wie möglich innerhalb ihres Containers, ohne sie zuzuschneiden oder zu strecken.
    Wenn das Maskenbild kleiner als der Container ist, wird die Maske gekachelt oder wiederholt, es sei denn, die {{cssxref("mask-repeat")}}-Eigenschaft wird auf `no-repeat` gesetzt.

- `cover`

  - : Skaliert das Maskenbild auf die kleinstmögliche Größe, um den Container vollständig zu füllen und dabei das Seitenverhältnis beizubehalten. Wenn das Seitenverhältnis des Maskenbilds vom Element abweicht, wird es vertikal oder horizontal beschnitten.

- `auto`

  - : Beibehaltung des ursprünglichen Seitenverhältnisses der Maskenquelle. Wenn sowohl für die Breite als auch die Höhe eingestellt, wird die originale Größe der Maskenressource verwendet. Andernfalls skaliert `auto` das Maskenbild in der entsprechenden Richtung, sodass das ursprüngliche Seitenverhältnis beibehalten wird.

- {{cssxref("&lt;length&gt;")}}

  - : Rendert das Maskenbild in der angegebenen Länge in der entsprechenden Dimension (Breite, wenn als erster oder einziger Wert festgelegt, Höhe, wenn als zweiter Wert festgelegt). Negative Werte sind nicht erlaubt.

- {{cssxref("&lt;percentage&gt;")}}
  - : Rendert das Maskenbild in der entsprechenden Dimension mit dem angegebenen Prozentsatz des Ursprungsbereichs der Box, wie durch die {{cssxref("mask-origin")}}-Eigenschaft definiert, die standardmäßig auf `padding-box` gesetzt ist. Negative Werte sind nicht erlaubt.

## Beschreibung

Die `mask-size`-Eigenschaft wird verwendet, um Maskenschichten zu dimensionieren.

Ein Element kann mehrere Maskenschichten aufweisen. Die Anzahl der Maskenschichten wird durch die Anzahl der durch Kommas getrennten Werte im {{cssxref("mask-image")}}-Eigenschaftswert bestimmt (ein Wert erstellt eine Maskenschicht, auch wenn er `none` ist).

Jeder `mask-size`-Wert in der durch Kommas getrennten Liste von Werten wird mit einer zugehörigen Maskenschicht abgeglichen, wie durch die Liste der `mask-image`-Werte definiert. Wenn die Anzahl der Werte in den beiden Eigenschaften unterschiedlich ist:

- Wenn `mask-size` mehr Werte hat als `mask-image`, werden die überschüssigen Werte von `mask-size` nicht verwendet.
- Wenn `mask-size` weniger Werte hat als `mask-image`, werden die `mask-size`-Werte wiederholt.

Jeder `mask-size`-Wert ist ein `<bg-size>`-Wert. Es gibt drei Möglichkeiten, jedes `<bg-size>` zu deklarieren: ein Schlüsselwort, zwei Längen, Prozentsätze oder das Schlüsselwort `auto`, oder eine Länge, Prozentsatz oder `auto`:

- Die verfügbaren Schlüsselwörter sind `cover` und `contain`.
- Wenn zwei Werte angegeben sind, definiert der erste die Breite der Maske und der zweite ihre Höhe.
- Wenn ein Wert angegeben ist, definiert er nur die Breite der Maske, wobei die Höhe auf `auto` gesetzt wird.

Die Breiten- und Höheneinträge sind ein {{cssxref("&lt;length&gt;")}}, ein {{cssxref("&lt;percentage&gt;")}}, oder das Schlüsselwort `auto`, das der Standard ist. Das Setzen eines oder beider Werte auf `auto` bewahrt das ursprüngliche Seitenverhältnis des Maskenbilds.

Die gerenderte Größe des Maskenbilds wird wie folgt berechnet:

- Wenn beide Komponenten von `mask-size` angegeben und nicht `auto` sind, wird das Maskenbild in der angegebenen Größe gerendert.
- Wenn die `mask-size` `contain` oder `cover` ist, wird das Bild unter Wahrung seines Seitenverhältnisses in der größten Größe gerendert, die innerhalb des oder den Maskenpositionierungsbereich abdeckend. Wenn das Bild keine intrinsische Proportion hat, wie bei Verläufen, wird es in der Größe des Maskenpositionierungsbereichs gerendert.
- Wenn die `mask-size` `auto` ist (was zu `auto auto` aufgelöst wird), wird es in der Größe gerendert, in der die Maske angezeigt würde, wenn kein CSS angewendet würde, um das Rendering zu ändern; dies ist ihre {{Glossary("intrinsic_size", "intrinsische Größe")}}. Wenn sie keine intrinsischen Dimensionen und keine intrinsische Proportion hat, wie es bei [CSS-Verläufen](/de/docs/Web/CSS/gradient) der Fall ist, wird sie in der Größe des Maskenpositionierungsbereichs gerendert, wie durch die {{cssxref("mask-origin")}} (die standardmäßig `border-box` ist) definiert.
  Wenn die Maskenquelle keine Abmessungen hat, aber eine Proportion (Seitenverhältnis), wird ein Wert von `auto` es so rendern, als wäre `contain` angegeben. Wenn das Bild eine intrinsische Dimension und eine Proportion hat, wird es in der durch diese eine Dimension und die Proportion bestimmten Größe gerendert. Wenn das Bild eine intrinsische Dimension hat, aber keine Proportion, wird es unter Verwendung der intrinsischen Dimension und der entsprechenden Dimension des Maskenpositionierungsbereichs gerendert.
- Wenn `mask-size` eine `auto`-Komponente und eine nicht-`auto`-Komponente hat, die auf alle einwertigen Werte angewendet wird, wird das Seitenverhältnis beibehalten, wenn die Maskenquelle eine intrinsische Proportion hat. Wenn es keine intrinsischen Proportionen gibt, wird angenommen, dass der `auto`-Wert die Dimension des Maskenpositionierungsbereichs ist.

Wie bei allen Langform-Komponenten der Kurzform-Eigenschaft, wenn die {{cssxref("mask")}} Kurzform-Eigenschaft gesetzt ist und der Wert der `mask-size`-Eigenschaft nicht innerhalb einer Maskenschicht definiert ist, wird der `mask-size`-Wert für diese Maskenschichten auf seinen Anfangswert `auto` zurückgesetzt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen der Maskengröße als Prozentsatz

Dieses Beispiel zeigt die grundlegende Verwendung, während auch Prozentwerte für `mask-size` demonstriert werden.

#### HTML

Wir fügen zwei {{htmlelement("div")}}-Elemente ein:

```html
<div class="width"></div>
<div class="height"></div>
```

#### CSS

Die `<div>`-Elemente sind definiert, doppelt so hoch wie breit zu sein, mit einem Farbverlauf als Hintergrund und einer Maske:

```css
div {
  width: 200px;
  height: 400px;
  background: blue linear-gradient(red, blue);
  mask-image: url(https://mdn.github.io/shared-assets/images/examples/mdn.svg);
}
```

Die Breite der Maske eines `<div>`-Elements ist auf `50%` gesetzt, wobei die Höhe standardmäßig auf `auto` gesetzt ist. Die Höhe der Maske für das zweite `<div>`-Element ist auf `50%` gesetzt, während die Breite auf `auto` gesetzt ist:

```css
.width {
  mask-size: 50%;
}

.height {
  mask-size: auto 50%;
}
```

Im `width`-Fall wird die Maske `100px` breit gerendert (`50%` des `200px` breiten Elements). Die Höhe wird standardmäßig auf `auto` gesetzt und das Seitenverhältnis der Maske wird beibehalten.
Im `height`-Fall wird die Maske `200px` hoch gerendert (`50%` des `400px` hohen Containers). Die Breite wird explizit auf `auto` gesetzt, um das Seitenverhältnis der Maske beizubehalten.

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

Drei {{htmlelement("section")}}-Elemente sind definiert, jedes mit einem anderen Klassennamen, und jedes enthält ein `<div>`.

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

Die `<div>`-Elemente sind definiert, doppelt so hoch wie breit zu sein, mit einem Farbverlauf als Hintergrund und einer Maske:

```css
div {
  width: 200px;
  height: 400px;
  background: blue linear-gradient(red, blue);
  mask-image: url(https://mdn.github.io/shared-assets/images/examples/mask-star.svg);
}
```

Die `mask-size` von zwei der `<div>`-Elemente ist auf einen der Schlüsselwortwerte der Eigenschaft gesetzt. Das dritte `<div>` hat eine `mask-size` von `auto` gesetzt, um die ursprünglichen intrinsischen Dimensionen der Maske zu demonstrieren:

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

Die Eigenschaftswerte werden mit [generierten Inhalten](/de/docs/Web/CSS/CSS_generated_content) angezeigt.

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

Mit `auto` wird der Stern in seiner intrinsischen Größe von `100px` mal `100px` angezeigt. Mit `cover` wächst der Stern auf `400px` Höhe, um den gesamten Ursprungsbereich zu bedecken. Mit `contain` wächst der Stern, bis eine Dimension gleich der entsprechenden Dimension der [Ursprungsbox](/de/docs/Web/CSS/mask-origin) ist, was bedeutet, dass der Stern so groß wie möglich ist (`200px` breit), aber dennoch darin enthalten ist.

### Wenn die Maske größer als der Container ist

Mit demselben HTML und CSS wie oben, jedoch mit einer anderen Größe des Ursprungsbereichs, wird in diesem Beispiel gezeigt, was passiert, wenn der Ursprungsbereich kleiner als die intrinsischen Abmessungen der Maske ist.

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

Der `contain`-Wert enthält die Maske innerhalb des Ursprungsbereichs. Der `cover`-Wert deckt sie ab. In beiden Fällen schrumpft die Maske unter Beibehaltung des ursprünglichen Seitenverhältnisses. Mit `auto` wird die Maske abgeschnitten, da die intrinsischen Abmessungen größer als die Boxabmessungen sind.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("mask")}} Kurzform
- {{cssxref("mask-image")}}
- {{cssxref("mask-origin")}}
- {{cssxref("mask-position")}}
- {{cssxref("mask-repeat")}}
- {{cssxref("mask-image")}}
- {{cssxref("mask-border")}}
- {{cssxref("background-size")}}
- [CSS Maskierung](/de/docs/Web/CSS/CSS_masking) Modul
