---
title: mask-border
slug: Web/CSS/Reference/Properties/mask-border
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

Die **`mask-border`** [CSS](/de/docs/Web/CSS) [Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) ermöglicht es Ihnen, eine Maske entlang des Randes eines Elements zu erstellen.

## Zusammengesetzte Eigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

- {{cssxref("mask-border-mode")}}
- {{cssxref("mask-border-outset")}}
- {{cssxref("mask-border-repeat")}}
- {{cssxref("mask-border-slice")}}
- {{cssxref("mask-border-source")}}
- {{cssxref("mask-border-width")}}

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
  - : Die Abmessungen für das Zerschneiden des Quellbildes in Bereiche. Es können bis zu vier Werte angegeben werden. Siehe {{cssxref("mask-border-slice")}}.
- `<'mask-border-width'>`
  - : Die Breite der Randmaske. Es können bis zu vier Werte angegeben werden. Siehe {{cssxref("mask-border-width")}}.
- `<'mask-border-outset'>`
  - : Der Abstand der Randmaske vom äußeren Rand des Elements. Es können bis zu vier Werte angegeben werden. Siehe {{cssxref("mask-border-outset")}}.
- `<'mask-border-repeat'>`
  - : Definiert, wie die Randbereiche des Quellbildes angepasst werden, um die Abmessungen der Randmaske zu erfüllen. Es können bis zu zwei Werte angegeben werden. Siehe {{cssxref("mask-border-repeat")}}.
- `<'mask-border-mode'>`
  - : Bestimmt, ob das Quellbild als Luminanz- oder Alphamaske behandelt wird. Siehe {{cssxref("mask-border-mode")}}.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Setzen einer bitmap-basierten Maskenbegrenzung

In diesem Beispiel maskieren wir den Rand eines Elements mit einem Rautenmuster. Die Quelle für die Maske ist eine ".png"-Datei mit 90 mal 90 Pixeln, die drei Rauten vertikal und horizontal enthält:

<img src="https://mdn.github.io/shared-assets/images/examples/mask-border-diamonds.png" alt="Das für die Maskenbeispiele auf dieser Seite verwendete Bild. Die Maske ist ein transparenter Quadrat mit drei Reihen zu je drei Rauten. Die Rauten sind in einem sehr hellen, fast weißen Grauton gehalten. Der Mittelteil zwischen den Rauten ist ebenfalls einheitlich grau. Die Bereiche zwischen den Außenkanten der Rauten und dem Rand des Bildes sind transparent." loading="lazy" style="background-color: black;">

Um die Größe einer einzelnen Raute anzupassen, verwenden wir einen Wert von 90 geteilt durch 3, also `30`, um das Bild in Ecken- und Randbereiche zu zerschneiden. Ein Wiederholungswert von `round` sorgt dafür, dass die Maskenschnitte gleichmäßig passen, d.h. ohne Abschneiden oder Lücken.

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
