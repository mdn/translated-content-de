---
title: mask-size
slug: Web/CSS/mask-size
l10n:
  sourceCommit: 9944f7b12ef1a6aecd54d4b2f0c188a82fdeaaf0
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

Die `mask-size` Eigenschaft akzeptiert eine durch Kommas getrennte Liste von `<bg-size>` Werten. Ein `<bg-size>` Wert ist entweder `cover`, `contain`, ein Paar von Werten, die die Breite und Höhe angeben (in dieser Reihenfolge), oder ein einzelner Wert, der die Breite angibt (in diesem Fall wird die Höhe auf `auto` gesetzt). Werte umfassen:

- `contain`
  - : Skaliert das Maskenbild auf oder ab und bewahrt dabei das Seitenverhältnis, sodass die Maske so groß wie möglich innerhalb ihres Containers ist, ohne sie zu beschneiden oder zu strecken. Wenn das Maskenbild kleiner als der Container ist, wird die Maske gekachelt oder wiederholt, es sei denn, die {{cssxref("mask-repeat")}} Eigenschaft ist auf `no-repeat` gesetzt.

- `cover`
  - : Skaliert das Maskenbild auf die kleinstmögliche Größe, um den Container zu füllen, während das Seitenverhältnis bewahrt wird. Wenn das Seitenverhältnis des Maskenbildes von dem des Elements abweicht, wird es vertikal oder horizontal beschnitten.

- `auto`
  - : Behält das ursprüngliche Seitenverhältnis der Maskenquelle bei. Wenn sowohl für die Breite als auch für die Höhe eingestellt ist, wird die ursprüngliche Größe der Maskenressource verwendet. Andernfalls skaliert `auto` das Maskenbild in der entsprechenden Richtung, sodass das ursprüngliche Seitenverhältnis beibehalten wird.

- {{cssxref("&lt;length&gt;")}}
  - : Rendert das Maskenbild in der angegebenen Länge in der entsprechenden Dimension (Breite, wenn als erster oder einziger Wert festgelegt, Höhe, wenn als zweiter Wert festgelegt). Negative Werte sind nicht zulässig.

- {{cssxref("&lt;percentage&gt;")}}
  - : Rendert das Maskenbild in der entsprechenden Dimension auf den angegebenen Prozentsatz des Ursprungsbereichs der Box, wie durch die {{cssxref("mask-origin")}} Eigenschaft definiert, die standardmäßig auf `padding-box` eingestellt ist. Negative Werte sind nicht zulässig.

## Beschreibung

Die `mask-size` Eigenschaft wird verwendet, um Maskenschichten zu skalieren.

Ein Element kann mehrere Maskenschichten haben. Die Anzahl der Maskenschichten wird durch die Anzahl der durch Kommas getrennten Werte in der {{cssxref("mask-image")}} Eigenschaft bestimmt (ein Wert erstellt eine Maskenschicht, auch wenn er `none` ist).

Jeder `mask-size` Wert in der durch Kommas getrennten Liste von Werten wird mit einer zugehörigen Maskenschicht abgeglichen, wie durch die Liste der `mask-image` Werte definiert. Wenn die Anzahl der Werte in den beiden Eigenschaften unterschiedlich ist:

- Wenn `mask-size` mehr Werte hat als `mask-image`, werden die überschüssigen Werte von `mask-size` nicht verwendet.
- Wenn `mask-size` weniger Werte hat als `mask-image`, werden die `mask-size` Werte wiederholt.

Jeder `mask-size` Wert ist ein `<bg-size>` Wert. Es gibt drei Möglichkeiten, jeden `<bg-size>` zu deklarieren: ein Schlüsselwort, zwei Längen, Prozente oder das Schlüsselwort `auto`, oder eine Länge, Prozente oder `auto`:

- Die verfügbaren Schlüsselwörter sind `cover` und `contain`.
- Wenn zwei Werte angegeben sind, definiert der erste die Maskenbreite und der zweite ihre Höhe.
- Wenn ein Wert angegeben ist, definiert er nur die Maskenbreite, wobei die Höhe auf `auto` gesetzt ist.

Die Breiten- und Höhenwerte sind eine {{cssxref("&lt;length&gt;")}}, ein {{cssxref("&lt;percentage&gt;")}}, oder das Schlüsselwort `auto`, welches der Standard ist. Das Setzen eines oder beider Werte auf `auto` bewahrt das ursprüngliche Seitenverhältnis des Maskenbildes.

Die gerenderte Größe des Maskenbildes wird wie folgt berechnet:

- Wenn beide Komponenten von `mask-size` angegeben sind und nicht `auto` sind, wird das Maskenbild in der angegebenen Größe gerendert.
- Wenn `mask-size` `contain` oder `cover` ist, wird das Bild durch Beibehaltung seines Seitenverhältnisses in der größten Größe gerendert, die innerhalb oder außerhalb des Maskenpositionierungsbereichs enthalten ist. Wenn das Bild keine intrinsische Proportion hat, wie z.B. bei Verläufen, wird es in der Größe des Maskenpositionierungsbereichs gerendert.
- Wenn `mask-size` `auto` ist (was zu `auto auto` aufgelöst wird), wird es in der Größe gerendert, in der die Maske angezeigt würde, wenn kein CSS angewendet würde, um die Darstellung zu ändern; dies ist seine {{Glossary("intrinsic_size", "intrinsische Größe")}}. Wenn es keine intrinsischen Dimensionen und keine intrinsische Proportion hat, wie es bei [CSS Verläufen](/de/docs/Web/CSS/gradient) der Fall ist, wird es in der Größe des Maskenpositionierungsbereichs gerendert, definiert durch die {{cssxref("mask-origin")}} (was standardmäßig auf `border-box` eingestellt ist). Wenn die Maskenquelle keine Dimensionen hat, aber eine Proportion (Seitenverhältnis) hat, wird ein Wert von `auto` es rendern, als ob `contain` angegeben worden wäre. Wenn das Bild eine intrinsische Dimension und eine Proportion hat, wird es in der durch diese Dimension bestimmte Größe gerendert. Wenn das Bild eine intrinsische Dimension, aber keine Proportion hat, wird es unter Verwendung der intrinsischen Dimension und der entsprechenden Dimension des Maskenpositionierungsbereichs gerendert.
- Wenn `mask-size` eine `auto` Komponente und eine nicht-`auto` Komponente hat, was für alle einwertigen Werte zutrifft, wird das Seitenverhältnis beibehalten, wenn die Maskenquelle eine intrinsische Proportion hat. Wenn es keine intrinsischen Proportionen gibt, wird der `auto` Wert als Dimension des Maskenpositionierungsbereichs angenommen.

Wie bei allen Langhand-Komponenten einer Kurzform-Eigenschaft, wenn die {{cssxref("mask")}} Kurzform-Eigenschaft gesetzt ist und der Wert der `mask-size` Eigenschaft in keiner Maskenschicht definiert ist, wird der `mask-size` Wert für diese Maskenschichten auf den Anfangswert `auto` zurückgesetzt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Setzen der Maskengröße als Prozentsatz

Dieses Beispiel zeigt die grundlegende Verwendung und zeigt gleichzeitig Prozentwerte für `mask-size`.

#### HTML

Wir fügen zwei {{htmlelement("div")}} Elemente hinzu:

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

Die Breite der Maske eines `<div>` Elements wird auf `50%` gesetzt, wobei die Höhe standardmäßig auf `auto` gesetzt wird. Die Maskenhöhe für das zweite `<div>` Element wird auf `50%` gesetzt, wobei die Breite auf `auto` gesetzt wird:

```css
.width {
  mask-size: 50%;
}

.height {
  mask-size: auto 50%;
}
```

Im `width` Fall wird die Maske `100px` breit gerendert (`50%` des `200px` breiten Elements). Die Höhe bleibt auf `auto` eingestellt, was das Seitenverhältnis der Maske erhält. Im `height` Fall wird die Maske `200px` hoch gerendert (`50%` des `400px` hohen Containers). Die Breite wird explizit auf `auto` gesetzt, was das Seitenverhältnis der Maske erhält.

```css hidden
body {
  display: flex;
  gap: 20px;
}
```

#### Ergebnisse

{{EmbedLiveSample("Setzen der Maskengröße als Prozentsatz", "", "430px")}}

### Cover und contain

Dieses Beispiel zeigt die Schlüsselwortwerte für `mask-size`.

#### HTML

Drei {{htmlelement("section")}} Elemente werden definiert, jedes mit einem anderen Klassennamen, und jedes enthält ein `<div>`.

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

Die `<div>` Elemente werden definiert, doppelt so hoch wie breit zu sein, mit einem Verlaufs-Hintergrund und einer Maske:

```css
div {
  width: 200px;
  height: 400px;
  background: blue linear-gradient(red, blue);
  mask-image: url("/shared-assets/images/examples/mask-star.svg");
}
```

Die `mask-size` von zwei der `<div>` Elemente wird auf einen der Schlüsselwortwerte der Eigenschaft gesetzt. Das dritte `<div>` hat einen `mask-size` Wert von `auto`, der die ursprünglichen intrinsischen Dimensionen der Maske demonstriert:

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

Die Eigenschaftswerte werden mit [generiertem Inhalt](/de/docs/Web/CSS/CSS_generated_content) dargestellt.

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

Mit `auto` wird der Stern in seiner intrinsischen `100px` x `100px` Größe angezeigt. Mit `cover` wächst der Stern auf `400px` Höhe, um die gesamte Ursprung-Box zu bedecken. Mit `contain` wächst der Stern, bis eine Dimension der gleichen Dimension der [Ursprungsbox](/de/docs/Web/CSS/mask-origin) entspricht, das bedeutet, dass der Stern so groß wie möglich ist (`200px` breit), aber immer noch enthalten ist.

### Wenn die Maske größer als der Container ist

Mit denselben HTML- und CSS-Dateien wie oben, jedoch mit einer anderen Ursprungsbox-Größe, untersucht dieses Beispiel, was passiert, wenn die Ursprungsbox kleiner als die intrinsischen Dimensionen der Maske ist.

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

Der einzige Unterschied besteht in der Größe der umgebenden Box (und dem generierten Inhalt):

```css
div {
  width: 70px;
  height: 70px;
}
```

{{EmbedLiveSample("Wenn die Maske größer als der Container ist", "", "120px")}}

Der `contain` Wert hält die Maske innerhalb der Ursprungsbox. Der `cover` Wert bedeckt sie. In beiden Fällen schrumpft die Maske, während das ursprüngliche Seitenverhältnis erhalten bleibt. Mit `auto` wird die Maske abgeschnitten, da die intrinsischen Dimensionen größer als die Box-Dimensionen sind.

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
