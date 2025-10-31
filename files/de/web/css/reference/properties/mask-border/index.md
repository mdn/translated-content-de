---
title: mask-border
slug: Web/CSS/Reference/Properties/mask-border
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`mask-border`** [CSS](/de/docs/Web/CSS) [Kurzform-Eigenschaft](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) ermöglicht es Ihnen, eine Maske entlang des Randes eines Elements zu erstellen.

## Zusammengesetzte Eigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- [`mask-border-mode`](/de/docs/Web/CSS/Reference/Properties/mask-border-mode)
- [`mask-border-outset`](/de/docs/Web/CSS/Reference/Properties/mask-border-outset)
- [`mask-border-repeat`](/de/docs/Web/CSS/Reference/Properties/mask-border-repeat)
- [`mask-border-slice`](/de/docs/Web/CSS/Reference/Properties/mask-border-slice)
- [`mask-border-source`](/de/docs/Web/CSS/Reference/Properties/mask-border-source)
- [`mask-border-width`](/de/docs/Web/CSS/Reference/Properties/mask-border-width)

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
  - : Die Dimensionen zum Zerschneiden des Quellbilds in Bereiche. Es können bis zu vier Werte angegeben werden. Siehe {{cssxref("mask-border-slice")}}.
- `<'mask-border-width'>`
  - : Die Breite der Randmaske. Es können bis zu vier Werte angegeben werden. Siehe {{cssxref("mask-border-width")}}.
- `<'mask-border-outset'>`
  - : Der Abstand der Randmaske von der äußeren Kante des Elements. Es können bis zu vier Werte angegeben werden. Siehe {{cssxref("mask-border-outset")}}.
- `<'mask-border-repeat'>`
  - : Definiert, wie die Randbereiche des Quellbilds angepasst werden, um in die Dimensionen der Randmaske zu passen. Es können bis zu zwei Werte angegeben werden. Siehe {{cssxref("mask-border-repeat")}}.
- `<'mask-border-mode'>`
  - : Definiert, ob das Quellbild als Luminanzmaske oder Alphamaske behandelt wird. Siehe {{cssxref("mask-border-mode")}}.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einstellung eines bitmapbasierten Maskenrandes

In diesem Beispiel maskieren wir den Rand eines Elements mit einem Diamantmuster. Die Quelle für die Maske ist eine ".png"-Datei von 90 mal 90 Pixeln, mit drei Diamanten vertikal und horizontal:

<img src="https://mdn.github.io/shared-assets/images/examples/mask-border-diamonds.png" alt="Das Bild, das für die Maskenbeispiele auf dieser Seite verwendet wird. Die Maske ist ein transparenter Quadrat mit drei Reihen aus jeweils drei Diamanten. Die Diamanten sind in einem sehr hellen, fast weißen Grauton gehalten. Der mittlere Teil zwischen den Diamanten ist ebenfalls solid grau. Die Bereiche zwischen dem äußeren Rand der Diamanten und dem Rand des Bildes sind transparent." loading="lazy" style="background-color: black;">

Um die Größe eines einzelnen Diamanten abzugleichen, verwenden wir einen Wert von 90 geteilt durch 3, oder `30`, um das Bild in Eck- und Randbereiche zu zerschneiden. Ein Wiederholungswert von `round` sorgt dafür, dass die Maskenschnitte gleichmäßig passen, d.h. ohne Schneiden oder Lücken.

```html live-sample___mask-border-example
<div class="masked">
  This element is surrounded by a bitmap-based mask border! Pretty neat, isn't
  it?
</div>
```

```css-nolint live-sample___mask-border-example
.masked {
  width: 200px;
  background-color: lavender;
  border: 18px solid salmon;
  padding: 10px;

  -webkit-mask-box-image: url("https://mdn.github.io/shared-assets/images/examples/mask-border-diamonds.png")
    30 fill /          /* slice */
    20px /             /* width */
    1px                /* outset */
    round;             /* repeat */

  mask-border:
    url("https://mdn.github.io/shared-assets/images/examples/mask-border-diamonds.png")
    30 fill /        /* slice */
    20px /           /* width */
    1px              /* outset */
    round;           /* repeat */
}
```

{{EmbedLiveSample("mask-border-example", "", "170px")}}

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
