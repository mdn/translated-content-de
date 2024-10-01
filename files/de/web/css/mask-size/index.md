---
title: mask-size
slug: Web/CSS/mask-size
l10n:
  sourceCommit: 75326725db2daa924618e58ae31a43345c7a16dc
---

{{CSSRef}}

Die **`mask-size`** [CSS](/de/docs/Web/CSS)-Eigenschaft spezifiziert die Größen der Maskenbilder. Die Größe des Bildes kann vollständig oder teilweise beschränkt werden, um sein intrinsisches Verhältnis beizubehalten.

> [!NOTE]
> Wenn der Wert dieser Eigenschaft nicht in einer von einem Element angewendeten {{cssxref("mask")}} Kurzschreibeigenschaft gesetzt ist, wird der Wert dieser Eigenschaft durch die Kurzschreibeigenschaft auf seinen Initialwert zurückgesetzt.

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

Ein oder mehrere `<bg-size>`-Werte, durch Kommas getrennt.

Ein `<bg-size>` kann auf eine von drei Arten angegeben werden:

- Verwendung des Schlüsselworts `contain`
- Verwendung des Schlüsselworts `cover`
- Verwendung von Breiten- und Höhenwerten

Um eine Größe mit Breite und Höhe festzulegen, können ein oder zwei Werte angegeben werden:

- Wenn nur ein Wert angegeben wird, setzt er die Breite; die Höhe wird auf `auto` gesetzt.
- Wenn zwei Werte angegeben werden, setzt der erste die Breite und der zweite die Höhe.

Jeder Wert kann eine `<length>`, ein `<percentage>` oder `auto` sein.

### Werte

- `<length>`
  - : Ein {{cssxref("&lt;length&gt;")}}-Wert skaliert das Maskenbild auf die angegebene Länge in der entsprechenden Dimension. Negative Längen sind nicht erlaubt.
- `<percentage>`
  - : Ein {{cssxref("&lt;percentage&gt;")}}-Wert skaliert das Maskenbild in der entsprechenden Dimension auf den angegebenen Prozentsatz des Maskenpositionierungsbereichs, der durch den Wert von {{cssxref("mask-origin")}} bestimmt wird. Der Maskenpositionierungsbereich ist standardmäßig der Bereich, der den Inhalt der Box und ihr Padding umfasst; der Bereich kann auch nur auf den Inhalt oder auf den Bereich mit Rändern, Padding und Inhalt geändert werden. Negative Prozentsätze sind nicht erlaubt.
- `auto`
  - : Ein Schlüsselwort, das das Maskenbild in den entsprechenden Richtungen skaliert, um sein intrinsisches Verhältnis beizubehalten.
- `contain`
  - : Ein Schlüsselwort, das das Bild so groß wie möglich skaliert und das {{Glossary("aspect_ratio", "Seitenverhältnis")}} des Bildes beibehält (das Bild wird nicht verzerrt). Das Bild wird innerhalb des Containers _eingepasst_. Das Bild wird automatisch zentriert, es sei denn, es wird durch eine andere Eigenschaft wie {{cssxref("mask-position")}} überschrieben.
- `cover`
  - : Ein Schlüsselwort, das das Gegenteil von `contain` ist. Das Bild wird so groß wie möglich skaliert und das Seitenverhältnis des Bildes beibehalten (das Bild wird nicht verzerrt). Das Bild "bedeckt" die gesamte Breite oder Höhe des Containers. Wenn das Bild und der Container unterschiedliche Dimensionen haben, wird _das Bild beschnitten_, entweder links/rechts oder oben/unten.

Die Interpretation der möglichen Werte hängt von den intrinsischen Dimensionen (Breite und Höhe) und dem intrinsischen Verhältnis (Verhältnis von Breite und Höhe) des Bildes ab. Ein Bitmap-Bild hat immer intrinsische Dimensionen und ein intrinsisches Verhältnis. Ein Vektorgrafikbild kann sowohl intrinsische Dimensionen als auch ein intrinsisches Verhältnis haben. Es kann auch eine oder keine intrinsischen Dimensionen haben, in beiden Fällen kann es ein intrinsisches Verhältnis haben oder nicht. Verläufe werden als Bilder ohne intrinsische Dimensionen oder intrinsisches Verhältnis behandelt.

Die gerenderte Größe des Maskenbilds wird dann wie folgt berechnet:

- Wenn beide Komponenten von `mask-size` angegeben sind und nicht `auto` sind:
  - : Das Maskenbild wird in der angegebenen Größe gerendert.
- Wenn `mask-size` `contain` oder `cover` ist:
  - : Das Bild wird gerendert, indem sein intrinsisches Verhältnis in der größten Größe beibehalten wird, die im Maskenpositionierungsbereich enthalten ist oder diesen abdeckt. Wenn das Bild kein intrinsisches Verhältnis hat, wird es in der Größe des Maskenpositionierungsbereichs gerendert.
- Wenn `mask-size` `auto` oder `auto auto` ist:
  - : Wenn das Bild sowohl intrinsische Dimensionen hat, wird es in dieser Größe gerendert. Wenn es keine intrinsischen Dimensionen und kein intrinsisches Verhältnis hat, wird es in der Größe des Maskenpositionierungsbereichs gerendert. Wenn es keine Dimensionen, aber ein Verhältnis hat, wird es gerendert, als ob `contain` angegeben worden wäre. Wenn das Bild eine intrinsische Dimension und ein Verhältnis hat, wird es in der Größe gerendert, die durch diese Dimension und das Verhältnis bestimmt wird. Wenn das Bild eine intrinsische Dimension, aber kein Verhältnis hat, wird es mit der intrinsischen Dimension und der entsprechenden Dimension des Maskenpositionierungsbereichs gerendert.
- Wenn `mask-size` eine `auto`-Komponente und eine nicht-`auto`-Komponente hat:
  - : Wenn das Bild ein intrinsisches Verhältnis hat, dann wird es unter Verwendung der angegebenen Dimension gerendert und die andere Dimension wird aus der angegebenen Dimension und dem intrinsischen Verhältnis berechnet. Wenn das Bild kein intrinsisches Verhältnis hat, wird die angegebene Dimension für diese Dimension verwendet. Für die andere Dimension wird die entsprechende intrinsische Bilddimension verwendet, falls vorhanden. Wenn es keine solche intrinsische Dimension gibt, wird die entsprechende Dimension des Maskenpositionierungsbereichs verwendet.

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

- [Clipping und Masking in CSS](https://css-tricks.com/clipping-masking-css/)
