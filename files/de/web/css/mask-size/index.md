---
title: mask-size
slug: Web/CSS/mask-size
l10n:
  sourceCommit: 75326725db2daa924618e58ae31a43345c7a16dc
---

{{CSSRef}}

Die **`mask-size`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Größen der Maskenbilder fest. Die Größe des Bildes kann vollständig oder teilweise eingeschränkt werden, um sein intrinsisches Verhältnis zu bewahren.

> [!NOTE]
> Wenn der Wert dieser Eigenschaft nicht in einer {{cssxref("mask")}} Kurzform-Eigenschaft festgelegt wird, die auf das Element nach der `mask-size` CSS-Eigenschaft angewendet wird, wird der Wert dieser Eigenschaft durch die Kurzform-Eigenschaft auf seinen Anfangswert zurückgesetzt.

## Syntax

```css
/* Schlüsselwörter-Syntax */
mask-size: cover;
mask-size: contain;

/* Ein-Wert-Syntax */
/* die Breite des Bildes (Höhe auf 'auto' gesetzt) */
mask-size: 50%;
mask-size: 3em;
mask-size: 12px;
mask-size: auto;

/* Zwei-Wert-Syntax */
/* erster Wert: Breite des Bildes, zweiter Wert: Höhe */
mask-size: 50% auto;
mask-size: 3em 25%;
mask-size: auto 6px;
mask-size: auto auto;

/* Mehrere Werte */
/* Nicht verwechseln mit mask-size: auto auto */
mask-size: auto, auto;
mask-size: 50%, 25%, 25%;
mask-size: 6px, auto, contain;

/* Globale Werte */
mask-size: inherit;
mask-size: initial;
mask-size: revert;
mask-size: revert-layer;
mask-size: unset;
```

Ein oder mehrere `<bg-size>` Werte, getrennt durch Kommas.

Ein `<bg-size>` kann auf eine von drei Arten angegeben werden:

- durch das Schlüsselwort `contain`
- durch das Schlüsselwort `cover`
- durch Breiten- und Höhenwerte

Um eine Größe mithilfe von Breite und Höhe anzugeben, können ein oder zwei Werte geliefert werden:

- Wenn nur ein Wert gegeben ist, setzt er die Breite, wobei die Höhe auf `auto` gesetzt wird.
- Wenn zwei Werte gegeben sind, setzt der erste die Breite und der zweite die Höhe.

Jeder Wert kann ein `<length>`, ein `<percentage>`, oder `auto` sein.

### Werte

- `<length>`
  - : Ein {{cssxref("&lt;length&gt;")}} Wert skaliert das Maskenbild auf die angegebene Länge in der entsprechenden Dimension. Negative Längen sind nicht erlaubt.
- `<percentage>`
  - : Ein {{cssxref("&lt;percentage&gt;")}} Wert skaliert das Maskenbild in der entsprechenden Dimension auf den angegebenen Prozentsatz des Maskenpositionierungsbereichs, der durch den Wert von {{cssxref("mask-origin")}} bestimmt wird. Der Maskenpositionierungsbereich ist standardmäßig der Bereich, der den Inhalt der Box und deren Auffüllung enthält; der Bereich kann auch so geändert werden, dass er nur den Inhalt oder den Bereich enthält, der Grenzen, Auffüllung und Inhalt umfasst. Negative Prozentsätze sind nicht erlaubt.
- `auto`
  - : Ein Schlüsselwort, das das Maskenbild in den entsprechenden Richtungen skaliert, um seine intrinsische Proportion zu bewahren.
- `contain`
  - : Ein Schlüsselwort, das das Bild so groß wie möglich skaliert und das {{glossary("aspect ratio")}} des Bildes bewahrt (das Bild wird nicht gequetscht). Das Bild ist innerhalb des Containers _letterboxed_. Das Bild wird automatisch zentriert, es sei denn, es wird durch eine andere Eigenschaft wie {{cssxref("mask-position")}} überschrieben.
- `cover`
  - : Ein Schlüsselwort, das das Gegenteil von `contain` ist. Es skaliert das Bild so groß wie möglich und bewahrt das Seitenverhältnis des Bildes (das Bild wird nicht gequetscht). Das Bild "bedeckt" die gesamte Breite oder Höhe des Containers. Wenn das Bild und der Container unterschiedliche Dimensionen haben, _wird das Bild abgeschnitten_ entweder links/rechts oder oben/unten.

Die Interpretation der möglichen Werte hängt von den intrinsischen Dimensionen (Breite und Höhe) und der intrinsischen Proportion (Verhältnis von Breite zu Höhe) des Bildes ab. Ein Bitmap-Bild hat immer intrinsische Dimensionen und eine intrinsische Proportion. Ein Vektorgrafik kann sowohl intrinsische Dimensionen haben, wodurch es auch eine intrinsische Proportion hat. Es kann auch eine oder keine intrinsischen Dimensionen haben und in beiden Fällen kann es auch sein, dass es keine intrinsische Proportion hat. Verläufe werden als Bilder ohne intrinsische Dimensionen oder intrinsische Proportion behandelt.

Die gerenderte Größe des Maskenbildes wird dann wie folgt berechnet:

- Wenn beide Komponenten von `mask-size` spezifiziert und nicht `auto` sind:
  - : Das Maskenbild wird in der angegebenen Größe dargestellt.
- Wenn die `mask-size` `contain` oder `cover` ist:
  - : Das Bild wird dargestellt, indem seine intrinsische Proportion bei der größten Größe innerhalb des Maskenpositionierungsbereichs bewahrt wird. Wenn das Bild keine intrinsische Proportion hat, wird es in der Größe des Maskenpositionierungsbereichs dargestellt.
- Wenn die `mask-size` `auto` oder `auto auto` ist:
  - : Wenn das Bild sowohl intrinsische Dimensionen hat, wird es in dieser Größe dargestellt. Wenn es keine intrinsischen Dimensionen und keine intrinsische Proportion hat, wird es in der Größe des Maskenpositionierungsbereichs dargestellt. Wenn es keine Dimensionen, aber eine Proportion hat, wird es dargestellt, als wäre `contain` angegeben worden. Wenn das Bild eine intrinsische Dimension und eine Proportion hat, wird es in der durch diese eine Dimension und die Proportion bestimmten Größe dargestellt. Wenn das Bild eine intrinsische Dimension, aber keine Proportion hat, wird es unter Verwendung der intrinsischen Dimension und der entsprechenden Dimension des Maskenpositionierungsbereichs dargestellt.
- Wenn `mask-size` eine `auto` Komponente und eine nicht-`auto` Komponente hat:
  - : Wenn das Bild eine intrinsische Proportion hat, rendern Sie es mit der angegebenen Dimension und berechnen die andere Dimension aus der angegebenen Dimension und der intrinsischen Proportion. Wenn das Bild keine intrinsische Proportion hat, verwenden Sie die angegebene Dimension für diese Dimension. Für die andere Dimension verwenden Sie die entsprechende intrinsische Dimension des Bildes, wenn es eine gibt. Wenn es keine solche intrinsische Dimension gibt, verwenden Sie die entsprechende Dimension des Maskenpositionierungsbereichs.

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

- [Clipping und Maskierung in CSS](https://css-tricks.com/clipping-masking-css/)
