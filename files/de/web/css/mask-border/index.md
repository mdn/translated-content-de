---
title: mask-border
slug: Web/CSS/mask-border
l10n:
  sourceCommit: 7a9f9baa25d9a7313bd6c62ef5ef585b28459c58
---

{{CSSRef}}

Die **`mask-border`** [CSS](/de/docs/Web/CSS) [Kurzform-Eigenschaft](/de/docs/Web/CSS/Shorthand_properties) ermöglicht es Ihnen, eine Maske entlang des Rands des Elements zu erstellen.

## Bestandteil-Eigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

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
  - : Die Abmessungen zum Zerschneiden des Quellbildes in Bereiche. Bis zu vier Werte können angegeben werden. Siehe {{cssxref("mask-border-slice")}}.
- `<'mask-border-width'>`
  - : Die Breite der Randmaske. Bis zu vier Werte können angegeben werden. Siehe {{cssxref("mask-border-width")}}.
- `<'mask-border-outset'>`
  - : Der Abstand der Randmaske von der Außenkante des Elements. Bis zu vier Werte können angegeben werden. Siehe {{cssxref("mask-border-outset")}}.
- `<'mask-border-repeat'>`
  - : Definiert, wie die Randbereiche des Quellbildes angepasst werden, um den Abmessungen der Randmaske zu entsprechen. Bis zu zwei Werte können angegeben werden. Siehe {{cssxref("mask-border-repeat")}}.
- `<'mask-border-mode'>`
  - : Definiert, ob das Quellbild als Luminanzmaske oder Alphamaske behandelt wird. Siehe {{cssxref("mask-border-mode")}}.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen einer bitmapbasierten Maskengrenze

In diesem Beispiel maskieren wir den Rand eines Elements mit einem Diamantmuster. Die Quelle für die Maske ist eine ".png"-Datei mit 90 mal 90 Pixeln, wobei drei Diamanten vertikal und horizontal angeordnet sind:

![Das Bild, das für die Maskenbeispiele auf dieser Seite verwendet wird. Die Maske ist ein transparentes Quadrat mit drei Reihen von jeweils drei Diamanten. Die Diamanten sind in einem sehr hellen, fast weißen Grauton. Der mittlere Teil zwischen den Diamanten ist ebenfalls in festem Grau. Die Teile zwischen dem äußeren Rand der Diamanten und dem Bildrand sind transparent.](mask-border-diamonds.png)

Um die Größe eines einzelnen Diamanten anzupassen, verwenden wir einen Wert von 90 geteilt durch 3, also `30`, um das Bild in Eck- und Randbereiche zu zerschneiden. Ein Wiederholungswert von `round` sorgt dafür, dass die Maskenschnitte gleichmäßig passen, d.h. ohne Abschneiden oder Lücken.

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
