---
title: mask-border
slug: Web/CSS/mask-border
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`mask-border`** [CSS](/de/docs/Web/CSS) [Kurzschreibweise](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) ermöglicht es Ihnen, eine Maske entlang des Rands eines Elemente-Borderrandes zu erstellen.

## Bestandeigenschaften

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
  - : Die Dimensionen zum Schneiden des Quellbildes in Regionen. Es können bis zu vier Werte angegeben werden. Siehe {{cssxref("mask-border-slice")}}.
- `<'mask-border-width'>`
  - : Die Breite der Maskengrenze. Es können bis zu vier Werte angegeben werden. Siehe {{cssxref("mask-border-width")}}.
- `<'mask-border-outset'>`
  - : Der Abstand der Maskengrenze vom Außenrand des Elements. Es können bis zu vier Werte angegeben werden. Siehe {{cssxref("mask-border-outset")}}.
- `<'mask-border-repeat'>`
  - : Definiert, wie die Randregionen des Quellbildes angepasst werden, um den Dimensionen der Maskengrenze zu entsprechen. Es können bis zu zwei Werte angegeben werden. Siehe {{cssxref("mask-border-repeat")}}.
- `<'mask-border-mode'>`
  - : Definiert, ob das Quellbild als Luminanz- oder Alphamaske behandelt wird. Siehe {{cssxref("mask-border-mode")}}.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einstellen einer bitmap-basierten Maskengrenze

In diesem Beispiel maskieren wir den Rand eines Elements mit einem Rautenmuster. Die Quelle für die Maske ist eine ".png"-Datei mit 90 mal 90 Pixeln, mit drei Rauten vertikal und horizontal:

<img src="https://mdn.github.io/shared-assets/images/examples/mask-border-diamonds.png" alt="Das Bild, das für die Maskenbeispiele auf dieser Seite verwendet wird. Die Maske ist ein transparenter Quadrat mit drei Reihen von je drei Rauten. Die Rauten sind in einem sehr hellen, fast weißen Grauton. Der Mittelteil zwischen den Rauten ist auch in festem Grau. Die Teile zwischen der Außenseite der Rauten und dem Rand des Bildes sind transparent." loading="lazy" style="background-color: black;">

Um die Größe einer einzelnen Raute zu treffen, verwenden wir einen Wert von 90 geteilt durch 3 oder `30`, um das Bild in Eck- und Randregionen zu unterteilen. Ein Wiederholungswert von `round` sorgt dafür, dass die Maskenschnitte gleichmäßig ohne Zuschneidung oder Lücken passen.

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
