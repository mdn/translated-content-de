---
title: mask-size
slug: Web/CSS/mask-size
l10n:
  sourceCommit: 75326725db2daa924618e58ae31a43345c7a16dc
---

{{CSSRef}}

Die **`mask-size`** [CSS](/de/docs/Web/CSS) Eigenschaft spezifiziert die Größen der Maskenbilder. Die Größe des Bildes kann vollständig oder teilweise eingeschränkt werden, um sein intrinsisches Seitenverhältnis zu bewahren.

> [!NOTE]
> Wenn der Wert dieser Eigenschaft nicht in einer {{cssxref("mask")}} Kurzschreibweise gesetzt ist, die auf das Element nach der `mask-size` CSS-Eigenschaft angewendet wird, wird der Wert dieser Eigenschaft durch die Kurzschreibweise auf seinen Anfangswert zurückgesetzt.

## Syntax

```css
/* Keywords syntax */
mask-size: cover;
mask-size: contain;

/* One-value syntax */
/* the width of the image (height set to 'auto') */
mask-size: 50%;
mask-size: 3em;
mask-size: 12px;
mask-size: auto;

/* Two-value syntax */
/* first value: width of the image, second value: height */
mask-size: 50% auto;
mask-size: 3em 25%;
mask-size: auto 6px;
mask-size: auto auto;

/* Multiple values */
/* Do not confuse this with mask-size: auto auto */
mask-size: auto, auto;
mask-size: 50%, 25%, 25%;
mask-size: 6px, auto, contain;

/* Global values */
mask-size: inherit;
mask-size: initial;
mask-size: revert;
mask-size: revert-layer;
mask-size: unset;
```

Ein oder mehrere `<bg-size>` Werte, durch Kommas getrennt.

Ein `<bg-size>` kann auf eine von drei Arten angegeben werden:

- mit dem Schlüsselwort `contain`
- mit dem Schlüsselwort `cover`
- unter Verwendung von Breiten- und Höhenwerten

Um eine Größe mit Breite und Höhe anzugeben, können Sie ein oder zwei Werte angeben:

- Wenn nur ein Wert angegeben wird, stellt er die Breite ein, wobei die Höhe auf `auto` gesetzt wird.
- Wenn zwei Werte angegeben werden, legt der erste die Breite fest und der zweite die Höhe.

Jeder Wert kann eine `<length>`, ein `<percentage>` oder `auto` sein.

### Werte

- `<length>`
  - : Ein {{cssxref("&lt;length&gt;")}} Wert skaliert das Maskenbild auf die angegebene Länge in der entsprechenden Dimension. Negative Längen sind nicht erlaubt.
- `<percentage>`
  - : Ein {{cssxref("&lt;percentage&gt;")}} Wert skaliert das Maskenbild in der entsprechenden Dimension auf den angegebenen Prozentsatz des Maskenpositionierungsbereichs, der durch den Wert von {{cssxref("mask-origin")}} bestimmt wird. Der Maskenpositionierungsbereich ist standardmäßig der Bereich, der den Inhalt der Box und ihr Padding enthält; der Bereich kann auch nur auf den Inhalt oder auf den Bereich mit Rahmen, Padding und Inhalt geändert werden. Negative Prozentsätze sind nicht erlaubt.
- `auto`
  - : Ein Schlüsselwort, das das Maskenbild in den entsprechenden Richtungen skaliert, um seine intrinsische Proportion zu bewahren.
- `contain`
  - : Ein Schlüsselwort, das das Bild so groß wie möglich skaliert und das Seitenverhältnis des Bildes beibehält (das Bild wird nicht verzerrt). Das Bild wird innerhalb des Containers _eingeblendet_. Das Bild wird automatisch zentriert, es sei denn, es wird durch eine andere Eigenschaft wie {{cssxref("mask-position")}} überschrieben.
- `cover`
  - : Ein Schlüsselwort, das das Gegenteil von `contain` ist. Skaliert das Bild so groß wie möglich und hält das Seitenverhältnis des Bildes bei (das Bild wird nicht verzerrt). Das Bild "deckt" die gesamte Breite oder Höhe des Containers ab. Wenn das Bild und der Container unterschiedliche Dimensionen haben, wird _das Bild abgeschnitten_, entweder links/rechts oder oben/unten.

Die Interpretation der möglichen Werte hängt von den intrinsischen Dimensionen (Breite und Höhe) und der intrinsischen Proportion (Verhältnis von Breite zu Höhe) des Bildes ab. Ein Bitmap-Bild hat immer intrinsische Dimensionen und eine intrinsische Proportion. Ein Vektorgrafikbild kann sowohl intrinsische Dimensionen als auch damit eine intrinsische Proportion haben. Es kann auch eine oder keine intrinsische Dimension haben und in beiden Fällen möglicherweise eine intrinsische Proportion haben oder nicht. Verläufe werden als Bilder ohne intrinsische Dimensionen oder intrinsische Proportion betrachtet.

Die gerenderte Größe des Maskenbildes wird dann wie folgt berechnet:

- Wenn beide Komponenten von `mask-size` angegeben sind und nicht `auto` sind:
  - : Das Maskenbild wird in der angegebenen Größe gerendert.
- Wenn das `mask-size` `contain` oder `cover` ist:
  - : Das Bild wird gerendert, indem die intrinsische Proportion in der größten Größe beibehalten wird, die in den oder den Maskenpositionierungsbereich passt. Wenn das Bild keine intrinsische Proportion hat, wird es in der Größe des Maskenpositionierungsbereichs gerendert.
- Wenn das `mask-size` `auto` oder `auto auto` ist:
  - : Wenn das Bild sowohl intrinsische Dimensionen hat, wird es in dieser Größe gerendert. Wenn es keine intrinsischen Dimensionen und keine intrinsische Proportion hat, wird es in der Größe des Maskenpositionierungsbereichs gerendert. Wenn es keine Dimensionen hat, aber eine Proportion, wird es gerendert, als wäre `contain` angegeben worden. Wenn das Bild eine intrinsische Dimension und eine Proportion hat, wird es in der Größe gerendert, die durch diese eine Dimension und die Proportion bestimmt wird. Wenn das Bild eine intrinsische Dimension hat, aber keine Proportion, wird es unter Verwendung der intrinsischen Dimension und der entsprechenden Dimension des Maskenpositionierungsbereichs gerendert.
- Wenn `mask-size` eine `auto` Komponente und eine Nicht-`auto` Komponente hat:
  - : Wenn das Bild eine intrinsische Proportion hat, dann render es mit der angegebenen Dimension und berechne die andere Dimension aus der angegebenen Dimension und der intrinsischen Proportion. Wenn das Bild keine intrinsische Proportion hat, verwenden Sie die angegebene Dimension für diese Dimension. Für die andere Dimension verwenden Sie die entsprechende intrinsische Dimension des Bildes, falls vorhanden. Wenn es keine solche intrinsische Dimension gibt, verwenden Sie die entsprechende Dimension des Maskenpositionierungsbereichs.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Maskengröße als Prozentsatz festlegen

{{EmbedGHLiveSample("css-examples/masking/mask-size.html", '100%', 700)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Abschneiden und Maskieren in CSS](https://css-tricks.com/clipping-masking-css/)
