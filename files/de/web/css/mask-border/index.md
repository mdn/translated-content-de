---
title: mask-border
slug: Web/CSS/mask-border
l10n:
  sourceCommit: 7a9f9baa25d9a7313bd6c62ef5ef585b28459c58
---

{{CSSRef}}

Die **`mask-border`**-[CSS](/de/docs/Web/CSS)-[Kurzschrift-Eigenschaft](/de/docs/Web/CSS/Shorthand_properties) ermöglicht es Ihnen, eine Maske entlang der Kante eines Elementrahmens zu erstellen.

## Bestandteile

Diese Eigenschaft ist eine Kurzschrift für die folgenden CSS-Eigenschaften:

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
  - : Die Dimensionen zum Zerschneiden des Quellbildes in Bereiche. Es können bis zu vier Werte angegeben werden. Siehe {{cssxref("mask-border-slice")}}.
- `<'mask-border-width'>`
  - : Die Breite der Maskenrahmen. Es können bis zu vier Werte angegeben werden. Siehe {{cssxref("mask-border-width")}}.
- `<'mask-border-outset'>`
  - : Der Abstand der Maskenrahmen von der Außenkante des Elements. Es können bis zu vier Werte angegeben werden. Siehe {{cssxref("mask-border-outset")}}.
- `<'mask-border-repeat'>`
  - : Bestimmt, wie die Randbereiche des Quellbildes angepasst werden, um die Dimensionen der Maskenrahmen zu erfüllen. Es können bis zu zwei Werte angegeben werden. Siehe {{cssxref("mask-border-repeat")}}.
- `<'mask-border-mode'>`
  - : Bestimmt, ob das Quellbild als Luminanzmaske oder Alphamaske behandelt wird. Siehe {{cssxref("mask-border-mode")}}.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Setzen einer bitmap-basierten Maskenrahmen

In diesem Beispiel maskieren wir den Rahmen eines Elements mit einem Rautenmuster. Die Quelle für die Maske ist eine ".png"-Datei mit 90 x 90 Pixeln, mit drei Rauten in vertikaler und horizontaler Anordnung:

![Das auf dieser Seite für die Masken-Beispiele verwendete Bild. Die Maske ist ein transparentes Quadrat mit drei Reihen von jeweils drei Rauten. Die Rauten sind in einem sehr hellen, fast weißen Grauton. Der Mittelteil zwischen den Rauten ist ebenfalls solide grau. Die Bereiche zwischen den Außenseiten der Rauten und dem Rand des Bildes sind transparent.](mask-border-diamonds.png)

Um die Größe einer einzelnen Raute zu treffen, verwenden wir einen Wert von 90 geteilt durch 3, also `30`, um das Bild in Kanten- und Randbereiche zu zerschneiden. Ein Wiederholungswert von `round` wird die Maskenschnitte gleichmäßig anpassen, d.h. ohne Zuschnitt oder Lücken.

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
