---
title: mask-border
slug: Web/CSS/mask-border
l10n:
  sourceCommit: 7a9f9baa25d9a7313bd6c62ef5ef585b28459c58
---

{{CSSRef}}

Die **`mask-border`** [CSS](/de/docs/Web/CSS) [Kurzschreibweise](/de/docs/Web/CSS/Shorthand_properties) ermöglicht es Ihnen, eine Maske entlang des Rands des Elements zu erstellen.

## Bestandteileigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

- [`mask-border-mode`](/de/docs/Web/CSS/mask-border-mode)
- [`mask-border-outset`](/de/docs/Web/CSS/mask-border-outset)
- [`mask-border-repeat`](/de/docs/Web/CSS/mask-border-repeat)
- [`mask-border-slice`](/de/docs/Web/CSS/mask-border-slice)
- [`mask-border-source`](/de/docs/Web/CSS/mask-border-source)
- [`mask-border-width`](/de/docs/Web/CSS/mask-border-width)

## Syntax

```css
/* source | slice */
mask-border: url("border-mask.png") 25;

/* source | slice | repeat */
mask-border: url("border-mask.png") 25 space;

/* source | slice | width */
mask-border: url("border-mask.png") 25 / 35px;

/* source | slice | width | outset | repeat | mode */
mask-border: url("border-mask.png") 25 / 35px / 12px space alpha;

/* Global values */
mask-border: inherit;
mask-border: initial;
mask-border: revert;
mask-border: revert-layer;
mask-border: unset;
```

### Werte

- `<'mask-border-source'>`
  - : Das Quellbild. Siehe {{cssxref("mask-border-source")}}.
- `<'mask-border-slice'>`
  - : Die Dimensionen zum Zuschneiden des Quellbildes in Bereiche. Bis zu vier Werte können angegeben werden. Siehe {{cssxref("mask-border-slice")}}.
- `<'mask-border-width'>`
  - : Die Breite der Maskengrenze. Bis zu vier Werte können angegeben werden. Siehe {{cssxref("mask-border-width")}}.
- `<'mask-border-outset'>`
  - : Der Abstand der Maskengrenze von der Außenkante des Elements. Bis zu vier Werte können angegeben werden. Siehe {{cssxref("mask-border-outset")}}.
- `<'mask-border-repeat'>`
  - : Definiert, wie die Randbereiche des Quellbildes angepasst werden, um den Dimensionen der Maskengrenze zu entsprechen. Bis zu zwei Werte können angegeben werden. Siehe {{cssxref("mask-border-repeat")}}.
- `<'mask-border-mode'>`
  - : Definiert, ob das Quellbild als Luminanzmaske oder als Alphamaske behandelt wird. Siehe {{cssxref("mask-border-mode")}}.

## Formale Definition

{{cssinfo}}

## Formaler Syntax

{{csssyntax}}

## Beispiele

### Festlegen einer bitmap-basierten Maskengrenze

In diesem Beispiel maskieren wir die Grenze eines Elements mit einem Diamantmuster. Die Quelle für die Maske ist eine ".png"-Datei mit 90 x 90 Pixeln, mit drei Diamanten in vertikaler und horizontaler Richtung:

![Das Bild, das für die Maskenbeispiele auf dieser Seite verwendet wird. Die Maske ist ein transparentes Quadrat mit drei Reihen von jeweils drei Diamanten. Die Diamanten sind in einem sehr hellen, fast weißen Grauton gehalten. Der mittlere Teil zwischen den Diamanten ist ebenfalls in einem soliden Grau gehalten. Die Bereiche zwischen der Außenseite der Diamanten und dem Rand des Bildes sind transparent.](mask-border-diamonds.png)

Um die Größe eines einzelnen Diamanten zu erreichen, verwenden wir einen Wert von 90 geteilt durch 3, also `30`, um das Bild in Eck- und Randbereiche zu unterteilen. Ein Wiederholungswert von `round` sorgt dafür, dass die Maskenstücke gleichmäßig passen, d. h. ohne Clipping oder Lücken.

{{EmbedGHLiveSample("css-examples/masking/mask-border.html", '100%', 800)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("mask-border-mode")}}
- {{cssxref("mask-border-outset")}}
- {{cssxref("mask-border-repeat")}}
- {{cssxref("mask-border-source")}}
- {{cssxref("mask-border-width")}}
