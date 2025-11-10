---
title: mask-border
slug: Web/CSS/Reference/Properties/mask-border
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`mask-border`** [CSS](/de/docs/Web/CSS) [Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) ermöglicht es Ihnen, eine Maske entlang des Randes eines Elements zu erstellen.

## Bestandskomponenten

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

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
  - : Die Quelldatei. Siehe {{cssxref("mask-border-source")}}.
- `<'mask-border-slice'>`
  - : Die Abmessungen zum Zuschneiden der Quelldatei in Regionen. Es können bis zu vier Werte angegeben werden. Siehe {{cssxref("mask-border-slice")}}.
- `<'mask-border-width'>`
  - : Die Breite der Randmaske. Es können bis zu vier Werte angegeben werden. Siehe {{cssxref("mask-border-width")}}.
- `<'mask-border-outset'>`
  - : Der Abstand der Randmaske von der Außenseite des Elements. Es können bis zu vier Werte angegeben werden. Siehe {{cssxref("mask-border-outset")}}.
- `<'mask-border-repeat'>`
  - : Definiert, wie die Kantenbereiche der Quelldatei angepasst werden, um die Abmessungen der Randmaske zu füllen. Es können bis zu zwei Werte angegeben werden. Siehe {{cssxref("mask-border-repeat")}}.
- `<'mask-border-mode'>`
  - : Definiert, ob die Quelldatei als Luminanz-Maske oder Alpha-Maske behandelt wird. Siehe {{cssxref("mask-border-mode")}}.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen einer bitmap-basierten Randmaske

In diesem Beispiel maskieren wir den Rand eines Elements mit einem Diamantmuster. Die Quelle für die Maske ist eine ".png"-Datei mit 90 mal 90 Pixel, mit drei Diamanten vertikal und horizontal:

<img src="https://mdn.github.io/shared-assets/images/examples/mask-border-diamonds.png" alt="Das Bild, das für die Maskenbeispiele auf dieser Seite verwendet wird. Die Maske ist ein transparentes Quadrat mit drei Reihen von je drei Diamanten. Die Diamanten sind in einem sehr hellen, fast weißen Grauton gehalten. Der mittlere Teil zwischen den Diamanten ist ebenfalls Vollton-Grau. Die Bereiche zwischen dem Äußeren der Diamanten und dem Rand des Bildes sind transparent." loading="lazy" style="background-color: black;">

Um die Größe eines einzelnen Diamanten anzupassen, verwenden wir einen Wert von 90 geteilt durch 3, also `30`, um das Bild in Eck- und Kantenregionen zu unterteilen. Ein Wiederholungswert von `round` sorgt dafür, dass die Maskenbereiche gleichmäßig passen, d.h. ohne Abschneiden oder Lücken.

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
