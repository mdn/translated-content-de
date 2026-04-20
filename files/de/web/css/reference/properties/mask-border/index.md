---
title: "`mask-border` CSS-Eigenschaft"
short-title: mask-border
slug: Web/CSS/Reference/Properties/mask-border
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`mask-border`** [CSS](/de/docs/Web/CSS) [Kurzform-Eigenschaft](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) ermöglicht es Ihnen, eine Maske entlang des Randes eines Elementes zu erstellen.

## Zusammengehörige Eigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

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
  - : Die Maße für das Zerschneiden des Quellbildes in Bereiche. Es können bis zu vier Werte angegeben werden. Siehe {{cssxref("mask-border-slice")}}.
- `<'mask-border-width'>`
  - : Die Breite der Randmaske. Es können bis zu vier Werte angegeben werden. Siehe {{cssxref("mask-border-width")}}.
- `<'mask-border-outset'>`
  - : Der Abstand der Randmaske von der Außenkante des Elements. Es können bis zu vier Werte angegeben werden. Siehe {{cssxref("mask-border-outset")}}.
- `<'mask-border-repeat'>`
  - : Definiert, wie die Randbereiche des Quellbildes angepasst werden, um die Dimensionen der Randmaske zu erfüllen. Es können bis zu zwei Werte angegeben werden. Siehe {{cssxref("mask-border-repeat")}}.
- `<'mask-border-mode'>`
  - : Definiert, ob das Quellbild als Luminanzmaske oder als Alphamaske behandelt wird. Siehe {{cssxref("mask-border-mode")}}.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen einer bitmap-basierten Randmaske

In diesem Beispiel werden wir die Umrandung eines Elements mit einem Diamantmuster maskieren. Die Quelle für die Maske ist eine ".png"-Datei mit 90 mal 90 Pixeln, mit drei vertikalen und horizontalen Diamanten:

<img src="https://mdn.github.io/shared-assets/images/examples/mask-border-diamonds.png" alt="Das für die Maskenbeispiele auf dieser Seite verwendete Bild. Die Maske ist ein transparenter Quadrat mit drei Reihen von je drei Diamanten. Die Diamanten sind in einem sehr hellen, fast weißen, Grauton. Der mittlere Teil zwischen den Diamanten ist ebenfalls einheitlich grau. Die Bereiche zwischen der Außenseite der Diamanten und dem Rand des Bildes sind transparent." loading="lazy" style="background-color: black;">

Um die Größe eines einzelnen Diamanten anzupassen, verwenden wir einen Wert von 90 geteilt durch 3, also `30`, um das Bild in Eck- und Randbereiche zu zerteilen. Ein Wiederholungswert von `round` sorgt dafür, dass die Maskenschnitte gleichmäßig passen, d.h. ohne Beschneidung oder Lücken.

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
