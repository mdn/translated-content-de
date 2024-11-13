---
title: mask-border
slug: Web/CSS/mask-border
l10n:
  sourceCommit: 759e230fb79ab6b333691262e089749d99104c25
---

{{CSSRef}}

Die **`mask-border`** [CSS](/de/docs/Web/CSS) [Kurzschreibweise](/de/docs/Web/CSS/Shorthand_properties) ermöglicht es Ihnen, eine Maske entlang der Kante des Randes eines Elements zu erstellen.

## Bestandteile der Eigenschaften

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
  - : Die Dimensionen zum Aufteilen des Quellbildes in Regionen. Es können bis zu vier Werte angegeben werden. Siehe {{cssxref("mask-border-slice")}}.
- `<'mask-border-width'>`
  - : Die Breite der Randmaske. Es können bis zu vier Werte angegeben werden. Siehe {{cssxref("mask-border-width")}}.
- `<'mask-border-outset'>`
  - : Der Abstand der Randmaske von der Außenseite des Elements. Es können bis zu vier Werte angegeben werden. Siehe {{cssxref("mask-border-outset")}}.
- `<'mask-border-repeat'>`
  - : Definiert, wie die Randregionen des Quellbildes an die Dimensionen der Randmaske angepasst werden. Es können bis zu zwei Werte angegeben werden. Siehe {{cssxref("mask-border-repeat")}}.
- `<'mask-border-mode'>`
  - : Legt fest, ob das Quellbild als Luminanzmaske oder Alphamaske behandelt wird. Siehe {{cssxref("mask-border-mode")}}.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Eine Bitmap-basierte Maskengrenze festlegen

In diesem Beispiel werden wir die Grenze eines Elements mit einem Rautenmuster maskieren. Die Quelle für die Maske ist eine ".png"-Datei mit 90 x 90 Pixeln, wobei drei Rauten vertikal und horizontal verlaufen:

<img src="https://mdn.github.io/shared-assets/images/examples/mask-border-diamonds.png" alt="Das Bild, das für die Maskenbeispiele auf dieser Seite verwendet wird. Die Maske ist ein transparentes Quadrat mit drei Reihen von jeweils drei Rauten. Die Rauten sind in einem sehr hellen, fast weißen, Grauton. Der mittlere Teil zwischen den Rauten ist ebenfalls durchgehend grau. Die Teile zwischen der Außenseite der Rauten und dem Rand des Bildes sind transparent." loading="lazy" style="background-color: black;">

Um die Größe einer einzelnen Raute anzupassen, verwenden wir einen Wert von 90 geteilt durch 3, also `30`, um das Bild in Eck- und Randregionen zu unterteilen. Ein Wiederholungswert von `round` sorgt dafür, dass die Maskenschnitte gleichmäßig passen, d.h. ohne Abschneiden oder Lücken.

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
